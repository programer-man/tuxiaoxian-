<template>
  <div>
    {{$store.state.moduleA.username}}
    {{$store.state.moduleB.username}}
    {{$store.getters.newName}}
    <!-- 加了命名空间模块的getter访问 -->
    {{$store.getters['moduleB/newName']}}
    <button @click="changeName">更改A</button>
    <button @click="$store.commit('moduleB/updateName')">更改B</button>
    <!-- 加了命名空间模块的actions访问 -->
    <button @click="$store.dispatch('moduleB/updateName')">延迟更改B</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const changeName = () => {
      store.commit('updateName')
    }
    const changeName2 = () => {
      store.commit('moduleB/updateName')
    }
    return { changeName, changeName2 }
  }
}
</script>
