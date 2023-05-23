import { createRouter, createWebHashHistory} from 'vue-router'
import IndexView from '../components/Views/IndexView.vue'
import ProductsView from '../components/Views/ProductsView.vue'
import AboutView from '../components/Views/AboutView.vue'
import QuestionnaireView from '../components/Views/QuestionnaireView.vue'


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
    {
      path: '/',
      name: 'Home',
      component:IndexView,
  
    },
    {
      path: '/',
      name: 'Questionnaire',
      component: QuestionnaireView,
  
    },
    {
      path: '/',
      name: 'Products',
      component:ProductsView,
  
    },
  
    {
      path: '/',
      name: 'About',
      component:AboutView,
  
    },
  
    ]
  });
  
  export default router;