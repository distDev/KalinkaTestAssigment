<template>
  <div v-if="store.apartment" class="apartment">
    <main class="apartment__main">
      <Swiper
        class="apartment__slider"
        :slides-per-view="1"
        :height="500"
        :effect="'creative'"
      >
        <SwiperSlide v-for="image in store.apartment.images" :key="image">
          <img :src="image" alt="" />
        </SwiperSlide>

        <SwiperNavigation />
      </Swiper>

      <div class="apartment__info">
        <div class="apartment__info-header">
          <h1 class="apartment__info-title">
            {{ store.apartment.title[store.lang] }}
          </h1>
          <p class="apartment__info-type">{{ store.apartment.type[0] }}</p>
          <p class="apartment__info-price">{{ store.apartment.price }} ₽</p>
        </div>

        <div
          v-html="store.apartment.description[store.lang]"
          class="apartment__info-desc"
        />
      </div>
    </main>

    <form class="apartment__contact-form">
      <div class="apartment__contact-form-header">
        <p class="apartment__contact-form-title">{{ store.apartment.title[store.lang] }}</p>
        <p class="apartment__contact-form-price">{{ store.apartment.price }} ₽</p>
      </div>

      <div class="apartment__contact-form-main">
        <p>Запись на просмотр</p>
        <input type="text" placeholder="ФИО">
        <input type="text" placeholder="+7">
        <input type="text" placeholder="E-mail">
        <button>Запланировать просмотр</button>
        <button class="button-outline">Скачать презентацию</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/main-store.js";
import SwiperNavigation from "~/components/apartments/SwiperNavigation.vue";

const route = useRoute();
const store = useMainStore();


await store.getApartment(route.params.id)

useHead({
  titleTemplate: () => {
    return store.apartment.title[store.lang];
  },
});
</script>

<style lang="scss">
.apartment {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  &__main {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__contact-form {
    position: sticky;
    top: 25px;
    width: 25%;
    padding: 15px;
    border-radius: 10px;
    background: white;

    &-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    &-price {
      font-size: 18px;
      font-weight: 600;
    }

    &-main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;

      input {
        width: 100%;
        height: 43px;
        padding: 0 10px;
        background: #f2f1f0;
        border-radius: 10px;
        border: none;
      }

      button {
        height: 51px;
        background: #1E1E1E;
        border-radius: 8px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: white;
        cursor: pointer;
      }

      .button-outline {
        color: black;
        border: 1px solid #1E1E1E;
        background: none;
      }
    }
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

  &__info {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-header {
      display: flex;
      flex-direction: column;
    }

    &-title {
      font-size: 26px;
      font-weight: 600;
    }

    &-type {
      color: #9ea9b7;
    }

    &-price {
      font-size: 20px;
      font-weight: 600;
      margin-top: 20px;
    }

    &-desc {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: normal;
    gap: 20px;

    &__main {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    &__contact-form {
      width: 100%;
    }

    &__slider {
      width: 100%;
      height: 300px;
    }

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      &-title {
        font-size: 18px;
        font-weight: 600;
      }

      &-price {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>
