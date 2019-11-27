import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './custom.css';

import { store } from './store';
import { router } from './includes';
import App from './App';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});