<template>
  <div class="cards-container">
    <!-- Display comedians as cards -->
    <div v-for="comedian in comedians" :key="comedian.id" class="comedian-card" @click="goToComedianDetail(comedian.id)">
      <h1>{{ comedian.name }}</h1>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';  

export default {
  setup() {
    const comedians = ref([]);
    const router = useRouter();

    onMounted(() => {
      api.getComedians().then(response => {  
        comedians.value = response.data;
      });
    });

    // Assuming you have a method to navigate to comedian details
    const goToComedianDetail = (id) => {
      router.push({ name: 'ComedianDetail', params: { id } });
    };

    return {
      comedians,
      goToComedianDetail
    }
  }
}
</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  margin-top: 60px;
  margin-left: 30px;
}

.comedian-card {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comedian-card:hover {
  background-color: #f5f5f5;
}

</style>
