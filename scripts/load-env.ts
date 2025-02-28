import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import path from 'path';

const env = config({
  path: path.resolve(process.cwd(), '.env'),
});

expand(env); 