const path = require('path')

const resolve = (...paths) => {
  return path.resolve(...paths)
}
/**
 * 装饰render方法
 * @param {*} render fenced对应的渲染函数
 */
const wrap = function (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * cheerio可能会把中文转成unicode，如 &#x3543等
 * @param {*} str
 */
const convert = str => {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

module.exports = {
  resolve,
  wrap,
  convert
}
