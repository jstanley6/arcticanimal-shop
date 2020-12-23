import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss';

createApp(App)
  .use(router)
  .mount("#app");

Vue.component('Navbar', require('./components/NavBar').default);