import { createRouter, createWebHistory } from 'vue-router';
import ExampleComponent from './components/ExampleComponent.vue';
import TheMain from './TheMain.vue';
import News from './components/News.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: TheMain,
    },
    {
      path: '/news',
      component: News,
    },
    {
      path: '/home',
      component: ExampleComponent,
    },
  ],
});
export default router;
