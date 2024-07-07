/**
 * @description 探头列表
 */
export const probes: any = {
  zh: [
    {
      to: "/probes/1",
      align: "left",
      title: "HL-OPG400 Mini（高精版）",
      image: "images/banner1.png",
      features: [
        {
          name: "产品优势",
          description: "传输效率快、通用互换性强、体积小、高精度（≤1μm）",
          icon: "i-heroicons-hand-thumb-up",
        },
        {
          name: "启动方式",
          description: "通电代码启动/接收两种红外线调制信号启动测头",
          icon: "i-heroicons-play",
        },
        {
          name: "信号传输",
          description: "测头与接收器采用红外线编码信号传输，抗干扰与震动；",
          icon: "i-heroicons-rss-solid",
        },
        {
          name: "使用领域",
          description:
            "适用于各种系统主轴结构加工中心及各种产品（如：手机，电脑，电子，通迅，汽车，模具等）",
          icon: "i-heroicons-globe-alt",
        },
      ],
    },
    {
      to: "/probes/2",
      align: "right",
      title: "BHL-OPG400mS（普通版）",
      image: "images/banner2.png",
      features: [
        {
          name: "产品优势",
          description: "传输效率快，通用互换性强，体积小，高精度（≤1μm）",
          icon: "i-heroicons-hand-thumb-up",
        },
        {
          name: "启动方式",
          description: "通电代码启动/接收两种红外线调制信号启动测头",
          icon: "i-heroicons-play",
        },
        {
          name: "信号传输",
          description: "测头与接收器采用红外线编码信号传输，抗干扰",
          icon: "i-heroicons-rss-solid",
        },
        {
          name: "使用领域",
          description:
            "适用于各种系统主轴结构加工中心及各种产品（如：手机，电脑，电子，通迅，汽车，模具等）",
          icon: "i-heroicons-globe-alt",
        },
      ],
    },
  ],

  en: [
    {
      to: "/probes/1",
      align: "left",
      title: "HL-OPG400 Mini (high precision)",
      image: "images/banner1.png",
      features: [
        {
          name: "Product Superiority",
          description:
            "It features a fast transmission efficiency, a powerful compatibility and interchangeability, a small size and a high precision (≤1μm)",
          icon: "i-heroicons-hand-thumb-up",
        },
        {
          name: "Start Up Mode",
          description:
            "The probe is started in two ways including using power-on code and receiving two kinds of infrared modulating signals",
          icon: "i-heroicons-play",
        },
        {
          name: "Signal Transmission",
          description:
            "Infrared coding is used to transmit signals between the probe and the receiver. It is resistant to interference and vibration",
          icon: "i-heroicons-rss-solid",
        },
        {
          name: "Field Of Use",
          description:
            "It can be used in various system spindle processing centers and various products (such as mobile phones, computers, electronics, communication, automobiles and molds)",
          icon: "i-heroicons-globe-alt",
        },
      ],
    },
    {
      to: "/probes/2",
      align: "right",
      title: "BHL-OPG400mS (general)",
      image: "images/banner2.png",
      features: [
        {
          name: "Product Superiority",
          description:
            "It features a fast transmission efficiency, a powerful compatibility and interchangeability, a small size and a high precision (≤1μm)",
          icon: "i-heroicons-hand-thumb-up",
        },
        {
          name: "Start Up Mode",
          description:
            "The probe is started in two ways including using power-on code and receiving two kinds of infrared modulating signals",
          icon: "i-heroicons-play",
        },
        {
          name: "Signal Transmission",
          description:
            "Infrared coding is used to transmit signals between the probe and the receiver. It is resistant to interference",
          icon: "i-heroicons-rss-solid",
        },
        {
          name: "Field Of Use",
          description:
            "It can be used in various system spindle processing centers and various products (such as mobile phones, computers, electronics, communication, automobiles and molds)",
          icon: "i-heroicons-globe-alt",
        },
      ],
    },
  ],
};

//
/**
 * @description 探头产品详情
 */
export const introduces: any = [
  {
    // HL-OPG400 Mini高精版
    zh: [
      {
        title: "功能",
        features: [
          "提升效率，实现自动分中找正及设定偏置值",
          "时时在机测量，二维尺寸测量及自动补尝（内外孔/矩形/位置等）",
          "可靠合理使用机床，对机床精度效验",
          "自动深度测量，有效补正刀具长度提升良率减少接痕断差",
          "安全节能，实现电池报警自动暂停/自动休眠",
          "日常抗碰击能力",
        ],
      },
      {
        title: "特点",
        features: [
          "传输效率快，通用互换性强，体积小，高精度（≤1μm）",
          "通电代码启动/接收两种红外线调制信号启动测头",
          "测头与接收器采用红外线编码信号传输，抗干扰与震动",
          "使用范围广，适用于各种系统主轴结构加工中心及各种产品（如：手机，电脑，电子，通迅，汽车，模具等）",
        ],
      },
      {
        title: "参数",
        features: [
          "测针触发方向：±X, ±Y, +Z ",
          "测针各向触发保护行程：XY±15°，Z+5mm",
          "测针各向触发力：XY=1.0N,Z=8.0N.",
          "cnc机床实际测量任意单向触发重复（2σ）精度：≤10μm",
          "红外线信号传输范围360°：≤5m",
          "电池寿命测头连续1000万次可正常使用",
          "防护等级IP67",
        ],
      },
    ],
    en: [
      {
        title: "Function",
        features: [
          "Improving efficiency, automatically achieving centering and alignment, and setting deviation value",
          "Achieving on-machine measurement, 2D dimensional measurement and automatic compensation in real time (inner and outer bore/ rectangle/ position)",
          "Achieving a reliable and reasonable use of lathe, and calibrating the precision of lathe.",
          "Automatically measuring the depth, effectively correcting the tool length, improving the yield and reducing lapping defect mismatch",
          "Featuring a high safety and energy saving, and realizing auto pause/ auto sleep in case of the battery alarm",
          "6.Routine collision resistance. ",
        ],
      },
      {
        title: "Features",
        features: [
          "It features a fast transmission efficiency, a powerful compatibility and interchangeability, a small size and a high precision (≤1μm)",
          "Probe start-up mode: The probe is started in two ways including using power-on code and receiving two kinds of infrared modulating signals",
          "Infrared coding is used to transmit signals between the probe and the receiver. It is resistant to interference and vibration",
          "4.Being widely applicable, it can be used in various system spindle processing centers and various products (such as mobile phones, computers, electronics, communication, automobiles and molds)",
        ],
      },
      {
        title: "Parameters",
        features: [
          "Measuring-pin triggering direction: ±X, ±Y, +Z",
          "Protection stroke of the measuring pin triggering in all directions: XY±15°, Z+5mm",
          "Triggering force for the measuring pin in all directions: XY=1.0N, Z=8.0N",
          "Repeated (2σ) precision for arbitrary one-way triggering of CNC lathe in actual measurement: ≤ 7μm",
          "Transmission range of infrared signals in 360 degrees: ≤5m",
          "Battery life: The probe can function normally for consecutive 10 million times",
          "Protection grade: IP68.",
        ],
      },
    ],
  },
  {
    //   BHL-OPG400mS 普通版
    zh: [
      {
        title: "功能",
        features: [
          "提升效率，实现自动分中找正及设定偏置值；",
          "时时在机测量，二维尺寸测量及自动补尝（内外孔/矩形/位置等）；",
          "可靠合理使用机床，对机床精度效验；",
          "自动深度测量，有效补正刀具长度提升良率减少接痕断差；",
          "安全节能，实现电池报警自动暂停/自动休眠；",
          "日常抗碰击能力。",
        ],
      },
      {
        title: "特点",
        features: [
          "传输效率快，通用互换性强，体积小，高精度（≤1μm）",
          "通电代码启动/接收两种红外线调制信号启动测头；",
          "测头与接收器采用红外线编码信号传输，抗干扰；",
          "使用范围广，适用于各种系统主轴结构加工中心及各种产品（如：手机，电脑，电子，通迅，汽车，模具等）",
        ],
      },
      {
        title: "参数",
        features: [
          "测针触发方向：±X, ±Y, +Z .",
          "测针各向触发保护行程：XY±15°，Z+5mm.",
          "测针各向触发力：XY=1.0N,Z=8.0N.",
          "cnc机床实际测量任意单向触发重复（2σ）精度：≤10μm.",
          "红外线信号传输范围360°：≤5m.",
          "电池寿命测头连续1000万次可正常使用。",
          "防护等级IP67",
        ],
      },
    ],
    en: [
      {
        title: "Function",
        features: [
          "Improving efficiency, automatically achieving centering and alignment, and setting deviation value",
          "Achieving on-machine measurement, 2D dimensional measurement and automatic compensation in real time (inner and outer bore/ rectangle/ position)",
          "Achieving a reliable and reasonable use of lathe, and calibrating the precision of lathe",
          "Automatically measuring the depth, effectively correcting the tool length, improving the yield and reducing lapping defect mismatch",
          "Featuring a high safety and energy saving, and realizing auto pause/ auto sleep in case of the battery alarm",
          "Routine collision resistance.",
        ],
      },
      {
        title: "Features",
        features: [
          "t features a fast transmission efficiency, a powerful compatibility and interchangeability, a small size and a high precision (≤1μm)",
          "Probe start-up mode: The probe is started in two ways including using power-on code and receiving two kinds of infrared modulating signals",
          " Infrared coding is used to transmit signals between the probe and the receiver. It is resistant to interference",
          "Being widely applicable, it can be used in various system spindle processing centers and various products (such as mobile phones, computers, electronics, communication, automobiles and molds)",
        ],
      },
      {
        title: "Parameters",
        features: [
          "Measuring-pin triggering direction: ±X, ±Y, +Z",
          "Protection stroke of the measuring pin triggering in all directions: XY±15°, Z+5mm",
          "Triggering force for the measuring pin in all directions: XY=1.0N, Z=8.0N",
          " Repeated (2σ) precision for arbitrary one-way triggering of CNC lathe in actual measurement: ≤10μm",
          "Transmission range of infrared signals in 360 degrees: ≤5m",
          "Battery life: The probe can function normally for consecutive 10 million times",
          "Protection grade: IP67",
        ],
      },
    ],
  },
];

export const compares: any = {
  zh: {
    columns: [
      {
        key: "contrastItem",
        label: "对比项目",
      },
      {
        key: "competingBrand",
        label: "主要竞争品牌(DS )",
      },
      {
        key: "bhl",
        label: "BHL测头",
      },
      {
        key: "result",
        label: "结果",
      },
    ],
    items: [
      {
        contrastItem: "精度",
        competingBrand: "≤0.001mm",
        bhl: "≤0.001mm",
        result: { value: "相同" },
      },
      {
        contrastItem: "测量速度",
        competingBrand: "11m/min",
        bhl: "9m/min（升级款更快）",
        result: { value: "相同" },
      },
      {
        contrastItem: "传输方式",
        competingBrand: "红外线",
        bhl: "红外线",
        result: { value: "相同" },
      },
      {
        contrastItem: "传输开关",
        competingBrand: "手动-M码启动/关闭",
        bhl: "自动（节能省电）",
        result: { value: "BHL优于DS", class: "text-red-500" },
      },
      {
        contrastItem: "电池寿命",
        competingBrand: "90天",
        bhl: "≧120天",
        result: { value: "BHL优于DS", class: "text-red-500" },
      },
      {
        contrastItem: "探头开关",
        competingBrand: "需要",
        bhl: "自动",
        result: { value: "BHL优于DS", class: "text-red-500" },
      },
      {
        contrastItem: "系统信号发射角度",
        competingBrand: "120度",
        bhl: "120度",
        result: { value: "相同" },
      },

      {
        contrastItem: "电池型号",
        competingBrand: "通用",
        bhl: "通用",
        result: { value: "相同" },
      },
      {
        contrastItem: "传输距离",
        competingBrand: "5米",
        bhl: "2~5米可自行控制（可防干扰",
        result: { value: "BHL优于DS", class: "text-red-500" },
      },
      {
        contrastItem: "产品寿命",
        competingBrand: "≧1000万次",
        bhl: "≧1000万次",
        result: { value: "相同" },
      },
      {
        contrastItem: "其它",
        competingBrand: "相同",
        bhl: "相同",
        result: { value: "相同" },
      },
    ],
  },
  en: {
    columns: [
      {
        key: "contrastItem",
        label: "Items for Comparison",
      },
      {
        key: "competingBrand",
        label: "Major Competing Brand (DS)",
      },
      {
        key: "bhl",
        label: "BHL Probe",
      },
      {
        key: "result",
        label: "Result",
      },
    ],
    items: [
      {
        contrastItem: "Precision",
        competingBrand: "≤0.001mm",
        bhl: "≤0.001mm",
        result: { value: "Same" },
      },
      {
        contrastItem: "Measuring speed",
        competingBrand: "11m/min",
        bhl: "9 m/min (The upgraded version is faster.)",
        result: { value: "Same" },
      },
      {
        contrastItem: "Transmission mode",
        competingBrand: "Infrared",
        bhl: "Infrared",
        result: { value: "Same" },
      },
      {
        contrastItem: "Transmission switch",
        competingBrand: "Manual - M code start / shut",
        bhl: "Automatic (energy-saving and power-saving)",
        result: { value: "BHL better than DS", class: "text-red-500" },
      },
      {
        contrastItem: "Battery life",
        competingBrand: "90 days",
        bhl: "≧120 days",
        result: { value: "BHL better than DS", class: "text-red-500" },
      },
      {
        contrastItem: "Probe switch",
        competingBrand: "Needed",
        bhl: "Automatic",
        result: { value: "BHL better than DS", class: "text-red-500" },
      },
      {
        contrastItem: "Signal emission angle of the system",
        competingBrand: "120 degree",
        bhl: "120 degree",
        result: { value: "Same" },
      },

      {
        contrastItem: "Battery model",
        competingBrand: "Universal",
        bhl: "Universal",
        result: { value: "Same" },
      },
      {
        contrastItem: "Transmission distance",
        competingBrand: "5m",
        bhl: "Self-controlled within 2 to 5 meters (anti-interference)",
        result: { value: "BHL better than DS", class: "text-red-500" },
      },
      {
        contrastItem: "Product life",
        competingBrand: "≧10 million times",
        bhl: "≧10 million times",
        result: { value: "Same" },
      },
      {
        contrastItem: "Others",
        competingBrand: "Same",
        bhl: "Same",
        result: { value: "Same" },
      },
    ],
  },
};

export const attachments: any = {
  zh: {
    columns: [
      {
        key: "name",
        label: "名称",
      },
      {
        key: "diameter",
        label: "测球直径（mm）",
      },
      {
        key: "materials",
        label: "测杆材料",
      },
      {
        key: "totalLength",
        label: "总长度（mm）",
      },
      {
        key: "effectiveLength",
        label: "有效长度(mm)",
      },
    ],
    items: [
      {
        name: "直测针",
        diameter: "1.0红宝石",
        materials: "硬质合金",
        totalLength: "20",
        effectiveLength: "18",
      },
      {
        name: "直测针",
        diameter: "2.0红宝石",
        materials: "硬质合金",
        totalLength: "20",
        effectiveLength: "18",
      },
      {
        name: "直测针",
        diameter: "5.0红宝石",
        materials: "不锈钢",
        totalLength: "50/70/90",
        effectiveLength: "35/60/80",
      },
      {
        name: "直测针",
        diameter: "6.0红宝石",
        materials: "不锈钢",
        totalLength: "100",
        effectiveLength: "85",
      },
      {
        name: "柱形测针",
        diameter: "1.0",
        materials: "硬质合金",
        totalLength: "20",
        effectiveLength: "10",
      },
      {
        name: "柱形测针",
        diameter: "3.0",
        materials: "硬质合金",
        totalLength: "30",
        effectiveLength: "20",
      },
      {
        name: "加长杆",
        diameter: "--",
        materials: "陶瓷",
        totalLength: "30/50/100",
        effectiveLength: "--",
      },
    ],
  },
  en: {
    columns: [
      {
        key: "name",
        label: "Name",
      },
      {
        key: "diameter",
        label: "Diameter of Measuring Ball (mm)",
      },
      {
        key: "materials",
        label: "Material of Measuring Bar ",
      },
      {
        key: "totalLength",
        label: "Total Length (mm)",
      },
      {
        key: "effectiveLength",
        label: "Effective Length (mm)",
      },
    ],
    items: [
      {
        name: "Straight measuring pin",
        diameter: "1.0 ruby",
        materials: "Hard alloy",
        totalLength: "20",
        effectiveLength: "18",
      },
      {
        name: "Straight measuring pin",
        diameter: "2.0 ruby",
        materials: "Hard alloy",
        totalLength: "20",
        effectiveLength: "18",
      },
      {
        name: "Straight measuring pin",
        diameter: "5.0 ruby",
        materials: "Stainless steel",
        totalLength: "50/70/90",
        effectiveLength: "35/60/80",
      },
      {
        name: "Straight measuring pin",
        diameter: "6.0 ruby",
        materials: "Stainless steel",
        totalLength: "100",
        effectiveLength: "85",
      },
      {
        name: "Column measuring pin",
        diameter: "1.0",
        materials: "Hard alloy",
        totalLength: "20",
        effectiveLength: "10",
      },
      {
        name: "Column measuring pin",
        diameter: "3.0",
        materials: "Hard alloy",
        totalLength: "30",
        effectiveLength: "20",
      },
      {
        name: "Lengthening bar",
        diameter: "--",
        materials: "Ceramics",
        totalLength: "30/50/100",
        effectiveLength: "--",
      },
    ],
  },
};
