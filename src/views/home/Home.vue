<template>
  <div id="home">
    <!--title-->
    <NavBar class="home-navbar" >
      <div slot="center"  >购物街</div>
    </NavBar>
    <!--类别数据-->
    <home-title :titleList="['流行','新款','精选']" class="home-title" @changetitle="changetitle" ref="hometitle1" v-show="istitleshow"></home-title>
    <better-scroll class="content" ref="betterscroll" :probe-type="3" @scroll="showTop">
      <!--轮播图-->
      <homeswiper class="home-swiper" @imgUpload="imgUpload"></homeswiper>
      <!--热门推荐-->
      <coods-commend :commendlist="commendlist"></coods-commend>
      <!--类别数据-->
      <home-title :titleList="['流行','新款','精选']" class="home-title" @changetitle="changetitle" ref="hometitle2"></home-title>
      <!--首页产品列表-->
      <goods-list :typeName="typename"></goods-list>

    </better-scroll>
    <back-top class="backItem" @click.native="backTop" v-show="isshow"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import BetterScroll from '@/components/common/betterscroll/BetterScroll/'
import Homeswiper from './Homeswiper'
import CoodsCommend from '@/components/content/goods/CoodsCommend/'
import HomeTitle from '@/components/content/hometitle/HomeTitle/'
import GoodsList from '@/components/content/goods/GoodsList/'
import BackTop from '@/components/content/backtop/BackTop/'
export default {
  name: 'Home',
  components: {
    NavBar,
    BetterScroll,
    Homeswiper,
    CoodsCommend,
    HomeTitle,
    GoodsList,
    BackTop
  },
  methods:{
    changetitle(index){

      this.typename=this.titleLists[index]
      this.$refs.hometitle2.currentidex=index
      this.$refs.hometitle1.currentidex=index

    },
    backTop(){//返回到顶部
      console.log(this.$refs.betterscroll)
      this.$refs.betterscroll.backTop(0,0,500)
    },
    showTop(position){//是否显示
      this.isshow=(-position.y)>1000
      this.istitleshow=(-position.y)>this.offsetToplength
    },
    debounce(func,delay){//防抖动函数
      let timer=null;
      return function(...args){
        if(timer)clearTimeout(timer)
        timer=setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    imgUpload(){
     this.offsetToplength= this.$refs.hometitle2.$el.offsetTop
    }
  },
  data(){
    return{
      typename:"popular",
      titleLists: ['popular','new','selects'],
      isshow:false,
      istitleshow:false,
      commendlist:[{
        imgurl: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        titls: "十点抢券"
      },{
        imgurl: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        titls: "好物特卖"
      }, {
        imgurl: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        titls: "内购福利"
      },{
        imgurl: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        titls: "初秋上新"
      }],
      offsetToplength:0
    }
  },
  mounted() {
    const refresh=this.debounce(this.$refs.betterscroll.refreshImg,500)
    this.$bus.$on("imgupload",()=>{
      refresh()
    })
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
.home-navbar{
  background-color: var(--color-tint);
  color: #fff;
}
  .home-swiper{

  }
  .home-title{
   position: relative;
    z-index: 9;
  }
  #black{
    position: relative;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }

</style>
