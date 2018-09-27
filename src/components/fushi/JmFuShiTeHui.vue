<template>
  <div>
    <div class="fs_section_con" v-for="fsTit in fs_tehui">
      <a href="#" class="fs_imgbig"><img :src="fsTit .shopImages"></a>
      <h4 class="fs_tit">{{fsTit.tehui24hours}}</h4>
      <div class="fs_text">
        <a href="#" v-for="fs_sImg in fsTit.shopProduct">
          <span><img :src="fs_sImg.productImg"><p><img src="../../assets/images/tm12.png" alt="">仅限今日</p></span>
          <div class="fs_text_rig">
            <h3>{{fs_sImg.title}}</h3>
            <p>{{fs_sImg.productDescribe}}</p>
            <p><span>{{fs_sImg.zhikou}}</span><span>{{fs_sImg.baoyou}}</span></p>
            <p><span>{{fs_sImg.tehui}}</span><span>￥{{fs_sImg.presentPrice}}</span><span>￥{{fs_sImg.originPrice}}</span></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmFuShiTeHui",
      props:["fs_tehui"]
    }
</script>

<style scoped>
  .fs_section_con{
    background: #fff;
  }
  .fs_imgbig img{
    width: 100%;
    height: 100%;
  }
  .fs_imgbig {
    width: 100%;
    height: 1.88rem;
  }
  .fs_tit{
    font-size: 0.16rem;
    color: #000;
    text-align: center;
    line-height: 0.46rem;
  }
  .fs_text{
    margin-top: 0.1rem;
    border-bottom: 1px solid #f9f9f9;
    padding-bottom: 0.12rem;
  }
  .fs_text a{
    display: flex;
    align-items: center;
    margin: 0 0.12rem;
  }
  .fs_text a span{
    position: relative;
  }
  .fs_text a span img{
    width: 1.38rem;
    height: 1.38rem;
  }
  .fs_text a span p{
    /*width: 0.70rem;*/
    height: 0.2rem;
    border-bottom-left-radius: 0.05rem;
    border-top-right-radius: 0.05rem;
    font-size: 0.12rem;
    color: #f9defc;
    background: #ff1b70;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .fs_text a span p img{
    width: 0.13rem;
    height: 0.13rem;
    margin-left: 0.03rem;
  }
  .fs_text_rig{
    margin-top: 0.15rem;
    margin-left:0.26rem;
  }
  .fs_text_rig h3{
    font-size: 0.15rem;
    color: #000;
    line-height: 0.25rem;
  }
  .fs_text_rig p:nth-child(2){
    font-size: 0.12rem;
    color: #737373;
    line-height: 0.2rem;
  }
  .fs_text_rig p:nth-child(3){
    display: flex;
    align-items: center;
    margin: 0.1rem 0;
  }
  .fs_text_rig p:nth-child(3) span{
    color: #d63c75;
    height: 0.23rem;
    text-align: center;
    line-height: 0.23rem;
    background: #f7eaf5;
    border: 1px solid #f3c0d7;
    border-radius: 0.04rem;
    font-size: 0.12rem;
    display: block;
  }
  .fs_text_rig p:nth-child(3) span:nth-child(1){
    width:  0.47rem;
  }
  .fs_text_rig p:nth-child(3) span:nth-child(2){
    width: 0.68rem;
    margin-left: 0.03rem;
  }
  .fs_text_rig p:nth-child(4){
    display: flex;
    align-items: center;
    margin: 0.18rem 0;
  }
  .fs_text_rig p:nth-child(4) span{
    display: block;
  }
  .fs_text_rig p:nth-child(4) span:nth-child(1){
    font-size: 0.12rem;
    color: #e25488;
  }
  .fs_text_rig p:nth-child(4) span:nth-child(2){
    color: #fe0058;
    font-size: 0.16rem;
    font-weight: 600;
  }
  .fs_text_rig p:nth-child(4) span:nth-child(3){
    font-size: 0.12rem;
    color: #929292;
    margin-left: 0.1rem;
    text-decoration: line-through;
  }
</style>
