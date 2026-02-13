export interface Message {
  id: string;
  content: string;
  source?: string;
  category: 'general' | 'elder' | 'friend' | 'colleague' | 'teacher';
  tags: string[];
}

export const messages: Message[] = [
  // ========== 通用类 (1-30) ==========
  {
    id: '1',
    content: '愿新的一年，如松之盛，似兰斯馨。',
    source: '取自《千字文》',
    category: 'general',
    tags: ['典雅', '祝愿']
  },
  {
    id: '2',
    content: '岁岁年年，万喜万般宜。',
    source: '古语',
    category: 'general',
    tags: ['简洁', '祝福']
  },
  {
    id: '3',
    content: '愿生活明朗，万物可爱。',
    source: '现代语',
    category: 'general',
    tags: ['生活', '温暖']
  },
  {
    id: '4',
    content: '且将新火试新茶，诗酒趁年华。',
    source: '苏轼《望江南》',
    category: 'general',
    tags: ['时光', '珍惜']
  },
  {
    id: '5',
    content: '山重水复疑无路，柳暗花明又一村。',
    source: '陆游《游山西村》',
    category: 'general',
    tags: ['希望', '坚韧']
  },
  {
    id: '6',
    content: '愿有岁月可回首，且以深情共白头。',
    source: '现代语',
    category: 'general',
    tags: ['爱情', '陪伴']
  },
  {
    id: '7',
    content: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',
    source: '苏轼《定风波》',
    category: 'general',
    tags: ['豁达', '从容']
  },
  {
    id: '8',
    content: '愿新年胜旧年，欢愉且胜意，万事皆可期。',
    source: '现代语',
    category: 'general',
    tags: ['新年', '期待']
  },
  {
    id: '9',
    content: '人间有味是清欢。',
    source: '苏轼《浣溪沙》',
    category: 'general',
    tags: ['生活', '平淡']
  },
  {
    id: '10',
    content: '春风得意马蹄疾，一日看尽长安花。',
    source: '孟郊《登科后》',
    category: 'general',
    tags: ['喜悦', '成功']
  },
  {
    id: '11',
    content: '愿所得皆所期，所失皆无碍。',
    source: '现代语',
    category: 'general',
    tags: ['豁达', '随缘']
  },
  {
    id: '12',
    content: '行到水穷处，坐看云起时。',
    source: '王维《终南别业》',
    category: 'general',
    tags: ['闲适', '淡然']
  },
  {
    id: '13',
    content: '愿日子如熹光，温柔又安详。',
    source: '现代语',
    category: 'general',
    tags: ['温暖', '宁静']
  },
  {
    id: '14',
    content: '海内存知己，天涯若比邻。',
    source: '王勃《送杜少府之任蜀州》',
    category: 'general',
    tags: ['友情', '距离']
  },
  {
    id: '15',
    content: '长风破浪会有时，直挂云帆济沧海。',
    source: '李白《行路难》',
    category: 'general',
    tags: ['志向', '勇气']
  },
  {
    id: '16',
    content: '愿时光不老，我们不散。',
    source: '现代语',
    category: 'general',
    tags: ['时光', '情谊']
  },
  {
    id: '17',
    content: '采菊东篱下，悠然见南山。',
    source: '陶渊明《饮酒》',
    category: 'general',
    tags: ['闲适', '自然']
  },
  {
    id: '18',
    content: '莫愁前路无知己，天下谁人不识君。',
    source: '高适《别董大》',
    category: 'general',
    tags: ['鼓励', '自信']
  },
  {
    id: '19',
    content: '千淘万漉虽辛苦，吹尽狂沙始到金。',
    source: '刘禹锡《浪淘沙》',
    category: 'general',
    tags: ['坚持', '成功']
  },
  {
    id: '20',
    content: '愿平安喜乐，诸事顺遂。',
    source: '古语',
    category: 'general',
    tags: ['平安', '祝福']
  },
  {
    id: '21',
    content: '落霞与孤鹜齐飞，秋水共长天一色。',
    source: '王勃《滕王阁序》',
    category: 'general',
    tags: ['意境', '壮美']
  },
  {
    id: '22',
    content: '愿眼里有光，心中有爱。',
    source: '现代语',
    category: 'general',
    tags: ['温暖', '希望']
  },
  {
    id: '23',
    content: '天生我材必有用，千金散尽还复来。',
    source: '李白《将进酒》',
    category: 'general',
    tags: ['自信', '豪迈']
  },
  {
    id: '24',
    content: '愿岁月静好，现世安稳。',
    source: '胡兰成',
    category: 'general',
    tags: ['宁静', '安稳']
  },
  {
    id: '25',
    content: '会当凌绝顶，一览众山小。',
    source: '杜甫《望岳》',
    category: 'general',
    tags: ['志向', '高远']
  },
  {
    id: '26',
    content: '愿你出走半生，归来仍是少年。',
    source: '现代语',
    category: 'general',
    tags: ['初心', '成长']
  },
  {
    id: '27',
    content: '疏影横斜水清浅，暗香浮动月黄昏。',
    source: '林逋《山园小梅》',
    category: 'general',
    tags: ['意境', '雅致']
  },
  {
    id: '28',
    content: '愿所有的美好，如期而至。',
    source: '现代语',
    category: 'general',
    tags: ['期待', '美好']
  },
  {
    id: '29',
    content: '不畏浮云遮望眼，自缘身在最高层。',
    source: '王安石《登飞来峰》',
    category: 'general',
    tags: ['远见', '坚定']
  },
  {
    id: '30',
    content: '愿你我都能被世界温柔以待。',
    source: '现代语',
    category: 'general',
    tags: ['温暖', '善意']
  },

  // ========== 长辈类 (31-55) ==========
  {
    id: '31',
    content: '愿君如南山之寿，不骞不崩；如松柏之茂，无不尔或承。',
    source: '《诗经·小雅》',
    category: 'elder',
    tags: ['长寿', '敬重']
  },
  {
    id: '32',
    content: '福如东海长流水，寿比南山不老松。',
    source: '传统祝寿语',
    category: 'elder',
    tags: ['长寿', '祝福']
  },
  {
    id: '33',
    content: '采菊东篱下，悠然见南山。愿心境恬淡，岁月静好。',
    source: '陶渊明《饮酒》',
    category: 'elder',
    tags: ['闲适', '淡然']
  },
  {
    id: '34',
    content: '年年岁岁身长健，负岁年年春草长。',
    source: '王洋《庚午岁伯氏生朝作乐府》',
    category: 'elder',
    tags: ['健康', '长寿']
  },
  {
    id: '35',
    content: '愿椿萱并茂，棠棣同馨。',
    source: '《庄子》',
    category: 'elder',
    tags: ['父母', '安康']
  },
  {
    id: '36',
    content: '老骥伏枥，志在千里；烈士暮年，壮心不已。',
    source: '曹操《龟虽寿》',
    category: 'elder',
    tags: ['壮志', '不老']
  },
  {
    id: '37',
    content: '愿身体康健，笑口常开。',
    source: '现代语',
    category: 'elder',
    tags: ['健康', '快乐']
  },
  {
    id: '38',
    content: '莫道桑榆晚，为霞尚满天。',
    source: '刘禹锡《酬乐天咏老见示》',
    category: 'elder',
    tags: ['乐观', '晚年']
  },
  {
    id: '39',
    content: '愿平安喜乐，福寿绵长。',
    source: '传统祝福语',
    category: 'elder',
    tags: ['平安', '福寿']
  },
  {
    id: '40',
    content: '鹤发童颜，精神矍铄。',
    source: '传统祝寿语',
    category: 'elder',
    tags: ['健康', '精神']
  },
  {
    id: '41',
    content: '愿儿孙绕膝，天伦之乐。',
    source: '现代语',
    category: 'elder',
    tags: ['家庭', '幸福']
  },
  {
    id: '42',
    content: '松龄长岁月，鹤语寄春秋。',
    source: '传统祝寿联',
    category: 'elder',
    tags: ['长寿', '高雅']
  },
  {
    id: '43',
    content: '愿心如明镜，身似浮云。',
    source: '禅语',
    category: 'elder',
    tags: ['心境', '超脱']
  },
  {
    id: '44',
    content: '春秋不老，古稀重新。',
    source: '传统祝寿语',
    category: 'elder',
    tags: ['长寿', '青春']
  },
  {
    id: '45',
    content: '愿食甘寝安，无忧无虑。',
    source: '古语',
    category: 'elder',
    tags: ['安康', '闲适']
  },
  {
    id: '46',
    content: '甲子重新如山如阜，春秋不老大德大年。',
    source: '传统祝寿联',
    category: 'elder',
    tags: ['寿辰', '大德']
  },
  {
    id: '47',
    content: '愿笑口常开，福寿双全。',
    source: '现代语',
    category: 'elder',
    tags: ['快乐', '福寿']
  },
  {
    id: '48',
    content: '云鹤千年寿，苍松万古春。',
    source: '传统祝寿联',
    category: 'elder',
    tags: ['长寿', '高洁']
  },
  {
    id: '49',
    content: '愿身心康泰，吉祥如意。',
    source: '传统祝福语',
    category: 'elder',
    tags: ['健康', '吉祥']
  },
  {
    id: '50',
    content: '瑶池喜晋千年酒，海屋欣添百岁筹。',
    source: '传统祝寿联',
    category: 'elder',
    tags: ['寿辰', '庆贺']
  },
  {
    id: '51',
    content: '愿晚景如春，幸福安康。',
    source: '现代语',
    category: 'elder',
    tags: ['晚年', '幸福']
  },
  {
    id: '52',
    content: '盛世常青树，百年不老松。',
    source: '传统祝寿语',
    category: 'elder',
    tags: ['长寿', '盛世']
  },
  {
    id: '53',
    content: '愿清心寡欲，颐养天年。',
    source: '古语',
    category: 'elder',
    tags: ['养生', '宁静']
  },
  {
    id: '54',
    content: '寿比南山松不老，福如东海水长流。',
    source: '传统祝寿语',
    category: 'elder',
    tags: ['长寿', '福泽']
  },
  {
    id: '55',
    content: '愿含饴弄孙，尽享天伦。',
    source: '现代语',
    category: 'elder',
    tags: ['家庭', '欢乐']
  },

  // ========== 友人类 (56-85) ==========
  {
    id: '56',
    content: '桃李春风一杯酒，江湖夜雨十年灯。愿故人安好，前程似锦。',
    source: '黄庭坚《寄黄几复》',
    category: 'friend',
    tags: ['友情', '思念']
  },
  {
    id: '57',
    content: '莫愁前路无知己，天下谁人不识君。愿前程似锦，友人遍天下。',
    source: '高适《别董大》',
    category: 'friend',
    tags: ['鼓励', '自信']
  },
  {
    id: '58',
    content: '海内存知己，天涯若比邻。愿新年诸事顺遂，情谊长存。',
    source: '王勃《送杜少府之任蜀州》',
    category: 'friend',
    tags: ['友情', '距离']
  },
  {
    id: '59',
    content: '且将新火试新茶，诗酒趁年华。愿把握当下，不负韶华。',
    source: '苏轼《望江南》',
    category: 'friend',
    tags: ['时光', '珍惜']
  },
  {
    id: '60',
    content: '愿我们历尽千帆，归来仍是少年。',
    source: '现代语',
    category: 'friend',
    tags: ['初心', '友谊']
  },
  {
    id: '61',
    content: '同是天涯沦落人，相逢何必曾相识。愿知音常在，温暖相伴。',
    source: '白居易《琵琶行》',
    category: 'friend',
    tags: ['知音', '温暖']
  },
  {
    id: '62',
    content: '愿友谊长存，岁月不老。',
    source: '现代语',
    category: 'friend',
    tags: ['友谊', '永恒']
  },
  {
    id: '63',
    content: '人生得一知己足矣，斯世当以同怀视之。',
    source: '鲁迅',
    category: 'friend',
    tags: ['知己', '珍贵']
  },
  {
    id: '64',
    content: '愿你我都能活成自己想要的模样。',
    source: '现代语',
    category: 'friend',
    tags: ['祝福', '成长']
  },
  {
    id: '65',
    content: '劝君更尽一杯酒，西出阳关无故人。愿珍重，再相逢。',
    source: '王维《送元二使安西》',
    category: 'friend',
    tags: ['离别', '珍重']
  },
  {
    id: '66',
    content: '愿我们的友谊，经得起时间的考验。',
    source: '现代语',
    category: 'friend',
    tags: ['友谊', '坚定']
  },
  {
    id: '67',
    content: '孤帆远影碧空尽，唯见长江天际流。愿前程远大，友谊长存。',
    source: '李白《黄鹤楼送孟浩然之广陵》',
    category: 'friend',
    tags: ['送别', '祝福']
  },
  {
    id: '68',
    content: '愿有趣有盼，无灾无难。',
    source: '现代语',
    category: 'friend',
    tags: ['祝福', '平安']
  },
  {
    id: '69',
    content: '洛阳亲友如相问，一片冰心在玉壶。愿赤诚之心，友谊长存。',
    source: '王昌龄《芙蓉楼送辛渐》',
    category: 'friend',
    tags: ['真诚', '友谊']
  },
  {
    id: '70',
    content: '愿你遍历山河，觉得人间值得。',
    source: '现代语',
    category: 'friend',
    tags: ['旅行', '感悟']
  },
  {
    id: '71',
    content: '故人西辞黄鹤楼，烟花三月下扬州。愿前程似锦，一路繁花。',
    source: '李白《黄鹤楼送孟浩然之广陵》',
    category: 'friend',
    tags: ['送别', '美好']
  },
  {
    id: '72',
    content: '愿我们都能在各自的世界里闪闪发光。',
    source: '现代语',
    category: 'friend',
    tags: ['祝福', '闪耀']
  },
  {
    id: '73',
    content: '青山一道同云雨，明月何曾是两乡。愿虽远隔，心意相通。',
    source: '王昌龄《送柴侍御》',
    category: 'friend',
    tags: ['距离', '心意']
  },
  {
    id: '74',
    content: '愿你三冬暖，愿你春不寒。',
    source: '现代语',
    category: 'friend',
    tags: ['温暖', '关怀']
  },
  {
    id: '75',
    content: '浮云游子意，落日故人情。愿友谊如酒，越久越醇。',
    source: '李白《送友人》',
    category: 'friend',
    tags: ['友谊', '醇厚']
  },
  {
    id: '76',
    content: '愿你的每一天，都如阳光般明媚。',
    source: '现代语',
    category: 'friend',
    tags: ['阳光', '美好']
  },
  {
    id: '77',
    content: '相逢意气为君饮，系马高楼垂柳边。愿少年意气，永不消磨。',
    source: '王维《少年行》',
    category: 'friend',
    tags: ['少年', '意气']
  },
  {
    id: '78',
    content: '愿我们都能在彼此的生命里，留下温暖的印记。',
    source: '现代语',
    category: 'friend',
    tags: ['温暖', '印记']
  },
  {
    id: '79',
    content: '我寄愁心与明月，随风直到夜郎西。愿思念可达，友谊长存。',
    source: '李白《闻王昌龄左迁龙标遥有此寄》',
    category: 'friend',
    tags: ['思念', '友谊']
  },
  {
    id: '80',
    content: '愿你眼里有星辰，心中有山海。',
    source: '现代语',
    category: 'friend',
    tags: ['梦想', '远方']
  },
  {
    id: '81',
    content: '数人世相逢，百年欢笑，能得几回又。',
    source: '何梦桂《摸鱼儿》',
    category: 'friend',
    tags: ['相逢', '珍惜']
  },
  {
    id: '82',
    content: '愿我们的故事，永远未完待续。',
    source: '现代语',
    category: 'friend',
    tags: ['故事', '延续']
  },
  {
    id: '83',
    content: '江南无所有，聊赠一枝春。愿以春意，赠予友人。',
    source: '陆凯《赠范晔诗》',
    category: 'friend',
    tags: ['赠礼', '春意']
  },
  {
    id: '84',
    content: '愿你被这个世界温柔以待，也愿你温柔以待这个世界。',
    source: '现代语',
    category: 'friend',
    tags: ['温柔', '善意']
  },
  {
    id: '85',
    content: '故人入我梦，明我长相忆。愿友谊长存，思念不绝。',
    source: '杜甫《梦李白》',
    category: 'friend',
    tags: ['思念', '友谊']
  },

  // ========== 同僚类 (86-110) ==========
  {
    id: '86',
    content: '春风得意马蹄疾，一日看尽长安花。愿事业蒸蒸日上，步步高升。',
    source: '孟郊《登科后》',
    category: 'colleague',
    tags: ['事业', '进取']
  },
  {
    id: '87',
    content: '长风破浪会有时，直挂云帆济沧海。愿新年乘风破浪，再创辉煌。',
    source: '李白《行路难》',
    category: 'colleague',
    tags: ['事业', '勇气']
  },
  {
    id: '88',
    content: '千淘万漉虽辛苦，吹尽狂沙始到金。愿努力终有回报，梦想成真。',
    source: '刘禹锡《浪淘沙》',
    category: 'colleague',
    tags: ['坚持', '成功']
  },
  {
    id: '89',
    content: '愿工作顺利，前程似锦。',
    source: '现代语',
    category: 'colleague',
    tags: ['工作', '祝福']
  },
  {
    id: '90',
    content: '会当凌绝顶，一览众山小。愿志存高远，勇攀高峰。',
    source: '杜甫《望岳》',
    category: 'colleague',
    tags: ['志向', '高峰']
  },
  {
    id: '91',
    content: '愿事业如日中天，财源广进。',
    source: '现代语',
    category: 'colleague',
    tags: ['事业', '财运']
  },
  {
    id: '92',
    content: '不畏浮云遮望眼，自缘身在最高层。愿高瞻远瞩，成就非凡。',
    source: '王安石《登飞来峰》',
    category: 'colleague',
    tags: ['远见', '成就']
  },
  {
    id: '93',
    content: '愿团队协作，共创佳绩。',
    source: '现代语',
    category: 'colleague',
    tags: ['团队', '合作']
  },
  {
    id: '94',
    content: '天生我材必有用，千金散尽还复来。愿自信前行，大展宏图。',
    source: '李白《将进酒》',
    category: 'colleague',
    tags: ['自信', '宏图']
  },
  {
    id: '95',
    content: '愿步步高升，平步青云。',
    source: '古语',
    category: 'colleague',
    tags: ['晋升', '顺利']
  },
  {
    id: '96',
    content: '宝剑锋从磨砺出，梅花香自苦寒来。愿历经磨砺，终成大器。',
    source: '古诗',
    category: 'colleague',
    tags: ['磨砺', '成就']
  },
  {
    id: '97',
    content: '愿项目顺利，业绩长虹。',
    source: '现代语',
    category: 'colleague',
    tags: ['项目', '业绩']
  },
  {
    id: '98',
    content: '欲穷千里目，更上一层楼。愿不断进取，更上层楼。',
    source: '王之涣《登鹳雀楼》',
    category: 'colleague',
    tags: ['进取', '提升']
  },
  {
    id: '99',
    content: '愿职场顺遂，左右逢源。',
    source: '现代语',
    category: 'colleague',
    tags: ['职场', '顺利']
  },
  {
    id: '100',
    content: '业精于勤，荒于嬉；行成于思，毁于随。愿勤勉精进，事业有成。',
    source: '韩愈《进学解》',
    category: 'colleague',
    tags: ['勤勉', '精进']
  },
  {
    id: '101',
    content: '愿新年新气象，事业开新局。',
    source: '现代语',
    category: 'colleague',
    tags: ['新年', '开局']
  },
  {
    id: '102',
    content: '博观而约取，厚积而薄发。愿积累深厚，一鸣惊人。',
    source: '苏轼《稼说送张琥》',
    category: 'colleague',
    tags: ['积累', '爆发']
  },
  {
    id: '103',
    content: '愿合作愉快，互利共赢。',
    source: '现代语',
    category: 'colleague',
    tags: ['合作', '共赢']
  },
  {
    id: '104',
    content: '路漫漫其修远兮，吾将上下而求索。愿不断探索，勇攀高峰。',
    source: '屈原《离骚》',
    category: 'colleague',
    tags: ['探索', '进取']
  },
  {
    id: '105',
    content: '愿才华得展，抱负得偿。',
    source: '现代语',
    category: 'colleague',
    tags: ['才华', '抱负']
  },
  {
    id: '106',
    content: '锲而舍之，朽木不折；锲而不舍，金石可镂。愿坚持不懈，终有所成。',
    source: '荀子《劝学》',
    category: 'colleague',
    tags: ['坚持', '成功']
  },
  {
    id: '107',
    content: '愿事业腾飞，再创辉煌。',
    source: '现代语',
    category: 'colleague',
    tags: ['事业', '辉煌']
  },
  {
    id: '108',
    content: '沉舟侧畔千帆过，病树前头万木春。愿困境已过，前程似锦。',
    source: '刘禹锡《酬乐天扬州初逢席上见赠》',
    category: 'colleague',
    tags: ['困境', '新生']
  },
  {
    id: '109',
    content: '愿工作顺利，心想事成。',
    source: '现代语',
    category: 'colleague',
    tags: ['工作', '顺心']
  },
  {
    id: '110',
    content: '纸上得来终觉浅，绝知此事要躬行。愿知行合一，成就非凡。',
    source: '陆游《冬夜读书示子聿》',
    category: 'colleague',
    tags: ['实践', '成就']
  },

  // ========== 恩师类 (111-128) ==========
  {
    id: '111',
    content: '师恩如山，铭记于心。愿先生身体康健，桃李满天下。',
    source: '原创',
    category: 'teacher',
    tags: ['感恩', '敬重']
  },
  {
    id: '112',
    content: '春蚕到死丝方尽，蜡炬成灰泪始干。愿恩师新年安康，万事如意。',
    source: '李商隐《无题》',
    category: 'teacher',
    tags: ['感恩', '奉献']
  },
  {
    id: '113',
    content: '落红不是无情物，化作春泥更护花。愿奉献之心，温暖人间。',
    source: '龚自珍《己亥杂诗》',
    category: 'teacher',
    tags: ['奉献', '传承']
  },
  {
    id: '114',
    content: '桃李不言，下自成蹊。愿恩师桃李芬芳，誉满天下。',
    source: '《史记》',
    category: 'teacher',
    tags: ['桃李', '声誉']
  },
  {
    id: '115',
    content: '一日为师，终身为父。愿恩师福寿安康。',
    source: '《鸣沙石室佚书》',
    category: 'teacher',
    tags: ['尊师', '感恩']
  },
  {
    id: '116',
    content: '随风潜入夜，润物细无声。愿恩师教诲，永铭于心。',
    source: '杜甫《春夜喜雨》',
    category: 'teacher',
    tags: ['教诲', '感恩']
  },
  {
    id: '117',
    content: '新竹高于旧竹枝，全凭老干为扶持。愿恩师身体康健，春晖永驻。',
    source: '郑燮《新竹》',
    category: 'teacher',
    tags: ['传承', '感恩']
  },
  {
    id: '118',
    content: '令公桃李满天下，何用堂前更种花。愿恩师誉满天下，幸福安康。',
    source: '白居易《奉和令公绿野堂种花》',
    category: 'teacher',
    tags: ['桃李', '幸福']
  },
  {
    id: '119',
    content: '师者，所以传道受业解惑也。愿恩师新年顺遂，万事如意。',
    source: '韩愈《师说》',
    category: 'teacher',
    tags: ['师德', '祝福']
  },
  {
    id: '120',
    content: '采得百花成蜜后，为谁辛苦为谁甜。愿恩师辛劳有报，幸福安康。',
    source: '罗隐《蜂》',
    category: 'teacher',
    tags: ['辛劳', '回报']
  },
  {
    id: '121',
    content: '三尺讲台，三寸舌，三寸笔，三千桃李。愿恩师节日快乐，身体健康。',
    source: '现代语',
    category: 'teacher',
    tags: ['讲台', '感恩']
  },
  {
    id: '122',
    content: '玉壶存冰心，朱笔写师魂。愿恩师冰清玉洁，师德长存。',
    source: '现代语',
    category: 'teacher',
    tags: ['师德', '高洁']
  },
  {
    id: '123',
    content: '饮其流者怀其源，学其成时念吾师。愿恩师福泽绵长，幸福安康。',
    source: '古语',
    category: 'teacher',
    tags: ['思源', '感恩']
  },
  {
    id: '124',
    content: '半亩方塘长流水，呕心沥血育新苗。愿恩师桃李满园，春晖四方。',
    source: '现代语',
    category: 'teacher',
    tags: ['育人', '桃李']
  },
  {
    id: '125',
    content: '绿野堂开占物华，路人指道令公家。愿恩师德高望重，誉满天下。',
    source: '白居易《奉和令公绿野堂种花》',
    category: 'teacher',
    tags: ['德高', '望重']
  },
  {
    id: '126',
    content: '十年树木，百年树人。愿恩师育人功德，流芳百世。',
    source: '《管子》',
    category: 'teacher',
    tags: ['育人', '功德']
  },
  {
    id: '127',
    content: '仰之弥高，钻之弥坚。愿恩师学问精深，德高望重。',
    source: '《论语》',
    category: 'teacher',
    tags: ['学问', '德高']
  },
  {
    id: '128',
    content: '恩师掬取天池水，洒向人间育新苗。愿恩师新年顺遂，桃李芬芳。',
    source: '现代语',
    category: 'teacher',
    tags: ['育人', '祝福']
  }
];

export const categories = [
  { id: 'general', name: '通用', icon: 'scroll' },
  { id: 'elder', name: '长辈', icon: 'bamboo' },
  { id: 'friend', name: '友人', icon: 'fan' },
  { id: 'colleague', name: '同僚', icon: 'mountain' },
  { id: 'teacher', name: '恩师', icon: 'plum' }
] as const;

export type CategoryId = typeof categories[number]['id'];
