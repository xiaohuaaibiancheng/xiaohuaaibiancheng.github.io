// ===== i18n Translations =====
const i18n = {
  zh: {
    nav_home: '首页',
    nav_about: '关于',
    nav_skills: '技能',
    nav_projects: '项目',
    nav_contact: '联系',
    hero_badge: 'AI × 创造力',
    hero_title_line: '你好，我是',
    hero_name: '小华爱编程',
    hero_subtitle: '用 AI 赋能编程，用代码创造未来。<br>探索人工智能与软件开发的无限可能。',
    hero_cta_projects: '查看项目',
    hero_cta_contact: '联系我',
    stat_projects: '开源项目',
    stat_fields: '技术领域',
    stat_passion: '热情投入',
    scroll_down: '向下滚动',
    about_tag: '关于我',
    about_title: '探索 AI 与编程的交汇点',
    about_fullstack_title: '全栈开发',
    about_fullstack_desc: '从前端到后端，从 Web 到嵌入式，热爱用代码解决实际问题，追求优雅高效的工程实现。',
    about_ai_title: 'AI 探索',
    about_ai_desc: '深入研究大语言模型、具身智能、RAG 技术等前沿领域，将 AI 能力融入实际产品开发。',
    about_opensource_title: '开源贡献',
    about_opensource_desc: '积极参与开源社区，分享技术实践和心得，相信开源的力量能让技术走得更远。',
    skills_tag: '技术栈',
    skills_title: '技能与工具',
    skills_lang: '编程语言',
    skills_ai: 'AI / ML',
    skills_framework: '框架 & 工具',
    skills_other: '其他',
    skill_embodied: '具身智能',
    skill_robot: '机器人',
    skill_cv: '计算机视觉',
    skill_network: '网络检测',
    skill_outsource: '服务外包',
    projects_tag: '项目展示',
    projects_title: '开源项目',
    projects_subtitle: '自动同步 GitHub 仓库，新项目即时展示',
    contact_tag: '联系我',
    contact_title: '一起探索未来',
    contact_text: '如果你对 AI 编程、具身智能或开源项目感兴趣，欢迎与我联系交流！',
    footer_brand: '小华爱编程',
    footer_text: '用代码创造未来，用 AI 改变世界。',
    footer_copyright: '© 2026 小华爱编程. All rights reserved.',
    loading_projects: '正在加载项目...',
    load_error: '加载失败，请刷新页面重试',
    no_desc: '暂无项目描述',
    today: '今天',
    days_ago: ' 天前',
    months_ago: ' 个月前',
    years_ago: ' 年前',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_badge: 'AI × Creativity',
    hero_title_line: "Hello, I'm",
    hero_name: 'XiaoHua AiBianCheng',
    hero_subtitle: 'Empowering coding with AI, creating the future with code.<br>Exploring the infinite possibilities of AI and software development.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact Me',
    stat_projects: 'Open Source',
    stat_fields: 'Tech Fields',
    stat_passion: 'Passion',
    scroll_down: 'Scroll Down',
    about_tag: 'About Me',
    about_title: 'Where AI Meets Programming',
    about_fullstack_title: 'Full Stack Dev',
    about_fullstack_desc: 'From frontend to backend, from Web to embedded — passionate about solving real-world problems with code, pursuing elegant and efficient engineering.',
    about_ai_title: 'AI Exploration',
    about_ai_desc: 'Deep diving into LLMs, embodied intelligence, RAG, and other cutting-edge fields, integrating AI capabilities into real product development.',
    about_opensource_title: 'Open Source',
    about_opensource_desc: 'Actively contributing to open source communities, sharing tech practices and insights — believing open source takes technology further.',
    skills_tag: 'Tech Stack',
    skills_title: 'Skills & Tools',
    skills_lang: 'Languages',
    skills_ai: 'AI / ML',
    skills_framework: 'Frameworks & Tools',
    skills_other: 'Other',
    skill_embodied: 'Embodied AI',
    skill_robot: 'Robotics',
    skill_cv: 'Computer Vision',
    skill_network: 'Network Detection',
    skill_outsource: 'Outsourcing',
    projects_tag: 'Showcase',
    projects_title: 'Open Source Projects',
    projects_subtitle: 'Auto-synced from GitHub — new repos appear instantly',
    contact_tag: 'Contact',
    contact_title: "Let's Explore the Future",
    contact_text: "If you're interested in AI programming, embodied intelligence, or open source, feel free to reach out!",
    footer_brand: 'XiaoHua AiBianCheng',
    footer_text: 'Creating the future with code, changing the world with AI.',
    footer_copyright: '© 2026 XiaoHua AiBianCheng. All rights reserved.',
    loading_projects: 'Loading projects...',
    load_error: 'Failed to load. Please refresh the page.',
    no_desc: 'No description',
    today: 'Today',
    days_ago: ' days ago',
    months_ago: ' months ago',
    years_ago: ' years ago',
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ===== Apply Translations =====
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update lang toggle button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'zh' ? 'EN' : '中';

  // Re-render project cards if they exist (for dynamic content)
  if (window._cachedRepos) {
    renderRepos(window._cachedRepos);
  }
}

// ===== Theme Toggle =====
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');
  if (theme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) link.classList.add('active');
      });
    }
  });
}

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.about-card, .skill-category, .contact-card');
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
revealElements.forEach(el => revealObserver.observe(el));

// ===== Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target, parseInt(entry.target.getAttribute('data-target')));
      counterObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.5 }
);
statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(el, target) {
  const duration = 2000;
  const startTime = performance.now();
  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Parallax =====
let ticking = false;
window.addEventListener('mousemove', e => {
  if (!ticking) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.floating-shape').forEach((s, i) => {
        const f = (i + 1) * 0.3;
        s.style.transform = `translate(${(e.clientX / innerWidth - 0.5) * 20 * f}px, ${(e.clientY / innerHeight - 0.5) * 20 * f}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ===== GitHub Repos Carousel =====
const GITHUB_USER = 'xiaohuaaibiancheng';
const carousel = document.getElementById('projectCarousel');

// Language color map
const langColors = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Java: '#b07219',
  'C++': '#f34b7d', C: '#555555', Go: '#00ADD8', Rust: '#dea584', HTML: '#e34c26',
  CSS: '#563d7c', Shell: '#89e051', Vue: '#41b883', Dart: '#00B4AB', Kotlin: '#A97BFF',
  Swift: '#F05138', Ruby: '#701516', PHP: '#4F5D95', Jupyter: '#DA5B0B',
};

function getLangColor(lang) {
  return langColors[lang] || '#8b8b8b';
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  const t = i18n[currentLang];
  if (days === 0) return t.today;
  if (days < 30) return days + t.days_ago;
  if (days < 365) return Math.floor(days / 30) + t.months_ago;
  return Math.floor(days / 365) + t.years_ago;
}

function createCard(repo) {
  const card = document.createElement('a');
  card.href = repo.html_url;
  card.target = '_blank';
  card.rel = 'noopener';
  card.className = 'project-card';

  const t = i18n[currentLang];
  const visLabel = repo.private ? 'Private' : 'Public';
  const langHtml = repo.language
    ? `<span class="project-meta-item"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${getLangColor(repo.language)}"></span>${repo.language}</span>`
    : '';
  const starsHtml = repo.stargazers_count > 0
    ? `<span class="project-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>${repo.stargazers_count}</span>`
    : '';
  const forksHtml = repo.forks_count > 0
    ? `<span class="project-meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/></svg>${repo.forks_count}</span>`
    : '';

  card.innerHTML = `
    <div class="project-header">
      <div class="project-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </div>
      <div class="project-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
      </div>
    </div>
    <h3 class="project-title">${repo.name}<span class="project-visibility">${visLabel}</span></h3>
    <p class="project-desc">${repo.description || t.no_desc}</p>
    <div class="project-meta">
      ${langHtml}${starsHtml}${forksHtml}
      <span class="project-meta-item" style="margin-left:auto">${timeAgo(repo.updated_at)}</span>
    </div>
    <div class="project-tags">
      <span class="project-tag">${repo.default_branch || 'main'}</span>
    </div>
  `;
  return card;
}

function renderRepos(repos) {
  carousel.innerHTML = '';
  const fragment = document.createDocumentFragment();
  repos.forEach(repo => fragment.appendChild(createCard(repo)));
  carousel.appendChild(fragment);
  initCarousel();
}

async function loadRepos() {
  const t = i18n[currentLang];
  carousel.innerHTML = `<div class="project-loading"><div class="spinner"></div>${t.loading_projects}</div>`;

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('API error');
    let repos = await res.json();

    // Sort by updated_at descending
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // Cache for language switch
    window._cachedRepos = repos;

    renderRepos(repos);
  } catch (err) {
    console.error('Failed to load repos:', err);
    carousel.innerHTML = `<div class="project-loading">${i18n[currentLang].load_error}</div>`;
  }
}

function initCarousel() {
  const wrapper = carousel.parentElement;
  const cards = carousel.querySelectorAll('.project-card');
  if (cards.length === 0) return;

  // Clone cards for infinite loop
  const cloneCount = cards.length;
  for (let i = 0; i < cloneCount; i++) {
    const clone = cards[i].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    carousel.appendChild(clone);
  }

  // Scroll state
  let scrollPos = 0;
  let autoSpeed = 0.6; // px per frame
  let isPaused = false;
  let isDragging = false;
  let startX = 0;
  let dragStartPos = 0;

  // Calculate the width of original set
  function getOriginalWidth() {
    let w = 0;
    for (let i = 0; i < cloneCount; i++) {
      w += cards[i].offsetWidth + 24; // gap
    }
    return w;
  }

  function animate() {
    if (!isPaused && !isDragging) {
      scrollPos += autoSpeed;
      const origW = getOriginalWidth();
      if (scrollPos >= origW) scrollPos -= origW;
    }
    carousel.style.transform = `translateX(${-scrollPos}px)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Pause on hover
  carousel.addEventListener('mouseenter', () => { isPaused = true; });
  carousel.addEventListener('mouseleave', () => { isPaused = false; });

  // Drag to scroll
  carousel.addEventListener('mousedown', e => {
    isDragging = true;
    isPaused = true;
    carousel.classList.add('dragging');
    startX = e.clientX;
    dragStartPos = scrollPos;
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = startX - e.clientX;
    scrollPos = dragStartPos + dx;
    const origW = getOriginalWidth();
    while (scrollPos < 0) scrollPos += origW;
    while (scrollPos >= origW) scrollPos -= origW;
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove('dragging');
    }
  });

  // Touch support
  let touchStartX = 0;
  let touchStartPos = 0;

  carousel.addEventListener('touchstart', e => {
    isPaused = true;
    touchStartX = e.touches[0].clientX;
    touchStartPos = scrollPos;
  }, { passive: true });

  carousel.addEventListener('touchmove', e => {
    const dx = touchStartX - e.touches[0].clientX;
    scrollPos = touchStartPos + dx;
    const origW = getOriginalWidth();
    while (scrollPos < 0) scrollPos += origW;
    while (scrollPos >= origW) scrollPos -= origW;
  }, { passive: true });

  carousel.addEventListener('touchend', () => {
    isPaused = false;
  });
}

// ===== Init Theme & Lang =====
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'zh' ? 'en' : 'zh');
});

// Apply saved preferences on load
applyTheme(currentTheme);
applyLang(currentLang);

// Load repos on page load
loadRepos();
