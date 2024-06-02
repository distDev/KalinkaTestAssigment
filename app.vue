<template>
  <div class="container">
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
  import Header from '@/components/layout/Header.vue'
</script>

<style>
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
