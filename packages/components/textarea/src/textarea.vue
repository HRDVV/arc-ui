<script>
import { calcTextareaHeight } from './calcTextareaHeight'
export default {
  name: 'ArcTextarea',
  props: {
    name: String,
    value: {
      type: String,
      default: ''
    },
    autosize: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // none, both, horizontal, vertical
    resize: {
      type: String,
      default: 'vertical'
    },
    rows: {
      type: Number,
      default: 2
    },
    minRows: Number,
    maxRows: Number,
    minlength: Number,
    maxlength: Number
  },
  computed: {
    style () {
      return Object.assign({}, this.currentStyle, {
        resize: this.resize
      })
    }
  },
  data () {
    return {
      currentStyle: {}
    }
  },
  render (h) {
    return h('textarea', {
      class: 'arc-textarea',
      style: this.style,
      attrs: {
        name: this.name,
        placeholder: this.placeholder,
        disabled: this.disabled,
        readonly: this.readonly,
        value: this.value,
        minlength: this.minlength,
        maxlength: this.maxlength,
        rows: this.rows
      },
      on: {
        change: this.changeHandler,
        input: this.inputHandler,
        focus: this.focusHandler,
        blur: this.blurHandler,
        resize: this.resizeHandler
      },
      ref: 'textarea'
    })
  },
  mounted () {
    this.currentStyle = calcTextareaHeight(this.$refs.textarea, this.minRows, this.maxRows)
  },
  methods: {
    changeHandler (e) {
      this.$emit('change', e.target.value)
    },
    inputHandler (e) {
      this.$nextTick(() => {
        this.calcHeight()
      })
      this.$emit('input', e.target.value)
    },
    focusHandler (e) {
      this.$emit('focus', e)
    },
    blurHandler (e) {
      this.$emit('blur', e)
    },
    resizeHandler (e) {
      this.$nextTick(() => {
        this.calcHeight()
      })
      this.$emit('blur', e)
    },
    calcHeight () {
      if (!this.autosize && !this.minRows && !this.maxRows) return
      this.currentStyle = calcTextareaHeight(this.$refs.textarea, this.minRows, this.maxRows)
    }
  }
}
</script>
