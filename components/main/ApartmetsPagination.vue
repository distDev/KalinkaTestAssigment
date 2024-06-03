<template>
  <div class="pagination">
    <button
      class="pagination__item"
      :disabled="!prev"
      @click="$emit('changePage', prev)"
    >
      <Icon name="system-uicons:chevron-left" />
    </button>

    <p>{{ prev ? prev + 1 : first }} / {{ last }}</p>

    <button
      class="pagination__item"
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
  gap: 5px;

  &__item {
  }
}
</style>
