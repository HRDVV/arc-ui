<script>
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
    }
  },
  render (createElement) {
    const h = createElement
    return h('button', {
      class: [
        'arc-button',
        { 'arc-button--default': !this.type },
        this.type ? `arc-button--${this.type + (this.plain ? '-plain' : '')}` : '',
        this.size ? `arc-button--${this.size}` : '',
        this.round ? 'arc-button--circle' : ''
      ],
      attrs: {
        disabled: this.disabled
      },
      on: {
        click: e => {
          this.$emit('click', e)
        }
      }
    }, this.$slots.default)
  }
}
</script>

<style>

</style>
