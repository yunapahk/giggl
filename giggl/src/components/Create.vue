<template>
    <div>
      <!-- Vuetify Radio buttons to select the form -->
      <v-container fluid>
        <v-radio-group v-model="selectedForm" inline>
          <v-radio label="Bits" value="bits"></v-radio>
          <v-radio label="Comedians" value="comedians"></v-radio>
          <v-radio label="Podcasts" value="podcasts"></v-radio>
          <v-radio label="Tour Dates" value="tourdates"></v-radio>
        </v-radio-group>
      </v-container>
  
      <button @click="toggleForm">Create</button>
  
      <div v-if="showForm">
        <component :is="selectedForm + 'Form'"></component>
      </div>
    </div>
  </template>
  
  <script>
 import BitsForm from '@/components/Bits/BitsForm.vue';
  import ComediansForm from '@/components/Comedians/ComediansForm.vue';
  import PodcastsForm from '@/components/Podcasts/PodcastsForm.vue';
  import TourdatesForm from '@/components/Tourdates/TourdatesForm.vue';
  
  
  export default {
    components: {
      BitsForm,
      ComediansForm,
      PodcastsForm,
      TourdatesForm
    },
    data() {
      return {
        selectedForm: 'bits', 
        showForm: false 
      };
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm; 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>