<template>
  <div class="filters-container" v-outside="() => isFormOpen = false">
    <button class="filter-button" v-if="isMobile" @click="isFormOpen = !isFormOpen">
      <Icon name="ep:filter" size="18"/>
      <span>Фильтр</span>
    </button>

    <form
      v-if="isMobile ? isFormOpen : true"
      class="filters"
      @submit="$emit('search', form)"
    >
      <div class="filters__items">
        <div class="filters__item">
          <div class="filters__item-header">
            <span>Тип недвижимости</span>
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
      </div>

      <button
        class="filters__submit"
        type="submit"
        @click.prevent="handleSearch()"
      >
        Найти
      </button>

      <button class="filters__close-btn" @click="isFormOpen = false">
        <Icon name="ep:close" />
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

const emits = defineEmits(["search"]);

const { isMobile } = useWindowSize();
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

const handleSearch = () => {
  emits('search', form)
  isFormOpen.value = false
}
</script>

<style scoped lang="scss">
.filters-container {
  position: sticky;
  top: 25px;
  left: 0;

  @media (max-width: 575px) {
    width: 100%;
    position: relative;
    top: auto;
    left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.filters {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  z-index: 50;

  &__items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }

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
    background: #1E1E1E;
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }

  &__close-btn {
    display: none;
  }


  @media (max-width: 575px) {
    width: 100%;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    height: 90%;
    box-shadow: 0 -45px 0 122px rgba(0, 0, 0, 0.25);

    &__close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      background: rgba(0, 0, 0, 0.33);
      border: none;
      border-radius: 50%;

      svg {
        color: white;
      }
    }
  }
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 4px;
  padding: 5px 15px;
  border: none;
}
</style>
