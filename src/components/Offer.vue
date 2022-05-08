<template>
  <div class="offer">
    <h2 class="text-3xl text-slate-900 font-semibold">Oferta</h2>
    <div class="offer-tile-container">
      <div class="offer-tile md:justify-self-end">
        <h2 class="offer-tile-title">Administracja serwerami linuxa</h2>
        <img :src="'./images/tux.svg'" class="offer-tile-image" alt="Tux logo">
      </div>
      <div class="offer-tile md:justify-self-start">
        <h2 class="offer-tile-title">Development stron i aplikacji webowych</h2>
        <img :src="'./images/nestjs.svg'" class="offer-tile-image" alt="NestJS logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.offer {
  width: 100%;
  height: 100%;

  @apply bg-yellow-400;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @apply p-3 gap-3;
}

.offer-tile-container {
  display: grid;
  @apply grid-cols-1;
  @apply grid-rows-2;

  justify-items: center;
  align-content: center;
  width: 100%;
  @apply gap-3;

  @screen md {
    @apply grid-cols-2;
    @apply grid-rows-1;
  }
}

.offer-tile {
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @apply bg-slate-900 rounded-xl p-3 gap-3;
}

.offer-tile-title {
  width: 100%;
  @apply text-xl;

  @apply text-yellow-500;
}

.offer-tile-text {
  @apply text-lg text-slate-300;
}

.offer-tile-image {
  width: 250px;
}
</style>
