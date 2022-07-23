import * as jinghuo_parser from './parser/jinghuo_parser';
import { AppDataSource } from './data-source';
import books from './books';
import { join } from 'path';

import Article from './entity/article';
import Author from './entity/author';
import Date from './entity/date';
import Type from './entity/type';
import Content from './entity/content';
import Comment from './entity/comment';
import Publication from './entity/publication';
import Tag from './entity/tag';
import { createHmac } from 'node:crypto';
import Page from './entity/page';
import { get_types } from './classifier';

function hash(s: string[]) {
  return createHmac('sha256', s.join('^')).digest('hex').substr(0, 10);
}

AppDataSource.initialize()
  .then(async () => {
    try {
      for (const entity of await AppDataSource.entityMetadatas) {
        const repository = await AppDataSource.getRepository(entity.name);
        await repository.query(`SET FOREIGN_KEY_CHECKS=OFF`);
        await repository.query(`DELETE FROM ${entity.tableName};`);
        await repository.query(`SET FOREIGN_KEY_CHECKS=ON`);
      }
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }

    for (const book of books) {
      const res = await book.parser(book.path, book.parser_option);

      const publication_id = book.entity.id;
      await AppDataSource.manager.upsert(Publication, book.entity, ['id']);

      for (const r of res) {
        const article_id = hash([
          r.title,
          JSON.stringify(r.dates),
          JSON.stringify(r.is_range_date),
        ]);
        await AppDataSource.manager.upsert(
          Article,
          {
            id: article_id,
            title: r.title,
            is_range_date: r.is_range_date,
            origin: r.origin || '',
          },
          ['id'],
        );

        await AppDataSource.createQueryBuilder()
          .relation(Article, 'publications')
          .of(article_id)
          .add(publication_id)
          .catch((e) => {});

        for (const author_name of r.authors) {
          const author_id = hash([author_name]);
          await AppDataSource.manager.upsert(
            Author,
            {
              id: author_id,
              name: author_name,
            },
            ['id'],
          );
          await AppDataSource.createQueryBuilder()
            .relation(Article, 'authors')
            .of(article_id)
            .add(author_id)
            .catch((e) => {});
        }

        for (const date of r.dates) {
          await AppDataSource.manager.upsert(
            Date,
            {
              id: hash([article_id, JSON.stringify(date)]),
              year: date.year,
              month: date.month,
              day: date.day,
              articleId: article_id,
            },
            ['id'],
          );
        }

        const types = await get_types(r);
        for (const t of types) {
          const id = hash([article_id, t]);
          await AppDataSource.manager.upsert(
            Type,
            {
              id,
              type: t,
            },
            ['id'],
          );
          await AppDataSource.createQueryBuilder()
            .relation(Article, 'types')
            .of(article_id)
            .add(id)
            .catch((e) => {});
        }

        // TODO
        const tags = [];
        for (const t of tags) {
          const id = hash([article_id, t]);
          await AppDataSource.manager.upsert(
            Tag,
            {
              id,
              name: t,
            },
            ['id'],
          );
          await AppDataSource.createQueryBuilder()
            .relation(Article, 'tags')
            .of(article_id)
            .add(id)
            .catch((e) => {});
        }

        for (let idx = 0; idx < r.parts.length; ++idx) {
          const part = r.parts[idx];
          await AppDataSource.manager.upsert(
            Content,
            {
              id: hash([article_id, publication_id, idx.toString()]),
              index: idx,
              text: part.text,
              type: part.type,
              publicationId: publication_id,
              articleId: article_id,
            },
            ['id'],
          );
        }

        for (let i = r.comments.length - 1; i >= 0; --i) {
          const pivot = r.comment_pivots.find((x) => x.index === i + 1);
          await AppDataSource.manager.upsert(
            Comment,
            {
              id: hash([article_id, publication_id, (i + 1).toString()]),
              text: r.comments[i],
              index: i + 1,
              part_index: pivot ? pivot.part_idx : -99,
              offset: pivot ? pivot.offset : -99,
              publicationId: publication_id,
              articleId: article_id,
            },
            ['id'],
          );
        }
        if (r.description) {
          await AppDataSource.manager.upsert(
            Comment,
            {
              id: hash([article_id, publication_id, (-1).toString()]),
              text: r.description,
              index: -1,
              part_index: -1,
              offset: -1,
              publicationId: publication_id,
              articleId: article_id,
            },
            ['id'],
          );
        }

        await AppDataSource.manager.upsert(
          Page,
          {
            id: hash([
              article_id,
              publication_id,
              r.page_start.toString(),
              r.page_end.toString(),
            ]),
            start: r.page_start,
            end: r.page_end,
            publicationId: publication_id,
            articleId: article_id,
          },
          ['id'],
        );
      }
    }
    console.log('done');
    process.exit();
  })
  .catch((error) => console.log(error));