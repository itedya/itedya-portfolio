<template>
  <div class="font-serif home-page-wrapper flex w-screen h-screen items-center justify-center flex-col" id="home">
    <img
        src="@/assets/undraw_Code_thinking_re_gka2.svg"
        alt="Code thinking svg from undraw.co"
        class="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
    <h2 class="m-10 text-center font-bold text-xl sm:text-2xl">Full-Stack Web Development & graphics</h2>
    <a class="font-serif bg-yellow-primary hover:bg-yellow-300 focus:outline-none font-bold py-2 px-4 rounded-full" href="#contact">KONTAKT</a>

    <img class="absolute w-10 bottom-4 left-1/2 mouse-anim" src="@/assets/mouse.svg" alt="mouse icon" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
@keyframes mouseMove {
  0% {
    transform: translateY(0px) translateX(-50%);
  }

  50% {
    transform: translateY(-30px) translateX(-50%);
  }

  100% {
    transform: translateY(0px) translateX(-50%);
  }
}

.mouse-anim {
  animation: ease-in-out 5s mouseMove infinite ;
}
</style>