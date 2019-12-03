import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faAngleDoubleDown, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add( faBars, faAngleDoubleDown, faQuestion, faTimes );
library.add( faFacebookSquare, faInstagram );

Vue.component('font-awesome-icon', FontAwesomeIcon)