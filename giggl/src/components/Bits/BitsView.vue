<template>
  <div>
    <BitsForm :bitToEdit="selectedBit" @refreshBits="fetchBits" />
    <BitsList @editBit="editBit" @refreshBits="fetchBits" />
  </div>
</template>

<script>
import BitsForm from './BitsForm.vue';
import BitsList from './BitsList.vue';
import { getBits } from '@/services/api.js';

export default {
  components: {
    BitsForm,
    BitsList
  },
  data() {
    return {
      selectedBit: null
    };
  },
  methods: {
    fetchBits() {
      getBits().then(response => {
      }).catch(error => {
        console.error("Error fetching bits:", error);
      });
    },
    editBit(bit) {
      this.selectedBit = bit;
    }
  },
  mounted() {
    this.fetchBits();
  }
}
</script>
