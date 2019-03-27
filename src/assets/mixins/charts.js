const ChartsMixin = {
  methods: {
    createGradient({ dir, colors } = { dir: [0, 0, 0, 1], colors: ['#ff9f60', '#fdd27a'] }) {
      const [x, y, x2, y2] = dir;
      const [beginColor, endColor] = colors;
      return {
        type: 'linear',
        x,
        y,
        x2,
        y2,
        colorStops: [
          {
            offset: 0,
            color: beginColor,
          },
          {
            offset: 1,
            color: endColor,
          },
        ],
      }
    },
  },
}
export default ChartsMixin