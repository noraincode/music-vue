const audioInfo = {
  state: {
    playing: false,
    audioelement: '',
    // audio信息
    audio: {
      id: 0,
      name: '',
      singer: '',
      url: '',
      img_url: '',
      type: '',
      lyric: ''
    }
  },
  getters: {
    // 获取audio元素
    getAudioElement: state => state.audioelement,
    // 获取音乐是否播放
    getIsPlaying: state => state.playing,
    // 获取audio信息
    getAudioInfo: state => state.audio
  },
  mutations: {
    // play设置
    play (state) {
      state.playing = true
      // state.audioelement.play()
    },
    // 暂停设置
    pause (state) {
      state.playing = false
      // state.audioelement.pause()
    },
    togglePlay (state) {
      if (state.playing) {
        state.playing = false
        // state.audioelement.pause()
      } else {
        state.playing = true
        // state.audioelement.play()
      }
    }
  }
}

export default audioInfo
