import { createRouter, createWebHistory } from 'vue-router';
import TheMain from './components/TheMain.vue';
import ExampleComponent from './components/ExampleComponent.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: TheMain,
    },
    {
      path: '/home',
      component: ExampleComponent,
    },
  ],
});
export default router;
