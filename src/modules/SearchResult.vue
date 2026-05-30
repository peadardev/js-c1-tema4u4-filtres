<template>
  <section class="container py-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 mb-0">Llista de productes</h1>
    </header>
    <RouterLink to="/" class="text-decoration-underline">Torna a la pàgina de cerca</RouterLink>
    <br /><br />
    <div class="fs-5 fw-semibold">
      <p>Resultat ({{ numFound }})</p>
    </div>
    <div v-if="products.length > 0" class="list-group">
      <div
        v-for="product in foundProducts"
        :key="product.id"
        :to="{ name: 'search-result/query' }"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span>
          <div>
            <strong>
              {{ product.name }}
            </strong>
          </div>
        </span>
        <span class="text-muted small">ID: {{ product.id }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { products } from '@/assets/llista.ts';
const route = useRoute();

const word = ref(route.query.word as string);
console.log('word: ' + word.value);
const foundProducts = computed(() => {
  if (!word.value) return [];
  return products.filter((p) => p.name.toLowerCase().includes(word.value.toLowerCase()));
});
const numFound = computed(() => foundProducts.value.length);
</script>
