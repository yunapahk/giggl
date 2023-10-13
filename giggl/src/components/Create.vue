<template>
  <div class="centered-container">
    <h1>Create</h1>
    <!-- Vuetify Container for layout -->
    <v-container fluid>
      <div class="icon-container">
        <!-- Bit Icon -->
        <div @click="selectForm('bits')" :class="{ 'selected-icon': selectedForm === 'bits' }" data-tooltip="Bit">
          <img class="icon" src="@/assets/bits.png" alt="Bits Icon" />
        </div>

        <!-- Comedian Icon -->
        <div @click="selectForm('comedians')" :class="{ 'selected-icon': selectedForm === 'comedians' }" data-tooltip="Comedian">
          <img class="icon" src="@/assets/comedians.png" alt="Comedians Icon" />
        </div>

        <!-- Podcast Icon -->
        <div @click="selectForm('podcasts')" :class="{ 'selected-icon': selectedForm === 'podcasts' }" data-tooltip="Podcast">
          <img class="icon" src="@/assets/podcasts.png" alt="Podcasts Icon" />
        </div>

        <!-- Tour Date Icon -->
        <div @click="selectForm('tourdates')" :class="{ 'selected-icon': selectedForm === 'tourdates' }" data-tooltip="Tour Date">
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
h1 {
  margin-bottom: 10px;
  color: grey;
}
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

.icon-container > div {
    position: relative;
}

.icon-container > div[data-tooltip]:hover:after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    margin-bottom: 10px;
    z-index: 1;
}

.icon-container > div[data-tooltip]:hover:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0,0,0,0.7);
    margin-bottom: 4px;
    z-index: 1;
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
