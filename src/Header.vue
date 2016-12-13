<template>
    <header>
        <div class="logo">111</div>
        <div class="title">OpenLib</div>
    </header>
</template>

<script>
  import Vue from 'vue'
  //import ElementUI from 'element-ui'
  //import 'element-ui/lib/theme-default/index.css'

  //Vue.use(ElementUI);

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="sass" scoped>
    header {
        height: 3rem;
        background-color: lighten(black, 10%);

        & >  * {
            display: inline-block;
            height:100%;
            line-height: 3rem;
            color:lighten(black, 10%);
        }

        .title {
            color: white;
        }

    }
</style>