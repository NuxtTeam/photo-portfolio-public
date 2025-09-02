import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function generateWorkJson() {
  const workDir = path.join(process.cwd(), 'public/images/work');

  // беремо тільки папки
  const entries = await fs.readdir(workDir, { withFileTypes: true });
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  // результат тепер буде обʼєкт з ключами-папками
  const result: Record<
    string,
    { url: string; width: number; height: number }[]
  > = {};

  for (const folder of folders) {
    const folderPath = path.join(workDir, folder);
    const files = await fs.readdir(folderPath);

    const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

    result[folder] = [];

    for (const f of images) {
      const filePath = path.join(folderPath, f);
      const metadata = await sharp(filePath).metadata();

      const width = metadata.width || 0;
      const height = metadata.height || 0;

      result[folder].push({
        url: `/images/work/${folder}/${f}`,
        width,
        height
      });
    }
  }

  const jsonPath = path.join(process.cwd(), 'public/work.json');
  await fs.writeFile(jsonPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log('📄 work.json generated');
}
