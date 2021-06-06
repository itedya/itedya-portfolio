<template>
  <AppHeader />
  <Home />
  <Technologies />
  <Projects />
  <Contact />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Home from "@/components/Home";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
  name: 'App',

  components: {
    AppHeader,
    Home,
    Technologies,
    Projects,
    Contact
  }
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>