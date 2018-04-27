// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './firebase'
import VueFire from 'vuefire'
import router from './router'
import AtComponents from 'at-ui'
import 'at-ui-style'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'


Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(AtComponents)
Vue.use(vueEventCalendar, {locale: 'vi'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
