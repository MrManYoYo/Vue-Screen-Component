<template>
  
</template>

<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'singleLine',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: 'item0', value: 10 },
        { name: 'item1', value: 20 },
        { name: 'item2', value: 30 },
        { name: 'item3', value: 40 },
        { name: 'item4', value: 40 },
        { name: 'item5', value: 30 },
        { name: 'item6', value: 20 },
        { name: 'item7', value: 10 },
      ],
    },
  },
  data() {
    return {
      chart: null,
      
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
</style>