import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'zs'
  },
  mutations: {
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName (ctx) {
      // ctx 就是 store
      console.log(ctx)
      // 发请求
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  }
})
