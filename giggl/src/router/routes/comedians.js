import ComediansList from '@/components/Comedians/ComediansList.vue';
import ComediansDetail from '@/components/Comedians/ComediansDetail.vue';

const comediansRoutes = [
  { path: '/comedians', component: ComediansList },
  { path: '/comedians/:id', component: ComediansDetail, props: true }
];

export default comediansRoutes;
