<template>
  <div class="fl_header">
    <img src="../../assets/images/back_bg.png" alt="">
    <a href="#"><img src="../../assets/images/ls_search_icon.png" alt="">搜索商品 分类 功效 用户 </a>
  </div>
</template>

<script>
    export default {
        name: "JmFeiLeiHeader"
    }
</script>

<style scoped>
  /* 顶部 */
  .fl_header{
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.2rem 0;
    position: fixed;
    height: 4.5%;
  }
  .fl_header img{
    width: 0.1rem;
    height: 0.18rem;
    margin: 0 0.12rem 0 0.23rem;
  }
  .fl_header a{
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #bebec5;
    width: 2.72rem;
    height: 0.3rem;
    background: #f5f5f5;
    border-radius: 0.15rem;
  }
  .fl_header a img{
    width: 0.17rem;
    height: 0.17rem;
    margin-left: 0.1rem;
    margin-right: 0;
  }
</style>
