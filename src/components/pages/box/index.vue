<template>
  <div class='content'>
    <box-container :toolsShow='false'>
      <box-style-1 class='box-style-1'>
        <!-- 内容区自定义，默认内容使用时删除 -->
        <h3>Box-Style-1</h3>
        <p><strong>Bg Size:</strong> 595 * 388</p>
        <p><strong>Image:</strong> imgs/box/box-1-595-388.png</p>
      </box-style-1>
    </box-container>
    <box-container :toolsShow='false'>
      <box-style-1-small class='box-style-1-small'>
        <!-- 内容区自定义，默认内容使用时删除 -->
        <h3>Box-Style-1-Small</h3>
        <p><strong>Bg Size:</strong> 601 * 247</p>
        <p><strong>Image:</strong> imgs/box/box-1-601-247.png</p>
      </box-style-1-small>
    </box-container>
    <box-container :toolsShow='false'>
      <box-style-2 class='box-style-2' :showTitle='false'>
        <!-- 内容区自定义，默认内容使用时删除 -->
        <h3>Box-Style-2</h3>
        <p><strong>Bg Size:</strong> 562 * 317</p>
        <p><strong>Image:</strong> imgs/box/box-2.png</p>
      </box-style-2>
    </box-container>
    <box-container
      :toolsShow='false'
      class='bg-grey'>
      <box-style-3 class='box-style-3'>
        <!-- 内容区自定义，默认内容使用时删除 -->
        <h3>Box-Style-3</h3>
        <p><strong>Bg Size:</strong> no limit</p>
        <p><strong>Image:</strong> imgs/box/box-corner/</p>
      </box-style-3>
    </box-container>
    <box-container
      :toolsShow='false'
      class='bg-grey'>
      <box-style-4 class='box-style-4'>
        <!-- 内容区自定义，默认内容使用时删除 -->
        <h3>Box-Style-4</h3>
        <p><strong>Bg Size:</strong> no limit</p>
        <p><strong>Image:</strong> box-shadow</p>
      </box-style-4>
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Box1 from '../../cell/box/box-style-1'
import Box1Small from '../../cell/box/box-style-1-small'
import Box2 from '../../cell/box/box-style-2'
import Box3 from '../../cell/box/box-style-3'
import Box4 from '../../cell/box/box-style-4'

export default {
  components: {
    'box-container': boxContainer,
    'box-style-1': Box1,
    'box-style-1-small': Box1Small,
    'box-style-2': Box2,
    'box-style-3': Box3,
    'box-style-4': Box4,
  },
  data() {
    return {}
  },
  mounted() {
    this.$Notice.open({
      title: '注意',
      desc: '当前部分盒容器背景图片尺寸非标准，暂无尺寸规范，坐等标准',
      duration: 0,
    });
  },
  beforeDestroy() {
    this.$Notice.destroy()
  },
}
</script>
<style lang="scss" scoped>
@import './box.scss';
</style>

