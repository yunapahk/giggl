<template>
    <div>
      <input v-model="tourdate.comedians" placeholder="Comedians">
      <textarea v-model="tourdate.tour" placeholder="Name of Tour"></textarea>
      <textarea v-model="tourdate.dates" placeholder="Dates"></textarea>
      <textarea v-model="tourdate.link" placeholder="Link"></textarea>
      <button @click="submitForm">Update</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getTourdate, updateTourdate } from '@/services/api.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        tourdate: {
          comedians: '',
          tour: '',
          dates: '',
          link: ''
        }
      };
    },
    mounted() {
      if (this.id) {
        getBit(this.id).then(response => {
          this.tourdate = response.data;
        });
      }
    },
    methods: {
      submitForm() {
        updateTourdate(this.id, this.tourdate).then(() => {
          this.$emit('refreshTourdates');
          this.$router.push('/');
        });
      }
    },
    setup() {
      const router = useRouter();
      return { router };
    }
  };
  </script>