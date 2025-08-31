<script setup lang="ts">
import type { Product } from '~/types/product';

const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" />
    <div class="card-content">
      <h2 class="card-title">{{ product.title }}</h2>
      <p class="card-description">{{ product.description }}</p>
      <div class="card-price">{{ product.price }} грн</div>
    </div>
  </div>
</template>
