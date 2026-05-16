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
    suitable: ['羊肉', '韭菜', '生姜', '肉桂', '核桃', '荔枝', '桂圆', '虾', '小茴香', '牛鞭'],
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
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '大葱', '大蒜', '韭菜', '荔枝', '桂圆', '煎炸食物'],
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
    avoid: ['肥肉', '油炸食品', '甜腻点心', '糯米', '奶油', '芝士', '冰淇淋', '啤酒'],
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
    avoid: ['羊肉', '狗肉', '辣椒', '花椒', '生姜', '大蒜', '荔枝', '桂圆', '酒类'],
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
    suitable: ['山楂', '黑豆', '洋葱', '大蒜', '生姜', '醋', '红花', '丹参', '桃仁', '黑木耳'],
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
    suitable: ['玫瑰花', '佛手', '陈皮', '薄荷', '百合', '小麦', '金桔', '山楂', '香蕉', '鲈鱼'],
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
    text: '您日常的精力状态如何？',
    options: [
      { text: '精力充沛，工作学习效率高', scores: { pinghe: 2, qixu: -1, yangxu: -1 } },
      { text: '偶尔感觉疲劳，休息后能恢复', scores: { qixu: 1 } },
      { text: '经常疲倦乏力，稍微活动就累', scores: { qixu: 2, yangxu: 1 } },
      { text: '严重乏力，什么都不想做，说话都嫌累', scores: { qixu: 3, yangxu: 2, qiyu: 1 } }
    ]
  },
  {
    id: 2,
    text: '您对冷热的耐受情况如何？',
    options: [
      { text: '手脚温暖，耐寒耐热，感觉正常', scores: { pinghe: 1, yangxu: -1, yinxu: -1 } },
      { text: '比较怕冷，秋冬手脚冰凉，喜欢暖和的天气', scores: { yangxu: 2, qixu: 1 } },
      { text: '手脚心发热，怕热喜凉，冬天盖被子也觉得燥热', scores: { yinxu: 2, shire: 1 } },
      { text: '既怕冷又怕热，换季特别不舒服', scores: { qixu: 1, qiyu: 1 } }
    ]
  },
  {
    id: 3,
    text: '您的体型和体重变化情况？',
    options: [
      { text: '体型匀称，体重稳定', scores: { pinghe: 2, tanshi: -1 } },
      { text: '偏瘦，怎么吃都不胖', scores: { yinxu: 1, qixu: 1 } },
      { text: '偏胖，腹部松软，容易长胖', scores: { tanshi: 2, qixu: 1 } },
      { text: '体型不匀称，局部肥胖明显', scores: { tanshi: 2, shire: 1 } }
    ]
  },
  {
    id: 4,
    text: '您的皮肤状态如何？',
    options: [
      { text: '皮肤光滑滋润，颜色正常', scores: { pinghe: 2, yinxu: -1, shire: -1 } },
      { text: '皮肤偏干，容易脱皮起皱', scores: { yinxu: 2, xueyu: 1 } },
      { text: '皮肤出油多，容易长痘痘或湿疹', scores: { shire: 2, tanshi: 1 } },
      { text: '皮肤暗沉，有色斑或瘀斑', scores: { xueyu: 2, qiyu: 1 } }
    ]
  },
  {
    id: 5,
    text: '您的情绪和心理状态？',
    options: [
      { text: '情绪稳定，心态平和', scores: { pinghe: 2, qiyu: -2 } },
      { text: '偶尔心情低落，但能自我调节', scores: { qiyu: 1 } },
      { text: '经常郁闷焦虑，爱叹气，想法多', scores: { qiyu: 2, xueyu: 1 } },
      { text: '容易急躁发怒，控制不住脾气', scores: { shire: 2, qiyu: 1 } }
    ]
  },
  {
    id: 6,
    text: '您的消化和排便情况？',
    options: [
      { text: '消化好，大便规律成形', scores: { pinghe: 2, tanshi: -1, qixu: -1 } },
      { text: '食欲不振，饭后腹胀，大便偏稀', scores: { qixu: 2, tanshi: 1, yangxu: 1 } },
      { text: '大便黏腻不爽，冲不干净，味重', scores: { shire: 2, tanshi: 2, qixu: 1 } },
      { text: '大便干结，像羊粪一样一粒一粒', scores: { yinxu: 2, xueyu: 1 } }
    ]
  },
  {
    id: 7,
    text: '您是否容易感冒或生病？病后恢复如何？',
    options: [
      { text: '很少生病，一年不超过2次', scores: { pinghe: 2, qixu: -2, tebing: -1 } },
      { text: '换季时容易感冒，一般一周恢复', scores: { qixu: 1, tebing: 1 } },
      { text: '经常感冒，恢复慢，容易反复', scores: { qixu: 2, yangxu: 1 } },
      { text: '容易过敏（打喷嚏、流鼻涕、起疹子），但不是感冒', scores: { tebing: 2, qixu: 1 } }
    ]
  },
  {
    id: 8,
    text: '您的面色和舌象表现？',
    options: [
      { text: '面色红润有光泽，舌色淡红', scores: { pinghe: 2, xueyu: -1, qixu: -1 } },
      { text: '面色苍白或萎黄，容易没有血色', scores: { qixu: 2, xueyu: 1, yangxu: 1 } },
      { text: '面色晦暗，唇色偏暗或紫，舌下青筋明显', scores: { xueyu: 2, qiyu: 1 } },
      { text: '面色潮红，两颧发红，像涂了胭脂', scores: { yinxu: 2, shire: 1 } }
    ]
  },
  {
    id: 9,
    text: '您是否有过敏史或特殊体质反应？',
    options: [
      { text: '没有特殊过敏，什么都可以吃', scores: { pinghe: 2, tebing: -2 } },
      { text: '季节变化时容易打喷嚏、流鼻涕', scores: { tebing: 1, qixu: 1 } },
      { text: '有明显过敏（药物/食物/花粉），皮肤容易起疹子', scores: { tebing: 2 } },
      { text: '过敏反应严重（哮喘、喉头水肿等）', scores: { tebing: 3, qixu: 1 } }
    ]
  },
  {
    id: 10,
    text: '您是否感觉身体沉重或有痰？',
    options: [
      { text: '没有，身体轻快', scores: { pinghe: 1, tanshi: -1 } },
      { text: '早晨起来痰多，或喉咙不清爽', scores: { tanshi: 1, shire: 1 } },
      { text: '头重身困，像裹了湿布，总想睡觉', scores: { tanshi: 2, qixu: 1 } },
      { text: '胸闷痰多，感觉喘不上气', scores: { tanshi: 2, qiyu: 1, xueyu: 1 } }
    ]
  },
  {
    id: 11,
    text: '您的睡眠质量如何？',
    options: [
      { text: '睡眠好，入睡快，一觉到天亮', scores: { pinghe: 2, yinxu: -1, qiyu: -1 } },
      { text: '容易醒，夜尿多，睡不够', scores: { yangxu: 2, qixu: 1 } },
      { text: '入睡困难，翻来覆去睡不着', scores: { qiyu: 2, yinxu: 1, xueyu: 1 } },
      { text: '多梦，容易惊醒，醒后口干咽燥', scores: { yinxu: 2, shire: 1, qiyu: 1 } }
    ]
  },
  {
    id: 12,
    text: '您的腰膝状态如何？',
    options: [
      { text: '腰膝有力，活动自如', scores: { pinghe: 1, yangxu: -1, yinxu: -1 } },
      { text: '腰膝酸软，劳累后加重', scores: { yangxu: 1, yinxu: 1 } },
      { text: '经常腰膝冷痛，像有风吹', scores: { yangxu: 2 } },
      { text: '腰膝酸软伴有头晕耳鸣', scores: { yinxu: 2, qixu: 1 } }
    ]
  },
  {
    id: 13,
    text: '您口渴和喝水的情况？',
    options: [
      { text: '不渴不喝，口不干', scores: { pinghe: 1, yinxu: -1, shire: -1 } },
      { text: '口干想喝水，喝温水舒服', scores: { qixu: 1, yinxu: 1 } },
      { text: '经常口干，想喝冷饮冰水', scores: { yinxu: 2, shire: 1 } },
      { text: '口渴但不想喝水，或喝不多', scores: { tanshi: 1, qiyu: 1 } }
    ]
  },
  {
    id: 14,
    text: '您身体是否有固定的疼痛？',
    options: [
      { text: '没有疼痛或不适', scores: { pinghe: 1, xueyu: -1, qiyu: -1 } },
      { text: '偶尔胀痛，位置不固定，与情绪有关', scores: { qiyu: 1 } },
      { text: '有固定位置的刺痛，夜间加重', scores: { xueyu: 2, qiyu: 1 } },
      { text: '关节或肌肉酸痛沉重', scores: { tanshi: 1, xueyu: 1, shire: 1 } }
    ]
  },
  {
    id: 15,
    text: '您是否感觉头晕或耳鸣？',
    options: [
      { text: '没有头晕耳鸣', scores: { pinghe: 1, yinxu: -1, qixu: -1 } },
      { text: '劳累后容易头晕眼花', scores: { qixu: 1, xueyu: 1 } },
      { text: '经常头晕，头重脚轻', scores: { tanshi: 1, qixu: 1 } },
      { text: '经常耳鸣，声音细小持续', scores: { yinxu: 2, yangxu: 1 } }
    ]
  },
  {
    id: 16,
    text: '您的出汗情况如何？',
    options: [
      { text: '出汗正常，运动后适度出汗', scores: { pinghe: 1, qixu: -1, yinxu: -1 } },
      { text: '白天不动也容易出汗（自汗），怕风', scores: { qixu: 2, yangxu: 1 } },
      { text: '晚上睡觉出汗（盗汗），醒后汗止', scores: { yinxu: 2, shire: 1 } },
      { text: '很少出汗，皮肤干燥', scores: { xueyu: 1, yinxu: 1 } }
    ]
  },
  {
    id: 17,
    text: '您的季节适应性如何？',
    options: [
      { text: '四季都适应良好', scores: { pinghe: 2 } },
      { text: '夏季很难受，怕热多汗', scores: { shire: 2, yinxu: 1 } },
      { text: '冬季很难受，怕冷严重', scores: { yangxu: 2, qixu: 1 } },
      { text: '换季时容易不舒服（过敏、感冒等）', scores: { tebing: 2, qixu: 1 } }
    ]
  },
  {
    id: 18,
    text: '您的舌苔情况如何？（请对着镜子观察）',
    options: [
      { text: '舌苔薄白，舌体适中', scores: { pinghe: 2 } },
      { text: '舌苔白腻，舌体胖大有齿痕', scores: { tanshi: 2, qixu: 2 } },
      { text: '舌苔黄腻，舌质偏红', scores: { shire: 2, yinxu: 1 } },
      { text: '舌质暗紫，或有瘀点瘀斑', scores: { xueyu: 2, qiyu: 1 } }
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
    name: '绿豆', type: '豆制品', property: '寒', flavor: '甘', meridian: '心胃',
    effect: '清热解毒、消暑利水',
    nutrition: '富含蛋白质（每100g含21.6g）、膳食纤维、钾、镁、维生素B1。',
    pairing: '宜配薏米（增强祛湿）、百合（润肺清热）、甘草（缓解寒性）。煮汤不宜加碱破坏营养。',
    mechanism: '《本草汇言》："绿豆清暑热，解烦热，润燥热。"绿豆蛋白具有解毒作用，可与有机磷农药等有害物质结合。其寒性可清心胃之火，夏季解暑首选。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '阳虚怕冷者少食，可加姜片中和'
  },
  {
    name: '赤小豆', type: '豆制品', property: '平', flavor: '甘酸', meridian: '心小肠',
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
    name: '银耳', type: '菌菇', property: '平', flavor: '甘', meridian: '肺胃肾',
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
    name: '黑木耳', type: '菌菇', property: '平', flavor: '甘', meridian: '胃大肠',
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
  },
  {
    name: '燕麦', type: '谷物', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾益气、降脂润肠',
    nutrition: '富含β-葡聚糖、蛋白质（每100g含13.5g）、膳食纤维（10.6g）、锰、磷。',
    pairing: '宜配牛奶（补钙增香）、红枣（补气养血）、南瓜（健脾互补）。作早餐最佳。',
    mechanism: '《本草纲目》提及燕麦"充饥滑肠"。β-葡聚糖是其核心活性成分，可显著降低低密度脂蛋白胆固醇、调节肠道菌群。膳食纤维丰富，延缓胃排空、增强饱腹感。',
    suitable: ['qixu', 'tanshi', 'pinghe'], avoid: ['qiyu'], suggestion: '消化不良者宜煮烂食用'
  },
  {
    name: '荞麦', type: '谷物', property: '凉', flavor: '甘', meridian: '脾胃',
    effect: '健脾消积、清热降脂',
    nutrition: '富含芦丁（维生素P）、膳食纤维（每100g含6.5g）、蛋白质（12g）、镁、硒。',
    pairing: '宜配牛奶（平衡凉性）、黄瓜（清爽降糖）、鸡肉（蛋白互补）。适合制作凉面。',
    mechanism: '《本草纲目》："荞麦最降气宽肠，治肠胃沉积。"芦丁可增强毛细血管弹性、辅助降血压。富含的D-手性肌醇有助改善胰岛素敏感性。',
    suitable: ['shire', 'tanshi'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者少食'
  },
  {
    name: '糙米', type: '谷物', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾养胃、补中益气',
    nutrition: '保留胚芽和米糠，富含B族维生素、γ-氨基丁酸（GABA）、膳食纤维（每100g含3.4g）。',
    pairing: '宜配红豆（祛湿补血）、山药（健脾养胃）、红枣（温和补气）。浸泡后煮食更易消化。',
    mechanism: '《食疗本草》："谷皮补虚损。"γ-氨基丁酸具有镇静安神、调节血压的作用。米糠中的谷维素是天然抗氧化剂，有助改善更年期症状。',
    suitable: ['qixu', 'pinghe', 'yinxu'], avoid: ['tanshi'], suggestion: '胃动力弱者宜煮粥食用'
  },
  {
    name: '红薯', type: '根茎', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '补中益气、宽肠通便',
    nutrition: '富含β-胡萝卜素、维生素C、钾、膳食纤维（每100g含3g）。热量仅86kcal。',
    pairing: '宜配小米（健脾养胃）、牛奶（补钙增香）、姜（防胀气）。蒸烤保留最多营养。',
    mechanism: '《本草纲目》："红薯补虚乏，益气力，健脾胃。"其高纤特性促进肠道蠕动，预防便秘。β-胡萝卜素在体内转化为维生素A，保护黏膜健康。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '湿阻中满者不宜多食'
  },
  {
    name: '莲藕', type: '根茎', property: '凉', flavor: '甘', meridian: '心肺',
    effect: '清热生津、凉血散瘀',
    nutrition: '富含维生素C（每100g含44mg）、膳食纤维、钾、鞣质。生熟营养各有侧重。',
    pairing: '宜配排骨（清热不寒）、绿豆（增强清热）、百合（润肺安神）。生榨汁清热效果更佳。',
    mechanism: '《本草经疏》："藕，生者甘寒，能凉血止血；熟者甘温，能健脾开胃。"鞣质具收敛止血作用。丰富的单宁酸可抑制炎症反应。生熟功效迥异，独具特色。',
    suitable: ['shire', 'yinxu', 'xueyu'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜熟食'
  },
  {
    name: '桂圆', type: '果品', property: '温', flavor: '甘', meridian: '心脾',
    effect: '补益心脾、养血安神',
    nutrition: '富含葡萄糖、蔗糖、维生素C、钾、铁。每100g含蛋白质1.2g、铁3.9mg。',
    pairing: '宜配红枣（气血双补）、莲子（安神助眠）、枸杞（滋补肝肾）。泡茶煮粥皆宜。',
    mechanism: '《神农本草经》："龙眼主五脏邪气，安志厌食。"富含的腺苷可调节中枢神经系统，改善睡眠质量。铁和维生素C协同促进血红蛋白合成，为补血佳品。',
    suitable: ['qixu', 'xueyu', 'pinghe'], avoid: ['shire', 'tanshi'], suggestion: '湿盛中满者不宜多食'
  },
  {
    name: '桑葚', type: '果品', property: '寒', flavor: '甘酸', meridian: '肝肾',
    effect: '滋阴补血、生津润燥',
    nutrition: '富含花青素、白藜芦醇、铁、维生素C。每100g含蛋白质1.7g、铁1.85mg。',
    pairing: '宜配黑芝麻（乌发养发）、枸杞（滋补肝肾）、蜂蜜（润肠通便）。鲜食或熬膏皆可。',
    mechanism: '《本草经疏》："桑葚，甘寒益血而除热，为凉血补血益阴之药。"花青素抗氧化能力是维生素C的20倍。白藜芦醇具有抗衰老、保护血管内皮的作用。',
    suitable: ['yinxu', 'xueyu'], avoid: ['yangxu', 'tanshi'], suggestion: '脾胃虚寒便溏者不宜'
  },
  {
    name: '无花果', type: '果品', property: '平', flavor: '甘', meridian: '肺胃',
    effect: '清热生津、健脾开胃',
    nutrition: '富含膳食纤维（每100g含3g）、钙、钾、木瓜蛋白酶。果糖含量高，天然甜味。',
    pairing: '宜配梨（润肺止咳）、蜂蜜（润肠通便）、瘦肉（清热润燥）。鲜食干食皆宜。',
    mechanism: '《本草纲目》："无花果开胃，止泄痢。"木瓜蛋白酶可分解蛋白质，促进消化吸收。水溶性膳食纤维果胶有助调节肠道菌群、缓解便秘。',
    suitable: ['yinxu', 'pinghe', 'qixu'], avoid: ['tanshi'], suggestion: '糖尿病者不宜多食'
  },
  {
    name: '猪肉', type: '畜肉', property: '平', flavor: '甘咸', meridian: '脾胃肾',
    effect: '滋阴润燥、补血益气',
    nutrition: '富含优质蛋白（每100g瘦肉含20g）、维生素B1、铁、锌。脂肪含量因部位而异。',
    pairing: '宜配莲藕（滋阴清热）、白菜（均衡营养）、萝卜（助消化）。慢炖最宜滋养。',
    mechanism: '《本草备要》："猪肉，味甘咸，其肉隽永，食之润肠胃，生精液。"瘦肉中丰富的维生素B1是能量代谢关键辅酶。铁以血红素形式存在，吸收率远高于植物源。',
    suitable: ['yinxu', 'qixu'], avoid: ['tanshi'], suggestion: '痰湿肥胖者宜选瘦肉部位'
  },
  {
    name: '乌鸡', type: '禽肉', property: '平', flavor: '甘', meridian: '肝肾',
    effect: '补肝肾、益气血、退虚热',
    nutrition: '富含黑色素、多种氨基酸、维生素E、铁、锌。蛋白质含量高于普通鸡（每100g含22g）。',
    pairing: '宜配当归（经典补血组合）、黄芪（益气固表）、红枣（气血双补）。炖汤效果最佳。',
    mechanism: '《本草纲目》："乌鸡补虚劳羸弱，治消渴。"黑色素赋予其独特营养价值，具有抗氧化、延缓衰老作用。丰富的锌和维生素E协同调节免疫、促进生殖健康。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '感冒发热期间不宜'
  },
  {
    name: '黑豆', type: '豆制品', property: '平', flavor: '甘', meridian: '脾肾',
    effect: '补肾益阴、活血利水',
    nutrition: '富含优质蛋白（每100g含36g）、花青素、膳食纤维、钙、铁。',
    pairing: '宜配乌鸡（补肾增效）、红枣（补血养颜）、海带（软坚散结）。醋泡黑豆更利吸收。',
    mechanism: '《本草纲目》："黑豆入肾功多，故能治水、消胀、下气。"花青素赋予黑皮抗氧化能力。大豆异黄酮双向调节雌激素水平，有助缓解更年期不适。',
    suitable: ['qixu', 'xueyu', 'tanshi'], avoid: ['tebing'], suggestion: '消化不良者宜磨浆或煮烂食用'
  },
  {
    name: '黄豆', type: '豆制品', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾宽中、润燥消水',
    nutrition: '富含优质植物蛋白（每100g含35g）、大豆卵磷脂、钙、镁。完全的氨基酸谱。',
    pairing: '宜配猪蹄（胶原蛋白互补）、萝卜（助消化防胀气）、海带（营养协同）。制成豆腐更易消化。',
    mechanism: '《日用本草》："黄豆宽中下气，利大肠。"大豆卵磷脂是细胞膜的重要组分，有助降低胆固醇。大豆异黄酮具有抗氧化、预防骨质疏松的作用。',
    suitable: ['qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '痛风急性发作期慎食'
  },
  {
    name: '芹菜', type: '蔬菜', property: '凉', flavor: '甘辛', meridian: '肝胃',
    effect: '清热平肝、利水消肿',
    nutrition: '低热量（每100g仅16kcal）、富含钾、膳食纤维、芹菜素、维生素K。',
    pairing: '宜配百合（清热安神）、牛肉（营养互补）、豆腐干（高钙搭配）。榨汁饮降压效果更佳。',
    mechanism: '《本草推陈》："芹菜治肝阳头痛。"芹菜素具有舒张血管平滑肌、辅助降压的作用。高钾低钠特性促进钠离子排出，协同降压利水。',
    suitable: ['shire', 'tanshi', 'qiyu'], avoid: ['yangxu', 'qixu'], suggestion: '低血压者不宜多食'
  },
  {
    name: '菠菜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '肠胃',
    effect: '养血止血、滋阴润燥',
    nutrition: '富含铁、叶酸、维生素K、胡萝卜素、膳食纤维。每100g含铁2.9mg、叶酸194μg。',
    pairing: '宜配鸡蛋（铁吸收增效）、芝麻酱（补钙）、猪肝（经典补血组合）。焯水去草酸再烹饪。',
    mechanism: '《本草纲目》："菠菜通血脉，开胸膈，下气调中。"叶酸是DNA合成必需物质，对孕妇尤为重要。丰富的维生素K促进凝血因子合成，"止血"作用即基于此。',
    suitable: ['yinxu', 'xueyu', 'shire'], avoid: ['yangxu'], suggestion: '肾结石患者焯水后食用'
  },
  {
    name: '番茄', type: '蔬菜', property: '微寒', flavor: '甘酸', meridian: '肝脾胃',
    effect: '生津止渴、健胃消食',
    nutrition: '富含番茄红素、维生素C（每100g含14mg）、钾、β-胡萝卜素。煮熟后番茄红素更易吸收。',
    pairing: '宜配鸡蛋（黄金搭档，番茄红素遇油释放）、牛腩（补铁增鲜）、西兰花（抗氧化协同）。',
    mechanism: '《陆川本草》："番茄生津止渴，健胃消食。"番茄红素是强效抗氧化剂，清除单线态氧能力是维生素E的100倍。有机酸促进胃液分泌，"健胃消食"即基于此。',
    suitable: ['shire', 'yinxu', 'tanshi'], avoid: ['yangxu'], suggestion: '未成熟青番茄含龙葵碱不宜生食'
  },
  {
    name: '黄瓜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '脾胃',
    effect: '清热利水、解毒消肿',
    nutrition: '含水量96%以上，极低热量（每100g约15kcal）。富含维生素K、钾、硅。',
    pairing: '宜配大蒜（杀菌提味）、木耳（清肠排毒）、鸡蛋（均衡营养）。凉拌最宜夏季。',
    mechanism: '《本草拾遗》："黄瓜清热解渴，利水道。"丙醇二酸可抑制糖类转化为脂肪。富含的硅元素有助结缔组织健康。高水分配合膳食纤维，天然"清道夫"。',
    suitable: ['shire', 'tanshi'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜加蒜姜同食'
  },
  {
    name: '香菇', type: '菌菇', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾开胃、益气补虚',
    nutrition: '富含香菇多糖、麦角甾醇（维生素D前体）、蛋白质（每100g含20g干品）、硒。',
    pairing: '宜配鸡肉（鲜美补气）、油菜（营养均衡）、豆腐（植物蛋白互补）。晒后维生素D含量更高。',
    mechanism: '《本草求真》："香菇大能益胃助食。"香菇多糖具有显著的免疫调节活性，可激活巨噬细胞。麦角甾醇经紫外线照射转化为维生素D2，有助钙吸收。',
    suitable: ['qixu', 'pinghe'], avoid: ['tebing'], suggestion: '菌菇过敏者不宜'
  },
  {
    name: '杏仁', type: '种子', property: '微温', flavor: '甘', meridian: '肺大肠',
    effect: '止咳平喘、润肠通便',
    nutrition: '富含维生素E（每100g含25.6mg）、单不饱和脂肪酸、镁、膳食纤维。',
    pairing: '宜配银耳（润肺止咳）、牛奶（安神助眠）、蜂蜜（润肠效果倍增）。每日5-10粒为宜。',
    mechanism: '《本草纲目》："杏仁能散能降，故解肌散风、降气润燥。"苦杏仁苷可分解产生微量氢氰酸，抑制呼吸中枢过度兴奋而止咳。脂肪油润滑肠道，促进排便。',
    suitable: ['yinxu', 'qixu'], avoid: ['tanshi'], suggestion: '苦杏仁有小毒，不宜生食过量'
  },
  {
    name: '芡实', type: '种子', property: '平', flavor: '甘涩', meridian: '脾胃肾',
    effect: '益肾固精、健脾止泻',
    nutrition: '富含淀粉、蛋白质、钙、磷、铁、维生素B族。每100g含蛋白质8.3g。',
    pairing: '宜配莲子（健脾固肾经典组合）、山药（补脾止泻）、茯苓（增强祛湿）。煮粥最宜。',
    mechanism: '《本草纲目》："芡实止渴益肾，治小便不禁、遗精。"其涩性收敛，可减少肠道水分流失而止泻。富含的棉子糖促进双歧杆菌增殖，调节肠道微生态。',
    suitable: ['qixu', 'yangxu', 'pinghe'], avoid: ['shire'], suggestion: '便秘及腹胀者不宜'
  },
  {
    name: '虾', type: '水产', property: '温', flavor: '甘咸', meridian: '肝肾',
    effect: '补肾壮阳、通乳托毒',
    nutrition: '富含优质蛋白（每100g含20g）、锌、硒、碘、虾青素。几乎不含碳水化合物。',
    pairing: '宜配韭菜（经典温阳组合）、豆腐（补钙）、西蓝花（抗氧化协同）。姜蒜佐之去寒。',
    mechanism: '《本草纲目》："虾，补肾壮阳。"虾青素是自然界最强抗氧化剂之一。锌是睾酮合成必需元素，与"壮阳"传统认知相符。高蛋白低脂，适合健身人群。',
    suitable: ['yangxu', 'qixu'], avoid: ['shire', 'tebing'], suggestion: '海鲜过敏者及痛风患者不宜'
  },
  {
    name: '紫菜', type: '藻类', property: '寒', flavor: '甘咸', meridian: '肺肾',
    effect: '化痰软坚、清热利水',
    nutrition: '富含碘（每100g含4500μg）、藻胆蛋白、膳食纤维、钙、镁。蛋白质含量约30%。',
    pairing: '宜配鸡蛋（营养互补）、虾皮（补钙提鲜）、豆腐（碘钙同补）。紫菜汤是最佳食用方式。',
    mechanism: '《本草经集注》："紫菜治瘿瘤结气。"藻胆蛋白具有抗氧化、抗炎活性。丰富的碘是甲状腺激素合成原料，"软坚散结"即改善甲状腺肿大。',
    suitable: ['tanshi', 'shire'], avoid: ['yangxu'], suggestion: '甲亢患者不宜；脾胃虚寒者少食'
  },
  {
    name: '大蒜', type: '调料', property: '温', flavor: '辛', meridian: '脾胃肺',
    effect: '温中行滞、解毒杀虫',
    nutrition: '富含大蒜素、硒、锗、维生素B6、锰。每100g含蛋白质4.5g。',
    pairing: '宜配醋（杀菌协同）、蜂蜜（缓解辛辣）、生姜（温中加倍）。捣碎静置10分钟再烹饪。',
    mechanism: '《本草纲目》："大蒜，其气熏烈，能通五脏，达诸窍。"大蒜素是其核心活性成分，具有广谱抗菌、抗病毒、抗癌作用。硫化丙烯促进胃液分泌，"温中行滞"即基于此。',
    suitable: ['yangxu', 'tanshi'], avoid: ['yinxu', 'shire'], suggestion: '阴虚火旺及目疾者不宜'
  },
  {
    name: '肉桂', type: '调料', property: '热', flavor: '辛甘', meridian: '肾脾心',
    effect: '补火助阳、散寒止痛',
    nutrition: '富含桂皮醛、桂皮酸、挥发油、钙、锰。每100g含膳食纤维53g。',
    pairing: '宜配红茶（温阳暖身）、苹果（增香调味）、羊肉（增强温补）。少量入膳即可。',
    mechanism: '《神农本草经》："肉桂主上气咳逆，结气喉痹。"桂皮醛具有扩张末梢血管、促进血液循环的作用。现代研究证实其可增强胰岛素敏感性、辅助调节血糖。',
    suitable: ['yangxu', 'xueyu'], avoid: ['yinxu', 'shire', 'tebing'], suggestion: '阴虚火旺、孕妇及出血倾向者不宜'
  },
  {
    name: '薄荷', type: '花茶', property: '凉', flavor: '辛', meridian: '肺肝',
    effect: '疏散风热、清利头目',
    nutrition: '富含薄荷醇、薄荷酮、挥发油、维生素C、钾。',
    pairing: '宜配绿茶（清凉提神）、金银花（双倍清热）、柠檬（增味补充维C）。泡茶水温不宜过高。',
    mechanism: '《本草纲目》："薄荷，辛能发散，凉能清利。"薄荷醇激活TRPM8冷觉受体，产生清凉感。挥发油具有解痉、抗炎作用，可缓解头痛鼻塞。',
    suitable: ['shire', 'qiyu'], avoid: ['yangxu', 'qixu'], suggestion: '阴虚血燥、多汗者不宜'
  },
  {
    name: '金银花', type: '花茶', property: '寒', flavor: '甘', meridian: '肺心胃',
    effect: '清热解毒、疏散风热',
    nutrition: '富含绿原酸、木犀草苷、挥发油、皂苷。多种活性成分协同作用。',
    pairing: '宜配菊花（增强清热）、薄荷（疏风散热）、甘草（调和寒性）。泡水代茶饮。',
    mechanism: '《本草拾遗》："金银花清热解毒。"绿原酸是其核心抗菌活性成分，对多种致病菌有抑制作用。木犀草苷具有抗炎、抗病毒作用。被誉为"中药抗生素"。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者不宜长期服用'
  },
  {
    name: '当归', type: '药材', property: '温', flavor: '甘辛', meridian: '肝心脾',
    effect: '补血活血、调经止痛',
    nutrition: '富含阿魏酸、当归多糖、挥发油、维生素B12、叶酸。',
    pairing: '宜配黄芪（经典气血双补）、川芎（活血增效）、生姜（温中散寒）。炖汤入膳最宜。',
    mechanism: '《本草正》："当归，其味甘而重，故专能补血；其气轻而辛，故又能行血。"阿魏酸具有抗血小板聚集、改善微循环的作用。当归多糖可促进造血干细胞增殖。',
    suitable: ['xueyu', 'qixu', 'yangxu'], avoid: ['shire', 'yinxu'], suggestion: '湿盛中满、大便溏泻者不宜'
  },
  {
    name: '甘草', type: '药材', property: '平', flavor: '甘', meridian: '心肺脾胃',
    effect: '补脾益气、调和诸药',
    nutrition: '富含甘草酸、甘草苷、异甘草素、黄酮类。',
    pairing: '宜配桂枝（温阳益气）、白芍（缓急止痛）、桔梗（利咽止咳）。少量入方可调和药性。',
    mechanism: '《本草正》："甘草，味至甘，得中和之性，有调补之功。"甘草酸具有糖皮质激素样抗炎作用，但无其副作用。甘草苷可保护胃黏膜、抗溃疡。',
    suitable: ['qixu', 'pinghe'], avoid: ['tanshi', 'shire'], suggestion: '水肿及高血压者不宜长期服用'
  },
  {
    name: '红糖', type: '其他', property: '温', flavor: '甘', meridian: '脾胃肝',
    effect: '补中缓肝、活血和瘀',
    nutrition: '富含蔗糖、铁、钙、锰、锌。未经精炼保留更多矿物质（每100g含铁4mg）。',
    pairing: '宜配姜（暖宫驱寒经典）、红枣（补血养颜）、山楂（活血调经）。经期饮用最佳。',
    mechanism: '《本草纲目》："红糖利脾缓肝，补血活血。"未精炼工艺保留了甘蔗中的矿物质，铁含量高于白糖。温中散寒特性可改善痛经，活血化瘀促进经血排出。',
    suitable: ['xueyu', 'yangxu', 'qixu'], avoid: ['shire', 'tanshi'], suggestion: '糖尿病及湿热体质不宜'
  },
  {
    name: '鲈鱼', type: '水产', property: '平', flavor: '甘', meridian: '脾胃肝肾',
    effect: '益脾胃、补肝肾、安胎',
    nutrition: '富含优质蛋白（每100g含18.6g）、DHA、EPA、钙、磷、硒。低脂高蛋白。',
    pairing: '宜配豆腐（钙吸收增效）、姜丝（去腥温中）、葱（增香提鲜）。清蒸最宜。',
    mechanism: '《本草纲目》："鲈鱼，补五脏，益筋骨，和肠胃。"DHA含量居鱼类前列，有助脑发育。高蛋白低脂肪结构易被人体吸收，尤宜术后恢复。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '痛风急性期慎食'
  },
  {
    name: '南瓜', type: '蔬菜', property: '温', flavor: '甘', meridian: '脾胃',
    effect: '补中益气、解毒消肿',
    nutrition: '富含β-胡萝卜素（每100g含3100μg）、维生素C、钴、膳食纤维。热量仅22kcal。',
    pairing: '宜配小米（健脾养胃）、红枣（补气养血）、山药（增强补益）。蒸煮最宜。',
    mechanism: '《本草纲目》："南瓜入脾胃经，补中益气。"钴是维生素B12的核心成分，促进造血功能。南瓜多糖可调节免疫、辅助降血糖。',
    suitable: ['qixu', 'yangxu', 'tebing'], avoid: ['yinxu', 'shire'], suggestion: '湿热体质少食'
  },
  {
    name: '鸡蛋', type: '禽蛋', property: '平', flavor: '甘', meridian: '心肺',
    effect: '滋阴润燥、养血安神',
    nutrition: '富含优质蛋白（每100g含13g）、卵磷脂、维生素A、D、B12。蛋黄含叶黄素。',
    pairing: '宜配番茄（黄金搭档，提高茄红素吸收）、韭菜（温阳互补）、银耳（滋阴润燥）。',
    mechanism: '《本草便读》："鸡子内黄外白，入心肺，宁神定魄。"卵磷脂是细胞膜重要组分，促进神经发育。叶黄素保护视网膜，预防黄斑变性。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿体质宜去蛋黄食用'
  },
  {
    name: '排骨', type: '畜肉', property: '平', flavor: '甘咸', meridian: '脾胃肾',
    effect: '滋阴壮骨、补血益气',
    nutrition: '富含蛋白质（每100g瘦肉含18g）、钙、磷、骨胶原、维生素B1。',
    pairing: '宜配莲藕（清热滋阴）、萝卜（助消化）、冬瓜（清热利水）。慢炖使骨胶原溶出。',
    mechanism: '《本草备要》："猪肉补脾气，润肠胃。"骨胶原经慢炖转化为明胶，促进关节健康。丰富的磷酸钙有助骨骼发育，尤宜成长期儿童。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '痰湿肥胖者宜选瘦排去油炖煮'
  },
  {
    name: '青椒', type: '蔬菜', property: '温', flavor: '辛', meridian: '心脾胃',
    effect: '温中散寒、开胃消食',
    nutrition: '维生素C含量极高（每100g含144mg，是柠檬的3倍），富含辣椒素、维生素A。',
    pairing: '宜配鸡蛋（营养互补）、牛肉（补铁增香）、土豆（口感柔和）。急火快炒保留维C。',
    mechanism: '《本草纲目》："青椒，味辛性热，温中散寒。"辣椒素可刺激胃液分泌、促进食欲。维生素C含量为蔬菜之冠，强效抗氧化，促进铁吸收。',
    suitable: ['yangxu', 'qixu', 'xueyu'], avoid: ['yinxu', 'shire'], suggestion: '阴虚火旺及目疾者少食'
  },
  {
    name: '佛手瓜', type: '蔬菜', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '疏肝理气、健脾和中',
    nutrition: '低热量（每100g仅16kcal），富含维生素C、钾、膳食纤维、锌。',
    pairing: '宜配瘦肉（平衡营养）、胡萝卜（增色增香）、木耳（清肠排毒）。清炒或煮汤皆宜。',
    mechanism: '《滇南本草》："佛手瓜理气和中，疏肝解郁。"其含有的挥发油成分可舒缓平滑肌痉挛。高钾低钠特性有助调节血压，膳食纤维促进肠道健康。',
    suitable: ['qiyu', 'qixu', 'pinghe'], avoid: [], suggestion: '一般人群皆可食用'
  },
  {
    name: '金桔', type: '果品', property: '温', flavor: '甘酸', meridian: '肺胃',
    effect: '理气解郁、化痰止咳',
    nutrition: '富含维生素C（每100g含43mg）、金桔苷、挥发油、膳食纤维。果皮营养高于果肉。',
    pairing: '宜配蜂蜜（润肺止咳经典）、冰糖（缓酸增甜）、姜（增强散寒）。连皮食用效果最佳。',
    mechanism: '《本草纲目》："金桔下气快膈，止渴解酲。"金桔苷可舒张支气管，缓解咳嗽。挥发油促进消化液分泌，行气消胀。果皮中柠檬烯含量丰富，具有抗炎活性。',
    suitable: ['qiyu', 'yangxu', 'tanshi'], avoid: ['yinxu'], suggestion: '阴虚燥咳者不宜'
  },
  {
    name: '灵芝', type: '药材', property: '平', flavor: '甘', meridian: '心肺肝肾',
    effect: '补气安神、止咳平喘',
    nutrition: '富含灵芝多糖、三萜类化合物（灵芝酸）、腺苷、有机锗。',
    pairing: '宜配鸡肉（补气增效）、红枣（养血安神）、枸杞（滋补肝肾）。炖汤或泡水皆宜。',
    mechanism: '《神农本草经》列灵芝为上品，"主胸中结，益心气，补中"。灵芝多糖调节免疫、抗肿瘤。三萜类化合物（灵芝酸）可抑制组胺释放，改善过敏与哮喘。',
    suitable: ['qixu', 'tebing', 'pinghe'], avoid: ['shire'], suggestion: '湿热体质不宜；手术前后一周停用'
  },
  {
    name: '苹果', type: '果品', property: '凉', flavor: '甘酸', meridian: '脾胃',
    effect: '生津润肺、除烦解暑',
    nutrition: '富含果胶、维生素C（每100g含4mg）、钾、槲皮素。每日一苹果医生远离我。',
    pairing: '宜配燕麦（降脂早餐）、肉桂（温中调味）、胡萝卜（护眼果汁）。带皮食用更佳。',
    mechanism: '《食疗本草》："苹果主补中焦诸不足。"果胶促进肠道有益菌增殖、调节血脂。槲皮素是强效抗炎黄酮类物质，可保护心脑血管。',
    suitable: ['yinxu', 'shire', 'pinghe'], avoid: ['yangxu'], suggestion: '胃寒者宜蒸煮后食用'
  },
  {
    name: '香蕉', type: '果品', property: '寒', flavor: '甘', meridian: '肺大肠',
    effect: '清热润肠、降血压',
    nutrition: '富含钾（每100g含256mg）、镁、维生素B6、色氨酸。碳水含量高（22g/100g）。',
    pairing: '宜配牛奶（安神助眠）、燕麦（能量早餐）、蜂蜜（润肠通便）。运动前后食用佳。',
    mechanism: '《本草求原》："香蕉止渴润肠。"高钾低钠特性有助排出多余钠离子、辅助降压。色氨酸在体内转化为血清素和褪黑素，改善情绪与睡眠。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'tanshi'], suggestion: '脾胃虚寒及痰湿体质少食'
  },
  {
    name: '牛奶', type: '乳品', property: '平', flavor: '甘', meridian: '心肺胃',
    effect: '补虚损、益肺胃、生津润肠',
    nutrition: '富含优质蛋白（每100g含3g）、钙（104mg）、磷、维生素D、B2。天然钙源首选。',
    pairing: '宜配燕麦（营养早餐）、蜂蜜（安神助眠）、红枣（补血调饮）。睡前温饮安神。',
    mechanism: '《滇南本草》："牛奶补虚弱，止渴养心血。"乳清蛋白含全部必需氨基酸，生物利用率高。钙磷比例（1.3:1）接近人体骨骼组成，吸收率优于植物钙。',
    suitable: ['yinxu', 'qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '乳糖不耐受者可选酸奶或舒化奶'
  },
  {
    name: '豆腐', type: '豆制品', property: '凉', flavor: '甘', meridian: '脾胃大肠',
    effect: '清热润燥、补中益气',
    nutrition: '富含优质植物蛋白（每100g含8g）、钙（140mg，石膏豆腐更佳）、大豆异黄酮。',
    pairing: '宜配海带（碘钙互补）、鱼虾（蛋白协同）、香菇（增鲜提味）。搭配动物蛋白提升吸收。',
    mechanism: '《本草纲目》："豆腐清热散血，和脾胃。"大豆异黄酮双向调节雌激素，预防骨质疏松。石膏豆腐含钙量是内酯豆腐的3倍，补钙首选。',
    suitable: ['shire', 'yinxu', 'pinghe'], avoid: ['yangxu', 'tanshi'], suggestion: '痛风急性期及脾胃虚寒者少食'
  },
  {
    name: '白菜', type: '蔬菜', property: '平', flavor: '甘', meridian: '肠胃',
    effect: '清热除烦、通利肠胃',
    nutrition: '低热量（每100g仅16kcal），富含维生素C、K、膳食纤维、叶酸。含水量95%。',
    pairing: '宜配豆腐（清热搭档）、猪肉（均衡营养）、粉丝（经典炖菜）。腌制泡菜益生菌丰富。',
    mechanism: '《本草纲目拾遗》："白菜甘温无毒，利肠胃。"含有的吲哚-3-甲醇可促进肝脏解毒酶活性。丰富的膳食纤维促进肠道蠕动，预防便秘。',
    suitable: ['shire', 'pinghe'], avoid: ['yangxu'], suggestion: '阳虚泄泻者不宜多食'
  },
  {
    name: '玉米', type: '谷物', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '调中开胃、利尿消肿',
    nutrition: '富含膳食纤维（每100g含2.9g）、B族维生素、镁、叶黄素、玉米黄质。',
    pairing: '宜配排骨（炖汤鲜美）、胡萝卜（营养互补）、青豆（多彩杂蔬）。煮食保留最多营养。',
    mechanism: '《本草推陈》："玉米调中开胃。"叶黄素和玉米黄质选择性沉积于黄斑区，保护视力。不溶性膳食纤维促进肠道蠕动，预防肠癌。',
    suitable: ['qixu', 'tanshi', 'pinghe'], avoid: ['qiyu'], suggestion: '胃动力弱者宜煮粥食用'
  },
  {
    name: '茄子', type: '蔬菜', property: '凉', flavor: '甘', meridian: '脾胃大肠',
    effect: '清热活血、消肿止痛',
    nutrition: '富含花青素（紫茄皮）、维生素P（芦丁）、膳食纤维。每100g仅22kcal。',
    pairing: '宜配蒜（杀菌提味）、青椒（维C互促）、豆角（经典家常组合）。蒸茄子最利健康。',
    mechanism: '《本草纲目》："茄子散血消肿。"维生素P（芦丁）可增强毛细血管弹性，辅助降血压。紫茄皮中花青素抗氧化能力是维生素C的20倍。',
    suitable: ['shire', 'xueyu'], avoid: ['yangxu'], suggestion: '脾胃虚寒者少食，不宜生食'
  },
  {
    name: '丝瓜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '肺胃肝',
    effect: '清热化痰、凉血通络',
    nutrition: '富含维生素C（每100g含8mg）、B族维生素、皂苷、丝瓜络多糖。含水量94%。',
    pairing: '宜配鸡蛋（清热滋润）、豆腐（美白搭档）、虾仁（鲜美补钙）。清炒或煮汤皆宜。',
    mechanism: '《本草纲目》："丝瓜清热利肠，凉血解毒。"丝瓜络多糖可调节免疫，其独特的网状纤维结构有助缓解乳腺炎。皂苷类成分具有祛痰止咳作用。',
    suitable: ['shire', 'tanshi', 'yinxu'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜加姜蒜同炒'
  },
  {
    name: '洋葱', type: '蔬菜', property: '温', flavor: '辛', meridian: '肺胃',
    effect: '理气和胃、健脾杀菌',
    nutrition: '富含槲皮素、硫化物、硒、膳食纤维。每100g含蛋白质1.1g、钾147mg。',
    pairing: '宜配木耳（活血搭档）、牛肉（增香补铁）、鸡蛋（家常经典）。紫皮洋葱营养更佳。',
    mechanism: '《本草食疗》："洋葱通阳气，散寒邪。"槲皮素具有强抗氧化、抗炎、抗过敏作用。硫化物赋予刺激性气味，可扩张血管、辅助降血压。',
    suitable: ['yangxu', 'xueyu', 'qixu'], avoid: ['yinxu', 'shire'], suggestion: '阴虚目赤者少食'
  },
  {
    name: '西兰花', type: '蔬菜', property: '凉', flavor: '甘', meridian: '脾胃',
    effect: '补肾填精、健脑强骨',
    nutrition: '富含维生素K（每100g含101μg）、C、萝卜硫素、钙、叶酸。营养密度极高。',
    pairing: '宜配虾仁（蛋白互补）、蒜蓉（增香杀菌）、胡萝卜（多彩抗氧化）。焯水后凉拌最宜。',
    mechanism: '《食疗本草》："西兰花利五脏，补骨髓。"萝卜硫素是强效抗癌活性物质，可激活肝脏解毒酶。维生素K促进骨钙素合成，与钙协同预防骨质疏松。',
    suitable: ['yinxu', 'shire', 'pinghe'], avoid: ['yangxu'], suggestion: '甲状腺功能减退者不宜生食'
  },
  {
    name: '西瓜', type: '果品', property: '寒', flavor: '甘', meridian: '心胃膀胱',
    effect: '清热解暑、利尿除烦',
    nutrition: '含水量92%，富含番茄红素、维生素C、瓜氨酸。每100g仅30kcal。',
    pairing: '宜配薄荷（清凉消暑）、蜂蜜（解暑饮品）、盐（补充电解质）。冰镇后食用解暑更佳。',
    mechanism: '《食疗本草》："西瓜清暑热，解烦渴。"瓜氨酸可在体内转化为精氨酸，促进血管舒张、改善循环。番茄红素含量不输番茄，强效抗氧化。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者不宜冰镇食用'
  },
  {
    name: '葡萄', type: '果品', property: '平', flavor: '甘酸', meridian: '肺脾肾',
    effect: '补气血、强筋骨、利小便',
    nutrition: '富含花青素（紫葡萄）、白藜芦醇、维生素C、钾。每100g含蛋白质0.5g。',
    pairing: '宜配核桃（补肾健脑）、酸奶（益生菌组合）、蜂蜜（润燥调味）。洗净连皮食用。',
    mechanism: '《神农本草经》："葡萄主筋骨湿痹，益气倍力。"白藜芦醇激活SIRT1长寿基因，延缓衰老。花青素保护血管内皮，改善微循环。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '糖尿病及痰湿体质少食'
  },
  {
    name: '桃子', type: '果品', property: '温', flavor: '甘酸', meridian: '肺大肠',
    effect: '补中益气、养阴生津',
    nutrition: '富含维生素C（每100g含10mg）、钾、膳食纤维、果胶。胡萝卜素较丰富。',
    pairing: '宜配酸奶（润肠养胃）、蜂蜜（润燥增甜）、银耳（滋阴养颜）。鲜食或制罐头皆宜。',
    mechanism: '《滇南本草》："桃子通月经，润大肠。"果胶促进肠蠕动，缓解便秘。桃仁含苦杏仁苷，止咳降气。维生素C与多酚协同抗氧化。',
    suitable: ['yangxu', 'qixu'], avoid: ['yinxu', 'shire'], suggestion: '内热偏盛者不宜多食'
  },
  {
    name: '大葱', type: '蔬菜', property: '温', flavor: '辛', meridian: '肺胃',
    effect: '发汗解表、通阳散寒',
    nutrition: '富含硫化物（蒜素）、维生素C、硒、膳食纤维。葱白营养高于葱叶。',
    pairing: '宜配生姜（辛温解表）、豆豉（经典解表组合）、豆腐（一清一温）。入汤羹调味。',
    mechanism: '《神农本草经》："葱白主伤寒寒热，出汗。"蒜素（allicin）具有广谱抗菌作用。挥发油刺激汗腺分泌，促进发汗散热，"通阳"即宣通阳气。',
    suitable: ['yangxu', 'qixu'], avoid: ['yinxu', 'shire'], suggestion: '表虚多汗及阴虚者不宜'
  },
  {
    name: '绿豆芽', type: '蔬菜', property: '凉', flavor: '甘', meridian: '三焦',
    effect: '清热解暑、利尿消肿',
    nutrition: '极低热量（每100g仅18kcal），富含维生素C、B族、膳食纤维。发芽后维C增7倍。',
    pairing: '宜配韭菜（温凉平衡）、鸡蛋（营养互补）、醋（提味增脆）。急火快炒保留脆嫩。',
    mechanism: '《本草纲目》："绿豆芽解酒毒、热毒。"发芽过程激活多种酶类，营养生物利用度提升。膳食纤维促进肠道蠕动，利尿消肿功效源自其高钾低钠特性。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒者宜加姜丝同炒'
  },
  {
    name: '绿茶', type: '花茶', property: '微寒', flavor: '甘苦', meridian: '心肺胃',
    effect: '清热降火、提神醒脑',
    nutrition: '富含茶多酚（儿茶素占干重30%）、咖啡因、维生素C、氟。抗氧化之王。',
    pairing: '宜配菊花（清热明目）、薄荷（清凉提神）、蜂蜜（缓苦涩）。80℃冲泡保留营养。',
    mechanism: '《本草拾遗》："茶苦寒，久食令人瘦。"儿茶素（EGCG）是强效抗氧化剂，清除自由基能力是维生素E的50倍。咖啡因阻断腺苷受体，提神而不致心悸。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '胃寒者饭后饮用，忌空腹浓茶'
  },
  {
    name: '醋', type: '调料', property: '温', flavor: '酸苦', meridian: '肝胃',
    effect: '活血散瘀、消食开胃',
    nutrition: '富含醋酸、氨基酸、有机酸、钙、钾。酿造醋含益生菌和活性酶。',
    pairing: '宜配花生（软化血管）、姜（温中调味）、蒜（杀菌协同）。凉拌炖煮皆可入馔。',
    mechanism: '《本草拾遗》："醋破血瘀，除食积。"醋酸可延缓餐后血糖升高，降低胰岛素波动。柠檬酸促进钙质溶解吸收，有助预防结石形成。',
    suitable: ['xueyu', 'tanshi'], avoid: ['qixu'], suggestion: '胃酸过多及服药期间慎食'
  },
  {
    name: '豆浆', type: '豆制品', property: '平', flavor: '甘', meridian: '心肺胃',
    effect: '补虚润燥、清肺化痰',
    nutrition: '富含优质植物蛋白（每100g含3.3g）、大豆异黄酮、卵磷脂、钙。低脂健康饮品。',
    pairing: '宜配红枣（补气血）、核桃（健脑增香）、燕麦（饱腹早餐）。自制豆浆营养最佳。',
    mechanism: '《本草纲目拾遗》："豆浆清肺补胃，润燥化痰。"大豆异黄酮调节雌激素水平，改善更年期不适。卵磷脂中的磷脂酰胆碱是神经递质乙酰胆碱的前体。',
    suitable: ['qixu', 'yinxu', 'pinghe'], avoid: ['tanshi'], suggestion: '痛风急性期慎饮'
  },
  {
    name: '草莓', type: '果品', property: '凉', flavor: '甘酸', meridian: '肺脾',
    effect: '润肺生津、健脾和胃',
    nutrition: '维生素C含量极高（每100g含47mg，超柠檬），富含鞣花酸、花青素、叶酸。',
    pairing: '宜配酸奶（益生菌组合）、蜂蜜（天然甜味）、燕麦（营养早餐）。鲜食保留全部营养。',
    mechanism: '《本草纲目》："草莓补脾气，固元气。"鞣花酸抑制致癌物活性，保护细胞DNA。花青素改善微循环，延缓认知衰老。高维C促进胶原蛋白合成。',
    suitable: ['yinxu', 'shire', 'pinghe'], avoid: ['yangxu'], suggestion: '脾胃虚寒者不宜多食'
  },
  {
    name: '猕猴桃', type: '果品', property: '寒', flavor: '甘酸', meridian: '胃肾',
    effect: '清热生津、和胃降逆',
    nutrition: '维生素C含量极高（每100g含92mg，是橙子的2倍），富含钾、膳食纤维、猕猴桃碱。',
    pairing: '宜配酸奶（润肠组合）、蜂蜜（缓酸调味）、橙子（双重维C）。去皮即食最简。',
    mechanism: '《食疗本草》："猕猴桃止暴渴，解烦热。"猕猴桃碱可分解蛋白质、促进消化。奇异果蛋白酶具抗炎活性，缓解消化不良。高纤维促进肠道蠕动，预防便秘。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu', 'qixu'], suggestion: '脾胃虚寒便溏者不宜'
  },
  {
    name: '茼蒿', type: '蔬菜', property: '平', flavor: '甘辛', meridian: '脾胃',
    effect: '健脾开胃、安神清脑',
    nutrition: '富含维生素A、C、叶酸、钾、钙。每100g含胡萝卜素2.5mg，膳食纤维1.2g。',
    pairing: '宜配蒜（增香杀菌）、豆腐（蛋白互补）、肉片（增鲜提味）。火锅烫食最佳。',
    mechanism: '茼蒿含特殊芳香成分可增进食欲，丰富的叶酸有助调节神经递质。高钾低钠特点辅助控血压。',
    suitable: ['pinghe', 'qixu'], avoid: ['yinxu'], suggestion: '腹泻者少食'
  },
  {
    name: '油菜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '肝脾',
    effect: '清热解毒、散血消肿',
    nutrition: '每100g含钙108mg（媲美牛奶）、维生素C36mg、β-胡萝卜素、叶酸。低热量。',
    pairing: '宜配香菇（增鲜）、蒜蓉（杀菌提味）、豆腐（补钙双效）。急火快炒保留营养。',
    mechanism: '油菜含大量钙质且吸收率高，维生素K协同骨骼健康。硫苷类物质具有抗氧化作用。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu'], suggestion: '脾胃虚寒者不宜多食'
  },
  {
    name: '空心菜', type: '蔬菜', property: '寒', flavor: '甘', meridian: '肠胃',
    effect: '清热凉血、解毒通便',
    nutrition: '每100g含维生素C47mg、叶酸、钙、镁。膳食纤维含量居蔬菜前列。',
    pairing: '宜配蒜（去寒性）、腐乳（增味）、虾酱（提鲜）。焯水凉拌最宜夏季。',
    mechanism: '《广州植物志》："空心菜清热凉血。"含氯原酸抗氧化，粗纤维促进肠道蠕动。碱性食物，调节体内酸碱平衡。',
    suitable: ['shire'], avoid: ['yangxu', 'qixu'], suggestion: '体寒腹泻者忌食'
  },
  {
    name: '卷心菜', type: '蔬菜', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾和胃、益肾生髓',
    nutrition: '富含维生素C（每100g含37mg）、维生素U、叶酸、钾。天然胃黏膜保护剂。',
    pairing: '宜配番茄（酸甜开胃）、木耳（活血搭档）、肉丝（增鲜）。手撕保留营养。',
    mechanism: '维生素U（L-谷氨酰胺）可促进胃黏膜修复再生。萝卜硫素具抗癌活性，高温久煮会破坏。',
    suitable: ['qixu', 'pinghe'], avoid: ['shire', 'tanshi'], suggestion: '甲状腺功能低下者不宜生食'
  },
  {
    name: '茭白', type: '蔬菜', property: '寒', flavor: '甘', meridian: '胃肠',
    effect: '清热解渴、利湿退黄',
    nutrition: '每100g含蛋白质1.4g、膳食纤维1.8g、钾。低脂低热量水生蔬菜。',
    pairing: '宜配肉丝（荤素互补）、木耳（增色同步）、酱油（提鲜）。清炒凉拌皆宜。',
    mechanism: '茭白性寒清热，富含膳食纤维促进代谢。草酸含量较高（烹调前焯水可去除大半）。',
    suitable: ['shire'], avoid: ['yangxu', 'qixu'], suggestion: '肾结石患者慎食，建议焯水后烹饪'
  },
  {
    name: '杏鲍菇', type: '菌菇', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾开胃、降脂润肠',
    nutrition: '每100g含蛋白质2.6g、膳食纤维2.1g、钾、磷、锌。低脂低热量。',
    pairing: '宜配青椒（增色）、牛肉（鲜香组合）、黑胡椒（经典调味）。煎炒炖汤皆可。',
    mechanism: '杏鲍菇多糖增强免疫，β-葡聚糖调节胆固醇代谢。独特杏仁香气来自苯甲醛，可增进食欲。',
    suitable: ['pinghe', 'tanshi'], avoid: [], suggestion: '菌菇过敏者忌食'
  },
  {
    name: '生菜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '肠胃',
    effect: '清热利尿、安神助眠',
    nutrition: '每100g含维生素C18mg、叶酸、β-胡萝卜素。含水量95%以上，低热量。',
    pairing: '宜配蚝油（经典粤式）、蒜蓉（杀菌增香）、沙拉醋（低脂调味）。生食保留全部营养。',
    mechanism: '生菜含莴苣素具镇静安神作用，晚餐食用有助睡眠。高含水量促进新陈代谢。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu'], suggestion: '生食需彻底清洗'
  },
  {
    name: '油麦菜', type: '蔬菜', property: '凉', flavor: '甘', meridian: '脾胃',
    effect: '清热润肺、通便利尿',
    nutrition: '每100g含维生素C20mg、胡萝卜素1.5mg、钙70mg、铁。营养价值高于生菜。',
    pairing: '宜配蒜（平衡寒性）、豆豉（增香）、蚝油（提鲜）。急火快炒口感脆嫩。',
    mechanism: '油麦菜含类黄酮化合物抗氧化，膳食纤维促进排便。富含镁元素有助于放松肌肉、改善睡眠。',
    suitable: ['shire', 'yinxu'], avoid: ['yangxu'], suggestion: '脾胃虚寒者宜加姜蒜同烹'
  },
  {
    name: '茶树菇', type: '菌菇', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '健脾益气、补肾利尿',
    nutrition: '每100g（干品）含蛋白质28g、膳食纤维15g、钾、B族维生素、多糖。高蛋白低脂。',
    pairing: '宜配排骨（煲汤经典）、鸡肉（鲜香倍增）、青椒（炒制搭档）。干品需提前泡发。',
    mechanism: '茶树菇多糖激活巨噬细胞，增强免疫功能。含丰富的B族维生素促进能量代谢。',
    suitable: ['qixu', 'tanshi', 'pinghe'], avoid: [], suggestion: '干品需充分泡发，泡发水可用于炖汤'
  },
  {
    name: '木瓜', type: '果品', property: '温', flavor: '甘', meridian: '肝脾胃',
    effect: '健脾消食、通乳养颜',
    nutrition: '富含木瓜蛋白酶、维生素C（每100g含61mg）、β-胡萝卜素、钾、叶酸。',
    pairing: '宜配牛奶（经典甜品）、银耳（养颜组合）、排骨（煲汤）。产后通乳佳品。',
    mechanism: '《本草纲目》："木瓜去湿和胃，滋脾益肺。"木瓜蛋白酶分解蛋白质助消化，效力是菠萝蛋白酶的3倍。番木瓜碱有助通乳。',
    suitable: ['qixu', 'tanshi'], avoid: ['yinxu'], suggestion: '孕妇忌食未成熟木瓜'
  },
  {
    name: '党参', type: '药材', property: '平', flavor: '甘', meridian: '肺脾',
    effect: '补中益气、健脾益肺',
    nutrition: '富含党参多糖、皂苷、甾醇、多种氨基酸和微量元素。',
    pairing: '宜配黄芪（经典补气）、红枣（气血双补）、白术（健脾）。炖汤入膳最佳。',
    mechanism: '《本草从新》："党参补中益气，和脾胃，除烦渴。"党参多糖可增强免疫功能、抗疲劳。其补气之力弱于人参，但胜在平和不燥。',
    suitable: ['qixu', 'qiyu'], avoid: ['shire'], suggestion: '实热证及气滞者不宜单用'
  },
  {
    name: '鸡肉', type: '禽肉', property: '温', flavor: '甘', meridian: '脾胃',
    effect: '温中益气、补精填髓',
    nutrition: '富含优质蛋白（每100g鸡胸肉含31g）、维生素B6、B12、磷、硒。低脂高蛋白。',
    pairing: '宜配黄芪（补气经典）、红枣（温中补血）、香菇（增鲜提味）。炖汤营养最佳。',
    mechanism: '《本草纲目》："鸡肉补中益气，添髓补精。"鸡胸肉蛋白含量高于猪肉和牛肉，且脂肪含量最低。鸡汤中的肌肽和肌酸有助恢复体力。',
    suitable: ['qixu', 'yangxu', 'pinghe'], avoid: ['shire'], suggestion: '感冒发热及湿热体质少食'
  },
  {
    name: '土豆', type: '蔬菜', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '补气健脾、和胃调中',
    nutrition: '每100g含蛋白质2g、维生素C27mg、钾、膳食纤维。糖米指数中等。',
    pairing: '宜配牛肉（经典搭档）、鸡肉（营养互补）、醋（降低升糖反应）。蒸煮优于油炸。',
    mechanism: '《本草纲目拾遗》："土豆补中益气，健脾胃。"土豆蛋白含多种必需氨基酸。抗性淀粉在冷却后形成，有助肠道菌群健康。',
    suitable: ['qixu', 'pinghe'], avoid: ['tanshi'], suggestion: '发芽变绿部分含茄碱，不可食用'
  },
  {
    name: '荔枝', type: '果品', property: '温', flavor: '甘酸', meridian: '肝脾',
    effect: '养血健脾、行气消肿',
    nutrition: '每100g含维生素C41mg、果糖16g、钾、镁。含丰富花青素。',
    pairing: '宜配银耳（温凉平衡）、山药（健脾互补）、红枣（养血搭档）。鲜食或制干皆可。',
    mechanism: '《本草纲目》："荔枝益颜色，通神益智。"荔枝含α-次甲基环丙基甘氨酸，有助调节血糖。花青素抗氧化，延缓衰老。',
    suitable: ['yangxu', 'qixu'], avoid: ['shire', 'yinxu'], suggestion: '一次不宜超过10颗，糖尿病人慎食'
  },
  {
    name: '螃蟹', type: '水产', property: '寒', flavor: '咸', meridian: '肝肾胃',
    effect: '清热散血、续筋接骨',
    nutrition: '每100g含蛋白质14g、锌6mg、硒56μg、维生素A、钙。高蛋白低脂。',
    pairing: '宜配姜醋（去寒杀菌）、紫苏（解蟹毒）、黄酒（温中）。蒸煮食用。',
    mechanism: '《本草拾遗》："蟹脚中髓，能续断绝筋骨。"蟹壳中的甲壳素具调节免疫作用。蟹黄富含卵磷脂和DHA。',
    suitable: ['shire'], avoid: ['yangxu', 'qixu'], suggestion: '孕妇及脾胃虚寒者忌食'
  },
  {
    name: '辣椒', type: '蔬菜', property: '热', flavor: '辛', meridian: '脾胃',
    effect: '温中散寒、开胃消食',
    nutrition: '每100g含维生素C144mg（是柠檬的3倍）、维生素A、β-胡萝卜素、辣椒素。',
    pairing: '宜配蒜（增香杀菌）、豆豉（经典搭配）、生姜（温中协同）。少量调味即可。',
    mechanism: '辣椒素激活TRPV1受体，促进代谢和燃脂。维生素C含量居蔬菜之首，强效抗氧化。',
    suitable: ['yangxu'], avoid: ['shire', 'yinxu'], suggestion: '痔疮、胃溃疡及阴虚火旺者忌食'
  },
  {
    name: '花椒', type: '调料', property: '温', flavor: '辛', meridian: '脾胃肾',
    effect: '温中止痛、祛湿散寒',
    nutrition: '富含挥发油（柠檬烯、香叶醇）、花椒碱、维生素A、钾。',
    pairing: '宜配辣椒（麻辣经典）、姜（去腥增香）、盐（基础调味）。入菜前焙香提味。',
    mechanism: '《本草纲目》："花椒散寒除湿，解郁结。"花椒麻素（羟基-α-山椒素）可刺激唾液分泌、促进食欲。挥发油有抗菌驱虫作用。',
    suitable: ['yangxu', 'tanshi'], avoid: ['yinxu', 'shire'], suggestion: '阴虚火旺及孕妇慎食'
  },
  {
    name: '茯苓', type: '药材', property: '平', flavor: '甘淡', meridian: '心脾肾',
    effect: '健脾渗湿、宁心安神',
    nutrition: '富含茯苓多糖（占干重90%）、三萜类化合物、卵磷脂、钾。',
    pairing: '宜配白术（健脾经典）、薏米（祛湿增效）、莲子（安神互补）。煮粥煲汤皆宜。',
    mechanism: '《神农本草经》："茯苓主胸胁逆气，忧恚惊邪，心下结痛。"茯苓多糖增强免疫力，三萜类化合物利尿消肿。其药性平和，利水而不伤正。',
    suitable: ['tanshi', 'qixu'], avoid: ['yinxu'], suggestion: '阴虚津伤者不宜'
  },
  {
    name: '红花', type: '药材', property: '温', flavor: '辛', meridian: '肝心',
    effect: '活血通经、祛瘀止痛',
    nutrition: '富含红花苷、红花醌苷、亚油酸、维生素E。',
    pairing: '宜配桃仁（活血经典）、当归（补血活血）、川芎（行气增效）。少量入膳。',
    mechanism: '《本草纲目》："红花活血润燥，止痛散肿。"红花苷抑制血小板聚集，改善微循环。亚油酸有助降低血脂。',
    suitable: ['xueyu'], avoid: ['qixu'], suggestion: '孕妇及出血倾向者忌用'
  },
  {
    name: '丹参', type: '药材', property: '微寒', flavor: '苦', meridian: '心肝',
    effect: '活血祛瘀、凉血安神',
    nutrition: '富含丹参酮（脂溶性）、丹酚酸（水溶性）、丹参素、维生素E。',
    pairing: '宜配乌鸡（炖汤经典）、山楂（活血增效）、当归（补活结合）。炖汤或泡茶。',
    mechanism: '《本草纲目》："丹参破宿血，补新血。"丹酚酸B是强效天然抗氧化剂，保护血管内皮。丹参酮IIA具抗炎、抗动脉粥样硬化作用。',
    suitable: ['xueyu', 'shire'], avoid: ['qixu'], suggestion: '孕妇及出血体质者忌用，不与藜芦同用'
  },
  {
    name: '桃仁', type: '种子', property: '平', flavor: '苦甘', meridian: '肝大肠',
    effect: '活血祛瘀、润肠通便',
    nutrition: '富含脂肪油（40-50%）、苦杏仁苷、维生素B1、铁、磷。',
    pairing: '宜配红花（活血经典）、当归（协同增效）、蜂蜜（润肠组合）。研碎入膳。',
    mechanism: '《神农本草经》："桃仁主瘀血血闭，邪气。"苦杏仁苷小剂量可舒张血管。脂肪油润滑肠道，软化大便。',
    suitable: ['xueyu'], avoid: ['qixu'], suggestion: '孕妇忌用，内服不宜过量'
  },
  {
    name: '佛手', type: '果品', property: '温', flavor: '辛苦酸', meridian: '肝脾胃',
    effect: '疏肝理气、和胃化痰',
    nutrition: '富含挥发油（柠檬烯）、橙皮苷、维生素C、黄酮类。',
    pairing: '宜配陈皮（理气增效）、玫瑰花（解郁搭档）、蜂蜜（调味）。泡茶或入菜。',
    mechanism: '《本草纲目》："佛手煮酒饮，治痰气咳嗽。"柠檬烯具抗炎和抗氧化作用。橙皮苷可降低毛细血管通透性。',
    suitable: ['qiyu', 'tanshi'], avoid: ['yinxu'], suggestion: '阴虚火旺者不宜多食'
  },
  {
    name: '小麦', type: '谷物', property: '凉', flavor: '甘', meridian: '心脾',
    effect: '养心安神、益肾敛汗',
    nutrition: '每100g含蛋白质11.5g、膳食纤维10.6g（全麦）、B族维生素、铁、镁。',
    pairing: '宜配红枣（养心安神）、百合（清心润燥）、甘草（经典甘麦大枣汤）。全麦为佳。',
    mechanism: '《本草拾遗》："小麦补虚养气，助五脏。"全麦麸皮中的阿魏酸具抗氧化活性。B族维生素调节神经系统。',
    suitable: ['qiyu', 'qixu'], avoid: ['shire'], suggestion: '麸质过敏者慎食'
  },
  {
    name: '白术', type: '药材', property: '温', flavor: '甘苦', meridian: '脾胃',
    effect: '健脾益气、燥湿利水',
    nutrition: '富含白术多糖、苍术酮、白术内酯、挥发油。',
    pairing: '宜配黄芪（补气经典）、茯苓（健脾利湿）、党参（益气增效）。煲汤入膳。',
    mechanism: '《本草汇言》："白术，补脾之药，更无出其右者。"白术多糖促进肠道有益菌增殖。苍术酮具有抗炎保肝作用。',
    suitable: ['qixu', 'tanshi', 'tebing'], avoid: ['yinxu'], suggestion: '阴虚燥渴及气滞胀满者不宜'
  },
  {
    name: '防风', type: '药材', property: '微温', flavor: '辛甘', meridian: '膀胱肝脾',
    effect: '祛风解表、胜湿止痛',
    nutrition: '富含挥发油、色原酮、香豆素、多糖、β-谷甾醇。',
    pairing: '宜配黄芪（固表经典）、白术（玉屏风散）、荆芥（解表增效）。入汤剂。',
    mechanism: '《本草纲目》："防风，御也，其功疗风最要。"色原酮类化合物具抗过敏、抗炎作用。多糖增强免疫调节。',
    suitable: ['tebing', 'tanshi'], avoid: ['yinxu'], suggestion: '阴虚火旺及血虚发痉者不宜'
  },
  {
    name: '太子参', type: '药材', property: '平', flavor: '甘微苦', meridian: '心肺脾',
    effect: '益气健脾、润肺生津',
    nutrition: '富含太子参多糖、皂苷、氨基酸（含人体必需8种）、磷、钾。',
    pairing: '宜配山药（健脾双效）、百合（润肺搭档）、麦冬（生津互补）。小儿调补良药。',
    mechanism: '《江苏药材志》："太子参补肺气，健脾胃。"多糖调节免疫，皂苷具抗疲劳作用。补气力平和不燥，尤宜儿童及老人。',
    suitable: ['qixu', 'tebing'], avoid: ['shire'], suggestion: '实热证慎用'
  },
  {
    name: '花生', type: '种子', property: '平', flavor: '甘', meridian: '肺脾',
    effect: '健脾养胃、润肺化痰',
    nutrition: '每100g含蛋白质25g、脂肪45g（不饱和脂肪酸占80%）、维生素E、B3、叶酸。',
    pairing: '宜配醋（经典凉菜）、红枣（养血搭档）、猪蹄（催乳组合）。煮食优于油炸。',
    mechanism: '《本草拾遗》："花生悦脾和胃，润肺化痰。"白藜芦醇抗氧化、保护心血管。花生四烯酸是大脑发育所需的重要脂肪酸。',
    suitable: ['qixu', 'pinghe'], avoid: ['tanshi', 'shire'], suggestion: '霉变花生含黄曲霉素，致癌性强，绝对不可食用'
  },
  {
    name: '芒果', type: '果品', property: '凉', flavor: '甘酸', meridian: '肺胃',
    effect: '益胃止呕、解渴利尿',
    nutrition: '每100g含维生素C36mg、β-胡萝卜素（芒果黄素）、钾、叶酸。',
    pairing: '宜配酸奶（口感搭配）、糯米（甜品经典）、西柚（水果拼盘）。鲜食最佳。',
    mechanism: '《食性本草》："芒果利肺气，止渴。"芒果苷具抗炎、抗氧化活性。高含量的β-胡萝卜素在体内转化为维生素A，保护视力。',
    suitable: ['yinxu'], avoid: ['tebing'], suggestion: '过敏体质慎食，接触芒果皮可能导致皮炎'
  },
  {
    name: '菠萝', type: '果品', property: '平', flavor: '甘酸', meridian: '脾胃',
    effect: '清热解暑、消食止泻',
    nutrition: '每100g含维生素C48mg、锰、菠萝蛋白酶、膳食纤维。',
    pairing: '宜配猪肉（嫩化肉质）、虾仁（酸甜搭配）、蜂蜜（调味）。盐水浸泡后食用。',
    mechanism: '菠萝蛋白酶可分解蛋白质、助消化，其抗炎作用有助缓解关节炎。锰元素促进骨骼发育。',
    suitable: ['shire', 'tanshi'], avoid: ['tebing'], suggestion: '过敏体质慎食，需盐水浸泡去除菠萝蛋白酶'
  },
  {
    name: '大米', type: '谷物', property: '平', flavor: '甘', meridian: '脾胃',
    effect: '补中益气、健脾养胃',
    nutrition: '每100g含蛋白质7.4g、碳水化合物77g、B族维生素。粳米补益力优于籼米。',
    pairing: '宜配小米（互补营养）、红枣（双补气血）、山药（健脾增效）。煮粥养胃首选。',
    mechanism: '《本草纲目》："粳米，甘凉，得天地中和之气，平和五脏，补益气血。"大米蛋白生物价高于其他谷物，易被人体吸收利用。',
    suitable: ['qixu', 'pinghe', 'qiyu'], avoid: ['tanshi'], suggestion: '糖尿病人宜选糙米或控制总量'
  },
  {
    name: '香菜', type: '蔬菜', property: '温', flavor: '辛', meridian: '肺胃',
    effect: '发表透疹、开胃消食',
    nutrition: '每100g含维生素C48mg、胡萝卜素、钙、钾。挥发油含量丰富。',
    pairing: '宜配牛肉（去膻增香）、豆腐（提味互补）、凉拌菜（点睛之笔）。建议最后下锅。',
    mechanism: '《日用本草》："香菜消谷化气，通大小肠。"挥发油成分刺激食欲、促进消化液分泌。天然醛类物质具有抗菌作用。',
    suitable: ['qixu', 'pinghe'], avoid: ['yinxu'], suggestion: '狐臭及口臭者不宜多食'
  },
  {
    name: '荷叶', type: '花茶', property: '平', flavor: '苦涩', meridian: '肝脾胃',
    effect: '清暑利湿、升阳止血',
    nutrition: '富含荷叶碱、槲皮素、莲碱、维生素C、鞣质。',
    pairing: '宜配绿豆（解暑双效）、山楂（降脂组合）、冬瓜（利水搭档）。干品泡茶或煮粥。',
    mechanism: '《本草拾遗》："荷叶主血胀腹痛，落胞破血。"荷叶碱可抑制脂肪吸收，槲皮素扩张血管、改善微循环。鞣质具收敛止血作用。',
    suitable: ['tanshi', 'shire'], avoid: ['qixu'], suggestion: '气血虚弱者不宜长期服用'
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

  if (nonPinghe.length > 0) {
    const topId = nonPinghe[0][0]
    const topScore = nonPinghe[0][1]
    const pingheScore = scores.pinghe || 0

    // 1) Clear winner: top score ≥ 3 AND leads pinghe by ≥ 2
    if (topScore >= 3 && (topScore - pingheScore) >= 2) {
      return topId
    }

    // 2) Among non-pinghe: top leads second by ≥ 2 and score ≥ 3
    const secondScore = nonPinghe.length > 1 ? nonPinghe[1][1] : 0
    if (topScore >= 3 && (topScore - secondScore) >= 2) {
      return topId
    }

    // 3) Pinghe is competitive (within 1 of top, score ≥ 3)
    if (pingheScore >= 3 && pingheScore >= topScore - 1) {
      return 'pinghe'
    }

    // 4) Fallback: anything positive
    if (topScore > 0) return topId
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

const RECIPES = {
  '山药粥': {
    ingredients: ['山药100g', '大米50g', '水适量'],
    steps: ['山药去皮切小段，大米淘洗干净', '锅中加水烧开，放入大米煮15分钟', '加入山药段，转小火再煮20分钟', '煮至粥稠米烂即可食用']
  },
  '红枣枸杞茶': {
    ingredients: ['红枣5颗', '枸杞10g', '热水500ml'],
    steps: ['红枣洗净去核切片', '枸杞用清水冲洗一遍', '将红枣和枸杞放入杯中，冲入沸水', '盖上盖子焖泡10分钟即可饮用']
  },
  '小米南瓜粥': {
    ingredients: ['小米80g', '南瓜200g', '水适量'],
    steps: ['南瓜去皮去瓤切小块，小米淘洗干净', '锅中加水烧开，放入小米煮10分钟', '加入南瓜块，转中小火煮20分钟', '煮至南瓜软烂、粥稠即可']
  },
  '清蒸鱼': {
    ingredients: ['鲈鱼1条约500g', '姜丝10g', '葱段20g', '蒸鱼豉油15ml', '食用油10ml'],
    steps: ['鱼处理干净，两面划几刀，抹少许盐和料酒腌制10分钟', '盘底铺姜片和葱段，放上鱼，鱼身上再放姜丝', '水开后放入蒸锅，大火蒸8-10分钟', '倒掉盘中蒸出的汁水，淋上蒸鱼豉油', '撒上葱花，浇一勺热油激香即可']
  },
  '杂粮饭': {
    ingredients: ['大米100g', '糙米30g', '燕麦20g', '小米20g', '水适量'],
    steps: ['杂粮提前浸泡2小时', '大米淘洗干净，与泡好的杂粮混合', '放入电饭煲，加适量水', '按下煮饭键，煮熟后焖5分钟再开盖', '用饭勺打散拌匀即可食用']
  },
  '黄芪炖鸡汤': {
    ingredients: ['土鸡半只约500g', '黄芪15g', '红枣5颗', '姜片10g', '枸杞5g', '盐适量'],
    steps: ['鸡肉斩块，冷水下锅焯去血水，捞出洗净', '黄芪、红枣洗净，与鸡块、姜片一同放入砂锅', '加入足量清水，大火烧开后转小火慢炖1.5小时', '出锅前10分钟加入枸杞', '加盐调味即可食用']
  },
  '山药排骨汤': {
    ingredients: ['排骨300g', '山药200g', '姜片10g', '枸杞5g', '盐适量'],
    steps: ['排骨焯水去血沫，捞出冲净', '山药去皮切段，泡入水中防氧化', '排骨和姜片放入锅中，加水大火烧开转小火炖40分钟', '加入山药段继续炖20分钟', '加入枸杞再煮5分钟，加盐调味即可']
  },
  '红枣糯米粥': {
    ingredients: ['糯米80g', '红枣8颗', '红糖20g', '水适量'],
    steps: ['糯米淘洗干净，提前浸泡30分钟', '红枣洗净去核', '锅中加水烧开，放入糯米和红枣', '大火煮开后转小火慢煮30分钟至粥稠', '加入红糖搅拌融化即可']
  },
  '党参炖肉': {
    ingredients: ['瘦猪肉300g', '党参10g', '红枣4颗', '姜片10g', '盐适量'],
    steps: ['猪肉切块，焯水去血沫', '党参和红枣洗净', '将肉块、党参、红枣、姜片一同放入炖盅', '加适量清水，隔水炖2小时', '加盐调味即可']
  },
  '四君子汤': {
    ingredients: ['党参10g', '白术10g', '茯苓10g', '甘草5g', '瘦猪肉100g', '姜片3片'],
    steps: ['所有药材用清水冲洗一遍', '瘦猪肉切块焯水', '将药材和猪肉放入砂锅', '加足量清水，大火烧开转小火炖1小时', '加盐调味，取汤饮用，可吃肉']
  },
  '当归生姜羊肉汤': {
    ingredients: ['羊肉500g', '当归15g', '生姜30g', '黄芪10g', '盐适量'],
    steps: ['羊肉切块，冷水下锅焯去血水，捞出冲净', '生姜切片，当归黄芪洗净', '羊肉、姜片、当归、黄芪一同放入砂锅', '加足量清水，大火烧开转小火慢炖2小时', '加少许盐调味，吃肉喝汤']
  },
  '韭菜炒核桃': {
    ingredients: ['韭菜200g', '核桃仁50g', '姜丝适量', '盐少许', '食用油适量'],
    steps: ['韭菜洗净切段，核桃仁掰碎', '锅中倒油烧热，下姜丝爆香', '放入核桃仁小火炒至微黄出香', '转大火放入韭菜快速翻炒30秒', '加少许盐炒匀即可出锅']
  },
  '肉桂红糖茶': {
    ingredients: ['肉桂3g', '红糖15g', '热水500ml'],
    steps: ['肉桂掰碎或用肉桂粉', '杯中放入肉桂和红糖', '冲入沸水，搅拌至红糖融化', '盖上盖子焖泡5分钟即可饮用']
  },
  '姜枣茶': {
    ingredients: ['生姜15g', '红枣5颗', '红糖10g', '热水500ml'],
    steps: ['生姜切薄片，红枣洗净去核切片', '将姜片和红枣放入锅中加水煮开', '转小火煮10分钟', '加入红糖搅拌融化', '滤出茶汤饮用']
  },
  '核桃粥': {
    ingredients: ['大米80g', '核桃仁30g', '红枣3颗', '水适量'],
    steps: ['大米淘洗干净，核桃仁掰碎', '红枣洗净去核', '锅中加水烧开，放入大米和红枣', '大火煮开转小火煮20分钟', '加入核桃碎再煮10分钟至粥稠即可']
  },
  '银耳莲子羹': {
    ingredients: ['银耳半朵约15g', '莲子20g', '红枣5颗', '冰糖30g', '水适量'],
    steps: ['银耳提前泡发2小时，去蒂撕成小朵', '莲子提前泡发，去芯', '银耳和莲子放入锅中，加足量水大火烧开', '转小火慢炖1小时至银耳出胶', '加入红枣和冰糖再煮20分钟即可']
  },
  '百合雪梨汤': {
    ingredients: ['鲜百合50g', '雪梨1个', '冰糖20g', '水适量'],
    steps: ['百合掰开洗净，雪梨去皮去核切块', '锅中加水，放入雪梨块大火煮开', '转小火煮15分钟至雪梨变软', '加入百合和冰糖再煮5分钟', '关火焖2分钟即可食用']
  },
  '枸杞菊花茶': {
    ingredients: ['枸杞10g', '菊花5朵', '热水500ml'],
    steps: ['枸杞和菊花用清水快速冲洗', '一同放入杯中', '冲入沸水', '焖泡5分钟后即可饮用，可反复冲泡']
  },
  '石斛炖鸭': {
    ingredients: ['鸭肉半只约400g', '鲜石斛20g（或干石斛10g）', '姜片10g', '料酒15ml', '盐适量'],
    steps: ['鸭肉斩块焯水去血沫，冲净备用', '石斛洗净切段', '将鸭肉、石斛、姜片放入炖锅', '加足量清水和料酒，大火烧开转小火炖1.5小时', '加盐调味即可']
  },
  '黑芝麻糊': {
    ingredients: ['黑芝麻100g', '糯米粉30g', '冰糖30g', '水500ml'],
    steps: ['黑芝麻小火炒香，晾凉', '将黑芝麻放入料理机打成细粉', '糯米粉加少许水调成糊', '锅中加水烧开，放入黑芝麻粉搅匀', '倒入糯米粉糊边倒边搅，煮至浓稠，加冰糖融化即可']
  },
  '薏米赤小豆汤': {
    ingredients: ['薏米30g', '赤小豆30g', '冰糖适量', '水800ml'],
    steps: ['薏米和赤小豆提前浸泡4小时', '将泡好的薏米和赤小豆放入锅中', '加足量清水，大火烧开转小火慢煮40分钟', '煮至豆子开花、薏米软烂', '加入冰糖调味即可']
  },
  '冬瓜海带汤': {
    ingredients: ['冬瓜300g', '海带50g', '姜丝5g', '盐适量', '香油少许'],
    steps: ['冬瓜去皮去瓤切片，海带泡发切丝', '锅中加少许油爆香姜丝', '加入冬瓜片翻炒1分钟', '加足量水，放入海带丝大火煮开', '转中火煮10分钟，加盐和香油调味即可']
  },
  '陈皮普洱茶': {
    ingredients: ['陈皮5g', '普洱茶5g', '热水500ml'],
    steps: ['陈皮洗净切丝', '将陈皮和普洱茶一同放入茶壶', '冲入沸水，第一遍洗茶倒掉', '再次冲入沸水，焖泡2分钟即可饮用']
  },
  '白萝卜炖排骨': {
    ingredients: ['排骨300g', '白萝卜300g', '姜片10g', '盐适量', '葱花少许'],
    steps: ['排骨焯水去血沫，冲净备用', '白萝卜去皮切滚刀块', '排骨和姜片放入锅中加足量水大火烧开', '转小火炖40分钟后加入白萝卜', '继续炖20分钟至萝卜透明，加盐撒葱花即可']
  },
  '荷叶粥': {
    ingredients: ['大米80g', '干荷叶1张', '冰糖适量', '水适量'],
    steps: ['干荷叶洗净，剪成大块', '大米淘洗干净', '锅中加水烧开，放入荷叶煮5分钟出香', '捞出荷叶，放入大米大火煮开转小火煮25分钟', '加冰糖调味即可']
  },
  '绿豆薏米汤': {
    ingredients: ['绿豆50g', '薏米30g', '冰糖适量', '水800ml'],
    steps: ['绿豆和薏米提前浸泡2小时', '将泡好的绿豆和薏米放入锅中', '加足量清水，大火烧开转小火煮40分钟', '煮至绿豆开花、薏米软烂', '加入冰糖搅拌融化即可']
  },
  '苦瓜炒蛋': {
    ingredients: ['苦瓜1根', '鸡蛋3个', '盐适量', '食用油适量'],
    steps: ['苦瓜对半切开去瓤，切薄片，加少许盐腌制10分钟后挤去苦水', '鸡蛋打散加少许盐搅匀', '锅中倒油烧热，倒入蛋液炒熟盛出', '锅中再加少许油，放入苦瓜翻炒2分钟', '倒回炒好的鸡蛋，翻炒均匀即可出锅']
  },
  '冬瓜排骨汤': {
    ingredients: ['排骨300g', '冬瓜300g', '姜片10g', '枸杞5g', '盐适量'],
    steps: ['排骨焯水去血沫冲净', '冬瓜去皮去瓤切厚片', '排骨和姜片放入锅中加足量水大火烧开转小火炖40分钟', '加入冬瓜片继续炖15分钟至冬瓜透明', '加入枸杞再煮3分钟，加盐调味即可']
  },
  '菊花茶': {
    ingredients: ['干菊花5朵', '冰糖少许', '热水500ml'],
    steps: ['菊花用清水快速冲洗', '放入杯中加少许冰糖', '冲入沸水', '焖泡3-5分钟即可饮用']
  },
  '凉拌黄瓜': {
    ingredients: ['黄瓜2根', '蒜末10g', '醋15ml', '生抽10ml', '白糖5g', '香油5ml', '盐适量'],
    steps: ['黄瓜拍碎切段，放入大碗中', '加入蒜末、醋、生抽、白糖、盐和香油', '充分拌匀', '放入冰箱冷藏10分钟入味后食用更佳']
  },
  '山楂红糖水': {
    ingredients: ['干山楂15g', '红糖20g', '水500ml'],
    steps: ['干山楂用清水冲洗一遍', '山楂放入锅中加水大火煮开', '转小火煮15分钟至汤色变红', '加入红糖搅拌融化', '滤出汁水趁热饮用']
  },
  '黑豆活血粥': {
    ingredients: ['黑豆30g', '大米50g', '红枣5颗', '红糖适量', '水适量'],
    steps: ['黑豆提前浸泡4小时', '大米淘洗干净，红枣去核', '将黑豆和大米放入锅中加足量水大火烧开', '转小火煮30分钟后加入红枣', '再煮15分钟至豆烂粥稠，加红糖调味']
  },
  '洋葱炒木耳': {
    ingredients: ['洋葱1个', '干木耳10g', '青椒1个', '盐适量', '生抽10ml', '食用油适量'],
    steps: ['干木耳泡发洗净撕小朵，焯水1分钟捞出', '洋葱切丝，青椒切丝', '锅中倒油烧热，放入洋葱丝炒至透明出香', '加入木耳和青椒翻炒2分钟', '加生抽和盐调味，翻炒均匀即可出锅']
  },
  '丹参炖乌鸡': {
    ingredients: ['乌鸡半只约400g', '丹参10g', '红枣5颗', '姜片10g', '盐适量'],
    steps: ['乌鸡斩块焯水去血沫', '丹参和红枣洗净', '乌鸡、丹参、红枣、姜片一同放入炖锅', '加足量清水大火烧开转小火炖1.5小时', '加盐调味即可']
  },
  '醋泡花生': {
    ingredients: ['生花生仁100g', '陈醋50ml', '生抽10ml', '蒜末5g', '香菜少许'],
    steps: ['花生仁洗净，开水烫一下沥干', '将花生放入碗中，加入陈醋和生抽', '加入蒜末拌匀', '盖上保鲜膜放入冰箱浸泡过夜', '食用时撒上香菜碎即可']
  },
  '玫瑰花茶': {
    ingredients: ['干玫瑰花5朵', '蜂蜜适量', '热水500ml'],
    steps: ['玫瑰花放入杯中', '冲入80℃左右的热水', '焖泡3-5分钟', '待茶汤温热后加入蜂蜜调匀即可饮用']
  },
  '佛手瓜炒肉': {
    ingredients: ['佛手瓜2个', '瘦猪肉100g', '蒜末5g', '盐适量', '生抽10ml', '食用油适量'],
    steps: ['佛手瓜去皮去核切片', '猪肉切薄片，加少许生抽和淀粉腌制10分钟', '锅中倒油烧热，下肉片滑炒变色盛出', '锅中留底油爆香蒜末，放入佛手瓜片翻炒3分钟', '倒回肉片，加盐和生抽炒匀即可']
  },
  '陈皮薄荷茶': {
    ingredients: ['陈皮5g', '新鲜薄荷叶5片', '蜂蜜适量', '热水500ml'],
    steps: ['陈皮洗净剪成细丝', '薄荷叶冲洗干净', '陈皮和薄荷放入杯中', '冲入沸水焖泡5分钟', '待茶汤温热后加入蜂蜜调匀即可']
  },
  '百合莲子羹': {
    ingredients: ['鲜百合50g', '莲子20g', '冰糖20g', '枸杞5g', '水适量'],
    steps: ['莲子提前泡发去芯', '百合掰开洗净', '莲子放入锅中加水大火煮开转小火煮20分钟', '加入百合和冰糖再煮10分钟', '加入枸杞煮2分钟即可']
  },
  '金桔蜂蜜饮': {
    ingredients: ['金桔5颗', '蜂蜜15g', '热水500ml'],
    steps: ['金桔用盐搓洗表面，切片去籽', '金桔片放入杯中', '冲入沸水焖泡5分钟', '待水温降至60℃以下加入蜂蜜调匀即可']
  },
  '黄芪白术炖鸡汤': {
    ingredients: ['土鸡半只约500g', '黄芪15g', '白术10g', '红枣5颗', '姜片10g', '盐适量'],
    steps: ['鸡斩块焯水去血沫冲净', '黄芪、白术、红枣洗净', '所有材料（除盐外）放入砂锅', '加足量清水大火烧开转小火慢炖1.5小时', '加盐调味即可']
  },
  '山药南瓜粥': {
    ingredients: ['山药100g', '南瓜150g', '大米60g', '水适量'],
    steps: ['山药去皮切小段，南瓜去皮去瓤切小块', '大米淘洗干净', '锅中加水烧开，放入大米煮15分钟', '加入山药和南瓜，转小火再煮20分钟', '煮至所有食材软烂、粥稠即可']
  },
  '红枣蜂蜜水': {
    ingredients: ['红枣5颗', '蜂蜜15g', '热水500ml'],
    steps: ['红枣洗净去核切片', '放入杯中冲入沸水', '焖泡10分钟', '待水温降至60℃以下加入蜂蜜调匀即可']
  },
  '糯米藕': {
    ingredients: ['莲藕2节', '糯米50g', '红枣5颗', '红糖30g', '冰糖20g'],
    steps: ['糯米提前浸泡2小时', '莲藕去皮，从一头切开盖', '将糯米填入藕孔中，用筷子压实', '盖上藕盖用牙签固定', '将填好的藕放入锅中，加水没过，加入红枣、红糖、冰糖', '大火烧开转小火煮1.5小时，晾凉切片即可']
  },
  '灵芝炖肉': {
    ingredients: ['瘦猪肉300g', '干灵芝片10g', '红枣5颗', '姜片10g', '盐适量'],
    steps: ['猪肉切块焯水', '灵芝片和红枣冲洗干净', '将所有材料放入炖盅', '加适量清水，隔水炖2小时', '加盐调味即可']
  },
  '银耳百合雪梨羹': {
    ingredients: ['银耳半朵约15g', '鲜百合50g', '雪梨1个', '冰糖30g', '水适量'],
    steps: ['银耳提前泡发2小时，去蒂撕成小朵', '百合掰开洗净，雪梨去皮去核切小块', '银耳放入锅中加足量水大火烧开转小火炖40分钟至出胶', '加入雪梨块再煮15分钟', '加入百合和冰糖煮5分钟即可']
  }
}

const SOLAR_TERMS = [
  { name: '立春', month: 2, day: 4, tip: '春季开始，阳气升发，宜养肝护肝，饮食宜辛甘发散。', foods: ['韭菜', '香椿', '豆芽', '菠菜'] },
  { name: '雨水', month: 2, day: 19, tip: '降雨增多，湿气渐重，宜健脾祛湿，注意春捂保暖。', foods: ['山药', '薏米', '红枣', '小米'] },
  { name: '惊蛰', month: 3, day: 6, tip: '春雷乍动，万物复苏，宜防春瘟，饮食清淡，养肝健脾。', foods: ['梨', '菠菜', '荠菜', '春笋'] },
  { name: '春分', month: 3, day: 21, tip: '昼夜平分，阴阳调和，宜平衡饮食，多食时令蔬菜。', foods: ['香椿', '豆芽', '韭菜', '鸡蛋'] },
  { name: '清明', month: 4, day: 5, tip: '天清气明，肝气旺盛，宜柔肝养肺，饮食清淡少油腻。', foods: ['艾草', '青团', '荠菜', '山药'] },
  { name: '谷雨', month: 4, day: 20, tip: '雨生百谷，湿气加重，宜健脾祛湿，防风湿邪气。', foods: ['薏米', '赤小豆', '冬瓜', '鲫鱼'] },
  { name: '立夏', month: 5, day: 6, tip: '夏季开始，心火渐旺，宜养心安神，饮食清淡解暑。', foods: ['绿豆', '苦瓜', '荷叶', '莲子'] },
  { name: '小满', month: 5, day: 21, tip: '麦类灌浆，湿热交加，宜清热利湿，忌食肥甘厚味。', foods: ['苦菜', '冬瓜', '薏米', '赤小豆'] },
  { name: '芒种', month: 6, day: 6, tip: '麦收时节，暑热渐盛，宜清暑祛湿，多食蔬果少油腻。', foods: ['黄瓜', '番茄', '西瓜', '绿豆'] },
  { name: '夏至', month: 6, day: 21, tip: '白昼最长，阳气最盛，宜养心护阳，忌贪凉过度。', foods: ['面条', '苦瓜', '莲藕', '荷叶'] },
  { name: '小暑', month: 7, day: 7, tip: '暑气渐浓，湿热交蒸，宜清热解暑，注意健脾化湿。', foods: ['绿豆', '冬瓜', '薏米', '荷叶'] },
  { name: '大暑', month: 7, day: 23, tip: '一年最热，暑湿最重，宜清暑利湿，多饮汤茶补充水分。', foods: ['绿豆', '苦瓜', '西瓜', '金银花'] },
  { name: '立秋', month: 8, day: 7, tip: '秋季开始，燥气当令，宜滋阴润燥，养肺生津。', foods: ['银耳', '百合', '梨', '山药'] },
  { name: '处暑', month: 8, day: 23, tip: '暑热消退，秋燥渐起，宜润肺防燥，饮食宜滋润。', foods: ['鸭肉', '莲藕', '蜂蜜', '百合'] },
  { name: '白露', month: 9, day: 7, tip: '露水渐白，秋凉加重，宜防寒润燥，温补肺气。', foods: ['龙眼', '红薯', '糯米', '红枣'] },
  { name: '秋分', month: 9, day: 23, tip: '昼夜平分，阴气渐长，宜滋阴润肺，平衡阴阳。', foods: ['银耳', '雪梨', '百合', '黑芝麻'] },
  { name: '寒露', month: 10, day: 8, tip: '露水寒凉，气温骤降，宜防寒保暖，养肺固肾。', foods: ['核桃', '黑芝麻', '山药', '羊肉'] },
  { name: '霜降', month: 10, day: 23, tip: '霜降大地，深秋寒冷，宜温补脾胃，抵御寒邪。', foods: ['牛肉', '板栗', '萝卜', '白菜'] },
  { name: '立冬', month: 11, day: 7, tip: '冬季开始，万物闭藏，宜温阳补肾，藏精固本。', foods: ['羊肉', '黑豆', '核桃', '红枣'] },
  { name: '小雪', month: 11, day: 22, tip: '初雪降临，寒气加重，宜温补阳气，注意防寒保暖。', foods: ['羊肉', '萝卜', '白菜', '黑木耳'] },
  { name: '大雪', month: 12, day: 7, tip: '大雪纷飞，寒气最盛，宜温补肾阳，多食温热之品。', foods: ['羊肉', '当归', '生姜', '核桃'] },
  { name: '冬至', month: 12, day: 22, tip: '白昼最短，阴至极而阳始生，宜温补养阳，忌寒凉。', foods: ['饺子', '羊肉', '当归', '桂圆'] },
  { name: '小寒', month: 1, day: 6, tip: '寒意料峭，阴寒尚盛，宜温补脾肾，注意防寒防病。', foods: ['羊肉', '糯米', '红枣', '生姜'] },
  { name: '大寒', month: 1, day: 20, tip: '一年最冷，阴寒极盛，宜温补肾阳，为春季升发蓄力。', foods: ['羊肉', '黑豆', '核桃', '当归'] }
]

function getCurrentSolarTerm() {
  const now = new Date()
  const today = (now.getMonth() + 1) * 100 + now.getDate()
  for (let i = SOLAR_TERMS.length - 1; i >= 0; i--) {
    const termDate = SOLAR_TERMS[i].month * 100 + SOLAR_TERMS[i].day
    if (today >= termDate) return SOLAR_TERMS[i]
  }
  return SOLAR_TERMS[SOLAR_TERMS.length - 1]
}

// Symptom keyword → constitution scoring
// Note: keywords are checked against text with negation awareness:
// "不易怕冷" will NOT match "怕冷", "不冷" will NOT match "冷"
const SYMPTOM_KEYWORDS = [
  { keywords: ['怕冷', '手脚冷', '四肢不温', '畏寒', '怕风', '喜暖'], negations: ['不', '没', '无'], scores: { yangxu: 2, qixu: 1 } },
  { keywords: ['疲倦', '乏力', '没劲', '气短', '气喘', '懒言', '不想说话', '自汗', '易出汗', '稍微活动就喘'], negations: ['不', '没', '无'], scores: { qixu: 2, yangxu: 1 } },
  { keywords: ['口干', '咽干', '舌燥', '口渴', '手脚心热', '五心烦热', '盗汗', '睡觉出汗', '潮热', '颧红'], negations: ['不', '没', '无'], scores: { yinxu: 2, shire: 1 } },
  { keywords: ['出油', '长痘', '痤疮', '粉刺', '口苦', '口臭', '苔黄', '黄痰', '小便黄', '大便黏'], negations: ['不', '没', '无'], scores: { shire: 2, tanshi: 1 } },
  { keywords: ['痰多', '痰', '胸闷', '腹胀', '肥胖', '肚子大', '大便稀', '大便不成形', '身体沉重'], negations: ['不', '没', '无', '少'], scores: { tanshi: 2, qixu: 1 } },
  { keywords: ['叹气', '爱叹气', '多愁善感', '情绪低落', '抑郁', '胸胁胀', '肋痛', '喜欢叹气'], negations: ['不', '没', '无'], scores: { qiyu: 2 } },
  { keywords: ['面色晦暗', '唇暗', '唇紫', '刺痛', '固定痛', '夜间痛', '痛经', '瘀斑', '紫斑'], negations: ['不', '没', '无'], scores: { xueyu: 2, qiyu: 1 } },
  { keywords: ['过敏', '喷嚏', '鼻塞', '流涕', '鼻痒', '咳嗽', '哮喘', '皮疹', '荨麻疹', '湿疹', '皮肤痒', '风团'], negations: ['不', '没', '无'], scores: { tebing: 2, qixu: 1 } }
]
