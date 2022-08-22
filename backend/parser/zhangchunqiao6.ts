import { join } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
  TagType,
} from '../../types';
import { merge_to_lines } from './utils';

const opt = {};

type PartRaw = { page: number; x: number; merge_up?: boolean } & ContentPartRaw;
function extract_parts(ocr: OCRResult[], page: number): PartRaw[] {
  const res: PartRaw[] = [];
  for (let i = 0, last_x = 0; i < ocr.length; ++i) {
    let text = ocr[i].text.trim();
    const x = ocr[i].box[0][0];
    res.push({
      page,
      text,
      x,
      type:
        (i !== 0 && x - last_x > 100 && /^[一二三四五]/.test(text)) ||
        (/^[一二三四五]、/.test(text) &&
          !/^[一二三四五]、[一二三四五]、/.test(text))
          ? ContentType.subtitle
          : ContentType.paragraph,
    });
    last_x = x;
  }
  const paragraphs = res.filter((i) => i.type === ContentType.paragraph);
  for (let i = 0; i < paragraphs.length; ++i) {
    const last = paragraphs[i - 1];
    const next = paragraphs[i + 1];
    const t = paragraphs[i];
    if (page === 3 && i == 0) {
      t.merge_up = false;
      continue;
    }
    if (page == 13 && i == paragraphs.length - 1) {
      t.merge_up = false;
      continue;
    }
    if (last && last.x < t.x && t.x - last.x > 30) {
      t.merge_up = false;
    } else if (next && next.x < t.x && t.x - next.x > 30) {
      t.merge_up = false;
    // } else if (last && /[:：]$/.test(last.text)) {
    //   t.merge_up = false;
    } else {
      t.merge_up = true;
    }
  }
  return res;
}

function merge_parts(parts: PartRaw[]): ContentPart[] {
  const res: ContentPart[] = [];
  for (let i = 0; i < parts.length; ++i) {
    if (
      parts[i].merge_up &&
      res[res.length - 1].type === parts[i].type &&
      !/[:：]$/.test(res[res.length - 1].text)
    ) {
      res[res.length - 1].text += parts[i].text;
    } else {
      res.push({
        type: parts[i].type,
        text: parts[i].text,
      });
    }
  }
  return res;
}

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const parts: PartRaw[] = [];
  for (
    let i = parser_opt.page_limits[0][0];
    i <= parser_opt.page_limits[0][1];
    ++i
  ) {
    const path = imgPath.split('/public/books/')[1] + '/' + i + '.jpg';
    const ocrResults = merge_to_lines(
      (await ocr({ img: path })).filter(
        (i) => {

          const x = i.text.trim();
          return x.length > 1 && !/^[-\w\d—一'“"\.·，]+$/.test(i.text.trim());
          // 去页码
        }
      ),
      30
    ).sort((a, b) => a.box[0][1] - b.box[0][1]);

    // 去掉标题和日期
    parts.push(...extract_parts(i === 1 ? ocrResults.slice(3) : ocrResults, i));
  }

  const articles: PartRaw[][] = [];
  parts.unshift({
    text: '张春桥同志在上海市革命委员会报告会上的讲话',
    type: ContentType.title,
    x: 0,
    page: 1,
  });
  for (let i = 0; i < parts.length; ++i) {
    if (parts[i].type === ContentType.title) {
      articles.push([]);
      while (parts[i].type === ContentType.title) {
        articles[articles.length - 1].push(parts[i]);
        ++i;
      }
      --i;
      continue;
    } else {
      articles[articles.length - 1].push(parts[i]);
    }
  }

  const res: ParserResult[] = articles.map((article) => {
    const merged_parts = merge_parts(article);
    const title = merged_parts[0].text;
    merged_parts[0].text = title;
    return {
      title: '张春桥在上海市革命委员会报告会上的讲话',
      alias: title,
      parts: merged_parts,
      authors: ['张春桥'],
      dates: [
        {
          year: 1967,
          month: 10,
          day: 16,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: article[0].page,
      page_end: article[article.length - 1].page,
    };
  });
  return res;
}
