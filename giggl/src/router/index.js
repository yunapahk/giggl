import { createRouter, createWebHistory } from 'vue-router';
import bitsRoutes from './routes/bits.js';

const routes = [
  ...bitsRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
