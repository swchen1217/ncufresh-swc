import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vue3GoogleLogin from 'vue3-google-login'


import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(vue3GoogleLogin, {
  clientId: '684638170126-l5k5kh23a8uo59fkg9mk95e9h8cfuat4.apps.googleusercontent.com'
})

app.mount('#app')
