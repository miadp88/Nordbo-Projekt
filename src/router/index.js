import { createRouter, createWebHashHistory} from 'vue-router'




const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
    {
      path: '/IndexView',
      name: 'indexView',
      component:() => import('../Views/IndexView.vue'),
  
    },
    {
      path: '/QuestionnaireView',
      name: 'questionnaire',
      component: () => import('../Views/QuestionnaireView.vue'),
  
    },
    {
      path: '/ProductsView',
      name: 'Products',
      component: () => import('../Views/ProductsView.vue'),
  
    },
  
    {
      path: '/AboutView',
      name: 'About',
      component: () => import('../Views/AboutView.vue'),
  
    },
  
    ]
  });
  
  export default router;