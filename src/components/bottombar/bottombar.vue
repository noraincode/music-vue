<template>
  <div class="bottom-bar">
    <div class="music-info">
      <img class="music-pic" alt="">
      <div class="music-detail">
				<p class="music-name" v-if="musicName">{{musicName}}</p>
				<p class="music-singer" v-if="musicSinger">{{musicSinger}}</p>
			</div>
    </div>
    <div class="playpause" @click.stop="playpause">
			<i :class="iconPlayPause?'ion-ios-pause':'ion-ios-play'" class="icon-pause"></i>
		</div>
		<i class="music-list ion-ios-list-outline"></i>
  </div>
</template>

<script>
import store from '../../store'

export default {
  data () {
    return {
      audioInfo: {
      },
      state: {
        isplaying: false,
        loading: false,
        currentIndex: 0
      },
      musicName: 'test',
      musicSinger: 'testsinger'
    }
  },
  methods: {
    // 控制音乐播放暂停
    playpause () {
      store.commit('togglePlay')
    }
  },
  computed: {
    iconPlayPause () {
      return this.audioInfo.playing
    }
  },
  mounted () {
    // 所有的audio的 vuex 的状态信息
    this.audioInfo = this.$store.state.audioInfo
    // 音乐是否play
    this.state.isplaying = this.audioInfo.playing
  }
}
</script>


<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  z-index: 9;
  background: #fff;
  bottom: 0;
  height: 46px;
  padding: 5px;
  box-sizing: border-box;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  .music-info {
    position: relative;
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    .music-detail {
      flex: 1 1 auto;
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      @media screen and (max-width: 414px) {
        p {
          	max-width:250px
        }
      }
      @media screen and (max-width: 375px) {
        p {
          	max-width:210px
        }
      }
      @media screen and (max-width: 320px) {
        p {
          	max-width:160px
        }
      }
      @media screen and (max-width: 768px) {
        p {
          	max-width:580px
        }
      }
      p {
        width: 100%;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .music-name {
          font-size: 14px;
          font-weight: 400;
          color: #333;
          padding: 2px 0;
        }	
        .music-singer {
          color: #aaa;
          font-size: 10px;
          font-weight: 400;
          padding: 2px 0;
        }
    }
    .music-pic {
      flex: 0 0 36px;
      width: 36px;
      height: 36px;
    }
  }
  .playpause {
    border:2px solid #999;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    i {
      display: block;
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translate3d(-50%,-50%,0);
      width: 20px;
      font-size: 14px;
      color: #333;
      text-align: center;
      .icon-pause {
        left: 50%;
        font-size: 18px;
        color: #C62F2F;
      }
    }
  }
  .music-list {
    margin-left: 10px;
    display: block;
    flex: 0 0 36px;
    width: 36px;
    height: 100%;
    line-height: 36px;
    text-align: center;
    font-size: 35px;
    color: #999;
  }
}
</style>
