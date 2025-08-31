<script lang="ts" setup>
const { data: images } = await useFetch('/api/images');
</script>
<template>
  <div class="gallery main-wrapper">
    <h1>Галерея</h1>

    <PhotoGallery galleryID="main-gallery" :images="images" />
  </div>
</template>

<style></style>
