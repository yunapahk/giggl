<template>
  <div class="search-container">
    <div class="search">
      <input v-model="searchQuery" placeholder="Search comedians..." style="margin-bottom: 20px;">
    </div>
  </div>

  <div class="cards-container">
    <div v-for="comedian in comedians" :key="comedian.id" class="card">
      <h3>{{ comedian.name }}</h3>
      <v-img class="profile-picture" v-bind:src="comedian.profile_picture" width="150" height="150"></v-img>
      <v-btn class="details-btn" @click="goToComedianDetail(comedian.id)">View Details</v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';  

export default {
  setup() {
    const comedians = ref([]);
    const router = useRouter();
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

    const goToComedianDetail = (id) => {
      router.push(`/comedians/${id}`);
    };

    return {
      comedians: filteredComedians,
      goToComedianDetail,
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
  /* height: 4rem;       */
  /* margin-bottom: 2rem;  */
  margin-top: 4rem;  
}

.search {
  /* margin-top: 1rem; */
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
  background-color: #f5f5f5;
}

.details-btn {
  padding: 5px 10px;  
  font-size: 14px;  
  margin-top: 10px; 
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%; 
  object-fit: cover;
  margin-bottom: 10px;
}


</style>