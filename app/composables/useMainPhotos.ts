export const useMainPhotos = () => {
  const images = import.meta.glob(
    '~/assets/images/main_page/*.{jpg,png,jpeg}',
    {
      eager: true,
      import: 'default'
    }
  );

  return Object.values(images);
};
