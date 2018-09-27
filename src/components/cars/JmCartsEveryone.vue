<template>
    <div>
    <!--大家还买了-->
      <div class="car_buy">
        <p class="car_p">大家还买了</p>
        <jm-carts-everyone-product-list :everBuy="cartsEver"></jm-carts-everyone-product-list>
    <!--为您推荐-->
      </div>
      <div class="car_buy car_foryou">
        <p class="car_p">为您推荐</p>
        <jm-carts-recommend-for-you-product-list :everTui="cartsEver"></jm-carts-recommend-for-you-product-list>
      </div>
    </div>
</template>

<script>
    import JmCartsRecommendForYouProductList from "./JmCartsRecommendForYouProductList";
    import JmCartsEveryoneProductList from "./JmCartsEveryoneProductList";
    export default {
      name: "JmCartsEveryone",
      components: {JmCartsEveryoneProductList, JmCartsRecommendForYouProductList},
      props:["cartsEver"]
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
    line-height: 0.18rem;
    margin-top: 0.02rem;
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
