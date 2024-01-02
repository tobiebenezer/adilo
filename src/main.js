import './assets/main.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
  faUserSecret,
  faRecordVinyl,
  faBars,
  faChevronDown,
  faChevronRight,
  faBell,
  faBorderAll,
  faArrowLeft,
  faArrowDownShortWide,
  faXmark,
  faFilm,
  faFilter,
  faShareNodes,
  faPenClip,
  faFolderClosed,
  faStar,
  faVideo,
  faCircle,
  faFile,
  faRightFromBracket,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { createPinia } from 'pinia'

library.add([
  faUserSecret,
  faBars,
  faFilm,
  faCircle,
  faVideo,
  faFilter,
  faRecordVinyl,
  faChevronDown,
  faChevronRight,
  faBell,
  faBorderAll,
  faArrowDownShortWide,
  faArrowLeft,
  faXmark,
  faShareNodes,
  faPenClip,
  faFolderClosed,
  faStar,
  faCalendarDays,
  faFile,
  faExclamationCircle,
  faRightFromBracket
]);

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.mount('#app')
