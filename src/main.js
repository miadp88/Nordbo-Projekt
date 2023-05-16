import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

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


/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, fas, fab, far)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

