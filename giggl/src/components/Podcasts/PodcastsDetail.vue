<template>
    <div v-if="podcast">
      <h3>{{ podcast.name }}</h3>
      <p>{{ podcast.comedians }}</p>
      <button @click="editPodcast">Edit</button>
      <button @click="deletePodcast">Delete</button>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { getPodcast, deletePodcast as apiDeletePodcast } from '@/services/api.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        podcast: null
      };
    },
    mounted() {
      this.fetchPodcastDetail();
    },
    methods: {
      fetchPodcastDetail() {
        getPodcast(this.id).then(response => {
          this.podcast = response.data;
        }).catch(error => {
          console.error("Error fetching podcast details:", error);
        });
      },
      editPodcast() {
        this.$router.push(`/podcasts/${this.id}/edit`);
      },
      deletePodcast() {
        apiDeletePodcast(this.id).then(() => {
          // After successful deletion, navigate to podcasts list
          this.$router.push('/podcasts');
        }).catch(error => {
          console.error("Error deleting podcast:", error);
        });
      }
    }
  };
  </script>
  