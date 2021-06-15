import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
// import About from '@/components/About.vue'
// import PortFolio from '@/components/PortFolio.vue'
// import Skill from '@/components/Skill.vue'
// import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
    // {
    //   path: '/portfolio',
    //   name: 'portfolio',
    //   component: PortFolio
    // },
    // {
    //   path: '/skill',
    //   name: 'skill',
    //   component: Skill
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // }
  ]
})
