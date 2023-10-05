<template>
  <div>
    <!-- Display tourdates as cards -->
    <div v-for="tourdate in tourdates" :key="tourdate.id" class="tourdate-card" @click="goToTourdateDetail(tourdate.id)">
      <h3>{{ tourdate.comedians }}</h3>
      <h3>{{ tourdate.tour }}</h3>
      <h3>{{ tourdate.dates }}</h3>
      <h3>{{ tourdate.link }}</h3>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
setup() {
  const tourdates = ref([]);
  const router = useRouter();

  onMounted(() => {
    api.getTourdates().then(response => { 
      tourdates.value = response.data;
    });
  });

  const goToTourdateDetail = (id) => {
    router.push(`/tourdates/${id}`);
  };

  return {
    tourdates,
    goToTourdateDetail
  };
}
};
</script>

<style>
.tourdate-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tourdate-card:hover {
  background-color: #f5f5f5;
}
</style>
