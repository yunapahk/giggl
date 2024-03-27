import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';
import store from '../store'; 

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  const isSuperuser = store.state.isSuperuser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else if (to.matched.some(record => record.meta.requiresSuperuser) && !isSuperuser) {
      next('/'); 
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
