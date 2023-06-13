import { createStore } from 'vuex'

// A模块
export const moduleA = {
  // 子模块state建议写成函数
  state: () => {
    return {
      username: '模块A'
    }
  },
  getters: {
    newName (state) {
      state.username = 'fuckA'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'A'
    }
  }
}

// B模块
export const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  state: () => {
    return {
      username: '模块B'
    }
  },
  getters: {
    newName (state) {
      state.username = 'fuckB'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'B'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 2000)
    }
  }
}

export default createStore({
  state: {
    // 数据
  },
  getters: {
  },
  modules: {
    moduleA,
    moduleB
  }
})
