<template>
  <div>
    <!--大家还买了商品列表-->
    <div class="car_buy_con" v-for="buyList in everBuy">
      <div class="car_buy_list" v-for="buyGoods in buyList.shopProduct">
        <img :src="buyGoods.productImg">
        <span class="car_buy_span">{{buyGoods.productEvalu}}</span>
        <h3>{{buyGoods.productDescribe}}</h3>
        <a class="car_buy_txt">
          <h4><b>￥{{buyGoods.presentPrice}}<span>￥{{buyGoods.originPrice}}</span></b><i>{{buyGoods.eval}}</i></h4>
          <img src="../../../static/data/images/social_product_banner_trolley.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmCartsEveryoneProductList",
      props:["everBuy"]
    }
</script>

<style scoped>
  .car_foryou{
    margin-bottom: 0.54rem;
  }
  .car_p{
    text-align: center;
    line-height: 0.41rem;
    font-size: 0.12rem;
    color: #1d1d1d;
    background: #fff;
    margin-top: 0.08rem;
  }
  .car_buy_con{
    margin: 0.05rem 0.05rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .car_buy_list{
    background: #fff;
    padding: 0.1rem 0.05rem;
    width: 46.5%;
    margin-bottom: 0.05rem;
  }
  .car_buy_list:nth-child(2n){
    margin-left: 0.05rem;
  }
  .car_buy_list img{
    width: 1.67rem;
    height: 1.34rem;
  }
  .car_buy_span{
    width: 0.77rem;
    height: 0.19rem;
    font-size: 0.12rem;
    color: #fff;
    background: #ff507b;
    border-top-right-radius: 0.08rem;
    border-bottom-right-radius: 0.08rem;
    line-height: 0.19rem;
    text-align: center;
    display: block;
  }
  .car_buy_list h3{
    font-size: 0.14rem;
    color: #000;
    font-weight: 100;
    height: 0.36rem;
    margin-top: 0.02rem;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .car_buy_txt{
    display: flex;
    justify-content: space-between;
    margin-top: 0.15rem;
  }
  .car_buy_txt h4{
    font-size: 0.16rem;
    color: #ff4d79;
  }
  .car_buy_txt h4 b{
    display: flex;
  }
  .car_buy_txt h4 b span{
    font-size: 0.14rem;
    color: #8c8c8c;
    font-weight: 100;
    text-decoration: line-through;
  }
  .car_buy_txt h4 i{
    font-style: normal;
    font-size: 0.12rem;
    color: #b0b0b0;
    font-weight: 100;
  }
  .car_buy_txt img{
    width: 0.31rem;
    height: 0.31rem;
  }
</style>
