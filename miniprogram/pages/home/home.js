const app = getApp()
const { CONSTITUTIONS, getConstitutionById, FOOD_DATABASE, RECIPES } = require('../../common/data_full')
const { POETRY_365 } = require('../../common/poetry365')

const FOODS = [
  '山药','红枣','枸杞','银耳','薏米','莲子','小米','南瓜',
  '百合','黑芝麻','核桃','桂圆','绿豆','冬瓜','苦瓜','山楂',
  '陈皮','玫瑰花','羊肉','牛肉','韭菜','生姜','蜂蜜','黑木耳'
]

const SOLAR_TERMS = [
  {name:'立春',m:2,d:4},{name:'雨水',m:2,d:19},{name:'惊蛰',m:3,d:6},
  {name:'春分',m:3,d:21},{name:'清明',m:4,d:5},{name:'谷雨',m:4,d:20},
  {name:'立夏',m:5,d:6},{name:'小满',m:5,d:21},{name:'芒种',m:6,d:6},
  {name:'夏至',m:6,d:21},{name:'小暑',m:7,d:7},{name:'大暑',m:7,d:23},
  {name:'立秋',m:8,d:7},{name:'处暑',m:8,d:23},{name:'白露',m:9,d:8},
  {name:'秋分',m:9,d:23},{name:'寒露',m:10,d:8},{name:'霜降',m:10,d:23},
  {name:'立冬',m:11,d:7},{name:'小雪',m:11,d:22},{name:'大雪',m:12,d:7},
  {name:'冬至',m:12,d:22},{name:'小寒',m:1,d:6},{name:'大寒',m:1,d:20}
]

const CHECKIN_TIPS = [
  '🥗 每日一餐素食，给肠胃放个假',
  '🚶 饭后百步走，活到九十九',
  '💧 晨起一杯温水，唤醒身体',
  '🌙 子时前入睡，养肝血最佳',
  '🧘 每日深呼吸5分钟，调畅气机',
  '🍵 午后一杯养生茶，缓解疲劳',
  '☀️ 上午晒背15分钟，补阳气',
  '🥜 每日一小把坚果，补益脑髓',
  '🍎 每日一苹果，医生远离我',
  '🧠 睡前热水泡脚，安神助眠',
  '🥬 每餐有绿色蔬菜，补充维生素',
  '🎵 听舒缓音乐，调畅情志'
]

const getDayOfYear = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

const getPoetryForToday = (solarTermName) => {
  const poems = POETRY_365[solarTermName]
  if (!poems || poems.length === 0) return null
  const dayOfYear = getDayOfYear()
  const index = dayOfYear % poems.length
  return poems[index]
}

const hashString = (s) => {
  let hash = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return hash
}

Page({
  data: {
    heroAvatar: '🌿',
    heroGreeting: '',
    greeting: '',
    dailyRecipe: null,
    checkedIn: false,
    streak: 0,
    checkinDays: 0,
    checkinTip: '',
    solarTerm: null,
    constitutions: CONSTITUTIONS,
    foodCount: FOOD_DATABASE.length,
    constitutionCount: CONSTITUTIONS.length,
    hasResult: false,
    currentConstitution: null,
    poetry: null,
    showPoetryModal: false,
    showRecipeModal: false,
    currentRecipe: null,
    showConstiModal: false,
    currentConsti: null
  },
  onLoad() {
    this.initGreeting()
    this.initSolarTerm()
  },
  onShow() {
    this.initCheckin()
    this.loadUserState()
    this.initDailyRecipe()
    this.renderHero()
  },
  initGreeting() {
    const h = new Date().getHours()
    let g = '晚上好'
    if (h < 6) g = '夜深了'
    else if (h < 9) g = '早上好'
    else if (h < 12) g = '上午好'
    else if (h < 14) g = '中午好'
    else if (h < 18) g = '下午好'
    this.setData({ greeting: g })
  },
  renderHero() {
    if (this.data.hasResult) {
      this.setData({
        heroAvatar: '🌿',
        heroGreeting: `今日${this.data.currentConstitution.name} · 科学饮食从吃对开始`
      })
    } else {
      this.setData({
        heroAvatar: '🌿',
        heroGreeting: '今天也要好好养生'
      })
    }
  },
  initDailyRecipe() {
    const dayOfYear = getDayOfYear()
    const cid = app.globalData.currentConstitutionId
    let recipeName = null

    if (cid) {
      const c = getConstitutionById(cid)
      if (c && c.recommendFoods && c.recommendFoods.length > 0) {
        recipeName = c.recommendFoods[dayOfYear % c.recommendFoods.length]
      }
    }

    if (!recipeName) {
      const solarFoods = this.data.solarTerm ? this.data.solarTerm.foods : []
      if (solarFoods.length > 0) {
        const foodName = solarFoods[dayOfYear % solarFoods.length]
        const matched = Object.keys(RECIPES).find(name => name.includes(foodName) || foodName.includes(name.split('粥')[0].split('汤')[0].split('茶')[0]))
        if (matched) recipeName = matched
      }
    }

    if (!recipeName) {
      const allRecipes = Object.keys(RECIPES)
      recipeName = allRecipes[dayOfYear % allRecipes.length]
    }

    const recipe = RECIPES[recipeName]
    if (recipe) {
      recipe.name = recipeName
      this.setData({ dailyRecipe: recipe })
    }
  },
  initCheckin() {
    const today = new Date().toDateString()
    const last = wx.getStorageSync('checkinLast') || ''
    const streak = wx.getStorageSync('checkinStreak') || 0
    this.setData({ checkedIn: last === today, streak, checkinDays: streak })

    // 打卡提示
    if (last === today && streak > 0) {
      const tipIndex = Math.abs(hashString(today)) % CHECKIN_TIPS.length
      this.setData({ checkinTip: CHECKIN_TIPS[tipIndex] })
    } else {
      this.setData({ checkinTip: '' })
    }
  },
  initSolarTerm() {
    const n = new Date()
    const today = n.getMonth() + 1 + n.getDate() / 100
    let cur = SOLAR_TERMS[0]
    for (const t of SOLAR_TERMS) { if (today >= t.m + t.d / 100) cur = t }
    const poetry = getPoetryForToday(cur.name)
    this.setData({ solarTerm: cur, poetry })
  },
  loadUserState() {
    const cid = app.globalData.currentConstitutionId
    const cr = app.globalData.currentResult
    if (cid && cr) {
      this.setData({ hasResult: true, currentConstitution: cr.constitution })
    } else {
      try {
        const s = JSON.parse(wx.getStorageSync('appState') || '{}')
        if (s.currentConstitutionId && s.currentResult) {
          this.setData({ hasResult: true, currentConstitution: s.currentResult.constitution })
        }
      } catch (e) {}
    }
    this.renderHero()
  },
  doCheckin() {
    if (this.data.checkedIn) return wx.showToast({ title: '今日已打卡', icon: 'none' })
    const last = wx.getStorageSync('checkinLast') || ''
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    let streak = wx.getStorageSync('checkinStreak') || 0
    streak = last === yesterday ? streak + 1 : 1
    wx.setStorageSync('checkinLast', new Date().toDateString())
    wx.setStorageSync('checkinStreak', streak)
    const tipIndex = Math.abs(hashString(new Date().toDateString())) % CHECKIN_TIPS.length
    this.setData({ checkedIn: true, streak, checkinDays: streak, checkinTip: CHECKIN_TIPS[tipIndex] })
    wx.showToast({ title: `打卡成功！连续${streak}天`, icon: 'success' })
  },
  showPoetryStory() {
    if (this.data.poetry) {
      this.setData({ showPoetryModal: true })
    }
  },
  hidePoetryModal() {
    this.setData({ showPoetryModal: false })
  },
  showRecipeDetail() {
    if (this.data.dailyRecipe) {
      this.setData({ showRecipeModal: true })
    }
  },
  hideRecipeModal() {
    this.setData({ showRecipeModal: false })
  },
  showConstitution(e) {
    const id = e.currentTarget.dataset.id
    const c = getConstitutionById(id)
    if (c) {
      this.setData({ showConstiModal: true, currentConsti: c })
    }
  },
  hideConstiModal() {
    this.setData({ showConstiModal: false })
  },
  goQuiz() {
    app.globalData.quizAnswers = []
    app.globalData.currentQuiz = 0
    wx.switchTab({ url: '/pages/quiz/quiz' })
  },
  goResult() {
    wx.navigateTo({ url: '/pages/result/result' })
  },
  goTab(e) { wx.switchTab({ url: e.currentTarget.dataset.url }) },
  go(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
