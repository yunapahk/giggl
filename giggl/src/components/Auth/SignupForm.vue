<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="handleSignup">
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
      user: {
        username: '',
        password: '',
        email: ''
      }
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await axios.post('/signup', this.user);
        // Handle success, e.g., notify user, redirect
      } catch (error) {
        // Handle error, e.g., show error message
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
