<template>
	<div class="mymusic">
		<type-list name="我的音乐" iconinfo="ion-social-nodejs" count="28" :playing="true"></type-list>
		<type-list name="最近播放" iconinfo="ion-ios-timer-outline" count="18"></type-list>
		<type-list name="我的电台" iconinfo="ion-ios-mic-outline" count="1"></type-list>
		<type-list name="我的收藏" iconinfo="ion-ios-star-outline" count="3" :has-border="false"></type-list>
	</div>
</template>

<script>
import typelist from '../typelist/typelist.vue'

export default {
  components: {
    'type-list': typelist
  }
}
</script>

<style lang="scss" scoped>
.mymusic {
  position:fixed;
  background:#fff;
  overflow:auto;
  top:50px;
  bottom:46px;
  left:0;
  right:0;
  z-index:9;
  -webkit-overflow-scrolling:touch;
}
</style>
