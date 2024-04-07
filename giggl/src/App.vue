<template>
  <v-app>
    <header>
      <!-- App Bar -->
      <v-app-bar :elevation="2" class="thin-navbar">

        <!-- Hamburger Menu -->        
        <v-btn icon @click="drawer = !drawer" class="d-md-none">
          🍔
        </v-btn>

        <!-- Home button -->
        <router-link :to="{ name: 'dashboard' }">
          <v-btn color="black">
            <i class="fa-solid fa-house small-icon"></i>
          </v-btn>
        </router-link>
        
        <v-spacer></v-spacer>
        
        <!-- <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="search-bar"
          @keyup.enter="performSearch"
        ></v-text-field> -->

        <v-spacer></v-spacer>
        
        <router-link :to="{ name: 'create' }" v-if="isSuperuser">
          <v-btn color="black">
            <i class="fa-solid fa-plus small-icon"></i>
          </v-btn>
        </router-link>

        <router-link :to="{ name: 'login' }">
          <v-btn color="black">
            <i class="fa-solid fa-user small-icon"></i>
          </v-btn>
        </router-link>

      </v-app-bar>

       <!-- Navigation Drawer for mobile screens -->
       <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
            <v-list-item :style="{ marginTop: '2rem' }">
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
        </v-list>
      </v-navigation-drawer>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>
    
    <Footer />
  </v-app>
</template>


<script>
import { mapState } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      drawer: false,
      search: '', 
    }
  },
  computed: {
  ...mapState(['isSuperuser']),
  },
  methods: {
    performSearch() {
      console.log(this.search);
    }
  }
}

</script>

<style scoped>

header {
  padding: 1rem 0;
  margin-bottom: 20px;
}
.v-app-bar.thin-navbar {
  min-height: 28px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;

}

.v-app-bar .v-btn {
  margin: 0 8px;
  padding: 8px 16px;
}

.small-icon {
  font-size: 16px;
}

.search-bar {
  max-width: 600px;
  padding-left: 3.5rem;
}


.burger-btn {
  margin-bottom: 8px;
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
