<template>
  <div class="pagination">
    <button
      class="pagination__button"
      :disabled="!prev"
      @click="$emit('changePage', prev)"
    >
      <Icon name="system-uicons:chevron-left" />
    </button>

    <div class="pagination__page">
      <p>{{ prev ? prev + 1 : first }} из {{ last }}</p>
    </div>

    <button
      class="pagination__button"
      :disabled="!next"
      @click="$emit('changePage', next)"
    >
      <Icon name="system-uicons:chevron-right" />
    </button>
  </div>
</template>

<script>
export default { name: "ApartmentsPagination" };
</script>

<script setup>
defineEmits(["changePage"]);
defineProps({
  first: {
    type: Number,
    required: true,
  },
  prev: {
    type: Number,
    required: false,
  },
  next: {
    type: Number,
    required: false,
  },
  last: {
    type: Number,
    required: true,
  },
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
    border-left: 1px solid #E1E5EC;
    border-right: 1px solid #E1E5EC;
  }
}
</style>
