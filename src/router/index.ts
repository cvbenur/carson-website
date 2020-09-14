import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import views from './viewsImport';

Vue.use(VueRouter);

const title = 'Carson - ';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: views.Home,
    meta: {
      title: `${title}The Simple Discord StatBot`,
    },
  },
  {
    path: '/commands',
    name: 'Commands',
    component: views.Commands,
    meta: {
      title: `${title}${views.Commands.name}`,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: views.About,
    meta: {
      title: `${title}${views.About.name}`,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || `${title}The Simple Discord StatBot`;
  next();
});

export default router;
