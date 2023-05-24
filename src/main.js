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

//QuestionnaireSteps
import step1 from './components/questionnaireSteps/step1.vue'


const app = createApp(App)


/*Sub Komponenter*/
app.component('sidebar', sidebar)
app.component('footerComponent', footerComponent)
app.component('headerComponent', headerComponent)
app.component('heroComponent', heroComponent)
app.component('productsCompenent', productsComponent)
app.component('questionnaireControllerComponent',questionnaireControllerComponent)
app.component('step1', step1)
//app.component('step2', step2)
//app.component('step3', step3)
//app.component('step4', step4)
//app.component('step5', step5)
    app.use(router)

app.use(store)
app.mount('#app')


/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, fas, fab, far)



