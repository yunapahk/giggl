import BitsList from '@/components/Bits/BitsList.vue';
import BitsDetail from '@/components/Bits/BitsDetail.vue';

const bitsRoutes = [
  { path: '/bits', component: BitsList },
  { path: '/bits/:id', component: BitsDetail, props: true }
];

export default bitsRoutes;
