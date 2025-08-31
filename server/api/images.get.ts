import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default defineEventHandler(async () => {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  const thumbsDir = path.join(galleryDir, 'thumbs');

  // переконуємось, що папка для прев’ю існує
  await fs.mkdir(thumbsDir, { recursive: true });

  const files = await fs.readdir(galleryDir);

  const images = await Promise.all(
    files
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map(async (f) => {
        const filePath = path.join(galleryDir, f);
        const thumbPath = path.join(thumbsDir, f);

        const metadata = await sharp(filePath).metadata();
        // console.log('metadata >>>', metadata);
        const width = metadata.autoOrient.width || 0;
        const height = metadata.autoOrient.height || 0;

        try {
          await fs.access(thumbPath);
        } catch {
          await sharp(filePath)
            .rotate()
            // .keepExif()
            .resize({ width: 300 }) // ширина прев’ю 300px
            .toFile(thumbPath);
        }

        return {
          largeURL: `/images/gallery/${f}`,
          thumbnailURL: `/images/gallery/thumbs/${f}`,
          width,
          height
        };
      })
  );

  return images;
});
