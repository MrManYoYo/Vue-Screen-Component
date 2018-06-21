<template>
  <div class='box-container'>
    <slot />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.box-container{
  width: 100%;
  height: 100%;
  background: url('../../../../static/imgs/box/box-1-595-388.png') no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  padding: 25px;
  box-sizing: border-box;
}
</style>

