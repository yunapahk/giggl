<!-- <template>
    <div class="auth-container">
      <v-tabs v-model="tab" class="custom-tabs" centered>
        <v-tab key="login">Login</v-tab>
        <v-tab key="signup">Sign Up</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item key="login">
          <login-form></login-form>
        </v-tab-item>
        <v-tab-item key="signup">
          <signup-form></signup-form>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </template>
  
  <script>
  import LoginForm from './LoginForm.vue';
  import SignupForm from './SignupForm.vue';
  
  export default {
    components: {
      LoginForm,
      SignupForm
    },
    data() {
      return {
        tab: 'login', // Default to show login form
      };
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    margin-top: 10rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .custom-tabs .v-tab {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-bottom: none;
    margin-right: 4px;
    border-radius: 4px 4px 0 0;
    padding: 8px 16px;
  }
  
  .custom-tabs .v-tab--active {
    background-color: #f5f5f5;
    position: relative;
    top: 1px;
    box-shadow: 0 -2px 4px -1px rgba(0,0,0,0.2), 
                0 -4px 5px 0 rgba(0,0,0,0.14), 
                0 -1px 10px 0 rgba(0,0,0,0.12);
  }
  
  .v-tabs-items {
    border: 1px solid #e0e0e0;
    padding: 2rem;
  }
  </style>
   -->