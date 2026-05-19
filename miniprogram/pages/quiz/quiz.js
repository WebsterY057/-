const app = getApp()
const { CONSTITUTION_QUESTIONS, SYMPTOM_KEYWORDS } = require('../../common/data_full')

Page({
  data: {
    questions: CONSTITUTION_QUESTIONS,
    current: 0,
    answers: new Array(18).fill(-1),
    selected: -1,
    symptomText: '',
    showSymptom: false
  },
  onShow() {
    const saved = app.globalData.quizAnswers || []
    if (saved.length === 18 && saved.some(a => a >= 0)) {
      this.setData({
        answers: saved,
        current: app.globalData.currentQuiz || 0,
        selected: saved[app.globalData.currentQuiz || 0] ?? -1,
        showSymptom: false
      })
    } else {
      this.setData({
        answers: new Array(18).fill(-1),
        current: 0,
        selected: -1,
        showSymptom: false,
        symptomText: ''
      })
    }
  },
  selectOption(e) {
    const idx = e.currentTarget.dataset.idx
    const { current, answers } = this.data
    answers[current] = idx
    this.setData({ answers, selected: idx })
    setTimeout(() => {
      if (current < 17) this.goNext()
      else this.finishQuiz()
    }, 300)
  },
  goNext() {
    if (this.data.current < 17) {
      const next = this.data.current + 1
      this.setData({ current: next, selected: this.data.answers[next] })
    }
  },
  goPrev() {
    if (this.data.current > 0) {
      const prev = this.data.current - 1
      this.setData({ current: prev, selected: this.data.answers[prev] })
    }
  },
  finishQuiz() {
    this.setData({ showSymptom: true })
  },
  symptomInput(e) { this.setData({ symptomText: e.detail.value }) },
  submitSymptom() {
    const text = this.data.symptomText
    const scores = {}
    if (text) {
      for (const group of SYMPTOM_KEYWORDS) {
        const found = group.keywords.some(kw => text.includes(kw))
        if (found) {
          const negated = group.negations.some(n => text.includes(n))
          if (!negated) {
            for (const [key, val] of Object.entries(group.scores)) {
              scores[key] = (scores[key] || 0) + val
            }
          }
        }
      }
    }
    app.globalData.quizAnswers = this.data.answers
    app.globalData.quizSymptomScores = scores
    wx.navigateTo({ url: '/pages/body/body' })
  },
  skipSymptom() {
    app.globalData.quizAnswers = this.data.answers
    app.globalData.quizSymomScores = {}
    wx.navigateTo({ url: '/pages/body/body' })
  }
})
