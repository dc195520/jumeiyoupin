<template>
  <div>
    <jm-fu-shi-header></jm-fu-shi-header>
    <jm-fu-shi-counter :fs_counter="jmDataServe" :fs_jmDataServe01="jmDataServe01"></jm-fu-shi-counter>
  </div>
</template>

<script>
    import JmFuShiHeader from "../components/fushi/JmFuShiHeader";
    import JmFuShiCounter from "../components/fushi/JmFuShiCounter";
    export default {
      name: "JmFuShiPages",
      data(){
        return{
          jmDataServe:[],
          jmDataServe01:[]
        }
      },
      components: {JmFuShiCounter, JmFuShiHeader},
      created() {
        this.$http.get("/api/jmShopServe").then((response)=>{
          this.jmDataServe = response.data.data[3].jmClassifyShop;
          this.jmDataServe01 = response.data.data[3];
          console.log(this.jmDataServe)
        })
      },

    }
</script>

<style scoped>

</style>
