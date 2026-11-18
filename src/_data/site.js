// 全站配置。部署时用环境变量覆盖：
//   SITE_URL     正式域名，例如 https://width.info（用于 canonical、sitemap、分享卡片）
//   ALLOW_INDEX  "true" 时允许搜索引擎收录；预览环境（github.io）默认不收录，避免和正式站重复
export default {
  name: "Width",
  product: "DART",
  url: (process.env.SITE_URL || "https://width.info").replace(/\/$/, ""),
  allowIndex: process.env.ALLOW_INDEX === "true",
  ogImage: "/assets/img/og-default.png",
  twitter: "@WidthGRC",

  // 现有产品入口（控制台、文档仍在 width.info 现有应用上）
  links: {
    console: "https://width.info/login",
    docs: "https://width.info/docs",
    api: "https://width.info/api-reference",
    exchangeFlows: "https://width.info/exchange-flows",
    mcp: "https://api.width.live/mcp",
    llms: "https://width.info/llms.txt",
    openapi: "https://width.info/openapi.json",
    skill: "https://width.info/agent/SKILL.md",
    amlclaw: "https://github.com/amlclaw/amlclaw.com",
    widthPlatform: "https://www.width.com/",
    privacy: "https://www.width.com/privacy",
    security: "https://www.width.com/security",
  },

  contact: {
    sales: "sales@width.com",
    marketing: "marketing@width.com",
    phone: "+65 6816 2740",
    offices: { en: "Singapore · Hong Kong · Beijing", zh: "新加坡 · 香港 · 北京" },
  },

  social: {
    x: "https://x.com/WidthGRC",
    linkedin: "https://www.linkedin.com/company/widthsg/",
    youtube: "https://www.youtube.com/@WidthCompliance",
  },

  // 表单提交地址。GitHub Pages 不能处理表单，填一个第三方表单服务（Formspree、飞书表单等）的地址；
  // 留空时表单会改用邮件发送到 sales@width.com
  formEndpoint: process.env.FORM_ENDPOINT || "",

  // Google Analytics 4 测量 ID，留空则不加载
  gaId: process.env.GA_ID || "",
};
