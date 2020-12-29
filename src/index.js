const Home = () => import('./pages/home/Home')
const Find = () => import('./pages/find/Find')
const QqMusic=()=>import('./pages/media/QqMusic')
const routes = [
  {
    id: 10,
    text: '公司主页',
    icon:'el-icon-eleme',
    arr:[
        {
            id:1001,
            path: '/',
            text: '公司概况',
            component: Home,
        },
        {
            id: 1002,
            path: '/find',
            text: '公司动态',
            component: Find
          }
        ]
  },{
    id: 11,
    text: '娱乐天地',
    icon:'el-icon-service',
    arr:[
      {
        id:1101,
        path:'/music',
        text:'音乐天堂',
        component:QqMusic
      }
    ]
  }
]
  

export default routes