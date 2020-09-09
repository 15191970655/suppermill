<template>
<div>
   <tablebar>
    <!--
      path：是路径的绑定 v_fontSize是字体样式的绑定
    -->
    <TablebarItem path="/home" v_fontSize="12px">
      <img  slot="tablebar-active-img" src="@/assets/img/tabbar/home.svg">
      <img  slot="tablebar-noactive-img" src="@/assets/img/tabbar/home_active.svg">
      <div  slot="tablebar-text">首页</div>

    </TablebarItem>
    <TablebarItem path="/category" v_fontSize="12px">
      <img slot="tablebar-active-img" src="@/assets/img/tabbar/category.svg">
      <img slot="tablebar-noactive-img" src="@/assets/img/tabbar/category_active.svg">
      <div slot="tablebar-text">类别</div>
    </TablebarItem>
    <TablebarItem path="/shopcart"  v_fontSize="12px">
      <img  slot="tablebar-active-img" src="@/assets/img/tabbar/shopcart.svg">
      <img  slot="tablebar-noactive-img" src="@/assets/img/tabbar/shopcart_active.svg">
      <div  slot="tablebar-text">购物车</div>
    </TablebarItem>
    <TablebarItem path="/profile" v_fontSize="12px">
      <img  slot="tablebar-active-img" src="@/assets/img/tabbar/profile.svg">
      <img  slot="tablebar-noactive-img" src="@/assets/img/tabbar/profile_active.svg">
      <div slot="tablebar-text" >个人中心</div>
    </TablebarItem>

  </tablebar>
  </div>
</template>

<script>
import Tablebar from '@/components/common/tablebar/Tablebar'
import TablebarItem from '@/components/common/tablebar/TablebarItem'
export default {
  name: 'TablebarMain',
  components:{
    Tablebar,
    TablebarItem
  }
}
</script>

<style>

</style>
