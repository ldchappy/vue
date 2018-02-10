import Vue from 'vue'

import './js/lib/rem'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//导入router
import VueRouter from 'vue-router'
//导入vue-source
import VueResource from 'vue-resource'



import App from './App.vue'



//引用mint-ui
Vue.use(MintUI)
//引用vue-router
Vue.use(VueRouter)
//引用vue-resource
Vue.use(VueResource)







new Vue({
  el: '#app',
  render: h => h(App)
})
