<template>
  <div class="res" v-if="loading">
    <div class="loading" v-if="loading">
      结果页面
    </div>
    <div class="post" v-if="post">
      {{post}}
    </div>
  </div>
</template>

<script>
  import {LG} from '../js/tool'


  export default {
    name: 'result',
    data () {
      return {
        loading:false,
        post:null,
        msg: 'Welcome to Your Vue.js App',
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.loading = true
        // replace getPost with your data fetching util / API wrapper
        LG.getList('Softs',(g)=>{
          this.post = g;
          console.log(g);
        });
      }
    }
  }
</script>

<style lang="sass" scoped>
.res{
  background-color: red;
}
</style>
