import ComediansList from '@/components/Comedians/ComediansList.vue';
import ComediansDetail from '@/components/Comedians/ComediansDetail.vue';
import ComediansForm from '@/components/Comedians/ComediansForm.vue';

const comediansRoutes = [
  { path: '/comedians/add', component: ComediansForm },               
  { path: '/comedians/:id/edit/', component: ComediansForm, props: true }, 
  { path: '/comedians/:id', component: ComediansDetail, props: true },   
  { path: '/comedians', component: ComediansList }                       
]

export default comediansRoutes

