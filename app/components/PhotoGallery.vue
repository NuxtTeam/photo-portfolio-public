<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Define props with TypeScript interface for type safety
interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}

const props = defineProps<{
  galleryID: string;
  images: Image[];
}>();

// Create a reactive reference for the lightbox instance
const lightbox = ref<PhotoSwipeLightbox | null>(null);

// Initialize the lightbox when the component is mounted
onMounted(() => {
  lightbox.value = new PhotoSwipeLightbox({
    gallery: '#' + props.galleryID,
    children: 'a',
    wheelToZoom: true,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
    preload: [1, 4],
    pswpModule: () => import('photoswipe'),
    errorMsg: 'The photo cannot be loaded'
  });
  lightbox.value.init();
});

// Clean up the lightbox when the component is unmounted
onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy();
    lightbox.value = null;
  }
});
</script>

<template>
  <div :id="galleryID" class="gallery-grid">
    <a
      v-for="(image, key) in images"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="gallery-item"
    >
      <img :src="image.thumbnailURL" alt="" />
    </a>
  </div>
</template>
<style>
.gallery {
  padding: 20px;
}

.gallery h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.gallery-item {
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
