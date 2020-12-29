module.exports = {
  devServer: {
    proxy: {
      'soso': {
        target: 'https://c.y.qq.com',
        ws: true,
        originChange: true
      }
    }
  }
}
