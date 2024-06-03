<template>
  <div class="card-image"></div>
</template>

<script>
export default { name: "ApartmentCardImage" };
</script>

<script setup>
const props = defineProps({
  images: Array
})
</script>

<style scoped lang="scss">
.card-image {
  min-width: 270px;
  width: 270px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #e86d6d;
}
</style>
