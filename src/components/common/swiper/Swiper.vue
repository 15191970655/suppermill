<template>
  <div id="carousel" @mouseover="stopAuto" @mouseout="autoPlay">
    <div class="carousel-box" :style="{width:allCount,'-webkit-transition':transitionConfig,'-webkit-transform':slateX}"
         ref="carousel">
     <!-- <div class="carousel-item" :style="{'-webkit-transform':imgLateX}" v-if="loop">
        <img :src="imgList[imgList.length-1].image_src" />
      </div>-->
      <div class="carousel-item" v-for="(item,index) in imgList" :key="index" :style="{'-webkit-transform':getImgLateX(index)}">
        <img :src="item.image_src" />
      </div>
      <!--<div class="carousel-item" :style="{'-webkit-transform':endImgLateX}" v-if="loop">
        <img :src="imgList[0].image_src" />
      </div>-->
    </div>
    <span class="carousel-left" @click="toLeft">&#8249;</span>
    <span class="carousel-right" @click="toRight">&#8250;</span>
    <div class="carousel-dots" v-if="dots">
      <button v-for="(item,index) in imgList.length" :key="index" :class="{active:index===dotsIndex}" @click="toDots(index)">{{item}}</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Swiper",
      data: function () {
        return {
          // 图片宽
          imgWidth: 375,
          // 指示器
          dots: true,
          arrow: true,
          // 初始播放位置
          initIndex: 0,
          // 是否循环
          loop: true,
          // 持续时间
          duration: 0.3,
          // 自动播放
          auto: true,
          // 自动播放时间间隔
          autoTime: 2000,
          imgIndex: 0,
          durationTime: 0.2,
          dotsIndex: 0,
          autoer: null
        }
      },
      props:{
        imgList:{
          type: Array,
          default: function () {
            return []
          }
        }
      },
      computed: {
        allCount () {
          return (this.imgList.length * this.imgWidth) + 'px'
        },
        slateX () {

          return 'translate3d(' + (-this.imgIndex * this.imgWidth) + 'px,0,0)'
        },
        transitionConfig () {
          return 'all ' + this.durationTime + 's'
        },
        imgLateX () {
          let width = -this.imgWidth
          return 'translate3d(' + (width) + 'px,0,0)'
        },
        endImgLateX () {
          let width = this.imgList.length

          return 'translate3d(' + (width) + 'px,0,0)'
        }
      },
      created () {
        this.imgIndex = this.dotsIndex = this.initIndex
        this.imgIndex++
        this.durationTime = this.duration

        if (this.auto) this.autoPlay()
      },
      methods: {
        getImgLateX (i) {
          let width = this.imgWidth * (i + 1)
          return 'translate3d(' + (width) + 'px,0,0)'
        },
        toLeft () {
          if (this.loop) {
            this.imgIndex--
            this.dotsIndex--
            if (this.dotsIndex <= -1) {
              this.dotsIndex = this.imgList.length - 1
            }
            if (this.imgIndex <= -2) {
              this.loopFn('left')
            }
          } else {
            if (this.imgIndex === 0) {
              this.dotsIndex = this.imgIndex = this.imgList.length - 1
              return this.dotsIndex
            }
            this.imgIndex--
            this.dotsIndex--
          }
        },
        toRight () {
          if (this.loop) {
            this.imgIndex++
            this.dotsIndex++
            if (this.dotsIndex === this.imgList.length) this.dotsIndex = 0
            if (this.imgIndex === this.imgList.length + 1) this.loopFn('right')
          } else {
            this.imgIndex++
            this.dotsIndex++
            if (this.imgIndex > this.imgList.length - 1) {
              this.dotsIndex = this.imgIndex = 0
              return this.dotsIndex
            }
          }
        },
        loopFn (type) {
          const dur = this.durationTime
          this.durationTime = 0

          this.imgIndex = type === 'right' ? 0 : this.imgList.length - 1

          setTimeout(() => {
            this.$nextTick(function () {
              this.durationTime = dur

              if (type === 'right') this.imgIndex++
              else this.imgIndex--
            })
          }, 30)
        },
        toDots (index) {
          this.dotsIndex = this.imgIndex = index
        },
        autoPlay () {
          if (this.auto) {
            clearInterval(this.autoer)
            this.autoer = setInterval(() => {
              this.toRight()
            }, this.autoTime)
          }
        },
        stopAuto () {
          if (this.auto) return clearInterval(this.autoer)
        }
      }
    }
</script>

<style scoped>
  #carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .carousel-left,
  .carousel-right {
    position: absolute;
    top: 56%;
    display: inline-block;
    transform: translateY(-50%);
    color: #fff;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    font-size: 60px;
    border-radius: 50%;
    transition: all .5s;
  }

  .carousel-left {
    left: 5%;
  }

  .carousel-right {
    right: 5%;
  }

  .carousel-left:hover,
  .carousel-right:hover {
    color: black;
  }

  .carousel-dots {
    position: absolute;
    bottom: 20px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  .carousel-dots button {
    width: 17px;
    height: 17px;
    background: rgba(127, 124, 124, 0.5);
    display: inline-block;
    margin: 0 5px;
    border-radius: 50%;
    color: #000;
    border: none;
    outline: none;
    transition: all .2s;
    cursor: pointer;
    font-size: 7px;
  }

  .carousel-dots button:hover,
  .carousel-dots button.active {
    background: rgba(51, 122, 183, 0.8);
    color: #fff;
  }

  .carousel-item {
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
  }

  .carousel-item img {
    width: 100%;
    height: 300px;
  }
</style>
