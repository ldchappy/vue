import Vue from 'vue'

import './js/lib/rem'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'



import App from './App.vue'



//引用mint-ui
Vue.use(MintUI)


new Vue({
  el: '#app',
  render: h => h(App)
})
