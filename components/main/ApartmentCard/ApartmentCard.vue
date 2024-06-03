<template>
  <div class="card">
    <ApartmentCardImage />

    <div class="card__content">
      <h3>{{ title }}</h3>
      <div v-html="description.slice(0, 200)"></div>
      <p>{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default { name: "ApartmentCard" };
</script>

<script setup>
import ApartmentCardImage from "~/components/main/ApartmentCard/ApartmentCardImage.vue";

defineProps({
  title: String,
  description: String,
  type: Array,
  price: Number,
  images: Array,
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 250px;
  display: flex;
  padding: 15px;
  background: white;
  border-radius: 10px;
  gap: 15px;
}
</style>
