<template>
  <div>
    <swiper :options="swiperOption" v-if="swiperList.length>1" ref="mySwiper">
      <swiper-slide v-for="(slide, key) in swiperList" :key="key" >
        <div align="center"><img :src="slide" alt="" class="imgclas" @load="imgUpload"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  export default {
    name:'work',
    components: {
      Swiper,
      SwiperSlide
    },
    data(){
      return {
        swiperList :[
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
        swiperOption: {
          autoplay: {
            disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
            delay: 3000, // 自动切换的时间间隔（单位ms）
          },
          initialSlide: 0,
          loop: true,
          pagination: { el: '.swiper-pagination' }, // 分页按钮
          paginationClickable: true,
        }
      }
    },
    methods:{
      imgUpload(){
        this.$emit("imgUpload")
      }
    }
  }
</script>

<style>
  .imgclas{
    width: 100%;
    height: 170px;
  }
/*  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
    height: 200px;
    background: pink;
  }
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    line-height: 200px;
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
  }*/
</style>
