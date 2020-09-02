module.exports= {
  //配置别名类
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
