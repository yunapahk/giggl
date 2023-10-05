<template>
  <v-app>  
    <header>
      <v-app-bar :elevation="2">
        <v-spacer></v-spacer> <!-- This pushes the content to the center -->

        <router-link :to="{ name: 'dashboard' }">
          <v-btn text>Dashboard</v-btn>
        </router-link>
        <router-link :to="{ name: 'bits' }">
          <v-btn text>Bits</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn text>Comedians</v-btn>
        </router-link>
        <router-link :to="{ name: 'podcasts' }">
          <v-btn text>Podcasts</v-btn>
        </router-link>
        <router-link :to="{ name: 'tourdates' }">
          <v-btn text>Tour Dates</v-btn>
        </router-link>

        <v-spacer></v-spacer> <!-- Keeps the buttons centered -->
      </v-app-bar>
    </header>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background-color: #f9f9f9;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

router-link {
  text-decoration: none;
  color: #333;  
  padding: 0.5em 1em;
  border-radius: 0.5em;
  transition: background-color 0.2s;
}

router-link:hover {
  background-color: #f5f5f5;
}

router-link.active {
  background-color: #e0e0e0;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
</style>
