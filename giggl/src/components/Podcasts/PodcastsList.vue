<template>
    <div>
      <!-- Display podcasts as cards -->
      <div v-for="podcast in podcasts" :key="podcast.id" class="podcast-card" @click="goToPodcastDetail(podcast.id)">
        <h3>{{ podcast.name }}</h3>
        <p>{{ podcast.comedians }}</p>
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

<style>
  .podcast-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .podcast-card:hover {
    background-color: #f5f5f5;
  }
  </style>
  