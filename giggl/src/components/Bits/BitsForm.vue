<template>
  <div>
    <input v-model="bit.comedian" placeholder="Comedian">
    <textarea v-model="bit.description" placeholder="Description"></textarea>
    <button @click="submitForm">Update</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getBit, updateBit } from '@/services/api.js';

export default {
  props: ['id'],
  data() {
    return {
      bit: {
        comedian: '',
        description: ''
      }
    };
  },
  mounted() {
    if (this.id) {
      getBit(this.id).then(response => {
        this.bit = response.data;
      });
    }
  },
  methods: {
    submitForm() {
      updateBit(this.id, this.bit).then(() => {
        this.$emit('refreshBits');
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