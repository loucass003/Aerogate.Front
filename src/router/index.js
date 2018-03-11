import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Settings from '../components/Settings.vue'

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'settings',
    component: Settings
  }
];

const router = new Router({
  routes,
  mode: "history"
});

export default router;
