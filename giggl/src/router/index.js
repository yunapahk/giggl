import { createRouter, createWebHistory } from 'vue-router'; 
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// import { createRouter, createWebHistory } from 'vue-router';
// import bitsRoutes from './routes/bits.js';
// import comediansRoutes from './routes/comedians.js';
// import podcastsRoutes from './routes/podcasts.js';
// import tourdatesRoutes from './routes/tourdates.js';

// const routes = [
//   ...bitsRoutes,
//   ...comediansRoutes,
//   ...podcastsRoutes,
//   ...tourdatesRoutes
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// export default router;
