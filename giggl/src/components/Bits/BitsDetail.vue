<template>
  <div class="center-container" v-if="bit">
    <v-card class="content">
      <!-- Title -->
      <v-card-title>{{ bit.comedian }}</v-card-title>

      <!-- Text -->
      <v-card-subtitle>{{ bit.description }}</v-card-subtitle>

     <!-- Actions -->
     <v-card-actions>
        <!-- Edit button replaced with an icon -->
        <v-btn icon @click="editBit">
          <i class="fa-regular fa-pen-to-square"></i>
        </v-btn>
        
          <!-- Delete button replaced with trash icon -->
        <v-btn icon @click="deleteBit">
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
      bit: null
    };
  },
  mounted() {
    this.fetchBitDetail();
  },
    methods: {
    fetchBitDetail() {
      api.getBit(this.id).then(response => {
        this.bit = response.data;
      }).catch(error => {
        console.error("Error fetching bit details:", error);
      });
    },
    editBit() {
      this.$router.push(`/bits/${this.id}/edit`);
    },
    deleteBit() {
      api.deleteBit(this.id).then(() => {
        // After successful deletion, navigate to bits list
        this.$router.push('/bits');
      }).catch(error => {
        console.error("Error deleting bit:", error);
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