/* MODULE 07 — 시험 절차 · 기록 · 성적서 */

/* ------------------------------------------------------------------
 * 1. 시험 업무 전체 흐름
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-workflow',
  module: 'process',
  order: 1,
  title: '시험 업무 전체 흐름',
  minutes: 15,
  level: '기초',
  summary: '상담·견적부터 성적서 발행과 기록 보관까지, 시험 한 건이 시험소 안에서 흘러가는 10단계와 단계별 산출물을 익힙니다.',
  objectives: [
    '시험 업무 10단계를 순서대로 설명할 수 있다.',
    '각 단계의 담당자와 산출물(남겨야 할 기록)을 안다.',
    '의뢰 검토(계약 검토)가 왜 시험 품질의 출발점인지 이해한다.',
    '기술책임자 검토·승인과 기록 보관의 의미를 안다.'
  ],
  body: `
<p>시험소에서 “시험 한 건”은 측정 장비 앞에서만 일어나지 않습니다. 고객이 처음 문의한 순간부터 성적서가 나가고 기록이 창고(또는 서버)에 보관될 때까지 여러 사람의 손을 거칩니다.
이 강의에서는 그 전체 흐름을 한눈에 보고, <strong>각 단계에서 무엇을 남겨야 하는지(산출물)</strong>를 정리합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  시험 업무는 <strong>택배</strong>와 비슷합니다. 접수(송장 번호 부여) → 분류(시험 계획) → 배송(시험 수행) → 배달 확인(검토·승인) → 수령 기록(보관). 중간 어디서든 “송장 번호”로 추적할 수 있어야 하듯, 시험도 <strong>시험번호·시료 ID</strong>로 모든 기록이 연결되어야 합니다.
</div>

<h2>한눈에 보는 10단계</h2>
<figure class="diagram">
<svg viewBox="0 0 760 545" role="img" aria-label="시험 업무 스윔레인 흐름도">
  <defs><marker id="pwf-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- lanes -->
    <rect x="10" y="10" width="185" height="525" fill="var(--dg-fill)" stroke="var(--dg-muted)"/>
    <rect x="195" y="10" width="185" height="525" fill="var(--dg-fill-2)" stroke="var(--dg-muted)"/>
    <rect x="380" y="10" width="185" height="525" fill="var(--dg-fill)" stroke="var(--dg-muted)"/>
    <rect x="565" y="10" width="185" height="525" fill="var(--dg-fill-2)" stroke="var(--dg-muted)"/>
    <text x="102.5" y="32" font-weight="700">고객 (의뢰자)</text>
    <text x="287.5" y="32" font-weight="700">영업 · 접수</text>
    <text x="472.5" y="32" font-weight="700" fill="var(--dg-accent)">시험 엔지니어</text>
    <text x="657.5" y="32" font-weight="700" fill="var(--dg-accent-2)">기술책임자 · 품질</text>
    <line x1="10" y1="44" x2="750" y2="44" stroke="var(--dg-muted)"/>

    <!-- customer boxes -->
    <rect x="27.5" y="60" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="102.5" y="81">시험 문의</text>
    <rect x="27.5" y="108" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="102.5" y="129">의뢰서 · 기술문서</text>
    <rect x="27.5" y="156" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="102.5" y="177">시료 · 부속품 전달</text>
    <rect x="27.5" y="444" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="102.5" y="465">성적서 수령</text>

    <!-- step boxes -->
    <rect x="212.5" y="60" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="287.5" y="81">① 상담 · 견적</text>
    <rect x="212.5" y="108" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="287.5" y="129">② 의뢰(계약) 검토</text>
    <rect x="212.5" y="156" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="287.5" y="177">③ 시료 접수</text>
    <rect x="397.5" y="204" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="472.5" y="225">④ 시험 계획</text>
    <rect x="397.5" y="252" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="472.5" y="273">⑤ 시험 수행 · 기록</text>
    <rect x="397.5" y="300" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="472.5" y="321">⑥ 데이터 검토</text>
    <rect x="397.5" y="348" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="472.5" y="369">⑦ 성적서 작성</text>
    <rect x="582.5" y="396" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="657.5" y="417">⑧ 검토 · 승인</text>
    <rect x="212.5" y="444" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="287.5" y="465">⑨ 성적서 발행</text>
    <rect x="582.5" y="492" width="150" height="32" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="657.5" y="513">⑩ 기록 보관</text>

    <!-- arrows -->
    <g fill="none" stroke="var(--dg-line)" stroke-width="1.4">
      <path d="M177.5 76 L 210 76" marker-end="url(#pwf-arw)"/>
      <path d="M177.5 124 L 210 124" marker-end="url(#pwf-arw)"/>
      <path d="M177.5 172 L 210 172" marker-end="url(#pwf-arw)"/>
      <path d="M287.5 92 L 287.5 106" marker-end="url(#pwf-arw)"/>
      <path d="M287.5 140 L 287.5 154" marker-end="url(#pwf-arw)"/>
      <path d="M287.5 188 L 287.5 196 L 472.5 196 L 472.5 202" marker-end="url(#pwf-arw)"/>
      <path d="M472.5 236 L 472.5 250" marker-end="url(#pwf-arw)"/>
      <path d="M472.5 284 L 472.5 298" marker-end="url(#pwf-arw)"/>
      <path d="M472.5 332 L 472.5 346" marker-end="url(#pwf-arw)"/>
      <path d="M472.5 380 L 472.5 388 L 657.5 388 L 657.5 394" marker-end="url(#pwf-arw)"/>
      <path d="M657.5 428 L 657.5 436 L 287.5 436 L 287.5 442" marker-end="url(#pwf-arw)"/>
      <path d="M212.5 460 L 180 460" marker-end="url(#pwf-arw)"/>
      <path d="M287.5 476 L 287.5 484 L 657.5 484 L 657.5 490" marker-end="url(#pwf-arw)"/>
      <path d="M732.5 412 L 744 412 L 744 364 L 550 364" stroke="var(--dg-accent-2)" stroke-dasharray="5 4" marker-end="url(#pwf-arw)"/>
      <path d="M547.5 316 L 558 316 L 558 268 L 550 268" stroke="var(--dg-accent)" stroke-dasharray="5 4" marker-end="url(#pwf-arw)"/>
    </g>
    <text x="655" y="357" font-size="11.5" fill="var(--dg-accent-2)">반려 → 수정</text>
    <text x="566" y="296" font-size="11.5" text-anchor="start" fill="var(--dg-accent)">이상 시 재시험</text>
  </g>
</svg>
<figcaption>그림 1. 시험 업무 스윔레인 — 칸(레인)은 담당자, 번호는 진행 순서. 점선은 되돌아가는 흐름(재시험, 반려)</figcaption>
</figure>

<p>회사마다 부서 이름과 세부 단계는 다르지만, 뼈대는 거의 같습니다. 국제 시험소 품질 표준인 <strong>ISO/IEC 17025</strong>의 “프로세스 요구사항(7절)”도 이 순서대로 구성되어 있습니다(요청·입찰·계약 검토 7.1 → 방법 7.2 → 시료 취급 7.4 → 기술 기록 7.5 → 불확도 7.6 → 결과 유효성 7.7 → 결과 보고 7.8).</p>

<h2>단계별로 무엇을 하나</h2>
<ol class="steps">
  <li><strong>① 상담 · 견적</strong>고객이 원하는 인증(KC 적합인증/적합등록, FCC, CE 등), 제품 종류, 무선 기술(Wi-Fi, BLE, LTE…)을 듣고 필요한 시험 항목과 비용·일정을 산정합니다. 이때 들은 정보가 부정확하면 뒤 단계가 모두 흔들립니다.</li>
  <li><strong>② 의뢰(계약) 검토</strong>의뢰서를 받아 <em>요구사항이 명확한지, 우리가 할 수 있는 시험인지(장비·인력·인정 범위), 어떤 시험방법·표준 버전을 쓸지, 판정 규칙(불확도 반영 방법)</em>을 확인하고 고객과 합의합니다. 범위 밖 항목을 외부에 맡긴다면(외부 제공자 활용) 고객에게 알리고 동의를 받습니다.</li>
  <li><strong>③ 시료 접수</strong>시료를 받아 <strong>고유 식별번호(시료 ID)</strong>를 붙이고, 모델명·시리얼·HW/SW 버전·외관 상태를 확인해 기록합니다. 자세한 내용은 <a href="#/l/process-sample">시료 접수와 관리</a>에서 다룹니다.</li>
  <li><strong>④ 시험 계획</strong>어떤 기술·모드·채널에서 어떤 항목을 시험할지 <strong>시험 매트릭스</strong>를 만들고, 장비·시험실 일정을 잡습니다. → <a href="#/l/process-test-plan">시험 계획과 시험절차서</a></li>
  <li><strong>⑤ 시험 수행 · 기록</strong>시험절차서(SOP)에 따라 셋업하고 측정하며, 결과와 조건을 <strong>그 자리에서</strong> 기록합니다. → <a href="#/l/process-records">올바른 시험 기록 방법</a></li>
  <li><strong>⑥ 데이터 검토</strong>시험자 본인(또는 동료)이 원시 데이터를 다시 봅니다. 누락된 채널은 없는지, 보정값이 맞게 들어갔는지, 이상한 값(갑자기 10 dB 튀는 값)은 없는지 확인하고 필요하면 재측정합니다.</li>
  <li><strong>⑦ 성적서 작성</strong>원시 데이터를 근거로 결과표·판정·셋업 사진을 정리해 성적서 초안을 만듭니다. → <a href="#/l/process-report">시험성적서 구성과 작성</a></li>
  <li><strong>⑧ 기술책임자 검토 · 승인</strong>작성자가 아닌 <strong>권한 있는 사람</strong>(기술책임자 등)이 원시 데이터와 성적서를 대조 검토하고 승인합니다. 문제가 있으면 반려합니다.</li>
  <li><strong>⑨ 성적서 발행</strong>승인된 성적서에 서명(전자서명)을 하고 고객에게 전달합니다. 발행 이력(발행일, 수신자, 발행 방법)을 남깁니다.</li>
  <li><strong>⑩ 기록 보관</strong>의뢰서, 접수 기록, 원시 데이터, 성적서 사본, 검토 기록을 정해진 기간 동안 보관합니다. 보관 기간은 사내 규정·인정기구 요구·고객 계약에 따르며, 누가 봐도 <em>다시 찾을 수 있어야</em> 합니다.</li>
</ol>

<h2>단계별 산출물 정리</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>단계</th><th>주 담당</th><th>산출물 (남겨야 할 기록)</th><th>확인 포인트</th></tr></thead>
<tbody>
<tr><td>① 상담·견적</td><td>영업</td><td>견적서, 상담 메모</td><td>인증 종류·대상 국가·무선 기술 파악</td></tr>
<tr><td>② 의뢰 검토</td><td>영업·기술</td><td>시험 의뢰서(신청서), 계약 검토 기록</td><td>시험방법·표준 버전, 인정 범위, 판정 규칙, 외부 위탁 여부</td></tr>
<tr><td>③ 시료 접수</td><td>접수 담당</td><td>시료 접수 대장, 접수 체크리스트, 외관 사진, 시료 라벨</td><td>시료 ID 부여, 버전·상태 확인, 이상 시 고객 확인</td></tr>
<tr><td>④ 시험 계획</td><td>시험 엔지니어</td><td>시험 계획서(매트릭스), 일정표</td><td>모드·채널 누락 없음, 적용 표준 버전</td></tr>
<tr><td>⑤ 시험 수행</td><td>시험 엔지니어</td><td>시험 기록지, 원시 데이터 파일, 스크린샷, 셋업 사진, 장비 사용 일지</td><td>장비 교정 유효, 환경 조건, 설정값 기록</td></tr>
<tr><td>⑥ 데이터 검토</td><td>시험자·동료</td><td>검토 표시(서명/일자), 재시험 기록</td><td>누락·보정 오류·이상값</td></tr>
<tr><td>⑦ 성적서 작성</td><td>시험 엔지니어</td><td>성적서 초안</td><td>원시 데이터와 일치, 필수 항목 누락 없음</td></tr>
<tr><td>⑧ 검토·승인</td><td>기술책임자</td><td>성적서 검토 체크리스트, 승인 기록</td><td>작성자와 승인자 분리</td></tr>
<tr><td>⑨ 발행</td><td>접수·영업</td><td>발행 대장, 최종 성적서(PDF)</td><td>고유 번호, 페이지 “n / 총 m”</td></tr>
<tr><td>⑩ 보관</td><td>품질 담당</td><td>기록 보관 목록, 백업</td><td>보관 기간, 접근 권한, 기밀 유지</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">모든 기록을 한 줄로 꿰는 “시험번호”</span>
  의뢰서·시료 라벨·기록지·데이터 파일명·성적서에 <strong>같은 시험번호(또는 시료 ID)</strong>가 들어가야 합니다. 몇 년 뒤 인정기구 심사나 고객 문의가 와도 번호 하나로 모든 기록을 찾아낼 수 있어야 “추적 가능(traceable)”한 기록입니다.
</div>

<h2>의뢰 검토가 왜 그렇게 중요할까</h2>
<p>신입사원은 “시험만 잘하면 되지”라고 생각하기 쉽지만, 실제 문제의 상당수는 <strong>시험 전에</strong> 생깁니다.</p>
<div class="compare">
  <div class="bad"><h4>❌ 의뢰 검토가 부실하면</h4>
    <ul>
      <li>고객은 FCC용 시험을 원했는데 KC 방법으로만 시험함</li>
      <li>5 GHz 대역을 지원하는데 2.4 GHz만 시험 계획에 들어감</li>
      <li>고객이 원한 표준은 최신판인데 이전 판으로 시험</li>
      <li>우리 인정 범위 밖 항목인데 인정 마크를 붙여 발행</li>
    </ul>
  </div>
  <div class="good"><h4>✅ 의뢰 검토가 잘 되면</h4>
    <ul>
      <li>대상 인증·국가·표준 버전이 의뢰서에 명시됨</li>
      <li>지원 기술·대역·안테나·모드 목록을 고객에게서 확보</li>
      <li>불확도를 판정에 어떻게 반영할지(판정 규칙) 사전 합의</li>
      <li>인정 범위 밖 항목은 “비인정”으로 표시하기로 합의</li>
    </ul>
  </div>
</div>

<h2>신입사원이 자주 하는 실수</h2>
<ul>
  <li><strong>시료 ID 없이 시료를 옮기기</strong> — 같은 모델 시료가 여러 대면 순식간에 뒤섞입니다. 라벨 없는 시료는 시험하지 않습니다.</li>
  <li><strong>“나중에 정리해서 쓰기”</strong> — 기억에 의존한 기록은 틀리고, 심사에서 신뢰를 잃습니다. 측정하면서 바로 기록합니다.</li>
  <li><strong>재시험 기록을 지우기</strong> — 첫 측정이 이상해서 다시 쟀다면 <em>첫 측정도 남기고</em> 재시험 사유를 적습니다.</li>
  <li><strong>본인이 쓴 성적서를 본인이 승인</strong> — 검토·승인은 반드시 다른 권한자가 합니다.</li>
</ul>
`,
  quiz: [
    { q: '시험 의뢰(계약) 검토 단계에서 확인해야 할 내용으로 가장 거리가 먼 것은?',
      options: ['적용할 시험방법과 표준 버전', '우리 시험소의 장비·인력·인정 범위로 가능한지', '측정 시 분석기의 RBW 설정값', '불확도를 판정에 반영하는 방법(판정 규칙)'],
      answer: 2, explain: 'RBW 같은 세부 설정은 시험절차서와 시험 수행 단계의 내용입니다. 의뢰 검토에서는 요구사항·방법·능력·판정 규칙 등 “무엇을, 어떤 기준으로, 할 수 있는가”를 확인합니다.' },
    { q: '성적서의 검토·승인에 대한 설명으로 옳은 것은?',
      options: ['작성자 본인이 꼼꼼히 보면 승인까지 해도 된다', '작성자가 아닌 권한 있는 사람이 원시 데이터와 대조해 검토·승인한다', '고객이 승인하면 시험소 검토는 생략한다', '승인은 발행 후에 해도 된다'],
      answer: 1, explain: '독립적인 검토는 오류를 걸러내는 핵심 장치입니다. 기술책임자 등 권한자가 발행 전에 검토·승인합니다.' },
    { q: '의뢰서·시료 라벨·기록지·데이터 파일명·성적서에 공통으로 들어가 기록을 서로 연결해 주는 것은?',
      options: ['시험 담당자 이름', '고객 담당자 전화번호', '시험실 이름', '시험번호(시료 ID)'],
      answer: 3, explain: '시험번호·시료 ID가 모든 기록을 한 줄로 꿰어 추적성을 보장합니다.' },
    { q: '데이터 검토 중 한 채널의 값이 다른 채널보다 10 dB 이상 튀는 것을 발견했다. 올바른 조치는?',
      options: ['튀는 값을 삭제하고 평균값으로 바꾼다', '성적서에서 그 채널을 빼 버린다', '원인을 확인해 재측정하고, 처음 값과 재측정 사유를 모두 기록한다', '그대로 성적서에 넣고 넘어간다'],
      answer: 2, explain: '이상값은 셋업 문제(케이블 풀림 등)일 수 있으므로 원인을 확인하고 재측정합니다. 처음 기록도 지우지 않고 사유와 함께 남깁니다.' }
  ],
  refs: [
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '시험·교정기관의 일반 요구사항 — 7절 프로세스 요구사항' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '국내 시험기관 인정 제도, 인정 기준·지침' },
    { title: 'ILAC', url: 'https://ilac.org', note: '국제 시험소 인정 협력기구 — 상호인정(MRA), 지침 문서' }
  ]
});

/* ------------------------------------------------------------------
 * 2. 시료 접수와 관리
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-sample',
  module: 'process',
  order: 2,
  title: '시료 접수와 관리',
  minutes: 14,
  level: '기초',
  summary: '시료를 받을 때 무엇을 확인·기록하는지, 시료 ID와 라벨, 이상 발견 시 처리, 보관·반출 기록, 시험 모드와 기술문서 확인 방법을 배웁니다.',
  objectives: [
    '시료 접수 시 확인할 항목(모델명, 시리얼, HW/SW 버전, 정격, 안테나 등)을 안다.',
    '시료 식별번호(ID)와 라벨의 역할을 설명할 수 있다.',
    '시료 상태 이상을 발견했을 때 고객 확인 절차를 따른다.',
    '시험에 필요한 기술문서(튠업 출력표, 블록도, 매뉴얼)와 시험 모드를 확인한다.'
  ],
  body: `
<p>시료(試料, Test Item / EUT: Equipment Under Test)는 시험의 <strong>주인공</strong>입니다. 아무리 정확히 측정해도 <em>엉뚱한 시료</em>를 측정했거나 <em>어떤 버전을 측정했는지 모른다면</em> 그 결과는 쓸모가 없습니다.
ISO/IEC 17025 7.4(시험 품목의 취급)도 시료의 운송·접수·취급·보호·보관·반환을 계획하고, 시료를 <strong>명확하게 식별</strong>하도록 요구합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  병원에서 환자에게 <strong>이름표 팔찌</strong>를 채우는 이유와 같습니다. 같은 모델 휴대폰 3대가 시험실에 있으면 겉모습만으로는 구분이 안 됩니다. 시료 ID 라벨이 곧 팔찌입니다.
</div>

<h2>접수할 때 확인하고 기록할 항목</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>어디서 확인</th><th>왜 중요한가</th></tr></thead>
<tbody>
<tr><td>모델명 (기본·파생 모델)</td><td>제품 라벨, 의뢰서</td><td>성적서·인증서에 그대로 들어감. 한 글자 오타도 재발행 사유</td></tr>
<tr><td>시리얼 번호 (S/N, IMEI 등)</td><td>제품 라벨, 설정 화면</td><td>여러 대 중 “어느 한 대”를 특정</td></tr>
<tr><td>HW 버전 / SW(FW) 버전</td><td>보드 실크, 설정 화면, 고객 제공</td><td>버전에 따라 출력·동작이 달라짐. 시험 후 버전이 바뀌면 결과 유효성 문제</td></tr>
<tr><td>정격 (전원 전압·주파수, 배터리 사양)</td><td>라벨, 사양서</td><td>전원 조건(정격 전압, 극한 전압 시험) 결정</td></tr>
<tr><td>안테나 종류 · 이득</td><td>기술문서, 안테나 사양서</td><td>EIRP 계산, 방사 시험 조건 결정. 내장/외장, 커넥터 유무</td></tr>
<tr><td>부속품 (어댑터, 케이블, 배터리, 지그)</td><td>현물 확인</td><td>시험 구성(셋업)에 필요. 반환 시 누락 방지</td></tr>
<tr><td>외관 상태 · 사진</td><td>육안 확인, 촬영</td><td>파손·변형 여부를 접수 시점 기준으로 증명</td></tr>
<tr><td>시험 모드 지원</td><td>고객 제공 툴·명령어로 직접 동작</td><td>연속 송신·채널 고정이 안 되면 시험 불가</td></tr>
</tbody></table></div>

<p>인쇄해서 쓸 수 있는 <a href="#/forms">시료 접수 체크리스트</a> 양식이 준비되어 있습니다.</p>

<h2>시료 식별 라벨</h2>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="시료 식별 라벨 예시">
  <g font-size="13" fill="var(--text)">
    <rect x="30" y="20" width="330" height="205" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <rect x="30" y="20" width="330" height="36" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="195" y="44" text-anchor="middle" font-weight="700" font-size="15">시료 식별표 (SAMPLE ID)</text>
    <text x="46" y="82" fill="var(--text-3)">시료 ID</text><text x="140" y="82" font-weight="700" fill="var(--dg-accent)">S26-0412-01</text>
    <text x="46" y="106" fill="var(--text-3)">시험번호</text><text x="140" y="106">T26-0412</text>
    <text x="46" y="130" fill="var(--text-3)">모델명</text><text x="140" y="130">ABC-1000 (예시)</text>
    <text x="46" y="154" fill="var(--text-3)">접수일 / 접수자</text><text x="170" y="154">2026-09-01 / 홍길동</text>
    <text x="46" y="182" fill="var(--text-3)">상태</text>
    <rect x="140" y="170" width="14" height="14" fill="none" stroke="var(--dg-line)"/><text x="160" y="182">시험 전</text>
    <rect x="215" y="170" width="14" height="14" fill="var(--dg-accent)" stroke="var(--dg-line)"/><text x="235" y="182">시험 중</text>
    <rect x="290" y="170" width="14" height="14" fill="none" stroke="var(--dg-line)"/><text x="310" y="182">완료</text>
    <text x="46" y="210" font-size="12" fill="var(--text-3)">※ 시료 · 부속품 · 포장 상자에 같은 ID 부착</text>

    <g font-size="12.5" fill="var(--text-2)">
      <path d="M362 82 L 420 82" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
      <text x="428" y="78">접수 순번 + 시료 순번: 같은 시험의</text>
      <text x="428" y="95">여러 시료(대표·예비·전도용)를 구분</text>
      <path d="M362 106 L 420 120" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
      <text x="428" y="125">의뢰서·기록지·성적서와 연결되는 번호</text>
      <path d="M362 178 L 420 160" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
      <text x="428" y="158">시험 상태 표시: 시험이 끝난 시료를</text>
      <text x="428" y="175">실수로 다시 쓰거나, 시험 중 시료를</text>
      <text x="428" y="192">반출하는 일을 막음</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 시료 식별 라벨 예시 — 번호 체계는 회사마다 다르며, 중요한 것은 “유일하고 일관된” 번호입니다</figcaption>
</figure>

<div class="callout tip">
  <span class="callout-title">라벨은 떨어지지 않는 곳에, 측정을 방해하지 않는 곳에</span>
  안테나 위나 SAR 측정면(얼굴·몸체 접촉면)에 두꺼운 라벨을 붙이면 측정에 영향을 줄 수 있습니다. 배터리 커버 안쪽이나 측면 등 영향이 적은 곳에 붙이고, 작은 시료는 지퍼백·트레이에 라벨을 붙여 함께 관리합니다.
</div>

<h2>시료 상태에 이상이 있을 때</h2>
<p>접수 시 액정 파손, 커넥터 휨, 배터리 부풂, 모델명 라벨 불일치, 의뢰서와 다른 SW 버전 등을 발견하면 <strong>임의로 판단해 시험을 진행하지 않습니다.</strong></p>
<figure class="diagram">
<svg viewBox="0 0 760 150" role="img" aria-label="시료 이상 발견 시 처리 흐름">
  <defs><marker id="psm-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="40" width="130" height="54" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="75" y="63" font-weight="700">이상 발견</text><text x="75" y="81" font-size="11.5" fill="var(--text-3)">파손·버전 불일치</text>
    <rect x="160" y="40" width="130" height="54" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="225" y="63" font-weight="700">사진 · 기록</text><text x="225" y="81" font-size="11.5" fill="var(--text-3)">접수 기록에 기재</text>
    <rect x="310" y="40" width="130" height="54" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="375" y="63" font-weight="700">고객에게 통보</text><text x="375" y="81" font-size="11.5" fill="var(--text-3)">메일 등 기록 남는 방식</text>
    <rect x="460" y="40" width="130" height="54" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="525" y="63" font-weight="700">고객 결정</text><text x="525" y="81" font-size="11.5" fill="var(--text-3)">진행 / 교체 / 보류</text>
    <rect x="610" y="40" width="140" height="54" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="680" y="63" font-weight="700">결정 내용 기록</text><text x="680" y="81" font-size="11.5" fill="var(--text-3)">필요 시 성적서에 명시</text>
    <g stroke="var(--dg-line)" stroke-width="1.4" fill="none">
      <path d="M140 67 L 158 67" marker-end="url(#psm-arw)"/>
      <path d="M290 67 L 308 67" marker-end="url(#psm-arw)"/>
      <path d="M440 67 L 458 67" marker-end="url(#psm-arw)"/>
      <path d="M590 67 L 608 67" marker-end="url(#psm-arw)"/>
    </g>
    <text x="380" y="130" font-size="12" fill="var(--text-3)">고객이 “그 상태로 진행”을 요청한 경우, 결과에 영향이 있을 수 있다는 면책 문구를 성적서에 넣기도 합니다</text>
  </g>
</svg>
<figcaption>그림 2. 시료 이상 발견 시 처리 흐름 (ISO/IEC 17025 7.4.3의 취지)</figcaption>
</figure>

<h2>시험 모드와 기술문서 확인</h2>
<p>무선 시험은 대부분 <strong>시험 모드(Test Mode)</strong>가 필요합니다. 평소 사용 상태의 기기는 필요할 때만 잠깐씩 송신하기 때문에, 특정 채널에서 최대 출력으로 <em>계속</em> 송신하도록 만들어야 측정할 수 있습니다.</p>
<ul>
  <li><strong>시험 모드 확인</strong> — 고객이 준비한 제어 SW, 시리얼/ADB 명령, 전용 펌웨어 등으로 채널 고정, 변조 방식 선택, 연속 송신(Duty Cycle), 출력 레벨 설정이 되는지 <strong>접수 시점에</strong> 직접 확인합니다. 셀룰러(LTE/NR) 기기는 무선통신 시험기(Call Box)와 연결(Call)되는지 확인합니다.</li>
  <li><strong>튠업 출력표(Tune-up / Power table)</strong> — 모드·채널별 목표 출력과 허용 편차. 측정 출력이 이 범위 안인지 비교하고, SAR에서는 측정값을 튠업 상한으로 스케일링할 때 씁니다.</li>
  <li><strong>블록도(Block Diagram)</strong> — 발진기·클럭 주파수, 무선 모듈 구성. 스퓨리어스·EMC 측정 시 의심 주파수를 예측하는 데 도움이 됩니다.</li>
  <li><strong>사용자 매뉴얼</strong> — 정상 사용 자세(몸에 착용? 거치형?), 사용 거리, 부속품 → SAR 시험 위치, EMC 시험 구성 결정에 쓰입니다.</li>
  <li><strong>안테나 사양서</strong> — 안테나 종류, 최대 이득(dBi). EIRP·전계강도 환산의 근거입니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">시험 모드가 안 되면 접수 단계에서 멈추세요</span>
  시험 일정 당일에 “연속 송신이 안 된다”는 것을 알면 챔버 예약이 모두 날아갑니다. 접수 때 모드 동작을 확인하고, 안 되면 즉시 고객에게 알려 툴·펌웨어를 받습니다.
</div>

<h2>보관 · 이동 · 반출 기록</h2>
<ul>
  <li><strong>지정 보관 장소</strong>: 시험 전/중/완료 구역을 나누고, 배터리 시료는 지정 보관함에 둡니다.</li>
  <li><strong>이동 기록</strong>: 다른 시험실(예: RF실 → EMC 챔버 → SAR실)로 옮길 때 누가 언제 가져갔는지 대장에 적습니다.</li>
  <li><strong>반출 · 반환</strong>: 고객 반환 시 부속품 포함 여부를 체크하고 인수자 서명을 받습니다. 시료 보관 기간이 정해져 있다면 그 기간이 끝나기 전에는 폐기하지 않습니다.</li>
  <li><strong>시험 중 변경 금지</strong>: 시험 도중 고객이 펌웨어를 바꿔 달라고 하면, 바뀐 버전을 기록하고 이미 시험한 항목의 유효성(재시험 필요 여부)을 기술책임자와 검토합니다.</li>
</ul>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>
    <p>“시료 2대 받음. 이상 없음.”</p>
    <p class="muted">어떤 모델? 시리얼은? SW 버전은? 부속품은? 사진은?</p>
  </div>
  <div class="good"><h4>✅ 좋은 예</h4>
    <p>“S26-0412-01 / ABC-1000 / S/N 2409A0012 / HW R1.2 / SW 1.0.3 / 어댑터 1, USB-C 케이블 1 / 외관 이상 없음(사진 4매) / 시험 모드 동작 확인(툴 v2.1, 연속 송신 OK) / 2026-09-01 홍길동”</p>
  </div>
</div>
`,
  quiz: [
    { q: '시료 접수 시 확인한 SW 버전이 의뢰서에 적힌 버전과 다르다. 가장 적절한 조치는?',
      options: ['시료에 설치된 버전으로 그냥 시험한다', '의뢰서 버전으로 성적서에 적는다', '사진·기록을 남기고 고객에게 알린 뒤 고객 결정을 기록한다', '시료를 즉시 반송한다'],
      answer: 2, explain: '임의 판단하지 않고 고객과 확인합니다. 이상 내용·통보·고객 결정을 모두 기록으로 남깁니다.' },
    { q: '무선 시험에서 튠업 출력표(Tune-up table)의 주된 용도는?',
      options: ['모드·채널별 목표 출력과 허용 범위를 확인하고, 측정 출력과 비교하는 근거', '시료 포장 방법 확인', '시험실 온습도 관리 기준', '인증 수수료 산정'],
      answer: 0, explain: '튠업 출력표는 제조사가 선언한 목표 출력과 허용 편차입니다. 측정 출력의 타당성 확인과 SAR 스케일링에 사용합니다.' },
    { q: '시료 ID 라벨을 붙이는 위치로 가장 부적절한 곳은?',
      options: ['배터리 커버 안쪽', '시료를 담은 트레이', 'SAR 측정 시 팬텀에 닿는 안테나 부위 표면', '포장 상자'],
      answer: 2, explain: '안테나 부위나 측정 접촉면에 라벨을 붙이면 측정에 영향을 줄 수 있습니다.' },
    { q: '시험 모드 동작 확인을 “접수 시점”에 하는 가장 큰 이유는?',
      options: ['고객에게 비용을 더 청구하려고', '시험 당일 연속 송신이 안 되어 일정이 무너지는 것을 막으려고', '규정상 접수일에만 전원을 켤 수 있어서', '시료 무게를 재기 위해'],
      answer: 1, explain: '시험 모드 문제를 미리 발견해야 툴·펌웨어를 받을 시간이 확보되고 장비·챔버 일정 낭비를 막을 수 있습니다.' }
  ],
  refs: [
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '7.4 시험 품목의 취급' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가 신청 서류(기술문서) 요건 확인' }
  ]
});

/* ------------------------------------------------------------------
 * 3. 시험 계획과 시험절차서
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-test-plan',
  module: 'process',
  order: 3,
  title: '시험 계획과 시험절차서(SOP) 이해',
  minutes: 16,
  level: '중급',
  summary: '법령·표준·사내 시험절차서·시험 계획서의 관계를 이해하고, 시험 매트릭스 작성, 표준 버전 확인, 시험 방법 이탈(deviation) 처리 방법을 배웁니다.',
  objectives: [
    '규정·표준·사내 SOP·시험 계획서가 어떻게 이어지는지 설명할 수 있다.',
    '기술·모드·채널·항목으로 시험 매트릭스를 작성할 수 있다.',
    '적용 표준의 버전을 확인하는 습관을 갖는다.',
    '시험 방법 이탈(deviation)이 생겼을 때 처리 절차를 안다.'
  ],
  body: `
<p>시험을 시작하기 전에 “<strong>무엇을, 어떤 방법으로, 어디까지</strong> 시험할지”를 정리한 것이 시험 계획입니다. 그리고 “우리 시험소는 그 방법을 <strong>우리 장비로 구체적으로 어떻게</strong> 수행하는가”를 정리한 문서가 시험절차서(SOP, Standard Operating Procedure)입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  <strong>법령·고시</strong>는 “맛있고 안전한 음식을 팔아라”, <strong>표준</strong>은 “이 요리는 180 ℃에서 20분 굽는다”라는 공식 레시피, <strong>사내 SOP</strong>는 “우리 가게 3번 오븐은 예열 10분, 선반 2단에 놓는다”라는 주방 매뉴얼, <strong>시험 계획서</strong>는 “오늘 주문 들어온 5개 메뉴”의 작업표입니다.
</div>

<h2>문서의 계층 구조</h2>
<figure class="diagram">
<svg viewBox="0 0 760 320" role="img" aria-label="규정에서 기록지까지 문서 계층">
  <defs><marker id="ptp-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="12" width="500" height="46" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="270" y="33" font-weight="700">법령 · 고시 (전파법, 기술기준 고시, FCC Part 15 …)</text>
    <text x="270" y="50" font-size="12" fill="var(--text-3)">무엇을 만족해야 하나 — 한계값</text>
    <rect x="60" y="74" width="420" height="46" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="270" y="95" font-weight="700">표준 · 시험방법 (고시 시험방법, ANSI C63.10, EN 300 328 …)</text>
    <text x="270" y="112" font-size="12" fill="var(--text-3)">어떻게 측정하나 — 공통 방법</text>
    <rect x="100" y="136" width="340" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <text x="270" y="157" font-weight="700" fill="var(--dg-accent)">사내 시험절차서 (SOP)</text>
    <text x="270" y="174" font-size="12" fill="var(--text-3)">우리 장비·셋업으로 구체적으로</text>
    <rect x="140" y="198" width="260" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="270" y="219" font-weight="700" fill="var(--dg-accent-2)">시험 계획서 (매트릭스)</text>
    <text x="270" y="236" font-size="12" fill="var(--text-3)">이 시료에 무엇을</text>
    <rect x="180" y="260" width="180" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.8"/>
    <text x="270" y="281" font-weight="700" fill="var(--dg-ok)">기록지 · 원시 데이터</text>
    <text x="270" y="298" font-size="12" fill="var(--text-3)">실제로 무엇이 나왔나</text>
    <g text-anchor="start" font-size="12.5" fill="var(--text-2)">
      <text x="545" y="40">일반적 · 추상적</text>
      <text x="545" y="290">구체적 · 이 시험 한 건</text>
    </g>
    <path d="M600 52 L 600 270" stroke="var(--dg-muted)" stroke-width="1.5" marker-end="url(#ptp-arw)"/>
    <text x="680" y="150" font-size="12" fill="var(--text-3)">위 문서가 바뀌면</text>
    <text x="680" y="168" font-size="12" fill="var(--text-3)">아래 문서도 개정</text>
  </g>
</svg>
<figcaption>그림 1. 위로 갈수록 일반적, 아래로 갈수록 구체적 — 아래 문서는 위 문서를 벗어나면 안 됩니다</figcaption>
</figure>

<p>표준은 “분해능 대역폭(RBW, Resolution Bandwidth)은 점유대역폭의 1~5 %” 같은 <em>조건</em>을 주지만, 어느 분석기의 어느 메뉴에서 몇 번 케이블을 쓰는지는 알려 주지 않습니다. 그 공백을 메우고 <strong>누가 해도 같은 결과</strong>가 나오게 하는 것이 SOP입니다.</p>

<h2>시험절차서(SOP)의 구성</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>구성</th><th>내용</th><th>예 (최대 출력 측정)</th></tr></thead>
<tbody>
<tr><td>1. 목적</td><td>이 절차서가 무엇을 위한 것인지</td><td>무선기기 송신 출력을 측정하는 방법을 규정</td></tr>
<tr><td>2. 적용 범위</td><td>대상 기술·대역·표준</td><td>2.4 GHz / 5 GHz 무선랜, 블루투스 — 전도 측정</td></tr>
<tr><td>3. 참조 문서</td><td>근거 표준(버전 포함)</td><td>해당 고시 시험방법, ANSI C63.10(해당 판) 등</td></tr>
<tr><td>4. 장비</td><td>사용 장비와 요구 성능</td><td>파워미터·센서, 스펙트럼 분석기, 감쇠기, RF 케이블</td></tr>
<tr><td>5. 셋업</td><td>연결도, 경로손실 보정 방법</td><td>EUT → 감쇠기 → 파워센서, 경로손실은 시험 전 측정</td></tr>
<tr><td>6. 절차</td><td>단계별 조작, 설정값</td><td>채널 고정 → 연속 송신 확인 → 평균 전력 측정 …</td></tr>
<tr><td>7. 계산</td><td>보정·환산 공식</td><td>결과 = 측정값 + 경로손실, EIRP = 결과 + 안테나 이득</td></tr>
<tr><td>8. 판정</td><td>한계값 비교, 판정 규칙</td><td>한계값 이하 적합, 불확도 반영은 계약 시 합의한 규칙</td></tr>
<tr><td>9. 기록</td><td>남겨야 할 데이터·양식</td><td>시험 기록지, 스크린샷 파일명 규칙</td></tr>
</tbody></table></div>

<h2>시험 매트릭스 만들기</h2>
<p>시험 계획의 핵심은 <strong>빠짐없이, 중복 없이</strong> 시험 조합을 정하는 것입니다. 기술(Technology) × 모드(변조·데이터 속도·대역폭) × 채널(저·중·고) × 항목으로 표를 만듭니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>기술</th><th>모드</th><th>채널 (주파수)</th><th>출력</th><th>점유대역폭</th><th>대역외·스퓨리어스</th><th>주파수 허용편차</th></tr></thead>
<tbody>
<tr><td>Wi-Fi 2.4 GHz</td><td>802.11b (1 Mbps)</td><td>1 / 6 / 11 (2412 / 2437 / 2462 MHz)</td><td>●</td><td>●</td><td>●</td><td>●</td></tr>
<tr><td>Wi-Fi 2.4 GHz</td><td>802.11g (6 Mbps)</td><td>1 / 6 / 11</td><td>●</td><td>●</td><td>●</td><td>○</td></tr>
<tr><td>Wi-Fi 2.4 GHz</td><td>802.11n HT20 (MCS0)</td><td>1 / 6 / 11</td><td>●</td><td>●</td><td>●</td><td>○</td></tr>
<tr><td>Bluetooth LE</td><td>1M PHY</td><td>0 / 19 / 39 (2402 / 2440 / 2480 MHz)</td><td>●</td><td>●</td><td>●</td><td>●</td></tr>
</tbody></table></div>
<p class="muted">● 전 채널 시험, ○ 대표 모드로 갈음(근거 기록). 위 표는 교육용 예시이며, 실제 항목·채널·대표 모드 선정은 적용 표준과 사내 SOP를 따릅니다.</p>

<div class="callout tip">
  <span class="callout-title">“최악 조건(Worst case)”을 고르는 이유를 적어 두세요</span>
  모든 데이터 속도를 다 시험할 수 없어 “출력이 가장 높은 모드”를 대표로 고른다면, 그 판단의 근거(사전 측정 결과, 튠업 표 등)를 계획서나 기록지에 남겨야 합니다. 심사원은 “왜 이 모드만 했나요?”라고 반드시 묻습니다.
</div>

<h2>적용 표준 버전 확인</h2>
<p>표준과 고시는 개정됩니다. 같은 이름의 표준이라도 버전(발행 연도, 판)에 따라 한계값·측정 방법이 달라질 수 있습니다.</p>
<ul>
  <li>의뢰 검토 시 <strong>고객이 요구한 버전</strong>과 <strong>인증기관이 현재 인정하는 버전</strong>을 확인합니다(전환 유예기간이 있는 경우 특히 주의).</li>
  <li>우리 시험소의 <strong>인정 범위(Scope)</strong>에 그 버전이 포함되어 있는지 확인합니다.</li>
  <li>SOP, 시험 계획서, 기록지, 성적서에 <strong>같은 버전</strong>이 적혀야 합니다. 성적서 흔한 오류 중 하나가 “표지에는 최신판, 결과 페이지에는 구판”입니다.</li>
</ul>

<h2>시험 방법 이탈(Deviation) 처리</h2>
<p>현실에서는 표준대로 할 수 없는 상황이 생깁니다. 예: 시료가 너무 커서 정해진 배치가 불가능, 시험 모드가 특정 채널을 지원하지 않음, 고객이 일부 항목 생략을 요청. 이때 몰래 바꾸면 안 되고, 정해진 절차로 <strong>“허가된 이탈”</strong>로 처리해야 합니다(ISO/IEC 17025 7.2.1.7 취지: 방법으로부터의 이탈은 문서화·기술적 정당성·승인·고객 수락이 있을 때만).</p>
<figure class="diagram">
<svg viewBox="0 0 760 130" role="img" aria-label="시험 방법 이탈 처리 흐름">
  <defs><marker id="ptp-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="30" width="130" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="75" y="54" font-weight="700">이탈 필요 발견</text><text x="75" y="73" font-size="11.5" fill="var(--text-3)">시험 중단</text>
    <rect x="160" y="30" width="130" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="225" y="54" font-weight="700">영향 평가</text><text x="225" y="73" font-size="11.5" fill="var(--text-3)">결과에 미치는 영향</text>
    <rect x="310" y="30" width="130" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="375" y="54" font-weight="700">기술책임자 승인</text><text x="375" y="73" font-size="11.5" fill="var(--text-3)">기술적 정당성</text>
    <rect x="460" y="30" width="130" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="525" y="54" font-weight="700">고객 동의</text><text x="525" y="73" font-size="11.5" fill="var(--text-3)">서면(메일) 기록</text>
    <rect x="610" y="30" width="140" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="680" y="54" font-weight="700">기록 · 성적서 명시</text><text x="680" y="73" font-size="11.5" fill="var(--text-3)">“이탈 사항” 항목</text>
    <g stroke="var(--dg-line)" stroke-width="1.4" fill="none">
      <path d="M140 58 L 158 58" marker-end="url(#ptp-arw2)"/>
      <path d="M290 58 L 308 58" marker-end="url(#ptp-arw2)"/>
      <path d="M440 58 L 458 58" marker-end="url(#ptp-arw2)"/>
      <path d="M590 58 L 608 58" marker-end="url(#ptp-arw2)"/>
    </g>
    <text x="380" y="115" font-size="12" fill="var(--text-3)">이탈 내용은 성적서의 “시험 방법으로부터의 추가·이탈·제외 사항”에 기재합니다</text>
  </g>
</svg>
<figcaption>그림 2. 시험 방법 이탈(deviation)은 “발견 → 평가 → 승인 → 동의 → 기록” 순서로</figcaption>
</figure>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>
    <p>시험 모드가 채널 13을 지원하지 않아 채널 11로 대신 측정하고, 기록지에는 아무 말 없이 “CH 13” 칸에 값을 적음.</p>
  </div>
  <div class="good"><h4>✅ 좋은 예</h4>
    <p>시험을 멈추고 기술책임자에게 보고 → 고객에게 지원 채널 확인 → 제품이 실제로 채널 13을 쓰지 않는다는 고객 확인서(메일) 확보 → 기록지·성적서에 “채널 13 미지원(고객 확인, 날짜)”으로 명시.</p>
  </div>
</div>

<h2>흔한 실수</h2>
<ul>
  <li>SOP를 “한 번 읽고 끝” — 개정되면 변경 내용을 다시 읽어야 합니다. 현장에 <strong>구판 사본</strong>이 굴러다니지 않게 합니다(문서 관리).</li>
  <li>매트릭스에서 <strong>안테나별(ANT1/ANT2) 또는 MIMO 조합</strong>을 빠뜨림.</li>
  <li>고객이 지원한다고 한 대역(예: 5 GHz 일부 대역)을 매트릭스에 넣지 않음 — 의뢰서의 지원 대역 목록과 대조합니다.</li>
</ul>
`,
  quiz: [
    { q: '다음 중 “우리 시험소 장비와 셋업으로 구체적으로 어떻게 측정하는지”를 정한 문서는?',
      options: ['전파법', '국제 표준', '사내 시험절차서(SOP)', '견적서'],
      answer: 2, explain: '표준은 공통 방법, SOP는 이를 우리 시험소 환경에서 재현 가능하게 구체화한 문서입니다.' },
    { q: '시험 도중 표준에 정해진 방법대로 할 수 없는 상황이 생겼다. 올바른 처리는?',
      options: ['가장 비슷한 방법으로 하고 기록은 원래 방법대로 적는다', '영향 평가, 승인, 고객 동의를 거쳐 이탈 사항을 기록하고 성적서에 명시한다', '해당 항목을 조용히 생략한다', '다음 시험 때 반영한다'],
      answer: 1, explain: '방법 이탈은 문서화·기술적 정당성·승인·고객 수락이 있을 때만 허용되며 성적서에 명시해야 합니다.' },
    { q: '시험 매트릭스에서 모든 데이터 속도 대신 대표 모드만 시험했다. 반드시 해야 할 일은?',
      options: ['대표 모드 선정 근거(사전 측정 결과 등)를 기록한다', '아무것도 하지 않아도 된다', '성적서에 모든 모드를 시험했다고 적는다', '고객에게 비용을 환불한다'],
      answer: 0, explain: '대표 모드(최악 조건) 선정은 근거가 기록되어 있어야 타당성을 설명할 수 있습니다.' },
    { q: '성적서 검토에서 자주 발견되는 “표준 버전 불일치”를 막는 방법으로 가장 적절한 것은?',
      options: ['버전은 생략하고 표준 번호만 적는다', '의뢰서·SOP·계획서·기록지·성적서에 같은 버전이 적혔는지 대조한다', '항상 가장 오래된 버전을 쓴다', '고객이 알아서 확인하게 한다'],
      answer: 1, explain: '문서 간 버전 일치를 대조하는 것이 가장 확실합니다. 버전을 생략하면 어떤 방법으로 시험했는지 알 수 없습니다.' }
  ],
  refs: [
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '7.2 방법의 선정, 검증 및 유효성 확인' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '기술기준·시험방법 고시 (최신 고시 확인)' },
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: 'EN 300 328 등 유럽 무선 표준' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '전파법 및 하위 고시 원문' }
  ]
});

/* ------------------------------------------------------------------
 * 4. 올바른 시험 기록 방법
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-records',
  module: 'process',
  order: 4,
  title: '올바른 시험 기록 방법',
  minutes: 25,
  level: '실무',
  summary: '시험소의 상품은 “믿을 수 있는 데이터”입니다. ALCOA+ 원칙, 원시 데이터, 반드시 기록할 항목, 수기·전자 기록 정정 방법, 유효숫자·단위 표기까지 좋은 예와 나쁜 예로 익힙니다.',
  objectives: [
    'ALCOA+ 기록 원칙 9가지를 설명하고 실제 기록에 적용할 수 있다.',
    '원시 데이터(raw data)가 무엇인지, 왜 보존해야 하는지 안다.',
    '측정 한 건에 대해 빠짐없이 기록해야 할 항목을 안다.',
    '수기 기록 정정, 전자 기록 파일명·백업 규칙, 유효숫자·단위 표기를 올바르게 한다.'
  ],
  body: `
<p>시험이 끝나면 시료는 고객에게 돌아가고, 시험실 셋업은 해체됩니다. 남는 것은 <strong>기록</strong>뿐입니다. 몇 년 뒤 인증기관이 “이 값이 맞습니까?”라고 묻거나, 시장에서 문제가 된 제품의 시험을 재확인할 때, 우리가 가진 유일한 증거는 그때 남긴 기록입니다.
ISO/IEC 17025 7.5(기술 기록)는 기록에 <strong>결과와 보고서, 그리고 결과에 영향을 주는 요인을 식별할 수 있을 만큼 충분한 정보</strong>를 담아, <strong>가능하면 원래와 가까운 조건으로 반복</strong>할 수 있게 하도록 요구합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  좋은 기록의 기준은 하나입니다. <strong>“내가 퇴사한 뒤, 처음 보는 동료가 이 기록만 보고 똑같이 다시 측정할 수 있는가?”</strong> — 그렇다면 좋은 기록입니다.
</div>

<h2>기록의 원칙 ALCOA+</h2>
<p>ALCOA+는 원래 제약·임상 분야의 데이터 무결성(Data Integrity) 원칙이지만, 시험소 기록에도 그대로 들어맞아 널리 쓰입니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 205" role="img" aria-label="ALCOA+ 기록 원칙 9가지">
  <g text-anchor="middle" fill="var(--text)">
    <rect x="14" y="10" width="140" height="84" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="84" y="38" font-size="22" font-weight="700" fill="var(--dg-accent)">A</text>
    <text x="84" y="60" font-size="12.5" font-weight="700">Attributable</text>
    <text x="84" y="80" font-size="12" fill="var(--text-2)">누가 했는지</text>
    <rect x="162" y="10" width="140" height="84" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="232" y="38" font-size="22" font-weight="700" fill="var(--dg-accent)">L</text>
    <text x="232" y="60" font-size="12.5" font-weight="700">Legible</text>
    <text x="232" y="80" font-size="12" fill="var(--text-2)">읽을 수 있게</text>
    <rect x="310" y="10" width="140" height="84" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="380" y="38" font-size="22" font-weight="700" fill="var(--dg-accent)">C</text>
    <text x="380" y="60" font-size="12.5" font-weight="700">Contemporaneous</text>
    <text x="380" y="80" font-size="12" fill="var(--text-2)">그 자리에서 바로</text>
    <rect x="458" y="10" width="140" height="84" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="528" y="38" font-size="22" font-weight="700" fill="var(--dg-accent)">O</text>
    <text x="528" y="60" font-size="12.5" font-weight="700">Original</text>
    <text x="528" y="80" font-size="12" fill="var(--text-2)">원본 그대로</text>
    <rect x="606" y="10" width="140" height="84" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="676" y="38" font-size="22" font-weight="700" fill="var(--dg-accent)">A</text>
    <text x="676" y="60" font-size="12.5" font-weight="700">Accurate</text>
    <text x="676" y="80" font-size="12" fill="var(--text-2)">정확하게</text>

    <rect x="88" y="110" width="140" height="84" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="158" y="138" font-size="22" font-weight="700" fill="var(--dg-accent-2)">+C</text>
    <text x="158" y="160" font-size="12.5" font-weight="700">Complete</text>
    <text x="158" y="180" font-size="12" fill="var(--text-2)">빠짐없이</text>
    <rect x="236" y="110" width="140" height="84" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="306" y="138" font-size="22" font-weight="700" fill="var(--dg-accent-2)">+C</text>
    <text x="306" y="160" font-size="12.5" font-weight="700">Consistent</text>
    <text x="306" y="180" font-size="12" fill="var(--text-2)">일관되게 · 시간순</text>
    <rect x="384" y="110" width="140" height="84" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="454" y="138" font-size="22" font-weight="700" fill="var(--dg-accent-2)">+E</text>
    <text x="454" y="160" font-size="12.5" font-weight="700">Enduring</text>
    <text x="454" y="180" font-size="12" fill="var(--text-2)">오래 보존되게</text>
    <rect x="532" y="110" width="140" height="84" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="602" y="138" font-size="22" font-weight="700" fill="var(--dg-accent-2)">+A</text>
    <text x="602" y="160" font-size="12.5" font-weight="700">Available</text>
    <text x="602" y="180" font-size="12" fill="var(--text-2)">필요할 때 꺼낼 수 있게</text>
  </g>
</svg>
<figcaption>그림 1. ALCOA+ — 기본 5원칙(파랑)과 추가 4원칙(주황)</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>원칙</th><th>뜻</th><th>시험소에서는 이렇게</th></tr></thead>
<tbody>
<tr><td><strong>Attributable</strong> (귀속성)</td><td>누가, 언제 기록·수행했는지 알 수 있어야 함</td><td>시험자 이름/서명, 일시. 측정 SW에 공용 계정 로그인 금지(개인 계정 사용)</td></tr>
<tr><td><strong>Legible</strong> (판독성)</td><td>누구나 읽을 수 있어야 함</td><td>또렷한 글씨, 지워지지 않는 필기구(볼펜). 연필·지워지는 펜 금지</td></tr>
<tr><td><strong>Contemporaneous</strong> (동시성)</td><td>행위 시점에 바로 기록</td><td>측정하면서 기록지에 즉시 기입. 메모지·손바닥에 적었다 옮기기 금지</td></tr>
<tr><td><strong>Original</strong> (원본성)</td><td>처음 기록된 원본(또는 검증된 사본) 보존</td><td>분석기가 저장한 원본 파일·스크린샷 보존. 엑셀로 옮긴 값만 남기면 안 됨</td></tr>
<tr><td><strong>Accurate</strong> (정확성)</td><td>실제 일어난 일과 일치, 오류 없음</td><td>보정값·단위·채널이 맞는지 확인, 계산은 검증된 시트 사용</td></tr>
<tr><td><strong>Complete</strong> (완전성)</td><td>재시험·실패 데이터를 포함해 모두 기록</td><td>“불합격 후 재시험”이면 첫 결과도 남기고 사유 기록</td></tr>
<tr><td><strong>Consistent</strong> (일관성)</td><td>시간 순서·형식이 일관됨</td><td>날짜 형식 통일(예: 2026-09-22), 시간 흐름이 앞뒤 맞음</td></tr>
<tr><td><strong>Enduring</strong> (영속성)</td><td>보관 기간 동안 훼손 없이 유지</td><td>감열지 출력물은 복사 보관, 전자 파일은 백업</td></tr>
<tr><td><strong>Available</strong> (가용성)</td><td>필요할 때 찾아서 볼 수 있음</td><td>시험번호 기준 폴더 체계, 보관 위치 목록</td></tr>
</tbody></table></div>

<h2>원시 데이터(Raw Data)란</h2>
<p><strong>원시 데이터</strong>는 측정 과정에서 <em>처음</em> 생겨난 관측값과 그 기록입니다. 계산·가공·요약하기 <em>전</em>의 데이터입니다.</p>
<ul>
  <li>스펙트럼 분석기 화면 캡처(설정값이 보이는 상태), 트레이스 데이터 파일(.csv 등)</li>
  <li>측정 SW(EMC 자동 측정 SW, SAR 시스템)가 저장한 원본 결과 파일·로그</li>
  <li>수기 기록지에 처음 적은 판독값, 환경 조건, 장비 목록</li>
  <li>셋업 사진, 경로손실(케이블·감쇠기) 측정 데이터</li>
</ul>
<p>성적서의 결과표는 원시 데이터를 <strong>가공한 결과</strong>입니다. 그러므로 성적서의 모든 숫자는 원시 데이터까지 거슬러 올라가 확인(추적)할 수 있어야 합니다.</p>

<div class="callout warn">
  <span class="callout-title">엑셀 시트는 원시 데이터가 아닙니다</span>
  측정값을 손으로 엑셀에 옮겨 적고 원본 캡처를 지웠다면, 옮겨 적다가 생긴 오타를 영원히 찾을 수 없습니다. <strong>원본 파일을 반드시 함께 보관</strong>하고, 계산용 시트는 검증된(수식이 잠긴) 사내 양식을 사용합니다.
</div>

<h2>반드시 기록할 항목</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>항목</th><th>왜 필요한가</th></tr></thead>
<tbody>
<tr><td>식별</td><td>시험번호, 시료 ID, 모델명, 시험 항목</td><td>어떤 시료의 어떤 시험인지 연결</td></tr>
<tr><td>사람 · 시간</td><td>시험자, 시험 일시(시작·종료)</td><td>귀속성, 장비 교정 유효기간과 대조</td></tr>
<tr><td>환경 조건</td><td>온도(℃), 상대습도(%RH), 필요 시 기압·전원 전압</td><td>규정된 환경 범위 안에서 시험했는지 증명</td></tr>
<tr><td>장비</td><td>장비명, 관리번호(자산번호), <strong>교정 유효기간</strong></td><td>교정이 유효한 장비로 측정했음을 증명, 문제 장비 발견 시 영향 추적</td></tr>
<tr><td>설정값</td><td>RBW, VBW, Detector(Peak/RMS/QP/AV), Sweep time, ATT, Ref level, Trace 모드(Max hold 등), 스팬</td><td>설정이 바뀌면 값이 바뀜 — 재현성의 핵심</td></tr>
<tr><td>보정값</td><td>경로손실(케이블+감쇠기), 안테나 계수, 앰프 이득 등 — 값과 적용 주파수</td><td>판독값 → 결과값 계산의 근거</td></tr>
<tr><td>결과</td><td>판독값, 보정 후 결과값, <strong>단위</strong>, 한계값, 마진, 판정</td><td>판정의 근거</td></tr>
<tr><td>특이사항</td><td>이상 현상, 재시험 사유, 이탈 사항, 시료 상태 변화</td><td>나중에 해석이 필요한 사정 설명</td></tr>
</tbody></table></div>

<h2>기록 예시 — 측정 한 건을 완전하게</h2>
<p>아래는 무선랜 2.4 GHz 송신 출력(전도) 측정 1건을 빠짐없이 기록한 예입니다. <em>수치와 한계값, 장비 번호는 교육용 예시</em>입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th colspan="4">시험 기록지 — 송신 출력 (전도)</th></tr></thead>
<tbody>
<tr><td>시험번호</td><td>T26-0412</td><td>시료 ID / 모델</td><td>S26-0412-01 / ABC-1000</td></tr>
<tr><td>시험 일시</td><td>2026-09-22 14:10 ~ 14:55</td><td>시험자</td><td>홍길동 (서명)</td></tr>
<tr><td>환경 조건</td><td>23.4 ℃ / 45 %RH</td><td>전원</td><td>DC 3.85 V (정격, 배터리)</td></tr>
<tr><td>적용 방법</td><td colspan="3">사내 SOP-RF-003 Rev.5 (근거 표준·고시와 버전 기재)</td></tr>
<tr><td>장비 1</td><td>파워미터 / RF-PM-02</td><td>교정 유효기간</td><td>2027-03-15</td></tr>
<tr><td>장비 2</td><td>파워센서 / RF-PS-05</td><td>교정 유효기간</td><td>2027-03-15</td></tr>
<tr><td>장비 3</td><td>감쇠기 10 dB / RF-AT-11, 케이블 / RF-CB-21</td><td>경로손실</td><td>10.35 dB @ 2412 MHz (2026-09-22 측정)</td></tr>
<tr><td>설정</td><td colspan="3">평균 전력(Gated average), 파워미터 오프셋 미적용 → 경로손실 수동 보정</td></tr>
<tr><td>모드 / 채널</td><td>802.11b 1 Mbps / CH 1 (2412 MHz)</td><td>판독값</td><td class="num">8.42 dBm</td></tr>
<tr><td>보정 후 결과</td><td class="num">8.42 + 10.35 = 18.77 dBm</td><td>한계값(예시)</td><td class="num">20.00 dBm</td></tr>
<tr><td>마진 (한계 − 결과)</td><td class="num">1.23 dB</td><td>판정</td><td>적합</td></tr>
<tr><td>원시 데이터</td><td colspan="3">T26-0412_S01_WLAN2G4_11b_CH01_PWR_20260922-1432.png</td></tr>
<tr><td>특이사항</td><td colspan="3">연속 송신 확인(Duty cycle 약 98 %). 그 외 특이사항 없음.</td></tr>
</tbody></table></div>
<p>빈 양식은 <a href="#/forms">양식 · 시험 기록지</a>에서 인쇄할 수 있습니다.</p>

<h2>좋은 기록 vs 나쁜 기록</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예 — 결과만</h4>
    <p>“CH1 출력 18.8 OK”</p>
    <p class="muted">단위? 보정 전/후? 어떤 모드? 어떤 장비? 누가 언제? 한계값은?</p>
  </div>
  <div class="good"><h4>✅ 좋은 예 — 재현 가능</h4>
    <p>“802.11b 1 Mbps, CH1 2412 MHz, 판독 8.42 dBm + 경로손실 10.35 dB = 18.77 dBm, 한계 20.00 dBm, 마진 1.23 dB, 적합 / RF-PS-05(교정 ~2027-03-15) / 23.4 ℃ 45 %RH / 2026-09-22 14:32 홍길동”</p>
  </div>
</div>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예 — 기억에 의존</h4>
    <p>오전에 측정하고 메모지에 적어 두었다가, 퇴근 전에 기록지에 옮겨 적음. 설정값 칸에는 “평소대로”라고 씀.</p>
  </div>
  <div class="good"><h4>✅ 좋은 예 — 동시 기록</h4>
    <p>측정 직후 기록지에 바로 기입, 설정값이 보이도록 화면 캡처 저장, 파일명을 기록지에 적음. “평소대로” 대신 RBW 1 MHz / VBW 3 MHz / Peak / Max hold 등 실제 값 기재.</p>
  </div>
</div>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예 — 실패 기록 삭제</h4>
    <p>첫 측정에서 스퓨리어스가 한계를 넘어 케이블을 다시 체결하고 재측정, 첫 데이터는 삭제.</p>
  </div>
  <div class="good"><h4>✅ 좋은 예 — 전부 남기기</h4>
    <p>첫 결과 보존 + “커넥터 체결 느슨함 발견(14:20), 재체결 후 경로손실 재확인 10.35 dB, 재측정” 기록 → 재측정 결과로 판정. 원인이 시료가 아니라 셋업이었다는 근거가 남음.</p>
  </div>
</div>

<h2>수기 기록 정정 방법</h2>
<p>잘못 적었을 때는 <strong>원래 값이 보이게</strong> 고쳐야 합니다. “무엇이 어떻게, 누가, 언제, 왜 바뀌었는지”가 남아야 하기 때문입니다(ISO/IEC 17025 7.5.2 취지: 기술 기록을 수정할 때 이전 내용과 수정 내용을 모두 추적할 수 있어야 함).</p>
<figure class="diagram">
<svg viewBox="0 0 760 190" role="img" aria-label="수기 기록 정정의 나쁜 예와 좋은 예">
  <g font-size="14" fill="var(--text)">
    <rect x="10" y="10" width="360" height="170" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="190" y="36" text-anchor="middle" font-weight="700" fill="var(--dg-accent-2)">나쁜 예 — 원래 값이 사라짐</text>
    <text x="30" y="80">출력(dBm) :</text>
    <rect x="120" y="62" width="70" height="26" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-muted)"/>
    <text x="155" y="80" text-anchor="middle" font-weight="700">18.71</text>
    <text x="202" y="80" font-size="12" fill="var(--text-3)">← 수정액 위에 덧씀</text>
    <text x="30" y="126">한계(dBm) :</text>
    <text x="120" y="126" font-weight="700">2<tspan fill="var(--dg-accent-2)">5</tspan>.00</text>
    <text x="178" y="126" font-size="12" fill="var(--text-3)">← 숫자 위에 겹쳐 씀</text>
    <text x="190" y="165" text-anchor="middle" font-size="12" fill="var(--text-3)">누가 · 언제 · 왜 고쳤는지 알 수 없음</text>

    <rect x="390" y="10" width="360" height="170" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="570" y="36" text-anchor="middle" font-weight="700" fill="var(--dg-ok)">좋은 예 — 한 줄 긋고 옆에 정정</text>
    <text x="410" y="80">출력(dBm) :</text>
    <text x="500" y="80">18.77</text>
    <line x1="497" y1="75" x2="542" y2="75" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="555" y="80" font-weight="700" fill="var(--dg-accent)">18.71</text>
    <text x="410" y="108" font-size="12.5" fill="var(--dg-accent)">홍길동(서명) 2026-09-22</text>
    <text x="410" y="128" font-size="12.5" fill="var(--dg-accent)">사유: 경로손실 오기 10.35 → 10.29 dB</text>
    <text x="570" y="165" text-anchor="middle" font-size="12" fill="var(--text-3)">원래 값이 읽히고, 정정자 · 날짜 · 사유가 남음</text>
  </g>
</svg>
<figcaption>그림 2. 수기 기록 정정 — 한 줄 긋기 + 정정값 + 서명·날짜 + 사유</figcaption>
</figure>
<ol class="steps">
  <li><strong>한 줄만 긋는다</strong>원래 값이 읽힐 수 있도록 가운데 한 줄. 새까맣게 칠하기, 여러 줄 긋기 금지.</li>
  <li><strong>옆에 정정값을 쓴다</strong>칸이 좁으면 여백이나 특이사항란에 “※1” 같은 표시로 연결합니다.</li>
  <li><strong>서명(또는 이니셜)과 날짜</strong>누가 언제 고쳤는지 남깁니다.</li>
  <li><strong>사유</strong>오기, 계산 오류, 단위 착오 등 짧게라도 반드시 적습니다.</li>
</ol>
<div class="callout danger">
  <span class="callout-title">절대 금지</span>
  수정액·수정테이프, 지우개(연필 기록), 덧쓰기, 기록지를 새로 써서 원본 폐기, 빈칸을 나중에 채우기(쓸 일이 없는 빈칸은 사선을 긋고 “N/A” 또는 “해당 없음”). 심사에서 발견되면 <strong>기록 전체의 신뢰성</strong>을 의심받습니다.
</div>

<h2>전자 기록</h2>
<p>대부분의 측정 데이터는 파일로 생깁니다. 전자 기록은 <em>쉽게 덮어쓰고 지울 수 있기</em> 때문에 규칙이 더 중요합니다.</p>
<ul>
  <li><strong>파일명 규칙</strong> — 시험번호_시료_기술_모드_채널_항목_날짜-시각. 예: <code>T26-0412_S01_WLAN2G4_11b_CH01_PWR_20260922-1432.png</code>. 파일명만 보고도 어떤 측정인지 알 수 있어야 합니다.</li>
  <li><strong>스크린샷 보존</strong> — 측정값뿐 아니라 <em>설정값(RBW/VBW/Detector/ATT/Ref offset)이 화면에 보이는 상태</em>로 캡처합니다. 마커 값이 가려지지 않게 합니다.</li>
  <li><strong>덮어쓰기 금지</strong> — 재측정은 새 파일(예: 끝에 <code>_R1</code>)로 저장합니다. 같은 이름으로 덮어쓰면 첫 결과가 사라집니다.</li>
  <li><strong>원본 폴더와 작업 폴더 분리</strong> — 원본(raw)은 읽기 전용, 가공은 복사본에서 합니다.</li>
  <li><strong>백업</strong> — 측정 PC 로컬에만 두지 말고 정해진 서버에 당일 업로드합니다. 개인 USB 메모리 보관은 분실·악성코드 위험이 있습니다.</li>
  <li><strong>SW 접근 관리</strong> — 측정 SW는 개인 계정으로 로그인하고, 가능하면 감사 추적(Audit trail) 기능을 켭니다. 파일 생성 시각이 증거가 되므로 측정 PC 시계가 정확한지도 확인합니다.</li>
</ul>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예 — 파일명</h4>
    <p><code>캡처.png</code>, <code>새 폴더(3)/1.png</code>, <code>최종_진짜최종.png</code></p>
  </div>
  <div class="good"><h4>✅ 좋은 예 — 파일명</h4>
    <p><code>T26-0412_S01_BLE_1M_CH39_OBW_20260922-1510.png</code><br><code>T26-0412_S01_BLE_1M_CH39_OBW_20260922-1522_R1.png</code> (재측정)</p>
  </div>
</div>

<h2>유효숫자와 단위 표기</h2>
<ul>
  <li><strong>원시 데이터는 장비가 보여준 자릿수 그대로</strong> 기록합니다(예: 8.42 dBm). 중간 계산에서 반올림하지 않고, <strong>최종 결과에서만</strong> 반올림합니다.</li>
  <li>보고 자릿수는 <strong>측정 불확도 수준에 맞춥니다</strong>. 확장 불확도가 ±0.3 dB 수준인데 18.7734 dBm처럼 쓰면 과장된 정밀도입니다. 사내 규칙(예: 0.01 dB 또는 0.1 dB 단위)을 따릅니다.</li>
  <li>숫자와 단위 사이는 <strong>한 칸 띄웁니다</strong>: 18.77 dBm, 2412 MHz, 23.4 ℃.</li>
  <li><strong>대소문자 구분</strong>: kHz(소문자 k), MHz(대문자 M), mW(밀리와트) vs MW(메가와트), dBμV/m, W/kg. 대소문자 한 글자가 10<sup>9</sup>배 차이를 만듭니다.</li>
  <li><strong>dB와 dBm을 구분</strong>: 손실·마진·이득은 dB(상대값), 전력은 dBm(절대값). “마진 1.23 dBm”은 틀린 표기입니다.</li>
  <li><strong>마진의 방향 통일</strong>: 사내에서 “마진 = 한계 − 결과(양수면 여유)”처럼 정의를 정하고, 기록지에 정의를 적어 둡니다.</li>
</ul>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예 — 표기</h4>
    <p>18.77dbm / 2412Mhz / 마진 1.23dBm / 온도 23 / 스퓨리어스 -36.2</p>
  </div>
  <div class="good"><h4>✅ 좋은 예 — 표기</h4>
    <p>18.77 dBm / 2412 MHz / 마진 1.23 dB / 23.4 ℃ / 스퓨리어스 −36.2 dBm (RBW 100 kHz)</p>
  </div>
</div>

<div class="callout tip">
  <span class="callout-title">퇴근 전 3분 셀프 점검</span>
  ① 오늘 기록지에 빈칸이 없는가(쓸 일 없으면 N/A) ② 모든 결과에 단위가 있는가 ③ 원본 파일이 서버에 올라갔는가 ④ 정정한 곳에 서명·날짜·사유가 있는가 ⑤ 사용 장비와 교정 유효기간을 적었는가.
</div>
`,
  quiz: [
    { q: 'ALCOA+ 중 “측정한 그 시점에 바로 기록한다”에 해당하는 원칙은?',
      options: ['Attributable', 'Legible', 'Contemporaneous', 'Enduring'],
      answer: 2, explain: 'Contemporaneous(동시성)는 행위 시점에 즉시 기록하라는 원칙입니다. 메모지에 적었다가 옮겨 적는 것은 위반입니다.' },
    { q: '수기 기록지에서 측정값을 잘못 적었다. 올바른 정정 방법은?',
      options: ['원래 값에 한 줄 긋고 옆에 정정값, 서명·날짜, 사유를 쓴다', '수정액으로 지우고 다시 쓴다', '기록지를 새로 써서 교체하고 원본은 버린다', '원래 숫자 위에 진하게 덧쓴다'],
      answer: 0, explain: '원래 값이 읽힐 수 있어야 하며, 누가·언제·왜 고쳤는지 남겨야 합니다.' },
    { q: '재측정한 스펙트럼 캡처를 저장하는 방법으로 가장 적절한 것은?',
      options: ['첫 캡처와 같은 파일명으로 덮어쓴다', '첫 캡처는 삭제하고 새 캡처만 남긴다', '캡처는 저장하지 않고 값만 적는다', '새 파일명(예: _R1)으로 저장하고 재측정 사유를 기록한다'],
      answer: 3, explain: '덮어쓰기는 원본 손실입니다. 재측정은 별도 파일로 저장하고 사유를 남겨 완전성(Complete)을 지킵니다.' },
    { q: '다음 중 단위 표기가 올바른 것은?',
      options: ['마진 1.23 dBm', '2412 Mhz', '출력 18.77 dBm, 마진 1.23 dB', '100 KHZ'],
      answer: 2, explain: '마진·손실은 상대값이므로 dB, 전력은 dBm. 주파수는 MHz, kHz(소문자 k)로 표기합니다.' },
    { q: '원시 데이터(raw data)에 해당하지 않는 것은?',
      options: ['분석기가 저장한 설정값이 보이는 스크린샷', '성적서에 옮기기 위해 반올림해 정리한 요약표', '측정 SW가 생성한 원본 결과 파일', '측정 중 기록지에 처음 적은 판독값'],
      answer: 1, explain: '요약표는 가공된 결과입니다. 원시 데이터는 처음 생성된 관측값과 그 기록입니다.' }
  ],
  refs: [
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '7.5 기술 기록, 7.11 데이터 관리 및 정보 관리' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '인정 기준·지침 문서' },
    { title: 'JCGM 출판물 (GUM, VIM)', url: 'https://www.bipm.org/en/committees/jc/jcgm/publications', note: '측정 용어(VIM)와 결과 표현의 근거' }
  ]
});

/* ------------------------------------------------------------------
 * 5. 측정 불확도와 판정
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-uncertainty',
  module: 'process',
  order: 5,
  title: '측정 불확도와 판정',
  minutes: 22,
  level: '실무',
  summary: '측정값에는 항상 “±얼마”가 따라옵니다. 불확도의 개념, A형·B형 평가, 합성·확장 불확도, 불확도 예산표, 판정 규칙과 보호대역, 한계 근처 결과 처리를 배웁니다.',
  objectives: [
    '측정 불확도가 무엇이고 오차와 어떻게 다른지 쉽게 설명할 수 있다.',
    'A형·B형 평가와 합성·확장 불확도(k=2)의 의미를 안다.',
    '불확도 예산표를 읽고 주요 기여 요인을 찾을 수 있다.',
    '판정 규칙(단순 수용, 보호대역)에 따라 한계 근처 결과를 판정할 수 있다.'
  ],
  body: `
<p>같은 시료를 같은 장비로 열 번 재면 값이 조금씩 다릅니다. 케이블을 다시 연결하면 또 다릅니다. 파워센서의 교정성적서에도 “±0.1 dB” 같은 값이 적혀 있습니다. 즉 <strong>참값은 정확히 알 수 없고</strong>, 우리가 말할 수 있는 것은 “참값이 <em>이 범위 안에</em> 있을 가능성이 높다”는 것뿐입니다. 그 범위의 크기를 나타내는 것이 <strong>측정 불확도(Measurement Uncertainty)</strong>입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  체중계에 올라가 70.2 kg이 나왔을 때, “정확히 70.2 kg”이 아니라 “<strong>70.2 kg ± 0.3 kg 정도</strong>”라고 말하는 것이 정직합니다. 그 ±0.3이 불확도입니다. 오차(Error)는 “참값과 얼마나 다른가”인데 참값을 모르니 알 수 없고, 불확도는 “이 결과를 얼마나 <em>의심해야 하는가</em>”를 수치로 나타낸 것입니다.
</div>

<h2>불확도를 그림으로</h2>
<figure class="diagram">
<svg viewBox="0 0 760 280" role="img" aria-label="정규분포와 표준불확도, 확장불확도">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <path d="M220,200 L220,179.7 L240,167.6 L260,151.3 L280,131.3 L300,109 L320,86.8 L340,67.6 L360,54.6 L380,50 L400,54.6 L420,67.6 L440,86.8 L460,109 L480,131.3 L500,151.3 L520,167.6 L540,179.7 L540,200 Z" fill="var(--dg-fill-2)" stroke="none"/>
    <path d="M300,200 L300,109 L320,86.8 L340,67.6 L360,54.6 L380,50 L400,54.6 L420,67.6 L440,86.8 L460,109 L460,200 Z" fill="var(--dg-accent)" fill-opacity="0.18" stroke="none"/>
    <path d="M140,198.3 L160,196.6 L180,193.4 L200,188.1 L220,179.7 L240,167.6 L260,151.3 L280,131.3 L300,109 L320,86.8 L340,67.6 L360,54.6 L380,50 L400,54.6 L420,67.6 L440,86.8 L460,109 L480,131.3 L500,151.3 L520,167.6 L540,179.7 L560,188.1 L580,193.4 L600,196.6 L620,198.3" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
    <line x1="120" y1="200" x2="640" y2="200" stroke="var(--dg-line)" stroke-width="1.2"/>
    <line x1="380" y1="40" x2="380" y2="200" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <text x="380" y="30" font-weight="700">측정값 (최선 추정값)</text>
    <g stroke="var(--dg-accent)" stroke-width="1.4">
      <line x1="300" y1="220" x2="460" y2="220"/><line x1="300" y1="214" x2="300" y2="226"/><line x1="460" y1="214" x2="460" y2="226"/>
    </g>
    <text x="380" y="238" font-size="12.5" fill="var(--dg-accent)">± u (표준불확도) — 약 68 %</text>
    <g stroke="var(--dg-line)" stroke-width="1.4">
      <line x1="220" y1="252" x2="540" y2="252"/><line x1="220" y1="246" x2="220" y2="258"/><line x1="540" y1="246" x2="540" y2="258"/>
    </g>
    <text x="380" y="272" font-size="12.5">± U = ± k·u (확장불확도, k = 2) — 약 95 %</text>
    <g text-anchor="start" font-size="12.5" fill="var(--text-2)">
      <text x="565" y="80">참값이 있을 법한 범위를</text>
      <text x="565" y="98">확률 분포로 표현</text>
      <text x="565" y="130">종 모양(정규분포)의</text>
      <text x="565" y="148">폭 = 불확도의 크기</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 측정값 주변의 확률 분포 — ±u 범위에 약 68 %, ±2u 범위에 약 95 %가 들어감(정규분포 가정)</figcaption>
</figure>

<h2>A형 평가와 B형 평가</h2>
<div class="card-grid">
  <div class="card"><h3>A형 (Type A)</h3><p><strong>반복 측정의 통계</strong>로 구합니다. 같은 조건에서 n번 측정해 표준편차 s를 구하고, 평균값을 결과로 쓴다면 표준불확도 = s/√n. 예: 케이블 재연결 10회 반복 측정의 흩어짐.</p></div>
  <div class="card"><h3>B형 (Type B)</h3><p><strong>통계 이외의 정보</strong>로 구합니다. 교정성적서의 불확도, 제조사 사양(정확도 ±x), 과거 경험, 문헌값 등. 분포 모양(정규·직사각형·U자형)에 맞는 제수로 나눠 표준불확도로 바꿉니다.</p></div>
</div>
<div class="table-wrap"><table class="data">
<thead><tr><th>정보의 형태</th><th>가정하는 분포</th><th>표준불확도로 바꾸는 법</th></tr></thead>
<tbody>
<tr><td>교정성적서 “U = 0.10 dB (k=2)”</td><td>정규분포</td><td>0.10 / 2 = 0.05 dB</td></tr>
<tr><td>사양서 “±a” (범위 안 어디든 같은 확률)</td><td>직사각형(균일)</td><td>a / √3</td></tr>
<tr><td>부정합(Mismatch)</td><td>U자형</td><td>a / √2</td></tr>
<tr><td>반복 측정 n회 (평균 사용)</td><td>(A형)</td><td>s / √n</td></tr>
</tbody></table></div>

<h2>합성 불확도와 확장 불확도</h2>
<p>여러 요인의 표준불확도를 서로 독립이라고 보고 <strong>제곱합의 제곱근(RSS, Root Sum of Squares)</strong>으로 합칩니다. 이것이 <strong>합성 표준불확도 u<sub>c</sub></strong>입니다. 그리고 약 95 % 신뢰 수준의 범위를 말하기 위해 포함인자 <strong>k = 2</strong>를 곱한 것이 <strong>확장 불확도 U</strong>입니다.</p>
<div class="formula">u<sub>c</sub> = √( u<sub>1</sub>² + u<sub>2</sub>² + … + u<sub>n</sub>² ) &nbsp;&nbsp;&nbsp; U = k · u<sub>c</sub> (k = 2, 약 95 %)</div>
<p class="muted">dB 단위 요인을 그대로 RSS로 합치는 것은 작은 값에서의 근사입니다. RF·EMC 분야에서 널리 쓰이는 실무 방법이지만, 엄밀한 처리는 GUM과 사내 불확도 절차를 따릅니다.</p>

<h2>불확도 예산표 예시 — RF 전도 출력 측정</h2>
<p>아래 수치는 <strong>설명을 위한 예시</strong>입니다. 실제 값은 우리 시험소의 장비 교정성적서와 검증 데이터로 산출해야 합니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>요인</th><th>유형</th><th class="num">값 (dB)</th><th>분포</th><th class="num">제수</th><th class="num">표준불확도 u (dB)</th></tr></thead>
<tbody>
<tr><td>파워센서 교정 (교정성적서, k=2)</td><td>B</td><td class="num">0.10</td><td>정규</td><td class="num">2</td><td class="num">0.050</td></tr>
<tr><td>부정합(Mismatch) — 시료·센서 반사</td><td>B</td><td class="num">0.15</td><td>U자형</td><td class="num">√2</td><td class="num">0.106</td></tr>
<tr><td>케이블·감쇠기 경로손실 측정 (k=2)</td><td>B</td><td class="num">0.10</td><td>정규</td><td class="num">2</td><td class="num">0.050</td></tr>
<tr><td>파워센서 선형성</td><td>B</td><td class="num">0.05</td><td>직사각형</td><td class="num">√3</td><td class="num">0.029</td></tr>
<tr><td>온도 영향</td><td>B</td><td class="num">0.05</td><td>직사각형</td><td class="num">√3</td><td class="num">0.029</td></tr>
<tr><td>반복성 (재연결 10회, s/√n)</td><td>A</td><td class="num">—</td><td>정규</td><td class="num">—</td><td class="num">0.040</td></tr>
<tr><td colspan="5"><strong>합성 표준불확도 u<sub>c</sub></strong></td><td class="num"><strong>0.140</strong></td></tr>
<tr><td colspan="5"><strong>확장 불확도 U (k = 2, 약 95 %)</strong></td><td class="num"><strong>0.28</strong></td></tr>
</tbody></table></div>
<div class="callout tip">
  <span class="callout-title">예산표에서 “가장 큰 요인”을 찾으세요</span>
  위 예에서는 <strong>부정합</strong>이 가장 큰 기여 요인입니다. 불확도를 줄이고 싶다면 센서 앞에 정합이 좋은 감쇠기를 넣는 식으로 가장 큰 요인부터 공략합니다. RSS 특성상 작은 요인을 줄여 봐야 전체는 거의 줄지 않습니다.
</div>

<h2>판정 규칙(Decision Rule)</h2>
<p>측정값이 한계값에서 멀리 떨어져 있으면 판정이 쉽습니다. 문제는 <strong>한계값 근처</strong>입니다. 측정값은 한계 이하인데 불확도 범위가 한계를 걸치면, 참값은 한계를 넘었을 수도 있습니다. 이때 어떻게 판정할지 미리 정한 규칙이 <strong>판정 규칙</strong>입니다.</p>
<ul>
  <li>ISO/IEC 17025 <strong>7.1.3</strong>: 고객이 규격·표준에 대한 적합성 판정을 요청하면, 규격·표준 및 판정 규칙을 명확히 정의하고(규격·표준에 이미 정해져 있지 않으면) 선택한 판정 규칙을 <strong>고객에게 알리고 합의</strong>해야 합니다.</li>
  <li>ISO/IEC 17025 <strong>7.8.6</strong>: 적합성 판정을 보고할 때는 사용한 판정 규칙을 문서화하고, 판정이 어느 결과에 적용되는지, 어떤 규격을 충족/불충족했는지 명확히 해야 합니다.</li>
  <li>국제 지침으로 <strong>ILAC-G8</strong>(판정 규칙과 적합성 판정에 관한 지침)이 널리 참조됩니다.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 760 305" role="img" aria-label="판정 규칙과 보호대역의 네 가지 경우">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="190" y="120" width="520" height="40" fill="var(--dg-accent-2)" fill-opacity="0.15"/>
    <line x1="190" y1="120" x2="710" y2="120" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <line x1="190" y1="160" x2="710" y2="160" stroke="var(--dg-ok)" stroke-width="1.5" stroke-dasharray="6 4"/>
    <line x1="190" y1="10" x2="190" y2="250" stroke="var(--dg-line)"/>
    <text x="180" y="20" text-anchor="end" fill="var(--text-3)">값 ↑ (클수록 나쁨)</text>
    <text x="180" y="124" text-anchor="end" font-weight="700" fill="var(--dg-accent-2)">한계값 (Limit)</text>
    <text x="180" y="145" text-anchor="end" fill="var(--text-2)">보호대역 w = U</text>
    <text x="180" y="170" text-anchor="end" fill="var(--dg-ok)">합격 판정 한계</text>
    <text x="180" y="186" text-anchor="end" fill="var(--dg-ok)">(한계 − U)</text>

    <g stroke="var(--dg-line)" stroke-width="1.6">
      <line x1="260" y1="165" x2="260" y2="245"/><line x1="252" y1="165" x2="268" y2="165"/><line x1="252" y1="245" x2="268" y2="245"/>
      <line x1="385" y1="105" x2="385" y2="185"/><line x1="377" y1="105" x2="393" y2="105"/><line x1="377" y1="185" x2="393" y2="185"/>
      <line x1="510" y1="60" x2="510" y2="140"/><line x1="502" y1="60" x2="518" y2="60"/><line x1="502" y1="140" x2="518" y2="140"/>
      <line x1="635" y1="20" x2="635" y2="100"/><line x1="627" y1="20" x2="643" y2="20"/><line x1="627" y1="100" x2="643" y2="100"/>
    </g>
    <circle cx="260" cy="205" r="6" fill="var(--dg-ok)"/>
    <circle cx="385" cy="145" r="6" fill="var(--dg-accent)"/>
    <circle cx="510" cy="100" r="6" fill="var(--dg-accent-2)"/>
    <circle cx="635" cy="60" r="6" fill="var(--dg-accent-2)"/>
    <text x="260" y="270" font-weight="700">A. 합격</text>
    <text x="260" y="288" fill="var(--text-3)">U 포함해도 한계 이하</text>
    <text x="385" y="270" font-weight="700">B. 단순 수용: 합격</text>
    <text x="385" y="288" fill="var(--text-3)">보호대역 적용: 합격 아님</text>
    <text x="510" y="270" font-weight="700">C. 불합격</text>
    <text x="510" y="288" fill="var(--text-3)">측정값이 한계 초과</text>
    <text x="635" y="270" font-weight="700">D. 불합격</text>
    <text x="635" y="288" fill="var(--text-3)">U 포함해도 한계 초과</text>
  </g>
</svg>
<figcaption>그림 2. 점 = 측정값, 막대 = ±U. 판정 규칙에 따라 B의 판정이 달라집니다 (방출·출력처럼 “상한” 한계인 경우)</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>판정 규칙</th><th>방법</th><th>특징</th></tr></thead>
<tbody>
<tr><td>단순 수용 (Simple acceptance, 위험 공유)</td><td>측정값 ≤ 한계 → 합격 (불확도가 일정 수준 이하임을 전제로 하거나 별도 보고)</td><td>많은 규격이 이 방식을 전제로 함. 한계 근처의 “잘못된 합격” 위험을 시험소·고객이 나눠 가짐</td></tr>
<tr><td>보호대역 (Guard band) 적용</td><td>측정값 ≤ (한계 − w) → 합격. 흔히 w = U</td><td>잘못된 합격 위험이 작음(정규분포·k=2 가정 시 약 2.5 % 이하). 대신 한계 근처 제품은 합격 판정을 받기 어려움</td></tr>
</tbody></table></div>

<h2>한계 근처 결과 처리</h2>
<ol class="steps">
  <li><strong>먼저 셋업을 의심</strong>경로손실 값, 케이블 체결, 설정값(RBW·Detector), 시험 모드(정말 최대 출력인지)를 재확인합니다.</li>
  <li><strong>재현성 확인</strong>재측정해 값이 재현되는지 봅니다. 처음 값과 재측정 값은 모두 기록합니다.</li>
  <li><strong>합의된 판정 규칙 적용</strong>계약 검토에서 합의한 규칙대로 판정합니다. 결과를 보고 나서 규칙을 바꾸면 안 됩니다.</li>
  <li><strong>성적서에 명시</strong>판정 규칙과, 필요 시 불확도 값을 보고합니다. 불확도가 결과의 유효성·적용에 영향을 주거나 고객이 요청하거나 판정에 영향을 주면 불확도를 결과와 함께 적습니다(7.8.3.1 취지).</li>
</ol>

<h2>EMC의 경우 — CISPR 16-4-2 개념</h2>
<p>EMC 방출 시험에서는 <strong>CISPR 16-4-2</strong>가 측정 종류(전도, 방사 등)·주파수 범위별로 시험소 측정 불확도의 기준값 <strong>U<sub>cispr</sub></strong>를 정해 둡니다. 개념은 다음과 같습니다.</p>
<ul>
  <li>우리 시험소 불확도 U<sub>lab</sub> ≤ U<sub>cispr</sub> 이면: 측정값을 <strong>그대로</strong> 한계값과 비교합니다.</li>
  <li>U<sub>lab</sub> &gt; U<sub>cispr</sub> 이면: 측정값에 <strong>(U<sub>lab</sub> − U<sub>cispr</sub>)</strong>만큼을 더한 값으로 한계와 비교합니다. 즉 불확도가 큰 시험소는 불리해집니다.</li>
</ul>
<p class="muted">U<sub>cispr</sub>의 구체적인 값은 표준 판(edition)마다 다를 수 있으므로 반드시 최신 CISPR 16-4-2 원문과 해당 제품 표준의 규정을 확인하세요.</p>

<div class="callout warn">
  <span class="callout-title">흔한 오해</span>
  “불확도가 작을수록 좋은 시험소니까 작게 <em>적자</em>”는 절대 안 됩니다. 불확도는 근거(교정성적서, 반복 측정 데이터)로 산출해야 하며 심사에서 근거를 요구받습니다. 또 장비 교체·셋업 변경 시에는 불확도 예산을 <strong>다시 평가</strong>해야 합니다.
</div>
`,
  quiz: [
    { q: '교정성적서에 “U = 0.20 dB (k = 2)”로 적혀 있다. 불확도 예산에 넣을 표준불확도는?',
      options: ['0.20 dB', '0.40 dB', '0.115 dB', '0.10 dB'],
      answer: 3, explain: '확장불확도를 포함인자 k=2로 나누면 표준불확도 0.10 dB가 됩니다.' },
    { q: '반복 측정의 표준편차로 불확도를 구하는 평가 방법은?',
      options: ['A형 평가', 'B형 평가', '보호대역 평가', 'CISPR 평가'],
      answer: 0, explain: '통계적 방법(반복 측정)은 A형, 교정성적서·사양서 등 그 밖의 정보는 B형입니다.' },
    { q: '보호대역(w = U)을 적용하는 판정 규칙에서, 측정값이 한계값보다 작지만 (한계 − U)보다 크다면?',
      options: ['합격', '측정값을 한계값으로 바꿔 적는다', '합격으로 판정할 수 없음', '불확도를 줄여 다시 계산한다'],
      answer: 2, explain: '보호대역 규칙에서는 측정값이 (한계 − w) 이하여야 합격입니다. 그림 2의 B 경우입니다.' },
    { q: '판정 규칙에 대한 설명으로 옳은 것은?',
      options: ['결과를 본 뒤 유리한 규칙을 고른다', '고객 요청 시 적합성 판정의 규칙을 사전에 명확히 하고 합의한다', '판정 규칙은 성적서에 적지 않는다', '불확도는 판정과 관계가 없다'],
      answer: 1, explain: 'ISO/IEC 17025 7.1.3·7.8.6에 따라 판정 규칙은 사전에 합의하고, 적합성 판정 보고 시 사용한 규칙을 명확히 합니다.' },
    { q: 'CISPR 16-4-2 개념에서 우리 시험소 불확도(U_lab)가 기준값(U_cispr)보다 클 때의 처리로 옳은 것은?',
      options: ['측정값을 그대로 한계와 비교한다', '측정값에서 U_lab를 뺀다', '시험을 할 수 없다', '측정값에 (U_lab − U_cispr)를 더해 한계와 비교한다'],
      answer: 3, explain: '시험소 불확도가 기준값보다 크면 그 초과분만큼 측정값에 더해 불리하게 비교합니다.' }
  ],
  refs: [
    { title: 'JCGM 출판물 (GUM: JCGM 100 등)', url: 'https://www.bipm.org/en/committees/jc/jcgm/publications', note: '측정 불확도 표현 지침(GUM), VIM — 무료 공개' },
    { title: 'ILAC', url: 'https://ilac.org', note: 'ILAC-G8 판정 규칙 지침 등' },
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '7.6 측정 불확도 평가, 7.1.3·7.8.6 판정 규칙' },
    { title: 'IEC Webstore', url: 'https://webstore.iec.ch', note: 'CISPR 16-4-2 (EMC 측정 불확도)' }
  ]
});

/* ------------------------------------------------------------------
 * 6. 시험성적서 구성과 작성 (+ 품질)
 * ------------------------------------------------------------------ */
COURSE.addLesson({
  id: 'process-report',
  module: 'process',
  order: 6,
  title: '시험성적서 구성과 작성',
  minutes: 24,
  level: '실무',
  summary: 'ISO/IEC 17025 7.8 기준 성적서 필수 항목, 목차와 결과표 작성, 수정 성적서, 흔한 오류와 검토 체크리스트, 그리고 결과를 믿게 해 주는 품질 활동(교정·소급성·숙련도시험·부적합 관리·기밀 유지)을 배웁니다.',
  objectives: [
    '시험성적서에 반드시 들어가야 할 항목을 나열할 수 있다.',
    '결과표·셋업 사진·이탈 사항을 올바르게 작성할 수 있다.',
    '수정(개정) 성적서 발행 방법과 흔한 오류를 안다.',
    '교정·소급성·중간점검·숙련도시험·부적합 업무 관리의 의미를 안다.'
  ],
  body: `
<p>시험성적서(Test Report)는 시험소가 세상에 내놓는 <strong>최종 제품</strong>입니다. 고객은 이것을 인증기관에 제출하고, 인증기관은 이것을 근거로 판단합니다. 성적서에 오타 하나가 있어도 인증이 보완 요청을 받거나, 이미 발급된 인증서를 정정해야 하는 큰 일이 됩니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  성적서는 시험의 <strong>“여권”</strong>입니다. 누가(시험소), 누구의(의뢰자·시료) 무엇을(항목), 어떤 방법으로(표준·버전), 언제(시험일), 어떤 결과(값·단위·판정)였는지, 누가 보증하는지(승인자 서명)가 빠짐없이 적혀 있어야 국경(인증기관)을 통과합니다.
</div>

<h2>성적서 필수 항목 (ISO/IEC 17025 7.8 기준)</h2>
<p>ISO/IEC 17025 7.8.2.1은 성적서에 (시험소가 타당한 사유로 생략하는 경우를 제외하고) 다음 정보를 포함하도록 요구합니다. 쉽게 풀어 정리했습니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>설명 · 주의점</th></tr></thead>
<tbody>
<tr><td>제목</td><td>“시험성적서(Test Report)” 등</td></tr>
<tr><td>시험기관 이름과 주소</td><td>시험을 수행한 장소가 본사와 다르면(현장 시험, 분원) 수행 장소도</td></tr>
<tr><td>고유 식별번호</td><td>성적서 번호가 <strong>모든 페이지</strong>에 있고, 성적서의 <strong>끝을 명확히</strong> 알 수 있어야 함 → 페이지 번호 “n / 총 m”, “- 끝 -” 표시</td></tr>
<tr><td>의뢰자 이름과 연락처</td><td>상호 오타 주의 — 인증 신청서와 일치해야 함</td></tr>
<tr><td>시험 방법</td><td>표준 번호와 <strong>버전(발행 연도)</strong>, 사내 방법이면 식별 정보</td></tr>
<tr><td>시료 정보</td><td>모델명, 시리얼, HW/SW 버전, 상태 설명, 명확한 식별</td></tr>
<tr><td>시료 수령일</td><td>결과의 유효성에 중요할 때는 샘플링 날짜도</td></tr>
<tr><td>시험일</td><td>시험 수행 날짜(기간)</td></tr>
<tr><td>발행일</td><td>성적서 발행 날짜</td></tr>
<tr><td>결과와 단위</td><td>측정값·단위·한계값·판정, 필요 시 불확도</td></tr>
<tr><td>결과는 시험한 시료에만 해당한다는 문구</td><td>“본 결과는 시험한 시료에 한함” 등</td></tr>
<tr><td>방법에 대한 추가 · 이탈 · 제외</td><td><a href="#/l/process-test-plan">이탈 처리</a> 결과를 여기에 기재</td></tr>
<tr><td>승인자 식별 (서명)</td><td>성적서를 승인한 사람의 이름·직위·서명(전자서명 포함)</td></tr>
<tr><td>외부 제공자 결과 표시</td><td>다른 시험소에 맡긴 항목이 있으면 명확히 구분</td></tr>
<tr><td>적합성 판정 시 판정 규칙</td><td>7.8.6 — 사용한 <a href="#/l/process-uncertainty">판정 규칙</a> 명시</td></tr>
</tbody></table></div>

<div class="callout warn">
  <span class="callout-title">인정 마크(KOLAS 등) 사용 조건</span>
  인정 마크나 “공인 성적서” 표시는 <strong>인정받은 범위(시험 분야·표준·버전)</strong> 안의 결과에만 쓸 수 있습니다. 한 성적서 안에 인정 범위 밖 항목이 섞이면 그 항목을 <strong>“비인정 항목”</strong> 등으로 명확히 구분해야 합니다. 구체적인 표시 방법은 인정기구의 인정마크 사용 규정과 사내 규정을 따릅니다.
</div>

<h2>성적서 첫 장은 이렇게 생겼습니다</h2>
<figure class="diagram">
<svg viewBox="0 0 760 420" role="img" aria-label="시험성적서 첫 페이지 구성 예시">
  <g font-size="12.5" fill="var(--text)">
    <rect x="40" y="10" width="300" height="400" rx="4" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <rect x="52" y="22" width="140" height="30" rx="4" fill="var(--dg-fill-2)" stroke="var(--dg-muted)"/>
    <text x="122" y="42" text-anchor="middle">시험기관 명칭 · 주소</text>
    <rect x="262" y="20" width="66" height="34" rx="4" fill="none" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
    <text x="295" y="41" text-anchor="middle" font-size="11" fill="var(--dg-accent)">인정 마크</text>
    <text x="190" y="88" text-anchor="middle" font-size="17" font-weight="700">시험성적서</text>
    <text x="190" y="108" text-anchor="middle" font-size="11.5" fill="var(--text-3)">Test Report</text>
    <text x="60" y="134" font-weight="700" fill="var(--dg-accent-2)">성적서 번호: R26-0412-01</text>
    <g stroke="var(--dg-muted)"><line x1="56" y1="148" x2="324" y2="148"/><line x1="56" y1="174" x2="324" y2="174"/><line x1="56" y1="200" x2="324" y2="200"/><line x1="56" y1="226" x2="324" y2="226"/><line x1="56" y1="252" x2="324" y2="252"/><line x1="56" y1="278" x2="324" y2="278"/><line x1="146" y1="148" x2="146" y2="278"/></g>
    <text x="62" y="166">의뢰자</text><text x="152" y="166" fill="var(--text-2)">(주)예시전자 / 주소</text>
    <text x="62" y="192">시료</text><text x="152" y="192" fill="var(--text-2)">ABC-1000 / S/N / SW</text>
    <text x="62" y="218">수령일·시험일</text><text x="152" y="218" fill="var(--text-2)">09-01 / 09-15~09-22</text>
    <text x="62" y="244">시험 방법</text><text x="152" y="244" fill="var(--text-2)">표준 번호 + 버전</text>
    <text x="62" y="270">결과 요약</text><text x="152" y="270" fill="var(--dg-ok)" font-weight="700">적합 (세부 p.5~)</text>
    <text x="60" y="310" fill="var(--text-2)">작성자 ________</text>
    <text x="200" y="310" fill="var(--text-2)">승인자 ________</text>
    <text x="60" y="340" font-size="11" fill="var(--text-3)">본 결과는 시험한 시료에 한함 (등 고지 문구)</text>
    <line x1="52" y1="380" x2="328" y2="380" stroke="var(--dg-muted)"/>
    <text x="60" y="398" font-size="11.5" fill="var(--text-2)">R26-0412-01</text>
    <text x="320" y="398" font-size="11.5" text-anchor="end" font-weight="700" fill="var(--dg-accent-2)">1 / 32</text>

    <g stroke="var(--dg-muted)" stroke-dasharray="3 3" fill="none">
      <path d="M328 37 L 400 37"/><path d="M250 130 L 400 90"/><path d="M324 190 L 400 150"/><path d="M324 244 L 400 210"/><path d="M290 306 L 400 270"/><path d="M322 393 L 400 330"/>
    </g>
    <g font-size="12.5">
      <text x="408" y="34" font-weight="700">① 인정 마크</text><text x="408" y="52" fill="var(--text-3)">인정 범위 항목에만. 비인정 항목은 구분 표시</text>
      <text x="408" y="88" font-weight="700">② 고유 식별번호</text><text x="408" y="106" fill="var(--text-3)">모든 페이지 머리말/꼬리말에 반복</text>
      <text x="408" y="148" font-weight="700">③ 의뢰자 · 시료 정보</text><text x="408" y="166" fill="var(--text-3)">인증 신청서·제품 라벨과 글자 하나까지 일치</text>
      <text x="408" y="208" font-weight="700">④ 시험 방법과 버전</text><text x="408" y="226" fill="var(--text-3)">본문 결과 페이지의 버전과도 일치</text>
      <text x="408" y="268" font-weight="700">⑤ 승인자 서명</text><text x="408" y="286" fill="var(--text-3)">작성자와 다른 권한자</text>
      <text x="408" y="328" font-weight="700">⑥ 페이지 “n / 총 m”</text><text x="408" y="346" fill="var(--text-3)">성적서의 끝을 알 수 있게 (페이지 누락 방지)</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 성적서 첫 페이지 구성 예시 — 실제 서식은 시험소와 인증 제도마다 다릅니다</figcaption>
</figure>

<h2>성적서 목차 예시 (무선 시험)</h2>
<ol>
  <li>표지 · 성적서 요약(의뢰자, 시료, 적용 표준, 결과 요약, 서명)</li>
  <li>개정 이력(Revision history)</li>
  <li>시험기관 정보(명칭, 주소, 인정·지정 번호, 시험 장소)</li>
  <li>시료 정보(모델, 시리얼, HW/SW 버전, 정격, 안테나 종류·이득, 지원 대역·모드, 부속품)</li>
  <li>시험 조건(환경 조건, 전원, 시험 모드, 시험 구성)</li>
  <li>시험 결과 요약표(항목별 적용 조항, 판정)</li>
  <li>항목별 시험 결과(방법, 셋업, 설정값, 결과표, 스펙트럼 그림)</li>
  <li>측정 불확도, 판정 규칙</li>
  <li>사용 장비 목록(관리번호, 교정일·유효기간)</li>
  <li>부록: 셋업 사진, 시료 외관 사진, 이탈 사항 · “- 끝 -”</li>
</ol>

<h2>결과표 작성 예시</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>모드</th><th>채널</th><th class="num">주파수 (MHz)</th><th class="num">결과 (dBm)</th><th class="num">한계 (dBm)</th><th class="num">마진 (dB)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>802.11b</td><td>1</td><td class="num">2412</td><td class="num">18.77</td><td class="num">20.00</td><td class="num">1.23</td><td>적합</td></tr>
<tr><td>802.11b</td><td>6</td><td class="num">2437</td><td class="num">18.52</td><td class="num">20.00</td><td class="num">1.48</td><td>적합</td></tr>
<tr><td>802.11b</td><td>11</td><td class="num">2462</td><td class="num">18.31</td><td class="num">20.00</td><td class="num">1.69</td><td>적합</td></tr>
</tbody></table></div>
<p class="muted">결과 = 판독값 + 경로손실, 마진 = 한계 − 결과. 한계값은 교육용 예시이며 실제 한계는 적용 기술기준을 따릅니다. 이처럼 표 아래에 계산식·정의를 적어 두면 검토자와 인증기관이 쉽게 이해합니다.</p>
<ul>
  <li>표 머리에 <strong>단위</strong>를 넣으면 칸마다 반복하지 않아도 됩니다. 단, 한 열 안에서 단위가 섞이면 안 됩니다.</li>
  <li>숫자는 오른쪽(또는 소수점) 정렬, 자릿수 통일.</li>
  <li>스펙트럼 그림은 <strong>원시 데이터의 캡처를 그대로</strong> 넣고, 그림 번호와 채널·모드를 캡션에 적습니다.</li>
</ul>

<h2>셋업 사진</h2>
<ul>
  <li>시료, 안테나/프로브, 케이블 배치, 테이블 높이가 알아볼 수 있게 <strong>전체 + 근접</strong> 두 장 이상.</li>
  <li>방사 시험은 시료 방향(0°/90° 등), 안테나 편파, 거리 정보를 캡션에 적습니다.</li>
  <li>배경에 다른 고객의 시료나 모델명이 보이지 않게 합니다(<strong>기밀 유지</strong>).</li>
</ul>

<h2>수정 성적서(개정 발행)</h2>
<p>발행된 성적서에 오류가 발견되거나 고객이 정보 변경(예: 파생 모델명 추가)을 요청하면, 기존 성적서 파일을 몰래 고쳐 다시 보내면 안 됩니다. ISO/IEC 17025 7.8.8은 발행된 성적서의 변경을 다음과 같은 취지로 처리하도록 합니다.</p>
<ol class="steps">
  <li><strong>변경 내용을 명확히 식별</strong>변경·수정·재발행되는 정보는 명확히 식별되고, 필요하면 변경 사유를 성적서에 포함합니다.</li>
  <li><strong>추가 문서 또는 새 성적서</strong>발행 후 변경은 “성적서 번호 ○○에 대한 수정” 같은 추가 문서로 하거나, 전체를 새 성적서로 재발행합니다.</li>
  <li><strong>새 번호와 원본 참조</strong>새 성적서는 고유하게 식별되고(예: R26-0412-01 → R26-0412-01-R1), 대체하는 <strong>원본 번호를 참조</strong>해야 합니다.</li>
  <li><strong>기존본 관리</strong>원본 사본과 개정 이력을 보관하고, 필요하면 고객에게 원본이 대체되었음을 알립니다.</li>
</ol>

<h2>흔한 오류 TOP 7</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>오류</th><th>예</th><th>예방법</th></tr></thead>
<tbody>
<tr><td>모델명 · 상호 오타</td><td>ABC-1000 ↔ ABC-100O(영문 O)</td><td>제품 라벨 사진·신청서에서 <strong>복사해 붙여넣기</strong>, 검토 시 글자 대조</td></tr>
<tr><td>단위 누락 · 오류</td><td>“마진 1.23 dBm”, 단위 없는 표</td><td>표 머리 단위 확인</td></tr>
<tr><td>표준 버전 불일치</td><td>표지는 최신판, 본문은 구판</td><td>버전 문자열을 문서 전체에서 검색</td></tr>
<tr><td>원시 데이터와 불일치</td><td>기록지 18.77, 성적서 18.71</td><td>검토자가 원시 데이터와 대조(사내 규정 범위)</td></tr>
<tr><td>복사 · 붙여넣기 흔적</td><td>이전 고객명, 다른 모델의 그림</td><td>템플릿 사용 후 이전 고객명·모델명 검색</td></tr>
<tr><td>장비 교정 만료</td><td>시험일에 교정이 만료된 장비 기재</td><td>장비 목록의 유효기간과 시험일 대조</td></tr>
<tr><td>페이지 누락 · 번호 오류</td><td>“5 / 32” 다음이 “7 / 32”</td><td>PDF 변환 후 최종본으로 페이지 확인</td></tr>
</tbody></table></div>

<h2>검토 체크리스트</h2>
<ul>
  <li>☐ 성적서 번호가 모든 페이지에 있고 “n / 총 m”이 맞는가</li>
  <li>☐ 의뢰자·모델명·시리얼·버전이 의뢰서·시료 라벨과 일치하는가</li>
  <li>☐ 적용 표준과 버전이 의뢰 검토 내용, 인정 범위와 일치하는가</li>
  <li>☐ 시험 매트릭스의 모든 모드·채널·항목 결과가 있는가</li>
  <li>☐ 결과값이 원시 데이터와 일치하고, 보정값이 맞게 적용되었는가</li>
  <li>☐ 모든 값에 단위가 있고 한계값·판정이 맞는가</li>
  <li>☐ 이탈·추가·제외 사항, 판정 규칙, 필요 시 불확도가 기재되었는가</li>
  <li>☐ 사용 장비가 시험일 기준으로 교정 유효한가</li>
  <li>☐ 인정 마크가 인정 범위 항목에만 쓰였는가</li>
  <li>☐ 셋업 사진이 있고 다른 고객 정보가 노출되지 않는가</li>
  <li>☐ 작성자 ≠ 승인자, 서명·날짜가 있는가</li>
</ul>
<p>인쇄용 <a href="#/forms">성적서 검토 체크리스트</a> 양식을 활용하세요.</p>

<h2>결과를 믿게 해 주는 품질 활동</h2>
<p>성적서 한 장의 신뢰는 그 뒤의 품질 시스템이 받쳐 줍니다. 신입사원이 알아야 할 핵심만 정리합니다.</p>

<h3>측정 소급성(Traceability)</h3>
<p>우리 장비의 “1 dBm”이 세계 어디서나 같은 1 dBm이라고 말할 수 있는 이유는, 장비가 <strong>끊기지 않은 교정의 사슬</strong>을 통해 국가측정표준과 국제단위계(SI)까지 이어지기 때문입니다(ISO/IEC 17025 6.5).</p>
<figure class="diagram">
<svg viewBox="0 0 760 170" role="img" aria-label="측정 소급성 체인">
  <defs><marker id="prp-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="11" y="30" width="130" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="76" y="56" font-weight="700">SI 단위</text><text x="76" y="76" font-size="11.5" fill="var(--text-3)">국제단위계 (BIPM)</text>
    <rect x="163" y="30" width="130" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="228" y="56" font-weight="700">국가측정표준</text><text x="228" y="76" font-size="11.5" fill="var(--text-3)">한국표준과학연구원</text>
    <rect x="315" y="30" width="130" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="380" y="56" font-weight="700">교정기관</text><text x="380" y="76" font-size="11.5" fill="var(--text-3)">인정받은 교정기관</text>
    <rect x="467" y="30" width="130" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <text x="532" y="56" font-weight="700" fill="var(--dg-accent)">우리 장비</text><text x="532" y="76" font-size="11.5" fill="var(--text-3)">파워센서 · 분석기</text>
    <rect x="619" y="30" width="130" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.8"/>
    <text x="684" y="56" font-weight="700" fill="var(--dg-ok)">시험 결과</text><text x="684" y="76" font-size="11.5" fill="var(--text-3)">성적서의 숫자</text>
    <g stroke="var(--dg-line)" stroke-width="1.4" fill="none">
      <path d="M141 62 L 161 62" marker-end="url(#prp-arw)"/>
      <path d="M293 62 L 313 62" marker-end="url(#prp-arw)"/>
      <path d="M445 62 L 465 62" marker-end="url(#prp-arw)"/>
      <path d="M597 62 L 617 62" marker-end="url(#prp-arw)"/>
    </g>
    <text x="380" y="124" font-size="12.5" fill="var(--text-2)">각 화살표 = 교정(비교) + 불확도 명시. 한 곳이라도 끊기면(교정 만료 등) 소급성이 사라짐</text>
    <text x="380" y="150" font-size="12" fill="var(--text-3)">교정성적서의 교정값·불확도는 불확도 예산의 B형 입력이 됩니다</text>
  </g>
</svg>
<figcaption>그림 2. 측정 소급성 체인 — SI에서 시험 결과까지 끊기지 않은 교정의 사슬</figcaption>
</figure>

<div class="card-grid">
  <div class="card"><h3>교정 주기</h3><p>장비마다 정한 주기(예: 1년)로 외부 교정을 받습니다. 교정성적서를 받으면 <strong>그냥 보관하지 말고</strong> 결과가 사용 요구(허용 오차)를 만족하는지 확인하고, 보정값을 장비·SW에 반영합니다.</p></div>
  <div class="card"><h3>중간점검</h3><p>교정과 교정 사이에 장비가 여전히 믿을 만한지 확인하는 활동(ISO/IEC 17025 6.4.10). 예: 기준 신호원을 정기적으로 측정해 추세 확인, 챔버 성능 확인, SAR 시스템 체크(시험 전).</p></div>
  <div class="card"><h3>숙련도시험 · 비교시험</h3><p>같은 시료를 여러 시험소가 측정해 결과를 비교합니다(PT: Proficiency Testing, ILC: 시험소 간 비교). 우리 결과가 다른 시험소와 맞는지 외부에서 검증받는 것입니다(7.7.2).</p></div>
  <div class="card"><h3>부적합 업무 관리</h3><p>교정 만료 장비로 측정했거나 절차를 어긴 것이 발견되면 <strong>숨기지 말고 보고</strong>합니다. 영향 평가 → 업무 중단·결과 회수 → 원인 분석 → 시정조치(7.10, 8.7).</p></div>
  <div class="card"><h3>기밀 유지</h3><p>고객 제품 정보, 시험 결과, 미출시 제품 사진은 기밀입니다(4.2). 개인 SNS·메신저 공유 금지, 다른 고객 방문 시 시료 가림, 셋업 사진 배경 확인.</p></div>
  <div class="card"><h3>공정성</h3><p>결과가 영업·일정 압박에 영향받으면 안 됩니다(4.1). “이번 건은 합격 나와야 해” 같은 압박을 받으면 기술책임자·품질책임자에게 알립니다.</p></div>
</div>

<div class="callout danger">
  <span class="callout-title">교정 만료 장비를 발견했다면</span>
  즉시 사용을 멈추고 “사용 금지” 표시를 한 뒤 보고합니다. 그 장비로 이미 측정한 결과가 있다면 영향 평가가 필요합니다. 조용히 다른 장비 번호로 바꿔 적는 것은 <strong>기록 위조</strong>입니다. 매일 사용 전에 <a href="#/forms">장비 사용 · 점검 일지</a>로 확인하는 습관을 들이세요.
</div>
`,
  quiz: [
    { q: '성적서의 “끝을 명확히 알 수 있게” 하는 방법으로 가장 적절한 것은?',
      options: ['마지막 페이지에 회사 로고를 크게 넣는다', '페이지 번호를 생략한다', '표지에만 성적서 번호를 넣는다', '모든 페이지에 성적서 번호와 “n / 총 m” 페이지 번호를 넣는다'],
      answer: 3, explain: 'ISO/IEC 17025 7.8.2.1은 각 페이지의 고유 식별과 성적서 끝의 명확한 식별을 요구합니다.' },
    { q: '발행된 성적서의 모델명 오타를 발견했다. 올바른 처리는?',
      options: ['원본 번호를 참조하는 새로 식별된 수정 성적서를 발행하고 변경 사유를 기록한다', '같은 번호의 파일을 고쳐 조용히 다시 보낸다', '고객에게 직접 고쳐 쓰라고 한다', '다음 시험 때 반영한다'],
      answer: 0, explain: '7.8.8에 따라 변경은 명확히 식별되고, 새 성적서는 고유하게 식별되며 대체되는 원본을 참조합니다.' },
    { q: '측정 소급성(Traceability)에 대한 설명으로 옳은 것은?',
      options: ['장비 제조사가 보증하면 교정은 필요 없다', '시험 기록을 시간 순으로 정리하는 것', '결과가 끊기지 않은 교정의 사슬로 국가측정표준·SI 단위까지 연결되는 것', '고객이 결과를 추적하는 웹 서비스'],
      answer: 2, explain: '소급성은 각 단계의 교정과 불확도가 명시된 끊기지 않은 비교 사슬을 통해 SI까지 연결되는 성질입니다.' },
    { q: '인정 마크(KOLAS 등)를 사용하는 조건으로 옳은 것은?',
      options: ['시험소가 인정을 받았다면 모든 항목에 쓸 수 있다', '인정 범위 안의 결과에만 쓰고, 범위 밖 항목은 구분 표시한다', '고객이 요청하면 어디든 쓸 수 있다', '표지에는 쓸 수 없다'],
      answer: 1, explain: '인정 마크는 인정받은 범위의 결과에만 사용할 수 있습니다.' },
    { q: '교정과 교정 사이에 장비가 믿을 만한 상태인지 확인하는 활동은?',
      options: ['숙련도시험', '계약 검토', '개정 발행', '중간점검'],
      answer: 3, explain: '중간점검(intermediate check)은 교정 사이 장비 신뢰성을 유지하기 위한 활동입니다(6.4.10).' }
  ],
  refs: [
    { title: 'ISO/IEC 17025:2017 (ISO)', url: 'https://www.iso.org/standard/66912.html', note: '7.8 결과 보고, 6.4 장비, 6.5 측정 소급성, 7.7 결과 유효성 보장, 7.10 부적합 업무' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '인정 마크 사용 규정, 숙련도시험 정책' },
    { title: 'ILAC', url: 'https://ilac.org', note: 'ILAC-P10(소급성 정책), ILAC-P9(숙련도시험), ILAC-R7(인정마크 사용)' },
    { title: 'JCGM 출판물 (GUM, VIM)', url: 'https://www.bipm.org/en/committees/jc/jcgm/publications', note: '소급성·교정 용어의 정의(VIM)' }
  ]
});
