<template>
  <v-app>  
    <header>
      <v-app-bar :elevation="2" class="thin-navbar">
        
        <!-- Home button on the left -->
        <router-link :to="{ name: 'dashboard' }">
          <v-btn color="white">
            <i class="fa-solid fa-house small-icon" style="color: #ffffff;"></i>
          </v-btn>
        </router-link>

        <!-- Spacer to push the rest to the center -->
        <v-spacer></v-spacer>

        <!-- Rest of the buttons -->
        <router-link :to="{ name: 'bits' }">
          <v-btn color="white" text>Bits</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="white" text>Comedians</v-btn>
        </router-link>
        <router-link :to="{ name: 'podcasts' }">
          <v-btn color="white" text>Podcasts</v-btn>
        </router-link>
        <router-link :to="{ name: 'tourdates' }">
          <v-btn color="white" text>Tour Dates</v-btn>
        </router-link>

        <!-- Spacer to ensure the center alignment -->
        <v-spacer></v-spacer>

      </v-app-bar>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
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

.v-app-bar.thin-navbar {
  height: 55px;
  display: flex;
  align-items: center;
  background-color: rgb(89, 89, 95);
  margin-bottom: 20px;
}
.v-btn {
  padding: 0px 50px 50px 60px;
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

.small-icon {
  font-size: 16px;
  
}

</style>
