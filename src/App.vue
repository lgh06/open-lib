<template>
    <div id="app">
        <leo-header class="lh"></leo-header>
    </div>
</template>

<script>
  import LeoBase from './Base.vue'
  import LeoHeader from './Header.vue'
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
