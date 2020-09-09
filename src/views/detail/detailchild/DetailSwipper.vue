<template>
  <swipper :imgList="detailSwiperList"></swipper>
</template>

<script>
  import Swipper from '@/components/common/swiper/Swiper'
  import {getDetailSwiper} from '../../../network/detail'
    export default {
      name: "DetailSwipper",
      components: {
        Swipper
      },
      data(){
        return{
          detailSwiperList:[],
          goodsInfo: null
        }
      },
     created() {
       getDetailSwiper().then(data=>{
          this.detailSwiperList=data.message
        })
  }
    }
</script>

<style scoped>

</style>
