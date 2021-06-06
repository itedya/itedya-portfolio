<template>
  <div class="w-screen mt-4 max-w-7xl mx-auto" id="projects">
    <h2 class="font-bold text-2xl text-center">Moje prace</h2>

    <div
        v-for="item in items"
        :key="item.title"
        class="flex justify-center items-center flex-col my-6">
      <hr class="w-3/4" />
      <img :src="item.img" :alt="item.imgAlt" class="w-3/4 md:w-1/2 m-6" />
      <div class="flex justify-center items-center flex-col px-8 text-center">
        <h3 class="font-bold text-xl">{{ item.title }}</h3>
        <p>
          {{ item.description }}<br />
          <a
              v-for="link in item.links"
              :key="link.href"
              class="text-blue-500"
              :href="link.href"
          >{{ link.text }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      items: [
        {
          img: "./img/go.svg",
          imgAlt: "GoLang logo",
          title: "Simple go backup script",
          description: "Prosty skrypt do backupów napisany w języku GO",
          links: [
            { text: "Github", href: "https://github.com/itedya/go-backup-script" }
          ]
        }
      ]
    }
  },


  mounted() {

  }
}
</script>

<style scoped>

</style>