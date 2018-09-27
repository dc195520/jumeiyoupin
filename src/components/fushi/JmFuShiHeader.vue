<template>
  <div>
    <div class="fs_top">
      <div class="fs_headtop">
        <a href="#" class="fs_more"><img src="../../assets/images/home_option_black.png" alt=""></a>
        <div class="fs_fenlei">
          <a href="#">关注</a>
          <a class="fs_focus" href="#">特卖</a>
          <a href="#">发现</a>
        </div>
        <a href="#"><img src="../../assets/images/home_came_black.png" alt=""></a>
      </div>
    </div>
    <div class="fs_header">
      <a href="#"><img src="../../assets/images/ls_search_icon.png" alt="">搜索商品 分类 功效 用户 </a>
    </div>
    <div class="fs_nav" id="fs_scrollTop">
      <div class="fs_nav_list">
        <a class="fs_on" href="#"><router-link to="/tj">推荐</router-link></a>
        <a href="#"><router-link to="/carrousel">极速免税店</router-link></a>
        <a href="#"><router-link to="">母婴</router-link></a>
        <a href="#"><router-link to="">轻奢</router-link></a>
        <a href="#">服饰</a>
        <a href="#">鞋包</a>
        <a href="#">家居</a>
        <a href="#">食品</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "JmFuShiHeader"
    }
</script>

<style scoped>
  /*顶部*/
  .fs_top{
    width: 100%;
    height: 0.52rem;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 999;
  }
  .fs_headtop{
    display:flex;
    justify-content: space-between;
    height:0.52rem;
    align-items: center;
    margin: 0 0.12rem;
  }
  .fs_headtop a img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .fs_fenlei{
    display: flex;
  }
  .fs_fenlei a{
    font-size: 0.18rem;
    color: #000;
    margin: 0 0.1rem;
  }
  .fs_fenlei .fs_focus{
    color: #f34587;
    border-bottom: 2px solid #f34587;
  }

  /* 搜索 */
  .fs_header{
    background: #fff;
    padding: 0 0.06rem 0.01rem;
    margin-top: 0.52rem;
  }
  .fs_header a{
    font-size: 0.14rem;
    color: #9a9a9a;
    width: 3.50rem;
    height: 0.34rem;
    background: #f5f5f5;
    border-radius: 0.17rem;
    margin: 0 auto;
    line-height: 0.34rem;
  }
  .fs_header a img{
    width: 0.2rem;
    height: 0.2rem;
    float: left;
    margin-left: 0.82rem;
    margin-top: 0.07rem;
    margin-right: 0.05rem;
  }

  /*nav*/
  .fs_nav{
    width: 100%;
    height: 0.4rem;
    overflow: hidden;
    background: #fff;
    line-height: 0.4rem;
    z-index: 999;
  }
  .fs_nav_list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0.05rem;
  }
  .fs_nav a{
    font-size: 0.14rem;
    color: #000;
  }
  .fs_nav_list .fs_on{
    color: #ee46a1;
  }
</style>
