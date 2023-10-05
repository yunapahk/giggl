<template>
  <div>
    <BitsList @viewBit="viewBit" />
  </div>
</template>

<script>

import BitsList from './BitsList.vue';

export default {
  components: {
    BitsList
  }
}
</script>
