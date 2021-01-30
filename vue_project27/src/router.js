import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Contact from './components/Contact.vue'


Vue.use(VueRouter)
     export default new VueRouter({
          routes:[
              {
                  path:'/',
                  name:'Home',
                  component:Home
              },
              {
                path:'/about',
                name:'About',
                component:About
            },
            {
                path:'/service',
                name:'Service',
                component:Service
            },
            
            {
                path:'/contact',
                name:'Contact',
                component:Contact
            }
              
         
          ]
});