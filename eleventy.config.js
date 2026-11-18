// Width 官网 · Eleventy 配置
// 页面都在 src/，英文在根路径，中文在 /zh/。内容写在每个页面的 front matter（sections），
// 版式在 src/_includes，样式在 src/assets/css/site.css。
import * as yaml from "js-yaml";
import markdownIt from "markdown-it";
import { HtmlBasePlugin } from "@11ty/eleventy";

const md = markdownIt({ html: true, linkify: true, typographer: false });

const isProd = process.env.ELEVENTY_RUN_MODE === "build";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addWatchTarget("src/assets/");

  // ---------- 草稿：draft: true 的文章在正式构建里不输出 ----------
  eleventyConfig.addPreprocessor("drafts", "md", (data) => {
    if (data.draft && isProd) return false;
  });

  // ---------- 文章集合（中、英各一套） ----------
  const byDate = (a, b) => b.date - a.date;
  eleventyConfig.addCollection("posts_en", (api) =>
    api.getFilteredByGlob("src/blog/posts/*.md").sort(byDate)
  );
  eleventyConfig.addCollection("posts_zh", (api) =>
    api.getFilteredByGlob("src/zh/blog/posts/*.md").sort(byDate)
  );

  // ---------- 过滤器 ----------
  // Markdown：块级 / 行内
  eleventyConfig.addFilter("md", (s) => (s ? md.render(String(s)) : ""));
  eleventyConfig.addFilter("mdi", (s) => (s ? md.renderInline(String(s)) : ""));

  // 站内链接加语言前缀："/pricing/" | locale("zh") → "/zh/pricing/"
  eleventyConfig.addFilter("locale", (href, lang) => {
    if (!href || lang !== "zh") return href;
    if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
    if (href.startsWith("/zh/") || href === "/zh") return href;
    return "/zh" + (href.startsWith("/") ? href : "/" + href);
  });

  // 另一种语言的对应页面；不存在时回到对方语言的首页
  eleventyConfig.addFilter("altUrl", (url, lang, all) => {
    const target = lang === "zh" ? url.replace(/^\/zh(\/|$)/, "/") : "/zh" + url;
    const exists = (all || []).some((p) => p.url === target);
    return exists ? target : lang === "zh" ? "/" : "/zh/";
  });
  eleventyConfig.addFilter("hasAlt", (url, lang, all) => {
    const target = lang === "zh" ? url.replace(/^\/zh(\/|$)/, "/") : "/zh" + url;
    return (all || []).some((p) => p.url === target);
  });

  // 双语字段：{en: "...", zh: "..."} | tr(lang)；普通字符串原样返回
  eleventyConfig.addFilter("tr", (v, lang) => {
    if (v && typeof v === "object" && !Array.isArray(v)) return v[lang] ?? v.en ?? "";
    return v;
  });

  eleventyConfig.addFilter("date", (d, lang = "en") => {
    const dt = d instanceof Date ? d : new Date(d);
    if (lang === "zh") return `${dt.getFullYear()} 年 ${dt.getMonth() + 1} 月 ${dt.getDate()} 日`;
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("rfcDate", (d) => new Date(d).toUTCString());

  // 阅读时长：中文按 400 字 / 分钟，英文按 220 词 / 分钟
  eleventyConfig.addFilter("readingTime", (html, lang) => {
    const text = String(html || "").replace(/<[^>]+>/g, " ");
    if (lang === "zh") {
      const n = (text.match(/[一-鿿]/g) || []).length;
      return Math.max(1, Math.round(n / 400));
    }
    const n = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(n / 220));
  });

  eleventyConfig.addFilter("pad", (n) => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("where", (arr, key, val) => (arr || []).filter((x) => x.data[key] === val));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((x) => x.url !== url));
  eleventyConfig.addFilter("absolute", (path, base) => {
    if (!path) return base;
    if (/^https?:/.test(path)) return path;
    return base.replace(/\/$/, "") + path;
  });
  eleventyConfig.addFilter("striptags", (s) => String(s || "").replace(/<[^>]+>/g, ""));
  eleventyConfig.addFilter("excerpt", (html, n = 140) => {
    const t = String(html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    return t.length > n ? t.slice(0, n) + "…" : t;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
