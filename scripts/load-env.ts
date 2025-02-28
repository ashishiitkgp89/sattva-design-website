import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = config({
  path: resolve(__dirname, '../.env'),
});

expand(env);

export {}; 