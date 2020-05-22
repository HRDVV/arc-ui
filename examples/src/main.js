import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'
import '../../packages/arc-ui-style/src/index.scss'
import 'highlight.js/styles/tomorrow-night-bright.css'
import DemoBox from './components/demo-block.vue'
import ArcUI from '../../index'

Vue.config.productionTip = false

Vue.component('DemoBlock', DemoBox)
Vue.use(ArcUI)

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
