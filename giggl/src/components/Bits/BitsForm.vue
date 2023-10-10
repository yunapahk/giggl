<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="bit.comedian" label="Comedian" outlined></v-text-field>
      <v-textarea v-model="bit.description" label="Description" outlined></v-textarea>
      <v-btn type="submit" color="primary">{{ isUpdateMode ? 'Update' : 'Create' }}</v-btn>
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
      },
      isUpdateMode: !!this.id  
    };
  },
  setup() {
    const router = useRouter(); 

    return {
      router 
    };
  },
  mounted() {
    if (this.isUpdateMode) {
      api.getBit(this.id).then(response => {
        this.bit = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      if (this.isUpdateMode) {
        // Update
        api.updateBit(this.id, this.bit).then(() => {
          this.$emit('refreshBits');
          this.router.push('/bits');
        });
      } else {
        // Create
        api.addBit(this.bit).then(() => {
          this.$emit('refreshBits');
          this.router.push('/bits');
        });
      }
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
