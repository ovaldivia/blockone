import Vue from 'vue';
import Router from 'vue-router';
import {
    MainPage,
} from '../pages'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name:'home', component: MainPage },

    // otherwise redirect to pages
    { path: '*', redirect: '/' }
  ]
});

