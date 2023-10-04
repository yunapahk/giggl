<template>
    <div>
      <div v-for="comedian in comedians" :key="comedian.id" @click="goToComedianDetail(comedian.id)">
        <h3>{{ comedian.name }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getComedians } from '@/services/api.js';
  
  export default {
    setup() {
      const comedians = ref([]);
      const router = useRouter();
  
      onMounted(() => {
        getComedians().then(response => {
          comedians.value = response.data;
        });
      });
  
      const goToComedianDetail = (id) => {
        router.push(`/comedians/${id}`);
      };
  
      return {
        comedians,
        goToComedianDetail
      };
    }
  };
  </script>
  