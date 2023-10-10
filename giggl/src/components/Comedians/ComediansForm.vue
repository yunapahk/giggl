<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="comedian.name" label="Comedian" outlined></v-text-field>
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
      comedian: {
        name: '',
      }
    };
  },
  computed: {
    isUpdateMode() {
      return !!this.id;
    }
  },
  setup() {
    const router = useRouter(); 
    return { router };
  },
  mounted() {
    if (this.isUpdateMode) {
      api.getComedian(this.id).then(response => {
        this.comedian = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      if (this.isUpdateMode) {
        api.updateComedian(this.id, this.comedian).then(() => {
          this.$emit('refreshComedians');
          this.router.push('/comedians');
        });
      } else {
        api.addComedian(this.comedian).then(() => {
          this.$emit('refreshComedians');
          this.router.push('/comedians');
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
