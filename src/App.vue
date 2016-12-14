<template>
    <div id="app">
      <leo-header class="lh"></leo-header>
      <router-view></router-view>
    </div>
</template>

<script>
  import LeoBase from './components/Base.vue'
  import LeoHeader from './components/index/Header.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      LeoHeader
    }
  }
</script>

<style lang="sass" scoped>
.lh{
    font-size: 18px;
}
</style>
