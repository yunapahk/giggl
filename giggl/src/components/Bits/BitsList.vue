<template>
  <div>
    <!-- Display bits as cards -->
    <div v-for="bit in bits" :key="bit.id" class="bit-card" @click="goToBitEdit(bit.id)">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getBits } from '@/services/api.js';

export default {
  setup() {
    const bits = ref([]);
    const router = useRouter();

    onMounted(() => {
      getBits().then(response => {
        bits.value = response.data;
      });
    });

    const goToBitEdit = (id) => {
      router.push(`/bits/${id}/edit`);
    };

    return {
      bits,
      goToBitEdit
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
