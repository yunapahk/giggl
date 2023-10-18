<template>
  <div class="search-container">
    <div class="search">
      <v-text-field
        v-model="searchQuery"
        label="Search..."
        solo
      ></v-text-field>
    </div>
  </div>

  <div class="cards-container">
    <router-link 
      v-for="item in filteredItems" 
      :key="`${item.type}-${item.id}`" 
      :to="getDetailRoute(item)" 
      class="card"
    >
      <h3>{{ item.name }}</h3>
      <h3>{{ item.comedian }}</h3>
      <h3>{{ item.comedians }}</h3>
      <p>{{ item.description }}</p>
      <p>{{ item.dates }}</p>
      <p>{{ item.tour }}</p>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '@/services/api.js';

export default {
  data() {
    return {
      items: [],
      searchQuery: ''
    };
  },
  computed: {
  filteredItems() {
    return this.items.filter(item => 
      (item.name && item.name.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (item.comedian && item.comedian.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (item.comedians && item.comedians.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }
},

  methods: {
    getDetailRoute(item) {
      return `/${item.type}s/${item.id}`;
    },
    async fetchAllData() {
      try {
        const data = await api.getAllData();
        this.items = [
          ...data.bits.map(item => ({ ...item, type: 'bit' })),
          ...data.comedians.map(item => ({ ...item, type: 'comedian' })),
          ...data.podcasts.map(item => ({ ...item, type: 'podcast' })),
          ...data.tourdates.map(item => ({ ...item, type: 'tourdate' }))
        ];
      } catch (error) {
        console.error("Error fetching all data:", error);
      }
    }
  },
  created() {
    this.fetchAllData();
  }
}
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
  width: 40%;
  border-radius: 8px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  border: transparent;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  margin-top: 60px;
  margin-left: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  justify-content: center;
  width: 90%;
}

.card-link, .card-link h3 {
  text-decoration: none;
  color: black;
}

.card:hover {
  transform: scale(1.03); 
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.cards-container .card,
.cards-container .card h3,
.cards-container .card p {
  text-decoration: none;
  color: black;
}
</style>
