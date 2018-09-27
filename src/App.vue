<template>
  <div id="app">
    <jm-shop-carts-page></jm-shop-carts-page>
    <!--<jm-fu-shi-pages></jm-fu-shi-pages>-->
    <!--<jm-fen-lei-pages></jm-fen-lei-pages>-->
  </div>
</template>

<script>

import JmShopCartsPage from "./pages/JmShopCartsPage";
// import JmFenLeiPages from "./pages/JmFenLeiPages";
// import JmFuShiPages from "./pages/JmFuShiPages";
export default {
  name: 'App',
  components:{
    // JmFenLeiPages
    // JmFuShiPages
    JmShopCartsPage
  }
}
</script>

<style>

</style>
