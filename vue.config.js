const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  configureWebpack:{
    devServer:{
      port:8000,
      host:'localhost',
      open: true
    },
    // 路径别名
    resolve:{
      alias:{
        cpns:join(__dirname,'src/components')
      }
    }
  }
})
