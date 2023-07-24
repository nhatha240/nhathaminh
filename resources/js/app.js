import './bootstrap';
import {createApp} from 'vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

import App from './App.vue'
import router from "./router/index";
import 'bootstrap';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.css';
import '@/resources/scss/main.scss';
import store from './store'
import "./vee-validate";
import 'v-calendar/style.css';
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import BootstrapVueNext from 'bootstrap-vue-next'
const app = createApp(App);
const vfm = createVfm()
app.use(router);
app.use(store);
app.use(vfm);
app.use(LoadingPlugin);
app.use(BootstrapVueNext);
app.use(Vue3Toastify, {
    autoClose: 3000,
  });
app.mount("#app");
