<template>
  <div class="car_section">
    <jm-carts-shop  v-for="(shop,sid) in cartsInfo" :key="sid" :sidx="sid" :carts_shop="shop" @shopSAll="sSAll"></jm-carts-shop>
  </div>
</template>

<script>
    import JmCartsShop from "./JmCartsShop";
    export default {
      name: "JmCartsShopList",
      components: {
        JmCartsShop
      },
      props:{
        cartsInfo:{
          type:Array
        },
        shops:{
          type:Function
        }
      },
      methods:{
        sSAll(sid){
          this.$emit("shops",sid)
        }
      }
    }
</script>

<style scoped>
  /*店铺商品*/
  .car_section{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .car_cont{
    background: #fff;
  }
  .car_section_top{
    font-size: 0.12rem;
    color: #000;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f7f7f7;
    height: 0.39rem;
    padding: 0 0.16rem 0 0.09rem;
  }
  .car_section_top input{
    margin-right: 0.09rem;
  }
  .car_section_con{
    display: flex;
    align-items: center;
    padding: 0.08rem 0.16rem 0.11rem 0.09rem;
    justify-content: space-between;
    border-bottom: 1px solid #f7f7f7;
  }
  .car_section_con img{
    width: 0.77rem;
    height: 0.72rem;
  }
  .car_section_con_txt{
    width: 61%;
  }
  .car_section_con_txt h4{
    font-size: 0.13rem;
    color: #000;
    font-weight: 100;
  }
  .car_section_con_txt p{
    font-size: 0.12rem;
    color: #848484;
    font-weight: 100;
    line-height: 0.28rem;
  }
  .car_section_con_txt a{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .car_section_con_txt a p{
    font-size: 0.14rem;
    color: #fe4674;
    line-height: 0.35rem;
  }
  .car_spans{
    display: flex;
    align-items: center;
  }
  .car_spans span{
    display: block;
  }
  .car_spans span:nth-child(2n+1){
    width: 0.24rem;
    height: 0.24rem;
    border: 1px solid #e4dfdf;
    border-radius: 50%;
    color: #252525;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.22rem;
  }
  .car_spans span:nth-child(2){
    font-size: 0.14rem;
    color: #252525;
    margin: 0 0.18rem;
  }

</style>
