// https://nuxt.com/docs/api/configuration/nuxt-config
import generateThumbs from './app/build-hooks/generate-thumbs';
import generateWorkJson from './app/build-hooks/generate-work';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  hooks: {
    'app:resolve': async () => {
      console.log('🔨 Генерація превʼю та JSON...');
      await generateThumbs();
      await generateWorkJson();
    }
  },

  modules: ['@nuxt/image'],

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  }
});
