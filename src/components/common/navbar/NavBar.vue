<template>

    <div id="navbar">
      <div class="right"> <slot name="right"></slot> </div>
      <div class="center"> <slot name="center"></slot> </div>
      <div class="left"> <slot name="left"></slot> </div>

    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
#navbar {
  width: 100%;
  display: flex;
  height:44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .2)
}
.right,.left {
  width:60px;
}
.center{
  flex: 1;
  text-align: center;
}


</style>
