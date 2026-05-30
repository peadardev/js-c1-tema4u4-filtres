<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style scoped>
.menu {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: beige;
  border-bottom: 1px solid gray;
}

.menu a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}
.menu a.router-link-active {
  color: blue;
  font-weight: bold;
}
</style>
