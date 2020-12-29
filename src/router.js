import Vue from 'vue'
import VueRouter from 'vue-router'
import arr from './index'
Vue.use(VueRouter)

let routes=[]
arr.map(elem=>{
  routes=[...routes,...elem.arr]
})

export default new VueRouter({
  mode:'hash',
  routes:[
    ...routes,
    {
      path:'/*',redirect:'/'
    }
  ]
})
