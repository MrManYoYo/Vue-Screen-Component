<template>
  <div
      class='show-item'
      @mouseenter='isActive = true'
      @mouseleave='isActive = false'>
      <slot />
      <Spin size='large' fix v-if='spinShow' />
      <div
        v-if='toolsShow'
        :class='["tools-cont", isActive ? "active" : ""]'>
        <Button
          type='ghost'
          icon='code-working'
          size='small'
          class='tools-btn'
          @click='clickHandler'>查看option</Button>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    spinShow: {
      require: true,
      type: Boolean,
      default: () => false,
    },
    toolsShow: {
      type: Boolean,
      default: () => true,
    },
    showOptionHandler: {
      type: Function,
      default: () => {
        console.log('当前组件无配置项')
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    clickHandler() {
      this.$emit('showOptionHandler')
    },
  },
}
</script>
<style lang="scss" scoped>
$showBoxWidth: 400px;
$showBoxHeight: 300px;
@function scaleHeight($realWidth, $realHeight) {
  @return $showBoxWidth * $realHeight / $realWidth;
}
.show-item{
  width: $showBoxWidth;
  height: $showBoxHeight;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 3px #ccc;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &.bg-black{
    background-color: #000;
    color: rgba(255, 255, 255, .8);
  }
  &.bg-grey{
    /* background-color: rgba(0, 0, 0, .6); */
    background-color: #495060;
    color: rgba(255, 255, 255, .8);
  }

  .tools-cont{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: right;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 0 0 10px 10px;
    transform: translateY(100%);
    transition: all .3s ease-in;

    &.active{
      transform: translateY(0);
    }
  }
}
.tools-btn{
  color: #fff;

  &:hover{
    color: #57a3f3;
  }
}
</style>

