<template>
  <div v-if="comedian">
    <h3>{{ comedian.name }}</h3>
    <button @click="editComedian">Edit</button>
    <button @click="deleteComedian">Delete</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { getComedian, deleteComedian as apiDeleteComedian } from '@/services/api.js';

export default {
  props: ['id'],
  data() {
    return {
      comedian: null
    };
  },
  mounted() {
    this.fetchComedianDetail();
  },
  methods: {
    fetchComedianDetail() {
      getComedian(this.id).then(response => {
        this.comedian = response.data;
      }).catch(error => {
        console.error("Error fetching comedian details:", error);
      });
    },
    editComedian() {
      this.$router.push(`/comedians/${this.id}/edit`);
    },
    deleteComedian() {
      apiDeleteComedian(this.id).then(() => {
        // After successful deletion, navigate to comedians list
        this.$router.push('/comedians');
      }).catch(error => {
        console.error("Error deleting comedian:", error);
      });
    }
  }
};
</script>
