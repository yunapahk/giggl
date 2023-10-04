<script>
import api from '@/services/api.js';

export default {
  // ...
  methods: {
    submitForm() {
      if (this.isEditing) {
        api.updateBit(this.bit.id, this.bit).then(() => {
          this.$emit('refreshBits');
          this.bit = { comedian: '', description: '' };
        });
      } else {
        api.addBit(this.bit).then(() => {
          this.$emit('refreshBits');
          this.bit = { comedian: '', description: '' };
        });
      }
    }
  }
  // ...
};
</script>
