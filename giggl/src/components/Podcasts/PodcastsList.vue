<template>
  <div class="cards-container">
    <div v-for="podcast in podcasts" :key="podcast.id" class="card" @click="goToPodcastDetail(podcast.id)">
      <h3>{{ podcast.name }}</h3>
      <p>{{ podcast.comedians }}</p>
      <v-btn class="details-btn">View Details</v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
  setup() {
    const podcasts = ref([]);
    const router = useRouter();

    onMounted(() => {
      api.getPodcasts().then(response => { 
        podcasts.value = response.data;
      });
    });

    const goToPodcastDetail = (id) => {
      router.push(`/podcasts/${id}`);
    };

    return {
      podcasts,
      goToPodcastDetail
    };
  }
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  margin-top: 60px;
  margin-left: 30px;
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
</style>