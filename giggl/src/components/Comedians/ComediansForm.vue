<template>
    <div>
      <input v-model="comedian.name" placeholder="Comedian">
      <button @click="submitForm">Update</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import api from '@/services/api.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        comedian: {
          name: '',
        }
      };
    },
    mounted() {
      if (this.id) {
        api.getComedian(this.id).then(response => {
          this.comedian = response.data;
        });
      }
    },
    methods: {
      submitForm() {
        api.updateComedian(this.id, this.comedian).then(() => {
          this.$emit('refreshComedians');
          this.$router.push('/');
        });
      }
    }
  };
  </script>