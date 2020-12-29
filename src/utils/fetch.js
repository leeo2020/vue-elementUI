import axios from 'axios'

const baseURL = 'http://localhost:8080'
const instance=axios.create({
    url:baseURL,
    timeout:5000,
    headers:{}
})

instance.interceptors.request.use(config=>{
   return config
},err=>{
    return Promise.reject(err)
})

instance.interceptors.response.use(res=>{
    let rst=null
    if(res.status===200){
        if((res.data && res.data.err === 0)||(res.data && res.data.code === 0)){
            rst=res.data.data
        }
    }
    return rst
},err=>{
    return Promise.reject(err)
})

export default instance