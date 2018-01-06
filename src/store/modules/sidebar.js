// 测面滑动菜单效果
const SHOW_SIDEBAR = true
const HIDE_SIDEBAR = false

const sideBar = {
  state: {
    isShow: false
  },
  mutations: {
    showBar (state) {
      state.isShow = SHOW_SIDEBAR
    },
    hideBar (state) {
      state.isShow = HIDE_SIDEBAR
    }
  },
  actions: {
    showSideBar ({commit}) {
      commit('showBar')
    },
    hideSideBar ({commit}) {
      commit('hideBar')
    }
  },
  getters: {
    isShowMethod: state => this.state
  }
}
export default sideBar
