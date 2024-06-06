<template>
  <div v-if="apartments.data" class="apartments" ref="apartmentsWrapper">
    <p>Найдено: {{ apartments.totalCount ? apartments.totalCount : 0}}</p>

    <div v-if="apartments.data.length" class="apartments__cards">
      <ApartmentCard
        v-for="apartment in apartments.data"
        :key="apartment.id"
        :title="apartment.title[store.lang]"
        :description="apartment.description[store.lang]"
        :price="apartment.price"
        :type="apartment.type"
        :images="apartment.images"
        :id="apartment.id"
      />
    </div>

    <div v-else>
      <h2>Ничего не найдено</h2>
    </div>

    <div v-if="apartments.data.length" class="apartments__pagination">
      <ApartmentsPagination
          @change-page="(page) => changePage(page)"
      />
    </div>

  </div>
</template>

<script>
export default { name: "Apartments" };
</script>

<script setup>
import { useMainStore } from "~/store/main-store";
import ApartmentCard from "~/components/main/ApartmentCard/ApartmentCard.vue";
import ApartmentsPagination from "~/components/main/ApartmetsPagination.vue";

const apartmentsWrapper = ref(null);

const store = useMainStore();

const changePage = async (page) => {
  await store.changePage(page);

  if (apartmentsWrapper.value) {
    apartmentsWrapper.value.scrollIntoView({ behavior: "smooth" });
  }
};

const apartments = computed(() => {
  return store.apartmentList;
});

await useAsyncData(() => store.getApartments());
</script>

<style scoped lang="scss">
.apartments {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  &__cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;

    @media (max-width: 575px) {
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }

  &__pagination {
    display: flex;
    justify-content: center;
  }


}
</style>
