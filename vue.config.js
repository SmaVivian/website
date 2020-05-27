const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/yourProjectName/'
  //   : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@images', resolve('src/assets/images'))
      .set('@cmp', resolve('src/components'))
      .set('@views', resolve('src/views'))
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/mixin.scss";
        `
      }
    },
    // 开启 CSS source maps?
    sourceMap: true
  },
  devServer: {
    port: 8080,
    proxy: {
      '/singleMuseum': {
        target: 'http://dev.tj720.com', // 内测环境
        // target: 'http://192.168.5.198:8888', // 谢少雄
        ws: false,
        changeOrigin: true
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  // productionSourceMap: true,

  lintOnSave: undefined
}
