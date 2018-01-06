<template>
  <div id="app">
    <!-- 头部header -->
    <v-header></v-header>
    <!-- 侧边栏列表 -->
    <side-bar :info="info"></side-bar>
    <!-- 底部菜单 -->
    <v-bottombar></v-bottombar>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'
import bottomBar from './components/bottombar/bottombar'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'side-bar': sidebar,
    'v-bottombar': bottomBar
  },
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.info = {
      'name': '进击的大前端',
      'avatar': '/static/images/user.jpg',
      'grade': '9',
      'bg': '/static/images/sidebarbg.jpg'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
