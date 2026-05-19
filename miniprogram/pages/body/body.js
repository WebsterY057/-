const app = getApp()
const { CONSTITUTION_QUESTIONS, calculateResult, getConstitutionById } = require('../../common/data_full')

Page({
  data: {
    gender: 0,
    age: '',
    height: '',
    weight: '',
    genders: ['男', '女']
  },
  onGenderChange(e) { this.setData({ gender: e.detail.value }) },
  onAgeInput(e) { this.setData({ age: e.detail.value }) },
  onHeightInput(e) { this.setData({ height: e.detail.value }) },
  onWeightInput(e) { this.setData({ weight: e.detail.value }) },
  submit() {
    const { gender, age, height, weight } = this.data
    if (!age || !height || !weight) return wx.showToast({ title: '请填写完整信息', icon: 'none' })
    const a = parseInt(age), h = parseInt(height), w = parseInt(weight)
    if (isNaN(a) || a < 1 || a > 150) return wx.showToast({ title: '请输入有效年龄', icon: 'none' })
    if (isNaN(h) || h < 50 || h > 250) return wx.showToast({ title: '请输入有效身高(cm)', icon: 'none' })
    if (isNaN(w) || w < 10 || w > 300) return wx.showToast({ title: '请输入有效体重(kg)', icon: 'none' })

    const bmi = Math.round(w / ((h / 100) ** 2) * 10) / 10
    const bodyInfo = { gender: parseInt(gender), age: a, height: h, weight: w, bmi }
    wx.setStorageSync('bodyInfo', bodyInfo)
    app.globalData.userBodyInfo = bodyInfo

    const answers = app.globalData.quizAnswers || []
    const scores = {}
    for (let i = 0; i < answers.length; i++) {
      const idx = answers[i]
      if (idx >= 0) {
        for (const [key, val] of Object.entries(CONSTITUTION_QUESTIONS[i].options[idx].scores)) {
          scores[key] = (scores[key] || 0) + val
        }
      }
    }
    const symScores = app.globalData.quizSymptomScores || {}
    for (const [key, val] of Object.entries(symScores)) {
      scores[key] = (scores[key] || 0) + val
    }

    const constitutionId = calculateResult(scores)
    const constitution = getConstitutionById(constitutionId)
    const result = { id: constitutionId, constitution, scores }

    app.globalData.currentResult = result
    app.globalData.currentConstitutionId = constitutionId
    app.globalData.quizAnswers = []
    app.globalData.currentQuiz = 0

    const state = wx.getStorageSync('appState')
    const s = state ? JSON.parse(state) : {}
    s.currentResult = result
    s.currentConstitutionId = constitutionId
    wx.setStorageSync('appState', JSON.stringify(s))

    wx.navigateTo({ url: '/pages/result/result' })
  }
})
