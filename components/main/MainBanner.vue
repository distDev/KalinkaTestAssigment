<template>
  <div class="main-banner"></div>
</template>

<script lang="ts">
export default {name: "MainBanner"}
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main-banner {
  width: 100%;
  height: 500px;
  background: #000;
  border-radius: 10px;

  @media (max-width: 575px) {
    height: 300px;
  }
}
</style>
