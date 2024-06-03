<template>
  <div class="container">
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
