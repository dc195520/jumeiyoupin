<template>
  <div>
    <jm-fen-lei-header></jm-fen-lei-header>
    <jm-fen-lei-counter :jmDataFen="jmDataFen"></jm-fen-lei-counter>
  </div>
</template>

<script>
    import JmFenLeiHeader from "../components/fenlei/JmFenLeiHeader";
    import JmFenLeiCounter from "../components/fenlei/JmFenLeiCounter";
    export default {
      name: "JmFenLeiPages",
      components: {JmFenLeiCounter, JmFenLeiHeader},
      data(){
        return{
          jmDataFen:[]
        }
      },
      created() {
        this.$http.get("/api/jmShop").then((response)=>{
          this.jmDataFen = response.data.data;
          console.log(this.jmDataFen);
        })
      },
    }
</script>

<style scoped>

</style>
