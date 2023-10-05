import TourdatesList from '@/components/Tourdates/TourdatesList.vue';
import TourdatesDetail from '@/components/Tourdates/TourdatesDetail.vue';
import TourdatesForm from '@/components/Tourdates/TourdatesForm.vue';

const tourdatesRoutes = [
  { path: '/tourdates/add', component: TourdatesForm },               
  { path: '/tourdates/:id/edit/', component: TourdatesForm, props: true }, 
  { path: '/tourdates/:id', component: TourdatesDetail, props: true },   
  { path: '/tourdates', component: TourdatesList }                       
]

export default tourdatesRoutes

