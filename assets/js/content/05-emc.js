/* MODULE 05 — EMC 시험 */
COURSE.addLesson({
  id: 'emc-basics',
  module: 'emc',
  order: 1,
  title: 'EMC 기초 — 방출과 내성, 표준 체계',
  minutes: 20,
  level: '기초',
  summary: 'EMI·EMS·EMC의 개념, 잡음이 전달되는 경로(전도/방사), 커먼모드·디퍼렌셜모드, 한국·국제 EMC 표준 체계와 Class A/B, 내성 판정 기준 A/B/C를 이해합니다.',
  objectives: [
    'EMI(방출)와 EMS(내성)의 차이를 “소스–경로–피해 기기” 모델로 설명할 수 있다.',
    '전도·방사 결합 경로와 커먼모드/디퍼렌셜모드 잡음을 구분한다.',
    'KS C 9832/9835, CISPR 32/35, IEC 61000-4-x 등 표준의 관계를 안다.',
    'Class A/B의 의미와 내성 성능 판정 기준 A/B/C를 설명할 수 있다.'
  ],
  body: `
<p>전자제품은 동작하는 동안 의도하지 않은 전자파를 조금씩 내보내고, 동시에 주변에서 들어오는 전자파의 영향을 받습니다. <strong>EMC(Electromagnetic Compatibility, 전자파 적합성)</strong>는 “여러 전자기기가 같은 공간에서 <em>서로 방해하지 않고</em>, <em>방해받아도 제대로</em> 동작하는 능력”을 말합니다. EMC 시험은 이 능력을 표준 방법으로 확인하는 일입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 비유하면 — 아파트 이웃</span>
  아파트에서 함께 살려면 두 가지가 필요합니다. ① 밤에 <strong>너무 시끄럽게 하지 않기</strong>(= 방출을 줄이기, EMI), ② 옆집 소리가 조금 들려도 <strong>잠을 잘 자기</strong>(= 내성을 갖추기, EMS). 두 가지를 모두 갖춘 “좋은 이웃”이 바로 EMC를 만족하는 제품입니다.
</div>

<h2>EMI · EMS · EMC</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>용어</th><th>영문</th><th>의미</th><th>대표 시험</th></tr></thead>
<tbody>
<tr><td>EMI (전자파 장해, 방출)</td><td>Electromagnetic Interference / Emission</td><td>기기가 <strong>내보내는</strong> 불요 전자파가 기준 이하인가</td><td>전도 방출(CE), 방사 방출(RE), 고조파·플리커</td></tr>
<tr><td>EMS (전자파 내성)</td><td>Electromagnetic Susceptibility / Immunity</td><td>외부 교란이 <strong>들어와도</strong> 정상 동작하는가</td><td>ESD, RS, EFT, 서지, CS, 자기장, 전압 강하</td></tr>
<tr><td>EMC (전자파 적합성)</td><td>Electromagnetic Compatibility</td><td>EMI + EMS를 모두 만족하는 상태</td><td>위 시험 전체</td></tr>
</tbody></table></div>
<p>한국 제도와 문서에서는 방출을 <strong>전자파 장해(EMI)</strong>, 내성을 <strong>전자파 내성(EMS)</strong>이라고 부르는 경우가 많습니다. 영어 표준에서는 EMS 대신 <em>Immunity</em>라는 단어를 주로 씁니다.</p>

<h2>소스 – 결합 경로 – 피해 기기</h2>
<p>모든 EMC 문제는 세 요소로 설명됩니다. <strong>잡음원(Source)</strong>, 잡음이 전달되는 <strong>결합 경로(Coupling path)</strong>, 영향을 받는 <strong>피해 기기(Victim)</strong>입니다. 셋 중 하나만 끊어도 문제는 사라집니다. 방출 시험은 “소스가 얼마나 내보내는가”를, 내성 시험은 “피해 기기가 얼마나 견디는가”를 봅니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="소스, 결합 경로, 피해 기기 모델">
  <defs><marker id="emc1-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="70" width="170" height="90" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="105" y="102" font-weight="700" fill="var(--dg-accent-2)">잡음원 (Source)</text>
    <text x="105" y="124" font-size="12" fill="var(--text-2)">스위칭 전원, 클럭,</text>
    <text x="105" y="142" font-size="12" fill="var(--text-2)">모터, 고속 디지털 신호</text>

    <rect x="570" y="70" width="170" height="90" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="655" y="102" font-weight="700" fill="var(--dg-accent)">피해 기기 (Victim)</text>
    <text x="655" y="124" font-size="12" fill="var(--text-2)">라디오 수신기, 센서,</text>
    <text x="655" y="142" font-size="12" fill="var(--text-2)">통신·제어 회로</text>

    <path d="M190 95 C 270 60, 490 60, 565 95" fill="none" stroke="var(--dg-accent)" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#emc1-arw)"/>
    <text x="380" y="36" font-weight="700">방사 (Radiated)</text>
    <text x="380" y="55" font-size="12" fill="var(--text-3)">공간을 통해 전자기파로 전달 · 주로 30 MHz 이상</text>

    <path d="M190 140 L 565 140" stroke="var(--dg-line)" stroke-width="2.5" marker-end="url(#emc1-arw)"/>
    <text x="380" y="130" font-weight="700">전도 (Conducted)</text>
    <text x="380" y="160" font-size="12" fill="var(--text-3)">전원선·신호선을 타고 전달 · 주로 30 MHz 이하</text>

    <rect x="20" y="190" width="300" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="170" y="211" font-weight="700">EMI(방출) 시험</text>
    <text x="170" y="229" font-size="12" fill="var(--text-2)">소스가 내보내는 양을 측정 → 한계값 비교</text>
    <rect x="440" y="190" width="300" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="590" y="211" font-weight="700">EMS(내성) 시험</text>
    <text x="590" y="229" font-size="12" fill="var(--text-2)">일정 교란을 가하고 동작 상태를 관찰 → 판정</text>
  </g>
</svg>
<figcaption>그림 1. 소스–결합 경로–피해 기기 모델. 방출 시험은 왼쪽, 내성 시험은 오른쪽을 봅니다.</figcaption>
</figure>

<h3>결합 메커니즘 4가지</h3>
<div class="card-grid">
  <div class="card"><h3>전도 결합</h3><p>전원선·신호선·접지선을 따라 잡음 전류가 직접 흘러갑니다. 같은 콘센트를 쓰는 기기끼리 영향을 주는 이유입니다.</p></div>
  <div class="card"><h3>용량성(전계) 결합</h3><p>전압이 빠르게 변하는(dV/dt 큰) 도체와 가까운 도체 사이의 기생 커패시턴스로 잡음이 옮겨 갑니다.</p></div>
  <div class="card"><h3>유도성(자계) 결합</h3><p>전류가 빠르게 변하는(dI/dt 큰) 루프가 만든 자기장이 옆 루프에 전압을 유도합니다. 변압기와 같은 원리입니다.</p></div>
  <div class="card"><h3>방사 결합</h3><p>멀리 떨어진 곳까지 전자기파로 전달됩니다. 케이블이 의도치 않은 <strong>안테나</strong> 역할을 하는 경우가 가장 흔합니다.</p></div>
</div>

<h2>커먼모드와 디퍼렌셜모드 잡음</h2>
<p>두 가닥 선(예: 전원선 L/N, 신호선 +/−)에 흐르는 잡음 전류는 두 성분으로 나눠 생각합니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="디퍼렌셜모드와 커먼모드 전류 비교">
  <defs><marker id="emc1-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-accent-2)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <text x="185" y="30" font-weight="700" fill="var(--dg-accent)">디퍼렌셜 모드 (DM, 정상 모드)</text>
    <rect x="20" y="55" width="60" height="100" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="50" y="110" font-size="12">잡음원</text>
    <rect x="290" y="55" width="60" height="100" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="320" y="110" font-size="12">부하</text>
    <line x1="80" y1="75" x2="290" y2="75" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="80" y1="135" x2="290" y2="135" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M150 75 L 210 75" stroke="var(--dg-accent-2)" stroke-width="3" marker-end="url(#emc1-arw2)"/>
    <path d="M210 135 L 150 135" stroke="var(--dg-accent-2)" stroke-width="3" marker-end="url(#emc1-arw2)"/>
    <text x="185" y="98" font-size="12" fill="var(--text-3)">가는 전류</text>
    <text x="185" y="124" font-size="12" fill="var(--text-3)">돌아오는 전류</text>
    <text x="185" y="185" font-size="12.5" fill="var(--text-2)">전류가 두 선 사이를 왕복 → 자기장이 서로 상쇄</text>
    <text x="185" y="205" font-size="12.5" fill="var(--text-2)">주로 전도 방출의 저주파 영역에서 문제</text>

    <line x1="380" y1="20" x2="380" y2="240" stroke="var(--dg-muted)" stroke-dasharray="4 4"/>

    <text x="575" y="30" font-weight="700" fill="var(--dg-accent-2)">커먼 모드 (CM, 공통 모드)</text>
    <rect x="410" y="55" width="60" height="100" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="440" y="110" font-size="12">잡음원</text>
    <rect x="680" y="55" width="60" height="100" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="710" y="110" font-size="12">부하</text>
    <line x1="470" y1="75" x2="680" y2="75" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="470" y1="135" x2="680" y2="135" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M545 75 L 605 75" stroke="var(--dg-accent-2)" stroke-width="3" marker-end="url(#emc1-arw2)"/>
    <path d="M545 135 L 605 135" stroke="var(--dg-accent-2)" stroke-width="3" marker-end="url(#emc1-arw2)"/>
    <line x1="400" y1="232" x2="750" y2="232" stroke="var(--dg-line)" stroke-width="3"/>
    <path d="M710 155 L 710 228" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <path d="M700 226 L 450 226" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#emc1-arw2)"/>
    <path d="M440 228 L 440 158" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#emc1-arw2)"/>
    <text x="575" y="180" font-size="12.5" fill="var(--text-2)">두 선의 전류가 같은 방향 → 접지로 귀환</text>
    <text x="575" y="200" font-size="12.5" fill="var(--text-2)">큰 루프 = 안테나 → 방사 방출의 주범</text>
    <text x="575" y="252" font-size="12" fill="var(--text-3)">기준 접지면 (기생 용량으로 귀환)</text>
  </g>
</svg>
<figcaption>그림 2. 디퍼렌셜모드(왼쪽)와 커먼모드(오른쪽) 잡음 전류</figcaption>
</figure>
<ul>
  <li><strong>디퍼렌셜모드(DM)</strong> — 신호와 같은 경로(가는 선 ↔ 오는 선)로 흐르는 잡음. 전원의 X 커패시터, 디퍼렌셜 초크로 줄입니다.</li>
  <li><strong>커먼모드(CM)</strong> — 두 선 모두 같은 방향으로 흐르고 기생 용량을 거쳐 접지로 돌아오는 잡음. 전류 크기는 작아도 루프가 커서 <strong>방사 방출</strong>의 대부분을 차지합니다. 커먼모드 초크, 페라이트 코어, Y 커패시터로 줄입니다.</li>
</ul>
<div class="callout tip">
  <span class="callout-title">현장 감각</span>
  케이블에 페라이트 코어를 끼웠더니 방사 방출이 뚝 떨어졌다면 그 잡음은 <strong>커먼모드</strong>였다는 뜻입니다. 이런 대책은 시료 구성 변경이므로 반드시 기록하고, 양산품에도 똑같이 적용되는지 의뢰인에게 확인합니다.
</div>

<h2>한국과 국제 EMC 표준 체계</h2>
<p>한국 EMC 기준은 국제 표준(CISPR, IEC)과 <strong>부합화</strong>된 KS 표준을 기술기준으로 인용하는 구조입니다. 번호만 보면 서로 대응하는 관계를 쉽게 찾을 수 있습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>한국 (KS)</th><th>국제 (대응 표준)</th><th>대상 / 내용</th></tr></thead>
<tbody>
<tr><td>멀티미디어 기기 방출</td><td>KS C 9832</td><td>CISPR 32</td><td>PC, 모니터, AV기기, 네트워크 기기 등의 방출</td></tr>
<tr><td>멀티미디어 기기 내성</td><td>KS C 9835</td><td>CISPR 35</td><td>위 기기의 내성 (시험법은 IEC 61000-4-x 인용)</td></tr>
<tr><td>가정용 전기기기 방출</td><td>KS C 9814-1</td><td>CISPR 14-1</td><td>가전, 전동공구 등의 방출</td></tr>
<tr><td>가정용 전기기기 내성</td><td>KS C 9814-2</td><td>CISPR 14-2</td><td>가전, 전동공구 등의 내성</td></tr>
<tr><td>기본 시험법 (내성)</td><td>KS C 9610-4-x</td><td>IEC 61000-4-x</td><td>-2 ESD, -3 RS, -4 EFT, -5 서지, -6 CS, -8 자기장, -11 전압 강하</td></tr>
<tr><td>전원 고조파·플리커</td><td>KS C 9610-3-2 / -3-3</td><td>IEC 61000-3-2 / -3-3</td><td>상용 전원에 연결되는 기기</td></tr>
<tr><td>무선기기 EMC</td><td>무선설비용 EMC 기준 (고시 확인)</td><td>ETSI EN 301 489 시리즈</td><td>무선 송수신 기능을 가진 기기</td></tr>
</tbody></table></div>
<p>규제의 뼈대는 <strong>전파법</strong>과 그에 따른 과기정통부·국립전파연구원(RRA) 고시(예: 전자파적합성 기준, 전자파적합성 시험방법 관련 고시)입니다. 고시는 어떤 기기에 어떤 KS 표준을 적용하는지 정하고, 시험의 세부 방법은 인용된 KS/국제 표준을 따릅니다.</p>
<div class="callout warn">
  <span class="callout-title">버전 확인은 필수</span>
  표준과 고시는 주기적으로 개정되며, 개정 후 일정 유예기간 동안 구판·신판이 함께 인정되기도 합니다. 시험 전에 <strong>적용 고시의 최신 버전과 인용 표준의 판(edition, 발행 연도)</strong>을 확인하고, 성적서에도 연도까지 기재합니다(예: KS C 9832:20xx). 번호만 적는 것은 좋은 기록이 아닙니다.
</div>

<h2>Class A와 Class B</h2>
<p>방출 표준은 기기를 사용 환경에 따라 두 등급으로 나눕니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>등급</th><th>사용 환경</th><th>한계값</th><th>비고</th></tr></thead>
<tbody>
<tr><td>Class B (B급)</td><td>주거 환경(가정)에서 사용될 수 있는 기기</td><td>더 엄격함</td><td>가까이에 TV·라디오 수신기가 있을 수 있다고 가정</td></tr>
<tr><td>Class A (A급)</td><td>주거 환경 이외(업무·산업용)에서만 쓰는 기기</td><td>더 완화됨 (대표적으로 약 10 dB 안팎 높음)</td><td>사용자 안내문(경고 문구) 표시가 요구됨</td></tr>
</tbody></table></div>
<p>등급은 시험소가 임의로 정하지 않습니다. <strong>의뢰인이 신청한 등급과 제품 용도</strong>가 맞는지 접수 단계에서 확인하고, 성적서에 적용 등급을 분명히 적습니다. “가정에서도 쓰일 수 있는 제품”을 A급으로 신청했다면 이상 여부를 담당자에게 알립니다.</p>

<h2>내성 성능 판정 기준 A / B / C</h2>
<p>내성 시험은 “버텼다/못 버텼다”로 끝나지 않습니다. 교란을 가하는 동안과 그 후에 기기가 <strong>어떻게 행동했는지</strong>를 미리 정한 기준과 비교합니다. 일반적인 정의는 다음과 같으며, 세부 내용은 제품 표준(예: KS C 9835)과 <strong>제조사가 정한 성능 사양</strong>으로 구체화됩니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>기준</th><th>시험 중</th><th>시험 후</th><th>주로 적용되는 시험(예)</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>의도한 대로 정상 동작. 제조사가 정한 허용 범위 이내의 성능 저하만 허용</td><td>정상</td><td>연속 교란: RS, CS, 자기장</td></tr>
<tr><td><strong>B</strong></td><td>일시적 성능 저하·기능 상실 허용</td><td>사용자 조작 없이 <strong>스스로 복구</strong>, 저장 데이터·설정 손실 없음</td><td>과도 교란: ESD, EFT, 서지, 짧은 전압 강하</td></tr>
<tr><td><strong>C</strong></td><td>일시적 기능 상실 허용</td><td>사용자 조작(재시작, 전원 재투입 등)으로 복구 가능. 영구 손상은 불합격</td><td>긴 전압 강하·순간 정전</td></tr>
</tbody></table></div>
<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  A = “전혀 티 안 남”, B = “잠깐 화면이 튀었지만 알아서 돌아옴”, C = “꺼졌지만 다시 켜면 멀쩡함”. 어느 경우든 <strong>고장·화재·안전 기능 상실</strong>은 허용되지 않습니다.
</div>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><ul><li>표준 번호만 적고 판(연도)을 기록하지 않음</li><li>의뢰인이 말한 등급을 그대로 적용하고 제품 용도는 확인하지 않음</li><li>내성 시험 후 “이상 없음”이라고만 기록</li></ul></div>
  <div class="good"><h4>✅ 좋은 예</h4><ul><li>“KS C 9832:20xx, Class B”처럼 판과 등급을 함께 기록</li><li>접수 시 사용 환경(가정/산업)을 확인하고 근거를 남김</li><li>“화면 정상, 통신 끊김 없음, 판정 A”처럼 <strong>무엇을 관찰했는지</strong> 기록</li></ul></div>
</div>
`,
  quiz: [
    { q: '다음 중 EMS(내성) 시험에 해당하는 것은?',
      options: ['전도 방출(CE)', '방사 방출(RE)', '정전기 방전(ESD)', '고조파 전류'],
      answer: 2, explain: 'ESD는 외부 교란을 기기에 가하고 동작을 보는 내성 시험입니다. CE·RE·고조파는 기기가 내보내는 것을 측정하는 방출 시험입니다.' },
    { q: '두 선의 잡음 전류가 같은 방향으로 흐르고 기생 용량을 통해 접지로 돌아오며, 방사 방출의 주요 원인이 되는 성분은?',
      options: ['디퍼렌셜모드', '정상모드', '신호 전류', '커먼모드'],
      answer: 3, explain: '커먼모드 전류는 크기가 작아도 큰 루프를 만들어 케이블을 안테나처럼 만듭니다. 커먼모드 초크·페라이트로 줄입니다.' },
    { q: 'KS C 9832에 대응하는 국제 표준은?',
      options: ['CISPR 32', 'CISPR 35', 'IEC 61000-4-2', 'CISPR 14-1'],
      answer: 0, explain: 'KS C 9832 = CISPR 32(멀티미디어 기기 방출), KS C 9835 = CISPR 35(멀티미디어 기기 내성)입니다.' },
    { q: 'ESD 시험 중 화면이 잠깐 깜빡였다가 사용자 조작 없이 원래 상태로 돌아왔다. 설정 손실은 없었다. 해당하는 성능 판정 기준은?',
      options: ['A', 'B', 'C', '불합격'],
      answer: 1, explain: '일시적 성능 저하 후 스스로 복구되고 데이터·설정 손실이 없으면 판정 기준 B입니다. 요구 기준이 B인 시험이라면 적합입니다.' },
    { q: 'Class A 기기에 대한 설명으로 옳은 것은?',
      options: ['가정용 기기로 한계값이 가장 엄격하다', '주거 환경 이외에서 쓰는 기기로 Class B보다 한계값이 완화되어 있다', '내성 시험만 하면 된다', '무선기기에만 적용되는 등급이다'],
      answer: 1, explain: 'Class A는 업무·산업 환경용으로 한계값이 완화되어 있으며, 대신 사용자 안내 문구 표시가 요구됩니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파적합성 기준 등 고시, 적합성평가 제도' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '전파법, 방송통신기자재등의 적합성평가에 관한 고시 원문' },
    { title: 'IEC Webstore', url: 'https://webstore.iec.ch', note: 'CISPR 32/35, IEC 61000-4-x 표준 구매·미리보기' },
    { title: 'IEC CISPR 소개', url: 'https://www.iec.ch', note: '국제무선장해특별위원회(CISPR) 활동' }
  ]
});

COURSE.addLesson({
  id: 'emc-ce',
  module: 'emc',
  order: 2,
  title: '전도 방출(CE) 시험',
  minutes: 25,
  level: '중급',
  summary: '150 kHz–30 MHz 대역에서 전원선으로 흘러나가는 잡음 전압을 LISN으로 측정합니다. LISN 원리, 셋업, QP/AV 검파, 사전측정→최종측정 흐름과 결과 그래프 읽는 법을 익힙니다.',
  objectives: [
    'LISN(AMN)의 세 가지 역할을 회로도로 설명할 수 있다.',
    '탁상형 기기의 전도 방출 셋업(접지면, 거리, 케이블 배치)을 구성할 수 있다.',
    'Peak/QP/AV 검파의 차이와 사전측정→최종측정 흐름을 이해한다.',
    '결과 그래프에서 한계선, 측정값, 마진을 읽고 기록할 수 있다.'
  ],
  body: `
<h2>무엇을, 왜 측정하나</h2>
<p><strong>전도 방출(CE, Conducted Emission)</strong> 시험은 기기가 <strong>전원선을 통해 상용 전원망으로 내보내는 잡음 전압</strong>을 측정합니다. 전원망은 건물 전체, 나아가 동네 전체로 연결된 거대한 도선이라 여기에 실린 잡음은 같은 전원을 쓰는 다른 기기(특히 AM·단파 라디오 수신)에 영향을 줍니다. 대상 주파수는 대표적으로 <strong>150 kHz ~ 30 MHz</strong>입니다. 이 대역은 파장이 10 m 이상으로 길어서 기기 자체보다 <em>전원선</em>이 주된 전달 경로가 되기 때문입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 비유하면 — 하수구 검사</span>
  집(기기)에서 하수구(전원선)로 흘려보내는 오염물(잡음)을 검사하는 것입니다. 그런데 하수구 물은 동네마다 다르게 섞여 있죠. 그래서 “우리 집에서 나온 것만” 정확히 재려면 <strong>외부 오염을 막고, 측정 조건을 표준화하는 장치</strong>가 필요합니다. 그 장치가 바로 LISN입니다.
</div>

<h2>LISN(AMN)의 동작 원리</h2>
<p><strong>LISN(Line Impedance Stabilization Network, 선로 임피던스 안정화 회로망)</strong>은 표준 문서에서 <strong>AMN(Artificial Mains Network, 의사 전원 회로망)</strong>이라고도 부릅니다. CISPR 16-1-2에 규정된 대표적인 형태는 <strong>50 µH / 50 Ω V형 회로망</strong>입니다. 상용 전원은 통과시키고, 고주파 잡음만 골라 50 Ω 측정기로 보냅니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="LISN 단순화 회로도">
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="90" width="110" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="75" y="116" font-weight="700">상용 전원</text><text x="75" y="136" font-size="12" fill="var(--text-3)">AC 220 V 60 Hz</text>
    <rect x="630" y="90" width="110" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="685" y="116" font-weight="700" fill="var(--dg-accent-2)">EUT</text><text x="685" y="136" font-size="12" fill="var(--text-3)">시험 대상 기기</text>

    <line x1="130" y1="120" x2="250" y2="120" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M250 120 q 12 -22 24 0 q 12 -22 24 0 q 12 -22 24 0 q 12 -22 24 0 q 12 -22 24 0" fill="none" stroke="var(--dg-accent)" stroke-width="2.5"/>
    <line x1="370" y1="120" x2="630" y2="120" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="310" y="88" font-weight="700" fill="var(--dg-accent)">50 µH</text>
    <circle cx="310" cy="62" r="11" fill="var(--dg-accent)"/><text x="310" y="67" font-size="13" fill="#fff" font-weight="700">1</text>

    <circle cx="200" cy="120" r="4" fill="var(--dg-line)"/>
    <line x1="200" y1="120" x2="200" y2="170" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="182" y1="170" x2="218" y2="170" stroke="var(--dg-line)" stroke-width="3"/>
    <line x1="182" y1="180" x2="218" y2="180" stroke="var(--dg-line)" stroke-width="3"/>
    <line x1="200" y1="180" x2="200" y2="245" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="226" y="180" font-size="13" text-anchor="start">1 µF</text>
    <circle cx="160" cy="175" r="11" fill="var(--dg-accent)"/><text x="160" y="180" font-size="13" fill="#fff" font-weight="700">2</text>

    <circle cx="450" cy="120" r="4" fill="var(--dg-line)"/>
    <line x1="450" y1="120" x2="450" y2="155" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="432" y1="155" x2="468" y2="155" stroke="var(--dg-line)" stroke-width="3"/>
    <line x1="432" y1="165" x2="468" y2="165" stroke="var(--dg-line)" stroke-width="3"/>
    <line x1="450" y1="165" x2="450" y2="197" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="450" y1="197" x2="540" y2="197" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="410" y="165" font-size="13" text-anchor="end">0.1 µF</text>
    <rect x="540" y="175" width="200" height="44" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="640" y="195" font-weight="700" fill="var(--dg-accent)">EMI 수신기 (50 Ω)</text>
    <text x="640" y="212" font-size="12" fill="var(--text-3)">측정 단자</text>
    <circle cx="505" cy="175" r="11" fill="var(--dg-accent)"/><text x="505" y="180" font-size="13" fill="#fff" font-weight="700">3</text>
    <line x1="640" y1="219" x2="640" y2="245" stroke="var(--dg-line)" stroke-width="2"/>

    <line x1="170" y1="247" x2="740" y2="247" stroke="var(--dg-line)" stroke-width="4"/>
    <text x="455" y="272" font-size="12.5" fill="var(--text-3)">기준 접지 (LISN 외함 → 접지면에 본딩)</text>
  </g>
</svg>
<figcaption>그림 1. LISN(50 µH/50 Ω V형) 단순화 회로도 — 한 선(L)만 표시. 실제로는 N선에도 같은 회로가 있고 측정 선을 전환합니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>번호</th><th>부품</th><th>역할</th></tr></thead>
<tbody>
<tr><td>①</td><td>50 µH 인덕터</td><td>50/60 Hz 전원은 그대로 통과시키고, 고주파 잡음은 전원망 쪽으로 빠져나가지 못하게 막습니다.</td></tr>
<tr><td>②</td><td>1 µF 커패시터 (전원 측)</td><td>전원망에서 들어오는 외부 잡음을 접지로 흘려 측정에 섞이지 않게 합니다.</td></tr>
<tr><td>③</td><td>0.1 µF 결합 커패시터 + 50 Ω</td><td>EUT 쪽 잡음을 50 Ω 수신기로 전달합니다. 결과적으로 EUT가 보는 전원 임피던스가 어느 시험소에서나 같은 값(고주파에서 약 50 Ω)으로 <strong>안정화</strong>됩니다.</td></tr>
</tbody></table></div>
<p>정리하면 LISN의 역할은 <strong>① 전원 공급 ② 외부 잡음 차단 ③ 임피던스 표준화 + 잡음 추출</strong> 세 가지입니다. 측정 포트를 쓰지 않는 선(예: N 측정 중의 L 포트)은 반드시 <strong>50 Ω으로 종단</strong>되어야 합니다. 대부분의 LISN은 내부 스위치로 자동 처리하지만, 수동 모델은 종단기를 직접 꽂아야 합니다.</p>

<div class="callout danger">
  <span class="callout-title">안전 주의</span>
  LISN 내부 커패시터 때문에 <strong>접지 누설 전류가 큽니다</strong>. LISN 외함을 접지면에 확실히 본딩하지 않으면 외함에 전압이 뜰 수 있습니다. 전원 투입 전에 접지 연결을 확인하고, 필요 시 절연 변압기를 사용합니다. 또 EUT 전원이 켜진 상태에서 측정 포트를 수신기에 연결·분리하면 순간 과도 전압으로 수신기 입력이 손상될 수 있으니, 수신기 쪽에 <strong>과도 제한기(Transient Limiter)</strong>를 사용합니다.
</div>

<h2>시험 셋업</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="탁상형 기기 전도 방출 시험 셋업 측면도">
  <defs><marker id="emc2-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <line x1="20" y1="262" x2="740" y2="262" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="735" y="285" font-size="12" text-anchor="end" fill="var(--text-3)">수평 기준접지면 (바닥 금속판)</text>
    <line x1="60" y1="40" x2="60" y2="262" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="72" y="48" font-size="12" text-anchor="start" fill="var(--text-3)">수직 기준접지면 (벽 금속판)</text>

    <rect x="100" y="150" width="240" height="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="112" y1="158" x2="112" y2="262" stroke="var(--dg-muted)" stroke-width="4"/>
    <line x1="328" y1="158" x2="328" y2="262" stroke="var(--dg-muted)" stroke-width="4"/>
    <text x="220" y="175" font-size="11.5" fill="var(--text-3)">비전도성 테이블</text>
    <rect x="115" y="108" width="110" height="42" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="170" y="134" font-weight="700" fill="var(--dg-accent-2)">EUT</text>

    <path d="M65 90 L 110 90" stroke="var(--dg-line)" marker-start="url(#emc2-arw)" marker-end="url(#emc2-arw)"/>
    <text x="88" y="82" font-size="12">40 cm</text>
    <path d="M160 162 L 160 257" stroke="var(--dg-line)" marker-start="url(#emc2-arw)" marker-end="url(#emc2-arw)"/>
    <text x="168" y="215" font-size="12" text-anchor="start">80 cm</text>

    <path d="M225 140 L 250 140 l 6 -8 l 6 16 l 6 -16 l 6 16 l 6 -8 L 350 140 L 350 190 L 500 190 L 500 222" fill="none" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <text x="425" y="182" font-size="12">EUT 전원 케이블</text>
    <text x="268" y="128" font-size="11" fill="var(--text-3)">여분 묶음</text>

    <rect x="470" y="222" width="100" height="40" rx="4" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="520" y="247" font-weight="700" fill="var(--dg-accent)">LISN</text>
    <path d="M570 242 L 600 242 L 600 172 L 620 172" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="610" y="160" font-size="11" text-anchor="end" fill="var(--text-3)">동축 케이블</text>
    <rect x="620" y="150" width="120" height="44" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="680" y="170" font-weight="700">EMI 수신기</text>
    <text x="680" y="186" font-size="11" fill="var(--text-3)">(쉴드룸 밖/안)</text>
    <text x="530" y="100" font-size="12" fill="var(--text-2)">EUT 경계 ↔ LISN 거리: 80 cm</text>
  </g>
</svg>
<figcaption>그림 2. 탁상형 기기 전도 방출 셋업 개념도(축척 아님). 수직 기준접지면을 쓰는 배치의 예. 정확한 치수는 적용 표준(CISPR 32 / CISPR 16-2-1 등)을 확인하세요.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>대표적 배치 (예)</th><th>이유</th></tr></thead>
<tbody>
<tr><td>탁상형 EUT 높이</td><td>비전도성 테이블 위 0.8 m</td><td>EUT와 접지면 사이 기생 용량을 표준화</td></tr>
<tr><td>수직 기준접지면(VRP)</td><td>EUT 뒷면에서 0.4 m</td><td>차폐실 벽 등 금속면과의 거리를 일정하게 (커먼모드 경로 재현)</td></tr>
<tr><td>바닥 설치형 EUT</td><td>접지면 위 절연 지지대(대표적으로 약 0.1 m 이하) 위에 설치</td><td>실제 설치 상태를 반영하되 접지면과 직접 접촉 방지</td></tr>
<tr><td>EUT–LISN 거리</td><td>0.8 m</td><td>전원 케이블 길이·위치가 결과에 영향을 주므로 통일</td></tr>
<tr><td>전원 케이블 여분</td><td>0.8 m보다 길면 대표적으로 30–40 cm 길이로 왕복 묶음(비유도성)</td><td>코일 모양으로 감으면 인덕턴스가 생겨 결과가 바뀜</td></tr>
<tr><td>LISN 설치</td><td>접지면에 직접 본딩, 다른 금속면에서 일정 거리 이상</td><td>접지 임피던스 최소화</td></tr>
<tr><td>보조기기(AE)</td><td>별도 LISN 또는 필터를 통해 전원 공급</td><td>AE 잡음이 측정에 섞이는 것 방지</td></tr>
</tbody></table></div>

<h2>수신기 설정과 검파 방식</h2>
<p>EMC 방출 측정에는 CISPR 16-1-1 요구사항을 만족하는 <strong>EMI 수신기(EMI Test Receiver)</strong>를 씁니다. 스펙트럼 분석기도 EMI 측정 옵션(CISPR 대역폭, QP/CISPR-AV 검파기)이 있으면 사용할 수 있습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>값 (CE, 150 kHz–30 MHz)</th><th>설명</th></tr></thead>
<tbody>
<tr><td>측정 대역폭 (IF BW)</td><td>9 kHz (−6 dB, CISPR Band B)</td><td>일반 분석기의 −3 dB RBW와 정의가 다름에 주의</td></tr>
<tr><td>검파기</td><td>사전: Peak / 최종: QP, AV (CISPR-AV)</td><td>한계선이 QP와 AV 두 개</td></tr>
<tr><td>스텝 크기</td><td>대표적으로 대역폭의 절반 이하 (예: 4 kHz)</td><td>좁은 잡음 피크를 놓치지 않기 위함</td></tr>
<tr><td>측정 시간(Dwell)</td><td>Peak 사전측정: 짧게 (예: 수 ms~수십 ms) / QP: 대표적으로 1 s 수준</td><td>QP는 시정수 때문에 오래 걸림</td></tr>
<tr><td>보정값</td><td>LISN 삽입손실(전압분배계수) + 케이블 손실 + 과도 제한기 손실</td><td>보통 수신기 소프트웨어의 Transducer 표로 자동 보정</td></tr>
<tr><td>측정 선</td><td>L과 N 각각 (3상은 각 상)</td><td>둘 중 높은 값이 판정 대상이 되는 경우가 많음</td></tr>
</tbody></table></div>

<div class="card-grid">
  <div class="card"><h3>Peak (첨두값)</h3><p>신호의 최댓값을 봅니다. 가장 크게 나오므로 <strong>빠른 사전측정</strong>에 씁니다. Peak가 QP 한계보다 낮으면 QP도 반드시 낮습니다.</p></div>
  <div class="card"><h3>QP (준첨두값)</h3><p>잡음의 <strong>반복 빈도</strong>에 가중치를 둡니다. 자주 반복되는 잡음일수록 크게 나옵니다. 사람이 라디오로 들을 때 느끼는 “거슬림”을 흉내 낸 검파기입니다.</p></div>
  <div class="card"><h3>AV (평균값)</h3><p>평균값을 봅니다. 연속적인 협대역 잡음(클럭 고조파 등)을 잡아내는 데 유리합니다. 크기는 보통 Peak ≥ QP ≥ AV 순서입니다.</p></div>
</div>

<h3>대표 한계값 (CISPR 32 / KS C 9832, AC 전원 포트, 예시)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>주파수 (MHz)</th><th class="num">Class B QP (dBµV)</th><th class="num">Class B AV (dBµV)</th><th class="num">Class A QP (dBµV)</th><th class="num">Class A AV (dBµV)</th></tr></thead>
<tbody>
<tr><td>0.15 – 0.5</td><td class="num">66 → 56*</td><td class="num">56 → 46*</td><td class="num">79</td><td class="num">66</td></tr>
<tr><td>0.5 – 5</td><td class="num">56</td><td class="num">46</td><td class="num">73</td><td class="num">60</td></tr>
<tr><td>5 – 30</td><td class="num">60</td><td class="num">50</td><td class="num">73</td><td class="num">60</td></tr>
</tbody></table></div>
<p style="font-size:.9em">* 주파수의 로그에 비례하여 선형으로 감소. 위 값은 교육용 대표 예시입니다. <strong>실제 판정은 적용 표준·판(연도)·등급의 원문 한계표를 확인</strong>하세요. 제품군(예: 가전 KS C 9814-1)에 따라 한계값이 다릅니다.</p>

<h2>사전측정 → 최종측정 흐름</h2>
<ol class="steps">
  <li><strong>배경 잡음 확인</strong>EUT 전원을 끄고(또는 분리하고) 같은 설정으로 측정해 주변 잡음이 한계선보다 충분히 낮은지 확인합니다(대표적으로 한계보다 6 dB 이상 낮게).</li>
  <li><strong>EUT 동작 확인</strong>시험 모드(최대 부하, 모든 기능 동작 등 시험계획서에 정한 모드)로 동작시키고 안정될 때까지 기다립니다.</li>
  <li><strong>사전측정(Pre-scan)</strong>L, N 각각 Peak(필요하면 AV 동시) 검파로 전 대역을 빠르게 스캔합니다.</li>
  <li><strong>후보 주파수 선정</strong>한계선에 가까운 피크를 고릅니다. 사내 기준 예: “QP 한계 대비 −10 dB 이내 피크 상위 N개” 등. 자동 소프트웨어의 선정 결과도 눈으로 다시 확인합니다.</li>
  <li><strong>최종측정(Final)</strong>선정 주파수에서 QP와 AV로 측정합니다. 잡음 주파수가 흔들리면 주변을 미세 조정(주파수 추적)해 최댓값을 찾습니다.</li>
  <li><strong>판정·기록</strong>QP 값은 QP 한계와, AV 값은 AV 한계와 비교합니다. 둘 다 만족해야 적합입니다. 마진(한계 − 측정값)을 기록합니다.</li>
</ol>

<h2>결과 그래프 읽는 법</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="전도 방출 결과 그래프 예시">
  <g font-size="12" fill="var(--text-2)">
    <rect x="70" y="30" width="660" height="220" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <g stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="3 3">
      <line x1="70" y1="195" x2="730" y2="195"/><line x1="70" y1="140" x2="730" y2="140"/><line x1="70" y1="85" x2="730" y2="85"/>
      <line x1="220" y1="30" x2="220" y2="250"/><line x1="306" y1="30" x2="306" y2="250"/><line x1="507" y1="30" x2="507" y2="250"/><line x1="593" y1="30" x2="593" y2="250"/>
    </g>
    <g text-anchor="end"><text x="62" y="254">0</text><text x="62" y="199">20</text><text x="62" y="144">40</text><text x="62" y="89">60</text><text x="62" y="34">80</text></g>
    <g text-anchor="middle"><text x="70" y="268">0.15</text><text x="220" y="268">0.5</text><text x="306" y="268">1</text><text x="507" y="268">5</text><text x="593" y="268">10</text><text x="730" y="268">30</text></g>
    <text x="400" y="290" text-anchor="middle" fill="var(--text)">주파수 (MHz, 로그 눈금)</text>
    <text x="22" y="140" text-anchor="middle" fill="var(--text)" transform="rotate(-90 22 140)">레벨 (dBµV)</text>

    <polyline points="70,100 80,92 92,82 104,104 116,98 128,112 140,106 155,120 170,116 190,128 210,124 230,138 260,142 290,150 306,156 340,160 380,166 420,170 460,172 500,168 540,160 570,140 590,125 606,112 616,107 626,114 640,138 670,168 700,178 730,184" fill="none" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <path d="M70 68.5 L220 96 L507 96 L507 85 L730 85" fill="none" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <path d="M70 96 L220 123.5 L507 123.5 L507 112.5 L730 112.5" fill="none" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="7 4"/>

    <path d="M86.7 84 L98.7 84 L92.7 94 z" fill="var(--dg-ok)"/>
    <circle cx="92.7" cy="118.3" r="5" fill="none" stroke="var(--dg-ok)" stroke-width="2"/>
    <path d="M610 109 L622 109 L616 119 z" fill="var(--dg-ok)"/>
    <circle cx="616" cy="136.4" r="5" fill="none" stroke="var(--dg-ok)" stroke-width="2"/>
    <path d="M650 85 L 650 115" stroke="var(--text)" stroke-width="1.2"/>
    <line x1="622" y1="115" x2="655" y2="115" stroke="var(--text-3)" stroke-dasharray="2 2"/>
    <text x="660" y="104" fill="var(--text)" font-weight="700">마진 10.9 dB</text>

    <g font-size="12" fill="var(--text)">
      <line x1="330" y1="46" x2="360" y2="46" stroke="var(--dg-accent-2)" stroke-width="2.5"/><text x="366" y="50">QP 한계</text>
      <line x1="430" y1="46" x2="460" y2="46" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="7 4"/><text x="466" y="50">AV 한계</text>
      <line x1="530" y1="46" x2="560" y2="46" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="566" y="50">Peak 사전측정</text>
      <path d="M330 60 L342 60 L336 70 z" fill="var(--dg-ok)"/><text x="348" y="70">QP 최종</text>
      <circle cx="436" cy="65" r="5" fill="none" stroke="var(--dg-ok)" stroke-width="2"/><text x="448" y="70">AV 최종</text>
    </g>
  </g>
</svg>
<figcaption>그림 3. 전도 방출 결과 그래프 예시(Class B, 가상 데이터). 파란 선은 Peak 사전측정, ▼·○은 최종 QP·AV 측정점.</figcaption>
</figure>
<ul>
  <li><strong>한계선이 두 개</strong>입니다. 실선(QP)과 점선(AV). Peak 사전측정 선이 AV 한계를 넘는 것은 흔하고, 그 자체로 불합격이 아닙니다. 판정은 최종 QP·AV 값으로 합니다.</li>
  <li><strong>0.5 MHz와 5 MHz</strong>에서 한계선이 꺾이거나 계단처럼 바뀝니다. 경계 주파수 근처의 측정점은 어느 한계를 적용했는지 꼭 확인합니다(표준은 경계에서 낮은 쪽 한계 적용).</li>
  <li><strong>마진</strong> = 한계 − 측정값. 양수면 여유가 있고, 음수면 초과입니다. 예시의 12 MHz 지점은 QP 49.1 dBµV, 한계 60 dBµV → 마진 10.9 dB입니다.</li>
  <li>150 kHz 근처의 큰 피크는 스위칭 전원의 기본파·고조파인 경우가 많습니다.</li>
</ul>

<h3>기록 예시</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>No.</th><th>주파수 (MHz)</th><th>선</th><th class="num">리딩 QP (dBµV)</th><th class="num">보정 (dB)</th><th class="num">결과 QP (dBµV)</th><th class="num">한계 QP</th><th class="num">마진</th><th class="num">결과 AV</th><th class="num">한계 AV</th><th class="num">마진</th><th>판정</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.180</td><td>L</td><td class="num">48.0</td><td class="num">10.2</td><td class="num">58.2</td><td class="num">64.5</td><td class="num">6.3</td><td class="num">47.9</td><td class="num">54.5</td><td class="num">6.6</td><td>적합</td></tr>
<tr><td>2</td><td>12.000</td><td>N</td><td class="num">38.4</td><td class="num">10.7</td><td class="num">49.1</td><td class="num">60.0</td><td class="num">10.9</td><td class="num">41.3</td><td class="num">50.0</td><td class="num">8.7</td><td>적합</td></tr>
</tbody></table></div>
<p>이와 함께 <strong>시험 일시, 온습도, EUT 모델·시리얼·펌웨어, 시험 모드, 전원(전압·주파수), 사용 장비와 교정 유효기간, 셋업 사진</strong>을 남깁니다.</p>

<h2>통신 포트 전도 방출 (ISN) 개요</h2>
<p>CISPR 32는 AC 전원 포트뿐 아니라 <strong>유선 네트워크 포트</strong>(예: 이더넷, xDSL, 전화선)의 전도 방출도 규정합니다. 여기에는 <strong>ISN(Impedance Stabilization Network, 임피던스 안정화 회로망)</strong>을 씁니다. ISN은 신호(디퍼렌셜)는 그대로 통과시키면서, 선로의 <strong>커먼모드 임피던스(대표적으로 150 Ω)</strong>와 평형도(LCL)를 표준화하고 커먼모드 잡음 전압을 측정 포트로 추출합니다.</p>
<ul>
  <li>케이블 종류(비차폐 트위스트 페어 2/4쌍, CAT 등급)에 맞는 ISN을 선택합니다. 예: T2, T4, T8 형.</li>
  <li>ISN을 쓸 수 없는 케이블(차폐 케이블, 선 수가 많은 케이블)은 <strong>전류 프로브 + 전압 프로브</strong> 조합 등 표준이 정한 대체 방법을 씁니다.</li>
  <li>포트가 링크 상태이면서 <strong>트래픽 부하(예: 표준이 정한 비율 이상의 활용률)</strong>가 걸려 있어야 합니다. 링크만 연결되고 데이터가 흐르지 않으면 방출이 과소평가됩니다.</li>
  <li>한계값은 전압(dBµV) 또는 전류(dBµA)로 주어지며 AC 전원 포트와 다릅니다. 적용 표준 원문을 확인하세요.</li>
</ul>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">이런 실수가 자주 나옵니다</span>
  <ul>
    <li>전원 케이블 여분을 <strong>둥글게 감아</strong> 테이블 위에 올려 둠 → 코일이 되어 결과가 달라짐.</li>
    <li>보조기기(노트북, 어댑터 등)를 같은 LISN이나 일반 콘센트에 연결 → AE의 잡음이 섞임.</li>
    <li>LISN 보정 계수(전압분배계수)를 빠뜨리거나 오래된 교정 데이터를 적용.</li>
    <li>L만 측정하고 N 측정 누락.</li>
    <li>Peak가 AV 한계를 넘었다고 바로 “불합격”으로 판단 → 최종 AV 측정으로 확인해야 합니다.</li>
    <li>220 V 이외의 전원 조건(예: 해외 인증용 110/230 V)이 필요한데 한 조건만 시험.</li>
  </ul>
</div>
<div class="callout tip">
  <span class="callout-title">실무 팁</span>
  셋업 사진은 <strong>정면·측면·케이블 경로</strong>가 보이도록 최소 2장 이상 찍습니다. 나중에 재시험 때 결과가 다르면 가장 먼저 비교하는 자료가 사진입니다.
</div>
`,
  quiz: [
    { q: 'LISN의 역할이 아닌 것은?',
      options: ['EUT에 상용 전원을 공급한다', '전원망 쪽 외부 잡음을 차단한다', 'EUT가 보는 전원 임피던스를 표준화한다', 'EUT의 방사 방출을 증폭한다'],
      answer: 3, explain: 'LISN은 전원 공급, 외부 잡음 차단, 임피던스 안정화 및 잡음 추출을 합니다. 방사 방출과는 관계가 없습니다.' },
    { q: '전도 방출(150 kHz–30 MHz) 측정에 사용하는 CISPR 측정 대역폭은?',
      options: ['200 Hz', '9 kHz', '120 kHz', '1 MHz'],
      answer: 1, explain: 'CISPR Band B(150 kHz–30 MHz)는 9 kHz, Band C/D(30 MHz–1 GHz)는 120 kHz, 1 GHz 이상은 1 MHz입니다.' },
    { q: 'Peak 사전측정 결과가 AV 한계선을 일부 넘었다. 올바른 다음 조치는?',
      options: ['즉시 불합격으로 판정한다', '해당 주파수에서 AV(및 QP) 최종측정을 해서 판정한다', '한계선을 Class A로 바꾼다', '수신기 대역폭을 넓혀 다시 측정한다'],
      answer: 1, explain: 'Peak는 가장 큰 값을 보여주는 사전측정입니다. 판정은 최종 QP·AV 값을 각각의 한계와 비교해서 합니다.' },
    { q: '탁상형 기기 CE 시험에서 전원 케이블이 필요한 길이보다 길다. 올바른 처리 방법은?',
      options: ['코일처럼 둥글게 감아 테이블 위에 둔다', '바닥에 아무렇게나 늘어뜨린다', '대표적으로 30–40 cm 길이로 왕복 접어 묶는다', '케이블을 잘라서 짧게 만든다'],
      answer: 2, explain: '여분은 비유도성으로 왕복 접어 묶습니다. 둥글게 감으면 인덕턴스가 생겨 측정 결과가 달라집니다.' },
    { q: '12 MHz에서 QP 결과 49.1 dBµV, QP 한계 60 dBµV일 때 마진은?',
      options: ['10.9 dB', '−10.9 dB', '109 dB', '49.1 dB'],
      answer: 0, explain: '마진 = 한계 − 측정값 = 60 − 49.1 = 10.9 dB. 양수이므로 한계 이내입니다.' }
  ],
  refs: [
    { title: 'IEC Webstore — CISPR 32, CISPR 16-1-2, CISPR 16-2-1', url: 'https://webstore.iec.ch', note: '방출 한계, LISN·측정 방법 원문' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파적합성 기준 고시' },
    { title: 'Rohde & Schwarz — EMI 수신기', url: 'https://www.rohde-schwarz.com', note: 'EMI 테스트 리시버, LISN 제품 자료' },
    { title: 'Schwarzbeck Mess-Elektronik', url: 'https://schwarzbeck.de', note: 'LISN(AMN), ISN, 안테나 제조사' }
  ]
});

COURSE.addLesson({
  id: 'emc-re',
  module: 'emc',
  order: 3,
  title: '방사 방출(RE) 시험',
  minutes: 25,
  level: '중급',
  summary: '기기가 공간으로 내보내는 전계강도를 챔버에서 안테나로 측정합니다. 30 MHz–1 GHz(QP)와 1 GHz 이상(PK/AV) 측정 조건, 안테나 높이·턴테이블 스캔, 전계강도 계산, 최고 측정 주파수 결정 규칙을 익힙니다.',
  objectives: [
    '반무반사실(SAC)에서 방사 방출 셋업을 구성하고 각 요소의 역할을 설명할 수 있다.',
    '대역별 측정 대역폭·검파기·측정 거리를 올바르게 설정한다.',
    '리딩값에서 전계강도(dBµV/m)를 계산하고 마진을 구할 수 있다.',
    '최고 측정 주파수 결정 규칙과 흔한 문제(주변잡음, 케이블 재현성)를 안다.'
  ],
  body: `
<h2>무엇을, 왜 측정하나</h2>
<p><strong>방사 방출(RE, Radiated Emission)</strong> 시험은 기기와 연결 케이블에서 <strong>공간으로 퍼져 나가는 불요 전자파의 전계강도</strong>를 일정 거리에서 안테나로 측정합니다. 단위는 <strong>dBµV/m</strong>(1 µV/m 기준 데시벨)입니다. 주파수가 높아질수록(파장이 짧아질수록) 기기 내부 배선과 케이블이 효율 좋은 안테나가 되기 때문에 30 MHz 이상에서는 방사 방출이 주된 관심사가 됩니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 비유하면 — 소음 측정</span>
  공사장 소음을 잴 때 “담장에서 10 m 떨어진 곳, 높이 1.5 m”처럼 위치를 정해 둡니다. 소리가 가장 크게 들리는 방향을 찾아 여러 방향에서 재고, 제일 큰 값을 기록하죠. RE 시험도 똑같습니다. <strong>거리를 정하고, 기기를 돌리고(턴테이블), 마이크(안테나) 높이를 바꿔 가며 최댓값</strong>을 찾습니다.
</div>

<h2>측정 사이트와 셋업</h2>
<p>대표적인 사이트는 <strong>반무반사실(SAC, Semi-Anechoic Chamber)</strong>입니다. 벽과 천장에는 전파 흡수체를 붙이고, 바닥은 금속(반사면)으로 두어 표준 야외 시험장(OATS)과 같은 조건을 만듭니다. 사이트 성능은 <strong>정규화 사이트 감쇠(NSA)</strong>로 검증하며(대표적으로 이론값 대비 ±4 dB 이내), 1 GHz 이상에서는 바닥에도 흡수체를 깔아 반사를 없애고 <strong>사이트 VSWR</strong>로 검증합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 320" role="img" aria-label="반무반사실 방사 방출 셋업 측면도">
  <defs>
    <pattern id="emcre-absh" width="30" height="18" patternUnits="userSpaceOnUse"><path d="M0,0 L15,18 L30,0 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <pattern id="emcre-absl" width="18" height="30" patternUnits="userSpaceOnUse"><path d="M0,0 L18,15 L0,30 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <pattern id="emcre-absr" width="18" height="30" patternUnits="userSpaceOnUse"><path d="M18,0 L0,15 L18,30 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <marker id="emcre-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker>
  </defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="720" height="242" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="20" y="20" width="720" height="18" fill="url(#emcre-absh)"/>
    <rect x="20" y="38" width="18" height="224" fill="url(#emcre-absl)"/>
    <rect x="722" y="38" width="18" height="224" fill="url(#emcre-absr)"/>
    <line x1="20" y1="262" x2="740" y2="262" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="330" y="60" font-size="12" fill="var(--text-3)">벽·천장: 전파 흡수체</text>
    <text x="715" y="254" font-size="12" text-anchor="end" fill="var(--text-3)">금속 바닥 (반사면)</text>

    <ellipse cx="190" cy="258" rx="80" ry="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="130" y="200" width="120" height="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="142" y1="206" x2="142" y2="254" stroke="var(--dg-muted)" stroke-width="3"/>
    <line x1="238" y1="206" x2="238" y2="254" stroke="var(--dg-muted)" stroke-width="3"/>
    <rect x="160" y="170" width="60" height="30" rx="4" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="190" y="190" font-weight="700" fill="var(--dg-accent-2)">EUT</text>
    <text x="190" y="162" font-size="11" fill="var(--text-3)">테이블 0.8 m</text>

    <line x1="590" y1="90" x2="590" y2="262" stroke="var(--dg-muted)" stroke-width="5"/>
    <path d="M545 150 L 590 132 L 590 168 z" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="2"/>
    <line x1="556" y1="140" x2="556" y2="160" stroke="var(--dg-accent)" stroke-width="2"/>
    <line x1="570" y1="136" x2="570" y2="164" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="560" y="80" font-size="12" fill="var(--dg-accent)" font-weight="700">안테나 (수평/수직 편파)</text>
    <path d="M630 90 L 630 225" stroke="var(--dg-line)" marker-start="url(#emcre-arw)" marker-end="url(#emcre-arw)"/>
    <text x="638" y="95" font-size="12" text-anchor="start">4 m</text>
    <text x="638" y="229" font-size="12" text-anchor="start">1 m</text>
    <text x="640" y="152" font-size="12" text-anchor="start">높이 스캔</text>
    <text x="640" y="168" font-size="12" text-anchor="start" fill="var(--text-3)">(1–4 m)</text>

    <line x1="220" y1="182" x2="545" y2="150" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="380" y="158" font-size="12" fill="var(--text-2)">직접파</text>
    <path d="M220 192 L 352 262 L 545 154" fill="none" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="6 4"/>
    <text x="445" y="250" font-size="12" fill="var(--text-2)">바닥 반사파</text>

    <text x="190" y="280" font-size="12" fill="var(--text-2)">턴테이블 0–360° 회전</text>
    <path d="M190 293 L 590 293" stroke="var(--dg-line)" marker-start="url(#emcre-arw)" marker-end="url(#emcre-arw)"/>
    <text x="390" y="312" font-size="12.5">측정 거리 3 m 또는 10 m (EUT 경계 ~ 안테나 기준점)</text>
  </g>
</svg>
<figcaption>그림 1. 반무반사실(SAC) 방사 방출 셋업 측면도(축척 아님). 안테나 출력은 프리앰프를 거쳐 제어실의 EMI 수신기로 연결됩니다.</figcaption>
</figure>
<p>직접파와 바닥 반사파가 안테나 위치에서 합쳐지는데, 높이에 따라 서로 보강되거나 상쇄됩니다. 그래서 <strong>안테나 높이를 1–4 m로 올리내리며 최댓값</strong>을 찾습니다. 또 기기의 방사는 방향마다 다르므로 <strong>턴테이블을 360° 회전</strong>시키고, 전파의 방향(편파)에 따라 <strong>수평·수직 편파 모두</strong> 측정합니다.</p>

<h2>대역별 측정 조건</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>30 MHz – 1 GHz</th><th>1 GHz 이상</th></tr></thead>
<tbody>
<tr><td>측정 대역폭</td><td>120 kHz (CISPR Band C/D)</td><td>1 MHz</td></tr>
<tr><td>최종 검파기</td><td>QP (준첨두)</td><td>Peak와 AV (각각의 한계와 비교)</td></tr>
<tr><td>안테나</td><td>바이코니컬 + 로그주기, 또는 복합형(바이로그, Bilog/Hybrid)</td><td>더블 리지드 혼(DRH) 등 혼 안테나</td></tr>
<tr><td>측정 거리</td><td>10 m 또는 3 m (한계값이 거리별로 다름)</td><td>대표적으로 3 m</td></tr>
<tr><td>안테나 높이</td><td>1 – 4 m 스캔</td><td>표준·사이트 방식에 따름 (높이 스캔 또는 EUT 높이에 맞춤)</td></tr>
<tr><td>바닥</td><td>금속 반사면 (SAC)</td><td>흡수체를 깔아 자유공간 조건 (FSOATS)</td></tr>
<tr><td>프리앰프</td><td>필요 시 사용 (저레벨 측정)</td><td>대부분 필수 (케이블 손실이 크고 신호가 약함)</td></tr>
</tbody></table></div>

<h3>대표 한계값 (CISPR 32 / KS C 9832 Class B, 예시)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>주파수</th><th>거리</th><th class="num">한계</th><th>검파</th></tr></thead>
<tbody>
<tr><td>30 – 230 MHz</td><td>10 m</td><td class="num">30 dBµV/m</td><td>QP</td></tr>
<tr><td>230 MHz – 1 GHz</td><td>10 m</td><td class="num">37 dBµV/m</td><td>QP</td></tr>
<tr><td>30 – 230 MHz / 230 MHz – 1 GHz</td><td>3 m</td><td class="num">40 / 47 dBµV/m</td><td>QP</td></tr>
<tr><td>1 – 3 GHz</td><td>3 m</td><td class="num">AV 50 / PK 70 dBµV/m</td><td>AV, Peak</td></tr>
<tr><td>3 – 6 GHz</td><td>3 m</td><td class="num">AV 54 / PK 74 dBµV/m</td><td>AV, Peak</td></tr>
</tbody></table></div>
<p style="font-size:.9em">3 m 한계가 10 m보다 약 10 dB 높은 것은 거리가 가까울수록 전계가 강해지기 때문입니다(원거리에서 대략 20·log<sub>10</sub>(10/3) ≈ 10.5 dB). Class A는 더 완화된 값을 씁니다. <strong>위 수치는 교육용 대표 예시이며, 실제 판정은 적용 표준·판·등급의 원문 한계표를 확인</strong>하세요.</p>

<h2>전계강도 계산</h2>
<p>수신기가 읽는 값은 안테나 출력 단자의 전압(dBµV)입니다. 이것을 공간의 전계강도(dBµV/m)로 바꾸려면 경로상의 이득과 손실을 보정합니다.</p>
<div class="formula">E (dBµV/m) = 리딩 (dBµV) + AF (dB/m) + 케이블 손실 (dB) − 프리앰프 이득 (dB)</div>
<ul>
  <li><strong>AF(Antenna Factor, 안테나 계수)</strong> — 전계강도를 안테나 출력 전압으로 바꾸는 비율. 주파수마다 다르며 안테나 교정성적서에 표로 나옵니다.</li>
  <li><strong>케이블 손실</strong> — 안테나~수신기 사이 모든 케이블·커넥터·스위치의 손실. 주파수가 높을수록 커집니다.</li>
  <li><strong>프리앰프 이득</strong> — 신호를 키운 만큼 다시 빼 줍니다.</li>
</ul>
<div class="kbox">
  <div><div class="k">리딩 (400 MHz, QP)</div><div class="v">45.0 dBµV</div></div>
  <div><div class="k">AF</div><div class="v">+14.5 dB/m</div></div>
  <div><div class="k">케이블 손실</div><div class="v">+3.2 dB</div></div>
  <div><div class="k">프리앰프 이득</div><div class="v">−28.0 dB</div></div>
  <div><div class="k">전계강도 E</div><div class="v">34.7 dBµV/m</div></div>
  <div><div class="k">마진 (한계 37, 10 m)</div><div class="v">2.3 dB</div></div>
</div>
<p>계산: 45.0 + 14.5 + 3.2 − 28.0 = <strong>34.7 dBµV/m</strong>. Class B 10 m 한계(230 MHz–1 GHz) 37 dBµV/m와 비교하면 마진은 37 − 34.7 = <strong>2.3 dB</strong>입니다. 측정 소프트웨어는 보통 AF·케이블·프리앰프를 합친 <strong>보정 계수(Correction Factor, Transducer)</strong>를 자동 적용하므로, 신입 때 한 번은 손으로 계산해 소프트웨어 값과 맞는지 확인해 보세요.</p>

<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="방사 방출 결과 그래프 예시">
  <g font-size="12" fill="var(--text-2)">
    <rect x="70" y="30" width="660" height="220" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <g stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="3 3">
      <line x1="70" y1="176.7" x2="730" y2="176.7"/><line x1="70" y1="103.3" x2="730" y2="103.3"/>
      <line x1="166" y1="30" x2="166" y2="250"/><line x1="297" y1="30" x2="297" y2="250"/><line x1="427" y1="30" x2="427" y2="250"/><line x1="600" y1="30" x2="600" y2="250"/>
    </g>
    <g text-anchor="end"><text x="62" y="254">0</text><text x="62" y="181">20</text><text x="62" y="107">40</text><text x="62" y="34">60</text></g>
    <g text-anchor="middle"><text x="70" y="268">30</text><text x="166" y="268">50</text><text x="297" y="268">100</text><text x="427" y="268">200</text><text x="600" y="268">500</text><text x="730" y="268">1000</text></g>
    <text x="400" y="290" text-anchor="middle" fill="var(--text)">주파수 (MHz, 로그 눈금)</text>
    <text x="22" y="140" text-anchor="middle" fill="var(--text)" transform="rotate(-90 22 140)">전계강도 (dBµV/m)</text>

    <polyline points="70,196 100,192 130,188 158,168 170,190 200,186 230,178 262,172 300,180 325,172 339,154 352,178 370,176 400,170 430,165 460,172 500,160 530,150 557,118 575,160 610,168 650,172 690,176 730,178" fill="none" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <path d="M70 140 L453.4 140 L453.4 114.3 L730 114.3" fill="none" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <path d="M551.6 117 L563.6 117 L557.6 127 z" fill="var(--dg-ok)"/>
    <path d="M333 151 L345 151 L339 161 z" fill="var(--dg-ok)"/>
    <line x1="545" y1="114.3" x2="545" y2="122.8" stroke="var(--text)" stroke-width="1.5"/>
    <text x="540" y="100" text-anchor="end" fill="var(--text)" font-weight="700">400 MHz: 마진 2.3 dB</text>

    <g fill="var(--text)">
      <line x1="90" y1="46" x2="120" y2="46" stroke="var(--dg-accent-2)" stroke-width="2.5"/><text x="126" y="50">QP 한계 (Class B, 10 m)</text>
      <line x1="290" y1="46" x2="320" y2="46" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="326" y="50">Peak 사전측정 (최대값 유지)</text>
      <path d="M520 41 L532 41 L526 51 z" fill="var(--dg-ok)"/><text x="538" y="50">QP 최종측정</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. 방사 방출 결과 그래프 예시(가상 데이터). 사전측정 트레이스는 턴테이블·높이·편파 전체의 최대값을 모은 것입니다.</figcaption>
</figure>

<h2>측정 절차</h2>
<ol class="steps">
  <li><strong>사이트·장비 확인</strong>NSA/사이트 VSWR 유효기간, 안테나·프리앰프·케이블 교정 데이터, 수신기 설정(대역폭, 검파기)을 확인합니다.</li>
  <li><strong>배경 잡음 측정</strong>EUT 전원을 끈 상태로 측정해 주변 잡음이 한계보다 충분히 낮은지(대표적으로 6 dB 이상) 확인합니다.</li>
  <li><strong>EUT 배치</strong>시험계획서의 구성(보조기기, 케이블 길이·배치)대로 놓고 사진을 찍습니다. 탁상형은 0.8 m 비전도성 테이블 위에 둡니다.</li>
  <li><strong>사전측정</strong>Peak 검파로 턴테이블(예: 0–360°, 일정 간격), 안테나 높이(1–4 m), 수평/수직 편파를 조합해 스캔하고 최대값 트레이스를 만듭니다.</li>
  <li><strong>최종측정</strong>한계에 가까운 주파수마다 턴테이블 각도·안테나 높이·편파를 다시 미세하게 조정해 최대 지점을 찾은 뒤 QP(1 GHz 이상은 PK/AV)로 측정합니다.</li>
  <li><strong>기록</strong>주파수, 편파, 안테나 높이, 턴테이블 각도, 리딩, 보정 계수, 결과, 한계, 마진을 표로 남깁니다.</li>
</ol>

<h3>기록 예시</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>주파수 (MHz)</th><th>편파</th><th class="num">높이 (cm)</th><th class="num">각도 (°)</th><th class="num">리딩 QP (dBµV)</th><th class="num">보정 (dB/m)</th><th class="num">결과 (dBµV/m)</th><th class="num">한계</th><th class="num">마진</th><th>판정</th></tr></thead>
<tbody>
<tr><td>125.00</td><td>V</td><td class="num">112</td><td class="num">45</td><td class="num">41.3</td><td class="num">−15.8</td><td class="num">25.5</td><td class="num">30.0</td><td class="num">4.5</td><td>적합</td></tr>
<tr><td>400.00</td><td>H</td><td class="num">186</td><td class="num">270</td><td class="num">45.0</td><td class="num">−10.3</td><td class="num">34.7</td><td class="num">37.0</td><td class="num">2.3</td><td>적합</td></tr>
</tbody></table></div>
<p style="font-size:.9em">보정 = AF + 케이블 손실 − 프리앰프 이득. 400 MHz 예: 14.5 + 3.2 − 28.0 = −10.3 dB/m.</p>

<h2>최고 측정 주파수 결정 규칙</h2>
<p>어디까지 측정해야 할까요? CISPR 32는 EUT 내부에서 발생하거나 사용하는 <strong>가장 높은 주파수(Fx)</strong>에 따라 측정 상한을 정합니다. Fx에는 클럭, 발진기, 내부 신호 주파수 등이 포함됩니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>내부 최고 주파수 Fx</th><th>측정 상한 주파수</th></tr></thead>
<tbody>
<tr><td>Fx ≤ 108 MHz</td><td>1 GHz</td></tr>
<tr><td>108 MHz &lt; Fx ≤ 500 MHz</td><td>2 GHz</td></tr>
<tr><td>500 MHz &lt; Fx ≤ 1 GHz</td><td>5 GHz</td></tr>
<tr><td>Fx &gt; 1 GHz</td><td>5 × Fx (최대 6 GHz)</td></tr>
</tbody></table></div>
<p>따라서 접수 시 의뢰인에게 <strong>내부 최고 클럭·동작 주파수</strong>를 반드시 받아 두고, 시험 계획서와 성적서에 근거를 적어야 합니다. 예를 들어 DDR 메모리 클럭이 800 MHz이면 5 GHz까지 측정해야 합니다. (판에 따라 세부가 다를 수 있으니 적용 표준 원문을 확인하세요.)</p>

<h2>흔한 문제와 해결</h2>
<div class="card-grid">
  <div class="card"><h3>주변 잡음 (Ambient)</h3><p>챔버 문이 제대로 안 닫혔거나, 챔버 안에 불필요한 기기(조명 안정기, 카메라, 노트북)가 있으면 잡음이 섞입니다. EUT 전원 OFF 측정과 비교해 EUT 신호인지 확인합니다. 방송·이동통신 신호는 주파수로 식별해 기록합니다.</p></div>
  <div class="card"><h3>케이블 배치 재현성</h3><p>30–300 MHz 방출은 대부분 케이블에서 나옵니다. 케이블 위치가 조금만 바뀌어도 수 dB 달라집니다. 표준이 정한 배치(늘어뜨림 높이, 묶음)를 따르고, 최대값을 주는 배치를 찾았다면 사진과 함께 기록합니다.</p></div>
  <div class="card"><h3>프리앰프 포화</h3><p>강한 신호(특히 무선기기의 송신 신호)가 프리앰프로 들어가면 포화되어 가짜 신호가 생깁니다. 필요하면 노치/대역저지 필터를 사용하고, 필터 손실을 보정합니다.</p></div>
  <div class="card"><h3>EUT 상태 변화</h3><p>시간이 지나며 발열, 절전 모드 진입 등으로 방출이 바뀝니다. 사전측정과 최종측정 사이에 EUT 모드가 같은지 확인합니다.</p></div>
</div>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  <ul>
    <li>안테나 교정 데이터(AF)를 다른 시리얼의 것으로 적용 — 안테나 시리얼 번호와 보정 파일을 반드시 대조합니다.</li>
    <li>한 편파만 측정하거나 턴테이블 각도 스텝을 너무 크게 잡음.</li>
    <li>최고 측정 주파수 확인 없이 1 GHz에서 측정 종료.</li>
    <li>1 GHz 이상에서 Peak만 측정하고 AV를 빠뜨림 (또는 그 반대).</li>
    <li>3 m에서 측정하고 10 m 한계를 그대로 적용 — 거리와 한계는 한 쌍입니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '30 MHz–1 GHz 방사 방출 최종측정의 측정 대역폭과 검파기 조합은?',
      options: ['9 kHz, AV', '120 kHz, QP', '1 MHz, Peak', '1 MHz, QP'],
      answer: 1, explain: 'CISPR Band C/D(30 MHz–1 GHz)는 120 kHz 대역폭과 QP 검파기를 씁니다. 1 GHz 이상은 1 MHz, Peak/AV입니다.' },
    { q: '리딩 40.0 dBµV, AF 18.0 dB/m, 케이블 손실 2.5 dB, 프리앰프 이득 30.0 dB일 때 전계강도는?',
      options: ['90.5 dBµV/m', '49.5 dBµV/m', '30.5 dBµV/m', '19.5 dBµV/m'],
      answer: 2, explain: 'E = 40.0 + 18.0 + 2.5 − 30.0 = 30.5 dBµV/m입니다.' },
    { q: '안테나 높이를 1–4 m로 스캔하는 주된 이유는?',
      options: ['직접파와 바닥 반사파의 합이 높이에 따라 달라지기 때문', '안테나 교정값이 높이마다 같기 때문', '챔버 천장의 흡수체를 피하기 위해', '측정 시간을 줄이기 위해'],
      answer: 0, explain: '금속 바닥 반사파와 직접파가 높이에 따라 보강·상쇄되므로, 높이를 스캔해 최대값을 찾습니다.' },
    { q: 'EUT 내부 최고 주파수가 800 MHz일 때 CISPR 32 기준 방사 방출 측정 상한은?',
      options: ['1 GHz', '2 GHz', '6 GHz', '5 GHz'],
      answer: 3, explain: '500 MHz < Fx ≤ 1 GHz이면 5 GHz까지 측정합니다.' },
    { q: '방사 방출 결과가 재시험 때마다 수 dB씩 다르게 나온다. 가장 먼저 의심할 것은?',
      options: ['케이블 배치가 매번 달라짐', '수신기 전원 전압', '시험실 조명 색', '성적서 양식'],
      answer: 0, explain: '특히 30–300 MHz에서는 케이블이 주요 방사원이라 배치 재현성이 결과를 크게 좌우합니다. 셋업 사진과 배치 기록이 중요합니다.' }
  ],
  refs: [
    { title: 'IEC Webstore — CISPR 32, CISPR 16-2-3, CISPR 16-1-4', url: 'https://webstore.iec.ch', note: '방사 방출 한계·측정법·사이트 검증' },
    { title: 'ETS-Lindgren', url: 'https://www.ets-lindgren.com', note: '챔버, EMC 안테나, 턴테이블·마스트' },
    { title: 'Rohde & Schwarz', url: 'https://www.rohde-schwarz.com', note: 'EMI 테스트 리시버, EMC 측정 소프트웨어' },
    { title: 'Schwarzbeck Mess-Elektronik', url: 'https://schwarzbeck.de', note: '바이로그·혼 안테나, 프리앰프' }
  ]
});

COURSE.addLesson({
  id: 'emc-transient',
  module: 'emc',
  order: 4,
  title: '정전기(ESD) · EFT/버스트 · 서지 시험',
  minutes: 30,
  level: '실무',
  summary: '짧고 강한 과도(Transient) 교란에 대한 내성 시험 3종 — IEC 61000-4-2(ESD), 61000-4-4(EFT/버스트), 61000-4-5(서지)의 파형, 셋업, 인가 방법, 기록과 안전 수칙을 익힙니다.',
  objectives: [
    'ESD·EFT·서지 파형의 특징과 실제 현상을 연결해 설명할 수 있다.',
    'ESD 시험 셋업(HCP·VCP, 블리더 저항)과 방전 포인트 선정 방법을 안다.',
    'EFT와 서지의 결합 방법(CDN, 용량성 클램프, 선간/대지간, 위상각)을 이해한다.',
    '시험 레벨은 제품 표준으로 정해진다는 점과 고전압 안전 수칙을 지킨다.'
  ],
  body: `
<h2>과도 교란 3종 한눈에 보기</h2>
<p>과도(Transient) 교란은 아주 짧은 시간에 큰 전압·전류가 몰려오는 현상입니다. 실제 생활 속 현상을 실험실에서 <strong>표준 파형</strong>으로 재현해 기기에 인가합니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>시험</th><th>표준</th><th>재현하는 실제 현상</th><th>파형 특징</th><th>인가 대상</th></tr></thead>
<tbody>
<tr><td>정전기 방전 (ESD)</td><td>IEC 61000-4-2 / KS C 9610-4-2</td><td>겨울철 손가락 끝의 “따끔” 방전</td><td>상승 약 0.7–1 ns, 수십 ns 지속</td><td>사람이 만지는 외함, 버튼, 커넥터, 결합판</td></tr>
<tr><td>EFT/버스트</td><td>IEC 61000-4-4 / KS C 9610-4-4</td><td>릴레이·스위치 접점의 개폐 시 불꽃(아크)</td><td>5/50 ns 펄스가 무리지어 반복</td><td>AC/DC 전원선, 신호·통신선</td></tr>
<tr><td>서지</td><td>IEC 61000-4-5 / KS C 9610-4-5</td><td>낙뢰 유도, 대형 부하 개폐</td><td>1.2/50 µs 전압, 8/20 µs 전류 — 에너지가 큼</td><td>AC/DC 전원선, 옥외로 나가는 신호선</td></tr>
</tbody></table></div>

<div class="callout easy">
  <span class="callout-title">쉽게 비유하면</span>
  ESD는 <strong>바늘로 콕 찌르기</strong>(아주 짧고 날카로움), EFT는 <strong>기관총 연사</strong>(작은 펄스가 빠르게 여러 발), 서지는 <strong>망치로 한 번 크게 내려치기</strong>(느리지만 에너지가 큼)입니다. 그래서 망가지는 방식도 다릅니다. ESD·EFT는 주로 오동작(리셋, 화면 깨짐)을, 서지는 부품 소손을 일으킵니다.
</div>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="ESD, EFT, 서지 표준 파형 비교">
  <defs><marker id="emc4-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12" fill="var(--text-2)">
    <text x="140" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">ESD 방전 전류 (61000-4-2)</text>
    <line x1="40" y1="200" x2="245" y2="200" stroke="var(--dg-line)"/><line x1="40" y1="45" x2="40" y2="200" stroke="var(--dg-line)"/>
    <path d="M40 200 L42 200 L46 60 C50 60, 54 110, 62 118 C72 124, 86 118, 100 125 C125 140, 150 158, 160 163 C190 178, 215 188, 240 193" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <circle cx="100" cy="125" r="3.5" fill="var(--dg-accent-2)"/><circle cx="160" cy="163" r="3.5" fill="var(--dg-accent-2)"/>
    <text x="54" y="58">첫 피크 ≈ 3.75 A/kV</text>
    <text x="106" y="118">30 ns: 2 A/kV</text>
    <text x="166" y="155">60 ns: 1 A/kV</text>
    <g text-anchor="middle"><text x="40" y="215">0</text><text x="100" y="215">30 ns</text><text x="160" y="215">60 ns</text></g>
    <text x="140" y="240" text-anchor="middle" fill="var(--text-3)">상승 시간 약 0.8 ns (0.7–1 ns)</text>

    <text x="390" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">EFT/버스트 (61000-4-4)</text>
    <line x1="290" y1="200" x2="495" y2="200" stroke="var(--dg-line)"/><line x1="290" y1="45" x2="290" y2="200" stroke="var(--dg-line)"/>
    <g stroke="var(--dg-accent)" stroke-width="1.6">
      <line x1="300" y1="200" x2="300" y2="82"/><line x1="304" y1="200" x2="304" y2="82"/><line x1="308" y1="200" x2="308" y2="82"/><line x1="312" y1="200" x2="312" y2="82"/><line x1="316" y1="200" x2="316" y2="82"/><line x1="320" y1="200" x2="320" y2="82"/><line x1="324" y1="200" x2="324" y2="82"/><line x1="328" y1="200" x2="328" y2="82"/>
      <line x1="420" y1="200" x2="420" y2="82"/><line x1="424" y1="200" x2="424" y2="82"/><line x1="428" y1="200" x2="428" y2="82"/><line x1="432" y1="200" x2="432" y2="82"/><line x1="436" y1="200" x2="436" y2="82"/><line x1="440" y1="200" x2="440" y2="82"/><line x1="444" y1="200" x2="444" y2="82"/><line x1="448" y1="200" x2="448" y2="82"/>
    </g>
    <path d="M300 68 L 420 68" stroke="var(--dg-line)" marker-start="url(#emc4-arw)" marker-end="url(#emc4-arw)"/>
    <text x="360" y="60" text-anchor="middle">주기 300 ms</text>
    <text x="314" y="215" text-anchor="middle">버스트</text>
    <text x="434" y="215" text-anchor="middle">버스트</text>
    <rect x="345" y="88" width="65" height="62" rx="4" fill="var(--dg-fill)" stroke="var(--dg-muted)"/>
    <path d="M350 142 L354 98 C358 98, 370 124, 405 138" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="377" y="165" text-anchor="middle" fill="var(--dg-accent-2)">펄스 5/50 ns</text>
    <text x="390" y="240" text-anchor="middle" fill="var(--text-3)">버스트 길이 15 ms(5 kHz) / 0.75 ms(100 kHz)</text>

    <text x="640" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">서지 전압 1.2/50 µs (61000-4-5)</text>
    <line x1="540" y1="200" x2="745" y2="200" stroke="var(--dg-line)"/><line x1="540" y1="45" x2="540" y2="200" stroke="var(--dg-line)"/>
    <path d="M540 200 L545 60 C560 62, 590 95, 640 130 C680 158, 710 172, 740 180" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <line x1="540" y1="130" x2="640" y2="130" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <line x1="640" y1="130" x2="640" y2="200" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <text x="534" y="64" text-anchor="end">100%</text><text x="534" y="134" text-anchor="end">50%</text>
    <text x="640" y="215" text-anchor="middle">50 µs (반감)</text>
    <text x="652" y="88">단락 전류: 8/20 µs</text>
    <text x="640" y="240" text-anchor="middle" fill="var(--text-3)">상승 1.2 µs · 에너지가 가장 큼</text>
  </g>
</svg>
<figcaption>그림 1. 세 가지 과도 교란 파형(모양 비교용 개념도, 축척·시간 단위가 서로 다름). EFT의 버스트 폭과 주기는 실제 비율과 다르게 그렸습니다.</figcaption>
</figure>

<div class="callout warn">
  <span class="callout-title">시험 레벨은 제품 표준이 정합니다</span>
  IEC 61000-4-x는 <strong>“어떻게 시험하는가”(기본 표준)</strong>만 정하고, <strong>“몇 kV로 시험하는가”</strong>는 제품군 표준(예: KS C 9835/CISPR 35, KS C 9814-2/CISPR 14-2, 의료기기·차량용 표준 등)과 고시가 정합니다. 아래에 나오는 레벨은 이해를 돕기 위한 <strong>대표 예시</strong>입니다. 실제 시험 전에 <strong>적용 표준·판·포트 종류별 레벨과 요구 성능 기준</strong>을 시험계획서에 적어 두세요.
</div>

<h2>정전기 방전(ESD) — IEC 61000-4-2</h2>
<h3>시험 레벨 (기본 표준의 레벨 표)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>레벨</th><th class="num">접촉 방전 (kV)</th><th class="num">기중 방전 (kV)</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">±2</td><td class="num">±2</td></tr>
<tr><td>2</td><td class="num">±4</td><td class="num">±4</td></tr>
<tr><td>3</td><td class="num">±6</td><td class="num">±8</td></tr>
<tr><td>4</td><td class="num">±8</td><td class="num">±15</td></tr>
</tbody></table></div>
<p>예를 들어 멀티미디어 기기(KS C 9835)에서는 대표적으로 <strong>접촉 ±4 kV, 기중 ±8 kV, 판정 기준 B</strong>가 쓰입니다. 선택한 레벨 이하의 낮은 레벨도 함께 시험하도록 요구하는 경우가 많으니 적용 표준을 확인하세요.</p>

<h3>셋업</h3>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="탁상형 기기 ESD 시험 셋업">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <line x1="20" y1="270" x2="740" y2="270" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="735" y="292" font-size="12" text-anchor="end" fill="var(--text-3)">접지 기준면 (GRP, 바닥 금속판)</text>

    <rect x="120" y="150" width="400" height="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="140" y1="158" x2="140" y2="270" stroke="var(--dg-muted)" stroke-width="4"/>
    <line x1="500" y1="158" x2="500" y2="270" stroke="var(--dg-muted)" stroke-width="4"/>
    <rect x="130" y="142" width="380" height="8" fill="var(--dg-accent)" opacity="0.55" stroke="var(--dg-accent)"/>
    <text x="320" y="178" font-size="12" fill="var(--text-2)">수평 결합판 HCP (1.6 m × 0.8 m)</text>
    <rect x="210" y="138" width="140" height="4" fill="var(--dg-muted)"/>
    <rect x="220" y="98" width="120" height="40" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="280" y="123" font-weight="700" fill="var(--dg-accent-2)">EUT</text>

    <rect x="370" y="68" width="8" height="70" fill="var(--dg-accent)" opacity="0.55" stroke="var(--dg-accent)"/>
    <path d="M374 68 L374 50 L640 50 L640 270" fill="none" stroke="var(--dg-line)" stroke-width="1.5"/>
    <rect x="634" y="110" width="12" height="26" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <rect x="634" y="190" width="12" height="26" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="652" y="167" text-anchor="start" font-size="12">470 kΩ × 2</text>
    <text x="386" y="42" text-anchor="start" font-size="12" fill="var(--text-2)">수직 결합판 VCP (0.5 m × 0.5 m), EUT에서 0.1 m</text>

    <path d="M510 146 L540 146 L540 270" fill="none" stroke="var(--dg-line)" stroke-width="1.5"/>
    <rect x="534" y="175" width="12" height="26" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <rect x="534" y="220" width="12" height="26" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="552" y="215" text-anchor="start" font-size="12">470 kΩ × 2</text>

    <path d="M450 162 L 450 266" stroke="var(--dg-line)"/>
    <text x="458" y="225" text-anchor="start" font-size="12">0.8 m</text>

    <rect x="50" y="106" width="100" height="24" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <path d="M150 110 L205 118 L150 126 z" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="80" y="130" width="22" height="34" rx="4" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="100" y="98" font-weight="700">ESD 시험기(건)</text>
    <path d="M91 164 C 70 200, 50 230, 45 268" fill="none" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="5 3"/>
    <text x="54" y="250" text-anchor="start" font-size="12" fill="var(--text-2)">접지 복귀선</text>
  </g>
</svg>
<figcaption>그림 2. 탁상형 기기 ESD 셋업 개념도(축척 아님). EUT는 HCP 위 0.5 mm 절연 시트 위에 놓고, HCP·VCP는 각각 470 kΩ 저항 2개가 든 케이블로 접지 기준면에 연결합니다.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>구성 요소</th><th>대표 사양 (IEC 61000-4-2)</th><th>역할</th></tr></thead>
<tbody>
<tr><td>ESD 시험기</td><td>150 pF 축전 / 330 Ω 방전 저항 (인체 모델)</td><td>사람 손가락에서 일어나는 방전을 재현</td></tr>
<tr><td>접지 기준면 (GRP)</td><td>바닥 금속판, 보호 접지에 연결</td><td>방전 전류의 복귀 경로</td></tr>
<tr><td>HCP</td><td>1.6 m × 0.8 m 금속판, 0.8 m 테이블 위</td><td>간접 방전(근처 금속 물체에 방전되는 상황) 재현</td></tr>
<tr><td>VCP</td><td>0.5 m × 0.5 m, EUT에서 0.1 m</td><td>옆 방향 간접 방전 재현</td></tr>
<tr><td>절연 시트</td><td>두께 0.5 mm</td><td>EUT와 HCP 절연</td></tr>
<tr><td>블리더 케이블</td><td>470 kΩ 저항 2개 직렬</td><td>결합판에 쌓인 전하를 천천히 방전</td></tr>
</tbody></table></div>

<h3>방전 방법과 포인트 선정</h3>
<ul>
  <li><strong>접촉 방전(Contact)</strong> — 뾰족한 팁을 <em>먼저 금속부에 닿게 한 뒤</em> 방전 스위치를 누릅니다. 도전성 표면(금속 외함, 나사, 커넥터 쉘)과 결합판에 사용합니다. 기본 방법입니다.</li>
  <li><strong>기중 방전(Air)</strong> — 둥근 팁을 충전한 상태에서 <em>빠르게 접근시켜</em> 공기 중 불꽃으로 방전합니다. 절연 표면(플라스틱 틈새, 버튼, 디스플레이 가장자리)에 사용하며, 방전 후 팁을 뗍니다.</li>
  <li><strong>간접 방전</strong> — HCP 가장자리(EUT에서 0.1 m 지점)와 VCP 수직 모서리 중앙에 접촉 방전합니다. EUT의 각 면이 결합판에 노출되도록 합니다.</li>
  <li><strong>포인트 선정</strong> — 정상 사용 중 사람이 만질 수 있는 곳: 버튼, 스위치, 커넥터, 이음새, 통풍구, 표시창 가장자리, 나사. 사전 탐색(예: 높은 반복률로 훑어 민감 지점 찾기)을 하고 최종 포인트를 사진에 번호로 표시합니다.</li>
  <li><strong>횟수</strong> — 대표적으로 선정 포인트마다 극성별 최소 10회 단발 방전, 방전 간격 1초 이상. 제품 표준이 더 구체적으로 정하는 경우 그것을 따릅니다.</li>
  <li><strong>비접지 기기</strong> — 배터리 기기처럼 접지가 없는 EUT는 방전 사이에 전하가 쌓입니다. 블리더 케이블·브러시로 매 방전 전에 전하를 제거합니다.</li>
</ul>

<h3>기록 예시</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>포인트</th><th>위치</th><th>방법</th><th class="num">레벨 (kV)</th><th>극성</th><th class="num">횟수</th><th>관찰 현상</th><th>요구</th><th>결과</th></tr></thead>
<tbody>
<tr><td>P1</td><td>전원 버튼</td><td>기중</td><td class="num">2, 4, 8</td><td>±</td><td class="num">10/10</td><td>이상 없음</td><td>B</td><td>A (적합)</td></tr>
<tr><td>P2</td><td>USB 커넥터 쉘</td><td>접촉</td><td class="num">2, 4</td><td>±</td><td class="num">10/10</td><td>+4 kV에서 화면 1회 깜빡임, 자동 복구</td><td>B</td><td>B (적합)</td></tr>
<tr><td>HCP</td><td>EUT 앞면 방향</td><td>접촉(간접)</td><td class="num">2, 4</td><td>±</td><td class="num">10/10</td><td>이상 없음</td><td>B</td><td>A (적합)</td></tr>
</tbody></table></div>

<h2>EFT/버스트 — IEC 61000-4-4</h2>
<p>릴레이나 스위치가 유도성 부하를 끊을 때 접점에서 생기는 작은 불꽃은 <strong>나노초 단위의 빠른 펄스가 수백 개씩 몰려오는 버스트</strong>를 만듭니다. 이 펄스는 전원선·신호선을 타고 기기로 들어가 디지털 회로를 리셋시키거나 통신 오류를 일으킵니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>값</th><th>비고</th></tr></thead>
<tbody>
<tr><td>펄스 파형</td><td>5/50 ns (상승 5 ns, 반치폭 50 ns)</td><td>50 Ω 부하 기준</td></tr>
<tr><td>반복 주파수</td><td>5 kHz 또는 100 kHz</td><td>제품 표준이 지정. 100 kHz가 실제 현상에 더 가깝다는 평가도 있음</td></tr>
<tr><td>버스트 길이 / 주기</td><td>15 ms(5 kHz) 또는 0.75 ms(100 kHz) / 300 ms</td><td></td></tr>
<tr><td>레벨 (전원 포트)</td><td>레벨 1–4: 0.5 / 1 / 2 / 4 kV</td><td>예: KS C 9835 AC 전원 ±1 kV</td></tr>
<tr><td>레벨 (신호 포트)</td><td>레벨 1–4: 0.25 / 0.5 / 1 / 2 kV</td><td>케이블 길이 조건(예: 3 m 초과) 확인</td></tr>
<tr><td>인가 시간</td><td>극성별 1분 이상 (대표적)</td><td></td></tr>
<tr><td>결합 방법</td><td>전원선: CDN (각 선–접지, 모든 선 동시 등) / 신호선: 용량성 결합 클램프</td><td>클램프 길이 약 1 m</td></tr>
</tbody></table></div>
<ul>
  <li>EUT는 접지 기준면 위 <strong>절연 지지대</strong>(탁상형 대표적으로 0.1 m) 위에 두고, 결합 장치와 EUT 사이 케이블 길이를 표준대로(대표적으로 0.5 m 전후) 맞춥니다. 판에 따라 치수가 다르니 원문을 확인하세요.</li>
  <li>결합 장치·시험기·EUT의 접지는 <strong>짧고 넓은 도체</strong>로 접지면에 연결합니다. 접지선이 길면 고주파 펄스가 약해집니다.</li>
  <li>시험 전 발생기 출력 파형을 <strong>검증(Verification)</strong>하는 절차가 있는 시험소가 많습니다. 결과를 기록해 두세요.</li>
</ul>

<h2>서지 — IEC 61000-4-5</h2>
<p>낙뢰가 근처에 떨어지거나 대형 설비가 개폐될 때 전원선에 <strong>큰 에너지의 과전압</strong>이 들어옵니다. 서지 시험기(CWG, Combination Wave Generator)는 개방 시 <strong>1.2/50 µs 전압</strong>, 단락 시 <strong>8/20 µs 전류</strong>를 내는 조합파를 만듭니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>값 (대표)</th><th>설명</th></tr></thead>
<tbody>
<tr><td>레벨</td><td>레벨 1–4: 0.5 / 1 / 2 / 4 kV</td><td>예: KS C 9835 AC 전원 선간 ±1 kV, 선–대지간 ±2 kV</td></tr>
<tr><td>선간 (Line–Line)</td><td>L–N (3상은 각 상 사이)</td><td>발생기 출력 임피던스 2 Ω (디퍼렌셜 서지)</td></tr>
<tr><td>선–대지간 (Line–Earth)</td><td>L–PE, N–PE</td><td>2 Ω + 10 Ω = 12 Ω 결합 (커먼 서지)</td></tr>
<tr><td>위상각</td><td>AC 전원 0°, 90°, 180°, 270°</td><td>교류 전압의 어느 순간에 서지가 들어오는지에 따라 영향이 다름</td></tr>
<tr><td>횟수</td><td>각 조건마다 양극성 5회 + 음극성 5회</td><td>대표적으로 1분 간격 (보호소자 회복 시간 고려)</td></tr>
<tr><td>레벨 순서</td><td>낮은 레벨부터 선택 레벨까지 단계적으로</td><td>낮은 레벨에서만 동작하는 보호 회로 문제를 찾기 위함</td></tr>
</tbody></table></div>
<div class="callout note">
  <span class="callout-title">왜 위상각을 바꾸나?</span>
  교류 전압이 최대(90°, 270°)일 때 서지가 겹치면 순간 전압이 더 높아지고, 0°(영점)에서는 전원의 스위칭 소자와 보호 소자의 동작이 달라집니다. 어느 순간이 가장 취약한지 모르므로 여러 위상에서 시험합니다.
</div>

<h3>서지·EFT 기록 예시</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>시험</th><th>포트</th><th>결합</th><th class="num">레벨 (kV)</th><th>조건</th><th>관찰 현상</th><th>요구</th><th>결과</th></tr></thead>
<tbody>
<tr><td>EFT</td><td>AC 전원</td><td>L, N, PE 동시</td><td class="num">±0.5, ±1</td><td>5 kHz, 극성별 1분</td><td>이상 없음</td><td>B</td><td>A</td></tr>
<tr><td>EFT</td><td>LAN (UTP 5 m)</td><td>용량성 클램프</td><td class="num">±0.5</td><td>5 kHz, 극성별 1분</td><td>Ping 1회 손실 후 자동 복구</td><td>B</td><td>B</td></tr>
<tr><td>서지</td><td>AC 전원</td><td>L–N</td><td class="num">±0.5, ±1</td><td>0/90/180/270°, 각 ±5회</td><td>이상 없음</td><td>B</td><td>A</td></tr>
<tr><td>서지</td><td>AC 전원</td><td>L–PE, N–PE</td><td class="num">±0.5, ±1, ±2</td><td>0/90/180/270°, 각 ±5회</td><td>이상 없음</td><td>B</td><td>A</td></tr>
</tbody></table></div>

<h2>안전 수칙</h2>
<div class="callout danger">
  <span class="callout-title">고전압 시험입니다</span>
  <ul>
    <li>ESD 건은 최대 수십 kV까지 충전됩니다. <strong>사람을 향해 방전하지 않고</strong>, 방전 중에는 주변 인원에게 알립니다. 심장 박동기 등 의료기기 사용자는 시험 구역 출입을 삼갑니다.</li>
    <li>EFT·서지 시험 중에는 <strong>EUT, 결합 장치(CDN), 케이블을 만지지 않습니다</strong>. 시험 셋업 변경은 발생기 출력 OFF와 인터록 확인 후에 합니다.</li>
    <li>서지 시험은 EUT의 보호 소자(바리스터, 퓨즈)가 터지거나 연기가 날 수 있습니다. 보안경 착용, 주변 가연물 제거, 소화기 위치를 확인합니다.</li>
    <li>시험 후 결합 커패시터·EUT 내부에 전하가 남아 있을 수 있습니다. 방전을 확인한 뒤 분리합니다.</li>
  </ul>
</div>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><ul><li>기중 방전 시 팁을 천천히 접근시킴 → 방전 전류가 약해짐</li><li>ESD 포인트를 사진 없이 “앞면 여러 곳”으로 기록</li><li>서지를 한 위상각, 한 극성만 인가</li><li>EFT 접지선을 길게 늘어뜨려 연결</li><li>배터리 기기에서 방전 사이 전하 제거 생략</li></ul></div>
  <div class="good"><h4>✅ 좋은 예</h4><ul><li>기중 방전은 빠르게 수직으로 접근, 방전 후 즉시 뗌</li><li>포인트 번호를 사진에 표시하고 표와 매칭</li><li>레벨·극성·위상각·결합 경로 조합을 표로 관리</li><li>접지는 짧고 넓은 스트랩 사용</li><li>블리더 브러시로 매번 전하 제거</li></ul></div>
</div>
`,
  quiz: [
    { q: 'IEC 61000-4-2 ESD 시험에서 금속 외함(도전성 표면)에 적용하는 기본 방전 방법은?',
      options: ['접촉 방전', '기중 방전', '서지 결합', '용량성 클램프'],
      answer: 0, explain: '도전성 표면과 결합판에는 접촉 방전, 절연 표면에는 기중 방전을 적용합니다.' },
    { q: 'EFT/버스트 시험 펄스의 파형 규격은?',
      options: ['1.2/50 µs', '8/20 µs', '5/50 ns', '0.8 ns / 30 ns'],
      answer: 2, explain: 'EFT 펄스는 상승 5 ns, 반치폭 50 ns입니다. 1.2/50 µs와 8/20 µs는 서지 파형입니다.' },
    { q: 'AC 전원 포트 서지 시험에서 선–대지간(Line–Earth) 결합의 대표 임피던스는?',
      options: ['2 Ω', '12 Ω', '50 Ω', '150 Ω'],
      answer: 1, explain: '선간은 발생기 2 Ω, 선–대지간은 2 Ω + 10 Ω = 12 Ω로 결합합니다.' },
    { q: 'ESD·EFT·서지의 시험 레벨(kV)을 결정하는 근거는?',
      options: ['시험자의 경험', '기본 표준 IEC 61000-4-x의 최고 레벨', '의뢰인의 희망', '제품군 표준·고시(예: KS C 9835)'],
      answer: 3, explain: 'IEC 61000-4-x는 시험 방법을 정하는 기본 표준이고, 레벨과 성능 기준은 제품군 표준과 고시가 정합니다.' },
    { q: '서지 시험에서 AC 전원 위상각을 0°, 90°, 180°, 270°로 바꿔 인가하는 이유는?',
      options: ['시험 시간을 늘리기 위해', '교류 전압의 순간값에 따라 EUT의 취약성이 달라지기 때문', '발생기를 보호하기 위해', '측정 불확도를 줄이기 위해'],
      answer: 1, explain: '서지가 교류 전압의 최대점이나 영점과 겹칠 때 회로·보호 소자의 반응이 다르므로 여러 위상에서 시험합니다.' }
  ],
  refs: [
    { title: 'IEC Webstore — IEC 61000-4-2 / -4-4 / -4-5', url: 'https://webstore.iec.ch', note: 'ESD, EFT/버스트, 서지 기본 표준' },
    { title: 'AMETEK CTS (Teseq, EM TEST)', url: 'https://www.ametek-cts.com', note: 'ESD 시험기, EFT·서지 발생기, CDN' },
    { title: 'Noiseken', url: 'https://www.noiseken.com', note: 'ESD 시험기, 버스트 시험기 제조사' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파적합성 기준·시험방법 고시' }
  ]
});

COURSE.addLesson({
  id: 'emc-rs-cs',
  module: 'emc',
  order: 5,
  title: '방사·전도 내성(RS/CS)과 기타 내성 시험',
  minutes: 30,
  level: '실무',
  summary: '연속적인 RF 교란에 대한 내성(IEC 61000-4-3 RS, 61000-4-6 CS), 전원 주파수 자기장(61000-4-8), 전압 강하·순간정전(61000-4-11)의 원리와 설정, 성능 판정 기록과 모니터링 방법을 익힙니다.',
  objectives: [
    'RS 시험의 교정(균일장 영역, 16점)과 시험 조건(80% AM, 1 kHz, 스텝, 체류시간)을 설명할 수 있다.',
    'CS 시험에서 CDN의 역할과 셋업을 이해한다.',
    '자기장, 전압 강하·순간정전 시험의 설정과 판정 기준을 안다.',
    '성능 판정 기준 A/B/C에 맞춰 관찰 내용을 기록하고 모니터링 방법을 계획할 수 있다.'
  ],
  body: `
<h2>연속 교란 내성이란</h2>
<p>앞 강의의 ESD·EFT·서지가 “순간적인 충격”이었다면, 이번 강의의 RS·CS는 <strong>계속 이어지는 RF 교란</strong>입니다. 주변의 방송 송신소, 휴대폰, 무전기, 무선 LAN 같은 무선기기가 내는 전파가 기기에 들어와도 제대로 동작하는지를 확인합니다.</p>
<div class="card-grid">
  <div class="card"><h3>RS (방사 내성)</h3><p>IEC 61000-4-3 / KS C 9610-4-3. 안테나로 <strong>전자기장을 직접 쪼여서</strong> 기기 본체와 케이블에 교란을 줍니다. 대표 대역 80 MHz – 6 GHz.</p></div>
  <div class="card"><h3>CS (전도 내성)</h3><p>IEC 61000-4-6 / KS C 9610-4-6. 낮은 주파수 전파는 케이블이 안테나가 되어 받아들이므로, <strong>케이블에 직접 RF를 주입</strong>합니다. 대표 대역 150 kHz – 80 MHz.</p></div>
</div>
<div class="callout easy">
  <span class="callout-title">쉽게 비유하면</span>
  RS는 <strong>확성기로 큰 소리를 들려주며</strong> 집중력을 시험하는 것이고, CS는 <strong>이어폰을 꽂아 귀에 직접</strong> 소리를 넣는 것입니다. 저주파 전파는 파장이 수 m 이상이라 챔버에서 균일한 장을 만들기 어렵고, 실제로도 케이블을 통해 들어오기 때문에 CS 방식이 더 현실적이고 재현성이 좋습니다.
</div>

<h2>방사 내성(RS) — IEC 61000-4-3</h2>
<figure class="diagram">
<svg viewBox="0 0 760 305" role="img" aria-label="방사 내성 시험 셋업">
  <defs>
    <pattern id="emc5-absh" width="30" height="18" patternUnits="userSpaceOnUse"><path d="M0,0 L15,18 L30,0 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <pattern id="emc5-absu" width="30" height="18" patternUnits="userSpaceOnUse"><path d="M0,18 L15,0 L30,18 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <pattern id="emc5-absl" width="18" height="30" patternUnits="userSpaceOnUse"><path d="M0,0 L18,15 L0,30 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <pattern id="emc5-absr" width="18" height="30" patternUnits="userSpaceOnUse"><path d="M18,0 L0,15 L18,30 z" fill="var(--dg-fill-2)" stroke="var(--dg-muted)" stroke-width="0.8"/></pattern>
    <marker id="emc5-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker>
  </defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="30" y="40" width="160" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="57" font-weight="700">신호발생기</text><text x="110" y="73" font-size="11" fill="var(--text-3)">80% AM, 1 kHz</text>
    <rect x="30" y="100" width="160" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="125" font-weight="700">전력증폭기</text>
    <rect x="30" y="160" width="160" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="177" font-weight="700">방향성 결합기</text><text x="110" y="193" font-size="11" fill="var(--text-3)">+ 파워미터 (순방향 전력)</text>
    <rect x="30" y="225" width="160" height="40" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)"/>
    <text x="110" y="242" font-weight="700" fill="var(--dg-accent)">모니터링 PC</text><text x="110" y="258" font-size="11" fill="var(--text-3)">카메라 화면·통신 로그</text>
    <path d="M110 80 L110 98" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc5-arw)"/>
    <path d="M110 140 L110 158" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc5-arw)"/>
    <text x="115" y="30" font-size="11.5" fill="var(--text-3)">제어실</text>

    <rect x="230" y="20" width="510" height="250" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="230" y="20" width="510" height="18" fill="url(#emc5-absh)"/>
    <rect x="230" y="38" width="18" height="232" fill="url(#emc5-absl)"/>
    <rect x="722" y="38" width="18" height="232" fill="url(#emc5-absr)"/>
    <rect x="330" y="252" width="210" height="18" fill="url(#emc5-absu)"/>
    <text x="440" y="56" font-size="11.5" fill="var(--text-3)">무반사실 (바닥 일부에도 흡수체)</text>

    <path d="M190 180 L262 180 L262 150 L272 150" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <path d="M272 142 L272 158 L322 182 L322 118 z" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="2"/>
    <line x1="295" y1="170" x2="295" y2="252" stroke="var(--dg-muted)" stroke-width="3"/>
    <text x="297" y="105" font-size="12" fill="var(--dg-accent)" font-weight="700">송신 안테나</text>
    <g fill="none" stroke="var(--dg-accent)" stroke-width="1.5" opacity="0.8">
      <path d="M345 118 Q 362 150 345 182"/><path d="M380 108 Q 402 150 380 192"/><path d="M415 98 Q 442 150 415 202"/><path d="M450 90 Q 482 150 450 210"/>
    </g>

    <line x1="575" y1="75" x2="575" y2="235" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="575" y="68" font-size="12" fill="var(--dg-accent-2)" font-weight="700">UFA 1.5 m × 1.5 m</text>
    <rect x="545" y="200" width="140" height="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="557" y1="206" x2="557" y2="270" stroke="var(--dg-muted)" stroke-width="3"/>
    <line x1="673" y1="206" x2="673" y2="270" stroke="var(--dg-muted)" stroke-width="3"/>
    <rect x="580" y="160" width="70" height="40" rx="4" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="615" y="185" font-weight="700" fill="var(--dg-accent-2)">EUT</text>

    <rect x="690" y="120" width="26" height="20" rx="3" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <path d="M690 124 L680 130 L690 136 z" fill="var(--dg-line)"/>
    <text x="703" y="112" font-size="11.5">카메라</text>

    <path d="M320 240 L 572 240" stroke="var(--dg-line)" marker-start="url(#emc5-arw)" marker-end="url(#emc5-arw)"/>
    <text x="447" y="234" font-size="12">3 m (예)</text>

    <path d="M703 140 L703 292 L110 292 L110 267" fill="none" stroke="var(--dg-ok)" stroke-width="1.8" stroke-dasharray="6 4"/>
    <text x="450" y="287" font-size="11.5" fill="var(--dg-ok)">광케이블 (비금속 — 필드를 흐트러뜨리지 않음)</text>
  </g>
</svg>
<figcaption>그림 1. 방사 내성(RS) 시험 셋업 개념도(축척 아님). 교정 때는 EUT 자리에 전계 프로브를 두고 UFA 평면의 전계를 측정합니다.</figcaption>
</figure>

<h3>핵심 개념: 교정 먼저, 시험은 나중</h3>
<p>RS 시험은 “EUT에 3 V/m를 쪼였다”는 사실을 보장해야 합니다. 그런데 EUT를 놓은 상태에서는 전계를 정확히 잴 수 없습니다(EUT가 장을 흐트러뜨림). 그래서 <strong>EUT가 없는 상태에서 미리 교정</strong>합니다.</p>
<ol class="steps">
  <li><strong>균일장 영역(UFA, Uniform Field Area) 정하기</strong>EUT 앞면이 놓일 수직 평면, 대표적으로 1.5 m × 1.5 m(바닥에서 0.8 m 높이부터). 0.5 m 간격 격자의 16점.</li>
  <li><strong>16점 전계 측정</strong>등방성 전계 프로브를 각 점에 두고, 각 주파수에서 목표 전계(보통 시험 레벨의 1.8배 이상을 낼 수 있는지 확인)를 만드는 데 필요한 순방향 전력을 기록합니다.</li>
  <li><strong>균일성 판정</strong>16점 중 <strong>최소 75%(12점)</strong>의 전계가 공칭값의 <strong>0 ~ +6 dB</strong> 이내이면 균일한 장으로 인정합니다.</li>
  <li><strong>시험 때 재생</strong>교정 파일의 순방향 전력을 그대로 재생해 EUT를 시험합니다(대체법, Substitution method). 수평·수직 편파 각각 교정합니다.</li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="80% AM 변조 파형과 균일장 영역 16점">
  <g font-size="12" fill="var(--text-2)">
    <text x="220" y="22" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">80% AM, 1 kHz 변조 신호</text>
    <line x1="40" y1="120" x2="400" y2="120" stroke="var(--dg-muted)" stroke-width="0.8"/>
    <line x1="40" y1="48" x2="400" y2="48" stroke="var(--dg-muted)" stroke-dasharray="2 3"/>
    <line x1="40" y1="80" x2="400" y2="80" stroke="var(--dg-ok)" stroke-dasharray="5 3" stroke-width="1.5"/>
    <path d="M40 120.0 L41 99.4 L42 83.4 L43 76.7 L44 81.5 L45 97.2 L46 120.0 L47 143.9 L48 162.3 L49 169.9 L50 164.1 L51 146.0 L52 120.0 L53 93.0 L54 72.3 L55 64.0 L56 70.7 L57 91.1 L58 120.0 L59 149.9 L60 172.5 L61 181.4 L62 173.9 L63 151.5 L64 120.0 L65 87.7 L66 63.5 L67 54.1 L68 62.4 L69 86.4 L70 120.0 L71 154.1 L72 179.5 L73 189.2 L74 180.3 L75 155.0 L76 120.0 L77 84.6 L78 58.5 L79 48.7 L80 58.1 L81 84.2 L82 120.0 L83 156.0 L84 182.3 L85 192.0 L86 182.3 L87 156.0 L88 120.0 L89 84.2 L90 58.1 L91 48.7 L92 58.5 L93 84.6 L94 120.0 L95 155.0 L96 180.3 L97 189.2 L98 179.5 L99 154.1 L100 120.0 L101 86.4 L102 62.4 L103 54.1 L104 63.5 L105 87.7 L106 120.0 L107 151.5 L108 173.9 L109 181.4 L110 172.5 L111 149.9 L112 120.0 L113 91.1 L114 70.7 L115 64.0 L116 72.3 L117 93.0 L118 120.0 L119 146.0 L120 164.1 L121 169.9 L122 162.3 L123 143.9 L124 120.0 L125 97.2 L126 81.5 L127 76.7 L128 83.4 L129 99.4 L130 120.0 L131 139.4 L132 152.7 L133 156.7 L134 150.8 L135 137.2 L136 120.0 L137 103.9 L138 93.0 L139 89.9 L140 94.8 L141 106.0 L142 120.0 L143 133.0 L144 141.6 L145 144.0 L146 140.0 L147 131.1 L148 120.0 L149 109.9 L150 103.2 L151 101.4 L152 104.6 L153 111.5 L154 120.0 L155 127.7 L156 132.8 L157 134.1 L158 131.7 L159 126.4 L160 120.0 L161 114.1 L162 110.3 L163 109.2 L164 111.1 L165 115.0 L166 120.0 L167 124.6 L168 127.8 L169 128.7 L170 127.3 L171 124.2 L172 120.0 L173 116.0 L174 113.1 L175 112.0 L176 113.1 L177 116.0 L178 120.0 L179 124.2 L180 127.3 L181 128.7 L182 127.8 L183 124.6 L184 120.0 L185 115.0 L186 111.1 L187 109.2 L188 110.3 L189 114.1 L190 120.0 L191 126.4 L192 131.7 L193 134.1 L194 132.8 L195 127.7 L196 120.0 L197 111.5 L198 104.6 L199 101.4 L200 103.2 L201 109.9 L202 120.0 L203 131.1 L204 140.0 L205 144.0 L206 141.6 L207 133.0 L208 120.0 L209 106.0 L210 94.8 L211 89.9 L212 93.0 L213 103.9 L214 120.0 L215 137.2 L216 150.8 L217 156.7 L218 152.7 L219 139.4 L220 120.0 L221 99.4 L222 83.4 L223 76.7 L224 81.5 L225 97.2 L226 120.0 L227 143.9 L228 162.3 L229 169.9 L230 164.1 L231 146.0 L232 120.0 L233 93.0 L234 72.3 L235 64.0 L236 70.7 L237 91.1 L238 120.0 L239 149.9 L240 172.5 L241 181.4 L242 173.9 L243 151.5 L244 120.0 L245 87.7 L246 63.5 L247 54.1 L248 62.4 L249 86.4 L250 120.0 L251 154.1 L252 179.5 L253 189.2 L254 180.3 L255 155.0 L256 120.0 L257 84.6 L258 58.5 L259 48.7 L260 58.1 L261 84.2 L262 120.0 L263 156.0 L264 182.3 L265 192.0 L266 182.3 L267 156.0 L268 120.0 L269 84.2 L270 58.1 L271 48.7 L272 58.5 L273 84.6 L274 120.0 L275 155.0 L276 180.3 L277 189.2 L278 179.5 L279 154.1 L280 120.0 L281 86.4 L282 62.4 L283 54.1 L284 63.5 L285 87.7 L286 120.0 L287 151.5 L288 173.9 L289 181.4 L290 172.5 L291 149.9 L292 120.0 L293 91.1 L294 70.7 L295 64.0 L296 72.3 L297 93.0 L298 120.0 L299 146.0 L300 164.1 L301 169.9 L302 162.3 L303 143.9 L304 120.0 L305 97.2 L306 81.5 L307 76.7 L308 83.4 L309 99.4 L310 120.0 L311 139.4 L312 152.7 L313 156.7 L314 150.8 L315 137.2 L316 120.0 L317 103.9 L318 93.0 L319 89.9 L320 94.8 L321 106.0 L322 120.0 L323 133.0 L324 141.6 L325 144.0 L326 140.0 L327 131.1 L328 120.0 L329 109.9 L330 103.2 L331 101.4 L332 104.6 L333 111.5 L334 120.0 L335 127.7 L336 132.8 L337 134.1 L338 131.7 L339 126.4 L340 120.0 L341 114.1 L342 110.3 L343 109.2 L344 111.1 L345 115.0 L346 120.0 L347 124.6 L348 127.8 L349 128.7 L350 127.3 L351 124.2 L352 120.0 L353 116.0 L354 113.1 L355 112.0 L356 113.1 L357 116.0 L358 120.0 L359 124.2 L360 127.3 L361 128.7 L362 127.8 L363 124.6 L364 120.0 L365 115.0 L366 111.1 L367 109.2 L368 110.3 L369 114.1 L370 120.0 L371 126.4 L372 131.7 L373 134.1 L374 132.8 L375 127.7 L376 120.0 L377 111.5 L378 104.6 L379 101.4 L380 103.2 L381 109.9 L382 120.0 L383 131.1 L384 140.0 L385 144.0 L386 141.6 L387 133.0 L388 120.0 L389 106.0 L390 94.8 L391 89.9 L392 93.0 L393 103.9 L394 120.0 L395 137.2 L396 150.8 L397 156.7 L398 152.7 L399 139.4 L400 120.0" fill="none" stroke="var(--dg-accent)" stroke-width="1"/>
    <path d="M40 80.0 L46 73.3 L52 67.0 L58 61.2 L64 56.2 L70 52.3 L76 49.6 L82 48.2 L88 48.2 L94 49.6 L100 52.3 L106 56.2 L112 61.2 L118 67.0 L124 73.3 L130 80.0 L136 86.7 L142 93.0 L148 98.8 L154 103.8 L160 107.7 L166 110.4 L172 111.8 L178 111.8 L184 110.4 L190 107.7 L196 103.8 L202 98.8 L208 93.0 L214 86.7 L220 80.0 L226 73.3 L232 67.0 L238 61.2 L244 56.2 L250 52.3 L256 49.6 L262 48.2 L268 48.2 L274 49.6 L280 52.3 L286 56.2 L292 61.2 L298 67.0 L304 73.3 L310 80.0 L316 86.7 L322 93.0 L328 98.8 L334 103.8 L340 107.7 L346 110.4 L352 111.8 L358 111.8 L364 110.4 L370 107.7 L376 103.8 L382 98.8 L388 93.0 L394 86.7 L400 80.0" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <path d="M40 160.0 L46 166.7 L52 173.0 L58 178.8 L64 183.8 L70 187.7 L76 190.4 L82 191.8 L88 191.8 L94 190.4 L100 187.7 L106 183.8 L112 178.8 L118 173.0 L124 166.7 L130 160.0 L136 153.3 L142 147.0 L148 141.2 L154 136.2 L160 132.3 L166 129.6 L172 128.2 L178 128.2 L184 129.6 L190 132.3 L196 136.2 L202 141.2 L208 147.0 L214 153.3 L220 160.0 L226 166.7 L232 173.0 L238 178.8 L244 183.8 L250 187.7 L256 190.4 L262 191.8 L268 191.8 L274 190.4 L280 187.7 L286 183.8 L292 178.8 L298 173.0 L304 166.7 L310 160.0 L316 153.3 L322 147.0 L328 141.2 L334 136.2 L340 132.3 L346 129.6 L352 128.2 L358 128.2 L364 129.6 L370 132.3 L376 136.2 L382 141.2 L388 147.0 L394 153.3 L400 160.0" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="406" y="52">1.8 E</text>
    <text x="406" y="84" fill="var(--dg-ok)">E</text>
    <text x="220" y="222" text-anchor="middle">E = 교정한 무변조(CW) 전계. 변조를 걸면 피크가 1.8 E</text>
    <text x="220" y="240" text-anchor="middle" fill="var(--text-3)">→ 증폭기는 무변조 대비 약 5.1 dB(전력 약 3.2배) 여유가 필요</text>

    <text x="590" y="22" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--text)">균일장 영역(UFA) 16점</text>
    <rect x="500" y="40" width="180" height="180" fill="none" stroke="var(--dg-accent-2)" stroke-dasharray="6 4"/>
    <g fill="var(--dg-ok)">
      <circle cx="500" cy="40" r="6"/><circle cx="560" cy="40" r="6"/><circle cx="620" cy="40" r="6"/>
      <circle cx="500" cy="100" r="6"/><circle cx="560" cy="100" r="6"/><circle cx="620" cy="100" r="6"/><circle cx="680" cy="100" r="6"/>
      <circle cx="560" cy="160" r="6"/><circle cx="620" cy="160" r="6"/><circle cx="680" cy="160" r="6"/>
      <circle cx="560" cy="220" r="6"/><circle cx="620" cy="220" r="6"/>
    </g>
    <g fill="none" stroke="var(--dg-accent-2)" stroke-width="2">
      <circle cx="680" cy="40" r="6"/><circle cx="500" cy="160" r="6"/><circle cx="500" cy="220" r="6"/><circle cx="680" cy="220" r="6"/>
    </g>
    <text x="590" y="240" text-anchor="middle">● 허용 범위 내 12점 · ○ 벗어난 4점 → 75% 충족</text>
    <text x="700" y="44" text-anchor="start" font-size="11">1.5 m</text>
  </g>
</svg>
<figcaption>그림 2. 왼쪽: 80% 진폭 변조 파형 — 교정은 무변조 레벨 E로 하고 시험 때 변조를 겁니다. 오른쪽: 0.5 m 간격 16점 중 12점 이상이 0 ~ +6 dB 이내여야 합니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>대표 값</th><th>비고</th></tr></thead>
<tbody>
<tr><td>주파수 범위</td><td>80 MHz – 6 GHz (기본 표준) / 제품 표준이 범위를 지정</td><td>예: CISPR 35는 80–1000 MHz 스윕 + 일부 고정 주파수(예: 1.8, 2.6, 3.5, 5 GHz) 방식 — 판에 따라 확인</td></tr>
<tr><td>시험 레벨</td><td>1 / 3 / 10 V/m (레벨 1–3), 특수 레벨 별도</td><td>예: 주거·상업 환경 3 V/m, 산업 환경 10 V/m</td></tr>
<tr><td>변조</td><td>80% AM, 1 kHz 정현파</td><td>레벨은 무변조 기준으로 교정</td></tr>
<tr><td>주파수 스텝</td><td>직전 주파수의 1% 이하</td><td>로그 스텝</td></tr>
<tr><td>체류 시간 (Dwell)</td><td>EUT가 동작·응답하는 데 필요한 시간 이상, 최소 0.5 s</td><td>EUT 동작 주기가 길면 더 길게</td></tr>
<tr><td>편파 / 면</td><td>수평·수직 편파, EUT 각 면(대표적으로 4면)</td><td>면마다 시간이 걸리므로 계획 필요</td></tr>
<tr><td>측정 거리</td><td>대표적으로 3 m (UFA 교정과 같은 거리)</td><td></td></tr>
</tbody></table></div>

<h2>전도 내성(CS) — IEC 61000-4-6</h2>
<p>CS는 <strong>CDN(Coupling/Decoupling Network, 결합/감결합 회로망)</strong>으로 케이블에 커먼모드 RF 전압을 주입합니다. CDN은 ① RF 교란을 EUT 쪽 케이블에 결합하고, ② 전원·보조기기 쪽으로는 RF가 새지 않게 막으며(감결합), ③ 케이블의 커먼모드 임피던스를 <strong>150 Ω</strong>으로 표준화합니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="전도 내성 CDN 시험 셋업">
  <defs><marker id="emc5-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="25" width="120" height="42" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="80" y="43" font-weight="700">신호발생기</text><text x="80" y="59" font-size="11" fill="var(--text-3)">80% AM 1 kHz</text>
    <rect x="170" y="25" width="120" height="42" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="230" y="51" font-weight="700">전력증폭기</text>
    <rect x="320" y="25" width="120" height="42" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="51" font-weight="700">6 dB 감쇠기</text>
    <path d="M140 46 L168 46" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc5-arw2)"/>
    <path d="M290 46 L318 46" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc5-arw2)"/>
    <path d="M380 67 L380 90 L340 90 L340 138" fill="none" stroke="var(--dg-accent-2)" stroke-width="2" marker-end="url(#emc5-arw2)"/>
    <text x="455" y="95" font-size="11.5" text-anchor="start" fill="var(--text-3)">(증폭기 보호·임피던스 정합)</text>

    <rect x="290" y="140" width="100" height="60" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="340" y="166" font-weight="700" fill="var(--dg-accent)">CDN</text><text x="340" y="184" font-size="11" fill="var(--text-3)">주입 (예: M2/M3)</text>
    <rect x="450" y="185" width="150" height="15" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="470" y="135" width="110" height="50" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="525" y="165" font-weight="700" fill="var(--dg-accent-2)">EUT</text>
    <line x1="390" y1="160" x2="470" y2="160" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <text x="430" y="152" font-size="11.5">0.1–0.3 m</text>
    <rect x="640" y="140" width="100" height="60" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="690" y="164" font-weight="700">CDN</text><text x="690" y="182" font-size="11" fill="var(--text-3)">50 Ω 종단 → AE</text>
    <line x1="580" y1="160" x2="640" y2="160" stroke="var(--dg-line)" stroke-width="2.5"/>
    <path d="M290 175 L240 175 L240 150 L200 150" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="195" y="146" font-size="11.5" text-anchor="end" fill="var(--text-2)">AC 전원 (감결합)</text>

    <line x1="20" y1="202" x2="740" y2="202" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="150" y="226" font-size="12" fill="var(--text-3)">기준 접지면</text>
    <text x="525" y="226" font-size="12" fill="var(--text-3)">절연 지지대 0.1 m</text>
  </g>
</svg>
<figcaption>그림 3. CS 시험 셋업 개념도. 주입용 CDN 외에 다른 포트의 CDN은 50 Ω으로 종단해 커먼모드 전류의 귀환 경로를 만듭니다.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>대표 값</th><th>비고</th></tr></thead>
<tbody>
<tr><td>주파수 범위</td><td>150 kHz – 80 MHz</td><td>제품 표준이 지정 (예: 일부 표준은 230 MHz까지 확장)</td></tr>
<tr><td>시험 레벨 (개방 전압 emf)</td><td>1 / 3 / 10 V (레벨 1–3)</td><td>예: 주거·상업 환경 3 V</td></tr>
<tr><td>변조</td><td>80% AM, 1 kHz</td><td>RS와 동일</td></tr>
<tr><td>스텝 / 체류 시간</td><td>1% 이하 / 최소 0.5 s</td><td></td></tr>
<tr><td>주입 장치</td><td>CDN (M1/M2/M3 전원, AF 비차폐, S 차폐, T 통신선) / EM 클램프 / 전류 주입 프로브(BCI)</td><td>CDN이 원칙, 불가하면 클램프</td></tr>
<tr><td>교정</td><td>150 Ω → 50 Ω 어댑터로 CDN 출력 레벨 설정</td><td>교정 파일을 시험 때 재생</td></tr>
</tbody></table></div>
<ul>
  <li>EUT는 접지면 위 <strong>0.1 m 절연 지지대</strong>에 놓고, CDN과 EUT 사이 케이블은 대표적으로 <strong>0.1–0.3 m</strong>로 짧게 유지합니다.</li>
  <li>주입하지 않는 다른 포트의 CDN은 <strong>50 Ω으로 종단</strong>합니다. 종단이 없으면 커먼모드 전류가 흐를 길이 없어 교란이 제대로 들어가지 않습니다.</li>
  <li>감쇠기(대표적으로 6 dB)는 증폭기 출력과 CDN 사이 임피던스 부정합을 줄이고 증폭기를 보호합니다.</li>
</ul>

<h2>기타 내성: 자기장, 전압 강하·순간정전</h2>
<h3>전원 주파수 자기장 (PFMF) — IEC 61000-4-8</h3>
<p>변압기, 배전반, 전력선 근처에는 50/60 Hz 자기장이 있습니다. <strong>유도 코일</strong>(대표적으로 1 m × 1 m 사각 코일) 안에 EUT를 두고 연속 자기장(레벨 예: 1, 3, 10, 30, 100 A/m)을 가합니다. 코일을 돌려 X·Y·Z <strong>세 방향</strong> 모두 시험합니다. 홀 센서, CRT 모니터, 자기 센서가 들어 있는 기기가 주로 영향을 받습니다. 제품 표준에 따라 해당 기기에만 적용되기도 합니다(예: CISPR 35는 자기장에 민감한 소자를 포함한 기기에 적용).</p>

<h3>전압 강하·순간정전 — IEC 61000-4-11</h3>
<p>전력망에서 사고나 대형 부하 기동이 일어나면 전압이 순간적으로 떨어지거나(강하, Dip) 완전히 끊깁니다(순간정전, Interruption). 시험기는 EUT에 공급하는 전압을 정해진 비율과 시간만큼 낮춥니다(정격 전류 16 A 이하 기기).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>시험</th><th>잔류 전압 (정격 대비)</th><th>지속 시간 (50 Hz / 60 Hz 사이클)</th><th>대표 판정 기준 (예)</th></tr></thead>
<tbody>
<tr><td>전압 강하</td><td>0% (100% 감소)</td><td>0.5 사이클</td><td>B</td></tr>
<tr><td>전압 강하</td><td>0%</td><td>1 사이클</td><td>B</td></tr>
<tr><td>전압 강하</td><td>70% (30% 감소)</td><td>25 / 30 사이클</td><td>C</td></tr>
<tr><td>순간 정전</td><td>0%</td><td>250 / 300 사이클 (약 5초)</td><td>C</td></tr>
</tbody></table></div>
<p style="font-size:.9em">위 조합은 IEC 61000-4-11 Class 2 환경 및 멀티미디어 기기 표준에서 자주 쓰이는 예시입니다. 적용 레벨·위상각(대표적으로 0°, 180° 등)과 판정 기준은 <strong>제품 표준과 적용 판을 확인</strong>하세요. 입력 전압 범위가 넓은(프리볼트) 기기는 정격 전압 범위의 최저·최고 등 어느 전압에서 시험할지도 표준에 따릅니다.</p>

<h2>성능 판정 기록과 모니터링</h2>
<p>내성 시험의 성적서 품질은 <strong>“무엇을 어떻게 관찰했는가”</strong>에 달려 있습니다. 시험 전에 의뢰인과 다음을 합의하고 시험 계획서에 적습니다.</p>
<ol class="steps">
  <li><strong>정상 동작의 정의</strong>예: “1080p 영상 재생, 화면 깨짐 없음”, “Ping 1초 간격, 손실 0%”, “센서 출력 ±2% 이내”.</li>
  <li><strong>허용 성능 저하</strong>판정 기준 A에서도 허용되는 저하 범위를 제조사가 명시합니다(예: 오디오 잡음 레벨 한도).</li>
  <li><strong>모니터링 방법</strong>카메라(영상·표시등), 음향(비금속 음향관 + 마이크), 통신(광 변환기로 링크 유지·에러율 기록), 로그 파일, 계측기 출력.</li>
  <li><strong>관찰·판정 기록</strong>시험 조건별로 현상, 발생 주파수·레벨, 복구 방법, 최종 판정(A/B/C/불합격)을 적습니다.</li>
</ol>
<div class="table-wrap"><table class="data">
<thead><tr><th>시험</th><th>조건</th><th>모니터링</th><th>관찰 현상</th><th>요구</th><th>결과</th></tr></thead>
<tbody>
<tr><td>RS</td><td>80–1000 MHz, 3 V/m, H/V, 4면</td><td>카메라(화면), Ping 로그</td><td>이상 없음</td><td>A</td><td>A (적합)</td></tr>
<tr><td>CS</td><td>AC 전원 CDN M3, 0.15–80 MHz, 3 V</td><td>카메라, 오디오 모니터</td><td>21.3 MHz에서 오디오 잡음 증가, 허용 한도 이내</td><td>A</td><td>A (적합)</td></tr>
<tr><td>전압 강하</td><td>0%, 0.5 사이클, 0°/180°</td><td>카메라</td><td>화면 순간 꺼짐 후 자동 복구</td><td>B</td><td>B (적합)</td></tr>
<tr><td>순간 정전</td><td>0%, 250 사이클</td><td>카메라</td><td>전원 꺼짐, 복전 후 사용자 전원 버튼으로 재시작, 설정 유지</td><td>C</td><td>C (적합)</td></tr>
</tbody></table></div>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  <ul>
    <li>챔버 안에 <strong>금속 케이블(USB, LAN)</strong>로 모니터링 PC를 연결 → 필드가 흐트러지고, 모니터링 장비 자체가 오동작합니다. 광 변환기를 쓰세요.</li>
    <li>교정 때와 시험 때의 <strong>거리·안테나 높이·편파</strong>가 다름.</li>
    <li>RS 중 통신 링크가 끊겼는데 “EUT 문제”로 단정 → 보조기기(AE)가 영향을 받은 것은 아닌지 먼저 확인합니다. AE는 챔버 밖에 두거나 차폐합니다.</li>
    <li>“이상 없음”만 기록하고 무엇을 봤는지 적지 않음.</li>
    <li>CS에서 비주입 포트 CDN의 50 Ω 종단 누락.</li>
  </ul>
</div>
<div class="callout danger">
  <span class="callout-title">안전</span>
  RS 시험 중에는 챔버 안 전계가 매우 강합니다. <strong>증폭기 출력이 켜진 상태에서 절대 입실하지 않습니다.</strong> 문 인터록이 정상 동작하는지 매일 확인하세요.
</div>
`,
  quiz: [
    { q: 'IEC 61000-4-3 RS 시험의 균일장 영역(UFA) 판정 조건으로 옳은 것은?',
      options: ['16점 모두가 ±1 dB 이내', '16점 중 최소 75%(12점)가 0 ~ +6 dB 이내', '중앙 1점만 목표값이면 됨', '16점 평균이 목표값 이상'],
      answer: 1, explain: '0.5 m 간격 16점 중 75% 이상이 공칭 전계의 0 ~ +6 dB 이내여야 균일장으로 인정합니다.' },
    { q: 'RS·CS 시험의 표준 변조 조건은?',
      options: ['변조 없음(CW)', '50% AM, 400 Hz', '80% AM, 1 kHz', 'FM 10 kHz 편이'],
      answer: 2, explain: '80% 진폭 변조, 1 kHz 정현파가 표준 조건입니다. 레벨 교정은 무변조 상태로 합니다.' },
    { q: 'CS 시험에서 CDN의 역할이 아닌 것은?',
      options: ['케이블에 RF 교란을 결합한다', '전원·AE 쪽으로 RF가 새는 것을 막는다', '커먼모드 임피던스를 150 Ω으로 표준화한다', 'EUT의 방사 방출을 측정한다'],
      answer: 3, explain: 'CDN은 결합·감결합·임피던스 표준화를 합니다. 방출 측정 장치가 아닙니다.' },
    { q: '순간정전(0%, 250 사이클) 시험 후 EUT가 꺼졌고, 사용자가 전원 버튼을 눌러 재시작하니 정상이며 설정도 유지되었다. 해당 판정 기준은?',
      options: ['C', 'A', 'B', '불합격(영구 손상)'],
      answer: 0, explain: '사용자 조작으로 복구 가능한 기능 상실은 판정 기준 C입니다. 요구 기준이 C이면 적합입니다.' },
    { q: 'RS 시험 중 EUT 상태를 모니터링하는 방법으로 가장 적절한 것은?',
      options: ['USB 케이블로 챔버 밖 PC와 연결', '광케이블·카메라 등 비금속 수단 사용', '시험자가 챔버 안에서 직접 관찰', '시험 후 한 번만 확인'],
      answer: 1, explain: '금속 케이블은 필드를 흐트러뜨리고 교란을 끌고 들어옵니다. 광 변환기, 카메라, 음향관을 사용합니다.' }
  ],
  refs: [
    { title: 'IEC Webstore — IEC 61000-4-3 / -4-6 / -4-8 / -4-11', url: 'https://webstore.iec.ch', note: 'RS, CS, 자기장, 전압 강하 기본 표준' },
    { title: 'AMETEK CTS (Teseq, EM TEST)', url: 'https://www.ametek-cts.com', note: 'CDN, RF 증폭기, 전압 강하 시험기, 자기장 코일' },
    { title: 'ETS-Lindgren', url: 'https://www.ets-lindgren.com', note: '전계 프로브, 내성 시험용 안테나·챔버' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파적합성 기준 고시' }
  ]
});

COURSE.addLesson({
  id: 'emc-radio',
  module: 'emc',
  order: 6,
  title: '무선기기의 EMC와 시험 계획서 작성',
  minutes: 25,
  level: '실무',
  summary: '무선 송수신 기능이 있는 기기의 EMC — ETSI EN 301 489 시리즈의 구조, 링크 유지 상태 시험, 제외 대역, 동작 모드, 한국 무선기기 EMC 적용, 전원 고조파·플리커 개요, 그리고 EMC 시험 계획서 작성 포인트를 정리합니다.',
  objectives: [
    'EN 301 489-1과 개별 파트(-17, -52 등)의 관계를 설명할 수 있다.',
    '무선 링크 유지 상태 시험, 제외 대역, 송신/수신/대기 모드의 의미를 안다.',
    '전원 고조파(61000-3-2)와 플리커(61000-3-3) 시험의 목적과 개요를 안다.',
    '시험 모드, 케이블 목록, 보조기기(AE)를 포함한 EMC 시험 계획서를 작성할 수 있다.'
  ],
  body: `
<h2>무선기기 EMC는 무엇이 다른가</h2>
<p>블루투스 이어폰, Wi-Fi 공유기, 스마트폰, IoT 센서처럼 <strong>전파를 일부러 내보내고 받는</strong> 기기도 EMC 시험을 받습니다. 하지만 일반 기기와 똑같이 시험하면 두 가지 문제가 생깁니다.</p>
<ol>
  <li><strong>방출</strong> — 송신기는 원래 강한 전파를 냅니다. 방사 방출 측정에 그대로 잡히면 무조건 한계를 넘습니다. 의도적인 송신 신호와 그 인접 대역은 EMC 방출 판정에서 제외하고, 송신 관련 불요 방사는 무선 표준(예: 무선 시험 항목의 스퓨리어스)에서 따로 다룹니다.</li>
  <li><strong>내성</strong> — 수신기는 원래 전파를 받도록 만든 기기입니다. 자기 수신 대역에 교란을 넣으면 당연히 통신이 끊깁니다. 그래서 운용 대역 주변은 내성 시험에서 <strong>제외 대역(Exclusion band)</strong>으로 둡니다.</li>
</ol>
<div class="callout easy">
  <span class="callout-title">쉽게 비유하면</span>
  통역사의 집중력을 시험한다고 할 때, 통역 중인 언어로 옆에서 떠들면 누구든 방해를 받습니다. 그래서 “통역 언어(운용 대역)는 빼고, <strong>다른 소음 속에서 통역(무선 링크)을 계속 잘 하는지</strong>”를 봅니다. 통역이 끊기지 않는지가 판정의 핵심입니다.
</div>

<h2>ETSI EN 301 489 시리즈 구조</h2>
<p>유럽 무선기기 지침(RED)의 EMC 요구는 EN 301 489 시리즈로 다룹니다. <strong>Part 1이 공통 요구사항</strong>(시험 항목, 셋업, 성능 기준의 틀)을 정하고, <strong>개별 파트</strong>가 무선 기술별 세부 조건(시험 모드, 성능 기준의 구체적 내용, 제외 대역)을 정합니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>파트</th><th>대상 (개념)</th><th>예</th></tr></thead>
<tbody>
<tr><td>EN 301 489-1</td><td>모든 무선기기 공통 기술 요구사항</td><td>방출·내성 항목, 성능 기준 틀, 셋업</td></tr>
<tr><td>EN 301 489-3</td><td>단거리 무선기기(SRD)</td><td>원격 리모컨, 저전력 센서 등</td></tr>
<tr><td>EN 301 489-17</td><td>광대역 데이터 전송 시스템</td><td>Wi-Fi(2.4/5 GHz 대역), 블루투스 등</td></tr>
<tr><td>EN 301 489-52</td><td>셀룰러 이동통신 단말·부속기기</td><td>LTE, 5G NR 단말 등 (과거 여러 파트를 통합)</td></tr>
</tbody></table></div>
<p style="font-size:.9em">파트 번호와 적용 범위는 개정될 수 있습니다. 적용 판과 EU 관보(OJEU) 등재 여부는 ETSI 및 EU 공지로 확인하세요.</p>

<h3>성능 기준 (EN 301 489-1의 틀)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>의미</th><th>적용 현상</th></tr></thead>
<tbody>
<tr><td>CT / CR</td><td>연속 현상 중 송신기(T) / 수신기(R)의 성능 기준 — 시험 중 링크 유지, 성능 저하 없음</td><td>RS, CS 등</td></tr>
<tr><td>TT / TR</td><td>과도 현상 후 송신기 / 수신기의 성능 기준 — 일시적 저하 후 자동 복구, 링크 유지 또는 재연결</td><td>ESD, EFT, 서지, 전압 강하 등</td></tr>
</tbody></table></div>
<p>구체적인 판정 척도(예: 패킷 오류율, 스루풋 감소 허용 폭, 링크 재연결 가능 여부)는 개별 파트가 정합니다. 시험 전 <strong>무엇을, 어떤 수치로 감시할지</strong>를 시험 계획서에 적어야 합니다.</p>

<h2>링크 유지 상태에서 시험하기</h2>
<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="무선기기 EMC 내성 시험 셋업">
  <defs><marker id="emc6-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="470" height="230" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="255" y="40" font-size="11.5" fill="var(--text-3)">챔버 (차폐·흡수체)</text>

    <path d="M40 132 L40 148 L90 170 L90 110 z" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <g fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" opacity="0.8">
      <path d="M110 112 Q 125 140 110 168"/><path d="M140 104 Q 160 140 140 176"/><path d="M170 96 Q 195 140 170 184"/>
    </g>
    <text x="75" y="200" font-size="12" fill="var(--dg-accent-2)" font-weight="700">교란 안테나</text>
    <text x="75" y="216" font-size="11" fill="var(--text-3)">(RS 신호원은 제어실)</text>

    <rect x="230" y="180" width="160" height="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="245" y1="186" x2="245" y2="250" stroke="var(--dg-muted)" stroke-width="3"/>
    <line x1="375" y1="186" x2="375" y2="250" stroke="var(--dg-muted)" stroke-width="3"/>
    <rect x="260" y="140" width="90" height="40" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="305" y="165" font-weight="700" fill="var(--dg-accent)">EUT (무선)</text>

    <line x1="440" y1="62" x2="440" y2="98" stroke="var(--dg-accent)" stroke-width="3"/>
    <line x1="440" y1="98" x2="440" y2="120" stroke="var(--dg-muted)" stroke-width="2"/>
    <text x="440" y="56" font-size="12">링크 안테나</text>
    <path d="M320 138 C 340 90, 390 80, 432 80" fill="none" stroke="var(--dg-ok)" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="398" y="110" font-size="11.5" fill="var(--dg-ok)">무선 링크</text>

    <path d="M444 80 L 540 80" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="496" y="70" width="34" height="20" rx="3" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="513" y="106" font-size="10.5" fill="var(--text-3)">감쇠기·필터</text>

    <rect x="540" y="45" width="200" height="70" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="640" y="72" font-weight="700">무선 통신 시험기 / 상대 기기</text>
    <text x="640" y="93" font-size="11.5" fill="var(--text-2)">링크 유지 · 스루풋 · PER 감시</text>
    <path d="M640 115 L640 158" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc6-arw)"/>
    <rect x="540" y="160" width="200" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="640" y="185" font-weight="700">모니터링 PC</text>
    <text x="640" y="205" font-size="11.5" fill="var(--text-2)">링크 끊김 · 오류율 로그 기록</text>
  </g>
</svg>
<figcaption>그림 1. 무선기기 내성 시험 개념도. EUT가 상대 기기(또는 통신 시험기)와 무선 링크를 맺은 상태에서 교란을 가하고, 링크 품질을 챔버 밖에서 감시합니다.</figcaption>
</figure>
<ul>
  <li><strong>링크 설정</strong> — EUT는 실제 사용처럼 상대 기기와 연결된 상태여야 합니다. 셀룰러 단말은 무선 통신 시험기(기지국 모의기), Wi-Fi·블루투스는 AP·상대 기기나 전용 시험기와 링크를 맺습니다.</li>
  <li><strong>링크 신호 레벨</strong> — 너무 강하면 교란에 둔감해지고 너무 약하면 교란 없이도 끊깁니다. 개별 파트가 정한 기준(예: 수신 감도 대비 일정 여유)에 맞추고 레벨을 기록합니다.</li>
  <li><strong>상대 기기 보호</strong> — 상대 기기·시험기는 챔버 밖에 두거나 차폐해, 교란이 “상대 쪽”을 망가뜨리지 않게 합니다. 링크 경로의 감쇠기·필터 값도 기록합니다.</li>
  <li><strong>데이터 흐름</strong> — 링크만 연결되고 데이터가 없으면 오류를 감지할 수 없습니다. 연속 데이터(스트리밍, 반복 패킷)를 흘리며 감시합니다.</li>
</ul>

<h2>제외 대역(Exclusion band)</h2>
<figure class="diagram">
<svg viewBox="0 0 760 210" role="img" aria-label="제외 대역 개념도">
  <defs>
    <pattern id="emc6-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="var(--dg-accent-2)" stroke-width="2"/></pattern>
    <marker id="emc6-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker>
  </defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="330" y="95" width="150" height="65" fill="url(#emc6-hatch)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <rect x="380" y="60" width="50" height="100" fill="var(--dg-accent)" opacity="0.7" stroke="var(--dg-accent)"/>
    <text x="405" y="50" font-weight="700" fill="var(--dg-accent)">운용 대역</text>
    <line x1="40" y1="160" x2="735" y2="160" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#emc6-arw2)"/>
    <text x="40" y="178" font-size="12" fill="var(--text-3)">80 MHz</text>
    <text x="715" y="178" font-size="12" fill="var(--text-3)" text-anchor="end">6 GHz</text>
    <path d="M60 130 L 320 130" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc6-arw2)"/>
    <text x="190" y="122" font-size="12" fill="var(--text-2)">교란 주파수 스윕 → 판정 대상</text>
    <path d="M490 130 L 720 130" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#emc6-arw2)"/>
    <text x="605" y="122" font-size="12" fill="var(--text-2)">교란 주파수 스윕 → 판정 대상</text>
    <text x="405" y="182" font-size="12.5" fill="var(--dg-accent-2)" font-weight="700">제외 대역</text>
    <text x="405" y="200" font-size="11.5" fill="var(--text-3)">(교란을 가하지 않거나 판정에서 제외)</text>
  </g>
</svg>
<figcaption>그림 2. 제외 대역 개념도(축척 아님). 제외 대역의 폭은 무선 기술별 개별 파트가 정합니다.</figcaption>
</figure>
<p>제외 대역은 <strong>“EUT가 원래 쓰는 주파수와 그 주변”</strong>입니다. 내성 시험에서 이 대역에 교란을 넣으면 수신기가 당연히 방해받으므로 제외합니다. 방출 시험에서도 송신 모드의 운용 대역 신호는 판정에서 제외합니다. 제외 대역의 정확한 범위(운용 대역 가장자리에서 얼마나 넓히는지)는 파트·기술마다 다르므로 <strong>적용 파트 원문의 값을 시험 계획서에 옮겨 적고</strong>, 성적서에도 명시합니다.</p>

<h2>동작 모드: 송신 / 수신 / 대기</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>모드</th><th>의미</th><th>주로 보는 시험</th><th>주의</th></tr></thead>
<tbody>
<tr><td>송신 (Tx)</td><td>링크를 맺고 데이터를 보내는 상태</td><td>내성(CT/TT), 방출(운용 대역 제외)</td><td>출력·채널·변조 방식 기록. 최대 출력 설정 여부 확인</td></tr>
<tr><td>수신 (Rx)</td><td>링크를 맺고 데이터를 받는 상태</td><td>내성(CR/TR)</td><td>수신 감도 근처가 아닌 규정 레벨로 링크 설정</td></tr>
<tr><td>대기 (Idle / Standby)</td><td>전원은 켜져 있지만 송신하지 않는 상태</td><td>방출 (송신 신호 없이 순수 불요 방출 확인)</td><td>대기 모드에서 주기적 비콘을 내는 기기도 있음</td></tr>
</tbody></table></div>
<p>여러 무선 기술(예: Wi-Fi + 블루투스 + LTE)이 들어 있는 기기는 기술별 파트를 모두 적용해야 할 수 있고, 어떤 조합으로 동시 동작시킬지도 계획서에 정합니다.</p>

<h2>한국의 무선기기 EMC 적용</h2>
<p>한국에서도 무선설비가 포함된 방송통신기자재는 적합성평가 시 <strong>무선 기술기준 시험과 함께 전자파적합성(EMC) 시험</strong>을 받습니다. 국립전파연구원 고시(전자파적합성 기준 등)는 무선기기에 적용하는 EMC 기준을 정하며, 그 내용은 EN 301 489 시리즈와 유사한 구조(공통 요구 + 기술별 조건, 링크 유지, 제외 대역)를 따릅니다.</p>
<div class="callout note">
  <span class="callout-title">확인 필요</span>
  무선기기용 EMC 기준의 <strong>정확한 표준 번호와 명칭은 개정 이력</strong>이 있습니다(과거 KN 301 489 계열로 불리던 기준이 KS 체계로 정비되는 등). 시험 전 <strong>국립전파연구원의 최신 고시</strong>와 국가법령정보센터의 고시 원문으로 적용 기준을 확인하세요. 무선 기능이 없는 부분(예: 멀티미디어 기능)에 대해 KS C 9832/9835가 함께 적용되는지도 고시로 확인합니다.
</div>

<h2>전원 고조파와 플리커 (간단히)</h2>
<div class="card-grid">
  <div class="card"><h3>고조파 전류 — IEC 61000-3-2</h3><p>정류 회로가 있는 기기는 전원에서 찌그러진 전류를 끌어갑니다. 이 전류의 <strong>고조파 성분(대표적으로 40차까지)</strong>이 전력망 전압을 왜곡하므로 한계를 둡니다. 상당 정격 전류 16 A 이하 기기 대상, 기기 종류에 따라 Class A/B/C/D(예: C 조명, D 일정 전력 이하 PC·TV)로 한계가 다릅니다. 한국은 KS C 9610-3-2.</p></div>
  <div class="card"><h3>전압 변동·플리커 — IEC 61000-3-3</h3><p>부하가 켜졌다 꺼졌다 하면 전압이 흔들려 조명이 깜빡입니다(플리커). 기준 임피던스를 통해 전원을 공급하며 단기 플리커 Pst(대표 한계 1.0), 장기 플리커 Plt(0.65), 상대 전압 변화 dc, dmax 등을 평가합니다. 한국은 KS C 9610-3-3.</p></div>
</div>
<p>두 시험 모두 <strong>전원 품질이 좋은 시험용 전원(저왜곡 AC 전원)</strong>과 전력 분석기가 필요합니다. 적용 여부(예: 정격 전력 기준 면제)와 한계는 표준과 고시로 확인하세요.</p>

<h2>EMC 시험 계획서 작성 포인트</h2>
<p>EMC 시험 결과는 <strong>시험 조건</strong>에 크게 좌우됩니다. 같은 제품이라도 모드·케이블·보조기기가 바뀌면 결과가 달라지므로, 시험 전에 의뢰인과 조건을 합의하고 계획서로 남깁니다. 재시험·수정 시험 때 같은 조건을 재현하는 근거도 이 계획서입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>기록 내용 (예)</th><th>왜 필요한가</th></tr></thead>
<tbody>
<tr><td>EUT 정보</td><td>모델명, 시리얼, HW/SW(펌웨어) 버전, 정격 전원, 내부 최고 주파수</td><td>시료 동일성, 방사 방출 측정 상한 결정</td></tr>
<tr><td>적용 표준·등급</td><td>KS C 9832:20xx Class B, KS C 9835:20xx, 무선기기 EMC 기준(고시), 적용 파트</td><td>판정 기준의 근거</td></tr>
<tr><td>시험 모드</td><td>예: 모드 1 영상 재생 + Wi-Fi 송신(ch 6, 최대 출력), 모드 2 대기, 모드 3 충전</td><td>최악 조건(Worst case) 선정 근거</td></tr>
<tr><td>포트·케이블 목록</td><td>포트 종류, 케이블 종류(차폐 유무), 길이, 페라이트 유무, 연결 상대</td><td>시험 대상 포트(CE/CS/EFT/서지) 결정, 재현성</td></tr>
<tr><td>보조기기(AE)</td><td>제조사·모델·시리얼, 역할(부하, 통신 상대), 위치(챔버 안/밖), 전원 공급 방법</td><td>AE 영향 배제, 재현성</td></tr>
<tr><td>성능 기준·모니터링</td><td>정상 동작 정의, 허용 저하, 관찰 방법(카메라, Ping, PER), 판정 기준 A/B/C 또는 CT/CR/TT/TR</td><td>내성 판정의 객관성</td></tr>
<tr><td>무선 조건</td><td>링크 상대, 채널, 출력, 링크 레벨, 제외 대역</td><td>무선기기 내성 판정 근거</td></tr>
<tr><td>시험 항목·레벨</td><td>항목별 표준, 레벨, 포트, 편파·면, 극성·위상각</td><td>누락 방지</td></tr>
<tr><td>변경 이력</td><td>시험 중 대책(페라이트 추가, 필터 교체, SW 변경) 내용과 승인자</td><td>최종 시료 구성과 양산품 일치 확인</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">현장 팁 — 최악 조건 찾기</span>
  모든 모드를 전 항목 시험하기 어렵다면, 사전 방출 스캔으로 <strong>가장 방출이 큰 모드</strong>를 찾아 최종측정에 쓰고, 그 선택 근거(사전 스캔 결과)를 기록에 남깁니다. “아무 모드나 골랐다”는 기록은 심사에서 지적 대상입니다.
</div>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><ul><li>무선 링크를 연결하지 않고 “전원만 켠 상태”로 내성 시험</li><li>송신 모드 방사 방출에서 운용 대역 신호를 한계 초과로 판정</li><li>AE 목록에 “노트북 1대”만 기록</li><li>제외 대역 값을 성적서에 적지 않음</li><li>시험 중 추가한 페라이트 코어를 기록하지 않음</li></ul></div>
  <div class="good"><h4>✅ 좋은 예</h4><ul><li>링크 상대·채널·링크 레벨·데이터 흐름을 설정하고 감시</li><li>운용 대역과 제외 대역을 명시하고 판정에서 분리</li><li>AE는 제조사·모델·시리얼·위치까지 기록</li><li>적용 파트와 판(연도)을 계획서·성적서에 기재</li><li>대책 부품은 사진·위치·승인자와 함께 기록</li></ul></div>
</div>
`,
  quiz: [
    { q: 'EN 301 489 시리즈에서 모든 무선기기에 공통으로 적용되는 요구사항을 정하는 파트는?',
      options: ['Part 17', 'Part 52', 'Part 1', 'Part 3'],
      answer: 2, explain: 'Part 1이 공통 기술 요구사항을 정하고, -17(광대역 데이터), -52(셀룰러) 등 개별 파트가 기술별 세부 조건을 정합니다.' },
    { q: '무선기기 내성 시험에서 제외 대역(Exclusion band)을 두는 이유는?',
      options: ['시험 시간을 줄이기 위해', '운용 대역에 교란을 넣으면 수신기가 당연히 방해받기 때문', '챔버 성능이 그 대역에서 나쁘기 때문', '증폭기 출력이 부족하기 때문'],
      answer: 1, explain: '자기 운용 주파수와 그 인접 대역은 기기가 원래 신호를 받도록 설계된 곳이므로 내성 평가 대상에서 제외합니다.' },
    { q: '무선기기 EMC 내성 시험의 기본 조건으로 옳은 것은?',
      options: ['무선 기능을 끄고 시험한다', '상대 기기와 무선 링크를 맺고 데이터가 흐르는 상태에서 시험한다', '송신 출력을 0으로 한다', '상대 기기를 EUT 바로 옆 챔버 안에 둔다'],
      answer: 1, explain: '링크를 유지하며 데이터 흐름을 감시해야 성능 저하를 판정할 수 있습니다. 상대 기기는 교란 영향을 받지 않도록 챔버 밖에 두거나 차폐합니다.' },
    { q: '전원 고조파 전류 시험의 표준은?',
      options: ['IEC 61000-3-2', 'IEC 61000-4-2', 'IEC 61000-3-3', 'CISPR 32'],
      answer: 0, explain: 'IEC 61000-3-2(KS C 9610-3-2)는 고조파 전류, 61000-3-3은 전압 변동·플리커, 61000-4-2는 ESD입니다.' },
    { q: 'EMC 시험 계획서에 보조기기(AE)를 상세히 기록해야 하는 가장 중요한 이유는?',
      options: ['AE 가격을 청구하기 위해', '성적서 분량을 늘리기 위해', '결과에 영향을 줄 수 있어 재현성과 AE 영향 배제를 위해', '표준이 AE 색상을 요구하기 때문'],
      answer: 2, explain: 'AE는 방출에 섞이거나 내성 시험에서 먼저 오동작할 수 있습니다. 모델·시리얼·위치를 기록해야 같은 조건을 재현하고 원인을 구분할 수 있습니다.' }
  ],
  refs: [
    { title: 'ETSI Standards (EN 301 489 시리즈)', url: 'https://www.etsi.org/standards', note: 'EN 301 489-1/-3/-17/-52 무료 다운로드' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '무선기기 전자파적합성 기준, 적합성평가 고시' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '전파법, 방송통신기자재등의 적합성평가에 관한 고시' },
    { title: 'IEC Webstore — IEC 61000-3-2 / -3-3', url: 'https://webstore.iec.ch', note: '고조파 전류, 전압 변동·플리커' },
    { title: 'Rohde & Schwarz', url: 'https://www.rohde-schwarz.com', note: '무선 통신 시험기, EMC 측정 시스템' }
  ]
});
