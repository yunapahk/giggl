<template>
  <!-- Search Component -->
  <div class="search-container">
    <div class="search">
      <v-text-field
        v-model="searchQuery"
        label="Search bits..."
        solo
      ></v-text-field>
    </div>
  </div>

  <!-- Bits Cards -->
  <div class="cards-container">
    <div v-for="bit in filteredBits" :key="bit.id" class="card" @click="goToBitDetail(bit.id)">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
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
    const bits = ref([]);
    const searchQuery = ref('');
    const router = useRouter();

    onMounted(() => {
      api.getBits().then(response => {
        bits.value = response.data;
      });
    });

    const filteredBits = computed(() => {
      return bits.value.filter(bit => 
        bit.comedian.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        bit.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const goToBitDetail = (id) => {
      router.push(`/bits/${id}`);
    };

    return {
      filteredBits,
      goToBitDetail,
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
