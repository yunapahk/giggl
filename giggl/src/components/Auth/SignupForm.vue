<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="handleSignup">

      <!-- Login Button -->
      <div class="login-text" @click="goToLogin">Already a member? Login here</div>
      
      <v-text-field v-model="user.email" label="Email" outlined></v-text-field>
      <v-text-field v-model="user.username" label="Username" outlined></v-text-field>
      <v-text-field v-model="user.password" label="Password" :type="'password'" outlined></v-text-field>
      <v-btn type="submit" color="primary">Sign Up</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      user: {
        email: '',
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await axios.post('https://giggl-75d300d66618.herokuapp.com/signup/', this.user, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // If the signup is successful, redirect to the login page
        router.push({ name: 'login' });
        // You might also want to notify the user of the successful signup here
      } catch (error) {
        console.error("Signup error:", error.response.data);
        // Handle error, e.g., show error message. Make sure to access `error.response.data` for detailed backend validation errors
      }
    },
    goToLogin() {
      // This method navigates to the /signup/ route
      router.push({ path: '/login/' });
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

.login-text {
  color: black; 
  cursor: pointer; 
  margin-bottom: 20px;
}

.login-text:hover {
  text-decoration: underline;
}
</style>
