/* MODULE 00 — 과정 안내 */
COURSE.addLesson({
  id: 'intro-welcome',
  module: 'intro',
  order: 1,
  title: '과정 소개와 학습 방법',
  minutes: 8,
  level: '기초',
  summary: '이 교육 과정의 구성, 학습 순서, 사이트 사용법을 안내합니다.',
  objectives: [
    '교육 과정 전체 구성(8개 모듈)을 파악한다.',
    '직무(무선/EMC/SAR)에 따른 추천 학습 순서를 안다.',
    '퀴즈·진도·계산기·용어집 등 학습 도구 사용법을 익힌다.'
  ],
  body: `
<p>환영합니다! 이 과정은 <strong>시험·인증 업무를 처음 시작하는 신입사원</strong>을 위해 만들었습니다.
전파나 전자기학을 깊이 공부하지 않았어도 따라올 수 있도록, 어려운 개념은 <em>비유</em>와 <em>그림</em>으로 먼저 설명하고 수식은 꼭 필요한 것만 다룹니다.</p>

<div class="callout easy">
  <span class="callout-title">한 줄로 말하면</span>
  우리가 하는 일은 “전자제품이 <strong>전파를 규정대로 쓰는지</strong>, <strong>다른 기기를 방해하지 않는지</strong>, <strong>사람에게 안전한지</strong>를 표준 방법으로 측정하고, 그 결과를 누구나 믿을 수 있게 <strong>기록·보고</strong>하는 것”입니다.
</div>

<h2>과정 구성</h2>
<div class="table-wrap"><table class="data">
  <thead><tr><th>모듈</th><th>내용</th><th>이런 질문에 답할 수 있게 됩니다</th></tr></thead>
  <tbody>
    <tr><td>00 과정 안내</td><td>인증 업무 개요, 시험실 안전</td><td>시험소는 무슨 일을 하나? 시험실에서 조심할 것은?</td></tr>
    <tr><td>01 무선 기초</td><td>주파수, dB, 변조, 안테나, 전파 전파(傳播)</td><td>dBm이 뭐지? 왜 RBW를 바꾸면 값이 달라지지?</td></tr>
    <tr><td>02 인증 제도</td><td>KC 적합성평가, FCC, CE(RED) 등</td><td>이 제품은 적합인증일까 적합등록일까?</td></tr>
    <tr><td>03 시험 장비</td><td>분석기, 계측기, 챔버, 안테나, SAR 시스템</td><td>이 측정에는 어떤 장비를 어떻게 연결하나?</td></tr>
    <tr><td>04 무선 시험</td><td>출력, 대역폭, 스퓨리어스, 주파수 오차 등</td><td>각 시험 항목은 무엇을 보고, 어떻게 측정하나?</td></tr>
    <tr><td>05 EMC 시험</td><td>전도·방사 방출, ESD·서지 등 내성</td><td>EMI와 EMS는 어떻게 다르고 무엇을 측정하나?</td></tr>
    <tr><td>06 SAR</td><td>SAR 개념, 측정 시스템, 시험 절차</td><td>휴대폰 SAR는 어떻게 측정하고 기준은 몇 W/kg인가?</td></tr>
    <tr><td>07 절차·기록·성적서</td><td>업무 흐름, 기록 원칙, 성적서 구성, 품질</td><td>무엇을 어떻게 기록해야 나중에 문제가 없나?</td></tr>
  </tbody>
</table></div>

<h2>추천 학습 순서</h2>
<p>모든 직무에 공통인 <strong>00 → 01 → 02 → 07</strong>을 먼저 학습하고, 배치된 파트에 맞춰 심화 모듈을 학습하세요.</p>
<figure class="diagram">
<svg viewBox="0 0 760 210" role="img" aria-label="직무별 추천 학습 경로">
  <defs><marker id="arw0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-family="inherit" font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="80" width="150" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="85" y="102" font-weight="700">공통 과정</text><text x="85" y="120" font-size="12" fill="var(--text-3)">00 · 01 · 02 · 07</text>
    <path d="M160 105 L 230 105" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw0)"/>
    <rect x="235" y="80" width="130" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="300" y="102" font-weight="700">03 시험 장비</text><text x="300" y="120" font-size="12" fill="var(--text-3)">전 직무 공통</text>
    <path d="M365 105 C 420 105, 420 35, 470 35" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw0)"/>
    <path d="M365 105 L 470 105" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw0)"/>
    <path d="M365 105 C 420 105, 420 175, 470 175" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw0)"/>
    <rect x="475" y="12" width="270" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="610" y="33" font-weight="700" fill="var(--dg-accent)">무선(RF) 파트</text><text x="610" y="50" font-size="12" fill="var(--text-3)">04 무선 시험 → 05 EMC(무선기기 EMC)</text>
    <rect x="475" y="82" width="270" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="610" y="103" font-weight="700" fill="var(--dg-accent-2)">EMC 파트</text><text x="610" y="120" font-size="12" fill="var(--text-3)">05 EMC 시험 → 04 무선 시험(개요)</text>
    <rect x="475" y="152" width="270" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="610" y="173" font-weight="700" fill="var(--dg-ok)">SAR 파트</text><text x="610" y="190" font-size="12" fill="var(--text-3)">06 SAR → 04 무선 시험(출력 측정)</text>
  </g>
</svg>
<figcaption>그림 1. 직무별 추천 학습 경로</figcaption>
</figure>

<h2>사이트 사용법</h2>
<ul>
  <li><strong>진도 관리</strong> — 강의 하단의 <em>학습 완료</em> 버튼을 누르거나 퀴즈를 모두 맞히면 완료 처리됩니다. 진도는 이 브라우저에만 저장됩니다.</li>
  <li><strong>검색</strong> — 상단 검색창(단축키 <kbd>/</kbd>)에서 강의 본문과 용어집을 함께 검색합니다.</li>
  <li><strong>RF 계산기</strong> — dBm↔W 변환, 파장, EIRP, 전계강도 등 현장에서 자주 하는 계산을 바로 해 볼 수 있습니다.</li>
  <li><strong>용어집</strong> — 모르는 약어(RBW, EIRP, LISN, DASY…)가 나오면 용어집에서 찾아보세요.</li>
  <li><strong>양식</strong> — 시험 기록지, 체크리스트를 인쇄해서 실습할 수 있습니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">규정은 계속 바뀝니다</span>
  이 과정의 기준값·표준 번호는 <strong>교육 목적의 요약</strong>입니다. 실제 시험에서는 반드시 <strong>최신 고시·표준 원문</strong>과 사내 시험절차서(SOP)를 확인하세요. 규정 원문 링크는 <a href="#/resources">참고자료</a>에 모아 두었습니다.
</div>

<h2>학습 팁</h2>
<ol>
  <li><strong>장비 앞에서 복습하기</strong> — 03 모듈을 읽은 뒤 실제 장비의 버튼과 화면을 직접 찾아보세요.</li>
  <li><strong>선배의 기록 보기</strong> — 과거 시험 기록지·성적서를 보면서 이 과정에서 배운 항목이 어디에 쓰였는지 연결해 보세요.</li>
  <li><strong>“왜?”를 묻기</strong> — “RBW를 왜 100 kHz로 하지?”, “왜 케이블 손실을 보정하지?” 같은 질문이 실력을 키웁니다.</li>
</ol>
`,
  quiz: [
    { q: '이 과정에서 모든 직무가 공통으로 먼저 학습하도록 권장하는 모듈 조합은?',
      options: ['04 · 05 · 06', '00 · 01 · 02 · 07', '03 · 06', '05 · 07'],
      answer: 1, explain: '과정 안내, 무선 기초, 인증 제도, 시험 절차·기록은 직무와 관계없이 필요한 공통 지식입니다.' },
    { q: '실제 시험에서 기준값을 확인할 때 가장 우선해야 하는 것은?',
      options: ['교육 사이트의 요약표', '인터넷 블로그', '최신 고시·표준 원문과 사내 SOP', '선배의 기억'],
      answer: 2, explain: '교육 자료는 요약입니다. 규정은 개정되므로 항상 최신 원문과 사내 절차서를 기준으로 합니다.' }
  ]
});

COURSE.addLesson({
  id: 'intro-what-is-cert',
  module: 'intro',
  order: 2,
  title: '인증 업무란 무엇인가',
  minutes: 12,
  level: '기초',
  summary: '제품이 시장에 나오기까지 제조사·시험소·인증기관의 역할과 시험소 직무를 이해합니다.',
  objectives: [
    '적합성평가(인증)가 왜 필요한지 설명할 수 있다.',
    '제조사, 시험기관, 인증기관(정부)의 역할을 구분한다.',
    '무선·EMC·SAR·안전 시험 분야가 각각 무엇을 확인하는지 안다.'
  ],
  body: `
<h2>왜 인증이 필요할까?</h2>
<p>전파는 눈에 보이지 않지만 <strong>모두가 함께 쓰는 공공 자원</strong>입니다. 누군가 정해진 주파수를 벗어나 전파를 세게 쏘면 휴대폰 통화가 끊기거나, 항공·기상 레이더 같은 중요한 무선 서비스가 방해를 받을 수 있습니다.
또 전자제품에서 나오는 불필요한 전자파는 주변 기기를 오동작시킬 수 있고, 몸에 가까이 대고 쓰는 무선기기는 인체에 흡수되는 전자파가 안전 기준 이내여야 합니다.</p>
<p>그래서 각국 정부는 “이 기준을 만족한 제품만 팔 수 있다”는 규칙을 두고, 제품이 기준을 만족하는지 확인하는 절차를 <strong>적합성평가(Conformity Assessment)</strong>, 흔히 <strong>인증</strong>이라고 부릅니다. 우리나라에서는 전파법에 따른 적합성평가를 통과한 제품에 <strong>KC 마크</strong>를 붙입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 비유하면</span>
  도로(전파)를 모두가 안전하게 쓰려면 차량(전자제품)이 <strong>정해진 차선(주파수)</strong>으로, <strong>제한 속도(출력)</strong>를 지키며, <strong>매연(불요 전자파)</strong>을 기준 이하로 내뿜어야 합니다. 시험소는 차량 검사소, 인증기관은 번호판을 발급하는 관청에 해당합니다.
</div>

<h2>누가 무엇을 하나</h2>
<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="인증 업무 흐름">
  <defs><marker id="arw1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="60" width="180" height="100" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="100" y="92" font-weight="700" font-size="16">제조사 · 수입사</text>
    <text x="100" y="116" font-size="12.5" fill="var(--text-2)">제품 개발, 시료·기술문서 제출</text>
    <text x="100" y="134" font-size="12.5" fill="var(--text-2)">인증 신청, KC 표시</text>

    <rect x="290" y="40" width="190" height="140" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="385" y="70" font-weight="700" font-size="16" fill="var(--dg-accent)">시험기관 (우리)</text>
    <text x="385" y="95" font-size="12.5" fill="var(--text-2)">지정·인정받은 시험소</text>
    <text x="385" y="118" font-size="12.5" fill="var(--text-2)">표준 방법으로 시험</text>
    <text x="385" y="138" font-size="12.5" fill="var(--text-2)">기록 · 시험성적서 발행</text>
    <text x="385" y="160" font-size="11.5" fill="var(--text-3)">(ISO/IEC 17025)</text>

    <rect x="570" y="60" width="180" height="100" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="660" y="92" font-weight="700" font-size="16">인증기관</text>
    <text x="660" y="116" font-size="12.5" fill="var(--text-2)">국립전파연구원 (KC)</text>
    <text x="660" y="134" font-size="12.5" fill="var(--text-2)">FCC·TCB, EU 인증기관 등</text>

    <path d="M190 95 L 285 95" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw1)"/>
    <text x="238" y="86" font-size="12" fill="var(--text-3)">시험 의뢰</text>
    <path d="M285 130 L 195 130" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#arw1)"/>
    <text x="238" y="148" font-size="12" fill="var(--text-3)">성적서</text>
    <path d="M100 160 C 100 215, 660 215, 660 165" fill="none" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arw1)"/>
    <text x="380" y="214" font-size="12" fill="var(--text-3)">성적서 첨부하여 인증 신청 → 인증서(인증번호) 발급</text>
  </g>
</svg>
<figcaption>그림 1. 제조사 → 시험기관 → 인증기관의 기본 흐름 (국가·제도에 따라 시험기관이 인증 업무까지 겸하기도 함)</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>주체</th><th>주요 역할</th><th>예시</th></tr></thead>
<tbody>
<tr><td>제조사 · 수입사</td><td>제품의 기준 적합에 대한 1차 책임, 시료·기술자료 제공, 인증 신청, 사후관리</td><td>스마트폰·IoT·가전 제조사</td></tr>
<tr><td>시험기관</td><td>표준에 정해진 방법으로 시험, 결과를 기록하고 성적서 발행. 공정성·기술능력을 인정받아야 함</td><td>과기정통부 지정시험기관, KOLAS 인정 시험기관, FCC 인정 시험소</td></tr>
<tr><td>인증기관 · 규제기관</td><td>성적서와 서류를 검토해 인증서 발급, 시장 감시(사후관리)</td><td>국립전파연구원(RRA), 미국 FCC 및 TCB, EU 인증기관(Notified Body)</td></tr>
</tbody></table></div>

<h2>시험 분야 한눈에 보기</h2>
<div class="card-grid">
  <div class="card"><h3>📡 무선 (RF)</h3><p>전파를 <strong>의도적으로</strong> 내보내는 기기가 정해진 주파수·출력·대역폭을 지키는지, 불필요한 전파(스퓨리어스)는 적은지 확인합니다.</p></div>
  <div class="card"><h3>🛡️ EMC</h3><p>기기가 불필요한 전자파를 <strong>얼마나 내보내는지(EMI)</strong>, 외부 전자파에 <strong>얼마나 잘 견디는지(EMS)</strong> 확인합니다.</p></div>
  <div class="card"><h3>🧠 SAR · EMF</h3><p>인체 가까이에서 쓰는 무선기기의 전자파가 <strong>몸에 흡수되는 양</strong>이 안전 기준 이내인지 확인합니다.</p></div>
  <div class="card"><h3>⚡ 전기안전</h3><p>감전·화재 위험이 없는지 확인합니다(전기용품안전관리법, IEC 62368-1 등). 이 과정에서는 개요만 다룹니다.</p></div>
</div>

<h2>시험소 엔지니어의 하루</h2>
<ol class="steps">
  <li><strong>시료 확인</strong>시험할 제품(시료)의 모델명·시리얼·버전을 확인하고, 시험 모드로 동작하는지 점검합니다.</li>
  <li><strong>장비 점검</strong>사용할 장비의 교정 유효기간을 확인하고 케이블·감쇠기 손실값을 준비합니다.</li>
  <li><strong>셋업과 측정</strong>시험 규격에 정해진 배치로 시료와 장비를 연결하고 측정합니다.</li>
  <li><strong>기록</strong>측정값뿐 아니라 설정값, 사용 장비, 환경 조건, 특이사항을 <strong>그 자리에서</strong> 기록합니다.</li>
  <li><strong>데이터 정리·성적서</strong>결과를 한계값과 비교해 판정하고 성적서 초안을 작성합니다. 기술책임자 검토 후 발행됩니다.</li>
</ol>

<div class="callout tip">
  <span class="callout-title">신입사원이 가장 먼저 신뢰를 얻는 방법</span>
  측정을 빨리 하는 것보다 <strong>“누가 봐도 다시 재현할 수 있게” 기록하는 습관</strong>이 훨씬 중요합니다. 시험소의 상품은 결국 <em>믿을 수 있는 데이터</em>이기 때문입니다.
</div>
`,
  quiz: [
    { q: '시험기관의 역할로 가장 알맞은 것은?',
      options: ['인증서를 직접 발급하고 시장을 감시한다', '표준 방법으로 시험하고 결과를 기록해 성적서를 발행한다', '제품을 설계하고 KC 마크를 붙인다', '전파법을 제정한다'],
      answer: 1, explain: '시험기관은 정해진 방법으로 시험하고 그 결과를 신뢰할 수 있게 기록·보고합니다. 인증서 발급은 인증기관의 역할입니다(제도에 따라 겸하는 경우도 있음).' },
    { q: '기기가 외부 전자파(정전기, 서지 등)에 얼마나 잘 견디는지 확인하는 시험 분야는?',
      options: ['EMI', 'EMS', 'SAR', 'RF 출력'],
      answer: 1, explain: 'EMS(Electromagnetic Susceptibility, 내성)는 외부 교란에 대한 내성, EMI는 기기가 내보내는 방출을 봅니다.' },
    { q: '우리나라에서 전파법에 따른 적합성평가를 받은 제품에 표시하는 마크는?',
      options: ['CE', 'FCC ID', 'KC', 'UKCA'],
      answer: 2 }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가 제도, 고시, 인증 검색' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '공인 시험기관 인정 제도 (ISO/IEC 17025)' }
  ]
});

COURSE.addLesson({
  id: 'intro-lab-safety',
  module: 'intro',
  order: 3,
  title: '시험실 안전과 기본 수칙',
  minutes: 12,
  level: '기초',
  summary: '장비와 사람을 모두 지키기 위한 시험실 안전 수칙 — 특히 “계측기 입력 과전력”은 신입이 가장 많이 하는 실수입니다.',
  objectives: [
    '계측기 입력단 최대 허용 전력을 확인하고 감쇠기를 사용하는 이유를 안다.',
    'ESD, 고전압(서지·EFT), RF 노출 등 시험실의 주요 위험을 안다.',
    '챔버·조직등가액 등 분야별 안전 수칙을 지킨다.'
  ],
  body: `
<h2>1순위: 계측기 입력단을 태우지 않기</h2>
<p>스펙트럼 분석기, 파워센서, 무선통신 시험기의 RF 입력 단자에는 <strong>최대 허용 입력 전력</strong>이 있습니다. 대표적으로 많은 스펙트럼 분석기의 입력 한계는 <strong>+30 dBm(1 W) 정도</strong>이고, 입력 감쇠(ATT) 설정에 따라 실제 믿을 수 있는 측정 범위는 이보다 훨씬 낮습니다. 장비마다 다르므로 <strong>입력 단자 옆 표기와 매뉴얼</strong>을 반드시 확인하세요.</p>

<div class="callout danger">
  <span class="callout-title">사고 사례</span>
  출력이 수 W인 무전기·증폭기 출력을 감쇠기 없이 분석기에 직접 연결 → 입력 믹서 손상. 수리비가 수백~수천만 원에 이르고, 장비가 교정·수리되는 동안 시험 일정 전체가 멈춥니다.
</div>

<ol class="steps">
  <li><strong>시료의 최대 출력을 먼저 확인</strong>사양서, 신청서의 정격 출력을 확인합니다. 모르면 파워미터(높은 입력 허용)로 먼저 확인합니다.</li>
  <li><strong>충분한 감쇠기(Attenuator) 삽입</strong>예: 시료 +33 dBm(2 W) → 20 dB 감쇠기 → 분석기 입력 +13 dBm. 감쇠기 자체의 <em>허용 전력</em>(예: 2 W, 10 W, 50 W)도 확인합니다.</li>
  <li><strong>분석기 내부 ATT는 “자동”이 아니라 확인 후 설정</strong>입력 레벨에 맞춰 내부 감쇠를 충분히 두고, 과입력 경고(IF OVLD, Overload)가 뜨는지 봅니다.</li>
  <li><strong>DC 성분 주의</strong>일부 계측기 입력은 DC를 허용하지 않습니다(“0 V DC” 표기). DC가 실릴 수 있으면 DC 블록을 사용합니다.</li>
</ol>

<h2>분야별 주요 위험</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>위험</th><th>어디서</th><th>수칙</th></tr></thead>
<tbody>
<tr><td>고전압 · 감전</td><td>서지, EFT/버스트, 전원 시험(AC 입력), 절연 시험</td><td>시험 중 시료·결합 장치 접촉 금지, 인터록 확인, 시험 종료 후 방전 확인</td></tr>
<tr><td>정전기 방전(ESD)</td><td>ESD 시험, 시료 취급</td><td>ESD 건 방전 방향에 사람 없음 확인, 시료 취급 시 손목 접지대(스트랩) 사용</td></tr>
<tr><td>강한 RF 노출</td><td>방사 내성(RS) 시험, 고출력 증폭기 사용</td><td>RF 발생 중 챔버 입실 금지, 챔버 문 인터록 확인, 앰프 출력 OFF 후 입실</td></tr>
<tr><td>챔버 내 고립</td><td>전자파 무반사실, 쉴드룸</td><td>입실 인원 기록, 비상 해제 장치 위치 숙지, 혼자 장시간 작업 지양</td></tr>
<tr><td>화학물질</td><td>SAR 조직등가액(당류·염·글리콜 등 포함)</td><td>장갑·보안경 착용, MSDS 확인, 흘린 액체 즉시 제거(미끄럼, 장비 부식)</td></tr>
<tr><td>중량물 · 낙하</td><td>안테나 마스트, 턴테이블, 대형 시료</td><td>마스트 이동 중 하부 출입 금지, 2인 이상 운반</td></tr>
<tr><td>배터리</td><td>리튬 배터리 내장 시료</td><td>팽창·발열 시료는 즉시 사용 중지, 지정 보관함에 보관</td></tr>
</tbody></table></div>

<h2>커넥터와 케이블도 “장비”입니다</h2>
<p>RF 커넥터(N, SMA, 2.92 mm 등)는 작은 손상에도 측정값이 틀어집니다.</p>
<ul>
  <li>체결할 때는 <strong>너트만 돌리고</strong> 커넥터 몸체는 돌리지 않습니다.</li>
  <li>SMA 등은 <strong>토크 렌치</strong>로 규정 토크로 체결합니다(과조임 금지).</li>
  <li>케이블을 급하게 꺾거나 밟지 않습니다. 꺾인 케이블은 손실·위상이 변해 측정 오차가 생깁니다.</li>
  <li>사용하지 않는 커넥터에는 보호 캡을 씌웁니다.</li>
</ul>

<div class="callout tip">
  <span class="callout-title">체크 습관</span>
  “연결하기 전에 3초 멈추기” — <em>시료 최대 출력 → 감쇠기 값·허용 전력 → 계측기 입력 한계</em>를 속으로 확인한 뒤 연결하세요.
</div>
`,
  quiz: [
    { q: '최대 출력 +37 dBm(5 W)인 시료를 입력 한계 +30 dBm인 스펙트럼 분석기로 측정하려 한다. 가장 적절한 조치는?',
      options: ['분석기 내부 ATT를 0 dB로 두고 직접 연결', '30 dB 감쇠기(허용 전력 10 W 이상)를 넣고 연결', '3 dB 감쇠기(허용 전력 1 W)를 넣고 연결', '케이블을 길게 해서 손실을 늘린다'],
      answer: 1, explain: '30 dB 감쇠 후 +7 dBm이 되어 안전하며, 감쇠기 허용 전력도 5 W 이상이어야 합니다. 1 W 감쇠기는 감쇠기 자체가 손상됩니다.' },
    { q: '방사 내성(RS) 시험 중 챔버 입실에 관한 수칙으로 옳은 것은?',
      options: ['시험 중에도 시료 확인을 위해 잠깐 들어가도 된다', '앰프 출력을 끄고 RF 발생이 멈춘 것을 확인한 뒤 입실한다', '문만 열어두면 안전하다', '보안경만 쓰면 된다'],
      answer: 1 },
    { q: 'RF 커넥터 체결 방법으로 옳은 것은?',
      options: ['커넥터 몸체를 돌려 세게 조인다', '너트만 돌리고, 토크 렌치로 규정 토크를 준다', '펜치로 최대한 조인다', '손으로 살짝 걸쳐만 둔다'],
      answer: 1 }
  ]
});
