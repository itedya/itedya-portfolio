<template>
  <div class="technologies">
    <h2 class="technologies-title">Technologie</h2>
    <div class="technologies-container">
      <h3 class="technology-title">Web-Development (bazowane na NodeJS)</h3>
      <div class="technologies-list">
        <div class="technology-tile">
          <img :src="'./images/nestjs.svg'" class="w-20" alt="NestJS logo" />
          <p class="text-slate-400">NestJS</p>
        </div>

        <div class="technology-tile">
          <img :src="'./images/vue.svg'" class="w-20" alt="Vue logo" />
          <p class="text-slate-400">Vue</p>
        </div>
      </div>
    </div>

    <div class="technologies-container">
      <h3 class="technology-title">Web-Development (bazowane na PHP)</h3>
      <div class="technologies-list">
        <div class="technology-tile">
          <img :src="'./images/laravel.svg'" alt="Laravel logo" class="w-20" />
          <p class="text-slate-400">Laravel</p>
        </div>

        <div class="technology-tile">
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
