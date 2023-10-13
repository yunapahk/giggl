<template>
  <v-footer class="custom-footer text-center d-flex flex-column">    
    <div>
      <template v-for="icon in icons">
         <v-btn
          v-if="!icon.startsWith('fab ') && !icon.startsWith('fas ')"
          :key="'vuetify-' + icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
        <v-btn
          v-else
          :key="'fontawesome-' + icon"
          class="mx-4"
          variant="text"
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
    icons: [
      'fab fa-github',
      'fab fa-x-twitter',
      'fab fa-linkedin',
      'fas fa-kiwi-bird',
    ],
  }),
}
</script>

<style scoped>
.custom-footer {
  /* background: linear-gradient(to bottom, rgb(149, 132, 184), rgb(84, 70, 129)); */
  margin-top: 30rem;
  background-color: rgb(93, 91, 91);
  padding: 10px 0;
  height: auto; 
}

.custom-footer .v-btn,
.custom-footer .v-btn i {
  color: white !important;
}

.year-name,
.summary {
  color: white;
}
</style>
