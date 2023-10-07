<template>
  <div class="center-container" v-if="tourdate">
    <v-card class="content">
      <!-- Title -->
      <v-card-title>{{ tourdate.comedians }}</v-card-title>

      <!-- Text -->
      <v-card-subtitle>{{ tourdate.tour }}</v-card-subtitle>
      <v-card-text>{{ tourdate.dates }}</v-card-text>
      <v-card-text><a :href="tourdate.link" target="_blank">{{ tourdate.link }}</a></v-card-text>

      <!-- Actions -->
      <v-card-actions>
        <!-- Edit button replaced with an icon -->
        <v-btn icon @click="editTourdate">
          <i class="fa-regular fa-pen-to-square"></i>
        </v-btn>

        <!-- Delete button replaced with trash icon -->
        <v-btn icon @click="deleteTourdate">
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
      tourdate: null
    };
  },
  mounted() {
    this.fetchTourdateDetail();
  },
  methods: {
    fetchTourdateDetail() {
      api.getTourdate(this.id).then(response => {
        this.tourdate = response.data;
      }).catch(error => {
        console.error("Error fetching tourdate details:", error);
      });
    },
    editTourdate() {
      this.$router.push(`/tourdates/${this.id}/edit`);
    },
    deleteTourdate() {
      api.deleteTourdate(this.id).then(() => {
        this.$router.push('/tourdates');
      }).catch(error => {
        console.error("Error deleting tourdate:", error);
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
  height: 70vh;
  width: 100vw;
}

.content {
  align-items: center;
  width: 80%;  
  max-width: 600px; 
}
</style>
