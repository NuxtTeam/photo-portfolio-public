import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function generateThumbs() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  const thumbsDir = path.join(galleryDir, 'thumbs');

  await fs.mkdir(thumbsDir, { recursive: true });
  const files = await fs.readdir(galleryDir);

  const images = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  const result: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[] = [];

  for (const f of images) {
    const filePath = path.join(galleryDir, f);
    const thumbPath = path.join(thumbsDir, f);
    const metadata = await sharp(filePath).metadata();
    const width = metadata.autoOrient.width || 0;
    const height = metadata.autoOrient.height || 0;

    try {
      await fs.access(thumbPath);
    } catch {
      await sharp(filePath).rotate().resize({ width: 300 }).toFile(thumbPath);

      console.log(`✅ Created thumb: ${f}`);
    }

    result.push({
      largeURL: `/images/gallery/${f}`,
      thumbnailURL: `/images/gallery/thumbs/${f}`,
      width,
      height
    });
  }

  // зберігаємо JSON у public/
  const jsonPath = path.join(process.cwd(), 'public/images.json');
  await fs.writeFile(jsonPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log('📄 images.json generated');
}
