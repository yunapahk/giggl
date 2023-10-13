<template>
  <div class="cards-container">
    <div v-for="tourdate in tourdates" :key="tourdate.id" class="tourdate-card">
      <h3>{{ tourdate.comedians }}</h3>
      <h4>{{ tourdate.tour }}</h4>
      <p>{{ tourdate.dates }}</p>
      <a :href="tourdate.link" target="_blank">View Link</a>
      <v-btn class="details-btn" @click="goToTourdateDetail(tourdate.id)">View Details</v-btn>
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

.details-btn {
  padding: 5px 10px;
  font-size: 14px;
  margin-top: 10px;
}

@media screen and (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
