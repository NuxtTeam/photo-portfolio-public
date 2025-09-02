<script lang="ts" setup>
interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
}
const images = ref<Image[]>([]);
onMounted(async () => {
  images.value.push(...(await fetch('/images.json').then((res) => res.json())));
});
</script>
<template>
  <div class="gallery main-wrapper">
    <h1>Галерея</h1>
    <ClientOnly>
      <PhotoGallery galleryID="main-gallery" :images="images" />
    </ClientOnly>
  </div>
</template>

<style></style>
