// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../src/assets/js/rem'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ajax from "./api/jiekou"

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$ajax=ajax


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
