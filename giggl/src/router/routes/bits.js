import BitsList from '@/components/Bits/BitsList.vue';
import BitsDetail from '@/components/Bits/BitsDetail.vue';
import BitsForm from '@/components/Bits/BitsForm.vue';

const bitsRoutes = [
  { path: '/bits/add', component: BitsForm },               
  { path: '/bits/:id/edit/', component: BitsForm, props: true }, 
  { path: '/bits/:id', component: BitsDetail, props: true },   
  { path: '/bits', component: BitsList }                       
]

export default bitsRoutes

