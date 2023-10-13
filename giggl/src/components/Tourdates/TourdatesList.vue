<template>
  <!-- Search Component -->
  <div class="search-container">
    <div class="search">
      <input v-model="searchQuery" placeholder="Search tourdates..." style="margin-bottom: 20px;">
    </div>
  </div>

  <!-- Tour Dates Cards -->
  <div class="cards-container">
    <div v-for="tourdate in filteredTourdates" :key="tourdate.id" class="tourdate-card">
      <h3>{{ tourdate.comedians }}</h3>
      <h4>{{ tourdate.tour }}</h4>
      <p>{{ tourdate.dates }}</p>
      <a :href="tourdate.link" target="_blank">View Link</a>
      <v-btn class="details-btn" @click="goToTourdateDetail(tourdate.id)">View Details</v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'; 
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
  setup() {
    const tourdates = ref([]);
    const router = useRouter();
    const searchQuery = ref("");

    onMounted(() => {
      api.getTourdates().then(response => { 
        tourdates.value = response.data;
      });
    });

    // Computed property to filter tourdates based on search query
    const filteredTourdates = computed(() => {
      return tourdates.value.filter(tourdate => 
        tourdate.comedians.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        tourdate.tour.toLowerCase().includes(searchQuery.value.toLowerCase())  // Assuming 'tour' is a string
      );
    });

    const goToTourdateDetail = (id) => {
      router.push(`/tourdates/${id}`);
    };

    return {
      filteredTourdates,  // Using the computed property here
      goToTourdateDetail,
      searchQuery 
    };
  }
};
</script>

<style>
.search-container {
  display: flex;     
  justify-content: center; 
  align-items: center;    
  margin-top: 4rem;  
}

.search {
  width: 40%;  
  border-radius: 8px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border: 1px solid #ccc;
}

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
