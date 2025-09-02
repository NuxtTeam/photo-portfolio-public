// https://nuxt.com/docs/api/configuration/nuxt-config
import generateThumbs from './app/build-hooks/generate-thumbs';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  hooks: {
    'app:resolve': async () => {
      console.log('🔨 Генерація превʼю та JSON...');
      await generateThumbs();
    }
  }
});
