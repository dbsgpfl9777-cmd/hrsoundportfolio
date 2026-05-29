/* ============================================================
   Yoon Hyeri · Sound Design Portfolio
   ============================================================ */

/* ============== DATA ============== */
// 회사별 요약 정보
const COMPANY_DATA = {
  baka: {
    name: 'Studio BAKA',
    period: '2021.07 — 2024.01 · 2Y 6M',
    role: 'Sound Designer',
    summary: [
      {
        title: '주요 경험',
        items: [
          '사업 제안 음향 파트 기획',
          '현장 녹음 및 장비 구축',
          '멀티채널 사운드 디자인',
          '선곡 및 음악 편집, 믹싱'
        ]
      },
      {
        title: '주요 성과 및 실적',
        items: [
          '프로젝트 전반의 사운드 파트 담당, 다수 프로젝트 완수',
          '다양한 파트와 원활한 협업 진행',
          '회사 설립 초기 합류, 스튜디오 구축 및 운영 매뉴얼 제작 주도'
        ]
      }
    ],
    /*
      ───────────────────────────────────────────────
      프로젝트 항목 작성 가이드
      ───────────────────────────────────────────────
      각 프로젝트는 아래 필드를 가질 수 있어요. (intro/output/role은 비워둬도 됨)

      {
        name:     '프로젝트 이름',           // 필수
        year:     '2023',                  // 필수 (혹은 '2021~2022')
        category: 'Sound Library',         // 필수
        intro:    '프로젝트 소개 글을 자유롭게 적으세요.\n줄바꿈도 가능합니다.',
        output:   [
          '결과물 1',
          '결과물 2',
          { text: '관련 링크 텍스트', url: 'https://example.com' }
        ],
        role:     '내가 맡은 역할을 자유롭게 적어요.'
      }

      - intro / role : 그냥 문자열로 적으면 돼요. \n 으로 줄바꿈.
      - output       : 배열입니다. 일반 글은 그냥 문자열, 링크는 { text, url } 형태.
      ───────────────────────────────────────────────
    */
    projects: [
      {
        name: '한국형 효과음원 구축 사업',
        year: '2021~2022',
        category: 'Sound Library',
        intro: '한국 고유의 효과음원을 체계적으로 구축하기 위한 사업으로, 사운드 디자인부터 라이브러리화까지 전반에 참여했습니다.',
        output: [
          '효과음원 1,200개 제작 완료',
          '국내 사운드 라이브러리 플랫폼 등재',
          { text: '관련 보도자료 보기', url: 'https://example.com' }
        ],
        role: '사운드 디자인, 녹음, 편집, 라이브러리 분류 체계 설계 담당'
      },
      {
        name: '회사 IP 라이브러리 제작',
        year: '2023',
        category: 'Sound Library',
        intro: '회사 자체 IP에 맞춘 효과음과 음악 라이브러리를 제작했어요.',
        output: [
          '내부 라이브러리 800여 종 제작',
          '프로젝트별 활용 가이드 문서화'
        ],
        role: '기획, 녹음, 편집 전반 담당'
      },
      {
        name: '오디오북 <점이지대>',
        year: '2023',
        category: 'Audio Book',
        intro: '경계와 모호함을 주제로 한 오디오북 작업이에요.',
        output: [
          '오디오북 8화 분량 제작',
          { text: '오디오북 듣기', url: 'https://example.com' }
        ],
        role: '사운드 디자인, 믹싱, 마스터링'
      },
      {
        name: '오디오북 <구운몽>',
        year: '2022',
        category: 'Audio Book',
        intro: '고전을 현대적으로 해석한 오디오북 프로젝트입니다.',
        output: [
          '전체 6화 분량 제작',
          '문학 콘텐츠 플랫폼 공급'
        ],
        role: '사운드 디자인, 믹싱'
      },
      {
        name: '오디오북 <반태산 귀신사냥꾼>',
        year: '2021',
        category: 'Audio Book',
        intro: '판타지 호러 장르의 오디오북 작업입니다.',
        output: [
          '전 12화 사운드 디자인',
          '캐릭터별 사운드 모티프 설계'
        ],
        role: 'SFX 디자인, 보이스 후반 작업'
      },
      {
        name: '공기관 미디어아트 전시',
        year: '2021',
        category: 'Media Art',
        intro: '공공기관 전시 공간을 위한 미디어아트 사운드 작업이에요.',
        output: [
          '상설 전시 사운드 시스템 구축',
          '관람객 동선 기반 멀티채널 사운드 설계'
        ],
        role: '공간 사운드 디자인, 멀티채널 셋업'
      },
      {
        name: '지역 문화 콘텐츠 재생 전시',
        year: '2021',
        category: 'Exhibition',
        intro: '지역의 문화 자산을 사운드로 재해석한 전시예요.',
        output: [
          '전시 기간 30일 운영',
          '지역 매체 보도 5건'
        ],
        role: '사운드 기획 및 디자인'
      },
      {
        name: '기업 B2B 실감콘텐츠 제작',
        year: '2023',
        category: 'Interactive',
        intro: '기업 대상 실감형 콘텐츠 사운드 작업이에요.',
        output: [
          '실감콘텐츠 6편 제작',
          '클라이언트 자체 채널 공개'
        ],
        role: '사운드 디자인, 믹싱'
      },
      {
        name: '아시아 문화 다큐멘터리',
        year: '2021~2022',
        category: 'Documentary',
        intro: '아시아 여러 문화권을 다룬 다큐멘터리 사운드 작업입니다.',
        output: [
          '총 8부작 사운드 후반 작업',
          '국내외 영화제 출품'
        ],
        role: '대사 편집, SFX, 믹싱'
      },
      {
        name: '2023 우리 역사넷 교육영상',
        year: '2023',
        category: 'Education',
        intro: '교육용 역사 영상의 사운드 작업이에요.',
        output: [
          '교육 영상 시리즈 사운드 후반 작업'
        ],
        role: 'SFX, 믹싱'
      }
    ]
  },
  talkback: {
    name: 'Talkback Studio',
    period: '2019.07 — 2020.03 · 8M',
    role: 'Sound Operator',
    summary: [
      {
        title: '주요 경험',
        items: [
          '동시 녹음 오퍼레이팅',
          '예능, 드라마, 콘텐츠 현장 녹음 진행',
          '후반 작업을 위한 사운드 정리 및 전달'
        ]
      },
      {
        title: '주요 성과 및 실적',
        items: [
          '런닝맨, 범인은 바로 너 등 예능 프로그램 동시녹음 참여',
          '세븐틴, NCT 자체 콘텐츠 동시녹음 참여',
          '독립 영화 및 웹드라마 동시녹음 다수 진행'
        ]
      }
    ],
    projects: [
      {
        name: '런닝맨',
        year: '2019',
        category: '예능',
        intro: 'SBS 예능 프로그램의 야외 촬영 현장 동시녹음을 담당했어요.',
        output: ['주요 회차 다수 참여'],
        role: '현장 동시녹음 오퍼레이팅'
      },
      {
        name: '범인은 바로 너',
        year: '2019',
        category: '예능',
        intro: '넷플릭스 오리지널 예능 시즌 동시녹음 참여 작업입니다.',
        output: ['시즌 2 다수 회차 참여'],
        role: '현장 동시녹음 오퍼레이팅'
      },
      {
        name: '세븐틴 자체 콘텐츠',
        year: '2019',
        category: 'Content',
        intro: '아티스트 자체 채널 콘텐츠 현장 녹음입니다.',
        output: ['자체 채널 다수 콘텐츠 참여'],
        role: '현장 녹음 진행'
      },
      {
        name: 'NCT 자체 콘텐츠',
        year: '2019',
        category: 'Content',
        intro: '아티스트 자체 채널 콘텐츠 현장 녹음입니다.',
        output: ['자체 채널 다수 콘텐츠 참여'],
        role: '현장 녹음 진행'
      },
      {
        name: '독립 영화 《빛이 사라지면》',
        year: '2019',
        category: 'Film',
        intro: '독립 영화 동시녹음 작업입니다.',
        output: ['장편 영화 1편'],
        role: '현장 동시녹음'
      },
      {
        name: '독립 영화 《여름밤》',
        year: '2020',
        category: 'Film',
        intro: '독립 영화 동시녹음 작업입니다.',
        output: ['장편 영화 1편'],
        role: '현장 동시녹음'
      },
      {
        name: '웹드라마 《코너의 끝》',
        year: '2020',
        category: 'Drama',
        intro: '웹드라마 시리즈 동시녹음입니다.',
        output: ['시즌 전 회차 참여'],
        role: '현장 동시녹음'
      },
      {
        name: '웹드라마 《다음 정거장》',
        year: '2020',
        category: 'Drama',
        intro: '웹드라마 시리즈 동시녹음입니다.',
        output: ['시즌 전 회차 참여'],
        role: '현장 동시녹음'
      },
      {
        name: '단편 광고 영상',
        year: '2020',
        category: 'Commercial',
        intro: '광고 영상 현장 녹음 작업입니다.',
        output: ['다수 광고 영상 참여'],
        role: '현장 동시녹음'
      }
    ]
  }
};

/*
  ───────────────────────────────────────────────
  포트폴리오 항목 작성 가이드
  ───────────────────────────────────────────────
  각 포트폴리오는 아래 필드를 가질 수 있어요.

  {
    id:       1,                                 // 필수, 고유한 숫자
    title:    'Lies of P',                       // 필수
    cat:      'RPG / Ingame',                    // 필수 (디테일 화면 카테고리 표시)
    tags:     ['rpg','ingame','unreal'],         // 필터에 사용. 카테고리 필터 버튼과 매칭.
    video:    'https://www.youtube.com/embed/영상ID',  // 비우면 placeholder가 보임
    meta: {
      period: '2023.01 ~ 2024.03',
      engine: 'Unreal Engine 5',
      tools:  'Pro Tools, Wwise, Dolby Atmos'
    },
    sections: {
      introduction: [
        { type: 'text', value: '소개 글입니다.' },
        { type: 'image', src: 'assets/images/lies-of-p-intro.jpg', alt: '인트로 이미지' }
      ],
      ambience:  [ { type: 'text', value: '...' } ],
      voice:     [ { type: 'text', value: '...' } ],
      sfx:       [ { type: 'text', value: '...' } ],
      ui:        [ { type: 'text', value: '...' } ]
    }
  }

  - sections 안의 각 섹션은 배열입니다. 글과 이미지를 자유롭게 섞을 수 있어요.
  - { type: 'text',  value: '글 내용' }   ← 줄바꿈은 \n 으로
  - { type: 'image', src: '이미지 경로', alt: '설명' }
  - 비어있는 섹션은 자동으로 "세부 내용은 추후 추가됩니다." 로 표시됩니다.
  ───────────────────────────────────────────────
*/
const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Dragon's Dogma 2",
    cat: 'RPG / Trailer',
    tags: ['rpg','trailer','unreal'],
    video: '',
    meta: { period: '2023.01 ~ 2024.03', engine: 'RE ENGINE', tools: 'Pro Tools, Wwise, Dolby Atmos' },
    sections: {
      introduction: [
        { type: 'text', value: '소개 글을 자유롭게 작성하세요.' }
      ],
      ambience: [],
      voice: [],
      sfx: [],
      ui: []
    }
  },
  { id: 2,  title: 'Black Myth: Wukong',     cat: 'RPG / Trailer',         tags: ['rpg','trailer','unreal'] },
  { id: 3,  title: 'Lies of P',              cat: 'RPG / Ingame',          tags: ['rpg','ingame','unreal'] },
  { id: 4,  title: 'Stellar Blade',          cat: 'Action / Ingame',       tags: ['ingame','unreal'] },
  { id: 5,  title: 'Ori and the Will of the Wisps', cat: 'Adventure / Ambience', tags: ['ingame'] },
  { id: 6,  title: 'P의 거짓 OST 작업',       cat: 'RPG / Music',           tags: ['rpg'] },
  { id: 7,  title: 'Mobile Game UI',         cat: 'Mobile / UI',           tags: ['ui','casual'] },
  { id: 8,  title: 'Horror Game Teaser',     cat: 'Horror / Trailer',      tags: ['horror','trailer'] },
  { id: 9,  title: 'Subculture Project A',   cat: 'Subculture / Ingame',   tags: ['subculture','ingame'] },
  { id: 10, title: 'Subculture Project B',   cat: 'Subculture / UI',       tags: ['subculture','ui'] },
  { id: 11, title: 'Casual Puzzle Game',     cat: 'Casual / UI',           tags: ['casual','ui'] },
  { id: 12, title: 'UE5 Tech Demo',          cat: 'Unreal / Trailer',      tags: ['unreal','trailer'] },
  { id: 13, title: 'Horror Short',           cat: 'Horror / Ingame',       tags: ['horror','ingame'] },
  { id: 14, title: 'RPG Cinematic',          cat: 'RPG / Trailer',         tags: ['rpg','trailer'] },
  { id: 15, title: 'Indie Casual Game',      cat: 'Casual / Ingame',       tags: ['casual','ingame'] }
];

/* ============== HELPERS ============== */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ============== NAV: scroll state + mobile toggle + active section ============== */
const nav = $('#nav');
const navToggle = $('#navToggle');
const navMenu = $('.nav__menu');
const navLinks = $$('.nav__link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-open');
  navMenu.classList.toggle('is-open');
});
// 메뉴 클릭 시 모바일에서는 닫기
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navMenu.classList.remove('is-open');
  });
});

// Active section by IntersectionObserver
const sections = ['profile','experience','portfolio','contact'].map(id => $('#' + id));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(s => s && sectionObserver.observe(s));

/* ============== REVEAL on scroll ============== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => revealObserver.observe(el));

// Intro 섹션 - 시야에서 벗어나면 다시 사라지도록 (재진입 시 다시 나타남)
const introSection = $('#intro');
if (introSection) {
  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      introSection.classList.toggle('is-in', entry.isIntersecting);
    });
  }, { threshold: 0.35 });
  introObserver.observe(introSection);
}

/* ============== EXPERIENCE ============== */
const expEmpty   = $('#expEmpty');
const expSummary = $('#expSummary');
const expDetail  = $('#expDetail');
const expBack    = $('#expBack');
const expLayout  = $('#expLayout');
const expSummaryTitle = $('#expSummaryTitle');
const expSummaryBody  = $('#expSummaryBody');
const expProjectsList = $('#expProjectsList');
const expProjectsCount = $('#expProjectsCount');
const expDetailList   = $('#expDetailList');
const expDetailTitle  = $('#expDetailTitle');
const expDetailMeta   = $('#expDetailMeta');

let currentCompany = null;

function showPanel(which) {
  [expEmpty, expSummary, expDetail].forEach(p => p.hidden = true);
  which.hidden = false;
  // 디테일 모드일 때만 좌측 축소
  expLayout.classList.toggle('is-detail', which === expDetail);
}

function renderCompanySummary(companyKey) {
  const data = COMPANY_DATA[companyKey];
  currentCompany = companyKey;

  expSummaryTitle.textContent = data.name;
  // 본문 (주요 경험 / 주요 성과)
  expSummaryBody.innerHTML = data.summary.map(sec => `
    <div class="exp-section">
      <h4>${sec.title}</h4>
      <ul>${sec.items.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `).join('');

  // 프로젝트 카드 그리드
  expProjectsCount.textContent = data.projects.length;
  expProjectsList.innerHTML = data.projects.map((p, idx) => `
    <button class="exp-project" data-project-idx="${idx}">
      <p class="exp-project__name">${p.name}</p>
      <p class="exp-project__year">${p.year}</p>
    </button>
  `).join('');

  // 회사 카드 active 상태 토글
  $$('.company-card').forEach(c => {
    c.classList.toggle('is-active', c.dataset.company === companyKey);
  });

  showPanel(expSummary);

  // 프로젝트 카드 클릭 바인딩
  $$('#expProjectsList .exp-project').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projectIdx, 10);
      renderProjectDetail(companyKey, idx);
    });
  });
}

const expDetailSections = $('#expDetailSections');

// 글의 줄바꿈(\n)을 <br>로
function nl2br(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br/>');
}
// 외부 링크 안전 처리
function safeUrl(u) {
  if (!u) return '#';
  if (/^https?:\/\//i.test(u) || u.startsWith('/') || u.startsWith('mailto:')) return u;
  return '#';
}
// output 배열을 HTML로 (문자열 또는 {text, url})
function renderOutput(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return '<p class="exp-detail__placeholder">세부 내용은 추후 추가됩니다.</p>';
  }
  const lis = arr.map(item => {
    if (typeof item === 'string') {
      return `<li>${nl2br(item)}</li>`;
    }
    if (item && item.url) {
      return `<li><a class="exp-detail__link" href="${safeUrl(item.url)}" target="_blank" rel="noopener">
        ${nl2br(item.text || item.url)}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a></li>`;
    }
    return '';
  }).join('');
  return `<ul class="exp-detail__output-list">${lis}</ul>`;
}

function renderProjectDetail(companyKey, projectIdx) {
  const data = COMPANY_DATA[companyKey];
  const project = data.projects[projectIdx];

  expDetailList.innerHTML = data.projects.map((p, idx) => `
    <button class="exp-detail__list-item ${idx === projectIdx ? 'is-active' : ''}" data-idx="${idx}">
      <p class="exp-detail__list-item-name">${p.name}</p>
      <p class="exp-detail__list-item-year">${p.year}</p>
    </button>
  `).join('');

  expDetailTitle.textContent = project.name;
  expDetailMeta.textContent  = `${project.category} · ${project.year}`;

  // 본문: 프로젝트 소개 / 산출물 결과 / 주요 역할
  const introHtml  = project.intro ? `<p>${nl2br(project.intro)}</p>` : '<p class="exp-detail__placeholder">세부 내용은 추후 추가됩니다.</p>';
  const outputHtml = renderOutput(project.output);
  const roleHtml   = project.role  ? `<p>${nl2br(project.role)}</p>`  : '<p class="exp-detail__placeholder">세부 내용은 추후 추가됩니다.</p>';

  expDetailSections.innerHTML = `
    <div class="exp-detail__row">
      <h4>프로젝트 소개</h4>
      ${introHtml}
    </div>
    <div class="exp-detail__row">
      <h4>산출물 결과</h4>
      ${outputHtml}
    </div>
    <div class="exp-detail__row">
      <h4>주요 역할</h4>
      ${roleHtml}
    </div>
  `;

  showPanel(expDetail);

  // 사이드 리스트 재바인딩
  $$('#expDetailList .exp-detail__list-item').forEach(item => {
    item.addEventListener('click', () => {
      renderProjectDetail(companyKey, parseInt(item.dataset.idx, 10));
    });
  });
}

// 회사 "자세히 보기" 버튼
$$('.company-card__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    renderCompanySummary(btn.dataset.companyBtn);
  });
});
// 회사 카드 자체 클릭으로도 진입 가능
$$('.company-card').forEach(card => {
  card.addEventListener('click', () => {
    renderCompanySummary(card.dataset.company);
  });
});

// 디테일 → 요약으로 돌아가기
expBack.addEventListener('click', () => {
  if (currentCompany) showPanel(expSummary);
});

/* ============== PORTFOLIO ============== */
const pfFilter = $('#portfolioFilter');
const pfCards  = $('#portfolioCards');
const pfGrid   = $('#portfolioGrid');
const pfDetail = $('#portfolioDetail');
const pfBack   = $('#pfBack');

const pfTitle    = $('#pfTitle');
const pfCategory = $('#pfCategory');
const pfVideo    = $('#pfVideo');

function renderPortfolio(filter = 'all') {
  const list = filter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.tags.includes(filter));

  if (list.length === 0) {
    pfCards.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-mute);padding:48px 0;">해당 카테고리의 작업이 아직 없어요.</p>`;
    return;
  }

  pfCards.innerHTML = list.map(p => `
    <article class="pf-card" data-pf-id="${p.id}">
      <div class="pf-card__thumb">
        <span class="pf-card__thumb-label">THUMBNAIL</span>
      </div>
      <div class="pf-card__body">
        <h3 class="pf-card__title">${p.title}</h3>
        <p class="pf-card__cat">${p.cat}</p>
      </div>
    </article>
  `).join('');

  $$('.pf-card', pfCards).forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.pfId, 10);
      openPortfolioDetail(id);
    });
  });
}

// YouTube/Vimeo URL → embed URL 변환
function toEmbedUrl(url) {
  if (!url) return '';
  // 이미 embed면 그대로
  if (/youtube\.com\/embed\//.test(url)) return url;
  if (/player\.vimeo\.com\/video\//.test(url)) return url;
  // youtu.be 단축형
  const yt1 = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (yt1) return `https://www.youtube.com/embed/${yt1[1]}`;
  // youtube watch?v=
  const yt2 = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (yt2) return `https://www.youtube.com/embed/${yt2[1]}`;
  // vimeo.com/123
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
}

// 섹션 블록 배열을 HTML로 (글 + 이미지)
function renderSectionBody(blocks) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return '<p class="pf-section__placeholder">세부 내용은 추후 추가됩니다.</p>';
  }
  return blocks.map(b => {
    if (!b || !b.type) return '';
    if (b.type === 'text') {
      return `<p class="pf-block-text">${nl2br(b.value || '')}</p>`;
    }
    if (b.type === 'image') {
      const cap = b.alt ? `<figcaption>${nl2br(b.alt)}</figcaption>` : '';
      return `<figure class="pf-block-image"><img src="${b.src}" alt="${(b.alt || '').replace(/"/g,'&quot;')}" loading="lazy"/>${cap}</figure>`;
    }
    return '';
  }).join('');
}

const PF_SECTION_LABELS = {
  introduction: 'INTRODUCTION',
  ambience:     'AMBIENCE',
  voice:        'VOICE',
  sfx:          'SFX',
  ui:           'UI'
};

function openPortfolioDetail(id) {
  const data = PORTFOLIO_DATA.find(p => p.id === id);
  if (!data) return;

  pfTitle.textContent = data.title;
  pfCategory.textContent = data.cat;

  // 메타
  const meta = data.meta || {};
  const periodEl = document.getElementById('pfPeriod');
  const engineEl = document.getElementById('pfEngine');
  const toolsEl  = document.getElementById('pfTools');
  if (periodEl) periodEl.textContent = meta.period || '–';
  if (engineEl) engineEl.textContent = meta.engine || '–';
  if (toolsEl)  toolsEl.textContent  = meta.tools  || '–';

  // 영상: URL 있으면 embed iframe, 없으면 placeholder
  const embed = toEmbedUrl(data.video);
  if (embed) {
    pfVideo.innerHTML = `<iframe src="${embed}" title="${data.title}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else {
    pfVideo.innerHTML = `
      <div class="pf-video__placeholder">
        <div>
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.08)"/><path d="M10 8.5v7l6-3.5-6-3.5Z" fill="rgba(255,255,255,0.85)"/></svg>
          <div>VIDEO PLAYER</div>
          <small>YouTube · Vimeo · MP4 링크를 연결하세요</small>
        </div>
      </div>
    `;
  }

  // 섹션 5개 렌더링
  const sections = data.sections || {};
  const pfSections = document.getElementById('pfSections');
  pfSections.innerHTML = Object.keys(PF_SECTION_LABELS).map(key => `
    <section class="pf-section">
      <h4 class="pf-section__title">${PF_SECTION_LABELS[key]}</h4>
      <div class="pf-section__body">
        ${renderSectionBody(sections[key])}
      </div>
    </section>
  `).join('');

  pfGrid.hidden = true;
  pfDetail.hidden = false;
  // 디테일 진입 시 섹션 최상단으로 스크롤
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePortfolioDetail() {
  pfDetail.hidden = true;
  pfGrid.hidden = false;
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 필터
pfFilter.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  $$('.pill', pfFilter).forEach(p => p.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderPortfolio(btn.dataset.filter);
});

pfBack.addEventListener('click', closePortfolioDetail);

// 초기 렌더링
renderPortfolio('all');
