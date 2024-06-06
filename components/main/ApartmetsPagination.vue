<template>
  <div class="pagination">
    <button
      class="pagination__button"
      :disabled="!store.apartmentList.links.prev"
      @click="$emit('changePage', store.apartmentList.links.prev)"
    >
      <Icon name="system-uicons:chevron-left" />
    </button>

    <div class="pagination__page">
      <p>{{ pageCount }}</p>
    </div>

    <button
      class="pagination__button"
      :disabled="!store.apartmentList.links.next"
      @click="$emit('changePage', store.apartmentList.links.next)"
    >
      <Icon name="system-uicons:chevron-right" />
    </button>
  </div>
</template>

<script>
export default { name: "ApartmentsPagination" };
</script>

<script setup>
import { useMainStore } from "~/store/main-store.js";

defineEmits(["changePage"]);

const store = useMainStore();

const pageCount = computed(() => {
  return `${store.apartmentList.links.prev ? store.apartmentList.links.prev + 1 : store.apartmentList.links.first} из ${store.apartmentList.links.last}`;
});
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  height: 40px;

  &__button {
    background: white;
    border: none;
    padding: 0 10px;
    cursor: pointer;
  }

  &__page {
    padding: 0 10px;
    border-left: 1px solid #e1e5ec;
    border-right: 1px solid #e1e5ec;
  }
}
</style>
