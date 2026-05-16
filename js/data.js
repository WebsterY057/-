const CONSTITUTIONS = [
  {
    id: 'pinghe',
    name: '平和质',
    emoji: '☯️',
    description: '阴阳气血调和，体态适中，面色红润，精力充沛。',
    character: '体型匀称健壮，面色润泽，头发稠密有光，性格开朗随和，耐寒热，二便正常。',
    principle: '平补阴阳，调和气血，保持现有平衡状态。',
    principleDetail: '《素问·生气通天论》曰："阴平阳秘，精神乃治。"平和质调养贵在"中庸"之道，不偏不倚。以五谷为养、五果为助、五畜为益、五菜为充，顺应四时节气变化调整饮食即可。',
    evidence: '《灵枢·阴阳二十五人》描述："阴阳和平之人，其状委委然，随随然，颙颙然，愉愉然，暶暶然，豆豆然，众人皆曰君子。"此即平和质的经典描述。',
    suitable: ['大多数食材均可适量食用', '山药', '小米', '红枣', '枸杞', '黑芝麻', '核桃'],
    avoid: ['过量辛辣刺激食物', '过量寒凉生冷食物', '过量肥甘厚味'],
    recommendFoods: ['山药粥', '红枣枸杞茶', '小米南瓜粥', '清蒸鱼', '杂粮饭'],
    seasonTip: '春季养肝，夏季清心，长夏健脾，秋季润肺，冬季补肾。顺应四时调养。',
    healthAdvice: '体质基础良好，保持规律作息与均衡饮食即可。建议每日适度活动（散步、太极拳等），维持气血和畅。',
    fitnessAdvice: '体质基础良好，各类运动均可参与。建议每周3-5次中等强度训练，如有氧运动（慢跑、游泳）与力量训练（器械、自重）交替进行。BMI正常者维持现状，偏高者适当增加有氧比例。',
    exerciseCaution: '运动前充分热身，避免过度训练。注意劳逸结合，保证充足睡眠。',
    color: '#4CAF50'
  },
  {
    id: 'qixu',
    name: '气虚质',
    emoji: '💨',
    description: '元气不足，疲乏气短，自汗，语音低怯。',
    character: '肌肉松软不实，精神不振，易出汗，舌淡红胖大，边有齿痕，脉象虚弱。',
    principle: '补气健脾，培补元气。',
    principleDetail: '《素问·刺志论》曰："气虚者，寒也。"气为生命动力，气虚则机能衰退。脾为气血生化之源，故补气首重健脾。选用甘温益气之品，缓补渐进，忌峻补壅滞。',
    evidence: '《灵枢·口问》："上气不足，脑为之不满，耳为之苦鸣，头为之苦倾，目为之眩。"即阐述气虚之证。中医理论认为"劳则气耗"，久坐、久卧、过劳皆伤气。',
    suitable: ['黄芪', '党参', '山药', '红枣', '莲子', '糯米', '鸡肉', '牛肉', '鲫鱼', '土豆'],
    avoid: ['萝卜（过量）', '浓茶', '咖啡', '槟榔', '生冷瓜果', '苦瓜', '绿豆'],
    recommendFoods: ['黄芪炖鸡汤', '山药排骨汤', '红枣糯米粥', '党参炖肉', '四君子汤'],
    seasonTip: '春季风大易耗气，注意固表防风；夏季避暑防汗多伤气；长夏健脾益气最佳。',
    healthAdvice: '宜选择温和活动，如散步、太极拳、八段锦。避免劳累过度，保证充足睡眠。饮食以温补为主，少食生冷。',
    fitnessAdvice: '宜选择温和运动，如太极拳、八段锦、瑜伽、散步等。避免高强度爆发性运动。BMI偏低者增肌为主，以高蛋白饮食配合渐进力量训练；BMI偏高者以降脂为主，但需配合补气食疗。',
    exerciseCaution: '运动量循序渐进，以微微出汗为度，大汗淋漓反更伤气。运动后及时补充温水或红枣水。',
    color: '#FF9800'
  },
  {
    id: 'yangxu',
    name: '阳虚质',
    emoji: '❄️',
    description: '阳气不足，畏寒怕冷，手足不温，喜热饮食。',
    character: '肌肉松软，怕冷，手脚发凉，精神不振，大便稀溏，小便清长，舌淡胖嫩。',
    principle: '温阳补肾，益火之源。',
    principleDetail: '《素问·调经论》："阳虚则外寒。"阳气如天之日，温煦全身。肾为阳气之本，故温阳重在补肾。选辛甘温热之品，春夏季（三伏天）温补效果最佳，顺应"春夏养阳"之理。',
    evidence: '《金匮要略》提出"病痰饮者，当以温药和之"，开温阳法之先河。《扁鹊心书》强调"保命之法，灼艾第一，丹药第二，附子第三"，突出温阳的重要性。',
    suitable: ['羊肉', '韭菜', '生姜', '肉桂', '核桃', '荔枝', '龙眼', '虾', '小茴香', '牛鞭'],
    avoid: ['西瓜', '梨', '苦瓜', '冬瓜', '绿豆', '螃蟹', '田螺', '绿茶', '冰淇淋'],
    recommendFoods: ['当归生姜羊肉汤', '韭菜炒核桃', '肉桂红糖茶', '姜枣茶', '核桃粥'],
    seasonTip: '春夏养阳，三伏天是温补最佳时机。冬季注意保暖防寒，避免寒湿环境。',
    healthAdvice: '宜在温暖环境中活动，如快走、健身操。注意保暖，避免受寒。饮食多温热，少食生冷瓜果。',
    fitnessAdvice: '选择能提升阳气的运动，如快走、跑步、篮球等有氧运动。BMI偏高者因代谢较慢易堆积脂肪，需坚持中等强度有氧配合力量训练；BMI偏低者需增肌增重，重点训练大肌群。',
    exerciseCaution: '运动以身体温热、微微出汗为佳。避免在寒冷、潮湿环境中运动。秋冬注意保暖。',
    color: '#2196F3'
  },
  {
    id: 'yinxu',
    name: '阴虚质',
    emoji: '🔥',
    description: '阴液亏少，口燥咽干，手足心热，盗汗。',
    character: '体形偏瘦，口鼻咽喉干燥，喜冷饮，大便干燥，舌红少津，脉细数。',
    principle: '滋阴降火，滋补肝肾。',
    principleDetail: '《素问·调经论》："阴虚则内热。"阴液如泉，滋润全身。肾阴为一身阴液之本，故滋阴重在补肾养肝。选用甘凉滋润之品，秋冬季（"秋冬养阴"）效果最佳。忌辛温燥烈伤阴之物。',
    evidence: '《医宗必读》："阴虚者，阳必凑之。"阴虚则阳相对偏亢，产生虚火。朱丹溪在《格致余论》中提出"阳常有余，阴常不足"，强调滋阴的重要。',
    suitable: ['银耳', '百合', '梨', '蜂蜜', '鸭肉', '甲鱼', '黑芝麻', '枸杞', '桑葚', '石斛'],
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '葱蒜', '韭菜', '荔枝', '龙眼', '煎炸食物'],
    recommendFoods: ['银耳莲子羹', '百合雪梨汤', '枸杞菊花茶', '石斛炖鸭', '黑芝麻糊'],
    seasonTip: '秋冬养阴，秋季最宜滋阴润燥。夏季避暑防汗多伤阴，忌熬夜。',
    healthAdvice: '适合温和活动，如瑜伽、散步、太极。避免大汗淋漓，忌熬夜。饮食宜滋润，多食银耳、百合等。',
    fitnessAdvice: '适合中等强度运动，如游泳、瑜伽、骑行等，避免大量出汗的剧烈运动。BMI偏低者增肌同时注意滋阴润燥，补充优质蛋白和健康脂肪；BMI正常者以塑形为主。',
    exerciseCaution: '运动强度不宜过大，以不感过度疲劳为度。避免在酷热环境中运动。运动后补充滋阴饮品（如百合雪梨汤）。',
    color: '#9C27B0'
  },
  {
    id: 'tanshi',
    name: '痰湿质',
    emoji: '💧',
    description: '痰湿凝聚，形体肥胖，腹部肥满，口黏苔腻。',
    character: '体形肥胖，腹部肥满松软，面部皮肤油脂较多，多汗且黏，胸闷痰多。',
    principle: '健脾化痰，利湿渗湿。',
    principleDetail: '《证治汇补》："脾虚不运，则水谷不化精微而化为痰湿。"脾主运化水湿，脾虚则湿聚成痰。故治痰先治脾，脾健则痰自消。选用甘淡渗湿之品，忌甘腻生湿之物。',
    evidence: '《丹溪心法》指出："肥白人多痰湿。"《医宗金鉴》："痰饮者，水饮停积也。"叶天士提出"健脾化痰"为治湿大法。现代研究证实，痰湿体质者基础代谢率偏低，脂肪易堆积。',
    suitable: ['薏米', '赤小豆', '冬瓜', '白萝卜', '海带', '茯苓', '陈皮', '荷叶', '山楂', '鲫鱼'],
    avoid: ['肥肉', '油炸食品', '甜腻点心', '糯米饭', '奶油', '芝士', '冰淇淋', '啤酒'],
    recommendFoods: ['薏米赤小豆汤', '冬瓜海带汤', '陈皮普洱茶', '白萝卜炖排骨', '荷叶粥'],
    seasonTip: '长夏（三伏）是祛湿最佳时节。避免潮湿环境，多活动出汗，节制冷饮甜食。',
    healthAdvice: '宜坚持规律活动，通过适量出汗帮助排湿。饮食清淡，少食甜腻厚味。避免久坐，常饮薏米水、陈皮茶。',
    fitnessAdvice: '必须坚持有氧运动，如跑步、游泳、骑自行车，每周至少4次，每次30分钟以上。BMI偏高者以降脂减重为首要目标，高强度间歇训练（HIIT）效果最佳；配合健脾利湿饮食加速代谢。',
    exerciseCaution: '运动时注意补充水分，但忌冷饮。运动到出汗为佳，有助排湿。运动后及时擦干汗液避免受寒。',
    color: '#795548'
  },
  {
    id: 'shire',
    name: '湿热质',
    emoji: '☀️',
    description: '湿热内蕴，面垢油光，口苦口干，身重困倦。',
    character: '面垢油光，易生痤疮，口苦口干，大便黏滞不爽，小便短黄，女性带下黄多。',
    principle: '清热利湿，分消走泄。',
    principleDetail: '《医方考》："湿热交蒸，如雾如露。"湿与热结，如油入面，难解难分。治宜清热与利湿并举，使湿去热孤。选用甘寒清利之品，忌辛温助热、甘腻助湿之物。',
    evidence: '《温病条辨》详述湿热病的辨证论治，提出"分消走泄"法。薛生白《湿热病篇》指出："湿热证，始恶寒，后但热不寒，汗出胸痞，舌白，口渴不引饮。"',
    suitable: ['绿豆', '薏米', '苦瓜', '黄瓜', '冬瓜', '西瓜', '莲藕', '芹菜', '菊花', '金银花'],
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '生姜', '大蒜', '荔枝', '龙眼', '酒类'],
    recommendFoods: ['绿豆薏米汤', '苦瓜炒蛋', '冬瓜排骨汤', '菊花茶', '凉拌黄瓜'],
    seasonTip: '夏季湿热最重，注意清淡饮食。长夏祛湿清热正当时。忌熬夜，禁酗酒。',
    healthAdvice: '通过适当活动帮助排汗散热，如散步、健身操。饮食清淡，多食绿豆、冬瓜等清热利湿之品。注意皮肤清洁。',
    fitnessAdvice: '适合中等强度以上运动，通过出汗排湿散热。游泳、跑步、球类运动皆宜。BMI偏高者以降脂减重为主，强效有氧配合力量训练；注意运动后清洁皮肤。',
    exerciseCaution: '运动后及时洗澡更换干爽衣物。忌运动后立即冲冷水或大量饮用冷饮。',
    color: '#FF5722'
  },
  {
    id: 'xueyu',
    name: '血瘀质',
    emoji: '🩸',
    description: '血行不畅，肤色晦暗，舌质紫暗，易生瘀斑。',
    character: '肤色晦暗，色素沉着，口唇暗淡，舌紫暗有瘀点，易脱发，皮肤干燥。',
    principle: '活血化瘀，疏通经络。',
    principleDetail: '《素问·脉要精微论》："脉者，血之府也。"血行不畅则瘀滞。气为血帅，气行则血行。故活血先理气，选用辛散温通之品，以达"疏其血气，令其调达"之效。',
    evidence: '《医林改错》为活血化瘀专著，王清任提出"诸病之因，皆由血瘀"。创立血府逐瘀汤等名方。现代医学证实活血化瘀类中药可改善微循环、抑制血小板聚集。',
    suitable: ['山楂', '黑豆', '洋葱', '大蒜', '生姜', '醋', '红花', '丹参', '桃仁', '木耳'],
    avoid: ['肥肉', '奶油', '油炸食品', '冰淇淋', '冷饮', '浓茶', '咖啡'],
    recommendFoods: ['山楂红糖水', '黑豆活血粥', '洋葱炒木耳', '丹参炖乌鸡', '醋泡花生'],
    seasonTip: '春季宜疏肝活血，冬季注意保暖防寒凝。适度活动促进气血。忌久坐久卧。',
    healthAdvice: '适当活动是活血最好的方式，推荐散步、快走、健身操。避免久坐，常饮山楂红糖水。冬季注意保暖。',
    fitnessAdvice: '运动是活血最好的方式。推荐跑步、跳绳、球类等促进全身血液循环的运动。BMI偏高者以有氧运动减脂为主，配合活血化瘀食材；BMI偏低者力量训练改善体态。',
    exerciseCaution: '运动前充分热身，运动后充分拉伸。避免运动损伤造成瘀血。冬季运动注意保暖。',
    color: '#E91E63'
  },
  {
    id: 'qiyu',
    name: '气郁质',
    emoji: '😔',
    description: '气机郁滞，神情抑郁，忧虑脆弱，烦闷不乐。',
    character: '形体偏瘦，性格内向，情绪不稳，敏感多虑，常觉胸闷嗳气，喉有异物感。',
    principle: '疏肝理气，解郁安神。',
    principleDetail: '《素问·举痛论》："百病生于气也。"肝主疏泄，调畅气机。情志不畅则肝气郁结。选用芳香行气之品，"木郁达之"，使气机通畅则郁自解。辅以安神之品以定志。',
    evidence: '《丹溪心法》提出"六郁"学说，以气郁为首。"气血冲和，万病不生，一有怫郁，诸病生焉。"《医宗必读》强调"郁证全在病者能移情易性"，重视心理调适。',
    suitable: ['玫瑰花', '佛手', '陈皮', '薄荷', '百合', '小麦', '金桔', '山楂', '香蕉', '深海鱼'],
    avoid: ['咖啡', '浓茶', '白酒', '辛辣刺激食物', '过量糖分'],
    recommendFoods: ['玫瑰花茶', '佛手瓜炒肉', '陈皮薄荷茶', '百合莲子羹', '金桔蜂蜜饮'],
    seasonTip: '春季养肝疏气，多接触自然。秋季防悲秋，保持心情愉悦。宜多社交。',
    healthAdvice: '群体性活动最佳，如舞蹈、团体操，有助调动积极情绪。配合深呼吸练习，常饮玫瑰花茶疏解郁气。',
    fitnessAdvice: '群体性运动最佳，如团体球类、舞蹈、团课等，调动积极情绪。瑜伽和太极有助调节气息。BMI偏高者通过规律运动释放压力辅助减重；气郁消解后代谢自然提升。',
    exerciseCaution: '选择趣味性强的运动，避免单调枯燥。运动时配合深呼吸，有助疏解郁气。',
    color: '#607D8B'
  },
  {
    id: 'tebing',
    name: '特禀质',
    emoji: '🤧',
    description: '先天失常，生理缺陷，过敏体质，易发哮喘、风疹。',
    character: '过敏体质者常见哮喘、风团、咽痒、喷嚏；遗传病体质或有先天生理缺陷。',
    principle: '益气固表，调节免疫，避免过敏原。',
    principleDetail: '《素问·评热病论》："邪之所凑，其气必虚。"特禀质本质是卫气不固、免疫力失调。治宜益气固表以增强屏障功能，配合调节免疫之品。关键是辨识并规避个体过敏原。',
    evidence: '《医宗金鉴》论"瘾疹"（荨麻疹）："由汗出当风，与血气相搏。"清代陈修园提出"过敏"之概念。现代免疫学研究证实，黄芪、白术等补气药可调节Th1/Th2免疫平衡。',
    suitable: ['黄芪', '白术', '防风', '山药', '糯米', '红枣', '蜂蜜', '灵芝', '太子参', '南瓜'],
    avoid: ['海鲜（虾蟹等）', '牛肉', '牛奶', '鸡蛋', '花生', '芒果', '菠萝', '酒精', '人工添加剂'],
    recommendFoods: ['黄芪白术炖鸡汤', '山药南瓜粥', '红枣蜂蜜水', '糯米藕', '灵芝炖肉'],
    seasonTip: '春季花粉多注意防护，夏季防湿热引发过敏，换季时注意固表。随身携带抗过敏药物。',
    healthAdvice: '适度活动增强免疫力，推荐散步、瑜伽、太极。避免在花粉季或空气污染严重时户外活动。饮食注意规避过敏原。',
    fitnessAdvice: '适度运动增强免疫力，推荐游泳（增强呼吸功能）、瑜伽、慢跑。避免在花粉季或空气污染严重时户外运动。BMI偏高者选择室内有氧运动减脂，避免剧烈运动诱发过敏。',
    exerciseCaution: '运动前后注意保暖防寒，避免冷空气刺激呼吸道。运动时随身携带应急药物。室内运动为主。',
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
  },
  {
    id: 10,
    text: '您是否容易感冒或生病？',
    options: [
      { text: '很少生病', scores: { pinghe: 1, qixu: -2 } },
      { text: '偶尔会感冒', scores: { qixu: 1 } },
      { text: '经常感冒，恢复慢', scores: { qixu: 2, tebing: 1 } }
    ]
  },
  {
    id: 11,
    text: '您是否感觉喉咙有异物感，咳不出咽不下？',
    options: [
      { text: '没有', scores: { pinghe: 1, qiyu: -1 } },
      { text: '偶尔有', scores: { qiyu: 1, tanshi: 1 } },
      { text: '经常有，爱清嗓子', scores: { qiyu: 2, tanshi: 1 } }
    ]
  },
  {
    id: 12,
    text: '您是否容易腰膝酸软？',
    options: [
      { text: '不会', scores: { pinghe: 1, yangxu: -1, yinxu: -1 } },
      { text: '偶尔会', scores: { yangxu: 1, yinxu: 1 } },
      { text: '经常腰膝无力', scores: { yangxu: 2, yinxu: 1 } }
    ]
  },
  {
    id: 13,
    text: '您是否感到头重身困，像裹了湿布？',
    options: [
      { text: '不会，头脑清爽', scores: { pinghe: 1, tanshi: -1 } },
      { text: '偶尔昏沉', scores: { tanshi: 1 } },
      { text: '经常头重脚轻', scores: { tanshi: 2 } }
    ]
  },
  {
    id: 14,
    text: '您是否手心脚心发热，想摸凉的东西？',
    options: [
      { text: '不会', scores: { pinghe: 1, yinxu: -1 } },
      { text: '偶尔发热', scores: { yinxu: 1 } },
      { text: '经常五心烦热', scores: { yinxu: 2 } }
    ]
  },
  {
    id: 15,
    text: '您是否夜尿频繁，影响睡眠？',
    options: [
      { text: '不起夜', scores: { pinghe: 1, yangxu: -1 } },
      { text: '偶尔起夜1次', scores: { yangxu: 1 } },
      { text: '每晚2次以上', scores: { yangxu: 2, qixu: 1 } }
    ]
  },
  {
    id: 16,
    text: '您是否皮肤容易起风团、红疹或瘙痒？',
    options: [
      { text: '不会', scores: { pinghe: 1, tebing: -1 } },
      { text: '偶尔会', scores: { tebing: 1, shire: 1 } },
      { text: '经常过敏发痒', scores: { tebing: 2 } }
    ]
  },
  {
    id: 17,
    text: '您是否常感胸闷、喜欢叹气？',
    options: [
      { text: '没有', scores: { pinghe: 1, qiyu: -1 } },
      { text: '偶尔胸闷叹气', scores: { qiyu: 1, xueyu: 1 } },
      { text: '经常胸闷需要深呼吸', scores: { qiyu: 2, xueyu: 1 } }
    ]
  },
  {
    id: 18,
    text: '您的大便是否黏滞不爽，冲不干净？',
    options: [
      { text: '大便成形，不黏', scores: { pinghe: 1, tanshi: -1, shire: -1 } },
      { text: '偶尔黏腻', scores: { tanshi: 1, shire: 1 } },
      { text: '经常黏腻臭秽', scores: { shire: 2, tanshi: 1 } }
    ]
  }
]

const FOOD_DATABASE = [
  {
    name: '小米', type: '谷物', property: '凉', flavor: '甘咸', meridian: '肾脾胃',
    effect: '健脾和胃、滋阴补肾',
    nutrition: '富含B族维生素、铁、镁、锌。每100g含蛋白质9g、膳食纤维1.6g，比大米更富营养。',
    pairing: '宜配红枣（补气血）、南瓜（健脾胃）、山药（增强补益效果）。忌与杏仁同食。',
    mechanism: '小米色黄入脾，味甘补中。其凉性可清胃热，适用于胃热口渴。含有的色氨酸有助安神，《本草纲目》称其"益丹田，补虚损"。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['yangxu'], suggestion: '胃寒者可加生姜同煮'
  },
  {
    name: '薏米', type: '谷物', property: '凉', flavor: '甘淡', meridian: '脾胃肺',
    effect: '利水渗湿、健脾清热',
    nutrition: '富含薏苡仁酯、蛋白质、维生素B1、钙、铁。每100g含蛋白质12.8g。',
    pairing: '宜配赤小豆（增强利湿）、绿豆（清湿热）、山药（健脾）。忌与海带同食（寒凉过度）。',
    mechanism: '《本草新编》言薏米"最善利水，不至耗损真阴"。其含有的薏苡仁酯能抑制肿瘤细胞，多糖成分增强免疫。利水而不伤阴是其最大特点。',
    suitable: ['tanshi', 'shire', 'qixu'], avoid: ['yinxu', 'tebing'], suggestion: '孕妇慎用；阴虚者不宜长期食用'
  },
  {
    name: '山药', type: '根茎', property: '平', flavor: '甘', meridian: '脾肺肾',
    effect: '补脾养胃、生津益肺',
    nutrition: '富含黏液蛋白、淀粉酶、多酚氧化酶、维生素C。每100g含蛋白质1.9g、膳食纤维0.8g。',
    pairing: '宜配排骨（补钙增效）、红枣（气血双补）、木耳（益气活血）。搭配茯苓增强健脾效果。',
    mechanism: '《神农本草经》列山药为上品，"补虚羸，久服耳目聪明"。含有的黏液蛋白可保护胃黏膜，薯蓣皂苷有助调节免疫。平补三焦（脾肺肾）是其独特优势。',
    suitable: ['qixu', 'yinxu', 'tanshi', 'pinghe'], avoid: [], suggestion: '湿盛中满者不宜'
  },
  {
    name: '红枣', type: '果品', property: '温', flavor: '甘', meridian: '脾胃',
    effect: '补中益气、养血安神',
    nutrition: '富含铁、维生素C（鲜枣维C含量约苹果的15倍）、环磷酸腺苷。每100g含蛋白质3.2g、铁2.3mg。',
    pairing: '宜配枸杞（气血双补）、生姜（温中不腻）、桂圆（增强安神）。泡茶煮汤皆宜。',
    mechanism: '《本草纲目》："枣为脾之果。"其含有的环磷酸腺苷（cAMP）可增强心肌收缩力、改善睡眠。维生素C促进铁吸收，协同补血。每日3-5枚为度，过食生湿。',
    suitable: ['qixu', 'xueyu', 'pinghe'], avoid: ['shire', 'tanshi'], suggestion: '湿热体质少食，每日3-5枚为宜'
  },
  {
    name: '枸杞', type: '果品', property: '平', flavor: '甘', meridian: '肝肾',
    effect: '滋补肝肾、益精明目',
    nutrition: '富含枸杞多糖、胡萝卜素、维生素A、玉米黄质。每100g含蛋白质14.3g、胡萝卜素7.4mg。',
    pairing: '宜配菊花（清肝明目）、红枣（气血双补）、山药（增强补益）。泡水或煮汤皆宜。',
    mechanism: '《本草经集注》："补益精气，强盛阴道。"枸杞多糖是核心活性成分，具有抗氧化、调节免疫、保护视网膜的作用。玉米黄质选择性沉积于黄斑区，直接改善视力。',
    suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['shire'], suggestion: '外邪湿热者不宜'
  },
  {
    name: '羊肉', type: '畜肉', property: '温', flavor: '甘', meridian: '脾胃肾',
    effect: '温中暖肾、益气补虚',
    nutrition: '富含优质蛋白（每100g含19g）、锌、铁、维生素B12。比猪肉脂肪含量低但营养更丰富。',
    pairing: '宜配萝卜（中和温性）、豆腐（补钙去膻）、当归（经典温补组合）。配生姜去腥增温。',
    mechanism: '《本草纲目》称羊肉"暖中补虚，开胃健身"。其高含量的左旋肉碱促进脂肪代谢，锌元素有助睾酮分泌（促进肌肉生长）。温性特质可改善末梢循环。',
    suitable: ['yangxu', 'qixu'], avoid: ['yinxu', 'shire', 'tebing'], suggestion: '阴虚体质宜搭配萝卜、豆腐同炖'
  },
  {
    name: '牛肉', type: '畜肉', property: '温', flavor: '甘', meridian: '脾胃',
    effect: '补脾胃、益气血、强筋骨',
    nutrition: '富含肌氨酸（是鸡肉的4倍）、蛋白质（每100g含20g）、铁、锌、维生素B6。',
    pairing: '宜配土豆（营养互补）、西红柿（促进铁吸收）、洋葱（降脂）。西兰花是高纤好搭档。',
    mechanism: '《医林纂要》："牛肉味甘，专补脾土。"肌氨酸是肌肉能量的关键来源，促进肌肉增长。丰富的共轭亚油酸（CLA）有助降低体脂。铁锌协同改善造血功能。',
    suitable: ['qixu', 'yangxu'], avoid: ['shire'], suggestion: '湿热体质少食'
  },
  {
    name: '绿豆', type: '豆类', property: '寒', flavor: '甘', meridian: '心胃',
    effect: '清热解毒、消暑利水',
    nutrition: '富含蛋白质（每100g含21.6g）、膳食纤维、钾、镁、维生素B1。',
    pairing: '宜配薏米（增强祛湿）、百合（润肺清热）、甘草（缓解寒性）。煮汤不宜加碱破坏营养。',
    mechanism: '《本草汇言》："绿豆清暑热，解烦热，润燥热。"绿豆蛋白具有解毒作用，可与有机磷农药等有害物质结合。其寒性可清心胃之火，夏季解暑首选。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '阳虚怕冷者少食，可加姜片中和'
  },
  {
    name: '赤小豆', type: '豆类', property: '平', flavor: '甘酸', meridian: '心小肠',
    effect: '利水除湿、解毒排脓',
    nutrition: '富含膳食纤维（每100g含7.5g）、蛋白质、钾、铁、叶酸。',
    pairing: '宜配薏米（经典祛湿组合）、冬瓜（增强利水）、鲫鱼（健脾利水）。',
    mechanism: '《本草纲目》："赤小豆行水，散血。"其利水作用强于薏米，但较平和。富含的皂苷类成分有助排出体内多余水分。现代研究证实其降血脂、降血压作用。',
    suitable: ['tanshi', 'shire'], avoid: ['yinxu'], suggestion: '阴虚津亏者少食'
  },
  {
    name: '生姜', type: '调料', property: '温', flavor: '辛', meridian: '肺脾胃',
    effect: '解表散寒、温中止呕',
    nutrition: '富含姜辣素、姜烯酚、维生素B6、钾。每100g含蛋白质1.8g、膳食纤维2.7g。',
    pairing: '宜配红糖（暖宫驱寒）、红枣（温中补气）、葱白（增强解表）。配海鲜可解毒去腥。',
    mechanism: '《本草拾遗》："生姜去冷除痰，开胃。"姜辣素是其核心活性成分，具有抗炎、抗氧化、促进胃液分泌作用。姜烯酚可抑制呕吐中枢，故为止呕圣药。',
    suitable: ['yangxu', 'tanshi'], avoid: ['yinxu', 'shire'], suggestion: '阴虚内热者不宜；夜间少食'
  },
  {
    name: '山楂', type: '果品', property: '微温', flavor: '甘酸', meridian: '脾胃肝',
    effect: '消食化积、活血化瘀',
    nutrition: '富含维生素C（每100g含53mg）、有机酸、黄酮类、三萜类。',
    pairing: '宜配红糖（活血调经）、荷叶（降脂消食）、陈皮（理气化积）。煮水泡茶皆宜。',
    mechanism: '《本草纲目》："山楂化饮食，消肉积。"所含解脂酶可直接分解脂肪，有机酸促进胃液分泌。金丝桃苷具有降血脂、扩张冠状动脉的作用。故为消食活血之要药。',
    suitable: ['xueyu', 'tanshi', 'qiyu'], avoid: ['qixu'], suggestion: '气虚者不宜多食；孕妇慎用'
  },
  {
    name: '银耳', type: '菌类', property: '平', flavor: '甘', meridian: '肺胃肾',
    effect: '滋阴润肺、养胃生津',
    nutrition: '富含银耳多糖、膳食纤维、蛋白质、钙、磷、铁。',
    pairing: '宜配百合（增强润肺）、雪梨（滋阴效果加倍）、红枣（补气养颜）。',
    mechanism: '《饮片新参》："银耳清肺热，养胃阴。"银耳多糖是核心活性成分，保湿效果是玻尿酸的数倍（大分子锁水）。具有增强免疫、抗肿瘤、降血糖的现代药理作用。',
    suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '风寒咳嗽者不宜'
  },
  {
    name: '百合', type: '根茎', property: '寒', flavor: '甘', meridian: '心肺',
    effect: '养阴润肺、清心安神',
    nutrition: '富含百合苷、秋水仙碱、维生素C、钾。每100g含蛋白质3.2g、膳食纤维1.7g。',
    pairing: '宜配银耳（经典润肺组合）、莲子（安神效果加倍）、绿豆（清心降火）。',
    mechanism: '《本草述》："百合之功，在益气而兼利气。"百合苷具有镇静安神作用。其富含的秋水仙碱可抑制炎症反应。润肺而不腻，安神而不滞，是其独特优势。',
    suitable: ['yinxu', 'qiyu', 'shire'], avoid: ['yangxu', 'tanshi'], suggestion: '风寒咳嗽、中寒便溏者不宜'
  },
  {
    name: '苦瓜', type: '蔬菜', property: '寒', flavor: '苦', meridian: '心脾胃',
    effect: '清热消暑、明目解毒',
    nutrition: '富含维生素C（每100g含56mg，是番茄的3倍）、苦瓜苷、苦瓜素。',
    pairing: '宜配鸡蛋（营养互补，缓解苦味）、排骨（清热不腻）、豆豉（增强开胃）。',
    mechanism: '《滇南本草》："苦瓜清暑、益气、止渴。"苦瓜素（charantin）具有类胰岛素作用，可辅助降血糖。苦瓜苷刺激消化液分泌，清热而不伤胃气。',
    suitable: ['shire'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者不宜'
  },
  {
    name: '韭菜', type: '蔬菜', property: '温', flavor: '辛', meridian: '胃肝肾',
    effect: '温中行气、补肾壮阳',
    nutrition: '富含硫化物、锌、维生素A、C、E。每100g含蛋白质2.4g、膳食纤维1.4g。',
    pairing: '宜配核桃（温阳倍增）、鸡蛋（营养均衡）、虾仁（增强补肾效果）。',
    mechanism: '《本草拾遗》："韭菜温中下气，补虚，调和脏腑。"硫化物赋予韭菜独特香气，具有抗菌消炎作用。含锌丰富，有助调节内分泌，故传统认为"壮阳"。',
    suitable: ['yangxu'], avoid: ['yinxu', 'shire'], suggestion: '阴虚火旺者不宜'
  },
  {
    name: '黑木耳', type: '菌类', property: '平', flavor: '甘', meridian: '胃大肠',
    effect: '益气补血、活血凉血',
    nutrition: '富含铁（每100g含97mg，是猪肝的7倍）、膳食纤维、木耳多糖。',
    pairing: '宜配洋葱（活血效果叠加）、红枣（补血养颜）、山药（健脾养胃）。',
    mechanism: '《食疗本草》："木耳利五脏，宣肠胃。"富含的膳食纤维可吸附肠道有害物质（"血管清道夫"）。木耳多糖具有抗凝血、降血脂作用。铁含量极高，为补血佳品。',
    suitable: ['xueyu', 'qixu', 'pinghe'], avoid: ['tebing'], suggestion: '有出血倾向者不宜'
  },
  {
    name: '冬瓜', type: '蔬菜', property: '凉', flavor: '甘淡', meridian: '肺大小肠膀胱',
    effect: '清热利水、消肿解毒',
    nutrition: '低热量（每100g仅12kcal）、富含维生素C、钾、膳食纤维。',
    pairing: '宜配海带（增强利水）、排骨（清热不损正）、薏米（经典祛湿组合）。',
    mechanism: '《本草备要》："冬瓜利水，清热、消肿。"高钾低钠特性有助排出多余钠离子（消肿）。几乎不含脂肪且膳食纤维丰富，是减脂期理想蔬菜。',
    suitable: ['shire', 'tanshi'], avoid: ['yangxu', 'qixu'], suggestion: '阳虚怕冷者少食'
  },
  {
    name: '白萝卜', type: '根茎', property: '凉', flavor: '甘辛', meridian: '肺脾',
    effect: '下气消食、润肺化痰',
    nutrition: '富含淀粉酶、维生素C（每100g含21mg）、芥子油、膳食纤维。',
    pairing: '宜配排骨（帮助消化脂肪）、羊肉（中和温性）、生姜（平衡寒性）。',
    mechanism: '《本草纲目》："萝卜主吞酸，化积滞。"淀粉酶直接分解食物中的淀粉。芥子油可促进肠胃蠕动。现代研究证实其含有的木质素可增强免疫细胞活性。',
    suitable: ['tanshi', 'shire'], avoid: ['qixu'], suggestion: '服用人参期间不宜同食'
  },
  {
    name: '黑芝麻', type: '种子', property: '平', flavor: '甘', meridian: '肝肾',
    effect: '补肝肾、润五脏、益精血',
    nutrition: '富含油脂（45-55%）、蛋白质、钙（每100g含780mg）、维生素E、卵磷脂。',
    pairing: '宜配核桃（补肾健脑）、蜂蜜（润肠通便）、桑葚（增强乌发效果）。',
    mechanism: '《神农本草经》列黑芝麻为上品，"补五内，益气力"。芝麻素具有强抗氧化作用。钙含量是牛奶的7倍。维生素E促进性激素分泌，"益精血"即基于此。',
    suitable: ['yinxu', 'xueyu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿体质不宜多食，每日一小勺'
  },
  {
    name: '蜂蜜', type: '其他', property: '平', flavor: '甘', meridian: '肺脾大肠',
    effect: '补中润燥、解毒止痛',
    nutrition: '富含葡萄糖、果糖、酶类、维生素B族、多种矿物质。',
    pairing: '宜配柠檬（美白养颜）、姜（暖身）、牛奶（安神助眠）。60℃以下温水冲服保留活性酶。',
    mechanism: '《本草纲目》："蜂蜜入药之功有五：清热、补中、解毒、润燥、止痛。"含有的葡萄糖氧化酶可产生过氧化氢，具有天然抗菌作用。果糖缓慢吸收，适合运动前能量补充。',
    suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿内蕴、便溏者不宜'
  },
  {
    name: '玫瑰花', type: '花茶', property: '温', flavor: '甘微苦', meridian: '肝脾',
    effect: '行气解郁、活血止痛',
    nutrition: '富含挥发油（含香茅醇、橙花醇）、维生素C、单宁酸。',
    pairing: '宜配枸杞（疏肝养肝）、红枣（理气补血）、蜂蜜（改善口感）。',
    mechanism: '《本草正义》："玫瑰花，香气最浓，清而不浊，和而不猛。"芳香挥发油可直接作用于大脑边缘系统，缓解焦虑。所含单宁酸有轻度镇静作用。善疏肝解郁而无耗气之弊。',
    suitable: ['qiyu', 'xueyu'], avoid: ['qixu'], suggestion: '气虚者不宜多饮'
  },
  {
    name: '陈皮', type: '果品', property: '温', flavor: '辛苦', meridian: '脾肺',
    effect: '理气健脾、燥湿化痰',
    nutrition: '富含挥发油（柠檬烯）、橙皮苷、维生素B1、C。',
    pairing: '宜配普洱茶（祛湿降脂）、山楂（理气化积）、生姜（温中化痰）。',
    mechanism: '《本草纲目》："橘皮，苦能泄、能燥，辛能散，温能和。"橙皮苷具有抗炎、抗氧化作用。挥发油可促进消化液分泌、排除肠道积气。为"理气健脾之要药"。',
    suitable: ['tanshi', 'qiyu'], avoid: ['yinxu'], suggestion: '阴虚燥咳者不宜'
  },
  {
    name: '黄芪', type: '药材', property: '温', flavor: '甘', meridian: '脾肺',
    effect: '补气固表、利尿托毒',
    nutrition: '富含黄芪多糖、黄芪皂苷、黄芪异黄酮、硒。',
    pairing: '宜配当归（气血双补，经典组合）、党参（增强补气）、山药（健脾同补）。',
    mechanism: '《医学衷中参西录》："黄芪补气，最善托毒。"黄芪多糖是核心免疫调节成分，可增强NK细胞活性。现代研究证实其具有抗衰老、调节血糖、保护心血管的作用。',
    suitable: ['qixu', 'tebing'], avoid: ['shire', 'yinxu'], suggestion: '阴虚火旺及湿热者不宜'
  },
  {
    name: '莲子', type: '种子', property: '平', flavor: '甘涩', meridian: '心脾肾',
    effect: '补脾止泻、养心安神',
    nutrition: '富含蛋白质、淀粉、钙、磷、铁、莲子碱。',
    pairing: '宜配百合（安神效果加倍）、银耳（滋阴养颜）、红枣（补气养心）。',
    mechanism: '《本草纲目》："莲之味甘，气温而性涩。"莲子碱具有镇静安神作用。含有的棉子糖可促进有益菌增殖、调节肠道。补脾而不燥，安神而不滞。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '中满痞胀者不宜'
  },
  {
    name: '菊花', type: '花茶', property: '凉', flavor: '甘苦', meridian: '肺肝',
    effect: '疏风清热、平肝明目',
    nutrition: '富含挥发油、菊苷、黄酮类、维生素A、B1。',
    pairing: '宜配枸杞（经典护眼组合）、金银花（增强清热）、决明子（清肝明目）。',
    mechanism: '《本草经疏》："菊花专制风木，故为祛风之要药。"黄酮类物质可扩张冠状动脉。其含有的维生素A前体有助于视网膜健康。"清肝明目"的本质是抗氧化保护视神经。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '气虚胃寒者不宜多饮'
  },
  {
    name: '鲫鱼', type: '水产', property: '平', flavor: '甘', meridian: '脾胃大肠',
    effect: '健脾利湿、和中开胃',
    nutrition: '富含优质蛋白（每100g含17g）、钙、磷、锌、硒。',
    pairing: '宜配豆腐（钙吸收率提升）、冬瓜（利水消肿）、赤小豆（健脾祛湿）。清炖最能保留营养。',
    mechanism: '《本草经疏》："鲫鱼入胃，治胃弱不下食。"其蛋白组成接近人体需求，极易消化吸收。锌元素可改善味觉、促进食欲。"和中开胃"即基于此。',
    suitable: ['qixu', 'tanshi', 'pinghe'], avoid: [], suggestion: '清炖最宜，可配豆腐或萝卜'
  },
  {
    name: '鸭肉', type: '禽肉', property: '凉', flavor: '甘咸', meridian: '肺肾胃',
    effect: '滋阴养胃、利水消肿',
    nutrition: '富含B族维生素、维生素E、蛋白质、铁、锌。不饱和脂肪酸比例高。',
    pairing: '宜配冬瓜（滋阴利水）、山药（健脾养胃）、陈皮（去腥理气）。老鸭炖汤效果最佳。',
    mechanism: '《随息居饮食谱》："鸭肉滋五脏之阴。"其脂肪中不饱和脂肪酸占60%以上，优于猪肉。凉性特质可清虚热，"滋阴"即补充人体津液。',
    suitable: ['yinxu', 'shire'], avoid: ['yangxu', 'tanshi'], suggestion: '阳虚腹泻者不宜'
  },
  {
    name: '海带', type: '藻类', property: '寒', flavor: '咸', meridian: '肝胃肾',
    effect: '软坚化痰、利水清热',
    nutrition: '富含碘（每100g含923μg）、褐藻胶、甘露醇、钾、钙。',
    pairing: '宜配冬瓜（清热利水）、排骨（补钙）、豆腐（营养互补）。',
    mechanism: '《本草纲目》："海带治水病，瘿瘤。"褐藻胶可吸附并排出肠道重金属。甘露醇具有利尿消肿作用。碘是甲状腺激素合成的必需原料，调节基础代谢。',
    suitable: ['tanshi', 'shire'], avoid: ['yangxu'], suggestion: '阳虚者不宜；甲亢患者慎用'
  },
  {
    name: '核桃', type: '种子', property: '温', flavor: '甘', meridian: '肾肺大肠',
    effect: '补肾温肺、润肠通便',
    nutrition: '富含α-亚麻酸（Omega-3）、蛋白质、维生素E、褪黑素。每100g含蛋白质15g。',
    pairing: '宜配黑芝麻（补肾乌发）、红枣（补气血）、韭菜（温阳加倍）。',
    mechanism: '《本草纲目》："核桃补气养血，润燥化痰。"α-亚麻酸可在体内转化为DHA和EPA，促进脑健康。褪黑素调节睡眠节律。"补肾"之本在于富含的锌和维生素E促进内分泌。',
    suitable: ['yangxu', 'qixu', 'xueyu'], avoid: ['shire'], suggestion: '湿热体质少食，每日2-3个为宜'
  },
  {
    name: '糯米', type: '谷物', property: '温', flavor: '甘', meridian: '脾胃肺',
    effect: '补中益气、健脾止泻',
    nutrition: '富含淀粉、蛋白质、B族维生素、钙、铁。支链淀粉比例高（98%）。',
    pairing: '宜配红枣（温中补虚）、莲子（健脾止泻）、山药（增强补益效果）。',
    mechanism: '《本草纲目》："糯米暖脾胃，止虚寒泄痢。"支链淀粉含量高，消化吸收慢，可持续释放能量。但粘滞难化，痰湿体质不宜多食。温中补虚效果优于大米。',
    suitable: ['qixu', 'yangxu'], avoid: ['shire', 'tanshi'], suggestion: '湿热痰湿体质少食'
  },
  {
    name: '梨', type: '果品', property: '凉', flavor: '甘微酸', meridian: '肺胃',
    effect: '清热润肺、生津止渴',
    nutrition: '富含水分（85-90%）、膳食纤维、维生素C、钾、山梨醇。',
    pairing: '宜配川贝（止咳化痰经典方）、银耳（滋阴润肺）、冰糖（润肺止咳）。',
    mechanism: '《本草通玄》："梨之生者清六腑之热，熟者滋五脏之阴。"山梨醇有助肠道蠕动。丰富水分和钾可改善"秋燥"引起的咽干。生熟功效不同：生食清热，熟食滋阴。',
    suitable: ['yinxu', 'shire'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜蒸煮后食用'
  }
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
  const nonPinghe = Object.entries(scores)
    .filter(([id]) => id !== 'pinghe')
    .sort((a, b) => b[1] - a[1])

  if (nonPinghe.length > 0 && nonPinghe[0][1] >= 2) {
    return nonPinghe[0][0]
  }

  if (scores.pinghe >= 2) return 'pinghe'

  if (nonPinghe.length > 0 && nonPinghe[0][1] > 0) {
    return nonPinghe[0][0]
  }

  return 'pinghe'
}

const FITNESS_WORKOUTS = [
  {
    type: '增肌',
    foods: ['牛肉', '鸡肉', '鸡蛋', '牛奶', '燕麦', '糙米', '西兰花', '香蕉'],
    tip: '练后30分钟内补充蛋白质和快碳，促进肌肉修复',
    detail: '《素问》"五谷为养"——谷物提供基础能量；"五畜为益"——畜肉补充优质蛋白。增肌期需保证每公斤体重1.6-2.2g蛋白质摄入，碳水与蛋白质比例3:1。推荐三餐+练后一餐的模式。'
  },
  {
    type: '减脂',
    foods: ['鸡胸肉', '鱼虾', '藜麦', '绿叶蔬菜', '蛋白粉', '牛油果', '浆果'],
    tip: '控制碳水摄入，晚餐尽量在19:00前完成',
    detail: '《黄帝内经》"饮食有节"——减脂核心在热量缺口。中医强调"痰湿"代谢，减脂期宜食清淡利湿之品。推荐低碳高蛋白饮食结构，配合16:8间歇断食。'
  },
  {
    type: '耐力',
    foods: ['燕麦', '全麦面包', '红薯', '香蕉', '坚果', '奇亚籽', '希腊酸奶'],
    tip: '运动前2小时补充复合碳水，保证持久供能',
    detail: '《灵枢》"谷入于胃，脉道以通，血气乃行"——持久供能需要平稳血糖。复合碳水缓慢释放能量，配合优质脂肪（坚果）和电解质（香蕉），维持2小时以上运动输出。'
  }
]

function getTodayRecommendation(month) {
  if (month === undefined) {
    const now = new Date()
    month = now.getMonth() + 1
  }

  if (month >= 3 && month <= 5) {
    return {
      season: '春季',
      principle: '养肝护肝，疏泄条达',
      tip: '春应于肝，宜食辛甘发散之品。春季阳气升发，人体新陈代谢加快，是健身减脂的黄金时期。',
      reference: '《素问·四气调神大论》："春三月，此谓发陈，天地俱生，万物以荣。"',
      foods: ['韭菜', '香椿', '豆芽', '菠菜', '春笋', '山药'],
      recipe: { name: '韭菜炒核桃', ingredients: ['韭菜200g', '核桃仁50g', '姜丝适量'], effect: '温阳补肾，适合春季养阳。韭菜辛温入肝经，核桃补肾，二者相合应春之生气。' }
    }
  } else if (month >= 6 && month <= 8) {
    return {
      season: '夏季',
      principle: '清热解暑，养心安神',
      tip: '夏应于心，宜食清淡解暑之品。夏季出汗多，注意补充电解质和水分，运动选择清晨或傍晚。',
      reference: '《素问·四气调神大论》："夏三月，此谓蕃秀，天地气交，万物华实。"',
      foods: ['绿豆', '苦瓜', '冬瓜', '荷叶', '藕', '西瓜'],
      recipe: { name: '绿豆薏米汤', ingredients: ['绿豆50g', '薏米30g', '冰糖适量'], effect: '清热解暑，利湿消肿。绿豆清心火、薏米利水湿，是夏季经典养生汤品。' }
    }
  } else if (month >= 9 && month <= 11) {
    return {
      season: '秋季',
      principle: '滋阴润燥，养肺生津',
      tip: '秋应于肺，宜食柔润之品。秋燥伤津，注意补充水分。运动时注意保护呼吸道。',
      reference: '《素问·四气调神大论》："秋三月，此谓容平，天气以急，地气以明。"',
      foods: ['银耳', '百合', '梨', '山药', '莲藕', '蜂蜜'],
      recipe: { name: '银耳百合雪梨羹', ingredients: ['银耳半朵', '百合20g', '雪梨1个', '冰糖适量'], effect: '滋阴润肺，清心安神。银耳多糖保湿、百合宁心、雪梨清肺，秋季养生佳品。' }
    }
  } else {
    return {
      season: '冬季',
      principle: '温阳补肾，藏精固本',
      tip: '冬应于肾，宜食温补之品。冬季是增肌的黄金期，人体合成代谢优于分解代谢。',
      reference: '《素问·四气调神大论》："冬三月，此谓闭藏，水冰地坼，无扰乎阳。"',
      foods: ['羊肉', '核桃', '黑芝麻', '黑豆', '山药', '红枣'],
      recipe: { name: '当归生姜羊肉汤', ingredients: ['羊肉500g', '当归15g', '生姜30g', '黄芪10g'], effect: '温阳补血，适合冬季进补。当归补血、生姜温中、羊肉壮阳，为冬季经典食疗方。' }
    }
  }
}
