export default {
  name: 'ArcButtonGroup',
  props: {
    // medium / small
    size: {
      type: String,
      default: ''
    }
  },
  render (createElement) {
    const h = createElement
    return h('div', {
      class: [
        'arc-button-group',
        this.size ? `arc-button-group--${this.size}` : ''
      ]
    }, this.$slots.default)
  }
}
