/*
 * 강의 레지스트리
 * ------------------------------------------------------------
 * 콘텐츠 파일(assets/js/content/*.js)은 아래 함수로 강의를 등록합니다.
 *
 *   COURSE.addLesson({
 *     id: 'rf-frequency',          // 고유 ID (URL에 사용: #/l/rf-frequency)
 *     module: 'rf',                // 아래 MODULES 의 id
 *     order: 1,                    // 모듈 내 순서
 *     title: '주파수와 파장',
 *     minutes: 15,                 // 예상 학습 시간
 *     level: '기초',                // 기초 | 중급 | 실무
 *     summary: '한 줄 요약',
 *     objectives: ['학습 목표1', '학습 목표2'],
 *     body: `...HTML...`,          // 본문 (CSS 클래스는 README.md 참고)
 *     quiz: [{ q: '질문', options: ['a','b','c','d'], answer: 0, explain: '해설' }],
 *     refs: [{ title: '자료명', url: 'https://...', note: '설명' }]
 *   });
 *
 * 용어는 COURSE.addTerms([{ term, en, cat, desc, lesson }]) 로 등록합니다.
 * 참고 링크는 COURSE.addResources([{ cat, title, url, desc }]) 로 등록합니다.
 */
window.COURSE = (function () {
  var MODULES = [
    { id: 'intro',   no: '00', title: '과정 안내',               icon: 'compass', desc: '인증 업무가 무엇인지, 이 과정을 어떻게 학습하는지 안내합니다.' },
    { id: 'rf',      no: '01', title: '쉽게 이해하는 무선 기초',   icon: 'wave',    desc: '주파수, dB, 변조, 안테나 등 시험을 이해하기 위한 전파의 기본 개념.' },
    { id: 'cert',    no: '02', title: '인증 제도',                icon: 'badge',   desc: 'KC 적합성평가(전파법)와 FCC·CE 등 주요 해외 인증 제도.' },
    { id: 'equip',   no: '03', title: '시험 장비',                icon: 'meter',   desc: '스펙트럼 분석기부터 챔버, SAR 시스템까지 장비별 용도와 기능.' },
    { id: 'rftest',  no: '04', title: '무선 시험 항목과 방법',     icon: 'antenna', desc: '출력, 점유대역폭, 스퓨리어스 등 무선 시험 항목과 측정 방법.' },
    { id: 'emc',     no: '05', title: 'EMC 시험',                 icon: 'shield',  desc: '전자파 방출(EMI)과 내성(EMS) 시험의 원리와 절차.' },
    { id: 'sar',     no: '06', title: 'SAR · 전자파 인체노출',     icon: 'head',    desc: '전자파흡수율(SAR)의 개념, 측정 시스템, 시험 절차와 기준.' },
    { id: 'process', no: '07', title: '시험 절차 · 기록 · 성적서', icon: 'doc',     desc: '접수부터 성적서 발행까지의 흐름, 올바른 기록 방법과 품질 요건.' }
  ];

  var lessons = [];
  var terms = [];
  var resources = [];

  function addLesson(l) {
    if (!l || !l.id || !l.module) { console.warn('잘못된 강의 정의', l); return; }
    if (lessons.some(function (x) { return x.id === l.id; })) { console.warn('중복 강의 ID', l.id); return; }
    lessons.push(l);
  }
  function addTerms(arr) { terms = terms.concat(arr || []); }
  function addResources(arr) { resources = resources.concat(arr || []); }

  function lessonsOf(moduleId) {
    return lessons
      .filter(function (l) { return l.module === moduleId; })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }
  function orderedLessons() {
    var out = [];
    MODULES.forEach(function (m) { out = out.concat(lessonsOf(m.id)); });
    return out;
  }

  return {
    MODULES: MODULES,
    addLesson: addLesson,
    addTerms: addTerms,
    addResources: addResources,
    lessonsOf: lessonsOf,
    orderedLessons: orderedLessons,
    getLesson: function (id) { return lessons.filter(function (l) { return l.id === id; })[0]; },
    getModule: function (id) { return MODULES.filter(function (m) { return m.id === id; })[0]; },
    terms: function () { return terms; },
    resources: function () { return resources; }
  };
})();
