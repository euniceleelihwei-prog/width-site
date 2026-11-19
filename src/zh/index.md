---
layout: layouts/page.njk
title: 稳定币链上风控与 KYT 筛查
fullTitle: Width DART｜稳定币链上风控、KYT 交易筛查、地址风险筛查
description: DART 专做 USDT / USDC 链上风控，按资金的时间顺序逐跳追踪，误报少、1 秒内返回、每一分都说得清。交易所、钱包、支付公司、托管机构都在用，接入即免费用到 2028 年 12 月 31 日。
sections:
  - type: hero
    eyebrow: WIDTH DART · 稳定币链上风控
    title: 收 U 之前，<br><em>先看清这笔钱从哪来</em>
    lead: DART 专做 USDT / USDC 链上风控。按资金的时间顺序逐跳追踪，只有先到账、后转出的钱才算有关联。交易所、钱包、支付公司用它把问题资金挡在门外，正常用户不被误伤。
    ctas:
      - { label: 免费接入, href: /contact/ }
      - { label: 看看怎么工作, href: "#how" }
    note: 接入即免费用到 2028 年 12 月 31 日 · 控制台、API、MCP 全部可用
    visual: flow
    stats:
      - { value: "30", unit: 万+, label: 每天生产环境 API 调用次数 }
      - { value: "< 1", unit: 秒, label: 制裁筛查返回 }
      - { value: "2", unit: 亿, label: 已标注地址，制裁、冻结、黑客等标签持续更新 }
      - { value: 当天, unit: 上线, label: FinCEN 9714 命令发布当天，规则集上线 }

  - type: audiences
    id: who
    eyebrow: 按你的业务看
    title: 你是哪一类机构？先说你的问题
    lead: 同一套数据和引擎，按不同业务的风控节点给出不同的用法。
    items:
      - label: 交易所
        title: 充提都筛，不误报，也不被别家牵连
        text: 充值看资金从哪来，提现看要打到哪去。时间上流不过来的路径直接排除，合规团队只处理真正需要处理的单子。
        points:
          - "**充值来源按时间顺序判断**，只计算转出前已经到账的钱"
          - "**交易所对手方默认豁免**，不会因为别家交易所的其他用户碰过风险地址牵连到你"
          - "**新规当天上线**：FinCEN 9714 命令发布当天，内置规则集就能选用"
          - 每笔结果附命中路径和快照，监管检查时直接调出
        href: /solutions/exchanges/
        link: 看交易所方案
      - label: 钱包
        title: 转账前提醒，收款后预警
        text: 钱包用户手里主要是 USDT / USDC。在转账和收款两个节点给用户一句准确的提示，就是钱包能给用户最直接的保护。
        points:
          - "**转账前查收款地址**：提示制裁、恐怖融资、诈骗地址，避免把 U 打错人"
          - "**收款后查资金来源**：收到被冻结、黑客或诈骗资金时及时提醒，减少被连带冻结"
          - "**安全能力可以收费**：已有平台把 DART 打包进付费会员"
          - 某头部自托管钱包接入一周内，单日筛查量就到了 7 万次以上
        href: /solutions/wallets/
        link: 看钱包方案
      - label: 支付与 U 卡
        title: 不让问题资金进入卡组织和法币通道
        text: 充卡、入金、商户收款前先筛资金来源。银行和卡组织问起来，每一笔都有依据。
        points:
          - "**入金前筛查**：资金来源涉及制裁、冻结、黑客、诈骗时分档处置"
          - "**四档处置而不是一刀切**：通过、复核、加强尽调、拦截，阈值按你的风险偏好调"
          - "**规则集可以按合作银行、卡组织的要求单独配置**"
          - 每次筛查存为不可篡改的快照，对账和审计直接调出
        href: /solutions/payments/
        link: 看支付方案
      - label: 托管与 WaaS
        title: 下游企业客户开箱即有 KYA / KYT
        text: 你服务的每一家企业都需要充提筛查。由你统一接入 DART，客户不用各自采购。
        points:
          - "**每个企业钱包的充提自动筛查**，结果按客户分开"
          - "**MPC 托管归集场景**有现成接入指南"
          - 某钱包与托管基础设施服务商工作日每天筛查 1.7–1.8 万次
          - 控制台、API、CSV 批量共用一个账号
        href: /solutions/custody/
        link: 看托管方案
      - label: 执法机构
        title: 把一笔笔转账串成完整的资金链
        text: 从一个地址出发，跨跳、跨链追资金去向，导出可以直接用于案件的追踪报告。
        points:
          - "**资金追踪**：逐跳展开上下游，USDC 支持 CCTP 跨链续追"
          - "**案件协助**：重点案件由我们的分析师出追踪报告，配合冻结时提供证据包"
          - "**链上追踪实训**：给调查员的培训课程"
          - 身份核实后开通，每次查询都留痕
        href: /partners/lea/
        link: 看执法合作
      - label: 个人
        title: 收 U 之前，先查一下这个地址
        text: OTC 买家、商户、个人收款前最常问的一句话：这个地址安全吗？U 被冻了，又是为什么？
        points:
          - "**地址体检**：粘贴地址，自动识别链和币种，给出三档结论"
          - "**冻结自查**：地址有没有被稳定币发行方冻结、什么时候冻结的"
          - 只说命中了哪些公开来源，不给个人地址下定性
        href: /check/
        link: 了解个人地址体检

  - type: problems
    id: problems
    tone: alt
    eyebrow: 我们解决的问题
    title: 合规团队每天都在遇到的六个问题
    lead: 每一个都对应 DART 里一个具体的设计，以及生产环境里的证据。
    items:
      - problem: 误报太多，合规和客服被淹没
        detail: 不看时间顺序，几乎任何地址往外追几跳都能碰到风险地址。
        solution: |
          - 每一跳必须**先到账、后转出**才算关联，时间上倒着流的路径直接排除
          - **看金额占比**，跳数越远门槛越高：默认第 2 / 3 / 4 / 5 跳风险资金占比达 5% / 10% / 15% / 20% 才计入
          - **交易所对手方默认豁免**，不因别家交易所的用户被牵连
        proof: 某支付公司实测：同一地址，另一款工具判「中低风险、需复核」，DART 判 0 分通过。逐笔拆开，那些风险资金在时间上根本流不过来。
      - problem: 收了问题资金，自己被连带冻结
        detail: 充进来的 U 如果来自被冻结、黑客或诈骗资金，冻结可能落到你和你的用户头上。
        solution: |
          - 充值、收款前先筛资金来源：**发行方冻结、制裁、黑客、诈骗**分层识别
          - 四档处置：通过、复核、加强尽调、拦截；加强尽调档请用户说明资金来源
        proof: 稳定币发行方冻结标签已在生产环境使用。
      - problem: 新规下来，规则跟不上
        detail: 官方名单、执法命令更新得越来越快，自己维护规则来不及。
        solution: |
          - 规则全部公开可读，内置规则集复制一份就能改
          - 新的官方动作由我们做成**内置规则集**，客户直接选用
        proof: FinCEN 9714 命令 11 月 6 日发布，DART 当天就上线了内置规则集。
      - problem: 监管问「为什么拦」，答不上来
        detail: 只有一个分数、没有依据，内部复核和监管检查都很被动。
        solution: |
          - **每一分对应一条规则**：命中哪条路径、第几跳、多少金额、占比多少、加了几分，全部列出
          - 每次筛查存为**不可篡改的快照**，规则集版本可追溯
        proof: 合规和监管检查时，从控制台或 API 直接调出当时的快照。
      - problem: 筛查太慢，卡住用户转账
        detail: 转账前检查只要多等几秒，用户就会流失。
        solution: |
          - **制裁筛查 1 秒内返回**
          - 同步调用直接给结果；交易非常活跃的地址追得深时，走异步模式，不阻塞业务
        proof: 生产环境每天 30–40 万次 API 调用。
      - problem: 换链转移、多链地址查不全
        detail: 同一个 EVM 地址在每条链上都是同一个钱包，只查一条链说明不了问题。
        solution: |
          - **粘贴即查**：自动识别地址在哪些链、哪些币种上有流水，USDT、USDC 一次筛完
          - USDC 支持 **CCTP 跨链续追**，换链转移也不漏
        proof: 覆盖 11 条链，一个地址一次筛完全部有流水的链和币种。

  - type: steps
    id: how
    eyebrow: 怎么工作
    title: 一次筛查，四步给结论
    lead: 路径匹配规则集回答「算不算违规」，评分规则集回答「有多严重、怎么处置」。两套规则集都可以按你的口径改。
    items:
      - { label: 输入, title: 提交地址或交易, text: 地址（KYA）或交易哈希（KYT），自动识别链和币种。 }
      - { label: 第 1 步, title: 按时间顺序展开资金图, text: 逐跳展开上下游，每个对手方都带标签，只保留时间上流得过来的路径。 }
      - { label: 第 2 步, title: 匹配规则, text: 72 条规则判断哪条资金链路算违规、违反了哪一条。 }
      - { label: 第 3 步, title: 按资金占比评分, text: 按方向、跳数、严重度和资金占比算出 0–100 分。 }
      - { label: 输出, title: 四档处置和证据, text: 通过、复核、加强尽调、拦截，附命中明细和快照。 }

  - type: split
    eyebrow: 可解释
    title: 每一分都说得清
    text: 结果不是一个黑盒分数。哪条路径命中、第几跳、多少金额、占资金多少、加了几分，都列在结果里；被排除的路径也写明原因。
    points:
      - "**四档处置**：0–19 通过、20–49 复核、50–79 加强尽调、80–100 拦截，阈值可调"
      - "**规则可改**：内置规则集只读，复制一份后任意改条件和分值"
      - "**证据留存**：每次筛查自动存为快照，随时调出"
    ctas:
      - { label: 了解规则集与评分, href: /products/rulesets/, style: ghost }
    visual: result

  - type: cases
    tone: alt
    eyebrow: 在生产环境
    title: 已经在用 DART 的机构
    items:
      - tag: 钱包
        metric: 7 万次 +
        metricLabel: 接入一周内的单日筛查量
        title: 某头部自托管钱包
        text: FinCEN 9714 命令发布当天，就能在充提中识别相关资金；跳数等参数按他们的风控要求单独配置。
      - tag: 社交 · 支付
        metric: 付费会员
        metricLabel: 安全能力变成收入
        title: 某 Web3 社交平台
        text: 把 DART 打包进付费会员增值服务：用户每一笔收款、提款都做完整检测，避免把 U 打给恐怖融资地址。
      - tag: 托管 · WaaS
        metric: 1.7–1.8 万次
        metricLabel: 工作日每天
        title: 某钱包与托管基础设施服务商
        text: 为旗下企业钱包的每笔充提做筛查，下游企业开箱即有 KYA / KYT，不用各自采购。
    note: 案例均匿名展示。数据来自 DART 生产环境，截至 2026 年 11 月。

  - type: split
    reverse: true
    eyebrow: AI 助手
    title: 让 AI 助手直接查地址
    text: DART 开放 MCP，19 个工具覆盖筛查、读取结果、管理规则集。Claude、Cursor、Codex 等 AI 工具接上就能用；控制台、API、MCP 共用一个账号和同一批快照。
    points:
      - 一句话让 AI 筛查地址、解释结果
      - 规则集和规则也能让 AI 帮你改
      - 提供 llms.txt、OpenAPI 和现成的 Agent Skill
    ctas:
      - { label: 开发者文档, href: /developers/, style: ghost }
    visual: code
    code:
      title: mcp.json
      body: |
        {
          "mcpServers": {
            "width-dart": {
              "url": "https://api.width.live/mcp",
              "headers": {
                "Authorization": "Bearer <你的 API Key>"
              }
            }
          }
        }

  - type: cards
    eyebrow: WIDTH DATA · 数据
    title: 公开数据，持续更新
    lead: 用同一套链上数据做的公开榜单。每个榜单都附方法说明，只用公开、可溯源的事件级数据。
    columns: 3
    items:
      - { tag: 每日更新, title: 稳定币冻结榜, text: 发行方冻结的地址数和金额，按链、按周统计。, href: /data/#freeze, link: 查看榜单 }
      - { tag: 每周更新, title: 安全事件榜, text: 黑客和漏洞事件按损失排序，标注资金去向：未动、已跨链、进交易所、已冻结。, href: /data/#incidents, link: 查看榜单 }
      - { tag: 有新动作即更新, title: 制裁与执法动作, text: OFAC、FinCEN、联合国等新增名单，以及涉及的链上地址数。, href: /data/#sanctions, link: 查看榜单 }

  - type: posts
    eyebrow: 文章
    title: 最新文章
    limit: 3

  - type: cta
    eyebrow: 免费接入
    title: 和你现在的工具<em>并行跑一次</em>
    text: 不用停掉现有系统。给我们一批历史地址，脱敏也可以，结果好不好你自己判断。
    points:
      - 我们逐条给出结果和命中路径，并附**与现有工具的差异对比**
      - 稳定币交给 DART，其他资产照旧
      - 接入即免费用到 **2028 年 12 月 31 日**，工程师直接在群里支持
    ctas:
      - { label: 免费接入, href: /contact/ }
      - { label: 看产品手册, href: "https://width.info/docs" }
---
