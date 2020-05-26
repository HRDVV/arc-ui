const { resolve, wrap, convert } = require('./utils')
const markdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

/**
 * 入口配置
 * @param {*} entry  入口路径
 * @param {*} template 模板路径
 */
const getPages = (entry, template) => {
  return {
    index: {
      entry,
      template,
      filename: 'index.html',
      title: 'arc-ui'
    }
  }
}
/**
 *  md的预处理
 * @param {*} markdownIt
 * @param {*} source md的元数据
 */
const getMdPreprocess = (markdownIt, source) => {
  markdownIt.renderer.rules.table_open = function () {
    return '<table class="table">'
  }
  markdownIt.renderer.rules.fence = wrap(markdownIt.renderer.rules.fence)
  return source
}
/**
 * md解析器插件配置
 */
const getMdPlugins = () => {
  return [
    [markdownItContainer, 'demo', {
      validate: function (params) {
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          var content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
          var html = convert(striptags(content, 'script'))
          return `<demo-block>
                    <div slot="demo">${html}</div>
                    <div slot="source">`
        }
        return '</div></demo-block>'
      }
    }]
  ]
}
/**
 * webpack配置
 * @param {*} config
 */
const webpackChain = function (config) {
  return {
    resolve () {
      config
        .resolve
        .alias
        .set('@', resolve(__dirname, '../', 'examples/src'))
        .set('@packages', resolve(__dirname, '../', 'packages'))
      config.resolve.extensions
        .add('.js')
      return this
    },
    jsRules () {
      config.module
        .rule('js')
        .test(/\.js$/)
        .include.add(resolve(__dirname, '../', 'packages'))
        .end()
        .include.add(resolve(__dirname, '../', 'examples/src'))
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })
      return this
    },
    mdRules () {
      config.module
        .rule('md')
        .test(/\.md$/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          raw: true,
          preprocess: getMdPreprocess,
          use: getMdPlugins()
        })
      return this
    }

  }
}

module.exports = {
  getPages,
  webpackChain
}
