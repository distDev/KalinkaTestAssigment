<template>
  <div class="card-image">
    <img :src="images[0]" alt="">
  </div>
</template>

<script>
export default { name: "ApartmentCardImage" };
</script>

<script setup>
 defineProps({
  images: Array
})
</script>

<style scoped lang="scss">
.card-image {
  min-width: 320px;
  width: 320px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #dcdcdc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 575px) {
    min-width: 100%;
    width: 100%;
    height: 120px;
  }
}
</style>
