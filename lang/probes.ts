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
