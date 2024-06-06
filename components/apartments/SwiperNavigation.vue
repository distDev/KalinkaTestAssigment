<template>
  <div class="slider-controls">
    <button :disabled="swiper.isBeginning" @click="swiper.slidePrev()">
      <Icon name="system-uicons:chevron-left" size="24" />
    </button>

    <button :disabled="swiper.isEnd" @click="swiper.slideNext()">
      <Icon name="system-uicons:chevron-right" size="24" />
    </button>
  </div>
</template>

<script>
export default { name: "SwiperNavigation" };
</script>

<script setup>
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();
</script>

<style scoped lang="scss">
.slider-controls {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  z-index: 100;

  button {
    height: 40px;
    width: 40px;
    background: white;
    color: black;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }

  @media (max-width: 575px) {
    display: none;
  }
}
</style>
