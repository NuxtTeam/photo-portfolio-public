import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  const jsonPath = path.join(process.cwd(), 'public/images.json');
  const content = await fs.readFile(jsonPath, 'utf-8');
  return JSON.parse(content);
});
