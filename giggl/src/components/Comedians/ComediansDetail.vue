<template>
    <div v-if="comedian">
      <h3>{{ comedian.name }}</h3>
    </div>
  </template>
  
  <script>
  import { getComedian } from '@/services/api.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        comedian: null
      };
    },
    mounted() {
      getComedian(this.id).then(response => {
        this.comedian = response.data;
      });
    }
  };
  </script>
  