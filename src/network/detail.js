import {request} from "./request";
//查找商品的详细
export function getDetailData(id){
  return request({
    url:"goods/detail",
    method:'get',
    params:{
      goods_id:id
    }
  })
}
export function getDetailSwiper() {
  return request({
    url: 'home/swiperdata',
    method: 'get'
  })
}
export class GoodsInfo {
  constructor(itemInfo){
    this.goods_id=itemInfo.goods_id//商品ID
    this.goods_name=itemInfo.goods_name//商品名称
    this.goods_number=itemInfo.goods_number//销量
    this.goods_weight=itemInfo.goods_weight//收藏人数
    this.goods_price=itemInfo.goods_price//商品价格
  }

}
