<template>
  <div class="search-container">
    <div class="search">
      <v-text-field
        v-model="searchQuery"
        label="Search tour dates..."
        solo
      ></v-text-field>
    </div>
  </div>

  <div class="cards-container">
    <router-link 
      v-for="tourdate in filteredTourdates" 
      :key="tourdate.id" 
      :to="`/tourdates/${tourdate.id}`" 
      class="card-link"
    >
      <div class="tourdate-card">
        <h3>{{ tourdate.comedians }}</h3>
        <h4>{{ tourdate.tour }}</h4>
        <p>{{ tourdate.dates }}</p>
        <a :href="tourdate.link" target="_blank" @click.stop>View Link</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'; 
import api from '@/services/api.js'; 

export default {
  setup() {
    const tourdates = ref([]);
    const searchQuery = ref("");

    onMounted(() => {
      api.getTourdates().then(response => { 
        tourdates.value = response.data;
      });
    });

    const filteredTourdates = computed(() => {
      return tourdates.value.filter(tourdate => 
        tourdate.comedians.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        tourdate.tour.toLowerCase().includes(searchQuery.value.toLowerCase())  
      );
    });

    return {
      filteredTourdates,
      searchQuery 
    };
  }
};
</script>

<style scoped>
.search-container {
  display: flex;     
  justify-content: center; 
  align-items: center;    
  margin-top: 5rem;  
  margin-bottom: 4rem;
}

.search {
  width: 40%;  
  border-radius: 8px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border: transparent;
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

.card-link {
  text-decoration: none;
  color: inherit;
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
