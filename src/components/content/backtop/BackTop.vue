<template>
  <div class="backtop">
    <img src="@/assets/img/common/top.png">
  </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
.backtop {
  position: fixed;
  bottom: 78px;
  right: 20px;
}
  .backtop img {
    width: 43px;
    height: 43px;
  }
</style>
