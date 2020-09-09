<template>
  <nav-bar>
    <div slot="right">
      <img src="@/assets/img/common/back.svg" class="detailimg" @click="backClick">
    </div>
    <div slot="center" class="detail_slot">
      <div v-for="(item,index) in detailList" class="detail_item" :class="{activecolor:index===currentIndex}" @click="changedetail(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
    export default {
      name: "DetailNavBar",
      components: {
        NavBar
      },
      data(){
        return{
          detailList:["商品","参数","评论","推荐"],
          currentIndex:0
        }
      },
      methods: {
        //变幻详细列表
        changedetail(index){
          this.currentIndex=index
        },
        //返回
        backClick(){
          /*this.$router.go(-1)*/
          this.$router.back()
        }

      }
    }
</script>

<style scoped>
.detail_slot{
  display: flex;
  font-size: 14px;
}
  .detail_item{
    flex: 1;
  }
  .detailimg{
    margin-top: 10px;
    margin-left: 5px;
  }
  .activecolor{
    color: var(--color-high-text);
  }
</style>
