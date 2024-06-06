<template>
  <section class="main-banner">
    <div class="main-banner__content">
      <div class="main-banner__content-info">
        <h1>Элитная недвижимость <br />в Пхукете</h1>
        <p>Арендный доход до 12% годовых</p>
      </div>

      <button>Подобрать недвижимость</button>
    </div>

    <img src="/images/apartment-poster.png" alt="красивый дом" />
  </section>
</template>

<script>
export default { name: "MainBanner" };
</script>

<style scoped lang="scss">
.main-banner {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 0 0 0 50px;
  background: #1e1e1e;
  border-radius: 10px;
  color: white;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 70px;
  }

  &__content-info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      font-size: 46px;
      font-weight: bold;
      line-height: 60px;
    }

    p {
      font-size: 20px;
      font-weight: 500;
    }
  }

  button {
    height: 50px;
    border: none;
    border-radius: 8px;
    padding: 10px 40px;
    font-weight: 500;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 575px) {
    height: 450px;
    align-items: flex-start;
    padding: 20px;

    &__content {
      width: 100%;
      height: 100%;
      justify-content: space-between;
      gap: 40px;
    }

    &__content-info {
      gap: 20px;

      h1 {
        font-size: 26px;
        font-weight: bold;
        line-height: 40px;
      }

      p {
        font-size: 16px;
        font-weight: 500;
      }
    }

    button {
      position: relative;
      width: 100%;
      z-index: 20;
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
