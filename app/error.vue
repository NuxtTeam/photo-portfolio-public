<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});
</script>

<template>
  <div class="error-page">
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.message }}</p>
    <NuxtLink to="/" class="button">
      <span class="button-text">Go back home</span>
    </NuxtLink>
  </div>
</template>
<style>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.error-page h1 {
  font-size: 7rem;
  margin-bottom: 1rem;
}

.masked-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: transparent;
  background-image: url('https://images.unsplash.com/photo-1756705533779-105bf34e0722?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: 200%; /* Enlarged for smooth animation */
  background-position: 0 50%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate-background 5s infinite alternate linear;
  transition: all 0.3s ease;
}
.masked-text:hover {
  scale: 1.1;
  animation: animate-background 1s infinite alternate linear;
}

@keyframes animate-background {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
