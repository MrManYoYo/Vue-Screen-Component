<template>
  <div class='box-container'>
    <header class='box-header' v-if='showTitle'>
      <span class='box-header-title'>{{boxTitle}}</span>
    </header>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    boxTitle: {
      type: String,
      default: () => '标题',
    },
    showTitle: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>
<style lang="scss" scoped>
.box-container{
  width: 100%;
  height: 100%;
  background: url('../../../../static/imgs/box/box-2.png') no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  padding: 55px 10px 10px;
  box-sizing: border-box;
  position: relative;

  .box-header{
    width: 122px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    position: absolute;
    top: 11px;
    left: 15px;

    .box-header-title{
      font-size: 14px;
      color: #00bef7;
    }
  }
}
</style>

