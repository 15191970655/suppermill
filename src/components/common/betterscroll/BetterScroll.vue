<template>
    <div  ref="wrapper">
      <div >
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from  "better-scroll"
    export default {
      name: "BetterScroll",
      data(){
        return{
          scroll: null,
        }
      },
      props: {
        pullUpLoad:{//是否启动下拉加载
          type: Boolean,
          default: true
        },
        scrollbar: {//是否显示滚动条
          type: Boolean,
          default:false
        },
        probeType: {//侦听事件的类型 0是默认事件，不进行事件侦听的 1是确定不进行事件的侦听 2是只进行当前滑动侦听但是弹性滑动的时候是不进行侦听的 3是进行侦听同时进行弹性部分的侦听
          type: Number,
          default: 0
        },
        click: {//在better-scroll事件中有时默认是不能进行事件的绑定的当设置这个值为true时才进行事件的绑定
          type: Boolean,
          default: true
        },

      },
      mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
          pullUpLoad: this.pullUpLoad,
          scrollbar: this.scrollbar,
          probeType: this.probeType,
          click: this.click
        }),
        this.scroll.on("scroll",(position)=>{//滑动事件的监听当前滑动的位置
          this.$emit("scroll",position)//将滑动事件获得的参数传到对应的事件中
        }),
        this.scroll.on("pullingUp",()=>{
          this.scroll.finishPullUp()//在滑动到底部进行加载事件的重新加载
        })

      },
      methods:{
        backTop(x,y,time=300){
          this.scroll.scrollTo(x,y,time)//页面滑动到对应的位置在规定的时间里
        },
        refreshImg(){
          //先判断this.scroll是否存在，当存在的时候再进行刷新操作
          this.scroll&&this.scroll.refresh()
        },

      }
    }
</script>

<style scoped>

</style>
