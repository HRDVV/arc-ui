const { getPages, webpackChain } = require('./build/index')

module.exports = {
  pages: getPages(
    './examples/src/main.js',
    './examples/index.html'
  ),
  chainWebpack: config => {
    webpackChain(config)
      .resolve()
      .jsRules()
      .mdRules()
  }
}
