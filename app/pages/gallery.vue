<script lang="ts" setup>
const images = await useGallery();
</script>
<template>
  <div class="gallery main-wrapper">
    <h1>Галерея</h1>

    <PhotoGallery galleryID="main-gallery" :images="images" />
  </div>
</template>

<style></style>
