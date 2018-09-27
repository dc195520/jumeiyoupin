<template>
  <div>
    <jm-carts-header></jm-carts-header>
    <jm-carts-notics></jm-carts-notics>
    <jm-carts-shop-list v-if="jmShopServe !== undefined" :cartsInfo="jmShopServe"
                          :shops="selectShopAll" ></jm-carts-shop-list>
    <jm-carts-everyone :cartsEver="jmShopServe"></jm-carts-everyone>
    <jm-carts-payment-bar :checkBtn="jmShopServe01" @sAll="selectAll" :tm="totalMoney"></jm-carts-payment-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import JmCartsHeader from "../components/cars/JmCartsHeader"
  import JmCartsNotics from "../components/cars/JmCartsNotics"
  import JmCartsShopList from "../components/cars/JmCartsShopList"
  import JmCartsPaymentBar from "../components/cars/JmCartsPaymentBar"
  import JmCartsEveryone from "../components/cars/JmCartsEveryone"
    export default {
      name: "JmShopCartsPage",
      components:{
        JmCartsEveryone,
        JmCartsShopList,
        JmCartsHeader,
        JmCartsNotics,
        JmCartsPaymentBar
      },
      data(){
        return {
          jmShopServe:[],
          jmShopServe01:[],
          totalMoney:0
        }
      },
      methods:{
        /**
         * 计算总金额
         * @private
         */
        __counter(shopData){
          this.totalMoney =0;
          shopData.forEach((item,index)=>{
            item.shopProduct.forEach((product,idx)=>{
              if(product.checked){
                this.totalMoney += product.productCount * product.presentPrice;
              }
            })
          })
        },
      /**
       * 整个购物车全选/反选
       */
        selectAll(){
          let isChecked = this.jmShopServe01.checked;
          this.jmShopServe01.jmClassifyShop.forEach((item,index)=>{
            item.checked = isChecked;
            item.shopProduct.forEach((product,idx)=>{
              product.checked=isChecked;
            });
          });
        this.__counter(this.jmShopServe01.jmClassifyShop)
        },
        /**
         * 店铺全选
         * @param sid 商铺id
         */
        selectShopAll(sid){
          let isChecked = this.jmShopServe[sid].checked;
          console.log(this.jmShopServe[sid]);
            this.jmShopServe[sid].shopProduct.forEach((item,index)=>{
              item[sid].checked=isChecked;
            });
          this.__counter(this.jmShopServe);

        },
        /**
         * 针对商品的选择
         * @param sid
         * @param pid
         */
        // selectSingleCheck(sid,pidx){
        // //   let checked= this.jmShopServe[sid].shopProduct[pid].checked;
        // //   this.jmShopServe[sid].checked = checked;
        // //   this.jmShopServe.checked = checked;
        // //   this.__counter(this.jmShopServe);
        // },
        // addQal(sid,pidx){
        //   this.jmShopServe[sid].shopProduct[pidx].productCount++;
        //   this.__counter(this.jmShopServe);
        // },
        // subQal(sid,pid){
        //   if(this.jmShopServe[sid].shopProduct[pid].productCount<=1){
        //     this.jmShopServe[sid].shopProduct[pid].productCount=1
        //   }else{
        //     this.jmShopServe[sid].shopProduct[pid].productCount--;
        //     this.__counter(this.jmShopServe);
        //   }

        // }
      },
      created () {
        this.$http.get('/api/jmShopServe').then((response) => {
          this.jmShopServe = response.data.data[3].jmClassifyShop;//店铺列表
          this.jmShopServe01 = response.data.data[3];//购物车
          this.__counter(response.data.data[3].jmClassifyShop);
          // console.log(this.jmShopServe);
          // console.log(this.jmShopServe01);

        })
      }
    }
</script>

<style scoped>

</style>
