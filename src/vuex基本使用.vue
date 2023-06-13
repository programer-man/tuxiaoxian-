<template>
  <div>
    <p>{{$store.state.username}}</p>
    <p>{{$store.getters.newName}}</p>
    <button @click="mutationFn">修改姓名</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 1. 使用根模块state的数据
    console.log(store.state.username)
    console.log(store.getters.newName)
    const mutationFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }
    return { mutationFn }
  }
}
</script>
