<template>
  <div class="unitdetail"  align="center">
    <div>
    <div class="merchantsInfo">
      <img src="../../../assets/img/cart/qq.jpg"><span>仲铂美</span>
    </div>
    </div>
    <div class="sum">
      <div class="sum_item1">
        <table align="center">
          <tr>
            <td>5.8万</td>
            <td>99</td>
          </tr>
          <tr>
            <td>总销量</td>
            <td>全部宝贝</td>
          </tr>
        </table>
      </div>
      <div class="sum_item2">
        <table>
          <tr v-for="item in commons">
            <td>{{item.detail}}</td>
            <td :class="{active:item.score>=5}">{{item.score}}</td>
            <td :class="{active:item.score>=5}">
              <span>{{item.level}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="intoshop">进店逛逛</div>
  </div>
</template>

<script>
    export default {
        name: "UnitDeatil",
      data(){
          return{
            commons:[
              {
                detail: "相符描述",
                score: 4.64,
                level: "低"
              },
              {
                detail: "价格合理",
                score: 5,
                level: "高"
              },
              {
                detail: "质量满意",
                score: 4.62,
                level: "低"
              }

            ]
          }
      }
    }
</script>

<style scoped>
  .merchantsInfo {
    height: 80px;
  }
  .merchantsInfo img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: inline-block;
    border: 1px solid #454545;
    margin-left: 5px;
    float: left;
  }
  .merchantsInfo span {
    margin-left: 8px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    float: left;
    font-weight: 700;
    font-size: 18px;
  }
  .sum {
    display: flex;
  }
  .sum_item1 {
    height: 95px;
    flex: 2;
  }
  .sum_item2 {
    height: 95px;
    flex: 3;
  }
  .sum_item1 td {
    text-align: center;
    font-weight: 700;
  }
  .sum_item2 td {
    text-align: right;
    font-weight: 700;
  }
  .sum_item1 table {
    width: 100%;
    height: 100%;
    border-right: 2px solid #F5F5F5;
  }
  .sum_item2 table {
    width: 100%;
    height: 100%;
  }
  .sum_item1 table>tr:first-child{
    font-size: 20px;
  }
  .sum_item2 table>tr td:nth-child(n+2){
    text-align: left;
    border-left: 25px solid #ffffff;
    color: green;
  }
  .sum_item2 table>tr td:nth-child(n+2) span {
    background-color: green;
    color: #ffffff;
  }
  .active {
    color: red!important;
  }
  .active span {
    background-color: red!important;
  }
  .intoshop{
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: #eeeeee;
    font-weight: 700;
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 20px;

  }
</style>
