/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

import '../permission'

// Vuex Store
import store from './store/store'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

// Vuesax Admin Filters
import './filters/filters'

Vue.config.productionTip = false;

// router.beforeEach((to,from,next) => {
//     if(store.getters.username === null) {
//         next({
//             path: '/login',
//             query: {redirect: to.fullPath}
//         })
//     } else{
//         next()
//     }
// })



// Vuejs - Vue wrapper for hammerjs
import {
    VueHammer
} from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
