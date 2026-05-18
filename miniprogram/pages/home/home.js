const app = getApp()
const { CONSTITUTIONS, getConstitutionById } = require('../../common/data_full')

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

const POETRY_DATA = {
  '立春': {
    poem: '春风如贵客，一到便繁华。\n来扫千山雪，归留万国花。',
    author: '清·袁枚《春风》',
    story: '立春乃二十四节气之首，标志着万物复苏之始。古人在这一天举行"迎春"仪式，祭祀春神句芒，祈求风调雨顺、农业丰收。此诗描绘春风如贵客降临，所到之处一片繁华热闹的景象。',
    tip: '宜早睡早起，顺应春生之气，多食辛甘发散之品。'
  },
  '雨水': {
    poem: '好雨知时节，当春乃发生。\n随风潜入夜，润物细无声。',
    author: '唐·杜甫《春夜喜雨》',
    story: '雨水节气表示降水开始增多，气温回升较快。此时冬雪消融，春雨降临大地，万物开始萌动。古人认为雨水节气降雨是吉兆，有"春雨贵如油"之说。',
    tip: '宜养肝护脾，多食山药、红枣等健脾食物。'
  },
  '惊蛰': {
    poem: '微雨众卉新，一雷惊蛰始。\n田家几日闲，耕种从此起。',
    author: '唐·韦应物《观田家》',
    story: '惊蛰标志着仲春时节的开始，春雷始鸣，惊醒蛰伏于地下冬眠的昆虫。古人认为雷声能驱除邪祟，故有惊蛰打雷的习俗。此时春耕开始，农忙时节到来。',
    tip: '宜保肝护阳，多食菠菜、荠菜等时令蔬菜。'
  },
  '春分': {
    poem: '春分雨脚落声微，柳岸斜风带客归。\n时令北方偏向晚，可知早有绿腰肥。',
    author: '宋·徐铉《七绝》',
    story: '春分这一天，太阳直射赤道，昼夜平分，故称"春分"。春分时节，草长莺飞、百花争艳，古人有竖蛋、吃春菜、送春牛等习俗，以庆祝春天的到来。',
    tip: '宜平衡阴阳，多食时令野菜。'
  },
  '清明': {
    poem: '清明时节雨纷纷，路上行人欲断魂。\n借问酒家何处有，牧童遥指杏花村。',
    author: '唐·杜牧《清明》',
    story: '清明既是节气也是节日，是祭祖和扫墓的日子。此时气候转暖，春光明媚，大自然呈现一派生机勃勃的景象。古人在这一天踏青、插柳、荡秋千，享受春日的美好时光。',
    tip: '宜疏肝理气，保持心情舒畅。'
  },
  '谷雨': {
    poem: '谷雨如丝复似尘，煮瓶浮蜡正尝新。\n牡丹破萼樱桃熟，未许飞花减却春。',
    author: '宋·范成大《晚春田园杂兴》',
    story: '谷雨是春季最后一个节气，有"雨生百谷"之意。此时降雨增多，正适合谷物生长。谷雨时节，牡丹盛开、樱桃成熟，古人有喝谷雨茶、赏牡丹的习俗。',
    tip: '宜祛湿健脾，多食薏米、冬瓜等食物。'
  },
  '立夏': {
    poem: '四月清和雨乍晴，南山当户转分明。\n更无柳絮因风起，惟有葵花向日倾。',
    author: '宋·司马光《客中初夏》',
    story: '立夏表示告别春天，夏天正式开始。此时气温显著升高，雷雨增多，农作物进入旺季生长阶段。古人在立夏这天称人、吃立夏饭，以祈求身体健康、消暑度夏。',
    tip: '宜养心安神，多食莲子、小麦等食物。'
  },
  '小满': {
    poem: '小满动三车，忙得不曾闲。\n水车灌田，油车榨油，丝车缫丝。',
    author: '宋·陆游《村景》',
    story: '小满节气，北方夏熟作物子粒开始饱满，但还未完全成熟，故称"小满"。此时降雨增多，江河渐满。农村进入农忙时节，要做好灌溉、防洪、收割的准备工作。',
    tip: '宜清热利湿，多食苦菜、赤小豆等食物。'
  },
  '芒种': {
    poem: '时雨及芒种，四野皆插秧。\n家家麦饭美，处处菱歌长。',
    author: '宋·陆游《时雨》',
    story: '芒种是一个农事忙碌的节气，有芒的麦子快收，有芒的稻子可种，故称"芒种"。此时长江中下游地区进入梅雨季节，天气潮湿闷热。',
    tip: '宜清淡解暑，多食绿豆、西瓜等食物。'
  },
  '夏至': {
    poem: '昼晷已云极，宵漏自此长。\n未及施政教，所忧变炎凉。',
    author: '唐·韦应物《夏至避暑北池》',
    story: '夏至是一年中白昼最长的一天，阳光直射北回归线。古人在夏至有祭神祀祖的习俗，以感谢天地的恩赐。夏至后气温继续升高进入伏天。',
    tip: '宜清热消暑，多食西瓜、绿豆汤等。'
  },
  '小暑': {
    poem: '倏忽温风至，因循小暑来。\n竹喧先觉雨，山暗已闻雷。',
    author: '唐·元稹《小暑六月节》',
    story: '小暑表示炎热天气开始，但还未到最热的时候。此时正值初伏前后，天气开始真正炎热，但还有些许凉风。古人在小暑有晒书画、吃藕的习俗。',
    tip: '宜解暑生津，多食西瓜、黄瓜等食物。'
  },
  '大暑': {
    poem: '赤日几时过，清风无处寻。\n经书聊枕籍，瓜李漫浮沉。',
    author: '宋·曾几《大暑》',
    story: '大暑是一年中最热的节气，正值中伏前后。此时农作物生长最快，但人也最难熬。古人在大暑有喝伏茶、烧伏香、吃羊肉等习俗，以驱散暑气。',
    tip: '宜防暑降温，多食绿豆汤、西瓜等。'
  },
  '立秋': {
    poem: '乳鸦啼散玉屏空，一枕新凉一扇风。\n睡起秋色无觅处，满阶梧桐月明中。',
    author: '宋·刘翰《立秋》',
    story: '立秋是秋季的开始，万物开始从繁茂成长趋向萧瑟成熟。古人在立秋有啃秋、贴秋膘的习俗，通过食用肉食来弥补夏日的消耗。',
    tip: '宜润燥养肺，多食银耳、梨等食物。'
  },
  '处暑': {
    poem: '处暑无三日，新凉直万金。\n白头更世事，青草印禅心。',
    author: '宋·苏泂《长江二首》',
    story: '处暑表示炎热天气结束，暑气至此而止。此时早晚温差开始增大，民间有出游迎秋、放河灯等习俗。处暑时节鸭子正肥，是进补的好时节。',
    tip: '宜滋阴润燥，多食鸭子、百合等食物。'
  },
  '白露': {
    poem: '蒹葭苍苍，白露为霜。\n所谓伊人，在水一方。',
    author: '诗经·秦风《蒹葭》',
    story: '白露时节，天气转凉，夜间空气中的水汽凝结成露。古人认为露水有养生功效，常采集露水煮茶或入药。白露也是鸿雁南飞、燕子北归的时节。',
    tip: '宜养肺润燥，多食龙眼、梨等食物。'
  },
  '秋分': {
    poem: '金气秋分，风清露冷秋期半。\n桂子香浓，月明花好人长久。',
    author: '宋·谢逸《点绛唇》',
    story: '秋分这一天，昼夜平分，阴阳相半。秋分曾是传统的祭月节，后来演变为中秋节。此时秋高气爽，桂花飘香，蟹肥菊黄，正是品尝美食的好时节。',
    tip: '宜平衡阴阳，多食螃蟹、桂花等食物。'
  },
  '寒露': {
    poem: '袅袅凉风动，凄凄寒露零。\n兰衰花始白，荷破叶犹青。',
    author: '唐·白居易《池上》',
    story: '寒露表示气温比白露更低，露水快要凝结成霜了。此时北方已呈深秋景象，南方也秋意渐浓。寒露时节有赏枫叶、饮秋茶的习俗。',
    tip: '宜养阴润燥，多食芝麻、蜂蜜等食物。'
  },
  '霜降': {
    poem: '霜降水返壑，风落木归山。\n冉冉岁将宴，物皆复本源。',
    author: '唐·白居易《岁晚》',
    story: '霜降是秋季最后一个节气，意味着冬天即将到来。此时天气渐冷，开始出现霜冻。古人在霜降有登高远眺、吃柿子的习俗，以祈求平安健康。',
    tip: '宜平补肝肾，多食柿子、栗子等食物。'
  },
  '立冬': {
    poem: '冻笔新诗懒写，寒炉美酒时温。\n醉看墨花月白，恍疑雪满前村。',
    author: '唐·李白《立冬》',
    story: '立冬表示冬季正式开始，万物收藏、规避寒冷。古人在立冬有吃饺子、吃羊肉的习俗，以食补抵御严寒。立冬还有祭祀祖先、祈求平安的仪式。',
    tip: '宜温补肾阳，多食羊肉、核桃等食物。'
  },
  '小雪': {
    poem: '小雪已晴芦叶暗，长门股价萤衣干。\n日移白果峰头树，犹似将军射腹间。',
    author: '宋·苏辙《闲居》',
    story: '小雪节气表示开始下雪，但雪量不大。此时天气干燥，腌制腊肉正当时。古人有"小雪腌菜，大雪腌肉"的习俗，为过冬储备食物。',
    tip: '宜温补肾阳，多食黑豆、乌鸡等食物。'
  },
  '大雪': {
    poem: '大雪江南见未曾，今年方始是严凝。\n巧穿帘罅如相觅，重压林梢欲不胜。',
    author: '宋·陆游《大雪》',
    story: '大雪节气表示雪量增多，天气更冷。此时北方千里冰封、万里雪飘，南方也进入隆冬时节。古人在大雪有进补的习惯，讲究"冬天进补，开春打虎"。',
    tip: '宜温补肾精，多食羊肉、桂圆等食物。'
  },
  '冬至': {
    poem: '冬至阳生春又来，天时人事日相催。\n冬至馄饨夏至面，北方共吃饺子。',
    author: '唐·杜甫《冬至》',
    story: '冬至是一年中黑夜最长、白昼最短的一天，古人认为这是阴阳交替的关键时刻。冬至有北方吃饺子、南方吃汤圆的习俗，以祈求团圆和美好。',
    tip: '宜温补肾气，多食饺子、羊肉等食物。'
  },
  '小寒': {
    poem: '小寒连大吕，欢鹊垒新巢。\n拾食寻河曲，衔紫遶林梢。',
    author: '唐·元稹《咏廿四气诗》',
    story: '小寒表示进入一年中最冷的时候，但还未达到最冷。古人在小寒有探梅、腊祭的习俗。此时正值三九寒天，要注意防寒保暖。',
    tip: '宜温补肾阳，多食羊肉、红枣等食物。'
  },
  '大寒': {
    poem: '大寒须守火，无事莫出门。\n待得春风至，还同腊酒温。',
    author: '宋·苏辙《大寒》',
    story: '大寒是二十四节气中的最后一个节气，也是一年中最寒冷的时期。此时正值四九寒天，滴水成冰。古人在大寒有除尘、贴窗花、准备年货的习俗，迎接新年的到来。大寒之后便是立春，预示着新的轮回即将开始。',
    tip: '宜温补肾阳，多食羊肉、核桃、当归等食物，为春季升发蓄力。'
  }
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
    const poetry = POETRY_DATA[cur.name] || null
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