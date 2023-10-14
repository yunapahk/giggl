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
    <div v-for="podcast in filteredPodcasts" :key="podcast.id" class="card" @click="goToPodcastDetail(podcast.id)">
      <h3>{{ podcast.podcast_title }}</h3>
      <p>{{ podcast.name }}</p>
      <p>{{ podcast.comedians }}</p>

      <!-- YouTube Video Preview -->
      <div v-if="podcast.youtube_video_id">
        <iframe :src="`https://www.youtube.com/embed/${podcast.youtube_video_id}?rel=0&showinfo=0`" width="250" height="140" frameborder="0" allowfullscreen></iframe>
      </div>

      <v-btn class="details-btn">View Details</v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';

export default {
  setup() {
    const podcasts = ref([]);
    const searchQuery = ref("");
    const router = useRouter();

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

    const goToPodcastDetail = (id) => {
      router.push(`/podcasts/${id}`);
    };

    return {
      filteredPodcasts,
      goToPodcastDetail,
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

.details-btn {
  padding: 5px 10px;
  font-size: 14px;
  margin-top: 10px;
}

h3 {
  text-align: center;
}
</style>
