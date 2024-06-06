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
  padding: 0 0 80px 0;

  @media (max-width: 575px) {
    width: 100%;
    padding: 0px 15px 40px 15px;
  }
}
</style>
