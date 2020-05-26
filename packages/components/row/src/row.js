export default {
  name: 'ArcRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style () {
      const style = {}
      style.marginLeft = -(this.gutter / 2) + 'px'
      style.marginRight = style.marginLeft
      return style
    }
  },
  render (h) {
    return h('div', {
      class: 'arc-row',
      style: this.style
    }, this.$slots.default)
  }
}
