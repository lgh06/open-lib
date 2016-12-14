<template>
  <div class="search-block">
    <div class="search">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="btn">
      <button class="button">OpenLib</button>
    </div>

  </div>
</template>

<script>

  //  export default {
  //    data () {
  //      return {
  //        msg: 'Welcome to Your Vue.js App'
  //      }
  //    }
  //  }
</script>

<style lang="scss" scoped>
  .search-block {
    height: 6rem;
    width:50%;
    margin:0 auto;
    padding: 1rem 0;

    .search {
      margin: 0 auto;
      display: block;
      height: 100%;
      width: 80%;
      float: left;
      text-align: right;

    textarea {
      height: 100%;
      width: 100%;
      font-size: 3.5rem;
      line-height: 3.5rem;
      resize: none;
    }

    }
    .btn {
      height: 100%;
      width: 20%;
      display: block;
      float: right;

      .button {
        width:100%;
        height:100%;
      }

    }

  }
</style>
