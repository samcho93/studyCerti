/* 인증 시험 아카데미 — 라우터 / 렌더러 / 진도 / 퀴즈 / 검색 */
(function () {
  'use strict';
  var C = window.COURSE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var content = $('#content');
  var sidebar = $('#sidebar');

  /* ---------- 저장소 (실패해도 동작) ---------- */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('certAcademy.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('certAcademy.' + k, JSON.stringify(v)); } catch (e) { /* 무시 */ } }
  };
  var done = store.get('done', {});
  var quizScores = store.get('quiz', {});

  function isDone(id) { return !!done[id]; }
  function setDone(id, v) {
    if (v) done[id] = Date.now(); else delete done[id];
    store.set('done', done);
    renderSidebar(); updateProgress();
  }

  /* ---------- 테마 ---------- */
  var theme = store.get('theme', null);
  if (theme) document.documentElement.setAttribute('data-theme', theme);
  $('#themeToggle').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
  });

  /* ---------- 모바일 메뉴 ---------- */
  $('#menuToggle').addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  $('#scrim').addEventListener('click', function () { document.body.classList.remove('nav-open'); });

  /* ---------- 유틸 ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function stripHtml(h) { var d = document.createElement('div'); d.innerHTML = h || ''; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  var ICONS = {
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    wave: '<path d="M2 12c2.5-6 4.5-6 7 0s4.5 6 7 0 4.5-6 6-3"/>',
    badge: '<path d="M12 3l2.5 2 3.2-.2.6 3.1 2.5 2-1.5 2.9.4 3.2-3.1.9-1.7 2.7L12 18l-2.9 1.6-1.7-2.7-3.1-.9.4-3.2L3.2 10l2.5-2 .6-3.1 3.2.2z"/><path d="M9 12l2 2 4-4"/>',
    meter: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M6 14l3-5 3 3 3-6 3 8"/><path d="M8 21h8"/>',
    antenna: '<path d="M12 11v10"/><circle cx="12" cy="9" r="2"/><path d="M7.8 13.2a6 6 0 0 1 0-8.4M16.2 4.8a6 6 0 0 1 0 8.4M5 16a10 10 0 0 1 0-14M19 2a10 10 0 0 1 0 14"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M13 7l-3 5h4l-3 5"/>',
    head: '<path d="M9 21v-3H7a2 2 0 0 1-2-2v-3l-2-1 2-3a7 7 0 0 1 14 1c0 3-1.5 5-3 6v5"/><path d="M14 8.5c1 .8 1 2.2 0 3M16.5 6.5c2 1.8 2 5.2 0 7"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11v6M8 15h2M12 15h2"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    form: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>'
  };
  function icon(name, size) {
    size = size || 18;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  var CHEV = '<svg class="chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>';

  /* ---------- 진도 ---------- */
  function updateProgress() {
    var all = C.orderedLessons();
    var n = all.filter(function (l) { return isDone(l.id); }).length;
    var pct = all.length ? Math.round(n / all.length * 100) : 0;
    $('#progressPill').textContent = '진도 ' + pct + '%';
    $('#progressPill').title = n + ' / ' + all.length + ' 강의 완료';
  }

  /* ---------- 사이드바 ---------- */
  var openMods = store.get('openMods', null);
  function renderSidebar() {
    var route = currentRoute();
    var h = '';
    h += '<a class="nav-link' + (route.name === 'home' ? ' active' : '') + '" href="#/">' + icon('home', 16) + ' 홈</a>';
    h += '<div class="nav-section">강의</div>';
    C.MODULES.forEach(function (m) {
      var ls = C.lessonsOf(m.id);
      var nDone = ls.filter(function (l) { return isDone(l.id); }).length;
      var activeLesson = route.name === 'lesson' && C.getLesson(route.arg) && C.getLesson(route.arg).module === m.id;
      var isOpen = activeLesson || (route.name === 'module' && route.arg === m.id) || (openMods ? openMods.indexOf(m.id) >= 0 : false);
      h += '<details class="nav-mod" data-mod="' + m.id + '"' + (isOpen ? ' open' : '') + '>';
      h += '<summary><span class="mod-no">' + m.no + '</span><span>' + esc(m.title) + '</span> <span class="mod-count">' + nDone + '/' + ls.length + '</span>' + CHEV + '</summary>';
      h += '<div class="nav-lessons">';
      h += '<a class="nav-link' + (route.name === 'module' && route.arg === m.id ? ' active' : '') + '" href="#/m/' + m.id + '"><span class="muted">모듈 개요</span></a>';
      ls.forEach(function (l) {
        var act = route.name === 'lesson' && route.arg === l.id;
        h += '<a class="nav-link' + (act ? ' active' : '') + '" href="#/l/' + l.id + '"><span class="check' + (isDone(l.id) ? ' done' : '') + '"></span><span>' + esc(l.title) + '</span></a>';
      });
      h += '</div></details>';
    });
    h += '<div class="nav-section">학습 도구</div>';
    [['tools', 'calc', 'RF 계산기'], ['glossary', 'book', '용어집'], ['resources', 'link', '참고자료 · 링크'], ['forms', 'form', '양식 · 시험 기록지']].forEach(function (x) {
      h += '<a class="nav-link' + (route.name === x[0] ? ' active' : '') + '" href="#/' + x[0] + '">' + icon(x[1], 16) + ' ' + x[2] + '</a>';
    });
    sidebar.innerHTML = h;
    $$('.nav-mod', sidebar).forEach(function (d) {
      d.addEventListener('toggle', function () {
        openMods = $$('.nav-mod[open]', sidebar).map(function (x) { return x.getAttribute('data-mod'); });
        store.set('openMods', openMods);
      });
    });
    var act = $('.nav-link.active', sidebar);
    if (act && act.scrollIntoView) {
      var r = act.getBoundingClientRect(), sr = sidebar.getBoundingClientRect();
      if (r.top < sr.top || r.bottom > sr.bottom) act.scrollIntoView({ block: 'center' });
    }
  }

  /* ---------- 라우터 ---------- */
  function currentRoute() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var parts = h.split('/');
    var hashIdx = h.indexOf('#');
    if (!h) return { name: 'home' };
    if (parts[0] === 'l') return { name: 'lesson', arg: parts[1] && parts[1].split('#')[0], anchor: hashIdx > 0 ? h.slice(hashIdx + 1) : null };
    if (parts[0] === 'm') return { name: 'module', arg: parts[1] };
    if (parts[0].indexOf('search') === 0) return { name: 'search', arg: h.split('?q=')[1] || '' };
    return { name: parts[0].split('?')[0], arg: parts[1] };
  }

  function route() {
    var r = currentRoute();
    document.body.classList.remove('nav-open');
    var view = VIEWS[r.name] || VIEWS.notfound;
    content.innerHTML = view(r) || '';
    renderSidebar();
    enhance(content);
    if (r.anchor) {
      var el = document.getElementById(r.anchor);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  /* ---------- 뷰 ---------- */
  var VIEWS = {};

  VIEWS.home = function () {
    var all = C.orderedLessons();
    var totalMin = all.reduce(function (s, l) { return s + (l.minutes || 0); }, 0);
    var nDone = all.filter(function (l) { return isDone(l.id); }).length;
    var nextL = all.filter(function (l) { return !isDone(l.id); })[0];
    var h = '<div class="page wide">';
    h += '<section class="hero">';
    h += '<img class="hero-wave" src="assets/img/hero-wave.svg" alt="">';
    h += '<div class="breadcrumb">신입사원 교육 과정</div>';
    h += '<h1>인증 시험 아카데미</h1>';
    h += '<p>무선(RF)·SAR·EMC·KC 인증 시험 업무에 필요한 지식을 처음부터 차근차근 배웁니다. 전파의 기초부터 시험 장비, 시험 절차, 올바른 기록과 성적서 작성까지 실무 흐름대로 구성했습니다.</p>';
    h += '<div class="hero-actions">';
    if (nextL) h += '<a class="btn primary" href="#/l/' + nextL.id + '">' + (nDone ? '이어서 학습하기' : '학습 시작하기') + ' →</a>';
    h += '<a class="btn" href="#/tools">' + icon('calc', 16) + ' RF 계산기</a>';
    h += '<a class="btn" href="#/glossary">' + icon('book', 16) + ' 용어집</a>';
    h += '</div></section>';

    h += '<div class="kbox">';
    h += '<div><div class="k">모듈</div><div class="v">' + C.MODULES.length + '개</div></div>';
    h += '<div><div class="k">강의</div><div class="v">' + all.length + '개</div></div>';
    h += '<div><div class="k">예상 학습 시간</div><div class="v">약 ' + Math.round(totalMin / 60 * 10) / 10 + '시간</div></div>';
    h += '<div><div class="k">완료한 강의</div><div class="v">' + nDone + ' / ' + all.length + '</div></div>';
    h += '</div>';

    h += '<h2>교육 과정</h2><div class="mod-grid">';
    C.MODULES.forEach(function (m) {
      var ls = C.lessonsOf(m.id);
      var d = ls.filter(function (l) { return isDone(l.id); }).length;
      var min = ls.reduce(function (s, l) { return s + (l.minutes || 0); }, 0);
      h += '<a class="card mod-card" href="#/m/' + m.id + '">';
      h += '<div class="mod-top"><div class="mod-ico">' + icon(m.icon, 20) + '</div><div><div class="mod-no">MODULE ' + m.no + '</div><h3>' + esc(m.title) + '</h3></div></div>';
      h += '<p>' + esc(m.desc) + '</p>';
      h += '<div class="mod-foot"><span>강의 ' + ls.length + '개 · 약 ' + min + '분</span><span>' + d + '/' + ls.length + '</span></div>';
      h += '<div class="bar"><span style="width:' + (ls.length ? d / ls.length * 100 : 0) + '%"></span></div>';
      h += '</a>';
    });
    h += '</div>';

    h += '<h2>학습 도구</h2><div class="card-grid">';
    h += '<a class="card" href="#/tools"><h3>' + icon('calc') + ' RF 계산기</h3><p>dBm↔W 변환, 파장, EIRP, 전계강도, 전력밀도, 케이블 손실 보정 계산.</p></a>';
    h += '<a class="card" href="#/glossary"><h3>' + icon('book') + ' 용어집</h3><p>현장에서 자주 쓰는 약어와 용어를 쉬운 말로 풀이.</p></a>';
    h += '<a class="card" href="#/resources"><h3>' + icon('link') + ' 참고자료 · 링크</h3><p>국립전파연구원, FCC, ETSI, 표준, 장비 제조사 등 공식 자료 모음.</p></a>';
    h += '<a class="card" href="#/forms"><h3>' + icon('form') + ' 양식 · 시험 기록지</h3><p>인쇄해서 쓰는 시험 기록지, 장비 점검표, 시료 접수 체크리스트.</p></a>';
    h += '</div>';
    h += '</div>';
    return h;
  };

  VIEWS.module = function (r) {
    var m = C.getModule(r.arg);
    if (!m) return VIEWS.notfound();
    var ls = C.lessonsOf(m.id);
    var h = '<div class="page">';
    h += '<div class="breadcrumb"><a href="#/">홈</a> / <span>MODULE ' + m.no + '</span></div>';
    h += '<h1>' + esc(m.title) + '</h1><p class="lead">' + esc(m.desc) + '</p>';
    h += '<ul class="lesson-list">';
    ls.forEach(function (l, i) {
      h += '<li><a href="#/l/' + l.id + '"><span class="idx">' + m.no + '-' + (i + 1) + '</span><div><div class="t">' + esc(l.title) + '</div>';
      h += '<div class="s">' + esc(l.summary || '') + '</div>';
      h += '<div class="meta" style="margin:6px 0 0">' + (l.level ? '<span class="tag lv-' + esc(l.level) + '">' + esc(l.level) + '</span>' : '') + (l.minutes ? '<span class="tag">⏱ ' + l.minutes + '분</span>' : '') + (l.quiz && l.quiz.length ? '<span class="tag">퀴즈 ' + l.quiz.length + '문항</span>' : '') + '</div>';
      h += '</div><span class="check' + (isDone(l.id) ? ' done' : '') + '"></span></a></li>';
    });
    h += '</ul>';
    if (!ls.length) h += '<p class="muted">준비 중인 모듈입니다.</p>';
    h += '</div>';
    return h;
  };

  VIEWS.lesson = function (r) {
    var l = C.getLesson(r.arg);
    if (!l) return VIEWS.notfound();
    var m = C.getModule(l.module);
    var all = C.orderedLessons();
    var idx = all.indexOf(l);
    var prev = all[idx - 1], next = all[idx + 1];
    var mIdx = C.lessonsOf(l.module).indexOf(l) + 1;

    var h = '<article class="page lesson" data-lesson="' + l.id + '">';
    h += '<div class="breadcrumb"><a href="#/">홈</a> / <a href="#/m/' + m.id + '">' + m.no + ' ' + esc(m.title) + '</a> / <span>' + m.no + '-' + mIdx + '</span></div>';
    h += '<h1>' + esc(l.title) + '</h1>';
    h += '<div class="meta">' + (l.level ? '<span class="tag lv-' + esc(l.level) + '">' + esc(l.level) + '</span>' : '') + (l.minutes ? '<span class="tag">⏱ 약 ' + l.minutes + '분</span>' : '') + (isDone(l.id) ? '<span class="tag lv-기초">✓ 학습 완료</span>' : '') + '</div>';
    if (l.summary) h += '<p class="lead">' + esc(l.summary) + '</p>';
    if (l.objectives && l.objectives.length) {
      h += '<section class="objectives"><h2>학습 목표</h2><ul>' + l.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></section>';
    }
    h += '<div class="toc-slot"></div>';
    h += '<div class="lesson-body">' + (l.body || '') + '</div>';

    if (l.quiz && l.quiz.length) h += renderQuiz(l);

    if (l.refs && l.refs.length) {
      h += '<section class="refs"><h2>참고자료</h2><ul>';
      l.refs.forEach(function (x) {
        var ext = /^https?:/.test(x.url);
        h += '<li><a href="' + esc(x.url) + '"' + (ext ? ' target="_blank" rel="noopener" class="ext"' : '') + '>' + esc(x.title) + '</a>' + (x.note ? '<span class="note">' + esc(x.note) + '</span>' : '') + '</li>';
      });
      h += '</ul></section>';
    }

    h += '<div class="complete-bar"><span>' + (isDone(l.id) ? '이 강의를 완료했습니다.' : '내용을 모두 이해했다면 완료로 표시하세요.') + '</span>';
    h += '<button class="btn ' + (isDone(l.id) ? '' : 'ok') + '" data-act="toggle-done">' + (isDone(l.id) ? '완료 취소' : '✓ 학습 완료') + '</button></div>';

    h += '<nav class="lesson-foot">';
    h += prev ? '<a class="navbtn" href="#/l/' + prev.id + '"><div class="dir">← 이전 강의</div><div>' + esc(prev.title) + '</div></a>' : '<span></span>';
    h += next ? '<a class="navbtn next" href="#/l/' + next.id + '"><div class="dir">다음 강의 →</div><div>' + esc(next.title) + '</div></a>' : '<span></span>';
    h += '</nav></article>';
    return h;
  };

  function renderQuiz(l) {
    var prevScore = quizScores[l.id];
    var h = '<section class="quiz" data-quiz="' + l.id + '"><h2>확인 퀴즈</h2>';
    h += '<p class="muted" style="margin:0">' + l.quiz.length + '문항 · 정답을 고른 뒤 채점하세요.' + (prevScore != null ? ' (최근 점수: ' + prevScore + '/' + l.quiz.length + ')' : '') + '</p>';
    l.quiz.forEach(function (q, i) {
      h += '<div class="q" data-answer="' + q.answer + '"><div class="q-title">Q' + (i + 1) + '. ' + q.q + '</div><div class="opts">';
      q.options.forEach(function (o, j) {
        h += '<label class="opt"><input type="radio" name="q' + i + '" value="' + j + '"><span>' + o + '</span></label>';
      });
      h += '</div>' + (q.explain ? '<div class="explain"><strong>해설</strong> ' + q.explain + '</div>' : '') + '</div>';
    });
    h += '<div class="quiz-actions"><button class="btn primary" data-act="grade">채점하기</button><button class="btn" data-act="reset-quiz">다시 풀기</button><span class="score"></span></div>';
    h += '</section>';
    return h;
  }

  function gradeQuiz(sec) {
    var id = sec.getAttribute('data-quiz');
    var qs = $$('.q', sec), ok = 0;
    qs.forEach(function (q) {
      var ans = +q.getAttribute('data-answer');
      var sel = $('input:checked', q);
      $$('label.opt', q).forEach(function (lb, j) {
        lb.classList.remove('correct', 'wrong');
        if (j === ans) lb.classList.add('correct');
        else if (sel && +sel.value === j) lb.classList.add('wrong');
      });
      if (sel && +sel.value === ans) ok++;
    });
    sec.classList.add('graded');
    var msg = ok === qs.length ? ' 🎉 모두 정답!' : (ok >= Math.ceil(qs.length * 0.7) ? ' 잘했어요.' : ' 본문을 다시 확인해 보세요.');
    $('.score', sec).textContent = qs.length + '문항 중 ' + ok + '개 정답.' + msg;
    quizScores[id] = ok; store.set('quiz', quizScores);
    if (ok === qs.length && !isDone(id)) {
      setDone(id, true);
      var bar = $('.complete-bar');
      if (bar) bar.innerHTML = '<span>퀴즈를 모두 맞혀 자동으로 완료 처리되었습니다.</span><button class="btn" data-act="toggle-done">완료 취소</button>';
    }
  }

  VIEWS.search = function (r) {
    var q = (r.arg || '').trim();
    $('#searchInput').value = q;
    var h = '<div class="page"><div class="breadcrumb"><a href="#/">홈</a> / 검색</div><h1>검색 결과</h1>';
    if (!q) return h + '<p class="muted">검색어를 입력하세요.</p></div>';
    var ql = q.toLowerCase();
    var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    var hits = [];
    C.orderedLessons().forEach(function (l) {
      var text = stripHtml(l.body);
      var inTitle = l.title.toLowerCase().indexOf(ql) >= 0;
      var pos = text.toLowerCase().indexOf(ql);
      if (inTitle || pos >= 0 || (l.summary || '').toLowerCase().indexOf(ql) >= 0) {
        var count = text.toLowerCase().split(ql).length - 1;
        var snip = pos >= 0 ? (pos > 60 ? '…' : '') + text.substr(Math.max(0, pos - 60), 180) + '…' : (l.summary || '');
        hits.push({ score: (inTitle ? 100 : 0) + count, type: 'lesson', l: l, snip: snip });
      }
    });
    C.terms().forEach(function (t) {
      var s = (t.term + ' ' + (t.en || '') + ' ' + t.desc).toLowerCase();
      if (s.indexOf(ql) >= 0) hits.push({ score: (t.term.toLowerCase().indexOf(ql) >= 0 || (t.en || '').toLowerCase().indexOf(ql) >= 0) ? 50 : 5, type: 'term', t: t });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    h += '<p class="muted">"' + esc(q) + '" — ' + hits.length + '건</p>';
    hits.forEach(function (x) {
      if (x.type === 'lesson') {
        var m = C.getModule(x.l.module);
        h += '<div class="search-result"><div class="p">강의 · ' + m.no + ' ' + esc(m.title) + '</div><a class="t" href="#/l/' + x.l.id + '">' + esc(x.l.title).replace(re, '<mark>$1</mark>') + '</a><div class="x">' + esc(x.snip).replace(re, '<mark>$1</mark>') + '</div></div>';
      } else {
        h += '<div class="search-result"><div class="p">용어집</div><a class="t" href="#/glossary?' + encodeURIComponent(x.t.term) + '">' + esc(x.t.term).replace(re, '<mark>$1</mark>') + (x.t.en ? ' <span class="muted">(' + esc(x.t.en) + ')</span>' : '') + '</a><div class="x">' + esc(x.t.desc).replace(re, '<mark>$1</mark>') + '</div></div>';
      }
    });
    if (!hits.length) h += '<p>검색 결과가 없습니다. 다른 표현(영문 약어 등)으로 검색해 보세요.</p>';
    return h + '</div>';
  };

  // 용어에 연결된 강의가 없으면: 제목에 용어가 들어간 강의 → 본문 언급이 가장 많은 강의
  var lessonText = null;
  function guessLesson(t) {
    if (!lessonText) lessonText = C.orderedLessons().map(function (l) { return { l: l, title: l.title.toLowerCase(), text: stripHtml(l.body).toLowerCase() }; });
    var keys = [t.term, t.en].filter(function (k) { return k && k.length >= 2; }).map(function (k) { return k.toLowerCase().replace(/\s*\(.*\)\s*/g, ''); });
    var best = null, bestScore = 0;
    lessonText.forEach(function (x) {
      var s = 0;
      keys.forEach(function (k) {
        if (!k) return;
        if (x.title.indexOf(k) >= 0) s += 20;
        s += Math.min(x.text.split(k).length - 1, 15);
      });
      if (s > bestScore) { bestScore = s; best = x.l; }
    });
    return bestScore >= 2 ? best.id : null;
  }

  VIEWS.glossary = function (r) {
    var terms = C.terms().slice().sort(function (a, b) { return a.term.localeCompare(b.term, 'ko'); });
    var cats = [];
    terms.forEach(function (t) { if (t.cat && cats.indexOf(t.cat) < 0) cats.push(t.cat); });
    var init = (location.hash.split('?')[1] || '');
    var h = '<div class="page"><div class="breadcrumb"><a href="#/">홈</a> / 용어집</div><h1>용어집</h1>';
    h += '<p class="lead">현장에서 자주 쓰는 용어와 약어 ' + terms.length + '개를 쉬운 말로 정리했습니다.</p>';
    h += '<input class="gloss-input" id="glossQ" type="search" placeholder="용어 필터 (한글/영문)" value="' + esc(decodeURIComponent(init)) + '">';
    h += '<div class="gloss-filter"><button class="chip on" data-cat="">전체</button>' + cats.map(function (c) { return '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') + '</div>';
    h += '<div id="glossList">';
    terms.forEach(function (t) {
      var lid = t.lesson && C.getLesson(t.lesson) ? t.lesson : guessLesson(t);
      var link = lid ? ' <a href="#/l/' + lid + '" style="font-size:13px">관련 강의 →</a>' : '';
      h += '<div class="gloss-item" data-cat="' + esc(t.cat || '') + '" data-s="' + esc((t.term + ' ' + (t.en || '') + ' ' + t.desc).toLowerCase()) + '"><span class="term">' + esc(t.term) + '</span>' + (t.en ? '<span class="en">' + esc(t.en) + '</span>' : '') + (t.cat ? '<span class="tag cat">' + esc(t.cat) + '</span>' : '') + '<p>' + t.desc + link + '</p></div>';
    });
    h += '</div></div>';
    return h;
  };

  VIEWS.resources = function () {
    var res = C.resources();
    var cats = [];
    res.forEach(function (x) { if (cats.indexOf(x.cat) < 0) cats.push(x.cat); });
    var h = '<div class="page wide"><div class="breadcrumb"><a href="#/">홈</a> / 참고자료</div><h1>참고자료 · 링크</h1>';
    h += '<p class="lead">공식 기관, 표준, 장비 제조사 자료 모음입니다. 규정과 표준은 자주 개정되므로 <strong>항상 최신본을 공식 사이트에서 확인</strong>하세요.</p>';
    h += '<div class="callout note"><span class="callout-title">사내 자료 추가 방법</span>사내 시험 절차서(SOP), 장비 매뉴얼 PDF, 실험실 사진은 <code>docs/</code>, <code>assets/img/lab/</code> 폴더에 넣고 <code>assets/js/content/resources.js</code>에 링크를 추가하면 이 페이지에 표시됩니다. 자세한 방법은 README.md를 참고하세요.</div>';
    cats.forEach(function (c) {
      h += '<section class="res-group"><h2>' + esc(c) + '</h2><div class="res-list">';
      res.filter(function (x) { return x.cat === c; }).forEach(function (x) {
        var ext = /^https?:/.test(x.url);
        h += '<a href="' + esc(x.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><div class="t">' + esc(x.title) + (ext ? ' ↗' : '') + '</div><div class="d">' + esc(x.desc || '') + '</div><div class="u">' + esc(x.url.replace(/^https?:\/\//, '')) + '</div></a>';
      });
      h += '</div></section>';
    });
    return h + '</div>';
  };

  VIEWS.forms = function () {
    var forms = [
      ['forms/test-record-sheet.html', '무선 시험 기록지 (원시 데이터)', '시험 항목별 측정값, 한계값, 판정, 사용 장비, 환경 조건을 기록하는 양식.'],
      ['forms/sar-record-sheet.html', 'SAR 시험 기록지', '조직등가액 특성, 시스템 체크, 시험 위치별 SAR 값을 기록하는 양식.'],
      ['forms/sample-receipt-checklist.html', '시료 접수 체크리스트', '시료 수령 시 확인할 항목(모델명, 시리얼, 외관, 부속품, 시험모드 지원 등).'],
      ['forms/equipment-check-log.html', '장비 사용 · 점검 일지', '사용 전 교정 유효기간과 이상 유무를 확인하고 기록하는 일지.'],
      ['forms/report-review-checklist.html', '성적서 검토 체크리스트', '성적서 발행 전 작성자·검토자가 확인할 항목.']
    ];
    var h = '<div class="page"><div class="breadcrumb"><a href="#/">홈</a> / 양식</div><h1>양식 · 시험 기록지</h1>';
    h += '<p class="lead">교육·실습용 표준 양식입니다. 브라우저에서 열어 <kbd>Ctrl</kbd>+<kbd>P</kbd>로 인쇄하거나 PDF로 저장할 수 있습니다.</p>';
    h += '<div class="callout warn"><span class="callout-title">사내 양식 우선</span>실제 업무에서는 품질 매뉴얼에 등록된 <strong>사내 관리 양식(문서번호·개정번호가 있는 양식)</strong>을 사용해야 합니다. 이 양식들은 어떤 항목을 왜 기록하는지 익히기 위한 교육용 예시입니다.</div>';
    h += '<div class="card-grid">';
    forms.forEach(function (f) { h += '<a class="card" href="' + f[0] + '" target="_blank" rel="noopener"><h3>' + icon('form') + ' ' + f[1] + '</h3><p>' + f[2] + '</p></a>'; });
    h += '</div><p>기록 방법에 대한 설명은 <a href="#/l/process-records">07 모듈의 「올바른 시험 기록 방법」</a> 강의를 먼저 학습하세요.</p></div>';
    return h;
  };

  VIEWS.tools = function () { return window.RFTOOLS ? window.RFTOOLS.render() : '<p>계산기를 불러오지 못했습니다.</p>'; };

  VIEWS.notfound = function () {
    return '<div class="page"><h1>페이지를 찾을 수 없습니다</h1><p><a href="#/">홈으로 이동</a></p></div>';
  };

  /* ---------- 렌더 후 처리 ---------- */
  function enhance(root) {
    // 표 스크롤 래퍼
    $$('table.data', root).forEach(function (t) {
      if (!t.parentNode.classList.contains('table-wrap')) {
        var w = document.createElement('div'); w.className = 'table-wrap';
        t.parentNode.insertBefore(w, t); w.appendChild(t);
      }
    });
    // 외부 링크는 새 창
    $$('.lesson-body a[href^="http"]', root).forEach(function (a) { a.target = '_blank'; a.rel = 'noopener'; a.classList.add('ext'); });
    // 강의 내 목차
    var body = $('.lesson-body', root), slot = $('.toc-slot', root);
    if (body && slot) {
      var hs = $$('h2', body);
      var lessonId = $('.lesson', root).getAttribute('data-lesson');
      hs.forEach(function (x, i) { if (!x.id) x.id = 's' + (i + 1); });
      if (hs.length >= 3) {
        slot.innerHTML = '<nav class="toc"><strong>이 강의의 내용</strong><ol>' + hs.map(function (x) {
          return '<li><a href="#/l/' + lessonId + '#' + x.id + '">' + esc(x.textContent) + '</a></li>';
        }).join('') + '</ol></nav>';
      }
    }
    // 용어집 필터
    var gq = $('#glossQ', root);
    if (gq) {
      var cat = '';
      var apply = function () {
        var q = gq.value.trim().toLowerCase();
        $$('.gloss-item', root).forEach(function (it) {
          var okQ = !q || it.getAttribute('data-s').indexOf(q) >= 0;
          var okC = !cat || it.getAttribute('data-cat') === cat;
          it.style.display = okQ && okC ? '' : 'none';
        });
      };
      gq.addEventListener('input', apply);
      $$('.chip', root).forEach(function (c) {
        c.addEventListener('click', function () {
          $$('.chip', root).forEach(function (x) { x.classList.remove('on'); });
          c.classList.add('on'); cat = c.getAttribute('data-cat'); apply();
        });
      });
      apply();
    }
    if (window.RFTOOLS && $('.tool', root)) window.RFTOOLS.bind(root);
  }

  /* ---------- 이벤트 위임 ---------- */
  content.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    var lessonEl = $('.lesson');
    if (act === 'toggle-done' && lessonEl) {
      var id = lessonEl.getAttribute('data-lesson');
      setDone(id, !isDone(id));
      var y = window.scrollY; route(); window.scrollTo(0, y);
    } else if (act === 'grade') {
      gradeQuiz(b.closest('.quiz'));
    } else if (act === 'reset-quiz') {
      var sec = b.closest('.quiz');
      sec.classList.remove('graded');
      $$('input', sec).forEach(function (i) { i.checked = false; });
      $$('label.opt', sec).forEach(function (l) { l.classList.remove('correct', 'wrong'); });
      $('.score', sec).textContent = '';
    }
  });

  // 강의 내 앵커(#/l/id#sec)가 아닌 일반 #sec 링크 처리
  content.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.charAt(1) !== '/' && href.length > 1) {
      var el = document.getElementById(href.slice(1));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    }
  });

  var sTimer;
  $('#searchInput').addEventListener('input', function (e) {
    clearTimeout(sTimer);
    var v = e.target.value;
    sTimer = setTimeout(function () {
      if (v.trim()) location.hash = '#/search?q=' + encodeURIComponent(v.trim());
    }, 300);
  });
  $('#searchInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.value.trim()) { clearTimeout(sTimer); location.hash = '#/search?q=' + encodeURIComponent(e.target.value.trim()); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { e.preventDefault(); $('#searchInput').focus(); }
  });

  window.addEventListener('hashchange', route);
  updateProgress();
  route();
})();
