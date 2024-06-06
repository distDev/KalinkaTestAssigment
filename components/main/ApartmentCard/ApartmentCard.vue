<template>
  <NuxtLink :to="`/apartments/${id}`" class="card">
    <div class="card__image">
      <img :src="images[0]" alt="Апартаменты">
    </div>

    <div class="card__content">
      <div class="card__content-header">
        <h3>{{ title }}</h3>
        <p>{{ type[0] }}</p>
      </div>

      <div
        class="card__content-description"
        v-html="description.slice(0, 300)"
      />

      <p class="card__content-price">{{ price }} ₽</p>
    </div>
  </NuxtLink>
</template>

<script>
export default { name: "ApartmentCard" };
</script>

<script setup>

defineProps({
  title: String,
  description: String,
  type: Array,
  price: Number,
  images: Array,
  id: Number,
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

  &__image {
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
  }

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
        color: #9ea9b7;
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

  @media (max-width: 575px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 8px;

    &__image {
      min-width: 100%;
      width: 100%;
      height: 120px;
    }

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
          color: #9ea9b7;
        }
      }

      &-description {
        display: none;
      }

      &-price {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
