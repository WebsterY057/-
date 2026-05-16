const CONSTITUTIONS = [
  {
    id: 'pinghe',
    name: '平和质',
    emoji: '☯️',
    description: '阴阳气血调和，体态适中，面色红润，精力充沛。',
    character: '体型匀称健壮，面色润泽，头发稠密有光，性格开朗随和。',
    principle: '平补阴阳，调和气血，保持现有平衡状态。',
    suitable: ['大多数食材均可适量食用', '山药', '小米', '红枣', '枸杞', '黑芝麻', '核桃'],
    avoid: ['过量辛辣刺激食物', '过量寒凉生冷食物', '过量肥甘厚味'],
    recommendFoods: ['山药粥', '红枣枸杞茶', '小米南瓜粥', '清蒸鱼', '杂粮饭'],
    seasonTip: '春季养肝，夏季清心，秋季润肺，冬季补肾。顺应四时调养。',
    color: '#4CAF50'
  },
  {
    id: 'qixu',
    name: '气虚质',
    emoji: '💨',
    description: '元气不足，疲乏气短，自汗，语音低怯。',
    character: '肌肉松软不实，精神不振，易出汗，舌淡红胖大，边有齿痕。',
    principle: '补气健脾，培补元气。',
    suitable: ['黄芪', '党参', '山药', '红枣', '莲子', '糯米', '鸡肉', '牛肉', '鲫鱼', '土豆'],
    avoid: ['萝卜（过量）', '浓茶', '咖啡', '槟榔', '生冷瓜果', '苦瓜', '绿豆'],
    recommendFoods: ['黄芪炖鸡汤', '山药排骨汤', '红枣糯米粥', '党参炖肉', '四君子汤'],
    seasonTip: '春季风大易耗气，注意固表防风；夏季避暑防汗多伤气。',
    color: '#FF9800'
  },
  {
    id: 'yangxu',
    name: '阳虚质',
    emoji: '❄️',
    description: '阳气不足，畏寒怕冷，手足不温，喜热饮食。',
    character: '肌肉松软，怕冷，手脚发凉，精神不振，大便稀溏。',
    principle: '温阳补肾，益火之源。',
    suitable: ['羊肉', '韭菜', '生姜', '肉桂', '核桃', '荔枝', '龙眼', '虾', '小茴香', '牛鞭'],
    avoid: ['西瓜', '梨', '苦瓜', '冬瓜', '绿豆', '螃蟹', '田螺', '绿茶', '冰淇淋'],
    recommendFoods: ['当归生姜羊肉汤', '韭菜炒核桃', '肉桂红糖茶', '姜枣茶', '核桃粥'],
    seasonTip: '春夏养阳，三伏天是温补最佳时机。冬季注意保暖防寒。',
    color: '#2196F3'
  },
  {
    id: 'yinxu',
    name: '阴虚质',
    emoji: '🔥',
    description: '阴液亏少，口燥咽干，手足心热，盗汗。',
    character: '体形偏瘦，口鼻咽喉干燥，喜冷饮，大便干燥，舌红少津。',
    principle: '滋阴降火，滋补肝肾。',
    suitable: ['银耳', '百合', '梨', '蜂蜜', '鸭肉', '甲鱼', '黑芝麻', '枸杞', '桑葚', '石斛'],
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '葱蒜', '韭菜', '荔枝', '龙眼', '煎炸食物'],
    recommendFoods: ['银耳莲子羹', '百合雪梨汤', '枸杞菊花茶', '石斛炖鸭', '黑芝麻糊'],
    seasonTip: '秋冬养阴，秋季最宜滋阴润燥。夏季避暑防汗多伤阴。',
    color: '#9C27B0'
  },
  {
    id: 'tanshi',
    name: '痰湿质',
    emoji: '💧',
    description: '痰湿凝聚，形体肥胖，腹部肥满，口黏苔腻。',
    character: '体形肥胖，腹部肥满松软，面部皮肤油脂较多，多汗且黏。',
    principle: '健脾化痰，利湿渗湿。',
    suitable: ['薏米', '赤小豆', '冬瓜', '白萝卜', '海带', '茯苓', '陈皮', '荷叶', '山楂', '鲫鱼'],
    avoid: ['肥肉', '油炸食品', '甜腻点心', '糯米饭', '奶油', '芝士', '冰淇淋', '啤酒'],
    recommendFoods: ['薏米赤小豆汤', '冬瓜海带汤', '陈皮普洱茶', '白萝卜炖排骨', '荷叶粥'],
    seasonTip: '长夏（三伏）是祛湿最佳时节。避免潮湿环境，多运动出汗。',
    color: '#795548'
  },
  {
    id: 'shire',
    name: '湿热质',
    emoji: '☀️',
    description: '湿热内蕴，面垢油光，口苦口干，身重困倦。',
    character: '面垢油光，易生痤疮，口苦口干，大便黏滞不畅，小便短黄。',
    principle: '清热利湿，分消走泄。',
    suitable: ['绿豆', '薏米', '苦瓜', '黄瓜', '冬瓜', '西瓜', '莲藕', '芹菜', '菊花', '金银花'],
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '生姜', '大蒜', '荔枝', '龙眼', '酒类'],
    recommendFoods: ['绿豆薏米汤', '苦瓜炒蛋', '冬瓜排骨汤', '菊花茶', '凉拌黄瓜'],
    seasonTip: '夏季湿热最重，注意清淡饮食。长夏祛湿清热正当时。',
    color: '#FF5722'
  },
  {
    id: 'xueyu',
    name: '血瘀质',
    emoji: '🩸',
    description: '血行不畅，肤色晦暗，舌质紫暗，易生瘀斑。',
    character: '肤色晦暗，色素沉着，口唇暗淡，舌紫暗有瘀点，易脱发。',
    principle: '活血化瘀，疏通经络。',
    suitable: ['山楂', '黑豆', '洋葱', '大蒜', '生姜', '醋', '红花', '丹参', '桃仁', '木耳'],
    avoid: ['肥肉', '奶油', '油炸食品', '冰淇淋', '冷饮', '浓茶', '咖啡'],
    recommendFoods: ['山楂红糖水', '黑豆活血粥', '洋葱炒木耳', '丹参炖乌鸡', '醋泡花生'],
    seasonTip: '春季宜疏肝活血，冬季注意保暖防寒凝。适度运动促进气血。',
    color: '#E91E63'
  },
  {
    id: 'qiyu',
    name: '气郁质',
    emoji: '😔',
    description: '气机郁滞，神情抑郁，忧虑脆弱，烦闷不乐。',
    character: '形体偏瘦，性格内向，情绪不稳，敏感多虑，嗳气呃逆。',
    principle: '疏肝理气，解郁安神。',
    suitable: ['玫瑰花', '佛手', '陈皮', '薄荷', '百合', '小麦', '金桔', '山楂', '香蕉', '深海鱼'],
    avoid: ['咖啡', '浓茶', '白酒', '辛辣刺激食物', '过量糖分'],
    recommendFoods: ['玫瑰花茶', '佛手瓜炒肉', '陈皮薄荷茶', '百合莲子羹', '金桔蜂蜜饮'],
    seasonTip: '春季养肝疏气，多接触自然。秋季防悲秋，保持心情愉悦。',
    color: '#607D8B'
  },
  {
    id: 'tebing',
    name: '特禀质',
    emoji: '🤧',
    description: '先天失常，生理缺陷，过敏体质，易发哮喘、风疹。',
    character: '过敏体质者常见哮喘、风团、咽痒、喷嚏；遗传病体质或有先天生理缺陷。',
    principle: '益气固表，调节免疫，避免过敏原。',
    suitable: ['黄芪', '白术', '防风', '山药', '糯米', '红枣', '蜂蜜', '灵芝', '太子参', '南瓜'],
    avoid: ['海鲜（虾蟹等）', '牛肉', '牛奶', '鸡蛋', '花生', '芒果', '菠萝', '酒精', '人工添加剂'],
    recommendFoods: ['黄芪白术炖鸡汤', '山药南瓜粥', '红枣蜂蜜水', '糯米藕', '灵芝炖肉'],
    seasonTip: '春季花粉多注意防护，夏季防湿热引发过敏，换季时注意固表。',
    color: '#00BCD4'
  }
]

const CONSTITUTION_QUESTIONS = [
  {
    id: 1,
    text: '您是否经常感到精力充沛，做事有干劲？',
    options: [
      { text: '是的，精力很好', scores: { pinghe: 2, qixu: -1, yangxu: -1 } },
      { text: '还可以，偶尔疲倦', scores: { qixu: 1, yangxu: 1 } },
      { text: '经常感到疲倦乏力', scores: { qixu: 2, yangxu: 1 } }
    ]
  },
  {
    id: 2,
    text: '您是否容易感到手脚冰凉，怕冷？',
    options: [
      { text: '不会，手脚温暖', scores: { pinghe: 1, yangxu: -2 } },
      { text: '偶尔会冷', scores: { yangxu: 1 } },
      { text: '经常手脚冰凉，很怕冷', scores: { yangxu: 2, xueyu: 1 } }
    ]
  },
  {
    id: 3,
    text: '您是否经常口干舌燥，想喝冷饮？',
    options: [
      { text: '不会', scores: { pinghe: 1, yinxu: -1 } },
      { text: '偶尔口干', scores: { yinxu: 1, shire: 1 } },
      { text: '经常口干，喜欢喝冷的', scores: { yinxu: 2, shire: 1 } }
    ]
  },
  {
    id: 4,
    text: '您的体型偏胖吗？腹部是否肥满松软？',
    options: [
      { text: '体型适中或偏瘦', scores: { pinghe: 1, tanshi: -1 } },
      { text: '有点偏胖', scores: { tanshi: 1 } },
      { text: '明显肥胖，肚子大', scores: { tanshi: 2 } }
    ]
  },
  {
    id: 5,
    text: '您的皮肤是否容易出油，长痤疮？',
    options: [
      { text: '不会，皮肤正常', scores: { pinghe: 1, shire: -1 } },
      { text: '偶尔出油', scores: { shire: 1 } },
      { text: '经常油光满面，长痘痘', scores: { shire: 2, tanshi: 1 } }
    ]
  },
  {
    id: 6,
    text: '您是否经常情绪低落，容易多想？',
    options: [
      { text: '心态平和', scores: { pinghe: 1, qiyu: -1 } },
      { text: '偶尔心情不好', scores: { qiyu: 1 } },
      { text: '经常郁闷，爱叹气', scores: { qiyu: 2 } }
    ]
  },
  {
    id: 7,
    text: '您面色是否偏暗沉，或有色斑、黑眼圈？',
    options: [
      { text: '面色红润有光泽', scores: { pinghe: 1, xueyu: -1 } },
      { text: '有些暗沉', scores: { xueyu: 1, qixu: 1 } },
      { text: '明显晦暗，有色斑', scores: { xueyu: 2 } }
    ]
  },
  {
    id: 8,
    text: '您是否有食物或药物过敏史？',
    options: [
      { text: '没有过敏史', scores: { pinghe: 1, tebing: -2 } },
      { text: '对少数东西过敏', scores: { tebing: 1 } },
      { text: '过敏体质，容易过敏', scores: { tebing: 2 } }
    ]
  },
  {
    id: 9,
    text: '您的肠胃功能如何？大便是否规律？',
    options: [
      { text: '肠胃好，大便正常', scores: { pinghe: 2, qixu: -1, tanshi: -1 } },
      { text: '偶尔便溏或便秘', scores: { qixu: 1, tanshi: 1, shire: 1 } },
      { text: '经常便溏黏腻或便秘', scores: { qixu: 1, tanshi: 2, shire: 1 } }
    ]
  }
]

const FOOD_DATABASE = [
  { name: '小米', type: '谷物', property: '凉', flavor: '甘咸', meridian: '肾脾胃', effect: '健脾和胃、滋阴补肾', suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['yangxu'], suggestion: '胃寒者可加生姜同煮' },
  { name: '薏米', type: '谷物', property: '凉', flavor: '甘淡', meridian: '脾胃肺', effect: '利水渗湿、健脾清热', suitable: ['tanshi', 'shire', 'qixu'], avoid: ['yinxu', 'tebing'], suggestion: '孕妇慎用；阴虚者不宜长期食用' },
  { name: '山药', type: '根茎', property: '平', flavor: '甘', meridian: '脾肺肾', effect: '补脾养胃、生津益肺', suitable: ['qixu', 'yinxu', 'tanshi', 'pinghe'], avoid: [], suggestion: '湿盛中满者不宜' },
  { name: '红枣', type: '果品', property: '温', flavor: '甘', meridian: '脾胃', effect: '补中益气、养血安神', suitable: ['qixu', 'xueyu', 'pinghe'], avoid: ['shire', 'tanshi'], suggestion: '湿热体质少食，每日3-5枚为宜' },
  { name: '枸杞', type: '果品', property: '平', flavor: '甘', meridian: '肝肾', effect: '滋补肝肾、益精明目', suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['shire'], suggestion: '外邪湿热者不宜' },
  { name: '绿豆', type: '豆类', property: '寒', flavor: '甘', meridian: '心胃', effect: '清热解毒、消暑利水', suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '阳虚怕冷者少食，可加姜片中和' },
  { name: '赤小豆', type: '豆类', property: '平', flavor: '甘酸', meridian: '心小肠', effect: '利水除湿、解毒排脓', suitable: ['tanshi', 'shire'], avoid: ['yinxu'], suggestion: '阴虚津亏者少食' },
  { name: '黑芝麻', type: '种子', property: '平', flavor: '甘', meridian: '肝肾', effect: '补肝肾、润五脏、益精血', suitable: ['yinxu', 'xueyu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿体质不宜多食，每日一小勺' },
  { name: '羊肉', type: '畜肉', property: '温', flavor: '甘', meridian: '脾胃肾', effect: '温中暖肾、益气补虚', suitable: ['yangxu', 'qixu'], avoid: ['yinxu', 'shire', 'tebing'], suggestion: '阴虚体质宜搭配萝卜、豆腐同炖' },
  { name: '鸭肉', type: '禽肉', property: '凉', flavor: '甘咸', meridian: '肺肾胃', effect: '滋阴养胃、利水消肿', suitable: ['yinxu', 'shire'], avoid: ['yangxu', 'tanshi'], suggestion: '阳虚腹泻者不宜' },
  { name: '银耳', type: '菌类', property: '平', flavor: '甘', meridian: '肺胃肾', effect: '滋阴润肺、养胃生津', suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '风寒咳嗽者不宜' },
  { name: '百合', type: '根茎', property: '寒', flavor: '甘', meridian: '心肺', effect: '养阴润肺、清心安神', suitable: ['yinxu', 'qiyu', 'shire'], avoid: ['yangxu', 'tanshi'], suggestion: '风寒咳嗽、中寒便溏者不宜' },
  { name: '山楂', type: '果品', property: '微温', flavor: '甘酸', meridian: '脾胃肝', effect: '消食化积、活血化瘀', suitable: ['xueyu', 'tanshi', 'qiyu'], avoid: ['qixu'], suggestion: '气虚者不宜多食；孕妇慎用' },
  { name: '生姜', type: '调料', property: '温', flavor: '辛', meridian: '肺脾胃', effect: '解表散寒、温中止呕', suitable: ['yangxu', 'tanshi'], avoid: ['yinxu', 'shire'], suggestion: '阴虚内热者不宜；夜间少食' },
  { name: '冬瓜', type: '蔬菜', property: '凉', flavor: '甘淡', meridian: '肺大小肠膀胱', effect: '清热利水、消肿解毒', suitable: ['shire', 'tanshi'], avoid: ['yangxu', 'qixu'], suggestion: '阳虚怕冷者少食' },
  { name: '苦瓜', type: '蔬菜', property: '寒', flavor: '苦', meridian: '心脾胃', effect: '清热消暑、明目解毒', suitable: ['shire'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者不宜' },
  { name: '韭菜', type: '蔬菜', property: '温', flavor: '辛', meridian: '胃肝肾', effect: '温中行气、补肾壮阳', suitable: ['yangxu'], avoid: ['yinxu', 'shire'], suggestion: '阴虚火旺者不宜' },
  { name: '黑木耳', type: '菌类', property: '平', flavor: '甘', meridian: '胃大肠', effect: '益气补血、活血凉血', suitable: ['xueyu', 'qixu', 'pinghe'], avoid: ['tebing'], suggestion: '有出血倾向者不宜' },
  { name: '白萝卜', type: '根茎', property: '凉', flavor: '甘辛', meridian: '肺脾', effect: '下气消食、润肺化痰', suitable: ['tanshi', 'shire'], avoid: ['qixu'], suggestion: '服用人参期间不宜同食' },
  { name: '牛肉', type: '畜肉', property: '温', flavor: '甘', meridian: '脾胃', effect: '补脾胃、益气血、强筋骨', suitable: ['qixu', 'yangxu'], avoid: ['shire'], suggestion: '湿热体质少食' },
  { name: '蜂蜜', type: '其他', property: '平', flavor: '甘', meridian: '肺脾大肠', effect: '补中润燥、解毒止痛', suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿内蕴、便溏者不宜' },
  { name: '玫瑰花', type: '花茶', property: '温', flavor: '甘微苦', meridian: '肝脾', effect: '行气解郁、活血止痛', suitable: ['qiyu', 'xueyu'], avoid: ['qixu'], suggestion: '气虚者不宜多饮' },
  { name: '陈皮', type: '果品', property: '温', flavor: '辛苦', meridian: '脾肺', effect: '理气健脾、燥湿化痰', suitable: ['tanshi', 'qiyu'], avoid: ['yinxu'], suggestion: '阴虚燥咳者不宜' },
  { name: '黄芪', type: '药材', property: '温', flavor: '甘', meridian: '脾肺', effect: '补气固表、利尿托毒', suitable: ['qixu', 'tebing'], avoid: ['shire', 'yinxu'], suggestion: '阴虚火旺及湿热者不宜' },
  { name: '莲子', type: '种子', property: '平', flavor: '甘涩', meridian: '心脾肾', effect: '补脾止泻、养心安神', suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '中满痞胀者不宜' },
  { name: '海带', type: '藻类', property: '寒', flavor: '咸', meridian: '肝胃肾', effect: '软坚化痰、利水清热', suitable: ['tanshi', 'shire'], avoid: ['yangxu'], suggestion: '阳虚者不宜；甲亢患者慎用' },
  { name: '核桃', type: '种子', property: '温', flavor: '甘', meridian: '肾肺大肠', effect: '补肾温肺、润肠通便', suitable: ['yangxu', 'qixu', 'xueyu'], avoid: ['shire'], suggestion: '湿热体质少食，每日2-3个为宜' },
  { name: '糯米', type: '谷物', property: '温', flavor: '甘', meridian: '脾胃肺', effect: '补中益气、健脾止泻', suitable: ['qixu', 'yangxu'], avoid: ['shire', 'tanshi'], suggestion: '湿热痰湿体质少食' },
  { name: '梨', type: '果品', property: '凉', flavor: '甘微酸', meridian: '肺胃', effect: '清热润肺、生津止渴', suitable: ['yinxu', 'shire'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜蒸煮后食用' },
  { name: '菊花', type: '花茶', property: '凉', flavor: '甘苦', meridian: '肺肝', effect: '疏风清热、平肝明目', suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '气虚胃寒者不宜多饮' },
  { name: '鲫鱼', type: '水产', property: '平', flavor: '甘', meridian: '脾胃大肠', effect: '健脾利湿、和中开胃', suitable: ['qixu', 'tanshi', 'pinghe'], avoid: [], suggestion: '清炖最宜，可配豆腐或萝卜' }
]

function getConstitutionById(id) {
  return CONSTITUTIONS.find(c => c.id === id)
}

function getFoodsForConstitution(constitutionId) {
  const suitable = FOOD_DATABASE.filter(f => f.suitable.includes(constitutionId))
  const avoid = FOOD_DATABASE.filter(f => f.avoid.includes(constitutionId))
  const neutral = FOOD_DATABASE.filter(f => !f.suitable.includes(constitutionId) && !f.avoid.includes(constitutionId))
  return { suitable, avoid, neutral }
}

function calculateResult(scores) {
  const maxScore = Math.max(...Object.values(scores))
  if (maxScore <= 1) return 'pinghe'

  const candidates = Object.entries(scores)
    .filter(([id, score]) => score === maxScore && id !== 'pinghe')

  if (candidates.length === 1) return candidates[0][0]

  const topTypes = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .filter(([id, score]) => score > 0 && id !== 'pinghe')
    .slice(0, 2)
    .map(([id]) => id)

  return topTypes[0] || 'pinghe'
}

const FITNESS_WORKOUTS = [
  { type: '增肌', foods: ['牛肉', '鸡肉', '鸡蛋', '牛奶', '燕麦', '糙米', '西兰花', '香蕉'], tip: '练后30分钟内补充蛋白质和快碳，促进肌肉修复' },
  { type: '减脂', foods: ['鸡胸肉', '鱼虾', '藜麦', '绿叶蔬菜', '蛋白粉', '牛油果', '浆果'], tip: '控制碳水摄入，晚餐尽量在19:00前完成' },
  { type: '耐力', foods: ['燕麦', '全麦面包', '红薯', '香蕉', '坚果', '奇亚籽', '希腊酸奶'], tip: '运动前2小时补充复合碳水，保证持久供能' }
]

function getTodayRecommendation() {
  const now = new Date()
  const month = now.getMonth() + 1

  if (month >= 3 && month <= 5) {
    return {
      season: '春季',
      principle: '养肝护肝，疏泄条达',
      tip: '春应于肝，宜食辛甘发散之品，少食酸收之味。',
      foods: ['韭菜', '香椿', '豆芽', '菠菜', '春笋', '山药'],
      recipe: { name: '韭菜炒核桃', ingredients: ['韭菜200g', '核桃仁50g', '姜丝适量'], effect: '温阳补肾，适合春季养阳' }
    }
  } else if (month >= 6 && month <= 8) {
    return {
      season: '夏季',
      principle: '清热解暑，养心安神',
      tip: '夏应于心，宜食清淡解暑之品，适当增辛减苦。',
      foods: ['绿豆', '苦瓜', '冬瓜', '荷叶', '藕', '西瓜'],
      recipe: { name: '绿豆薏米汤', ingredients: ['绿豆50g', '薏米30g', '冰糖适量'], effect: '清热解暑，利湿消肿' }
    }
  } else if (month >= 9 && month <= 11) {
    return {
      season: '秋季',
      principle: '滋阴润燥，养肺生津',
      tip: '秋应于肺，宜食柔润之品，少食辛辣燥热。',
      foods: ['银耳', '百合', '梨', '山药', '莲藕', '蜂蜜'],
      recipe: { name: '银耳百合雪梨羹', ingredients: ['银耳半朵', '百合20g', '雪梨1个', '冰糖适量'], effect: '滋阴润肺，清心安神' }
    }
  } else {
    return {
      season: '冬季',
      principle: '温阳补肾，藏精固本',
      tip: '冬应于肾，宜食温补之品，适当增苦减咸。',
      foods: ['羊肉', '核桃', '黑芝麻', '黑豆', '山药', '红枣'],
      recipe: { name: '当归生姜羊肉汤', ingredients: ['羊肉500g', '当归15g', '生姜30g', '黄芪10g'], effect: '温阳补血，适合冬季进补' }
    }
  }
}
