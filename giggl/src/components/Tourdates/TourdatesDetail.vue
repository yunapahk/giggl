<template>
  <div v-if="tourdate">
    <h3>{{ tourdate.comedians }}</h3>
    <p>{{ tourdate.tour }}</p>
    <p>{{ tourdate.dates }}</p>
    <p>{{ tourdate.link }}</p>
    <button @click="editTourdate">Edit</button>
    <button @click="deleteTourdate">Delete</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import api from '@/services/api.js'; 

export default {
  props: ['id'],
  data() {
    return {
      tourdate: null
    };
  },
  mounted() {
    this.fetchTourdateDetail();
  },
  methods: {
    fetchTourdateDetail() {
      api.getTourdate(this.id).then(response => { 
        this.tourdate = response.data;
      }).catch(error => {
        console.error("Error fetching tourdate details:", error);
      });
    },
    editTourdate() {
      this.$router.push(`/tourdates/${this.id}/edit`);
    },
    deleteTourdate() {
      api.deleteTourdate(this.id).then(() => {
        // After successful deletion, navigate to tourdates list
        this.$router.push('/tourdates');
      }).catch(error => {
        console.error("Error deleting tourdate:", error);
      });
    }
  }
};
</script>
