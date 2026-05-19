App({
  globalData: {
    userBodyInfo: null,
    currentResult: null,
    currentConstitutionId: null,
    quizAnswers: [],
    currentQuiz: 0,
    quizSymptomScores: null
  },
  onLaunch() {
    this.loadData()
  },
  loadData() {
    try {
      const body = wx.getStorageSync('bodyInfo')
      if (body) this.globalData.userBodyInfo = body
      const state = wx.getStorageSync('appState')
      if (state) {
        const s = JSON.parse(state)
        if (s.currentResult) this.globalData.currentResult = s.currentResult
        if (s.quizAnswers) this.globalData.quizAnswers = s.quizAnswers
        if (s.currentConstitutionId) this.globalData.currentConstitutionId = s.currentConstitutionId
        if (s.currentTheme) this.globalData.currentTheme = s.currentTheme
      }
    } catch (e) {}
  },
  getTheme() {
    return this.globalData.currentTheme || 'dark'
  },
  setTheme(t) {
    this.globalData.currentTheme = t
    const state = wx.getStorageSync('appState')
    const s = state ? JSON.parse(state) : {}
    s.currentTheme = t
    wx.setStorageSync('appState', JSON.stringify(s))
  }
})
