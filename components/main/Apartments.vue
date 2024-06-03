<template>
  <div class="apartments" ref="apartmentsWrapper">
    <p>Найдено: {{ apartments.data.items }}</p>

    <ApartmentCard
      v-for="apartment in apartments.data.data"
      :key="apartment.id"
      :title="apartment.title[store.lang]"
      :description="apartment.description[store.lang]"
      :price="apartment.price"
      :type="apartment.type"
      :images="apartment.images"
    />

    <ApartmentsPagination
      :first="apartments.data.first"
      :last="apartments.data.last"
      :next="apartments.data.next"
      :prev="apartments.data.prev"
      @change-page="page => changePage(page)"
    />
  </div>
</template>

<script>
export default { name: "Apartments" };
</script>

<script setup>
import { useMainStore } from "~/store/main-store";
import ApartmentCard from "~/components/main/ApartmentCard/ApartmentCard.vue";
import ApartmentsPagination from "~/components/main/ApartmetsPagination.vue";

const apartmentsWrapper = ref(null)

const store = useMainStore();

const changePage = async (page) => {
  await store.changePage(page)

  if (apartmentsWrapper.value) {
    apartmentsWrapper.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const apartments = computed(() => {
  return store.apartments;
});

await store.getApartments();
</script>

<style scoped lang="scss">
.apartments {
  width: 100%;
  max-width: 735px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
