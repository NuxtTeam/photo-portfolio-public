import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function generateWorkJson() {
  const workDir = path.join(process.cwd(), 'public/images/work');
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');

  // беремо тільки папки
  const entries = await fs.readdir(workDir, { withFileTypes: true });
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  // результат тепер масив робіт
  const result: {
    slug: string; // folder name
    path: string; // /work/FOLDER_NAME
    images: { url: string; width: number; height: number }[];
  }[] = [];

  // очищаємо gallery перед новою генерацією
  await fs.rm(galleryDir, { recursive: true, force: true });
  await fs.mkdir(galleryDir, { recursive: true });

  for (const folder of folders) {
    const folderPath = path.join(workDir, folder);
    const files = await fs.readdir(folderPath);

    const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

    const imageData: { url: string; width: number; height: number }[] = [];

    for (const f of images) {
      const filePath = path.join(folderPath, f);
      const metadata = await sharp(filePath).metadata();

      imageData.push({
        url: `/images/work/${folder}/${f}`,
        width: metadata.width || 0,
        height: metadata.height || 0
      });

      // новий хук — копіюємо файл у gallery
      const destFile = path.join(galleryDir, `${folder}-${f}`);
      await fs.copyFile(filePath, destFile);
    }

    result.push({
      slug: folder,
      path: `/work/${folder}`,
      images: imageData
    });
  }

  const jsonPath = path.join(process.cwd(), 'public/work0.json');
  await fs.writeFile(jsonPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log('📄 work0.json generated');
  console.log('🖼️ gallery updated');
}
