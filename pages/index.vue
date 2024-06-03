<template>
  <main class="main">
    <MainBanner />

    <section class="main__content" ref="mainContentRef">
      <Filters @search="(filters) => handleSearch(filters)" />
      <Apartments />
      <AdBanner />
    </section>
  </main>
</template>

<script>
export default { name: "index" };
</script>

<script setup>
import MainBanner from "~/components/main/MainBanner.vue";
import Filters from "~/components/main/Filters.vue";
import Apartments from "~/components/main/Apartments.vue";
import AdBanner from "~/components/main/AdBanner.vue";
import { useMainStore } from "~/store/main-store.js";

const mainContentRef = ref(null);

const store = useMainStore();

const handleSearch = async (filters) => {
  await store.searchApartments(filters);
  if (mainContentRef.value) {
    mainContentRef.value.scrollIntoView({ behavior: "smooth" });
  }
};
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
    justify-content: space-between;
    align-items: start;
  }
}
</style>
