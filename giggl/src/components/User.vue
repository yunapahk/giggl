<template>
    <div class="center-container">
      <!-- Toggle Button -->
      <div class="toggle-form" @click="toggleForm">
        <p v-if="isLoginActive">Not a member yet?</p>
        <p v-else>Already a member?</p>
      </div>
      <!-- Login Form -->
      <v-form v-if="isLoginActive" class="form-content" ref="form" @submit.prevent="handleLogin">
        <v-text-field v-model="credentials.username" label="Username" outlined></v-text-field>
        <v-text-field v-model="credentials.password" label="Password" :type="'password'" outlined></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
      <!-- Signup Form -->
      <v-form v-else class="form-content" ref="form" @submit.prevent="handleSignup">
        <v-text-field v-model="user.username" label="Username" outlined></v-text-field>
        <v-text-field v-model="user.password" label="Password" :type="'password'" outlined></v-text-field>
        <v-text-field v-model="user.email" label="Email" outlined></v-text-field>
        <v-btn type="submit" color="primary">Sign Up</v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isLoginActive: true,
        credentials: {
          username: '',
          password: ''
        },
        user: {
          username: '',
          password: '',
          email: ''
        }
      };
    },
    methods: {
      toggleForm() {
        this.isLoginActive = !this.isLoginActive;
      },
      async handleLogin() {
        try {
          const response = await axios.post('https://giggl-75d300d66618.herokuapp.com/login/', this.credentials);
          console.log('Login successful:', response.data);
          this.$router.push('/');
        } catch (error) {
          console.error('Login error:', error);
        }
      },
      async handleSignup() {
        try {
          const response = await axios.post('/signup', this.user);
          // Handle signup success here
        } catch (error) {
          // Handle signup error here
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    margin-top: 5rem;
  }
  
  .form-content {
    width: 80%;
    max-width: 600px;
  }
  
  .toggle-form {
    margin-bottom: 1rem;
    cursor: pointer;
  }
  </style>
  