const H5_URL = 'https://jade-kelpie-e1d09f.netlify.app'

Page({
  data: {
    h5Url: H5_URL,
    error: ''
  },
  onLoad() {
    wx.showLoading({ title: '加载中...' })
  },
  onLoadSuccess() {
    wx.hideLoading()
    this.setData({ error: '' })
  },
  onLoadError(e) {
    wx.hideLoading()
    this.setData({ error: e.detail?.errMsg || '网络异常' })
  },
  onMessage(e) {
    // H5 通过 wx.miniProgram.postMessage 发送的数据在这里接收
    console.log('H5 message:', e.detail)
  },
  reload() {
    this.setData({
      h5Url: H5_URL + '?t=' + Date.now(),
      error: ''
    })
    wx.showLoading({ title: '加载中...' })
  }
})
