<template>
  <div class="center-container" v-if="podcast">
    <v-card class="content">
      <!-- Title -->
      <v-card-title>{{ podcast.name }}</v-card-title>

      <!-- Text -->
      <v-card-subtitle>{{ podcast.comedians }}</v-card-subtitle>

      <!-- Actions -->
      <v-card-actions>
        <!-- Edit button replaced with an icon -->
        <v-btn icon @click="editPodcast">
          <i class="fa-regular fa-pen-to-square"></i>
        </v-btn>
        
        <!-- Delete button replaced with trash icon -->
        <v-btn icon @click="deletePodcast">
          <i class="fa-solid fa-trash"></i>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
  props: ['id'],
  data() {
    return {
      podcast: null
    };
  },
  mounted() {
    this.fetchPodcastDetail();
  },
  methods: {
    fetchPodcastDetail() {
      api.getPodcast(this.id).then(response => {
        this.podcast = response.data;
      }).catch(error => {
        console.error("Error fetching podcast details:", error);
      });
    },
    editPodcast() {
      this.$router.push(`/podcasts/${this.id}/edit`);
    },
    deletePodcast() {
      api.deletePodcast(this.id).then(() => { 
        this.$router.push('/podcasts');
      }).catch(error => {
        console.error("Error deleting podcast:", error);
      });
    }
  }
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
}

.content {
  align-items: center;
  width: 80%;  
  max-width: 600px; 
}
</style>
