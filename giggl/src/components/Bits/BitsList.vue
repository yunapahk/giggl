<template>
  <div>
    <!-- Display bits as cards -->
    <div v-for="bit in bits" :key="bit.id" class="bit-card" @click="goToBitDetail(bit.id)">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
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
.bit-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.bit-card:hover {
  background-color: #f5f5f5;
}
</style>
