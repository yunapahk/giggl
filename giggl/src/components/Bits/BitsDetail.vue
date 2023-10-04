<template>
    <div v-if="bit">
      <h3>{{ bit.comedian }}</h3>
      <p>{{ bit.description }}</p>
      <button @click="editBit">Edit</button>
      <button @click="deleteBit">Delete</button>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { getBit, deleteBit as apiDeleteBit } from '@/services/api.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        bit: null
      };
    },
    mounted() {
      getBit(this.id).then(response => {
        this.bit = response.data;
      }).catch(error => {
        console.error("Error fetching bit details:", error);
      });
    },
    methods: {
      editBit() {
      },
      deleteBit() {
        apiDeleteBit(this.id).then(() => {
          const router = useRouter();
          router.push('/');
        }).catch(error => {
          console.error("Error deleting bit:", error);
        });
      }
    }
  };
  </script>
  