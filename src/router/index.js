import Vue from 'vue'
import Router from 'vue-router'
import MyMusic from '@/components/mymusic/mymusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/mymusic'
    },
    {
      // 顶部三个的第一页   相当于首页
      path: '/mymusic',
      component: MyMusic
    }
  ]
})
