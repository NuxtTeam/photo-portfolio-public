import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function generateWorkJson() {
  const workDir = path.join(process.cwd(), 'public/images/work');

  const entries = await fs.readdir(workDir, { withFileTypes: true });
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const result: {
    slug: string;
    path: string;
    images: PortfolioImage[];
  }[] = [];

  for (const folder of folders) {
    const folderPath = path.join(workDir, folder);
    const files = await fs.readdir(folderPath);
    const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

    const imageData: PortfolioImage[] = [];

    for (const f of images) {
      const filePath = path.join(folderPath, f);

      // 100% без помилок
      let metadata;
      try {
        metadata = await sharp(filePath).metadata();
      } catch (err) {
        console.warn(`⚠️ Cannot read metadata for ${filePath}:`, err);
        metadata = { width: 0, height: 0 };
      }

      // Завжди додаємо ключ aspectRatio
      const width = metadata.width || 0;
      const height = metadata.height || 0;

      imageData.push({
        url: `/images/work/${folder}/${f}`,
        width,
        height,
        aspectRatio: height ? `${width} / ${height}` : '0 / 0'
      });
    }

    result.push({
      slug: folder,
      path: `/work/${folder}`,
      images: imageData
    });
  }

  const jsonPath = path.join(process.cwd(), `public/work.json`);

  // Жорстко видаляємо старий
  try {
    await fs.rm(jsonPath);
  } catch {}

  // Пишемо новий
  await fs.writeFile(jsonPath, JSON.stringify(result, null, 2), 'utf-8');

  console.log('📄 work0.json regenerated');
}
