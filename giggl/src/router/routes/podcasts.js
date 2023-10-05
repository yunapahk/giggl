import PodcastsList from '@/components/Podcasts/PodcastsList.vue';
import PodcastsDetail from '@/components/Podcasts/PodcastsDetail.vue';
import PodcastsForm from '@/components/Podcasts/PodcastsForm.vue';

const podcastsRoutes = [
  { path: '/podcasts/add', component: PodcastsForm },               
  { path: '/podcasts/:id/edit/', component: PodcastsForm, props: true }, 
  { path: '/podcasts/:id', component: PodcastsDetail, props: true },   
  { path: '/podcasts', component: PodcastsList }                       
]

export default podcastsRoutes

