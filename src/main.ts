import {createApp} from 'vue';
import App from './App.vue';

import store from "./data/store/vuex";

import "./assets/scss/index.scss";

const app = createApp(App);
app.use(store).mount('#app');