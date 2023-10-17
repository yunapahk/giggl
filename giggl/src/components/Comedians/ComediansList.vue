<template>
  <div class="search-container">
    <div class="search">
      <v-text-field
        v-model="searchQuery"
        label="Search comedians..."
        solo
      ></v-text-field>
    </div>
  </div>

  <div class="cards-container">
    <router-link 
      v-for="comedian in comedians" 
      :key="comedian.id" 
      :to="`/comedians/${comedian.id}`" 
      class="card-link"
    >
      <div class="card">
        <h3>{{ comedian.name }}</h3>
        <v-img class="profile-picture" v-bind:src="comedian.profile_picture" width="150" height="150"></v-img>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import api from '@/services/api.js';  

export default {
  setup() {
    const comedians = ref([]);
    const searchQuery = ref("");

    onMounted(() => {
      api.getComedians().then(response => {  
        comedians.value = response.data;
      });
    });

    const filteredComedians = computed(() => {
      return comedians.value.filter(comedian => 
        comedian.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      comedians: filteredComedians,
      searchQuery 
    }
  }
}
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
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px; 
  margin-left: 80px;
  margin-right: 80px;
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

.card {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card:hover {
  transform: scale(1.03); 
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%; 
  object-fit: cover;
  margin-bottom: 10px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
</style>