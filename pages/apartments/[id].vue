<template>
  <div v-if="apartment" class="apartment">
    <main class="apartment__main">
      <Swiper
        class="apartment__slider"
        :slides-per-view="1"
        :height="500"
        :effect="'creative'"
      >
        <SwiperSlide v-for="image in apartment.images" :key="image">
          <img :src="image" alt="" />
        </SwiperSlide>

        <SwiperNavigation />
      </Swiper>

      <div class="apartment__desc">
        <h1>{{ apartment.title[store.lang] }}</h1>
        <p>{{ apartment.price }}</p>
        <div v-html="apartment.description[store.lang]"></div>
      </div>
    </main>

    <form class="apartment__contact-form"></form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ApartmentsApi } from "~/api/apartments.api.js";
import { useMainStore } from "~/store/main-store.js";
import SwiperNavigation from "~/components/apartments/SwiperNavigation.vue";

const apartment = ref();

const route = useRoute();
const store = useMainStore();


const getApartment = async () => {
  apartment.value = await ApartmentsApi.getApartment(route.params.id);
};

await useAsyncData(() => getApartment());
</script>

<style lang="scss">
.apartment {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  &__main {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__contact-form {
    width: 20%;
    height: 500px;
    background: white;
  }

  &__slider {
    width: 100%;
    height: 500px;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__desc {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}


</style>
