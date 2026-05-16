let currentResult = null
let currentQuiz = 0
let quizAnswers = []
let currentFilter = 'all'
let currentResultTab = 'suitable'
let currentConstitutionId = null

function init() {
  renderConstiList()
  renderSeasonView()
  updateTabBar()
  renderHomeGreeting()
}

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'))
  document.getElementById(viewId).classList.add('active')

  const headerSubtitles = {
    viewHome: 'AI中医 · 科学健身饮食',
    viewQuiz: '中医体质辨识',
    viewResult: '体质分析报告',
    viewFoodSearch: '药食同源食材库',
    viewSeason: '应季食疗推荐',
    viewProfile: '个人中心',
    viewWorkout: '健身场景饮食'
  }
  const headerTitles = {
    viewHome: '🏋️ 体质营养',
    viewQuiz: '🧬 体质测试',
    viewResult: '📊 分析报告',
    viewFoodSearch: '🔍 食材查询',
    viewSeason: '📅 时令养生',
    viewProfile: '👤 个人中心',
    viewWorkout: '💪 健身饮食'
  }
  const sub = document.getElementById('headerSub')
  const title = document.getElementById('appTitle')
  if (headerSubtitles[viewId]) sub.textContent = headerSubtitles[viewId]
  else sub.textContent = 'AI中医 · 科学健身饮食'
  if (headerTitles[viewId]) title.textContent = headerTitles[viewId]
  else title.textContent = '🏋️ 体质营养'
}

function updateTabBar() {
  const activeView = document.querySelector('.view.active')
  if (!activeView) return
  const viewId = activeView.id
  const tabMap = {
    viewHome: 'viewHome', viewQuiz: 'viewQuiz', viewFoodSearch: 'viewFoodSearch',
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
  if (viewId === 'viewSeason') renderSeasonView()
  if (viewId === 'viewFoodSearch') renderFoodList(currentFilter)
  if (viewId === 'viewProfile') renderProfileView()
}

// ============ HOME ============
function renderHomeGreeting() {
  document.getElementById('homeAvatar').textContent = '💪'
  document.getElementById('homeGreeting').textContent = '今天也要好好吃饭'
  document.getElementById('homeSub').textContent = 'AI体质辨识 + 中医食疗 × 运动营养'
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
  showView('viewResult')

  const c = getConstitutionById(id)
  document.getElementById('resultEmoji').textContent = c.emoji
  document.getElementById('resultName').textContent = c.name
  document.getElementById('resultDesc').textContent = c.description

  currentResult = { id: c.id, name: c.name }
  currentResultTab = 'suitable'
  document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
  document.querySelector('.result-tab[data-tab="suitable"]').classList.add('active')

  renderResultContent('suitable')
  updateTabBar()
}

// ============ QUIZ ============
function startQuiz() {
  currentQuiz = 0
  quizAnswers = CONSTITUTION_QUESTIONS.map(() => null)
  showView('viewQuiz')
  renderQuestion()
  updateTabBar()
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
  document.getElementById('quizNextBtn').textContent = currentQuiz === total - 1 ? '查看结果' : '下一题'
  document.getElementById('quizNextBtn').disabled = selectedIdx === null && currentQuiz < total - 1
}

function selectOption(idx) {
  quizAnswers[currentQuiz] = idx
  renderQuestion()
}

function nextQuestion() {
  if (currentQuiz === CONSTITUTION_QUESTIONS.length - 1) {
    finishQuiz()
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
  const resultId = calculateResult(scores)
  showConstitution(resultId)
}

// ============ RESULT TABS ============
function switchResultTab(tab) {
  currentResultTab = tab
  document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'))
  document.querySelector(`.result-tab[data-tab="${tab}"]`).classList.add('active')
  renderResultContent(tab)
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
          <div class="card-title">❌ 忌食或少食</div>
          <ul class="food-list">
            ${c.avoid.map(f => `<li><span class="dot dot-red"></span>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="card" style="background:rgba(255,69,58,0.05);border-color:rgba(255,69,58,0.15);">
          <div class="card-title" style="color:#FF453A;">💡 小贴士</div>
          <p style="font-size:13px;color:var(--text-secondary);">"忌食"不代表完全不能吃，偶尔少量食用并无大碍，关键在于适度。</p>
        </div>
      `
      break
    case 'recipe':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">🍳 推荐食疗方案</div>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;">${c.principle}</p>
          ${c.recommendFoods.slice(0, 3).map(f => `
            <div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;display:flex;align-items:center;gap:8px;">
              <span style="color:var(--gold);">▸</span>
              <span style="color:var(--text-secondary);">${f}</span>
              <span style="color:var(--text-muted);font-size:12px;margin-left:auto;">适合${c.name}</span>
            </div>
          `).join('')}
        </div>
      `
      break
    case 'info':
      container.innerHTML = `
        <div class="card">
          <div class="card-title">📖 调养原则</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.principle}</p>
        </div>
        <div class="card">
          <div class="card-title">🧑 体质特征</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.character}</p>
        </div>
        <div class="card">
          <div class="card-title">📅 季节调养</div>
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${c.seasonTip}</p>
        </div>
      `
      break
    case 'fitness': {
      container.innerHTML = `
        <div class="card">
          <div class="card-title">💪 ${currentResult.name} · 健身饮食建议</div>
          ${FITNESS_WORKOUTS.map(w => `
            <div class="workout-card">
              <div class="wc-type">🏋️ ${w.type}</div>
              <div class="wc-tip">${w.tip}</div>
              <div class="wc-foods">
                ${w.foods.map(f => `<span>${f}</span>`).join('')}
              </div>
            </div>
          `).join('')}
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
      suitability = '<span style="color:#FF453A;font-size:12px;font-weight:600;">❌ 忌食</span>'
    } else {
      suitability = '<span style="color:var(--text-muted);font-size:12px;">◻️ 适量</span>'
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
      <div class="food-detail-row"><span class="label">功效</span><span class="value">${f.effect}</span></div>
      <div class="food-detail-row"><span class="label">适合</span><span class="value">${f.suitable.map(id => getConstitutionById(id).name).join('、') || '一般人群'}</span></div>
      ${f.avoid.length ? `<div class="food-detail-row"><span class="label">慎食</span><span class="value">${f.avoid.map(id => getConstitutionById(id).name).join('、')}</span></div>` : ''}
      ${f.suggestion ? `<div class="food-detail-row"><span class="label">建议</span><span class="value">${f.suggestion}</span></div>` : ''}
    </div>
  `
}

function filterFoods(filter) {
  currentFilter = filter
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
  document.querySelector(`.chip[data-filter="${filter}"]`).classList.add('active')
  renderFoodList(filter)
}

function renderFoodList(filter) {
  let filtered = [...FOOD_DATABASE]
  if (currentResult && filter === 'suitable') {
    filtered = FOOD_DATABASE.filter(f => f.suitable.includes(currentResult.id))
  } else if (currentResult && filter === 'avoid') {
    filtered = FOOD_DATABASE.filter(f => f.avoid.includes(currentResult.id))
  }

  const container = document.getElementById('foodResults')
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📭</span>
        <p>暂无匹配结果</p>
      </div>`
    return
  }
  container.innerHTML = filtered.map(f => renderFoodCard(f)).join('')
}

// ============ SEASON ============
function renderSeasonView() {
  const rec = getTodayRecommendation()
  const banner = document.getElementById('seasonBanner')
  banner.innerHTML = `
    <div class="season-title">🌸 ${rec.season}养生</div>
    <div class="season-sub">${rec.principle}</div>
    <div class="season-tip">${rec.tip}</div>
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
}

// ============ PROFILE ============
function renderProfileView() {
  document.getElementById('profileAvatar').textContent = '💪'
  document.getElementById('profileName').textContent = '健身用户'
  document.getElementById('profilePhone').textContent = 'AI中医营养师'
}

// ============ WORKOUT NUTRITION ============
function showWorkoutNutrition() {
  showView('viewWorkout')
  updateTabBar()
  renderWorkoutView()
}

function renderWorkoutView() {
  const list = document.getElementById('workoutList')
  const extra = document.getElementById('workoutExtra')

  list.innerHTML = FITNESS_WORKOUTS.map(w => `
    <div class="workout-card">
      <div class="wc-type">🏋️ ${w.type}饮食</div>
      <div class="wc-tip">${w.tip}</div>
      <div class="wc-foods">
        ${w.foods.map(f => `<span>${f}</span>`).join('')}
      </div>
    </div>
  `).join('')

  if (currentResult) {
    const c = getConstitutionById(currentResult.id)
    extra.innerHTML = `
      <div class="card">
        <div class="card-title">🧬 ${c.name} · 健身饮食要点</div>
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;">
          ${c.principle}<br><br>
          推荐食材：${c.suitable.slice(0, 5).join('、')}
        </p>
      </div>
    `
  } else {
    extra.innerHTML = `
      <div class="card" style="text-align:center;">
        <div class="card-title">🧬 先测体质，再定方案</div>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;">不同体质适合不同的健身饮食策略</p>
        <button class="btn btn-primary btn-sm" onclick="startQuiz()">开始体质测试</button>
      </div>
    `
  }
}

// ============ NAVIGATION HELPERS ============
function goToFoodSearch() {
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'))
  document.querySelector('.tab-item[data-view="viewFoodSearch"]').classList.add('active')
  showView('viewFoodSearch')
  renderFoodList(currentFilter)
}

document.addEventListener('DOMContentLoaded', init)
