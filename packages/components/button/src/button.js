export default {
  name: 'ArcButton',
  props: {
    // primary / success / warning / error / info / text
    type: {
      type: String,
      default: ''
    },
    // medium / small / mini
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  render (createElement) {
    const h = createElement
    const btnChildren =
    (this.icon || this.loading)
      ? [
        h('i', { class: `icon ${this.loading ? 'icon-loader' : this.icon}` }, null),
        h('span', this.$slots.default)
      ]
      : h('span', this.$slots.default)
    return h('button', {
      class: [
        'arc-button',
        { 'arc-button--default': !this.type },
        this.type ? `arc-button--${this.type}` : '',
        this.size ? `arc-button--${this.size}` : '',
        this.round ? 'arc-button--circle' : '',
        this.plain ? 'is-plain' : '',
        this.loading ? 'is-loading' : ''
      ],
      attrs: {
        disabled: this.disabled || this.loading
      },
      on: {
        click: this.clickHandler
      }
    }, [btnChildren])
  },
  methods: {
    clickHandler (e) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
