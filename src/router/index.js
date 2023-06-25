import { createRouter, createWebHashHistory} from 'vue-router'
import Index from '../Views/IndexView.vue'
import Questionnaire from '../Views/QuestionnaireView.vue'
import Products from '../Views/ProductsView.vue'
import About from '../Views/AboutView.vue'



const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: Index,
    
      },
      {
        path: '/questionnaire',
        name: 'questionnaire',
        component: Questionnaire,
    
      },
      {
        path: '/products',
        name: 'products',
        component: Products,
    
      },
    
      {
        path: '/about',
        name: 'about',
        component: About,
    
      },
      {
        path: '/index',
        name: 'index',
        component: Index,
    
      },
     
    
      ]
      
    });
  
  export default router;

