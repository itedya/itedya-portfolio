<template>
  <!-- APP NAVBAR -->
  <nav class="bg-white z-10 fixed w-full mx-auto flex items-center px-10 md:px-0 justify-between md:justify-around font-serif">

    <!-- APP NAVBAR TITLE -->
    <div class="h-10 flex justify-center items-center">
      <h2 class="text-2xl font-medium">ITEDYA</h2>
    </div>
    <!-- APP NAVBAR TITLE END -->

    <!-- APP NAVBAR BUTTON -->
    <div class="md:hidden z-20">
      <mdicon
          :name="! drawer ? 'menu' : 'close'"
          @click="drawer = !drawer"
      />
    </div>
    <!-- APP NAVBAR BUTTON END -->

    <!-- APP NAVBAR CONTENT -->
    <div
        :class="[
          drawer ? 'flex flex-col md:flex-row md:items-center md:justify-center' : 'hidden',
          'fixed pt-10 top-0 left-1/2 w-3/4 xs:w-1/2 bg-white h-screen md:static md:h-10 md:pt-0 md:w-auto'
        ]"
    >
      <a
        @click="switchDrawer"
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        class="px-5 font-bold pt-5 md:pt-0"
      >{{ item.text }}</a>
    <!-- APP NAVBAR CONTENT END -->
    </div>

  </nav>
  <!-- APP NAVBAR END -->
</template>

<script>
import tailwindConfig from "@/../tailwind.config";

export default {
  data() {
    return {
      drawer: false,
      breakpoint: '',
      lastBreakpoint: '',
      items: [
        { href: '#home', text: 'Strona główna' },
        { href: '#technologies', text: 'Technologie' },
        { href: '#projects', text: 'Moje prace' },
        { href: '#contact', text: 'Kontakt' },
      ]
    }
  },

  mounted() {
    let self = this;

    const resizeEvent = () => {
      const width = window.innerWidth;

      if (width >= parseInt(tailwindConfig.theme.screens.md)) {
        self.breakpoint = 'md';
      } else {
        self.breakpoint = null;
      }

      if (self.lastBreakpoint === 'md' && self.breakpoint === null) {
        self.drawer = false;
      } else if (self.lastBreakpoint === null && self.breakpoint === 'md') {
        self.drawer = true;
      }

      self.lastBreakpoint = self.breakpoint;
    }

    window.addEventListener('resize', resizeEvent);

    this.drawer = (window.innerWidth >= parseInt(tailwindConfig.theme.screens.md))
  },

  methods: {
    switchDrawer() {
      if (window.innerWidth < parseInt(tailwindConfig.theme.screens.md)) {
        this.drawer = !this.drawer
      }
    }
  }
}
</script>
