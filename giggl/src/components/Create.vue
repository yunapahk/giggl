<template>
  <div class="centered-container">
    <!-- Vuetify Container for layout -->
    <v-container fluid>
      <div class="icon-container">
        <!-- Bit Icon -->
        <div @click="selectForm('bits')" :class="{ 'selected-icon': selectedForm === 'bits' }">
          <img class="icon" src="@/assets/bits.png" alt="Bits Icon" />
        </div>

        <!-- Comedian Icon -->
        <div @click="selectForm('comedians')" :class="{ 'selected-icon': selectedForm === 'comedians' }">
          <img class="icon" src="@/assets/comedians.png" alt="Comedians Icon" />
        </div>

        <!-- Podcast Icon -->
        <div @click="selectForm('podcasts')" :class="{ 'selected-icon': selectedForm === 'podcasts' }">
          <img class="icon" src="@/assets/podcasts.png" alt="Podcasts Icon" />
        </div>

        <!-- Tour Date Icon -->
        <div @click="selectForm('tourdates')" :class="{ 'selected-icon': selectedForm === 'tourdates' }">
          <img class="icon" src="@/assets/tourdates.png" alt="Tourdates Icon" />
        </div>
      </div>
    </v-container>
    
    <div v-if="showForm" class="form-container">
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
        selectedForm: '',
        showForm: false 
      };
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm;
      },
      selectForm(formType) {
        this.selectedForm = formType;
        this.showForm = true;  
      }
    }
  };
</script>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 60px;
}

.icon-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.form-container {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}


.icon {
  width: 45px;
  height: 45px;
  cursor: pointer;
}
</style>
