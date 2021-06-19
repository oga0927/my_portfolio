import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Work from '@/components/Work.vue'
// import Skill from '@/components/Skill.vue'
// import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    }
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
  ],
  // ここから追加
  scrollBehavior (to, from, savedPosition) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
  // ここまで追加
})
