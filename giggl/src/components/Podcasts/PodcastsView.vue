<template>
    <div>
      <PodcastsList @viewPodcast="viewPodcast" />
    </div>
  </template>
  
  <script>
  import PodcastsList from './PodcastsList.vue';
  
  export default {
    components: {
      PodcastsList
    },
    methods: {
      viewPodcast(podcast) {
        this.$router.push(`/podcasts/${podcast.id}`);
      }
    }
  }
  </script>
  