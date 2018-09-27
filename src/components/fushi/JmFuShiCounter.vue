<template>
  <div>
    <!-- section -->
    <div class="fs_section">
      <jm-fu-shi-fen-lei :fs_jmDataServe01="fs_jmDataServe01"></jm-fu-shi-fen-lei>

      <!-- 特惠24小时 单件包邮  -->
      <jm-fu-shi-te-hui  :fs_tehui="fs_counter"></jm-fu-shi-te-hui>

      <!--今日十点上新-->
      <jm-fu-shi-shang-xin :fs_shangxin="fs_counter"></jm-fu-shi-shang-xin>
    </div>
  </div>
</template>

<script>
    import JmFuShiFenLei from "./JmFuShiFenLei"
    import JmFuShiTeHui from "./JmFuShiTeHui"
    import JmFuShiShangXin from "./JmFuShiShangXin"
    export default {
      name: "JmFuShiCounter",
      components: {JmFuShiShangXin, JmFuShiTeHui, JmFuShiFenLei},
      props: ["fs_counter","fs_jmDataServe01"]
    }
</script>

<style scoped>

</style>
