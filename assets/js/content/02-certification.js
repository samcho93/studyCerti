/* MODULE 02 — 인증 제도 */

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-kc-overview',
  module: 'cert',
  order: 1,
  title: '한국 전파법 적합성평가(KC) 개요',
  minutes: 20,
  level: '기초',
  summary: '전파법에 따른 적합성평가의 법적 근거, 적합인증·적합등록·잠정인증의 차이, 인증번호와 KC 표시를 이해합니다.',
  objectives: [
    '전파법 적합성평가의 법적 근거와 대상(방송통신기자재등)을 설명할 수 있다.',
    '적합인증, 적합등록(지정시험기관 적합등록·자기적합확인), 잠정인증을 구분한다.',
    '인증번호 체계와 KC 표시(라벨링) 요건의 기본을 안다.',
    '하나의 제품에 무선·EMC·SAR 요구가 어떻게 결합되는지 설명할 수 있다.'
  ],
  body: `
<p>우리 시험소에 들어오는 시료의 상당수는 결국 <strong>“한국에서 팔기 위한 KC 적합성평가”</strong>를 위해 시험을 받습니다. 이 강의에서는 그 제도의 뼈대를 잡습니다. 세부 요건은 자주 개정되므로, 여기서는 <em>구조</em>를 이해하는 데 집중하고 실제 업무에서는 항상 최신 고시를 확인하세요.</p>

<h2>법적 근거와 대상</h2>
<p>한국에서 전파를 이용하거나 전자파를 발생시키는 기기의 적합성평가는 <strong>전파법</strong>에 근거합니다. 핵심 조항은 <strong>제58조의2(방송통신기자재등의 적합성평가)</strong>이며, 세부 절차와 대상 기자재 목록은 과학기술정보통신부(과기정통부) 고시인 <strong>「방송통신기자재등의 적합성평가에 관한 고시」</strong>에 정해져 있습니다. 실제 인증 업무(인증서 발급, 등록 접수, 사후관리 등)는 과기정통부 소속 <strong>국립전파연구원(RRA, National Radio Research Agency)</strong>이 담당합니다.</p>
<p>적합성평가의 대상은 법에서 <strong>“방송통신기자재등”</strong>이라고 부릅니다. 여기에는 다음이 모두 포함됩니다.</p>
<ul>
  <li><strong>무선설비의 기기</strong> — 휴대폰, Wi-Fi·블루투스 기기, 무전기, 무선 마이크, 레이더 등 전파를 <em>의도적으로</em> 내보내는 기기</li>
  <li><strong>유선 방송통신기자재</strong> — 전화기, 모뎀, 네트워크 장비 등 통신망에 연결되는 기기</li>
  <li><strong>전자파장해를 주거나 전자파로부터 영향을 받는 기자재</strong> — 가전제품, 컴퓨터·모니터, 조명기기, 산업용 기기 등 (EMC 대상)</li>
</ul>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  전파법 적합성평가는 “자동차 형식 승인”과 비슷합니다. 차종(모델)마다 한 번 검사를 받아 번호(인증번호)를 받고, 그 모델과 똑같이 만든 제품에는 표시(KC 마크)를 붙여 팔 수 있습니다. 다만 위험도에 따라 <strong>정부가 직접 심사하는 방식</strong>과 <strong>시험 후 등록만 하는 방식</strong>으로 나뉩니다.
</div>

<h2>적합인증 · 적합등록 · 잠정인증</h2>
<p>적합성평가는 크게 세 가지 유형이 있습니다. 어떤 유형을 받아야 하는지는 제조사가 고르는 것이 아니라 <strong>고시의 대상 기자재 목록</strong>에 따라 정해집니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="적합성평가 유형 분류">
  <defs><marker id="certkc-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="260" y="10" width="240" height="52" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="32" font-weight="700">방송통신기자재등</text>
    <text x="380" y="51" font-size="12" fill="var(--text-3)">전파법 제58조의2 · 적합성평가 고시</text>
    <path d="M330 62 C 330 90, 130 85, 130 112" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certkc-arw)"/>
    <path d="M380 62 L 380 112" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certkc-arw)"/>
    <path d="M430 62 C 430 90, 630 85, 630 112" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certkc-arw)"/>

    <rect x="10" y="115" width="240" height="145" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="130" y="140" font-weight="700" font-size="16" fill="var(--dg-accent)">적합인증</text>
    <text x="130" y="164" font-size="12.5" fill="var(--text-2)">전파 혼신·위해 우려가 큰 기자재</text>
    <text x="130" y="184" font-size="12.5" fill="var(--text-2)">지정시험기관 시험</text>
    <text x="130" y="204" font-size="12.5" fill="var(--text-2)">→ RRA 서류 심사 → 인증서</text>
    <text x="130" y="236" font-size="12" fill="var(--text-3)">예: 다수의 무선기기</text>

    <rect x="260" y="115" width="240" height="145" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="2"/>
    <text x="380" y="140" font-weight="700" font-size="16" fill="var(--dg-ok)">적합등록</text>
    <text x="380" y="164" font-size="12.5" fill="var(--text-2)">① 지정시험기관 적합등록</text>
    <text x="380" y="184" font-size="12.5" fill="var(--text-2)">② 자기적합확인(자체 시험)</text>
    <text x="380" y="204" font-size="12.5" fill="var(--text-2)">→ 등록(심사 없이) · 서류 보관</text>
    <text x="380" y="236" font-size="12" fill="var(--text-3)">예: 다수의 EMC·유선 기자재</text>

    <rect x="510" y="115" width="240" height="145" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="630" y="140" font-weight="700" font-size="16" fill="var(--dg-accent-2)">잠정인증</text>
    <text x="630" y="164" font-size="12.5" fill="var(--text-2)">기술기준이 아직 없는</text>
    <text x="630" y="184" font-size="12.5" fill="var(--text-2)">신기술 기자재</text>
    <text x="630" y="204" font-size="12.5" fill="var(--text-2)">→ 지역·유효기간 등 조건부</text>
    <text x="630" y="236" font-size="12" fill="var(--text-3)">예외적 · 드묾</text>
  </g>
</svg>
<figcaption>그림 1. 적합성평가 3가지 유형 (구체적인 대상 기자재는 고시의 목록으로 판단)</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>적합인증</th><th>적합등록 (지정시험기관)</th><th>적합등록 (자기적합확인)</th><th>잠정인증</th></tr></thead>
<tbody>
<tr><td>대상 성격</td><td>전파 환경·인체에 영향이 클 수 있는 기자재</td><td colspan="2">적합인증 대상이 아닌 기자재 중 고시에 정한 것</td><td>관련 기술기준이 없는 신기술 기자재</td></tr>
<tr><td>시험 주체</td><td>지정시험기관</td><td>지정시험기관</td><td>제조·수입자 자체 (또는 의뢰)</td><td>시험기관 등 (적합성 평가 자료)</td></tr>
<tr><td>정부 심사</td><td>있음 (RRA가 서류 심사 후 인증서 발급)</td><td>없음 (등록 신청 → 등록)</td><td>없음 (등록 신청 → 등록)</td><td>있음 (조건 부여)</td></tr>
<tr><td>서류 관리</td><td>신청 시 제출</td><td>제조·수입자가 보관, 요청 시 제출</td><td>제조·수입자가 보관, 요청 시 제출</td><td>신청 시 제출</td></tr>
<tr><td>표시</td><td colspan="4">KC 표시 + 인증(등록)번호 등 — 유형에 관계없이 표시 의무</td></tr>
</tbody></table></div>

<p>대략적인 경향은 이렇습니다.</p>
<ul>
  <li><strong>무선기기</strong>(휴대폰, 무선랜·블루투스 모듈, 무전기 등)는 대체로 <strong>적합인증</strong> 대상입니다.</li>
  <li><strong>유선 통신기자재·일반 전기전자기기</strong>(EMC만 해당)는 대체로 <strong>적합등록</strong> 대상이며, 그중 일부는 반드시 지정시험기관 시험을 거쳐야 하고, 일부는 자기적합확인이 허용됩니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">단정하지 말고 목록을 확인</span>
  “무선이니까 인증, 가전이니까 자기확인” 식으로 외우면 틀리기 쉽습니다. 같은 무선기기라도 종류에 따라 적합등록 대상일 수 있고, 대상 목록은 개정됩니다. 고객 문의를 받으면 <strong>반드시 최신 「방송통신기자재등의 적합성평가에 관한 고시」의 별표(대상 기자재 목록)</strong>를 확인하고, 애매하면 선배·기술책임자 또는 RRA에 확인한 뒤 답변하세요.
</div>

<h2>하나의 제품에 여러 요구가 결합된다</h2>
<p>적합성평가는 “시험 한 가지”가 아니라 <strong>제품에 해당하는 기술기준 전체</strong>를 만족해야 합니다. 예를 들어 Wi-Fi·블루투스·LTE를 모두 탑재한 스마트폰이라면 다음이 모두 필요합니다.</p>
<div class="card-grid">
  <div class="card"><h3>📡 무선 (기술기준)</h3><p>각 무선 기술별 출력, 점유대역폭, 스퓨리어스, 주파수 허용편차 등. 무선설비 관련 기술기준과 시험방법을 따릅니다.</p></div>
  <div class="card"><h3>🛡️ EMC (전자파적합성)</h3><p>기기가 내보내는 전자파(방출)와 외부 전자파 내성. 전자파적합성 기준과 KS C 9832(CISPR 32 부합), KS C 9835(CISPR 35 부합), 무선기기 EMC 기준 등이 적용됩니다.</p></div>
  <div class="card"><h3>🧠 SAR (인체보호)</h3><p>머리·몸 가까이 쓰는 무선기기는 전자파흡수율 기준(머리·몸통 1 g 평균 1.6 W/kg, 사지 10 g 평균 4.0 W/kg)을 만족해야 합니다.</p></div>
</div>
<p>이 결과들이 모여 <strong>하나의 인증번호</strong>로 발급되는 것이 일반적입니다. 즉, 무선 시험팀·EMC 시험팀·SAR 시험팀의 성적서가 함께 묶여 한 건의 신청이 됩니다. 한 팀의 시험이 늦어지거나 오류가 있으면 전체 인증이 지연되므로, 팀 간 시료·모드 정보 공유가 매우 중요합니다.</p>

<h2>인증번호 체계와 KC 표시</h2>
<p>적합성평가를 받으면 <strong>인증번호(또는 등록번호)</strong>가 부여됩니다. 현재 체계는 대략 다음과 같은 구조입니다(<strong>예시</strong>이며 세부 규칙은 고시 확인).</p>
<div class="formula">R - C - ABC - Model123 &nbsp;&nbsp;=&nbsp;&nbsp; [전파법 기자재 식별] - [평가 유형] - [신청자 식별부호] - [제품 식별부호]</div>
<div class="table-wrap"><table class="data">
<thead><tr><th>예시 형식</th><th>의미 (일반적 해석)</th></tr></thead>
<tbody>
<tr><td><code>R-C-xxx-xxxxx</code></td><td>적합인증(Certification)</td></tr>
<tr><td><code>R-R-xxx-xxxxx</code></td><td>적합등록(Registration)</td></tr>
<tr><td><code>R-I-xxx-xxxxx</code></td><td>잠정인증(Interim) — 형식은 고시 확인</td></tr>
</tbody></table></div>
<p>과거에는 <code>KCC-CRM-…</code>, <code>MSIP-REM-…</code>, <code>R-CRM-…</code>처럼 기관명·세부 분류가 들어간 형식도 쓰였습니다. 오래된 시료나 파생모델 신청 시 이런 번호를 보게 되므로 “형식이 다르다고 가짜는 아니다”는 점을 알아 두세요.</p>

<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="KC 라벨 표시 예시">
  <g font-size="13" fill="var(--text)">
    <rect x="20" y="15" width="400" height="170" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <rect x="40" y="35" width="70" height="60" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="75" y="62" text-anchor="middle" font-weight="700">KC</text>
    <text x="75" y="80" text-anchor="middle" font-size="11" fill="var(--text-3)">(표시 도안)</text>
    <text x="130" y="50">상호: ㈜예시전자</text>
    <text x="130" y="72">모델명: EX-100</text>
    <text x="130" y="94">인증번호: R-C-EXA-EX100 (예시)</text>
    <text x="40" y="125">제조자/제조국: ㈜예시전자 / 한국</text>
    <text x="40" y="147">제조연월: 2026.09</text>
    <text x="40" y="169" fill="var(--text-3)" font-size="12">※ 필수 항목·위치·크기는 고시 기준 확인</text>
    <g text-anchor="start" font-size="12.5" fill="var(--text-2)">
      <text x="450" y="45">• 제품 본체에 표시가 원칙</text>
      <text x="450" y="70">• 표시가 어려운 소형 기기는</text>
      <text x="462" y="90">포장·설명서 표시 등 예외 규정</text>
      <text x="450" y="115">• 화면 표시(전자적 표시, e-label)</text>
      <text x="462" y="135">허용 여부·조건은 고시 확인</text>
      <text x="450" y="160">• 파생모델도 모델별로 표시</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. KC 라벨 구성 예시 (가상의 회사·번호)</figcaption>
</figure>

<div class="callout tip">
  <span class="callout-title">시험소에서 라벨을 보는 이유</span>
  시료 접수 시 라벨(또는 라벨 도안)을 확인하면 <strong>모델명·정격 전원·제조사 표기</strong>가 신청서·성적서와 일치하는지 초기에 잡아낼 수 있습니다. 모델명 한 글자 불일치 때문에 성적서를 재발행하는 일이 실제로 자주 생깁니다.
</div>

<h2>흔한 오해와 실수</h2>
<details class="faq"><summary>해외 인증(FCC, CE)이 있으면 KC는 필요 없나요?</summary><p>아닙니다. 국가별 인증은 별개입니다. 다만 상호인정협정(MRA)에 따라 일정 조건에서 해외 시험기관의 성적서를 인정받는 경우가 있습니다(<a href="#/l/cert-lab-accreditation">시험기관 제도와 인정</a> 참고).</p></details>
<details class="faq"><summary>인증받은 모듈을 넣은 완제품은 추가 인증이 없나요?</summary><p>모듈 인증을 활용할 수 있는 조건과 완제품 차원의 추가 평가(EMC, SAR 등) 필요 여부는 고시와 제품 구성에 따라 다릅니다. “모듈 인증이 있으니 끝”이라고 안내하면 안 되며, 반드시 검토 후 답변합니다.</p></details>
<details class="faq"><summary>적합등록은 심사가 없으니 서류를 안 만들어도 되나요?</summary><p>아닙니다. 심사 없이 등록되더라도 제조·수입자는 적합성을 입증하는 서류(시험성적서 등)를 보관해야 하며, 사후관리에서 제출을 요구받을 수 있습니다. 그래서 적합등록용 성적서도 똑같이 엄격하게 작성해야 합니다.</p></details>
`,
  quiz: [
    { q: '한국에서 방송통신기자재등의 적합성평가를 규정하는 핵심 법률은?',
      options: ['전기용품 및 생활용품 안전관리법', '전파법', '전기통신사업법', '산업표준화법'],
      answer: 1, explain: '전파법(제58조의2 등)과 과기정통부 고시인 「방송통신기자재등의 적합성평가에 관한 고시」가 적합성평가의 근거입니다.' },
    { q: '적합등록 중 “자기적합확인”의 특징으로 옳은 것은?',
      options: ['RRA가 서류를 심사한 뒤 인증서를 발급한다', '반드시 지정시험기관에서만 시험해야 한다', '제조·수입자가 스스로 적합성을 확인하고 등록하며, 서류를 보관한다', 'KC 표시가 필요 없다'],
      answer: 2, explain: '자기적합확인은 제조·수입자가 자체 시험(또는 의뢰) 결과로 적합성을 확인하고 등록하는 방식입니다. 서류는 보관 의무가 있고 KC 표시도 해야 합니다.' },
    { q: '어떤 기자재가 적합인증 대상인지 적합등록 대상인지 판단하는 가장 올바른 방법은?',
      options: ['무선이면 무조건 적합인증으로 안내한다', '고객이 원하는 유형으로 신청한다', '최신 적합성평가 고시의 대상 기자재 목록을 확인한다', '작년 유사 제품 사례만 참고한다'],
      answer: 2, explain: '평가 유형은 고시의 대상 기자재 목록으로 정해지며 개정될 수 있으므로 항상 최신 고시를 확인해야 합니다.' },
    { q: '인증번호 예시 “R-R-ABC-Model1”에서 두 번째 R이 일반적으로 뜻하는 것은?',
      options: ['적합등록', '적합인증', '잠정인증', '재인증'],
      answer: 0, explain: '일반적으로 C는 적합인증(Certification), R은 적합등록(Registration)을 뜻합니다. 세부 규칙은 고시를 확인하세요.' },
    { q: '무선랜·블루투스·LTE를 탑재한 스마트폰의 KC 적합성평가에 대한 설명으로 가장 알맞은 것은?',
      options: ['무선 시험만 하면 된다', 'SAR 시험만 하면 된다', '무선, EMC, SAR 등 해당하는 기술기준을 모두 만족해야 한다', 'EMC는 해외 성적서로 자동 면제된다'],
      answer: 2, explain: '하나의 제품에 해당하는 모든 기술기준(무선, 전자파적합성, 전자파 인체보호 등)을 만족해야 적합성평가를 받을 수 있습니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가 제도 안내, 고시, 인증 정보 검색' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '전파법, 시행령, 과기정통부 고시 원문 검색' },
    { title: '과학기술정보통신부', url: 'https://www.msit.go.kr', note: '전파 정책, 고시 개정 공지' }
  ]
});

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-kc-process',
  module: 'cert',
  order: 2,
  title: 'KC 인증 절차와 시험기관의 역할',
  minutes: 20,
  level: '실무',
  summary: '시험 의뢰부터 인증서 발급, 사후관리까지의 흐름과 시험기관이 챙겨야 할 서류·고시를 정리합니다.',
  objectives: [
    'KC 적합인증의 전체 흐름(신청→시험→서류→심사→발급→사후관리)을 설명한다.',
    '적합성평가 신청에 필요한 대표 서류와 각각의 목적을 안다.',
    '시험에 적용되는 주요 고시·기준의 이름과 역할을 구분한다.',
    '변경신고·파생모델 등 인증 이후의 절차를 이해한다.'
  ],
  body: `
<p>앞 강의에서 “무엇을” 받아야 하는지 봤다면, 이번 강의는 “어떻게” 진행되는지입니다. 시험소 엔지니어는 이 흐름에서 <strong>시험</strong>을 맡지만, 앞뒤 단계를 알아야 고객 문의에 답하고 일정 지연을 막을 수 있습니다.</p>

<h2>전체 흐름</h2>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="KC 적합인증 절차 흐름도">
  <defs><marker id="certpr-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13.5" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="20" width="160" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="90" y="46" font-weight="700">① 사전 검토</text>
    <text x="90" y="66" font-size="12" fill="var(--text-3)">유형·적용 기준 확인</text>
    <rect x="200" y="20" width="160" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="280" y="46" font-weight="700">② 시료·서류 준비</text>
    <text x="280" y="66" font-size="12" fill="var(--text-3)">시험 모드, 기술자료</text>
    <rect x="390" y="20" width="160" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="470" y="46" font-weight="700" fill="var(--dg-accent)">③ 시험</text>
    <text x="470" y="66" font-size="12" fill="var(--text-3)">지정시험기관 (우리)</text>
    <rect x="580" y="20" width="160" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="660" y="46" font-weight="700" fill="var(--dg-accent)">④ 시험성적서</text>
    <text x="660" y="66" font-size="12" fill="var(--text-3)">검토·승인 후 발행</text>

    <path d="M170 52 L 196 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M360 52 L 386 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M550 52 L 576 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M660 84 L 660 136" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>

    <rect x="580" y="140" width="160" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="660" y="166" font-weight="700">⑤ 인증 신청</text>
    <text x="660" y="186" font-size="12" fill="var(--text-3)">전자민원, 서류 첨부</text>
    <rect x="390" y="140" width="160" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="470" y="166" font-weight="700">⑥ 심사 (RRA)</text>
    <text x="470" y="186" font-size="12" fill="var(--text-3)">서류 검토, 보완 요청</text>
    <rect x="200" y="140" width="160" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="2"/>
    <text x="280" y="166" font-weight="700" fill="var(--dg-ok)">⑦ 인증서 발급</text>
    <text x="280" y="186" font-size="12" fill="var(--text-3)">인증번호 · KC 표시</text>
    <rect x="10" y="140" width="160" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="90" y="166" font-weight="700">⑧ 사후관리</text>
    <text x="90" y="186" font-size="12" fill="var(--text-3)">시장 감시, 변경신고</text>

    <path d="M580 172 L 554 172" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M390 172 L 364 172" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M200 172 L 174 172" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certpr-arw)"/>
    <path d="M470 204 C 470 240, 280 240, 280 90" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#certpr-arw)"/>
    <text x="385" y="238" font-size="12" fill="var(--dg-accent-2)">보완 요청 시 서류 수정·재제출</text>
  </g>
</svg>
<figcaption>그림 1. 적합인증 기준 절차 흐름. 적합등록은 ⑥ 심사 없이 등록되며, 서류는 제조·수입자가 보관합니다.</figcaption>
</figure>

<ol class="steps">
  <li><strong>사전 검토</strong>제품의 기능(무선 기술, 주파수 대역, 전원, 사용 형태)을 파악해 평가 유형과 적용 기준을 정합니다. 여기서 SAR 대상인지(인체 근접 사용 여부), 어떤 EMC 기준을 적용할지가 결정됩니다. 이 단계가 틀리면 시험을 다시 해야 합니다.</li>
  <li><strong>시료·서류 준비</strong>제조사는 시험용 시료(연속 송신 등 <em>시험 모드</em>가 가능한 것), 제어 소프트웨어, 기술 자료를 준비합니다. 시험소는 접수 시 모델명·버전·시리얼을 확인하고 시료 상태를 기록합니다.</li>
  <li><strong>시험</strong>지정시험기관이 기준에 정해진 방법으로 시험합니다. 무선·EMC·SAR 팀이 각각 시험하고, 원시 데이터와 기록을 남깁니다.</li>
  <li><strong>시험성적서 발행</strong>시험 담당자가 작성한 성적서를 기술책임자가 검토·승인해 발행합니다.</li>
  <li><strong>인증 신청</strong>신청인(제조·수입자 또는 대리인)이 RRA 전자민원 시스템으로 신청하며 성적서와 서류를 첨부합니다.</li>
  <li><strong>심사</strong>RRA가 서류를 검토합니다. 누락·불일치가 있으면 보완을 요청합니다.</li>
  <li><strong>인증서 발급</strong>인증번호가 부여되고, 제조·수입자는 제품에 KC 표시를 합니다.</li>
  <li><strong>사후관리</strong>유통 중인 제품을 수거해 시험하는 등 시장 감시가 이뤄집니다. 인증 내용과 다른 제품이 적발되면 행정처분 대상이 될 수 있습니다.</li>
</ol>

<h2>대표 제출 서류</h2>
<p>제출 서류의 정확한 목록은 평가 유형과 기자재에 따라 다르므로 고시를 확인해야 하지만, 적합인증에서 대표적으로 요구되는 서류와 그 목적은 다음과 같습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>서류</th><th>목적 · 확인 포인트</th></tr></thead>
<tbody>
<tr><td>신청서</td><td>신청인, 모델명, 기자재 명칭 등 기본 정보. 성적서와 한 글자도 다르지 않아야 합니다.</td></tr>
<tr><td>시험성적서</td><td>적용 기준에 대한 시험 결과. 무선·EMC·SAR 등 해당 분야 모두.</td></tr>
<tr><td>외관도(사진)</td><td>제품 외부 모습. 시장 제품과 인증 제품이 같은지 확인하는 근거가 됩니다.</td></tr>
<tr><td>회로도 · 블록도</td><td>무선부 구성, 발진 주파수 등 기술적 구조 확인.</td></tr>
<tr><td>부품배치도</td><td>PCB 위 부품 위치. 내부 사진과 함께 동일성 확인에 쓰입니다.</td></tr>
<tr><td>사용자 설명서</td><td>사용 방법, 안전·전자파 관련 주의 문구, 인체 근접 사용 여부 등.</td></tr>
<tr><td>대리인 지정서 등</td><td>시험기관·대행사 등이 신청을 대행하는 경우 권한 위임 증빙.</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">시험소가 서류를 같이 봐야 하는 이유</span>
  사용자 설명서에 “몸에 착용해 사용”이라고 쓰여 있는데 SAR 시험을 머리 위치만 했다면 심사에서 걸립니다. 회로도의 발진 주파수와 시험한 채널이 맞지 않는 경우도 있습니다. <strong>시험 범위를 정할 때 설명서·블록도를 먼저 읽는 습관</strong>을 들이세요.
</div>

<h2>시험에 적용되는 주요 고시 · 기준</h2>
<p>시험 업무에서 자주 등장하는 고시·기준은 다음과 같습니다. 명칭과 번호는 개정으로 바뀌는 일이 잦으므로 <strong>국가법령정보센터 또는 RRA에서 최신본을 확인</strong>하는 것이 원칙입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>이름 (대표적 명칭)</th><th>다루는 내용</th><th>주로 쓰는 팀</th></tr></thead>
<tbody>
<tr><td>방송통신기자재등의 적합성평가에 관한 고시</td><td>평가 유형, 대상 기자재 목록, 절차, 제출 서류, 표시 방법</td><td>전체 · 인증 대행</td></tr>
<tr><td>무선설비 관련 기술기준 (무선설비규칙 등)</td><td>무선기기별 출력, 대역폭, 불요발사 등 기술 요건</td><td>무선</td></tr>
<tr><td>무선설비 적합성평가 시험방법</td><td>무선 시험 항목별 측정 방법 (국가표준 등으로 제정)</td><td>무선</td></tr>
<tr><td>전자파적합성 기준 / 시험방법</td><td>기자재별 적용 EMC 기준(KS C 9832, 9835, 9610-4-x 등)</td><td>EMC</td></tr>
<tr><td>전자파 인체보호기준</td><td>전자파 강도·흡수율 한계값</td><td>SAR · EMF</td></tr>
<tr><td>전자파흡수율 측정기준</td><td>SAR 측정 대상·방법·조건</td><td>SAR</td></tr>
<tr><td>전자파 등급기준·표시 관련 고시</td><td>SAR 등급(예: 1등급 ≤ 0.8 W/kg) 표시 등</td><td>SAR</td></tr>
</tbody></table></div>

<div class="callout warn">
  <span class="callout-title">“작년 파일” 금지</span>
  기준·시험방법이 개정되면 <strong>적용 시점(시행일, 경과 규정)</strong>이 정해집니다. 개인 PC에 저장된 예전 PDF를 보고 시험하면 개정 전 한계값을 적용하는 사고가 납니다. 사내 문서관리 시스템의 <em>현행본</em>만 사용하세요.
</div>

<h2>인증 이후: 변경신고와 파생모델</h2>
<ul>
  <li><strong>변경신고</strong> — 인증받은 기자재의 상호·주소 같은 행정 정보나, 성능에 영향이 없는 범위의 설계 변경 등은 변경신고로 처리할 수 있는 경우가 있습니다. 반대로 무선 특성·전자파에 영향을 줄 수 있는 변경은 추가 시험이나 새 적합성평가가 필요할 수 있습니다.</li>
  <li><strong>파생모델</strong> — 기본모델과 전기적 특성·회로가 동일하고 외관·색상·모델명 등만 다른 모델을 기본모델의 인증에 추가하는 방식입니다. 무엇이 “동일”로 인정되는지는 고시 기준과 심사 판단에 따릅니다.</li>
</ul>
<p>시험소에는 “이 변경이면 재시험이 필요한가요?”라는 문의가 자주 옵니다. 변경 내용(회로, 안테나, 출력 설정, 케이스 재질 등)을 구체적으로 받아 <strong>영향 받는 시험 항목</strong>을 검토하고, 판단 근거를 기록으로 남기세요. 특히 안테나·케이스 변경은 SAR와 방사 특성에 영향을 줄 수 있습니다.</p>

<h2>인증 정보 검색</h2>
<p>RRA 누리집에서는 적합성평가 현황(인증번호, 모델명, 상호 등)을 검색할 수 있습니다. 시료 접수 시 “기존 인증 모델의 변경인지”, 파생모델 신청 시 “기본모델 인증번호가 맞는지” 확인할 때 유용합니다. 사이트 메뉴 구조는 개편될 수 있으니 <a href="https://www.rra.go.kr" target="_blank" rel="noopener">국립전파연구원</a>에서 “적합성평가 현황” 또는 “인증 검색”을 찾아보세요.</p>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><ul><li>신청서 모델명 “EX-100”, 성적서 “EX100”</li><li>시험한 소프트웨어 버전을 기록하지 않음</li><li>설명서 확인 없이 SAR 시험 위치 결정</li></ul></div>
  <div class="good"><h4>✅ 좋은 예</h4><ul><li>접수 시 라벨·신청서·설명서의 모델명을 대조해 기록</li><li>시료 시리얼, HW/SW 버전, 시험 모드 설정을 기록</li><li>사용 형태를 고객에게 서면으로 확인 후 시험 계획 수립</li></ul></div>
</div>
`,
  quiz: [
    { q: '적합인증 절차에서 국립전파연구원(RRA)이 주로 수행하는 단계는?',
      options: ['시료 시험', '서류 심사와 인증서 발급', '제품 설계', '부품 구매'],
      answer: 1, explain: '시험은 지정시험기관이, 서류 심사와 인증서 발급은 RRA가 담당합니다.' },
    { q: '제품 내부 PCB 위 부품 위치를 보여 주어 인증 제품과 유통 제품의 동일성 확인에 쓰이는 서류는?',
      options: ['사용자 설명서', '대리인 지정서', '부품배치도', '신청서'],
      answer: 2, explain: '부품배치도(및 내부 사진)는 부품 구성·위치를 보여 주어 동일성 확인의 근거가 됩니다.' },
    { q: '기본모델과 회로가 동일하고 색상·모델명만 다른 제품을 추가하는 방식은?',
      options: ['잠정인증', '자기적합확인', '파생모델', '재인증'],
      answer: 2, explain: '파생모델은 전기적 특성이 동일한 모델을 기본모델 인증에 추가하는 방식입니다. 동일성 판단은 고시·심사 기준에 따릅니다.' },
    { q: 'SAR 시험 위치(머리, 몸 착용 등)를 정할 때 가장 먼저 확인해야 할 서류는?',
      options: ['사용자 설명서(사용 형태)', '부품 구매 영수증', '회사 조직도', '포장 박스 디자인'],
      answer: 0, explain: '설명서에 기재된 사용 형태(귀에 대고 통화, 몸 착용 등)가 SAR 시험 조건을 결정합니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가 신청 안내, 인증 현황 검색' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '「방송통신기자재등의 적합성평가에 관한 고시」 등 행정규칙 검색' }
  ]
});

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-fcc',
  module: 'cert',
  order: 3,
  title: '미국 FCC 인증',
  minutes: 20,
  level: '중급',
  summary: 'FCC 규정(47 CFR)의 구조, Certification과 SDoC, TCB·인정 시험소의 역할, FCC ID와 KDB 문서를 이해합니다.',
  objectives: [
    'Part 15(비의도·의도 방사체)와 면허 대역 Part(22/24/27/90)의 차이를 안다.',
    'Certification과 SDoC 절차를 구분한다.',
    'TCB, 인정 시험소, FCC의 역할과 FCC ID 구조를 설명한다.',
    'KDB 문서가 무엇이고 시험에서 어떻게 쓰이는지 안다.'
  ],
  body: `
<p>미국 시장에 무선기기를 팔려면 <strong>FCC(Federal Communications Commission, 연방통신위원회)</strong>의 장비 인가(Equipment Authorization)를 받아야 합니다. 국내 시험소도 FCC 인정 시험소로 등록되어 FCC 시험을 수행하는 경우가 많으므로, 신입사원도 기본 구조는 반드시 알아야 합니다.</p>

<h2>규정의 구조: 47 CFR</h2>
<p>FCC 규정은 미국 연방규정집 <strong>47 CFR(Code of Federal Regulations, Title 47)</strong>에 “Part” 단위로 정리되어 있습니다. 시험소에서 자주 보는 Part는 다음과 같습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Part</th><th>내용</th><th>대표 예</th></tr></thead>
<tbody>
<tr><td>Part 2</td><td>주파수 분배, 장비 인가 절차(Subpart J), RF 노출(2.1091 이동형, <strong>2.1093 휴대형 — SAR</strong>)</td><td>모든 인가의 공통 절차</td></tr>
<tr><td>Part 15 Subpart B</td><td><strong>비의도 방사체</strong>(Unintentional radiator) — 디지털 기기의 불요 방출</td><td>PC, 모니터, 무선기기의 디지털부</td></tr>
<tr><td>Part 15 Subpart C</td><td><strong>의도 방사체</strong>(Intentional radiator) — 면허 불필요 무선기기</td><td>15.247 (2.4/5.8 GHz DTS·FHSS: Wi-Fi, 블루투스), 15.249, 15.225(13.56 MHz)</td></tr>
<tr><td>Part 15 Subpart E</td><td>U-NII 기기 (15.407)</td><td>5 GHz(및 6 GHz) 무선랜</td></tr>
<tr><td>Part 22 / 24 / 27</td><td>면허 대역 이동통신 (셀룰러, PCS, AWS 등 기타 대역)</td><td>휴대폰의 LTE/5G 대역</td></tr>
<tr><td>Part 90</td><td>사설 육상 이동무선 (Private Land Mobile)</td><td>업무용 무전기</td></tr>
</tbody></table></div>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  Part 15는 “면허 없이 누구나 쓰는 공용 도로”의 규칙, Part 22/24/27/90은 “통신사·기관이 면허를 받아 쓰는 전용 도로”의 규칙입니다. 스마트폰 한 대에는 Wi-Fi·블루투스(Part 15)와 LTE·5G(Part 22/24/27 등)가 같이 들어 있어 여러 Part를 동시에 시험합니다.
</div>

<h2>인가 절차: Certification vs SDoC</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>Certification (인증)</th><th>SDoC (Supplier's Declaration of Conformity)</th></tr></thead>
<tbody>
<tr><td>대상</td><td>무선 송신기(의도 방사체), 면허 대역 기기 등 위험도가 큰 기기</td><td>비의도 방사체 중 규정에서 허용하는 기기(예: 많은 디지털 기기, PC 주변기기)</td></tr>
<tr><td>시험</td><td>FCC가 인정한 시험소(Accredited test lab)</td><td>책임 당사자가 적합한 시험소에서 시험 (인정 요건은 규정 확인)</td></tr>
<tr><td>승인 주체</td><td>TCB가 심사 후 Grant 발행 → FCC 데이터베이스 등록</td><td>승인 절차 없음. 미국 내 책임 당사자(Responsible party)가 적합 선언</td></tr>
<tr><td>식별</td><td><strong>FCC ID</strong> 부여·표시</td><td>FCC ID 없음. 규정에 따른 표시·적합 정보 문서</td></tr>
</tbody></table></div>
<p>SDoC는 2017년경 기존의 Verification과 DoC 절차를 통합해 도입된 방식입니다. 한국의 “자기적합확인”과 개념이 비슷하다고 생각하면 이해가 쉽습니다.</p>

<h2>TCB와 인정 시험소</h2>
<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="FCC Certification 흐름">
  <defs><marker id="certfcc-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="50" width="150" height="80" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="85" y="84" font-weight="700">제조사</text>
    <text x="85" y="105" font-size="12" fill="var(--text-3)">(Grantee)</text>
    <rect x="205" y="50" width="160" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="285" y="80" font-weight="700" fill="var(--dg-accent)">인정 시험소</text>
    <text x="285" y="100" font-size="12" fill="var(--text-3)">ISO/IEC 17025 인정</text>
    <text x="285" y="117" font-size="12" fill="var(--text-3)">FCC 인정(등록)</text>
    <rect x="410" y="50" width="150" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="485" y="84" font-weight="700" fill="var(--dg-accent-2)">TCB</text>
    <text x="485" y="105" font-size="12" fill="var(--text-3)">심사 · Grant 발행</text>
    <rect x="605" y="50" width="145" height="80" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="677" y="84" font-weight="700">FCC</text>
    <text x="677" y="105" font-size="12" fill="var(--text-3)">EAS 데이터베이스</text>
    <path d="M160 90 L 201 90" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certfcc-arw)"/>
    <path d="M365 90 L 406 90" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certfcc-arw)"/>
    <path d="M560 90 L 601 90" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certfcc-arw)"/>
    <text x="182" y="80" font-size="11" fill="var(--text-3)">시료</text>
    <text x="386" y="80" font-size="11" fill="var(--text-3)">보고서</text>
    <text x="580" y="80" font-size="11" fill="var(--text-3)">Grant</text>
    <path d="M677 130 C 677 185, 285 185, 285 134" fill="none" stroke="var(--dg-line)" stroke-dasharray="5 4" stroke-width="1.5" marker-end="url(#certfcc-arw)"/>
    <text x="480" y="182" font-size="12" fill="var(--text-3)">FCC 감독 · KDB 지침 · 인정 시험소 목록 관리</text>
  </g>
</svg>
<figcaption>그림 1. FCC Certification의 기본 흐름</figcaption>
</figure>
<ul>
  <li><strong>TCB(Telecommunication Certification Body)</strong> — FCC가 인정한 민간 인증기관으로, 제출된 시험보고서와 기술자료를 심사하고 FCC를 대신해 Grant(인가서)를 발행합니다. 대부분의 Certification은 TCB를 통해 처리됩니다.</li>
  <li><strong>인정 시험소(Accredited test lab)</strong> — ISO/IEC 17025 인정을 받고 FCC에 인정(등록)된 시험소입니다. 미국 밖의 시험소는 상호인정협정(MRA) 등 틀 안에서 인정됩니다. 시험소마다 FCC 등록 번호(Designation number 등)가 있고 성적서에 기재합니다.</li>
  <li><strong>FCC</strong> — 규정 제정, TCB·시험소 감독, 인가 데이터베이스(EAS) 운영, 시장 감시. 일부 새로운 기술이나 예외적인 경우 FCC가 직접 검토(사전 승인 문의 등)하기도 합니다.</li>
</ul>

<h2>FCC ID 구조</h2>
<figure class="diagram">
<svg viewBox="0 0 760 170" role="img" aria-label="FCC ID 구조">
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <text x="380" y="40" font-size="24" font-weight="700" font-family="monospace">FCC ID: <tspan fill="var(--dg-accent)">2ABCD</tspan>-<tspan fill="var(--dg-accent-2)">EX100W</tspan></text>
    <path d="M325 55 L 325 75 L 230 75 L 230 92" fill="none" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <path d="M470 55 L 470 75 L 540 75 L 540 92" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <rect x="90" y="95" width="280" height="62" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="230" y="118" font-weight="700" fill="var(--dg-accent)">Grantee Code</text>
    <text x="230" y="140" font-size="12" fill="var(--text-2)">FCC가 신청자에게 부여 (3자리 또는 5자리)</text>
    <rect x="400" y="95" width="280" height="62" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="540" y="118" font-weight="700" fill="var(--dg-accent-2)">Product Code</text>
    <text x="540" y="140" font-size="12" fill="var(--text-2)">신청자가 제품별로 지정</text>
  </g>
</svg>
<figcaption>그림 2. FCC ID = Grantee Code + Product Code (예시 번호는 가상)</figcaption>
</figure>
<p>FCC ID는 FCC 누리집의 <strong>FCC ID Search</strong>에서 검색할 수 있으며, Grant와 함께 공개된 시험보고서·외관 사진 등을 볼 수 있습니다(일부 자료는 기밀 처리 가능). 다른 시험소의 보고서 형식을 참고하는 좋은 학습 자료이기도 합니다.</p>

<h2>KDB: FCC의 해설서</h2>
<p>규정(47 CFR) 문장만으로는 측정 방법을 구체적으로 알기 어렵습니다. 그래서 FCC OET(Office of Engineering and Technology)는 <strong>KDB(Knowledge Database)</strong> 문서로 시험 방법과 해석을 안내합니다. 실무에서는 사실상 규정과 함께 반드시 따라야 하는 지침으로 취급됩니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>KDB (대표 예)</th><th>내용</th></tr></thead>
<tbody>
<tr><td>558074</td><td>DTS(15.247 디지털 변조) 기기 측정 지침</td></tr>
<tr><td>789033</td><td>U-NII(15.407) 기기 측정 지침</td></tr>
<tr><td>447498</td><td>RF 노출 일반 요건(SAR 시험 면제 판단 등)</td></tr>
<tr><td>865664</td><td>SAR 측정 요건(100 MHz~6 GHz)</td></tr>
<tr><td>996369</td><td>모듈 인증(Modular approval) 관련 지침</td></tr>
</tbody></table></div>
<p>KDB 문서는 버전(발행 날짜, 개정 번호)이 계속 갱신되므로 성적서에는 <strong>적용한 KDB의 번호와 버전</strong>을 기재하는 것이 일반적입니다. 번호와 적용 범위는 <a href="https://apps.fcc.gov/oetcf/kdb/" target="_blank" rel="noopener">KDB 검색 페이지</a>에서 최신본을 확인하세요.</p>

<div class="callout note">
  <span class="callout-title">측정 절차 표준: ANSI C63 시리즈</span>
  FCC 규정은 측정 방법으로 ANSI C63.4(비의도 방사체), ANSI C63.10(면허 불필요 무선기기), ANSI C63.26(면허 대역 송신기) 등 미국 국가표준을 참조합니다. 어느 판(연도)을 적용하는지도 규정·KDB에서 확인합니다.
</div>

<h2>SAR 요건</h2>
<p>휴대형(인체 20 cm 이내 사용) 송신기는 <strong>47 CFR 2.1093</strong>에 따라 SAR 평가 대상이며, 한계값은 한국과 같은 <strong>1 g 평균 1.6 W/kg</strong>(머리·몸통), 사지 10 g 평균 4.0 W/kg입니다. 측정 방법은 IEC/IEEE 62209-1528과 KDB 865664, 면제 판단은 KDB 447498 등을 참고합니다. 한국과 한계값이 같다고 시험 조건(이격 거리, 동시 송신 평가 등)까지 같은 것은 아니므로 국가별 요건을 따로 확인하세요.</p>

<h2>흔한 실수</h2>
<ul>
  <li>Part 15 무선기기의 <strong>디지털부 방출(Subpart B)</strong> 평가를 빠뜨림 — 무선 시험만 하고 끝내면 안 됩니다.</li>
  <li>오래된 KDB 버전으로 시험 — TCB 심사에서 지적됩니다.</li>
  <li>FCC ID 라벨 위치·방법(전자 라벨 포함) 요건 미확인 — 제조사에 안내할 때는 규정 원문 확인 후 안내합니다.</li>
</ul>
`,
  quiz: [
    { q: 'Wi-Fi(2.4 GHz) 기기의 송신 특성에 주로 적용되는 FCC 조항은?',
      options: ['Part 90', '15.247', 'Part 22', '2.1091'],
      answer: 1, explain: '2.4 GHz 대역 DTS·FHSS 기기는 Part 15 Subpart C의 15.247이 대표적으로 적용됩니다. 5 GHz U-NII는 15.407입니다.' },
    { q: 'FCC Certification에서 시험보고서를 심사하고 Grant를 발행하는 민간 기관은?',
      options: ['TCB', 'NCB', 'KOLAS', 'Notified Body'],
      answer: 0, explain: 'TCB(Telecommunication Certification Body)가 FCC를 대신해 심사 후 Grant를 발행합니다. Notified Body는 EU, NCB는 IECEE CB 스킴 용어입니다.' },
    { q: 'FCC ID “2ABCD-EX100W”에서 “2ABCD”는?',
      options: ['Product Code', '시험소 등록 번호', 'Grantee Code', 'KDB 번호'],
      answer: 2, explain: 'FCC ID 앞부분은 FCC가 신청자에게 부여하는 Grantee Code, 뒷부분은 신청자가 정하는 Product Code입니다.' },
    { q: 'FCC에서 휴대형 기기의 SAR 요건을 규정한 조항과 머리 기준 한계값의 조합으로 옳은 것은?',
      options: ['2.1091, 2.0 W/kg (10 g)', '15.247, 1.6 W/kg (1 g)', '2.1093, 2.0 W/kg (10 g)', '2.1093, 1.6 W/kg (1 g)'],
      answer: 3, explain: '휴대형 기기는 47 CFR 2.1093이 적용되며, 머리·몸통 한계는 1 g 평균 1.6 W/kg입니다.' }
  ],
  refs: [
    { title: 'FCC', url: 'https://www.fcc.gov', note: '규정, 장비 인가 제도 안내' },
    { title: 'FCC KDB 검색', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'KDB 문서 번호·최신 버전 확인' },
    { title: 'FCC ID Search', url: 'https://www.fcc.gov/oet/ea/fccid', note: 'FCC ID로 Grant·공개 자료 검색' }
  ]
});

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-ce-red',
  module: 'cert',
  order: 4,
  title: '유럽 CE — 무선기기 지침(RED)',
  minutes: 20,
  level: '중급',
  summary: 'RED 2014/53/EU의 필수 요구사항(3.1(a), 3.1(b), 3.2)과 조화표준, 자기선언과 Notified Body의 관계를 이해합니다.',
  objectives: [
    'RED의 필수 요구사항 구조(3.1(a) 안전·건강, 3.1(b) EMC, 3.2 무선)를 설명한다.',
    '요구사항별 대표 조화표준(EN)을 짝지을 수 있다.',
    '조화표준에 의한 적합성 추정과 Notified Body가 필요한 경우를 안다.',
    '기술문서와 적합선언서(DoC)의 역할, 영국 UKCA 개요를 안다.'
  ],
  body: `
<p>유럽연합(EU)은 한국·미국과 달리 <strong>정부가 인증서를 발급하지 않는</strong> 것이 기본입니다. 제조자가 스스로 요구사항 적합을 확인·선언하고 CE 마크를 붙입니다. 그 대신 적합의 근거가 되는 <strong>시험 결과와 기술문서의 품질</strong>이 매우 중요합니다. 시험소는 바로 그 근거를 만듭니다.</p>

<h2>RED의 필수 요구사항</h2>
<p>무선기기는 <strong>무선기기 지침(RED, Radio Equipment Directive) 2014/53/EU</strong>의 적용을 받습니다. RED 제3조(Article 3)가 필수 요구사항(Essential requirements)을 정합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="RED 제3조 필수 요구사항과 대표 조화표준">
  <defs><marker id="certred-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13.5" fill="var(--text)" text-anchor="middle">
    <rect x="270" y="10" width="220" height="46" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="31" font-weight="700">RED 2014/53/EU</text>
    <text x="380" y="48" font-size="12" fill="var(--text-3)">Article 3 필수 요구사항</text>
    <path d="M330 56 C 330 80, 130 75, 130 96" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certred-arw)"/>
    <path d="M380 56 L 380 96" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certred-arw)"/>
    <path d="M430 56 C 430 80, 630 75, 630 96" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certred-arw)"/>

    <rect x="10" y="100" width="240" height="150" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="130" y="124" font-weight="700" fill="var(--dg-accent-2)">3.1(a) 안전 · 건강</text>
    <text x="130" y="150" font-size="12.5" fill="var(--text-2)">전기안전: EN 62368-1</text>
    <text x="130" y="172" font-size="12.5" fill="var(--text-2)">RF 노출: EN 62311, EN 62479</text>
    <text x="130" y="194" font-size="12.5" fill="var(--text-2)">SAR: EN 50360, EN 50566</text>
    <text x="130" y="216" font-size="12.5" fill="var(--text-2)">측정: EN IEC/IEEE 62209-x</text>
    <text x="130" y="238" font-size="11.5" fill="var(--text-3)">(전압 하한 없이 LVD 목표 적용)</text>

    <rect x="260" y="100" width="240" height="150" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="2"/>
    <text x="380" y="124" font-weight="700" fill="var(--dg-ok)">3.1(b) EMC</text>
    <text x="380" y="150" font-size="12.5" fill="var(--text-2)">EN 301 489-1 (공통)</text>
    <text x="380" y="172" font-size="12.5" fill="var(--text-2)">-17 (광대역 데이터: Wi-Fi·BT)</text>
    <text x="380" y="194" font-size="12.5" fill="var(--text-2)">-52 (이동통신 단말)</text>
    <text x="380" y="216" font-size="12.5" fill="var(--text-2)">-3 (단거리 기기) 등</text>
    <text x="380" y="238" font-size="11.5" fill="var(--text-3)">+ 디지털부: EN 55032/55035 등</text>

    <rect x="510" y="100" width="240" height="150" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="630" y="124" font-weight="700" fill="var(--dg-accent)">3.2 무선 (스펙트럼)</text>
    <text x="630" y="150" font-size="12.5" fill="var(--text-2)">EN 300 328 (2.4 GHz)</text>
    <text x="630" y="172" font-size="12.5" fill="var(--text-2)">EN 301 893 (5 GHz RLAN)</text>
    <text x="630" y="194" font-size="12.5" fill="var(--text-2)">EN 300 220 (SRD, 1 GHz 이하)</text>
    <text x="630" y="216" font-size="12.5" fill="var(--text-2)">EN 301 908-x (IMT 이동통신)</text>
    <text x="630" y="238" font-size="11.5" fill="var(--text-3)">수신기 성능도 포함</text>
  </g>
</svg>
<figcaption>그림 1. RED 필수 요구사항별 대표 조화표준 (적용 판(版)은 EU 관보(OJEU) 목록으로 확인)</figcaption>
</figure>

<ul>
  <li><strong>3.1(a) 안전·건강</strong> — 사람과 가축의 건강·안전 보호. 전기안전(저전압지침의 목표를 전압 하한 없이 적용)과 RF 노출(SAR 포함)이 여기에 속합니다. EU의 SAR 기준은 머리·몸통 <strong>10 g 평균 2.0 W/kg</strong>(사지 4.0 W/kg)로, 한국·미국(1 g 1.6 W/kg)과 평균 질량부터 다릅니다.</li>
  <li><strong>3.1(b) EMC</strong> — EMC 지침(2014/30/EU)의 보호 요구사항. 무선기기는 ETSI의 EN 301 489 시리즈(공통 파트 -1과 기술별 파트)를 주로 사용합니다.</li>
  <li><strong>3.2 무선 스펙트럼의 효율적 사용</strong> — 송신 출력, 대역폭, 불요 발사뿐 아니라 <strong>수신기 성능</strong>(차단 특성 등)과 채널 접근 방식(LBT 등)까지 포함합니다. 미국·한국보다 수신기 요구가 두드러지는 점이 특징입니다.</li>
  <li><strong>3.3 추가 요구</strong> — 위임법(Delegated act)으로 특정 기기군에 추가 요구를 적용할 수 있습니다. 예를 들어 인터넷 연결 기기의 사이버보안 요구(3.3(d)(e)(f))가 위임법으로 도입되었습니다. 적용 범위와 시행 시기는 최신 자료로 확인하세요.</li>
</ul>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  RED는 “무엇을 달성해야 하는지(목표)”만 말하고, “어떻게 시험하는지”는 <strong>조화표준(EN)</strong>이 말합니다. 조화표준을 따라 시험해 합격하면 “목표를 달성한 것으로 <em>추정</em>해 준다”는 것이 유럽 제도의 핵심입니다.
</div>

<h2>조화표준과 적합성 추정</h2>
<p><strong>조화표준(Harmonised standard)</strong>은 유럽 표준화기구(ETSI, CEN, CENELEC)가 EU의 요청에 따라 만들고, 그 참조 번호가 <strong>EU 관보(OJEU)</strong>에 게재된 표준입니다. 게재된 조화표준을 적용해 적합하면 해당 필수 요구사항에 대한 <strong>적합성 추정(Presumption of conformity)</strong>을 받습니다.</p>
<div class="callout warn">
  <span class="callout-title">“EN이면 다 조화표준”이 아닙니다</span>
  표준에 새 판이 나와도 관보 게재 전이라면 적합성 추정이 주어지지 않을 수 있고, 반대로 이전 판은 일정 기간 후 추정 효력이 끝납니다. 성적서에 적는 표준 판(예: V2.2.2)이 <strong>현재 관보 목록에 있는 판</strong>인지 확인해야 합니다. EU 집행위원회의 RED 페이지에서 조화표준 목록을 확인할 수 있습니다.
</div>

<h2>적합성 평가 절차: 자기선언과 Notified Body</h2>
<figure class="diagram">
<svg viewBox="0 0 760 210" role="img" aria-label="RED 적합성 평가 경로">
  <defs><marker id="certred-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13.5" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="70" width="210" height="70" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="115" y="98" font-weight="700">3.2 무선 요구에 대해</text>
    <text x="115" y="120" font-size="12.5" fill="var(--text-2)">조화표준을 완전히 적용?</text>
    <path d="M220 90 C 260 90, 260 40, 300 40" fill="none" stroke="var(--dg-ok)" stroke-width="1.5" marker-end="url(#certred-arw2)"/>
    <path d="M220 120 C 260 120, 260 170, 300 170" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" marker-end="url(#certred-arw2)"/>
    <text x="262" y="58" font-size="12" fill="var(--dg-ok)">예</text>
    <text x="266" y="162" font-size="12" fill="var(--dg-accent-2)">아니오</text>
    <rect x="305" y="10" width="250" height="60" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="2"/>
    <text x="430" y="35" font-weight="700" fill="var(--dg-ok)">Module A (내부 생산 관리)</text>
    <text x="430" y="55" font-size="12" fill="var(--text-2)">제조자 자기선언 가능</text>
    <rect x="305" y="140" width="250" height="60" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="430" y="165" font-weight="700" fill="var(--dg-accent-2)">Notified Body 관여</text>
    <text x="430" y="185" font-size="12" fill="var(--text-2)">Module B+C (EU형식검사) 또는 H</text>
    <path d="M555 40 C 600 40, 600 105, 640 105" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certred-arw2)"/>
    <path d="M555 170 C 600 170, 600 105, 640 105" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certred-arw2)"/>
    <rect x="645" y="75" width="105" height="60" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="697" y="100" font-weight="700">EU DoC</text>
    <text x="697" y="120" font-size="12" fill="var(--text-2)">+ CE 표시</text>
  </g>
</svg>
<figcaption>그림 2. RED 적합성 평가 경로(단순화). 3.1(a)(b)는 조화표준 적용 여부와 관계없이 내부 생산 관리로 평가할 수 있는 등 세부 규정은 지침 원문 확인</figcaption>
</figure>
<ul>
  <li><strong>자기선언</strong> — 제조자가 조화표준에 따라 시험(대개 시험소에 의뢰)하고 기술문서를 작성한 뒤 <strong>EU 적합선언서(EU DoC)</strong>에 서명하고 CE 마크를 붙입니다. 정부 승인 절차는 없습니다.</li>
  <li><strong>Notified Body(NB, 인증기관)</strong> — 조화표준이 없거나, 일부만 적용했거나, 표준을 쓰지 않은 경우(특히 3.2) EU가 지정한 NB의 EU 형식검사(Module B)를 받습니다. NB는 기술문서와 시험 결과를 검토하고 EU 형식검사 인증서를 발행합니다. 이 경우 CE 마크 옆에 NB 식별번호가 붙는 경우가 있습니다(적용 모듈에 따라 다름).</li>
</ul>

<h2>기술문서(Technical Documentation)</h2>
<p>RED는 제조자가 기술문서를 작성해 시장에 출시한 뒤 일정 기간(일반적으로 10년) 보관하도록 요구합니다. 대표 구성은 다음과 같습니다.</p>
<ul>
  <li>제품 일반 설명(사진, 소프트웨어·펌웨어 버전, 사용 설명서)</li>
  <li>설계·제조 도면, 회로도, 부품 목록</li>
  <li>적용한 조화표준 목록 (또는 다른 해법의 설명)</li>
  <li><strong>시험 보고서</strong> (우리가 만드는 부분)</li>
  <li>위험 평가, EU DoC 사본 등</li>
</ul>

<div class="callout tip">
  <span class="callout-title">EU 성적서 작성 포인트</span>
  EN 301 489처럼 공통 파트와 기술별 파트가 함께 쓰이는 표준은 <strong>두 파트의 판을 모두</strong> 기재합니다. 또 EN 300 328, EN 301 893의 수신기 관련 항목(수신기 차단 등)을 빠뜨리지 않았는지 시험 계획 단계에서 체크하세요.
</div>

<h2>영국 UKCA 간단히</h2>
<p>브렉시트 이후 영국(그레이트브리튼)은 <strong>UKCA</strong> 마크와 영국 국내법(Radio Equipment Regulations 2017 등)을 도입했습니다. 요구사항 구조는 RED와 거의 같고, 조화표준 대신 <strong>지정표준(Designated standards)</strong>, Notified Body 대신 <strong>Approved Body</strong>라는 용어를 씁니다. 다만 영국 정부는 CE 마크 인정 기간을 연장하는 정책을 발표해 왔으므로, 고객에게 안내할 때는 <strong>GOV.UK의 최신 안내</strong>를 확인해야 합니다. 북아일랜드는 별도 규칙이 적용됩니다.</p>
`,
  quiz: [
    { q: 'RED에서 무선 스펙트럼의 효율적 사용(송신·수신 성능)에 해당하는 조항은?',
      options: ['3.1(a)', '3.1(b)', '3.2', '3.3'],
      answer: 2, explain: '3.2는 무선 스펙트럼의 효율적 사용으로 EN 300 328, EN 301 893 등이 해당합니다. 3.1(a)는 안전·건강, 3.1(b)는 EMC입니다.' },
    { q: 'Wi-Fi·블루투스 기기의 EMC(3.1(b)) 평가에 흔히 함께 쓰는 ETSI 표준 조합은?',
      options: ['EN 301 489-1 + EN 301 489-17', 'EN 300 328 + EN 301 893', 'EN 62368-1 + EN 62311', 'EN 50360 + EN 50566'],
      answer: 0, explain: 'EN 301 489-1(공통)과 -17(광대역 데이터 전송 기기)을 함께 적용합니다. EN 300 328/301 893은 3.2 무선, EN 62368-1은 안전, EN 50360/50566은 SAR입니다.' },
    { q: '조화표준에 대한 설명으로 옳은 것은?',
      options: ['모든 EN 표준은 자동으로 조화표준이다', 'EU 관보(OJEU)에 참조가 게재된 표준을 적용하면 적합성 추정을 받는다', '조화표준을 적용하면 반드시 Notified Body 인증이 필요하다', '조화표준은 미국 FCC가 제정한다'],
      answer: 1, explain: '관보에 게재된 조화표준을 적용하면 해당 필수 요구사항에 대한 적합성 추정이 주어집니다.' },
    { q: 'EU의 휴대 무선기기 머리·몸통 SAR 한계값은?',
      options: ['1.6 W/kg (1 g 평균)', '4.0 W/kg (10 g 평균)', '0.8 W/kg (1 g 평균)', '2.0 W/kg (10 g 평균)'],
      answer: 3, explain: 'EU는 10 g 평균 2.0 W/kg(머리·몸통)을 적용합니다. 한국·미국은 1 g 평균 1.6 W/kg입니다.' }
  ],
  refs: [
    { title: 'EU 집행위원회 — Radio Equipment Directive (RED)', url: 'https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en', note: 'RED 개요, 가이드, 조화표준 목록 안내' },
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: 'EN 300 328, EN 301 489 등 ETSI 표준 무료 다운로드' }
  ]
});

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-global',
  module: 'cert',
  order: 5,
  title: '기타 주요 국가 인증 요약',
  minutes: 15,
  level: '중급',
  summary: '일본, 중국, 캐나다, 호주·뉴질랜드, 대만, 인도의 무선·EMC·SAR 인증 제도를 한 표로 비교합니다.',
  objectives: [
    '주요 국가별 무선 인증 제도와 담당 기관 이름을 안다.',
    '국가별로 무선·EMC·SAR 요구가 어떻게 나뉘는지 개략적으로 비교한다.',
    '한 번 측정한 데이터를 여러 국가에 활용할 때의 주의점을 안다.'
  ],
  body: `
<p>제조사는 보통 한 제품을 여러 나라에 동시에 출시합니다. 그래서 시험소에는 “KC·FCC·CE 하면서 일본·캐나다 것도 같이 해 주세요” 같은 요청이 흔합니다. 이 강의는 주요 국가 제도를 <strong>이름과 구조 수준</strong>에서 정리합니다. 세부 요건은 국가별로 자주 바뀌므로 실제 업무에서는 해당 국가 규제기관 자료나 전문 대행사 정보를 확인해야 합니다.</p>

<h2>국가별 요약표</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>국가·지역</th><th>규제기관</th><th>무선</th><th>EMC · 안전</th><th>SAR · RF 노출</th><th>표시</th></tr></thead>
<tbody>
<tr><td>일본</td><td>총무성(MIC)</td><td>전파법에 따른 <strong>기술기준적합증명</strong>(또는 공사설계인증). 등록증명기관(예: TELEC 등)이 증명</td><td>EMC는 VCCI(업계 자율) 등, 전기안전은 PSE(전기용품안전법)</td><td>휴대형 무선기기 SAR 요구 있음(머리·몸 10 g 2 W/kg 계열)</td><td>기적(技適) 마크 + 인증번호</td></tr>
<tr><td>중국</td><td>공업정보화부(MIIT) 등</td><td><strong>SRRC</strong> 무선 형식 승인. 통신 단말은 네트워크 접속 인증(CTA) 별도</td><td><strong>CCC</strong>(강제성 제품 인증) — 대상 품목의 안전·EMC</td><td>휴대폰 등 SAR 요구 있음 (세부는 최신 규정 확인)</td><td>CMIIT ID, CCC 마크</td></tr>
<tr><td>캐나다</td><td>ISED (혁신과학경제개발부)</td><td>RSS 규격(RSS-Gen, <strong>RSS-247</strong> 등). 인증기관(CB) 인증 → ISED 인증번호</td><td>ICES-003 (디지털 장치 방출) 등</td><td><strong>RSS-102</strong> (RF 노출, SAR)</td><td>IC: 인증번호</td></tr>
<tr><td>호주 · 뉴질랜드</td><td>ACMA (호주) 등</td><td>무선 표준 적합 + 공급자 자기 선언(등록)</td><td>EMC 표준(CISPR 계열) 적합</td><td>EME(인체 노출) 요구</td><td><strong>RCM</strong></td></tr>
<tr><td>대만</td><td>NCC (국가통신방송위원회)</td><td>저전력 무선(LP0002 등) 등 NCC 형식 인증</td><td>상품검사국(BSMI) 제도로 EMC·안전</td><td>휴대 무선기기 SAR 요구 있음</td><td>NCC 마크 + 인증번호</td></tr>
<tr><td>인도</td><td>통신부 WPC 등</td><td><strong>WPC</strong> 장비 형식 승인(ETA 등)</td><td><strong>BIS</strong> 등록(안전 등), 통신 기기는 TEC 시험·인증(MTCTE) 대상 여부 확인</td><td>휴대폰 SAR 요구 있음</td><td>BIS 표시 등</td></tr>
</tbody></table></div>
<p class="muted">※ 위 표는 구조 파악용 개요입니다. 대상 품목, 한계값, 현지 시험 필요 여부는 수시로 바뀌므로 반드시 최신 규정을 확인하세요.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  대부분의 국가는 <strong>“무선(스펙트럼) · EMC · 인체노출(SAR) · 전기안전”</strong>이라는 같은 네 가지 질문을 합니다. 다만 누가 확인하는지(정부, 민간 인증기관, 제조자 선언), 어떤 문서 형식을 쓰는지, 현지 시험이 필요한지가 나라마다 다를 뿐입니다.
</div>

<h2>공통 데이터와 국가별 추가 요구</h2>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="공통 시험 데이터와 국가별 추가 요구">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <path d="M380 130 L 110 45 M380 130 L 380 40 M380 130 L 650 45 M380 130 L 110 215 M380 130 L 380 222 M380 130 L 650 215" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <rect x="265" y="95" width="230" height="70" rx="12" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="380" y="122" font-weight="700" fill="var(--dg-accent)">공통 측정 데이터</text>
    <text x="380" y="144" font-size="12" fill="var(--text-2)">IEC/CISPR·ETSI·ANSI 기반 시험</text>
    <rect x="20" y="15" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="38" font-weight="700">한국 KC</text>
    <text x="110" y="57" font-size="11.5" fill="var(--text-3)">국내 기준·지정시험기관</text>
    <rect x="290" y="12" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="35" font-weight="700">미국 FCC</text>
    <text x="380" y="54" font-size="11.5" fill="var(--text-3)">KDB 절차, 1 g SAR</text>
    <rect x="560" y="15" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="650" y="38" font-weight="700">EU CE</text>
    <text x="650" y="57" font-size="11.5" fill="var(--text-3)">수신기 요구, 10 g SAR</text>
    <rect x="20" y="188" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="211" font-weight="700">캐나다 ISED</text>
    <text x="110" y="230" font-size="11.5" fill="var(--text-3)">RSS 규격, 불어 표기</text>
    <rect x="290" y="194" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="217" font-weight="700">일본 MIC</text>
    <text x="380" y="236" font-size="11.5" fill="var(--text-3)">일본 대역·채널 차이</text>
    <rect x="560" y="188" width="180" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="650" y="211" font-weight="700">중국 · 인도 등</text>
    <text x="650" y="230" font-size="11.5" fill="var(--text-3)">현지 시험 요구 여부 확인</text>
  </g>
</svg>
<figcaption>그림 1. 공통 측정 데이터를 기반으로 국가별 한계값·절차·대역 차이를 추가 검토하는 개념도</figcaption>
</figure>
<p>많은 국가의 기준이 IEC·CISPR·ETSI·ANSI 표준을 기반으로 하기 때문에, 한 번의 측정으로 여러 국가 성적서를 만드는 경우가 많습니다. 하지만 다음 차이 때문에 “복사해서 붙이기”는 위험합니다.</p>
<ul>
  <li><strong>주파수 대역·채널 차이</strong> — 같은 Wi-Fi라도 국가별로 허용 채널과 출력 한계가 다릅니다. 일본의 5 GHz 채널 구성, 각국 6 GHz 허용 여부 등.</li>
  <li><strong>SAR 평균 질량·한계값 차이</strong> — 1 g 1.6 W/kg(한국·미국·캐나다 등)과 10 g 2.0 W/kg(EU·일본 등)은 같은 데이터에서 다른 평가 결과를 만듭니다.</li>
  <li><strong>측정 절차 차이</strong> — 같은 항목이라도 RBW·검파기·측정 거리 등 설정이 규격마다 다를 수 있습니다.</li>
  <li><strong>현지 시험 요구</strong> — 일부 국가는 자국 내 시험소나 지정된 시험소의 성적서만 인정합니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">확인되지 않은 정보로 답하지 않기</span>
  고객이 “베트남도 되나요?”처럼 익숙하지 않은 국가를 물으면, 추측으로 답하지 말고 “확인 후 회신드리겠습니다”라고 한 뒤 사내 인증 대행 담당자나 해당 국가 규제기관 자료를 확인하세요. 잘못된 안내는 제품 출시 지연과 비용 손실로 이어집니다.
</div>

<h2>실무 팁</h2>
<ol class="steps">
  <li><strong>대상 국가 목록을 먼저 받기</strong>시험 계획 전에 대상 국가를 확정해야 채널·모드·SAR 위치를 한 번에 설계할 수 있습니다.</li>
  <li><strong>가장 엄격한 조건으로 측정 설계</strong>예: 국가별 채널이 다르면 모든 국가의 채널을 포함하도록 시험 채널을 정합니다.</li>
  <li><strong>원시 데이터에 적용 기준을 명시</strong>측정 파일명과 기록지에 “어떤 규격 설정으로 측정했는지”를 남겨 다른 국가 성적서에 잘못 쓰이지 않게 합니다.</li>
</ol>
`,
  quiz: [
    { q: '캐나다에서 RF 노출(SAR) 요구를 규정하는 규격은?',
      options: ['RSS-247', 'ICES-003', 'RSS-102', 'LP0002'],
      answer: 2, explain: 'RSS-102가 RF 노출 요구를 다룹니다. RSS-247은 디지털 전송 시스템 등 무선 규격, ICES-003은 디지털 장치 방출(EMC)입니다.' },
    { q: '호주·뉴질랜드에서 규제 적합 제품에 표시하는 마크는?',
      options: ['RCM', 'CCC', 'UKCA', 'PSE'],
      answer: 0, explain: '호주·뉴질랜드는 RCM(Regulatory Compliance Mark)을 사용합니다. CCC는 중국, UKCA는 영국, PSE는 일본 전기안전 표시입니다.' },
    { q: '일본에서 무선기기가 전파법 기술기준에 적합함을 증명받는 제도의 이름은?',
      options: ['SRRC 형식 승인', '기술기준적합증명', 'SDoC', 'WPC ETA'],
      answer: 1, explain: '일본은 전파법에 따른 기술기준적합증명(또는 공사설계인증)을 받아 기적 마크를 표시합니다.' },
    { q: '한 번의 측정 데이터를 여러 국가 성적서에 활용할 때 가장 주의할 점은?',
      options: ['국가 이름만 바꾸면 된다', '국가별 대역·채널, SAR 평균 질량·한계값, 측정 설정 차이를 확인한다', '가장 느슨한 기준으로만 측정한다', '해외 성적서는 원시 데이터가 필요 없다'],
      answer: 1, explain: '국가별로 허용 대역, SAR 평가 기준(1 g/10 g), 측정 설정이 다르므로 차이를 반드시 확인해야 합니다.' }
  ],
  refs: [
    { title: 'ISED Canada', url: 'https://ised-isde.canada.ca', note: 'RSS 규격, 캐나다 인증 제도' }
  ]
});

/* ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'cert-lab-accreditation',
  module: 'cert',
  order: 6,
  title: '시험기관 제도와 인정',
  minutes: 18,
  level: '기초',
  summary: 'ISO/IEC 17025, KOLAS 인정, 과기정통부 지정시험기관, MRA와 CB 스킴을 통해 “우리 성적서를 왜 믿을 수 있는지” 이해합니다.',
  objectives: [
    'ISO/IEC 17025의 목적과 핵심 요구(공정성, 능력, 소급성)를 안다.',
    'KOLAS 인정과 과기정통부 지정시험기관의 차이를 설명한다.',
    '상호인정협정(MRA)과 IECEE CB 스킴의 개념을 안다.',
    '시험 범위(Scope)와 성적서 유효성의 관계를 이해한다.'
  ],
  body: `
<p>인증기관은 시험소가 제출한 성적서를 보고 인증 여부를 판단합니다. 그렇다면 인증기관은 <strong>왜 우리 성적서를 믿을까요?</strong> 답은 시험소가 국제 기준에 따른 <strong>인정(Accreditation)</strong>과 법에 따른 <strong>지정(Designation)</strong>을 받았기 때문입니다. 이 신뢰는 한 번 얻으면 끝이 아니라, 매일의 기록과 절차 준수로 유지됩니다.</p>

<h2>신뢰의 사슬</h2>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="시험 성적서 신뢰의 사슬">
  <defs><marker id="certlab-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13.5" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="20" width="170" height="64" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="95" y="46" font-weight="700">ILAC · APAC</text>
    <text x="95" y="66" font-size="12" fill="var(--text-3)">국제 인정기구 협력체</text>
    <rect x="200" y="20" width="170" height="64" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="285" y="46" font-weight="700">KOLAS</text>
    <text x="285" y="66" font-size="12" fill="var(--text-3)">국가 인정기구</text>
    <rect x="390" y="20" width="170" height="64" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="475" y="46" font-weight="700" fill="var(--dg-accent)">시험기관 (우리)</text>
    <text x="475" y="66" font-size="12" fill="var(--text-3)">ISO/IEC 17025 인정</text>
    <rect x="580" y="20" width="170" height="64" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="2"/>
    <text x="665" y="46" font-weight="700" fill="var(--dg-ok)">시험성적서</text>
    <text x="665" y="66" font-size="12" fill="var(--text-3)">인정 범위 내 시험</text>
    <path d="M180 52 L 196 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certlab-arw)"/>
    <path d="M370 52 L 386 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certlab-arw)"/>
    <path d="M560 52 L 576 52" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certlab-arw)"/>
    <text x="285" y="104" font-size="12" fill="var(--text-3)">상호 평가(peer evaluation)</text>
    <text x="475" y="104" font-size="12" fill="var(--text-3)">정기 평가 · 사후 관리</text>

    <rect x="390" y="150" width="170" height="64" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="475" y="176" font-weight="700" fill="var(--dg-accent-2)">과기정통부 지정</text>
    <text x="475" y="196" font-size="12" fill="var(--text-3)">전파법 지정시험기관</text>
    <path d="M475 150 L 475 88" stroke="var(--dg-accent-2)" stroke-width="1.5" marker-end="url(#certlab-arw)"/>
    <rect x="580" y="150" width="170" height="64" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="665" y="176" font-weight="700">인증기관 · 해외 규제기관</text>
    <text x="665" y="196" font-size="12" fill="var(--text-3)">RRA · FCC/TCB · MRA 상대국</text>
    <path d="M665 84 L 665 146" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#certlab-arw)"/>
    <text x="220" y="176" font-size="12.5" fill="var(--text-2)">인정(능력 입증) + 지정(법적 자격)</text>
    <text x="220" y="196" font-size="12.5" fill="var(--text-2)">→ 성적서가 인증에 쓰일 수 있음</text>
  </g>
</svg>
<figcaption>그림 1. 국제 인정 체계와 법적 지정이 합쳐져 성적서의 신뢰가 만들어짐</figcaption>
</figure>

<h2>ISO/IEC 17025 — 시험소의 국제 표준</h2>
<p><strong>ISO/IEC 17025</strong>(시험기관 및 교정기관의 적격성에 대한 일반 요구사항, 현행 2017년판)는 시험소가 <strong>기술적으로 유능하고, 공정하며, 일관되게 운영된다</strong>는 것을 보여 주기 위한 국제 표준입니다. 핵심 요구를 신입사원의 일과 연결하면 다음과 같습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>요구 영역</th><th>내용</th><th>내 업무에서는</th></tr></thead>
<tbody>
<tr><td>공정성 · 기밀유지</td><td>이해 상충 없이 판단, 고객 정보 보호</td><td>고객의 압력에도 측정값 그대로 기록, 시료·자료 외부 유출 금지</td></tr>
<tr><td>인원 역량</td><td>교육·자격 부여 후 업무 수행</td><td>자격 부여 전 단독 시험·서명 금지, 교육 기록 유지</td></tr>
<tr><td>장비 · 소급성</td><td>교정된 장비, 국가·국제 표준으로의 측정 소급성</td><td>교정 유효기간 확인, 중간 점검, 케이블 손실 관리</td></tr>
<tr><td>방법 · 불확도</td><td>검증된 시험방법, 측정 불확도 평가</td><td>SOP대로 시험, 규격 이탈 시 기록·승인</td></tr>
<tr><td>기록 · 보고</td><td>기술 기록의 추적성, 성적서 요건</td><td>원시 데이터 보존, 수정 이력 남기기, 성적서 검토</td></tr>
<tr><td>부적합 · 시정조치</td><td>문제 발견 시 영향 평가와 재발 방지</td><td>실수 숨기지 않고 즉시 보고</td></tr>
</tbody></table></div>

<h2>KOLAS 인정과 지정시험기관</h2>
<div class="card-grid">
  <div class="card"><h3>KOLAS 인정</h3><p><strong>한국인정기구(KOLAS)</strong>는 국가기술표준원 소속으로 ISO/IEC 17025에 따라 시험·교정기관을 평가하고 인정합니다. 인정은 “이 시험소가 <em>이 범위의 시험</em>을 제대로 할 능력이 있다”는 국제적으로 통하는 증명입니다.</p></div>
  <div class="card"><h3>지정시험기관</h3><p>전파법에 따른 적합성평가 시험을 하려면 <strong>과기정통부(국립전파연구원)의 지정</strong>을 받아야 합니다. 지정은 법적 자격이며, 지정 분야(무선, EMC, SAR 등)별로 구분됩니다. 일반적으로 인정(17025) 요건을 기반으로 합니다.</p></div>
  <div class="card"><h3>해외 인정</h3><p>FCC 인정 시험소, 캐나다 ISED 인정 시험소 등 해외 제도 등록도 17025 인정을 기반으로 이루어집니다. 등록 번호와 유효기간을 성적서·홈페이지에 관리합니다.</p></div>
</div>

<h2>상호인정협정(MRA)</h2>
<p><strong>MRA(Mutual Recognition Agreement)</strong>는 국가 간에 “상대국 시험기관(또는 인증기관)의 결과를 우리도 인정한다”는 협정입니다. 대표적으로 <strong>APEC TEL MRA</strong>(아시아태평양경제협력체 통신장비 적합성평가 상호인정)가 있으며, 일반적으로 두 단계로 설명됩니다.</p>
<ul>
  <li><strong>1단계(Phase I)</strong> — 시험성적서 상호 인정: 상대국이 지정한 시험기관의 성적서를 받아들임</li>
  <li><strong>2단계(Phase II)</strong> — 인증서 상호 인정: 상대국 인증기관의 인증까지 받아들임</li>
</ul>
<p>한국도 여러 국가와 MRA를 맺고 있지만, <strong>어느 국가와 어느 단계·분야까지</strong> 적용되는지는 협정마다 다릅니다. 해외 성적서로 KC를 받거나 우리 성적서를 해외에 쓰려는 문의가 오면 RRA의 MRA 안내를 확인하세요.</p>
<p>인정기구 사이에도 ILAC MRA(국제시험소인정협력체 상호인정)가 있어, ILAC MRA에 서명한 인정기구가 인정한 시험소의 성적서는 국제적으로 동등하게 인정받는 기반이 됩니다. KOLAS 인정 마크가 들어간 성적서가 해외에서 통용되는 이유입니다.</p>

<h2>CB 스킴 (IECEE) 간단히</h2>
<p><strong>IECEE CB 스킴</strong>은 주로 <strong>전기안전</strong>(예: IEC 62368-1) 분야의 국제 상호인정 제도입니다. 참여국의 인증기관(NCB, National Certification Body)이 발행한 <strong>CB 시험 성적서·인증서</strong>를 다른 참여국 인증기관이 활용해 자국 인증을 발급합니다. 시험은 CBTL(CB Testing Laboratory)이 수행합니다. 무선·EMC 시험소 업무와 직접 연결되지는 않더라도, 고객이 “CB 리포트 있어요”라고 할 때 무엇인지 알아 두면 좋습니다.</p>

<h2>시험 범위(Scope)와 성적서 유효성</h2>
<p>인정과 지정은 “모든 시험”에 주어지는 것이 아니라 <strong>범위(Scope)</strong>, 즉 특정 규격·시험 항목·주파수 범위 등에 대해 주어집니다.</p>
<div class="compare">
  <div class="bad"><h4>❌ 문제가 되는 경우</h4><ul><li>인정 범위에 없는 새 규격 판으로 시험했는데 인정 마크를 붙여 발행</li><li>인정받지 않은 주파수 범위의 방사 방출 결과를 인정 시험으로 보고</li><li>지정 분야가 아닌 시험 결과를 KC 신청용으로 발행</li></ul></div>
  <div class="good"><h4>✅ 올바른 처리</h4><ul><li>시험 계획 단계에서 적용 규격이 인정·지정 범위에 있는지 확인</li><li>범위 밖 항목은 품질 절차에 따라 구분 표시하거나 범위 확대 후 시험</li><li>규격 개정 시 범위 변경(확대) 일정을 품질팀과 공유</li></ul></div>
</div>
<div class="callout danger">
  <span class="callout-title">성적서의 신뢰는 시험소 전체의 자산</span>
  한 건의 부정확한 성적서(데이터 수정, 미교정 장비 사용, 범위 밖 인정 마크 사용)가 발견되면 개인의 문제가 아니라 <strong>시험소 전체의 인정·지정 취소</strong>로 이어질 수 있습니다. 확신이 없으면 발행 전에 반드시 기술책임자와 상의하세요.
</div>
`,
  quiz: [
    { q: '시험·교정기관의 적격성에 대한 국제 표준은?',
      options: ['ISO 9001', 'ISO/IEC 17065', 'ISO 14001', 'ISO/IEC 17025'],
      answer: 3, explain: 'ISO/IEC 17025는 시험·교정기관의 적격성 요구사항입니다. ISO 9001은 품질경영시스템, ISO/IEC 17065는 제품 인증기관 요구사항입니다.' },
    { q: '국내에서 ISO/IEC 17025에 따라 시험기관을 인정하는 기구는?',
      options: ['KOLAS', 'TCB', 'ETSI', 'ACMA'],
      answer: 0, explain: 'KOLAS(한국인정기구)가 시험·교정기관을 인정합니다.' },
    { q: 'APEC TEL MRA의 1단계(Phase I)가 상호 인정하는 대상은?',
      options: ['인증서', '시험성적서', '제품 디자인', '전파 사용료'],
      answer: 1, explain: '1단계는 시험성적서의 상호 인정, 2단계는 인증서의 상호 인정입니다.' },
    { q: '인정 범위(Scope)에 대한 설명으로 옳은 것은?',
      options: ['한 번 인정받으면 모든 규격의 시험에 인정 마크를 쓸 수 있다', '범위는 성적서에 영향을 주지 않는다', '인정은 특정 규격·시험 항목 등 범위에 대해 주어지므로 범위 밖 시험은 구분해야 한다', '범위는 고객이 정한다'],
      answer: 2, explain: '인정과 지정은 범위에 대해 주어지므로, 범위 밖 시험을 인정 시험처럼 보고하면 안 됩니다.' }
  ],
  refs: [
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '인정 제도, 인정기관 검색' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '지정시험기관 제도, MRA 안내' },
    { title: 'IECEE', url: 'https://www.iecee.org', note: 'CB 스킴 안내' }
  ]
});
