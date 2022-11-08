import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // 引入样式
import 'quill/dist/quill.snow.css' // snow theme
import 'quill/dist/quill.bubble.css' // bubble theme

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueQuillEditor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})