<template>
  <div>
    <div v-for="bit in bits" :key="bit.id" class="bit-card" @click="showBitDetails(bit)">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
    </div>

    <div v-if="selectedBit" class="modal">
      <h3>{{ selectedBit.comedian }}</h3>
      <p>{{ selectedBit.description }}</p>
      <button @click="editBit(selectedBit)">Edit</button>
      <button @click="deleteBit(selectedBit.id)">Delete</button>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'; 
import { getBits, deleteBit } from '@/services/api.js';

export default {
  setup() {
    const bits = ref([]);

    const fetchBits = () => {
      getBits().then(response => {
        bits.value = response.data; 
      });
    };

    const editBit = (bit) => {
      this.$emit('editBit', bit);
    };

    const deleteBit = (id) => {
      deleteBit(id).then(() => {
        fetchBits();
      });
    };

    onMounted(() => {
      fetchBits();
    });

    return {
      bits,
      fetchBits,
      editBit,
      deleteBit
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

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
}
</style>