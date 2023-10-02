import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
  faRectangleList,
} from '@fortawesome/free-regular-svg-icons'

const app = createApp(App)

library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass, faRectangleList])

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
