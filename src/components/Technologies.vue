<template>
  <div class="flex flex-col max-w-7xl mx-auto" id="technologies">
    <div class="w-full">
      <h1 class="font-bold text-2xl text-center">Technologie</h1>
    </div>

    <div class="flex flex-col justify-center xs:flex-row h-full w-full px-10 flex-wrap">
      <div
          v-for="item in items"
          :key="item.title"
          :class="['w-full xs:w-1/3 md:w-1/4 max-w-2xl md:m-4 rounded border text-white p-5 h-72 flex flex-col items-center justify-center', item.bg]"
      >
        <img :src="item.image" :alt="item.title + ' logo'" class="h-40"/>
        <h2 class="w-full text-left font-bold text-xl">{{ item.title }}</h2>
        <p class="w-full text-left">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { bg: 'bg-green-600', title: 'Vue', description: 'Front-Endowy framework JS', image: './img/Vue3.svg' },
        { bg: 'bg-yellow-600', title: 'HTML', description: 'Język pozwalający tworzyć strukturę strony', image: './img/HTML5.svg' },
        { bg: 'bg-yellow-500', title: 'JavaScript', description: 'Język pozwalający skryptować strony', image: './img/JS.svg' },
        { bg: 'bg-red-400', title: 'Laravel', description: 'Back-Endowy framework PHP', image: './img/Laravel.svg' },
        { bg: 'bg-purple-400', title: 'PHP', description: 'Język pozwalający tworzyć część serwerową strony', image: './img/PHP.svg' },
        { bg: 'bg-blue-400', title: 'SQL', description: 'Język pozwalający tworzyć i obsługiwać bazy danych', image: './img/MYSQL.svg' },
        { bg: 'bg-blue-500', title: 'CSS', description: 'Język pozwalający nakładać style na stronę', image: './img/CSS3.svg' },
        { bg: 'bg-red-300', title: 'SASS', description: 'Język CSS w lepszej wersji', image: './img/SASS.svg' },
        { bg: 'bg-gray-400', title: 'Git', description: 'System zarządzania wersjami', image: './img/git.svg' },
      ]
    }
  }
}
</script>