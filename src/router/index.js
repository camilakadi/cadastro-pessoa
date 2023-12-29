import { createRouter, createWebHistory } from 'vue-router';
import CpStepOne from '../views/CpStepOne.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CpStepOne
    }
  ]
});

export default router;
