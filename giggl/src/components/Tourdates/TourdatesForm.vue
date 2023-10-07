<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="tourdate.comedians" label="Comedians" outlined></v-text-field>
      <v-textarea v-model="tourdate.tour" label="Name of Tour" outlined></v-textarea>
      <v-textarea v-model="tourdate.dates" label="Dates" outlined></v-textarea>
      <v-textarea v-model="tourdate.link" label="Link" outlined></v-textarea>
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
      tourdate: {
        comedians: '',
        tour: '',
        dates: '',
        link: ''
      }
    };
  },
  mounted() {
    if (this.id) {
      api.getTourdate(this.id).then(response => { 
        this.tourdate = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      api.updateTourdate(this.id, this.tourdate).then(() => { // Using api object
        this.$emit('refreshTourdates');
        this.$router.push('/');
      });
    }
  },
  setup() {
    const router = useRouter();
    return { router };
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
