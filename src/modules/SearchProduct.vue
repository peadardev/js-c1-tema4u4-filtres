<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h3 class="card-title">Cercador</h3>
      <p class="card-text text-muted">Producte</p>
      <div class="input-group mb-2" style="max-width: 400px">
        <input v-model="searchText" type="text" class="form-control" placeholder="(paraula clau)" />
        <button class="btn btn-primary" type="button" @click="searchProducts">Cercar</button>
      </div>
      <small class="text-muted">Retorna una llista de productes </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

////////////
const searchText = ref('');
//const router = useRouter();

function searchProducts() {
  router.push({
    path: '/results',
    query: {
      word: searchText.value,
    },
  });
}
</script>
