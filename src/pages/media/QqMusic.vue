<template>
 <div>
 <span>输入歌手名：</span>
    <input 
    type="text" 
    v-model="txt" 
    @blur="searchMusic(txt)"
    @keypress.enter="searchMusic(txt)"
    >
    <ul v-if="list">
      <li v-for="elem in songList" :key=elem.id>
        <span v-text=elem.title></span>
      </li>
    </ul>
 </div>
</template>

<script>
// import {fetchQqMusic} from '@/utils/api'
import {mapState,mapActions} from 'vuex'

export default {
name:'Music',
data:function(){
    return {
        txt:'',
        list:[],
        count:0
    }
},
computed:{
  ...mapState('music',['songList'])
},
methods:{
    ...mapActions('music',['getMusic']),
    searchMusic(txt){
        let params={}
        const str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=51149731949877080&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%87%95%E6%97%A0%E6%AD%87&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
        str.split('&').map(elem=>{
            params[elem.split('=')[0]]=elem.split('=')[1]
        })
        params.w=decodeURI(txt)
        params.n=15
        // fetchQqMusic(params).then(res=>{
        //   this.list=res.song.list
        // })
        this.getMusic(params)

    }
  }
}
</script>

<style lang="scss">
  input{
    text-indent:5px;
  }
  li{
    list-style-type: none;
    height:25px
  }
</style>