<template>
  <div>
    <div class="car_checkall" :checkBtn="checkBtn">
      <a href="#"><input class="allCheck" type="checkbox" @change="selAll()" v-model="checkBtn.checked"><h4>全选</h4><p>合计</p><span>￥{{tm}}</span></a>
      <span class="car_checkall_span">去结算(0)</span>
    </div>
  </div>
</template>
<!---->
<script>
    export default {
      name: "JmCartsPaymentBar",
      props:["checkBtn","tm"],
      methods:{
        selAll(){
          this.$emit("sAll")
        }
      }
    }

    $(function(){
      //全选
      $('.allCheck').click(function(){
        if($(this).is(':checked')){
          $(':checkbox').prop('checked',true);
          totalMoney();
        }else{
          $(':checkbox').prop('checked',false);
          totalMoney();
        }
      });
      // 总价
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
          $(".car_checkall_span").html("去结算（"+totalNum+"）");
        });
      }
    });
</script>

<style scoped>
  /*全选*/
  .car_checkall{
    background: #fff;
    padding: 0.09rem  0.13rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 93%;
  }
  .car_checkall a{
    display: flex;
    align-items: center;
  }
  .car_checkall a h4{
    font-size: 0.16rem;
    font-weight: 100;
    color: #000;
    margin: 0 0.1rem;
  }
  .car_checkall a p{
    font-size: 0.12rem;
    color: #9f9f9f;
  }
  .car_checkall a span{
    font-size: 0.18rem;
    color: #ff5d86;
    display: block;
    margin-left: 0.1rem;
  }
  .car_checkall_span{
    width: 0.98rem;
    height: 0.36rem;
    display: block;
    background: #fe4070;
    border-radius: 0.18rem;
    font-size: 0.14rem;
    color: #fff;
    text-align: center;
    line-height: 0.36rem;
  }

</style>
