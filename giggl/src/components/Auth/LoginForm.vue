<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="handleLogin">

       <!-- Signup/Register Button -->
       <div class="signup-text" @click="goToSignup">Not a member? Sign up here</div>

      <v-text-field v-model="credentials.username" label="Username" outlined></v-text-field>
      <v-text-field v-model="credentials.password" label="Password" :type="'password'" outlined></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('https://giggl-75d300d66618.herokuapp.com/login/', this.credentials);
        console.log('Login successful:', response.data);
        
        // Dispatch action to Vuex store to update state
        this.$store.dispatch('login', {
          token: response.data.token,
          isSuperuser: response.data.is_superuser 
        });

        // Redirect to the main page
        this.$router.push('/');
      } catch (error) {
        console.error('Login error:', error);
        // Handle error
      }
    },
    goToSignup() {
      // This method navigates to the /signup/ route
      router.push({ path: '/signup/' });
    }
  }
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; 
  margin-top: 5rem;
}

.form-content {
  width: 80%; 
  max-width: 600px; 
  text-align: center;
}

.signup-text {
  color: black; 
  cursor: pointer; 
  margin-bottom: 20px;
}

.signup-text:hover {
  text-decoration: underline;
}
</style>
