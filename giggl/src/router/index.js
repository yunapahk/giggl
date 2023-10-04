import { createRouter, createWebHistory } from 'vue-router';
import bitsRoutes from './routes/bits.js';
import comediansRoutes from './routes/comedians.js';

const routes = [
  ...bitsRoutes,
  ...comediansRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
