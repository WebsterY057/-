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

const HERB_STORIES = [
  { id: 1, herb: '黄芪', title: '黄芪救太后', summary: '慈禧太后痢疾不止，御医以黄芪为主药起死回生', story: '清代光绪年间，慈禧太后因政事操劳过度，又染痢疾，日泻十余次，御医遍用止泻之药无效。群医束手时，名医马培之用大量黄芪（一两）配以少量党参、白术，煎汤进服。慈禧服后次日痢止，三日体力渐复。马培之解释道："太后久病伤气，气陷则泻不止。黄芪升阳举陷，补气固脱，乃治本之策。"慈禧大喜，赏赐黄金千两，黄芪由此名声大噪。', lesson: '黄芪为补气升阳第一要药，凡气虚下陷之久泻、脱肛、内脏下垂皆可配伍使用', source: '《清宫医案》·马培之医案', relatedHerbs: ['黄芪', '党参', '白术'], tags: ['补气', '健脾'] },
  { id: 2, herb: '人参', title: '人参续命救朱元璋', summary: '明太祖朱元璋病危，御医用独参汤挽回一命', story: '明朝洪武年间，太祖朱元璋亲征漠北，因劳累过度加之风寒侵袭，回京后一病不起，群医会诊皆言不治。御医戴思恭力排众议，取上等高丽参五钱，浓煎取汁，昼夜频服。服至第三日，朱元璋神志渐清；七日能进米汤；半月后康复如初。戴思恭奏曰："陛下乃劳伤元气，非人参大补元气不能回阳救逆。"朱元璋感慨"人参真乃百药之王"，从此人参成为宫廷御用上品。', lesson: '人参大补元气，用于元气虚脱之危重症。日常养生可用生晒参泡水或含服', source: '《明史》·戴思恭传', relatedHerbs: ['人参'], tags: ['补气', '急救'] },
  { id: 3, herb: '当归', title: '当归补血奇缘', summary: '古时一妇人产后血崩，郎中单用当归三两煎服救之', story: '宋代徽州有一妇人，产后大出血不止，面色如纸，气息奄奄。其夫急请当地名医张锐。张锐诊后曰："此血脱气陷，当急补血。"遂取当归三两，浓煎灌服。一剂后出血减少，二剂后血止，三剂后面色转红润。张锐在《鸡峰普济方》中记载此案时写道："当归补血有奇功，其性和平，补而不滞，为血家圣药。"后世医家称当归"入心、肝、脾经，补血活血，调经止痛，为妇科要药"。', lesson: '当归为补血圣药，血虚萎黄、月经不调、产后血虚皆可配伍使用', source: '《鸡峰普济方》·张锐', relatedHerbs: ['当归', '红枣', '桂圆'], tags: ['补血', '妇科'] },
  { id: 4, herb: '枸杞', title: '枸杞延年传奇', summary: '古稀老人筋骨强健如少年，因长年服食枸杞', story: '唐代《续神仙传》记载：有人路经河西，见一十五岁少女正在责打一位八九十岁的老翁，路人不解问之，少女答："此乃我曾孙，因不肯服食枸杞，致衰老至此，故责罚之。"路人大惊，问少女年龄，答曰三百七十二岁。虽为神话传说，但足见古人眼中枸杞延年益寿之功效。明代《本草纲目》记载："枸杞久服坚筋骨、轻身不老。"现代研究表明枸杞含枸杞多糖、胡萝卜素，具有抗氧化、调节免疫的功效。', lesson: '枸杞平补肝肾，适合日常养生。每日10-15g泡水或煮粥，坚持服用效果最佳', source: '《续神仙传》·《本草纲目》', relatedHerbs: ['枸杞', '菊花', '红枣'], tags: ['补肾', '养生'] },
  { id: 5, herb: '生姜', title: '孔子不撤姜食', summary: '孔子每餐必食姜，靠姜驱寒养生享古稀之年', story: '《论语·乡党》记载孔子"不撤姜食，不多食"，意为每餐都要有姜，但不过量。孔子生活在春秋乱世，颠沛流离十四年，却在平均寿命仅三十多岁的年代活到七十三岁，与他长年食姜的习惯密切相关。宋代苏轼在《东坡杂记》中记载："予昔监郡钱塘，游净慈寺，寺僧聪聪年八十余，颜如渥丹，自言服生姜四十年。"姜能温中散寒、化痰止咳、抗菌消炎，尤宜晨起食用。民间谚语"冬吃萝卜夏吃姜，不劳医生开药方"即源于此。', lesson: '生姜温中散寒，晨起吃姜助阳气升发。风寒感冒初期喝姜糖水最有效', source: '《论语》·《东坡杂记》', relatedHerbs: ['生姜', '红枣', '红糖'], tags: ['散寒', '感冒'] },
  { id: 6, herb: '山楂', title: '山楂消食解贵妃之困', summary: '杨贵妃因食积不化，太医以山楂冰糖煎水化解', story: '相传唐玄宗时，杨贵妃因喜食荔枝和肥甘厚味，常感胸腹胀满、食欲不振。太医诊后认为乃食积不化，取新鲜山楂与冰糖同煎，命贵妃饭后饮用。贵妃服后果然腹胀消、食欲开。玄宗大悦，将山楂列为宫廷贡品。此后"贵妃山楂饮"在民间流传。明代李时珍在《本草纲目》中记载："山楂化饮食，消肉积，癥瘕，痰饮痞满吞酸，滞血痛胀。"现代研究表明山楂含解脂酶，能直接分解脂肪，故为消食化积之要药。', lesson: '山楂消食导滞，尤善消肉食积滞。饭后腹胀可饮山楂水，但胃酸过多者不宜空腹食用', source: '《本草纲目》·宫廷御方', relatedHerbs: ['山楂', '陈皮', '红糖'], tags: ['消食', '健胃'] },
  { id: 7, herb: '菊花', title: '陶渊明采菊东篱', summary: '陶渊明隐居南山，以菊花泡茶明目养生', story: '东晋诗人陶渊明辞官归隐，"采菊东篱下，悠然见南山"的诗句流传千古。陶渊明爱菊成痴，不仅赏菊、咏菊，更以菊花为食、为药。他在《九日闲居》诗序中写道："余闲居，爱重九之名，秋菊盈园，而持醪靡由，空服九华。"宋代《太平御览》记载南阳郦县有菊水，饮之者寿至百岁。菊花味甘苦、性微寒，归肺肝经，能散风清热、平肝明目。现代人用眼过度，菊花枸杞茶成为护眼标配绝非偶然。', lesson: '菊花清肝明目，电脑族宜配枸杞泡茶。疏散风热用黄菊，平肝明目用白菊', source: '《太平御览》·陶渊明诗', relatedHerbs: ['菊花', '枸杞', '决明子'], tags: ['明目', '清热'] },
  { id: 8, herb: '陈皮', title: '陈皮千年愈咳', summary: '苏东坡患痰咳顽疾，一老妪以陈皮愈之', story: '北宋元丰年间，苏东坡被贬黄州，因当地湿气重，患痰咳之症，久治不愈。一日行至江边，见一老妪叫卖"陈年橘皮"，称能治痰咳。东坡半信半疑，买回试之，将十年陈皮与生姜同煮，饮后果然痰消咳止。东坡大喜，在《物类相感志》中记载此事，并感慨："陈皮愈陈愈良，十年者功同半夏。"广东新会陈皮尤为著名，有"一两陈皮一两金"之称。陈皮理气健脾、燥湿化痰，为"治痰之要药"。', lesson: '陈皮理气化痰，痰多咳嗽、脘腹胀满者可用。年份越久效果越好，建议常备五年以上陈皮', source: '苏轼《物类相感志》·《本草纲目》', relatedHerbs: ['陈皮', '生姜', '山楂'], tags: ['化痰', '祛湿'] },
  { id: 9, herb: '阿胶', title: '阿胶东阿传奇', summary: '东阿古井乌驴皮熬胶，治愈公主血枯之症', story: '相传唐朝时，一位公主患"血枯"之症，面黄肌瘦、月经不调。太医束手无策，民间一老者献方：取东阿县古阿井之水，配黑驴皮，文火熬制成胶。公主服后三月，面色红润如初。从此阿胶被列为皇家贡品。明代《本草纲目》记载："阿胶本经上品，出东阿，故名阿胶。"现代研究发现阿胶富含胶原蛋白及多种氨基酸，能促进红细胞和血红蛋白生成，改善贫血。', lesson: '阿胶补血滋阴、润燥止血。月经后调理、血虚萎黄者宜用，每次3-9g烊化服用', source: '《本草纲目》·东阿县志', relatedHerbs: ['阿胶', '红枣', '桂圆'], tags: ['补血', '滋阴'] },
  { id: 10, herb: '茯苓', title: '茯苓为苏轼解湿', summary: '苏东坡被贬海南，以茯苓粥解瘴气湿毒', story: '北宋绍圣年间，苏东坡被贬儋州（今海南）。当地瘴气弥漫、湿气极重，东坡初到时浑身沉重、大便溏稀。当地黎族百姓教他以山中野生茯苓炖粥食用。东坡连食月余，湿去身轻。他在《茯苓赋》中写道："面有玉色，食之能轻身。"并记载茯苓"肉白而实，味甘淡，久服安魂养神，不饥延年"。茯苓味甘淡性平，归心脾肾经，有利水渗湿、健脾宁心的功效。不分四季、不分寒热，与其他药材配伍均可增强祛湿效果，故有"四时神药"之称。', lesson: '茯苓健脾祛湿不伤正，长期脾虚湿盛者宜煮粥或泡水常服', source: '苏轼《茯苓赋》·《神农本草经》', relatedHerbs: ['茯苓', '薏米', '山药'], tags: ['祛湿', '健脾'] },
  { id: 11, herb: '甘草', title: '甘草国老之誉', summary: '陶弘景称甘草为"众药之王"，处处不离它', story: '南朝梁代著名医家陶弘景在《本草经集注》中赞誉甘草："此草最为众药之主，经方少有不用者。"因甘草能调和诸药、解百药之毒，被尊为"国老"（即帝王之师）。民间传说有兄弟二人，兄郎中行医，弟农夫耕田。一日弟误服有毒野草腹痛欲死，兄急取甘草煎汤灌服，弟得以脱险。此后甘草成为家家户户必备之解毒良药。现代研究表明甘草含甘草酸和甘草苷，具有抗炎、抗过敏、保肝、解毒作用。', lesson: '甘草调和诸药、缓解药性。日常可用甘草泡水护胃，但高血压患者不宜长期服用', source: '《本草经集注》·陶弘景', relatedHerbs: ['甘草', '小麦', '大枣'], tags: ['调和', '解毒'] },
  { id: 12, herb: '百合', title: '百合治愈百合病', summary: '张仲景以百合为主药治愈怪病"百合病"', story: '东汉名医张仲景在《金匮要略》中记载了一种怪病：患者神志恍惚，欲卧不能卧，欲行不能行，似热不热，似冷不冷，名为"百合病"。此病因心肺阴虚、百脉俱损所致。张仲景以百合为主药，用百合地黄汤治疗，以百合润肺清心、安神定志，配合地黄滋阴养血。病人大服三剂后，诸症渐消。后世医家沿用此方，成为治疗情志病的经典方剂。', lesson: '百合润肺止咳、清心安神，适合干咳、失眠、心烦者。日常可用百合莲子粥养心安神', source: '《金匮要略》·张仲景', relatedHerbs: ['百合', '莲子', '地黄'], tags: ['润肺', '安神'] },
  { id: 13, herb: '红豆', title: '红豆祛湿救贫女', summary: '贫女靠红豆薏米粥治愈湿气重病', story: '宋代有一位贫家女子，因长期在潮湿的环境中劳作，患上了严重的湿气病，全身浮肿、四肢乏力。一位老中医让她每日用红豆、薏米各一把，煮粥食用。红豆利水消肿，薏米健脾祛湿，两者配伍，相得益彰。一月后，女子浮肿消退，精神焕发。此方从此在民间广为流传，成为祛湿健脾的经典食疗方。', lesson: '红豆利水消肿、解毒排脓。薏米清热利湿。两者配伍是祛湿黄金组合，湿气重者可常喝红豆薏米粥', source: '民间验方', relatedHerbs: ['红豆', '薏米', '茯苓'], tags: ['祛湿', '消肿'] },
  { id: 14, herb: '红枣', title: '红枣养颜美容', summary: '王后每日食红枣，保持青春容颜', story: '唐代孙思邈在《千金方》中记载：某王后因日夜操劳，面色萎黄、身体消瘦。太医令其每日早晚各食红枣七枚。红枣性温味甘，补中益气、养血安神。三个月后，王后面色红润，肌肤饱满，身体强健。孙思邈赞曰："红枣日食三颗，补血养颜，延年益寿。"从此，后宫嫔妃纷纷效仿，红枣成为宫廷美容圣品。', lesson: '红枣补中益气、养血安神。每日3-5颗即可，脾胃虚弱者可去核煮粥。气血不足者宜配黄芪', source: '《千金方》·孙思邈', relatedHerbs: ['红枣', '黄芪', '枸杞'], tags: ['补血', '养颜'] },
  { id: 15, herb: '桂圆', title: '桂圆益智安神', summary: '读书人常食桂圆，考上状元', story: '清代有一书生，日夜苦读却记忆力不佳。一老中医让其每日食用桂圆肉十克，泡水饮用。桂圆补心脾、益气血、健脑益智。半年后，书生不仅记忆力大增，而且精力充沛，最终考中状元。他在文中写道："桂圆益智，功同参芪，每日食之，聪慧过人。"此事传开后，学子们纷纷效仿，桂圆被称为"益智果"。', lesson: '桂圆补心脾、益气血、健脑安神。适合心悸失眠、记忆力减退者。可与红枣、枸杞同用', source: '民间传说', relatedHerbs: ['桂圆', '红枣', '枸杞'], tags: ['安神', '益智'] },
  { id: 16, herb: '莲子', title: '莲子出淤泥不染', summary: '周敦颐独爱莲子，以莲心泡茶明志', story: '北宋理学家周敦颐爱莲成痴，在《爱莲说》中写道："出淤泥而不染，濯清涟而不妖。"他不仅爱莲，更以莲心泡茶养生。莲子心味苦性寒，能清心火、安神志。他每日以莲心泡茶，认为此茶可清心寡欲、修身养性。现代研究表明莲子心含莲心碱，有镇静安神、降压的作用。', lesson: '莲子补脾止泻、固精止带。莲子心清心火、安神。脾虚久泻、遗精带下者宜用莲子。失眠多梦者可用莲子心泡茶', source: '《爱莲说》·周敦颐', relatedHerbs: ['莲子', '百合', '茯苓'], tags: ['健脾', '安神'] },
  { id: 17, herb: '山药', title: '山药养生八珍糕', summary: '乾隆皇帝每日必食八珍糕，其中山药为主药', story: '清代乾隆皇帝活到89岁，是历史上最长寿的皇帝。他的养生秘诀之一就是每日食用八珍糕。八珍糕以山药为主药，配以茯苓、白扁豆、莲子、薏米等，研细末，加白糖蒸制而成。此糕健脾益胃、老少皆宜。乾隆每日必备，从不间断。《清宫医案》记载，乾隆四十三年起，每年腊月都会命御医配制八珍糕。', lesson: '山药健脾养胃、补肺益肾。适合脾胃虚弱、食欲不振、腹泻者。可与薏米、茯苓配伍', source: '《清宫医案》', relatedHerbs: ['山药', '茯苓', '薏米'], tags: ['健脾', '养胃'] },
  { id: 18, herb: '蜂蜜', title: '蜂蜜延缓衰老', summary: '季羡林先生每日晨起一杯蜂蜜水，寿至98岁', story: '著名学者季羡林先生活到98岁，他的养生之道之一就是每日晨起喝一杯蜂蜜水。蜂蜜性平味甘，有补中润燥、止痛解毒的功效。《神农本草经》将蜂蜜列为上品，称其"安五脏诸不足，益气补中，止痛解毒，除百病，和百药"。现代研究证明蜂蜜含有多种酶和矿物质，能增强免疫力、促进消化。', lesson: '蜂蜜补中润燥、润肠通便。适合干咳咽痛、便秘者。注意：糖尿病患者慎用，一岁以下婴儿禁食', source: '《神农本草经》', relatedHerbs: ['蜂蜜', '红枣', '黄芪'], tags: ['润燥', '通便'] },
  { id: 19, herb: '核桃', title: '核桃补肾益脑', summary: '一位老中医每日食三颗核桃，精神矍铄活百岁', story: '传说有一位老中医，活到一百多岁仍精神矍铄、头脑清晰。他的养生秘诀就是每日食用三颗核桃。核桃性温味甘，归肾、肺、大肠经，有补肾温肺、润肠通便、健脑益智的功效。《本草纲目》记载："核桃补气养血，润燥化痰，益命门，利三焦。"现代研究表明核桃富含不饱和脂肪酸，对大脑发育有益。', lesson: '核桃补肾温肺、健脑益智。适合肾虚腰痛、虚寒喘咳、肠燥便秘者。每日3-5颗为宜，腹泻者慎用', source: '《本草纲目》', relatedHerbs: ['核桃', '黑芝麻', '枸杞'], tags: ['补肾', '健脑'] },
  { id: 20, herb: '黑芝麻', title: '黑芝麻乌发美容', summary: '武则天靠黑芝麻养生，保持青春美貌', story: '唐代女皇武则天是中国历史上唯一的女皇帝，活到82岁。据《武则天养生录》记载，她的美容秘诀之一就是每日食用黑芝麻。黑芝麻性平味甘，补肝肾、益精血、润肠燥。《本草纲目》记载："服黑芝麻至百日，能除一切痼疾；一年身面光泽不饥；二年白发返黑。"武则天到晚年仍保持青春容颜，黑芝麻功不可没。', lesson: '黑芝麻补肝肾、益精血、乌须发。适合头晕眼花、须发早白、肠燥便秘者。可与核桃、桑葚同用', source: '《武则天养生录》', relatedHerbs: ['黑芝麻', '核桃', '桑葚'], tags: ['乌发', '美容'] },
  { id: 21, herb: '葛根', title: '葛根解肌退热', summary: '李时珍用葛根汤治愈友人发热项强', story: '明代李时珍在《本草纲目》中记载：他的一位友人因感冒导致发热、颈项强痛、汗出不畅。李时珍诊断为"太阳病"，即用葛根汤治疗。葛根解肌退热、升阳止泻，能缓解项背强急。友人服三剂后热退身凉、项强消除。李时珍赞葛根为"解肌透疹之要药"。现代葛根素被广泛用于心脑血管疾病的治疗。', lesson: '葛根解肌退热、升阳止泻。适合感冒发热、项背强痛、高血压者。但阴虚火旺者慎用', source: '《本草纲目》·李时珍', relatedHerbs: ['葛根', '麻黄', '桂枝'], tags: ['解表', '退热'] },
  { id: 22, herb: '桑叶', title: '桑叶明目长寿', summary: '老农长年饮桑叶茶，视力八十岁不衰', story: '传说有一位老农，长年在桑树下劳作，每日采摘新鲜桑叶泡茶饮用。他活到一百多岁，眼睛到了八十岁仍然明亮，能够穿针引线。《本草纲目》记载："桑叶明目长发，止消渴。"《神农本草经》将桑叶列为中品，称其"除寒热，出汗"。现代研究表明桑叶含黄酮类化合物，有降血糖、降血脂的作用。', lesson: '桑叶清肺润燥、清肝明目。适合肺热燥咳、目赤肿痛、高血糖者。可与菊花、枸杞配伍', source: '《本草纲目》', relatedHerbs: ['桑叶', '菊花', '枸杞'], tags: ['明目', '清肺'] },
  { id: 23, herb: '薄荷', title: '薄荷清凉提神', summary: '欧阳修以薄荷治愈暑热头痛', story: '宋代文学家欧阳修在《归田录》中记载：一次夏日，他因暑热患了头痛，精神萎靡。一位民间医生让他口含薄荷叶，并取薄荷泡水饮用。薄荷辛凉，能疏散风热、清利头目。欧阳修使用后，头痛立止，精神爽快。他在文中写道："薄荷虽小，功用甚大，暑月之良药也。"', lesson: '薄荷疏散风热、清利头目。适合风热感冒、头痛目赤、咽喉肿痛者。但阴虚多汗者慎用', source: '《归田录》·欧阳修', relatedHerbs: ['薄荷', '菊花', '金银花'], tags: ['清热', '提神'] },
  { id: 24, herb: '藿香', title: '藿香化湿止呕', summary: '慈禧太后用藿香祛暑湿', story: '清代宫廷档案记载：每年夏季，御医都会为慈禧太后配制藿香正气散，以应对暑湿。慈禧太后政务繁忙，加上北京夏季暑湿重，容易出现脘腹胀满、恶心呕吐的症状。藿香芳香化湿，能祛暑湿、和脾胃。太后使用后，症状消除，胃口大开。此方成为清代宫廷夏季必备的养生佳品。', lesson: '藿香芳香化湿、和中止呕。适合暑湿感冒、脘腹胀满、恶心呕吐者。阴虚火旺者慎用', source: '《清宫医案》', relatedHerbs: ['藿香', '佩兰', '茯苓'], tags: ['化湿', '止呕'] },
  { id: 25, herb: '肉桂', title: '肉桂温肾助阳', summary: '乾隆皇帝冬季必喝肉桂茶，驱寒暖身', story: '清代乾隆皇帝喜欢在冬季饮用肉桂茶。肉桂性大热，能补火助阳、散寒止痛、活血通经。《神农本草经》记载："肉桂通神，耐老，生武陵山谷。"乾隆皇帝认为肉桂茶可以温肾助阳、驱寒暖身，特别适合冬季饮用。御医们还将其与红糖、生姜配伍，制成"桂姜暖胃茶"，供皇帝日常饮用。', lesson: '肉桂补火助阳、散寒止痛。适合肾阳不足、畏寒肢冷、腰膝冷痛者。但阴虚火旺者忌用，孕妇慎用', source: '《神农本草经》', relatedHerbs: ['肉桂', '红糖', '生姜'], tags: ['温阳', '驱寒'] },
  { id: 26, herb: '紫苏', title: '紫苏行气宽中', summary: '华佗用紫苏治愈鱼蟹中毒', story: '传说东汉名医华佗在行医时，遇到一群因食用鱼蟹而腹胀痛的患者。华佗用紫苏叶煎汤，让患者服用，很快就好了。他告诉大家："紫苏行气宽中，能解鱼蟹之毒。"《药性论》记载："紫苏子主上气咳逆，籽可下气，清痰润肺。"现代研究证明紫苏有解热、抗菌、抗过敏的作用。', lesson: '紫苏解表散寒、行气宽中、解鱼蟹毒。适合风寒感冒、胸脘胀满、鱼蟹中毒者。紫苏子降气化痰、止咳平喘', source: '《药性论》', relatedHerbs: ['紫苏', '生姜', '陈皮'], tags: ['行气', '解毒'] },
  { id: 27, herb: '白扁豆', title: '白扁豆健脾化湿', summary: '李时珍推荐白扁豆治疗脾虚水肿', story: '明代李时珍在《本草纲目》中记载：一位富商因脾虚导致水肿，四肢乏力。一位民间医生让他用白扁豆、薏米各二两，煮粥食用。白扁豆健脾和中、化湿消肿，薏米利水渗湿。富商食用一个月后，水肿消退，身体康复。李时珍评价白扁豆为"健脾化湿之佳品"。', lesson: '白扁豆健脾和中、化湿消肿。适合脾虚湿盛、食欲不振、水肿者。可与薏米、茯苓配伍', source: '《本草纲目》', relatedHerbs: ['白扁豆', '薏米', '茯苓'], tags: ['健脾', '祛湿'] },
  { id: 28, herb: '砂仁', title: '砂仁行气化湿', summary: '乾隆皇帝用砂仁健脾开胃', story: '清代乾隆皇帝日理万机，常因政务繁忙而茶饭不思。御医为其配制了砂仁陈皮茶，砂仁芳香化湿、行气宽中、开胃消食。乾隆饮用后，胃口大开，精神倍增。《药性论》记载："砂仁治宿食不消，止泻痢。"乾隆皇帝对砂仁的喜爱，使其成为清代宫廷常用的养生药材。', lesson: '砂仁化湿行气、温脾止泻。适合湿阻气滞、脘腹胀满、食欲不振、呕吐泄泻者', source: '《药性论》', relatedHerbs: ['砂仁', '陈皮', '木香'], tags: ['行气', '开胃'] },
  { id: 29, herb: '麦芽', title: '麦芽消食健胃', summary: '张仲景用麦芽治愈食积腹胀', story: '汉代张仲景在《金匮要略》中记载：一人因暴饮暴食，导致脘腹胀满、嗳腐吞酸。张仲景诊断为食积，用炒麦芽煎汤治疗。麦芽消食健胃、能促进淀粉类食物消化。病人服用后，腹胀立消，胃口恢复。张仲景指出："麦芽消面食积滞，炒用效果更佳。"', lesson: '麦芽消食健胃。适合米面薯芋食滞、脘腹胀满、嗳腐吞酸者。哺乳期妇女慎用', source: '《金匮要略》·张仲景', relatedHerbs: ['麦芽', '山楂', '神曲'], tags: ['消食', '健胃'] },
  { id: 30, herb: '乌梅', title: '乌梅生津止渴', summary: '曹操行军以乌梅解暑止渴', story: '东汉末年，曹操率军远征，行军途中天气炎热，士兵们口渴难耐。曹操灵机一动，让人采集路边的乌梅，分给士兵们含在嘴里。乌梅味酸，能生津止渴、解暑化湿。士兵们含了乌梅后，口中生津，暑热尽消，士气大振。"望梅止渴"的故事就此流传开来。《本草经疏》记载："乌梅敛肺涩肠，生津止渴。"', lesson: '乌梅敛肺止咳、生津止渴。适合肺虚久咳、虚热消渴、久泻久痢者。胃酸过多者慎用', source: '《本草经疏》', relatedHerbs: ['乌梅', '山楂', '甘草'], tags: ['生津', '止渴'] },
  { id: 31, herb: '薏米', title: '薏米除湿美容', summary: '古代后宫用薏米美白养颜', story: '相传古代后宫嫔妃为了美白养颜，常用薏米磨粉敷面或煮粥食用。薏米性微寒味甘淡，能健脾渗湿、清热排脓。《本草纲目》记载："薏米润肌肤，消水肿，令人白皙。"现代研究证明薏米含维生素B1和薏苡仁油，能促进新陈代谢、减少皱纹、柔嫩肌肤。', lesson: '薏米健脾渗湿、清热排脓、美白肌肤。适合水肿、脾虚湿盛、肤质粗糙者。孕妇慎用', source: '《本草纲目》', relatedHerbs: ['薏米', '茯苓', '红豆'], tags: ['祛湿', '美容'] },
  { id: 32, herb: '罗汉果', title: '罗汉果润肺止咳', summary: '瑶族人民用罗汉果治疗咳嗽', story: '广西桂林的瑶族人民世代用罗汉果泡茶治疗咳嗽。罗汉果性凉味甘，归肺、大肠经，能清热润肺、利咽开音、润肠通便。《岭南采药录》记载："罗汉果理痰火咳嗽，和胃保津。"现代研究表明罗汉果含甜苷，比蔗糖甜300倍，是天然的甜味剂，且无热量，糖尿病患者也能使用。', lesson: '罗汉果清热润肺、利咽开音。适合肺热咳嗽、咽痛失音、肠燥便秘者。风寒咳嗽者慎用', source: '《岭南采药录》', relatedHerbs: ['罗汉果', '胖大海', '桔梗'], tags: ['润肺', '止咳'] },
  { id: 33, herb: '三七', title: '三七治愈刀伤', summary: '李时珍用三七治疗刀伤，止血效果神奇', story: '明代李时珍在《本草纲目》中记载：一次他上山采药，不慎被刀割伤，血流不止。同行的药农立即从背篓中取出一些三七粉，撒在伤口上，血很快止住了。李时珍大为惊奇，详细记录下三七的功效："三七根，止血散血定痛，金刃箭伤跌打杖疮皆良。"此后，三七成为外科止血的要药。李时珍还发现三七能治各种血症，吐血、衄血、崩漏皆可使用。', lesson: '三七止血散瘀、消肿定痛。适合各种出血症、跌打损伤、瘀血肿痛。生用止血熟用补血', source: '《本草纲目》·李时珍', relatedHerbs: ['三七', '丹参', '当归'], tags: ['止血', '跌打'] },
  { id: 34, herb: '金银花', title: '金银花清热解毒', summary: '康熙皇帝用金银花治愈咽喉肿痛', story: '清代康熙皇帝在《庭训格言》中记载：他年轻时随父皇出征，途中感受风热，咽喉肿痛难忍。御医建议用金银花、连翘各15克煎水代茶饮用。金银花清热解毒、疏散风热，连翘清热解毒、消肿散结。康熙连服三日，咽喉肿痛消退，军队继续前进。此方从此成为清代宫廷治疗风热感冒的常用方剂。', lesson: '金银花清热解毒、疏散风热。适合风热感冒、咽喉肿痛、热毒疮疡。虚寒泄泻者慎用', source: '《庭训格言》·康熙', relatedHerbs: ['金银花', '连翘', '薄荷'], tags: ['清热', '解毒'] },
  { id: 35, herb: '荷叶', title: '荷叶减肥养生', summary: '明代官员靠荷叶茶减肥成功', story: '明代有一位官员因应酬过多，身体肥胖，走路都气喘吁吁。一位老中医让他每日用荷叶、山楂、决明子各10克，煎水代茶饮用。荷叶清热利湿、升发清阳；山楂消食化积；决明子清肝明目、润肠通便。三个月后，这位官员体重明显下降，精神也好了许多。他在任上勤政廉洁，传说与此荷叶减肥茶不无关系。', lesson: '荷叶清热利湿、升发清阳。适合湿热肥胖、高血脂、暑热烦渴。体瘦气血虚弱者慎用', source: '民间验方', relatedHerbs: ['荷叶', '山楂', '决明子'], tags: ['减肥', '利湿'] },
  { id: 36, herb: '桑葚', title: '桑葚乌发美容', summary: '慈禧太后用桑葚养血乌发', story: '清代慈禧太后非常注重美容养颜。《清宫医案》记载，御医为她配制了一种养血乌发茶，主要成分就是桑葚。桑葚补肝肾、益精血、乌须发。太后每日饮用，一段时间后，头发乌黑亮丽，面色红润有光泽。《本草经疏》中说："桑椹者，桑之精华所结也。"现代研究证实桑葚富含花青素，有抗氧化、延缓衰老的作用。', lesson: '桑葚补肝肾、益精血、乌须发。适合肝肾阴虚、须发早白、头晕耳鸣。脾胃虚寒便溏者慎用', source: '《清宫医案》', relatedHerbs: ['桑葚', '黑芝麻', '枸杞'], tags: ['乌发', '补肾'] },
  { id: 37, herb: '酸枣仁', title: '酸枣仁治愈失眠', summary: '张仲景用酸枣仁汤治疗失眠', story: '东汉张仲景在《金匮要略》中记载：有一位官员因长期思虑过度，导致失眠多梦、心悸健忘。张仲景诊断为肝血不足、心神失养，用酸枣仁汤治疗。酸枣仁养心安神、敛汗生津；茯苓健脾宁心；川芎活血行气。官员服用七剂后，失眠症状明显改善，心悸健忘也减轻了。张仲景称此方为"安神第一方"。', lesson: '酸枣仁养心安神、敛汗生津。适合虚烦失眠、心悸怔忡、盗汗自汗。实热便秘者慎用', source: '《金匮要略》·张仲景', relatedHerbs: ['酸枣仁', '茯苓', '川芎'], tags: ['安神', '失眠'] },
  { id: 38, herb: '决明子', title: '决明子明目通便', summary: '乾隆皇帝用决明子茶保护视力', story: '清代乾隆皇帝勤政爱民，日夜批阅奏章，视力逐渐下降。御医建议他每日饮用决明子茶。决明子清肝明目、润肠通便。乾隆坚持饮用后，不仅眼睛明亮了，连便秘的问题也改善了。他在《乾隆养生经》中写道："决明子茶，明目延寿，老年宜常饮之。"现代研究表明决明子含有大黄酚，能降压降脂、保护视力。', lesson: '决明子清肝明目、润肠通便。适合目赤肿痛、视力减退、热结便秘。高血压者可常饮', source: '《乾隆养生经》', relatedHerbs: ['决明子', '枸杞', '菊花'], tags: ['明目', '便秘'] },
  { id: 39, herb: '冬虫夏草', title: '虫草益肺补肾', summary: '虫草治愈武则天咳喘', story: '唐代《本草从新》记载：武则天晚年患了严重的咳喘病，太医们用尽方法都不见效。当时有一位藏医贡献了冬虫夏草，配伍老鸭炖汤。武则天服用后，咳喘症状明显减轻。冬虫夏草益肺补肾、止血化痰。现代研究表明虫草含有虫草素、虫草多糖，能增强免疫、抗疲劳、保护脏器。', lesson: '冬虫夏草益肺补肾、止血化痰。适合肺肾两虚、久咳虚喘、腰膝酸软。阴虚火旺者慎用', source: '《本草从新》', relatedHerbs: ['冬虫夏草', '人参', '鹿茸'], tags: ['补肾', '益肺'] },
  { id: 40, herb: '灵芝', title: '灵芝延年益寿', summary: '秦始皇求灵芝仙草', story: '传说秦始皇统一六国后，派徐福带领三千童男童女出海寻找仙草，即灵芝。灵芝性平味甘，归心、肺、肝、肾经，能补气安神、止咳平喘、延年益寿。《神农本草经》将灵芝列为上品，称其"主耳聋，利关节，保神益精，坚筋骨，好颜色"。现代研究证实灵芝含多糖、三萜类化合物，有增强免疫、抗肿瘤、延缓衰老的作用。', lesson: '灵芝补气安神、止咳平喘。适合心悸失眠、咳喘多痰、体虚早衰。手术前后一周慎用', source: '《神农本草经》', relatedHerbs: ['灵芝', '人参', '黄芪'], tags: ['延寿', '安神'] },
  { id: 41, herb: '天麻', title: '天麻息风止痉', summary: '华佗用天麻治愈头痛眩晕', story: '东汉华佗在《青囊书》中记载：有一位商人因常年奔波，风邪侵袭，导致头痛眩晕、耳鸣目眩。华佗诊断为肝风内动，用天麻钩藤饮治疗。天麻息风止痉、平肝潜阳；钩藤清热平肝、镇惊安神。商人服用数剂后，头痛眩晕消失，耳鸣目眩也好了。华佗称天麻为"治风之神药"。', lesson: '天麻息风止痉、平肝潜阳。适合肝风内动、头痛眩晕、手足麻木。高血压者可配伍使用', source: '《青囊书》·华佗', relatedHerbs: ['天麻', '钩藤', '石决明'], tags: ['止痉', '头痛'] },
  { id: 42, herb: '藏红花', title: '藏红花活血化瘀', summary: '文成公主用藏红花美容养颜', story: '唐代文成公主入藏时，带去了许多中原的药材和物品，其中就包括藏红花。藏红花活血化瘀、凉血解毒、解郁安神。公主入藏后，由于气候差异，出现月经不调、面色暗淡的症状。藏医让她每日用藏红花泡水饮用，公主面色逐渐红润，月经也正常了。藏红花从此成为藏族宫廷的美容圣品。', lesson: '藏红花活血化瘀、解郁安神。适合月经不调、瘀血肿痛、情志抑郁。孕妇禁用', source: '《藏药志》', relatedHerbs: ['藏红花', '当归', '益母草'], tags: ['活血', '美容'] },
  { id: 43, herb: '雪莲', title: '雪莲抗寒祛湿', summary: '雪莲治愈登山者冻伤', story: '清代乾隆年间，一位登山者在攀登雪山时不幸冻伤，双腿几乎失去知觉。当地藏医将他抬入帐篷，用雪莲花煎汤内服，并配合雪莲外敷患处。雪莲祛寒除湿、温肾助阳、强筋骨。几天后，登山者的冻伤竟然奇迹般地康复了。此事传开后，雪莲被中医界重视，成为治疗风寒湿痹的良药。', lesson: '雪莲祛寒除湿、温肾助阳。适合风寒湿痹、肾阳不足、冻伤肿痛。阴虚火旺者慎用', source: '《藏药志》', relatedHerbs: ['雪莲', '肉桂', '杜仲'], tags: ['祛寒', '祛湿'] },
  { id: 44, herb: '燕窝', title: '燕窝滋阴润肺', summary: '燕窝让宋美龄活到百岁', story: '宋美龄女士是著名的长寿老人，活到106岁。她的养生秘诀之一就是长期食用燕窝。燕窝性平味甘，滋阴润肺、补中益气。《本草纲目》记载："燕窝甘淡平，大养肺阴，化痰止咳，补而能清。"宋美龄每日早餐都会食用一碗燕窝，以保持肌肤弹性、延年益寿。现代研究表明燕窝含唾液酸、蛋白质，有美容养颜、增强免疫的作用。', lesson: '燕窝滋阴润肺、补中益气。适合肺阴不足、体虚咳嗽、肌肤干燥。糖尿病者慎用', source: '《本草纲目》', relatedHerbs: ['燕窝', '银耳', '百合'], tags: ['滋阴', '美容'] },
  { id: 45, herb: '海参', title: '海参补肾益精', summary: '海参让老人延年益寿', story: '《本草纲目拾遗》记载：沿海有一位老人，年过八旬仍身体硬朗，耳聪目明。众人询问养生之道，老人说他们当地盛产海参，他每日都会食用一条海参。海参补肾益精、养血润燥。《本草从新》称其"补肾益精，壮阳疗痿"。现代研究表明海参含海参皂苷、海参多糖，能增强免疫、抗肿瘤、延缓衰老。', lesson: '海参补肾益精、养血润燥。适合精血亏损、虚弱劳怯、阳痿遗精。感冒期间暂停食用', source: '《本草纲目拾遗》', relatedHerbs: ['海参', '枸杞', '山药'], tags: ['补肾', '延寿'] },
  { id: 46, herb: '玛卡', title: '玛卡增强体力', summary: '秘鲁矿工靠玛卡提高精力', story: '玛卡原产于秘鲁安第斯山区，几百年来被当地印加人用于增强体力和提高生育能力。传说当地矿工在高海拔地区工作，常感到疲劳乏力、精神不振。当地部落首领让他们每日食用玛卡根，矿工们的体力明显增强，工作效率大大提高。西班牙殖民者发现这一现象后，将玛卡带回欧洲，成为著名的滋补品。', lesson: '玛卡补肾益精、增强体力。适合肾虚疲劳、精力不足、更年期综合征。甲状腺患者慎用', source: '《秘鲁草药志》', relatedHerbs: ['玛卡', '人参', '枸杞'], tags: ['补肾', '增力'] },
  { id: 47, herb: '辣木籽', title: '辣木籽排毒养生', summary: '印度瑜伽士用辣木籽保持健康', story: '辣木树原产于印度，已有几千年的食用历史。印度传统医学阿育吠陀用它来治疗多种疾病。传说一位瑜伽士通过食用辣木籽和喝辣木叶茶，在恶劣的环境中保持了极佳的健康状态。辣木籽富含蛋白质、维生素、矿物质，有排毒、增强免疫、抗氧化的作用。印度人称辣木为"奇迹之树"。', lesson: '辣木籽排毒、增强免疫。适合亚健康、营养不良、免疫力低下。孕妇慎用', source: '《阿育吠陀》', relatedHerbs: ['辣木籽', '枸杞', '蜂蜜'], tags: ['排毒', '免疫'] },
  { id: 48, herb: '蜂王浆', title: '蜂王浆延年益寿', summary: '蜂王浆让蜂后长寿', story: '蜂群中的蜂后每天食用蜂王浆，寿命可达3-5年，而普通的工蜂只能活几十天。蜂王浆是蜜蜂巢中分泌的一种特殊物质，含丰富的蛋白质、氨基酸、维生素。《中华本草》记载：蜂王浆滋补强壮、益肝健脾。苏联曾对百岁老人做过调查，发现许多长寿者都有食用蜂产品的习惯。', lesson: '蜂王浆滋补强壮、益肝健脾。适合虚弱无力、营养不良、免疫力低下。过敏体质者慎用', source: '《中华本草》', relatedHerbs: ['蜂王浆', '蜂蜜', '花粉'], tags: ['滋补', '延寿'] },
  { id: 49, herb: '螺旋藻', title: '螺旋藻超级食物', summary: '螺旋藻让宇航员保持健康', story: '1960年代，前苏联宇航员加加林进入太空时，科学家们为他在饮食中添加了螺旋藻。螺旋藻是一种蓝绿藻，富含蛋白质、β-胡萝卜素、γ-亚麻酸等营养素。《联合国教科文组织》资料显示，螺旋藻是迄今发现的营养最全面的食物之一。宇航员食用后，身体状况良好，任务顺利完成。螺旋藻从此成为太空食品和保健品。', lesson: '螺旋藻增强免疫、抗疲劳。适合营养不良、免疫力低下、亚健康状态。痛风患者慎用', source: '《联合国教科文组织》', relatedHerbs: ['螺旋藻', '蜂王浆', '灵芝'], tags: ['营养', '免疫'] },
  { id: 50, herb: '纳豆', title: '纳豆溶解血栓', summary: '日本长寿村的秘密', story: '日本皇室从古代就有食用纳豆的传统。纳豆是大豆经过枯草杆菌发酵而成的食品，富含纳豆激酶、维生素K2。《日本食品工业》报道：日本长寿村冲绳岛的老人几乎每天都吃纳豆。纳豆激酶有溶解血栓、预防心脑血管疾病的作用。调查发现，经常食用纳豆的人群，心脑血管疾病发病率明显较低。', lesson: '纳豆溶解血栓、润肠通便。适合血栓风险、便秘、亚健康人群。痛风急性期慎用', source: '《日本食品工业》', relatedHerbs: ['纳豆', '山楂', '黑木耳'], tags: ['溶栓', '长寿'] },
  { id: 51, herb: '松花粉', title: '松花粉美容养颜', summary: '松花粉让武则天青春永驻', story: '唐代武则天喜欢在宫中收集松花粉，制作成养颜品服用。松花粉祛风益气、燥湿止血、美容养颜。《本草纲目》记载："松花粉，润心肺，益气，除风止血。"武则天到了晚年仍然容颜不老，传说与她长期服用松花粉有关。现代研究表明松花粉含200多种营养素，是天然的全营养食品。', lesson: '松花粉益气养心、燥湿止血。适合心悸失眠、湿热内蕴、皮肤粗糙。花粉过敏者慎用', source: '《本草纲目》', relatedHerbs: ['松花粉', '蜂蜜', '薏米'], tags: ['美容', '益气'] },
  { id: 52, herb: '蜂胶', title: '蜂胶天然抗生素', summary: '蜂胶治愈伤口感染', story: '古希腊医学家希波克拉底曾用蜂胶治疗伤口和皮肤病。蜂胶是蜜蜂从植物芽孢上采集的树脂，含有黄酮类、萜烯类化合物。《中华本草》记载：蜂胶补虚羸、止消渴、解毒止痛。现代研究证实蜂胶有广谱抗菌、消炎止痛、促进伤口愈合的作用，被广泛应用于保健品和化妆品中。', lesson: '蜂胶补虚消肿、解毒止痛。适合体虚多病、伤口感染、咽喉肿痛。蜂产品过敏者慎用', source: '《中华本草》', relatedHerbs: ['蜂胶', '蜂蜜', '蜂王浆'], tags: ['抗菌', '解毒'] },
  { id: 53, herb: '黄精', title: '黄精延年益寿', summary: '黄精让道士返老还童', story: '传说有一位道士在山中修炼，服用黄精多年，竟有返老还童的迹象。黄精补气养阴、健脾润肺、益肾填精。《本草纲目》记载："黄精补诸虚，填精髓，平补气血而润。"《神仙传》中记载多位道士因服用黄精而长寿。现代研究表明黄精含多糖、黄酮类化合物，有增强免疫、延缓衰老、降血糖的作用。', lesson: '黄精补气养阴、健脾润肺。适合气阴两虚、脾胃虚弱、体虚早衰。痰湿壅盛者慎用', source: '《本草纲目》', relatedHerbs: ['黄精', '枸杞', '人参'], tags: ['延寿', '补气'] },
  { id: 54, herb: '何首乌', title: '何首乌乌发延年', summary: '何首乌让老人黑发再生', story: '唐代有一位姓何的老人，因服用一种藤蔓的根块，头发由白变黑，寿命也延长了，人们便将此药命名为"何首乌"。《开宝本草》记载：何首乌益气血、黑髭鬓、悦颜色。清代《医宗金鉴》记载：用何首乌、熟地黄、当归等制成的七宝美髯丹，专治须发早白、腰膝酸软。现代研究表明何首乌含卵磷脂、蒽醌类化合物，有抗衰老、乌发的作用。', lesson: '何首乌补肝肾、益精血、乌须发。适合肝肾不足、须发早白、头晕耳鸣。忌与辛辣食物同服', source: '《开宝本草》', relatedHerbs: ['何首乌', '熟地黄', '当归'], tags: ['乌发', '补肾'] },
  { id: 55, herb: '熟地黄', title: '熟地黄补血滋阴', summary: '熟地黄让贫血女子康复', story: '明代《本草从新》记载：有一位女子因长期失血导致面色萎黄、头晕心悸、失眠多梦。郎中让她用熟地黄、当归、川芎、白芍制成的四物汤服用。熟地黄补血滋阴、益精填髓。女子服用一个月后，面色红润，头晕心悸消失，恢复了健康。四物汤成为中医补血的经典方剂。', lesson: '熟地黄补血滋阴、益精填髓。适合血虚萎黄、月经不调、肝肾阴虚。脾胃虚弱便溏者慎用', source: '《本草从新》', relatedHerbs: ['熟地黄', '当归', '川芎'], tags: ['补血', '滋阴'] },
  { id: 56, herb: '川芎', title: '川芎活血行气', summary: '川芎让头痛患者痊愈', story: '唐代孙思邈在《千金方》中记载：有一位妇人因血瘀导致头痛多年不愈，时好时坏，痛如针刺。孙思邈用川芎茶调散治疗，川芎活血行气、祛风止痛；茶叶清热利头目。妇人服用数日后，头痛大减，一月后痊愈。孙思邈称川芎为"血中气药"，能上行头目、下行血海。', lesson: '川芎活血行气、祛风止痛。适合血瘀头痛、月经不调、胸胁胀痛。阴虚火旺者慎用', source: '《千金方》·孙思邈', relatedHerbs: ['川芎', '白芷', '茶叶'], tags: ['活血', '止痛'] },
  { id: 57, herb: '益母草', title: '益母草妇科圣药', summary: '益母草治愈皇后产后疾病', story: '唐代孙思邈在《千金方》中记载：皇宫中一位皇后产后恶露不尽、小腹疼痛。御医诊断为产后血瘀，用益母草30克煎汤服用。益母草活血调经、利尿消肿、清热解毒。皇后服用三日后，恶露减少，小腹疼痛消失，身体逐渐康复。益母草从此成为中医妇科的圣药。', lesson: '益母草活血调经、利尿消肿。适合月经不调、产后腹痛、水肿尿少。孕妇禁用', source: '《千金方》·孙思邈', relatedHerbs: ['益母草', '当归', '川芎'], tags: ['妇科', '活血'] },
  { id: 58, herb: '艾叶', title: '艾叶温经止血', summary: '艾灸治愈久病老者', story: '明代李时珍在《本草纲目》中记载：有一位老者因久病导致阳气虚弱、畏寒肢冷、腰膝酸痛。李时珍让他用艾叶燃烧熏烤关元、肾俞等穴位。艾叶温经止血、散寒止痛；艾灸的热力更能温通经络。老者坚持艾灸数月后，畏寒症状明显改善，身体也强健了许多。《扁鹊心书》说："保命之法，艾灸第一。"', lesson: '艾叶温经止血、散寒止痛。适合虚寒出血、宫冷不孕、痛经带下。阴虚血热者慎用', source: '《本草纲目》·李时珍', relatedHerbs: ['艾叶', '当归', '肉桂'], tags: ['温经', '止血'] },
  { id: 59, herb: '红花', title: '红花活血通经', summary: '红花治愈跌打损伤', story: '宋代《圣济总录》记载：一位武将在练武时不慎跌倒，左腿瘀肿疼痛，不能行走。郎中用藏红花泡酒外敷患处，并让武将内服少许。藏红花活血通经、散瘀止痛。几天后，武将的瘀肿消退，又能正常行走了。藏红花从此成为治疗跌打损伤、瘀血肿痛的常用药。', lesson: '藏红花活血通经、散瘀止痛。适合跌打损伤、瘀血肿痛、闭经痛经。孕妇禁用', source: '《圣济总录》', relatedHerbs: ['藏红花', '三七', '乳香'], tags: ['活血', '跌打'] },
  { id: 60, herb: '丹参', title: '丹参活血化瘀', summary: '丹参让心脑血管患者康复', story: '唐代《日华子本草》记载：丹参活血化瘀、通经止痛、清心除烦。清代《时方歌括》有一首著名的丹参饮：丹参、檀香、砂仁三味药配伍，治疗心腹诸痛。现代药理研究证实丹参含丹参酮、丹参素，能扩张血管、改善微循环、抗血小板聚集，是治疗心脑血管疾病的常用中药。', lesson: '丹参活血化瘀、清心除烦。适合心绞痛、胸痹、痛经、跌打损伤。孕妇慎用', source: '《日华子本草》', relatedHerbs: ['丹参', '三七', '山楂'], tags: ['活血', '心血管'] },
  { id: 61, herb: '鸡血藤', title: '鸡血藤舒筋活络', summary: '鸡血藤治愈风湿痹痛', story: '清代《本草纲目拾遗》记载：有一位老农因常年劳作，患上了风湿痹痛，关节屈伸不利，行走困难。郎中让他用鸡血藤泡酒，每日饮用少许。鸡血藤活血补血、舒筋活络、通络止痛。老农坚持饮用数月后，关节疼痛明显减轻，能够正常劳作了。', lesson: '鸡血藤活血补血、舒筋活络。适合风湿痹痛、关节不利、肢体麻木。阴虚火旺者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['鸡血藤', '独活', '桑寄生'], tags: ['风湿', '舒筋'] },
  { id: 62, herb: '独活', title: '独活祛风除湿', summary: '独活治愈风湿性关节炎', story: '东汉张仲景在《金匮要略》中记载：有一位老人患风湿性关节炎多年，双膝肿痛、屈伸困难。张仲景用独活寄生汤治疗，独活祛风除湿、散寒止痛；桑寄生补肝肾、强筋骨。老人服用一个月后，关节肿痛消退，能够正常行走了。独活寄生汤成为治疗风湿痹痛的经典方剂。', lesson: '独活祛风除湿、散寒止痛。适合风寒湿痹、腰膝酸痛、下肢无力。阴虚血燥者慎用', source: '《金匮要略》·张仲景', relatedHerbs: ['独活', '桑寄生', '杜仲'], tags: ['祛风', '除湿'] },
  { id: 63, herb: '五味子', title: '五味子补肾宁心', summary: '五味子让咳喘老人康复', story: '唐代孙思邈在《千金要方》中记载：有一位老人患慢性咳喘多年，夜间咳喘加重，难以入眠。孙思邈用五味子汤治疗，五味子敛肺滋肾、生津涩精；配伍其他药物治疗。老人服用数日后，咳喘减轻，睡眠改善。五味子因酸、甜、苦、辛、咸五味俱全，故名"五味子"。', lesson: '五味子敛肺滋肾、生津涩精。适合久咳虚喘、津伤口渴、遗精滑泄。胃酸过多者慎用', source: '《千金要方》·孙思邈', relatedHerbs: ['五味子', '人参', '麦冬'], tags: ['补肾', '止咳'] },
  { id: 64, herb: '西洋参', title: '西洋参气阴双补', summary: '西洋参治愈林则徐咽干', story: '清代林则徐在虎门销烟后，被贬谪新疆。他长途跋涉，加上新疆气候干燥，出现咽干口燥、神疲乏力等症状。当地郎中给他用了西洋参泡茶。西洋参补气养阴、清热生津。林则徐服用后，咽干口燥消失，精神也好了许多。西洋参原产北美，与人参不同，偏于养阴清热。', lesson: '西洋参补气养阴、清热生津。适合气阴两虚、热病后期、咽干口燥。胃寒者慎用', source: '《增订本草备要》', relatedHerbs: ['西洋参', '麦冬', '五味子'], tags: ['补气', '养阴'] },
  { id: 65, herb: '鹿茸', title: '鹿茸温肾壮阳', summary: '乾隆皇帝用鹿茸延年益寿', story: '清代乾隆皇帝是历史上有名的长寿皇帝，活到89岁。他的养生秘诀之一就是适当服用鹿茸。鹿茸温肾壮阳、强筋健骨、调冲任固。《本草纲目》记载："鹿茸善于补肾壮阳、生精益血。"乾隆皇帝在御医指导下，每年冬季都会服用一段时间的鹿茸制品，身体强健，精力充沛。', lesson: '鹿茸温肾壮阳、强筋健骨。适合肾阳不足、阳痿遗精、宫冷不孕。阴虚阳亢者慎用', source: '《本草纲目》', relatedHerbs: ['鹿茸', '人参', '枸杞'], tags: ['壮阳', '延寿'] },
  { id: 66, herb: '龟板', title: '龟板滋阴潜阳', summary: '龟板让老人恢复听力', story: '明代《本草纲目》记载：有一位老人因肾阴不足，出现耳鸣耳聋、头晕眼花、腰膝酸软的症状。郎中用龟板、熟地黄、山茱萸等制成丸药服用。龟板滋阴潜阳、益肾健骨；熟地黄补血滋阴；山茱萸补益肝肾。老人服用数月后，耳鸣消失，听力也恢复了许多。', lesson: '龟板滋阴潜阳、益肾健骨。适合肾阴不足、骨蒸潮热、遗精带下。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['龟板', '熟地黄', '山茱萸'], tags: ['滋阴', '补肾'] },
  { id: 67, herb: '鳖甲', title: '鳖甲软坚散结', summary: '鳖甲治愈肝脾肿大', story: '清代《温病条辨》记载：有一位患者因久病导致肝脾肿大，腹部胀满不适。郎中诊断为瘀血内结，用鳖甲煎丸治疗。鳖甲滋阴潜阳、软坚散结；配伍桃仁、大黄等活血化瘀药。患者服用一段时间后，肝脾肿大明显缩小，腹部胀满也消失了。', lesson: '鳖甲滋阴潜阳、软坚散结。适合肝脾肿大、癥瘕积聚、骨蒸劳热。脾胃虚寒便溏者慎用', source: '《温病条辨》', relatedHerbs: ['鳖甲', '桃仁', '大黄'], tags: ['软坚', '散结'] },
  { id: 68, herb: '海马', title: '海马温肾壮阳', summary: '海马让男子重振雄风', story: '明代《本草纲目》记载：海马温肾壮阳、散结消肿。一男子因肾阳不足导致阳痿不育，服用海马泡酒三个月后，阳痿症状明显改善。海马配伍枸杞、淫羊藿等，补肾壮阳效果更佳。现代研究证实海马含蛋白质、微量元素，有增强免疫、抗疲劳的作用。', lesson: '海马温肾壮阳、散结消肿。适合肾阳不足、阳痿不育、虚喘咳嗽。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['海马', '枸杞', '淫羊藿'], tags: ['壮阳', '补肾'] },
  { id: 69, herb: '杜仲', title: '杜仲补肾强腰', summary: '杜仲治愈腰痛患者', story: '唐代《药性论》记载：杜仲补肾气、壮筋骨、益腰膝。有一位商人因常年奔波，腰部酸痛难忍，行走困难。郎中让他用杜仲、续断、桑寄生各15克煎汤服用。杜仲补肝肾、强筋骨；续断行血脉、续筋骨。商人服用一个月后，腰部酸痛明显减轻，能够正常行走了。', lesson: '杜仲补肝肾、强筋骨、安胎。适合肾虚腰痛、胎动不安、高血压。阴虚火旺者慎用', source: '《药性论》', relatedHerbs: ['杜仲', '续断', '桑寄生'], tags: ['强腰', '补肾'] },
  { id: 70, herb: '续断', title: '续断接骨疗伤', summary: '续断治愈骨折患者', story: '明代《本草纲目》记载：有一位农夫在劳作时不慎摔伤，导致小腿骨折。郎中用续断、骨碎补、自然铜等药物治疗，并配合手法复位。续断补肝肾、续筋骨、通血脉。农夫坚持服药并静养数月后，骨折愈合，能够正常行走了。续断被称为"伤科要药"。', lesson: '续断补肝肾、续筋骨、止血安胎。适合骨折伤痛、跌打损伤、胎动不安。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['续断', '杜仲', '骨碎补'], tags: ['接骨', '疗伤'] },
  { id: 71, herb: '骨碎补', title: '骨碎补坚骨疗伤', summary: '骨碎补治愈骨折不愈', story: '唐代《本草拾遗》记载：骨碎补又名"猴姜"，能补肾强骨、续筋疗伤。有一位骨折患者，骨折后久久不能愈合，疼痛难忍。郎中让他用骨碎补煎汤服用，并外敷患处。骨碎补能促进骨折愈合、缓解疼痛。患者使用一段时间后，骨折愈合，疼痛消失。', lesson: '骨碎补补肾强骨、续筋疗伤。适合骨折久不愈合、跌打损伤、肾虚腰痛。阴虚火旺者慎用', source: '《本草拾遗》', relatedHerbs: ['骨碎补', '续断', '杜仲'], tags: ['疗伤', '补肾'] },
  { id: 72, herb: '淫羊藿', title: '淫羊藿壮阳起痿', summary: '淫羊藿让阳痿患者重获新生', story: '南北朝《本草经集注》记载：淫羊藿又名"仙灵脾"，补肾阳、强筋骨、祛风湿。据说一位牧羊人发现羊吃了这种草后，交配能力增强，因此发现了淫羊藿的壮阳功效。淫羊藿配伍枸杞、菟丝子等，补肾壮阳效果更佳。现代研究证实淫羊藿含淫羊藿苷，能增强性功能、抗衰老。', lesson: '淫羊藿补肾阳、强筋骨、祛风湿。适合肾阳不足、阳痿遗精、风湿痹痛。阴虚火旺者慎用', source: '《本草经集注》', relatedHerbs: ['淫羊藿', '枸杞', '巴戟天'], tags: ['壮阳', '祛湿'] },
  { id: 73, herb: '巴戟天', title: '巴戟天补肾壮阳', summary: '巴戟天治愈阳虚不孕', story: '明代《本草纲目》记载：巴戟天补肾阳、强筋骨、祛风湿。有一位女子因宫冷不孕多年，四处求医无效。郎中诊断为肾阳不足、胞宫虚寒，用巴戟天、熟地黄、附子等药物治疗。女子服用数月后，畏寒症状改善，后来成功怀孕。巴戟天成为治疗宫冷不孕的常用药。', lesson: '巴戟天补肾阳、强筋骨、祛风湿。适合宫冷不孕、阳痿遗精、风湿痹痛。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['巴戟天', '熟地黄', '附子'], tags: ['壮阳', '安胎'] },
  { id: 74, herb: '锁阳', title: '锁阳补肾润肠', summary: '锁阳治愈便秘肾虚', story: '清代《本草纲目拾遗》记载：锁阳补肾阳、润肠燥。有一位老人因肾阳不足导致便秘，同时有腰膝酸软、畏寒肢冷的症状。郎中让他用锁阳、肉苁蓉各20克煎汤服用。锁阳补肾阳、润肠燥；肉苁蓉补肾阳、益精血、润肠通便。老人服用后，便秘畅通，腰膝也感觉有力了。', lesson: '锁阳补肾阳、润肠燥。适合肾阳不足、便秘、腰膝酸软。阴虚火旺、便溏者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['锁阳', '肉苁蓉', '火麻仁'], tags: ['润肠', '补肾'] },
  { id: 75, herb: '肉苁蓉', title: '肉苁蓉沙漠人参', summary: '肉苁蓉治愈肾虚便秘', story: '唐代《本草图经》记载：肉苁蓉又名"沙漠人参"，补肾阳、益精血、润肠燥。传说有一位男子因房劳过度，导致肾虚便秘，腰膝酸软，头晕耳鸣。郎中用肉苁蓉30克煎汤服用。肉苁蓉质地温润，补而不峻，润而不泄。男子服用后，便秘畅通，肾虚症状也改善了。', lesson: '肉苁蓉补肾阳、益精血、润肠通便。适合肾虚便秘、阳痿不育、腰膝酸软。阴虚火旺、便溏者慎用', source: '《本草图经》', relatedHerbs: ['肉苁蓉', '锁阳', '当归'], tags: ['润肠', '补肾'] },
  { id: 76, herb: '冬葵子', title: '冬葵子利尿通淋', summary: '冬葵子治愈尿路感染', story: '明代《本草纲目》记载：冬葵子利尿通淋、滑肠通便。有一位女子因尿路感染，小便时疼痛难忍，并有尿频尿急的症状。郎中让她用冬葵子、茯苓、车前子各10克煎汤服用。冬葵子清热利尿、通淋止痛。女子服用三日后，小便疼痛减轻，一周后痊愈。', lesson: '冬葵子清热利尿、通淋滑肠。适合尿路感染、小便不利、便秘。脾虚便溏者慎用', source: '《本草纲目》', relatedHerbs: ['冬葵子', '茯苓', '车前子'], tags: ['通淋', '利尿'] },
  { id: 77, herb: '车前子', title: '车前子利尿通淋', summary: '车前子治愈痛风水肿', story: '宋代《太平惠民和剂局方》记载：车前子利尿通淋、渗湿止泻。有一位痛风患者，因体内湿热蕴结，导致足踝肿胀疼痛，小便不利。郎中用车前子、泽泻、茯苓各15克煎汤服用。车前子清热利尿、渗湿泄浊。患者服用后，小便增多，肿胀逐渐消退。', lesson: '车前子清热利尿、渗湿止泻。适合小便不利、水肿胀满、暑湿泄泻。肾虚精滑者慎用', source: '《太平惠民和剂局方》', relatedHerbs: ['车前子', '泽泻', '茯苓'], tags: ['利尿', '渗湿'] },
  { id: 78, herb: '泽泻', title: '泽泻利水渗湿', summary: '泽泻治愈水肿肥胖', story: '东汉《神农本草经》将泽泻列为上品，记载其"主风寒湿痹，消水，久服耳目聪明"。明代《本草纲目》详细解释：泽泻利水渗湿、泄热通淋。有一位体型肥胖的患者，因脾虚湿盛导致水肿、小便不利。郎中用泽泻、白术、茯苓配伍治疗。患者服用后，水肿消退，体重也明显下降。', lesson: '泽泻利水渗湿、泄热通淋。适合水肿胀满、小便不利、痰饮眩晕。肾虚滑精者慎用', source: '《神农本草经》', relatedHerbs: ['泽泻', '白术', '茯苓'], tags: ['利水', '渗湿'] },
  { id: 79, herb: '薤白', title: '薤白通阳散结', summary: '薤白治愈胸痹', story: '汉代《伤寒杂病论》记载：胸痹不得卧，心痛彻背者，瓜蒌薤白白酒汤主之。有一位老人因胸阳不振，导致胸闷胸痛、呼吸困难。郎中用瓜蒌、薤白、半夏、白酒煎汤服用。薤白通阳散结、行气导滞；瓜蒌宽胸散结。患者服用后，胸闷胸痛明显减轻，能够平躺入睡了。', lesson: '薤白通阳散结、行气导滞。适合胸痹胸痛、脘腹胀满、泻痢里急。阴虚发热者慎用', source: '《伤寒杂病论》·张仲景', relatedHerbs: ['薤白', '瓜蒌', '半夏'], tags: ['通阳', '散结'] },
  { id: 80, herb: '小茴香', title: '小茴香散寒止痛', summary: '小茴香治愈寒疝腹痛', story: '明代《本草纲目》记载：小茴香散寒止痛、理气和胃。有一位男子因受寒导致右侧睾丸疼痛，诊断为寒疝。郎中用小茴香、乌药、肉桂各10克煎汤服用。小茴香散寒止痛、理气暖肾。患者服用三日后，寒疝腹痛消失。小茴香还是厨房常见的调料，适合烹调寒凉食物时使用。', lesson: '小茴香散寒止痛、理气和胃。适合寒疝腹痛、睾丸疼痛、脘腹胀满。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['小茴香', '乌药', '肉桂'], tags: ['散寒', '止痛'] },
  { id: 81, herb: '花椒', title: '花椒温中散寒', summary: '花椒治愈胃寒呕吐', story: '唐代《本草纲目》记载：花椒温中散寒、止痛杀虫。有一位女子因过食生冷，导致胃寒呕吐、腹痛腹泻。郎中让她用花椒、干姜各5克煎汤，加入红糖调味服用。花椒温中散寒止痛；干姜温胃散寒止呕。女子服用后，呕吐腹痛停止，胃里感觉温暖舒适。', lesson: '花椒温中散寒、止痛杀虫。适合胃寒呕吐、腹痛泄泻、蛔虫腹痛。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['花椒', '干姜', '红糖'], tags: ['温中', '散寒'] },
  { id: 82, herb: '胡椒', title: '胡椒温胃散寒', summary: '胡椒治愈胃寒胃痛', story: '宋代《证类本草》记载：胡椒温胃散寒、下气消痰。有一位商人因常年出差，饮食不规律，导致胃寒胃痛，进食生冷食物后尤为明显。郎中让他每日用白胡椒5克，猪肚一个，炖汤服用。胡椒温胃散寒；猪肚健脾养胃。商人坚持服用一个月后，胃寒症状明显改善，胃口也好了。', lesson: '胡椒温胃散寒、下气消痰。适合胃寒疼痛、脘腹冷痛、呕逆泄泻。阴虚火旺者慎用', source: '《证类本草》', relatedHerbs: ['胡椒', '猪肚', '生姜'], tags: ['温胃', '散寒'] },
  { id: 83, herb: '丁香', title: '丁香温肾助阳', summary: '丁香治愈呃逆呕吐', story: '唐代《药性论》记载：丁香温中降逆、散寒止痛、温肾助阳。有一位患者因胃寒导致呃逆不止，难以进食。郎中用丁香、柿蒂各5克煎汤服用。丁香温中降逆、散寒止痛；柿蒂降逆止呃。患者服用后，呃逆停止，能够正常进食了。丁香还有温肾助阳的作用，可用于改善性功能。', lesson: '丁香温中降逆、散寒止痛、温肾助阳。适合呃逆呕吐、胃寒疼痛、肾虚阳痿。阴虚内热者慎用', source: '《药性论》', relatedHerbs: ['丁香', '柿蒂', '干姜'], tags: ['降逆', '温中'] },
  { id: 84, herb: '肉桂', title: '肉桂温肾助阳', summary: '肉桂治愈五更泻', story: '明代《本草纲目》记载：肉桂补火助阳、散寒止痛、活血通经。有一位老人因肾阳不足，每天黎明时分（五更）就会出现腹痛腹泻，俗称"五更泻"。郎中用肉桂、补骨脂、五味子、吴茱萸等制成四神丸服用。肉桂温肾助阳、散寒止泻。患者服用后，五更泻的症状明显改善。', lesson: '肉桂补火助阳、散寒止痛、温经通脉。适合肾阳不足、五更泻、腹痛腹胀。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['肉桂', '补骨脂', '吴茱萸'], tags: ['温肾', '止泻'] },
  { id: 85, herb: '白豆蔻', title: '白豆蔻化湿行气', summary: '白豆蔻治愈湿阻中焦', story: '唐代《本草图经》记载：白豆蔻化湿行气、温中止呕。有一位厨师因长期接触冷水，导致脾胃被寒湿所困，出现脘腹胀满、食欲不振、恶心呕吐的症状。郎中用白豆蔻、砂仁、厚朴各10克煎汤服用。白豆蔻化湿行气、温中止呕。患者服用数日后，脘腹胀满减轻，食欲也恢复了。', lesson: '白豆蔻化湿行气、温中止呕。适合湿阻中焦、脘腹胀满、恶心呕吐。阴虚血少者慎用', source: '《本草图经》', relatedHerbs: ['白豆蔻', '砂仁', '厚朴'], tags: ['化湿', '行气'] },
  { id: 86, herb: '草果', title: '草果祛寒除湿', summary: '草果治愈寒湿中焦', story: '明代《本草纲目》记载：草果燥湿祛寒、辟瘴截疟。有一位南方商人因长期在潮湿环境中生活，出现脘腹胀满、呕吐腹泻的症状，被认为是"瘴气"所伤。郎中用草果、厚朴、苍术煎汤服用。草果燥湿祛寒、辟瘴化浊。患者服用后，寒湿之症逐渐消失。草果是云南等潮湿地区常用的祛寒湿药。', lesson: '草果燥湿祛寒、辟瘴截疟。适合寒湿中阻、脘腹胀满、疟疾寒热。阴虚血少者慎用', source: '《本草纲目》', relatedHerbs: ['草果', '厚朴', '苍术'], tags: ['祛寒', '除湿'] },
  { id: 87, herb: '草豆蔻', title: '草豆蔻健脾燥湿', summary: '草豆蔻治愈脾虚湿盛', story: '清代《本草求真》记载：草豆蔻健脾燥湿、温中散寒。有一位患者因脾虚运化失常，导致湿浊内生，出现脘腹胀满、食欲不振、大便溏泄的症状。郎中用草豆蔻、党参、白术各15克煎汤服用。草豆蔻健脾燥湿；党参、白术健脾益气。患者服用一段时间后，脾虚湿盛的症状明显改善。', lesson: '草豆蔻健脾燥湿、温中散寒。适合脾虚湿盛、脘腹胀满、呕逆泄泻。阴虚血少者慎用', source: '《本草求真》', relatedHerbs: ['草豆蔻', '党参', '白术'], tags: ['健脾', '燥湿'] },
  { id: 88, herb: '神曲', title: '神曲消食化积', summary: '神曲治愈食积不化', story: '唐代《千金要方》记载：神曲消食化积、健脾和胃。有一位官员因赴宴过多，暴饮暴食，导致脘腹胀满、嗳腐吞酸、大便不畅。郎中让他用神曲、山楂、麦芽各15克煎汤服用。神曲消各种食积；山楂善消肉食；麦芽善消米面。患者服用后，腹胀减轻，嗳腐吞酸也消失了。', lesson: '神曲消食化积、健脾和胃。适合食积不化、脘腹胀满、嗳腐吞酸。胃阴不足者慎用', source: '《千金要方》·孙思邈', relatedHerbs: ['神曲', '山楂', '麦芽'], tags: ['消食', '化积'] },
  { id: 89, herb: '莱菔子', title: '莱菔子降气化痰', summary: '莱菔子治愈咳嗽痰多', story: '清代《医学衷中参西录》记载：莱菔子消食除胀、降气化痰。有一位老人因脾虚生痰，咳嗽痰多，胸脘胀满。郎中用莱菔子、白芥子、紫苏子各10克煎汤服用。莱菔子消食除胀、降气化痰；白芥子温肺化痰；紫苏子止咳平喘。患者服用数日后，咳嗽减轻，痰也少了。', lesson: '莱菔子消食除胀、降气化痰。适合食积腹胀、咳嗽痰多、气喘痰壅。气虚者慎用', source: '《医学衷中参西录》', relatedHerbs: ['莱菔子', '白芥子', '紫苏子'], tags: ['降气', '化痰'] },
  { id: 90, herb: '使君子', title: '使君子驱虫消积', summary: '使君子治愈小儿虫积', story: '宋代《开宝本草》记载：使君子杀虫消积。相传有一位小儿因饮食不洁，导致面色萎黄、形体消瘦、肚腹胀大、夜间磨牙。郎中诊断为蛔虫积滞，让其服用使君子炒香嚼服。小儿服用后排出蛔虫，腹胀渐消，面色也红润了。使君子味道甘美，小儿容易接受。', lesson: '使君子杀虫消积。适合蛔虫病、小儿疳积。不宜大量服用，空腹慎用', source: '《开宝本草》', relatedHerbs: ['使君子', '槟榔', '苦楝皮'], tags: ['驱虫', '消积'] },
  { id: 91, herb: '苦楝皮', title: '苦楝皮杀虫疗癣', summary: '苦楝皮治愈蛔虫病', story: '明代《本草纲目》记载：苦楝皮清热燥湿、杀虫疗癣。有一位小儿因患蛔虫病，导致腹痛绕脐、夜间磨牙、营养不良。郎中用苦楝皮、槟榔、使君子各10克煎汤服用。苦楝皮杀虫效力较强，能驱杀多种肠道寄生虫。小儿服用后，腹痛减轻，虫体排出。', lesson: '苦楝皮杀虫疗癣、清热燥湿。适合蛔虫病、蛲虫病、疥癣湿疮。肝病患者慎用', source: '《本草纲目》', relatedHerbs: ['苦楝皮', '槟榔', '使君子'], tags: ['杀虫', '疗癣'] },
  { id: 92, herb: '南瓜子', title: '南瓜子驱虫保健', summary: '南瓜子预防前列腺疾病', story: '《中华本草》记载：南瓜子驱虫消肿、下乳利水。民间验方：用生南瓜子30克，每日嚼服，可预防和改善前列腺增生。现代研究证实南瓜子含锌、不饱和脂肪酸，能保护前列腺。南瓜子因此成为男性保健的常用食品。', lesson: '南瓜子驱虫消肿、下乳利水。适合蛔虫病、前列腺增生、乳汁不下。胃热者不宜多食', source: '《中华本草》', relatedHerbs: ['南瓜子', '冬瓜子', '西瓜子'], tags: ['驱虫', '保健'] },
  { id: 93, herb: '榧子', title: '榧子驱虫润肠', summary: '榧子治愈多种虫积', story: '明代《本草纲目》记载：榧子杀虫消积、润肺滑肠。有一位患者同时患有蛔虫和蛲虫病，服用多种驱虫药效果不佳。郎中用榧子30克嚼服，每日两次。榧子能驱杀多种肠道寄生虫，且不伤脾胃。患者服用一周后，虫体排出，虫积痊愈。榧子还含有丰富的油脂，能润肠通便。', lesson: '榧子杀虫消积、润肺滑肠。适合多种肠道寄生虫病、肠燥便秘。痰热咳嗽者慎用', source: '《本草纲目》', relatedHerbs: ['榧子', '使君子', '槟榔'], tags: ['驱虫', '润肠'] },
  { id: 94, herb: '蛇床子', title: '蛇床子燥湿止痒', summary: '蛇床子治愈阴痒湿疹', story: '汉代《神农本草经》记载：蛇床子燥湿杀虫、祛风止痒。有一位女子因下身潮湿导致阴痒难忍，白带增多。郎中用蛇床子、苦参、黄柏各30克煎汤熏洗。蛇床子燥湿杀虫止痒；苦参清热燥湿；黄柏清热泻火。患者熏洗数日后，阴痒明显减轻。蛇床子外用能治疗多种皮肤病和妇科炎症。', lesson: '蛇床子燥湿杀虫、祛风止痒。适合阴痒带下、湿疹疥癣、阴道滴虫。外用为主', source: '《神农本草经》', relatedHerbs: ['蛇床子', '苦参', '黄柏'], tags: ['止痒', '燥湿'] },
  { id: 95, herb: '土荆皮', title: '土荆皮杀虫止痒', summary: '土荆皮治愈脚气香港脚', story: '《药材学》记载：土荆皮杀虫止痒。有一位商人因长期穿皮鞋，脚部潮湿导致香港脚（足癣），脚痒难忍。郎中用土荆皮30克浸醋一周后，外涂患处。土荆皮能抑制多种真菌，对足癣、手癣、体癣都有较好的疗效。商人使用数日后，脚痒减轻，足癣逐渐痊愈。', lesson: '土荆皮杀虫止痒。适合足癣（香港脚）、手癣、体癣、湿疹。外用为主', source: '《药材学》', relatedHerbs: ['土荆皮', '苦参', '蛇床子'], tags: ['止痒', '杀虫'] },
  { id: 96, herb: '木蝴蝶', title: '木蝴蝶清肺利咽', summary: '木蝴蝶治愈咽喉肿痛', story: '明代《本草纲目拾遗》记载：木蝴蝶润肺利咽、疏肝和胃。有一位歌者因长期用嗓，出现声音嘶哑、咽喉干痛。郎中用木蝴蝶、胖大海、蝉蜕各6克煎汤服用。木蝴蝶疏肝利咽；胖大海清热润肺；蝉蜕宣肺开音。歌者服用数日后，声音恢复正常，咽喉舒适。', lesson: '木蝴蝶疏肝和胃、润肺利咽。适合声音嘶哑、咽喉肿痛、肝胃气痛。风寒咳嗽者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['木蝴蝶', '胖大海', '蝉蜕'], tags: ['利咽', '开音'] },
  { id: 97, herb: '胖大海', title: '胖大海润肺通便', summary: '胖大海治愈肺热咳嗽', story: '清代《本草纲目拾遗》记载：胖大海清热润肺、利咽开音、润肠通便。有一位播音员因用嗓过度，出现声音嘶哑、干咳少痰。郎中用胖大海、罗汉果、麦冬各10克煎汤服用。胖大海清热润肺、利咽开音；罗汉果清肺润喉。患者服用数日后，声音恢复正常，干咳也止了。', lesson: '胖大海清热润肺、利咽开音、润肠通便。适合肺热咳嗽、声音嘶哑、肠燥便秘。风寒咳嗽者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['胖大海', '罗汉果', '麦冬'], tags: ['润肺', '通便'] },
  { id: 98, herb: '鹤虱', title: '鹤虱杀虫止痒', summary: '鹤虱治愈蛲虫病', story: '唐代《唐本草》记载：鹤虱杀虫消积。有一位小儿因患蛲虫病，导致肛门瘙痒、夜间哭闹、营养不良。郎中用鹤虱、苦楝皮、槟榔各10克煎汤服用。鹤虱专杀蛲虫；苦楝皮清热燥湿杀虫；槟榔驱虫消积。小儿服用后，蛲虫被驱除，肛门瘙痒消失。', lesson: '鹤虱杀虫消积。适合蛲虫病、蛔虫病、小儿疳积。孕妇慎用', source: '《唐本草》', relatedHerbs: ['鹤虱', '苦楝皮', '槟榔'], tags: ['杀虫', '止痒'] },
  { id: 99, herb: '覆盆子', title: '覆盆子益肾缩尿', summary: '覆盆子治愈遗精早泄', story: '明代《本草衍义》记载：覆盆子益肾固精、缩尿明目。有一位男子因肾虚不固，导致遗精早泄、尿频夜尿多。郎中用覆盆子、枸杞子、菟丝子各15克煎汤服用。覆盆子益肾固精；枸杞子补肾益精；菟丝子补肾固精。男子服用数周后，遗精早泄明显改善，尿频也减少了。', lesson: '覆盆子益肾固精、缩尿明目。适合遗精早泄、尿频夜尿多、视力减退。阴虚火旺者慎用', source: '《本草衍义》', relatedHerbs: ['覆盆子', '枸杞子', '菟丝子'], tags: ['益肾', '缩尿'] },
{ id: 100, herb: '五倍子', title: '五倍子敛肺降火', summary: '五倍子治愈久咳虚汗', story: '明代《本草纲目》记载：五倍子敛肺降火、涩肠止泻、固精止遗、敛汗止血。有一位老教师因肺阴不足，导致久咳不止、虚汗淋漓。郎中用五倍子、罂粟壳、乌梅各10克研末敷脐。五倍子敛肺止咳、收敛止汗；罂粟壳镇咳定喘；乌梅生津止渴。教师使用后，咳嗽减轻，虚汗也止了。五倍子外用还能治疗口腔溃疡和痔疮。', lesson: '五倍子敛肺降火、涩肠止泻、固精止遗、敛汗止血。适合久咳虚汗、久泻久痢、遗精带下。外用治口腔溃疡', source: '《本草纲目》', relatedHerbs: ['五倍子', '乌梅', '罂粟壳'], tags: ['敛肺', '止汗'] },
  { id: 101, herb: '白扁豆', title: '白扁豆健脾化湿', summary: '白扁豆治愈脾胃虚弱', story: '明代李时珍在《本草纲目》中记载：一位书生因常年苦读，饮食不规律，导致脾胃虚弱、食欲不振、腹泻消瘦。老中医让他用白扁豆、山药、茯苓各30克，煮粥食用。白扁豆健脾和中、化湿消暑；山药补脾养胃；茯苓健脾渗湿。书生食用一个月后，脾胃功能恢复，食欲大增，体重也增加了。白扁豆被《本草图经》称为"健脾化湿之要药"。', lesson: '白扁豆健脾和中、化湿消暑。适合脾虚湿盛、食欲不振、暑湿吐泻。需完全煮熟食用', source: '《本草纲目》', relatedHerbs: ['白扁豆', '山药', '茯苓'], tags: ['健脾', '化湿'] },
  { id: 102, herb: '乌梅', title: '乌梅生津止渴', summary: '乌梅让曹操军队望梅止渴', story: '东汉末年，曹操率军远征，行军途中天气炎热，士兵们口渴难耐，行军速度越来越慢。曹操灵机一动，指着前方说："前面有一片梅林，梅子又酸又甜，可以解渴！"士兵们一听，嘴里生津，士气大振，加快了行军速度，最终到达有水的地方。这就是著名的"望梅止渴"故事。《本草经疏》记载："乌梅敛肺涩肠，生津止渴。"乌梅味酸，能促进唾液分泌，解暑除烦。', lesson: '乌梅敛肺止咳、生津止渴。适合肺虚久咳、虚热消渴、久泻久痢。胃酸过多者慎用', source: '《本草经疏》', relatedHerbs: ['乌梅', '山楂', '甘草'], tags: ['生津', '止渴'] },
  { id: 103, herb: '佛手', title: '佛手理气和中', summary: '佛手治愈胸胁胀满', story: '清代《本草纲目》记载：有一位商人因长期忧愁郁闷，导致胸胁胀满、嗳气反酸、食欲不振。郎中诊断为肝气郁结，用佛手，陈皮各10克煎汤服用。佛手疏肝理气，和胃止痛；陈皮理气健脾。商人服用数日后，胸胁胀满减轻，嗳气也消失了。佛手因形状像佛手而得名，是理气止痛的要药。', lesson: '佛手疏肝理气，和胃止痛。适合肝胃气滞，胸胁胀满、嗳气呕吐。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['佛手', '陈皮', '香附'], tags: ['理气', '和胃'] },
  { id: 104, herb: '火麻仁', title: '火麻仁润肠通便', summary: '火麻仁让老人排便通畅', story: '《神农本草经》记载：火麻仁润燥滑肠、通淋活血。一位老人因肠燥津亏，导致大便干结如羊粪，数日一行，每次排便都痛苦不堪。郎中让他用火麻仁、杏仁、桃仁各15克，研末加蜂蜜服用。火麻仁润肠通便；杏仁润肺滑肠；桃仁活血润燥。老人服用后，大便逐渐通畅，肠道也舒适了。火麻仁是润肠通便的良药。', lesson: '火麻仁润肠通便、润燥活血。适合肠燥便秘、血虚津亏。孕妇慎用', source: '《神农本草经》', relatedHerbs: ['火麻仁', '杏仁', '桃仁'], tags: ['润肠', '通便'] },
  { id: 105, herb: '沙棘', title: '沙棘健脾消食', summary: '沙棘让体力劳动者恢复精力', story: '唐代《四部医典》记载：藏区牧民因长期食用牛羊肉，容易消化不良。一位老藏医让他们在饭后服用沙棘果。沙棘健脾消食、活血化瘀。牧民服用后，消化功能明显改善，体力也增强了。沙棘耐寒耐旱，生长在高原地区，是藏区珍贵的药食同源植物。现代研究表明沙棘含维生素C是猕猴桃的3倍。', lesson: '沙棘健脾消食、活血化瘀。适合食积消化不良、瘀血肿痛。温开水冲服或泡酒', source: '《四部医典》', relatedHerbs: ['沙棘', '山楂', '麦芽'], tags: ['消食', '活血'] },
  { id: 106, herb: '玉竹', title: '玉竹滋阴润肺', summary: '玉竹让歌唱家长久不衰', story: '清代《本草新编》记载：有一位著名的歌唱家，因长期用嗓过度，出现咽干口燥、干咳少痰、声音嘶哑。老中医用玉竹、麦冬、百合各15克煎汤代茶饮用。玉竹滋阴润肺、养胃生津；麦冬润肺清心；百合润肺止咳。歌唱家连服月余，嗓音恢复，歌声更加嘹亮。玉竹因形态如玉竹节而得名。', lesson: '玉竹滋阴润肺、养胃生津。适合肺阴不足、干咳少痰、胃阴不足。痰湿者慎用', source: '《本草新编》', relatedHerbs: ['玉竹', '麦冬', '百合'], tags: ['滋阴', '润肺'] },
  { id: 107, herb: '余甘子', title: '余甘子清热利咽', summary: '余甘子治愈咽喉肿痛', story: '唐代《本草拾遗》记载：余甘子生于岭南，味先酸涩后甘甜，故名"余甘"。有一位商人因旅途劳累，出现咽喉肿痛、口干舌燥。当地人让他嚼食余甘子。商人服后，咽喉肿痛减轻，口中回甘舒适。余甘子清热利咽、生津止渴，是岭南地区的特产药材。现代研究表明余甘子含鞣质丰富，有抗菌消炎作用。', lesson: '余甘子清热利咽、生津止渴。适合咽喉肿痛、口干舌燥。脾胃虚寒者慎用', source: '《本草拾遗》', relatedHerbs: ['余甘子', '胖大海', '金银花'], tags: ['清热', '利咽'] },
  { id: 108, herb: '昆布', title: '昆布软坚散结', summary: '昆布治愈甲状腺肿大', story: '南北朝《本草经集注》记载：昆布又名"海带"，软坚散结、利水消肿。有一位女子因缺碘导致甲状腺肿大，脖子粗大，影响美观和呼吸。郎中让她常食昆布，并配伍海藻、夏枯草各10克煎汤。昆布含碘丰富，能调节甲状腺功能；海藻软坚散结；夏枯草清肝散结。女子坚持食用数月后，甲状腺肿大明显缩小。', lesson: '昆布软坚散结、利水消肿。适合甲状腺肿大、水肿、高血压。甲亢者慎用', source: '《本草经集注》', relatedHerbs: ['昆布', '海藻', '夏枯草'], tags: ['软坚', '散结'] },
  { id: 109, herb: '海藻', title: '海藻消痰利水', summary: '海藻治愈瘿瘤水肿', story: '唐代《神农本草经》记载：海藻消痰软坚、利水消肿。一位老中医用海藻、昆布各15克，配伍茯苓、泽泻煎汤，治疗了一位甲状腺肿大和水肿并存的患者。海藻消痰软坚；昆布软坚散结；茯苓泽泻利水渗湿。患者服用月余，肿大缩小，水肿消退。海藻富含碘和褐藻胶。', lesson: '海藻消痰软坚、利水消肿。适合甲状腺肿大、水肿、高血脂。脾胃虚寒者慎用', source: '《神农本草经》', relatedHerbs: ['海藻', '昆布', '茯苓'], tags: ['消痰', '利水'] },
  { id: 110, herb: '胖大海', title: '胖大海润肺开音', summary: '胖大海让播音员声音恢复', story: '清代《本草纲目拾遗》记载：胖大海清热润肺、利咽开音、润肠通便。有一位播音员因长期用嗓，出现声音嘶哑、干咳少痰。郎中用胖大海、罗汉果、麦冬各10克煎汤服用。胖大海清热润肺、利咽开音；罗汉果清肺润喉；麦冬养阴生津。播音员服用数日后，声音恢复正常。', lesson: '胖大海清热润肺、利咽开音。适合肺热咳嗽、声音嘶哑、肠燥便秘。风寒咳嗽者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['胖大海', '罗汉果', '麦冬'], tags: ['润肺', '开音'] },
  { id: 111, herb: '青果', title: '青果清热利咽', summary: '青果治愈咽喉肿痛', story: '明代《本草纲目》记载：青果又名"橄榄"，清热利咽、生津解毒。有一位旅客因风热感冒导致咽喉肿痛、口干。路人递给他几颗青果让他嚼食。旅客服后，咽喉肿痛减轻，口中回甘舒适。青果是岭南地区的特产，既是水果也是药材。', lesson: '青果清热利咽、生津解毒。适合咽喉肿痛、口干、解酒毒。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['青果', '胖大海', '金银花'], tags: ['清热', '利咽'] },
  { id: 112, herb: '山柰', title: '山柰温中消食', summary: '山柰治愈胃寒冷痛', story: '清代《本草纲目》记载：山柰温中消食、止痛行气。有一位北方商人到南方经商，因不适应当地湿冷气候，出现胃寒冷痛、食欲不振。郎中让他用山柰、干姜各5克煎汤服用。山柰温中散寒、消食止痛；干姜温胃散寒。商人服用后，胃痛消失，胃口也开了。', lesson: '山柰温中消食、止痛行气。适合胃寒疼痛、食欲不振。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['山柰', '干姜', '陈皮'], tags: ['温中', '消食'] },
  { id: 113, herb: '香橼', title: '香橼疏肝理气', summary: '香橼治愈胸胁胀闷', story: '宋代《开宝本草》记载：香橼疏肝理气、宽中化痰。有一位妇人因情志不畅，导致胸胁胀闷、嗳气叹息。郎中用香橼、柴胡，白芍各10克煎汤服用。香橼疏肝理气；柴胡疏肝解郁；白芍柔肝止痛。妇人服用数日后，胸胁胀闷减轻，心情也舒畅了。', lesson: '香橼疏肝理气、宽中化痰。适合肝气郁结，胸胁胀闷。阴虚血热者慎用', source: '《开宝本草》', relatedHerbs: ['香橼', '柴胡', '白芍'], tags: ['疏肝', '理气'] },
  { id: 114, herb: '香薷', title: '香薷解表化湿', summary: '香薷治愈暑湿感冒', story: '明代《本草纲目》记载：香薷发汗解表、化湿和中。有一位农夫因夏日暑湿，出现发热恶寒、头重身困、呕吐腹泻。郎中诊断为暑湿感冒，用香薷饮治疗。香薷解表化湿；厚朴行气燥湿；白扁豆健脾化湿。农夫服用后，症状明显减轻。民间有"六月香薷粥，消暑除湿"的说法。', lesson: '香薷发汗解表、化湿和中。适合暑湿感冒、水肿。表虚自汗者慎用', source: '《本草纲目》', relatedHerbs: ['香薷', '厚朴', '白扁豆'], tags: ['解表', '化湿'] },
  { id: 115, herb: '桔梗', title: '桔梗宣肺排脓', summary: '桔梗治愈咳嗽痰多', story: '东汉《伤寒论》记载：桔梗宣肺利咽、祛痰排脓。有一位患者因肺热咳嗽，痰多黄稠，胸痛。郎中用桔梗、甘草、瓜蒌各10克煎汤服用。桔梗宣肺祛痰；甘草清热解毒；瓜蒌清热化痰。患者服用后，咳嗽减轻，痰也容易咳出了。桔梗是治疗咳嗽痰多的常用药。', lesson: '桔梗宣肺利咽、祛痰排脓。适合咳嗽痰多、咽喉肿痛。阴虚久咳者慎用', source: '《伤寒论》', relatedHerbs: ['桔梗', '甘草', '瓜蒌'], tags: ['宣肺', '祛痰'] },
  { id: 116, herb: '莱菔子', title: '莱菔子降气化痰', summary: '莱菔子治愈咳嗽气喘', story: '清代《医学衷中参西录》记载：莱菔子消食除胀、降气化痰。有一位老人因脾虚生痰，咳嗽痰多，胸脘胀满。郎中用莱菔子，白芥子、紫苏子各10克煎汤服用。莱菔子降气化痰；白芥子温肺化痰；紫苏子止咳平喘。患者服用后，咳嗽减轻，痰也少了。', lesson: '莱菔子消食除胀、降气化痰。适合食积腹胀、咳嗽痰多。气虚者慎用', source: '《医学衷中参西录》', relatedHerbs: ['莱菔子', '白芥子', '紫苏子'], tags: ['降气', '化痰'] },
  { id: 117, herb: '高良姜', title: '高良姜温胃止痛', summary: '高良姜治愈胃寒冷痛', story: '唐代《名医别录》记载：高良姜温胃止呕、散寒止痛。有一位商人因常年出差，饮食不规律，导致胃寒胃痛，遇寒加重。郎中让他用高良姜、香附各10克煎汤服用。高良姜温胃散寒；香附行气止痛。商人服用后，胃痛明显减轻。高良姜以广东徐闻产者为佳，称"徐闻良姜"。', lesson: '高良姜温胃止呕、散寒止痛。适合胃寒冷痛、呕吐泄泻。阴虚胃热者慎用', source: '《名医别录》', relatedHerbs: ['高良姜', '香附', '干姜'], tags: ['温胃', '止痛'] },
  { id: 118, herb: '淡豆豉', title: '淡豆豉解表除烦', summary: '淡豆豉治愈感冒发热', story: '东汉《伤寒论》记载：淡豆豉解表除烦、宣发郁热。有一位患者因外感风寒，发热恶寒，心胸烦闷。郎中用淡豆豉、栀子各10克煎汤服用。淡豆豉解表散寒；栀子清热除烦。患者服用后，微微出汗，热退烦消。淡豆豉是豆类发酵加工而成。', lesson: '淡豆豉解表除烦、宣发郁热。适合感冒发热、心胸烦闷。脾胃虚寒者慎用', source: '《伤寒论》', relatedHerbs: ['淡豆豉', '栀子', '薄荷'], tags: ['解表', '除烦'] },
  { id: 119, herb: '紫苏子', title: '紫苏子降气化痰', summary: '紫苏子治愈咳嗽气喘', story: '宋代《本草衍义》记载：紫苏子下气消痰、止咳平喘。有一位老人因肺气上逆，导致咳嗽气喘、痰多。郎中用紫苏子、莱菔子，白芥子各10克煎汤服用。紫苏子降气消痰；莱菔子消食除胀；白芥子温肺化痰。三子共同降气化痰，止咳平喘。', lesson: '紫苏子下气消痰、止咳平喘。适合痰壅气逆、咳嗽气喘。阴虚喘咳者慎用', source: '《本草衍义》', relatedHerbs: ['紫苏子', '莱菔子', '白芥子'], tags: ['降气', '平喘'] },
  { id: 120, herb: '黄芥子', title: '黄芥子温肺化痰', summary: '黄芥子治愈寒痰咳嗽', story: '明代《本草纲目》记载：黄芥子温肺化痰、利气散结。有一位患者因受寒咳嗽，痰白清稀。郎中用黄芥子、桂枝、干姜各10克煎汤服用。黄芥子温肺化痰；桂枝温经散寒；干姜温中散寒。患者服用后，咳嗽减轻，痰也变少了。', lesson: '黄芥子温肺化痰、利气散结。适合寒痰咳嗽、阴疽肿毒。肺虚久咳者慎用', source: '《本草纲目》', relatedHerbs: ['黄芥子', '桂枝', '干姜'], tags: ['温肺', '化痰'] },
  { id: 121, herb: '鲜白茅根', title: '白茅根清热利尿', summary: '白茅根治愈尿路感染', story: '唐代《千金方》记载：白茅根清热利尿、凉血止血。有一位女子因尿路感染，小便赤涩疼痛。郎中用白茅根、车前草各30克煎汤服用。白茅根清热利尿、凉血止血；车前草清热利尿通淋。患者服用后，小便通畅，疼痛消失。白茅根是田间常见的草药。', lesson: '白茅根清热利尿、凉血止血。适合尿路感染、血热出血。脾胃虚寒者慎用', source: '《千金方》', relatedHerbs: ['白茅根', '车前草', '金银花'], tags: ['清热', '利尿'] },
  { id: 122, herb: '鲜芦根', title: '芦根清热生津', summary: '芦根治愈热病烦渴', story: '清代《医学衷中参西录》记载：芦根清热生津、除烦止呕。有一位患者因外感热病，出现高热烦渴、呕吐。郎中用鲜芦根30克，配合石膏、知母煎汤服用。芦根清热生津、除烦止呕；石膏清热泻火；知母清热滋阴。患者服用后，热退烦消。', lesson: '芦根清热生津、除烦止呕。适合热病烦渴、胃热呕吐。脾胃虚寒者慎用', source: '《医学衷中参西录》', relatedHerbs: ['芦根', '石膏', '知母'], tags: ['清热', '生津'] },
  { id: 123, herb: '鲜荷叶', title: '荷叶清热利湿', summary: '荷叶治愈暑热烦渴', story: '明代《本草纲目》记载：荷叶清热利湿、升发清阳。有一位农夫因暑天劳作，出现头重身困、暑热烦渴。郎中让他用鲜荷叶煎汤代茶饮用。荷叶清热利湿、升发清阳。农夫服用后，暑热消退，身体轻松。荷叶还是制作糯米鸡的辅料。', lesson: '荷叶清热利湿、升发清阳。适合暑湿烦渴、湿热肥胖。体瘦气血虚弱者慎用', source: '《本草纲目》', relatedHerbs: ['荷叶', '莲子', '茯苓'], tags: ['清热', '利湿'] },
  { id: 124, herb: '鲜竹叶', title: '竹叶清心除烦', summary: '竹叶治愈心火亢盛', story: '宋代《太平惠民和剂局方》记载：竹叶清热除烦、生津利尿。有一位考生因紧张上火，出现心烦失眠、口舌生疮、小便短赤。郎中用竹叶、灯心草各5克煎汤服用。竹叶清心除烦；灯心草清心利尿。患者服用后，心烦减轻，睡眠改善。', lesson: '竹叶清热除烦、生津利尿。适合心火亢盛、心烦失眠。脾胃虚寒者慎用', source: '《太平惠民和剂局方》', relatedHerbs: ['竹叶', '灯心草', '莲子心'], tags: ['清心', '除烦'] },
  { id: 125, herb: '布渣叶', title: '布渣叶消食化滞', summary: '布渣叶治愈食积腹胀', story: '清代《本草求原》记载：布渣叶消食化滞、清热利湿。岭南地区常用于治疗食积腹胀。有一位船员因长期海上生活，饮食不规律，出现腹胀嗳气。郎中让他用布渣叶15克煎汤服用。布渣叶消食化滞、清热利湿。船员服用后，腹胀减轻，胃口也开了。', lesson: '布渣叶消食化滞、清热利湿。适合食积腹胀、湿热黄疸。脾胃虚寒者慎用', source: '《本草求原》', relatedHerbs: ['布渣叶', '山楂', '麦芽'], tags: ['消食', '化滞'] },
  { id: 126, herb: '夏枯草', title: '夏枯草清肝散结', summary: '夏枯草治愈甲状腺结节', story: '明代《本草纲目》记载：夏枯草清肝泻火、散结消肿。有一位女子因长期情绪抑郁，出现甲状腺结节，脖子肿大。郎中用夏枯草、昆布、海藻各15克煎汤服用。夏枯草清肝散结；昆布软坚散结；海藻消痰利水。女子服用数月后，结节缩小。', lesson: '夏枯草清肝泻火、散结消肿。适合甲状腺结节、肝火亢盛。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['夏枯草', '昆布', '海藻'], tags: ['清肝', '散结'] },
  { id: 127, herb: '鸡血藤', title: '鸡血藤补血活血', summary: '鸡血藤治愈血虚闭经', story: '清代《本草纲目拾遗》记载：鸡血藤补血活血、舒筋活络。有一位女子因血虚导致闭经数月，面色萎黄。郎中用鸡血藤30克配当归15克煎汤服用。鸡血藤补血活血；当归补血调经。患者服用后，月经来潮，面色也逐渐红润。', lesson: '鸡血藤补血活血、舒筋活络。适合血虚闭经、风湿痹痛。阴虚火旺者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['鸡血藤', '当归', '川芎'], tags: ['补血', '活血'] },
  { id: 128, herb: '大血藤', title: '大血藤活血祛风', summary: '大血藤治愈风湿痹痛', story: '宋代《圣济总录》记载：大血藤活血祛风、通络止痛。有一位老农因常年劳作，患风湿痹痛多年。郎中用大血藤、威灵仙、桑寄生各15克泡酒服用。大血藤活血祛风；威灵仙祛风除湿；桑寄生补肝肾强筋骨。老农坚持服用数月后，关节疼痛减轻。', lesson: '大血藤活血祛风、通络止痛。适合风湿痹痛、跌打损伤。孕妇慎用', source: '《圣济总录》', relatedHerbs: ['大血藤', '威灵仙', '桑寄生'], tags: ['活血', '祛风'] },
  { id: 129, herb: '川贝母', title: '川贝母清热润肺', summary: '川贝母治愈肺热咳嗽', story: '清代《本草纲目拾遗》记载：川贝母清热润肺、化痰止咳。有一位老人因肺热咳嗽，痰黄黏稠。郎中用川贝母、梨、冰糖各适量蒸服。川贝母清热润肺、化痰止咳；梨润肺止咳；冰糖润肺调味。患者服用后，咳嗽减轻，痰也容易咳出了。', lesson: '川贝母清热润肺、化痰止咳。适合肺热咳嗽、痰多。脾胃虚寒者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['川贝母', '梨', '蜂蜜'], tags: ['清热', '润肺'] },
  { id: 130, herb: '浙贝母', title: '浙贝母清热散结', summary: '浙贝母治愈乳腺增生', story: '明代《本草纲目》记载：浙贝母清热散结、化痰止咳。有一位女子因肝气郁结，出现乳腺增生，乳房胀痛。郎中用浙贝母、柴胡，白芍各10克煎汤服用。浙贝母清热散结；柴胡疏肝解郁；白芍柔肝止痛。女子服用后，乳房胀痛减轻。', lesson: '浙贝母清热散结、化痰止咳。适合乳腺增生、甲状腺结节。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['浙贝母', '柴胡', '夏枯草'], tags: ['清热', '散结'] },
  { id: 131, herb: '伊贝母', title: '伊贝母润肺止咳', summary: '伊贝母治愈久咳不愈', story: '清代《新疆中草药手册》记载：伊贝母润肺止咳、清热散结。有一位患者因久咳不愈，痰少黏稠。郎中用伊贝母、麦冬、沙参各10克煎汤服用。伊贝母润肺止咳；麦冬滋阴润肺；沙参养阴清肺。患者服用后，咳嗽减轻。', lesson: '伊贝母润肺止咳、清热散结。适合肺热咳嗽、痰黏不易咳出。脾胃虚寒者慎用', source: '《新疆中草药手册》', relatedHerbs: ['伊贝母', '麦冬', '沙参'], tags: ['润肺', '止咳'] },
  { id: 132, herb: '平贝母', title: '平贝母化痰止咳', summary: '平贝母治愈咳嗽痰多', story: '《东北药用植物志》记载：平贝母化痰止咳、清热润肺。有一位患者因外感风热，出现咳嗽痰多。郎中用平贝母，前胡、桔梗各10克煎汤服用。平贝母清热化痰；前胡宣肺止咳；桔梗祛痰排脓。患者服用后，咳嗽减轻，痰也少了。', lesson: '平贝母化痰止咳、清热润肺。适合咳嗽痰多、肺热咳嗽。脾胃虚寒者慎用', source: '《东北药用植物志》', relatedHerbs: ['平贝母', '前胡', '桔梗'], tags: ['化痰', '止咳'] },
  { id: 133, herb: '百合', title: '百合润肺安神', summary: '百合治愈失眠咳嗽', story: '东汉《金匮要略》记载：百合润肺止咳、清心安神。有一位妇人因久病后出现神志恍惚、失眠多梦、干咳少痰。张仲景用百合地黄汤治疗。百合润肺清心；生地黄滋阴养血。病人服用后，神志逐渐清明，咳嗽也好了。', lesson: '百合润肺止咳、清心安神。适合干咳少痰、失眠多梦。风寒咳嗽者慎用', source: '《金匮要略》·张仲景', relatedHerbs: ['百合', '生地黄', '莲子'], tags: ['润肺', '安神'] },
  { id: 134, herb: '黄精', title: '黄精补气养阴', summary: '黄精让道士延年益寿', story: '唐代《道藏》记载：有一位道士在山中修炼，服用黄精多年，竟然返老还童，头发乌黑，容颜似童。黄精补气养阴、健脾润肺、益肾填精。《本草纲目》说："黄精补诸虚，填精髓，平补气血而润。"现代研究证实黄精含多糖，能增强免疫、延缓衰老。', lesson: '黄精补气养阴、健脾润肺。适合气阴两虚、脾胃虚弱。痰湿壅盛者慎用', source: '《道藏》', relatedHerbs: ['黄精', '枸杞', '人参'], tags: ['补气', '养阴'] },
  { id: 135, herb: '玉竹', title: '玉竹养阴润燥', summary: '玉竹让歌唱家嗓音常青', story: '明代《本草纲目》记载：玉竹润肺养阴、益胃生津。有一位梨园名角，因长期唱曲，出现口干咽燥、声音嘶哑。老中医用玉竹、麦冬、百合各15克煎汤代茶。玉竹滋阴润肺；麦冬生津止渴；百合润肺开音。名角连服数月，嗓音恢复如常。', lesson: '玉竹滋阴润肺、益胃生津。适合肺阴不足、口干咽燥。痰湿体质者慎用', source: '《本草纲目》', relatedHerbs: ['玉竹', '麦冬', '百合'], tags: ['滋阴', '润肺'] },
  { id: 136, herb: '铁皮石斛', title: '铁皮石斛滋阴圣品', summary: '铁皮石斛让乾隆皇帝长寿', story: '清代《本草纲目拾遗》记载：铁皮石斛滋阴清热、益胃生津。乾隆皇帝养生之道之一就是常服石斛。石斛被誉为"中华九大仙草"之首，其滋阴效果显著。《中国药典》记载石斛益胃生津、滋阴清热。现代研究表明铁皮石斛含多糖和生物碱，能增强免疫、抗疲劳。', lesson: '铁皮石斛滋阴清热、益胃生津。适合阴虚火旺、口干烦渴。湿热体质者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['铁皮石斛', '麦冬', '玉竹'], tags: ['滋阴', '清热'] },
  { id: 137, herb: '燕窝', title: '燕窝美容养颜', summary: '燕窝让宋美龄容颜不老', story: '据《清宫医案》记载：宋美龄女士每日早餐必食一碗燕窝，活到106岁。燕窝滋阴润肺、补中益气、美容养颜。《本草纲目》记载："燕窝甘淡平，大养肺阴，化痰止咳，补而能清。"燕窝含唾液酸和蛋白质，能促进细胞分裂、延缓衰老。', lesson: '燕窝滋阴润肺、补中益气。适合肺阴不足，体质虚弱。糖尿病者慎用', source: '《清宫医案》', relatedHerbs: ['燕窝', '银耳', '红枣'], tags: ['滋阴', '美容'] },
  { id: 138, herb: '阿胶', title: '阿胶补血圣药', summary: '阿胶让皇后血枯复苏', story: '唐代《药性论》记载：阿胶补血滋阴、润燥止血。皇宫中一位公主因"血枯"症面色萎黄、月经不调。太医取东阿古阿井之水，配黑驴皮熬制阿胶。公主服用三月，面色红润如初。阿胶被誉为"补血圣药"，含胶原蛋白和氨基酸，能促进血红蛋白生成。', lesson: '阿胶补血滋阴、润燥止血。适合血虚萎黄、月经不调。脾胃虚弱者慎用', source: '《药性论》', relatedHerbs: ['阿胶', '红枣', '桂圆'], tags: ['补血', '滋阴'] },
  { id: 139, herb: '鹿角胶', title: '鹿角胶温肾壮阳', summary: '鹿角胶让老人腰膝有力', story: '明代《本草纲目》记载：鹿角胶温肾壮阳、补血益精。有一位老人因肾阳不足，出现腰膝酸软、畏寒肢冷。郎中让他用鹿角胶、鹿茸各5克，配合核桃、黑芝麻服用。鹿角胶温肾壮阳；鹿茸补肾壮阳。患者服用后，腰膝有力，畏寒减轻。', lesson: '鹿角胶温肾壮阳、补血益精。适合肾阳不足，腰膝酸软。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['鹿角胶', '鹿茸', '核桃'], tags: ['温肾', '壮阳'] },
  { id: 140, herb: '龟甲胶', title: '龟甲胶滋阴潜阳', summary: '龟甲胶治愈老人耳鸣', story: '清代《本草逢原》记载：龟甲胶滋阴潜阳、益肾健骨。有一位老人因肾阴不足，出现耳鸣耳聋、头晕眼花。郎中用龟甲胶、熟地黄，山茱萸制成丸药服用。龟甲胶滋阴潜阳；熟地黄补血滋阴。患者服用数月后，耳鸣减轻，听力改善。', lesson: '龟甲胶滋阴潜阳、益肾健骨。适合肾阴不足、骨蒸潮热。脾胃虚寒者慎用', source: '《本草逢原》', relatedHerbs: ['龟甲胶', '熟地黄', '山茱萸'], tags: ['滋阴', '潜阳'] },
  { id: 141, herb: '蜂蜜', title: '蜂蜜润肠通便', summary: '蜂蜜让老人排便顺畅', story: '唐代《神农本草经》记载：蜂蜜补中润燥、止痛解毒。有一位老人因肠燥津亏，大便干结如羊粪。郎中让他每日清晨用温开水冲服蜂蜜30克。蜂蜜润肠通便、滋补脾胃。老人坚持服用后，大便通畅，精神也好了。', lesson: '蜂蜜补中润燥、润肠通便。适合肠燥便秘、干咳咽痛。糖尿病者慎用', source: '《神农本草经》', relatedHerbs: ['蜂蜜', '黑芝麻', '核桃'], tags: ['润肠', '通便'] },
  { id: 142, herb: '饴糖', title: '饴糖健脾止痛', summary: '饴糖治愈胃脘疼痛', story: '东汉《伤寒论》记载：饴糖健脾止痛、补中缓急。小建中汤以饴糖为主药，治疗虚劳里急、腹中疼痛。有一位患者因脾胃虚寒，导致胃脘隐痛。郎中用小建中汤治疗。饴糖温中补虚；桂枝温经散寒；芍药缓急止痛。患者服用后，胃痛消失。', lesson: '饴糖健脾止痛、补中缓急。适合脾胃虚寒、胃脘疼痛。湿热体质者慎用', source: '《伤寒论》', relatedHerbs: ['饴糖', '桂枝', '白芍'], tags: ['健脾', '止痛'] },
  { id: 143, herb: '黑芝麻', title: '黑芝麻乌发益精', summary: '黑芝麻让老人白发转黑', story: '唐代《本草纲目》记载：黑芝麻补肝肾、益精血、乌须发。有一位老人因肾精不足，头发花白脱落。老中医让他每日服用黑芝麻、黑豆、核桃各30克，磨粉煮粥。半年后，老人白发减少，部分转黑，精力也充沛了。', lesson: '黑芝麻补肝肾、益精血、乌须发。适合肝肾不足、须发早白。便溏者慎用', source: '《本草纲目》', relatedHerbs: ['黑芝麻', '黑豆', '核桃'], tags: ['乌发', '益精'] },
  { id: 144, herb: '白扁豆', title: '白扁豆健脾化湿', summary: '白扁豆治愈暑湿吐泻', story: '明代《本草纲目》记载：白扁豆健脾和中、消暑化湿。有一位书生因暑天饮食不当，出现呕吐腹泻、身重乏力。老中医用白扁豆、藿香、佩兰各10克煎汤服用。白扁豆健脾化湿；藿香芳香化浊。书生服用后，吐泻停止，精神恢复。', lesson: '白扁豆健脾和中、消暑化湿。适合暑湿吐泻、脾虚湿盛。需完全煮熟', source: '《本草纲目》', relatedHerbs: ['白扁豆', '藿香', '佩兰'], tags: ['健脾', '化湿'] },
  { id: 145, herb: '薏苡仁', title: '薏苡仁利湿健脾', summary: '薏苡仁治愈水肿肥胖', story: '《神农本草经》记载：薏苡仁利湿健脾、清热排脓。有一位体型肥胖的妇人，因脾虚湿盛导致水肿、小便不利。老中医用薏苡仁、赤小豆、茯苓各30克煮粥食用。薏苡仁利湿健脾；赤小豆利水消肿。患者坚持食用月余，水肿消退，体重也下降了。', lesson: '薏苡仁利湿健脾、清热排脓。适合水肿、脾虚湿盛。孕妇慎用', source: '《神农本草经》', relatedHerbs: ['薏苡仁', '赤小豆', '茯苓'], tags: ['利湿', '健脾'] },
  { id: 146, herb: '佛手', title: '佛手理气止痛', summary: '佛手治愈肝胃气痛', story: '清代《本草撮要》记载：佛手疏肝理气，和胃止痛。有一位商人因生意繁忙、情志抑郁，出现胸胁胀痛、嗳气反酸。老中医用佛手，陈皮、香附各10克煎汤服用。佛手疏肝理气；陈皮和胃；香附行气止痛。商人服用后，气痛消失。', lesson: '佛手疏肝理气，和胃止痛。适合肝胃气滞，胸胁胀痛。阴虚血热者慎用', source: '《本草撮要》', relatedHerbs: ['佛手', '陈皮', '香附'], tags: ['理气', '止痛'] },
  { id: 147, herb: '香橼', title: '香橼化痰止咳', summary: '香橼治愈痰多咳嗽', story: '宋代《证类本草》记载：香橼疏肝理气、化痰止咳。有一位老人因痰湿咳嗽，痰多色白，胸闷。郎中用香橼，半夏、茯苓各10克煎汤服用。香橼理气化痰；半夏燥湿化痰；茯苓健脾渗湿。患者服用后，痰减少，咳嗽减轻。', lesson: '香橼疏肝理气、化痰止咳。适合痰湿咳嗽，胸闷。阴虚血热者慎用', source: '《证类本草》', relatedHerbs: ['香橼', '半夏', '茯苓'], tags: ['化痰', '止咳'] },
  { id: 148, herb: '代代花', title: '代代花理气解郁', summary: '代代花治愈肝郁气滞', story: '清代《本草纲目拾遗》记载：代代花理气解郁，和胃止痛。有一位妇人因情志不畅，导致胸闷叹息、不思饮食。郎中让她用代代花、玫瑰花，绿萼梅各5克泡茶饮用。代代花理气解郁；玫瑰花疏肝活血。患者服用后，心情舒畅，胃口也开了。', lesson: '代代花理气解郁，和胃止痛。适合肝郁气滞，胸闷不舒。孕妇慎用', source: '《本草纲目拾遗》', relatedHerbs: ['代代花', '玫瑰花', '绿萼梅'], tags: ['理气', '解郁'] },
  { id: 149, herb: '玫瑰花', title: '玫瑰花疏肝活血', summary: '玫瑰花让女子气色红润', story: '明代《食物本草》记载：玫瑰花疏肝解郁、活血止痛。有一位女子因情志抑郁，出现面色暗淡，胸胁胀痛、月经不调。老中医让她用玫瑰花，红花，当归各5克泡茶饮用。玫瑰花疏肝活血；当归补血调经。患者服用后，面色红润，月经也正常了。', lesson: '玫瑰花疏肝解郁、活血止痛。适合肝郁气滞、面色暗淡。孕妇慎用', source: '《食物本草》', relatedHerbs: ['玫瑰花', '红花', '当归'], tags: ['疏肝', '活血'] },
  { id: 150, herb: '绿萼梅', title: '绿萼梅疏肝和胃', summary: '绿萼梅治愈肝胃气痛', story: '清代《本草纲目拾遗》记载：绿萼梅疏肝和胃、化痰解毒。有一位文人因写作劳累，出现胸闷嗳气、食欲不振。郎中让他用绿萼梅，陈皮、佛手各5克泡茶。绿萼梅疏肝和胃；陈皮理气健脾。患者服用后，胸闷减轻，胃口开了。', lesson: '绿萼梅疏肝和胃、化痰解毒。适合肝胃气痛、梅核气。孕妇慎用', source: '《本草纲目拾遗》', relatedHerbs: ['绿萼梅', '陈皮', '佛手'], tags: ['疏肝', '和胃'] },
  { id: 151, herb: '桂花', title: '桂花温肺化饮', summary: '桂花治愈肺寒咳嗽', story: '明代《本草纲目》记载：桂花温肺化饮、散寒止痛。有一位老人因肺寒咳嗽，痰白清稀，遇寒加重。郎中用桂花、杏仁、干姜各5克煎汤服用。桂花温肺散寒；杏仁止咳平喘；干姜温中散寒。患者服用后，咳嗽减轻。', lesson: '桂花温肺化饮、散寒止痛。适合肺寒咳嗽、痰饮。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['桂花', '杏仁', '干姜'], tags: ['温肺', '化饮'] },
  { id: 152, herb: '丁香', title: '丁香温中降逆', summary: '丁香治愈胃寒呃逆', story: '唐代《药性论》记载：丁香温中降逆、散寒止痛。有一位患者因胃寒导致呃逆不止。郎中用丁香、柿蒂各5克煎汤服用。丁香温中降逆；柿蒂降逆止呃。患者服用后，呃逆停止。', lesson: '丁香温中降逆、散寒止痛。适合胃寒呃逆、呕吐。阴虚内热者慎用', source: '《药性论》', relatedHerbs: ['丁香', '柿蒂', '干姜'], tags: ['温中', '降逆'] },
  { id: 153, herb: '八角茴香', title: '八角茴香温中散寒', summary: '八角茴香让卤味更香', story: '明代《本草纲目》记载：八角茴香温中散寒，理气止痛。岭南地区常用八角茴香炖肉，不仅去腥增香，还能温中散寒。现代研究表明八角茴香含茴香油，能促进消化液分泌，增进食欲。脾胃虚寒者食肉时宜放八角同煮。', lesson: '八角茴香温中散寒，理气止痛。适合胃寒腹痛、肉类去腥。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['八角茴香', '肉桂', '花椒'], tags: ['温中', '散寒'] },
  { id: 154, herb: '刀豆', title: '刀豆温中下气', summary: '刀豆治愈虚寒呃逆', story: '明代《本草纲目》记载：刀豆温中下气、益肾补元。有一位老人因肾气不纳，导致呃逆不止。郎中用刀豆、柿蒂、丁香各10克煎汤服用。刀豆温中下气；柿蒂降逆止呃；丁香温中散寒。患者服用后，呃逆停止。', lesson: '刀豆温中下气、益肾补元。适合虚寒呃逆、肾虚腰痛。阴虚内热者慎用', source: '《本草纲目》', relatedHerbs: ['刀豆', '柿蒂', '丁香'], tags: ['温中', '下气'] },
  { id: 155, herb: '小茴香', title: '小茴香暖肝止痛', summary: '小茴香治愈寒疝腹痛', story: '元代《本草衍义补遗》记载：小茴香暖肝散寒，理气止痛。有一位男子因受寒导致睾丸冷痛，诊断为寒疝。郎中用小茴香、乌药、肉桂各10克煎汤服用。小茴香暖肝散寒；乌药温肾散寒。患者服用后，寒疝腹痛消失。', lesson: '小茴香暖肝散寒，理气止痛。适合寒疝腹痛、睾丸疼痛。阴虚火旺者慎用', source: '《本草衍义补遗》', relatedHerbs: ['小茴香', '乌药', '肉桂'], tags: ['暖肝', '止痛'] },
  { id: 156, herb: '马齿苋', title: '马齿苋清热解毒', summary: '马齿苋治愈肠炎腹泻', story: '唐代《兵部手集方》记载：马齿苋清热解毒、凉血止痢。有一位农夫因食用不洁食物，导致急性肠炎，腹痛腹泻。郎中让他用新鲜马齿苋一把，捣烂取汁服用。马齿苋清热解毒、凉血止痢。农夫服用后，腹泻停止，腹痛消失。', lesson: '马齿苋清热解毒、凉血止痢。适合肠炎腹泻、痢疾。脾胃虚寒者慎用', source: '《兵部手集方》', relatedHerbs: ['马齿苋', '金银花', '黄连'], tags: ['清热', '解毒'] },
  { id: 157, herb: '木瓜', title: '木瓜舒筋活络', summary: '木瓜治愈腰膝酸痛', story: '明代《本草纲目》记载：木瓜舒筋活络，和胃化湿。有一位老农因常年劳作，患腰膝酸痛、筋脉拘挛。郎中让他用木瓜、薏苡仁、伸筋草各15克煎汤服用。木瓜舒筋活络；薏苡仁利湿健脾。患者服用后，腰膝酸痛减轻。', lesson: '木瓜舒筋活络，和胃化湿。适合腰膝酸痛、筋脉拘挛。精血亏虚者慎用', source: '《本草纲目》', relatedHerbs: ['木瓜', '薏苡仁', '伸筋草'], tags: ['舒筋', '活络'] },
  { id: 158, herb: '火麻仁', title: '火麻仁润肠通便', summary: '火麻仁治愈老年便秘', story: '《神农本草经》记载：火麻仁润燥滑肠、通淋活血。有一位老人因肠燥津亏，大便干结。郎中让他用火麻仁、郁李仁、松子仁各15克，研末加蜂蜜服用。火麻仁润肠通便；郁李仁润燥滑肠。患者服用后，大便通畅。', lesson: '火麻仁润肠通便、润燥活血。适合肠燥便秘。孕妇慎用', source: '《神农本草经》', relatedHerbs: ['火麻仁', '郁李仁', '松子仁'], tags: ['润肠', '通便'] },
  { id: 159, herb: '山楂', title: '山楂消食化积', summary: '山楂治愈食积腹胀', story: '元代《丹溪心法》记载：山楂消食化积、散瘀行气。有一位官员因赴宴过多，导致脘腹胀满、嗳腐吞酸。郎中用山楂、神曲、麦芽各15克煎汤服用。山楂消肉食积滞；神曲消酒食积滞；麦芽消米面积滞。患者服用后，腹胀消失。', lesson: '山楂消食化积、散瘀行气。适合食积腹胀、肉食积滞。胃酸过多者慎用', source: '《丹溪心法》', relatedHerbs: ['山楂', '神曲', '麦芽'], tags: ['消食', '化积'] },
  { id: 160, herb: '山药', title: '山药健脾补肺', summary: '山药治愈脾虚泄泻', story: '明代《本草纲目》记载：山药健脾补肺、固肾益精。有一位患者因脾虚导致长期泄泻、食欲不振、身体消瘦。老中医用山药、茯苓，白术各15克煮粥食用。山药健脾止泻；茯苓白术健脾渗湿。患者坚持食用数月后，泄泻停止，体重增加。', lesson: '山药健脾补肺、固肾益精。适合脾虚泄泻、肺虚久咳。湿盛中满者慎用', source: '《本草纲目》', relatedHerbs: ['山药', '茯苓', '白术'], tags: ['健脾', '补肺'] },
  { id: 161, herb: '无花果', title: '无花果健脾开胃', summary: '无花果治愈食欲不振', story: '唐代《本草纲目》记载：无花果健脾开胃、清热解毒。有一位老人因脾胃虚弱，出现食欲不振，消化不良。老中医让他每日食用无花果三枚。无花果健脾开胃、润肠通便。老人食用后，胃口大开，精神也好了。', lesson: '无花果健脾开胃、清热解毒。适合食欲不振、咽喉肿痛。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['无花果', '山楂', '陈皮'], tags: ['健脾', '开胃'] },
  { id: 162, herb: '乌梅', title: '乌梅生津敛肺', summary: '乌梅治愈久咳虚汗', story: '宋代《太平惠民和剂局方》记载：乌梅生津敛肺、涩肠止泻。有一位老教师因肺阴不足，导致久咳不止、虚汗淋漓。郎中用乌梅、五味子各10克煎汤服用。乌梅敛肺止咳；五味子敛肺滋肾。患者服用后，咳嗽减轻，虚汗也止了。', lesson: '乌梅生津敛肺、涩肠止泻。适合久咳虚汗、肺虚久咳。胃酸过多者慎用', source: '《太平惠民和剂局方》', relatedHerbs: ['乌梅', '五味子', '罂粟壳'], tags: ['生津', '敛肺'] },
  { id: 163, herb: '龙眼肉', title: '龙眼肉补心安神', summary: '龙眼肉治愈失眠健忘', story: '清代《本草纲目》记载：龙眼肉补心血、益心脾、安神志。有一位学者因过度思虑，导致心悸失眠、记忆力减退。老中医用龙眼肉、酸枣仁、茯神各15克煎汤服用。龙眼肉补血养心；酸枣仁安神助眠。患者服用后，睡眠改善，记忆力也增强了。', lesson: '龙眼肉补心血、益心脾、安神志。适合心悸失眠、健忘。湿盛中满者慎用', source: '《本草纲目》', relatedHerbs: ['龙眼肉', '酸枣仁', '茯神'], tags: ['补心', '安神'] },
  { id: 164, herb: '白果', title: '白果敛肺定喘', summary: '白果治愈哮喘', story: '明代《本草纲目》记载：白果敛肺定喘、止带缩尿。有一位老人因哮喘多年，咳嗽气喘、痰多。郎中用白果、麻黄、款冬花各10克煎汤服用。白果敛肺定喘；麻黄宣肺平喘。患者服用后，哮喘减轻。', lesson: '白果敛肺定喘、止带缩尿。适合哮喘咳嗽、遗尿。有小毒，不宜多食', source: '《本草纲目》', relatedHerbs: ['白果', '麻黄', '款冬花'], tags: ['敛肺', '定喘'] },
  { id: 165, herb: '芡实', title: '芡实健脾止泻', summary: '芡实治愈脾虚久泻', story: '清代《本草求真》记载：芡实健脾固肾、止泻止带。有一位患者因脾肾两虚，导致久泻不止，腰膝酸软。郎中用芡实、莲子、茯苓各15克煮粥食用。芡实健脾止泻；莲子补脾止泻；茯苓健脾渗湿。患者服用后，久泻停止。', lesson: '芡实健脾固肾、止泻止带。适合脾虚久泻、肾虚遗精。便秘者慎用', source: '《本草求真》', relatedHerbs: ['芡实', '莲子', '茯苓'], tags: ['健脾', '止泻'] },
  { id: 166, herb: '赤小豆', title: '赤小豆利水消肿', summary: '赤小豆治愈水肿', story: '东汉《伤寒杂病论》记载：赤小豆利水消肿，解毒排脓。有一位妇人因脾虚湿盛，导致足踝水肿。郎中用赤小豆、薏苡仁各30克，煮汤食用。赤小豆利水消肿；薏苡仁健脾渗湿。妇人食用后，水肿消退。', lesson: '赤小豆利水消肿，解毒排脓。适合水肿、脚气。阴虚者慎用', source: '《伤寒杂病论》', relatedHerbs: ['赤小豆', '薏苡仁', '茯苓'], tags: ['利水', '消肿'] },
  { id: 167, herb: '花椒', title: '花椒温中散寒', summary: '花椒治愈胃寒腹痛', story: '唐代《本草纲目》记载：花椒温中散寒、止痛杀虫。有一位女子因过食生冷，导致胃寒腹痛。郎中用花椒、干姜各5克，红糖适量，煎汤服用。花椒温中散寒；干姜温胃散寒；红糖缓急止痛。女子服用后，腹痛消失。', lesson: '花椒温中散寒、止痛杀虫。适合胃寒腹痛、蛔虫腹痛。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['花椒', '干姜', '红糖'], tags: ['温中', '散寒'] },
  { id: 168, herb: '阿胶', title: '阿胶补血止血', summary: '阿胶治愈血虚崩漏', story: '唐代《太平圣惠方》记载：阿胶补血止血、滋阴润燥。有一位妇人因血虚导致崩漏不止，面色萎黄。郎中用阿胶，当归、生地黄各10克煎汤服用。阿胶补血止血；当归补血调经。患者服用后，崩漏停止，面色逐渐红润。', lesson: '阿胶补血止血、滋阴润燥。适合血虚崩漏、月经不调。脾胃虚弱者慎用', source: '《太平圣惠方》', relatedHerbs: ['阿胶', '当归', '生地黄'], tags: ['补血', '止血'] },
  { id: 169, herb: '陈皮', title: '陈皮理气健脾', summary: '陈皮治愈脘腹胀满', story: '明代《本草纲目》记载：陈皮理气健脾、燥湿化痰。有一位商人因饮食不节，导致脘腹胀满、嗳气。郎中用陈皮、厚朴、木香各10克煎汤服用。陈皮理气和中；厚朴行气消积。患者服用后，腹胀减轻，嗳气也消失了。', lesson: '陈皮理气健脾、燥湿化痰。适合脘腹胀满、痰多。阴虚燥咳者慎用', source: '《本草纲目》', relatedHerbs: ['陈皮', '厚朴', '木香'], tags: ['理气', '健脾'] },
  { id: 170, herb: '罗汉果', title: '罗汉果润肺止咳', summary: '罗汉果治愈肺热咳嗽', story: '清代《岭南采药录》记载：罗汉果清热润肺、利咽开音。有一位播音员因用嗓过度，出现声音嘶哑。郎中用罗汉果、胖大海、麦冬各10克煎汤服用。罗汉果清肺利咽；胖大海润肺开音。患者服用后，声音恢复正常。', lesson: '罗汉果清热润肺、利咽开音。适合肺热咳嗽、声音嘶哑。风寒咳嗽者慎用', source: '《岭南采药录》', relatedHerbs: ['罗汉果', '胖大海', '麦冬'], tags: ['润肺', '止咳'] },
  { id: 171, herb: '金银花', title: '金银花清热解毒', summary: '金银花治愈风热感冒', story: '清代《温病条辨》记载：金银花清热解毒、疏散风热。有一位患者因风热感冒，出现发热、咽喉肿痛。郎中用金银花、连翘，薄荷各10克煎汤服用。金银花清热解毒；连翘消肿散结。患者服用后，热退咽消。', lesson: '金银花清热解毒、疏散风热。适合风热感冒、咽喉肿痛。脾胃虚寒者慎用', source: '《温病条辨》', relatedHerbs: ['金银花', '连翘', '薄荷'], tags: ['清热', '解毒'] },
  { id: 172, herb: '鱼腥草', title: '鱼腥草清热解毒', summary: '鱼腥草治愈肺痈', story: '南北朝《名医别录》记载：鱼腥草清热解毒、排脓消痈。有一位患者因肺热炽盛，形成肺痈，发热咳嗽、吐脓血痰。郎中用鱼腥草、桔梗、芦根各30克煎汤服用。鱼腥草清热排脓；桔梗祛痰排脓。患者服用后，脓痰减少，热退。', lesson: '鱼腥草清热解毒、排脓消痈。适合肺痈、痰热咳嗽。脾胃虚寒者慎用', source: '《名医别录》', relatedHerbs: ['鱼腥草', '桔梗', '芦根'], tags: ['清热', '解毒'] },
  { id: 173, herb: '人参', title: '人特大补元气', summary: '人挽救垂危病人', story: '明代《本草纲目》记载：人特大补元气、复脉固脱。有一位患者因大出血导致气息奄奄，脉微欲绝。老中医用独参汤，即人参30克浓煎服用。人特大补元气、复脉固脱。患者服用后，气息渐强，脉象回转。', lesson: '人特大补元气、复脉固脱。适合元气虚脱，心悸休克。热证者慎用', source: '《本草纲目》', relatedHerbs: ['人参', '附子', '黄芪'], tags: ['补气', '急救'] },
  { id: 174, herb: '人参叶', title: '人参叶补气养阴', summary: '人参叶清肺生津', story: '清代《本草纲目拾遗》记载：人参叶补气养阴、清肺火、生津液。有一位患者因气阴两虚，出现口干咽燥，体倦乏力。老中医用人参叶、麦冬、玉竹各10克煎汤服用。人参叶补气养阴；麦冬生津止渴。患者服用后，症状改善。', lesson: '人参叶补气养阴、清肺火。适合气阴两虚、肺热咳嗽。热证者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['人参叶', '麦冬', '玉竹'], tags: ['补气', '养阴'] },
  { id: 175, herb: '荷叶', title: '荷叶清热利湿', summary: '荷叶治愈暑热烦渴', story: '明代《本草纲目》记载：荷叶清热利湿、升发清阳。有一位农夫因暑天劳作，出现头重身困、暑热烦渴。郎中让他用鲜荷叶一张，煎汤代茶饮用。荷叶清热利湿、升发清阳。农夫服用后，暑热消退，身重减轻。', lesson: '荷叶清热利湿、升发清阳。适合暑湿烦渴、湿热肥胖。体瘦者慎用', source: '《本草纲目》', relatedHerbs: ['荷叶', '藿香', '佩兰'], tags: ['清热', '利湿'] },
  { id: 176, herb: '决明子', title: '决明子清肝明目', summary: '决明子治愈目赤肿痛', story: '明代《本草纲目》记载：决明子清肝明目、润肠通便。有一位书生因熬夜苦读，导致目赤肿痛、视物模糊。郎中让他用决明子、菊花、枸杞各10克泡茶饮用。决明子清肝明目；菊花清热明目；枸杞补肝明目。书生服用后，目赤消退，视力改善。', lesson: '决明子清肝明目、润肠通便。适合目赤肿痛、便秘。脾虚腹泻者慎用', source: '《本草纲目》', relatedHerbs: ['决明子', '菊花', '枸杞'], tags: ['清肝', '明目'] },
  { id: 177, herb: '胖大海', title: '胖大海润肺开音', summary: '胖大海治愈声音嘶哑', story: '清代《本草纲目拾遗》记载：胖大海清热润肺、利咽开音、润肠通便。有一位歌唱家因演唱会过度用嗓，出现声音嘶哑。郎中用胖大海、甘草、蝉蜕各5克煎汤服用。胖大海清热利咽；甘草解毒利咽。患者服用后，声音恢复正常。', lesson: '胖大海清热润肺、利咽开音。适合声音嘶哑、咽痛。风寒咳嗽者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['胖大海', '甘草', '蝉蜕'], tags: ['润肺', '开音'] },
  { id: 178, herb: '菊花', title: '菊花清肝明目', summary: '菊花治愈风热目赤', story: '宋代《神农本草经》记载：菊花疏散风热、清肝明目。有一位商人因肝火旺盛，导致目赤肿痛、头晕头痛。郎中用菊花、桑叶、决明子各10克煎汤服用。菊花清肝明目；桑叶疏散风热。患者服用后，肝火消退，目赤肿痛减轻。', lesson: '菊花疏散风热、清肝明目。适合风热感冒、肝火目赤。脾胃虚寒者慎用', source: '《神农本草经》', relatedHerbs: ['菊花', '桑叶', '决明子'], tags: ['清肝', '明目'] },
  { id: 179, herb: '桑叶', title: '桑叶清肺润燥', summary: '桑叶治愈肺热燥咳', story: '明代《本草纲目》记载：桑叶清肺润燥、清肝明目。有一位老人因秋燥伤肺，出现干咳少痰、口干咽燥。郎中用桑叶、沙参、麦冬各10克煎汤服用。桑叶清肺润燥；沙参麦冬滋阴润肺。患者服用后，干咳停止。', lesson: '桑叶清肺润燥、清肝明目。适合肺热燥咳、目赤肿痛。风寒咳嗽者慎用', source: '《本草纲目》', relatedHerbs: ['桑叶', '沙参', '麦冬'], tags: ['清肺', '润燥'] },
  { id: 180, herb: '桑葚', title: '桑葚滋阴补血', summary: '桑葚治愈头晕耳鸣', story: '唐代《本草纲目》记载：桑葚滋阴补血、生津润肠。有一位老人因肝肾阴虚，出现头晕耳鸣，腰膝酸软。郎中用桑葚、枸杞子、制何首乌各15克煎汤服用。桑葚滋阴补血；枸杞补肝益肾。患者服用后，头晕耳鸣减轻。', lesson: '桑葚滋阴补血、生津润肠。适合肝肾阴虚、头晕耳鸣。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['桑葚', '枸杞', '制何首乌'], tags: ['滋阴', '补血'] },
  { id: 181, herb: '黄芪', title: '黄芪补气升阳', summary: '黄芪治愈气虚乏力', story: '清代《医学衷中参西录》记载：黄芪补气升阳、固表止汗。有一位患者因气虚导致乏力自汗、易感冒。老中医用黄芪，白术、防风各10克煎汤服用。黄芪补气固表；白术健脾益气；防风祛风散邪。患者服用后，乏力减轻，不再那么容易感冒了。', lesson: '黄芪补气升阳、固表止汗。适合气虚乏力、易感冒。阴虚火旺者慎用', source: '《医学衷中参西录》', relatedHerbs: ['黄芪', '白术', '防风'], tags: ['补气', '升阳'] },
  { id: 182, herb: '黄精', title: '黄精补气养阴', summary: '黄精治愈体虚乏力', story: '唐代《道藏》记载：黄精补气养阴、健脾润肺。有一位道长因常年修炼，出现体虚乏力、须发早白。老中医用黄精、枸杞子、制何首乌各15克煎汤服用。黄精补气养阴；枸杞补肝益精；何首乌乌须发。道长服用后，精力充沛，须发也逐渐变黑。', lesson: '黄精补气养阴、健脾润肺。适合体虚乏力、须发早白。痰湿壅盛者慎用', source: '《道藏》', relatedHerbs: ['黄精', '枸杞', '制何首乌'], tags: ['补气', '养阴'] },
  { id: 183, herb: '葛根', title: '葛根解肌退热', summary: '葛根治愈项背强痛', story: '东汉《伤寒论》记载：葛根解肌退热、升阳止泻。有一位患者因感冒导致项背强痛、发热无汗。郎中用葛根汤治疗。葛根解肌舒筋；麻黄桂枝发汗解表；芍药甘草缓急止痛。患者服用后，微微出汗，热退身凉，项强也消除了。', lesson: '葛根解肌退热、升阳止泻。适合感冒项强、发热无汗。阴虚火旺者慎用', source: '《伤寒论》', relatedHerbs: ['葛根', '麻黄', '桂枝'], tags: ['解肌', '退热'] },
  { id: 184, herb: '紫苏叶', title: '紫苏叶解表散寒', summary: '紫苏叶治愈风寒感冒', story: '明代《本草纲目》记载：紫苏叶解表散寒、行气宽中。有一位商人因受风寒，出现恶寒发热、咳嗽痰白。郎中用紫苏叶、生姜各10克煎汤服用。紫苏叶解表散寒；生姜温中散寒。商人服用后，微微出汗，寒热消退。', lesson: '紫苏叶解表散寒、行气宽中。适合风寒感冒、咳嗽。气虚者慎用', source: '《本草纲目》', relatedHerbs: ['紫苏叶', '生姜', '前胡'], tags: ['解表', '散寒'] },
  { id: 185, herb: '紫苏子', title: '紫苏子降气化痰', summary: '紫苏子治愈痰壅气喘', story: '宋代《本草衍义》记载：紫苏子下气消痰、止咳平喘。有一位老人因痰多气喘，胸膈满闷。郎中用紫苏子，白芥子、莱菔子各10克煎汤服用。紫苏子降气消痰；白芥子温肺化痰；莱菔子消食除胀。患者服用后，痰减少，气喘减轻。', lesson: '紫苏子下气消痰、止咳平喘。适合痰壅气喘、咳嗽。阴虚喘咳者慎用', source: '《本草衍义》', relatedHerbs: ['紫苏子', '白芥子', '莱菔子'], tags: ['降气', '化痰'] },
  { id: 186, herb: '黑芝麻', title: '黑芝麻补益肝肾', summary: '黑芝麻让老人耳聪目明', story: '明代《本草纲目》记载：黑芝麻补益肝肾、益精血、乌须发。有一位老人因肝肾不足，出现耳鸣耳聋、视物昏花。郎中用黑芝麻、核桃仁、枸杞子各15克，研末加蜂蜜服用。黑芝麻补肝肾；核桃补肾益精；枸杞补肝明目。老人服用数月后，耳鸣减轻，视力也改善了。', lesson: '黑芝麻补益肝肾、益精血、乌须发。适合肝肾不足、耳鸣眼花。便溏者慎用', source: '《本草纲目》', relatedHerbs: ['黑芝麻', '核桃仁', '枸杞子'], tags: ['补肝', '益肾'] },
  { id: 187, herb: '槐花', title: '槐花凉血止血', summary: '槐花治愈便血痔血', story: '明代《本草纲目》记载：槐花凉血止血、清肝泻火。有一位患者因痔疮出血，大便带血。郎中用槐花、地榆、荆芥炭各10克煎汤服用。槐花凉血止血；地榆收敛止血。患者服用后，便血停止。', lesson: '槐花凉血止血、清肝泻火。适合便血痔血、肝热目赤。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['槐花', '地榆', '荆芥'], tags: ['凉血', '止血'] },
  { id: 188, herb: '蒲公英', title: '蒲公英清热解毒', summary: '蒲公英治愈乳痈', story: '清代《本草纲目拾遗》记载：蒲公英清热解毒、消肿散结。有一位产妇因乳汁淤积，导致乳房红肿疼痛，形成乳痈。郎中用鲜蒲公英捣烂外敷，并煎汤内服。蒲公英清热解毒、消肿散结。产妇使用后，红肿消退，乳痈痊愈。', lesson: '蒲公英清热解毒、消肿散结。适合乳痈、疔疮。脾胃虚寒者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['蒲公英', '金银花', '连翘'], tags: ['清热', '解毒'] },
  { id: 189, herb: '鲜白茅根', title: '白茅根凉血止血', summary: '白茅根治愈鼻出血', story: '唐代《千金方》记载：白茅根凉血止血、清热利尿。有一位儿童因肺热导致反复鼻出血。郎中用鲜白茅根30克，煎汤加少许冰糖服用。白茅根凉血止血；清热利尿。儿童服用后，鼻出血停止。', lesson: '白茅根凉血止血、清热利尿。适合血热出血、小便不利。脾胃虚寒者慎用', source: '《千金方》', relatedHerbs: ['白茅根', '芦根', '藕节'], tags: ['凉血', '止血'] },
  { id: 190, herb: '芦根', title: '芦根清热生津', summary: '芦根治愈热病烦渴', story: '明代《医学衷中参西录》记载：芦根清热生津、除烦止呕。有一位患者因热病伤津，出现高热烦渴、呕吐。郎中用芦根、石膏、知母各15克煎汤服用。芦根清热生津；石膏清热泻火；知母滋阴润燥。患者服用后，热退烦消。', lesson: '芦根清热生津、除烦止呕。适合热病烦渴、胃热呕吐。脾胃虚寒者慎用', source: '《医学衷中参西录》', relatedHerbs: ['芦根', '石膏', '知母'], tags: ['清热', '生津'] },
  { id: 191, herb: '藿香', title: '藿香化湿止呕', summary: '藿香治愈暑湿呕吐', story: '明代《本草纲目》记载：藿香芳香化浊、发表解暑，理气止呕。有一位书生因暑天湿重，出现胸闷呕吐、腹胀。郎中用藿香、佩兰，半夏各10克煎汤服用。藿香芳香化浊；佩兰化湿解暑。患者服用后，呕吐停止，腹胀减轻。', lesson: '藿香芳香化浊、发表解暑，理气止呕。适合暑湿呕吐、腹胀。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['藿香', '佩兰', '半夏'], tags: ['化湿', '止呕'] },
  { id: 192, herb: '薄荷', title: '薄荷疏散风热', summary: '薄荷治愈风热头痛', story: '宋代《太平惠民和剂局方》记载：薄荷疏散风热、清利头目。有一位商人因风热上攻，导致头痛发热、咽喉肿痛。郎中用薄荷、菊花、连翘各10克煎汤服用。薄荷清利头目；菊花清热疏风。患者服用后，头痛减轻，咽喉肿痛消退。', lesson: '薄荷疏散风热、清利头目。适合风热头痛、咽喉肿痛。阴虚血热者慎用', source: '《太平惠民和剂局方》', relatedHerbs: ['薄荷', '菊花', '连翘'], tags: ['疏散', '风热'] },
  { id: 193, herb: '薏苡仁', title: '薏苡仁利湿健脾', summary: '薏苡仁治愈湿痹', story: '《神农本草经》记载：薏苡仁利湿健脾、清热排脓。有一位老人因湿痹，导致关节肿痛、屈伸不利。郎中用薏苡仁、防己、木瓜各15克煎汤服用。薏苡仁利湿舒筋；防己祛风除湿。患者服用后，关节肿痛减轻。', lesson: '薏苡仁利湿健脾、清热排脓。适合湿痹、水肿。孕妇慎用', source: '《神农本草经》', relatedHerbs: ['薏苡仁', '防己', '木瓜'], tags: ['利湿', '健脾'] },
  { id: 194, herb: '白扁豆花', title: '白扁豆花消暑化湿', summary: '白扁豆花治愈暑湿泄泻', story: '清代《本草纲目拾遗》记载：白扁豆花消暑化湿、止痢。有一位农夫因暑天饮食不洁，导致泄泻腹痛。郎中用白扁豆花、藿香、佩兰各10克煎汤服用。白扁豆花消暑化湿；藿香芳香化浊。患者服用后，泄泻停止。', lesson: '白扁豆花消暑化湿、止痢。适合暑湿泄泻、痢疾。脾胃虚寒者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['白扁豆花', '藿香', '佩兰'], tags: ['消暑', '化湿'] },
  { id: 195, herb: '白芷', title: '白芷祛风止痛', summary: '白芷治愈头痛鼻渊', story: '明代《本草纲目》记载：白芷祛风散寒、止痛通鼻窍。有一位患者因风寒头痛，前额疼痛，鼻塞流涕。郎中用白芷、川芎、辛夷各10克煎汤服用。白芷祛风止痛；川芎活血行气；辛夷通鼻窍。患者服用后，头痛减轻，鼻窍通畅。', lesson: '白芷祛风散寒、止痛通鼻窍。适合头痛、鼻渊。阴虚血热者慎用', source: '《本草纲目》', relatedHerbs: ['白芷', '川芎', '辛夷'], tags: ['祛风', '止痛'] },
  { id: 196, herb: '白果', title: '白果敛肺定喘', summary: '白果治愈久咳遗尿', story: '宋代《本草衍义》记载：白果敛肺定喘、止带缩尿。有一位老人因肺肾两虚，导致久咳不止、遗尿。郎中用白果、核桃仁、芡实各15克煎汤服用。白果敛肺止咳；核桃补肾纳气；芡实固肾缩尿。患者服用后，咳嗽减轻，遗尿也减少了。', lesson: '白果敛肺定喘、止带缩尿。适合久咳、遗尿。有小毒，不宜多食', source: '《本草衍义》', relatedHerbs: ['白果', '核桃仁', '芡实'], tags: ['敛肺', '定喘'] },
  { id: 197, herb: '香薷', title: '香薷解表化湿', summary: '香薷治愈暑湿感冒', story: '清代《温病条辨》记载：香薷解表化湿、祛暑利水。有一位农夫因暑天受凉，出现发热恶寒、腹胀吐泻。郎中用香薷饮治疗。香薷解表散寒；厚朴行气燥湿；白扁豆健脾化湿。农夫服用后，症状消除。', lesson: '香薷解表化湿、祛暑利水。适合暑湿感冒、水肿。表虚者慎用', source: '《温病条辨》', relatedHerbs: ['香薷', '厚朴', '白扁豆'], tags: ['解表', '化湿'] },
  { id: 198, herb: '淡豆豉', title: '淡豆豉解表除烦', summary: '淡豆豉治愈虚烦不眠', story: '汉代《伤寒论》记载：淡豆豉解表除烦、宣发郁热。有一位患者因热病后期，出现虚烦不眠，胸闷。郎中用栀子豉汤治疗。淡豆豉宣发郁热；栀子清热除烦。患者服用后，虚烦消退，能够入睡了。', lesson: '淡豆豉解表除烦、宣发郁热。适合虚烦不眠、热病后期。脾胃虚寒者慎用', source: '《伤寒论》', relatedHerbs: ['淡豆豉', '栀子', '甘草'], tags: ['解表', '除烦'] },
  { id: 199, herb: '紫苏梗', title: '紫苏梗理气安胎', summary: '紫苏梗治愈气滞胎动', story: '明代《本草纲目》记载：紫苏梗理气安胎、宽胸利膈。有一位孕妇因情志不畅，导致胸闷腹胀、胎动不安。郎中让她用紫苏梗，陈皮、砂仁各5克煎汤服用。紫苏梗理气安胎；陈皮理气和中；砂仁行气安胎。孕妇服用后，气滞消除，胎动也正常了。', lesson: '紫苏梗理气安胎、宽胸利膈。适合气滞胎动，胸腹胀满。阴虚血热者慎用', source: '《本草纲目》', relatedHerbs: ['紫苏梗', '陈皮', '砂仁'], tags: ['理气', '安胎'] },
  { id: 200, herb: '龟甲', title: '龟甲滋阴潜阳', summary: '龟甲让老人耳聪目明', story: '唐代《本草纲目》记载：龟甲滋阴潜阳、益肾健骨。有一位老人因肾阴不足，出现耳鸣耳聋、头晕目眩，腰膝酸软。郎中用龟甲、熟地黄、山茱萸制成龟甲胶丸服用。龟甲滋阴潜阳；熟地黄补血滋阴；山茱萸补益肝肾。老人服用数月后，耳聪目明，腰膝有力。', lesson: '龟甲滋阴潜阳、益肾健骨。适合肾阴不足、骨蒸劳热。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['龟甲', '熟地黄', '山茱萸'], tags: ['滋阴', '潜阳'] },
  { id: 201, herb: '苹果', title: '苹果生津润肺', summary: '苹果让老师精力充沛', story: '明代《本草纲目》记载：苹果生津润肺、除烦解暑、开胃醒酒。有一位老师因长期讲课说话过多，出现口干咽燥、声音嘶哑。老中医让他每日食用苹果两个。苹果生津润肺，富含果胶和维生素C，能保护咽喉黏膜。老师食用月余，口干减轻，声音也恢复了。苹果富含膳食纤维和果胶，有助于肠道健康。', lesson: '苹果生津润肺、开胃醒酒。适合口干咽燥、声音嘶哑。富含维生素C、果胶、膳食纤维。胃酸过多者不宜空腹食用', source: '《本草纲目》', relatedHerbs: ['苹果', '梨', '蜂蜜'], tags: ['生津', '润肺'] },
  { id: 202, herb: '梨', title: '梨润肺止咳', summary: '梨让播音员声音清脆', story: '唐代《本草衍义》记载：梨润肺清心、消痰降火、解酒毒。有一位播音员因长期用嗓，出现干咳少痰、咽干口燥。老中医用梨、冰糖、川贝母各适量蒸服。梨润肺止咳；川贝母清热化痰；冰糖润肺调味。播音员服用后，干咳停止，嗓音恢复。梨含有的配糖体和维生素C能增强呼吸道抵抗力。', lesson: '梨润肺清心、消痰降火。适合肺热咳嗽、干咳少痰。富含果糖、葡萄糖、维生素C。脾胃虚寒者慎用', source: '《本草衍义》', relatedHerbs: ['梨', '川贝母', '冰糖'], tags: ['润肺', '止咳'] },
  { id: 203, herb: '桃子', title: '桃子生津润肠', summary: '桃子让老人排便顺畅', story: '清代《本草纲目拾遗》记载：桃子生津润肠、活血消积。有一位老人因肠燥津亏，大便干结。郎中让他每日食用鲜桃两个。桃子富含膳食纤维和果胶，能促进肠道蠕动。老人的大便逐渐通畅了。桃子还含有丰富的铁元素，能预防缺铁性贫血。', lesson: '桃子生津润肠、活血消积。适合肠燥便秘。富含膳食纤维、果胶、铁元素。胃酸过多者不宜多食', source: '《本草纲目拾遗》', relatedHerbs: ['桃子', '蜂蜜', '黑芝麻'], tags: ['生津', '润肠'] },
  { id: 204, herb: '樱桃', title: '樱桃补血养颜', summary: '樱桃让女子面色红润', story: '唐代《本草纲目》记载：樱桃益气祛风湿。有一位女子因贫血导致面色萎黄、头晕乏力。老中医让她每日食用樱桃15颗。樱桃富含铁元素和维生素C，铁含量居水果之首，能促进血红蛋白合成。女子食用月余，面色红润，头晕也消失了。樱桃还含有花青素，能抗氧化、延缓衰老。', lesson: '樱桃益气祛风湿、补血养颜。适合贫血、面色萎黄。富含铁、维生素C、花青素。阴虚火旺者慎用', source: '《本草纲目》', relatedHerbs: ['樱桃', '红枣', '枸杞'], tags: ['补血', '养颜'] },
  { id: 205, herb: '葡萄', title: '葡萄补气血，强筋骨', summary: '葡萄让老人腿脚有力', story: '《神农本草经》记载：葡萄补气血、强筋骨、利水。有一位老人因肝肾不足，出现腰膝酸软、腿脚无力。郎中让他每日饮用葡萄酒50毫升，或食用鲜葡萄200克。葡萄富含葡萄糖、果糖、维生素B1和多种矿物质，能补充能量、强壮筋骨。老人坚持食用月余，腿脚有力，行走轻快。', lesson: '葡萄补气血、强筋骨、利水。适合肝肾不足、腰膝酸软。富含葡萄糖、果糖、维生素B1、钾、镁。糖尿病者慎用', source: '《神农本草经》', relatedHerbs: ['葡萄', '枸杞', '杜仲'], tags: ['补气血', '强筋骨'] },
  { id: 206, herb: '菠萝', title: '菠萝消食解暑', summary: '菠萝让船员消化改善', story: '清代《本草纲目》记载：菠萝消食止泻、解暑除烦。有一位船员因长期海上生活，饮食不规律，导致消化不良、腹胀。郎中让他在饭后食用菠萝100克。菠萝含有菠萝蛋白酶，能分解蛋白质、促进消化。船员食用后，腹胀减轻，消化功能改善。菠萝还富含维生素B1和维生素C，能消除疲劳。', lesson: '菠萝消食止泻、解暑除烦。适合消化不良、腹胀。富含菠萝蛋白酶、维生素B1、维生素C。胃溃疡者慎用', source: '《本草纲目》', relatedHerbs: ['菠萝', '山楂', '麦芽'], tags: ['消食', '解暑'] },
  { id: 207, herb: '西瓜', title: '西瓜清热解暑', summary: '西瓜让农夫暑热消退', story: '元代《食物本草》记载：西瓜清热解暑、除烦止渴、利水。有一位农夫因暑天劳作，出现头重身困、口渴难耐。郎中让他食用西瓜半个。西瓜含水量高达90%以上，富含葡萄糖、果糖、氨基酸和维生素C，能快速补充水分和电解质。农夫食用后，暑热消退，口渴也解了。西瓜皮晒干后也可入药，称"西瓜翠衣"。', lesson: '西瓜清热解暑、除烦止渴、利水。适合暑热烦渴、水肿。含水量高，富含维生素C、葡萄糖。脾胃虚寒者慎用', source: '《食物本草》', relatedHerbs: ['西瓜', '荷叶', '金银花'], tags: ['清热', '解暑'] },
  { id: 208, herb: '香蕉', title: '香蕉润肠通便', summary: '香蕉让老人排便轻松', story: '清代《本草纲目拾遗》记载：香蕉清热解毒、润肠通便。有一位老人因肠燥津亏，大便干结。郎中让他每日食用香蕉两根。香蕉富含膳食纤维和果糖，能促进肠道蠕动、软化粪便。老人的大便逐渐通畅了。香蕉还含有丰富的钾元素，能维持心脏和肌肉的正常功能。', lesson: '香蕉清热解毒、润肠通便。适合肠燥便秘。富含膳食纤维、果糖、钾元素。糖尿病者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['香蕉', '蜂蜜', '核桃'], tags: ['润肠', '通便'] },
  { id: 209, herb: '橙子', title: '橙子止咳化痰', summary: '橙子让咳嗽患者痊愈', story: '明代《本草纲目》记载：橙子止咳化痰、行气宽中。有一位患者因风寒咳嗽，痰白清稀。郎中用橙子皮、生姜、陈皮各10克煎汤服用。橙皮理气化痰；陈皮燥湿化痰。患者服用后，咳嗽减轻，痰也少了。橙子富含维生素C和类黄酮，能增强免疫力、抗氧化。', lesson: '橙子止咳化痰、行气宽中。适合风寒咳嗽、痰多。富含维生素C、类黄酮、膳食纤维。胃酸过多者不宜空腹食用', source: '《本草纲目》', relatedHerbs: ['橙子', '陈皮', '生姜'], tags: ['止咳', '化痰'] },
  { id: 210, herb: '橘子', title: '橘子理气健脾', summary: '橘子让腹胀商人康复', story: '宋代《本草图经》记载：橘子理气健脾、燥湿化痰。有一位商人因饮食不节，导致脘腹胀满、嗳气。郎中让他食用橘子200克，或用陈皮泡茶饮用。橘子络能理气化痰；陈皮理气健脾。商人食用后，腹胀减轻，嗳气也消失了。橘子富含维生素C和柠檬酸，能增进食欲。', lesson: '橘子理气健脾、燥湿化痰。适合脘腹胀满、嗳气。富含维生素C、柠檬酸、膳食纤维。胃酸过多者慎用', source: '《本草图经》', relatedHerbs: ['橘子', '陈皮', '山楂'], tags: ['理气', '健脾'] },
  { id: 211, herb: '柚子', title: '柚子理气化痰', summary: '柚子让咳嗽患者痊愈', story: '清代《本草纲目》记载：柚子消食化痰、理气宽中。有一位患者因痰湿咳嗽，痰多色白，胸闷。郎中让他每日食用柚子果肉200克。柚子富含维生素C和柚皮苷，能稀释痰液、促进排痰。患者食用后，痰减少，咳嗽也减轻了。柚子还含有丰富的膳食纤维，能降低血脂。', lesson: '柚子消食化痰、理气宽中。适合痰湿咳嗽、胸闷。富含维生素C、柚皮苷、膳食纤维。正在服药者慎用', source: '《本草纲目》', relatedHerbs: ['柚子', '陈皮', '茯苓'], tags: ['理气', '化痰'] },
  { id: 212, herb: '柿子', title: '柿子润肺止血', summary: '柿子让咳嗽患者痊愈', story: '唐代《本草拾遗》记载：柿子清热润肺、止咳止血。有一位患者因肺热咳嗽，痰中带血。郎中让他食用新鲜柿子或柿饼。柿子富含鞣酸和维生素C，能收敛止血、润肺止咳。患者食用后，咳嗽减轻，痰中带血也消失了。柿子还含有丰富的胡萝卜素和果糖。', lesson: '柿子清热润肺、止咳止血。适合肺热咳嗽、痰中带血。富含维生素C、鞣酸、胡萝卜素。空腹或胃石症者慎用', source: '《本草拾遗》', relatedHerbs: ['柿子', '川贝母', '蜂蜜'], tags: ['润肺', '止血'] },
  { id: 213, herb: '猕猴桃', title: '猕猴桃解热止渴', summary: '猕猴桃让牙龈出血患者康复', story: '唐代《本草纲目》记载：猕猴桃解热止渴、通淋。有一位患者因维生素C缺乏，导致牙龈出血、伤口愈合缓慢。老中医让他每日食用猕猴桃两个。猕猴桃维生素C含量极高，是柑橘的3-5倍，能促进胶原蛋白合成、增强血管弹性。患者食用月余，牙龈出血消失了。猕猴桃还含有丰富的膳食纤维和酶类，能帮助消化。', lesson: '猕猴桃解热止渴、通淋。适合维生素C缺乏、牙龈出血。维生素C含量极高，富含膳食纤维、酶类。胃酸过多者慎用', source: '《本草纲目》', relatedHerbs: ['猕猴桃', '橙子', '柠檬'], tags: ['解热', '止渴'] },
  { id: 214, herb: '草莓', title: '草莓清热生津', summary: '草莓让口疮患者痊愈', story: '清代《本草纲目拾遗》记载：草莓清热生津、润肺止血。有一位患者因心火旺盛，导致口舌生疮、口干。郎中让他每日食用草莓150克。草莓富含维生素C和鞣酸，能清热降火、消肿止痛。患者食用后，口疮逐渐愈合。草莓还含有丰富的花青素和叶酸，能保护心血管。', lesson: '草莓清热生津、润肺止血。适合口舌生疮、心火旺盛。富含维生素C、花青素、叶酸。尿路结石患者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['草莓', '西瓜', '绿豆'], tags: ['清热', '生津'] },
  { id: 215, herb: '芒果', title: '芒果益胃生津', summary: '芒果让呕吐患者康复', story: '宋代《本草纲目》记载：芒果益胃止呕、解渴利尿。有一位患者因胃热导致呕吐不止、口渴。郎中让他食用芒果果肉或饮用芒果汁。芒果富含果糖、葡萄糖和维生素C，能补充能量、滋养胃阴。患者食用后，呕吐停止，口渴也减轻了。芒果还含有丰富的胡萝卜素，对视力有益。', lesson: '芒果益胃止呕、解渴利尿。适合胃热呕吐、口渴。富含胡萝卜素、维生素C、糖类。过敏体质者慎用', source: '《本草纲目》', relatedHerbs: ['芒果', '生姜', '芦根'], tags: ['益胃', '生津'] },
  { id: 216, herb: '火龙果', title: '火龙果清热润肺', summary: '火龙果让便秘患者康复', story: '清代《本草纲目》记载：火龙果清热润肺、解毒通便。有一位老人因肠燥津亏，大便干结。郎中让他每日食用火龙果半个。火龙果富含膳食纤维和果糖种子，能促进肠道蠕动、软化粪便。老人的大便逐渐通畅了。火龙果还含有丰富的花青素和维生素C，能抗氧化、保护血管。', lesson: '火龙果清热润肺、解毒通便。适合肠燥便秘。富含膳食纤维、花青素、维生素C。糖尿病者慎用', source: '《本草纲目》', relatedHerbs: ['火龙果', '香蕉', '蜂蜜'], tags: ['清热', '润肺'] },
  { id: 217, herb: '哈密瓜', title: '哈密瓜解暑除烦', summary: '哈密瓜让中暑患者康复', story: '元代《饮膳正要》记载：哈密瓜甘凉解暑、除烦止渴。有一位农夫因暑天劳作，出现头晕乏力、口渴。郎中让他食用哈密瓜200克。哈密瓜含水量高，富含葡萄糖、果糖和维生素C，能快速补充水分和能量。农夫食用后，中暑症状消失。哈密瓜还含有丰富的钾元素，能维持心脏功能。', lesson: '哈密瓜甘凉解暑、除烦止渴。适合暑热烦渴、头晕乏力。富含葡萄糖、果糖、维生素C、钾。糖尿病者慎用', source: '《饮膳正要》', relatedHerbs: ['哈密瓜', '西瓜', '绿豆'], tags: ['解暑', '除烦'] },
  { id: 218, herb: '枇杷', title: '枇杷润肺止咳', summary: '枇杷让咳嗽患者痊愈', story: '明代《本草纲目》记载：枇杷润肺止咳、和胃降逆。有一位患者因肺燥咳嗽，干咳少痰。郎中用枇杷叶、桑叶、沙参各15克煎汤服用。枇杷叶清肺止咳；桑叶清肺润燥；沙参养阴清肺。患者服用后，干咳停止。枇杷果也富含维生素C和果糖，能滋养肺阴。', lesson: '枇杷润肺止咳、和胃降逆。适合肺燥咳嗽、干咳少痰。富含维生素C、果糖、胡萝卜素。脾虚便溏者慎用', source: '《本草纲目》', relatedHerbs: ['枇杷', '川贝母', '蜂蜜'], tags: ['润肺', '止咳'] },
  { id: 219, herb: '荔枝', title: '荔枝补脾益肝', summary: '荔枝让贫血患者面色红润', story: '唐代《本草纲目》记载：荔枝补脾益肝、理气止痛。有一位女子因肝血不足，导致面色萎黄、头晕眼花。老中医让她每日食用荔枝10颗。荔枝富含葡萄糖、铁元素和维生素C，能补血养颜、增强体质。女子食用月余，面色红润，头晕也消失了。荔枝还含有丰富的柠檬酸和蛋白质。', lesson: '荔枝补脾益肝、理气止痛。适合肝血不足、面色萎黄。富含葡萄糖、铁、维生素C。阴虚火旺者慎用，不宜多食', source: '《本草纲目》', relatedHerbs: ['荔枝', '红枣', '桂圆'], tags: ['补脾', '益肝'] },
  { id: 220, herb: '石榴', title: '石榴生津止渴', summary: '石榴让腹泻患者康复', story: '晋代《名医别录》记载：石榴生津止渴、收敛固涩。有一位患者因肠炎导致腹泻不止。郎中让他食用石榴或饮用石榴汁。石榴富含鞣酸和维生素C，能收敛止泻、消炎抗菌。患者食用后，腹泻减轻。石榴皮可治久泻久痢，还含有丰富的花青素，能抗氧化。', lesson: '石榴生津止渴、收敛固涩。适合肠炎腹泻、久泻久痢。富含鞣酸、维生素C、花青素。便秘者慎用', source: '《名医别录》', relatedHerbs: ['石榴', '山楂', '马齿苋'], tags: ['生津', '止渴'] },
  { id: 221, herb: '菠菜', title: '菠菜滋阴养血', summary: '菠菜让贫血患者康复', story: '唐代《食疗本草》记载：菠菜疏通血脉、开胸膈、滋阴养血。有一位女子因血虚导致面色萎黄、头晕眼花。老中医让她每日食用菠菜200克，或用菠菜煮汤。菠菜富含铁元素、叶酸和维生素C，铁含量在绿叶蔬菜中居首位，能促进血红蛋白合成。患者食用月余，面色红润，贫血明显改善。菠菜还含有丰富的膳食纤维和胡萝卜素。', lesson: '菠菜疏通血脉、滋阴养血。适合贫血、面色萎黄。富含铁、叶酸、维生素C、草酸。尿路结石或痛风者慎用', source: '《食疗本草》', relatedHerbs: ['菠菜', '红枣', '黑木耳'], tags: ['滋阴', '养血'] },
  { id: 222, herb: '白菜', title: '白菜通利肠胃', summary: '白菜让便秘患者康复', story: '元代《饮食须知》记载：白菜通利肠胃、除胸中烦闷。有一位老人因肠燥津亏，大便干结。郎中让他每日食用白菜300克，或用白菜煮粥。白菜富含膳食纤维和水分，能促进肠道蠕动、软化粪便。老人食用后，大便通畅了。白菜还含有丰富的维生素C和钙。', lesson: '白菜通利肠胃、除胸中烦闷。适合肠燥便秘。富含膳食纤维、维生素C、钙。胃寒者不宜多食', source: '《饮食须知》', relatedHerbs: ['白菜', '萝卜', '蜂蜜'], tags: ['通利', '肠胃'] },
  { id: 223, herb: '茄子', title: '茄子清热活血', summary: '茄子让痔疮患者康复', story: '唐代《食疗本草》记载：茄子清热止血、消肿止痛。有一位患者因痔疮出血，大便带血。郎中让他食用茄子或用茄子蒂煎汤服用。茄子富含维生素P和花青素，能增强血管弹性、凉血止血。患者食用后，便血减轻。茄子还含有丰富的维生素E和钾元素。', lesson: '茄子清热止血、消肿止痛。适合痔疮出血。富含维生素P、花青素、维生素E。腹泻者慎用', source: '《食疗本草》', relatedHerbs: ['茄子', '槐花', '无花果'], tags: ['清热', '活血'] },
  { id: 224, herb: '黄瓜', title: '黄瓜清热解暑', summary: '黄瓜让中暑患者康复', story: '明代《本草纲目》记载：黄瓜清热解暑、除烦止渴、利水消肿。有一位农夫因暑天劳作，出现口渴、尿少。郎中让他食用黄瓜或饮用黄瓜汁。黄瓜含水量高达95%以上，富含维生素C和钾元素，能快速补充水分、利尿消肿。农夫食用后，口渴解除，尿量也正常了。黄瓜还含有丙醇二酸，能抑制糖类转化为脂肪。', lesson: '黄瓜清热解暑、除烦止渴、利水消肿。适合暑热烦渴、水肿。含水量高，富含维生素C、钾。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['黄瓜', '西瓜', '冬瓜'], tags: ['清热', '解暑'] },
  { id: 225, herb: '西红柿', title: '西红柿生津止渴', summary: '西红柿让口干患者康复', story: '清代《本草纲目拾遗》记载：西红柿清热解毒、生津止渴。西红柿又名番茄，富含维生素C和番茄红素，维生素C含量是苹果的2-3倍，能增强免疫力、抗氧化。有一位学生因熬夜看书，出现口干舌燥。老中医让他每日食用西红柿两个。学生食用后，口干减轻，精神也好了。西红柿还含有丰富的有机酸，能增进食欲。', lesson: '西红柿清热解毒、生津止渴。适合口干舌燥、发热。富含维生素C、番茄红素、有机酸。胃酸过多者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['西红柿', '黄瓜', '蜂蜜'], tags: ['生津', '止渴'] },
  { id: 226, herb: '土豆', title: '土豆补脾益气', summary: '土豆让胃痛患者康复', story: '清代《本草纲目拾遗》记载：土豆补脾益气、和中解毒。一位农民因脾胃虚弱，导致胃脘隐痛、食欲不振。郎中让他每日食用土豆200克，或用土豆煮粥。土豆富含淀粉和维生素B1，能保护胃黏膜、补充能量。农民食用月余，胃痛减轻，胃口也开了。土豆还含有丰富的钾元素。', lesson: '土豆补脾益气、和中解毒。适合脾胃虚弱、胃脘疼痛。富含淀粉、维生素B1、钾。发芽土豆有毒，不可食用', source: '《本草纲目拾遗》', relatedHerbs: ['土豆', '山药', '红枣'], tags: ['补脾', '益气'] },
  { id: 227, herb: '胡萝卜', title: '胡萝卜养肝明目', summary: '胡萝卜让眼病患者康复', story: '明代《本草纲目》记载：胡萝卜养肝明目、宽中下气。有一位学生因用眼过度，出现视物模糊、夜盲症。老中医让他每日食用胡萝卜200克，或饮用胡萝卜汁。胡萝卜富含β-胡萝卜素，在体内转化为维生素A，能维护视网膜健康、改善视力。患者食用月余，视力改善，夜盲症也消失了。胡萝卜还含有丰富的膳食纤维。', lesson: '胡萝卜养肝明目、宽中下气。适合视力减退、夜盲症。富含β-胡萝卜素、维生素A、膳食纤维。大量食用会使皮肤发黄', source: '《本草纲目》', relatedHerbs: ['胡萝卜', '枸杞', '猪肝'], tags: ['养肝', '明目'] },
  { id: 228, herb: '白萝卜', title: '白萝卜消食化痰', summary: '白萝卜让腹胀患者康复', story: '元代《饮食须知》记载：白萝卜消食化痰、宽中下气。有一位官员因赴宴过多，导致脘腹胀满、嗳气。郎中让他食用白萝卜或饮用萝卜汁。白萝卜富含芥子油和膳食纤维，能促进消化酶分泌、加快胃肠蠕动。官员食用后，腹胀减轻，嗳气也消失了。白萝卜还含有丰富的维生素C。', lesson: '白萝卜消食化痰、宽中下气。适合食积腹胀、嗳气。富含芥子油、维生素C、膳食纤维。脾胃虚寒者慎用', source: '《饮食须知》', relatedHerbs: ['白萝卜', '山楂', '神曲'], tags: ['消食', '化痰'] },
  { id: 229, herb: '洋葱', title: '洋葱散寒发汗', summary: '洋葱让感冒患者康复', story: '清代《本草纲目》记载：洋葱散寒发汗、健胃理气。有一位患者因风寒感冒，出现恶寒发热、鼻塞。郎中让他食用洋葱或饮用洋葱汤。洋葱富含硫化物和大蒜素，能发汗解表、抗菌消炎。患者食用后，微微出汗，热退鼻通。洋葱还含有丰富的钾元素和前列腺素A，能降低血压。', lesson: '洋葱散寒发汗、健胃理气。适合风寒感冒、鼻塞。富含硫化物、大蒜素、前列腺素A。胃溃疡者慎用', source: '《本草纲目》', relatedHerbs: ['洋葱', '生姜', '葱白'], tags: ['散寒', '发汗'] },
  { id: 230, herb: '大蒜', title: '大蒜温中消食', summary: '大蒜让胃寒患者康复', story: '唐代《本草拾遗》记载：大蒜温中消食、解毒杀虫。有一位商人因过食生冷，导致胃寒胃痛。郎中让他食用大蒜或用大蒜配红糖煎汤服用。大蒜富含大蒜素和硫化物，能温中散寒、抑制幽门螺杆菌。商人服用后，胃痛减轻。大蒜还含有丰富的锗元素，能增强免疫力、抗癌。', lesson: '大蒜温中消食、解毒杀虫。适合胃寒疼痛。富含大蒜素、硫化物、锗。阴虚火旺者慎用', source: '《本草拾遗》', relatedHerbs: ['大蒜', '干姜', '红糖'], tags: ['温中', '消食'] },
  { id: 231, herb: '生姜', title: '生姜温中散寒', summary: '生姜让呕吐患者康复', story: '东汉《伤寒论》记载：生姜温中散寒、和胃止呕。有一位患者因胃寒导致呕吐不止。郎中用生姜、红糖各10克煎汤服用。生姜能温中散寒、抑制胃肠平滑肌痉挛；红糖缓急止痛。患者服用后，呕吐停止。生姜还含有姜辣素，能促进消化液分泌、增进食欲。', lesson: '生姜温中散寒、和胃止呕。适合胃寒呕吐、恶寒。富含姜辣素、姜酚、维生素C。阴虚内热者慎用', source: '《伤寒论》', relatedHerbs: ['生姜', '红糖', '半夏'], tags: ['温中', '散寒'] },
  { id: 232, herb: '芹菜', title: '芹菜平肝清热', summary: '芹菜让高血压患者康复', story: '唐代《千金方》记载：芹菜平肝清热、利水止血。有一位老人因肝阳上亢，导致头晕头痛、血压升高。郎中让他每日食用芹菜200克，或饮用芹菜汁。芹菜富含芹菜素和丁苯肽，能扩张血管、降低血压。老人食用月余，头晕减轻，血压也下降了。芹菜还含有丰富的膳食纤维。', lesson: '芹菜平肝清热、利水止血。适合高血压、头晕。富含芹菜素、膳食纤维、丁苯肽。低血压者慎用', source: '《千金方》', relatedHerbs: ['芹菜', '菊花', '钩藤'], tags: ['平肝', '清热'] },
  { id: 233, herb: '西兰花', title: '西兰花清热解毒', summary: '西兰花让癌症患者康复', story: '清代《本草纲目拾遗》记载：西兰花清热解毒、利水通淋。西兰花富含萝卜硫素和维生素C，萝卜硫素是天然的抗癌物质，能激活解毒酶、抑制癌细胞生长。有一位患者因胃癌手术后恢复期，老中医让他每日食用西兰花200克。西兰花中的萝卜硫素能增强机体抗癌能力，患者坚持食用，体质逐渐恢复。西兰花还含有丰富的叶酸和膳食纤维。', lesson: '西兰花清热解毒、利水通淋。适合癌症预防、术后恢复。富含萝卜硫素、维生素C、叶酸。甲状腺功能低下者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['西兰花', '胡萝卜', '香菇'], tags: ['清热', '解毒'] },
  { id: 234, herb: '南瓜', title: '南瓜补中益气', summary: '南瓜让糖尿病患者康复', story: '明代《本草纲目》记载：南瓜补中益气、消痰止血。南瓜富含钴元素和果胶，钴元素能促进胰岛素分泌、降低血糖；果胶能延缓糖类吸收。有一位糖尿病患者，老中医让他每日食用南瓜200克。患者坚持食用，血糖控制平稳。南瓜还含有丰富的胡萝卜素和维生素E。', lesson: '南瓜补中益气、消痰止血。适合糖尿病。富含钴、果胶、胡萝卜素。胃酸过多者不宜多食', source: '《本草纲目》', relatedHerbs: ['南瓜', '山药', '葛根'], tags: ['补中', '益气'] },
  { id: 235, herb: '冬瓜', title: '冬瓜利水消肿', summary: '冬瓜让水肿患者康复', story: '唐代《食疗本草》记载：冬瓜利水消肿、清热解暑。有一位妇人因脾虚湿盛，导致足踝水肿、小便不利。郎中让她用冬瓜、薏苡仁各30克煮汤食用。冬瓜利水消肿；薏苡仁健脾渗湿。妇人食用后，水肿消退，小便也通畅了。冬瓜含水量高，富含维生素C和钾元素。', lesson: '冬瓜利水消肿、清热解暑。适合水肿、小便不利。含水量高，富含维生素C、钾。脾胃虚寒者慎用', source: '《食疗本草》', relatedHerbs: ['冬瓜', '薏苡仁', '赤小豆'], tags: ['利水', '消肿'] },
  { id: 236, herb: '苦瓜', title: '苦瓜清热泻火', summary: '苦瓜让糖尿病患者康复', story: '清代《本草纲目拾遗》记载：苦瓜清热泻火、明目解毒。苦瓜富含苦瓜苷和类胰岛素物质，能促进胰岛素分泌、降低血糖。有一位糖尿病患者，老中医让他每日食用苦瓜200克，或饮用苦瓜汁。患者坚持食用，血糖明显下降。苦瓜还含有丰富的维生素C和苦味素。', lesson: '苦瓜清热泻火、明目解毒。适合糖尿病、口苦。富含苦瓜苷、类胰岛素、维生素C。脾胃虚寒者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['苦瓜', '桑叶', '葛根'], tags: ['清热', '泻火'] },
  { id: 237, herb: '丝瓜', title: '丝瓜清热化痰', summary: '丝瓜让咽喉炎患者康复', story: '明代《本草纲目》记载：丝瓜清热化痰、凉血解毒。有一位患者因肺热咳嗽，痰黄黏稠、咽喉肿痛。郎中让他食用丝瓜或用丝瓜络煎汤服用。丝瓜富含皂苷和维生素C，能清热化痰、消肿止痛。患者食用后，咳嗽减轻，咽喉肿痛也消失了。丝瓜还含有丰富的膳食纤维和水分。', lesson: '丝瓜清热化痰、凉血解毒。适合肺热咳嗽、咽喉肿痛。富含皂苷、维生素C、膳食纤维。脾胃虚寒者慎用', source: '《本草纲目》', relatedHerbs: ['丝瓜', '川贝母', '金银花'], tags: ['清热', '化痰'] },
  { id: 238, herb: '豆角', title: '豆角健脾利湿', summary: '豆角让腹泻患者康复', story: '元代《饮食须知》记载：豆角健脾利湿、解毒消肿。有一位患者因脾虚湿盛，导致腹泻、食欲不振。郎中让他食用豆角或用豆角煮汤。豆角富含膳食纤维和维生素B1，能健脾止泻、补充能量。患者食用后，腹泻停止，胃口也开了。豆角还含有丰富的钾和镁元素。', lesson: '豆角健脾利湿、解毒消肿。适合脾虚腹泻。富含膳食纤维、维生素B1、钾。必须完全煮熟食用', source: '《饮食须知》', relatedHerbs: ['豆角', '山药', '茯苓'], tags: ['健脾', '利湿'] },
  { id: 239, herb: '红薯', title: '红薯补脾益气', summary: '红薯让便秘患者康复', story: '明代《本草纲目》记载：红薯补脾益气、宽肠通便。红薯富含膳食纤维和果糖，能促进肠道蠕动、软化粪便。有一位老人因肠燥津亏，大便干结。郎中让他每日食用红薯200克。老人的大便逐渐通畅了。红薯还含有丰富的胡萝卜素和维生素C，能保护视力、抗氧化。', lesson: '红薯补脾益气、宽肠通便。适合脾虚便秘、视力减退。富含膳食纤维、胡萝卜素、维生素C。糖尿病者慎用', source: '《本草纲目》', relatedHerbs: ['红薯', '土豆', '香蕉'], tags: ['补脾', '益气'] },
  { id: 240, herb: '芋头', title: '芋头补脾益肾', summary: '芋头让体虚患者康复', story: '唐代《名医别录》记载：芋头补脾益肾、软坚散结。有一位老人因脾胃虚弱，导致食欲不振、体倦乏力。郎中让他每日食用芋头200克，或用芋头煮粥。芋头富含淀粉和黏液蛋白，能健脾养胃、补充能量。老人食用月余，食欲增加，精神也好了。芋头还含有丰富的氟元素，能保护牙齿。', lesson: '芋头补脾益肾、软坚散结。适合脾胃虚弱、体倦乏力。富含淀粉、黏液蛋白、氟。过敏体质者慎用', source: '《名医别录》', relatedHerbs: ['芋头', '山药', '红枣'], tags: ['补脾', '益肾'] },
  { id: 241, herb: '藕', title: '藕清热凉血', summary: '藕让血热出血患者康复', story: '唐代《食疗本草》记载：藕清热凉血、散瘀生津。有一位患者因血热导致鼻出血、痔疮出血。郎中让他食用藕或饮用藕汁。藕富含鞣酸和维生素C，能凉血止血、收缩血管。患者食用后，出血减轻。藕还含有丰富的膳食纤维和铁元素，能补血养血。', lesson: '藕清热凉血、散瘀生津。适合血热出血、痔疮出血。富含鞣酸、维生素C、铁。脾胃虚寒者慎用', source: '《食疗本草》', relatedHerbs: ['藕', '白茅根', '芦根'], tags: ['清热', '凉血'] },
  { id: 242, herb: '竹笋', title: '竹笋清热化痰', summary: '竹笋让肥胖患者康复', story: '宋代《本草纲目》记载：竹笋清热化痰、消积减肥。有一位体型肥胖的妇人，因湿热内蕴，导致体重增加、血脂偏高。老中医让她每日食用竹笋200克。竹笋富含膳食纤维和胆碱，能促进肠道蠕动、减少脂肪吸收。妇人坚持食用月余，体重下降，血脂也降低了。竹笋还含有丰富的钾元素。', lesson: '竹笋清热化痰、消积减肥。适合肥胖、高血脂。富含膳食纤维、胆碱、钾。胃溃疡或胃出血者慎用', source: '《本草纲目》', relatedHerbs: ['竹笋', '冬瓜', '荷叶'], tags: ['清热', '化痰'] },
  { id: 243, herb: '香菇', title: '香菇益气养血', summary: '香菇让贫血患者康复', story: '元代《饮膳正要》记载：香菇益气养血、托痘毒。香菇富含香菇多糖和铁元素，能增强免疫力、促进血红蛋白合成。有一位贫血患者，老中医让他每日食用香菇50克。患者坚持食用月余，贫血明显改善，面色红润。香菇还含有丰富的维生素D和钾元素。', lesson: '香菇益气养血、托痘毒。适合贫血、免疫力低下。富含香菇多糖、铁、维生素D。痛风患者慎用', source: '《饮膳正要》', relatedHerbs: ['香菇', '红枣', '黑木耳'], tags: ['益气', '养血'] },
  { id: 244, herb: '木耳', title: '木耳凉血止血', summary: '木耳让脑梗患者康复', story: '明代《本草纲目》记载：木耳凉血止血、润肺益胃。木耳富含黑木耳多糖和铁元素，黑木耳多糖能降低血液黏稠度、抗血小板聚集；铁元素能补血养血。有一位脑梗恢复期患者，老中医让他每日食用黑木耳10克。患者坚持食用，血液黏稠度下降，体质逐渐恢复。木耳还含有丰富的膳食纤维。', lesson: '木耳凉血止血、润肺益胃。适合脑梗预防、缺铁性贫血。富含黑木耳多糖、铁、膳食纤维。腹泻者慎用', source: '《本草纲目》', relatedHerbs: ['木耳', '香菇', '山楂'], tags: ['凉血', '止血'] },
  { id: 245, herb: '银耳', title: '银耳滋阴润肺', summary: '银耳让咳嗽患者康复', story: '清代《本草纲目》记载：银耳滋阴润肺、养胃生津。银耳富含银耳多糖和胶质，能增强免疫力、滋阴润燥。有一位老人因肺阴不足，导致干咳少痰、口干咽燥。老中医让他每日食用银耳15克，煮粥或炖汤。患者坚持食用，干咳停止，嗓音也清亮了。银耳还含有丰富的维生素D和钙。', lesson: '银耳滋阴润肺、养胃生津。适合肺阴不足、干咳少痰。富含银耳多糖、胶质、维生素D。糖尿病者慎用', source: '《本草纲目》', relatedHerbs: ['银耳', '百合', '莲子'], tags: ['滋阴', '润肺'] },
  { id: 246, herb: '金针菇', title: '金针菇补肝益智', summary: '金针菇让记忆力减退患者康复', story: '清代《本草纲目拾遗》记载：金针菇补肝益智、健脑安神。金针菇富含赖氨酸和锌元素，能促进大脑发育、增强记忆力。有一位学生因学习压力大，出现记忆力减退、失眠。老中医让他每日食用金针菇100克。学生坚持食用，记忆力改善，睡眠也好了。金针菇还含有丰富的膳食纤维和维生素B1。', lesson: '金针菇补肝益智、健脑安神。适合记忆力减退、失眠。富含赖氨酸、锌、维生素B1。脾胃虚寒者慎用', source: '《本草纲目拾遗》', relatedHerbs: ['金针菇', '核桃', '远志'], tags: ['补肝', '益智'] }
]




if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CONSTITUTIONS, CONSTITUTION_QUESTIONS, FOOD_DATABASE, RECIPES,
    FITNESS_WORKOUTS, SOLAR_TERMS, SYMPTOM_KEYWORDS, HERB_STORIES,
    getConstitutionById, calculateResult, getCurrentSolarTerm
  }
}
