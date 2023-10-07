<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="bit.comedian" label="Comedian" outlined></v-text-field>
      <v-textarea v-model="bit.description" label="Description" outlined></v-textarea>
      <v-btn type="submit" color="primary">Update</v-btn>
    </v-form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';

export default {
  props: ['id'],
  data() {
    return {
      bit: {
        comedian: '',
        description: ''
      }
    };
  },
  setup() {
    const router = useRouter(); // Using useRouter

    return {
      router // Making it available in the methods
    };
  },
  mounted() {
    if (this.id) {
      api.getBit(this.id).then(response => {
        this.bit = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      api.updateBit(this.id, this.bit).then(() => {
        this.$emit('refreshBits');
        this.router.push('/bits');
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
  height: 60vh; 
}

.form-content {
  width: 80%; 
  max-width: 600px; 
}
</style>
