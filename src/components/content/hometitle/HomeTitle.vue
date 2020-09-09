<template>
  <div id="homelist">
    <div v-for="(item,index) in titleList" class="list-item"   @click="changcItem(index)">
      <span :class="{active:index===currentidex}" >
          {{item}}
      </span>

    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeTitle",
      data(){
          return{
            currentidex:0
          }
      },
      props: {
          titleList: {
            type:Array,
            default: function () {
              return []
            }
          },
        hometitle: Number,
      },
      methods:{
        changcItem(index){
          console.log(index)
          this.currentidex=index
          this.$emit("changetitle",index)

        }
      }
    }
</script>

<style scoped>
  #homelist{
    hight:44px;
    display:flex;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    background-color: #fff;
  }
  .list-item{
    flex: 1;
    line-height: 44px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
  .list-item span{
    padding: 0px 3px 5px 3px;

  }
</style>
