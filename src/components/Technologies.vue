<template>
  <div class="technologies">
    <h2 class="text-3xl text-yellow-500 font-semibold">Technologie</h2>
    <div class="flex flex-col container mx-auto">
      <h3 class="text-xl text-slate-300 text-center">Web-Development (bazowane na NodeJS)</h3>
      <div class="flex flex-row justify-center items-center gap-3 h-32">
        <div class="flex flex-col w-20 justify-between items-center h-28">
          <img :src="'./images/nestjs.svg'" class="w-20" alt="NestJS logo" />
          <p class="text-slate-400">NestJS</p>
        </div>

        <div class="flex flex-col w-20 justify-between items-center h-28">
          <img :src="'./images/vue.svg'" class="w-20" alt="Vue logo" />
          <p class="text-slate-400">Vue</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col container mx-auto">
      <h3 class="text-xl text-slate-300 text-center">Web-Development (bazowane na PHP)</h3>
      <div class="flex flex-row justify-center items-center gap-3 h-32">
        <div class="flex flex-col w-20 justify-between items-center h-28">
          <img :src="'./images/laravel.svg'" alt="Laravel logo" class="w-20" />
          <p class="text-slate-400">Laravel</p>
        </div>

        <div class="flex flex-col w-20 justify-between items-center h-28">
          <img :src="'./images/vue.svg'" class="w-20" alt="Vue logo" />
          <p class="text-slate-400">Vue</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.technologies {
  width: 100%;
  height: 100%;

  @apply bg-slate-900;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @apply p-3 gap-3;
}
</style>
