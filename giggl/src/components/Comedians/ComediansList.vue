<template>
  <div>
    <!-- Display comedians as cards -->
    <div v-for="comedian in comedians" :key="comedian.id" class="comedian-card" @click="goToComedianDetail(comedian.id)">
      <h1>{{ comedian.name }}</h1>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getComedians } from '@/services/api.js';

export default {
  setup() {
    const comedians = ref([]);
    const router = useRouter();

    onMounted(() => {
      getComedians().then(response => {
        comedians.value = response.data;
      });
    });

    const goToComedianDetail = (id) => {
      router.push(`/comedians/${id}`);
    };

    return {
      comedians,
      goToComedianDetail
    };
  }
};
</script>

<style>
.comedian-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comedian-card:hover {
  background-color: #f5f5f5;
}
</style>
