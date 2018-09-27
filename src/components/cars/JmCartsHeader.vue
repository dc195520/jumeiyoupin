<template>
  <div>
    <div class="car_header" v-for="(i) in car_header" :key="i.id">
      <img :src="i.img01">
      <p id="cart">{{i.title}}</p>
      <a href="#">编辑<img :src="i.img02"></a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmCartsHeader",
      data(){
        return {
          car_header:[
            {
              img01:"../../../static/data/images/car01.png",
              title:"购物车",
              img02:"../../../static/data/images/icon_message_top.png"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .car_header{
    width: 90%;
    height: 0.44rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.18rem;
    border-bottom: 1px solid #f7f7f7;
    position: fixed;
    top: 0;
  }
  .car_header img:first-child{
    width: 0.1rem;
    height: 0.16rem;
  }
  .car_header p{
    font-size: 0.16rem;
    font-weight: 600;
    color: #000;
    margin-left: 0.5rem;
  }
  .car_header img:last-child{
    width: 0.18rem;
    height: 0.18rem;
    margin-left: 0.22rem;
  }
  .car_header a{
    font-size: 0.12rem;
    color: #000;
    display: flex;
    align-items: center;
  }
</style>
