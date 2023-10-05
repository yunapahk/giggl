// Import Dashboard Component
import Dashboard from '@/components/Dashboard.vue';

// Import Bits Components
import BitsList from '@/components/Bits/BitsList.vue';
import BitsDetail from '@/components/Bits/BitsDetail.vue';
import BitsForm from '@/components/Bits/BitsForm.vue';

// Import Comedians Components
import ComediansList from '@/components/Comedians/ComediansList.vue';
import ComediansDetail from '@/components/Comedians/ComediansDetail.vue';
import ComediansForm from '@/components/Comedians/ComediansForm.vue';

// Import Podcasts Components
import PodcastsList from '@/components/Podcasts/PodcastsList.vue';
import PodcastsDetail from '@/components/Podcasts/PodcastsDetail.vue';
import PodcastsForm from '@/components/Podcasts/PodcastsForm.vue';

// Import Tourdates Components
import TourdatesList from '@/components/Tourdates/TourdatesList.vue';
import TourdatesDetail from '@/components/Tourdates/TourdatesDetail.vue';
import TourdatesForm from '@/components/Tourdates/TourdatesForm.vue';

// Routes
export default [
    // Dashboard
    { path: '/', name: 'dashboard', component: Dashboard },

    // Bits
    { path: '/bits/add', component: BitsForm },               
    { path: '/bits/:id/edit/', component: BitsForm, props: true }, 
    { path: '/bits/:id', component: BitsDetail, props: true },   
    { path: '/bits', name: 'bits', component: BitsList },
    
    // Comedians
    { path: '/comedians/add', component: ComediansForm },               
    { path: '/comedians/:id/edit/', component: ComediansForm, props: true }, 
    { path: '/comedians/:id', component: ComediansDetail, props: true },   
    { path: '/comedians', name: 'comedians', component: ComediansList },

    // Podcasts
    { path: '/podcasts/add', component: PodcastsForm },               
    { path: '/podcasts/:id/edit/', component: PodcastsForm, props: true }, 
    { path: '/podcasts/:id', component: PodcastsDetail, props: true },   
    { path: '/podcasts', name: 'podcasts', component: PodcastsList },   

    // Tourdates
    { path: '/tourdates/add', component: TourdatesForm },               
    { path: '/tourdates/:id/edit/', component: TourdatesForm, props: true }, 
    { path: '/tourdates/:id', component: TourdatesDetail, props: true },   
    { path: '/tourdates', name: 'tourdates', component: TourdatesList } 
  ]