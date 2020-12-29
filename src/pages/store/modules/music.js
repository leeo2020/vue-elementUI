import {fetchQqMusic} from '@/utils/api'

export default {
    namespaced:true,
    state:{
        songList:[]
    },
    getters:{},
    mutations:{
        getSongList(state,payload){
            state.songList=payload
        }
    },
    actions:{
        getMusic(store,payload){
            fetchQqMusic(payload).then(res=>{
                console.log(res)
                store.commit('getSongList',res.song.list)
            }
                )
        }
    }
}