<template>
  <div class="search-container">
    <div class="search">
      <v-text-field
        v-model="searchQuery"
        label="Search podcasts..."
        solo
      ></v-text-field>
    </div>
  </div>

  <div class="cards-container">
    <router-link 
      v-for="podcast in filteredPodcasts" 
      :key="podcast.id" 
      :to="`/podcasts/${podcast.id}`" 
      class="card-link"
    >
      <div class="card">
        <h3>{{ podcast.podcast_title }}</h3>
        <p>{{ podcast.name }}</p>
        <p>{{ podcast.comedians }}</p>

        <!-- YouTube -->
        <div v-if="podcast.youtube_video_id">
          <iframe :src="`https://www.youtube.com/embed/${podcast.youtube_video_id}?rel=0&showinfo=0`" width="250" height="140" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import api from '@/services/api.js';

export default {
  setup() {
    const podcasts = ref([]);
    const searchQuery = ref("");

    onMounted(() => {
      api.getPodcasts().then(response => {
        podcasts.value = response.data;
      });
    });

    const filteredPodcasts = computed(() => {
      if (!searchQuery.value) return podcasts.value;

      return podcasts.value.filter(podcast =>
        podcast.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        || podcast.comedians.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      filteredPodcasts,
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

.card {
  display: flex;
  flex-direction: column; 
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
  width: 90%;
}

.card:hover {
  background-color: #f5f5f5;
}

h3 {
  text-align: center;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
</style>
