/* MODULE 06 — SAR · 전자파 인체노출 */
COURSE.addLesson({
  id: 'sar-basics',
  module: 'sar',
  order: 1,
  title: 'SAR란 무엇인가',
  minutes: 18,
  level: '기초',
  summary: '전자파가 몸에 흡수되어 열이 되는 원리, SAR의 정의와 단위(W/kg), 1 g/10 g 평균, 국가별 기준과 한국 전자파등급 제도를 이해합니다.',
  objectives: [
    '전자파의 열적 작용과 SAR의 정의(SAR = σ|E|²/ρ)를 설명할 수 있다.',
    '1 g · 10 g 평균이 무엇을 의미하는지 그림으로 설명할 수 있다.',
    '한국·미국·EU의 SAR 기준값과 평균 질량의 차이를 구분한다.',
    '한국 전자파등급(1등급/2등급) 표시제도의 기준을 안다.'
  ],
  body: `
<p>휴대폰을 오래 통화하면 귀 쪽이 따뜻해지는 느낌을 받은 적이 있을 겁니다. 그 열의 상당 부분은 배터리·회로의 발열이지만, 일부는 <strong>전파가 몸속으로 들어가 흡수되면서 생긴 열</strong>입니다.
SAR 시험은 바로 이 “몸에 흡수되는 전파 에너지의 양”을 표준 방법으로 측정해, 안전 기준 이내인지 확인하는 일입니다.</p>

<h2>전자파가 몸에 미치는 영향 — 열적 작용</h2>
<p>휴대폰·Wi-Fi 같은 무선기기가 쓰는 주파수(수백 MHz ~ 수 GHz)의 전파는 X선처럼 원자를 이온화시킬 만한 에너지가 없습니다(비전리 방사선). 이 대역에서 과학적으로 확립된 주된 영향은 <strong>열적 작용(Thermal effect)</strong>, 즉 조직이 전파 에너지를 흡수해 온도가 올라가는 현상입니다.</p>
<ul>
  <li>인체 조직은 물과 이온(염분)이 많아 전기가 약간 통하는 <strong>손실 있는 유전체</strong>입니다.</li>
  <li>조직 안에 전계(E)가 생기면 이온이 움직이며 전류가 흐르고(도전율 σ), 물 분자가 흔들리며 에너지를 잃습니다. 이 에너지가 열이 됩니다.</li>
  <li>국제 기준(ICNIRP, IEEE)은 동물 실험 등에서 건강 영향이 나타나는 수준(전신 평균 약 4 W/kg, 체온 약 1 ℃ 상승)을 근거로, 여기에 <strong>큰 안전 계수</strong>를 두어 한계값을 정했습니다. 일반인 전신 평균 0.08 W/kg은 4 W/kg의 1/50입니다.</li>
</ul>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면 — 전자레인지 비유</span>
  전자레인지는 2.45 GHz 전파로 음식 속 물 분자를 흔들어 데웁니다. 휴대폰도 비슷한 주파수를 쓰지만 출력은 전자레인지(약 1,000 W)의 <strong>수천 분의 1</strong>(최대 수백 mW 수준)입니다.
  SAR는 “이 작은 전자레인지가 우리 몸의 <em>특정 부위</em>를 <em>얼마나</em> 데우려 하는가”를 1 kg당 와트로 나타낸 숫자라고 생각하면 됩니다.
</div>

<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="전파 흡수가 열로 바뀌는 과정">
  <defs><marker id="sarb-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="60" width="130" height="80" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="75" y="93" font-weight="700">무선기기</text>
    <text x="75" y="115" font-size="12" fill="var(--text-3)">안테나 전파 방사</text>
    <path d="M140 100 L 185 100" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarb-arw)"/>
    <rect x="190" y="60" width="130" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="255" y="93" font-weight="700" fill="var(--dg-accent)">조직 내 전계 E</text>
    <text x="255" y="115" font-size="12" fill="var(--text-3)">몸속으로 침투 (V/m)</text>
    <path d="M320 100 L 365 100" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarb-arw)"/>
    <rect x="370" y="60" width="130" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="435" y="93" font-weight="700" fill="var(--dg-accent)">전류 · 손실</text>
    <text x="435" y="115" font-size="12" fill="var(--text-3)">도전율 σ (S/m)</text>
    <path d="M500 100 L 545 100" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarb-arw)"/>
    <rect x="550" y="60" width="200" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="650" y="93" font-weight="700" fill="var(--dg-accent-2)">열 → 온도 상승</text>
    <text x="650" y="115" font-size="12" fill="var(--text-3)">흡수 전력 / 질량 = SAR</text>
    <text x="380" y="30" font-size="13" fill="var(--text-2)">SAR = σ|E|² / ρ  (전기적으로 본 SAR)</text>
    <text x="380" y="180" font-size="13" fill="var(--text-2)">SAR = c · dT/dt  (열적으로 본 SAR, 열 확산 전 초기 온도 상승률)</text>
  </g>
</svg>
<figcaption>그림 1. 전파가 조직 안에서 열로 바뀌는 과정과 SAR의 두 가지 표현</figcaption>
</figure>

<h2>SAR의 정의와 단위</h2>
<p><strong>SAR(Specific Absorption Rate, 전자파흡수율)</strong>은 <em>단위 질량의 인체 조직이 단위 시간 동안 흡수하는 전자파 에너지</em>, 즉 <strong>1 kg당 흡수 전력</strong>입니다. 단위는 <strong>W/kg</strong>입니다.</p>
<div class="formula">SAR = σ · |E|² / ρ &nbsp;&nbsp; [W/kg]</div>
<ul>
  <li><strong>σ</strong> : 조직의 도전율(Conductivity), S/m</li>
  <li><strong>E</strong> : 조직 내부 전계의 실효값(RMS), V/m</li>
  <li><strong>ρ</strong> : 조직의 밀도(Density), kg/m³ (측정에서는 대개 1,000 kg/m³로 가정)</li>
</ul>
<p>같은 양을 열의 관점에서 쓰면 다음과 같습니다. 열이 주변으로 퍼지기 전, 노출 직후의 온도 상승 속도로 SAR를 구할 수 있습니다.</p>
<div class="formula">SAR = c · dT/dt &nbsp;&nbsp; (c : 비열 J/(kg·℃), dT/dt : 온도 상승률 ℃/s)</div>

<div class="callout note">
  <span class="callout-title">왜 전계(E)를 재나?</span>
  온도 상승은 너무 작고 열이 금방 퍼져 정밀하게 재기 어렵습니다. 그래서 실제 SAR 측정 시스템은 인체를 흉내 낸 액체 속에서 <strong>E-field 프로브로 전계를 측정</strong>하고, 액체의 σ와 ρ를 알고 있으니 위 식으로 SAR를 계산합니다. 이것이 <a href="#/l/sar-system">다음 강의</a>의 측정 시스템 원리입니다.
</div>

<h3>간단한 계산 예</h3>
<p>도전율 σ = 0.9 S/m인 머리 조직등가액 속에서 전계가 40 V/m(RMS)로 측정되었다면:</p>
<div class="formula">SAR = 0.9 × 40² / 1000 = 0.9 × 1600 / 1000 = 1.44 W/kg</div>
<p>전계가 2배가 되면 SAR는 <strong>4배</strong>가 됩니다(|E|²에 비례). 출력(전력)은 |E|²에 비례하므로, 결국 <strong>SAR는 기기의 송신 출력에 비례</strong>합니다. 출력이 1 dB 오르면 SAR도 약 26% 오릅니다. 이 성질이 <a href="#/l/sar-scaling">스케일링(조정 SAR)</a>의 근거입니다.</p>

<h2>1 g · 10 g 평균이란?</h2>
<p>SAR는 위치마다 다릅니다. 안테나 바로 앞은 높고 조금만 떨어져도 급격히 줄어듭니다. 한 점의 최대값(피크)만 보면 너무 엄격하고, 몸 전체 평균만 보면 국소적인 과열을 놓칩니다. 그래서 기준은 <strong>일정 질량(1 g 또는 10 g)의 정육면체 조직 안에서 평균한 SAR의 최대값</strong>으로 정의합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="1 g와 10 g 평균 정육면체 비교">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- 1 g cube -->
    <g transform="translate(90,90)">
      <path d="M0 40 L60 40 L60 100 L0 100 Z" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
      <path d="M0 40 L20 20 L80 20 L60 40 Z" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.5"/>
      <path d="M60 40 L80 20 L80 80 L60 100 Z" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.5"/>
      <text x="30" y="125" fill="var(--text-2)">한 변 약 10 mm</text>
    </g>
    <text x="130" y="60" font-weight="700" font-size="15" fill="var(--dg-accent)">1 g 평균</text>
    <text x="130" y="245" font-size="12" fill="var(--text-3)">머리·몸통 (한국·미국 1.6 W/kg)</text>
    <!-- 10 g cube -->
    <g transform="translate(300,55)">
      <path d="M0 50 L130 50 L130 180 L0 180 Z" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
      <path d="M0 50 L40 10 L170 10 L130 50 Z" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
      <path d="M130 50 L170 10 L170 140 L130 180 Z" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
      <text x="65" y="120" fill="var(--text-2)">한 변 약 21.5 mm</text>
    </g>
    <text x="385" y="45" font-weight="700" font-size="15" fill="var(--dg-accent-2)">10 g 평균</text>
    <text x="385" y="255" font-size="12" fill="var(--text-3)">EU·일본 머리·몸통, 사지(4.0 W/kg)</text>
    <!-- explanation -->
    <g text-anchor="start" font-size="13">
      <text x="530" y="80" font-weight="700">밀도 1 g/cm³ 가정</text>
      <text x="530" y="105" fill="var(--text-2)">1 g → 1 cm³ → 1 cm 정육면체</text>
      <text x="530" y="128" fill="var(--text-2)">10 g → 10 cm³ → ∛10 ≈ 2.15 cm</text>
      <text x="530" y="160" font-weight="700">평균 질량이 클수록</text>
      <text x="530" y="183" fill="var(--text-2)">피크가 더 넓게 평균되어</text>
      <text x="530" y="206" fill="var(--text-2)">같은 기기에서 값이 낮게 나옴</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. 1 g 평균 정육면체(약 1 cm)와 10 g 평균 정육면체(약 2.15 cm). 측정 소프트웨어는 이 정육면체를 3차원 측정 데이터 안에서 움직이며 평균값이 최대가 되는 위치를 찾습니다.</figcaption>
</figure>

<div class="callout warn">
  <span class="callout-title">흔한 오해</span>
  “EU 기준은 2.0 W/kg이니 한국(1.6 W/kg)보다 느슨하다”는 단순 비교는 정확하지 않습니다. <strong>평균 질량이 다르기 때문</strong>입니다. 같은 기기라도 1 g 평균값은 10 g 평균값보다 대체로 높게 나옵니다(흔히 1.5배 전후, 기기마다 다름). 성적서의 SAR 값을 볼 때는 항상 <strong>“몇 g 평균인가”</strong>를 함께 보세요.
</div>

<h2>국가별 기준 비교</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>한국</th><th>미국 (FCC)</th><th>EU · 일본 등 (ICNIRP 기반)</th></tr></thead>
<tbody>
<tr><td>머리 · 몸통 국소 SAR</td><td class="num">1.6 W/kg (1 g)</td><td class="num">1.6 W/kg (1 g)</td><td class="num">2.0 W/kg (10 g)</td></tr>
<tr><td>사지(팔·다리·손목 등) 국소 SAR</td><td class="num">4.0 W/kg (10 g)</td><td class="num">4.0 W/kg (10 g)</td><td class="num">4.0 W/kg (10 g)</td></tr>
<tr><td>전신 평균 SAR (일반인)</td><td class="num">0.08 W/kg</td><td class="num">0.08 W/kg</td><td class="num">0.08 W/kg</td></tr>
<tr><td>근거 기준</td><td>전자파 인체보호기준 (과기정통부 고시)</td><td>47 CFR §1.1310, §2.1093 (IEEE C95.1 계열)</td><td>ICNIRP 가이드라인, EU 권고 1999/519/EC 및 EN 표준</td></tr>
</tbody></table></div>
<p class="muted">※ 위 값은 일반인(비통제 환경) 기준 요약입니다. 직업인 기준, 적용 주파수 범위, 세부 부위 정의는 반드시 최신 고시·규정 원문을 확인하세요.</p>

<h3>ICNIRP와 IEEE — 기준의 두 뿌리</h3>
<ul>
  <li><strong>ICNIRP(국제비전리복사방호위원회)</strong> : 1998년 가이드라인에서 10 g 평균 2 W/kg을 제시했고, 2020년 개정판에서 6 GHz 이상 고주파 대역 기준을 새로 정비했습니다. EU·일본 등 많은 나라가 따릅니다.</li>
  <li><strong>IEEE C95.1</strong> : 미국 기준의 기술적 바탕입니다. FCC는 1996년부터 1 g 평균 1.6 W/kg을 채택해 오고 있습니다(IEEE의 최신 개정판은 10 g 2 W/kg으로 조화되었지만 FCC 규정은 1.6 W/kg 1 g 유지).</li>
  <li>한국은 머리·몸통에 대해 미국과 같은 <strong>1 g · 1.6 W/kg</strong>을 채택하고 있습니다.</li>
</ul>

<h2>한국의 SAR 적용 대상과 전자파등급 표시</h2>
<p>한국에서 SAR 평가 대상은 대표적으로 <strong>인체에 가까이(대략 20 cm 이내) 대고 사용하는 휴대용 무선기기</strong>입니다. 휴대폰, 태블릿, 스마트워치, 무선 이어폰 등이 해당될 수 있습니다. 다만 적용 대상 기기, 출력에 따른 면제 조건, 시험 위치는 <strong>전자파흡수율 측정기준 등 관련 고시</strong>에 정해져 있으므로 반드시 최신 원문을 확인하세요.</p>

<h3>전자파등급 표시제도</h3>
<p>한국은 휴대전화 등에 대해 측정된 SAR 값에 따라 <strong>전자파등급</strong>을 표시하도록 하고 있습니다(제품·포장·설명서 등에 표시).</p>
<div class="kbox">
  <div><div class="k">1등급</div><div class="v">SAR ≤ 0.8 W/kg</div></div>
  <div><div class="k">2등급</div><div class="v">0.8 W/kg &lt; SAR ≤ 1.6 W/kg</div></div>
  <div><div class="k">기준 초과</div><div class="v">&gt; 1.6 W/kg → 부적합</div></div>
</div>
<p>즉 2등급도 기준을 만족하는 <strong>적합 제품</strong>이며, 1등급은 기준의 절반 이하라는 뜻입니다. 시험 엔지니어는 최종 보고 SAR 값을 등급 경계(0.8 W/kg) 근처에서 특히 신중하게 다뤄야 합니다. 등급이 바뀌면 제조사의 표시·포장까지 바뀌기 때문입니다.</p>

<div class="callout tip">
  <span class="callout-title">현장 팁</span>
  고객이 가장 먼저 묻는 질문은 “몇 W/kg 나왔어요? 1등급이에요?”입니다. 답하기 전에 ① 어떤 시험 위치(머리/몸통)의 값인지, ② 조정(스케일링)된 값인지, ③ 1 g 평균인지를 확인하고 말하는 습관을 들이세요. 확정 전 수치를 구두로 전달했다가 나중에 바뀌면 신뢰를 잃습니다.
</div>

<details class="faq"><summary>SAR가 낮으면 무조건 좋은 휴대폰인가요?</summary><p>SAR는 “최대 출력으로 고정했을 때의 최악 조건” 값입니다. 실제 사용 중에는 기지국 신호가 좋으면 출력이 크게 줄어듭니다. 기준 이내라면 안전성 측면에서는 모두 적합하며, SAR 값은 통화 품질과는 별개의 지표입니다.</p></details>
<details class="faq"><summary>전신 평균 SAR 0.08 W/kg은 언제 쓰나요?</summary><p>몸 전체가 전파에 노출되는 경우(예: 기지국 근처 원거리 노출)의 기준입니다. 휴대용 기기는 국소 노출이 지배적이라 보통 국소 SAR(1 g/10 g)로 평가합니다. 원거리 노출은 대개 전계강도·전력밀도로 평가합니다(<a href="#/l/sar-pd-5g">6강</a> 참고).</p></details>
`,
  quiz: [
    { q: '도전율 1.0 S/m, 밀도 1000 kg/m³인 액체에서 전계가 30 V/m(RMS)일 때 SAR는?',
      options: ['0.03 W/kg', '0.3 W/kg', '0.9 W/kg', '30 W/kg'],
      answer: 2, explain: 'SAR = σ|E|²/ρ = 1.0 × 900 / 1000 = 0.9 W/kg 입니다.' },
    { q: '한국에서 휴대폰 머리·몸통 SAR 기준으로 옳은 것은?',
      options: ['2.0 W/kg, 10 g 평균', '1.6 W/kg, 1 g 평균', '4.0 W/kg, 10 g 평균', '0.08 W/kg, 1 g 평균'],
      answer: 1, explain: '한국과 미국은 머리·몸통 1 g 평균 1.6 W/kg, 사지는 10 g 평균 4.0 W/kg입니다. 2.0 W/kg(10 g)은 EU·일본 등의 기준입니다.' },
    { q: '측정된 SAR가 1.1 W/kg인 휴대폰의 한국 전자파등급은?',
      options: ['1등급', '2등급', '3등급', '부적합'],
      answer: 1, explain: '0.8 W/kg 이하가 1등급, 0.8 초과 1.6 이하가 2등급입니다. 1.1 W/kg은 기준을 만족하는 2등급입니다.' },
    { q: '같은 기기를 1 g 평균과 10 g 평균으로 계산했을 때 일반적인 경향은?',
      options: ['10 g 평균값이 항상 더 높다', '두 값은 항상 같다', '1 g 평균값이 대체로 더 높다', '주파수와 무관하게 정확히 2배 차이 난다'],
      answer: 2, explain: '작은 부피에서 평균할수록 피크 영향이 커지므로 1 g 평균값이 대체로 더 높습니다. 비율은 기기·주파수마다 다릅니다.' },
    { q: '기기 출력이 1 dB 높아지면 SAR는 대략 어떻게 변하나?',
      options: ['약 26% 증가', '약 1% 증가', '변화 없음', '약 2배 증가'],
      answer: 0, explain: 'SAR는 전력에 비례하므로 10^(1/10) ≈ 1.26배, 즉 약 26% 증가합니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파 인체보호 제도, 전자파흡수율 측정기준 관련 고시·자료' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '“전자파 인체보호기준”, “전자파흡수율 측정기준” 고시 원문 검색' },
    { title: 'ICNIRP', url: 'https://www.icnirp.org', note: 'RF 노출 가이드라인(1998, 2020) 원문' },
    { title: 'FCC RF Safety', url: 'https://www.fcc.gov', note: '47 CFR §1.1310, §2.1093 및 RF 노출 안내' }
  ]
});

COURSE.addLesson({
  id: 'sar-system',
  module: 'sar',
  order: 2,
  title: 'SAR 측정 시스템의 구성',
  minutes: 18,
  level: '기초',
  summary: '로봇, E-field 프로브, 팬텀, 조직등가액, 기기 홀더, 데이터 획득 장치로 이루어진 SAR 측정 시스템의 구성과 각 요소의 역할을 익힙니다.',
  objectives: [
    'SAR 측정 시스템의 구성 요소와 신호 흐름을 그림으로 설명할 수 있다.',
    '등방성 E-field 프로브의 구조와 변환계수(ConvF), 교정의 의미를 안다.',
    'SAM 머리 팬텀과 평판 팬텀의 용도를 구분한다.',
    '조직등가액과 기기 홀더를 다룰 때의 주의점을 안다.'
  ],
  body: `
<p>SAR는 사람 몸속의 전계를 재야 하지만, 실제 사람에게 프로브를 넣을 수는 없습니다. 그래서 SAR 측정 시스템은 <strong>사람 모양의 플라스틱 용기(팬텀)에 인체와 전기적 특성이 같은 액체(조직등가액)를 채우고</strong>, 그 안에서 <strong>로봇이 아주 작은 전계 프로브를 3차원으로 움직이며</strong> 전계를 측정합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  “사람 머리 모양 어항(팬텀)에 사람 몸과 같은 성질의 물(조직등가액)을 채우고, 로봇 팔 끝의 초소형 온도계 대신 <strong>전계 센서</strong>로 어항 속을 촘촘히 훑어 가장 뜨거워질 곳을 찾는 장치”입니다.
</div>

<h2>시스템 전체 구성</h2>
<figure class="diagram">
<svg viewBox="0 0 760 360" role="img" aria-label="SAR 측정 시스템 구성도">
  <defs><marker id="sarsys-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- PC -->
    <rect x="10" y="20" width="150" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="85" y="45" font-weight="700">측정 PC · SW</text>
    <text x="85" y="65" font-size="11.5" fill="var(--text-3)">스캔 제어 · SAR 계산</text>
    <!-- robot controller -->
    <rect x="10" y="120" width="150" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="85" y="145" font-weight="700">로봇 컨트롤러</text>
    <text x="85" y="165" font-size="11.5" fill="var(--text-3)">위치 제어</text>
    <path d="M85 80 L 85 115" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarsys-arw)"/>
    <!-- robot -->
    <rect x="200" y="250" width="70" height="60" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="235" y="285" font-weight="700">로봇</text>
    <path d="M160 150 C 200 150, 235 190, 235 245" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarsys-arw)"/>
    <path d="M235 250 L 260 120 L 380 90" fill="none" stroke="var(--dg-line)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
    <!-- DAE -->
    <rect x="360" y="70" width="60" height="36" rx="5" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="390" y="93" font-size="12" font-weight="700" fill="var(--dg-accent)">DAE</text>
    <!-- probe -->
    <line x1="390" y1="106" x2="390" y2="200" stroke="var(--dg-accent)" stroke-width="3"/>
    <circle cx="390" cy="202" r="4" fill="var(--dg-accent)"/>
    <text x="440" y="160" font-size="12" fill="var(--dg-accent)" text-anchor="start">E-field 프로브</text>
    <!-- phantom -->
    <path d="M300 170 L 480 170 L 470 240 L 310 240 Z" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <path d="M304 190 L 476 190" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
    <text x="390" y="228" font-size="12" fill="var(--text-2)">팬텀 + 조직등가액</text>
    <!-- DUT + holder -->
    <rect x="345" y="248" width="90" height="14" rx="4" fill="var(--dg-accent-2)" opacity="0.85"/>
    <text x="398" y="287" font-size="12" fill="var(--dg-accent-2)" text-anchor="start">시험 기기(DUT)</text>
    <line x1="390" y1="262" x2="390" y2="300" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="350" y="300" width="80" height="14" rx="3" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="390" y="334" font-size="12" fill="var(--text-2)">기기 홀더 (위치 조정)</text>
    <!-- DAE link -->
    <path d="M360 80 C 250 60, 200 50, 165 50" fill="none" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#sarsys-arw)"/>
    <text x="260" y="45" font-size="11.5" fill="var(--dg-accent)">측정 데이터(광/디지털)</text>
    <!-- CMW -->
    <rect x="580" y="230" width="170" height="70" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="665" y="258" font-weight="700">무선통신 시험기</text>
    <text x="665" y="280" font-size="11.5" fill="var(--text-3)">호 연결 · 최대 출력 고정</text>
    <line x1="560" y1="200" x2="560" y2="265" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M548 200 L 560 185 L 572 200" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <line x1="560" y1="265" x2="578" y2="265" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M540 215 Q 500 240 445 252" fill="none" stroke="var(--dg-line)" stroke-dasharray="3 4"/>
    <text x="620" y="190" font-size="11.5" fill="var(--text-3)">통신 안테나</text>
    <!-- side box -->
    <rect x="580" y="20" width="170" height="130" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="665" y="44" font-weight="700" fill="var(--dg-ok)">주변 장비</text>
    <text x="665" y="68" font-size="12" fill="var(--text-2)">VNA + 유전율 프로브</text>
    <text x="665" y="90" font-size="12" fill="var(--text-2)">시스템 체크 다이폴</text>
    <text x="665" y="112" font-size="12" fill="var(--text-2)">신호발생기 · 파워미터</text>
    <text x="665" y="134" font-size="12" fill="var(--text-2)">온도계</text>
  </g>
</svg>
<figcaption>그림 1. SAR 측정 시스템 구성 개념도. 팬텀 아래의 기기를 무선통신 시험기로 최대 출력 송신시키고, 로봇이 액체 속 프로브를 움직여 전계를 측정합니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>구성 요소</th><th>역할</th><th>신입이 챙길 점</th></tr></thead>
<tbody>
<tr><td>로봇 (6축 산업용 로봇 등)</td><td>프로브를 정밀하게(0.1 mm 이하 반복 정밀도 수준) 3차원 이동</td><td>작업 반경 안에 손을 넣지 않기, 비상정지 버튼 위치 숙지</td></tr>
<tr><td>E-field 프로브</td><td>액체 속 전계를 3축으로 측정</td><td>교정 유효기간, 사용 주파수·액체에 맞는 ConvF, 프로브 팁 충돌 주의</td></tr>
<tr><td>데이터 획득 전자장치 (DAE 등)</td><td>프로브의 미소 DC 전압을 증폭·디지털화하여 PC로 전송</td><td>DAE도 교정 대상, 프로브와 연결 상태 확인</td></tr>
<tr><td>팬텀</td><td>사람 머리·몸통 모양을 모사한 용기</td><td>표면 흠집·변형, 쉘 두께 확인, 좌/우 방향 확인</td></tr>
<tr><td>조직등가액</td><td>인체 조직의 유전 특성(εr, σ) 모사</td><td>주파수별 액체 선택, 매일 유전 특성 측정</td></tr>
<tr><td>기기 홀더</td><td>시험 기기를 정해진 위치·각도로 고정</td><td>저유전율·저손실 재질, 위치 재현성</td></tr>
<tr><td>측정 소프트웨어</td><td>스캔 계획, 보간·외삽, 1 g/10 g 평균 계산, 보고서 출력</td><td>프로젝트 설정(주파수, 액체 파라미터, 프로브 선택) 오류 주의</td></tr>
</tbody></table></div>

<h2>E-field 프로브 — 시스템의 심장</h2>
<p>SAR 프로브는 지름이 수 mm 정도인 막대 끝에 <strong>아주 작은 다이폴 3개를 서로 직교하게</strong> 배치한 구조입니다. 각 다이폴에는 <strong>쇼트키 다이오드</strong>가 붙어 있어 RF 전계를 검파해 DC 전압으로 바꿉니다. 이 DC 신호는 RF를 거의 통과시키지 않는 고저항 선로를 따라 DAE로 전달됩니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="3축 등방성 E-field 프로브 구조">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- probe body -->
    <rect x="60" y="100" width="380" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="250" y="125" font-size="12" fill="var(--text-2)">프로브 몸체 · 고저항 선로 (DC 신호만 전달)</text>
    <path d="M440 100 L 500 110 L 500 130 L 440 140 Z" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <!-- tip -->
    <circle cx="530" cy="120" r="30" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <line x1="510" y1="120" x2="550" y2="120" stroke="var(--dg-accent)" stroke-width="3"/>
    <line x1="530" y1="100" x2="530" y2="140" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <line x1="516" y1="134" x2="544" y2="106" stroke="var(--dg-ok)" stroke-width="3"/>
    <circle cx="530" cy="120" r="3.5" fill="var(--text)"/>
    <text x="530" y="175" font-size="12" fill="var(--text-2)">팁 지름 수 mm</text>
    <!-- DAE -->
    <rect x="10" y="95" width="40" height="50" rx="4" fill="var(--dg-fill)" stroke="var(--dg-accent)"/>
    <text x="30" y="125" font-size="11" fill="var(--dg-accent)">DAE</text>
    <!-- legend -->
    <g text-anchor="start" font-size="12.5">
      <line x1="600" y1="60" x2="630" y2="60" stroke="var(--dg-accent)" stroke-width="3"/><text x="638" y="64">X 다이폴</text>
      <line x1="600" y1="85" x2="630" y2="85" stroke="var(--dg-accent-2)" stroke-width="3"/><text x="638" y="89">Y 다이폴</text>
      <line x1="600" y1="110" x2="630" y2="110" stroke="var(--dg-ok)" stroke-width="3"/><text x="638" y="114">Z 다이폴</text>
      <circle cx="615" cy="135" r="3.5" fill="var(--text)"/><text x="638" y="139">센서 중심</text>
      <text x="600" y="170" fill="var(--text-3)">각 다이폴 + 쇼트키 다이오드</text>
      <text x="600" y="190" fill="var(--text-3)">→ 3축 합성으로 방향 무관</text>
    </g>
    <text x="250" y="215" font-size="12.5" fill="var(--text-2)">|E|² = |Ex|² + |Ey|² + |Ez|²  (각 채널 전압 → 교정계수로 환산)</text>
  </g>
</svg>
<figcaption>그림 2. 3축 등방성 다이오드 프로브의 개념 구조. 세 방향 성분을 합성하므로 전계의 방향에 관계없이 크기를 잴 수 있습니다(등방성, Isotropy).</figcaption>
</figure>

<h3>프로브 관련 핵심 용어</h3>
<ul>
  <li><strong>등방성(Isotropy)</strong> : 프로브를 어느 방향으로 돌려도 같은 값이 나오는 성질. 교정 성적서에 등방성 오차(예: ±0.x dB)가 표시되고, 불확도 계산에 들어갑니다.</li>
  <li><strong>감도(Sensitivity, Norm)</strong> : 자유공간에서 각 다이폴의 전압-전계 관계. 교정 성적서에 채널별로 제공됩니다.</li>
  <li><strong>변환계수(ConvF, Conversion Factor)</strong> : 프로브가 공기 중이 아니라 <strong>액체 속</strong>에 있을 때 감도가 달라지는 것을 보정하는 계수. <strong>주파수별·액체 종류별</strong>로 교정되어 있습니다. 예를 들어 “HSL 1750 MHz ConvF”처럼 지정합니다.</li>
  <li><strong>다이오드 압축 보정(선형화)</strong> : 다이오드는 높은 신호에서 비선형이 되므로, 변조 신호 특성(피크 대 평균비 등)에 맞춘 보정 파라미터를 사용합니다. 시스템에 따라 변조 방식별 보정 항목을 설정합니다.</li>
  <li><strong>센서 오프셋</strong> : 프로브 팁 끝과 실제 센서 중심 사이 거리. 표면 근처 값을 외삽할 때 사용됩니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">프로브 교정 주기와 ConvF 범위</span>
  프로브는 대개 <strong>1년 주기</strong>로 교정합니다(사내 절차·인정 요건 확인). 가장 흔한 실수는 교정 성적서에 <strong>없는 주파수</strong>(ConvF가 교정되지 않은 대역)에서 측정하는 것입니다. 교정된 주파수 점 주변의 허용 범위(시스템 제조사 규정, 예: ±50 MHz 또는 ±100 MHz)를 벗어나면 사용할 수 없습니다. 시험 전에 교정 성적서의 ConvF 표를 반드시 확인하세요.
</div>

<h2>팬텀 — 사람의 모양을 흉내 내다</h2>
<div class="card-grid">
  <div class="card"><h3>SAM 머리 팬텀</h3><p><strong>SAM(Specific Anthropomorphic Mannequin)</strong>은 성인 남성 머리의 큰 체구(대략 상위 10%)를 기준으로 만든 표준 머리 모양입니다. 하나의 쉘에 <strong>좌측(Left)·우측(Right) 머리 면과 평판 부분</strong>이 함께 있는 형태가 일반적입니다. 귀 부분은 기기와의 간격을 정하는 스페이서 역할을 합니다.</p></div>
  <div class="card"><h3>평판 팬텀 (Flat Phantom)</h3><p>평평한 바닥을 가진 타원형·사각형 용기(예: ELI 팬텀). <strong>몸통 착용(Body-worn), 핫스팟, 사지, 시스템 체크</strong>에 사용합니다. 바닥 쉘 두께는 표준에서 정한 값(대표적으로 2 mm)을 따릅니다.</p></div>
  <div class="card"><h3>쉘 재질</h3><p>저손실·저유전율 플라스틱(유리섬유 등). 쉘 두께와 유전율도 표준 요구사항이 있어, 제조사 성적서로 확인합니다. 표면이 긁히거나 액체로 오염되면 측정 재현성이 떨어집니다.</p></div>
</div>

<h2>조직등가액 (Tissue-Simulating Liquid)</h2>
<p>조직등가액은 물을 기본으로 당류, 염(NaCl), 글리콜 에테르(DGBE 등), 유화제 등을 섞어 <strong>목표 비유전율(εr)과 도전율(σ)</strong>을 맞춘 액체입니다. 주파수마다 목표값이 달라서 대개 <strong>주파수 대역별로 다른 액체</strong>를 준비합니다(예: 750 MHz용, 1900 MHz용, 2450 MHz용, 5 GHz용).</p>
<ul>
  <li><strong>머리용(Head)과 몸통용(Body)</strong> : 예전에는 머리 시험에는 Head 액체, 몸통 시험에는 Body 액체를 따로 썼습니다.</li>
  <li><strong>통합 추세</strong> : 최신 표준인 <strong>IEC/IEEE 62209-1528</strong>은 머리·몸통 구분 없이 <strong>하나의 조직등가액 목표값</strong>(머리 조직 기반)으로 여러 시험 위치를 평가할 수 있는 체계를 따릅니다. 다만 인증 제도(한국 고시, FCC KDB 등)에 따라 적용 시점과 요구가 다를 수 있으므로 <strong>프로젝트별로 적용 표준과 액체 요구사항을 확인</strong>해야 합니다.</li>
  <li>6 GHz 근처 고주파 액체는 점도가 낮고 증발이 빨라 관리가 더 까다롭습니다.</li>
</ul>
<p>액체 관리 방법은 <a href="#/l/sar-liquid-check">3강 — 조직등가액과 시스템 체크</a>에서 자세히 다룹니다.</p>

<h2>기기 홀더와 데이터 획득 장치</h2>
<ul>
  <li><strong>기기 홀더(Device Holder)</strong> : 기기를 팬텀에 정확한 각도(Cheek, Tilt 15° 등)와 거리로 밀착시키는 지그입니다. 홀더 재질은 SAR 값에 영향을 주지 않도록 저유전율·저손실이어야 하며, 기기를 잡는 부분이 안테나 근처를 덮지 않도록 합니다.</li>
  <li><strong>DAE(Data Acquisition Electronics)</strong> : 프로브의 수 μV~mV 수준 DC 신호를 증폭·디지털화합니다. 로봇 팔 끝에 붙어 있고 광케이블 등으로 PC와 통신합니다. DAE도 교정 대상입니다.</li>
  <li><strong>무선통신 시험기</strong> : 단말과 호(Call)를 맺고 정해진 채널·최대 출력으로 고정합니다. 시험기 자체는 SAR 값 측정에 직접 쓰이지 않지만, 출력 설정이 틀리면 전체 결과가 틀립니다.</li>
</ul>

<h2>대표 시스템과 제조사</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>시스템</th><th>제조사</th><th>특징(개요)</th></tr></thead>
<tbody>
<tr><td>DASY 계열 (DASY6, DASY8 등)</td><td>SPEAG (스위스)</td><td>산업용 로봇 + EX3D 계열 프로브 + DAE, 세계적으로 널리 사용. 5G mmWave 전력밀도 측정 모듈 제공</td></tr>
<tr><td>COMOSAR 계열</td><td>MVG (프랑스)</td><td>로봇 기반 시스템과 다중 프로브 어레이 방식의 고속 측정 시스템(예: ART-MAN 계열)도 제공</td></tr>
</tbody></table></div>
<p class="muted">제품 사진과 사양은 제조사 홈페이지를 참고하세요: <a class="ext" href="https://speag.swiss" target="_blank" rel="noopener">SPEAG</a>, <a class="ext" href="https://www.mvg-world.com" target="_blank" rel="noopener">MVG</a></p>

<div class="callout danger">
  <span class="callout-title">안전 — 로봇과 액체</span>
  로봇은 사람을 감지하지 못합니다. 스캔 중 팬텀에 손을 넣거나 기기 위치를 고치려 하지 마세요. 반드시 일시정지·정지 후 작업합니다. 또 프로브가 팬텀 바닥에 부딪히면 수백만~수천만 원짜리 프로브가 파손됩니다. 새 측정 전 <strong>팬텀 표면 위치(Surface detection)와 프로브 이동 경로</strong>를 확인하세요. 액체를 흘렸다면 즉시 닦아 로봇·장비 부식을 막습니다.
</div>
`,
  quiz: [
    { q: 'SAR 프로브가 액체 속에서 측정할 때 감도 차이를 보정하는 계수로, 주파수·액체별로 교정되는 것은?',
      options: ['ConvF (변환계수)', '안테나 계수(AF)', '케이블 손실', '듀티사이클'],
      answer: 0, explain: 'ConvF는 액체 속에서의 프로브 감도 보정계수로, 교정 성적서에 주파수·액체별로 제공됩니다.' },
    { q: 'SAR 프로브가 3개의 직교 다이폴을 사용하는 주된 이유는?',
      options: ['측정 속도를 3배로 높이려고', '전계의 방향과 무관하게 크기를 측정(등방성)하려고', '온도를 함께 재려고', '액체의 도전율을 측정하려고'],
      answer: 1, explain: '세 방향 성분을 합성하면 전계의 방향과 관계없이 크기를 얻을 수 있습니다.' },
    { q: '몸통 착용(Body-worn)이나 시스템 체크에 주로 사용하는 팬텀은?',
      options: ['SAM 머리 팬텀의 귀 부분', '공기 팬텀', '전신 팬텀', '평판(Flat) 팬텀'],
      answer: 3, explain: '평판 팬텀은 몸통·핫스팟·사지 시험과 기준 다이폴을 이용한 시스템 체크에 사용됩니다.' },
    { q: '프로브 사용 전 확인할 사항으로 가장 중요한 것은?',
      options: ['프로브의 색상', '로봇의 제조국', '시험 주파수와 액체에 대한 ConvF가 교정 성적서에 있는지, 교정 유효기간 이내인지', 'PC 모니터 해상도'],
      answer: 2, explain: '교정되지 않은 주파수·액체 조합이나 교정 만료 프로브로 측정한 결과는 사용할 수 없습니다.' }
  ],
  refs: [
    { title: 'SPEAG (DASY)', url: 'https://speag.swiss', note: 'DASY SAR 시스템, 프로브, 팬텀 자료' },
    { title: 'MVG (COMOSAR)', url: 'https://www.mvg-world.com', note: 'COMOSAR 등 SAR 측정 시스템' },
    { title: 'IEC Webstore — IEC/IEEE 62209-1528', url: 'https://webstore.iec.ch', note: '휴대용 무선기기 SAR 측정 표준(검색: 62209-1528)' }
  ]
});

COURSE.addLesson({
  id: 'sar-liquid-check',
  module: 'sar',
  order: 3,
  title: '조직등가액과 시스템 체크',
  minutes: 20,
  level: '실무',
  summary: '조직등가액의 유전 특성(εr, σ) 측정과 허용 오차, 온도·깊이 관리, 기준 다이폴을 이용한 시스템 체크까지 SAR 시험 전 매일 하는 준비 절차를 익힙니다.',
  objectives: [
    '조직등가액의 목표 유전 특성(εr, σ)과 허용 오차의 의미를 안다.',
    '개방단 동축 프로브와 VNA로 유전 특성을 측정하는 절차를 수행할 수 있다.',
    '기준 다이폴을 이용한 시스템 체크의 원리와 판정 기준(±10%)을 설명할 수 있다.',
    '액체 온도·깊이·측정 결과를 올바르게 기록할 수 있다.'
  ],
  body: `
<p>SAR 계산식 SAR = σ|E|²/ρ 에는 액체의 <strong>도전율 σ</strong>가 직접 들어갑니다. 또 전계가 액체 속으로 얼마나 들어가고 어떻게 분포하는지는 <strong>비유전율 εr</strong>에 따라 달라집니다. 즉 <strong>액체가 틀리면 SAR 값 전체가 틀립니다.</strong> 그래서 SAR 시험소는 측정을 시작하기 전에 매일(대개 측정일마다, 또는 표준·절차서가 정한 주기로) 액체와 시스템을 점검합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  조직등가액 점검은 “저울을 쓰기 전 영점 맞추기”, 시스템 체크는 “표준 분동을 올려서 저울이 제 무게를 가리키는지 보기”입니다. 표준 분동 역할을 하는 것이 <strong>기준 다이폴(Reference Dipole)</strong>입니다.
</div>

<h2>유전 특성의 목표값과 허용 오차</h2>
<p>조직등가액은 주파수별로 목표 비유전율(εr)과 도전율(σ, S/m)이 표준에 표로 정해져 있습니다. 아래는 머리 조직 목표값의 <strong>예시</strong>입니다(IEC/IEEE 62209-1528 등 표준 표에서 인용되는 대표값 — 실제 시험에는 반드시 적용 표준의 표를 사용하세요).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>주파수</th><th>목표 εr (예)</th><th>목표 σ (S/m, 예)</th></tr></thead>
<tbody>
<tr><td class="num">835 MHz</td><td class="num">41.5</td><td class="num">0.90</td></tr>
<tr><td class="num">1900 MHz</td><td class="num">40.0</td><td class="num">1.40</td></tr>
<tr><td class="num">2450 MHz</td><td class="num">39.2</td><td class="num">1.80</td></tr>
<tr><td class="num">5800 MHz</td><td class="num">35.3</td><td class="num">5.27</td></tr>
</tbody></table></div>
<p>주파수가 올라갈수록 εr은 조금씩 낮아지고 σ는 크게 높아집니다. 그래서 한 가지 액체로 모든 대역을 측정할 수 없고, 대역별 액체를 따로 준비합니다(광대역 액체도 있지만 목표값 범위를 확인해야 함).</p>

<h3>허용 오차</h3>
<ul>
  <li>대표적으로 <strong>목표값 대비 ±5%</strong> 이내가 널리 쓰이는 기준입니다(예: FCC KDB 865664의 요구).</li>
  <li>IEC 계열 표준에서는 더 넓은 허용 범위(예: ±10%)를 두고, 대신 목표값과의 차이에 따른 <strong>SAR 보정</strong>이나 불확도 반영을 요구하는 방식도 있습니다.</li>
  <li>적용 표준·인증 제도에 따라 다르므로 <strong>프로젝트별로 허용 기준을 사내 절차서와 표준에서 확인</strong>하세요.</li>
</ul>
<div class="formula">편차(%) = (측정값 − 목표값) / 목표값 × 100</div>
<p>예: 1900 MHz에서 측정 σ = 1.45 S/m → (1.45 − 1.40)/1.40 × 100 = <strong>+3.6%</strong> → ±5% 이내이므로 적합.</p>

<h2>유전 특성 측정 — 개방단 동축 프로브 + VNA</h2>
<p>유전 특성은 <strong>개방단 동축 프로브(Open-ended Coaxial Probe)</strong>를 액체에 담그고 <strong>벡터 네트워크 분석기(VNA)</strong>로 반사계수(S11)를 측정한 뒤, 소프트웨어가 εr과 σ로 환산하는 방식이 일반적입니다(예: SPEAG DAK, Keysight 유전율 프로브 키트 등).</p>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="개방단 동축 프로브를 이용한 유전 특성 측정 셋업">
  <defs><marker id="sarliq-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="40" width="160" height="80" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="90" y="72" font-weight="700">PC · 변환 SW</text>
    <text x="90" y="95" font-size="12" fill="var(--text-3)">S11 → εr, σ 계산</text>
    <rect x="220" y="40" width="160" height="80" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="300" y="72" font-weight="700" fill="var(--dg-accent)">VNA</text>
    <text x="300" y="95" font-size="12" fill="var(--text-3)">반사계수 S11 측정</text>
    <path d="M220 80 L 175 80" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarliq-arw)"/>
    <path d="M380 80 C 450 80, 470 60, 490 60" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="440" y="55" font-size="12" fill="var(--text-3)">안정된 케이블</text>
    <!-- probe -->
    <rect x="490" y="45" width="24" height="30" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="496" y="75" width="12" height="110" fill="var(--dg-accent)" opacity="0.8"/>
    <!-- beaker -->
    <path d="M440 120 L 440 225 L 580 225 L 580 120" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="442" y="140" width="136" height="83" fill="var(--dg-fill)" opacity="0.9"/>
    <path d="M442 140 L 578 140" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
    <rect x="496" y="75" width="12" height="110" fill="var(--dg-accent)" opacity="0.8"/>
    <text x="510" y="212" font-size="12" fill="var(--text-2)">조직등가액</text>
    <!-- thermometer -->
    <line x1="560" y1="100" x2="560" y2="195" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <circle cx="560" cy="198" r="5" fill="var(--dg-accent-2)"/>
    <g text-anchor="start" font-size="12.5">
      <text x="600" y="110" fill="var(--dg-accent-2)" font-weight="700">온도계</text>
      <text x="600" y="130" fill="var(--text-2)">측정 시 액체 온도 기록</text>
      <text x="600" y="160" fill="var(--dg-accent)" font-weight="700">프로브 끝</text>
      <text x="600" y="180" fill="var(--text-2)">기포 없이 완전히 잠김</text>
      <text x="600" y="200" fill="var(--text-2)">용기 벽·바닥과 거리 확보</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 개방단 동축 프로브와 VNA를 이용한 조직등가액 유전 특성 측정 셋업</figcaption>
</figure>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/vna.svg" alt="벡터 네트워크 분석기"></div>
  <div>
    <h3>벡터 네트워크 분석기 (VNA)</h3>
    <div class="equip-en">Vector Network Analyzer</div>
    <p>신호를 보내고 되돌아오는 신호의 크기와 위상을 함께 재는 장비입니다. SAR 시험실에서는 조직등가액 유전 특성 측정과 기준 다이폴의 정합(Return loss) 확인에 사용합니다.</p>
    <dl>
      <dt>용도</dt><dd>유전율 프로브의 S11 측정, 다이폴 리턴로스 확인</dd>
      <dt>주요 기능</dt><dd>1포트 교정(Open/Short/Load), S-파라미터 측정</dd>
      <dt>주의</dt><dd>측정 중 케이블을 움직이지 않기(위상 변화 → 결과 오차)</dd>
      <dt>대표 모델</dt><dd>Keysight, Rohde &amp; Schwarz, Anritsu 등의 VNA</dd>
    </dl>
  </div>
</div>

<h3>측정 절차</h3>
<ol class="steps">
  <li><strong>VNA 준비</strong>VNA를 충분히 예열하고, 측정 주파수 범위(시험 대역을 포함하도록)를 설정합니다.</li>
  <li><strong>프로브 교정</strong>공기(Open) → 단락(Short, 단락 블록) → 기준 액체(대개 온도를 아는 탈이온수) 순으로 교정합니다. 교정 중·후에 케이블을 움직이지 않습니다.</li>
  <li><strong>검증 측정(권장)</strong>물이나 기준 액체를 다시 측정해 문헌값과 맞는지 확인합니다.</li>
  <li><strong>액체 측정</strong>액체를 잘 저어 균일하게 한 뒤, 프로브 끝에 <strong>기포가 없도록</strong> 담그고 측정합니다. 동시에 액체 온도를 기록합니다.</li>
  <li><strong>판정·기록</strong>시험 주파수(대개 사용 대역의 하·중·상단)에서 목표값 대비 편차를 계산해 허용 범위 이내인지 확인하고 기록합니다.</li>
</ol>

<h2>온도와 액체 깊이</h2>
<div class="kbox">
  <div><div class="k">액체 온도 범위 (예)</div><div class="v">18 ~ 25 ℃</div></div>
  <div><div class="k">측정 중 온도 변화 (예)</div><div class="v">±2 ℃ 이내</div></div>
  <div><div class="k">액체 깊이 (예)</div><div class="v">15 cm 이상</div></div>
</div>
<ul>
  <li><strong>온도</strong> : 유전 특성은 온도에 따라 변합니다. 대표적으로 18~25 ℃ 범위에서, 유전 특성 측정 시점의 온도와 SAR 측정 중 온도 차이가 ±2 ℃ 이내가 되도록 관리합니다(세부 조건은 적용 표준 확인). 시험실 공조를 안정시키고 액체를 미리 실온에 둡니다.</li>
  <li><strong>깊이</strong> : 팬텀 속 액체 깊이가 얕으면 바닥에서 반사가 생겨 SAR가 달라집니다. 대표적으로 <strong>15 cm 이상</strong>(대략 ±0.5 cm)을 유지합니다. 자로 재서 기록합니다.</li>
  <li><strong>증발</strong> : 물이 증발하면 농도가 변해 εr·σ가 바뀝니다. 사용하지 않을 때는 팬텀과 용기를 덮어 둡니다.</li>
</ul>

<h2>시스템 체크 — 기준 다이폴로 전체 시스템 확인</h2>
<p>액체가 맞더라도 프로브·DAE·소프트웨어 설정 어딘가가 틀렸을 수 있습니다. 그래서 <strong>SAR 값을 이미 알고 있는 기준 다이폴</strong>을 평판 팬텀 아래에 두고 SAR를 측정해, 교정 성적서의 목표값과 비교합니다. 이것을 <strong>시스템 체크(System Check)</strong>라고 합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 280" role="img" aria-label="기준 다이폴을 이용한 시스템 체크 셋업">
  <defs><marker id="sarchk-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="190" width="120" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="70" y="214" font-weight="700">신호발생기</text>
    <text x="70" y="233" font-size="11.5" fill="var(--text-3)">CW, 시험 주파수</text>
    <rect x="160" y="190" width="100" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="210" y="214" font-weight="700">증폭기</text>
    <text x="210" y="233" font-size="11.5" fill="var(--text-3)">필요 시</text>
    <rect x="290" y="190" width="110" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="345" y="214" font-weight="700">방향성 결합기</text>
    <text x="345" y="233" font-size="11.5" fill="var(--text-3)">순방향 전력 감시</text>
    <rect x="300" y="100" width="90" height="46" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="345" y="128" font-weight="700" fill="var(--dg-accent-2)">파워미터</text>
    <path d="M130 218 L 155 218" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarchk-arw)"/>
    <path d="M260 218 L 285 218" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarchk-arw)"/>
    <path d="M345 190 L 345 151" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarchk-arw)"/>
    <path d="M400 218 L 520 218 L 520 186" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarchk-arw)"/>
    <!-- phantom -->
    <path d="M430 40 L 430 150 L 740 150 L 740 40" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="432" y="60" width="306" height="88" fill="var(--dg-fill)"/>
    <path d="M432 60 L 738 60" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
    <text x="585" y="90" font-size="12" fill="var(--text-2)">평판 팬텀 + 조직등가액 (깊이 15 cm 이상)</text>
    <line x1="585" y1="20" x2="585" y2="135" stroke="var(--dg-accent)" stroke-width="3"/>
    <text x="640" y="30" font-size="12" fill="var(--dg-accent)">SAR 프로브</text>
    <!-- spacer and dipole -->
    <rect x="570" y="150" width="30" height="16" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="480" y1="176" x2="690" y2="176" stroke="var(--dg-accent-2)" stroke-width="5"/>
    <rect x="512" y="170" width="16" height="16" fill="var(--dg-accent-2)"/>
    <text x="700" y="198" font-size="12" fill="var(--dg-accent-2)">기준 다이폴 (λ/2)</text>
    <text x="685" y="165" font-size="11.5" fill="var(--text-3)">스페이서(정해진 간격)</text>
    <text x="400" y="272" font-size="12.5" fill="var(--text-2)">측정 SAR를 입력 1 W 기준으로 정규화 → 다이폴 교정 성적서 목표값과 비교 (±10% 이내)</text>
  </g>
</svg>
<figcaption>그림 2. 기준 다이폴을 이용한 시스템 체크. 다이폴 입력 전력을 정확히 알고 있으므로 SAR의 “정답”과 비교할 수 있습니다.</figcaption>
</figure>

<h3>시스템 체크 판정</h3>
<p>다이폴 교정 성적서에는 특정 액체에서 <strong>입력 1 W당 SAR(1 g, 10 g)</strong> 목표값이 적혀 있습니다. 실제 측정에서는 대개 수십~수백 mW(예: 100 mW, 250 mW)를 넣고 측정한 뒤 1 W로 정규화해 비교합니다.</p>
<div class="formula">정규화 SAR = 측정 SAR × (1 W / 입력 전력) &nbsp;→&nbsp; 편차 = (정규화 SAR − 목표값) / 목표값 × 100 %</div>
<p>예: 1900 MHz 다이폴, 입력 250 mW, 측정 SAR(1 g) = 10.1 W/kg → 정규화 40.4 W/kg. 목표값 39.8 W/kg이면 편차 +1.5% → <strong>±10% 이내이므로 합격</strong>.</p>
<ul>
  <li>시스템 체크는 <strong>시험 주파수에 가까운</strong> 다이폴로, 시험에 사용할 <strong>같은 액체·같은 프로브</strong>로 수행합니다.</li>
  <li>일반적으로 <strong>목표값 대비 ±10% 이내</strong>를 합격으로 봅니다(적용 표준·절차서 확인).</li>
  <li>이보다 더 정밀한 <strong>시스템 검증(System Validation)</strong>은 시스템 설치 후, 프로브 교정 후, 새 주파수·액체를 쓸 때 등 정해진 시점에 별도로 수행합니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">체크가 불합격이면?</span>
  절대로 “다시 해서 맞으면 넘어가기”로 끝내지 마세요. 원인(액체 온도, 액체 깊이, 다이폴 위치·스페이서, 케이블·결합기 손실 보정값, 프로브 설정/ConvF 선택, 파워미터 영점)을 찾아 조치하고, <strong>불합격 기록과 조치 내용을 모두 남겨야</strong> 합니다. 체크가 합격하기 전에는 시료 SAR 측정을 하지 않습니다.
</div>

<h2>일일 준비 절차 요약</h2>
<ol class="steps">
  <li><strong>환경 확인</strong>시험실 온도·습도를 기록합니다(공조 안정 확인).</li>
  <li><strong>액체 준비</strong>시험 대역에 맞는 액체를 선택하고, 증발·침전 여부를 확인한 뒤 잘 섞습니다.</li>
  <li><strong>유전 특성 측정</strong>VNA와 유전율 프로브를 교정하고 εr, σ를 측정해 허용 범위 이내인지 확인합니다.</li>
  <li><strong>팬텀 채우기·깊이 확인</strong>액체를 기포 없이 채우고 깊이(15 cm 이상)와 온도를 기록합니다.</li>
  <li><strong>시스템 체크</strong>기준 다이폴로 SAR를 측정해 목표값 대비 ±10% 이내인지 확인합니다.</li>
  <li><strong>기록 저장</strong>측정 파일, 스크린샷, 기록지를 프로젝트 폴더에 저장하고 사용 장비 교정 기한을 기록합니다.</li>
</ol>

<h2>기록 양식 예시</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>날짜</th><th>액체</th><th>주파수</th><th>액체 온도</th><th>εr 측정/목표 (편차)</th><th>σ 측정/목표 (편차)</th><th>깊이</th><th>시스템 체크 1 g (정규화/목표, 편차)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>2026-09-01</td><td>Head 1900</td><td class="num">1900 MHz</td><td class="num">22.1 ℃</td><td class="num">39.2 / 40.0 (−2.0%)</td><td class="num">1.45 / 1.40 (+3.6%)</td><td class="num">15.3 cm</td><td class="num">40.4 / 39.8 (+1.5%)</td><td>적합</td></tr>
<tr><td>2026-09-01</td><td>Head 2450</td><td class="num">2450 MHz</td><td class="num">22.3 ℃</td><td class="num">38.4 / 39.2 (−2.0%)</td><td class="num">1.86 / 1.80 (+3.3%)</td><td class="num">15.2 cm</td><td class="num">53.9 / 52.4 (+2.9%)</td><td>적합</td></tr>
</tbody></table></div>
<p class="muted">※ 표의 수치는 교육용 가상 예시입니다. 사용한 VNA·유전율 프로브·다이폴·파워미터의 관리번호와 교정 만료일도 함께 기록하세요. 인쇄용 기록지는 <a href="#/forms">양식</a>을 참고하세요.</p>

<div class="callout tip">
  <span class="callout-title">현장 팁</span>
  액체 값이 목표에서 조금씩 벗어나기 시작하면 대개 <strong>물 증발</strong>(εr↓, σ↑ 경향) 때문입니다. 제조사 지침에 따라 탈이온수를 소량 보충해 조정할 수 있지만, 조정 후에는 반드시 다시 측정해 기록합니다. 액체 사용 기간·교체 이력도 관리 대장에 남기세요.
</div>
`,
  quiz: [
    { q: '1900 MHz 목표 σ가 1.40 S/m이고 측정값이 1.49 S/m이다. 허용 기준이 ±5%라면 판정은?',
      options: ['적합 (+3.1%)', '적합 (+6.4%)', '부적합 (+6.4%)', '부적합 (−6.4%)'],
      answer: 2, explain: '(1.49 − 1.40)/1.40 = +6.4% 이므로 ±5%를 벗어나 부적합입니다. 액체를 조정·재측정해야 합니다.' },
    { q: '기준 다이폴에 250 mW를 넣고 측정한 SAR(1 g)가 13.0 W/kg이다. 목표값(1 W 기준)이 55.0 W/kg일 때 편차는?',
      options: ['−5.5%', '+5.5%', '−23.6%', '+10.0%'],
      answer: 0, explain: '정규화 SAR = 13.0 × 4 = 52.0 W/kg, (52.0 − 55.0)/55.0 = −5.5% 로 ±10% 이내입니다.' },
    { q: '팬텀 속 조직등가액 깊이에 대한 대표적인 요구로 옳은 것은?',
      options: ['5 cm 이상', '10 cm 이하', '15 cm 이상', '깊이는 상관없다'],
      answer: 2, explain: '바닥 반사 영향을 줄이기 위해 대표적으로 15 cm 이상의 액체 깊이를 유지합니다.' },
    { q: '시스템 체크가 불합격(±10% 초과)일 때 올바른 대응은?',
      options: ['합격할 때까지 반복 측정하고 마지막 값만 기록한다', '시료 측정을 먼저 하고 나중에 체크한다', '원인을 찾아 조치하고, 불합격 기록과 조치 내용을 남긴 뒤 재수행한다', '목표값을 수정한다'],
      answer: 2, explain: '불합격 기록도 품질 기록입니다. 원인 조치 후 재체크하고, 합격 전에는 시료 측정을 하지 않습니다.' }
  ],
  refs: [
    { title: 'IEC Webstore — IEC/IEEE 62209-1528', url: 'https://webstore.iec.ch', note: '조직등가액 목표값, 시스템 체크·검증 요구사항' },
    { title: 'FCC KDB (KDB 865664)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'SAR 측정 요구사항(유전 특성 허용 오차 등) — KDB 번호로 검색' },
    { title: 'SPEAG', url: 'https://speag.swiss', note: '유전율 측정 키트(DAK), 기준 다이폴, 조직등가액 자료' }
  ]
});

COURSE.addLesson({
  id: 'sar-procedure',
  module: 'sar',
  order: 4,
  title: 'SAR 시험 절차',
  minutes: 22,
  level: '실무',
  summary: '머리(Cheek/Tilt)·몸통·핫스팟·사지 시험 위치, 기준 파워 → Area scan → Zoom scan → 파워 드리프트로 이어지는 측정 흐름과 시험 축소 개념을 익힙니다.',
  objectives: [
    '머리 Cheek/Tilt 15°, 몸통 착용, 핫스팟, 사지 시험 위치를 구분하고 셋업할 수 있다.',
    'Area scan과 Zoom scan의 목적과 순서를 설명할 수 있다.',
    '파워 드리프트의 의미와 판정(±5% 권고)을 안다.',
    '무선통신 시험기로 단말을 최대 출력에 고정하는 이유와 시험 축소 규정의 개념을 안다.'
  ],
  body: `
<p>액체와 시스템 체크가 끝났다면 이제 시료를 측정합니다. SAR 시험의 핵심은 <strong>“실제 사용 중 가장 나쁜(SAR가 가장 높은) 조건을 재현”</strong>하는 것입니다. 그래서 기기를 최대 출력으로 송신시키고, 사람이 기기를 몸에 대는 여러 자세(시험 위치)에서 가장 높은 SAR를 찾습니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  “가장 불리한 조건 찾기 게임”입니다. 출력은 최대로, 몸과 거리는 가장 가깝게, 여러 자세·여러 채널을 바꿔 가며 그중 <strong>최고 점수(최대 SAR)</strong>를 성적서에 올립니다.
</div>

<h2>단말을 최대 출력으로 고정하기</h2>
<p>휴대폰은 평소 기지국 신호 세기에 따라 출력을 계속 바꿉니다(전력 제어). SAR 시험에서는 <strong>무선통신 시험기(Radio Communication Tester, 기지국 시뮬레이터)</strong>로 호(Call)를 연결한 뒤, 단말에 “최대 출력으로 보내라”는 명령(예: 전력 제어 비트 All Up, 최대 전력 설정)을 보내 출력을 고정합니다.</p>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/radio-comm-tester.svg" alt="무선통신 시험기"></div>
  <div>
    <h3>무선통신 시험기</h3>
    <div class="equip-en">Radio Communication Tester (Base Station Simulator)</div>
    <p>기지국처럼 동작하며 단말과 호를 맺고, 채널·대역폭·자원블록(RB)·변조·출력 등을 원하는 조건으로 고정합니다.</p>
    <dl>
      <dt>용도</dt><dd>SAR 측정 중 단말의 송신 조건 고정, 전도 출력(기준 출력) 측정</dd>
      <dt>주요 기능</dt><dd>LTE/NR/WCDMA 등 신호 규격 시뮬레이션, 폐루프 전력 제어</dd>
      <dt>주의</dt><dd>SAR 측정 중에는 무선(안테나) 연결 — 연결 손실이 커서 호가 끊기지 않게 시험기 출력 레벨 확인</dd>
      <dt>대표 모델</dt><dd>Rohde &amp; Schwarz CMW/CMX 계열, Keysight, Anritsu 등</dd>
    </dl>
  </div>
</div>
<p>Wi-Fi·Bluetooth처럼 호 연결이 없는 기술은 제조사가 제공하는 <strong>시험 모드(Test mode, 연속 송신 명령)</strong>로 채널·데이터율·출력을 고정합니다. 시험 모드 진입 방법과 설정값은 반드시 기록합니다.</p>

<h2>시험 위치 (Test Positions)</h2>
<h3>1) 머리 — Cheek(Touch)와 Tilt 15°</h3>
<p>통화 자세를 재현합니다. SAM 팬텀의 <strong>좌측과 우측</strong> 모두에서 측정합니다.</p>
<ul>
  <li><strong>Cheek(Touch) 위치</strong> : 기기의 수화부(스피커)를 팬텀의 귀 기준점에 맞추고, 기기를 볼 쪽으로 돌려 <strong>뺨에 닿게</strong> 합니다.</li>
  <li><strong>Tilt 15° 위치</strong> : Cheek 위치에서 귀 기준점을 축으로 기기를 뺨에서 <strong>15° 떼어낸</strong> 자세입니다.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="머리 팬텀 Cheek 위치와 Tilt 15도 위치 비교">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- Cheek panel -->
    <text x="190" y="24" font-weight="700" font-size="15" fill="var(--dg-accent)">Cheek (Touch)</text>
    <ellipse cx="170" cy="140" rx="95" ry="100" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="150" y="145" fill="var(--text-2)">SAM 머리</text>
    <circle cx="265" cy="120" r="6" fill="var(--dg-accent-2)"/>
    <text x="300" y="104" font-size="12" fill="var(--dg-accent-2)" text-anchor="start">귀 기준점</text>
    <g transform="rotate(8 265 120)">
      <rect x="268" y="60" width="18" height="170" rx="5" fill="var(--dg-accent)" opacity="0.85"/>
    </g>
    <text x="330" y="215" font-size="12" fill="var(--text-2)">뺨에 밀착</text>
    <!-- Tilt panel -->
    <text x="570" y="24" font-weight="700" font-size="15" fill="var(--dg-accent-2)">Tilt 15°</text>
    <ellipse cx="550" cy="140" rx="95" ry="100" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="530" y="145" fill="var(--text-2)">SAM 머리</text>
    <circle cx="645" cy="120" r="6" fill="var(--dg-accent-2)"/>
    <g transform="rotate(8 645 120)">
      <rect x="648" y="60" width="18" height="170" rx="5" fill="none" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
    </g>
    <g transform="rotate(-7 645 120)">
      <rect x="648" y="60" width="18" height="170" rx="5" fill="var(--dg-accent)" opacity="0.85"/>
    </g>
    <path d="M641 240 Q 656 252 672 238" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="720" y="240" font-size="12" fill="var(--dg-accent-2)">15° 벌림</text>
    <text x="560" y="262" font-size="12" fill="var(--text-3)">귀 기준점을 축으로 회전 (점선 = Cheek 위치)</text>
    <text x="190" y="262" font-size="12" fill="var(--text-3)">좌/우 머리 각각 측정</text>
  </g>
</svg>
<figcaption>그림 1. 머리 시험 위치 개념도(측면 단순화). Cheek은 뺨에 밀착, Tilt는 귀 기준점을 축으로 15° 벌린 자세입니다.</figcaption>
</figure>

<h3>2) 몸통 착용(Body-worn)과 핫스팟(Hotspot)</h3>
<ul>
  <li><strong>Body-worn</strong> : 벨트 클립·홀스터에 넣고 몸에 착용하는 상황을 재현합니다. 평판 팬텀 아래에 기기의 앞·뒷면을 향하게 두고 <strong>정해진 이격거리</strong>로 측정합니다. 이격거리는 제도·기기 유형에 따라 다르며(예: 5 mm, 10 mm, 15 mm 등), 액세서리가 있으면 그 두께가 기준이 되기도 합니다.</li>
  <li><strong>핫스팟(Hotspot)</strong> : 휴대폰을 무선 공유기처럼 쓰는 상황입니다. FCC에서는 대표적으로 <strong>10 mm</strong> 이격으로 앞·뒷면과 안테나 근처 옆면(edge)을 측정합니다.</li>
  <li><strong>사지(Extremity)</strong> : 손목 착용(스마트워치), 손에 드는 기기 등. 10 g 평균, 한계 4.0 W/kg으로 평가하며 대개 0 mm(밀착)에 가깝게 측정합니다.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="평판 팬텀 아래 기기의 이격거리 설정">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <path d="M40 30 L 40 110 L 400 110 L 400 30" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="42" y="45" width="356" height="63" fill="var(--dg-fill)"/>
    <text x="220" y="80" font-size="12" fill="var(--text-2)">평판 팬텀 + 조직등가액</text>
    <rect x="30" y="110" width="380" height="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="470" y="117" font-size="12" fill="var(--text-3)" text-anchor="start">팬텀 바닥 쉘(예: 2 mm)</text>
    <rect x="100" y="150" width="240" height="18" rx="5" fill="var(--dg-accent)" opacity="0.85"/>
    <text x="220" y="190" font-size="12" fill="var(--dg-accent)">기기 (뒷면이 팬텀을 향함)</text>
    <line x1="360" y1="115" x2="360" y2="150" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <line x1="352" y1="115" x2="368" y2="115" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <line x1="352" y1="150" x2="368" y2="150" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="378" y="137" font-size="12.5" fill="var(--dg-accent-2)" text-anchor="start" font-weight="700">이격거리 d</text>
    <rect x="150" y="168" width="140" height="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="220" y="212" font-size="11.5" fill="var(--text-3)">기기 홀더 (저유전율 재질)</text>
    <g text-anchor="start" font-size="12.5">
      <text x="470" y="160" font-weight="700">d 는 팬텀 바깥 표면 ↔ 기기 표면</text>
      <text x="470" y="182" fill="var(--text-2)">Body-worn : 예 5~15 mm (제도 확인)</text>
      <text x="470" y="202" fill="var(--text-2)">Hotspot : 예 10 mm (FCC)</text>
      <text x="470" y="222" fill="var(--text-2)">Extremity : 예 0 mm (밀착)</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. 평판 팬텀을 이용한 몸통·핫스팟·사지 시험 위치. 스페이서나 게이지로 이격거리를 정확히 맞춥니다.</figcaption>
</figure>

<h2>측정 흐름 — 한 번의 SAR 측정은 이렇게 진행됩니다</h2>
<ol class="steps">
  <li><strong>기준 파워 측정 (Reference / Drift start)</strong>프로브를 기준점(기기 위 액체 속 고정 위치)에 두고 전계를 잽니다. 측정 시작 시점의 기기 출력을 대표하는 값입니다.</li>
  <li><strong>Area scan (영역 스캔)</strong>팬텀 표면 가까이에서 넓은 영역을 성긴 격자(예: 3 GHz 이하 15 mm 이하 간격)로 훑어 SAR 분포와 <strong>최대점(Peak)</strong> 위치를 찾습니다.</li>
  <li><strong>Zoom scan (정밀 스캔)</strong>최대점 주변에서 3차원 정육면체 영역을 촘촘히(예: 수평 수 mm, 수직 수 mm 간격) 측정합니다. 이 데이터로 1 g/10 g 평균을 계산합니다. 두 번째 피크가 기준에 가까우면 그 위치도 Zoom scan 합니다.</li>
  <li><strong>파워 드리프트 측정 (Drift end)</strong>다시 기준점에서 전계를 재고 시작 값과 비교합니다. 측정 중 기기 출력이 변하지 않았는지 확인하는 단계입니다.</li>
  <li><strong>평균 계산</strong>소프트웨어가 Zoom scan 데이터를 보간·외삽(팬텀 표면까지)하여 1 g 또는 10 g 정육면체 평균 SAR의 최대값을 구합니다.</li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="Area scan 격자와 최대점, Zoom scan 정육면체">
  <defs><marker id="sarproc-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <text x="190" y="22" font-weight="700" font-size="15">① Area scan (위에서 본 모습)</text>
    <rect x="40" y="40" width="300" height="220" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <ellipse cx="220" cy="130" rx="100" ry="70" fill="var(--dg-accent-2)" opacity="0.12"/>
    <ellipse cx="220" cy="130" rx="60" ry="42" fill="var(--dg-accent-2)" opacity="0.2"/>
    <ellipse cx="220" cy="130" rx="28" ry="20" fill="var(--dg-accent-2)" opacity="0.35"/>
    <g stroke="var(--dg-muted)" stroke-width="0.8">
      <line x1="70" y1="40" x2="70" y2="260"/><line x1="100" y1="40" x2="100" y2="260"/><line x1="130" y1="40" x2="130" y2="260"/><line x1="160" y1="40" x2="160" y2="260"/><line x1="190" y1="40" x2="190" y2="260"/><line x1="220" y1="40" x2="220" y2="260"/><line x1="250" y1="40" x2="250" y2="260"/><line x1="280" y1="40" x2="280" y2="260"/><line x1="310" y1="40" x2="310" y2="260"/>
      <line x1="40" y1="70" x2="340" y2="70"/><line x1="40" y1="100" x2="340" y2="100"/><line x1="40" y1="130" x2="340" y2="130"/><line x1="40" y1="160" x2="340" y2="160"/><line x1="40" y1="190" x2="340" y2="190"/><line x1="40" y1="220" x2="340" y2="220"/><line x1="40" y1="250" x2="340" y2="250"/>
    </g>
    <circle cx="220" cy="130" r="6" fill="var(--dg-accent-2)"/>
    <rect x="195" y="105" width="50" height="50" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="275" y="100" font-size="12" fill="var(--dg-accent-2)" font-weight="700">최대점</text>
    <text x="190" y="280" font-size="12" fill="var(--text-3)">성긴 격자(예: 15 mm) · 표면 가까이 한 층</text>
    <path d="M345 130 L 420 130" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#sarproc-arw)"/>
    <text x="382" y="120" font-size="12" fill="var(--text-3)">최대점 주변</text>
    <text x="590" y="22" font-weight="700" font-size="15">② Zoom scan (3차원 정육면체)</text>
    <g stroke="var(--dg-accent)" stroke-width="1.5" fill="none">
      <path d="M470 90 L 630 90 L 630 250 L 470 250 Z" fill="var(--dg-fill)"/>
      <path d="M470 90 L 530 50 L 690 50 L 630 90"/>
      <path d="M630 250 L 690 210 L 690 50"/>
    </g>
    <g fill="var(--dg-accent)">
      <circle cx="490" cy="110" r="2.5"/><circle cx="530" cy="110" r="2.5"/><circle cx="570" cy="110" r="2.5"/><circle cx="610" cy="110" r="2.5"/>
      <circle cx="490" cy="150" r="2.5"/><circle cx="530" cy="150" r="2.5"/><circle cx="570" cy="150" r="2.5"/><circle cx="610" cy="150" r="2.5"/>
      <circle cx="490" cy="190" r="2.5"/><circle cx="530" cy="190" r="2.5"/><circle cx="570" cy="190" r="2.5"/><circle cx="610" cy="190" r="2.5"/>
      <circle cx="490" cy="230" r="2.5"/><circle cx="530" cy="230" r="2.5"/><circle cx="570" cy="230" r="2.5"/><circle cx="610" cy="230" r="2.5"/>
    </g>
    <rect x="515" y="195" width="50" height="50" fill="var(--dg-accent-2)" opacity="0.3" stroke="var(--dg-accent-2)"/>
    <text x="698" y="239" font-size="12" fill="var(--dg-accent-2)" text-anchor="start">1 g 큐브</text>
    <line x1="565" y1="235" x2="693" y2="235" stroke="var(--dg-accent-2)" stroke-dasharray="3 3"/>
    <text x="700" y="140" font-size="12" fill="var(--text-2)" text-anchor="start">깊이</text>
    <text x="700" y="156" font-size="12" fill="var(--text-2)" text-anchor="start">방향</text>
    <text x="550" y="275" font-size="12" fill="var(--text-2)">표면 쪽(아래) — 기기와 가장 가까움</text>
  </g>
</svg>
<figcaption>그림 3. Area scan으로 최대점을 찾고(왼쪽), 그 주변을 Zoom scan으로 3차원 측정한 뒤 평균 큐브가 최대가 되는 위치를 계산합니다(오른쪽). 표면에서 가장 가까운 층의 값은 외삽으로 구합니다.</figcaption>
</figure>

<h3>파워 드리프트 판정</h3>
<div class="formula">드리프트(dB) = 10 · log<sub>10</sub>( SAR<sub>끝</sub> / SAR<sub>시작</sub> )</div>
<p>측정 시작과 끝 값의 차이가 대표적으로 <strong>±5%(약 ±0.21 dB) 이내</strong>가 되도록 권고됩니다(적용 표준·KDB·절차서 확인). 드리프트가 크면 배터리 전압 저하, 발열로 인한 출력 저하, 호 끊김·재연결 등을 의심하고 재측정합니다. 음(−)의 드리프트는 SAR를 낮게 측정했을 가능성이 있으므로 특히 주의합니다.</p>

<h2>무엇을 몇 번 측정하나 — 시험 조합과 축소 규정</h2>
<p>SAR 시험 조합은 금방 수백 가지가 됩니다: <em>(대역 수) × (채널 수) × (시험 위치 수) × (변조/대역폭/RB 설정) × (안테나 수)</em>. 모두 측정하면 몇 주가 걸리므로 표준과 규제기관은 <strong>시험 축소(Test reduction)</strong> 규칙을 제공합니다.</p>
<ul>
  <li><strong>최대 출력 채널 우선</strong> : 각 대역·위치에서 전도 출력이 가장 높은 채널(또는 중간 채널)을 먼저 측정합니다.</li>
  <li><strong>낮은 값이면 추가 채널 생략</strong> : 대표적으로 FCC KDB 447498에서는 조정 SAR가 일정 수준(예: 1 g 기준 0.8 W/kg) 이하이면 다른 채널 측정을 생략할 수 있게 하는 개념이 있습니다.</li>
  <li><strong>SAR 시험 면제(Exclusion)</strong> : 출력이 낮고 이격거리가 충분하면 측정 대신 계산으로 면제되는 기준이 있습니다.</li>
  <li><strong>기술별 KDB</strong> : LTE, NR, Wi-Fi 등 기술별로 어떤 설정(대역폭, RB, 변조)을 우선 측정할지 정한 문서가 있습니다(예: KDB 941225 계열, KDB 248227 등).</li>
</ul>
<div class="callout warn">
  <span class="callout-title">축소 규정은 반드시 원문 확인</span>
  축소 조건은 제도(한국 고시, FCC KDB, EU 표준)마다 다르고 자주 개정됩니다. “지난 프로젝트에서 이렇게 했으니까”로 적용하지 말고, <strong>이번 프로젝트의 적용 표준·KDB 버전을 확인</strong>한 뒤 시험 계획서(Test plan)에 근거를 적어 두세요.
</div>

<h2>실무 순서 요약</h2>
<ol class="steps">
  <li><strong>전도 출력 측정</strong>모든 대역·채널·모드의 전도(Conducted) 출력을 측정해 표로 정리합니다. 이 표가 시험 채널 선정과 스케일링의 근거입니다.</li>
  <li><strong>시험 계획</strong>시험 위치, 대역, 채널, 이격거리, 축소 규정 적용 근거를 정합니다.</li>
  <li><strong>셋업</strong>기기를 홀더에 고정하고 위치(Cheek/Tilt/이격거리)를 맞춘 뒤 사진을 찍습니다.</li>
  <li><strong>측정</strong>기준 파워 → Area → Zoom → 드리프트 순으로 측정합니다.</li>
  <li><strong>즉시 검토</strong>측정 직후 분포 그림, 최대점 위치(스캔 영역 경계에 걸리지 않았는지), 드리프트를 확인합니다.</li>
</ol>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><p>Area scan 최대점이 스캔 영역 가장자리에 있는데 그대로 Zoom scan 진행 → 실제 최대점을 놓쳤을 수 있음.</p></div>
  <div class="good"><h4>✅ 좋은 예</h4><p>최대점이 가장자리에 걸리면 스캔 영역을 넓혀 다시 Area scan → 최대점이 영역 안쪽에 있는 것을 확인한 뒤 Zoom scan.</p></div>
</div>

<div class="callout tip">
  <span class="callout-title">현장 팁</span>
  시험 위치마다 <strong>셋업 사진</strong>(정면, 측면, 이격거리 게이지가 보이게)을 남기세요. 나중에 값이 이상하게 나왔을 때 원인을 찾는 가장 강력한 증거이고, 성적서 부록에도 들어갑니다.
</div>
`,
  quiz: [
    { q: 'Tilt 위치에 대한 설명으로 옳은 것은?',
      options: ['기기를 팬텀에서 15 mm 떨어뜨린다', '평판 팬텀에서 10 mm 띄운다', '기기를 90° 돌려 옆면을 댄다', 'Cheek 위치에서 귀 기준점을 축으로 기기를 뺨에서 15° 벌린다'],
      answer: 3, explain: 'Tilt 15°는 Cheek 위치에서 귀 기준점을 축으로 15° 회전해 뺨에서 떨어뜨린 자세입니다.' },
    { q: 'Area scan과 Zoom scan의 올바른 순서와 목적은?',
      options: ['Area scan으로 최대점 위치 탐색 → Zoom scan으로 3차원 정밀 측정 후 평균 계산', 'Zoom scan으로 최대점 찾기 → Area scan으로 평균 계산', '둘 중 하나만 하면 된다', 'Area scan은 시스템 체크에서만 사용한다'],
      answer: 0, explain: '성긴 Area scan으로 최대점을 찾고, 그 주변을 Zoom scan으로 3차원 측정해 1 g/10 g 평균을 구합니다.' },
    { q: '측정 시작 기준값 대비 끝 값이 −0.35 dB 변했다. 올바른 판단은?',
      options: ['정상 범위이므로 그대로 사용', '드리프트는 SAR와 관계없다', '약 −7.7%로 ±5%(약 ±0.21 dB) 권고를 넘으므로 원인 확인 후 재측정 검토', '양(+)이 아니므로 문제없다'],
      answer: 2, explain: '10^(−0.035) ≈ 0.923 → 약 −7.7% 변화입니다. 배터리·발열·호 상태를 확인하고 재측정을 검토합니다.' },
    { q: 'SAR 측정 중 단말 출력을 최대로 고정하는 데 주로 사용하는 장비는?',
      options: ['스펙트럼 분석기', '무선통신 시험기(기지국 시뮬레이터)', '오실로스코프', 'LISN'],
      answer: 1, explain: '무선통신 시험기로 호를 연결하고 전력 제어 명령으로 최대 출력에 고정합니다.' }
  ],
  refs: [
    { title: 'FCC KDB (447498, 865664, 941225, 248227 등)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'SAR 측정·시험 축소·기술별 가이드 — KDB 번호로 검색' },
    { title: 'IEC Webstore — IEC/IEEE 62209-1528', url: 'https://webstore.iec.ch', note: '시험 위치 정의, 스캔 요구사항' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '“전자파흡수율 측정기준” 고시 원문' }
  ]
});

COURSE.addLesson({
  id: 'sar-scaling',
  module: 'sar',
  order: 5,
  title: '스케일링 · 동시 전송 · 결과 판정',
  minutes: 22,
  level: '실무',
  summary: '측정 SAR를 튠업 최대 출력 기준으로 환산하는 조정 SAR(Reported SAR), 듀티사이클 보정, 동시 전송 합산 SAR와 SPLSR, 측정 불확도, 결과 표 작성법을 익힙니다.',
  objectives: [
    '측정 SAR를 튠업 최대 출력 기준 조정 SAR로 계산할 수 있다.',
    '듀티사이클 보정이 필요한 경우를 안다.',
    '동시 전송 시 합산 SAR와 SPLSR의 개념을 설명할 수 있다.',
    '확장 불확도의 의미를 알고 결과 표를 작성·판정할 수 있다.'
  ],
  body: `
<p>SAR 측정값을 그대로 성적서에 쓰면 될까요? 아닙니다. 시험한 시료 한 대의 출력은 같은 모델의 양산품 중 <strong>가장 높은 출력</strong>이 아닐 수 있습니다. 제조사는 양산 편차를 고려해 출력의 허용 범위(튠업 허용 오차, Tune-up tolerance)를 선언하는데, 인증은 <strong>그 범위의 최대 출력</strong>에서도 기준을 만족해야 합니다. 그래서 측정 SAR를 최대 허용 출력 기준으로 <strong>환산(스케일링)</strong>합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  시험한 휴대폰이 “조금 약하게 태어난” 개체일 수도 있습니다. 같은 모델 중 가장 세게 태어난 개체라면 SAR가 얼마일지를 <strong>비례 계산</strong>으로 구하는 것이 스케일링입니다. SAR는 출력에 비례하므로 계산이 간단합니다.
</div>

<h2>조정 SAR (Reported SAR) 계산</h2>
<div class="formula">조정 SAR = 측정 SAR × 10<sup>(P<sub>tune-up,max</sub> − P<sub>measured</sub>) / 10</sup></div>
<ul>
  <li><strong>P<sub>tune-up,max</sub></strong> : 제조사 튠업 문서에 선언된 최대 출력(목표 출력 + 허용 오차 상한), dBm</li>
  <li><strong>P<sub>measured</sub></strong> : 해당 채널에서 실제 측정한 전도 출력, dBm</li>
  <li>배수 관계로 쓰면 <em>조정 SAR = 측정 SAR × (허용 최대 출력[mW] / 측정 출력[mW])</em> 입니다.</li>
</ul>

<h3>수치 예제</h3>
<p>LTE Band 3, 중간 채널, 머리 우측 Cheek 위치:</p>
<ul>
  <li>측정 SAR(1 g) = 1.12 W/kg</li>
  <li>측정 전도 출력 = 23.2 dBm</li>
  <li>튠업 선언: 목표 23.0 dBm, 허용 오차 +1.0/−1.0 dB → 최대 24.0 dBm</li>
</ul>
<div class="formula">배수 = 10<sup>(24.0 − 23.2)/10</sup> = 10<sup>0.08</sup> ≈ 1.202 &nbsp;→&nbsp; 조정 SAR = 1.12 × 1.202 ≈ <strong>1.35 W/kg</strong></div>
<p>한계 1.6 W/kg 이하이므로 적합이지만, 조정 SAR가 0.8 W/kg을 넘으므로 전자파등급은 2등급 영역이고, 축소 규정상 다른 채널 측정이 필요할 수 있습니다(<a href="#/l/sar-procedure">4강</a> 참고).</p>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="측정 SAR와 조정 SAR 비교 막대 그래프">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <line x1="80" y1="210" x2="700" y2="210" stroke="var(--dg-line)" stroke-width="1.5"/>
    <line x1="80" y1="30" x2="80" y2="210" stroke="var(--dg-line)" stroke-width="1.5"/>
    <!-- scale: 1.0 W/kg = 100 px, y0=210 -->
    <text x="70" y="214" font-size="12" fill="var(--text-3)" text-anchor="end">0</text>
    <text x="70" y="134" font-size="12" fill="var(--text-3)" text-anchor="end">0.8</text>
    <text x="70" y="54" font-size="12" fill="var(--text-3)" text-anchor="end">1.6</text>
    <line x1="80" y1="130" x2="700" y2="130" stroke="var(--dg-ok)" stroke-dasharray="5 4"/>
    <text x="705" y="126" font-size="12" fill="var(--dg-ok)" text-anchor="end">1등급 경계 0.8 W/kg</text>
    <line x1="80" y1="50" x2="700" y2="50" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="6 3"/>
    <text x="705" y="44" font-size="12" fill="var(--dg-accent-2)" text-anchor="end">한계 1.6 W/kg (1 g)</text>
    <rect x="170" y="98" width="110" height="112" fill="var(--dg-muted)" opacity="0.6"/>
    <text x="225" y="90" font-weight="700">1.12</text>
    <text x="225" y="232" fill="var(--text-2)">측정 SAR (23.2 dBm)</text>
    <rect x="400" y="75" width="110" height="135" fill="var(--dg-accent)" opacity="0.85"/>
    <text x="455" y="67" font-weight="700" fill="var(--dg-accent)">1.35</text>
    <text x="455" y="232" fill="var(--text-2)">조정 SAR (24.0 dBm 환산)</text>
    <text x="340" y="150" font-size="12.5" fill="var(--text-2)">× 1.202</text>
    <text x="340" y="168" font-size="11.5" fill="var(--text-3)">(+0.8 dB)</text>
  </g>
</svg>
<figcaption>그림 1. 스케일링 예시. 0.8 dB 출력 차이가 SAR를 약 20% 끌어올립니다. 판정과 등급은 항상 <strong>조정 SAR</strong>로 합니다.</figcaption>
</figure>

<div class="callout warn">
  <span class="callout-title">튠업 문서가 판정의 기준입니다</span>
  측정 출력이 튠업 최대값보다 <strong>높게</strong> 나오면 문제입니다. 시료가 선언보다 센 출력을 내고 있다는 뜻이므로, 스케일링을 1 이하로 하지 말고 제조사에 알려 튠업 문서 수정 또는 시료 확인을 요청합니다. 튠업 문서 버전과 날짜도 성적서 기록에 남기세요.
</div>

<h2>듀티사이클 보정</h2>
<p>TDD 방식이나 Wi-Fi처럼 송신이 시간적으로 켜졌다 꺼졌다 하는 신호는 측정되는 SAR가 <strong>송신 시간 비율(듀티사이클)</strong>에 비례합니다. 시험 중 듀티사이클이 기기가 실제로 낼 수 있는 최대 듀티사이클보다 낮았다면, 그 비율만큼 보정합니다.</p>
<div class="formula">보정 SAR = SAR × (최대 가능 듀티사이클 / 측정 시 듀티사이클)</div>
<p>예: Wi-Fi 시험 모드의 듀티사이클이 95%로 측정되었고 100% 기준으로 보고해야 하는 경우 → 배수 1/0.95 ≈ 1.053. 조정 SAR 0.62 W/kg → 약 0.65 W/kg.</p>
<ul>
  <li>듀티사이클은 스펙트럼 분석기의 Zero span(시간 영역)으로 측정해 그림과 함께 기록합니다.</li>
  <li>GSM 같은 TDMA, LTE/NR TDD처럼 프레임 구조로 듀티사이클이 정해진 경우의 처리 방법은 측정 시스템 설정(변조·크레스트 팩터 보정)과 기술별 KDB·표준에서 확인합니다.</li>
  <li>출력 스케일링과 듀티사이클 보정은 <strong>곱으로 누적</strong>됩니다.</li>
</ul>

<h2>동시 전송 (Simultaneous Transmission)</h2>
<p>요즘 스마트폰은 LTE/NR로 통화하면서 동시에 Wi-Fi·Bluetooth로 송신할 수 있습니다. 여러 송신기가 동시에 전파를 내면 몸에 흡수되는 SAR도 더해집니다. 그래서 동시 전송이 가능한 조합마다 <strong>합산 SAR</strong>를 평가합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="두 송신기의 SAR 피크와 피크 간 거리">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="60" y="30" width="200" height="190" rx="18" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="160" y="212" font-size="12" fill="var(--text-3)">기기 뒷면 (팬텀 쪽)</text>
    <ellipse cx="120" cy="70" rx="45" ry="30" fill="var(--dg-accent)" opacity="0.25"/>
    <circle cx="120" cy="70" r="5" fill="var(--dg-accent)"/>
    <text x="120" y="50" font-size="12" fill="var(--dg-accent)" font-weight="700">LTE 피크</text>
    <ellipse cx="205" cy="165" rx="40" ry="26" fill="var(--dg-accent-2)" opacity="0.25"/>
    <circle cx="205" cy="165" r="5" fill="var(--dg-accent-2)"/>
    <text x="205" y="150" font-size="12" fill="var(--dg-accent-2)" font-weight="700">Wi-Fi 피크</text>
    <line x1="120" y1="70" x2="205" y2="165" stroke="var(--text-2)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="178" y="112" font-size="13" font-weight="700" fill="var(--text)">R</text>
    <g text-anchor="start" font-size="13">
      <text x="310" y="50" font-weight="700">① 합산: SAR₁ + SAR₂ ≤ 한계?</text>
      <text x="330" y="72" fill="var(--text-2)">예) 1.20 + 0.55 = 1.75 W/kg &gt; 1.6 → 다음 단계</text>
      <text x="310" y="110" font-weight="700">② SPLSR = (SAR₁ + SAR₂)^1.5 / R(mm)</text>
      <text x="330" y="132" fill="var(--text-2)">예) 1.75^1.5 / 60 ≈ 2.315 / 60 ≈ 0.039</text>
      <text x="330" y="154" fill="var(--text-2)">대표 기준 ≤ 0.04 → 피크가 충분히 떨어져 있음</text>
      <text x="310" y="192" font-weight="700">③ 초과 시: 실제 SAR 분포 합성(볼륨 스캔) 평가</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. 동시 전송 평가 흐름(FCC KDB 447498의 개념 예시). 두 송신기의 피크 위치가 멀리 떨어져 있으면 실제 합산 최대값은 단순 합보다 훨씬 작습니다.</figcaption>
</figure>

<ul>
  <li><strong>1단계 — 단순 합산</strong> : 같은 시험 위치에서 각 송신기의 조정 SAR 최대값을 더합니다. 합이 한계 이하이면 추가 평가가 필요 없습니다(가장 보수적인 방법).</li>
  <li><strong>2단계 — SPLSR(SAR to Peak Location Separation Ratio)</strong> : 합이 한계를 넘으면 두 피크 사이 거리 R을 고려한 비율을 계산합니다. FCC KDB 447498에서는 대표적으로 SPLSR ≤ 0.04이면 동시 전송 측정을 생략할 수 있다는 개념을 둡니다.</li>
  <li><strong>3단계 — 분포 합성</strong> : 그래도 넘으면 두 송신기의 3차원 SAR 분포를 같은 격자에서 더해 실제 합산 최대값을 구합니다(측정 소프트웨어 기능).</li>
  <li>측정하지 않은 저출력 송신기(예: Bluetooth)는 KDB의 <strong>추정 SAR(Estimated SAR)</strong> 계산식으로 합산에 포함하기도 합니다.</li>
</ul>
<p class="muted">※ 단계별 기준값과 적용 조건은 제도·KDB 버전에 따라 다를 수 있으므로 원문을 확인하세요.</p>

<h2>측정 불확도</h2>
<p>SAR 측정에는 많은 오차 요인이 있습니다. 시험소는 요인별 불확도를 모아 <strong>불확도 예산(Uncertainty budget)</strong>을 만들고, 합성 표준 불확도에 포함계수 <strong>k = 2</strong>(약 95% 신뢰수준)를 곱한 <strong>확장 불확도</strong>를 구합니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>분류</th><th>주요 불확도 요인 (예)</th></tr></thead>
<tbody>
<tr><td>프로브</td><td>교정, 등방성, 선형성, 검출 한계, 응답 시간, 경계 효과</td></tr>
<tr><td>시스템</td><td>DAE 판독, 로봇 위치 정밀도, 보간·외삽·평균 알고리즘, 주변 RF 잡음</td></tr>
<tr><td>팬텀·액체</td><td>쉘 두께·형상, 액체 εr·σ 측정 불확도, 목표값과의 편차, 온도</td></tr>
<tr><td>시료</td><td>기기 위치 재현성, 홀더 영향, 파워 드리프트, 출력 스케일링</td></tr>
</tbody></table></div>
<ul>
  <li>IEC 계열 표준은 대표적으로 확장 불확도가 <strong>약 30% 이내</strong>가 되도록 요구하는 개념을 두고 있습니다(적용 주파수 범위·조건은 표준 확인).</li>
  <li>FCC는 측정 SAR가 일정 수준 이상(예: 1 g 기준 1.5 W/kg 이상)일 때 불확도 분석 결과를 보고하도록 하는 방식입니다(KDB 865664 확인).</li>
  <li>판정은 보통 불확도를 더하지 않은 조정 SAR로 한계와 비교합니다(“공유 위험” 방식). 다만 판정 규칙(Decision rule)은 고객·제도와 합의된 방식을 따르고 성적서에 명시합니다.</li>
</ul>

<h2>결과 표 작성 예시</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>시험 위치</th><th>대역/모드</th><th>채널(주파수)</th><th>측정 출력 (dBm)</th><th>튠업 최대 (dBm)</th><th>스케일 배수</th><th>측정 SAR 1 g (W/kg)</th><th>조정 SAR 1 g (W/kg)</th><th>한계 (W/kg)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>머리 우측 Cheek</td><td>LTE B3 20 MHz QPSK 1RB</td><td class="num">19575 (1747.5 MHz)</td><td class="num">23.2</td><td class="num">24.0</td><td class="num">1.202</td><td class="num">1.12</td><td class="num">1.35</td><td class="num">1.6</td><td>적합</td></tr>
<tr><td>머리 우측 Tilt</td><td>LTE B3 20 MHz QPSK 1RB</td><td class="num">19575 (1747.5 MHz)</td><td class="num">23.2</td><td class="num">24.0</td><td class="num">1.202</td><td class="num">0.58</td><td class="num">0.70</td><td class="num">1.6</td><td>적합</td></tr>
<tr><td>몸통 뒷면 15 mm</td><td>WLAN 2.4 GHz 802.11b</td><td class="num">6 (2437 MHz)</td><td class="num">17.6</td><td class="num">18.0</td><td class="num">1.096 × 1.053</td><td class="num">0.54</td><td class="num">0.62</td><td class="num">1.6</td><td>적합</td></tr>
</tbody></table></div>
<p class="muted">※ 교육용 가상 예시입니다. 실제 성적서에는 드리프트, 액체 온도, 측정 파일명(프로젝트 ID), 시험일, 시험자 등도 함께 기록합니다.</p>

<div class="callout tip">
  <span class="callout-title">계산 검증 습관</span>
  측정 소프트웨어나 엑셀 템플릿이 자동 계산을 해 주더라도, <strong>최대값 1~2건은 손으로(계산기로) 다시 계산</strong>해 보세요. 튠업 값을 다른 대역 것으로 참조했거나, dB 대신 배수를 한 번 더 곱하는 식의 템플릿 오류는 생각보다 자주 발견됩니다. <a href="#/tools">RF 계산기</a>의 dB↔배수 변환을 활용하세요.
</div>
`,
  quiz: [
    { q: '측정 SAR 0.90 W/kg, 측정 출력 22.0 dBm, 튠업 최대 23.0 dBm이다. 조정 SAR는 약 얼마인가?',
      options: ['0.71 W/kg', '0.99 W/kg', '1.13 W/kg', '1.80 W/kg'],
      answer: 2, explain: '배수 10^(1.0/10) ≈ 1.259, 0.90 × 1.259 ≈ 1.13 W/kg 입니다.' },
    { q: 'SAR 판정과 전자파등급 결정에 사용하는 값은?',
      options: ['측정 SAR(보정 전)', '가장 낮은 채널의 값', '시스템 체크 값', '조정 SAR(튠업 최대 출력·듀티사이클 보정 반영)'],
      answer: 3, explain: '양산품의 최대 출력 조건을 반영한 조정(Reported) SAR로 판정합니다.' },
    { q: '두 송신기의 조정 SAR 합이 1.75 W/kg(>1.6)이고 피크 간 거리가 60 mm일 때 SPLSR는 약 얼마인가?',
      options: ['0.029', '0.039', '0.058', '0.105'],
      answer: 1, explain: '(1.75)^1.5 ≈ 2.315, 2.315/60 ≈ 0.039 입니다. 대표 기준 0.04 이하이므로 동시 전송 측정을 생략할 수 있는 조건에 해당합니다(KDB 원문 확인).' },
    { q: '측정 불확도의 확장 불확도에 대한 설명으로 옳은 것은?',
      options: ['합성 표준 불확도에 포함계수 k=2를 곱해 약 95% 신뢰수준을 나타낸다', '측정값의 최대값과 최소값의 차이다', '프로브 교정 불확도 하나만 의미한다', '항상 0%여야 한다'],
      answer: 0, explain: '확장 불확도 = k × 합성 표준 불확도이며, SAR 분야에서는 통상 k=2(약 95%)를 사용합니다.' }
  ],
  refs: [
    { title: 'FCC KDB (447498, 865664, 248227)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: '조정 SAR, 동시 전송(SPLSR), 불확도, Wi-Fi 듀티사이클 관련 가이드' },
    { title: 'IEC Webstore — IEC/IEEE 62209-1528', url: 'https://webstore.iec.ch', note: '측정 불확도 평가 요구사항' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '국내 SAR 측정기준·전자파등급 관련 자료' }
  ]
});

COURSE.addLesson({
  id: 'sar-pd-5g',
  module: 'sar',
  order: 6,
  title: '5G 밀리미터파 전력밀도(PD)와 기타 인체노출 평가',
  minutes: 20,
  level: '중급',
  summary: '6 GHz 이상에서 SAR 대신 쓰는 입사전력밀도(PD), 시간 평균 SAR(TAS) 개념, 기지국 등 원거리 노출의 전자파강도·MPE 계산(S = EIRP/4πr²)을 익힙니다.',
  objectives: [
    '고주파(6 GHz 이상)에서 SAR 대신 전력밀도로 평가하는 이유를 설명할 수 있다.',
    'PD의 단위, 평균 면적(4 cm²), 측정 방식의 개념을 안다.',
    '시간 평균 SAR(TAS) 기능이 인증 시험에 주는 의미를 안다.',
    'S = EIRP/(4πr²)로 전력밀도와 이격거리를 계산할 수 있다.'
  ],
  body: `
<p>5G NR의 밀리미터파(mmWave, 예: 28 GHz, 39 GHz 대역)를 쓰는 단말이 나오면서 SAR 시험실에 새 업무가 생겼습니다. 주파수가 아주 높으면 전파가 몸속 깊이 들어가지 못하고 <strong>피부 표면 근처에서 거의 다 흡수</strong>됩니다. 이때는 “1 g 부피 안의 흡수”보다 <strong>“피부 표면에 단위 면적당 들어오는 전력”</strong>으로 평가하는 것이 더 알맞습니다. 이것이 <strong>전력밀도(PD, Power Density)</strong> 평가입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  낮은 주파수 전파는 몸속까지 스며드는 <em>전자레인지</em> 같고, 높은 주파수 전파는 피부 표면만 데우는 <em>햇볕</em>과 비슷합니다. 햇볕의 세기를 “1 kg당”이 아니라 “1 m²당 몇 W”로 말하듯, mmWave도 <strong>W/m²</strong>로 평가합니다.
</div>

<h2>왜 6 GHz 이상은 전력밀도인가</h2>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="주파수에 따른 인체 침투 깊이 비교">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <!-- left: low freq -->
    <text x="190" y="24" font-weight="700" font-size="15" fill="var(--dg-accent)">약 1~2 GHz (휴대폰 대역)</text>
    <rect x="40" y="50" width="300" height="20" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="190" y="65" font-size="12" fill="var(--text-2)">피부</text>
    <rect x="40" y="70" width="300" height="140" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="100" y="200" font-size="12" fill="var(--text-3)">피하조직 · 근육 · 뇌 등</text>
    <path d="M110 50 Q 190 190 270 50 Z" fill="var(--dg-accent)" opacity="0.25"/>
    <text x="190" y="120" font-size="12.5" fill="var(--dg-accent)" font-weight="700">수 cm까지 침투</text>
    <text x="190" y="240" font-size="12.5" fill="var(--text-2)">→ 부피 평균 SAR (W/kg, 1 g/10 g)</text>
    <!-- right: mmWave -->
    <text x="570" y="24" font-weight="700" font-size="15" fill="var(--dg-accent-2)">약 28 GHz (mmWave)</text>
    <rect x="420" y="50" width="300" height="20" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="640" y="65" font-size="12" fill="var(--text-2)">피부</text>
    <rect x="420" y="70" width="300" height="140" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <path d="M490 50 Q 570 82 650 50 Z" fill="var(--dg-accent-2)" opacity="0.45"/>
    <text x="570" y="110" font-size="12.5" fill="var(--dg-accent-2)" font-weight="700">1 mm 안팎에서 대부분 흡수</text>
    <rect x="530" y="34" width="80" height="8" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="680" y="42" font-size="11.5" fill="var(--dg-accent-2)">평균 면적 4 cm²</text>
    <text x="570" y="240" font-size="12.5" fill="var(--text-2)">→ 표면 전력밀도 PD (W/m², 면적 평균)</text>
  </g>
</svg>
<figcaption>그림 1. 주파수가 높을수록 침투 깊이가 얕아져, 부피 평균 SAR보다 표면에 입사하는 전력밀도가 노출을 더 잘 나타냅니다(그림은 개념적 비교).</figcaption>
</figure>

<ul>
  <li>SAR와 PD의 경계 주파수는 대표적으로 <strong>6 GHz</strong>입니다(규정·표준마다 세부 경계와 적용 방식이 다를 수 있음).</li>
  <li><strong>입사전력밀도(IPD, Incident Power Density)</strong> : 몸 표면에 들어오는 전자파의 전력밀도(포인팅 벡터의 크기). FCC, 한국 등에서 기준으로 사용합니다.</li>
  <li><strong>흡수전력밀도(APD, Absorbed Power Density)</strong> : ICNIRP 2020 가이드라인에서 기본 제한으로 제시한, 몸에 실제 흡수되는 전력밀도 개념입니다.</li>
</ul>

<h3>기준값 개요</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>평가량</th><th>대표 기준 (일반인)</th><th>평균 면적</th></tr></thead>
<tbody>
<tr><td>미국 FCC (휴대 기기, 6 GHz 초과)</td><td>입사전력밀도</td><td class="num">10 W/m² (= 1 mW/cm²)</td><td class="num">4 cm²</td></tr>
<tr><td>한국</td><td>전력밀도</td><td class="num">대표적으로 10 W/m² 수준</td><td>고시 확인</td></tr>
<tr><td>ICNIRP 2020 (국소, 6 GHz 초과)</td><td>흡수전력밀도</td><td class="num">20 W/m²</td><td class="num">4 cm² (30 GHz 초과 시 1 cm² 조건 추가)</td></tr>
</tbody></table></div>
<p class="muted">※ 개요 표입니다. 적용 주파수 범위·평균 면적·시간 평균 조건은 반드시 최신 고시(전자파 인체보호기준, 전자파흡수율/전력밀도 측정기준)와 FCC 규정·KDB, IEC/IEEE 63195 계열 표준 원문을 확인하세요.</p>

<h2>PD는 어떻게 측정하나</h2>
<p>액체 팬텀 대신 <strong>공기 중에서 기기 표면 가까이</strong>(수 mm) 전자장을 측정합니다. 표준으로는 <strong>IEC/IEEE 63195-1</strong>(측정), <strong>IEC/IEEE 63195-2</strong>(계산 평가)가 있습니다.</p>
<ol class="steps">
  <li><strong>근접 전계 측정</strong>mmWave용 전계 프로브로 기기 앞 평면(들)에서 전계의 크기(필요 시 위상)를 격자로 측정합니다.</li>
  <li><strong>재구성(Reconstruction)</strong>측정 데이터로부터 평가 평면(기기 표면 근처)의 E, H 필드를 수학적으로 재구성합니다. 위상을 직접 재지 않고 두 평면의 크기로 위상을 복원하는 방식도 쓰입니다.</li>
  <li><strong>전력밀도 계산</strong>포인팅 벡터(S = E × H)에서 전력밀도 분포를 구하고, <strong>4 cm² 면적 평균의 최대값</strong>을 찾습니다.</li>
  <li><strong>빔 조합 평가</strong>mmWave 단말은 빔포밍으로 여러 빔을 씁니다. 제조사가 제공한 빔 목록(코드북) 중 최악의 빔과 조합을 선정해 측정합니다.</li>
</ol>

<h2>시간 평균 SAR (TAS) — “순간이 아니라 평균”</h2>
<p>노출 기준은 원래 <strong>일정 시간 동안의 평균</strong>으로 정의되어 있습니다. 최근 스마트폰은 이를 활용해 <strong>최근 일정 시간 동안의 누적 노출을 실시간으로 계산하고, 평균이 기준을 넘지 않도록 송신 출력을 자동 조절</strong>하는 기능을 탑재합니다. 이를 흔히 <strong>TAS(Time-Averaged SAR)</strong>라 부르고, 칩셋 제조사 솔루션(예: Qualcomm Smart Transmit) 이름으로 불리기도 합니다.</p>
<div class="kbox">
  <div><div class="k">기존 방식</div><div class="v">항상 최대 출력 가정 → 출력 상한을 낮게 고정</div></div>
  <div><div class="k">TAS 방식</div><div class="v">짧게는 높은 출력 허용, 시간 평균이 기준 이내가 되도록 제어</div></div>
</div>
<ul>
  <li>인증 시험에서는 일반 SAR 측정에 더해 <strong>TAS 알고리즘이 실제로 시간 평균을 지키는지</strong> 확인하는 시험(출력 변화 시나리오, 대역 전환, 동시 전송 등)이 추가됩니다.</li>
  <li>평균 시간 창(Time window)은 주파수·제도에 따라 다릅니다(예: 수십 초~100 초 수준). 인증기관·규제기관의 최신 가이드와 사전 협의 내용을 확인해야 합니다.</li>
  <li>튠업 문서 대신 <strong>기기에 설정된 SAR 설계 목표·출력 제한값</strong> 문서가 스케일링 기준이 되므로 제조사 문서 검토가 특히 중요합니다.</li>
</ul>

<h2>원거리 노출 — 전자파강도와 MPE 계산</h2>
<p>기지국, 방송 송신소, 고정형 무선설비처럼 사람과 떨어져 있는 송신기는 SAR 대신 <strong>전계강도(V/m)·자계강도(A/m)·전력밀도(W/m²)</strong>로 평가합니다. 한국에서는 전파법에 따른 <strong>전자파강도 측정</strong>(무선국 전자파강도 측정·보고 제도)이, 미국에서는 <strong>MPE(Maximum Permissible Exposure)</strong> 평가가 대표적입니다.</p>

<h3>원거리 전력밀도 계산식</h3>
<div class="formula">S = EIRP / (4π r²) &nbsp;&nbsp; [W/m²] &nbsp;&nbsp;&nbsp; E = √(S × 377) &nbsp;&nbsp; [V/m]</div>
<p>EIRP(등가등방복사전력)는 송신 전력에 안테나 이득을 더한 값입니다(케이블 손실 제외). 전파가 공 표면처럼 퍼지므로 거리 r의 제곱에 반비례합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="기지국 안테나에서 거리에 따른 전력밀도 감소">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <line x1="80" y1="60" x2="80" y2="210" stroke="var(--dg-line)" stroke-width="3"/>
    <rect x="70" y="40" width="20" height="40" rx="3" fill="var(--dg-accent)"/>
    <text x="80" y="228" font-size="12" fill="var(--text-2)">기지국</text>
    <path d="M100 60 A 40 40 0 0 1 100 100" fill="none" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <path d="M100 40 A 90 90 0 0 1 100 120" fill="none" stroke="var(--dg-accent)" stroke-width="1.2" opacity="0.7"/>
    <path d="M100 25 A 170 170 0 0 1 100 135" fill="none" stroke="var(--dg-accent)" stroke-width="1" opacity="0.45"/>
    <line x1="80" y1="175" x2="440" y2="175" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <line x1="140" y1="168" x2="140" y2="182" stroke="var(--dg-line)"/><text x="140" y="198" font-size="12">r = 3 m</text>
    <line x1="260" y1="168" x2="260" y2="182" stroke="var(--dg-line)"/><text x="260" y="198" font-size="12">r = 10 m</text>
    <line x1="420" y1="168" x2="420" y2="182" stroke="var(--dg-line)"/><text x="420" y="198" font-size="12">r = 30 m</text>
    <text x="140" y="155" font-size="12" fill="var(--dg-accent-2)">8.84 W/m²</text>
    <text x="260" y="155" font-size="12" fill="var(--dg-accent-2)">0.80 W/m²</text>
    <text x="420" y="155" font-size="12" fill="var(--dg-accent-2)">0.088 W/m²</text>
    <g text-anchor="start" font-size="12.5">
      <text x="480" y="50" font-weight="700">가정: EIRP = 1000 W (60 dBm)</text>
      <text x="480" y="74" fill="var(--text-2)">주파수 1800 MHz</text>
      <text x="480" y="98" fill="var(--text-2)">예시 기준 f/200 = 9 W/m²</text>
      <text x="480" y="130" font-weight="700">거리 2배 → 전력밀도 1/4</text>
      <text x="480" y="154" fill="var(--text-2)">거리 10배 → 1/100 (−20 dB)</text>
      <text x="480" y="186" fill="var(--text-3)">원거리장 · 자유공간 가정</text>
      <text x="480" y="206" fill="var(--text-3)">(지면 반사 등은 별도 고려)</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. 거리에 따른 전력밀도 감소(역제곱 법칙). 거리가 멀어질수록 급격히 작아집니다.</figcaption>
</figure>

<h3>계산 예제 1 — 기지국 전력밀도</h3>
<p>송신기 출력 20 W(43 dBm), 안테나 이득 17 dBi → EIRP = 60 dBm = 1000 W. 주파수 1800 MHz, 거리 10 m:</p>
<div class="formula">S = 1000 / (4π × 10²) = 1000 / 1256.6 ≈ 0.80 W/m² &nbsp;→&nbsp; E = √(0.80 × 377) ≈ 17.3 V/m</div>
<p>ICNIRP 1998 일반인 기준 체계(400~2000 MHz에서 전력밀도 f/200 W/m², f는 MHz)를 예로 들면 1800 MHz의 기준은 9 W/m²입니다. 0.80 W/m²는 기준의 약 9%입니다. 한국 전자파 인체보호기준의 주파수별 기준값은 고시 원문으로 확인하세요.</p>

<h3>계산 예제 2 — 기준을 만족하는 최소 거리</h3>
<div class="formula">r<sub>min</sub> = √( EIRP / (4π × S<sub>limit</sub>) ) = √( 1000 / (4π × 9) ) ≈ √8.84 ≈ 2.97 m</div>
<p>즉 안테나 주 빔 방향으로 약 3 m보다 가까우면 기준을 넘을 수 있어 접근 제한이 필요하다는 뜻입니다(보수적인 원거리 계산 — 실제로는 근거리장, 빔 패턴, 지면 반사 등을 고려).</p>

<h3>계산 예제 3 — MPE (미국, 모바일 기기 20 cm)</h3>
<p>FCC는 사람과 대개 <strong>20 cm 이상</strong> 떨어져 쓰는 기기(모바일 기기, 예: 공유기·IoT 게이트웨이)를 SAR 대신 MPE로 평가합니다. EIRP 1 W(30 dBm) 기기의 20 cm 지점 전력밀도는:</p>
<div class="formula">S = 1 / (4π × 0.2²) ≈ 1.99 W/m² = 0.199 mW/cm²</div>
<p>1.5~100 GHz 일반인 MPE 한계 1.0 mW/cm²(= 10 W/m²)와 비교하면 비율 0.2로 적합입니다. 여러 송신기가 동시에 동작하면 <strong>각 송신기의 (S/한계) 비율을 더해 1 이하</strong>인지 확인합니다.</p>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  ① EIRP에 dBi 이득을 더하지 않거나(또는 dBd를 dBi로 착각), ② mW/cm²와 W/m²를 혼동(1 mW/cm² = 10 W/m²), ③ 거리를 cm로 넣고 결과를 W/m²로 읽는 단위 실수가 가장 많습니다. <a href="#/tools">RF 계산기</a>로 검산하세요.
</div>
`,
  quiz: [
    { q: '6 GHz 이상 대역에서 SAR 대신 전력밀도(PD)로 평가하는 주된 이유는?',
      options: ['고주파에서는 SAR 프로브가 비싸서', '침투 깊이가 얕아 에너지가 피부 표면 근처에서 대부분 흡수되기 때문', '고주파는 인체에 흡수되지 않기 때문', '기지국만 고주파를 쓰기 때문'],
      answer: 1, explain: '주파수가 높을수록 침투 깊이가 얕아져 부피 평균보다 표면 전력밀도가 노출을 더 잘 나타냅니다.' },
    { q: 'EIRP 100 W인 안테나에서 5 m 떨어진 곳의 원거리 전력밀도는 약 얼마인가?',
      options: ['0.032 W/m²', '0.32 W/m²', '3.2 W/m²', '20 W/m²'],
      answer: 1, explain: 'S = 100 / (4π × 25) = 100 / 314.2 ≈ 0.32 W/m² 입니다.' },
    { q: '1 mW/cm²를 W/m²로 바꾸면?',
      options: ['0.1 W/m²', '1 W/m²', '10 W/m²', '100 W/m²'],
      answer: 2, explain: '1 m² = 10,000 cm² 이므로 1 mW/cm² = 10,000 mW/m² = 10 W/m² 입니다.' },
    { q: 'TAS(시간 평균 SAR) 기능에 대한 설명으로 옳은 것은?',
      options: ['항상 최대 출력으로 고정한다', 'Wi-Fi에만 적용된다', 'SAR 측정을 면제해 준다', '최근 일정 시간 동안의 평균 노출이 기준 이내가 되도록 출력을 실시간 제어한다'],
      answer: 3, explain: 'TAS는 시간 평균 노출을 계산해 기준을 넘지 않도록 출력을 제어하며, 인증 시 알고리즘 검증 시험이 추가됩니다.' }
  ],
  refs: [
    { title: 'ICNIRP', url: 'https://www.icnirp.org', note: 'RF 가이드라인 2020 (100 kHz~300 GHz)' },
    { title: 'IEC Webstore — IEC/IEEE 63195-1, 63195-2', url: 'https://webstore.iec.ch', note: '6~300 GHz 전력밀도 측정·계산 표준' },
    { title: 'FCC KDB', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'RF 노출 평가, MPE, mmWave·TAS 관련 가이드 검색' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '“전자파 인체보호기준”, “전자파강도 측정기준” 등 고시 원문' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파 인체노출 제도 자료' }
  ]
});

COURSE.addLesson({
  id: 'sar-checklist',
  module: 'sar',
  order: 7,
  title: 'SAR 시험 실무 체크리스트와 흔한 실수',
  minutes: 16,
  level: '실무',
  summary: '시료 준비부터 시험 전 점검, 흔한 실수와 증상, 기록 항목, SAR 성적서 구성까지 현장에서 바로 쓰는 체크리스트로 정리합니다.',
  objectives: [
    'SAR 시험 전 제조사에 요청할 시료·문서를 빠짐없이 챙길 수 있다.',
    '시험 당일 점검 항목을 순서대로 수행할 수 있다.',
    '흔한 실수와 그 증상(값이 이상할 때의 원인)을 연결할 수 있다.',
    'SAR 성적서의 구성과 필수 기록 항목을 안다.'
  ],
  body: `
<p>앞의 강의에서 배운 내용을 현장에서 쓰기 좋게 체크리스트로 묶었습니다. SAR 시험은 하루에 수십 건을 측정하는 긴 작업이라 <strong>작은 실수 하나가 여러 날의 데이터 전체를 무효</strong>로 만들 수 있습니다. 체크리스트는 “기억력”이 아니라 “습관”으로 품질을 지키는 도구입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  비행기 조종사도 수천 번 이륙했지만 매번 체크리스트를 읽습니다. SAR 시험도 마찬가지입니다. “이번엔 괜찮겠지”가 가장 위험합니다.
</div>

<h2>1. 시료 준비 — 시험 전에 제조사에 받을 것</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>내용</th><th>왜 필요한가</th></tr></thead>
<tbody>
<tr><td>시료</td><td>대개 2대 이상(전도 출력용 + 방사/SAR용), 모델명·시리얼·HW/SW 버전 확인</td><td>SAR용 시료는 안테나를 개조하지 않은 상태여야 함</td></tr>
<tr><td>배터리</td><td>완충 배터리, 가능하면 여분 배터리·충전기</td><td>배터리 전압 저하 → 출력 저하 → 드리프트</td></tr>
<tr><td>튠업 출력 문서</td><td>대역·모드별 목표 출력과 허용 오차(최대값)</td><td>조정 SAR 계산의 기준</td></tr>
<tr><td>안테나 위치도</td><td>각 송신 안테나의 위치·치수(기기 외곽으로부터 거리)</td><td>시험 위치·엣지 선정, 동시 전송 평가</td></tr>
<tr><td>동작 모드 정보</td><td>지원 대역·기술, 동시 전송 조합, 출력 저감 기능(근접 센서, TAS 등)</td><td>시험 조합과 축소 규정 적용</td></tr>
<tr><td>시험 모드 방법</td><td>Wi-Fi/BT 연속 송신 명령, 엔지니어링 모드 진입법</td><td>호 연결 없는 기술의 출력 고정</td></tr>
<tr><td>액세서리</td><td>벨트 클립, 홀스터, 케이스 등(해당 시)</td><td>Body-worn 이격거리 결정</td></tr>
</tbody></table></div>

<h2>2. 시험 당일 점검</h2>
<ol class="steps">
  <li><strong>환경</strong>시험실 온도·습도가 안정 범위인지, 주변에 불필요한 RF 송신원(개인 휴대폰, 다른 시험 장비)이 없는지 확인합니다.</li>
  <li><strong>장비 교정 기한</strong>프로브, DAE, 다이폴, VNA·유전율 프로브, 파워미터, 무선통신 시험기의 교정 유효기간을 확인합니다.</li>
  <li><strong>액체</strong>유전 특성(εr, σ) 측정 → 허용 범위 확인, 온도·깊이(15 cm 이상) 기록.</li>
  <li><strong>시스템 체크</strong>시험 주파수 근처 다이폴로 ±10% 이내 확인. 합격 전에는 시료 측정 금지.</li>
  <li><strong>SW 설정</strong>프로젝트의 주파수, 액체 파라미터, 프로브·ConvF 선택, 변조 보정, 평균 질량(1 g/10 g)을 확인합니다.</li>
  <li><strong>시료</strong>배터리 완충, 호 연결·최대 출력 고정 확인, 측정 채널의 전도 출력 값 준비.</li>
  <li><strong>위치</strong>홀더 고정, Cheek/Tilt 각도 또는 이격거리 확인, 셋업 사진 촬영.</li>
</ol>

<h2>3. 흔한 실수와 증상</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>실수</th><th>나타나는 증상</th><th>예방·조치</th></tr></thead>
<tbody>
<tr><td>액체 증발로 유전율 변화</td><td>시스템 체크 값이 서서히 벗어남, 같은 시료 SAR가 날마다 다름</td><td>사용하지 않을 때 뚜껑 덮기, 측정일마다 유전 특성 측정, 보충 후 재측정</td></tr>
<tr><td>팬텀 속 기포</td><td>특정 지점 값이 튀거나 분포가 비정상</td><td>액체를 천천히 붓고, 쉘 표면(특히 기기 쪽) 기포 제거 후 대기</td></tr>
<tr><td>시료 위치 재현성 부족</td><td>재측정 시 값 차이가 큼, 좌/우 비대칭이 설명되지 않음</td><td>위치 기준점 표시, 게이지 사용, 셋업 사진, 홀더 조임 확인</td></tr>
<tr><td>파워 드리프트 초과</td><td>드리프트 ±5%(약 ±0.21 dB) 초과</td><td>배터리 교체·충전, 발열 대기, 호 상태 확인 후 재측정</td></tr>
<tr><td>튠업 문서 불일치</td><td>측정 출력이 튠업 최대값보다 높음, 스케일 배수가 1 미만</td><td>제조사에 확인 요청, 문서 버전 기록, 임의 판단 금지</td></tr>
<tr><td>잘못된 ConvF·주파수 설정</td><td>시스템 체크는 합격인데 시료 값이 비정상(다른 대역 설정)</td><td>측정 전 SW 설정 화면을 캡처해 기록, 2인 확인</td></tr>
<tr><td>최대점이 스캔 영역 가장자리</td><td>Area scan 최대점이 경계에 위치</td><td>스캔 영역 확장 후 재측정</td></tr>
<tr><td>출력 저감(근접 센서) 동작</td><td>예상보다 SAR가 매우 낮음, 출력이 측정 중 변함</td><td>저감 기능 동작 조건 확인, 제조사 시험 모드로 저감 해제 또는 조건별 시험</td></tr>
</tbody></table></div>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4><p>“SAR가 기준 초과로 나왔으니 액체를 새로 만들어 다시 재 볼게요.” — 원인 분석 없이 조건을 바꿔 원하는 값을 찾는 행위는 데이터 신뢰성을 무너뜨립니다.</p></div>
  <div class="good"><h4>✅ 좋은 예</h4><p>초과 결과도 그대로 기록 → 시스템 체크·액체·위치·출력·설정을 순서대로 점검 → 원인이 확인되면 기록과 함께 재측정 → 원인이 없으면 결과를 그대로 보고하고 제조사와 협의.</p></div>
</div>

<h2>4. 기록 항목 체크리스트</h2>
<ul>
  <li>시료: 모델명, 시리얼/IMEI, HW·SW 버전, 배터리 정보</li>
  <li>시험 조건: 대역, 모드(변조·대역폭·RB·데이터율), 채널·주파수, 시험 위치, 이격거리, 안테나</li>
  <li>출력: 측정 전도 출력, 튠업 최대 출력(문서 버전), 스케일 배수, 듀티사이클</li>
  <li>측정: 측정 SAR(1 g/10 g), 조정 SAR, 파워 드리프트, 측정 파일명·프로젝트 ID</li>
  <li>액체·시스템: 액체 종류, εr/σ 측정값·편차, 온도, 깊이, 시스템 체크 결과</li>
  <li>장비: 사용 장비 관리번호와 교정 만료일(프로브, DAE, 다이폴 등)</li>
  <li>환경·기타: 시험실 온도·습도, 시험일, 시험자, 셋업 사진, 특이사항·이탈 사항</li>
</ul>
<div class="callout tip">
  <span class="callout-title">현장 팁</span>
  측정 파일명 규칙을 정해 두세요. 예: <code>프로젝트ID_대역_채널_위치_이격거리_날짜</code>. 파일명만 보고도 어떤 측정인지 알 수 있으면 성적서 작성과 검토 시간이 크게 줄어듭니다. 기록지 양식은 <a href="#/forms">양식</a>을 참고하세요.
</div>

<h2>5. SAR 성적서의 구성</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="SAR 시험성적서 구성">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="220" height="260" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="130" y="46" font-weight="700" font-size="15">본문</text>
    <rect x="40" y="60" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="130" y="80" font-size="12.5">① 표지 · 시험기관 · 판정 요약</text>
    <rect x="40" y="98" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="130" y="118" font-size="12.5">② 시료 정보 · 안테나 위치</text>
    <rect x="40" y="136" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="130" y="156" font-size="12.5">③ 적용 기준 · 시험 방법</text>
    <rect x="40" y="174" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="130" y="194" font-size="12.5">④ 측정 시스템 · 장비 목록</text>
    <rect x="40" y="212" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="130" y="232" font-size="12.5">⑤ 전도 출력 · 튠업 표</text>
    <text x="130" y="265" font-size="11.5" fill="var(--text-3)">(계속)</text>

    <rect x="270" y="20" width="220" height="260" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="380" y="46" font-weight="700" font-size="15" fill="var(--dg-accent)">결과</text>
    <rect x="290" y="60" width="180" height="30" rx="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="380" y="80" font-size="12.5">⑥ 액체 · 시스템 체크 결과</text>
    <rect x="290" y="98" width="180" height="30" rx="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="380" y="118" font-size="12.5">⑦ SAR 결과 표 (조정 SAR)</text>
    <rect x="290" y="136" width="180" height="30" rx="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="380" y="156" font-size="12.5">⑧ 동시 전송 평가</text>
    <rect x="290" y="174" width="180" height="30" rx="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="380" y="194" font-size="12.5">⑨ 측정 불확도</text>
    <rect x="290" y="212" width="180" height="30" rx="5" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="380" y="232" font-size="12.5">⑩ 최대 SAR 요약 · 결론</text>

    <rect x="520" y="20" width="220" height="260" rx="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="630" y="46" font-weight="700" font-size="15">부록</text>
    <rect x="540" y="60" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="630" y="80" font-size="12.5">A. SAR 분포도 · 측정 그래프</text>
    <rect x="540" y="98" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="630" y="118" font-size="12.5">B. 시스템 체크 데이터</text>
    <rect x="540" y="136" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="630" y="156" font-size="12.5">C. 셋업 사진</text>
    <rect x="540" y="174" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="630" y="194" font-size="12.5">D. 프로브·다이폴 교정서</text>
    <rect x="540" y="212" width="180" height="30" rx="5" fill="var(--dg-fill)" stroke="var(--dg-line)"/><text x="630" y="232" font-size="12.5">E. 시료 사진 · 안테나 위치도</text>
  </g>
</svg>
<figcaption>그림 1. SAR 시험성적서의 일반적인 구성 예시. 실제 구성은 인증 제도(한국 적합성평가, FCC, CE)와 사내 양식에 따라 다릅니다.</figcaption>
</figure>
<ul>
  <li><strong>판정 요약</strong>에는 시험 위치별(머리/몸통/핫스팟/사지) <strong>최대 조정 SAR</strong>와 한계, 평균 질량, 판정을 한눈에 보이게 적습니다. 한국 휴대전화는 전자파등급 판단의 근거가 되는 값도 명확히 합니다.</li>
  <li><strong>이탈 사항(Deviation)</strong> : 표준 절차와 다르게 한 부분(예: 특정 대역 시험 모드 제한)이 있으면 반드시 이유와 함께 기재합니다.</li>
  <li>성적서는 기술책임자 검토 후 발행합니다. 성적서의 모든 숫자는 <strong>원시 데이터(측정 파일·기록지)까지 추적</strong>할 수 있어야 합니다(ISO/IEC 17025의 기본 요구).</li>
</ul>

<details class="faq"><summary>시험 도중 시료가 고장 나면 어떻게 하나요?</summary><p>즉시 시험을 중지하고 상황(시각, 증상, 진행 중이던 측정)을 기록한 뒤 제조사에 알립니다. 대체 시료로 계속할 경우 시리얼·버전이 같은지 확인하고, 이전 데이터와의 연속성(예: 기준 측정 재수행)을 기록합니다.</p></details>
<details class="faq"><summary>고객이 “중간 결과를 빨리 알려 달라”고 하면?</summary><p>사내 규정에 따릅니다. 전달하더라도 “검토 전 잠정 값이며 조정 SAR 계산과 검토 후 변경될 수 있음”을 명시하고, 전달 내용과 시점을 기록해 두는 것이 안전합니다.</p></details>
`,
  quiz: [
    { q: 'SAR 시험 전에 제조사에 반드시 받아야 하는 문서로, 조정 SAR 계산의 기준이 되는 것은?',
      options: ['사용자 설명서', '마케팅 자료', '포장 도면', '튠업(출력 허용 범위) 문서'],
      answer: 3, explain: '튠업 문서의 최대 허용 출력이 스케일링(조정 SAR)의 기준입니다.' },
    { q: '며칠에 걸친 시험에서 같은 시료의 SAR 값이 날마다 조금씩 달라지고, 시스템 체크 값도 서서히 벗어났다. 가장 먼저 의심할 원인은?',
      options: ['액체 증발 등으로 인한 조직등가액 유전 특성 변화', '시험자의 컨디션', '성적서 양식 변경', '시료 색상'],
      answer: 0, explain: '액체의 물이 증발하면 εr·σ가 변해 시스템 체크와 시료 SAR가 함께 변할 수 있습니다. 유전 특성을 재측정하세요.' },
    { q: 'SAR가 기준을 초과했을 때 올바른 대응은?',
      options: ['기준 이하가 나올 때까지 조건을 바꿔 재측정하고 마지막 값만 보고', '결과 파일을 삭제', '초과 결과를 기록하고 시스템·액체·위치·출력·설정을 점검해 원인을 확인한 뒤 필요 시 기록과 함께 재측정', '고객에게 알리지 않는다'],
      answer: 2, explain: '모든 결과는 기록되어야 하며, 원인이 확인된 경우에만 근거를 남기고 재측정합니다.' },
    { q: '성적서의 숫자를 원시 데이터까지 추적할 수 있어야 한다는 요구의 근거가 되는 시험기관 품질 표준은?',
      options: ['ISO 9001', 'ISO/IEC 17025', 'IEC 62368-1', 'CISPR 32'],
      answer: 1, explain: 'ISO/IEC 17025는 시험·교정기관의 역량 요구사항으로, 기록의 추적성과 기술적 기록 요건을 포함합니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가·SAR 관련 고시 및 안내' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: 'ISO/IEC 17025 시험기관 인정 요건' },
    { title: 'FCC KDB', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'SAR 성적서 요구사항(KDB 865664 D02 등) 검색' }
  ]
});
