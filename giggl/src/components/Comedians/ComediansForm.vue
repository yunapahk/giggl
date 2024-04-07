<template>
  <div class="center-container">
    <v-form class="form-content" ref="form" @submit.prevent="submitForm">

      <!-- Profile Picture -->
      <div class="profile-picture-container">
        <img v-if="comedian.profile_picture && comedian.profile_picture !== ''" :src="comedian.profile_picture" alt="Profile Picture" class="profile-picture" />
        <img v-else src="@/assets/defaultcomedian.png" alt="Default Profile Picture" class="profile-picture" />
      </div>

      <v-text-field v-model="comedian.name" label="Comedian" outlined full-width></v-text-field>
      <v-text-field v-model="comedian.profile_picture" label="Image URL" outlined full-width></v-text-field>


      <v-btn type="submit" color="primary">{{ isUpdateMode ? 'Update' : 'Create' }}</v-btn>
    </v-form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api.js';

export default {
  props: ['id'],
  setup(props) {
    const router = useRouter();

    const comedian = ref({
      name: '',
      profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    });


    const isUpdateMode = ref(!!props.id);

    onMounted(() => {
      if (isUpdateMode.value) {
        api.getComedian(props.id).then(response => {
          comedian.value = response.data;
        });
      }
    });

    const submitForm = () => {
      const formData = new FormData();
      formData.append('name', comedian.value.name);
      if (comedian.value.profile_picture) {
        formData.append('profile_picture', comedian.value.profile_picture);
      }

      if (isUpdateMode.value) {
        api.updateComedian(props.id, formData).then(() => {
          router.push('/comedians');
        });
      } else {
        api.addComedian(formData).then(() => {
          router.push('/comedians');
        });
      }
    };

    return {
      comedian,
      isUpdateMode,
      submitForm
    };
  }
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; 
  margin-top: 8rem;
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%; 
  max-width: 600px; 
}

.profile-picture-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
.form-content .v-text-field {
  width: 100%;
}

.form-content .v-input__slot {
  width: 100%;
}


</style>