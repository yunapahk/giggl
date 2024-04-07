<template>
  <div class="search-container">
    <div class="search">
      <v-text-field v-model="searchQuery" label="Search..." solo></v-text-field>
    </div>
  </div>

  <div class="cards-container">
    <router-link v-for="item in filteredItems" :key="item.id" :to="`/${item.type}/${item.id}`" class="card-link">
      <div class="card">
        <h3>{{ item.name }}</h3>

        <template v-if="item.type === 'comedian'">
          <v-img class="profile-picture" :src="item.profile_picture" width="150" height="150"></v-img>
        </template>

        <template v-else-if="item.type === 'podcast'">
          <p style="margin-bottom: 0.5rem; margin-top: 1rem;">{{ item.podcast_title }}</p>
          <p style="margin-bottom: 1rem;">{{ item.comedians }}</p>
          <iframe :src="'https://www.youtube.com/embed/' + item.youtube_video_id" width="250" height="140" frameborder="0" style="margin-bottom: 1rem;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </template>

        <template v-else-if="item.type === 'tourdate'">
          <div class="tourdate">
            <p>{{ item.comedians }}</p>
            <p>{{ item.tour }}</p>
            <p>{{ item.dates }}</p>
            <a :href="item.link" target="_blank" @click.stop>View Link</a>
          </div>
        </template>       
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import api from '@/services/api.js';

export default {
  setup() {
    const items = ref([]);
    const searchQuery = ref("");

    onMounted(async () => {
      const [comediansResponse, podcastsResponse, tourdatesResponse] = await Promise.all([
        api.getComedians(),
        api.getPodcasts(),
        api.getTourdates(),
      ]);
      
      items.value = [...comediansResponse.data.map(item => ({ ...item, type: 'comedian' })), 
                     ...podcastsResponse.data.map(item => ({ ...item, type: 'podcast' })),
                     ...tourdatesResponse.data.map(item => ({ ...item, type: 'tourdate' }))];
      });

      const filteredItems = computed(() => {
  return items.value.filter(item => {
    if (item.type === 'comedian') {
      return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    } else if (item.type === 'podcast') {
      return item.podcast_title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
             item.comedians.toLowerCase().includes(searchQuery.value.toLowerCase());
    }
    else if (item.type === 'tourdate') {
      return item.comedians.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
             item.tour.toLowerCase().includes(searchQuery.value.toLowerCase());
    }
    return false; 
  });
});


    return {
      filteredItems,
      searchQuery,
    };
  },
};
</script>

<style scoped>
.search-container {
  display: flex;     
  justify-content: center; 
  align-items: center;    
  margin-top: 5rem;  
  margin-bottom: 4rem;
}

.search {
  width: 80%; 
  max-width: 600px; 
  border-radius: 8px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border: transparent;
  margin: 0 auto;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 20px;
  margin: 60px 30px; 
  padding: 0;
}

.card {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  border: 1px solid #ccc;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; 
}

.card:hover {
  transform: scale(1.03); 
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-picture, iframe {
  max-width: 100%;
  height: auto; 
}

.card-link {
  text-decoration: none;
  color: inherit;
}

::v-deep .v-img__img,
::v-deep .v-img__img--contain {
  object-fit: cover !important;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>