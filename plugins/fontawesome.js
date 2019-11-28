import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faClock, faUserGraduate, faMapMarkerAlt, faBars, faAngleDoubleDown, faDumbbell, faPhone, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faBars, faHome, faClock, faUserGraduate, faMapMarkerAlt, faAngleDoubleDown, faDumbbell, faQuestion, faTimes );
library.add( faFacebookSquare, faInstagram );

Vue.component('font-awesome-icon', FontAwesomeIcon)