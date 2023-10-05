import { createRouter, createWebHistory } from 'vue-router';
import bitsRoutes from './routes/bits.js';
import comediansRoutes from './routes/comedians.js';
import podcastsRoutes from './routes/podcasts.js';

const routes = [
  ...bitsRoutes,
  ...comediansRoutes,
  ...podcastsRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
