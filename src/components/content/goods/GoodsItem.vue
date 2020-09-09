<template>
    <div id="goods">
      <div v-for="item in goodsCategory" class="goodsclass" @click="clickImg">
        <img :src="item.imgpath" alt="图片找不到"  @load="imgLoad">
        <div class="textclass">{{item.descriping}}</div>
        <span style="text-align: center;color: red">{{item.price.toFixed(2)}}</span>
      </div>

    </div>
</template>

<script>
    export default {
      name: "GoodsItem",
      props:{
        goodsCategory:{
          type:Array,
          default:function(){
            return []
          }
        }
      },
      methods:{
        imgLoad(){
          this.$bus.$emit("imgupload")
        },
        clickImg(){
          this.$router.push('detail/8888')
        }
      }
    }
</script>

<style scoped>
  #goods{
    display: flex;
    flex-wrap: wrap;
    /*justify-content: start;*/
  }
  .goodsclass{
    width: 46%;
   /* float: left;
    margin: 5px ;*/
    margin: 5px ;
    flex: 1;
  }
  .goodsclass img{
    width: 100%;
    border-radius: 6px;
  }
  .textclass{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
