<template>
<div id="hode">
<div v-for="item in commendlist" class="commend">
  <div> <img :src="item.imgurl" alt="图片找不到" class="imgdiv"></div>
  <div class="spandiv"><span>{{item.titls}}</span></div>
</div>
</div>
</template>

<script>
    export default {
      name: "CoodsCommend",
      props:{
          commendlist: {
            type: Array,
            default: function () {
              return []
            }
          }
      }
    }
</script>

<style scoped>
#hode{
  display: flex;
  text-align: center;
  font-size: 12px;
}
  .commend {
    flex: 1;
  }
  .commend img {
    width: 54px;
    height: 54px;
    border-radius: 27px;
  }
  .imgdiv {
   margin: 15px 0px 5px
  }
  .spandiv {
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
  }
</style>
