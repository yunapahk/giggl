<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="tourdate.comedians" label="Comedians" outlined></v-text-field>
      <v-textarea v-model="tourdate.tour" label="Name of Tour" outlined></v-textarea>
      <v-textarea v-model="tourdate.dates" label="Dates" outlined></v-textarea>
      <v-textarea v-model="tourdate.link" label="Link" outlined></v-textarea>
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
      tourdate: {
        comedians: '',
        tour: '',
        dates: '',
        link: ''
      }
    };
  },
  computed: {
    isUpdateMode() {
      return !!this.id; // Convert to boolean, if id exists, then it's update mode.
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  mounted() {
    if (this.isUpdateMode) {
      api.getTourdate(this.id).then(response => {
        this.tourdate = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      if (this.isUpdateMode) {
      // Update
        api.updateTourdate(this.id, this.tourdate).then(() => {
          this.$emit('refreshTourdates');
          this.router.push('/tourdates');
        });
      } else {
      // Create
        api.addTourdate(this.tourdate).then(() => {
          this.$emit('refreshTourdates');
          this.router.push('/tourdates');
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
  margin-top: 5rem;
}

.form-content {
  width: 80%; 
  max-width: 600px; 
}
</style>
