<template>
  <div class="cards-container">
    <!-- Display bits as cards -->
    <div v-for="bit in bits" :key="bit.id" class="bit-card">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
      <v-btn class="details-btn" @click="goToBitDetail(bit.id)">View Details</v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';

export default {
  setup() {
    const bits = ref([]);
    const router = useRouter();

    onMounted(() => {
      api.getBits().then(response => {
        bits.value = response.data;
      });
    });

    const goToBitDetail = (id) => {
      router.push(`/bits/${id}`);
    };

    return {
      bits,
      goToBitDetail
    };
  }
};
</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  margin-top: 60px;
  margin-left: 30px;
}

.bit-card {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.bit-card:hover {
  background-color: #f5f5f5;
}

.details-btn {
  padding: 5px 10px;  
  font-size: 14px;  
  margin-top: 10px; 
}

</style>
