<template>
  <div>
    <div class="fs_sx">
      <div class="fs_mix">
        <a class="fs_sm_top" href="#">
          <p><img src="../../assets/images/shoppe_promo_logo.png" alt="">今日十点上新</p>
          <p><img src="../../assets/images/tm13.png" alt="">明日10点预告</p>
        </a>
        <div  v-for="shop in fs_shangxin">
          <a class="fs_bigImgs" href="#"><img :src="shop.shopImages"></a>
          <div class="fs_small">
            <a href="#" v-for="shopInfo in shop.shopProduct">
              <img :src="shopInfo.productImg" alt="">
              <p>{{shopInfo.productDescribe}}</p>
              <h3>￥{{shopInfo.presentPrice}}<span>￥{{shopInfo.originPrice}}</span></h3>
            </a>
            <a href="#" v-for="shopInfo in shop.shopProduct">
              <img :src="shopInfo.productImg" alt="">
              <p>{{shopInfo.productDescribe}}</p>
              <h3>￥{{shopInfo.presentPrice}}<span>￥{{shopInfo.originPrice}}</span></h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmFuShiShangXin",
      props:["fs_shangxin"]
    }
</script>

<style scoped>
  .fs_mix{
    background: #fff;
  }
  .fs_sm_top{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 0.1rem;
  }
  .fs_sm_top p{
    font-size: 0.12rem;
    color: #848484;
    display: flex;
    align-items: center;
  }
  .fs_sm_top p img{
    width: 0.18rem;
    height: 0.18rem;
    margin-right: 0.08rem;
  }
  .fs_bigImgs img{
    width: 100%;
    height: 1.88rem;
    margin-top: 0.12rem;
  }
  .fs_small{
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 0.12rem 0 0.08rem;
    margin-bottom: 0.09rem;
  }
  .fs_small::-webkit-scrollbar{
    height: 0;
  }
  .fs_small a{
    margin: 0 0.05rem;
  }
  .fs_small a img{
    width: 0.81rem;
    height: 0.81rem;
    margin: 0 0.12rem;
  }
  .fs_small a p{
    font-size: 0.14rem;
    color: #737373;
    line-height: 0.21rem;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .fs_small a h3{
    font-size: 0.16rem;
    color: #000;
    font-weight: 100;
    line-height: 0.28rem;
  }
  .fs_small a h3 span{
    font-size: 0.12rem;
    color: #acacac;
    text-decoration: line-through;
  }
</style>
