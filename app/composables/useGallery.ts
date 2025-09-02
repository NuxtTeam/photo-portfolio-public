interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

export const useGallery = async () => {
  const imagesModules = import.meta.glob(
    '~/assets/images/gallery/*.{jpg,png,jpeg}',
    {
      eager: true,
      import: 'default'
    }
  );

  const imagesArray = Object.values(imagesModules) as string[];

  const getImageSize = (
    src: string
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        resolve({ width: 0, height: 0 }); // на випадок помилки
      };
    });
  };

  const formattedImages: Image[] = await Promise.all(
    imagesArray.map(async (img) => {
      const { width, height } = await getImageSize(img);
      return {
        largeURL: img,
        thumbnailURL: img, // якщо хочеш окремо прев’ю, можна імпортувати thumbs
        width,
        height
      };
    })
  );

  return formattedImages;
};
