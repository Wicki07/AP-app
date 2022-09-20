import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from "./components/ExampleComponent.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: ExampleComponent,
    },
    {
      path: "/home",
      component: ExampleComponent,
    },
  ],
});
export default router;
