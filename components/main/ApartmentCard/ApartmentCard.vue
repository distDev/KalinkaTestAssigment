<template>
  <NuxtLink :to="`/apartments/${id}`" class="card">
    <ApartmentCardImage :images="images" />

    <div class="card__content">
      <div class="card__content-header">
        <h3>{{ title }}</h3>
        <p>{{ type[0] }}</p>
      </div>
      <div v-html="description.slice(0, 300)"></div>
      <p class="card__content-price">{{ price }} ₽</p>
    </div>
  </NuxtLink>
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
  id: String,
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
  display: flex;
  padding: 15px;
  background: white;
  border-radius: 10px;
  gap: 15px;
  text-decoration: none;
  color: black;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-header {
      h3 {
        font-size: 18px;
        font-weight: 600;
      }

      p {
        color: #9EA9B7;
      }
    }



    &-price {
      font-size: 18px;
      font-weight: 600;
    }


  }

  &:hover {
    box-shadow: 0 0 27px -6px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }
}
</style>
