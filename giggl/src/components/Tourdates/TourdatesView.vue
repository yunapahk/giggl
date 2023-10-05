<template>
  <div>
    <TourdatesList @viewTourdate="viewTourdate"/>
  </div>
</template>

<script>

import TourdatesList from './TourdatesList.vue';

export default {
components: {
    TourdatesList
  }
}
</script>
