<template>
  <div id="detailBaseInfo">
    <div class="goodsname">{{goodsInfo.goods_name}}</div>
    <div class="goodsprice">{{good_price}}<span>{{good_price}}</span><div class="titles">优惠价</div></div>
    <div class="statistical">
      <span class="count">销量  10442</span>
      <span class="count">收藏 616人</span>
      <span class="count">退货补运费</span>
    </div>
    <div class="commitment">
      <div class="commitmentleft"><span>√</span>7天无理由退货</div>
      <div class="commitmentright"><span>√</span>72小时发货</div>
    </div>
    <!--商家信息-->


  </div>
</template>

<script>
  import {getDetailData,GoodsInfo} from '../../../network/detail'
    export default {
      name: "DetailBaseInfo",
      mounted() {
        let id=this.$route.params.id
        getDetailData(id).then(data=>{
          this.goodsInfo=new GoodsInfo(data.message)
          console.log(this.goodsInfo);
        })
      },
      data(){
        return{
          goodsInfo:{}

        }
      },
      computed:{
        good_price(){
          return "￥"+Number(this.goodsInfo.goods_price).toFixed(2)
        }
      }

    }
</script>

<style scoped>
  #detailBaseInfo{
    height: 220px;
  }
  .goodsname{
    padding: 5px;
    font-weight: 700;
    height: 85px;
  }
  .goodsprice {
    position: relative;
    padding-left: 15px;
    color: var(--color-tint);
    font-size: 20px;
  }
  .goodsprice span{
    font-size: 10px;
    padding-left: 5px;
    text-decoration: line-through;
    color: #97a8be;
  }
  .titles{
    padding-left: 5px;
    background-color: var(--color-high-text);
    width: 45px;
    height: 17px;
    border-radius: 6px ;
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: -1px;
    left: 145px;
  }
  .statistical{
    padding: 10px 0px 6px 0px;
    display: flex;
    text-align: center;
    border-bottom: 2px solid #eeeeee;
  }
 .statistical span {
   flex: 1;
   font-size: 10px;
   font-weight: 700;
   color: #A5A5A5;
 }
 .commitment {
   position: relative;
   margin-top: 20px;
   margin-bottom: 20px;
   font-size: 14px;
   font-weight: 700;
   height: 40px;
   z-index: 8;
/*   background-color: pink;*/
   border-bottom: 3px solid #eeeeee;
 }
 .commitmentleft{
   position: absolute;
   left: 10px;
    display: inline-block;
 }
  .commitmentright{
    position: absolute;
    right: 10px;
    display: inline-block;
  }
  .commitment span {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 9px;
    border: 2px solid #A5A5A5;
    font-size: 12px;
    text-align: center;
    font-weight: 900;
  }


</style>
