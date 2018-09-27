<template>
  <div>
    <div class="fs_section_top">
      <a href="#" v-for="i in fs_jmDataServe01.fen" :key="i.id">
        <img :src="i.fenleiPic"/>{{i.fenleiTitle}}
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "JmFuShiFenLei",
      props:["fs_jmDataServe01"]
    }
</script>

<style scoped>
  /* 分类 */
  .fs_section .fs_section_top{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.06rem;
    background: #fff;
  }
  .fs_section .fs_section_top a{
    font-size: 0.12rem;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.06rem 0.19rem;
  }
  .fs_section .fs_section_top a img{
    width: 0.54rem;
    height: 0.64rem;
  }
</style>
