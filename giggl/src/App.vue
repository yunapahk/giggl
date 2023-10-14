<template>
  <v-app>  
    <header>
      <v-app-bar :elevation="2" class="thin-navbar">
        
        <!-- Hamburger Menu -->
        <v-btn icon @click="drawer = !drawer" class="d-md-none burger-btn">
          🍔
        </v-btn>

        <!-- Home button -->
        <router-link :to="{ name: 'dashboard' }">
          <v-btn color="white">
            <i class="fa-solid fa-house small-icon" style="color: #ffffff;"></i>
          </v-btn>
        </router-link>

        <v-spacer></v-spacer>
        
        <!-- Rest of the buttons - Hidden on small screens -->
        <div class="d-none d-md-flex">
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
          <router-link :to="{ name: 'create' }">
            <v-btn color="white">
              <i class="fa-solid fa-plus small-icon" style="color: #ffffff;"></i>
            </v-btn>
          </router-link>
        </div>

        <v-spacer></v-spacer>

      </v-app-bar>
      
      <!-- Navigation Drawer for mobile screens -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'bits' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Bits</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'comedians' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Comedians</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'podcasts' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Podcasts</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'tourdates' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Tour Dates</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'create' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Create</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>

    </header>
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- Footer Component -->
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      drawer: false
    }
  }
}
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
  background: linear-gradient(to bottom, rgb(118, 82, 196), rgb(88, 62, 176));
  margin-bottom: 20px;
}


.v-btn {
  padding: 0px 50px 50px 50px;
}

.burger-btn {
  margin-bottom: 8px;
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
