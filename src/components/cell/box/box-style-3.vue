<template>
  <div class='box-container'>
    <i class='box-corner box-corner-lt' />
    <i class='box-corner box-corner-rt' />
    <i class='box-corner box-corner-lb' />
    <i class='box-corner box-corner-rb' />
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
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  position: relative;

  .box-corner{
    position: absolute;
    width: 28px;
    height: 28px;

    &.box-corner-lt{
      top: 0;
      left: 0;
      background: url('../../../../static/imgs/box/box-corner-1/box-corner-lt.png') no-repeat;
      background-size: 100% 100%;
    }

    &.box-corner-rt{
      top: 0;
      right: 0;
      background: url('../../../../static/imgs/box/box-corner-1/box-corner-rt.png') no-repeat;
      background-size: 100% 100%;
    }

    &.box-corner-lb{
      bottom: 0;
      left: 0;
      background: url('../../../../static/imgs/box/box-corner-1/box-corner-lb.png') no-repeat;
      background-size: 100% 100%;
    }

    &.box-corner-rb{
      bottom: 0;
      right: 0;
      background: url('../../../../static/imgs/box/box-corner-1/box-corner-rb.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

