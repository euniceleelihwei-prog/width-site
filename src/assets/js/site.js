// Width 官网交互：导航下拉、手机菜单、标签页。无依赖。
(() => {
  const nav = document.querySelector("[data-nav]");
  const burger = document.querySelector("[data-burger]");
  const mobile = () => window.matchMedia("(max-width: 980px)").matches;

  // 下拉菜单：桌面端悬停 / 点击，手机端点击展开
  document.querySelectorAll(".nav-item.has-menu").forEach((item) => {
    const btn = item.querySelector("[data-menu-toggle]");
    const set = (open) => {
      item.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const open = !item.classList.contains("open");
      document.querySelectorAll(".nav-item.open").forEach((o) => o !== item && o.classList.remove("open"));
      set(open);
    });
    let timer;
    item.addEventListener("mouseenter", () => { if (!mobile()) { clearTimeout(timer); set(true); } });
    item.addEventListener("mouseleave", () => { if (!mobile()) timer = setTimeout(() => set(false), 120); });
    item.addEventListener("focusout", (e) => { if (!mobile() && !item.contains(e.relatedTarget)) set(false); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll(".nav-item.open").forEach((o) => o.classList.remove("open"));
  });
  document.addEventListener("click", (e) => {
    if (!mobile() && !e.target.closest(".nav-item")) document.querySelectorAll(".nav-item.open").forEach((o) => o.classList.remove("open"));
  });

  // 手机菜单
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      document.body.classList.toggle("nav-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  // 标签页（audiences 版块）
  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = [...tabs.querySelectorAll('[role="tab"]')];
    const select = (btn) => {
      buttons.forEach((b) => {
        const on = b === btn;
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
        document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
      });
    };
    buttons.forEach((b, i) => {
      b.addEventListener("click", () => select(b));
      b.addEventListener("keydown", (e) => {
        const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        const next = buttons[(i + d + buttons.length) % buttons.length];
        select(next);
        next.focus();
      });
    });
  });
  // 联系表单：链接里带 ?type=exchange|wallet|payments|custody|otc|lea|academic|demo 时自动预选
  const form = document.querySelector("[data-form]");
  if (form) {
    const type = new URLSearchParams(location.search).get("type");
    const order = ["exchange", "wallet", "payments", "custody", "otc", "lea", "academic", "other"];
    const select = form.querySelector('select[name="type"]');
    const i = order.indexOf(type);
    if (select && i >= 0) select.selectedIndex = i;
    if (type) {
      const hidden = document.createElement("input");
      hidden.type = "hidden"; hidden.name = "intent"; hidden.value = type;
      form.appendChild(hidden);
    }
  }
})();

// 中文标题不留孤字：把标题按标点切成小段（.ph，inline-block），浏览器就只会在标点后换行，
// 不会把一个词拆到两行，也不会在行尾剩一个字。段落太长放不下一行时仍会在段内正常换行。
(function () {
  if (!document.body.classList.contains("lang-zh")) return;
  document.querySelectorAll("h1, h2, h3, .stat-label, summary").forEach(function (h) {
    var walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT), nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var parts = n.nodeValue.match(/[^，、。？！：；]+[，、。？！：；]*/g);
      if (!parts || !n.nodeValue.trim()) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (t) {
        var span = document.createElement("span");
        span.className = "ph"; span.textContent = t; frag.appendChild(span);
      });
      n.parentNode.replaceChild(frag, n);
    });
  });
})();

// 流动的点：首页 hero 背景和底部深蓝带。一群小点沿着几条弯曲的路线，从左边汇向右侧的一个节点，
// 表示资金一跳一跳流向被筛地址。只在 bodyClass 为 home-v2 的页面出现；系统设置了「减少动态效果」时不播放。
(function () {
  if (!document.body.classList.contains("home-v2")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var hosts = [].slice.call(document.querySelectorAll(".hero-bg, .cta-section"));
  hosts.forEach(function (host) {
    var onBlue = host.classList.contains("cta-section");
    var c = document.createElement("canvas");
    c.className = "dots"; c.setAttribute("aria-hidden", "true");
    host.insertBefore(c, host.firstChild);
    var ctx = c.getContext("2d"), W = 0, H = 0, fx = 0, fy = 0, pts = [], running = false, last = 0;
    var COUNT = onBlue ? 260 : 200;
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function lane() {
      var y0 = rnd(-0.1, 1.1) * H;
      return [-20, y0, W * rnd(0.2, 0.42), y0 + rnd(-0.28, 0.28) * H, W * rnd(0.46, 0.66), fy + rnd(-0.42, 0.42) * H, fx, fy];
    }
    function spawn(p, fresh) {
      p.l = lane(); p.t = fresh ? Math.random() : 0; p.v = rnd(0.035, 0.09); p.r = rnd(1, 2.4);
      p.kind = Math.random() < 0.12 ? 1 : 0;      // 少数点用风险色，其余是品牌蓝（深蓝带上是白色）
      return p;
    }
    function size() {
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      W = host.clientWidth; H = host.clientHeight;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fx = W * (onBlue ? 0.8 : 0.83); fy = H * (onBlue ? 0.5 : 0.4);
      pts = []; for (var i = 0; i < COUNT; i++) pts.push(spawn({}, true));
    }
    function frame(now) {
      if (!running) return;
      var dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], l = p.l; p.t += p.v * dt;
        if (p.t >= 1) spawn(p, false);
        var t = p.t, u = 1 - t;
        var x = u * u * u * l[0] + 3 * u * u * t * l[2] + 3 * u * t * t * l[4] + t * t * t * l[6];
        var y = u * u * u * l[1] + 3 * u * u * t * l[3] + 3 * u * t * t * l[5] + t * t * t * l[7];
        var a = Math.min(1, t * 6) * Math.min(1, (1 - t) * 5);
        ctx.globalAlpha = a * (onBlue ? 0.55 : 0.4);
        ctx.fillStyle = onBlue ? "#ffffff" : (p.kind ? "#d92d20" : "#0d4fd3");
        ctx.beginPath(); ctx.arc(x, y, p.r * (0.6 + 0.4 * u), 0, 6.2832); ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    function play(on) { if (on && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); } else if (!on) running = false; }
    size();
    window.addEventListener("resize", size);
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { play(e[0].isIntersecting); }).observe(host);
    else play(true);
  });
})();
