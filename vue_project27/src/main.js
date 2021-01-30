import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
window.$ = window.JQuey=require('jquery')
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router:Router
})
