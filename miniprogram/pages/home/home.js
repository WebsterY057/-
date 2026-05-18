const app = getApp()
const { CONSTITUTIONS, getConstitutionById } = require('../../common/data_full')
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

Page({
  data: {
    greeting:'', dailyFood:'', checkedIn:false, streak:0,
    solarTerm:null, constitutions:CONSTITUTIONS,
    foodCount:42, constitutionCount:CONSTITUTIONS.length, checkinDays:0,
    hasResult:false, currentConstitution:null,
    poetry:null, showPoetryModal:false
  },
  onLoad() {
    this.initGreeting()
    this.initDailyFood()
    this.initCheckin()
    this.initSolarTerm()
  },
  onShow() {
    this.initCheckin()
    this.loadUserState()
  },
  initGreeting() {
    const h=new Date().getHours()
    let g='晚上好'
    if(h<6) g='夜深了'
    else if(h<9) g='早上好'
    else if(h<12) g='上午好'
    else if(h<14) g='中午好'
    else if(h<18) g='下午好'
    this.setData({greeting:g})
  },
  initDailyFood() {
    const s=new Date(new Date().getFullYear(),0,0)
    const day=Math.floor((Date.now()-s)/86400000)
    this.setData({dailyFood:FOODS[day%FOODS.length]})
  },
  initCheckin() {
    const today=new Date().toDateString()
    const last=wx.getStorageSync('checkinLast')||''
    const streak=wx.getStorageSync('checkinStreak')||0
    this.setData({checkedIn:last===today,streak,checkinDays:streak})
  },
  initSolarTerm() {
    const n=new Date(),today=n.getMonth()+1+n.getDate()/100
    let cur=SOLAR_TERMS[0]
    for(const t of SOLAR_TERMS){if(today>=t.m+t.d/100)cur=t}
    const poetry = getPoetryForToday(cur.name)
    this.setData({solarTerm:cur, poetry})
  },
  loadUserState() {
    const cid=app.globalData.currentConstitutionId
    const cr=app.globalData.currentResult
    if(cid&&cr){
      this.setData({hasResult:true,currentConstitution:cr.constitution})
    }else{
      try{
        const s=JSON.parse(wx.getStorageSync('appState')||'{}')
        if(s.currentConstitutionId&&s.currentResult){
          this.setData({hasResult:true,currentConstitution:s.currentResult.constitution})
        }
      }catch(e){}
    }
  },
  doCheckin() {
    if(this.data.checkedIn)return wx.showToast({title:'今日已打卡',icon:'none'})
    const last=wx.getStorageSync('checkinLast')||''
    const yesterday=new Date(Date.now()-86400000).toDateString()
    let streak=wx.getStorageSync('checkinStreak')||0
    streak=last===yesterday?streak+1:1
    wx.setStorageSync('checkinLast',new Date().toDateString())
    wx.setStorageSync('checkinStreak',streak)
    this.setData({checkedIn:true,streak,checkinDays:streak})
    wx.showToast({title:`打卡成功！连续${streak}天`,icon:'success'})
  },
  showPoetryStory() {
    if(this.data.poetry) {
      this.setData({showPoetryModal:true})
    }
  },
  hidePoetryModal() {
    this.setData({showPoetryModal:false})
  },
  goQuiz() {
    app.globalData.quizAnswers=[]
    app.globalData.currentQuiz=0
    wx.switchTab({url:'/pages/quiz/quiz'})
  },
  goTab(e){wx.switchTab({url:e.currentTarget.dataset.url})},
  go(e){wx.navigateTo({url:e.currentTarget.dataset.url})}
})