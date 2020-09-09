<template>
      <div class="tablebar-item" @click="itemClick" >
        <div v-if="!active">
        <slot name="tablebar-active-img"></slot>
        </div>
        <div v-else>
        <slot name="tablebar-noactive-img"></slot>
        </div>
        <div :style="activeStyle">
        <slot name="tablebar-text"></slot>
        </div>
      </div>
</template>

<script>
export default {
  name: 'TablebarItem',
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    },
    v_fontSize: {
      type: String,

    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed: {
   active(){
     //this.path中会有所有的patah但是$route.path只有一个传入的参数path
     return  this.$route.path.indexOf(this.path)!==-1
   },
   activeStyle(){
     return this.active?{color:this.activeColor,fontSize:this.v_fontSize}:{fontSize:this.v_fontSize}
   }
  }
}
</script>

<style scoped>
.tablebar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tablebar-item img{
  margin-top:3px;
  width:22px;
  height:22px
}
</style>
