/* ============================================================
   Yoon Hyeri · Sound Design Portfolio
   ============================================================ */

/* ============== DATA ============== */
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
      ⚠️ 작성 시 주의사항
      
      1. 배열([]) 안의 항목 사이에는 반드시 쉼표(,)
         예: ['항목1', '항목2', '항목3']  ← 끝에는 쉼표 X
      
      2. role 여러 줄로 쓰고 싶을 땐 한 줄 안에서 \n 으로 줄바꿈
         예: role: '첫째 줄\n둘째 줄\n셋째 줄'
      
      3. 따옴표는 짝을 맞춰야 함 ('...' 또는 "...")
      ───────────────────────────────────────────────
    */
    projects: [
      {
        name: '한국형 효과음원 구축 사업',
        year: '2021~2022',
        category: 'Sound Library',
        intro: '미디어 콘텐츠 후반제작에 즉시 활용 가능한 한국형 효과음원을 개발하는 목표를 가지고 진행한 사업',
        output: [
          '국가지정무형유산·전통 소리 관련 4000건 효과음원 제작',
          { text: 'K-SOUND LIBRARY', url: 'https://www.k-soundlibrary.kr/main.do' }
        ],
        role: '사전 단계 장비 구성 및 음향 파트 기획\n무형유산 조사·목록화·섭외\n메타데이터 구성 참여\n현장 녹음 및 소스 에디팅'
      },
      {
        name: '회사 IP 라이브러리 제작',
        year: '2023',
        category: 'Sound Library',
        intro: 'XR 콘텐츠에 활용 가능한 효과음원과 영상 콘텐츠를 개발하는 목표를 가지고 진행한 사업',
        output: [
          '자연, 공장 등의 환경, 폴리 사운드 카테고리 7종 제작',
          '360 XR 영상 환경음 5.1ch 사운드 디자인 제작'
        ],
        role: '사전 단계 장비 구성 및 음향 파트 기획\n현장 조사 및 섭외 목록화\n메타데이터 구성\n현장 녹음 및 소스 에디팅'
      },
      {
        name: '오디오북 <점이지대>',
        year: '2023',
        category: 'Audio Book',
        intro: '전북의 각 지역을 현대 문학으로 엮어 제작한 오디오북 제작 사업',
        output: [
          '바이노럴 포맷 오디오북 9편 (국내 E-Book 사이트 게시)',
          { text: '오디오북 듣기', url: 'https://www.welaaa.com/audio/detail/11690' }
        ],
        role: '작곡가 선정 및 일정 조율\n성우 녹음, 외부 녹음 화상 협업\n대사 에디팅, 효과음 제작, 음악 편집'
      },
      {
        name: '오디오북 <구운몽>',
        year: '2022',
        category: 'Audio Book',
        intro: '김만중 원작 <구운몽>을 각색한 오디오북 제작 사업',
        output: [
          '바이노럴 포맷 오디오북 6챕터 제작 (국내 E-Book 사이트 게시)',
          { text: '오디오북 듣기', url: 'https://www.welaaa.com/audio/detail/11125' }
        ],
        role: '작곡가 선정 및 일정 조율\n성우 녹음, 외부 녹음 화상 협업\n대사 에디팅, 효과음 제작, 음악 편집'
      },
      {
        name: '오디오북 <반태산 귀신사냥꾼>',
        year: '2021',
        category: 'Audio Book',
        intro: '한국형 효과음원 구축 사업의 일환으로 효과음원을 활용한 오디오북 제작한 사업',
        output: [
          '바이노럴 포맷 오디오북 2권 제작 (국내 E-Book 사이트 게시)',
          { text: '오디오북 듣기', url: 'https://www.welaaa.com/audio/detail/7943' }
        ],
        role: '작곡가 선정 및 일정 조율\n성우 녹음, 외부 녹음 화상 협업\n대사 에디팅, 효과음 제작, 음악 편집'
      },
      {
        name: '공기관 미디어아트 전시',
        year: '2021',
        category: 'Media Art',
        intro: '한국국토정보공사의 비전을 담은 전시관을 구축한 사업',
        output: [
          'VR콘텐츠 2편',
          'AR 콘텐츠 1편'
        ],
        role: '공간 사운드 디자인, 멀티채널 셋업'
      },
      {
        name: '지역 문화 콘텐츠 재생 전시',
        year: '2021',
        category: 'Exhibition',
        intro: '노후된 지역 산업 단지에 문화 콘텐츠를 제작을 목표로 전시관 구축',
        output: [
          '40분 실감전시영상 사운드 디자인 (9.1.6ch)',
          '인터랙티브 체험 콘텐츠 2종 개발'
        ],
        role: '현장 장비 구성 및 전시 장비 구축\n동시녹음\n효과음 제작 및 사운드 디자인\n소리와 연관된 인터랙티브 체험 콘텐츠 2종 개발 및 구현'
      },
      {
        name: '인공지능 콘텐츠 미디어아트 전시',
        year: '2021',
        category: 'Exhibition',
        intro: '광주의 100년 역사를 학습한 AI의 데이터와 제너러티브 아트를 결합한 결과물을 전시 콘텐츠로 제작',
        output: [
          '전시 영상 2편 사운드 디자인',
          '광주실감콘텐츠큐브GCC에서 상영'
        ],
        role: '버츄얼 휴먼 캐릭터 보이스 에디팅 및 디자인\n음악 선곡 및 편집\n효과음 제작 및 사운드디자인'
      },
      {
        name: '지역 특성 미디어아트 콘텐츠 전시',
        year: '2021',
        category: 'Exhibition',
        intro: '목포의 문화, 맛, 근대건축공간에 대한 영상 콘텐츠를 제작',
        output: [
          '영상 콘텐츠 3종',
          '목포미식문화갤러리에서 상영'
        ],
        role: '현장 녹음\n폴리 사운드 후시 녹음\n음원 선곡 및 편집\n성우 녹음 화상 진행 및 대사 에디팅\n효과음 제작 및 사운드 디자인'
      },
      {
        name: '지역 IP 미디어아트 전시',
        year: '2021',
        category: 'Exhibition',
        intro: '고대도의 미션아일랜드 사업이 진행되며 전시공간을 구축',
        output: [
          '미디어아트 영상 3건 (7.1.4ch)',
          '고대도 별빛공원 해양문화관광체험관에서 상영'
        ],
        role: '장비 구축 및 현장 믹싱\n성우 녹음 및 대사 에디팅\n음원 편집\n효과음 제작 및 사운드 디자인'
      },
      {
        name: '기업 B2B 실감콘텐츠 제작',
        year: '2023',
        category: 'Interactive',
        intro: '현대 글로비스의 실감형 브랜드 필름의 사운드 디자인을 진행',
        output: [
          '실감형 미디어 영상 2편',
          '성수동 현대글로비스 사옥에서 상영'
        ],
        role: '현장 믹싱\n성우 녹음 및 대사 에디팅\n음원 선곡 및 편집\n효과음 제작 및 사운드 디자인'
      },
      {
        name: '아시아 문화 다큐멘터리',
        year: '2021~2022',
        category: 'Documentary',
        intro: '국립 아시아문화전당에서 주관하는 아시아문화 아카이브 구축 사업',
        output: [
          '2021년 총 13편',
          '2022년 총 11편',
          { text: 'ACC 아카이브 이야기', url: 'http://archive.acc.go.kr/chnnelAcc/chnnelAccDetailView.do' }
        ],
        role: '현장 인터뷰 녹음\n음악 선곡 및 편집\n대사 에디팅\n기관 로고 사운드 제작'
      },
      {
        name: '2023 우리 역사넷 교육영상',
        year: '2023',
        category: 'Education',
        intro: '우리 역사넷 교육영상 제작',
        output: [
          '다큐멘터리 6편 제작 (농악, 읍성, 질그릇, 탱화, 해녀, 혼례)',
          { text: '우리역사', url: 'https://contents.history.go.kr/play/main.do?itemId=tt' }
        ],
        role: '현장 인터뷰 녹음\n음악 선곡 및 편집\n대사 에디팅\n효과음 제작'
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
        intro: 'SBS 예능 런닝맨 동시녹음 참여 작업',
        output: ['런닝맨 2회차 촬영분 동시녹음'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '범인은 바로 너',
        year: '2019',
        category: '예능',
        intro: '넷플릭스 오리지널 예능 동시녹음 참여 작업',
        output: ['범인은 바로 너 시즌 3 8화'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '세븐틴 자체 콘텐츠',
        year: '2019',
        category: 'Content',
        intro: '아티스트 자체 채널 콘텐츠 현장 녹음',
        output: ['고잉세븐틴 2019 EP.21'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: 'NCT 자체 콘텐츠',
        year: '2019',
        category: '예능',
        intro: '아티스트 자체 채널 콘텐츠 현장 녹음',
        output: ['자체콘텐츠 2편'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '우리 다시 사랑할 수 있을까',
        year: '2019',
        category: '예능',
        intro: 'MBN 예능 동시녹음 참여',
        output: ['우리 다시 사랑할 수 있을까 시즌1, 시즌3'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '쏭개팅',
        year: '2020',
        category: '예능',
        intro: '웹예능 동시녹음 참여 작업',
        output: ['다수의 컨텐츠 참여'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅\n현장 라이브 셋팅'
      },
      {
        name: '아이돌 예병대 캠프',
        year: '2020',
        category: '예능',
        intro: 'Seezn 자체컨텐츠 웹예능 동시녹음 작업',
        output: ['예병대캠프 4기 라비, 태민 편 촬영'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '왓더펀',
        year: '2020',
        category: 'Content',
        intro: '웹예능 동시녹음 참여',
        output: ['왓더펀 공포특집 납치된 신동훈을 구해라 편 촬영'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      },
      {
        name: '사장님 귀는 당나귀 귀',
        year: '2020',
        category: '예능',
        intro: 'KBS 예능 동시녹음 참여',
        output: ['김기태 감독편 촬영'],
        role: '출연진 마이크 관리 및 레코더 오퍼레이팅'
      }
    ]
  }
};

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

/* ============== NAV ============== */
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
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navMenu.classList.remove('is-open');
  });
});

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

/* ============== REVEAL ============== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => revealObserver.observe(el));

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
  expLayout.classList.toggle('is-detail', which === expDetail);
}

function renderCompanySummary(companyKey) {
  const data = COMPANY_DATA[companyKey];
  currentCompany = companyKey;

  expSummaryTitle.textContent = data.name;
  expSummaryBody.innerHTML = data.summary.map(sec => `
    <div class="exp-section">
      <h4>${sec.title}</h4>
      <ul>${sec.items.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `).join('');

  expProjectsCount.textContent = data.projects.length;
  expProjectsList.innerHTML = data.projects.map((p, idx) => `
    <button class="exp-project" data-project-idx="${idx}">
      <p class="exp-project__name">${p.name}</p>
      <p class="exp-project__year">${p.year}</p>
    </button>
  `).join('');

  $$('.company-card').forEach(c => {
    c.classList.toggle('is-active', c.dataset.company === companyKey);
  });

  showPanel(expSummary);

  $$('#expProjectsList .exp-project').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projectIdx, 10);
      renderProjectDetail(companyKey, idx);
    });
  });
}

const expDetailSections = $('#expDetailSections');

function nl2br(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br/>');
}
function safeUrl(u) {
  if (!u) return '#';
  if (/^https?:\/\//i.test(u) || u.startsWith('/') || u.startsWith('mailto:')) return u;
  return '#';
}
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

  $$('#expDetailList .exp-detail__list-item').forEach(item => {
    item.addEventListener('click', () => {
      renderProjectDetail(companyKey, parseInt(item.dataset.idx, 10));
    });
  });
}

$$('.company-card__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    renderCompanySummary(btn.dataset.companyBtn);
  });
});
$$('.company-card').forEach(card => {
  card.addEventListener('click', () => {
    renderCompanySummary(card.dataset.company);
  });
});

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

function toEmbedUrl(url) {
  if (!url) return '';
  if (/youtube\.com\/embed\//.test(url)) return url;
  if (/player\.vimeo\.com\/video\//.test(url)) return url;
  const yt1 = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (yt1) return `https://www.youtube.com/embed/${yt1[1]}`;
  const yt2 = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (yt2) return `https://www.youtube.com/embed/${yt2[1]}`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
}

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

  const meta = data.meta || {};
  const periodEl = document.getElementById('pfPeriod');
  const engineEl = document.getElementById('pfEngine');
  const toolsEl  = document.getElementById('pfTools');
  if (periodEl) periodEl.textContent = meta.period || '–';
  if (engineEl) engineEl.textContent = meta.engine || '–';
  if (toolsEl)  toolsEl.textContent  = meta.tools  || '–';

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
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePortfolioDetail() {
  pfDetail.hidden = true;
  pfGrid.hidden = false;
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

pfFilter.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  $$('.pill', pfFilter).forEach(p => p.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderPortfolio(btn.dataset.filter);
});

pfBack.addEventListener('click', closePortfolioDetail);

renderPortfolio('all');
