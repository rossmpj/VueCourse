const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    /* module federation plugin import */
    config.optimization.delete('splitChunks')
  }
})
