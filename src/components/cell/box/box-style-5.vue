<template>
  <div class='border-box-cont'>
    <div class='corner-style-cont'>
      <span class='corner-style-item style-1' />
      <span class='corner-style-item style-2' />
      <span class='corner-style-item style-3' />
      <span class='corner-style-item style-4' />
      <span class='corner-style-item style-5' />
    </div>
    <div class='title-cont' v-text='title' />
    <div class='body-cont'>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>
.border-box-cont{
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.corner-style-cont{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.corner-style-item{
  position: absolute;
  z-index: 99;
}
.style-1{
  width: 20px;
  height: 20px;
  top: 45px;
  right: 0;
  background: url(../../../../static/imgs/box/box-corner-2/corner-1.png) no-repeat;
  background-size: 100% 100%;
}
.style-2{
  width: 8px;
  height: 70px;
  top: 50%;
  left: -6px;
  background: url(../../../../static/imgs/box/box-corner-2/corner-2.png) no-repeat;
  background-size: 100% 100%;
}
.style-3{
  width: 8px;
  height: 70px;
  top: 50%;
  right: -6px;
  background: url(../../../../static/imgs/box/box-corner-2/corner-3.png) no-repeat;
  background-size: 100% 100%;
}
.style-4{
  width: 20px;
  height: 20px;
  bottom: 0;
  left: 0;
  background: url(../../../../static/imgs/box/box-corner-2/corner-4.png) no-repeat;
  background-size: 100% 100%;
}
.style-5{
  width: 68px;
  height: 9px;
  bottom: -2px;
  right: -5px;
  background: url(../../../../static/imgs/box/box-corner-2/corner-5.png) no-repeat;
  background-size: 100% 100%;
}
.title-cont{
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 0 0 15px 0;
  text-align: left;
  text-indent: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: url('../../../../static/imgs/box/box-corner-2/title-with-icon.png') no-repeat;
  background-size: auto 100%;
}
.body-cont{
  width: 100%;
  height: calc( 100% - 45px );
  border: 2px solid #2e45a0;
  position: relative;
  padding: 11px 15px;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(22, 37, 100, .2), rgba(99, 122, 236, .1));
}
</style>