<template>
  <div class="center-container" v-if="comedian">
    <v-card class="content">
      <!-- Title -->
      <v-card-title>{{ comedian.name }}</v-card-title>

      <!-- Actions -->
      <v-card-actions>
        <!-- Edit button replaced with an icon -->
        <v-btn icon @click="editComedian">
          <i class="fa-regular fa-pen-to-square"></i>
        </v-btn>
        
        <!-- Delete button replaced with trash icon -->
        <v-btn icon @click="deleteComedian">
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
      comedian: null
    };
  },
  mounted() {
    this.fetchComedianDetail();
  },
  methods: {
    fetchComedianDetail() {
      api.getComedian(this.id).then(response => {
        this.comedian = response.data;
      }).catch(error => {
        console.error("Error fetching comedian details:", error);
      });
    },
    editComedian() {
      this.$router.push(`/comedians/${this.id}/edit`);
    },
    deleteComedian() {
      api.deleteComedian(this.id).then(() => {
        this.$router.push('/comedians');
      }).catch(error => {
        console.error("Error deleting comedian:", error);
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
