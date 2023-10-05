<template>
  <div v-if="bit">
    <h3>{{ bit.comedian }}</h3>
    <p>{{ bit.description }}</p>
    <button @click="editBit">Edit</button>
    <button @click="deleteBit">Delete</button>
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
