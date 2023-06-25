import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/main.scss'

//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


import headerComponent from './components/HeaderComponent.vue'
import sidebar from './components/sidebar.vue'
import footerComponent from './components/FooterComponent.vue'
import heroComponent from './components/HeroComponent.vue'
import productsComponent from './components/ProductComponent.vue'
import questionnaireControllerComponent from './components/questionnaireController.vue'
import videoComponent from './components/videoComponent.vue'
import productInfoComponent from './components/productInfoComponent.vue'
import heroFrontpageComponent from './components/HeroFrontpageComponent.vue'
import heroLearnMoreComponent from './components/HeroLearnMoreComponent.vue'
import contactFormComponent from './components/ContactFormComponent.vue'
import footerProductComponent from './components/FooterProductComponent.vue'
import questionaireSteps from './components/questionnarieMenu.vue'
import questionnaireImageComponent from './components/questionnaireImageComponent.vue'
import recommendedProducts from './components/recommendedProducts.vue'




const app = createApp(App)


/*Sub Komponenter*/
app.component('productInfoComponent', productInfoComponent)
app.component('videoComponent', videoComponent)
app.component('sidebar', sidebar)
app.component('footerComponent', footerComponent)
app.component('headerComponent', headerComponent)
app.component('heroComponent', heroComponent)
app.component('productsCompenent', productsComponent)
app.component('questionnaireControllerComponent',questionnaireControllerComponent)
app.component('heroFrontpageComponent', heroFrontpageComponent)
app.component('heroLearnMoreComponent', heroLearnMoreComponent)
app.component('contactFormComponent', contactFormComponent)
app.component('questionaireSteps', questionaireSteps)
app.component('footerProductComponent', footerProductComponent)
app.component('questionnaireImageComponent', questionnaireImageComponent)
app.component('recommendedProducts', recommendedProducts)

app.use(router)
app.use(store)
app.mount('#app')


/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, fas, fab, far)



