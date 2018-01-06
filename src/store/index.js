import Vue from 'vue'
import Vuex from 'vuex'

import AudioInfo from './modules/audio.js'
import Sidebar from './modules/sidebar'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    audioInfo: AudioInfo,
    sideBar: Sidebar
  }
})

export default store
