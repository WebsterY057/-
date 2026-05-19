const { CONSTITUTIONS, getConstitutionById } = require('../../common/data_full')

Page({
  data: {
    constitution: null,
    topScores: [],
    maxScore: 1,
    tabs: ['宜食', '慎食', '食疗方', '调养', '养生', '运动'],
    activeTab: 0
  },
  onLoad() {
    const app = getApp()
    const result = app.globalData.currentResult
    if (!result) {
      wx.showToast({ title: '暂无测试结果', icon: 'none' })
      return
    }
    const c = getConstitutionById(result.id)
    if (!c) {
      wx.showToast({ title: '体质数据异常', icon: 'none' })
      return
    }
    const raw = Object.entries(result.scores || {})
      .filter(([id]) => id !== 'pinghe')
      .sort((a, b) => b[1] - a[1])
    const top5 = raw.slice(0, 5)
    const topScores = top5.map(([id, score]) => {
      const con = CONSTITUTIONS.find(c => c.id === id)
      return { id, name: con?.name || id, score, color: con?.color || '#8BAA7A' }
    })
    this.setData({
      constitution: c,
      topScores,
      maxScore: Math.max(...top5.map(s => s[1]), 1)
    })
  },
  switchTab(e) {
    this.setData({ activeTab: Number(e.currentTarget.dataset.index) })
  },
  goHome() {
    wx.switchTab({ url: '/pages/home/home' })
  },
  onShareAppMessage() {
    return { title: '我的中医体质分析报告' }
  }
})
