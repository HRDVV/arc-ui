import ArcButton from '@packages/components/Button'

const components = [
  ArcButton
]

const install = (Vue, opts = {}) => {
  for (const i in components) {
    const cp = components[i]
    if (!cp.name) {
      throw new Error('not found component name !!!')
    }
    if (install.installed) return
    install.installed = true
    Vue.component(cp.name, cp)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
