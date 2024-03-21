<template>
    <!-- Navigation Buttons Below the App Bar -->
      <div class="navigation-buttons">
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="grey" text>All</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="grey" text>Specials</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="grey" text>Recently Uploaded</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="grey" text>Comedians</v-btn>
        </router-link>
        <router-link :to="{ name: 'podcasts' }">
          <v-btn color="grey" text>Podcasts</v-btn>
        </router-link>
        <router-link :to="{ name: 'comedians' }">
          <v-btn color="grey" text>Coming Soon</v-btn>
        </router-link>
        <router-link :to="{ name: 'tourdates' }">
          <v-btn color="grey" text>Tour Dates</v-btn>
        </router-link>
      </div>

    <div>
    <!-- Podcasts Carousel Component -->
    <!-- <h1>Podcasts</h1> -->
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
    
    <!-- Comedians Carousel Component -->
    <!-- <h1>Comedians</h1> -->
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

    <!-- Tour Dates Carousel Component -->
    <!-- <h1>Tour Dates</h1> -->
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

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin-top: 8rem;
  margin-bottom: 2rem;
  text-align: center;
}

h3 { 
  margin-top: 2rem;
  margin-bottom: .5rem;
  text-decoration: none;
  color: black;
}

 .podcasts-carousel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
}

.comedians-carousel, .tourdates-carousel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 5rem;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
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

::v-deep .v-img__img,
::v-deep .v-img__img--contain {
  object-fit: cover !important;
}
router-link > .v-btn {
  background-color: #f0f0f0; 
  color: #000; 
  text-transform: none;
  box-shadow: none; 
  border-radius: 4px;
  margin-right: 8px;
}

router-link > .v-btn:hover {
  background-color: #e0e0e0; 
}

router-link.active > .v-btn, router-link > .v-btn.router-link-exact-active {
  background-color: #000; 
  color: #fff; 
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 8px;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.navigation-buttons > router-link {
  margin: 0 10px; 
}

.v-btn {
  padding: 0.5rem 1rem;
  border: none; 
  background-color: white; 
  color: black;
  text-transform: none; 
  border-radius: 4px; 

}

.v-btn:hover {
  background-color: #f5f5f5; 
}

@media (max-width: 768px) {
  .navigation-buttons > router-link {
    margin: 0 5px;
  }

  .v-btn {
    padding: 0.4rem 0.8rem; 
    font-size: 0.9rem; 
  }

  .slide {
    flex-direction: column;
  }

  .card {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .navigation-buttons {
    flex-direction: column; 
    align-items: center; 
  }

  .navigation-buttons > router-link {
    width: 100%;
    text-align: center; 
  }
}

</style>
