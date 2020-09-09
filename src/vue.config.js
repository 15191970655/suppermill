module.exports= {
  //配置别名类
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': '@/assets',
        'views': '@/views',
        'router': '@/router'
      }
    }
  }
}
