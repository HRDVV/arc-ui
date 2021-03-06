import Button from '@packages/components/button'
import ButtonGroup from '@packages/components/button-group'
import Row from '@packages/components/row'
import Col from '@packages/components/col'
import Input from '@packages/components/input'
import Textarea from '@packages/components/textarea'

const components = [
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  Textarea
]

const install = (Vue, opts = {}) => {
  for (const i in components) {
    const cp = components[i]
    if (!cp.name) {
      throw new Error('not found component name !!!')
    }
    if (install.installed) return
    Vue.component(cp.name, cp)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  Textarea
}
export default { install }
