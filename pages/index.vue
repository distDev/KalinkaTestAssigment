<template>
  <main class="main">
    <MainBanner />

    <section class="main__content" ref="mainContentRef">
      <Filters @search="(filters) => handleSearch(filters)" />
      <Apartments />
    </section>
  </main>
</template>

<script setup>
import MainBanner from "~/components/main/MainBanner.vue";
import Filters from "~/components/main/Filters.vue";
import Apartments from "~/components/main/Apartments.vue";
import AdBanner from "~/components/main/AdBanner.vue";
import { useMainStore } from "~/store/main-store.js";

const mainContentRef = ref(null);

const store = useMainStore();

// вынес функцию в родительский элемент, чтобы при поиске происходил scroll наверх
const handleSearch = async (filters) => {
  await store.searchApartments(filters);
  if (mainContentRef.value) {
    mainContentRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

useHead({
  title: 'Агентство тестовой недвижимости - Kalinka тестовое',
  meta: [
    { name: 'description', content: 'Какое то описание' }
  ],
})
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 35px;

  &__content {
    position: relative;
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: start;

    @media (max-width: 575px) {
      gap: 15px;
    }
  }

  @media (max-width: 575px) {
    gap: 35px;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: normal;
    }

  }
}
</style>
