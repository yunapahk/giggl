<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="handleLogin">
      <v-text-field v-model="credentials.username" label="Username" outlined></v-text-field>
      <v-text-field v-model="credentials.password" label="Password" :type="'password'" outlined></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';

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
        
        // Redirect to the main page
        this.$router.push('/');
        
      } catch (error) {
        console.error('Login error:', error);
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
  height: 60vh; 
  margin-top: 5rem;
}

.form-content {
  width: 80%; 
  max-width: 600px; 
}
</style>
