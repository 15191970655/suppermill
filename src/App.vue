<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <TablebarMain></TablebarMain>
  </div>
</template>

<script>
  import TablebarMain from './components/content/mainbarmain/TablebarMain'
  import Detail from './views/detail/Detail'
  export default {
    name: 'App',
    components: {
      TablebarMain,
      Detail
    }
  }
</script>

<style>
@import "./assets/css/base.css";
</style>
