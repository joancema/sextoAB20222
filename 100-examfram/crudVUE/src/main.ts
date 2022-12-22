import { createPinia } from 'pinia';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router';

// import { createVuetify } from 'vuetify'

// import vuetify from './plugins/vuetify';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// const vuetify = createVuetify()


createApp(App)
.use(createPinia())
.use(router)
// .use(vuetify)
.mount('#app')
