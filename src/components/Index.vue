<template>
      <div>
            <leo-search></leo-search>
      </div>
</template>

<script>
  import LeoBase from './Base.vue'
  import LeoHeader from './index/Header.vue'
  import LeoSearch from './index/Search.vue'
  export default {
    name: 'main',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      LeoHeader,
      LeoSearch
    }
  }
</script>

<style lang="sass" scoped>
.lh{
    font-size: 18px;
}
</style>
