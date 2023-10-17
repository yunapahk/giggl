<template>
  <div>
    <!-- Vuetify Slideshow Carousel Component -->
    <v-carousel>
      <v-carousel-item
        v-for="image in images"
        :key="image.src"
        :src="image.src"
        cover
      ></v-carousel-item>
    </v-carousel>


    <!-- Comedians Carousel Component -->
    <h1>Comedians</h1>
    <div class="comedians-carousel">
      <carousel :items-to-show="1">
        <slide v-for="(comedianGroup, index) in comedianSlides" :key="index" class="slide">
          <router-link v-for="comedian in comedianGroup" :key="comedian.id" :to="`/comedians/${comedian.id}`">
            <div class="card">
              <v-img class="profile-picture" v-bind:src="comedian.profile_picture" width="150" height="150"></v-img>
              <h3>{{ comedian.name }}</h3>
            </div>
          </router-link>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <!-- Content Below App Bar -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import api from '@/services/api.js';  
import image1 from "@/assets/Carousel/1.png";
import image2 from "@/assets/Carousel/2.png";
import image3 from "@/assets/Carousel/3.png";
import image4 from "@/assets/Carousel/4.png";
import image5 from "@/assets/Carousel/5.png";
import image6 from "@/assets/Carousel/6.png";
import image7 from "@/assets/Carousel/7.png";
import image8 from "@/assets/Carousel/8.png";

export default {
  name: 'Dashboard',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        { src: image1, alt: "Image 1" },
        { src: image2, alt: "Image 2" },
        { src: image3, alt: "Image 3" },
        { src: image4, alt: "Image 4" },
        { src: image5, alt: "Image 5" },
        { src: image6, alt: "Image 6" },
        { src: image7, alt: "Image 7" },
        { src: image8, alt: "Image 8" },
      ],
      comedians: [],
      comediansPerSlide: 4,
      comedianSlides: []
    };
  },
  mounted() {
    api.getComedians().then(response => {
      let fetchedComedians = response.data;
      this.comedians = this.getRandomComedians(fetchedComedians, 8);

      // Split comedians into groups of 4 for each slide
      for (let i = 0; i < this.comedians.length; i += this.comediansPerSlide) {
        this.comedianSlides.push(this.comedians.slice(i, i + this.comediansPerSlide));
      }
    });
  },
  methods: {
    getRandomComedians(comedians, count) {
      let shuffled = comedians.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 7rem;
  text-align: center;
}

h3 { 
  margin-top: .5rem;
  text-decoration: none;
  color: black;
}

.carousel-container, .comedians-carousel {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.comedians-carousel {
  width: 100%;
  margin-top: 2.5rem;
  padding: 0 30px; 
  position: relative; 
  overflow: hidden; 
}

.slide {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.card {
  flex: 1;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide img {
  width: 80%;
  height: 70%;
  display: block;
  margin: 0 auto;
}

.slide ::v-deep a {
  text-decoration: none; 
  color: black;
}

.slide ::v-deep a:hover {
  color: gray;  
  text-decoration: none; 
}

</style>
