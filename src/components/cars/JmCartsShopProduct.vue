<template>
  <div>
    <div class="car_section_con" v-for="shopproduct in cartShopProduct" :shopproduct="shopproduct">
      <input class="car_check" type="checkbox" v-model="shopproduct.checked">
      <img :src="shopproduct.productImg">
      <div class="car_section_con_txt">
        <h4>{{shopproduct.productDescribe}}</h4>
        <p>{{shopproduct.productColor[0]}}<span>{{shopproduct.productSize[0]}}</span></p>
        <a>
          <p class="car_price">￥{{shopproduct.presentPrice}}</p>
          <div class="car_spans">
            <span class="reduCls">{{shopproduct.redu}}</span>
            <span class="cars_num">{{shopproduct.productCount}}</span>
            <span class="addCls">{{shopproduct.add}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmCartsShopProduct",
      props:["cartShopProduct"],
    }
    $(function(){
      totalMoney();
      // 加
      $(".addCls").click(function(){
        let numDom = $(this).prev(".cars_num");
        numDom.html(parseInt(numDom.html())+1);
        totalMoney();
      });

      // 减
      $(".reduCls").click(function(){
        let numDom = $(this).next(".cars_num");
        numDom.html(parseInt(numDom.html())-1);
        if(numDom.html()<=1){
          numDom.html(1);
        }
        totalMoney();
      });
    });
      //单选
      $(".car_check").click(function(){
        if($(".car_check:checked").length == $(".car_check").length){
          $('.allCheck').prop('checked',true);
          totalMoney();
        } else {
          $('.allCheck').prop('checked',false);
          totalMoney();
        }
      });

      //总价
      function totalMoney(){
        var totalPrice=0;
        var totalNum=0;
        $(".car_check").each(function(){
          if($(this).is(":checked")){
            let price=parseInt($(".car_price").html().substring(1));
            let num=parseInt($(this).parents(".car_section_con").find(".cars_num").html());
            let totalM=parseInt(price*num);
            totalPrice+=totalM;
            totalNum+=num;
          }
          $(".car_checkall").find("a span").html("￥"+(totalPrice).toFixed(2));
          $(".car_checkall_span").html("去结算("+totalNum+")");
        })
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
