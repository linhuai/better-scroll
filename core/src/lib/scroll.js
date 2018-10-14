class Scroll {
  constructor (el, options) {
    this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
    this.scroller = this.wrapper.children[0]
    this.scrollerStyle = this.scroller.style
    // some default value
    this.status = false
    this.x = 0
    this.y = 0
    this.lastPointX = 0
    this.lastPointY = 0
    this.maxScrollY = 0
    this.minScrollY = 0
    this._events = {} // 存放事件
    this._init()
    this.refresh()
  }
  _init () {
    let hasTouch = 'ontouchstart' in window
    let [tapstart, tapmove, tapend] = hasTouch ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup']
    utils.addEvent(this.wrapper, tapstart, (e) => {
      e.preventDefault()
      e.stopPropagation()
      const point = e.touches ? e.touches[0] : e
      this.lastPointX = point.pageX
      this.lastPointY = point.pageY
      console.log(this.maxScrollY)
      /*  tapmove hanler */
      const handleTapMove = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const point = e.touches ? e.touches[0] : e
        let newY = this.y + (point.pageY - this.lastPointY)
        this.lastPointX = point.pageX
        this.lastPointY = point.pageY
        if (newY <= this.maxScrollY) {
          newY = this.maxScrollY
          console.log(!this.status)
          if (!this.status) {
            this.status = true
            this.trigger('pullingUp')
          }
        }
        newY = (newY > this.minScrollY) ? this.minScrollY : newY
        this._translate(newY)
      }
      /* tapend handler */
      const handleTapEnd = (e) => {
        e.preventDefault()
        e.stopPropagation()
        utils.removeEvent(this.wrapper, tapmove, handleTapMove)
        utils.removeEvent(this.wrapper, handleTapEnd)
      }
      utils.addEvent(this.wrapper, tapmove, handleTapMove)
      utils.addEvent(this.wrapper, tapend, handleTapEnd)
    })
  }
  _translate (y) {
    this.scrollerStyle.transform = `translateY(${y}px)`
    this.y = y
  }
  refresh () {
    this.status = false
    const wrapperRect = utils.getRect(this.wrapper)
    console.log('wrapperRect', wrapperRect)
    const scrollerRect = utils.getRect(this.scroller)
    console.log('scrollerRect', scrollerRect)
    let wrapperHeight = wrapperRect.height
    let scrollerHeight = scrollerRect.height
    this.maxScrollY = wrapperHeight - scrollerHeight
  }
  _initEvent () {
  }
  /* 添加事件回调 */
  on (type, fn, context = this) {
    if (!this._events[type]) {
      this._events[type] = []
    }
    this._events[type].push([fn, context])
  }
  /* 触发事件 */
  trigger (type) {
    if (!this._events[type]) return false
    let events = this._events[type]
    for (let i = 0, len = events.length; i < len; i++) {
      console.log(i)
      let [fn] = events[i]
      fn()
    }
  }
}

const utils = {
  addEvent: (el, type, fn, capture) => {
    el.addEventListener(type, fn, !!capture)
  },
  removeEvent: (el, type, fn, capture) => {
    el.removeEventListener(type, fn, !!capture)
  },
  getRect: (el) => {
    return {
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

export default Scroll
