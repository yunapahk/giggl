import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Ensure this import is correct
import axios from 'axios'; 

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css';

// Axios Interceptor for attaching Authorization header
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        primary: '#FF5722',  
        secondary: '#03A9F4'
      }
    }
  }
});

// Initialize the Vue app and include Vuex store
createApp(App).use(router).use(store).use(vuetify).mount('#app');
