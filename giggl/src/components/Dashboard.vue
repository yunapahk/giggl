<template>
  <div>
    <!-- Slideshow Carousel Component -->
    <div class="carousel-container">
      <carousel :items-to-show="1">
        <slide v-for="image in images" :key="image.src" class="slide">
          <img :src="image.src" :alt="image.alt">
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <!-- Comedians Carousel Component -->
    <div class="carousel-container">
      <carousel :items-to-show="1">
        <slide v-for="comedian in comedians" :key="comedian.src" class="slide">
          <img :src="comedian.src" :alt="comedian.alt">
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import image1 from "@/assets/carousel/1.png";
import image2 from "@/assets/carousel/2.png";
import image3 from "@/assets/carousel/3.png";
import image4 from "@/assets/carousel/4.png";
import image5 from "@/assets/carousel/5.png";
import image6 from "@/assets/carousel/6.png";
import image7 from "@/assets/carousel/7.png";
import image8 from "@/assets/carousel/8.png";

import comedianImage1 from "@/assets/comedians/1.png";
import comedianImage2 from "@/assets/comedians/2.png";
// ... other comedian images imports

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
        { src: image8, alt: "Image 8" }
      ],
      comedians: [
        { src: comedianImage1, alt: "Comedian 1" },
        { src: comedianImage2, alt: "Comedian 2" },
        // ... other comedian images in the array
      ]
    };
  }
}
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
}

.slide {
  width: 80%;
  display: flex;         
  justify-content: center; 
  align-items: center;  
}

.slide img {
  width: 80%;
  height: 70%;
  display: block;
  margin: 0 auto;
}
</style>
