<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="podcast.name" label="Name of Podcast" outlined></v-text-field>
      <v-text-field v-model="podcast.comedians" label="Comedians" outlined></v-text-field>
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
      podcast: {
        name: '',
        comedians: '',
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
      api.getPodcast(this.id).then(response => {
        this.podcast = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      if (this.isUpdateMode) {
        api.updatePodcast(this.id, this.podcast).then(() => {
          this.$emit('refreshPodcasts'); 
          this.router.push('/podcasts');
        });
      } else {
        api.addPodcast(this.podcast).then(() => {
          this.$emit('refreshPodcasts'); 
          this.router.push('/podcasts');
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
