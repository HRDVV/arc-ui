export default {
  name: 'ArcCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    // < 768
    xs: [Object, Number],
    // ≥ 768
    sm: [Object, Number],
    // >= 992
    md: [Object, Number],
    // >= 1200
    lg: [Object, Number],
    // >= 1920
    xl: [Object, Number]
  },
  computed: {
    style () {
      const style = {}
      let parent = this.$parent
      while (parent.$options.name !== 'ArcRow') {
        parent = parent.$parent
      }
      style.paddingLeft = (parent.gutter / 2) + 'px'
      style.paddingRight = style.paddingLeft
      return style
    },
    classes () {
      const classes = ['arc-col']
      const commonPropList = ['span', 'offset', 'pull', 'push']
      const reactivePropList = ['xl', 'lg', 'md', 'sm', 'xs']
      commonPropList.forEach(prop => {
        if (this[prop]) {
          classes.push(
            prop !== 'span'
              ? `arc-col-${prop}-${this[prop]}`
              : `arc-col-${this[prop]}`
          )
        }
      })
      reactivePropList.forEach(size => {
        if (typeof this[size] === 'number') {
          classes.push(`arc-col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          Object.keys(this[size]).forEach(prop => {
            classes.push(
              prop !== 'span'
                ? `arc-col-${size}-${prop}-${this[size][prop]}`
                : `arc-col-${size}-${this[size][prop]}`
            )
          })
        }
      })
      return classes
    }
  },
  render (h) {
    return h('div', {
      class: this.classes,
      style: this.style
    }, this.$slots.default)
  }
}
