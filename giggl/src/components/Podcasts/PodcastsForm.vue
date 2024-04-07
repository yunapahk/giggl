<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">
      <v-text-field v-model="podcast.name" label="Name of Podcast" outlined></v-text-field>
      <v-text-field v-model="podcast.comedians" label="Comedians" outlined></v-text-field>
      <v-text-field v-model="podcast.podcast_title" label="Podcast Title" outlined></v-text-field>

      <!-- YouTube Video ID Input -->
      <v-text-field v-model="podcast.youtube_video_id" label="YouTube Video ID" outlined></v-text-field>

      <!-- YouTube Video Preview -->
      <div v-if="podcast.youtube_video_id">
        <iframe :src="`https://www.youtube.com/embed/${podcast.youtube_video_id}?rel=0&showinfo=0`" width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div>

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
        podcast_title: '',
        youtube_video_id: ''  
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
  margin-top: 8rem;
}

.form-content {
  width: 80%; 
  max-width: 600px; 
}
</style>
