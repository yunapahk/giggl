<template>
  <div>
    <!-- Vuetify App Bar -->
    <v-app-bar :elevation="2">
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'bits' }">Bits</v-btn>
      <v-btn text :to="{ name: 'comedians' }">Comedians</v-btn>
      <v-btn text :to="{ name: 'podcasts' }">Podcasts</v-btn>
      <v-btn text :to="{ name: 'tourdates' }">Tour Dates</v-btn>
      <v-text-field label="Search" solo clearable class="mx-4"></v-text-field>
    </v-app-bar>

    <!-- Content Below App Bar -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: "Dashboard"
  }
  </script>
  