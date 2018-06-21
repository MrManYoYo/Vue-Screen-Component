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
  box-shadow: inset 0 0 25px rgba(255,255,255,.7);
  padding: 10px;
}
</style>

