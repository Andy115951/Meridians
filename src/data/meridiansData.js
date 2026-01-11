// 中医经络腧穴数据 - 完整十四经系统
export const meridiansData = [
  // ==================== 手三阴经 ====================
  {
    id: 'lung',
    name: '手太阴肺经',
    chineseName: '手太阴肺经',
    color: '#8B8680',
    description: '肺经主呼吸之气，宣发卫气，通调水道。',
    path: {
      front: [
        { x: 125, y: 100 }, // 中府 LU1
        { x: 120, y: 130 }, // 腋下
        { x: 116, y: 165 }, // 尺泽 LU5
        { x: 111, y: 210 }, // 列缺 LU7
        { x: 105, y: 255 }, // 太渊 LU9
      ],
      back: []
    },
    points: [
      {
        id: 'LU1',
        name: '中府',
        pinyin: 'Zhongfu',
        englishName: '中府',
        x: 125,
        y: 100,
        view: 'front',
        major: true,
        location: '胸前壁外上方，云门穴下1寸，平第1肋间隙，距前正中线6寸。',
        functions: ['宣肺理气', '化痰止咳', '降逆平喘', '清热泻火'],
        indications: ['咳嗽', '气喘', '胸痛', '肩背痛']
      },
      {
        id: 'LU5',
        name: '尺泽',
        pinyin: 'Chize',
        englishName: '尺泽',
        x: 116,
        y: 165,
        view: 'front',
        major: true,
        location: '肘横纹中，肱二头肌腱桡侧凹陷处。',
        functions: ['清热和胃', '通络止痛', '止咳平喘', '舒筋利节'],
        indications: ['咳嗽', '咯血', '气喘', '肘臂挛痛']
      },
      {
        id: 'LU7',
        name: '列缺',
        pinyin: 'Lieque',
        englishName: '列缺',
        x: 111,
        y: 210,
        view: 'front',
        major: false,
        location: '前臂桡侧缘，桡骨茎突上方，腕横纹上1.5寸。',
        functions: ['宣肺解表', '通经活络', '通调任脉', '利水通淋'],
        indications: ['咳嗽', '气喘', '头痛', '项强']
      },
      {
        id: 'LU9',
        name: '太渊',
        pinyin: 'Taiyuan',
        englishName: '太渊',
        x: 105,
        y: 255,
        view: 'front',
        major: true,
        location: '腕掌侧横纹桡侧，桡动脉搏动处。',
        functions: ['止咳化痰', '通调血脉', '顺气平喘', '安神定志'],
        indications: ['咳嗽', '气喘', '咳血', '腕臂痛'],
        note: '肺经原穴，脉会太渊，为补要穴'
      }
    ]
  },
  {
    id: 'pericardium',
    name: '手厥阴心包经',
    chineseName: '手厥阴心包经',
    color: '#FF00FF',
    description: '心包经代心受邪，主脉所生病，保护心脏。',
    path: {
      front: [
        { x: 175, y: 105 }, // 天池
        { x: 178, y: 140 }, // 上臂
        { x: 182, y: 190 }, // 前臂
        { x: 183, y: 240 }, // 内关 PC6
        { x: 184, y: 258 }, // 劳宫 PC8
      ],
      back: []
    },
    points: [
      {
        id: 'PC6',
        name: '内关',
        pinyin: 'Neiguan',
        englishName: '内关',
        x: 183,
        y: 240,
        view: 'front',
        major: true,
        location: '前臂掌侧，当曲泽与大陵的连线上，腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间。',
        functions: ['宁心安神', '和胃止痛', '理气止痛', '镇惊止痉'],
        indications: ['心悸', '胸闷', '胃痛', '呕吐', '癫痫'],
        note: '心包经络穴，八脉交会穴之一'
      },
      {
        id: 'PC8',
        name: '劳宫',
        pinyin: 'Laogong',
        englishName: '劳宫',
        x: 184,
        y: 258,
        view: 'front',
        major: false,
        location: '手掌心，当第2、3掌骨之间偏于第3掌骨，握拳屈指时中指尖处。',
        functions: ['清心泻火', '开窍醒神', '凉血止血'],
        indications: ['口疮', '心烦', '癫狂', '呕吐'],
        note: '心包经荥穴'
      }
    ]
  },
  {
    id: 'heart',
    name: '手少阴心经',
    chineseName: '手少阴心经',
    color: '#C41E3A',
    description: '心主血脉，藏神，为君主之官。',
    path: {
      front: [
        { x: 180, y: 98 }, // 极泉 HT1
        { x: 185, y: 140 }, // 上臂
        { x: 190, y: 190 }, // 前臂
        { x: 192, y: 235 }, // 神门 HT7
      ],
      back: []
    },
    points: [
      {
        id: 'HT1',
        name: '极泉',
        pinyin: 'Jiquan',
        englishName: '极泉',
        x: 180,
        y: 98,
        view: 'front',
        major: false,
        location: '腋窝顶点，腋动脉搏动处。',
        functions: ['宽胸理气', '通经活络', '宁心安神'],
        indications: ['心痛', '心悸', '肩臂疼痛', '胁肋疼痛']
      },
      {
        id: 'HT7',
        name: '神门',
        pinyin: 'Shenmen',
        englishName: '神门',
        x: 192,
        y: 235,
        view: 'front',
        major: true,
        location: '腕部，腕掌侧横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处。',
        functions: ['宁心安神', '清心泻火', '理气止痛'],
        indications: ['失眠', '健忘', '心悸', '癫狂痫'],
        note: '心经原穴，安神要穴'
      }
    ]
  },

  // ==================== 手三阳经 ====================
  {
    id: 'largeIntestine',
    name: '手阳明大肠经',
    chineseName: '手阳明大肠经',
    color: '#E6E6FA',
    description: '大肠经主传化糟粕，主津液，与肺相表里。',
    path: {
      front: [
        { x: 95, y: 540 }, // 食指尖
        { x: 98, y: 480 }, // 手背
        { x: 102, y: 400 }, // 前臂
        { x: 108, y: 320 }, // 上臂
        { x: 115, y: 240 }, // 曲池 LI11
        { x: 125, y: 180 }, // 肩部
        { x: 135, y: 120 }, // 颈部
        { x: 145, y: 45 }, // 鼻旁
        { x: 148, y: 22 }, // 迎香 LI20
      ],
      back: []
    },
    points: [
      {
        id: 'LI4',
        name: '合谷',
        pinyin: 'Hegu',
        englishName: '合谷',
        x: 98,
        y: 500,
        view: 'front',
        major: true,
        location: '手背，第1、2掌骨间，当第2掌骨桡侧的中点处。',
        functions: ['镇痛止痉', '疏风解表', '通经活络', '清热解毒'],
        indications: ['头痛', '牙痛', '面瘫', '发热', '痛经'],
        note: '四总穴之一，"面口合谷收"，万能止痛穴'
      },
      {
        id: 'LI11',
        name: '曲池',
        pinyin: 'Quchi',
        englishName: '曲池',
        x: 115,
        y: 240,
        view: 'front',
        major: true,
        location: '肘横纹外侧端，屈肘时当尺泽与肱骨外上髁连线中点。',
        functions: ['清热解表', '调和气血', '消肿止痛'],
        indications: ['发热', '高血压', '荨麻疹', '肘痛'],
        note: '大肠经合穴'
      },
      {
        id: 'LI20',
        name: '迎香',
        pinyin: 'Yingxiang',
        englishName: '迎香',
        x: 148,
        y: 22,
        view: 'front',
        major: false,
        location: '鼻翼外缘中点旁，当鼻唇沟中。',
        functions: ['通鼻窍', '散风热'],
        indications: ['鼻炎', '鼻塞', '面瘫', '面痒']
      }
    ]
  },
  {
    id: 'sanjiao',
    name: '手少阳三焦经',
    chineseName: '手少阳三焦经',
    color: '#FFA07A',
    description: '三焦主通行元气，主决渎之官，水道出焉。',
    path: {
      front: [
        { x: 200, y: 550 }, // 无名指
        { x: 198, y: 480 }, // 手背
        { x: 195, y: 400 }, // 前臂
        { x: 193, y: 320 }, // 上臂
        { x: 185, y: 250 }, // 肩部
      ],
      back: [
        { x: 180, y: 200 }, // 颈部
        { x: 175, y: 150 }, // 耳后
        { x: 165, y: 30 }, // 眉梢 外关 TE5
      ]
    },
    points: [
      {
        id: 'TE5',
        name: '外关',
        pinyin: 'Waiguan',
        englishName: '外关',
        x: 196,
        y: 430,
        view: 'front',
        major: true,
        location: '前臂背侧，当阳池与肘尖的连线上，腕背横纹上2寸，尺骨与桡骨之间。',
        functions: ['解表祛风', '通经活络', '聪耳明目'],
        indications: ['头痛', '耳鸣', '肘臂屈伸不利', '感冒'],
        note: '三焦经络穴，八脉交会穴之一'
      }
    ]
  },
  {
    id: 'smallIntestine',
    name: '手太阳小肠经',
    chineseName: '手太阳小肠经',
    color: '#FF69B4',
    description: '小肠经主受盛化物，分清泌浊，与心相表里。',
    path: {
      front: [
        { x: 205, y: 550 }, // 小指
      ],
      back: [
        { x: 210, y: 500 }, // 手背
        { x: 215, y: 420 }, // 前臂
        { x: 218, y: 350 }, // 上臂
        { x: 215, y: 280 }, // 肩胛
        { x: 200, y: 200 }, // 颈部
        { x: 170, y: 25 }, // 耳周
      ]
    },
    points: [
      {
        id: 'SI3',
        name: '后溪',
        pinyin: 'Houxi',
        englishName: '后溪',
        x: 213,
        y: 505,
        view: 'front',
        major: true,
        location: '微握拳，第5指掌关节后尺侧，远侧掌横纹头赤白肉际处。',
        functions: ['舒经活络', '宁心安神', '清热解表'],
        indications: ['头项强痛', '腰背痛', '手指麻木', '癫狂痫'],
        note: '八脉交会穴之一，通督脉'
      },
      {
        id: 'SI19',
        name: '听宫',
        pinyin: 'Tinggong',
        englishName: '听宫',
        x: 168,
        y: 28,
        view: 'front',
        major: false,
        location: '面部，耳屏前，下颌骨髁状突的后方，张口时呈凹陷处。',
        functions: ['聪耳明目', '宁神止痛'],
        indications: ['耳鸣', '耳聋', '牙痛', '癫狂痫']
      }
    ]
  },

  // ==================== 足三阴经 ====================
  {
    id: 'spleen',
    name: '足太阴脾经',
    chineseName: '足太阴脾经',
    color: '#FFD700',
    description: '脾经主运化水谷，统血，为后天之本，气血生化之源。',
    path: {
      front: [
        { x: 88, y: 548 }, // 大脚趾
        { x: 90, y: 480 }, // 足内侧
        { x: 95, y: 420 }, // 小腿内侧 阴陵泉 SP9
        { x: 100, y: 380 }, // 血海 SP10
        { x: 115, y: 280 }, // 三阴交 SP6
        { x: 125, y: 200 }, // 腹部
        { x: 120, y: 120 }, // 胸部
      ],
      back: []
    },
    points: [
      {
        id: 'SP6',
        name: '三阴交',
        pinyin: 'Sanyinjiao',
        englishName: '三阴交',
        x: 115,
        y: 280,
        view: 'front',
        major: true,
        location: '小腿内侧，当足内踝尖上3寸，胫骨内侧缘后方。',
        functions: ['健脾益气', '调补肝肾', '调经止带'],
        indications: ['肠鸣腹胀', '腹泻', '月经不调', '不孕', '遗精'],
        note: '肝脾肾三经交会穴，妇科要穴'
      },
      {
        id: 'SP9',
        name: '阴陵泉',
        pinyin: 'Yinlingquan',
        englishName: '阴陵泉',
        x: 95,
        y: 420,
        view: 'front',
        major: false,
        location: '小腿内侧，当胫骨内侧髁下缘凹陷处。',
        functions: ['健脾渗湿', '通利三焦'],
        indications: ['腹胀', '水肿', '小便不利', '膝痛'],
        note: '脾经合穴，祛湿要穴'
      },
      {
        id: 'SP10',
        name: '血海',
        pinyin: 'Xuehai',
        englishName: '血海',
        x: 100,
        y: 380,
        view: 'front',
        major: false,
        location: '大腿内侧，髌底内侧端上2寸，当股四头肌内侧头的隆起处。',
        functions: ['活血化瘀', '补血养血', '清血凉血'],
        indications: ['月经不调', '荨麻疹', '湿疹', '膝痛'],
        note: '血病要穴'
      }
    ]
  },
  {
    id: 'kidney',
    name: '足少阴肾经',
    chineseName: '足少阴肾经',
    color: '#1E90FF',
    description: '肾藏精，主生长发育生殖，为先天之本。',
    path: {
      front: [
        { x: 60, y: 545 }, // 涌泉 KI1
      ],
      back: [
        { x: 138, y: 475 }, // 太溪 KI3
        { x: 142, y: 425 }, // 照海 KI6
        { x: 150, y: 285 }, // 命门附近
      ]
    },
    points: [
      {
        id: 'KI1',
        name: '涌泉',
        pinyin: 'Yongquan',
        englishName: '涌泉',
        x: 60,
        y: 545,
        view: 'front',
        major: true,
        location: '足底部，卷足时足前部凹陷处。',
        functions: ['滋阴益肾', '平肝息风', '开窍醒神'],
        indications: ['头晕', '头痛', '失眠', '高血压'],
        note: '肾经井穴，急救要穴'
      },
      {
        id: 'KI3',
        name: '太溪',
        pinyin: 'Taixi',
        englishName: '太溪',
        x: 138,
        y: 475,
        view: 'back',
        major: true,
        location: '足内侧，内踝后方与跟腱之间的凹陷处。',
        functions: ['滋补肾阴', '益肾壮阳', '强腰健膝'],
        indications: ['腰痛', '耳鸣', '遗尿', '失眠'],
        note: '肾经原穴，补肾要穴'
      },
      {
        id: 'KI6',
        name: '照海',
        pinyin: 'Zhaohai',
        englishName: '照海',
        x: 142,
        y: 425,
        view: 'back',
        major: false,
        location: '足内侧，内踝尖下方凹陷处。',
        functions: ['滋阴补肾', '清利下焦', '通经活络'],
        indications: ['咽喉干痛', '失眠', '痛经', '便秘'],
        note: '八脉交会穴，通阴跷脉'
      }
    ]
  },
  {
    id: 'liver',
    name: '足厥阴肝经',
    chineseName: '足厥阴肝经',
    color: '#228B22',
    description: '肝主疏泄，藏血，主筋，为将军之官。',
    path: {
      front: [
        { x: 78, y: 548 }, // 大趾
        { x: 82, y: 490 }, // 足背 太冲 LR3
        { x: 90, y: 420 }, // 小腿内侧
        { x: 105, y: 300 }, // 大腿内侧
        { x: 130, y: 180 }, // 腹部绕阴器
        { x: 140, y: 140 }, // 胁肋 期门 LR14
      ],
      back: []
    },
    points: [
      {
        id: 'LR3',
        name: '太冲',
        pinyin: 'Taichong',
        englishName: '太冲',
        x: 82,
        y: 490,
        view: 'front',
        major: true,
        location: '足背侧，当第1、2跖骨结合部之前凹陷处。',
        functions: ['疏肝解郁', '平肝息风', '调理气血'],
        indications: ['头痛', '眩晕', '失眠', '月经不调', '高血压'],
        note: '肝经原穴，消气要穴'
      },
      {
        id: 'LR14',
        name: '期门',
        pinyin: 'Qimen',
        englishName: '期门',
        x: 140,
        y: 140,
        view: 'front',
        major: false,
        location: '胸部，当乳头直下，第6肋间隙，前正中线旁开4寸。',
        functions: ['疏肝利胆', '调理脾胃'],
        indications: ['胁痛', '腹胀', '呕吐', '吞酸'],
        note: '肝经募穴'
      }
    ]
  },

  // ==================== 足三阳经 ====================
  {
    id: 'stomach',
    name: '足阳明胃经',
    chineseName: '足阳明胃经',
    color: '#D4A574',
    description: '胃经主受纳腐熟水谷，为气血生化之源。',
    path: {
      front: [
        { x: 150, y: 18 }, // 承泣 ST1
        { x: 150, y: 40 },
        { x: 150, y: 70 },
        { x: 142, y: 195 }, // 天枢 ST25
        { x: 138, y: 280 },
        { x: 130, y: 380 },
        { x: 118, y: 480 }, // 足三里 ST36
        { x: 105, y: 525 }, // 丰隆 ST40
      ],
      back: []
    },
    points: [
      {
        id: 'ST1',
        name: '承泣',
        pinyin: 'Chengqi',
        englishName: '承泣',
        x: 150,
        y: 18,
        view: 'front',
        major: true,
        location: '面部，瞳孔直下，当眼球与眶下缘之间。',
        functions: ['疏风清热', '明目止痛', '通经活络'],
        indications: ['目赤肿痛', '流泪', '夜盲', '眼睑瞤动']
      },
      {
        id: 'ST25',
        name: '天枢',
        pinyin: 'Tianshu',
        englishName: '天枢',
        x: 142,
        y: 195,
        view: 'front',
        major: true,
        location: '腹中部，距脐中2寸。',
        functions: ['调理脾胃', '理气健脾', '通经活络'],
        indications: ['腹痛', '腹胀', '便秘', '腹泻'],
        note: '大肠募穴'
      },
      {
        id: 'ST36',
        name: '足三里',
        pinyin: 'Zusanli',
        englishName: '足三里',
        x: 118,
        y: 480,
        view: 'front',
        major: true,
        location: '小腿前外侧，当犊鼻下3寸，距胫骨前缘一横指。',
        functions: ['健脾和胃', '扶正培元', '通经活络'],
        indications: ['胃痛', '呕吐', '腹胀', '消化不良'],
        note: '胃经合穴，保健要穴，有"长寿穴"之称'
      },
      {
        id: 'ST40',
        name: '丰隆',
        pinyin: 'Fenglong',
        englishName: '丰隆',
        x: 105,
        y: 525,
        view: 'front',
        major: false,
        location: '小腿前外侧，外踝尖上8寸，距胫骨前缘二横指。',
        functions: ['化痰止咳', '健脾利湿', '宁心安神'],
        indications: ['咳嗽痰多', '头痛', '水肿', '癫狂'],
        note: '络穴，善治痰疾'
      }
    ]
  },
  {
    id: 'gallbladder',
    name: '足少阳胆经',
    chineseName: '足少阳胆经',
    color: '#32CD32',
    description: '胆主决断，藏精汁，与肝相表里。',
    path: {
      front: [
        { x: 195, y: 500 }, // 第4趾
        { x: 190, y: 430 }, // 足背
        { x: 185, y: 350 }, // 小腿外侧 阳陵泉 GB34
        { x: 175, y: 250 }, // 大腿外侧
        { x: 160, y: 180 }, // 胁肋
      ],
      back: [
        { x: 145, y: 120 }, // 肩部
        { x: 135, y: 80 }, // 头侧部 风池 GB20
        { x: 155, y: 18 }, // 目外眦
      ]
    },
    points: [
      {
        id: 'GB20',
        name: '风池',
        pinyin: 'Fengchi',
        englishName: '风池',
        x: 135,
        y: 80,
        view: 'back',
        major: true,
        location: '项部，当枕骨之下，与风府相平，胸锁乳突肌与斜方肌上端之间的凹陷处。',
        functions: ['祛风解表', '清头明目', '舒筋活络'],
        indications: ['头痛', '感冒', '颈椎病', '目痛'],
        note: '治风要穴'
      },
      {
        id: 'GB34',
        name: '阳陵泉',
        pinyin: 'Yanglingquan',
        englishName: '阳陵泉',
        x: 185,
        y: 350,
        view: 'front',
        major: false,
        location: '小腿外侧，当腓骨头前下方凹陷处。',
        functions: ['疏肝利胆', '强筋健骨', '通经活络'],
        indications: ['胁痛', '口苦', '下肢痿痹', '黄疸'],
        note: '胆经合穴，筋会阳陵泉'
      }
    ]
  },
  {
    id: 'bladder',
    name: '足太阳膀胱经',
    chineseName: '足太阳膀胱经',
    color: '#00008B',
    description: '膀胱经主藏津液，气化功能，与肾相表里。',
    path: {
      front: [
        { x: 145, y: 18 }, // 睛明 BL1
      ],
      back: [
        { x: 145, y: 12 }, // 头顶
        { x: 142, y: 65 }, // 大椎附近
        { x: 130, y: 150 }, // 背部第一线 肾俞 BL23
        { x: 140, y: 150 }, // 背部第二线
        { x: 125, y: 250 }, // 腰部
        { x: 135, y: 250 },
        { x: 110, y: 400 }, // 腿后侧 委中 BL40
        { x: 120, y: 400 },
        { x: 100, y: 520 }, // 小脚趾
      ]
    },
    points: [
      {
        id: 'BL1',
        name: '睛明',
        pinyin: 'Jingming',
        englishName: '睛明',
        x: 145,
        y: 18,
        view: 'front',
        major: false,
        location: '目内眦旁0.1寸。',
        functions: ['明目', '疏风清热'],
        indications: ['目赤肿痛', '近视', '视物不明'],
        note: '手足太阳经交会穴'
      },
      {
        id: 'BL23',
        name: '肾俞',
        pinyin: 'Shenshu',
        englishName: '肾俞',
        x: 130,
        y: 285,
        view: 'back',
        major: true,
        location: '腰部，当第2腰椎棘突下，旁开1.5寸。',
        functions: ['补肾益气', '强腰利水', '聪耳明目'],
        indications: ['腰痛', '遗尿', '遗精', '阳痿'],
        note: '肾之背俞穴'
      },
      {
        id: 'BL40',
        name: '委中',
        pinyin: 'Weizhong',
        englishName: '委中',
        x: 115,
        y: 400,
        view: 'back',
        major: true,
        location: '腘横纹中点。',
        functions: ['舒筋通络', '凉血解毒', '活血祛瘀'],
        indications: ['腰背痛', '下肢痿痹', '腹痛', '吐泻'],
        note: '膀胱经合穴，四总穴之一，"腰背委中求"'
      }
    ]
  },

  // ==================== 奇经八脉 ====================
  {
    id: 'governor',
    name: '督脉',
    chineseName: '督脉',
    color: '#8B0000',
    description: '督脉为阳脉之海，总督一身阳经气血。',
    path: {
      front: [],
      back: [
        { x: 150, y: 5 }, // 百会 GV20
        { x: 150, y: 65 }, // 大椎 GV14
        { x: 150, y: 150 },
        { x: 150, y: 285 }, // 命门 GV4
        { x: 150, y: 400 },
        { x: 150, y: 520 },
      ]
    },
    points: [
      {
        id: 'GV20',
        name: '百会',
        pinyin: 'Baihui',
        englishName: '百会',
        x: 150,
        y: 5,
        view: 'back',
        major: true,
        location: '头部，当前发际正中直上5寸，或两耳尖连线中点。',
        functions: ['升阳举陷', '益气固脱', '醒脑开窍'],
        indications: ['头痛', '眩晕', '健忘', '脱肛'],
        note: '诸阳之会，为提神醒脑要穴'
      },
      {
        id: 'GV14',
        name: '大椎',
        pinyin: 'Dazhui',
        englishName: '大椎',
        x: 150,
        y: 65,
        view: 'back',
        major: true,
        location: '后正中线上，第7颈椎棘突下凹陷中。',
        functions: ['清热解表', '振奋阳气', '疏风散寒'],
        indications: ['热病', '感冒', '项强', '咳嗽'],
        note: '手足三阳经与督脉交会穴'
      },
      {
        id: 'GV4',
        name: '命门',
        pinyin: 'Mingmen',
        englishName: '命门',
        x: 150,
        y: 285,
        view: 'back',
        major: true,
        location: '腰部，后正中线上，第2腰椎棘突下凹陷中。',
        functions: ['温肾壮阳', '强腰固本', '纳气平喘'],
        indications: ['腰痛', '遗精', '遗尿', '阳痿'],
        note: '补肾壮阳要穴'
      }
    ]
  },
  {
    id: 'conception',
    name: '任脉',
    chineseName: '任脉',
    color: '#DC143C',
    description: '任脉为阴脉之海，总任一身阴经气血。',
    path: {
      front: [
        { x: 150, y: 8 },
        { x: 150, y: 70 },
        { x: 150, y: 190 }, // 中脘 CV12
        { x: 150, y: 360 }, // 气海 CV6
        { x: 150, y: 460 }, // 关元 CV4
      ],
      back: []
    },
    points: [
      {
        id: 'CV12',
        name: '中脘',
        pinyin: 'Zhongwan',
        englishName: '中脘',
        x: 150,
        y: 190,
        view: 'front',
        major: true,
        location: '上腹部，脐中上4寸，前正中线上。',
        functions: ['健脾和胃', '消食化滞', '降逆止呕'],
        indications: ['胃痛', '呕吐', '腹胀', '泄泻'],
        note: '胃募穴，八会穴之腑会'
      },
      {
        id: 'CV6',
        name: '气海',
        pinyin: 'Qihai',
        englishName: '气海',
        x: 150,
        y: 360,
        view: 'front',
        major: true,
        location: '下腹部，脐中下1.5寸，前正中线上。',
        functions: ['益气助阳', '调经固经', '行气止痛'],
        indications: ['虚脱', '乏力', '腹痛', '月经不调'],
        note: '肓之原穴，为保健要穴'
      },
      {
        id: 'CV4',
        name: '关元',
        pinyin: 'Guanyuan',
        englishName: '关元',
        x: 150,
        y: 460,
        view: 'front',
        major: true,
        location: '下腹部，脐中下3寸，前正中线上。',
        functions: ['培元固本', '温阳益气', '调理冲任'],
        indications: ['阳痿', '遗精', '遗尿', '虚劳'],
        note: '小肠募穴，足三阴经与任脉交会穴，为保健要穴'
      }
    ]
  }
];

export const bodyRegions = {
  head: { name: '头部', bounds: { x: 130, y: 0, width: 40, height: 70 } },
  neck: { name: '颈部', bounds: { x: 135, y: 70, width: 30, height: 30 } },
  chest: { name: '胸部', bounds: { x: 110, y: 100, width: 80, height: 100 } },
  abdomen: { name: '腹部', bounds: { x: 115, y: 200, width: 70, height: 120 } },
  arms: { name: '上肢', bounds: { x: 90, y: 100, width: 25, height: 200 } },
  legs: { name: '下肢', bounds: { x: 100, y: 320, width: 100, height: 230 } },
};
