<template>
  <div class="filters-container">
    <button v-if="isMobile" @click="isFormOpen = !isFormOpen">Фильтр</button>

    <form
      v-if="isMobile ? isFormOpen : true"
      class="filters"
      @submit="$emit('search', form)"
    >
      <div class="filters__item">
        <div class="filters__item-header">
          <span>Тип жилья</span>
        </div>

        <div class="filters__item-content">
          <Checkbox value="Villa" label="Вилла" v-model="form.types" />
          <Checkbox value="Condo" label="Кондо" v-model="form.types" />
        </div>
      </div>

      <div class="filters__item">
        <div class="filters__item-header">
          <span>Цена</span>
        </div>

        <div class="filters__item-content filters__inputs">
          <input
            type="text"
            v-model.number="form.price.min"
            class="filters__input"
            placeholder="От"
          />
          <input
            type="text"
            v-model.number="form.price.max"
            class="filters__input"
            placeholder="До"
          />
        </div>
      </div>

      <div class="filters__item">
        <div class="filters__item-header">
          <span>Сортировка</span>
        </div>

        <div class="filters__item-content">
          <Radio value="price" label="Сначала дешевые" v-model="form.sort" />
          <Radio value="-price" label="Сначала дорогие" v-model="form.sort" />
        </div>
      </div>

      <button
        class="filters__submit"
        type="submit"
        @click.prevent="$emit('search', form)"
      >
        Найти
      </button>
    </form>
  </div>
</template>

<script>
export default { name: "Filters" };
</script>

<script setup>
import { useMainStore } from "~/store/main-store";
import { useWindowSize } from "~/composables/useWindowSize.js";
import Checkbox from "~/components/ui/Checkbox.vue";
import Radio from "~/components/ui/Radio.vue";

defineEmits(["search"]);

const store = useMainStore();

const isFormOpen = ref(false);
const form = ref({
  page: 1,
  sort: store.filters.sort,
  price: {
    min: store.filters.price.min,
    max: store.filters.price.max,
  },
  types: store.filters.types,
});

const { isMobile } = useWindowSize();
</script>

<style scoped lang="scss">
.filters-container {
  position: sticky;
  top: 25px;
  left: 0;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-header {
      padding-bottom: 10px;
      border-bottom: 1px solid #e1e5ec;

      span {
        font-weight: 600;
        font-size: 16px;
        color: #000;
      }
    }
  }

  &__inputs {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  &__input {
    width: 100%;
    height: 43px;
    padding: 0 10px;
    background: #f2f1f0;
    border-radius: 10px;
    border: none;
  }

  &__submit {
    height: 51px;
    background: #202020;
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 575px) {
    width: 100%;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    height: 90%;
  }
}
</style>
