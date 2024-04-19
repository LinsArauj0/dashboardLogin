import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import VueAxios from 'vue-axios';
import PrimeVue from "primevue/config";
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'


const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(PrimeVue);

app.use(VueAxios, axios)

app.use(router);

app.component('DialogBox', Dialog);

app.mount('#app');