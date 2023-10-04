<template>
    <div>
      <BitsForm :bitToEdit="selectedBit" @refreshBits="fetchBits" />
      <BitsList @editBit="editBit" @refreshBits="fetchBits" />
    </div>
  </template>
  
  <script>
  import BitsForm from './BitsForm.vue';
  import BitsList from './BitsList.vue';
  
  export default {
    components: {
      BitsForm,
      BitsList
    },
    data() {
      return {
        selectedBit: null
      };
    },
    methods: {
      fetchBits() {
      },
      editBit(bit) {
        this.selectedBit = bit;
      }
    }
  }
  </script>
  