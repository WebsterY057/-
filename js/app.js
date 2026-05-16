let currentResult = null
let currentQuiz = 0
let quizAnswers = []
let currentFilter = 'all'
let currentResultTab = 'suitable'
let currentConstitutionId = null
let userBodyInfo = null
let quizScores = null
let selectedMonth = null

function init() {
  loadBodyInfo()
  restoreAppState()
  renderConstiList()
  renderSeasonView()
  renderMiniSeasonBanner()
  updateTabBar()
  renderHomeGreeting()
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
      currentTheme: document.documentElement.getAttribute('data-theme') || ''
    }
    localStorage.setItem('appState', JSON.stringify(state))
  } catch (e) {}
}

function renderMiniSeasonBanner() {
  const rec = getTodayRecommendation()
  const el = document.getElementById('homeSeasonBanner')
  if (el) el.innerHTML = `🌸 ${rec.season} · ${rec.principle}`
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
    viewHome: 'AI中医 · 健康养生',
    viewQuiz: '中医体质辨识',
    viewBodyInfo: '填写身体信息',
    viewResult: '体质分析报告',
    viewFoodSearch: '药食同源食材库',
    viewSeason: '应季食疗推荐',
    viewProfile: '个人中心',
    viewWorkout: '运动营养方案'
  }
  const headerTitles = {
    viewHome: '🌿 体质营养',
    viewQuiz: '🧬 体质测试',
    viewBodyInfo: '📏 身体信息',
    viewResult: '📊 分析报告',
    viewFoodSearch: '🔍 食材查询',
    viewSeason: '📅 时令养生',
    viewProfile: '👤 个人中心',
    viewWorkout: '🏃 运动营养'
  }
  const sub = document.getElementById('headerSub')
  const title = document.getElementById('appTitle')
  if (headerSubtitles[viewId]) sub.textContent = headerSubtitles[viewId]
  else sub.textContent = 'AI中医 · 健康养生'
  if (headerTitles[viewId]) title.textContent = headerTitles[viewId]
  else title.textContent = '🌿 体质营养'
}

function updateTabBar() {
  const activeView = document.querySelector('.view.active')
  if (!activeView) return
  const viewId = activeView.id
  const tabMap = {
    viewHome: 'viewHome', viewQuiz: 'viewQuiz', viewBodyInfo: 'viewQuiz',
    viewFoodSearch: 'viewFoodSearch',
    viewProfile: 'viewProfile', viewResult: 'viewHome',
    viewSeason: 'viewHome', viewWorkout: 'viewHome'
  }
  const mapped = tabMap[viewId] || 'viewHome'
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  const match = document.querySelector(`.tab-item[data-view="${mapped}"]`)
  if (match) match.classList.add('active')
}

function switchTab(viewId, btn) {
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  btn.classList.add('active')
  showView(viewId)
  if (viewId === 'viewSeason') renderSeasonView(selectedMonth || undefined)
  if (viewId === 'viewFoodSearch') {
    if (currentResult) {
      currentFilter = 'suitable'
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
      document.querySelector('.chip[data-filter="suitable"]').classList.add('active')
    }
    renderFoodList(currentFilter)
  }
  if (viewId === 'viewProfile') renderProfileView()
}

// ============ HOME ============
function renderHomeGreeting() {
  document.getElementById('homeAvatar').textContent = '🌿'
  document.getElementById('homeGreeting').textContent = '今天也要好好吃饭'
  document.getElementById('homeSub').textContent = 'AI体质辨识 + 中医食疗，科学健康养生'
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
    showBodyInfoForm()
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
}

function renderScoreBreakdown() {
  const container = document.getElementById('scoreBreakdown')
  if (!container) return
  if (!currentResult || !currentResult.scores) {
    container.innerHTML = ''
    return
  }

  let scoreHTML = `
    <div class="card">
      <div class="card-title">📊 体质倾向评分</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">分值越高，体质倾向越明显</div>
  `

  currentResult.scores.slice(0, 5).forEach(([id, score]) => {
    const pc = Math.min(100, Math.max(0, (score + 4) / 8 * 100))
    const consti = getConstitutionById(id)
    scoreHTML += `
      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px;">
          <span style="color:var(--text-secondary);">${consti.emoji} ${consti.name}</span>
          <span style="color:${pc > 50 ? 'var(--primary)' : 'var(--text-muted)'};">${score > 0 ? '+' : ''}${score}</span>
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
          ${c.recommendFoods.slice(0, 3).map(f => `
            <div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;display:flex;align-items:center;gap:8px;">
              <span style="color:var(--primary);">▸</span>
              <span style="color:var(--text-secondary);">${f}</span>
              <span style="color:var(--text-muted);font-size:12px;margin-left:auto;">适合${c.name}</span>
            </div>
          `).join('')}
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

  const results = FOOD_DATABASE.filter(f => f.name.includes(query))
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

  return `
    <div class="food-result-card">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div class="food-name">${f.name}</div>
        ${suitability}
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
    </div>
  `
}

function filterFoods(filter) {
  currentFilter = filter
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
  document.querySelector(`.chip[data-filter="${filter}"]`).classList.add('active')
  renderFoodList(filter)
  saveAppState()
}

function renderFoodList(filter) {
  let filtered = [...FOOD_DATABASE]
  if (currentResult && filter === 'suitable') {
    filtered = FOOD_DATABASE.filter(f => f.suitable.includes(currentResult.id))
  } else if (currentResult && filter === 'avoid') {
    filtered = FOOD_DATABASE.filter(f => f.avoid.includes(currentResult.id))
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
  content.innerHTML = `
    <div class="recipe-card">
      <div class="recipe-name">🍲 ${rec.recipe.name}</div>
      <div class="recipe-effect">${rec.recipe.effect}</div>
      <div class="recipe-ingredients">
        <strong>食材：</strong><br>
        ${rec.recipe.ingredients.map(i => `· ${i}<br>`).join('')}
      </div>
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
  document.getElementById('profileAvatar').textContent = '🌿'
  document.getElementById('profileName').textContent = '养生用户'
  let info = 'AI中医营养师'
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
  const root = document.documentElement
  const current = root.getAttribute('data-theme') || ''
  if (current === 'light') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', 'light')
  }
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
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
    document.querySelector('.chip[data-filter="suitable"]').classList.add('active')
  }
  showView('viewFoodSearch')
  renderFoodList(currentFilter)
}

function clearBodyData() {
  if (!confirm('确定要清除所有身体数据吗？')) return
  localStorage.removeItem('bodyInfo')
  userBodyInfo = null
  const badge = document.getElementById('currentConstiBadge')
  if (badge) badge.innerHTML = ''
  saveAppState()
}

document.addEventListener('DOMContentLoaded', init)
