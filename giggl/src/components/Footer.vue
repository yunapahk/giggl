<template>
  <v-footer class="custom-footer text-center d-flex flex-column">    
    <div>
      <!-- Separate the envelope icon. The default from font-awesome was too large compared to the other icons -->
      <v-btn class="mx-4 custom-btn" variant="text" @click="copyEmail">
        <div class="envelope-icon">
          <i class="fa-regular fa-paper-plane"></i>
        </div>
        <div v-if="showCopyMessage" class="copy-popup">Email copied!</div>
      </v-btn>
      
      <template v-for="(icon, index) in icons">
        <v-btn
          v-if="!icon.startsWith('fab ') && !icon.startsWith('fas ')"
          :key="'vuetify-' + icon"
          class="mx-4 custom-btn"
          :icon="icon"
          variant="text"
          :href="links[index]"
        ></v-btn>
        <v-btn
          v-else
          :key="'fontawesome-' + icon"
          class="mx-4 custom-btn"
          variant="text"
          :href="links[index]"
        >
          <i :class="icon"></i>
        </v-btn>
      </template>
    </div>

    <div class="summary">
      Just a developer who loves stand-up comedy. Based in Los Angeles, CA.
    </div>

    <v-divider></v-divider>

    <div class="year-name">
      {{ new Date().getFullYear() }} — <strong>Yuna Pahk</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    showCopyMessage: false,
    icons: [
      'fab fa-github',
      'fab fa-linkedin',
      'fas fa-kiwi-bird',
    ],
    links: [ 
      'https://github.com/yunapahk/giggl-frontend',
      'https://www.linkedin.com/in/yunapahk/', 
      'https://birdnest-jade.vercel.app/create' 
    ]
  }),
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText('yunapahk@gmail.com');
        this.showCopyMessage = true;
        setTimeout(() => {
          this.showCopyMessage = false;
        }, 2000);
        } catch (err) {
          console.error('Failed to copy email: ', err);
        }
      }
    }
  }
</script>

<style scoped>
.custom-footer {
  margin-top: 30rem;
  background-color: rgb(93, 91, 91);
  padding: 10px 0;
  height: auto; 
}

.custom-footer .v-btn.custom-btn,
.custom-footer .v-btn i {
  color: white !important;
  font-size: 18px;
}

.envelope-icon i {
  font-size: 16px; 
}

.year-name,
.summary {
  color: white;
}

.copy-popup {
  position: absolute;
  background-color: rgb(88, 87, 87);
  color: white;
  border-radius: 5px;
  padding: 5px;
  top: -30px;  
  left: 50%;  
  transform: translateX(-50%); 
  z-index: 1;
  font-size: 14px;
  white-space: nowrap; 
}

.summary {
  margin-top: 1rem;
  margin-bottom: .5rem;
}
</style>
