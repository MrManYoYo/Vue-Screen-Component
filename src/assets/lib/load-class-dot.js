export default class Spin {
  constructor(config) {
    this.dom = document.getElementById(config['el'])
    this.canvas = this.createCanvas(this.dom)
    this.ctx = this.canvas.getContext('2d')
    this.centerX = this.dom.clientWidth / 2
    this.centerY = this.dom.clientHeight / 2
    this.radius = config['radius'] || 25
    this.pointNum = config['num'] || 9
    this.pointSize = config['size'] || 10
    this.points = []
    this.speed = config['speed'] || 2
    this.colorDic = config['colorDic'] || ['#ff9900', '#ff0000', '#fff000']
  }
  createCanvas(dom) {
    const _canvas = document.createElement('canvas')
    _canvas.width = dom.clientWidth
    _canvas.height = dom.clientHeight
    dom.appendChild(_canvas)
    return _canvas
  }
  getPointCoord(angle) {
    const x = this.centerX + this.radius * Math.cos(angle * Math.PI / 180)
    const y = this.centerY + this.radius * Math.sin(angle * Math.PI / 180)
    return { x, y, angle: angle % 360 }
  }
  makePointCoord() {
    const _this = this
    this.points = []
    for (let i = 0; i < this.pointNum; i++) {
      const angle = i * 360 / this.pointNum
      this.points.push({
        ..._this.getPointCoord(angle),
        r: _this.pointSize / 2,
        bgColor: _this.colorDic[i % (_this.colorDic.length)],
      })
    }
    // console.log(_this.points)
  }
  createPoints() {
    // console.log(this.points)
    if (this.points && this.points.length > 0) {
      this.points.forEach(point => {
        this.ctx.fillStyle = point.bgColor
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI, false)
        this.ctx.fill()
      })
    }
  }
  createAnimation() {
    // console.log(this)
    const _this = this
    if (_this.points && _this.points.length > 0) {
      this.points.forEach(point => {
        Object.assign(point, _this.getPointCoord(point.angle + _this.speed))
      })
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    _this.createPoints()
    requestAnimationFrame(() => {
      _this.createAnimation()
    })
  }
  init() {
    this.makePointCoord()
    this.createPoints()
    this.createAnimation()
  }
}