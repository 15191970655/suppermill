<template>
 <div id="category">
<nav-bar class="home-navbar">
  <div slot="center"  >购物街</div>s
</nav-bar>
   <better-scroll class="content">
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
     <div>这是一个好的数据</div>
   </better-scroll>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import BetterScroll from '@/components/common/betterscroll/BetterScroll'

export default {
  name: 'Category',
  components: {
    NavBar,
    BetterScroll
  },
  data(){
    return{

    }
  },

}
</script>

<style>
  #category {
    height: 100vh;
    position: relative;
  }
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
  .home-navbar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0px;
    z-index: 99;
  }
</style>
