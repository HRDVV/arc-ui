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
      if (this.$slots.prefix || this.$slots.suffix) {
        classes.push('arc-input-group')
      }
      if (this.$slots.prefix) {
        classes.push('arc-input-group--prepend')
      }
      if (this.$slots.suffix) {
        classes.push('arc-input-group--append')
      }
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
    if (this.prefix && !this.$slots.prefix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input__prefix' },
          [
            h(
              'i',
              { class: `icon ${this.prefix}` },
              null
            )
          ]
        )
      )
    }
    if (this.$slots.prefix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input-group__prepend' },
          this.$slots.prefix
        )
      )
    }
    childs.push(
      h(
        'input',
        {
          class: 'arc-input__inner',
          attrs: this.attrs,
          on: {
            change: this.changeHandler,
            input: this.inputHandler,
            focus: this.focusHandler,
            blur: this.blurHandler
          }
        },
        null
      )
    )
    if (this.suffix && !this.$slots.suffix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input__suffix' },
          [
            h(
              'i',
              { class: `icon ${this.suffix}` },
              null
            )
          ]
        )
      )
    }
    if (this.$slots.suffix) {
      childs.push(
        h(
          'span',
          { class: 'arc-input-group__append' },
          this.$slots.suffix
        )
      )
    }
    return h('div', {
      class: this.classes
    }, childs)
  },
  methods: {
    changeHandler (e) {
      this.$emit('change', e.target.value)
    },
    inputHandler (e) {
      this.$emit('input', e.target.value)
    },
    focusHandler (e) {
      this.$emit('focus', e)
    },
    blurHandler (e) {
      this.$emit('blur', e)
    }
  }
}
