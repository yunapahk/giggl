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
  },
  methods: {
    viewBit(bit) {
      this.$router.push(`/bits/${bit.id}`);
    }
  }
}
</script>
