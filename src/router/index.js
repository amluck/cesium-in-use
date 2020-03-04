import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ThreeMap from '@/components/ThreeMap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThreeMap',
      component: ThreeMap
    }
  ]
})
