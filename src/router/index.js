import Vue from 'vue'
import Router from 'vue-router'
import Tops from '@/components/tops'
import Conents from '@/components/conents'
import Tabbar from '@/components/tabbar'
import Tabitem from '@/components/tabitem'
import Homemenu from '@/components/homemenu'
import Recommend from '@/components/recommend'
import Recommendlist from '@/components/recommendlist'
import Goodbook from '@/components/goodbook' //更多好书

import Home from '../pages/home'
import Friendbook from '../pages/friendbook'
import Sellbook from '../pages/sellbook'  //
import Newsbook from '../pages/newsbook'  //消息
import Mybooks from '../pages/mybooks'    //我的


//goodbook 更多好书 二级路由
import Suoyou from '../pages/goodbook/suoyou'
import Wenxue from '../pages/goodbook/wenxue'
import Renwen from '../pages/goodbook/renwen'
import Jingji from '../pages/goodbook/jingji'
import Shenghuo from '../pages/goodbook/shenghuo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tops',
      name: 'tops',
      component: Tops
    },
    {
      path: '/conents',
      name: 'conents',
      component: Conents
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar
    },
    {
      path: '/tabitem',
      name: 'tabitem',
      component: Tabitem
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        showTab:true
      }    
    },
    {
      path: '/friendbook',
      name: 'friendbook',
      component: Friendbook,
      meta:{
        showTab:true
      } 
    },
    {
      path: '/sellbook',
      name: 'sellbook',
      component: Sellbook
    },
    {
      path: '/newsbook',
      name: 'newsbook',
      component: Newsbook,
      meta:{
        showTab:true
      } 
    },
    {
      path: '/mybooks',
      name: 'mybooks',
      component: Mybooks,
      meta:{
        showTab:true
      } 
    },
    {
      path: '/homemenu',
      name: 'homemenu',
      component: Homemenu
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/recommendlist/:id',
      name: 'recommendlist',
      component: Recommendlist
    },
    {
      path: '/goodbook',
      name: 'goodbook',
      component: Goodbook,
      children:[
      {path: '', redirect: "Suoyou"},
       {path:"suoyou",component:Suoyou},
       {path:"wenxue",component:Wenxue},
       {path:"renwen",component:Renwen},
       {path:"jingji",component:Jingji},
       {path:"shenghuo",component:Shenghuo}
     ]
    }
  ]
})
