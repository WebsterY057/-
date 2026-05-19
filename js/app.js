let currentResult = null
let currentQuiz = 0
let quizAnswers = []
let currentFilter = 'all'
let currentResultTab = 'suitable'
let currentConstitutionId = null
let userBodyInfo = null
let quizScores = null
let quizSymptomScores = null
let selectedMonth = null

function showLoading() {
  const overlay = document.getElementById('loadingOverlay')
  if (overlay) overlay.classList.add('show')
}
function hideLoading() {
  const overlay = document.getElementById('loadingOverlay')
  if (overlay) overlay.classList.remove('show')
}
let propertyFilter = 'all'
let meridianFilter = 'all'
let recipeFilter = 'all'
let recipeConstiIndex = null

function init() {
  loadBodyInfo()
  restoreAppState()
  buildRecipeIndex()
  renderConstiList()
  renderSeasonView()
  renderMiniSeasonBanner()
  renderDailyFood()
  renderCheckIn()
  renderSolarTerm()
  renderPoetry()
  updateTabBar()
  renderHomeGreeting()
}

function buildRecipeIndex() {
  recipeConstiIndex = {}
  CONSTITUTIONS.forEach(c => {
    ;(c.recommendFoods || []).forEach(r => {
      if (!recipeConstiIndex[r]) recipeConstiIndex[r] = []
      if (!recipeConstiIndex[r].includes(c.id)) recipeConstiIndex[r].push(c.id)
    })
  })
}

function restoreAppState() {
  try {
    const saved = localStorage.getItem('appState')
    if (saved) {
      const state = JSON.parse(saved)
      if (state.currentResult) currentResult = state.currentResult
      if (state.quizAnswers) quizAnswers = state.quizAnswers
      if (state.currentQuiz !== undefined && state.currentQuiz !== null) currentQuiz = state.currentQuiz
      if (state.quizScores) quizScores = state.quizScores
      if (state.currentResultTab) currentResultTab = state.currentResultTab
      if (state.currentConstitutionId) currentConstitutionId = state.currentConstitutionId
      if (state.currentFilter) currentFilter = state.currentFilter
      if (state.propertyFilter) propertyFilter = state.propertyFilter
      if (state.meridianFilter) meridianFilter = state.meridianFilter
      if (state.selectedMonth) selectedMonth = state.selectedMonth
      if (state.currentTheme) {
        document.documentElement.setAttribute('data-theme', state.currentTheme)
      }
    }
  } catch (e) {}
}

function saveAppState() {
  try {
    const state = {
      currentResult,
      quizAnswers,
      currentQuiz,
      quizScores,
      currentResultTab,
      currentConstitutionId,
      currentFilter,
      propertyFilter,
      meridianFilter,
      selectedMonth,
      currentTheme: document.documentElement.getAttribute('data-theme') || ''
    }
    localStorage.setItem('appState', JSON.stringify(state))
  } catch (e) {}
}

function renderMiniSeasonBanner() {
  const rec = getTodayRecommendation()
  const term = getCurrentSolarTerm()
  const el = document.getElementById('homeSeasonBanner')
  if (el) el.innerHTML = `🌸 ${rec.season} · ${rec.principle}${term ? ` · 🌏 ${term.name}` : ''}`
}

function loadBodyInfo() {
  try {
    const saved = localStorage.getItem('bodyInfo')
    if (saved) userBodyInfo = JSON.parse(saved)
  } catch (e) {}
}

function saveBodyInfo(info) {
  userBodyInfo = info
  localStorage.setItem('bodyInfo', JSON.stringify(info))
}

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'))
  document.getElementById(viewId).classList.add('active')

  const headerSubtitles = {
    viewHome: '今天也要好好养生',
    viewQuiz: '9种体质 · 18道题',
    viewBodyInfo: '身体数据 · 精准分析',
    viewResult: '体质分析报告',
    viewFoodSearch: '147种食材 · 性味归经',
    viewSeason: '24节气 · 顺时养生',
    viewProfile: '个人中心',
    viewWorkout: '运动营养方案',
    viewRecipes: '46道食疗 · 搜索筛选',
    viewStories: '11个经典 · 中医典故'
  }
  const headerTitles = {
    viewHome: '🌿 体质食疗',
    viewQuiz: '🧬 体质测试',
    viewBodyInfo: '📏 身体信息',
    viewResult: '📊 分析报告',
    viewFoodSearch: '🔍 食材查询',
    viewSeason: '📅 时令养生',
    viewProfile: '👤 个人中心',
    viewWorkout: '🏃 运动营养',
    viewRecipes: '🍳 食疗食谱',
    viewStories: '📜 中药故事'
  }
  const sub = document.getElementById('headerSub')
  const title = document.getElementById('appTitle')
  if (headerSubtitles[viewId]) sub.textContent = headerSubtitles[viewId]
  else sub.textContent = 'AI中医 · 健康养生'
  if (headerTitles[viewId]) title.textContent = headerTitles[viewId]
  else title.textContent = '🌿 体质食疗'
}

function updateTabBar() {
  const activeView = document.querySelector('.view.active')
  if (!activeView) return
  const viewId = activeView.id
  const tabMap = {
    viewHome: 'viewHome', viewQuiz: 'viewQuiz', viewBodyInfo: 'viewQuiz',
    viewFoodSearch: 'viewFoodSearch',
    viewProfile: 'viewProfile', viewResult: 'viewQuiz',
    viewSeason: 'viewHome', viewWorkout: 'viewHome',
    viewRecipes: 'viewRecipes',
    viewStories: 'viewProfile'
  }
  const mapped = tabMap[viewId] || 'viewHome'
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  const match = document.querySelector(`.tab-item[data-view="${mapped}"]`)
  if (match) match.classList.add('active')
}

function switchTab(viewId, btn) {
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  if (btn) btn.classList.add('active')
  showView(viewId)
  if (viewId === 'viewSeason') renderSeasonView(selectedMonth || undefined)
  if (viewId === 'viewFoodSearch') {
    if (currentResult) {
      currentFilter = 'suitable'
      document.querySelectorAll('#foodFilterChips .chip').forEach(c => c.classList.remove('active'))
      document.querySelector('.chip[data-filter="suitable"]').classList.add('active')
    }
    document.querySelectorAll('#propertyFilterChips .chip').forEach(c => c.classList.remove('active'))
    if (propertyFilter !== 'all') {
      const propChip = document.querySelector(`.chip[data-prop="${propertyFilter}"]`)
      if (propChip) propChip.classList.add('active')
    } else {
      const allChip = document.querySelector(`.chip[data-prop="all"]`)
      if (allChip) allChip.classList.add('active')
    }
    document.querySelectorAll('#meridianFilterChips .chip').forEach(c => c.classList.remove('active'))
    if (meridianFilter !== 'all') {
      const merChip = document.querySelector(`.chip[data-meridian="${meridianFilter}"]`)
      if (merChip) merChip.classList.add('active')
    } else {
      const allMerChip = document.querySelector(`.chip[data-meridian="all"]`)
      if (allMerChip) allMerChip.classList.add('active')
    }
    renderFoodList(currentFilter)
  }
  if (viewId === 'viewProfile') renderProfileView()
  if (viewId === 'viewRecipes') renderRecipeView()
  if (viewId === 'viewStories') renderStoriesView()
  if (viewId === 'viewFoodSearch') renderSearchHistory()
}

// ============ HOME ============
function renderHomeGreeting() {
  document.getElementById('homeAvatar').textContent = '🌿'
  const quickResult = document.getElementById('homeQuickResult')
  if (currentResult) {
    const c = getConstitutionById(currentResult.id)
    document.getElementById('homeGreeting').textContent = `今日${c.name}`
    const badge = document.getElementById('homeConstiBadge')
    consti = getConstitutionById(currentResult.id)
    badge.innerHTML = `<span class="consti-badge">${consti.emoji} ${consti.name}</span>`
    quickResult.style.display = ''
  } else {
    document.getElementById('homeGreeting').textContent = '今天也要好好吃饭'
    document.getElementById('homeConstiBadge').innerHTML = ''
    quickResult.style.display = 'none'
  }
}

function showResultView() {
  if (!currentResult) { startQuiz(); return }
  showView('viewResult')
  updateTabBar()
  const c = getConstitutionById(currentResult.id)
  document.getElementById('resultEmoji').textContent = c.emoji
  document.getElementById('resultName').textContent = c.name
  document.getElementById('resultDesc').textContent = c.description
  currentResultTab = 'suitable'
  document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
  document.querySelector('.result-tab[data-tab="suitable"]').classList.add('active')
  renderResultContent('suitable')
  renderConstitutionSummary()
  renderScoreBreakdown()
}

function renderDailyFood() {
  const container = document.getElementById('dailyFoodCard')
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
  let food, label
  if (currentResult) {
    const suitable = FOOD_DATABASE.filter(f => f.suitable.includes(currentResult.id))
    if (suitable.length > 0) {
      food = suitable[dayOfYear % suitable.length]
      label = `🧬 根据${currentResult.name}推荐`
    } else {
      food = FOOD_DATABASE[dayOfYear % FOOD_DATABASE.length]
      label = '📅 今日推荐食材'
    }
  } else {
    food = FOOD_DATABASE[dayOfYear % FOOD_DATABASE.length]
    label = '📅 今日推荐食材'
  }
  const favs = getFavorites()
  const isFav = favs.foods.includes(food.name)
  const propIcons = { '寒': '❄️', '凉': '❄️', '平': '⚪', '温': '🔥', '热': '🔥', '微温': '🔥', '微寒': '❄️' }
  container.innerHTML = `
    <div class="daily-food-card">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="daily-food-label">${label}</span>
        <span class="food-star" data-name="${food.name}" style="cursor:pointer;font-size:18px;color:${isFav ? 'var(--warm)' : 'var(--text-muted)'};">${isFav ? '★' : '☆'}</span>
      </div>
      <div class="daily-food-header">
        <span class="daily-food-name">${food.name}</span>
        <span class="daily-food-tags">
          <span class="tag ${food.property === '寒' ? 'tag-cold' : food.property === '凉' ? 'tag-cool' : food.property === '平' ? 'tag-neutral' : 'tag-warm'}">
            ${propIcons[food.property] || '⚪'} ${food.property}性
          </span>
          <span class="tag tag-default">${food.flavor}味</span>
        </span>
      </div>
      <div class="daily-food-effect">${food.effect}</div>
      <div class="daily-food-suggestion">💡 ${food.suggestion}</div>
    </div>
  `
}

function getMealLog() {
  const today = new Date().toDateString()
  try {
    const logs = JSON.parse(localStorage.getItem('mealLog')) || {}
    return logs[today] || []
  } catch (e) { return [] }
}

function addMealLog() {
  const input = document.getElementById('mealInput')
  const food = input.value.trim()
  if (!food) return
  const today = new Date().toDateString()
  const logs = JSON.parse(localStorage.getItem('mealLog') || '{}')
  if (!logs[today]) logs[today] = []
  logs[today].push({ food, time: new Date().toLocaleTimeString() })
  logs[today] = logs[today].slice(-10)
  localStorage.setItem('mealLog', JSON.stringify(logs))
  input.value = ''
  renderMealLog()
  addPoints(1, '记录饮食')
}

function renderMealLog() {
  const container = document.getElementById('mealLogList')
  const logs = getMealLog()
  if (logs.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:10px;">暂无记录，点击添加今日饮食</p>'
    return
  }
  container.innerHTML = logs.map(log => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
      <span style="font-size:13px;">${log.food}</span>
      <span style="font-size:11px;color:var(--text-muted);">${log.time}</span>
    </div>
  `).join('')
}

function renderCheckIn() {
  const container = document.getElementById('checkinSection')
  const today = new Date().toDateString()
  let checkinData = { days: [], streak: 0 }
  try {
    const saved = localStorage.getItem('checkinData')
    if (saved) checkinData = JSON.parse(saved)
  } catch (e) {}
  const checkedIn = checkinData.days.includes(today)
  const dayCount = checkinData.days.length

  const titleEl = document.getElementById('checkinTitle')
  if (titleEl) {
    titleEl.innerHTML = checkedIn ? `✅ 今日已打卡 <span style="font-size:13px;color:var(--text-muted);font-weight:normal;">🔥 连续${checkinData.streak}天</span>` : '📅 每日打卡'
  }

  container.innerHTML = checkedIn ? `
    <div style="text-align:center;color:var(--text-secondary);font-size:14px;">坚持养生，遇见更好的自己！</div>
  ` : `
    <button class="btn btn-primary" onclick="doCheckIn()" style="width:100%;">打卡</button>
  `

  const tipContainer = document.getElementById('checkinTip')
  if (checkedIn && tipContainer) {
    const tips = [
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
    const tipIndex = Math.abs(hashString(today)) % tips.length
    tipContainer.innerHTML = `<div class="checkin-tip">💡 ${tips[tipIndex]}</div>`
  } else if (tipContainer) {
    tipContainer.innerHTML = ''
  }
}

function hashString(s) {
  let hash = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return hash
}

function getUserPoints() {
  try { return JSON.parse(localStorage.getItem('userPoints')) || { points: 0, badges: [], history: [] } }
  catch (e) { return { points: 0, badges: [], history: [] } }
}

function addPoints(amount, reason) {
  const data = getUserPoints()
  data.points += amount
  data.history.unshift({ amount, reason, date: new Date().toISOString() })
  data.history = data.history.slice(0, 50)
  localStorage.setItem('userPoints', JSON.stringify(data))
  checkBadges()
  return data.points
}

function checkBadges() {
  const data = getUserPoints()
  const checkinData = JSON.parse(localStorage.getItem('checkinData') || '{"streak":0}')
  const badges = [
    { id: 'first_checkin', name: '初次打卡', icon: '🌱', condition: () => data.history.some(h => h.reason === '打卡') },
    { id: 'streak_7', name: '连续7天', icon: '🔥', condition: () => checkinData.streak >= 7 },
    { id: 'streak_30', name: '坚持一月', icon: '💎', condition: () => checkinData.streak >= 30 },
    { id: 'foodie_10', name: '食材达人', icon: '🥗', condition: () => data.history.filter(h => h.reason === '收藏食材').length >= 10 },
    { id: 'chef_5', name: '食谱达人', icon: '🍳', condition: () => data.history.filter(h => h.reason === '收藏食谱').length >= 5 },
    { id: 'explorer', name: '探索者', icon: '🔍', condition: () => data.history.filter(h => h.reason === '搜索食材').length >= 20 },
    { id: 'constitution_master', name: '体质大师', icon: '🧬', condition: () => data.history.some(h => h.reason === '完成测试') }
  ]
  const newBadges = badges.filter(b => !data.badges.includes(b.id) && b.condition()).map(b => b.id)
  data.badges.push(...newBadges)
  localStorage.setItem('userPoints', JSON.stringify(data))
  if (newBadges.length > 0) {
    const badgeNames = newBadges.map(id => badges.find(b => b.id === id).icon + badges.find(b => b.id === id).name).join(' ')
    return `🏆 解锁新徽章：${badgeNames}`
  }
  return null
}

function doCheckIn() {
  const today = new Date().toDateString()
  let checkinData = { days: [], streak: 0 }
  try {
    const saved = localStorage.getItem('checkinData')
    if (saved) checkinData = JSON.parse(saved)
  } catch (e) {}
  if (checkinData.days.includes(today)) return
  checkinData.days.push(today)
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  checkinData.streak = checkinData.days.includes(yesterday) ? checkinData.streak + 1 : 1
  localStorage.setItem('checkinData', JSON.stringify(checkinData))
  addPoints(5, '打卡')
  const badgeMsg = checkBadges()
  renderCheckIn()
  if (badgeMsg) {
    setTimeout(() => alert(badgeMsg), 500)
  }
}

function renderSolarTerm() {
  const container = document.getElementById('solarTermSection')
  const term = getCurrentSolarTerm()
  if (!term) { container.innerHTML = ''; return }
  container.innerHTML = `
    <div class="solar-term-card">
      <div class="solar-term-title">🌏 今日节气 · ${term.name}</div>
      <div class="solar-term-tip">${term.tip}</div>
      <div class="solar-term-foods">
        ${term.foods.map(f => `<span>${f}</span>`).join('')}
      </div>
    </div>
  `
}

let currentPoetry = null

function getDayOfYear() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function getPoetryForToday(solarTermName) {
  const poems = POETRY_365[solarTermName]
  if (!poems || poems.length === 0) return null
  const index = getDayOfYear() % poems.length
  return poems[index]
}

function renderPoetry() {
  const term = getCurrentSolarTerm()
  if (!term) return
  currentPoetry = getPoetryForToday(term.name)
  if (!currentPoetry) return
  const section = document.getElementById('poetrySection')
  if (!section) return
  section.style.display = 'block'
  document.getElementById('poetrySolarName').textContent = term.name
  document.getElementById('poetryText').textContent = currentPoetry.poem
  document.getElementById('poetryAuthor').textContent = currentPoetry.author
}

function showPoetryModal() {
  if (!currentPoetry) return
  const term = getCurrentSolarTerm()
  document.getElementById('modalPoetryTitle').textContent = term ? term.name : ''
  document.getElementById('modalPoemText').textContent = currentPoetry.poem
  document.getElementById('modalPoemAuthor').textContent = currentPoetry.author
  document.getElementById('modalStory').textContent = currentPoetry.story
  document.getElementById('modalTip').textContent = currentPoetry.tip
  document.getElementById('poetryModal').style.display = 'flex'
}

function hidePoetryModal() {
  document.getElementById('poetryModal').style.display = 'none'
}

function getFavorites() {
  try { return JSON.parse(localStorage.getItem('favorites')) || { foods: [], recipes: [] } }
  catch (e) { return { foods: [], recipes: [] } }
}

function saveFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs))
}

function getSearchHistory() {
  try { return JSON.parse(localStorage.getItem('searchHistory')) || [] }
  catch (e) { return [] }
}

function saveSearchHistory(query) {
  if (!query) return
  let history = getSearchHistory()
  history = history.filter(h => h !== query)
  history.unshift(query)
  history = history.slice(0, 5)
  localStorage.setItem('searchHistory', JSON.stringify(history))
}

function toggleFoodFavorite(name) {
  const favs = getFavorites()
  const idx = favs.foods.indexOf(name)
  if (idx >= 0) { favs.foods.splice(idx, 1) } else { favs.foods.push(name); addPoints(2, '收藏食材') }
  saveFavorites(favs)
  const container = document.getElementById('foodResults')
  if (container && container.querySelector('.food-result-card')) {
    renderFoodList(currentFilter)
  }
  renderDailyFood()
  if (document.getElementById('favoritesDetail')) {
    showFavoritesView()
  }
}

function toggleRecipeFavorite(name) {
  const favs = getFavorites()
  const idx = favs.recipes.indexOf(name)
  if (idx >= 0) { favs.recipes.splice(idx, 1) } else { favs.recipes.push(name); addPoints(2, '收藏食谱') }
  saveFavorites(favs)
  const viewResult = document.getElementById('viewResult')
  if (viewResult && viewResult.classList.contains('active')) {
    renderResultContent(currentResultTab)
  }
  const viewSeason = document.getElementById('viewSeason')
  if (viewSeason && viewSeason.classList.contains('active')) {
    renderSeasonView(selectedMonth || undefined)
  }
  if (document.getElementById('favoritesDetail')) {
    showFavoritesView()
  }
}

function showFavoritesView() {
  const favs = getFavorites()
  const foodFavs = favs.foods
  const recipeFavs = favs.recipes

  let html = '<div class="card"><div class="card-title">⭐ 我的收藏</div>'

  if (foodFavs.length > 0) {
    html += '<div style="font-size:14px;font-weight:600;color:var(--text);margin:12px 0 8px;">🥦 收藏食材</div>'
    html += foodFavs.map(name => {
      const f = FOOD_DATABASE.find(x => x.name === name)
      if (!f) return ''
      return `<div style="padding:6px 0;border-bottom:1px solid var(--border);font-size:13px;display:flex;justify-content:space-between;align-items:center;">
        <div>
          <span>${f.name}</span>
          <span style="color:var(--text-muted);font-size:11px;margin-left:8px;">${f.property}性 · ${f.meridian}经</span>
        </div>
        <span class="food-star" data-name="${name}" style="cursor:pointer;color:var(--warm);font-size:16px;">★</span>
      </div>`
    }).join('')
  }

  if (recipeFavs.length > 0) {
    html += '<div style="font-size:14px;font-weight:600;color:var(--text);margin:12px 0 8px;">🍲 收藏食谱</div>'
    html += recipeFavs.map(name => {
      const recipe = RECIPES[name]
      if (!recipe) return ''
      return `<div style="padding:6px 0;border-bottom:1px solid var(--border);font-size:13px;display:flex;justify-content:space-between;align-items:center;">
        <span>${name}</span>
        <span class="recipe-star" data-name="${name}" style="cursor:pointer;color:var(--warm);font-size:16px;">★</span>
      </div>`
    }).join('')
  }

  if (foodFavs.length === 0 && recipeFavs.length === 0) {
    html += '<p style="color:var(--text-muted);font-size:13px;padding:20px 0;text-align:center;">还没有收藏内容<br>点击食材或食谱旁的 ☆ 收藏 · 点击 ★ 取消收藏</p>'
  }

  html += '</div>'

  showView('viewProfile')
  updateTabBar()
  document.getElementById('profileAvatar').textContent = '⭐'
  document.getElementById('profileName').textContent = '我的收藏'
  document.getElementById('profilePhone').textContent = `${foodFavs.length}个食材 · ${recipeFavs.length}个食谱`
  document.getElementById('currentConstiBadge').innerHTML = ''
  const menuCard = document.querySelector('#viewProfile .card')
  if (menuCard) menuCard.style.display = 'none'
  const existing = document.getElementById('favoritesDetail')
  if (existing) existing.remove()
  const div = document.createElement('div')
  div.id = 'favoritesDetail'
  div.innerHTML = html
  document.querySelector('#viewProfile .profile-header').after(div)
}

function showUserStats() {
  const pointsData = getUserPoints()
  const checkinData = JSON.parse(localStorage.getItem('checkinData') || '{"streak":0,"days":[]}')
  const badges = [
    { id: 'first_checkin', name: '初次打卡', icon: '🌱' },
    { id: 'streak_7', name: '连续7天', icon: '🔥' },
    { id: 'streak_30', name: '坚持一月', icon: '💎' },
    { id: 'foodie_10', name: '食材达人', icon: '🥗' },
    { id: 'chef_5', name: '食谱达人', icon: '🍳' },
    { id: 'explorer', name: '探索者', icon: '🔍' },
    { id: 'constitution_master', name: '体质大师', icon: '🧬' }
  ]
  const earnedBadges = pointsData.badges.map(id => badges.find(b => b.id === id)).filter(Boolean)

  let html = '<div class="card">'
  html += '<div class="card-title">🏆 我的成就</div>'
  html += `<div style="display:flex;gap:20px;margin:12px 0;padding:16px;background:var(--surface);border-radius:var(--radius-sm);text-align:center;">`
  html += `<div style="flex:1;"><div style="font-size:24px;font-weight:700;color:var(--primary);">${pointsData.points}</div><div style="font-size:11px;color:var(--text-muted);">积分</div></div>`
  html += `<div style="flex:1;"><div style="font-size:24px;font-weight:700;color:var(--warm);">${checkinData.streak}</div><div style="font-size:11px;color:var(--text-muted);">连续天数</div></div>`
  html += `<div style="flex:1;"><div style="font-size:24px;font-weight:700;color:var(--accent);">${earnedBadges.length}</div><div style="font-size:11px;color:var(--text-muted);">徽章</div></div>`
  html += '</div>'

  if (earnedBadges.length > 0) {
    html += '<div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px;">已获得徽章</div>'
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">'
    earnedBadges.forEach(badge => {
      html += `<span style="padding:6px 12px;background:var(--primary-glow);border-radius:16px;font-size:12px;">${badge.icon} ${badge.name}</span>`
    })
    html += '</div>'
  }

  const unearnedBadges = badges.filter(b => !pointsData.badges.includes(b.id))
  if (unearnedBadges.length > 0) {
    html += '<div style="font-size:13px;font-weight:600;color:var(--text);margin:12px 0 8px;">徽章墙</div>'
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">'
    unearnedBadges.forEach(badge => {
      html += `<span style="padding:6px 12px;background:var(--surface);border-radius:16px;font-size:12px;opacity:0.4;">${badge.icon} ${badge.name}</span>`
    })
    html += '</div>'
  }

  html += '</div>'

  showView('viewProfile')
  updateTabBar()
  document.getElementById('profileAvatar').textContent = '🏆'
  document.getElementById('profileName').textContent = '健康成就'
  document.getElementById('profilePhone').textContent = `积分 ${pointsData.points} · ${earnedBadges.length}个徽章`
  document.getElementById('currentConstiBadge').innerHTML = ''
  const menuCard = document.querySelector('#viewProfile .card')
  if (menuCard) menuCard.style.display = 'none'
  const existing = document.getElementById('favoritesDetail')
  if (existing) existing.remove()
  const div = document.createElement('div')
  div.id = 'favoritesDetail'
  div.innerHTML = html
  document.querySelector('#viewProfile .profile-header').after(div)
}

function showRevealAnimation(c, callback) {
  const overlay = document.createElement('div')
  overlay.className = 'result-reveal-overlay'
  const particles = ['🌸', '✨', '🌿', '⭐', '🎋', '🍃', '💫', '🌱']
  const particleHTML = particles.map((p, i) =>
    `<span class="result-reveal-particle" style="left:${10 + Math.random() * 80}%;top:${40 + Math.random() * 30}%;animation-delay:${i * 0.08}s;">${p}</span>`
  ).join('')
  overlay.innerHTML = `
    ${particleHTML}
    <div class="result-reveal-emoji">${c.emoji}</div>
    <div class="result-reveal-name">${c.name}</div>
    <div class="result-reveal-desc">${c.description}</div>
  `
  document.body.appendChild(overlay)
  setTimeout(() => {
    overlay.classList.add('fade-out')
    setTimeout(() => {
      overlay.remove()
      callback()
    }, 450)
  }, 1800)
}

function shareConstitution() {
  if (!currentResult) {
    alert('请先完成体质测试')
    return
  }
  const c = getConstitutionById(currentResult.id)
  const foods = FOOD_DATABASE.filter(f => f.suitable.includes(c.id)).slice(0, 5)
  const text = `🌿 我的中医体质是 ${c.emoji} ${c.name}！

📝 体质特征：${c.description}

💚 养生原则：${c.principle}

🥦 推荐食材：${foods.map(f => f.name).join('、')}

🔥 忌食或少食：${c.avoid.slice(0, 5).join('、')}

📱 测测你的体质吧 ➡️ AI体质食疗小程序`

  if (navigator.share) {
    navigator.share({ title: `${c.emoji} 我的${c.name}体质报告`, text }).catch(() => {})
  } else {
    navigator.clipboard.writeText(text).then(() => alert('体质报告已复制，快去分享给朋友吧！')).catch(() => {})
  }
}

function copyShoppingList(recipeName) {
  const recipe = RECIPES[recipeName]
  if (!recipe) { alert('未找到食谱数据'); return }
  const text = `🛒 ${recipeName} 购物清单\n\n${recipe.ingredients.map((i, idx) => `${idx + 1}. ${i}`).join('\n')}`
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ 购物清单已复制')
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    alert('✅ 购物清单已复制')
  })
}

// ============ CONSTITUTION LIST ============
function renderConstiList() {
  const container = document.getElementById('constiList')
  container.innerHTML = CONSTITUTIONS.map(c => `
    <div class="consti-card" onclick="showConstitution('${c.id}')">
      <div class="consti-header">
        <span class="consti-emoji">${c.emoji}</span>
        <span class="consti-name">${c.name}</span>
      </div>
      <div class="consti-preview">${c.description}</div>
    </div>
  `).join('')
}

let constiListExpanded = false

function toggleConstiList() {
  constiListExpanded = !constiListExpanded
  const list = document.getElementById('constiList')
  const toggle = document.getElementById('constiToggle')
  if (constiListExpanded) {
    list.style.display = 'block'
    toggle.textContent = '点击收起 ▲'
  } else {
    list.style.display = 'none'
    toggle.textContent = '点击查看 ▼'
  }
}

function showConstitution(id) {
  currentConstitutionId = id
  if (currentResult && currentResult.id === id) {
    showView('viewResult')
    const c = getConstitutionById(id)
    document.getElementById('resultEmoji').textContent = c.emoji
    document.getElementById('resultName').textContent = c.name
    document.getElementById('resultDesc').textContent = c.description
    currentResultTab = 'suitable'
    document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
    document.querySelector(`.result-tab[data-tab="suitable"]`).classList.add('active')
    renderResultContent('suitable')
    renderConstitutionSummary()
    renderScoreBreakdown()
    updateTabBar()
    saveAppState()
    return
  }
  showView('viewResult')
  const c = getConstitutionById(id)
  document.getElementById('resultEmoji').textContent = c.emoji
  document.getElementById('resultName').textContent = c.name
  document.getElementById('resultDesc').textContent = c.description
  currentResult = { id: c.id, name: c.name, scores: null }
  currentResultTab = 'suitable'
  document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
  document.querySelector('.result-tab[data-tab="suitable"]').classList.add('active')
  renderResultContent('suitable')
  renderConstitutionSummary()
  renderScoreBreakdown()
  updateTabBar()
  saveAppState()
}

function renderConstitutionSummary() {
  const c = getConstitutionById(currentResult.id)
  const header = document.querySelector('.result-badge')
  const existing = header.querySelector('.result-evidence')
  if (existing) existing.remove()

  const evidenceDiv = document.createElement('div')
  evidenceDiv.className = 'result-evidence'

  let html = `
    <div style="font-size:12px;color:var(--primary);font-weight:600;margin-bottom:6px;">📜 中医典籍依据</div>
    <div style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.evidence}</div>
  `

  if (userBodyInfo) {
    const height = parseFloat(userBodyInfo.height) / 100
    const weight = parseFloat(userBodyInfo.weight)
    const bmi = (weight / (height * height)).toFixed(1)
    let bmiAdvice = ''
    if (bmi < 18.5) bmiAdvice = `偏瘦，建议结合${c.name}的调理方向适当增加营养。`
    else if (bmi < 24) bmiAdvice = '正常范围，继续保持。'
    else if (bmi < 28) bmiAdvice = `偏重，建议配合${c.name}的膳食调理适当调整饮食。`
    else bmiAdvice = `偏高，建议结合${c.name}的膳食方案，以清淡饮食为主。`

    html += `
      <div style="font-size:12px;color:var(--accent);font-weight:600;margin:10px 0 6px;">📊 身体数据</div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.7;">
        ${userBodyInfo.gender === 'male' ? '男' : '女'} · ${userBodyInfo.age}岁 · ${userBodyInfo.height}cm · ${userBodyInfo.weight}kg · BMI ${bmi}<br>
        <span style="color:${bmi < 18.5 || bmi >= 28 ? '#FF453A' : bmi >= 24 ? '#FF9F0A' : 'var(--accent)'};">${bmiAdvice}</span>
      </div>
      <div style="font-size:12px;color:var(--primary);font-weight:600;margin:10px 0 6px;">🏃 运动建议</div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.fitnessAdvice}</div>
      <div style="font-size:12px;color:var(--text-muted);line-height:1.7;margin-top:4px;">⚠️ ${c.exerciseCaution}</div>
    `
  }

  html += `
    <div style="font-size:12px;color:var(--primary);font-weight:600;margin:10px 0 6px;">🍃 养生建议</div>
    <div style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.healthAdvice}</div>
  `

  evidenceDiv.innerHTML = html
  header.appendChild(evidenceDiv)
}

// ============ QUIZ ============
function startQuiz() {
  currentQuiz = 0
  quizAnswers = CONSTITUTION_QUESTIONS.map(() => null)
  quizScores = null
  quizSymptomScores = null
  document.getElementById('symptomCard').style.display = 'none'
  document.getElementById('symptomInput').value = ''
  document.getElementById('quizCard').style.display = ''
  showView('viewQuiz')
  renderQuestion()
  updateTabBar()
  saveAppState()
}

function renderQuestion() {
  const q = CONSTITUTION_QUESTIONS[currentQuiz]
  const total = CONSTITUTION_QUESTIONS.length
  document.getElementById('quizProgress').textContent = `第 ${currentQuiz + 1} / ${total} 题`
  document.getElementById('quizProgressFill').style.width = `${((currentQuiz + 1) / total) * 100}%`
  document.getElementById('quizQuestion').textContent = q.text

  const selectedIdx = quizAnswers[currentQuiz]
  document.getElementById('quizOptions').innerHTML = q.options.map((opt, idx) => `
    <div class="quiz-option ${selectedIdx === idx ? 'selected' : ''}" onclick="selectOption(${idx})">${opt.text}</div>
  `).join('')

  document.getElementById('quizPrevBtn').style.visibility = currentQuiz === 0 ? 'hidden' : 'visible'
  document.getElementById('quizNextBtn').textContent = currentQuiz === total - 1 ? '填写身体信息' : '下一题'
  document.getElementById('quizNextBtn').disabled = selectedIdx === null
}

function selectOption(idx) {
  quizAnswers[currentQuiz] = idx
  saveAppState()
  renderQuestion()
}

function nextQuestion() {
  if (currentQuiz === CONSTITUTION_QUESTIONS.length - 1) {
    document.getElementById('quizCard').style.display = 'none'
    document.getElementById('symptomCard').style.display = ''
    showView('viewQuiz')
    updateTabBar()
    return
  }
  currentQuiz++
  renderQuestion()
}

function prevQuestion() {
  if (currentQuiz > 0) {
    currentQuiz--
    renderQuestion()
  }
}

function skipSymptom() {
  document.getElementById('quizCard').style.display = ''
  document.getElementById('symptomCard').style.display = 'none'
  showBodyInfoForm()
}

function submitSymptom() {
  const text = document.getElementById('symptomInput').value.trim()
  if (text) {
    const symptomScores = {}
    CONSTITUTIONS.forEach(c => { symptomScores[c.id] = 0 })
    SYMPTOM_KEYWORDS.forEach(group => {
      const matched = group.keywords.some(kw => {
        const idx = text.indexOf(kw)
        if (idx === -1) return false
        // Check negation: look behind for negation words within 2 chars before keyword
        const before = text.slice(Math.max(0, idx - 3), idx)
        return !(group.negations || []).some(neg => before.includes(neg))
      })
      if (matched) {
        Object.entries(group.scores).forEach(([type, val]) => {
          symptomScores[type] = (symptomScores[type] || 0) + val
        })
      }
    })
    quizSymptomScores = symptomScores
  }
  document.getElementById('quizCard').style.display = ''
  document.getElementById('symptomCard').style.display = 'none'
  showBodyInfoForm()
}

function finishQuiz() {
  const scores = {}
  CONSTITUTIONS.forEach(c => { scores[c.id] = 0 })
  quizAnswers.forEach((answerIdx, qIdx) => {
    if (answerIdx === null) return
    const option = CONSTITUTION_QUESTIONS[qIdx].options[answerIdx]
    Object.entries(option.scores).forEach(([type, val]) => {
      scores[type] = (scores[type] || 0) + val
    })
  })
  // Incorporate symptom keyword scores
  if (quizSymptomScores) {
    Object.entries(quizSymptomScores).forEach(([type, val]) => {
      scores[type] = (scores[type] || 0) + val
    })
  }
  quizScores = scores
  const resultId = calculateResult(scores)
  const c = getConstitutionById(resultId)

  const scoreEntries = Object.entries(scores)
    .filter(([id, s]) => id !== 'pinghe')
    .sort((a, b) => b[1] - a[1])

  currentResult = {
    id: resultId,
    name: c.name,
    scores: scoreEntries
  }
  currentConstitutionId = resultId
  showRevealAnimation(c, () => {
    showView('viewResult')
    document.getElementById('resultEmoji').textContent = c.emoji
    document.getElementById('resultName').textContent = c.name
    document.getElementById('resultDesc').textContent = c.description

    currentResultTab = 'suitable'
    document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
    document.querySelector('.result-tab[data-tab="suitable"]').classList.add('active')
    renderResultContent('suitable')
    renderConstitutionSummary()
    renderScoreBreakdown()
    updateTabBar()
    saveAppState()
  })
}

function renderScoreBreakdown() {
  const container = document.getElementById('scoreBreakdown')
  if (!container) return
  if (!currentResult || !currentResult.scores) {
    container.innerHTML = ''
    return
  }

  const displayScores = currentResult.scores.slice(0, 5)
  const rawValues = displayScores.map(([, s]) => s)
  const minVal = Math.min(...rawValues, 0)
  const maxVal = Math.max(...rawValues, 1)
  const range = maxVal - minVal || 1

  let scoreHTML = `
    <div class="card">
      <div class="card-title">📊 体质倾向评分</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">分值越高，体质倾向越明显</div>
  `

  displayScores.forEach(([id, score]) => {
    const pc = Math.max(5, ((score - minVal) / range) * 100)
    const consti = getConstitutionById(id)
    scoreHTML += `
      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px;">
          <span style="color:var(--text-secondary);">${consti.emoji} ${consti.name}</span>
          <span style="color:${consti.id === currentResult.id ? 'var(--primary)' : 'var(--text-muted)'};">${score > 0 ? '+' : ''}${score}</span>
        </div>
        <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;">
          <div style="height:100%;width:${pc}%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:4px;transition:width 0.5s;"></div>
        </div>
      </div>
    `
  })

  scoreHTML += '</div>'
  container.innerHTML = scoreHTML
}

// ============ BODY INFO ============
function showBodyInfoForm() {
  showView('viewBodyInfo')
  updateTabBar()

  if (userBodyInfo) {
    document.getElementById('bodyGender').value = userBodyInfo.gender || 'male'
    document.getElementById('bodyAge').value = userBodyInfo.age || ''
    document.getElementById('bodyHeight').value = userBodyInfo.height || ''
    document.getElementById('bodyWeight').value = userBodyInfo.weight || ''
  } else {
    document.getElementById('bodyGender').value = 'male'
    document.getElementById('bodyAge').value = ''
    document.getElementById('bodyHeight').value = ''
    document.getElementById('bodyWeight').value = ''
  }
}

function submitBodyInfo() {
  const gender = document.getElementById('bodyGender').value
  const age = document.getElementById('bodyAge').value.trim()
  const height = document.getElementById('bodyHeight').value.trim()
  const weight = document.getElementById('bodyWeight').value.trim()

  if (!age || !height || !weight) {
    document.getElementById('bodyInfoError').textContent = '请填写完整信息'
    return
  }
  if (isNaN(age) || isNaN(height) || isNaN(weight)) {
    document.getElementById('bodyInfoError').textContent = '请输入有效数字'
    return
  }
  if (height < 100 || height > 250) {
    document.getElementById('bodyInfoError').textContent = '身高请在100-250cm之间'
    return
  }
  if (weight < 20 || weight > 300) {
    document.getElementById('bodyInfoError').textContent = '体重请在20-300kg之间'
    return
  }

  document.getElementById('bodyInfoError').textContent = ''
  const info = { gender, age, height, weight }
  saveBodyInfo(info)
  finishQuiz()
}

// ============ RESULT TABS ============
function switchResultTab(tab) {
  currentResultTab = tab
  document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
  document.querySelector(`.result-tab[data-tab="${tab}"]`).classList.add('active')
  renderResultContent(tab)
  saveAppState()
}

function renderResultContent(tab) {
  if (!currentResult) return
  const container = document.getElementById('resultContent')
  const c = getConstitutionById(currentResult.id)

  switch (tab) {
    case 'suitable':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">✅ 宜食食材</div>
          <p style="font-size:12px;color:var(--text-muted);margin-bottom:8px;line-height:1.6;">${c.principleDetail}</p>
          <ul class="food-list">
            ${c.suitable.map(f => `<li><span class="dot dot-green"></span>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="card">
          <div class="card-title">🍽️ 推荐食谱</div>
          <ul class="food-list">
            ${c.recommendFoods.map(f => `<li><span class="dot dot-green"></span>${f}</li>`).join('')}
          </ul>
        </div>
      `
      break
    case 'avoid':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">❌ 慎食或少食</div>
          <ul class="food-list">
            ${c.avoid.map(f => `<li><span class="dot dot-red"></span>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="card" style="background:rgba(255,69,58,0.05);border-color:rgba(255,69,58,0.15);">
          <div class="card-title" style="color:#FF453A;">💡 慎食原理</div>
          <p style="font-size:12px;color:var(--text-secondary);line-height:1.7;">
            慎食指该食物性味与您当前体质相冲，可能加重体质偏颇。如阳虚者慎食寒凉食物（西瓜、苦瓜），因寒凉伤阳气。<br><br>
            "慎食"不代表完全不能吃，偶尔少量食用并无大碍，关键在于适度。
          </p>
        </div>
      `
      break
    case 'recipe':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">🍳 推荐食疗方案</div>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;line-height:1.7;">${c.principleDetail}</p>
          ${c.recommendFoods.map(f => {
            const recipe = RECIPES[f]
            if (!recipe) return `
              <div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;display:flex;align-items:center;gap:8px;">
                <span style="color:var(--primary);">▸</span>
                <span style="color:var(--text-secondary);">${f}</span>
                <span style="color:var(--text-muted);font-size:12px;margin-left:auto;">适合${c.name}</span>
              </div>
            `
            return `
              <div class="recipe-detail-card">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div class="recipe-detail-name">🍲 ${f}</div>
                  <span class="recipe-star" data-name="${f}" style="cursor:pointer;font-size:20px;color:${getFavorites().recipes.includes(f) ? 'var(--warm)' : 'var(--text-muted)'};">${getFavorites().recipes.includes(f) ? '★' : '☆'}</span>
                </div>
                <div class="recipe-detail-ingredients">
                  <strong>食材：</strong>${recipe.ingredients.join('、')}
                </div>
                <div class="recipe-detail-steps">
                  <strong>做法：</strong>
                  <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                </div>
                <button class="btn btn-sm" style="margin-top:10px;background:var(--surface);color:var(--primary);border:1px solid var(--border-light);" onclick="copyShoppingList('${f}')">📋 复制购物清单</button>
              </div>
            `
          }).join('')}
        </div>
        <div class="card">
          <div class="card-title">📜 理论依据</div>
          <p style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.evidence}</p>
        </div>
      `
      break
    case 'info':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">📖 调养原则</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.principleDetail}</p>
        </div>
        <div class="card">
          <div class="card-title">🧑 体质特征与成因</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.character}</p>
        </div>
        <div class="card">
          <div class="card-title">📜 古籍依据</div>
          <p style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.evidence}</p>
        </div>
        <div class="card">
          <div class="card-title">📅 季节调养</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.seasonTip}</p>
        </div>
        <div class="card">
          <div class="card-title">🍃 养生建议</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.healthAdvice}</p>
        </div>
      `
      break
    case 'health': {
      let userAdvice = ''
      if (userBodyInfo) {
        const height = parseFloat(userBodyInfo.height) / 100
        const weight = parseFloat(userBodyInfo.weight)
        const bmi = (weight / (height * height)).toFixed(1)
        userAdvice = `<div class="card" style="border-color:rgba(102,187,106,0.2);background:rgba(102,187,106,0.04);">
          <div class="card-title">📊 ${userBodyInfo.gender === 'male' ? '男' : '女'} · ${userBodyInfo.age}岁 · BMI ${bmi}</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">结合您的体质（${c.name}）和身体数据：</p>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-top:6px;">${c.healthAdvice}</p>
        </div>`
      }
      container.innerHTML = `
        ${userAdvice}
        <div class="card">
          <div class="card-title">🍃 ${c.name} · 养生要点</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">
            ${c.principle}<br><br>
            <strong>饮食原则：</strong>${c.principleDetail}<br><br>
            <strong>季节提醒：</strong>${c.seasonTip}
          </p>
        </div>
        <div class="card">
          <div class="card-title">📜 古籍依据</div>
          <p style="font-size:12px;color:var(--text-secondary);line-height:1.7;">${c.evidence}</p>
        </div>
      `
      break
    }
    case 'fitness': {
      let userAdvice = ''
      if (userBodyInfo) {
        const height = parseFloat(userBodyInfo.height) / 100
        const weight = parseFloat(userBodyInfo.weight)
        const bmi = (weight / (height * height)).toFixed(1)
        userAdvice = `<div class="card" style="border-color:rgba(102,187,106,0.2);background:rgba(102,187,106,0.04);">
          <div class="card-title">📊 ${userBodyInfo.gender === 'male' ? '男' : '女'} · ${userBodyInfo.age}岁 · BMI ${bmi}</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">结合您的体质（${c.name}）和身体数据，为您定制运动养生方案：</p>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-top:6px;">${c.fitnessAdvice}</p>
          <p style="font-size:12px;color:var(--text-muted);line-height:1.7;margin-top:6px;">⚠️ ${c.exerciseCaution}</p>
        </div>`
      }
      container.innerHTML = `
        ${userAdvice}
        <div class="card">
          <div class="card-title">🏃 运动营养饮食方案</div>
          ${FITNESS_WORKOUTS.map(w => {
            const constiTip = currentResult ? getConstitutionWorkoutTip(currentResult.id) : ''
            return `
            <div class="workout-card">
              <div class="wc-type">🏋️ ${w.type}</div>
              <div class="wc-tip">${w.tip}</div>
              ${constiTip ? `<div style="font-size:11px;color:var(--accent);margin-bottom:8px;">💡 ${currentResult.name}提示：${constiTip}</div>` : ''}
              <div class="wc-foods">
                ${w.foods.map(f => `<span>${f}</span>`).join('')}
              </div>
              <div style="font-size:11px;color:var(--text-muted);line-height:1.6;margin-top:8px;padding-top:8px;border-top:1px solid var(--border);">
                ${w.detail}
              </div>
            </div>
          `}).join('')}
        </div>
      `
      break
    }
  }
}

// ============ FOOD SEARCH ============
function searchFood() {
  const input = document.getElementById('foodSearchInput')
  const query = input.value.trim()
  if (!query) return

  saveSearchHistory(query)
  addPoints(1, '搜索食材')
  const results = FOOD_DATABASE.filter(f =>
    f.name.includes(query) || f.effect.includes(query) || f.mechanism.includes(query) || (f.nutrition && f.nutrition.includes(query))
  )
  const foodResults = document.getElementById('foodResults')

  if (results.length === 0) {
    foodResults.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">😅</span>
        <p>未找到 "${query}"，试试其他食材</p>
      </div>`
    return
  }

  foodResults.innerHTML = results.map(f => renderFoodCard(f)).join('')
  currentFilter = 'all'
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
  document.querySelector('.chip[data-filter="all"]').classList.add('active')
}

function renderFoodCard(f) {
  const propClass = f.property === '寒' ? 'tag-cold' :
    f.property === '凉' ? 'tag-cool' :
    f.property === '平' ? 'tag-neutral' :
    f.property === '温' || f.property === '微温' ? 'tag-warm' :
    f.property === '热' ? 'tag-hot' : 'tag-default'

  let suitability = ''
  if (currentResult) {
    if (f.suitable.includes(currentResult.id)) {
      suitability = '<span style="color:var(--accent);font-size:12px;font-weight:600;">✅ 宜食</span>'
    } else if (f.avoid.includes(currentResult.id)) {
      suitability = '<span style="color:#FF453A;font-size:12px;font-weight:600;">❌ 慎食</span>'
    } else {
      suitability = '<span style="color:var(--text-muted);font-size:12px;">◻️ 适量</span>'
    }
  }

  let bodyMatch = ''
  if (currentResult) {
    if (f.suitable.includes(currentResult.id)) {
      bodyMatch = '<span style="color:var(--accent);font-size:11px;">● 适合您的体质</span>'
    } else if (f.avoid.includes(currentResult.id)) {
      bodyMatch = '<span style="color:#FF453A;font-size:11px;">● 慎食（与体质相冲）</span>'
    }
  }

  const favs = getFavorites()
  const isFav = favs.foods.includes(f.name)

  // Find related recipes
  const relatedRecipes = Object.entries(RECIPES).filter(([, r]) =>
    r.ingredients.some(i => i.includes(f.name))
  ).slice(0, 3)

  return `
    <div class="food-result-card">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div class="food-name">${f.name}</div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${suitability}
          <span class="food-star" data-name="${f.name}" style="cursor:pointer;font-size:18px;color:${isFav ? 'var(--warm)' : 'var(--text-muted)'};">${isFav ? '★' : '☆'}</span>
        </div>
      </div>
      <div class="property-tags">
        <span class="tag ${propClass}">${f.property}性</span>
        <span class="tag tag-default">${f.flavor}味</span>
        <span class="tag tag-default">${f.meridian}经</span>
      </div>
      ${bodyMatch ? `<div style="font-size:12px;margin-bottom:8px;">${bodyMatch}</div>` : ''}
      <div class="food-detail-row"><span class="label">功效</span><span class="value">${f.effect}</span></div>
      <div class="food-detail-row"><span class="label">营养</span><span class="value">${f.nutrition}</span></div>
      <div class="food-detail-row"><span class="label">搭配</span><span class="value">${f.pairing}</span></div>
      <div class="food-detail-row" style="flex-direction:column;gap:4px;">
        <span class="label" style="width:auto;">作用机理</span>
        <span class="value" style="font-size:12px;line-height:1.7;">${f.mechanism}</span>
      </div>
      <div class="food-detail-row"><span class="label">建议</span><span class="value">${f.suggestion}</span></div>
      ${relatedRecipes.length > 0 ? `
        <div class="food-detail-row" style="flex-direction:column;gap:6px;border-top:1px solid var(--border);padding-top:10px;margin-top:4px;">
          <span class="label" style="width:auto;">🍳 相关食谱</span>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${relatedRecipes.map(([name]) => `<span style="background:var(--surface);border:1px solid var(--border);padding:4px 10px;border-radius:12px;font-size:11px;color:var(--text-secondary);cursor:pointer;" onclick="showRecipeDetail('${name}')">${name}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `
}

function filterFoods(filter) {
  currentFilter = filter
  document.querySelectorAll('#foodFilterChips .chip').forEach(c => c.classList.remove('active'))
  document.querySelector(`.chip[data-filter="${filter}"]`).classList.add('active')
  renderFoodList(filter)
  saveAppState()
}

function filterByProperty(prop) {
  propertyFilter = prop
  document.querySelectorAll('#propertyFilterChips .chip').forEach(c => c.classList.remove('active'))
  if (prop !== 'all') {
    document.querySelector(`.chip[data-prop="${prop}"]`).classList.add('active')
  } else {
    document.querySelector(`.chip[data-prop="all"]`).classList.add('active')
  }
  renderFoodList(currentFilter)
  saveAppState()
}

function filterByMeridian(meridian) {
  meridianFilter = meridian
  document.querySelectorAll('#meridianFilterChips .chip').forEach(c => c.classList.remove('active'))
  if (meridian !== 'all') {
    document.querySelector(`.chip[data-meridian="${meridian}"]`).classList.add('active')
  } else {
    document.querySelector(`.chip[data-meridian="all"]`).classList.add('active')
  }
  renderFoodList(currentFilter)
  saveAppState()
}

function renderSearchHistory() {
  const container = document.getElementById('searchHistory')
  if (!container) return
  const history = getSearchHistory()
  if (history.length === 0) {
    container.style.display = 'none'
    return
  }
  container.style.display = 'block'
  container.innerHTML = `
    <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">最近搜索</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      ${history.map(h => `<span class="chip" onclick="document.getElementById('foodSearchInput').value='${h}';searchFood();" style="cursor:pointer;">${h}</span>`).join('')}
    </div>
  `
}

function renderFoodList(filter) {
  let filtered = [...FOOD_DATABASE]
  if (currentResult && filter === 'suitable') {
    filtered = FOOD_DATABASE.filter(f => f.suitable.includes(currentResult.id))
  } else if (currentResult && filter === 'avoid') {
    filtered = FOOD_DATABASE.filter(f => f.avoid.includes(currentResult.id))
  } else if (filter === 'favorite') {
    const favs = getFavorites()
    filtered = FOOD_DATABASE.filter(f => favs.foods.includes(f.name))
  }
  if (propertyFilter !== 'all') {
    filtered = filtered.filter(f => f.property.includes(propertyFilter))
  }
  if (meridianFilter !== 'all') {
    filtered = filtered.filter(f => f.meridian.includes(meridianFilter))
  }

  const container = document.getElementById('foodResults')

  let bodyNotice = ''
  if (currentResult && (filter === 'all')) {
    bodyNotice = `
      <div class="body-match-notice">
        当前体质：<strong>${currentResult.name}</strong> · 已标记食材的宜忌关系
      </div>
    `
  } else if (currentResult && filter === 'suitable') {
    bodyNotice = `
      <div class="body-match-notice" style="border-color:rgba(102,187,106,0.2);background:rgba(102,187,106,0.06);">
        ✅ 针对 <strong>${currentResult.name}</strong> 的宜食食材
      </div>
    `
  } else if (currentResult && filter === 'avoid') {
    bodyNotice = `
      <div class="body-match-notice" style="border-color:rgba(255,69,58,0.2);background:rgba(255,69,58,0.06);">
        ❌ 针对 <strong>${currentResult.name}</strong> 的慎食食材
      </div>
    `
  } else if (!currentResult) {
    bodyNotice = `
      <div class="body-match-notice">
        💡 先去 <strong>体质测试</strong>，查询结果将自动匹配您的体质
      </div>
    `
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      ${bodyNotice}
      <div class="empty-state">
        <span class="empty-icon">📭</span>
        <p>暂无匹配结果</p>
      </div>`
    return
  }
  container.innerHTML = bodyNotice + filtered.map(f => renderFoodCard(f)).join('')
}

// ============ SEASON ============
function renderSeasonView(month) {
  const rec = getTodayRecommendation(month !== undefined ? month : undefined)
  const seasonEmojis = { '春季': '🌸', '夏季': '☀️', '秋季': '🍂', '冬季': '❄️' }
  const emoji = seasonEmojis[rec.season] || '🌸'
  const banner = document.getElementById('seasonBanner')
  banner.innerHTML = `
    <div class="season-title">${emoji} ${rec.season}养生</div>
    <div class="season-sub">${rec.principle}</div>
    <div class="season-tip">${rec.tip}</div>
    ${rec.reference ? `<div class="season-ref">📜 ${rec.reference}</div>` : ''}
  `

  const content = document.getElementById('seasonContent')
  const favs = getFavorites()
  const isFav = favs.recipes.includes(rec.recipe.name)
  content.innerHTML = `
    <div class="recipe-card">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="recipe-name">🍲 ${rec.recipe.name}</div>
        <span class="recipe-star" data-name="${rec.recipe.name}" style="cursor:pointer;font-size:20px;color:${isFav ? 'var(--warm)' : 'var(--text-muted)'};">${isFav ? '★' : '☆'}</span>
      </div>
      <div class="recipe-effect">${rec.recipe.effect}</div>
      <div class="recipe-ingredients">
        <strong>食材：</strong><br>
        ${rec.recipe.ingredients.map(i => `· ${i}<br>`).join('')}
      </div>
      <button class="btn btn-sm" style="margin-top:10px;background:var(--surface);color:var(--primary);border:1px solid var(--border-light);" onclick="copyShoppingList('${rec.recipe.name}')">📋 复制购物清单</button>
    </div>
    <div class="card">
      <div class="card-title">🥬 当季推荐食材</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${rec.foods.map(f => `<span style="background:var(--surface);border:1px solid var(--border);padding:6px 14px;border-radius:16px;font-size:13px;color:var(--text-secondary);">${f}</span>`).join('')}
      </div>
    </div>
  `

  document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'))
  const activeSeasonBtn = document.querySelector(`.season-btn[data-month="${rec.season === '春季' ? 3 : rec.season === '夏季' ? 6 : rec.season === '秋季' ? 9 : 12}"]`)
  if (activeSeasonBtn) activeSeasonBtn.classList.add('active')
}

function switchSeason(month) {
  selectedMonth = month
  renderSeasonView(month)
  saveAppState()
}

// ============ PROFILE ============
function renderProfileView() {
  const menuCard = document.querySelector('#viewProfile .card')
  if (menuCard) menuCard.style.display = ''
  const existing = document.getElementById('favoritesDetail')
  if (existing) existing.remove()
  document.getElementById('profileAvatar').textContent = '🌿'
  document.getElementById('profileName').textContent = '养生用户'
  let info = 'AI体质食疗'
  if (userBodyInfo) {
    const h = parseFloat(userBodyInfo.height) / 100
    const w = parseFloat(userBodyInfo.weight)
    const bmi = (w / (h * h)).toFixed(1)
    info = `${userBodyInfo.height}cm · ${userBodyInfo.weight}kg · BMI ${bmi}`
  }
  document.getElementById('profilePhone').textContent = info
  if (currentResult) {
    const badge = document.getElementById('currentConstiBadge')
    if (badge) {
      const c = getConstitutionById(currentResult.id)
      badge.innerHTML = `${c.emoji} ${c.name}`
    }
  }
}

// ============ THEME TOGGLE ============
function toggleTheme() {
  console.log('toggleTheme called')
  const root = document.documentElement
  const current = root.getAttribute('data-theme') || ''
  console.log('current theme:', current)
  if (current === 'light') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', 'light')
  }
  console.log('new theme:', root.getAttribute('data-theme'))
  saveAppState()
}

// ============ WORKOUT NUTRITION ============
function getConstitutionWorkoutTip(constiId) {
  const tips = {
    pinghe: '各计划均可，保持均衡',
    qixu: '增肌可选黄芪入膳补气，减脂避免过度消耗',
    yangxu: '增肌搭配温补食材（羊肉、韭菜），减脂避免寒凉',
    yinxu: '增肌注意滋阴（银耳、百合），避免大汗耗阴',
    tanshi: '减脂优先，配合薏米赤小豆祛湿',
    shire: '减脂为主，搭配绿豆薏米清热利湿',
    xueyu: '所有计划加山楂/黑木耳活血辅助',
    qiyu: '选择趣味性强的运动方案，搭配玫瑰花茶',
    tebing: '室内运动为主，食材注意规避过敏原'
  }
  return tips[constiId] || ''
}

function showWorkoutNutrition() {
  showView('viewWorkout')
  updateTabBar()
  renderWorkoutView()
}

function renderWorkoutView() {
  const list = document.getElementById('workoutList')
  const extra = document.getElementById('workoutExtra')

  list.innerHTML = FITNESS_WORKOUTS.map(w => {
    const constiTip = currentResult ? getConstitutionWorkoutTip(currentResult.id) : ''
    return `
    <div class="workout-card">
      <div class="wc-type">🏋️ ${w.type}饮食</div>
      <div class="wc-tip">${w.tip}</div>
      ${constiTip ? `<div style="font-size:11px;color:var(--accent);margin-bottom:8px;">💡 ${currentResult.name}提示：${constiTip}</div>` : ''}
      <div class="wc-foods">
        ${w.foods.map(f => `<span>${f}</span>`).join('')}
      </div>
      <div style="font-size:11px;color:var(--text-muted);line-height:1.6;margin-top:8px;padding-top:8px;border-top:1px solid var(--border);">
        ${w.detail}
      </div>
    </div>
  `}).join('')

  if (currentResult) {
    const c = getConstitutionById(currentResult.id)
    extra.innerHTML = `
      <div class="card">
        <div class="card-title">🧬 ${c.name} · 运动养生要点</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">
          ${c.principle}<br><br>
          推荐食材：${c.suitable.slice(0, 5).join('、')}
        </p>
      </div>
      <div class="card">
        <div class="card-title">🏃 运动建议</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">${c.fitnessAdvice}</p>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.7;margin-top:6px;">⚠️ ${c.exerciseCaution}</p>
      </div>
    `
  } else {
    extra.innerHTML = `
      <div class="card" style="text-align:center;">
        <div class="card-title">🧬 先测体质，再定方案</div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;">不同体质适合不同的运动养生策略</p>
        <button class="btn btn-primary btn-sm" onclick="startQuiz()">开始体质测试</button>
      </div>
    `
  }
}

// ============ NAVIGATION HELPERS ============
function goToFoodSearch() {
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  document.querySelector('.tab-item[data-view="viewFoodSearch"]').classList.add('active')
  if (currentResult) {
    currentFilter = 'suitable'
    document.querySelectorAll('#foodFilterChips .chip').forEach(c => c.classList.remove('active'))
    document.querySelector('.chip[data-filter="suitable"]').classList.add('active')
  }
  document.querySelectorAll('#propertyFilterChips .chip').forEach(c => c.classList.remove('active'))
  if (propertyFilter !== 'all') {
    const propChip = document.querySelector(`.chip[data-prop="${propertyFilter}"]`)
    if (propChip) propChip.classList.add('active')
  } else {
    const allChip = document.querySelector(`.chip[data-prop="all"]`)
    if (allChip) allChip.classList.add('active')
  }
  document.querySelectorAll('#meridianFilterChips .chip').forEach(c => c.classList.remove('active'))
  if (meridianFilter !== 'all') {
    const merChip = document.querySelector(`.chip[data-meridian="${meridianFilter}"]`)
    if (merChip) merChip.classList.add('active')
  } else {
    const allMerChip = document.querySelector(`.chip[data-meridian="all"]`)
    if (allMerChip) allMerChip.classList.add('active')
  }
  showView('viewFoodSearch')
  renderFoodList(currentFilter)
}

// ============ RECIPES BROWSE ============
function filterRecipes(consti) {
  recipeFilter = consti
  document.querySelectorAll('#recipeConstiChips .chip').forEach(c => c.classList.remove('active'))
  document.querySelector(`.chip[data-consti="${consti}"]`).classList.add('active')
  renderRecipeView()
}

function renderRecipeView() {
  const container = document.getElementById('recipeResults')
  if (!container) return

  // Generate chips if empty
  const chipsContainer = document.getElementById('recipeConstiChips')
  if (chipsContainer && !chipsContainer.hasChildNodes()) {
    chipsContainer.innerHTML = `<div class="chip active" data-consti="all" onclick="filterRecipes('all')">全部</div>
      ${CONSTITUTIONS.map(c => `<div class="chip" data-consti="${c.id}" onclick="filterRecipes('${c.id}')">${c.emoji} ${c.name}</div>`).join('')}`
  }

  const query = (document.getElementById('recipeSearchInput').value || '').trim().toLowerCase()
  let recipes = Object.entries(RECIPES)

  // Filter by constitution
  if (recipeFilter !== 'all') {
    recipes = recipes.filter(([name]) => (recipeConstiIndex[name] || []).includes(recipeFilter))
  }

  // Filter by search query
  if (query) {
    recipes = recipes.filter(([name]) => name.toLowerCase().includes(query))
  }

  if (recipes.length === 0) {
    container.innerHTML = '<div class="empty-state"><span class="empty-icon">🍳</span><p>暂无匹配食谱</p></div>'
    return
  }

  const favs = getFavorites()
  container.innerHTML = recipes.map(([name, recipe]) => {
    const constiTags = (recipeConstiIndex[name] || []).map(cId => {
      const c = getConstitutionById(cId)
      return c ? `<span style="background:var(--surface);border:1px solid var(--border);padding:2px 8px;border-radius:10px;font-size:10px;color:var(--text-muted);">${c.emoji} ${c.name}</span>` : ''
    }).join('')
    const isFav = favs.recipes.includes(name)
    return `
      <div class="recipe-card" style="margin-bottom:10px;cursor:pointer;" data-recipe="${name}">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div class="recipe-name" style="font-size:15px;">🍲 ${name}</div>
          <span class="recipe-fav-btn" data-recipe="${name}" style="cursor:pointer;font-size:18px;color:${isFav ? 'var(--warm)' : 'var(--text-muted)'};">${isFav ? '★' : '☆'}</span>
        </div>
        <div class="recipe-effect" style="font-size:12px;">${recipe.effect || ''}</div>
        <div style="display:flex;gap:4px;margin-top:6px;flex-wrap:wrap;">${constiTags}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">${recipe.ingredients.length}种食材 · ${recipe.steps.length}步</div>
      </div>
    `
  }).join('')
}

// Event delegation for recipe cards
document.addEventListener('click', function(e) {
  const favBtn = e.target.closest('.recipe-fav-btn[data-recipe]')
  if (favBtn) {
    toggleRecipeFavorite(favBtn.dataset.recipe)
    return
  }
  const closeBtn = e.target.closest('.recipe-close-btn')
  if (closeBtn) {
    closeBtn.parentElement.parentElement.parentElement.remove()
    return
  }
  const card = e.target.closest('.recipe-card[data-recipe]')
  if (card) {
    showRecipeDetail(card.dataset.recipe)
    return
  }
  const foodStar = e.target.closest('.food-star[data-name]')
  if (foodStar) {
    toggleFoodFavorite(foodStar.dataset.name)
    return
  }
  const recipeStar = e.target.closest('.recipe-star[data-name]')
  if (recipeStar) {
    toggleRecipeFavorite(recipeStar.dataset.name)
    return
  }
})

function clearBodyData() {
  if (!confirm('确定要清除所有身体数据吗？')) return
  localStorage.removeItem('bodyInfo')
  userBodyInfo = null
  const badge = document.getElementById('currentConstiBadge')
  if (badge) badge.innerHTML = ''
  saveAppState()
}

function showRecipeDetail(name) {
  const recipe = RECIPES[name]
  if (!recipe) return
  const overlay = document.createElement('div')
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px;'
  overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
  const favs = getFavorites()
  const isFav = favs.recipes.includes(name)
  overlay.innerHTML = `
    <div style="background:var(--bg-card);border-radius:var(--radius);border:1px solid var(--border);padding:20px;max-width:380px;width:100%;max-height:80vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:18px;font-weight:700;">🍲 ${name}</div>
        <div style="display:flex;gap:8px;">
          <span class="recipe-fav-btn" data-recipe="${name}" style="cursor:pointer;font-size:22px;color:${isFav ? 'var(--warm)' : 'var(--text-muted)'};">${isFav ? '★' : '☆'}</span>
          <span class="recipe-close-btn" style="cursor:pointer;font-size:22px;color:var(--text-muted);">✕</span>
        </div>
      </div>
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.6;">
        <strong>食材：</strong>${recipe.ingredients.join('、')}
      </div>
      <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.7;">
        <strong>做法：</strong>
        <ol style="padding-left:18px;margin-top:4px;">
          ${recipe.steps.map(s => `<li style="margin-bottom:4px;">${s}</li>`).join('')}
        </ol>
      </div>
      <button class="btn btn-sm" style="background:var(--surface);color:var(--primary);border:1px solid var(--border-light);" onclick="copyShoppingList('${name}')">📋 复制购物清单</button>
    </div>
  `
  document.body.appendChild(overlay)
}

function renderStoriesView() {
  const container = document.getElementById('storiesList')
  if (!container) return
  if (typeof HERB_STORIES === 'undefined') {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px;">数据加载中...</p>'
    return
  }
  container.innerHTML = HERB_STORIES.map(s => `
    <div class="story-card" onclick="showStoryDetail(${s.id})">
      <div class="story-herb">${s.herb}</div>
      <div class="story-title">${s.title}</div>
      <div class="story-summary">${s.summary}</div>
      <div class="story-source">📖 ${s.source}</div>
    </div>
  `).join('')
}

function showStoryDetail(id) {
  const s = HERB_STORIES.find(x => x.id === id)
  if (!s) return
  const overlay = document.createElement('div')
  overlay.className = 'result-reveal-overlay'
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.75);z-index:999;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto;'
  overlay.onclick = e => { if (e.target === overlay) overlay.remove() }
  const closeBtn = `<span onclick="this.parentElement.parentElement.parentElement.remove()" style="cursor:pointer;font-size:22px;color:var(--text-muted);">✕</span>`
  overlay.innerHTML = `
    <div style="background:var(--bg-card);border-radius:var(--radius);border:1px solid var(--border);padding:24px;max-width:600px;width:100%;max-height:85vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:18px;font-weight:700;">📜 ${s.herb} · ${s.title}</div>
        ${closeBtn}
      </div>
      <div style="font-size:12px;color:var(--accent);margin-bottom:12px;">${s.source}</div>
      <div style="font-size:14px;color:var(--text-secondary);line-height:1.9;white-space:pre-wrap;margin-bottom:16px;">${s.story}</div>
      <div style="background:rgba(76,175,80,0.06);border:1px solid rgba(76,175,80,0.15);border-radius:var(--radius-sm);padding:14px;margin-bottom:12px;">
        <div style="font-size:12px;color:var(--primary);font-weight:600;margin-bottom:6px;">💡 养生启示</div>
        <div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">${s.lesson}</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        ${s.relatedHerbs.map(h => `<span style="background:var(--surface);border:1px solid var(--border);padding:4px 12px;border-radius:12px;font-size:12px;color:var(--text-muted);">🌿 ${h}</span>`).join('')}
      </div>
    </div>
  `
  document.body.appendChild(overlay)
}

document.addEventListener('DOMContentLoaded', init)
