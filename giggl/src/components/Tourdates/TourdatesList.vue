<template>
  <div class="cards-container">
    <!-- Display tourdates as cards -->
    <div v-for="tourdate in tourdates" :key="tourdate.id" class="tourdate-card" @click="goToTourdateDetail(tourdate.id)">
      <h3>{{ tourdate.comedians }}</h3>
      <h4>{{ tourdate.tour }}</h4>
      <p>{{ tourdate.dates }}</p>
      <a :href="tourdate.link" target="_blank">View Link</a>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
setup() {
  const tourdates = ref([]);
  const router = useRouter();

  onMounted(() => {
    api.getTourdates().then(response => { 
      tourdates.value = response.data;
    });
  });

  const goToTourdateDetail = (id) => {
    router.push(`/tourdates/${id}`);
  };

  return {
    tourdates,
    goToTourdateDetail
  };
}
};
</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  margin-top: 60px;
  margin-left: 30px;
}

.tourdate-card {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tourdate-card:hover {
  background-color: #f5f5f5;
}

</style>
