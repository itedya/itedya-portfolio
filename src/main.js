import {createApp} from 'vue'
import mdiVue from 'mdi-vue/v3'
import { mdiMenu, mdiClose } from "@mdi/js";
import App from './App.vue'

createApp(App)
    .use(mdiVue, {
        icons: { mdiMenu, mdiClose }
    })
    .mount('#app')
