<template>
  <div>
    <div class="car_banner" v-for="i in car_banner">
      <div class="car_banner_left">
        <a>
          <img :src="i.img01">
          <span id="car_time"></span>
        </a>
      </div>
      <p>{{i.title}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmCartsNotics",
      data(){
        return {
          car_banner:[
            {
              img01:"../../../static/data/images/wish_count_down.png",
              title:"商品数量有限，请尽快结算"
            }
          ]
        }
      }
    }

    // 倒计时
  $(function(){
      var minutes=30;
      var seconds=0;
      var ms=0;
      var myTimer=null;
    setInterval(function(){
        ms--;
        if(ms<0){
          seconds--;
          ms=9;
        }
        if(seconds<0){
          minutes--;
          seconds=59;
        }
        if(minutes<0){
          minutes=0;
          seconds=0;
          ms=0;
        }
        $('#car_time').html(("0"+minutes).toString().substr(-2)+":"+("0"+seconds).toString().substr(-2)+"."+("0"+ms).toString().substr(-1));
    },100)
  })

</script>

<style scoped>
  /*banner*/
  .car_banner{
    height: 0.30rem;
    padding: 0 0.1rem;
    background: #fff;
    border-bottom: 1px solid #f7f7f7;
    display: flex;
    align-items: center;
    margin-top: 0.44rem;
  }
  .car_banner_left{
    display: none;
  }
  .car_banner a{
    display: flex;
    align-items: center;
  }
  .car_banner a span{
    color: #fe4070;
    font-size: 0.12rem;
    display: block;
    margin: 0 0.05rem 0 0.02rem;
  }
  .car_banner a img{
    width: 0.13rem;
    height: 0.12rem;
  }
  .car_banner p{
    font-size: 0.12rem;
    color: #969696;
  }

</style>
