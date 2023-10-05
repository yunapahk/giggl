<template>
    <div>
      <input v-model="podcast.name" placeholder="Name of Podcast">
      <input v-model="podcast.comedians" placeholder="Comedians">
      <button @click="submitForm">Update</button>
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
      podcast: {
        name: '',
        comedians: '',
      }
    };
  },
  mounted() {
    if (this.id) {
      api.getPodcast(this.id).then(response => { 
        this.podcast = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      api.updatePodcast(this.id, this.podcast).then(() => { 
        this.$emit('refreshPodcast');
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
