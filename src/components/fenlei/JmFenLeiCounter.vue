<template>
  <div>
    <div class="fl_sub_section">
    <section>
      <ul class="fl_menu">
        <li v-for="(fenA,aid) in jmDataFen">{{fenA.title}}</li>
      </ul>
      <div class="fl_sec_content">
        <div v-for="(fenB,bid) in jmDataFen">
          <div v-for="(fenC,cid) in fenB.classify">
            <h5>{{fenC.smallTitle}}</h5>
            <div class="fl_sec_one">
              <a href="" v-for="(fenE,eid) in fenC.smallImages"><img :src="fenE.smallImg">{{fenE.smallTxt}}</a>
            </div>
          </div>
         </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
    export default {
      name: "JmFenLeiCounter",
      props:["jmDataFen"]
    }

  //侧边切换效果
  $(function(){
    $(".fl_menu li:nth-child(1)").addClass("fl_active1");
    $(".fl_sec_content div:first-child").addClass("fl_focus");
    let menu = document.querySelector('.fl_menu');
    let menuLi = Array.from(menu.children);

    let sec_content = document.querySelector('.fl_sec_content');
    let contentDiv = Array.from(sec_content.children);
    menuLi.forEach((v, k) => {
      v.onclick = function () {
        // 切换Li
        menuLi.forEach(n => n.className = '');
        this.className = 'fl_active1';
        // 切换Div
        contentDiv.forEach(n => n.className = ' ');
        contentDiv[k].className = 'fl_focus';
      };
    });
  })
</script>

<style scoped>
  /* 分类 */
  /*section*/
  .fl_sub_section{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    padding-top: 0.7rem;
  }
  section{
    display: flex;
    width: 100%;
  }
  .fl_menu{
    overflow-y: scroll;
    width: 22.5%;
    height: 66.5%;
  }
  .fl_menu li{
    font-size: 0.14rem;
    color: #151515;
    width: 100%;
    text-align: center;
    line-height: 0.48rem;
    border-bottom: 2px solid #eee;
  }
  .fl_menu .fl_active1{
    color: #fe3a6c;
  }
  .fl_active1{
    background: #fff url(../../assets/images/fl_red.png) no-repeat left center;
    background-size: 6px 100%;
  }
  .fl_sec_content{
    width: 77.5%;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    background: #fff;
    height: 66.5%;
  }
  .fl_sec_content>div{
    width: 100%;
    display: none;
  }
  .fl_sec_content h5{
    font-size: 0.14rem;
    font-weight: 100;
    color: #000;
    margin-left: 0.12rem;
    line-height: 0.42rem;
  }
  .fl_sec_one{
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.1rem;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .fl_sec_one a{
    font-size: 0.14rem;
    color: #0a0a0a;
    width: 25.9%;
    display: flex;
    line-height: 0.25rem;
    flex-direction: column;
    align-items: center;
    margin: 0.1rem;
  }
  .fl_sec_one img{
    width: 100%;
  }
  .fl_sec_content .fl_focus{
    display: block;
    background: #fff;
  }

</style>
