import Vue from 'vue'
import VueX from 'vuex'
import music from './modules/music'
Vue.use(VueX)

export default new VueX.Store({
 state:{},
 getters:{},
 mutations:{},
 actions:{},
 modules:{
    music
 }
})