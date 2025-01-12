import express from 'express';
import ocr from './ocr';
import { basename, join } from 'node:path/posix';
import { unlinkSync } from 'fs';
import cors from 'cors';
import timeout from 'connect-timeout';
import { normalize } from './utils';
const app = express();
app.use(cors());
app.use(timeout('500s'));

app.get('/', async (req, res) => {
  const cache = req.query.cache === 'true';

  const page = parseInt(req.query.page as string);
  const id = req.query.id as string;
  const img_ext = req.query.img_ext as string;
  console.log('recv', req.query);

  const r = await ocr({
    ...(!req.query.pdf_path
      ? {
          img: `${id}/${page}.${img_ext}`,
        }
      : {
          pdf: req.query.pdf_path as string,
          page,
          cache_path: join(
            normalize(__dirname),
            `./ocr_cache/${id}/${page}.json`,
          ),
        }),
    cache,
    resized_shape: parseInt(req.query.resize as string),
    // det_model: 'db_mobilenet_v3',
    // det_backend: 'pytorch',
    // det_model: 'db_mobilenet_v3',
    // det_backend: 'pytorch',
  });
  console.log('done', req.query);
  res.json(r);
});

const port = 8099;
app.listen(port, () => {
  console.log(`OCR server listening on port ${port}`);
});
