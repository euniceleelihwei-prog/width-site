---
layout: layouts/page.njk
permalink: /zh/solutions/wallets/
title: 钱包地址风险提示与收款预警
description: 钱包转账前查收款地址、收款后查资金来源，提示制裁、恐怖融资、被冻结和黑客资金，减少用户被连带冻结；粘贴即查全链，安全能力还能做成付费会员。
breadcrumb:
  - { label: 解决方案, href: /solutions/ }
  - { label: 钱包 }
sections:
  - type: hero
    compact: true
    eyebrow: 解决方案 · 钱包
    title: 转账前提醒，<em>收款后预警</em>
    lead: 钱包用户手里主要是 USDT / USDC。在转账和收款这两个节点给用户一句准确的风险提示，是钱包能给用户最直接的保护。DART 按资金的时间顺序判断，提示又快又准，不吓跑正常用户。
    ctas:
      - { label: 免费接入, href: "/contact/?type=wallet" }
      - { label: 看产品手册, href: "https://width.info/docs" }
    note: 接入 DART，免费用到 2028 年 12 月 31 日
    visual: flow

  - type: problems
    eyebrow: 钱包的难题
    title: 钱包用户最常遇到的问题
    items:
      - problem: 用户把 U 打给了不该打的地址
        detail: 转出去就追不回来。收款方如果涉及制裁或恐怖融资，用户自己也可能被卷进去。
        solution: |
          - **转账前查收款地址**：命中制裁、恐怖融资、诈骗等公开来源时，在确认页给出提示
          - 制裁筛查 **1 秒内返回**，不卡用户转账
        proof: 某 Web3 社交平台把收款、提款检测做进付费会员，避免用户把 U 打给恐怖融资地址、触发反恐融资（CFT）风险。
      - problem: 收到问题资金，用户自己被连带冻结
        detail: 收到的 U 如果来自被发行方冻结、黑客或诈骗的资金，冻结可能落到用户头上，客诉最后落到钱包。
        solution: |
          - **收款后查资金来源**：按时间顺序向上游追，只有先到账、后转出的钱才算有关联
          - 来自发行方冻结、黑客、诈骗资金时及时提醒用户
        proof: 稳定币发行方冻结标签已在生产环境使用。
      - problem: 风险提示太多，用户不再相信
        detail: 每笔都弹警告，用户很快就会忽略；误报多了还会流失。
        solution: |
          - 时间上流不过来的路径直接排除，风险资金占比不够的不计入
          - 交易所对手方默认豁免，充提交易所的正常转账不会被误报
          - 四档结论，钱包可以只对高档位弹窗
        proof: 某支付公司实测：另一款工具判「中低风险、需复核」的地址，DART 判 0 分通过，那些风险资金在时间上根本流不过来。
      - problem: 用户不知道地址在哪条链、哪种币
        detail: 同一个 EVM 地址在每条链上都是同一个钱包，只查一条链说明不了问题。
        solution: |
          - **粘贴即查**：自动识别地址在哪些链、哪些币种上有流水，USDT、USDC 一次筛完
          - USDC 支持 CCTP 跨链续追
        proof: 覆盖 11 条链，一个地址一次筛完全部有流水的链和币种。

  - type: steps
    tone: alt
    eyebrow: DART 在钱包里的位置
    title: 两个节点，一句提示
    items:
      - { label: 转账前, title: 用户输入收款地址, text: 在确认页之前，调用地址筛查。 }
      - { label: 提示, title: 按档位提醒, text: 通过不打扰；高档位提示命中了哪类公开来源，由用户决定是否继续。 }
      - { label: 收款后, title: 新资金到账, text: 对到账交易做流入方向筛查，查资金来源。 }
      - { label: 预警, title: 来源有问题时提醒, text: 来自被冻结、黑客、诈骗资金时推送提醒，减少后续被连带冻结。 }

  - type: table
    eyebrow: 推荐配置
    title: 钱包常用接入方式
    head: [节点, 接口, 规则集, 跳数, 说明]
    rows:
      - [转账前查收款地址, "`POST /api/v3/screen/kya/multi`", AML KYA Default, 默认, 一次筛完该地址有流水的全部链和币种]
      - [收款后查资金来源, "`POST /api/v3/screen/kyt`", 内置 KYT-IN, 流入 3 跳（默认）, 按时间顺序向上游追]
      - [只做制裁拦截, "`POST /api/v3/screen/kya`", 制裁类规则集, 按需配置, 1 秒内返回]
      - [付费会员安全功能, 同上, 按会员等级配置, 按需加深, 每笔收付完整检测]
    note: 交易所对手方默认豁免；跳数、阈值和提示档位都可以按你的产品体验调整。

  - type: cases
    eyebrow: 案例
    title: 已经在用 DART 的钱包
    columns: 3
    items:
      - tag: 钱包
        metric: 7 万次 +
        metricLabel: 接入一周内的单日筛查量
        title: 某头部自托管钱包
        text: 一周内从开始调用到单日 7 万次以上。FinCEN 9714 命令发布当天，就能在充提中识别相关资金；跳数等参数按他们的风控要求单独配置。
      - tag: 社交 · 支付
        metric: 付费会员
        metricLabel: 安全能力变成收入
        title: 某 Web3 社交平台
        text: 把 DART 打包进付费会员增值服务：用户每一笔收款、提款都做完整检测，识别对手方地址风险，避免把 U 打给恐怖融资地址。
      - tag: 钱包
        title: 某自托管钱包
        text: 充值、提现自动筛查，规则集按自身风险偏好配置。
    note: 案例均匿名展示。数据来自 DART 生产环境，截至 2026 年 11 月。

  - type: cards
    tone: alt
    eyebrow: 相关产品
    title: 钱包会用到的能力
    columns: 3
    items:
      - { title: 地址筛查 KYA, text: 转账前查收款地址，一次筛完全部链和币种。, href: /products/kya/ }
      - { title: 交易筛查 KYT, text: 收款后查资金来源，按时间顺序向上游追。, href: /products/kyt/ }
      - { title: 制裁筛查, text: 官方名单 1 秒内返回，转账前检查不卡用户。, href: /products/sanctions/ }
      - { title: 规则集与评分, text: 按你的产品体验决定哪些档位提示用户。, href: /products/rulesets/ }
      - { title: AI 助手（MCP）, text: 钱包里的 AI 助手可以直接查地址、看结果。, href: /products/agents/ }
      - { title: 资金追踪与调查, text: 用户报案时，跨跳、跨链追资金去向。, href: /products/investigations/ }

  - type: faq
    eyebrow: 常见问题
    title: 钱包常问的问题
    items:
      - q: 转账前检查会不会让用户等很久？
        a: 制裁筛查 1 秒内返回。地址筛查同步调用直接给结果；交易非常活跃的地址追得深时，可以用异步模式，不阻塞转账流程。
      - q: 给用户的提示该怎么写？
        a: 建议只说命中了哪类公开来源，例如官方制裁名单、发行方冻结，不给个人地址下「诈骗」「洗钱」这类定性，由用户自己决定是否继续。
      - q: 自托管钱包没有用户资金，也需要筛查吗？
        a: 筛查是给用户的保护：避免把 U 打给制裁或恐怖融资地址，收到问题资金时及早知道。也有钱包把它做成付费安全功能。
      - q: 一个地址在多条链上都有余额怎么办？
        a: 用全链筛查接口，DART 自动识别该地址在哪些链、哪些币种上有流水，一次筛完，结果按链分开，最差的一条放在最上面。
      - q: 用户量很大，扛得住吗？
        a: 生产环境每天 30–40 万次 API 调用；某头部自托管钱包接入一周内就上到单日 7 万次以上。正式接入前我们按你的量一起评估。

  - type: cta
    eyebrow: 免费接入
    title: 和你现在的工具<em>并行跑一次</em>
    text: 不用停掉现有安全扫描。给我们一批历史地址，脱敏也可以，差异逐条说明原因。
    points:
      - 我们逐条给出结果和命中路径，并附**与现有工具的差异对比**
      - 稳定币交给 DART，其他资产照旧
      - 接入 DART，免费用到 **2028 年 12 月 31 日**
    ctas:
      - { label: 免费接入, href: "/contact/?type=wallet" }
      - { label: 预约演示, href: "/contact/?type=wallet" }
---
