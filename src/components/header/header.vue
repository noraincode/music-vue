<template>
  <div class="header">
    <div class="header-warpper">
      <!-- 左边菜单按钮 -->
      <i class="icon-menu ion-navicon-round" @click="showMueu"></i>
      <!-- 中间按钮组 -->
      <div class="centermenu">
        <i class="music ion-android-bicycle"></i>
        <router-link tag="i" to="/mymusic">
          <i class="music ion-ios-musical-notes"></i>
        </router-link>
        <i class="music ion-ios-people"></i>
      </div>
      <!-- 右边搜索按钮 -->
      <i class="icon-search ion-ios-search-strong"></i>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  methods: {
    showMueu () {
      store.dispatch({
        type: 'showSideBar'
      })
    },
    hideMenu () {
      store.dispatch({
        type: 'hideSideBar'
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 10;
  background: #c62f2f;
  .header-warpper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-menu,.icon-search {
      color: #fff;
      font-size: 24px;
      padding: 10px 15px;
    }
    .centermenu {
      font-size: 26px;
      i {
        margin: 0 10px;
				color: #eee;
      }
    }
  }
}
</style>




    