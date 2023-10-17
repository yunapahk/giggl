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

    <!-- Podcasts Carousel Component -->
    <h1>Podcasts</h1>
    <div class="podcasts-carousel">
      <carousel :items-to-show="1">
        <slide v-for="(podcastGroup, index) in podcastSlides" :key="index" class="slide">
          <router-link v-for="podcast in podcastGroup" :key="podcast.id" :to="`/podcasts/${podcast.id}`">
            <div class="card">
              <h3>{{ podcast.podcast_title }}</h3>
              <p>{{ podcast.name }}</p>
              <p>{{ podcast.comedians }}</p>
              <div v-if="podcast.youtube_video_id">
                <iframe :src="`https://www.youtube.com/embed/${podcast.youtube_video_id}?rel=0&showinfo=0`" width="250" height="140" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </router-link>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <v-spacer></v-spacer>
    
    <!-- Tour Dates Carousel Component -->
    <h1>Tour Dates</h1>
    <div class="tourdates-carousel">
      <carousel :items-to-show="1">
        <slide v-for="(tourdateGroup, index) in tourdateSlides" :key="index" class="slide">
          <router-link v-for="tourdate in tourdateGroup" :key="tourdate.id" :to="`/tourdates/${tourdate.id}`">
            <div class="card">
              <h3>{{ tourdate.comedians }}</h3>
              <h4>{{ tourdate.tour }}</h4>
              <p>{{ tourdate.dates }}</p>
              <a :href="tourdate.link" target="_blank" @click.stop>View Link</a>
            </div>
          </router-link>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>


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
      comedianSlides: [],
      podcasts: [],
      podcastsPerSlide: 4,
      podcastSlides: [],
      tourdates: [],
tourdatesPerSlide: 4,
tourdateSlides: [],
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

    api.getPodcasts().then(response => {
      this.podcasts = response.data;
      for (let i = 0; i < this.podcasts.length; i += this.podcastsPerSlide) {
        this.podcastSlides.push(this.podcasts.slice(i, i + this.podcastsPerSlide));
      }
    });

    api.getTourdates().then(response => {
  this.tourdates = response.data;
  for (let i = 0; i < this.tourdates.length; i += this.tourdatesPerSlide) {
    this.tourdateSlides.push(this.tourdates.slice(i, i + this.tourdatesPerSlide));
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
  margin-top: 10rem;
  margin-bottom: 2rem;
  text-align: center;
}

h3 { 
  margin-top: 2rem;
  margin-bottom: .5rem;
  text-decoration: none;
  color: black;
}

.comedians-carousel, .podcasts-carousel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
}

::v-deep .carousel {
    width: 100%;
}

::v-deep .carousel__navigation .carousel__arrow--left,
::v-deep .carousel__navigation .carousel__arrow--right {
  z-index: 2;
}

.slide {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px; 
  margin-bottom: 2rem;
}

.profile-picture {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.slide ::v-deep a {
  text-decoration: none; 
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide ::v-deep a:hover {
  color: gray;  
  text-decoration: none; 
}

@media (max-width: 768px) {
  .slide {
    flex-direction: column;
  }

  .card {
    margin-bottom: 15px;
  }
}

</style>
