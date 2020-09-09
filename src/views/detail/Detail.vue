<template>

    <div id="detail">
      <!--导航栏-->
      <detail-nav-bar class="navbar"></detail-nav-bar>
      <better-scroll class="content">
        <detail-swipper/>
        <detail-base-info/>
        <unit-deatil/>
士大夫撒发
      </better-scroll>
    </div>

</template>

<script>
  import DetailNavBar from './detailchild/DetailNavBar'
  import DetailSwipper from './detailchild/DetailSwipper'
  import DetailBaseInfo from './detailchild/DetailBaseInfo'
  import BetterScroll from '@/components/common/betterscroll/BetterScroll/'
  import UnitDeatil from './detailchild/UnitDeatil'

    export default {
      name: "Detatil",
      components: {
        DetailNavBar,
        DetailSwipper,
        DetailBaseInfo,
        BetterScroll,
        UnitDeatil
      },
      data(){
        return {

        }
      }
    }
</script>

<style scoped>
  .navbar {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  #detail{
    height: 100vh;
  }
  .content {
   height: calc(100% - 44px);
    position: relative;
    z-index: 8;
    background-color: #ffffff;
  }
</style>
