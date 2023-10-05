<template>
    <div>
      <ComediansList @viewComedian="viewComedian" />
    </div>
  </template>
  
  <script>
  import ComediansList from './ComediansList.vue';
  
  export default {
    components: {
      ComediansList
    }
  }
  </script>
  