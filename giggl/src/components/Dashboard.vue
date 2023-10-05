<template>
    <div>
      <!-- Search Bar (You can implement this as needed) -->
      <v-text-field label="Search" solo clearable></v-text-field>
      
      <!-- Buttons linking to routes -->
      <v-btn block large color="primary" class="my-2" :to="{ name: 'bits' }">
        Bits
      </v-btn>
      <v-btn block large color="secondary" class="my-2" :to="{ name: 'comedians' }">
        Comedians
      </v-btn>
      <v-btn block large color="accent" class="my-2" :to="{ name: 'podcasts' }">
        Podcasts
      </v-btn>
      <v-btn block large color="info" class="my-2" :to="{ name: 'tourdates' }">
        Tour Dates
      </v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard"
  }
  </script>
  