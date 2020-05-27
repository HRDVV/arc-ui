export default {
  name: 'ArcInput',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    value: [String, Number],
    placeholder: String,
    maxlength: Number,
    minlength: Number,
    max: Number,
    min: Number,
    // medium / small / mini
    size: String,
    suffix: String,
    prefix: String
  },
  computed: {
    classes () {
      const classes = ['arc-input']
      if (this.size) {
        classes.push(`arc-input--${this.size}`)
      }
      ['prefix', 'suffix'].forEach(prop => {
        if (this[prop]) {
          classes.push(`arc-input--${prop}`)
        }
      })
      return classes
    },
    attrs () {
      const copyProps = { ...this.$props }
      Reflect.deleteProperty(copyProps, 'size')
      Reflect.deleteProperty(copyProps, 'suffix')
      Reflect.deleteProperty(copyProps, 'prefix')
      return copyProps
    }
  },
  render (h) {
    const childs = []
    const innerSlot = []
    if (this.prefix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input__' + this.prefix },
          h(
            'i',
            { class: `icon ${this.prefix}` },
            null
          )
        )
      )
    }
    if (this.$slots.prefix) {
      innerSlot.push(this.$slots.prefix)
    }
    if (this.$slots.suffix) {
      innerSlot.push(this.$slots.suffix)
    }
    childs.push(
      h(
        'input',
        {
          class: 'arc-input__inner',
          attrs: this.attrs
        },
        innerSlot
      )
    )
    if (this.suffix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input__' + this.suffix },
          h(
            'i',
            { class: `icon ${this.suffix}` },
            null
          )
        )
      )
    }
    return h('div', {
      class: this.classes
    }, childs)
  }
}
