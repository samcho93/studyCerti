/* MODULE 01 — 쉽게 이해하는 무선 기초 */
COURSE.addLesson({
  id: 'rf-wave',
  module: 'rf',
  order: 1,
  title: '전파란 무엇인가 — 주파수·파장·주기',
  minutes: 18,
  level: '기초',
  summary: '전파(전자기파)의 정체와 주파수·파장·주기의 관계, 주파수 대역별 쓰임새, 그리고 전파가 왜 “공공 자원”으로 관리되는지 이해합니다.',
  objectives: [
    '전파가 무엇이며 빛과 어떤 관계인지 쉬운 말로 설명할 수 있다.',
    '주파수·주기·파장의 관계(λ = c / f, T = 1 / f)를 이용해 간단한 계산을 할 수 있다.',
    'VLF~EHF 주파수 대역 이름과 대표적인 무선 서비스를 연결할 수 있다.',
    '주파수 분배와 인증 시험이 왜 필요한지 설명할 수 있다.'
  ],
  body: `
<h2>전파는 “눈에 보이지 않는 빛”입니다</h2>
<p>전선에 전류가 흐르면 주변에 자기장이 생기고, 자기장이 변하면 다시 전기장이 생깁니다. 이렇게 <strong>전기장과 자기장이 서로를 만들어 내며 공간으로 퍼져 나가는 파동</strong>을 <strong>전자기파(Electromagnetic Wave)</strong>라고 합니다.
전자기파에는 전파, 적외선, 가시광선, 자외선, X선이 모두 포함되며, 이 중 주파수가 대략 <strong>3 THz 이하</strong>인 것을 전파법에서는 <strong>전파</strong>라고 부릅니다. 즉 전파와 빛은 “같은 종류”이고 주파수만 다릅니다. 그래서 전파도 진공에서 <strong>빛의 속도(약 3×10<sup>8</sup> m/s)</strong>로 움직입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  잔잔한 호수에 돌을 던지면 물결이 동심원으로 퍼져 나갑니다. 안테나는 “돌을 계속 던지는 손”이고, 전파는 공간에 퍼지는 “보이지 않는 물결”입니다. 물결이 1초에 몇 번 출렁이는지가 <strong>주파수</strong>, 물결 꼭대기와 꼭대기 사이 거리가 <strong>파장</strong>입니다.
</div>

<h2>주파수 · 주기 · 파장</h2>
<figure class="diagram">
<svg viewBox="0 0 760 245" role="img" aria-label="사인파의 파장, 진폭, 주기">
  <defs><marker id="rfwave-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <line x1="45" y1="120" x2="725" y2="120" stroke="var(--dg-muted)" stroke-width="1.2" marker-end="url(#rfwave-arw)"/>
    <text x="722" y="110" text-anchor="end" font-size="12" fill="var(--text-3)">거리(또는 시간) →</text>
    <path d="M60 120 Q140 -20 220 120 T380 120 T540 120 T700 120" fill="none" stroke="var(--dg-accent)" stroke-width="2.5"/>
    <line x1="140" y1="30" x2="140" y2="50" stroke="var(--dg-line)" stroke-dasharray="3 3"/>
    <line x1="460" y1="30" x2="460" y2="50" stroke="var(--dg-line)" stroke-dasharray="3 3"/>
    <line x1="142" y1="34" x2="458" y2="34" stroke="var(--dg-accent-2)" stroke-width="1.6" marker-start="url(#rfwave-arw)" marker-end="url(#rfwave-arw)"/>
    <rect x="245" y="12" width="110" height="20" rx="4" fill="var(--dg-fill)"/>
    <text x="300" y="27" font-weight="700" fill="var(--dg-accent-2)">파장 λ (미터)</text>
    <line x1="300" y1="122" x2="300" y2="188" stroke="var(--dg-ok)" stroke-width="1.6" marker-start="url(#rfwave-arw)" marker-end="url(#rfwave-arw)"/>
    <text x="309" y="152" text-anchor="start" fill="var(--dg-ok)" font-weight="700">진폭</text>
    <text x="140" y="68" font-size="12" fill="var(--text-3)">마루</text>
    <text x="620" y="208" font-size="12" fill="var(--text-3)">골</text>
    <text x="380" y="232" font-size="13" fill="var(--text-2)">1초에 이 모양이 f번 반복 → 주파수 f (Hz) · 한 번 반복하는 데 걸리는 시간 → 주기 T = 1 / f (초)</text>
  </g>
</svg>
<figcaption>그림 1. 사인파로 본 파장·진폭·주기. 같은 모양이 공간에서는 “파장”, 시간에서는 “주기”로 반복됩니다.</figcaption>
</figure>

<ul>
  <li><strong>주파수(Frequency, f)</strong> — 1초 동안 파동이 반복되는 횟수. 단위 헤르츠(Hz). 1 kHz = 10<sup>3</sup> Hz, 1 MHz = 10<sup>6</sup> Hz, 1 GHz = 10<sup>9</sup> Hz.</li>
  <li><strong>주기(Period, T)</strong> — 한 번 반복하는 데 걸리는 시간. <em>T = 1 / f</em>. 2.4 GHz라면 T = 1 / (2.4×10<sup>9</sup>) ≈ 0.417 ns(나노초)입니다.</li>
  <li><strong>파장(Wavelength, λ)</strong> — 한 번 반복하는 동안 전파가 이동한 거리. 속도 = 거리 / 시간이므로 λ = c × T = c / f 입니다.</li>
  <li><strong>진폭(Amplitude)</strong> — 파동의 세기. 시험에서는 주로 전력(dBm)이나 전계강도(dBµV/m)로 표현합니다(<a href="#/l/rf-db">다음 강의</a>).</li>
</ul>

<div class="formula">λ (m) = c / f = 3×10<sup>8</sup> / f(Hz)  ≈  300 / f(MHz)</div>

<p>마지막 “300 / f(MHz)” 형태는 현장에서 암산할 때 아주 편리합니다. 예제를 풀어 봅시다.</p>
<ol class="steps">
  <li><strong>2.4 GHz(Wi-Fi, Bluetooth)</strong>2.4 GHz = 2400 MHz → λ = 300 / 2400 = 0.125 m = <strong>12.5 cm</strong></li>
  <li><strong>100 MHz(FM 라디오)</strong>λ = 300 / 100 = <strong>3 m</strong></li>
  <li><strong>28 GHz(5G 밀리미터파)</strong>λ = 300 / 28000 ≈ 0.0107 m ≈ <strong>1.07 cm</strong></li>
  <li><strong>13.56 MHz(NFC)</strong>λ = 300 / 13.56 ≈ <strong>22 m</strong> — 카드 크기의 안테나보다 훨씬 깁니다. 그래서 NFC는 “전파를 멀리 보내는” 방식이 아니라 코일 사이의 <em>자기장 결합</em>으로 가까이에서만 통신합니다.</li>
</ol>

<div class="table-wrap"><table class="data">
<thead><tr><th>주파수</th><th>대표 용도</th><th class="num">파장</th><th class="num">주기</th></tr></thead>
<tbody>
<tr><td>13.56 MHz</td><td>NFC, RFID(HF)</td><td class="num">22.1 m</td><td class="num">73.7 ns</td></tr>
<tr><td>100 MHz</td><td>FM 방송</td><td class="num">3 m</td><td class="num">10 ns</td></tr>
<tr><td>900 MHz</td><td>RFID(UHF), LTE 저대역</td><td class="num">33.3 cm</td><td class="num">1.11 ns</td></tr>
<tr><td>2.4 GHz</td><td>Wi-Fi, Bluetooth</td><td class="num">12.5 cm</td><td class="num">0.417 ns</td></tr>
<tr><td>5.5 GHz</td><td>Wi-Fi 5 GHz</td><td class="num">5.45 cm</td><td class="num">0.182 ns</td></tr>
<tr><td>28 GHz</td><td>5G FR2</td><td class="num">1.07 cm</td><td class="num">35.7 ps</td></tr>
<tr><td>77 GHz</td><td>차량용 레이더</td><td class="num">3.9 mm</td><td class="num">13.0 ps</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">왜 파장이 중요할까?</span>
  안테나 크기, 챔버 크기, 측정 거리, 근거리장/원거리장 판단이 모두 <strong>파장</strong>을 기준으로 정해집니다. 예를 들어 반파장 다이폴 안테나는 길이가 약 λ/2이므로 2.4 GHz용은 약 6 cm, 100 MHz용은 약 1.5 m입니다. <a href="#/tools">RF 계산기</a>의 파장 계산으로 직접 확인해 보세요.
</div>

<div class="callout note">
  <span class="callout-title">케이블 안에서는 파장이 짧아집니다</span>
  동축 케이블 안에서 전파 속도는 빛의 속도의 약 66~85 %(속도 계수, Velocity Factor)입니다. 따라서 케이블 속 파장은 자유공간보다 짧습니다. 케이블 길이로 위상을 맞추는 작업이나 케이블 공진을 따질 때 이 차이를 고려합니다.
</div>

<h2>주파수 대역과 쓰임새</h2>
<p>국제전기통신연합(ITU)은 주파수를 10배 단위로 끊어 이름을 붙였습니다. 주파수가 높을수록 파장이 짧아지고, 성질이 “소리 같은 파동”에서 “빛 같은 파동”으로 바뀝니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="주파수 대역 VLF부터 EHF까지와 대표 서비스">
  <g font-size="11.5" fill="var(--text)" text-anchor="middle">
    <g stroke="var(--dg-line)">
      <rect x="20" y="62" width="85" height="40" fill="var(--dg-fill-2)"/>
      <rect x="105" y="62" width="85" height="40" fill="var(--dg-fill)"/>
      <rect x="190" y="62" width="85" height="40" fill="var(--dg-fill-2)"/>
      <rect x="275" y="62" width="85" height="40" fill="var(--dg-fill)"/>
      <rect x="360" y="62" width="85" height="40" fill="var(--dg-fill-2)"/>
      <rect x="445" y="62" width="85" height="40" fill="var(--dg-fill)"/>
      <rect x="530" y="62" width="85" height="40" fill="var(--dg-fill-2)"/>
      <rect x="615" y="62" width="85" height="40" fill="var(--dg-fill)"/>
    </g>
    <g font-size="14" font-weight="700">
      <text x="62" y="87">VLF</text><text x="147" y="87">LF</text><text x="232" y="87">MF</text><text x="317" y="87">HF</text>
      <text x="402" y="87">VHF</text><text x="487" y="87">UHF</text><text x="572" y="87">SHF</text><text x="657" y="87">EHF</text>
    </g>
    <g font-size="11" fill="var(--text-3)">
      <text x="20" y="118">3k</text><text x="105" y="118">30k</text><text x="190" y="118">300k</text><text x="275" y="118">3M</text>
      <text x="360" y="118">30M</text><text x="445" y="118">300M</text><text x="530" y="118">3G</text><text x="615" y="118">30G</text><text x="700" y="118">300G</text>
      <text x="735" y="118">Hz</text>
    </g>
    <g stroke="var(--dg-accent-2)" stroke-width="1.3">
      <line x1="234" y1="52" x2="234" y2="62"/><line x1="318" y1="34" x2="318" y2="62"/>
      <line x1="404" y1="52" x2="404" y2="62"/><line x1="480" y1="34" x2="480" y2="62"/>
      <line x1="522" y1="52" x2="522" y2="62"/><line x1="556" y1="34" x2="556" y2="62"/>
      <line x1="612" y1="52" x2="612" y2="62"/><line x1="655" y1="34" x2="655" y2="62"/>
    </g>
    <g fill="var(--dg-accent-2)" font-weight="700">
      <text x="234" y="48">AM 라디오</text><text x="318" y="28">단파·NFC</text>
      <text x="404" y="48">FM 라디오</text><text x="480" y="28">LTE·5G FR1</text>
      <text x="516" y="48">Wi-Fi 2.4G</text><text x="560" y="28">Wi-Fi 5/6G</text>
      <text x="612" y="48">5G FR2</text><text x="660" y="28">차량 레이더</text>
    </g>
    <text x="20" y="148" text-anchor="start" fill="var(--text-2)" font-size="12.5">← 파장이 길다 (100 km ~ 수 m): 멀리, 장애물을 돌아서 간다</text>
    <text x="740" y="170" text-anchor="end" fill="var(--text-2)" font-size="12.5">파장이 짧다 (수 cm ~ 1 mm): 직진, 넓은 대역폭, 가까운 거리 →</text>
    <text x="380" y="193" fill="var(--text-3)" font-size="11.5">가로축은 로그 눈금(한 칸 = 10배)</text>
  </g>
</svg>
<figcaption>그림 2. ITU 주파수 대역 명칭과 대표 서비스 위치(로그 눈금, 위치는 대략적)</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>대역</th><th>주파수 범위</th><th>파장</th><th>대표 서비스(예)</th><th>성질</th></tr></thead>
<tbody>
<tr><td>VLF (초장파)</td><td>3 ~ 30 kHz</td><td>100 ~ 10 km</td><td>해상·잠수함 통신, 항법</td><td>바닷물·지면을 따라 매우 멀리</td></tr>
<tr><td>LF (장파)</td><td>30 ~ 300 kHz</td><td>10 ~ 1 km</td><td>125 kHz RFID, 무선충전(대략 100~200 kHz대)</td><td>지표파, 근거리 자기장 결합</td></tr>
<tr><td>MF (중파)</td><td>300 kHz ~ 3 MHz</td><td>1 km ~ 100 m</td><td>AM 라디오</td><td>지표파 + 야간 전리층 반사</td></tr>
<tr><td>HF (단파)</td><td>3 ~ 30 MHz</td><td>100 ~ 10 m</td><td>단파 방송, 아마추어 무선, NFC(13.56 MHz)</td><td>전리층 반사로 대륙 간 통신</td></tr>
<tr><td>VHF (초단파)</td><td>30 ~ 300 MHz</td><td>10 ~ 1 m</td><td>FM 라디오(88~108 MHz), 항공 무선, 해상 무선</td><td>가시거리 위주, 약간 회절</td></tr>
<tr><td>UHF (극초단파)</td><td>300 MHz ~ 3 GHz</td><td>1 m ~ 10 cm</td><td>디지털 TV, LTE, GPS(1575.42 MHz), Wi-Fi·Bluetooth 2.4 GHz, UHF RFID</td><td>이동통신의 핵심 대역, 건물 투과 적당</td></tr>
<tr><td>SHF (센티미터파)</td><td>3 ~ 30 GHz</td><td>10 ~ 1 cm</td><td>5G 3.5 GHz, Wi-Fi 5/6 GHz, 위성, 레이더, 5G 28 GHz</td><td>직진성 강함, 넓은 대역폭</td></tr>
<tr><td>EHF (밀리미터파)</td><td>30 ~ 300 GHz</td><td>1 cm ~ 1 mm</td><td>60 GHz 근거리 통신, 76~81 GHz 차량 레이더</td><td>비·산소 흡수 큼, 매우 짧은 거리</td></tr>
</tbody></table></div>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  낮은 주파수는 <strong>저음</strong>과 비슷합니다. 옆집 벽을 넘어 “쿵쿵” 울리죠(멀리, 장애물 투과·회절). 높은 주파수는 <strong>고음</strong>이나 <strong>손전등 빛</strong>과 비슷해서 곧게 나아가지만 벽에 쉽게 막힙니다. 대신 고주파 대역은 비어 있는 폭이 넓어서 한 번에 많은 데이터를 실어 보낼 수 있습니다(5G 밀리미터파를 쓰는 이유).
</div>

<h2>전파는 공공 자원 — 주파수 분배</h2>
<p>전파는 누구나 쏠 수 있지만, 같은 장소에서 같은 주파수를 여러 명이 동시에 쓰면 서로 섞여 통신이 되지 않습니다. 그래서 전파는 국가가 관리하는 <strong>유한한 공공 자원</strong>입니다.</p>
<ul>
  <li><strong>주파수 분배(Allocation)</strong> — 어느 대역을 어떤 “업무”(방송, 이동통신, 항공, 위성, 레이더 등)에 쓸지 정합니다. 국제적으로는 ITU 무선통신규칙(Radio Regulations), 국내에서는 과학기술정보통신부의 <em>대한민국 주파수 분배표</em>가 기준입니다.</li>
  <li><strong>할당·지정</strong> — 분배된 대역을 특정 사업자(예: 이동통신사)나 무선국에 배정합니다. 이동통신 주파수는 경매 등으로 할당됩니다.</li>
  <li><strong>비면허(신고하지 않는) 기기용 대역</strong> — Wi-Fi, Bluetooth처럼 개인이 허가 없이 쓰는 기기는 <em>정해진 대역에서 정해진 출력·방식</em>만 지키면 누구나 쓸 수 있습니다. 대신 제품이 그 기준을 지키는지 출시 전에 <strong>적합성평가(인증)</strong>로 확인합니다.</li>
</ul>

<div class="callout note">
  <span class="callout-title">우리 업무와의 연결</span>
  무선 시험의 대부분은 “허락받은 차선(주파수 대역) 안에서, 허락된 세기(출력)로, 옆 차선을 침범하지 않고(대역폭·스퓨리어스) 달리는가”를 확인하는 일입니다. 이 과정에서 배우는 주파수·dB·대역폭 개념이 모두 이 질문에 답하기 위한 도구입니다.
</div>

<h2>흔한 실수</h2>
<ul>
  <li><strong>단위 접두어 혼동</strong> — MHz와 GHz를 헷갈려 파장을 1000배 틀리게 계산하는 일이 많습니다. 계산 전에 단위를 MHz로 통일하세요.</li>
  <li><strong>m(밀리)와 M(메가)</strong> — mW(밀리와트)와 MW(메가와트)는 10<sup>9</sup>배 차이입니다. 기록지에는 대소문자를 정확히 씁니다.</li>
  <li><strong>“주파수가 높으면 전파가 더 세다”는 오해</strong> — 주파수와 세기(출력)는 별개의 성질입니다. 주파수는 “얼마나 빨리 출렁이는가”, 세기는 “얼마나 크게 출렁이는가”입니다.</li>
</ul>
`,
  quiz: [
    { q: '5.8 GHz 전파의 자유공간 파장에 가장 가까운 값은?',
      options: ['약 51.7 cm', '약 5.17 cm', '약 0.517 cm', '약 5.17 m'],
      answer: 1, explain: 'λ ≈ 300 / f(MHz) = 300 / 5800 ≈ 0.0517 m = 5.17 cm 입니다.' },
    { q: '주파수가 높아질수록 일반적으로 나타나는 성질로 옳은 것은?',
      options: ['파장이 길어지고 회절이 잘 된다', '파장이 짧아지고 직진성이 강해진다', '전파 속도가 빨라진다', '출력이 자동으로 커진다'],
      answer: 1, explain: '주파수가 높을수록 파장이 짧아져 빛처럼 직진성이 강해지고 장애물에 잘 막힙니다. 전파 속도는 주파수와 관계없이 빛의 속도입니다.' },
    { q: 'FM 라디오(88~108 MHz)가 속한 ITU 대역 명칭은?',
      options: ['MF', 'HF', 'UHF', 'VHF'],
      answer: 3, explain: 'VHF는 30~300 MHz입니다. FM 방송은 VHF 대역에 있습니다.' },
    { q: 'Wi-Fi·Bluetooth처럼 허가 없이 쓰는 무선기기에 대해 옳은 설명은?',
      options: ['어떤 주파수·출력이든 자유롭게 쓸 수 있다', '정해진 대역과 기술기준을 지켜야 하며 출시 전 적합성평가로 확인한다', '전파법 적용 대상이 아니다', '이동통신사의 허락만 받으면 된다'],
      answer: 1, explain: '비면허 기기도 정해진 대역·출력·방식을 지켜야 하며, 이를 출시 전에 적합성평가(인증)로 확인합니다.' },
    { q: '2.4 GHz 신호의 주기(T)는 약 얼마인가?',
      options: ['0.417 ns', '4.17 ns', '41.7 µs', '2.4 ns'],
      answer: 0, explain: 'T = 1 / f = 1 / (2.4×10^9) ≈ 0.417×10^-9 s = 0.417 ns 입니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전파 관련 기술기준·고시' },
    { title: '국가법령정보센터 — 전파법', url: 'https://www.law.go.kr', note: '전파법·시행령 원문 검색' },
    { title: 'ITU Radio Regulations', url: 'https://www.itu.int/pub/R-REG-RR', note: '국제 주파수 분배(무선통신규칙)' }
  ]
});

COURSE.addLesson({
  id: 'rf-db',
  module: 'rf',
  order: 2,
  title: 'dB와 dBm 완전 정복',
  minutes: 25,
  level: '기초',
  summary: '시험소에서 가장 많이 쓰는 단위 dB·dBm·dBµV·dBµV/m를 비유와 암기표로 익히고, 케이블 손실 보정 계산을 손으로 해 봅니다.',
  objectives: [
    '로그 단위를 쓰는 이유와 dB(비율)·dBm(절대값)의 차이를 설명할 수 있다.',
    '3 dB = 2배, 10 dB = 10배 규칙으로 dBm↔W를 암산할 수 있다.',
    '이득·손실을 덧셈·뺄셈으로 계산해 케이블 손실을 보정할 수 있다.',
    'dBW, dBµV, dBµV/m 사이의 관계와 흔한 계산 실수를 안다.'
  ],
  body: `
<h2>왜 로그(dB)를 쓸까?</h2>
<p>무선 시험에서 다루는 전력은 범위가 엄청나게 넓습니다. 휴대폰이 내보내는 전력은 약 0.2 W인데, 기지국에서 휴대폰에 도착하는 신호는 0.000 000 000 01 W(10<sup>−11</sup> W) 정도일 수 있습니다. 이런 숫자를 0을 세어 가며 곱하고 나누면 실수가 나기 쉽습니다.</p>
<p><strong>데시벨(dB, decibel)</strong>은 “몇 배인가”를 <em>0의 개수</em>로 바꿔 부르는 방법입니다. 10배는 10 dB, 100배는 20 dB, 1000배는 30 dB. 이렇게 하면 <strong>곱셈이 덧셈으로</strong>, <strong>나눗셈이 뺄셈으로</strong> 바뀌어 암산이 쉬워집니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  dB는 “배율을 세는 자”입니다. 지도에서 축척 대신 “몇 단계 확대”라고 말하는 것과 비슷합니다. <strong>10 dB 올라가면 10배</strong>, <strong>3 dB 올라가면 약 2배</strong>. 증폭기(×100)와 케이블(×1/2)을 지나면 곱하는 대신 “+20 dB − 3 dB = +17 dB”로 더하면 끝입니다.
</div>

<div class="formula">비율(dB) = 10 · log<sub>10</sub>(P<sub>2</sub> / P<sub>1</sub>)   ← 전력 비</div>
<div class="formula">비율(dB) = 20 · log<sub>10</sub>(V<sub>2</sub> / V<sub>1</sub>)   ← 전압·전계 비 (전력은 전압의 제곱에 비례하므로 20)</div>

<h2>dB와 dBm은 다릅니다</h2>
<ul>
  <li><strong>dB</strong> — 두 값의 <em>비율</em>. 단위가 없는 “상대값”입니다. 이득(Gain), 손실(Loss), 감쇠(Attenuation), 신호 대 잡음비(SNR) 등에 씁니다.</li>
  <li><strong>dBm</strong> — <em>1 mW를 기준(0 dBm)</em>으로 한 절대 전력. “m”이 기준(milliwatt)을 뜻합니다. 송신 출력, 수신 레벨 등 실제 전력에 씁니다.</li>
  <li><strong>dBW</strong> — 1 W 기준. <em>dBW = dBm − 30</em> (1 W = 1000 mW = 30 dBm).</li>
  <li><strong>dBc</strong> — 반송파(carrier) 기준 상대값. “고조파가 −40 dBc”는 반송파보다 40 dB 낮다는 뜻입니다.</li>
</ul>
<div class="formula">P(dBm) = 10 · log<sub>10</sub>( P / 1 mW )       P(mW) = 10<sup>P(dBm) / 10</sup></div>

<figure class="diagram">
<svg viewBox="0 0 760 170" role="img" aria-label="dBm 눈금과 실제 전력 눈금 비교">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <rect x="40" y="82" width="680" height="16" rx="3" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <g stroke="var(--dg-line)" stroke-width="1.2">
      <line x1="40" y1="78" x2="40" y2="102"/><line x1="137.1" y1="78" x2="137.1" y2="102"/><line x1="234.3" y1="78" x2="234.3" y2="102"/><line x1="331.4" y1="78" x2="331.4" y2="102"/>
      <line x1="428.6" y1="78" x2="428.6" y2="102"/><line x1="525.7" y1="78" x2="525.7" y2="102"/><line x1="622.9" y1="78" x2="622.9" y2="102"/><line x1="720" y1="78" x2="720" y2="102"/>
    </g>
    <g font-weight="700">
      <text x="40" y="118">−100</text><text x="137.1" y="118">−80</text><text x="234.3" y="118">−60</text><text x="331.4" y="118">−40</text>
      <text x="428.6" y="118">−20</text><text x="525.7" y="118" fill="var(--dg-accent)">0 dBm</text><text x="622.9" y="118">+20</text><text x="720" y="118">+40</text>
    </g>
    <g fill="var(--text-3)" font-size="11.5">
      <text x="40" y="136">0.1 pW</text><text x="137.1" y="136">10 pW</text><text x="234.3" y="136">1 nW</text><text x="331.4" y="136">100 nW</text>
      <text x="428.6" y="136">10 µW</text><text x="525.7" y="136" fill="var(--dg-accent)">1 mW</text><text x="622.9" y="136">100 mW</text><text x="720" y="136">10 W</text>
    </g>
    <g stroke="var(--dg-accent-2)" stroke-width="1.3">
      <line x1="88.6" y1="36" x2="88.6" y2="82"/><line x1="282.9" y1="36" x2="282.9" y2="82"/><line x1="525.7" y1="36" x2="525.7" y2="82"/>
      <line x1="637.4" y1="58" x2="637.4" y2="82"/><line x1="671.4" y1="36" x2="671.4" y2="82"/>
    </g>
    <g fill="var(--dg-accent-2)" font-size="11.5" font-weight="700">
      <text x="92" y="30">수신 감도 한계 −90</text><text x="282.9" y="30">옆방 Wi-Fi 수신 −50</text><text x="525.7" y="30">BLE 송신 0</text>
      <text x="600" y="52">휴대폰 최대 +23</text><text x="690" y="30">분석기 입력 한계 +30</text>
    </g>
    <text x="380" y="162" fill="var(--text-2)" font-size="12.5">같은 간격(20 dB)마다 전력은 100배씩 커집니다 — 140 dB 폭 = 10<tspan baseline-shift="super" font-size="9">14</tspan>배 범위를 한 줄에!</text>
  </g>
</svg>
<figcaption>그림 1. dBm 눈금(위)과 실제 전력(아래). 로그 눈금 덕분에 pW부터 W까지 한 화면에 담깁니다(예시 레벨은 대략값).</figcaption>
</figure>

<h2>꼭 외울 암기표</h2>
<p>아래 몇 개만 외우면 대부분의 dB 계산을 계산기 없이 할 수 있습니다. 핵심은 <strong>“+3 dB = ×2, +10 dB = ×10”</strong> 두 가지입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th class="num">dB</th><th class="num">전력 배율</th><th class="num">전압 배율</th><th>외우는 법</th></tr></thead>
<tbody>
<tr><td class="num">0</td><td class="num">1</td><td class="num">1</td><td>변화 없음</td></tr>
<tr><td class="num">1</td><td class="num">≈ 1.26</td><td class="num">≈ 1.12</td><td>약 25 % 증가</td></tr>
<tr><td class="num">3</td><td class="num">≈ 2</td><td class="num">≈ 1.41</td><td><strong>2배</strong> (정확히는 1.995)</td></tr>
<tr><td class="num">6</td><td class="num">≈ 4</td><td class="num">≈ 2</td><td>3 dB + 3 dB = 2 × 2 (전압은 2배)</td></tr>
<tr><td class="num">7</td><td class="num">≈ 5</td><td class="num">≈ 2.24</td><td>10 dB − 3 dB = 10 ÷ 2</td></tr>
<tr><td class="num">10</td><td class="num">10</td><td class="num">≈ 3.16</td><td><strong>10배</strong></td></tr>
<tr><td class="num">13</td><td class="num">≈ 20</td><td class="num">≈ 4.47</td><td>10 dB + 3 dB = 10 × 2</td></tr>
<tr><td class="num">20</td><td class="num">100</td><td class="num">10</td><td>10 × 10 (전압은 10배)</td></tr>
<tr><td class="num">30</td><td class="num">1000</td><td class="num">≈ 31.6</td><td>0이 3개</td></tr>
<tr><td class="num">−3</td><td class="num">≈ 0.5</td><td class="num">≈ 0.71</td><td>절반</td></tr>
<tr><td class="num">−10</td><td class="num">0.1</td><td class="num">≈ 0.316</td><td>1/10</td></tr>
</tbody></table></div>

<h3>dBm ↔ 전력 변환표</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th class="num">dBm</th><th class="num">전력</th><th class="num">dBm</th><th class="num">전력</th></tr></thead>
<tbody>
<tr><td class="num">−30</td><td class="num">1 µW</td><td class="num">+20</td><td class="num">100 mW</td></tr>
<tr><td class="num">−20</td><td class="num">10 µW</td><td class="num">+23</td><td class="num">200 mW</td></tr>
<tr><td class="num">−10</td><td class="num">100 µW</td><td class="num">+27</td><td class="num">500 mW</td></tr>
<tr><td class="num">0</td><td class="num">1 mW</td><td class="num">+30</td><td class="num">1 W</td></tr>
<tr><td class="num">+3</td><td class="num">2 mW</td><td class="num">+33</td><td class="num">2 W</td></tr>
<tr><td class="num">+10</td><td class="num">10 mW</td><td class="num">+37</td><td class="num">5 W</td></tr>
<tr><td class="num">+13</td><td class="num">20 mW</td><td class="num">+40</td><td class="num">10 W</td></tr>
<tr><td class="num">+17</td><td class="num">50 mW</td><td class="num">+50</td><td class="num">100 W</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">암산 연습</span>
  <strong>+27 dBm은?</strong> 30 dBm(1 W)에서 3 dB 빼기 → 1 W ÷ 2 = <strong>0.5 W</strong>.<br>
  <strong>+14 dBm은?</strong> 20 dBm(100 mW)에서 6 dB 빼기 → 100 ÷ 4 = <strong>25 mW</strong>.<br>
  <strong>250 mW는?</strong> 250 = 1000 ÷ 4 → 30 − 6 = <strong>+24 dBm</strong>.<br>
  정확한 값이 필요하면 <a href="#/tools">RF 계산기</a>의 dBm↔W 변환을 쓰세요.
</div>

<h2>이득과 손실은 “더하고 빼기”</h2>
<p>신호가 증폭기·케이블·감쇠기를 차례로 지날 때, 선형 단위라면 배율을 곱해야 하지만 dB에서는 그냥 더하면 됩니다.</p>
<div class="formula">출력(dBm) = 입력(dBm) + 이득(dB) − 손실(dB)</div>
<p>규칙은 간단합니다.</p>
<ul>
  <li><strong>dBm + dB = dBm</strong> (절대값에 비율을 적용하면 절대값)</li>
  <li><strong>dBm − dBm = dB</strong> (두 절대값의 차는 비율, 예: SNR, 채널 간 차이)</li>
  <li><strong>dB + dB = dB</strong> (이득·손실 누적)</li>
  <li><strong>dBm + dBm = ?</strong> → <em>의미 없음!</em> 두 전력을 합치려면 W로 바꿔서 더해야 합니다.</li>
</ul>

<h3>예제: 케이블·감쇠기 손실 보정</h3>
<p>무선기기(EUT) 출력을 스펙트럼 분석기로 측정합니다. 입력단 보호를 위해 20 dB 감쇠기를 넣었고, 케이블 두 개의 손실은 사전에 측정해 두었습니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="케이블과 감쇠기를 거친 신호 레벨 변화">
  <defs><marker id="rfdb-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="15" y="30" width="120" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <text x="75" y="54" font-weight="700">EUT</text><text x="75" y="73" font-size="11.5" fill="var(--text-3)">무선기기 출력</text>
    <rect x="168" y="30" width="120" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="228" y="54" font-weight="700">케이블 ①</text><text x="228" y="73" font-size="11.5" fill="var(--text-3)">손실 1.5 dB</text>
    <rect x="321" y="30" width="120" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="381" y="54" font-weight="700">감쇠기</text><text x="381" y="73" font-size="11.5" fill="var(--text-3)">20 dB</text>
    <rect x="474" y="30" width="120" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="534" y="54" font-weight="700">케이블 ②</text><text x="534" y="73" font-size="11.5" fill="var(--text-3)">손실 0.5 dB</text>
    <rect x="627" y="30" width="120" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="687" y="54" font-weight="700">분석기</text><text x="687" y="73" font-size="11.5" fill="var(--text-3)">표시값</text>
    <g stroke="var(--dg-line)" stroke-width="1.5">
      <line x1="135" y1="58" x2="164" y2="58" marker-end="url(#rfdb-arw)"/><line x1="288" y1="58" x2="317" y2="58" marker-end="url(#rfdb-arw)"/>
      <line x1="441" y1="58" x2="470" y2="58" marker-end="url(#rfdb-arw)"/><line x1="594" y1="58" x2="623" y2="58" marker-end="url(#rfdb-arw)"/>
    </g>
    <g font-weight="700" font-size="14">
      <text x="151" y="112" fill="var(--dg-accent)">+20.0 dBm</text>
      <text x="304" y="112">+18.5 dBm</text>
      <text x="457" y="112">−1.5 dBm</text>
      <text x="610" y="112" fill="var(--dg-accent-2)">−2.0 dBm</text>
    </g>
    <g font-size="11" fill="var(--text-3)"><text x="151" y="128">실제 출력</text><text x="304" y="128">−1.5</text><text x="457" y="128">−20</text><text x="610" y="128">−0.5</text></g>
    <rect x="60" y="148" width="640" height="38" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)"/>
    <text x="380" y="172" font-size="13.5">보정: 표시값 −2.0 dBm + 경로 손실(1.5 + 20 + 0.5 = 22.0 dB) = <tspan font-weight="700" fill="var(--dg-ok)">+20.0 dBm</tspan></text>
  </g>
</svg>
<figcaption>그림 2. 측정 경로의 손실을 더해 EUT 출력으로 환산하기. 분석기에 Ref Level Offset 22 dB를 설정하면 화면에 바로 +20.0 dBm이 표시됩니다.</figcaption>
</figure>

<ol class="steps">
  <li><strong>경로 손실 합산</strong>1.5 + 20.0 + 0.5 = 22.0 dB (측정 주파수에서의 값을 사용해야 합니다. 케이블 손실은 주파수가 높을수록 커집니다.)</li>
  <li><strong>보정</strong>EUT 출력 = 표시값 + 경로 손실 = −2.0 + 22.0 = +20.0 dBm</li>
  <li><strong>선형 환산</strong>+20.0 dBm = 100 mW</li>
  <li><strong>기록</strong>표시값, 적용한 오프셋, 오프셋의 근거(케이블·감쇠기 ID와 손실 측정일)를 함께 기록합니다.</li>
</ol>

<div class="callout warn">
  <span class="callout-title">가장 흔한 실수: 부호</span>
  “손실 22 dB”를 오프셋에 <strong>−22</strong>로 넣는 실수가 잦습니다. 분석기 Ref Offset은 “표시값에 더할 값”이므로 손실 보정은 <strong>+22 dB</strong>입니다. 설정 후에는 신호발생기로 알려진 레벨을 넣어 화면 값이 맞는지 확인하는 습관을 들이세요.
</div>

<h2>두 신호의 합: dB로 더하면 안 되는 경우</h2>
<p>+10 dBm 신호 두 개를 합치면 +20 dBm일까요? 아닙니다. 10 mW + 10 mW = 20 mW = <strong>+13 dBm</strong>입니다. 크기가 같은 두 전력을 합치면 <strong>+3 dB</strong>가 됩니다.</p>
<ul>
  <li>MIMO 2개 안테나 포트 출력이 각각 +17 dBm이면 합계 출력은 +20 dBm입니다(포트 합산 시).</li>
  <li>크기가 10 dB 차이 나는 두 신호를 합치면 큰 쪽보다 약 0.4 dB만 커집니다. 작은 신호의 영향은 금방 무시할 만해집니다.</li>
</ul>

<h2>전압·전계 단위: dBµV와 dBµV/m</h2>
<p>EMC 시험에서는 전력보다 <strong>전압</strong>과 <strong>전계강도</strong>를 주로 씁니다.</p>
<ul>
  <li><strong>dBµV</strong> — 1 µV 기준 전압. 0 dBµV = 1 µV, 60 dBµV = 1 mV, 120 dBµV = 1 V. 전압이므로 20·log를 씁니다.</li>
  <li><strong>dBµV/m</strong> — 1 µV/m 기준 <em>전계강도</em>. 방사 방출(RE) 한계값이 주로 이 단위입니다.</li>
  <li><strong>dBm ↔ dBµV (50 Ω 시스템)</strong> — 0 dBm은 50 Ω에서 약 0.2236 V = 약 107 dBµV입니다.</li>
</ul>
<div class="formula">dBµV = dBm + 107   (50 Ω 기준)</div>
<p>예: 분석기에서 −60 dBm으로 읽힌 신호 = −60 + 107 = <strong>47 dBµV</strong>. 전계강도로 바꾸려면 여기에 안테나 인자(AF)와 케이블 손실을 더합니다(<a href="#/l/rf-antenna">안테나 기초</a>에서 다룸).</p>

<div class="kbox">
  <div><div class="k">3 dB</div><div class="v">× 2</div></div>
  <div><div class="k">10 dB</div><div class="v">× 10</div></div>
  <div><div class="k">0 dBm</div><div class="v">1 mW</div></div>
  <div><div class="k">30 dBm</div><div class="v">1 W</div></div>
  <div><div class="k">0 dBm (50 Ω)</div><div class="v">107 dBµV</div></div>
</div>

<h2>흔한 실수 모음</h2>
<ul>
  <li><strong>전압 비에 10·log 사용</strong> — 전압·전계·전류 비는 20·log입니다. 전압 2배는 6 dB이지 3 dB가 아닙니다.</li>
  <li><strong>dBm끼리 더하기</strong> — 합산은 반드시 선형(mW)으로 바꿔서.</li>
  <li><strong>dB와 dBm 표기 혼용</strong> — 기록지에 “출력 20 dB”라고 쓰면 틀립니다. 절대 전력은 반드시 dBm(또는 dBW).</li>
  <li><strong>손실을 음수로 적고 또 빼기</strong> — “손실 −3 dB”를 빼면 오히려 더하게 됩니다. 손실은 양수로 적고 빼는 것으로 통일하세요.</li>
</ul>
`,
  quiz: [
    { q: '+33 dBm을 와트(W)로 바꾸면?',
      options: ['0.33 W', '1 W', '2 W', '3.3 W'],
      answer: 2, explain: '+30 dBm = 1 W, 여기서 +3 dB는 2배이므로 +33 dBm = 2 W입니다.' },
    { q: '분석기 표시값이 −5.0 dBm이고, 측정 경로(케이블+감쇠기) 손실이 합계 31.2 dB이다. EUT 출력은?',
      options: ['−36.2 dBm', '+26.2 dBm', '+31.2 dBm', '−26.2 dBm'],
      answer: 1, explain: 'EUT 출력 = 표시값 + 경로 손실 = −5.0 + 31.2 = +26.2 dBm입니다.' },
    { q: '+10 dBm 신호 두 개(서로 상관 없음)를 전력 합산하면?',
      options: ['+20 dBm', '+10 dBm', '+100 dBm', '+13 dBm'],
      answer: 3, explain: '10 mW + 10 mW = 20 mW = +13 dBm. 같은 크기 두 전력의 합은 +3 dB입니다.' },
    { q: '전압이 10배가 되면 몇 dB인가?',
      options: ['20 dB', '10 dB', '3 dB', '100 dB'],
      answer: 0, explain: '전압 비는 20·log10(10) = 20 dB입니다. 전력으로는 100배에 해당합니다.' },
    { q: '50 Ω 시스템에서 −40 dBm은 약 몇 dBµV인가?',
      options: ['−147 dBµV', '47 dBµV', '67 dBµV', '107 dBµV'],
      answer: 2, explain: 'dBµV = dBm + 107 이므로 −40 + 107 = 67 dBµV입니다.' }
  ],
  refs: [
    { title: 'Rohde & Schwarz — Application notes', url: 'https://www.rohde-schwarz.com', note: 'dB 기초, 스펙트럼 분석 기초 자료' },
    { title: 'Keysight — Spectrum Analysis Basics (AN 150)', url: 'https://www.keysight.com', note: '스펙트럼 분석기와 dB 단위 기초' }
  ]
});

COURSE.addLesson({
  id: 'rf-domain',
  module: 'rf',
  order: 3,
  title: '시간 영역과 주파수 영역',
  minutes: 22,
  level: '기초',
  summary: '같은 신호를 “시간”으로 보는 오실로스코프와 “주파수”로 보는 스펙트럼 분석기의 관점 차이, 그리고 반송파·대역폭·고조파·잡음·SNR의 의미를 익힙니다.',
  objectives: [
    '시간 영역과 주파수 영역 표현의 차이를 그림으로 설명할 수 있다.',
    '반송파, 대역폭, 고조파가 스펙트럼에서 어떻게 보이는지 안다.',
    '열잡음 −174 dBm/Hz를 이용해 대역폭별 잡음 전력을 계산할 수 있다.',
    'RBW를 바꾸면 잡음 바닥과 광대역 신호의 표시값이 왜 달라지는지 설명할 수 있다.'
  ],
  body: `
<h2>같은 신호, 두 가지 시선</h2>
<p>신호를 보는 방법은 크게 두 가지입니다.</p>
<ul>
  <li><strong>시간 영역(Time Domain)</strong> — 가로축이 시간, 세로축이 전압. “시간에 따라 신호가 어떻게 오르내리는가”를 봅니다. 대표 장비: <strong>오실로스코프(Oscilloscope)</strong>.</li>
  <li><strong>주파수 영역(Frequency Domain)</strong> — 가로축이 주파수, 세로축이 전력(dBm). “이 신호가 어떤 주파수 성분으로 이루어져 있고 각각 얼마나 센가”를 봅니다. 대표 장비: <strong>스펙트럼 분석기(Spectrum Analyzer)</strong>.</li>
</ul>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  오케스트라 연주를 녹음한 파형(시간 영역)을 보면 “소리가 크다/작다”만 보입니다. 하지만 악보처럼 “바이올린 440 Hz, 첼로 220 Hz…”로 나누어 보면(주파수 영역) 어떤 악기가 얼마나 크게 연주하는지 알 수 있습니다. 프리즘이 흰 빛을 무지개색으로 나누는 것도 같은 원리입니다. 스펙트럼 분석기는 “전파용 프리즘”입니다.
</div>

<figure class="diagram">
<svg viewBox="0 0 760 320" role="img" aria-label="사인파와 사각파의 시간 영역과 주파수 영역 비교">
  <defs><marker id="rfdom-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-muted)"/></marker></defs>
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <text x="190" y="18" font-size="14" font-weight="700" fill="var(--dg-accent)">시간 영역 — 오실로스코프</text>
    <text x="575" y="18" font-size="14" font-weight="700" fill="var(--dg-accent-2)">주파수 영역 — 스펙트럼 분석기</text>
    <line x1="380" y1="30" x2="380" y2="310" stroke="var(--dg-line)" stroke-dasharray="4 4"/>
    <line x1="35" y1="90" x2="355" y2="90" stroke="var(--dg-muted)" marker-end="url(#rfdom-arw)"/>
    <text x="352" y="80" text-anchor="end" font-size="11" fill="var(--text-3)">시간</text>
    <path d="M40 90 Q65 30 90 90 T140 90 T190 90 T240 90 T290 90 T340 90" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <text x="40" y="140" text-anchor="start" font-size="12" fill="var(--text-2)">① 순수한 사인파(무변조 반송파, CW)</text>
    <line x1="410" y1="130" x2="740" y2="130" stroke="var(--dg-muted)" marker-end="url(#rfdom-arw)"/>
    <text x="738" y="146" text-anchor="end" font-size="11" fill="var(--text-3)">주파수</text>
    <line x1="480" y1="130" x2="480" y2="55" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <text x="480" y="146">f₀</text>
    <text x="560" y="80" text-anchor="start" font-size="12" fill="var(--text-2)">주파수 성분이 딱 하나 → 선 1개</text>
    <line x1="35" y1="230" x2="355" y2="230" stroke="var(--dg-muted)" marker-end="url(#rfdom-arw)"/>
    <text x="352" y="222" text-anchor="end" font-size="11" fill="var(--text-3)">시간</text>
    <path d="M40 230 L40 200 L90 200 L90 260 L140 260 L140 200 L190 200 L190 260 L240 260 L240 200 L290 200 L290 260 L340 260 L340 230" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <text x="40" y="290" text-anchor="start" font-size="12" fill="var(--text-2)">② 사각파(디지털 클럭 등)</text>
    <line x1="410" y1="280" x2="740" y2="280" stroke="var(--dg-muted)" marker-end="url(#rfdom-arw)"/>
    <g stroke="var(--dg-accent-2)" stroke-width="3">
      <line x1="470" y1="280" x2="470" y2="205"/><line x1="540" y1="280" x2="540" y2="255"/>
      <line x1="610" y1="280" x2="610" y2="265"/><line x1="680" y1="280" x2="680" y2="269"/>
    </g>
    <text x="470" y="298">f₀</text><text x="540" y="298">3f₀</text><text x="610" y="298">5f₀</text><text x="680" y="298">7f₀</text>
    <text x="560" y="215" text-anchor="start" font-size="12" fill="var(--text-2)">기본파 + 홀수 고조파들</text>
  </g>
</svg>
<figcaption>그림 1. 사인파는 스펙트럼에서 선 하나, 모서리가 날카로운 사각파는 기본파와 여러 고조파의 합으로 보입니다.</figcaption>
</figure>

<p>어떤 복잡한 신호도 여러 사인파의 합으로 나타낼 수 있습니다(푸리에 변환, Fourier Transform). 시간 영역에서는 뒤섞여 보이지 않던 작은 성분도 주파수 영역에서는 따로 떨어져 보이기 때문에, <strong>무선 인증 시험의 대부분은 스펙트럼 분석기로 주파수 영역에서</strong> 이루어집니다. 반면 버스트 신호의 켜짐 시간(듀티 사이클)이나 ESD·서지 파형처럼 “시간에 따른 모양”이 중요한 것은 시간 영역에서 봅니다.</p>

<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>오실로스코프</th><th>스펙트럼 분석기</th></tr></thead>
<tbody>
<tr><td>가로축 / 세로축</td><td>시간 / 전압(V)</td><td>주파수 / 전력(dBm)</td></tr>
<tr><td>잘 보는 것</td><td>파형 모양, 상승 시간, 펄스 폭, 과도 현상</td><td>주파수 성분, 대역폭, 스퓨리어스, 고조파, 잡음</td></tr>
<tr><td>작은 신호 감도</td><td>보통 mV 단위</td><td>매우 좋음(−150 dBm/Hz 이하 수준까지)</td></tr>
<tr><td>시험소 사용 예</td><td>ESD·서지 파형 검증, 듀티 사이클 확인</td><td>출력, 점유대역폭, 스퓨리어스, EMI 측정</td></tr>
</tbody></table></div>
<p>참고로 스펙트럼 분석기에도 <strong>Zero Span</strong> 모드가 있어 한 주파수에서 “시간에 따른 레벨 변화”를 볼 수 있습니다. 버스트 신호의 켜짐 시간을 확인할 때 자주 씁니다.</p>

<h2>스펙트럼에서 보이는 것들</h2>
<h3>반송파(Carrier)</h3>
<p>정보를 실어 나르는 기준 사인파입니다. “2.412 GHz 채널”이라고 하면 보통 그 채널의 중심 주파수를 말합니다. 반송파 자체는 정보를 담지 않고, 여기에 <a href="#/l/rf-modulation">변조</a>로 정보를 실으면 스펙트럼이 옆으로 퍼집니다.</p>
<h3>대역폭(Bandwidth)</h3>
<p>신호가 차지하는 주파수 폭입니다. 데이터를 빨리 보낼수록 대역폭이 넓어집니다(Wi-Fi 20/40/80/160 MHz, LTE 5/10/20 MHz 등). 시험에서는 정의에 따라 여러 가지로 측정합니다.</p>
<ul>
  <li><strong>99 % 점유대역폭(OBW)</strong> — 전체 전력의 99 %가 들어 있는 폭.</li>
  <li><strong>x dB 대역폭</strong> — 최고점보다 x dB(예: 6 dB, 20 dB, 26 dB) 낮아지는 두 지점 사이의 폭. 어떤 값을 쓰는지는 규격마다 다릅니다.</li>
</ul>
<h3>고조파(Harmonics)</h3>
<p>기본 주파수의 정수배(2f, 3f, …)에 생기는 성분입니다. 증폭기가 신호를 완벽하게 키우지 못하고 파형이 살짝 찌그러지면(비선형) 생깁니다. 2.44 GHz 송신기라면 4.88 GHz(2차), 7.32 GHz(3차)에 고조파가 나타날 수 있고, 이는 다른 서비스에 간섭을 주므로 <strong>스퓨리어스 시험</strong>에서 한계값과 비교합니다.</p>

<h2>잡음과 SNR</h2>
<p>아무 신호가 없어도 스펙트럼 분석기 화면 바닥에는 지글거리는 선이 깔려 있습니다. 이것이 <strong>잡음 바닥(Noise Floor)</strong>입니다. 모든 물체는 온도가 있으면 내부 전자의 무작위 움직임 때문에 <strong>열잡음(Thermal Noise)</strong>을 만듭니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="잡음 바닥 위의 신호와 SNR, 대역폭">
  <defs><marker id="rfdom-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <line x1="60" y1="20" x2="60" y2="200" stroke="var(--dg-muted)"/>
    <line x1="60" y1="200" x2="730" y2="200" stroke="var(--dg-muted)"/>
    <text x="30" y="110" transform="rotate(-90 30 110)" font-size="12" fill="var(--text-3)">레벨 (dBm)</text>
    <text x="728" y="218" text-anchor="end" font-size="12" fill="var(--text-3)">주파수 →</text>
    <polyline points="60,168 72,173 84,166 96,171 108,175 120,167 132,170 144,164 156,172 168,169 180,174 192,166 204,171 216,168 228,173 240,165 252,170 264,172 276,167 288,171 300,168" fill="none" stroke="var(--dg-muted)" stroke-width="1.5"/>
    <polyline points="460,168 473,171 486,167 499,172 512,170 525,165 538,173 551,168 564,171 577,166 590,174 603,169 616,172 629,164 642,170 655,167 668,175 681,171 694,166 707,173 720,168" fill="none" stroke="var(--dg-muted)" stroke-width="1.5"/>
    <path d="M300 168 C 312 70, 318 62, 332 62 L 428 62 C 442 62, 448 70, 460 168" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <text x="380" y="218" font-size="12" fill="var(--dg-accent)">f<tspan baseline-shift="sub" font-size="9">c</tspan> (반송파 중심)</text>
    <line x1="302" y1="42" x2="458" y2="42" stroke="var(--dg-accent-2)" stroke-width="1.5" marker-start="url(#rfdom-arw2)" marker-end="url(#rfdom-arw2)"/>
    <text x="380" y="34" font-weight="700" fill="var(--dg-accent-2)">대역폭 (BW)</text>
    <line x1="428" y1="62" x2="570" y2="62" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <line x1="460" y1="168" x2="570" y2="168" stroke="var(--dg-line)" stroke-dasharray="4 3"/>
    <line x1="555" y1="64" x2="555" y2="166" stroke="var(--dg-ok)" stroke-width="1.8" marker-start="url(#rfdom-arw2)" marker-end="url(#rfdom-arw2)"/>
    <text x="568" y="108" text-anchor="start" font-weight="700" fill="var(--dg-ok)">SNR (dB)</text>
    <text x="568" y="126" text-anchor="start" font-size="11.5" fill="var(--text-2)">= 신호(dBm) − 잡음(dBm)</text>
    <text x="175" y="150" font-size="12" fill="var(--text-2)">잡음 바닥 (Noise Floor)</text>
  </g>
</svg>
<figcaption>그림 2. 잡음 바닥 위로 솟은 신호. 신호와 잡음의 차이가 SNR이며, 신호가 차지하는 폭이 대역폭입니다.</figcaption>
</figure>

<div class="formula">열잡음 전력 N(dBm) = −174 dBm/Hz + 10 · log<sub>10</sub>(대역폭 Hz)   (상온 약 290 K 기준)</div>
<p>−174 dBm/Hz는 “1 Hz 폭마다 이만큼의 잡음이 있다”는 뜻입니다. 폭이 넓어지면 잡음도 그만큼 많이 모입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>대역폭</th><th class="num">10·log(BW)</th><th class="num">열잡음 전력</th></tr></thead>
<tbody>
<tr><td>1 Hz</td><td class="num">0 dB</td><td class="num">−174 dBm</td></tr>
<tr><td>1 kHz</td><td class="num">30 dB</td><td class="num">−144 dBm</td></tr>
<tr><td>100 kHz</td><td class="num">50 dB</td><td class="num">−124 dBm</td></tr>
<tr><td>1 MHz</td><td class="num">60 dB</td><td class="num">−114 dBm</td></tr>
<tr><td>20 MHz (Wi-Fi 1채널)</td><td class="num">73 dB</td><td class="num">−101 dBm</td></tr>
</tbody></table></div>

<p><strong>SNR(Signal-to-Noise Ratio, 신호 대 잡음비)</strong>은 신호가 잡음보다 몇 dB 큰지를 뜻합니다. 예를 들어 수신 신호가 −60 dBm이고 20 MHz 대역의 잡음이 −101 dBm, 수신기 잡음지수(NF)가 6 dB라면 실제 잡음은 −95 dBm, SNR = −60 − (−95) = <strong>35 dB</strong>입니다. SNR이 높을수록 더 복잡한 변조(더 빠른 속도)를 쓸 수 있습니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  잡음은 시끄러운 카페의 웅성거림, 신호는 친구의 목소리입니다. SNR은 “친구 목소리가 웅성거림보다 얼마나 큰가”입니다. 친구가 멀어지면(신호 감소) 또는 카페가 더 시끄러워지면(잡음 증가) 대화가 어려워집니다.
</div>

<h2>실무 포인트: RBW와 잡음 바닥</h2>
<p>스펙트럼 분석기는 화면을 훑으며 <strong>분해능 대역폭(RBW, Resolution Bandwidth)</strong>이라는 “작은 창”으로 전력을 모읍니다. 창이 넓으면 잡음도 많이 들어옵니다.</p>
<ul>
  <li><strong>잡음 바닥</strong> — RBW를 10배 줄이면 표시되는 잡음 바닥이 <strong>10 dB 내려갑니다</strong>(10·log 10). 작은 스퓨리어스를 찾을 때 RBW를 줄이는 이유입니다(대신 스윕이 느려짐).</li>
  <li><strong>CW(무변조) 신호</strong> — 폭이 RBW보다 좁으므로 RBW를 바꿔도 표시 레벨이 거의 변하지 않습니다.</li>
  <li><strong>광대역 신호</strong>(예: 20 MHz 폭 Wi-Fi) — RBW 창에 신호의 일부만 들어오므로 RBW를 1 MHz → 100 kHz로 줄이면 표시 레벨도 약 10 dB 내려갑니다. 그래서 광대역 신호의 전체 출력은 “채널 전력(Channel Power)” 기능처럼 대역 전체를 적분해서 구합니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  광대역 신호를 좁은 RBW로 보고 “피크 마커 값 = 출력”으로 기록하는 실수. 이 값은 “RBW 폭당 전력(전력 밀도)”일 뿐 전체 출력이 아닙니다. 규격이 정한 RBW·VBW·검파기·측정 방법을 반드시 따르세요. 또한 한계값이 “dBm/MHz”처럼 <em>밀도</em>로 주어진 항목(예: PSD)은 기준 대역폭을 맞춰 측정해야 합니다.
</div>

<div class="callout tip">
  <span class="callout-title">현장 팁: 잡음과 신호 구분하기</span>
  측정하려는 스퓨리어스가 잡음 바닥과 비슷한 높이라면, 한계값보다 잡음 바닥이 충분히(대표적으로 6~10 dB 이상) 낮은지 먼저 확인하세요. 잡음 바닥이 한계값 근처라면 RBW를 줄이거나, 분석기 입력 감쇠(ATT)를 낮추거나, 저잡음 증폭기(프리앰프)를 사용해 측정 여유를 확보합니다.
</div>
`,
  quiz: [
    { q: '스퓨리어스(불요 발사)나 고조파를 찾을 때 주로 쓰는 표현 영역과 장비는?',
      options: ['시간 영역 — 오실로스코프', '주파수 영역 — 스펙트럼 분석기', '시간 영역 — 멀티미터', '주파수 영역 — 전원 공급기'],
      answer: 1, explain: '스퓨리어스·고조파는 주파수 성분이므로 주파수 영역(스펙트럼 분석기)에서 봅니다.' },
    { q: '상온에서 대역폭 10 MHz의 열잡음 전력은 약 얼마인가?',
      options: ['−174 dBm', '−114 dBm', '−104 dBm', '−94 dBm'],
      answer: 2, explain: '−174 + 10·log(10×10^6) = −174 + 70 = −104 dBm입니다.' },
    { q: '분석기 RBW를 1 MHz에서 100 kHz로 줄였다. 화면의 잡음 바닥은 대략 어떻게 되는가?',
      options: ['약 10 dB 낮아진다', '변화 없다', '약 10 dB 높아진다', '약 3 dB 낮아진다'],
      answer: 0, explain: 'RBW가 1/10이 되면 창에 들어오는 잡음 전력도 1/10(−10 dB)이 됩니다.' },
    { q: '2.45 GHz 송신기의 3차 고조파 주파수는?',
      options: ['4.90 GHz', '0.82 GHz', '2.45 GHz', '7.35 GHz'],
      answer: 3, explain: '3차 고조파는 기본 주파수의 3배인 7.35 GHz입니다.' }
  ],
  refs: [
    { title: 'Keysight — Spectrum Analysis Basics', url: 'https://www.keysight.com', note: 'RBW, 잡음 바닥, 검파기 기초 (Application Note 150)' },
    { title: 'Rohde & Schwarz — Fundamentals of Spectrum Analysis', url: 'https://www.rohde-schwarz.com', note: '스펙트럼 분석 원리 교재' }
  ]
});

COURSE.addLesson({
  id: 'rf-modulation',
  module: 'rf',
  order: 4,
  title: '변조와 무선 통신 방식',
  minutes: 25,
  level: '기초',
  summary: 'AM·FM부터 PSK·QAM·OFDM까지 “전파에 정보를 싣는 방법”과 다중접속·이중화 방식, 그리고 시험에서 중요한 버스트 신호와 듀티 사이클을 이해합니다.',
  objectives: [
    '변조가 왜 필요한지, AM·FM·PSK·QAM의 차이를 그림으로 설명할 수 있다.',
    '성상도(Constellation)를 읽고 변조 차수와 심볼당 비트 수를 연결할 수 있다.',
    'OFDM, 다중접속(FDMA/TDMA/CDMA/OFDMA), 이중화(TDD/FDD)의 개념을 안다.',
    '버스트 신호의 듀티 사이클이 평균·피크 측정에 미치는 영향과 게이팅의 필요성을 설명할 수 있다.'
  ],
  body: `
<h2>변조란? — 전파에 정보를 싣는 방법</h2>
<p>목소리(수 kHz)나 데이터를 그대로 전파로 보내기는 어렵습니다. 낮은 주파수는 안테나가 수십 km 길이여야 하고, 모두가 같은 주파수를 쓰면 섞여 버립니다. 그래서 각자에게 배정된 높은 주파수의 <strong>반송파(Carrier)</strong>를 만들고, 그 반송파의 <strong>진폭·주파수·위상</strong>을 정보에 따라 조금씩 바꿔 보냅니다. 이것이 <strong>변조(Modulation)</strong>이고, 받는 쪽에서 정보를 꺼내는 것이 <strong>복조(Demodulation)</strong>입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  반송파는 “빈 트럭”, 정보는 “짐”입니다. 트럭마다 다른 도로(주파수)를 달리게 하고, 짐을 싣는 방법(변조 방식)에 따라 한 번에 실을 수 있는 양(전송 속도)과 험한 길에서 짐이 흐트러지지 않는 정도(잡음에 강한 정도)가 달라집니다.
</div>

<h2>아날로그 변조: AM과 FM</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="정보 신호, 반송파, AM, FM 파형 비교">
  <g font-size="13" fill="var(--text)">
    <text x="10" y="42" font-weight="700">정보 신호</text><text x="10" y="59" font-size="11" fill="var(--text-3)">(음성 등)</text>
    <text x="10" y="112" font-weight="700">반송파</text><text x="10" y="129" font-size="11" fill="var(--text-3)">(높은 주파수)</text>
    <text x="10" y="187" font-weight="700" fill="var(--dg-accent)">AM</text><text x="10" y="204" font-size="11" fill="var(--text-3)">진폭이 변함</text>
    <text x="10" y="262" font-weight="700" fill="var(--dg-accent-2)">FM</text><text x="10" y="279" font-size="11" fill="var(--text-3)">촘촘함이 변함</text>
    <g stroke="var(--dg-line)" stroke-width="0.6" stroke-dasharray="2 4">
      <line x1="120" y1="45" x2="740" y2="45"/><line x1="120" y1="115" x2="740" y2="115"/><line x1="120" y1="190" x2="740" y2="190"/><line x1="120" y1="265" x2="740" y2="265"/>
    </g>
    <path d="M120 45 L121 44.7 L122 44.3 L123 44 L124 43.7 L125 43.3 L126 43 L127 42.7 L128 42.3 L129 42 L130 41.7 L131 41.3 L132 41 L133 40.7 L134 40.4 L135 40 L136 39.7 L137 39.4 L138 39.1 L139 38.7 L140 38.4 L141 38.1 L142 37.8 L143 37.5 L144 37.2 L145 36.8 L146 36.5 L147 36.2 L148 35.9 L149 35.6 L150 35.3 L151 35 L152 34.7 L153 34.4 L154 34.1 L155 33.8 L156 33.6 L157 33.3 L158 33 L159 32.7 L160 32.4 L161 32.2 L162 31.9 L163 31.6 L164 31.4 L165 31.1 L166 30.8 L167 30.6 L168 30.3 L169 30.1 L170 29.8 L171 29.6 L172 29.4 L173 29.1 L174 28.9 L175 28.7 L176 28.5 L177 28.2 L178 28 L179 27.8 L180 27.6 L181 27.4 L182 27.2 L183 27 L184 26.8 L185 26.6 L186 26.4 L187 26.3 L188 26.1 L189 25.9 L190 25.8 L191 25.6 L192 25.4 L193 25.3 L194 25.2 L195 25 L196 24.9 L197 24.7 L198 24.6 L199 24.5 L200 24.4 L201 24.3 L202 24.1 L203 24 L204 23.9 L205 23.8 L206 23.8 L207 23.7 L208 23.6 L209 23.5 L210 23.5 L211 23.4 L212 23.3 L213 23.3 L214 23.2 L215 23.2 L216 23.1 L217 23.1 L218 23.1 L219 23 L220 23 L221 23 L222 23 L223 23 L224 23 L225 23 L226 23 L227 23 L228 23.1 L229 23.1 L230 23.1 L231 23.1 L232 23.2 L233 23.2 L234 23.3 L235 23.3 L236 23.4 L237 23.5 L238 23.5 L239 23.6 L240 23.7 L241 23.8 L242 23.9 L243 24 L244 24.1 L245 24.2 L246 24.3 L247 24.4 L248 24.5 L249 24.7 L250 24.8 L251 24.9 L252 25.1 L253 25.2 L254 25.3 L255 25.5 L256 25.7 L257 25.8 L258 26 L259 26.2 L260 26.3 L261 26.5 L262 26.7 L263 26.9 L264 27.1 L265 27.3 L266 27.5 L267 27.7 L268 27.9 L269 28.1 L270 28.3 L271 28.5 L272 28.8 L273 29 L274 29.2 L275 29.4 L276 29.7 L277 29.9 L278 30.2 L279 30.4 L280 30.7 L281 30.9 L282 31.2 L283 31.4 L284 31.7 L285 32 L286 32.2 L287 32.5 L288 32.8 L289 33.1 L290 33.4 L291 33.6 L292 33.9 L293 34.2 L294 34.5 L295 34.8 L296 35.1 L297 35.4 L298 35.7 L299 36 L300 36.3 L301 36.6 L302 36.9 L303 37.3 L304 37.6 L305 37.9 L306 38.2 L307 38.5 L308 38.8 L309 39.2 L310 39.5 L311 39.8 L312 40.1 L313 40.5 L314 40.8 L315 41.1 L316 41.4 L317 41.8 L318 42.1 L319 42.4 L320 42.8 L321 43.1 L322 43.4 L323 43.8 L324 44.1 L325 44.4 L326 44.8 L327 45.1 L328 45.4 L329 45.8 L330 46.1 L331 46.4 L332 46.8 L333 47.1 L334 47.4 L335 47.8 L336 48.1 L337 48.4 L338 48.8 L339 49.1 L340 49.4 L341 49.8 L342 50.1 L343 50.4 L344 50.7 L345 51.1 L346 51.4 L347 51.7 L348 52 L349 52.3 L350 52.6 L351 53 L352 53.3 L353 53.6 L354 53.9 L355 54.2 L356 54.5 L357 54.8 L358 55.1 L359 55.4 L360 55.7 L361 56 L362 56.3 L363 56.5 L364 56.8 L365 57.1 L366 57.4 L367 57.7 L368 57.9 L369 58.2 L370 58.5 L371 58.7 L372 59 L373 59.2 L374 59.5 L375 59.7 L376 60 L377 60.2 L378 60.5 L379 60.7 L380 60.9 L381 61.2 L382 61.4 L383 61.6 L384 61.8 L385 62.1 L386 62.3 L387 62.5 L388 62.7 L389 62.9 L390 63.1 L391 63.2 L392 63.4 L393 63.6 L394 63.8 L395 64 L396 64.1 L397 64.3 L398 64.4 L399 64.6 L400 64.8 L401 64.9 L402 65 L403 65.2 L404 65.3 L405 65.4 L406 65.6 L407 65.7 L408 65.8 L409 65.9 L410 66 L411 66.1 L412 66.2 L413 66.3 L414 66.4 L415 66.4 L416 66.5 L417 66.6 L418 66.6 L419 66.7 L420 66.7 L421 66.8 L422 66.8 L423 66.9 L424 66.9 L425 66.9 L426 67 L427 67 L428 67 L429 67 L430 67 L431 67 L432 67 L433 67 L434 67 L435 66.9 L436 66.9 L437 66.9 L438 66.8 L439 66.8 L440 66.7 L441 66.7 L442 66.6 L443 66.6 L444 66.5 L445 66.4 L446 66.4 L447 66.3 L448 66.2 L449 66.1 L450 66 L451 65.9 L452 65.8 L453 65.7 L454 65.6 L455 65.4 L456 65.3 L457 65.2 L458 65 L459 64.9 L460 64.8 L461 64.6 L462 64.4 L463 64.3 L464 64.1 L465 64 L466 63.8 L467 63.6 L468 63.4 L469 63.2 L470 63.1 L471 62.9 L472 62.7 L473 62.5 L474 62.3 L475 62.1 L476 61.8 L477 61.6 L478 61.4 L479 61.2 L480 60.9 L481 60.7 L482 60.5 L483 60.2 L484 60 L485 59.7 L486 59.5 L487 59.2 L488 59 L489 58.7 L490 58.5 L491 58.2 L492 57.9 L493 57.7 L494 57.4 L495 57.1 L496 56.8 L497 56.5 L498 56.3 L499 56 L500 55.7 L501 55.4 L502 55.1 L503 54.8 L504 54.5 L505 54.2 L506 53.9 L507 53.6 L508 53.3 L509 53 L510 52.6 L511 52.3 L512 52 L513 51.7 L514 51.4 L515 51.1 L516 50.7 L517 50.4 L518 50.1 L519 49.8 L520 49.4 L521 49.1 L522 48.8 L523 48.4 L524 48.1 L525 47.8 L526 47.4 L527 47.1 L528 46.8 L529 46.4 L530 46.1 L531 45.8 L532 45.4 L533 45.1 L534 44.8 L535 44.4 L536 44.1 L537 43.8 L538 43.4 L539 43.1 L540 42.8 L541 42.4 L542 42.1 L543 41.8 L544 41.4 L545 41.1 L546 40.8 L547 40.5 L548 40.1 L549 39.8 L550 39.5 L551 39.2 L552 38.8 L553 38.5 L554 38.2 L555 37.9 L556 37.6 L557 37.3 L558 36.9 L559 36.6 L560 36.3 L561 36 L562 35.7 L563 35.4 L564 35.1 L565 34.8 L566 34.5 L567 34.2 L568 33.9 L569 33.6 L570 33.4 L571 33.1 L572 32.8 L573 32.5 L574 32.2 L575 32 L576 31.7 L577 31.4 L578 31.2 L579 30.9 L580 30.7 L581 30.4 L582 30.2 L583 29.9 L584 29.7 L585 29.4 L586 29.2 L587 29 L588 28.8 L589 28.5 L590 28.3 L591 28.1 L592 27.9 L593 27.7 L594 27.5 L595 27.3 L596 27.1 L597 26.9 L598 26.7 L599 26.5 L600 26.3 L601 26.2 L602 26 L603 25.8 L604 25.7 L605 25.5 L606 25.3 L607 25.2 L608 25.1 L609 24.9 L610 24.8 L611 24.7 L612 24.5 L613 24.4 L614 24.3 L615 24.2 L616 24.1 L617 24 L618 23.9 L619 23.8 L620 23.7 L621 23.6 L622 23.5 L623 23.5 L624 23.4 L625 23.3 L626 23.3 L627 23.2 L628 23.2 L629 23.1 L630 23.1 L631 23.1 L632 23.1 L633 23 L634 23 L635 23 L636 23 L637 23 L638 23 L639 23 L640 23 L641 23 L642 23.1 L643 23.1 L644 23.1 L645 23.2 L646 23.2 L647 23.3 L648 23.3 L649 23.4 L650 23.5 L651 23.5 L652 23.6 L653 23.7 L654 23.8 L655 23.8 L656 23.9 L657 24 L658 24.1 L659 24.3 L660 24.4 L661 24.5 L662 24.6 L663 24.7 L664 24.9 L665 25 L666 25.2 L667 25.3 L668 25.4 L669 25.6 L670 25.8 L671 25.9 L672 26.1 L673 26.3 L674 26.4 L675 26.6 L676 26.8 L677 27 L678 27.2 L679 27.4 L680 27.6 L681 27.8 L682 28 L683 28.2 L684 28.5 L685 28.7 L686 28.9 L687 29.1 L688 29.4 L689 29.6 L690 29.8 L691 30.1 L692 30.3 L693 30.6 L694 30.8 L695 31.1 L696 31.4 L697 31.6 L698 31.9 L699 32.2 L700 32.4 L701 32.7 L702 33 L703 33.3 L704 33.6 L705 33.8 L706 34.1 L707 34.4 L708 34.7 L709 35 L710 35.3 L711 35.6 L712 35.9 L713 36.2 L714 36.5 L715 36.8 L716 37.2 L717 37.5 L718 37.8 L719 38.1 L720 38.4 L721 38.7 L722 39.1 L723 39.4 L724 39.7 L725 40 L726 40.4 L727 40.7 L728 41 L729 41.3 L730 41.7 L731 42 L732 42.3 L733 42.7 L734 43 L735 43.3 L736 43.7 L737 44 L738 44.3 L739 44.7 L740 45" fill="none" stroke="var(--dg-ok)" stroke-width="2"/>
    <path d="M120 115 L121 110.1 L122 105.5 L123 101.4 L124 97.9 L125 95.2 L126 93.6 L127 93 L128 93.5 L129 95.1 L130 97.6 L131 101 L132 105.1 L133 109.7 L134 114.6 L135 119.4 L136 124.1 L137 128.3 L138 131.8 L139 134.6 L140 136.3 L141 137 L142 136.6 L143 135.1 L144 132.7 L145 129.3 L146 125.3 L147 120.7 L148 115.9 L149 111 L150 106.3 L151 102.1 L152 98.5 L153 95.7 L154 93.8 L155 93 L156 93.3 L157 94.7 L158 97.1 L159 100.3 L160 104.3 L161 108.8 L162 113.7 L163 118.6 L164 123.3 L165 127.6 L166 131.2 L167 134.1 L168 136.1 L169 136.9 L170 136.7 L171 135.5 L172 133.2 L173 130 L174 126.1 L175 121.6 L176 116.8 L177 111.9 L178 107.2 L179 102.8 L180 99.1 L181 96.1 L182 94.1 L183 93.1 L184 93.2 L185 94.4 L186 96.6 L187 99.7 L188 103.6 L189 108 L190 112.8 L191 117.7 L192 122.4 L193 126.8 L194 130.6 L195 133.7 L196 135.8 L197 136.9 L198 136.9 L199 135.8 L200 133.7 L201 130.6 L202 126.8 L203 122.4 L204 117.7 L205 112.8 L206 108 L207 103.6 L208 99.7 L209 96.6 L210 94.4 L211 93.2 L212 93.1 L213 94.1 L214 96.1 L215 99.1 L216 102.8 L217 107.2 L218 111.9 L219 116.8 L220 121.6 L221 126.1 L222 130 L223 133.2 L224 135.5 L225 136.7 L226 136.9 L227 136.1 L228 134.1 L229 131.2 L230 127.6 L231 123.3 L232 118.6 L233 113.7 L234 108.8 L235 104.3 L236 100.3 L237 97.1 L238 94.7 L239 93.3 L240 93 L241 93.8 L242 95.7 L243 98.5 L244 102.1 L245 106.3 L246 111 L247 115.9 L248 120.7 L249 125.3 L250 129.3 L251 132.7 L252 135.1 L253 136.6 L254 137 L255 136.3 L256 134.6 L257 131.8 L258 128.3 L259 124.1 L260 119.4 L261 114.6 L262 109.7 L263 105.1 L264 101 L265 97.6 L266 95.1 L267 93.5 L268 93 L269 93.6 L270 95.2 L271 97.9 L272 101.4 L273 105.5 L274 110.1 L275 115 L276 119.9 L277 124.5 L278 128.6 L279 132.1 L280 134.8 L281 136.4 L282 137 L283 136.5 L284 134.9 L285 132.4 L286 129 L287 124.9 L288 120.3 L289 115.4 L290 110.6 L291 105.9 L292 101.7 L293 98.2 L294 95.4 L295 93.7 L296 93 L297 93.4 L298 94.9 L299 97.3 L300 100.7 L301 104.7 L302 109.3 L303 114.1 L304 119 L305 123.7 L306 127.9 L307 131.5 L308 134.3 L309 136.2 L310 137 L311 136.7 L312 135.3 L313 132.9 L314 129.7 L315 125.7 L316 121.2 L317 116.3 L318 111.4 L319 106.7 L320 102.4 L321 98.8 L322 95.9 L323 93.9 L324 93.1 L325 93.3 L326 94.5 L327 96.8 L328 100 L329 103.9 L330 108.4 L331 113.2 L332 118.1 L333 122.8 L334 127.2 L335 130.9 L336 133.9 L337 135.9 L338 136.9 L339 136.8 L340 135.6 L341 133.4 L342 130.3 L343 126.4 L344 122 L345 117.2 L346 112.3 L347 107.6 L348 103.2 L349 99.4 L350 96.3 L351 94.2 L352 93.1 L353 93.1 L354 94.2 L355 96.3 L356 99.4 L357 103.2 L358 107.6 L359 112.3 L360 117.2 L361 122 L362 126.4 L363 130.3 L364 133.4 L365 135.6 L366 136.8 L367 136.9 L368 135.9 L369 133.9 L370 130.9 L371 127.2 L372 122.8 L373 118.1 L374 113.2 L375 108.4 L376 103.9 L377 100 L378 96.8 L379 94.5 L380 93.3 L381 93.1 L382 93.9 L383 95.9 L384 98.8 L385 102.4 L386 106.7 L387 111.4 L388 116.3 L389 121.2 L390 125.7 L391 129.7 L392 132.9 L393 135.3 L394 136.7 L395 137 L396 136.2 L397 134.3 L398 131.5 L399 127.9 L400 123.7 L401 119 L402 114.1 L403 109.3 L404 104.7 L405 100.7 L406 97.3 L407 94.9 L408 93.4 L409 93 L410 93.7 L411 95.4 L412 98.2 L413 101.7 L414 105.9 L415 110.6 L416 115.4 L417 120.3 L418 124.9 L419 129 L420 132.4 L421 134.9 L422 136.5 L423 137 L424 136.4 L425 134.8 L426 132.1 L427 128.6 L428 124.5 L429 119.9 L430 115 L431 110.1 L432 105.5 L433 101.4 L434 97.9 L435 95.2 L436 93.6 L437 93 L438 93.5 L439 95.1 L440 97.6 L441 101 L442 105.1 L443 109.7 L444 114.6 L445 119.4 L446 124.1 L447 128.3 L448 131.8 L449 134.6 L450 136.3 L451 137 L452 136.6 L453 135.1 L454 132.7 L455 129.3 L456 125.3 L457 120.7 L458 115.9 L459 111 L460 106.3 L461 102.1 L462 98.5 L463 95.7 L464 93.8 L465 93 L466 93.3 L467 94.7 L468 97.1 L469 100.3 L470 104.3 L471 108.8 L472 113.7 L473 118.6 L474 123.3 L475 127.6 L476 131.2 L477 134.1 L478 136.1 L479 136.9 L480 136.7 L481 135.5 L482 133.2 L483 130 L484 126.1 L485 121.6 L486 116.8 L487 111.9 L488 107.2 L489 102.8 L490 99.1 L491 96.1 L492 94.1 L493 93.1 L494 93.2 L495 94.4 L496 96.6 L497 99.7 L498 103.6 L499 108 L500 112.8 L501 117.7 L502 122.4 L503 126.8 L504 130.6 L505 133.7 L506 135.8 L507 136.9 L508 136.9 L509 135.8 L510 133.7 L511 130.6 L512 126.8 L513 122.4 L514 117.7 L515 112.8 L516 108 L517 103.6 L518 99.7 L519 96.6 L520 94.4 L521 93.2 L522 93.1 L523 94.1 L524 96.1 L525 99.1 L526 102.8 L527 107.2 L528 111.9 L529 116.8 L530 121.6 L531 126.1 L532 130 L533 133.2 L534 135.5 L535 136.7 L536 136.9 L537 136.1 L538 134.1 L539 131.2 L540 127.6 L541 123.3 L542 118.6 L543 113.7 L544 108.8 L545 104.3 L546 100.3 L547 97.1 L548 94.7 L549 93.3 L550 93 L551 93.8 L552 95.7 L553 98.5 L554 102.1 L555 106.3 L556 111 L557 115.9 L558 120.7 L559 125.3 L560 129.3 L561 132.7 L562 135.1 L563 136.6 L564 137 L565 136.3 L566 134.6 L567 131.8 L568 128.3 L569 124.1 L570 119.4 L571 114.6 L572 109.7 L573 105.1 L574 101 L575 97.6 L576 95.1 L577 93.5 L578 93 L579 93.6 L580 95.2 L581 97.9 L582 101.4 L583 105.5 L584 110.1 L585 115 L586 119.9 L587 124.5 L588 128.6 L589 132.1 L590 134.8 L591 136.4 L592 137 L593 136.5 L594 134.9 L595 132.4 L596 129 L597 124.9 L598 120.3 L599 115.4 L600 110.6 L601 105.9 L602 101.7 L603 98.2 L604 95.4 L605 93.7 L606 93 L607 93.4 L608 94.9 L609 97.3 L610 100.7 L611 104.7 L612 109.3 L613 114.1 L614 119 L615 123.7 L616 127.9 L617 131.5 L618 134.3 L619 136.2 L620 137 L621 136.7 L622 135.3 L623 132.9 L624 129.7 L625 125.7 L626 121.2 L627 116.3 L628 111.4 L629 106.7 L630 102.4 L631 98.8 L632 95.9 L633 93.9 L634 93.1 L635 93.3 L636 94.5 L637 96.8 L638 100 L639 103.9 L640 108.4 L641 113.2 L642 118.1 L643 122.8 L644 127.2 L645 130.9 L646 133.9 L647 135.9 L648 136.9 L649 136.8 L650 135.6 L651 133.4 L652 130.3 L653 126.4 L654 122 L655 117.2 L656 112.3 L657 107.6 L658 103.2 L659 99.4 L660 96.3 L661 94.2 L662 93.1 L663 93.1 L664 94.2 L665 96.3 L666 99.4 L667 103.2 L668 107.6 L669 112.3 L670 117.2 L671 122 L672 126.4 L673 130.3 L674 133.4 L675 135.6 L676 136.8 L677 136.9 L678 135.9 L679 133.9 L680 130.9 L681 127.2 L682 122.8 L683 118.1 L684 113.2 L685 108.4 L686 103.9 L687 100 L688 96.8 L689 94.5 L690 93.3 L691 93.1 L692 93.9 L693 95.9 L694 98.8 L695 102.4 L696 106.7 L697 111.4 L698 116.3 L699 121.2 L700 125.7 L701 129.7 L702 132.9 L703 135.3 L704 136.7 L705 137 L706 136.2 L707 134.3 L708 131.5 L709 127.9 L710 123.7 L711 119 L712 114.1 L713 109.3 L714 104.7 L715 100.7 L716 97.3 L717 94.9 L718 93.4 L719 93 L720 93.7 L721 95.4 L722 98.2 L723 101.7 L724 105.9 L725 110.6 L726 115.4 L727 120.3 L728 124.9 L729 129 L730 132.4 L731 134.9 L732 136.5 L733 137 L734 136.4 L735 134.8 L736 132.1 L737 128.6 L738 124.5 L739 119.9 L740 115" fill="none" stroke="var(--dg-muted)" stroke-width="1.2"/>
    <path d="M120 168.8 L121 168.6 L122 168.4 L123 168.2 L124 168 L125 167.8 L126 167.6 L127 167.4 L128 167.2 L129 167 L130 166.8 L131 166.6 L132 166.4 L133 166.2 L134 166.1 L135 165.9 L136 165.7 L137 165.5 L138 165.3 L139 165.1 L140 164.9 L141 164.7 L142 164.6 L143 164.4 L144 164.2 L145 164 L146 163.8 L147 163.7 L148 163.5 L149 163.3 L150 163.1 L151 163 L152 162.8 L153 162.6 L154 162.4 L155 162.3 L156 162.1 L157 162 L158 161.8 L159 161.6 L160 161.5 L161 161.3 L162 161.2 L163 161 L164 160.8 L165 160.7 L166 160.5 L167 160.4 L168 160.3 L169 160.1 L170 160 L171 159.8 L172 159.7 L173 159.6 L174 159.4 L175 159.3 L176 159.2 L177 159 L178 158.9 L179 158.8 L180 158.7 L181 158.6 L182 158.4 L183 158.3 L184 158.2 L185 158.1 L186 158 L187 157.9 L188 157.8 L189 157.7 L190 157.6 L191 157.5 L192 157.4 L193 157.3 L194 157.2 L195 157.2 L196 157.1 L197 157 L198 156.9 L199 156.9 L200 156.8 L201 156.7 L202 156.7 L203 156.6 L204 156.5 L205 156.5 L206 156.4 L207 156.4 L208 156.3 L209 156.3 L210 156.3 L211 156.2 L212 156.2 L213 156.2 L214 156.1 L215 156.1 L216 156.1 L217 156.1 L218 156 L219 156 L220 156 L221 156 L222 156 L223 156 L224 156 L225 156 L226 156 L227 156 L228 156 L229 156 L230 156.1 L231 156.1 L232 156.1 L233 156.1 L234 156.2 L235 156.2 L236 156.2 L237 156.3 L238 156.3 L239 156.4 L240 156.4 L241 156.5 L242 156.5 L243 156.6 L244 156.6 L245 156.7 L246 156.7 L247 156.8 L248 156.9 L249 157 L250 157 L251 157.1 L252 157.2 L253 157.3 L254 157.4 L255 157.4 L256 157.5 L257 157.6 L258 157.7 L259 157.8 L260 157.9 L261 158 L262 158.1 L263 158.2 L264 158.4 L265 158.5 L266 158.6 L267 158.7 L268 158.8 L269 159 L270 159.1 L271 159.2 L272 159.3 L273 159.5 L274 159.6 L275 159.7 L276 159.9 L277 160 L278 160.2 L279 160.3 L280 160.4 L281 160.6 L282 160.7 L283 160.9 L284 161 L285 161.2 L286 161.4 L287 161.5 L288 161.7 L289 161.8 L290 162 L291 162.2 L292 162.3 L293 162.5 L294 162.7 L295 162.8 L296 163 L297 163.2 L298 163.4 L299 163.5 L300 163.7 L301 163.9 L302 164.1 L303 164.3 L304 164.4 L305 164.6 L306 164.8 L307 165 L308 165.2 L309 165.4 L310 165.6 L311 165.7 L312 165.9 L313 166.1 L314 166.3 L315 166.5 L316 166.7 L317 166.9 L318 167.1 L319 167.3 L320 167.5 L321 167.7 L322 167.8 L323 168 L324 168.2 L325 168.4 L326 168.6 L327 168.8 L328 169 L329 169.2 L330 169.4 L331 169.6 L332 169.8 L333 170 L334 170.2 L335 170.4 L336 170.6 L337 170.7 L338 170.9 L339 171.1 L340 171.3 L341 171.5 L342 171.7 L343 171.9 L344 172.1 L345 172.3 L346 172.4 L347 172.6 L348 172.8 L349 173 L350 173.2 L351 173.4 L352 173.5 L353 173.7 L354 173.9 L355 174.1 L356 174.2 L357 174.4 L358 174.6 L359 174.8 L360 174.9 L361 175.1 L362 175.3 L363 175.4 L364 175.6 L365 175.8 L366 175.9 L367 176.1 L368 176.2 L369 176.4 L370 176.6 L371 176.7 L372 176.9 L373 177 L374 177.2 L375 177.3 L376 177.4 L377 177.6 L378 177.7 L379 177.9 L380 178 L381 178.1 L382 178.3 L383 178.4 L384 178.5 L385 178.6 L386 178.8 L387 178.9 L388 179 L389 179.1 L390 179.2 L391 179.3 L392 179.4 L393 179.5 L394 179.6 L395 179.7 L396 179.8 L397 179.9 L398 180 L399 180.1 L400 180.2 L401 180.3 L402 180.4 L403 180.4 L404 180.5 L405 180.6 L406 180.7 L407 180.7 L408 180.8 L409 180.9 L410 180.9 L411 181 L412 181 L413 181.1 L414 181.1 L415 181.2 L416 181.2 L417 181.3 L418 181.3 L419 181.3 L420 181.4 L421 181.4 L422 181.4 L423 181.4 L424 181.4 L425 181.5 L426 181.5 L427 181.5 L428 181.5 L429 181.5 L430 181.5 L431 181.5 L432 181.5 L433 181.5 L434 181.5 L435 181.5 L436 181.4 L437 181.4 L438 181.4 L439 181.4 L440 181.4 L441 181.3 L442 181.3 L443 181.3 L444 181.2 L445 181.2 L446 181.1 L447 181.1 L448 181 L449 181 L450 180.9 L451 180.9 L452 180.8 L453 180.7 L454 180.7 L455 180.6 L456 180.5 L457 180.4 L458 180.4 L459 180.3 L460 180.2 L461 180.1 L462 180 L463 179.9 L464 179.8 L465 179.7 L466 179.6 L467 179.5 L468 179.4 L469 179.3 L470 179.2 L471 179.1 L472 179 L473 178.9 L474 178.8 L475 178.6 L476 178.5 L477 178.4 L478 178.3 L479 178.1 L480 178 L481 177.9 L482 177.7 L483 177.6 L484 177.4 L485 177.3 L486 177.2 L487 177 L488 176.9 L489 176.7 L490 176.6 L491 176.4 L492 176.2 L493 176.1 L494 175.9 L495 175.8 L496 175.6 L497 175.4 L498 175.3 L499 175.1 L500 174.9 L501 174.8 L502 174.6 L503 174.4 L504 174.2 L505 174.1 L506 173.9 L507 173.7 L508 173.5 L509 173.4 L510 173.2 L511 173 L512 172.8 L513 172.6 L514 172.4 L515 172.3 L516 172.1 L517 171.9 L518 171.7 L519 171.5 L520 171.3 L521 171.1 L522 170.9 L523 170.7 L524 170.6 L525 170.4 L526 170.2 L527 170 L528 169.8 L529 169.6 L530 169.4 L531 169.2 L532 169 L533 168.8 L534 168.6 L535 168.4 L536 168.2 L537 168 L538 167.8 L539 167.7 L540 167.5 L541 167.3 L542 167.1 L543 166.9 L544 166.7 L545 166.5 L546 166.3 L547 166.1 L548 165.9 L549 165.7 L550 165.6 L551 165.4 L552 165.2 L553 165 L554 164.8 L555 164.6 L556 164.4 L557 164.3 L558 164.1 L559 163.9 L560 163.7 L561 163.5 L562 163.4 L563 163.2 L564 163 L565 162.8 L566 162.7 L567 162.5 L568 162.3 L569 162.2 L570 162 L571 161.8 L572 161.7 L573 161.5 L574 161.4 L575 161.2 L576 161 L577 160.9 L578 160.7 L579 160.6 L580 160.4 L581 160.3 L582 160.2 L583 160 L584 159.9 L585 159.7 L586 159.6 L587 159.5 L588 159.3 L589 159.2 L590 159.1 L591 159 L592 158.8 L593 158.7 L594 158.6 L595 158.5 L596 158.4 L597 158.2 L598 158.1 L599 158 L600 157.9 L601 157.8 L602 157.7 L603 157.6 L604 157.5 L605 157.4 L606 157.4 L607 157.3 L608 157.2 L609 157.1 L610 157 L611 157 L612 156.9 L613 156.8 L614 156.7 L615 156.7 L616 156.6 L617 156.6 L618 156.5 L619 156.5 L620 156.4 L621 156.4 L622 156.3 L623 156.3 L624 156.2 L625 156.2 L626 156.2 L627 156.1 L628 156.1 L629 156.1 L630 156.1 L631 156 L632 156 L633 156 L634 156 L635 156 L636 156 L637 156 L638 156 L639 156 L640 156 L641 156 L642 156 L643 156.1 L644 156.1 L645 156.1 L646 156.1 L647 156.2 L648 156.2 L649 156.2 L650 156.3 L651 156.3 L652 156.3 L653 156.4 L654 156.4 L655 156.5 L656 156.5 L657 156.6 L658 156.7 L659 156.7 L660 156.8 L661 156.9 L662 156.9 L663 157 L664 157.1 L665 157.2 L666 157.2 L667 157.3 L668 157.4 L669 157.5 L670 157.6 L671 157.7 L672 157.8 L673 157.9 L674 158 L675 158.1 L676 158.2 L677 158.3 L678 158.4 L679 158.6 L680 158.7 L681 158.8 L682 158.9 L683 159 L684 159.2 L685 159.3 L686 159.4 L687 159.6 L688 159.7 L689 159.8 L690 160 L691 160.1 L692 160.3 L693 160.4 L694 160.5 L695 160.7 L696 160.8 L697 161 L698 161.2 L699 161.3 L700 161.5 L701 161.6 L702 161.8 L703 162 L704 162.1 L705 162.3 L706 162.4 L707 162.6 L708 162.8 L709 163 L710 163.1 L711 163.3 L712 163.5 L713 163.7 L714 163.8 L715 164 L716 164.2 L717 164.4 L718 164.6 L719 164.7 L720 164.9 L721 165.1 L722 165.3 L723 165.5 L724 165.7 L725 165.9 L726 166.1 L727 166.2 L728 166.4 L729 166.6 L730 166.8 L731 167 L732 167.2 L733 167.4 L734 167.6 L735 167.8 L736 168 L737 168.2 L738 168.4 L739 168.6 L740 168.8" fill="none" stroke="var(--dg-ok)" stroke-width="1.2" stroke-dasharray="5 4"/>
    <path d="M120 190 L121 185.3 L122 180.7 L123 176.5 L124 172.9 L125 170.1 L126 168.2 L127 167.4 L128 167.7 L129 169.2 L130 171.7 L131 175.1 L132 179.4 L133 184.3 L134 189.5 L135 194.9 L136 200 L137 204.8 L138 208.9 L139 212.1 L140 214.3 L141 215.2 L142 215 L143 213.4 L144 210.7 L145 206.9 L146 202.2 L147 196.9 L148 191.1 L149 185.2 L150 179.4 L151 174.1 L152 169.5 L153 165.9 L154 163.5 L155 162.3 L156 162.5 L157 164.1 L158 167 L159 171.1 L160 176.2 L161 182 L162 188.2 L163 194.7 L164 201 L165 206.7 L166 211.8 L167 215.7 L168 218.5 L169 219.8 L170 219.7 L171 218.1 L172 215.1 L173 210.8 L174 205.4 L175 199.2 L176 192.5 L177 185.6 L178 178.9 L179 172.7 L180 167.3 L181 163 L182 160 L183 158.5 L184 158.5 L185 160.1 L186 163.2 L187 167.6 L188 173.2 L189 179.7 L190 186.7 L191 193.9 L192 201 L193 207.6 L194 213.3 L195 217.9 L196 221.1 L197 222.8 L198 222.9 L199 221.3 L200 218.2 L201 213.6 L202 207.9 L203 201.3 L204 194.1 L205 186.6 L206 179.3 L207 172.5 L208 166.6 L209 161.8 L210 158.4 L211 156.5 L212 156.3 L213 157.8 L214 160.9 L215 165.4 L216 171.2 L217 177.9 L218 185.2 L219 192.8 L220 200.2 L221 207.1 L222 213.2 L223 218.1 L224 221.6 L225 223.6 L226 223.9 L227 222.5 L228 219.5 L229 215.1 L230 209.4 L231 202.7 L232 195.5 L233 187.9 L234 180.5 L235 173.6 L236 167.5 L237 162.5 L238 158.9 L239 156.9 L240 156.5 L241 157.7 L242 160.6 L243 164.9 L244 170.4 L245 176.9 L246 184 L247 191.3 L248 198.6 L249 205.4 L250 211.5 L251 216.4 L252 220 L253 222.1 L254 222.6 L255 221.5 L256 218.8 L257 214.8 L258 209.5 L259 203.3 L260 196.5 L261 189.4 L262 182.3 L263 175.7 L264 169.9 L265 165.1 L266 161.5 L267 159.4 L268 158.8 L269 159.8 L270 162.2 L271 166 L272 171 L273 176.8 L274 183.3 L275 190 L276 196.7 L277 202.9 L278 208.5 L279 213.1 L280 216.5 L281 218.6 L282 219.3 L283 218.4 L284 216.2 L285 212.8 L286 208.2 L287 202.8 L288 196.8 L289 190.6 L290 184.4 L291 178.5 L292 173.3 L293 169 L294 165.7 L295 163.7 L296 163 L297 163.7 L298 165.6 L299 168.8 L300 172.9 L301 177.8 L302 183.2 L303 189 L304 194.6 L305 200 L306 204.8 L307 208.8 L308 211.8 L309 213.7 L310 214.4 L311 213.9 L312 212.2 L313 209.5 L314 205.8 L315 201.4 L316 196.5 L317 191.4 L318 186.3 L319 181.5 L320 177.1 L321 173.5 L322 170.7 L323 169 L324 168.3 L325 168.7 L326 170.1 L327 172.5 L328 175.7 L329 179.5 L330 183.8 L331 188.3 L332 192.9 L333 197.1 L334 201 L335 204.2 L336 206.7 L337 208.3 L338 209 L339 208.7 L340 207.5 L341 205.5 L342 202.7 L343 199.4 L344 195.7 L345 191.8 L346 187.9 L347 184.1 L348 180.8 L349 177.9 L350 175.7 L351 174.3 L352 173.6 L353 173.8 L354 174.8 L355 176.5 L356 178.8 L357 181.6 L358 184.8 L359 188.2 L360 191.5 L361 194.7 L362 197.7 L363 200.1 L364 202.1 L365 203.3 L366 204 L367 203.9 L368 203.1 L369 201.7 L370 199.7 L371 197.4 L372 194.7 L373 191.8 L374 189 L375 186.2 L376 183.7 L377 181.5 L378 179.9 L379 178.7 L380 178.1 L381 178.2 L382 178.8 L383 179.9 L384 181.5 L385 183.5 L386 185.8 L387 188.2 L388 190.7 L389 193.1 L390 195.2 L391 197.1 L392 198.6 L393 199.7 L394 200.2 L395 200.2 L396 199.8 L397 198.9 L398 197.5 L399 195.8 L400 193.9 L401 191.8 L402 189.6 L403 187.5 L404 185.6 L405 183.9 L406 182.5 L407 181.5 L408 181 L409 180.9 L410 181.2 L411 182 L412 183.1 L413 184.6 L414 186.3 L415 188.2 L416 190.2 L417 192.1 L418 193.9 L419 195.5 L420 196.8 L421 197.8 L422 198.4 L423 198.6 L424 198.3 L425 197.7 L426 196.6 L427 195.3 L428 193.7 L429 191.9 L430 190 L431 188.1 L432 186.3 L433 184.7 L434 183.4 L435 182.3 L436 181.7 L437 181.4 L438 181.6 L439 182.2 L440 183.2 L441 184.5 L442 186.1 L443 187.9 L444 189.8 L445 191.8 L446 193.7 L447 195.4 L448 196.9 L449 198 L450 198.8 L451 199.1 L452 199 L453 198.5 L454 197.5 L455 196.1 L456 194.4 L457 192.5 L458 190.4 L459 188.2 L460 186.1 L461 184.2 L462 182.5 L463 181.1 L464 180.2 L465 179.8 L466 179.8 L467 180.3 L468 181.4 L469 182.9 L470 184.8 L471 186.9 L472 189.3 L473 191.8 L474 194.2 L475 196.5 L476 198.5 L477 200.1 L478 201.2 L479 201.8 L480 201.9 L481 201.3 L482 200.1 L483 198.5 L484 196.3 L485 193.8 L486 191 L487 188.2 L488 185.3 L489 182.6 L490 180.3 L491 178.3 L492 176.9 L493 176.1 L494 176 L495 176.7 L496 177.9 L497 179.9 L498 182.3 L499 185.3 L500 188.5 L501 191.8 L502 195.2 L503 198.4 L504 201.2 L505 203.5 L506 205.2 L507 206.2 L508 206.4 L509 205.7 L510 204.3 L511 202.1 L512 199.2 L513 195.9 L514 192.1 L515 188.2 L516 184.3 L517 180.6 L518 177.3 L519 174.5 L520 172.5 L521 171.3 L522 171 L523 171.7 L524 173.3 L525 175.8 L526 179 L527 182.9 L528 187.1 L529 191.7 L530 196.2 L531 200.5 L532 204.3 L533 207.5 L534 209.9 L535 211.3 L536 211.7 L537 211 L538 209.3 L539 206.5 L540 202.9 L541 198.5 L542 193.7 L543 188.6 L544 183.5 L545 178.6 L546 174.2 L547 170.5 L548 167.8 L549 166.1 L550 165.6 L551 166.3 L552 168.2 L553 171.2 L554 175.2 L555 180 L556 185.4 L557 191 L558 196.8 L559 202.2 L560 207.1 L561 211.2 L562 214.4 L563 216.3 L564 217 L565 216.3 L566 214.3 L567 211 L568 206.7 L569 201.5 L570 195.6 L571 189.4 L572 183.2 L573 177.2 L574 171.8 L575 167.2 L576 163.8 L577 161.6 L578 160.7 L579 161.4 L580 163.5 L581 166.9 L582 171.5 L583 177.1 L584 183.3 L585 190 L586 196.7 L587 203.2 L588 209 L589 214 L590 217.8 L591 220.2 L592 221.2 L593 220.6 L594 218.5 L595 214.9 L596 210.1 L597 204.3 L598 197.7 L599 190.6 L600 183.5 L601 176.7 L602 170.5 L603 165.2 L604 161.2 L605 158.5 L606 157.4 L607 157.9 L608 160 L609 163.6 L610 168.5 L611 174.6 L612 181.4 L613 188.7 L614 196 L615 203.1 L616 209.6 L617 215.1 L618 219.4 L619 222.3 L620 223.5 L621 223.1 L622 221.1 L623 217.5 L624 212.5 L625 206.4 L626 199.5 L627 192.1 L628 184.5 L629 177.3 L630 170.6 L631 164.9 L632 160.5 L633 157.5 L634 156.1 L635 156.4 L636 158.4 L637 161.9 L638 166.8 L639 172.9 L640 179.8 L641 187.2 L642 194.8 L643 202.1 L644 208.8 L645 214.6 L646 219.1 L647 222.2 L648 223.7 L649 223.5 L650 221.6 L651 218.2 L652 213.4 L653 207.5 L654 200.7 L655 193.4 L656 185.9 L657 178.7 L658 172.1 L659 166.4 L660 161.8 L661 158.7 L662 157.1 L663 157.2 L664 158.9 L665 162.1 L666 166.7 L667 172.4 L668 179 L669 186.1 L670 193.3 L671 200.3 L672 206.8 L673 212.4 L674 216.8 L675 219.9 L676 221.5 L677 221.5 L678 220 L679 217 L680 212.7 L681 207.3 L682 201.1 L683 194.4 L684 187.5 L685 180.8 L686 174.6 L687 169.2 L688 164.9 L689 161.9 L690 160.3 L691 160.2 L692 161.5 L693 164.3 L694 168.2 L695 173.3 L696 179 L697 185.3 L698 191.8 L699 198 L700 203.8 L701 208.9 L702 213 L703 215.9 L704 217.5 L705 217.7 L706 216.5 L707 214.1 L708 210.5 L709 205.9 L710 200.6 L711 194.8 L712 188.9 L713 183.1 L714 177.8 L715 173.1 L716 169.3 L717 166.6 L718 165 L719 164.8 L720 165.7 L721 167.9 L722 171.1 L723 175.2 L724 180 L725 185.1 L726 190.5 L727 195.7 L728 200.6 L729 204.9 L730 208.3 L731 210.8 L732 212.3 L733 212.6 L734 211.8 L735 209.9 L736 207.1 L737 203.5 L738 199.3 L739 194.7 L740 190" fill="none" stroke="var(--dg-accent)" stroke-width="1.3"/>
    <path d="M120 271.9 L121 267 L122 262.1 L123 257.3 L124 252.8 L125 249 L126 245.9 L127 243.9 L128 243 L129 243.4 L130 244.9 L131 247.6 L132 251.3 L133 255.8 L134 260.9 L135 266.2 L136 271.6 L137 276.5 L138 280.8 L139 284.1 L140 286.2 L141 287 L142 286.4 L143 284.3 L144 281 L145 276.6 L146 271.4 L147 265.7 L148 260 L149 254.5 L150 249.8 L151 246.1 L152 243.8 L153 243 L154 243.8 L155 246.2 L156 250 L157 254.9 L158 260.7 L159 266.8 L160 272.7 L161 278.1 L162 282.5 L163 285.6 L164 286.9 L165 286.5 L166 284.4 L167 280.6 L168 275.6 L169 269.6 L170 263.2 L171 257 L172 251.4 L173 247 L174 244.1 L175 243 L176 243.9 L177 246.6 L178 251 L179 256.6 L180 263.1 L181 269.7 L182 275.9 L183 281.1 L184 284.9 L185 286.8 L186 286.7 L187 284.5 L188 280.5 L189 275 L190 268.6 L191 261.7 L192 255.2 L193 249.6 L194 245.5 L195 243.3 L196 243.2 L197 245.3 L198 249.3 L199 254.8 L200 261.4 L201 268.4 L202 275 L203 280.6 L204 284.7 L205 286.8 L206 286.7 L207 284.3 L208 280.1 L209 274.2 L210 267.5 L211 260.4 L212 253.9 L213 248.4 L214 244.7 L215 243.1 L216 243.7 L217 246.5 L218 251.2 L219 257.4 L220 264.3 L221 271.4 L222 277.7 L223 282.8 L224 286 L225 287 L226 285.8 L227 282.4 L228 277.2 L229 270.7 L230 263.7 L231 256.8 L232 250.7 L233 246.2 L234 243.5 L235 243.1 L236 244.9 L237 248.8 L238 254.3 L239 260.9 L240 267.9 L241 274.6 L242 280.4 L243 284.5 L244 286.7 L245 286.7 L246 284.6 L247 280.4 L248 274.8 L249 268.2 L250 261.3 L251 254.7 L252 249.2 L253 245.3 L254 243.2 L255 243.3 L256 245.5 L257 249.5 L258 255 L259 261.5 L260 268.2 L261 274.7 L262 280.2 L263 284.3 L264 286.6 L265 286.9 L266 285.2 L267 281.7 L268 276.6 L269 270.6 L270 264.1 L271 257.6 L272 251.9 L273 247.3 L274 244.3 L275 243 L276 243.7 L277 246.1 L278 250.2 L279 255.4 L280 261.5 L281 267.8 L282 273.8 L283 279.2 L284 283.3 L285 286 L286 287 L287 286.3 L288 283.9 L289 280.1 L290 275.1 L291 269.5 L292 263.5 L293 257.6 L294 252.3 L295 248 L296 244.9 L297 243.2 L298 243.1 L299 244.6 L300 247.4 L301 251.4 L302 256.3 L303 261.8 L304 267.4 L305 272.9 L306 277.8 L307 281.9 L308 284.9 L309 286.6 L310 287 L311 286 L312 283.8 L313 280.4 L314 276.2 L315 271.4 L316 266.2 L317 261 L318 256 L319 251.6 L320 247.9 L321 245.2 L322 243.5 L323 243 L324 243.6 L325 245.4 L326 248.1 L327 251.6 L328 255.7 L329 260.3 L330 265.1 L331 269.8 L332 274.3 L333 278.3 L334 281.7 L335 284.3 L336 286.1 L337 286.9 L338 286.8 L339 285.8 L340 283.9 L341 281.3 L342 278 L343 274.2 L344 270.1 L345 265.9 L346 261.6 L347 257.5 L348 253.7 L349 250.3 L350 247.5 L351 245.3 L352 243.8 L353 243.1 L354 243.1 L355 243.8 L356 245.2 L357 247.2 L358 249.8 L359 252.8 L360 256.2 L361 259.8 L362 263.6 L363 267.3 L364 271 L365 274.4 L366 277.6 L367 280.4 L368 282.8 L369 284.7 L370 286 L371 286.8 L372 287 L373 286.7 L374 285.8 L375 284.4 L376 282.6 L377 280.4 L378 277.8 L379 274.9 L380 271.9 L381 268.7 L382 265.4 L383 262.2 L384 259 L385 256 L386 253.2 L387 250.7 L388 248.4 L389 246.6 L390 245.1 L391 244 L392 243.3 L393 243 L394 243.2 L395 243.7 L396 244.7 L397 246 L398 247.7 L399 249.6 L400 251.9 L401 254.3 L402 256.9 L403 259.7 L404 262.5 L405 265.4 L406 268.2 L407 271 L408 273.6 L409 276.1 L410 278.5 L411 280.6 L412 282.4 L413 284 L414 285.2 L415 286.1 L416 286.7 L417 287 L418 286.9 L419 286.5 L420 285.7 L421 284.7 L422 283.3 L423 281.7 L424 279.8 L425 277.7 L426 275.4 L427 272.9 L428 270.3 L429 267.7 L430 265 L431 262.3 L432 259.7 L433 257.1 L434 254.6 L435 252.3 L436 250.2 L437 248.3 L438 246.7 L439 245.3 L440 244.3 L441 243.5 L442 243.1 L443 243 L444 243.3 L445 243.9 L446 244.8 L447 246 L448 247.6 L449 249.4 L450 251.5 L451 253.9 L452 256.4 L453 259 L454 261.8 L455 264.6 L456 267.5 L457 270.3 L458 273.1 L459 275.7 L460 278.1 L461 280.4 L462 282.3 L463 284 L464 285.3 L465 286.3 L466 286.8 L467 287 L468 286.7 L469 286 L470 284.9 L471 283.4 L472 281.6 L473 279.3 L474 276.8 L475 274 L476 271 L477 267.8 L478 264.6 L479 261.3 L480 258.1 L481 255.1 L482 252.2 L483 249.6 L484 247.4 L485 245.6 L486 244.2 L487 243.3 L488 243 L489 243.2 L490 244 L491 245.3 L492 247.2 L493 249.6 L494 252.4 L495 255.6 L496 259 L497 262.7 L498 266.4 L499 270.2 L500 273.8 L501 277.2 L502 280.2 L503 282.8 L504 284.8 L505 286.2 L506 286.9 L507 286.9 L508 286.2 L509 284.7 L510 282.5 L511 279.7 L512 276.3 L513 272.5 L514 268.4 L515 264.1 L516 259.9 L517 255.8 L518 252 L519 248.7 L520 246.1 L521 244.2 L522 243.2 L523 243.1 L524 243.9 L525 245.7 L526 248.3 L527 251.7 L528 255.7 L529 260.2 L530 264.9 L531 269.7 L532 274.3 L533 278.4 L534 281.9 L535 284.6 L536 286.4 L537 287 L538 286.5 L539 284.8 L540 282.1 L541 278.4 L542 274 L543 269 L544 263.8 L545 258.6 L546 253.8 L547 249.6 L548 246.2 L549 244 L550 243 L551 243.4 L552 245.1 L553 248.1 L554 252.2 L555 257.1 L556 262.6 L557 268.2 L558 273.7 L559 278.6 L560 282.6 L561 285.4 L562 286.9 L563 286.8 L564 285.1 L565 282 L566 277.7 L567 272.4 L568 266.5 L569 260.5 L570 254.9 L571 249.9 L572 246.1 L573 243.7 L574 243 L575 244 L576 246.7 L577 250.8 L578 256.2 L579 262.2 L580 268.5 L581 274.6 L582 279.8 L583 283.9 L584 286.3 L585 287 L586 285.7 L587 282.7 L588 278.1 L589 272.4 L590 265.9 L591 259.4 L592 253.4 L593 248.3 L594 244.8 L595 243.1 L596 243.4 L597 245.7 L598 249.8 L599 255.3 L600 261.8 L601 268.5 L602 275 L603 280.5 L604 284.5 L605 286.7 L606 286.8 L607 284.7 L608 280.8 L609 275.3 L610 268.7 L611 261.8 L612 255.2 L613 249.6 L614 245.4 L615 243.3 L616 243.3 L617 245.5 L618 249.6 L619 255.4 L620 262.1 L621 269.1 L622 275.7 L623 281.2 L624 285.1 L625 286.9 L626 286.5 L627 283.8 L628 279.3 L629 273.2 L630 266.3 L631 259.3 L632 252.8 L633 247.6 L634 244.2 L635 243 L636 244 L637 247.2 L638 252.3 L639 258.6 L640 265.7 L641 272.6 L642 278.8 L643 283.5 L644 286.3 L645 286.9 L646 285.3 L647 281.6 L648 276.1 L649 269.6 L650 262.5 L651 255.8 L652 249.9 L653 245.7 L654 243.3 L655 243.2 L656 245.3 L657 249.4 L658 255 L659 261.6 L660 268.6 L661 275.2 L662 280.7 L663 284.7 L664 286.8 L665 286.7 L666 284.5 L667 280.4 L668 274.8 L669 268.3 L670 261.4 L671 255 L672 249.5 L673 245.5 L674 243.3 L675 243.2 L676 245.1 L677 248.9 L678 254.1 L679 260.3 L680 266.9 L681 273.4 L682 279 L683 283.4 L684 286.1 L685 287 L686 285.9 L687 283 L688 278.6 L689 273 L690 266.8 L691 260.4 L692 254.4 L693 249.4 L694 245.6 L695 243.5 L696 243.1 L697 244.4 L698 247.5 L699 251.9 L700 257.3 L701 263.2 L702 269.3 L703 275.1 L704 280 L705 283.8 L706 286.2 L707 287 L708 286.2 L709 283.9 L710 280.2 L711 275.5 L712 270 L713 264.3 L714 258.6 L715 253.4 L716 249 L717 245.7 L718 243.6 L719 243 L720 243.8 L721 245.9 L722 249.2 L723 253.5 L724 258.4 L725 263.8 L726 269.1 L727 274.2 L728 278.7 L729 282.4 L730 285.1 L731 286.6 L732 287 L733 286.1 L734 284.1 L735 281 L736 277.2 L737 272.7 L738 267.9 L739 263 L740 258.1" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.3"/>
  </g>
</svg>
<figcaption>그림 1. AM은 반송파의 “키(진폭)”가 정보 신호를 따라 변하고(점선 = 포락선), FM은 반송파의 “촘촘함(주파수)”이 정보 신호를 따라 변합니다.</figcaption>
</figure>
<ul>
  <li><strong>AM(Amplitude Modulation, 진폭 변조)</strong> — 진폭을 바꿈. 구조가 간단하지만 잡음(진폭 변화)에 약합니다. AM 라디오.</li>
  <li><strong>FM(Frequency Modulation, 주파수 변조)</strong> — 주파수를 바꿈. 진폭 잡음에 강해 음질이 좋지만 대역폭을 더 씁니다. FM 라디오, 무전기.</li>
</ul>

<h2>디지털 변조: PSK와 QAM</h2>
<p>디지털 통신은 0과 1을 보냅니다. 반송파의 상태(진폭·위상 조합) 몇 가지를 미리 약속해 두고, 각 상태에 비트 묶음을 대응시킵니다. 한 번에 보내는 상태 하나를 <strong>심볼(Symbol)</strong>이라고 합니다.</p>
<ul>
  <li><strong>ASK/OOK</strong> — 진폭으로 구분(켜짐/꺼짐). 리모컨, 저가 RF 모듈.</li>
  <li><strong>FSK/GFSK</strong> — 주파수로 구분. Bluetooth(GFSK), 여러 IoT 기기.</li>
  <li><strong>PSK</strong> — 위상으로 구분. BPSK(2상태), QPSK(4상태).</li>
  <li><strong>QAM</strong> — 진폭과 위상을 동시에 바꿔 더 많은 상태를 만듦. 16/64/256/1024/4096-QAM.</li>
</ul>

<p>이 상태들을 평면에 점으로 찍은 그림을 <strong>성상도(Constellation Diagram)</strong>라고 합니다. 가로축 I(In-phase), 세로축 Q(Quadrature)이고, 원점에서 점까지의 거리가 진폭, 각도가 위상입니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 316" role="img" aria-label="QPSK와 16-QAM 성상도">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <text x="190" y="18" font-size="14" font-weight="700" fill="var(--dg-accent)">QPSK — 점 4개 = 2비트/심볼</text>
    <text x="570" y="18" font-size="14" font-weight="700" fill="var(--dg-accent-2)">16-QAM — 점 16개 = 4비트/심볼</text>
    <g stroke="var(--dg-muted)" stroke-width="1.2">
      <line x1="70" y1="150" x2="310" y2="150"/><line x1="190" y1="32" x2="190" y2="268"/>
      <line x1="450" y1="150" x2="690" y2="150"/><line x1="570" y1="32" x2="570" y2="268"/>
    </g>
    <text x="318" y="154" text-anchor="start" fill="var(--text-3)">I</text><text x="198" y="42" text-anchor="start" fill="var(--text-3)">Q</text>
    <text x="698" y="154" text-anchor="start" fill="var(--text-3)">I</text><text x="578" y="42" text-anchor="start" fill="var(--text-3)">Q</text>
    <circle cx="190" cy="150" r="77.8" fill="none" stroke="var(--dg-line)" stroke-dasharray="4 4"/>
    <g fill="var(--dg-accent)">
      <circle cx="245" cy="95" r="7"/><circle cx="135" cy="95" r="7"/><circle cx="135" cy="205" r="7"/><circle cx="245" cy="205" r="7"/>
    </g>
    <g font-weight="700" font-size="12.5">
      <text x="266" y="88">00</text><text x="114" y="88">01</text><text x="114" y="228">11</text><text x="266" y="228">10</text>
    </g>
    <line x1="190" y1="150" x2="245" y2="95" stroke="var(--dg-accent)" stroke-width="1.2"/>
    <text x="232" y="138" font-size="11" fill="var(--text-3)">위상 45°</text>
    <g fill="var(--dg-accent-2)">
      <circle cx="480" cy="60" r="6"/><circle cx="540" cy="60" r="6"/><circle cx="600" cy="60" r="6"/>
      <circle cx="480" cy="120" r="6"/><circle cx="540" cy="120" r="6"/><circle cx="600" cy="120" r="6"/><circle cx="660" cy="120" r="6"/>
      <circle cx="480" cy="180" r="6"/><circle cx="540" cy="180" r="6"/><circle cx="600" cy="180" r="6"/><circle cx="660" cy="180" r="6"/>
      <circle cx="480" cy="240" r="6"/><circle cx="540" cy="240" r="6"/><circle cx="600" cy="240" r="6"/><circle cx="660" cy="240" r="6"/>
    </g>
    <g fill="var(--dg-accent-2)" opacity="0.55">
      <circle cx="652" cy="52" r="2.2"/><circle cx="668" cy="57" r="2.2"/><circle cx="661" cy="70" r="2.2"/><circle cx="649" cy="66" r="2.2"/>
      <circle cx="671" cy="67" r="2.2"/><circle cx="657" cy="46" r="2.2"/><circle cx="664" cy="61" r="2.2"/><circle cx="646" cy="58" r="2.2"/>
    </g>
    <circle cx="660" cy="60" r="20" fill="none" stroke="var(--dg-accent-2)" stroke-dasharray="3 3"/>
    <text x="570" y="287" font-size="12" fill="var(--text-2)">오른쪽 위: 잡음 때문에 점이 퍼진 모습</text>
    <text x="570" y="304" font-size="12" fill="var(--text-2)">퍼짐이 크면 이웃 점과 헷갈려 오류 발생</text>
    <text x="190" y="287" font-size="12" fill="var(--text-2)">점 사이가 멀어 잡음에 강함</text>
  </g>
</svg>
<figcaption>그림 2. 성상도. 점이 많을수록 한 번에 많은 비트를 보내지만 점 사이 간격이 좁아져 잡음에 약해집니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>변조 방식</th><th class="num">상태(점) 수</th><th class="num">비트/심볼</th><th>대표 사용 예</th><th>필요한 SNR</th></tr></thead>
<tbody>
<tr><td>BPSK</td><td class="num">2</td><td class="num">1</td><td>Wi-Fi 최저 속도(MCS0)</td><td>낮음</td></tr>
<tr><td>QPSK</td><td class="num">4</td><td class="num">2</td><td>LTE/NR 제어 채널, 먼 거리</td><td>↓</td></tr>
<tr><td>16-QAM</td><td class="num">16</td><td class="num">4</td><td>LTE/NR, Wi-Fi 중간 속도</td><td>↓</td></tr>
<tr><td>64-QAM</td><td class="num">64</td><td class="num">6</td><td>LTE/NR, 802.11a/g/n</td><td>↓</td></tr>
<tr><td>256-QAM</td><td class="num">256</td><td class="num">8</td><td>802.11ac, LTE/NR</td><td>↓</td></tr>
<tr><td>1024-QAM</td><td class="num">1024</td><td class="num">10</td><td>802.11ax(Wi-Fi 6)</td><td>↓</td></tr>
<tr><td>4096-QAM</td><td class="num">4096</td><td class="num">12</td><td>802.11be(Wi-Fi 7)</td><td>매우 높음</td></tr>
</tbody></table></div>
<p>점들이 이상적인 위치에서 얼마나 벗어났는지를 나타내는 지표가 <strong>EVM(Error Vector Magnitude)</strong>입니다. 송신기 품질 시험(변조 정확도)에서 측정합니다. 고차 QAM일수록 EVM 요구가 엄격합니다.</p>

<h2>OFDM — 많은 부반송파로 나누어 보내기</h2>
<p>넓은 대역을 하나의 빠른 반송파로 쓰면 다중경로(반사파)에 약해집니다. <strong>OFDM(Orthogonal Frequency Division Multiplexing)</strong>은 대역을 수십~수천 개의 좁은 <strong>부반송파(Subcarrier)</strong>로 나누고, 각각을 천천히(QAM으로) 변조해 동시에 보냅니다. 부반송파들은 서로 간섭하지 않도록 “직교(Orthogonal)” 간격으로 배치됩니다.</p>
<ul>
  <li>Wi-Fi(802.11a/g/n/ac): 20 MHz 채널에 부반송파 간격 312.5 kHz. 802.11ax/be는 간격 78.125 kHz로 더 촘촘합니다.</li>
  <li>LTE: 부반송파 간격 15 kHz, 12개 부반송파 = 1 RB(자원 블록, 180 kHz). 5G NR은 15/30/60/120 kHz 등 여러 간격을 씁니다.</li>
  <li>OFDM 신호는 많은 부반송파가 우연히 같은 위상으로 겹치면 순간적으로 큰 피크가 생깁니다. 즉 <strong>평균 대비 피크 비(PAPR)</strong>가 큽니다. 그래서 출력 측정 시 평균(RMS)과 피크를 구분해야 합니다.</li>
</ul>

<h2>여러 사용자가 나눠 쓰는 법: 다중접속과 이중화</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>방식</th><th>나누는 자원</th><th>비유</th><th>예</th></tr></thead>
<tbody>
<tr><td>FDMA</td><td>주파수</td><td>차선을 나눠 씀</td><td>아날로그 이동통신, FM 방송</td></tr>
<tr><td>TDMA</td><td>시간</td><td>같은 차선을 순서대로</td><td>GSM, Bluetooth(시간 슬롯)</td></tr>
<tr><td>CDMA</td><td>코드</td><td>같은 방에서 서로 다른 언어로 대화</td><td>IS-95, WCDMA</td></tr>
<tr><td>OFDMA</td><td>부반송파 묶음 + 시간</td><td>버스 좌석을 여러 승객에게 배정</td><td>LTE/5G 하향, Wi-Fi 6(802.11ax)</td></tr>
</tbody></table></div>
<ul>
  <li><strong>FDD(Frequency Division Duplex)</strong> — 송신과 수신에 서로 다른 주파수를 씀. 예: LTE Band 1은 단말 송신(UL) 1920~1980 MHz, 수신(DL) 2110~2170 MHz.</li>
  <li><strong>TDD(Time Division Duplex)</strong> — 같은 주파수를 시간으로 나눠 송·수신. 예: 5G NR n78(3.5 GHz), Wi-Fi, Bluetooth.</li>
</ul>
<div class="callout note">
  <span class="callout-title">시험과의 연결</span>
  TDD 기기는 송신이 “켜졌다 꺼졌다” 합니다. 즉 대부분의 TDD·패킷 기반 기기(Wi-Fi, Bluetooth, NR TDD)는 <strong>버스트 신호</strong>를 냅니다. 이것이 다음 절의 듀티 사이클 문제로 이어집니다.
</div>

<h2>버스트 신호와 듀티 사이클 — 시험에서 왜 중요한가</h2>
<p>Wi-Fi 기기는 패킷을 보낼 때만 송신하고, 사이사이에는 쉬거나 수신합니다. 이런 “켜짐-꺼짐”이 반복되는 신호를 <strong>버스트(Burst) 신호</strong>라고 하고, 전체 시간 중 켜져 있는 비율을 <strong>듀티 사이클(Duty Cycle)</strong>이라고 합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="버스트 신호의 듀티 사이클과 평균 전력">
  <defs><marker id="rfmod-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <line x1="40" y1="170" x2="740" y2="170" stroke="var(--dg-muted)"/>
    <text x="738" y="160" text-anchor="end" font-size="11.5" fill="var(--text-3)">시간 →</text>
    <g fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2">
      <rect x="60" y="50" width="100" height="120"/><rect x="310" y="50" width="100" height="120"/><rect x="560" y="50" width="100" height="120"/>
    </g>
    <g font-size="12" fill="var(--dg-accent)" font-weight="700"><text x="110" y="115">송신 ON</text><text x="360" y="115">송신 ON</text><text x="610" y="115">송신 ON</text></g>
    <g font-size="12" fill="var(--text-3)"><text x="235" y="160">OFF</text><text x="485" y="160">OFF</text></g>
    <line x1="40" y1="50" x2="740" y2="50" stroke="var(--dg-accent-2)" stroke-dasharray="6 4"/>
    <text x="700" y="42" text-anchor="end" font-weight="700" fill="var(--dg-accent-2)">버스트 중 전력(게이팅 측정값) = 예: +18 dBm</text>
    <line x1="40" y1="122" x2="740" y2="122" stroke="var(--dg-ok)" stroke-dasharray="6 4"/>
    <text x="235" y="116" font-weight="700" fill="var(--dg-ok)">시간 평균 전력</text>
    <line x1="60" y1="190" x2="160" y2="190" stroke="var(--dg-line)" marker-start="url(#rfmod-arw)" marker-end="url(#rfmod-arw)"/>
    <text x="168" y="194" text-anchor="start" font-size="12">T<tspan font-size="9" dy="3">on</tspan></text>
    <line x1="60" y1="212" x2="310" y2="212" stroke="var(--dg-line)" marker-start="url(#rfmod-arw)" marker-end="url(#rfmod-arw)"/>
    <text x="185" y="226" font-size="11.5">주기 T</text>
    <text x="530" y="205" font-size="12.5" fill="var(--text-2)">듀티 사이클 D = T<tspan baseline-shift="sub" font-size="9">on</tspan> / T = 40 %</text>
    <text x="530" y="224" font-size="12.5" fill="var(--text-2)">시간 평균 = +18 + 10·log(0.4) ≈ +14 dBm</text>
  </g>
</svg>
<figcaption>그림 3. 버스트 신호. 꺼져 있는 시간까지 평균하면 실제 송신 중 전력보다 낮게 측정됩니다.</figcaption>
</figure>

<div class="formula">듀티 사이클 D = T<sub>on</sub> / T      보정값(dB) = 10 · log<sub>10</sub>(1 / D)</div>
<p>예를 들어 D = 40 %이면 보정값 = 10·log(1/0.4) ≈ <strong>4.0 dB</strong>. OFF 구간까지 포함해 평균한 값이 +14 dBm이었다면, 버스트 중 평균 전력은 약 +18 dBm입니다.</p>

<ol class="steps">
  <li><strong>듀티 사이클 확인</strong>스펙트럼 분석기 Zero Span(또는 오실로스코프)으로 T<sub>on</sub>과 주기 T를 측정해 기록합니다.</li>
  <li><strong>측정 방법 선택</strong>규격에 따라 ① <em>게이팅(Gating)</em>·트리거로 버스트 ON 구간만 측정, ② 전체 평균 후 듀티 보정값을 더함, ③ 피크 검파 등 중 정해진 방법을 씁니다(예: FCC KDB 558074에 듀티 사이클 처리 방법이 설명되어 있음).</li>
  <li><strong>가능하면 연속 송신 모드</strong>시험 모드에서 듀티 사이클을 98 % 이상(거의 연속)으로 설정할 수 있으면 보정 불확도가 줄어듭니다. 설정값과 실제 측정된 듀티를 모두 기록합니다.</li>
</ol>

<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>Wi-Fi 기기 출력을 일반 평균(RMS) 스윕으로 측정하고 그대로 “+14 dBm” 기록. 듀티 사이클이 얼마였는지, 보정했는지 기록 없음.</div>
  <div class="good"><h4>✅ 좋은 예</h4>“Zero Span 측정 듀티 40.2 %, 게이팅 평균 +18.1 dBm (검파 RMS, RBW 1 MHz). 참고: 비게이팅 평균 +14.1 dBm, 보정 3.96 dB.” 처럼 근거까지 기록.</div>
</div>

<div class="callout warn">
  <span class="callout-title">평균 vs 피크</span>
  규격이 요구하는 것이 <strong>평균 전력</strong>인지 <strong>피크 전력</strong>인지 항상 먼저 확인하세요. OFDM처럼 PAPR이 큰 신호는 피크가 평균보다 수 dB~10 dB 이상 클 수 있어, 둘을 혼동하면 판정이 뒤바뀝니다.
</div>
`,
  quiz: [
    { q: '64-QAM은 한 심볼에 몇 비트를 실어 보내는가?',
      options: ['4비트', '8비트', '6비트', '64비트'],
      answer: 2, explain: '2^6 = 64이므로 64개의 상태로 6비트를 표현합니다.' },
    { q: '성상도에서 점의 개수를 늘릴 때(고차 QAM)의 특징으로 옳은 것은?',
      options: ['속도는 빨라지지만 잡음에 약해져 더 높은 SNR이 필요하다', '속도와 잡음 내성이 모두 좋아진다', '대역폭이 반드시 넓어진다', '잡음에 강해지지만 속도는 느려진다'],
      answer: 0, explain: '점이 많아질수록 점 사이 간격이 좁아져 작은 잡음에도 다른 점으로 오인될 수 있습니다.' },
    { q: '듀티 사이클이 25 %인 버스트 신호를 OFF 구간까지 포함해 평균했더니 +10 dBm이었다. 버스트 중 평균 전력은 약 얼마인가?',
      options: ['+4 dBm', '+10 dBm', '+13 dBm', '+16 dBm'],
      answer: 3, explain: '보정값 = 10·log(1/0.25) = 6 dB. +10 + 6 = +16 dBm입니다.' },
    { q: '같은 주파수를 시간으로 나누어 송신과 수신을 번갈아 하는 방식은?',
      options: ['FDD', 'TDD', 'FDMA', 'CDMA'],
      answer: 1, explain: 'TDD(Time Division Duplex)는 동일 주파수에서 송·수신 시간을 나눕니다.' }
  ],
  refs: [
    { title: 'FCC KDB (Knowledge Database)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'KDB 558074 — DTS(디지털 전송 시스템) 측정 지침, 듀티 사이클 처리' },
    { title: 'Keysight — Digital Modulation in Communications Systems', url: 'https://www.keysight.com', note: '디지털 변조와 EVM 기초' }
  ]
});

COURSE.addLesson({
  id: 'rf-antenna',
  module: 'rf',
  order: 5,
  title: '안테나 기초 — 이득, 방사 패턴, EIRP, 안테나 인자',
  minutes: 28,
  level: '기초',
  summary: '안테나가 하는 일, 이득(dBi/dBd)과 방사 패턴, 편파, EIRP/ERP 계산, 근거리장/원거리장, 그리고 방사 측정의 핵심인 안테나 인자(AF)로 전계강도를 구하는 방법을 배웁니다.',
  objectives: [
    '안테나 이득이 “전력을 만드는 것”이 아니라 “방향으로 모으는 것”임을 설명할 수 있다.',
    'dBi와 dBd를 변환하고, 방사 패턴 그림에서 주엽·빔폭·후엽을 읽을 수 있다.',
    'EIRP = Pt − L + G 로 EIRP와 ERP를 계산할 수 있다.',
    '원거리장 조건(2D²/λ)과 안테나 인자(AF)를 이용한 전계강도 계산을 할 수 있다.'
  ],
  body: `
<h2>안테나는 “변환기”입니다</h2>
<p>케이블 속을 흐르는 고주파 전력을 공간으로 퍼지는 전파로 바꾸고(송신), 반대로 공간의 전파를 케이블 속 전압으로 바꾸는(수신) 장치가 <strong>안테나(Antenna)</strong>입니다. 같은 안테나는 송신과 수신에서 똑같은 특성(이득, 패턴)을 가지는데, 이를 <strong>가역성(Reciprocity)</strong>이라고 합니다. 그래서 시험소에서는 수신용 측정 안테나의 특성으로 EUT가 “얼마나 내보냈는지”를 계산할 수 있습니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  안테나는 스피커와 마이크를 겸하는 장치입니다. 그리고 <strong>이득(Gain)</strong>은 “소리를 더 크게 만드는 앰프”가 아니라 <strong>확성기(메가폰)</strong>와 같습니다. 메가폰은 에너지를 늘리지 않고, 사방으로 흩어질 소리를 한쪽으로 모아 그 방향에서만 크게 들리게 합니다. 대신 다른 방향에서는 작게 들립니다.
</div>

<h2>이득: dBi와 dBd</h2>
<ul>
  <li><strong>등방성 안테나(Isotropic Antenna)</strong> — 모든 방향으로 똑같이 방사하는 가상의 이상적 안테나. 실제로는 만들 수 없지만 계산 기준으로 씁니다.</li>
  <li><strong>dBi</strong> — 등방성 안테나 대비 이득. 규격·계산에서 가장 흔히 씁니다.</li>
  <li><strong>dBd</strong> — 반파장 다이폴(Dipole) 안테나 대비 이득. 다이폴 자체는 2.15 dBi입니다.</li>
</ul>
<div class="formula">G(dBi) = G(dBd) + 2.15</div>
<p>이득은 <strong>지향성(Directivity, 얼마나 한쪽으로 모으나)</strong>에 <strong>효율(Efficiency, 손실 없이 얼마나 방사하나)</strong>을 곱한 값입니다. 스마트폰 내장 안테나는 공간이 좁아 효율이 낮은 경우가 많아, 이득이 0 dBi 이하(예: −3 dBi)인 것도 흔합니다.</p>

<h2>방사 패턴</h2>
<p>안테나가 방향별로 얼마나 세게 방사하는지를 그린 그림이 <strong>방사 패턴(Radiation Pattern)</strong>입니다. 보통 가장 센 방향을 0 dB로 두고 극좌표(원형 그래프)로 그립니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="무지향, 다이폴 수직면, 지향성 안테나의 방사 패턴">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <text x="130" y="22" font-size="13.5" font-weight="700">① 다이폴 — 위에서 본 면</text>
    <text x="380" y="22" font-size="13.5" font-weight="700">② 다이폴 — 옆에서 본 면</text>
    <text x="630" y="22" font-size="13.5" font-weight="700">③ 지향성 안테나</text>
    <g fill="none" stroke="var(--dg-line)" stroke-width="0.8" stroke-dasharray="3 3">
      <circle cx="130" cy="150" r="90"/><circle cx="130" cy="150" r="60"/><circle cx="130" cy="150" r="30"/>
      <circle cx="380" cy="150" r="90"/><circle cx="380" cy="150" r="60"/><circle cx="380" cy="150" r="30"/>
      <circle cx="630" cy="150" r="90"/><circle cx="630" cy="150" r="60"/><circle cx="630" cy="150" r="30"/>
      <line x1="30" y1="150" x2="230" y2="150"/><line x1="130" y1="50" x2="130" y2="250"/>
      <line x1="280" y1="150" x2="480" y2="150"/><line x1="380" y1="50" x2="380" y2="250"/>
      <line x1="530" y1="150" x2="730" y2="150"/><line x1="630" y1="50" x2="630" y2="250"/>
    </g>
    <g font-size="10" fill="var(--text-3)" text-anchor="start">
      <text x="134" y="57">0 dB</text><text x="134" y="87">−10</text><text x="134" y="117">−20</text>
    </g>
    <path d="M220 150 L219.9 146.9 L219.8 143.7 L219.5 140.6 L219.1 137.5 L218.6 134.4 L218 131.3 L217.3 128.2 L216.5 125.2 L215.6 122.2 L214.6 119.2 L213.4 116.3 L212.2 113.4 L210.9 110.5 L209.5 107.7 L207.9 105 L206.3 102.3 L204.6 99.7 L202.8 97.1 L200.9 94.6 L198.9 92.1 L196.9 89.8 L194.7 87.5 L192.5 85.3 L190.2 83.1 L187.9 81.1 L185.4 79.1 L182.9 77.2 L180.3 75.4 L177.7 73.7 L175 72.1 L172.3 70.5 L169.5 69.1 L166.6 67.8 L163.7 66.6 L160.8 65.4 L157.8 64.4 L154.8 63.5 L151.8 62.7 L148.7 62 L145.6 61.4 L142.5 60.9 L139.4 60.5 L136.3 60.2 L133.1 60.1 L130 60 L126.9 60.1 L123.7 60.2 L120.6 60.5 L117.5 60.9 L114.4 61.4 L111.3 62 L108.2 62.7 L105.2 63.5 L102.2 64.4 L99.2 65.4 L96.3 66.6 L93.4 67.8 L90.5 69.1 L87.7 70.5 L85 72.1 L82.3 73.7 L79.7 75.4 L77.1 77.2 L74.6 79.1 L72.1 81.1 L69.8 83.1 L67.5 85.3 L65.3 87.5 L63.1 89.8 L61.1 92.1 L59.1 94.6 L57.2 97.1 L55.4 99.7 L53.7 102.3 L52.1 105 L50.5 107.7 L49.1 110.5 L47.8 113.4 L46.6 116.3 L45.4 119.2 L44.4 122.2 L43.5 125.2 L42.7 128.2 L42 131.3 L41.4 134.4 L40.9 137.5 L40.5 140.6 L40.2 143.7 L40.1 146.9 L40 150 L40.1 153.1 L40.2 156.3 L40.5 159.4 L40.9 162.5 L41.4 165.6 L42 168.7 L42.7 171.8 L43.5 174.8 L44.4 177.8 L45.4 180.8 L46.6 183.7 L47.8 186.6 L49.1 189.5 L50.5 192.3 L52.1 195 L53.7 197.7 L55.4 200.3 L57.2 202.9 L59.1 205.4 L61.1 207.9 L63.1 210.2 L65.3 212.5 L67.5 214.7 L69.8 216.9 L72.1 218.9 L74.6 220.9 L77.1 222.8 L79.7 224.6 L82.3 226.3 L85 227.9 L87.7 229.5 L90.5 230.9 L93.4 232.2 L96.3 233.4 L99.2 234.6 L102.2 235.6 L105.2 236.5 L108.2 237.3 L111.3 238 L114.4 238.6 L117.5 239.1 L120.6 239.5 L123.7 239.8 L126.9 239.9 L130 240 L133.1 239.9 L136.3 239.8 L139.4 239.5 L142.5 239.1 L145.6 238.6 L148.7 238 L151.8 237.3 L154.8 236.5 L157.8 235.6 L160.8 234.6 L163.7 233.4 L166.6 232.2 L169.5 230.9 L172.3 229.5 L175 227.9 L177.7 226.3 L180.3 224.6 L182.9 222.8 L185.4 220.9 L187.9 218.9 L190.2 216.9 L192.5 214.7 L194.7 212.5 L196.9 210.2 L198.9 207.9 L200.9 205.4 L202.8 202.9 L204.6 200.3 L206.3 197.7 L207.9 195 L209.5 192.3 L210.9 189.5 L212.2 186.6 L213.4 183.7 L214.6 180.8 L215.6 177.8 L216.5 174.8 L217.3 171.8 L218 168.7 L218.6 165.6 L219.1 162.5 L219.5 159.4 L219.8 156.3 L219.9 153.1 L220 150 Z" fill="var(--dg-accent)" fill-opacity="0.15" stroke="var(--dg-accent)" stroke-width="2"/>
    <circle cx="130" cy="150" r="4" fill="var(--text)"/>
    <path d="M470 150 L469.9 146.9 L469.7 143.7 L469.3 140.6 L468.8 137.5 L468.1 134.5 L467.2 131.5 L466.2 128.5 L465.1 125.6 L463.8 122.8 L462.4 120 L460.8 117.3 L459.1 114.8 L457.3 112.3 L455.4 109.9 L453.4 107.6 L451.2 105.5 L449 103.5 L446.6 101.6 L444.2 99.9 L441.7 98.3 L439.1 96.8 L436.4 95.5 L433.7 94.4 L430.9 93.4 L428.1 92.7 L425.3 92.1 L422.4 91.7 L419.5 91.5 L416.5 91.5 L413.6 91.8 L410.7 92.2 L407.8 93 L404.9 94 L402.1 95.3 L399.3 96.9 L396.6 98.9 L394 101.3 L391.4 104.3 L389 107.9 L386.6 112.3 L384.5 117.9 L382.6 125.2 L381 135.7 L380 150 L380 150 L380 150 L379 135.7 L377.4 125.2 L375.5 117.9 L373.4 112.3 L371 107.9 L368.6 104.3 L366 101.3 L363.4 98.9 L360.7 96.9 L357.9 95.3 L355.1 94 L352.2 93 L349.3 92.2 L346.4 91.8 L343.5 91.5 L340.5 91.5 L337.6 91.7 L334.7 92.1 L331.9 92.7 L329.1 93.4 L326.3 94.4 L323.6 95.5 L320.9 96.8 L318.3 98.3 L315.8 99.9 L313.4 101.6 L311 103.5 L308.8 105.5 L306.6 107.6 L304.6 109.9 L302.7 112.3 L300.9 114.8 L299.2 117.3 L297.6 120 L296.2 122.8 L294.9 125.6 L293.8 128.5 L292.8 131.5 L291.9 134.5 L291.2 137.5 L290.7 140.6 L290.3 143.7 L290.1 146.9 L290 150 L290.1 153.1 L290.3 156.3 L290.7 159.4 L291.2 162.5 L291.9 165.5 L292.8 168.5 L293.8 171.5 L294.9 174.4 L296.2 177.2 L297.6 180 L299.2 182.7 L300.9 185.2 L302.7 187.7 L304.6 190.1 L306.6 192.4 L308.8 194.5 L311 196.5 L313.4 198.4 L315.8 200.1 L318.3 201.7 L320.9 203.2 L323.6 204.5 L326.3 205.6 L329.1 206.6 L331.9 207.3 L334.7 207.9 L337.6 208.3 L340.5 208.5 L343.5 208.5 L346.4 208.2 L349.3 207.8 L352.2 207 L355.1 206 L357.9 204.7 L360.7 203.1 L363.4 201.1 L366 198.7 L368.6 195.7 L371 192.1 L373.4 187.7 L375.5 182.1 L377.4 174.8 L379 164.3 L380 150 L380 150 L380 150 L381 164.3 L382.6 174.8 L384.5 182.1 L386.6 187.7 L389 192.1 L391.4 195.7 L394 198.7 L396.6 201.1 L399.3 203.1 L402.1 204.7 L404.9 206 L407.8 207 L410.7 207.8 L413.6 208.2 L416.5 208.5 L419.5 208.5 L422.4 208.3 L425.3 207.9 L428.1 207.3 L430.9 206.6 L433.7 205.6 L436.4 204.5 L439.1 203.2 L441.7 201.7 L444.2 200.1 L446.6 198.4 L449 196.5 L451.2 194.5 L453.4 192.4 L455.4 190.1 L457.3 187.7 L459.1 185.2 L460.8 182.7 L462.4 180 L463.8 177.2 L465.1 174.4 L466.2 171.5 L467.2 168.5 L468.1 165.5 L468.8 162.5 L469.3 159.4 L469.7 156.3 L469.9 153.1 L470 150 Z" fill="var(--dg-accent)" fill-opacity="0.15" stroke="var(--dg-accent)" stroke-width="2"/>
    <line x1="380" y1="132" x2="380" y2="168" stroke="var(--text)" stroke-width="4"/>
    <path d="M720 150 L719.9 146.9 L719.7 143.7 L719.2 140.6 L718.6 137.5 L717.9 134.5 L716.9 131.5 L715.8 128.6 L714.6 125.8 L713.1 123 L711.6 120.3 L709.9 117.7 L708 115.3 L706 112.9 L703.9 110.7 L701.7 108.6 L699.3 106.7 L696.9 104.9 L694.3 103.2 L691.7 101.8 L689 100.5 L686.2 99.4 L683.4 98.4 L680.5 97.7 L677.6 97.1 L674.7 96.8 L671.7 96.6 L668.8 96.7 L665.8 96.9 L662.9 97.4 L660 98 L657.2 98.9 L654.4 100 L651.7 101.3 L649.1 102.8 L646.6 104.5 L644.2 106.4 L641.9 108.5 L639.8 110.9 L637.8 113.4 L636 116.1 L634.4 119 L632.9 122 L631.7 125.3 L630.7 128.7 L630 132.2 L629.5 134.7 L629.1 136.9 L628.8 138.9 L628.7 140.6 L628.6 142.1 L628.6 143.2 L628.5 144.1 L628.4 144.6 L628.3 144.8 L628.1 144.8 L627.8 144.6 L627.4 144.2 L627 143.8 L626.4 143.2 L625.7 142.6 L625 142 L624.2 141.4 L623.3 140.8 L622.5 140.3 L621.5 139.9 L620.6 139.5 L619.6 139.2 L618.7 139 L617.7 138.9 L616.7 138.9 L615.8 138.9 L614.9 139 L614 139.2 L613.1 139.5 L612.3 139.8 L611.5 140.2 L610.8 140.6 L610.1 141.1 L609.4 141.7 L608.8 142.3 L608.2 142.9 L607.7 143.6 L607.3 144.3 L606.9 145.1 L606.6 145.9 L606.3 146.7 L606.1 147.5 L605.9 148.3 L605.8 149.2 L605.8 150 L605.8 150.8 L605.9 151.7 L606.1 152.5 L606.3 153.3 L606.6 154.1 L606.9 154.9 L607.3 155.7 L607.7 156.4 L608.2 157.1 L608.8 157.7 L609.4 158.3 L610.1 158.9 L610.8 159.4 L611.5 159.8 L612.3 160.2 L613.1 160.5 L614 160.8 L614.9 161 L615.8 161.1 L616.7 161.1 L617.7 161.1 L618.7 161 L619.6 160.8 L620.6 160.5 L621.5 160.1 L622.5 159.7 L623.3 159.2 L624.2 158.6 L625 158 L625.7 157.4 L626.4 156.8 L627 156.2 L627.4 155.8 L627.8 155.4 L628.1 155.2 L628.3 155.2 L628.4 155.4 L628.5 155.9 L628.6 156.8 L628.6 157.9 L628.7 159.4 L628.8 161.1 L629.1 163.1 L629.5 165.3 L630 167.8 L630.7 171.3 L631.7 174.7 L632.9 178 L634.4 181 L636 183.9 L637.8 186.6 L639.8 189.1 L641.9 191.5 L644.2 193.6 L646.6 195.5 L649.1 197.2 L651.7 198.7 L654.4 200 L657.2 201.1 L660 202 L662.9 202.6 L665.8 203.1 L668.8 203.3 L671.7 203.4 L674.7 203.2 L677.6 202.9 L680.5 202.3 L683.4 201.6 L686.2 200.6 L689 199.5 L691.7 198.2 L694.3 196.8 L696.9 195.1 L699.3 193.3 L701.7 191.4 L703.9 189.3 L706 187.1 L708 184.7 L709.9 182.3 L711.6 179.7 L713.1 177 L714.6 174.2 L715.8 171.4 L716.9 168.5 L717.9 165.5 L718.6 162.5 L719.2 159.4 L719.7 156.3 L719.9 153.1 L720 150 Z" fill="var(--dg-accent-2)" fill-opacity="0.15" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <g stroke="var(--dg-ok)" stroke-width="1.4">
      <line x1="630" y1="150" x2="709" y2="97.6"/><line x1="630" y1="150" x2="709" y2="202.4"/>
    </g>
    <text x="705" y="86" font-size="11.5" font-weight="700" fill="var(--dg-ok)">3 dB 빔폭</text>
    <text x="688" y="154" font-size="12" font-weight="700" fill="var(--dg-accent-2)">주엽</text>
    <text x="588" y="140" font-size="11.5" fill="var(--text-2)">후엽</text>
    <g font-size="12" fill="var(--text-2)">
      <text x="130" y="268">모든 방향이 같음 = 무지향</text>
      <text x="380" y="268">축 방향(위·아래)은 방사 없음</text>
      <text x="630" y="268">한 방향으로 집중 = 높은 이득</text>
    </g>
    <g font-size="11" fill="var(--text-3)">
      <text x="130" y="285">(수평면 무지향, 약 2.15 dBi)</text>
      <text x="380" y="285">(8자 모양, 굵은 선 = 다이폴)</text>
      <text x="630" y="285">(패치·혼 안테나 등)</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 방사 패턴 극좌표 그림(바깥 원 0 dB, 안쪽 원 −10/−20 dB). 다이폴은 위에서 보면 원, 옆에서 보면 8자입니다. ③의 오른쪽이 가장 센 방향입니다.</figcaption>
</figure>

<ul>
  <li><strong>주엽(Main Lobe)</strong> — 가장 세게 방사하는 방향의 덩어리.</li>
  <li><strong>3 dB 빔폭(HPBW, Half-Power Beamwidth)</strong> — 최대값보다 3 dB(절반 전력) 낮아지는 두 방향 사이 각도. 이득이 클수록 빔폭이 좁습니다.</li>
  <li><strong>부엽·후엽(Side/Back Lobe)</strong> — 원하지 않는 방향으로 새는 작은 덩어리. 전후방비(F/B ratio)로 나타냅니다.</li>
  <li><strong>무지향(Omnidirectional)</strong> — 수평면에서 모든 방향으로 고르게 방사(다이폴, 모노폴). 공유기·휴대폰에 적합.</li>
  <li><strong>지향성(Directional)</strong> — 특정 방향으로 집중(패치, 혼, 야기, 접시). 기지국 섹터, 점대점 링크, 측정용 혼 안테나.</li>
</ul>

<div class="callout tip">
  <span class="callout-title">시험 현장에서</span>
  방사 시험에서 턴테이블로 EUT를 360° 돌리고 수신 안테나 높이를 바꾸며 최대값을 찾는 이유가 바로 방사 패턴 때문입니다. EUT가 어느 방향으로 가장 세게 내보내는지 모르기 때문에 “최악(최대) 방향”을 찾아 그 값을 판정에 씁니다.
</div>

<h2>편파(Polarization)</h2>
<p>전파의 전기장이 진동하는 방향을 <strong>편파</strong>라고 합니다. 다이폴을 세우면 <strong>수직 편파(Vertical)</strong>, 눕히면 <strong>수평 편파(Horizontal)</strong>입니다. GPS·위성처럼 전기장 방향이 회전하는 <strong>원편파(Circular)</strong>도 있습니다.</p>
<ul>
  <li>송·수신 안테나 편파가 90° 어긋나면(교차 편파) 이론적으로 거의 수신되지 않습니다. 실제로도 20 dB 이상 떨어질 수 있습니다.</li>
  <li>그래서 방사 방출·방사 출력 시험은 <strong>수평과 수직 편파 모두</strong> 측정하고 더 큰 값을 씁니다.</li>
</ul>
<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  편파는 “울타리 틈”과 같습니다. 줄넘기 줄을 위아래로 흔들면(수직 파동) 세로 틈 울타리는 통과하지만 가로 틈 울타리는 막힙니다. 안테나 방향을 맞춰야 신호가 잘 들어옵니다.
</div>

<h2>EIRP와 ERP</h2>
<p>무선기기의 출력 규제는 흔히 “안테나에 넣는 전력(전도 출력)”과 함께 “실제로 공간에 얼마나 세게 내보내는가”로 정해집니다. 이를 나타내는 값이 <strong>EIRP(Equivalent Isotropically Radiated Power, 등가 등방 복사 전력)</strong>입니다. “이 안테나의 최대 방향 세기를 등방성 안테나로 내려면 얼마의 전력이 필요한가”라는 뜻입니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="EIRP 계산 블록도">
  <defs><marker id="rfant-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="40" width="150" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <text x="95" y="66" font-weight="700">송신기 출력 P<tspan baseline-shift="sub" font-size="9">t</tspan></text>
    <text x="95" y="88" font-size="14" fill="var(--dg-accent)" font-weight="700">+20.0 dBm</text>
    <line x1="170" y1="72" x2="220" y2="72" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rfant-arw)"/>
    <rect x="224" y="40" width="150" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="299" y="66" font-weight="700">케이블·커넥터 손실</text>
    <text x="299" y="88" font-size="14" font-weight="700">− 1.5 dB</text>
    <line x1="374" y1="72" x2="424" y2="72" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rfant-arw)"/>
    <rect x="428" y="40" width="130" height="64" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="493" y="66" font-weight="700">안테나 이득</text>
    <text x="493" y="88" font-size="14" font-weight="700">+ 6.0 dBi</text>
    <g fill="none" stroke="var(--dg-accent-2)" stroke-width="2">
      <path d="M578 52 Q 592 72 578 92"/><path d="M596 42 Q 616 72 596 102"/><path d="M614 32 Q 640 72 614 112"/>
    </g>
    <line x1="558" y1="72" x2="574" y2="72" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="700" y="66" font-weight="700" fill="var(--dg-accent-2)">EIRP</text>
    <text x="700" y="88" font-size="15" font-weight="700" fill="var(--dg-accent-2)">+24.5 dBm</text>
    <rect x="80" y="132" width="600" height="54" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)"/>
    <text x="380" y="154" font-size="13.5">EIRP = P<tspan baseline-shift="sub" font-size="9">t</tspan> − L<tspan baseline-shift="sub" font-size="9">cable</tspan> + G<tspan baseline-shift="sub" font-size="9">ant</tspan> = 20.0 − 1.5 + 6.0 = <tspan font-weight="700" fill="var(--dg-ok)">+24.5 dBm (약 282 mW)</tspan></text>
    <text x="380" y="176" font-size="12" fill="var(--text-2)">ERP = EIRP − 2.15 = +22.35 dBm (다이폴 기준)</text>
  </g>
</svg>
<figcaption>그림 2. EIRP 계산. dB 단위 덕분에 더하고 빼기만 하면 됩니다.</figcaption>
</figure>

<div class="formula">EIRP(dBm) = P<sub>t</sub>(dBm) − L<sub>cable</sub>(dB) + G<sub>ant</sub>(dBi)      ERP = EIRP − 2.15 dB</div>
<p>ERP(Effective Radiated Power)는 기준이 다이폴이므로 EIRP보다 2.15 dB 작습니다. 규격이 EIRP와 ERP 중 무엇으로 한계를 정했는지 반드시 확인하세요. 같은 기기라도 기준을 잘못 쓰면 2.15 dB 차이가 납니다.</p>

<div class="callout note">
  <span class="callout-title">규정 예시</span>
  미국 FCC Part 15.247(2.4 GHz 등 DTS)은 전도 출력 한계를 1 W로 두되, 일반 용도에서 안테나 이득이 6 dBi를 넘으면 초과분만큼 전도 출력을 낮추도록 합니다. 즉 사실상 EIRP를 제한하는 구조입니다. 국내 기술기준도 대역·용도별로 출력·EIRP·전력밀도 등을 정하고 있으니 최신 고시를 확인하세요. 이런 이유로 <strong>안테나 이득 값(제조사 제출 자료)</strong>은 성적서의 중요한 입력값입니다.
</div>

<p><a href="#/tools">RF 계산기</a>의 EIRP 계산으로 연습해 보세요. 예: P<sub>t</sub> = +17 dBm, 케이블 0.8 dB, 안테나 3 dBi → EIRP = +19.2 dBm.</p>

<h2>근거리장과 원거리장</h2>
<p>안테나 바로 옆에서는 전기장과 자기장의 관계가 복잡하고 거리에 따라 세기가 급격히 변합니다. 충분히 멀어져야 전파가 “평평한 물결(평면파)”처럼 되어, 거리만 알면 세기를 예측할 수 있습니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 170" role="img" aria-label="근거리장과 원거리장 영역">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="50" y="30" width="100" height="90" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="150" y="30" width="250" height="90" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <rect x="400" y="30" width="340" height="90" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="30" y1="45" x2="30" y2="105" stroke="var(--text)" stroke-width="5"/>
    <text x="12" y="136" text-anchor="start" font-size="11.5" fill="var(--text-3)">안테나(크기 D)</text>
    <text x="100" y="66" font-weight="700">반응성</text><text x="100" y="84" font-weight="700">근거리장</text>
    <text x="275" y="66" font-weight="700">방사 근거리장</text><text x="275" y="84" font-size="11.5" fill="var(--text-2)">(프레넬 영역)</text>
    <text x="570" y="58" font-weight="700" fill="var(--dg-accent)">원거리장 (프라운호퍼 영역)</text>
    <g fill="none" stroke="var(--dg-accent)" stroke-width="1.5">
      <path d="M470 70 Q 476 90 470 110"/><path d="M530 70 Q 534 90 530 110"/><path d="M590 70 Q 593 90 590 110"/><path d="M650 70 Q 652 90 650 110"/><path d="M710 70 L 710 110"/>
    </g>
    <text x="150" y="140" font-size="12" fill="var(--dg-accent-2)" font-weight="700">≈ λ / 2π</text>
    <text x="400" y="140" font-size="12" fill="var(--dg-accent-2)" font-weight="700">2D² / λ</text>
    <text x="570" y="160" font-size="11.5" fill="var(--text-2)">파면이 거의 평면 → 세기가 거리에 반비례, 패턴 모양이 일정</text>
    <text x="275" y="160" font-size="11.5" fill="var(--text-2)">거리에 따라 패턴 모양이 변함</text>
  </g>
</svg>
<figcaption>그림 3. 거리에 따른 영역 구분(비율은 개념적). 경계는 파장과 안테나 크기로 정해집니다.</figcaption>
</figure>

<div class="formula">원거리장 조건(대표적): R ≥ 2D² / λ   (그리고 R ≫ λ, R ≫ D)</div>
<ul>
  <li>D = 0.15 m 안테나, 2.4 GHz(λ = 0.125 m) → 2 × 0.15² / 0.125 = <strong>0.36 m</strong></li>
  <li>D = 0.3 m 혼 안테나, 18 GHz(λ ≈ 0.0167 m) → 2 × 0.09 / 0.0167 ≈ <strong>10.8 m</strong> — 고주파·큰 안테나는 원거리장 거리가 매우 길어집니다.</li>
  <li>30 MHz(λ = 10 m)에서는 3 m 거리가 한 파장도 안 됩니다. 저주파 방사 측정은 근거리 영향이 섞일 수 있다는 점을 기억하세요.</li>
</ul>
<p>SAR 시험은 반대로 인체가 안테나 바로 옆(근거리장)에 있는 상황을 다루기 때문에, 전계강도 계산 대신 인체 모형 속 전계를 직접 측정합니다.</p>

<h2>안테나 인자(AF)와 전계강도</h2>
<p>EMC 방사 방출이나 방사 스퓨리어스 시험은 공간의 <strong>전계강도 E(dBµV/m)</strong>를 한계값과 비교합니다. 그런데 수신기(또는 분석기)가 재는 것은 케이블 끝의 <strong>전압 V(dBµV)</strong>입니다. 이 둘을 잇는 값이 <strong>안테나 인자(AF, Antenna Factor)</strong>입니다.</p>
<div class="formula">E(dBµV/m) = V(dBµV) + AF(dB/m) + 케이블 손실(dB) − 프리앰프 이득(dB, 사용 시)</div>

<figure class="diagram">
<svg viewBox="0 0 760 150" role="img" aria-label="전계강도 측정 경로와 안테나 인자">
  <defs><marker id="rfant-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <g fill="none" stroke="var(--dg-accent-2)" stroke-width="1.8"><path d="M30 35 Q 44 60 30 85"/><path d="M50 35 Q 64 60 50 85"/><path d="M70 35 Q 84 60 70 85"/></g>
    <text x="55" y="110" font-weight="700" fill="var(--dg-accent-2)">전계 E</text>
    <text x="55" y="127" font-size="11.5" fill="var(--text-3)">55.5 dBµV/m</text>
    <rect x="120" y="30" width="170" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.6"/>
    <text x="205" y="55" font-weight="700">수신 안테나</text><text x="205" y="75" font-size="12" fill="var(--text-2)">AF = 18.3 dB/m</text>
    <line x1="290" y1="60" x2="340" y2="60" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rfant-arw2)"/>
    <rect x="344" y="30" width="150" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="419" y="55" font-weight="700">케이블</text><text x="419" y="75" font-size="12" fill="var(--text-2)">손실 2.2 dB</text>
    <line x1="494" y1="60" x2="544" y2="60" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rfant-arw2)"/>
    <rect x="548" y="30" width="190" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.6"/>
    <text x="643" y="55" font-weight="700">EMI 수신기</text><text x="643" y="75" font-size="12" fill="var(--text-2)">읽음 V = 35.0 dBµV</text>
    <text x="440" y="125" font-size="13">E = 35.0 + 18.3 + 2.2 = <tspan font-weight="700" fill="var(--dg-ok)">55.5 dBµV/m</tspan></text>
  </g>
</svg>
<figcaption>그림 4. 수신기 전압에 안테나 인자와 케이블 손실을 더해 전계강도를 구합니다(수치는 예시).</figcaption>
</figure>

<ul>
  <li>AF는 주파수마다 다르며, 측정 안테나의 <strong>교정 성적서</strong>에 주파수별 표로 주어집니다. 측정 주파수 사이 값은 보간합니다.</li>
  <li>AF와 이득의 관계(50 Ω, 원거리장 근사): <em>AF(dB/m) ≈ 20·log f(MHz) − G(dBi) − 29.79</em>. 예: 1 GHz, 10 dBi 혼 → 60 − 10 − 29.79 ≈ 20.2 dB/m. 주파수가 높을수록 AF가 커집니다.</li>
  <li>대표적인 측정 안테나: 루프(9 kHz~30 MHz, 자계), 바이코니컬(약 30~300 MHz), 로그주기(약 200 MHz~1 GHz 이상), 이를 합친 하이브리드(바이로그), 혼(1 GHz 이상). 대역은 제품마다 다르므로 교정 성적서의 범위를 확인합니다.</li>
</ul>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  ① AF 표를 다른 안테나(시리얼 번호 다름)의 것으로 적용 ② 프리앰프를 켜 놓고 이득을 빼지 않음 ③ 교정 유효기간이 지난 AF 사용 ④ 수평/수직 편파 중 한쪽만 측정. 기록지에는 안테나 모델·시리얼·교정일·적용한 보정값 파일명을 남기세요.
</div>
`,
  quiz: [
    { q: '안테나 이득이 7.15 dBi이다. dBd로 나타내면?',
      options: ['9.30 dBd', '5.00 dBd', '7.15 dBd', '4.85 dBd'],
      answer: 1, explain: 'G(dBd) = G(dBi) − 2.15 = 5.00 dBd입니다.' },
    { q: '송신기 출력 +23 dBm, 케이블 손실 2 dB, 안테나 이득 5 dBi일 때 EIRP는?',
      options: ['+30 dBm', '+26 dBm', '+21 dBm', '+16 dBm'],
      answer: 1, explain: 'EIRP = 23 − 2 + 5 = +26 dBm입니다.' },
    { q: '안테나 크기 D = 0.2 m, 주파수 6 GHz(λ = 0.05 m)일 때 원거리장 시작 거리(2D²/λ)는?',
      options: ['0.8 m', '0.16 m', '8 m', '1.6 m'],
      answer: 3, explain: '2 × 0.2² / 0.05 = 2 × 0.04 / 0.05 = 1.6 m입니다.' },
    { q: 'EMI 수신기 읽음 40.0 dBµV, 안테나 인자 15.5 dB/m, 케이블 손실 3.0 dB, 프리앰프 없음. 전계강도는?',
      options: ['21.5 dBµV/m', '52.5 dBµV/m', '58.5 dBµV/m', '55.5 dBµV/m'],
      answer: 2, explain: 'E = V + AF + 케이블 손실 = 40.0 + 15.5 + 3.0 = 58.5 dBµV/m입니다.' },
    { q: '방사 시험에서 수평·수직 편파를 모두 측정하는 이유는?',
      options: ['EUT의 방사 편파를 미리 알 수 없고, 편파가 어긋나면 크게 작게 측정되기 때문', '측정 시간을 늘리기 위해', '수평 편파에서만 AF가 정의되기 때문', '규정상 평균을 내야 하기 때문'],
      answer: 0, explain: '편파가 어긋나면 수신 레벨이 크게 떨어지므로, 두 편파를 모두 측정해 최대값을 찾습니다.' }
  ],
  refs: [
    { title: 'ETS-Lindgren — 측정 안테나', url: 'https://www.ets-lindgren.com', note: '바이코니컬, 로그주기, 혼 안테나 제품·AF 자료' },
    { title: 'FCC KDB', url: 'https://apps.fcc.gov/oetcf/kdb/', note: '출력·EIRP 측정 관련 지침' },
    { title: 'IEC Webstore — CISPR 16 시리즈', url: 'https://webstore.iec.ch', note: '방사 측정 장비·방법(측정 안테나, 시험장) 표준' }
  ]
});

COURSE.addLesson({
  id: 'rf-propagation',
  module: 'rf',
  order: 6,
  title: '전파의 전파(傳播)와 간섭',
  minutes: 25,
  level: '중급',
  summary: '전파가 거리에 따라 약해지는 정도(자유공간 손실), 반사·회절·다중경로, 그리고 동일채널·인접채널·스퓨리어스·상호변조 간섭을 이해하고 규제(마스크, 스퓨리어스 한계)가 왜 필요한지 연결합니다.',
  objectives: [
    '자유공간 경로 손실(FSPL) 식으로 거리·주파수에 따른 손실을 계산할 수 있다.',
    'EIRP와 거리로 전계강도를 추정할 수 있다.',
    '반사·회절·다중경로가 측정에 미치는 영향과 시험장 설계의 관계를 안다.',
    '간섭 유형(동일채널, 인접채널, 스퓨리어스, 상호변조)과 이를 막는 규제 항목을 연결할 수 있다.'
  ],
  body: `
<h2>거리가 멀어지면 왜 약해질까?</h2>
<p>전파는 안테나에서 풍선이 부풀듯 사방으로 퍼져 나갑니다. 같은 에너지가 점점 더 넓은 구의 표면에 나누어지므로, 단위 면적당 세기는 <strong>거리의 제곱에 반비례</strong>합니다. 거리가 2배가 되면 면적은 4배 → 세기는 1/4(−6 dB), 거리가 10배가 되면 1/100(−20 dB)입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  분무기로 물을 뿌리면 가까운 벽은 흠뻑 젖지만, 멀리 있는 벽에는 물방울이 드문드문 닿습니다. 물의 총량은 같아도 넓게 퍼지기 때문입니다. 전파도 “사라지는” 것이 아니라 “퍼져서 묽어지는” 것입니다.
</div>

<h2>자유공간 경로 손실(FSPL)</h2>
<p>장애물이 없는 공간에서 송신 안테나(0 dBi)와 수신 안테나(0 dBi) 사이의 손실을 <strong>자유공간 경로 손실(FSPL, Free Space Path Loss)</strong>이라고 합니다.</p>
<div class="formula">FSPL(dB) = 20·log<sub>10</sub>(4πd / λ) = 20·log<sub>10</sub>(d<sub>km</sub>) + 20·log<sub>10</sub>(f<sub>MHz</sub>) + 32.44</div>
<p>주파수가 들어가 있는 이유는 수신 안테나의 “받는 면적(유효 개구면)”이 파장의 제곱에 비례하기 때문입니다. 주파수가 높으면 같은 0 dBi 안테나라도 크기가 작아져 덜 받습니다.</p>

<ol class="steps">
  <li><strong>2.4 GHz, 1 m</strong>20·log(0.001) + 20·log(2400) + 32.44 = −60 + 67.6 + 32.44 ≈ <strong>40.0 dB</strong></li>
  <li><strong>2.4 GHz, 3 m</strong>40.0 + 20·log(3) = 40.0 + 9.5 ≈ <strong>49.6 dB</strong></li>
  <li><strong>2.4 GHz, 10 m</strong>40.0 + 20 = <strong>60.0 dB</strong></li>
  <li><strong>5.8 GHz, 3 m</strong>2.4 GHz보다 20·log(5.8/2.4) ≈ 7.7 dB 더 큼 → 약 <strong>57.3 dB</strong></li>
</ol>

<div class="table-wrap"><table class="data">
<thead><tr><th>거리</th><th class="num">900 MHz</th><th class="num">2.4 GHz</th><th class="num">5.8 GHz</th><th class="num">28 GHz</th></tr></thead>
<tbody>
<tr><td>1 m</td><td class="num">31.5 dB</td><td class="num">40.0 dB</td><td class="num">47.7 dB</td><td class="num">61.4 dB</td></tr>
<tr><td>3 m</td><td class="num">41.1 dB</td><td class="num">49.6 dB</td><td class="num">57.3 dB</td><td class="num">70.9 dB</td></tr>
<tr><td>10 m</td><td class="num">51.5 dB</td><td class="num">60.0 dB</td><td class="num">67.7 dB</td><td class="num">81.4 dB</td></tr>
<tr><td>100 m</td><td class="num">71.5 dB</td><td class="num">80.0 dB</td><td class="num">87.7 dB</td><td class="num">101.4 dB</td></tr>
</tbody></table></div>
<p>규칙: <strong>거리 2배 → +6 dB</strong>, <strong>거리 10배 → +20 dB</strong>, <strong>주파수 2배 → +6 dB</strong>.</p>

<h3>EIRP로 전계강도 추정하기</h3>
<p>방사 시험에서는 EUT의 EIRP와 측정 거리로 전계강도를 미리 어림할 수 있고, 반대로 측정한 전계강도로 EIRP를 역산하기도 합니다(원거리장, 자유공간 가정).</p>
<div class="formula">E(V/m) = √(30 · EIRP(W)) / d(m)      ⇔      E(dBµV/m) ≈ EIRP(dBm) − 20·log<sub>10</sub>d(m) + 104.77</div>
<p>예: EIRP +20 dBm(0.1 W), 3 m → E = √3 / 3 ≈ 0.577 V/m ≈ <strong>115.2 dBµV/m</strong>. 식으로도 20 − 9.54 + 104.77 ≈ 115.2 dBµV/m로 같습니다. <a href="#/tools">RF 계산기</a>에서 확인해 보세요.</p>

<h2>반사 · 회절 · 다중경로</h2>
<ul>
  <li><strong>반사(Reflection)</strong> — 금속·벽·바닥에 부딪혀 튕겨 나감. 금속은 거의 100 % 반사합니다.</li>
  <li><strong>회절(Diffraction)</strong> — 건물 모서리나 언덕 너머로 돌아 들어감. 파장이 길수록(저주파) 잘 일어납니다.</li>
  <li><strong>산란(Scattering)</strong> — 나뭇잎·빗방울처럼 파장과 비슷하거나 작은 물체에 부딪혀 여러 방향으로 흩어짐.</li>
  <li><strong>투과·흡수</strong> — 벽·유리·인체를 통과하며 약해짐. 고주파일수록 흡수가 큽니다.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="다중경로 전파와 보강 상쇄 간섭">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="200" y="20" width="160" height="30" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="280" y="40" font-size="12" fill="var(--text-2)">건물 A (반사면)</text>
    <rect x="200" y="210" width="160" height="30" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="280" y="230" font-size="12" fill="var(--text-2)">건물 B / 바닥</text>
    <line x1="60" y1="108" x2="60" y2="150" stroke="var(--text)" stroke-width="3"/>
    <path d="M50 108 L70 108 L60 96 z" fill="var(--text)"/>
    <text x="60" y="170" font-weight="700">송신</text>
    <rect x="494" y="116" width="16" height="30" rx="3" fill="none" stroke="var(--text)" stroke-width="2"/>
    <text x="502" y="170" font-weight="700">수신</text>
    <line x1="66" y1="128" x2="490" y2="130" stroke="var(--dg-accent)" stroke-width="2.4"/>
    <text x="280" y="122" font-weight="700" fill="var(--dg-accent)">직접파</text>
    <path d="M66 124 L280 50 L490 124" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.8" stroke-dasharray="6 4"/>
    <path d="M66 134 L280 210 L490 136" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.8" stroke-dasharray="6 4"/>
    <text x="120" y="84" fill="var(--dg-accent-2)" font-weight="700">반사파 ①</text>
    <text x="120" y="188" fill="var(--dg-accent-2)" font-weight="700">반사파 ②</text>
    <text x="470" y="200" font-size="11.5" fill="var(--text-3)">경로가 길다 → 늦게 도착</text>
    <line x1="560" y1="20" x2="560" y2="240" stroke="var(--dg-line)" stroke-dasharray="4 4"/>
    <text x="665" y="30" font-weight="700" fill="var(--dg-ok)">같은 위상 → 보강</text>
    <path d="M590 80 Q605 56 620 80 T650 80 T680 80 T710 80 T740 80" fill="none" stroke="var(--dg-muted)" stroke-width="1.2"/>
    <path d="M590 80 Q605 32 620 80 T650 80 T680 80 T710 80 T740 80" fill="none" stroke="var(--dg-ok)" stroke-width="2.4"/>
    <text x="665" y="128" font-size="11.5" fill="var(--text-3)">두 파의 합 = 신호 커짐</text>
    <text x="665" y="152" font-weight="700" fill="var(--dg-accent-2)">반대 위상 → 상쇄</text>
    <path d="M590 190 Q605 166 620 190 T650 190 T680 190 T710 190 T740 190" fill="none" stroke="var(--dg-muted)" stroke-width="1.2"/>
    <path d="M590 190 Q605 214 620 190 T650 190 T680 190 T710 190 T740 190" fill="none" stroke="var(--dg-muted)" stroke-width="1.2"/>
    <line x1="590" y1="190" x2="740" y2="190" stroke="var(--dg-accent-2)" stroke-width="2.4"/>
    <text x="665" y="232" font-size="11.5" fill="var(--text-3)">합 ≈ 0 → 페이딩(신호 급감)</text>
  </g>
</svg>
<figcaption>그림 1. 다중경로. 여러 경로로 온 전파가 수신점에서 더해지며, 위상에 따라 강해지거나(보강) 약해집니다(상쇄, 페이딩).</figcaption>
</figure>

<p>수신 안테나를 몇 cm만 옮겨도 신호가 크게 변하는 현상이 이 때문입니다. 다중경로는 이동통신에서는 OFDM·MIMO로 극복하는 대상이지만, <strong>시험소에서는 측정 오차의 원인</strong>입니다.</p>

<div class="callout note">
  <span class="callout-title">시험장과의 연결</span>
  <strong>전자파 무반사실(Anechoic Chamber)</strong>의 벽을 흡수체로 덮는 이유는 반사파를 없애 “자유공간”을 흉내 내기 위해서입니다. 반대로 EMC 방사 방출 시험장(OATS, 반무반사실 SAC)은 바닥을 금속 접지면으로 두어 <em>바닥 반사를 일부러 포함</em>하고, 수신 안테나 높이를 대표적으로 1~4 m 범위에서 바꿔(높이 스캔) 직접파와 바닥 반사파가 보강되는 최대값을 찾습니다. 시험장 성능은 NSA·사이트 VSWR 같은 검증 시험으로 확인합니다.
</div>

<h2>간섭의 종류</h2>
<p><strong>간섭(Interference)</strong>은 원하지 않는 신호가 원하는 신호의 수신을 방해하는 것입니다. 인증 시험의 많은 항목은 “내 기기가 남에게 간섭을 주지 않는가”를 확인합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 245" role="img" aria-label="스펙트럼 마스크와 스퓨리어스 한계, 간섭 성분">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <line x1="40" y1="210" x2="740" y2="210" stroke="var(--dg-muted)"/>
    <text x="738" y="226" text-anchor="end" font-size="11.5" fill="var(--text-3)">주파수 →</text>
    <path d="M40 165 L200 165 L200 120 L240 120 L240 45 L360 45 L360 120 L400 120 L400 165 L740 165" fill="none" stroke="var(--dg-ok)" stroke-width="2" stroke-dasharray="7 4"/>
    <text x="300" y="36" font-weight="700" fill="var(--dg-ok)">스펙트럼 마스크(채널 근처 한계)</text>
    <text x="110" y="157" font-weight="700" fill="var(--dg-ok)">스퓨리어스 한계</text>
    <path d="M195 205 C 238 200, 245 62, 266 62 L 334 62 C 355 62, 362 200, 405 205" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <text x="300" y="110" font-weight="700" fill="var(--dg-accent)">우리 채널</text>
    <text x="300" y="228" fill="var(--dg-accent)">f₀</text>
    <path d="M405 205 C 420 200, 430 190, 440 188 C 452 190, 470 202, 500 205" fill="none" stroke="var(--dg-accent)" stroke-width="1.4" stroke-dasharray="3 3"/>
    <text x="455" y="228" fill="var(--text-2)">인접 채널</text>
    <text x="462" y="180" font-size="11" fill="var(--text-3)">누설(ACLR)</text>
    <line x1="540" y1="205" x2="540" y2="140" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <text x="540" y="130" font-weight="700" fill="var(--dg-accent-2)">스퓨리어스 — 한계 초과!</text>
    <line x1="660" y1="205" x2="660" y2="182" stroke="var(--dg-accent)" stroke-width="3"/>
    <text x="660" y="152" font-size="11.5" fill="var(--text-2)">고조파(한계 이하)</text>
    <text x="660" y="228" fill="var(--text-2)">2f₀</text>
  </g>
</svg>
<figcaption>그림 2. 송신 신호의 스펙트럼과 규제 한계(개념도). 채널 근처는 마스크, 멀리 떨어진 곳은 스퓨리어스 한계로 관리합니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>간섭 유형</th><th>설명</th><th>관련 시험 항목(예)</th></tr></thead>
<tbody>
<tr><td>동일채널 간섭 (Co-channel)</td><td>같은 주파수를 쓰는 다른 송신기가 섞임</td><td>주파수 허용편차, 출력 제한, LBT/DFS 등 공유 규칙</td></tr>
<tr><td>인접채널 간섭 (Adjacent Channel)</td><td>내 신호의 “치맛자락”이 옆 채널로 새어 나감</td><td>점유대역폭, 스펙트럼 마스크, ACLR/ACP</td></tr>
<tr><td>스퓨리어스 (Spurious Emission)</td><td>필요 대역 밖에 생기는 불필요 성분: 고조파, 국부발진기(LO) 누설, 혼변조 등</td><td>불요 발사(전도·방사 스퓨리어스)</td></tr>
<tr><td>상호변조 (Intermodulation)</td><td>두 개 이상의 신호가 비선형 소자에서 섞여 새 주파수(2f₁−f₂ 등) 생성</td><td>송신 상호변조, 수신기 특성, 다중 송신 동시 시험</td></tr>
<tr><td>수신 둔감·차단 (Blocking)</td><td>근처의 강한 신호 때문에 내 수신기 감도가 떨어짐</td><td>수신 차단 특성, 수신기 성능(예: ETSI 규격의 Receiver Blocking)</td></tr>
</tbody></table></div>

<h3>상호변조(IMD) 한눈에 보기</h3>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="두 신호의 3차 상호변조 성분">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <line x1="120" y1="200" x2="640" y2="200" stroke="var(--dg-muted)"/>
    <g stroke="var(--dg-accent)" stroke-width="4"><line x1="350" y1="200" x2="350" y2="40"/><line x1="410" y1="200" x2="410" y2="40"/></g>
    <g stroke="var(--dg-accent-2)" stroke-width="3"><line x1="290" y1="200" x2="290" y2="140"/><line x1="470" y1="200" x2="470" y2="140"/></g>
    <g stroke="var(--dg-muted)" stroke-width="2.5"><line x1="230" y1="200" x2="230" y2="178"/><line x1="530" y1="200" x2="530" y2="178"/></g>
    <g font-weight="700"><text x="350" y="218" fill="var(--dg-accent)">f₁</text><text x="410" y="218" fill="var(--dg-accent)">f₂</text>
      <text x="290" y="218" fill="var(--dg-accent-2)">2f₁−f₂</text><text x="470" y="218" fill="var(--dg-accent-2)">2f₂−f₁</text>
      <text x="230" y="218" fill="var(--text-3)">3f₁−2f₂</text><text x="530" y="218" fill="var(--text-3)">3f₂−2f₁</text></g>
    <g font-size="11.5" fill="var(--text-3)"><text x="350" y="236">100 MHz</text><text x="410" y="236">101 MHz</text><text x="290" y="236">99 MHz</text><text x="470" y="236">102 MHz</text><text x="230" y="236">98 MHz</text><text x="530" y="236">103 MHz</text></g>
    <text x="560" y="120" text-anchor="start" font-size="12" fill="var(--dg-accent-2)" font-weight="700">3차 IMD</text>
    <text x="560" y="137" text-anchor="start" font-size="11.5" fill="var(--text-2)">원래 신호 바로 옆에 생겨</text>
    <text x="560" y="153" text-anchor="start" font-size="11.5" fill="var(--text-2)">필터로 걸러내기 어렵다</text>
    <text x="150" y="160" text-anchor="start" font-size="11.5" fill="var(--text-3)">5차 IMD(더 작음)</text>
  </g>
</svg>
<figcaption>그림 3. 100 MHz와 101 MHz 두 신호가 비선형 소자(증폭기, 믹서, 녹슨 접점 등)를 지나면 99·102 MHz 등에 새 성분이 생깁니다.</figcaption>
</figure>

<div class="callout tip">
  <span class="callout-title">현장 팁: 진짜 신호일까, 분석기가 만든 가짜일까?</span>
  강한 신호가 스펙트럼 분석기에 들어가면 분석기 내부 믹서에서 고조파·상호변조가 생겨 <strong>EUT에 없는 스퓨리어스</strong>가 화면에 보일 수 있습니다. 확인 방법: 분석기 입력 감쇠(ATT)를 10 dB 올려 보세요. 진짜 신호는 표시 레벨이 그대로(분석기가 자동 보정), 분석기 내부에서 생긴 가짜는 레벨이 크게 변하거나 사라집니다. 필요하면 노치 필터·고역통과 필터로 기본파를 줄이고 측정합니다.
</div>

<h2>그래서 규제가 필요합니다</h2>
<p>한정된 주파수를 많은 사람이 함께 쓰려면 모든 송신기가 <strong>“내 차선 안에서, 정해진 세기로, 옆·먼 차선에 흘리지 않고”</strong> 동작해야 합니다. 규격의 시험 항목은 이 원칙에 그대로 대응합니다.</p>
<ul>
  <li><strong>주파수 허용편차</strong> → 내 차선 중앙을 지키는가</li>
  <li><strong>출력·EIRP·전력밀도</strong> → 너무 세게 쏘지 않는가(동일채널 간섭 범위 제한)</li>
  <li><strong>점유대역폭·스펙트럼 마스크</strong> → 차선 폭을 넘지 않는가(인접채널 보호)</li>
  <li><strong>스퓨리어스 한계</strong> → 멀리 떨어진 다른 서비스(항공·위성·GNSS 등)를 보호하는가. 한계값은 규격·대역에 따라 다르므로(예: −30 dBm, −36 dBm 등) 반드시 해당 기술기준을 확인합니다.</li>
  <li><strong>수신기 특성(차단, 선택도 등)</strong> → 내 기기가 주변 신호에 너무 쉽게 방해받지 않는가(특히 유럽 RED 규격에서 강조)</li>
</ul>
`,
  quiz: [
    { q: '자유공간에서 측정 거리를 3 m에서 6 m로 늘리면 수신 레벨은 약 몇 dB 변하는가?',
      options: ['약 3 dB 감소', '약 6 dB 감소', '약 9.5 dB 감소', '변화 없음'],
      answer: 1, explain: '거리 2배 → 20·log(2) ≈ 6 dB 추가 손실입니다.' },
    { q: '2.4 GHz에서 1 m 자유공간 손실이 약 40 dB라면, 같은 주파수에서 100 m 손실은?',
      options: ['약 60 dB', '약 140 dB', '약 4000 dB', '약 80 dB'],
      answer: 3, explain: '거리 100배 → 20·log(100) = 40 dB 추가 → 약 80 dB입니다.' },
    { q: '두 신호 f₁ = 2440 MHz, f₂ = 2450 MHz에서 생기는 3차 상호변조 성분으로 옳은 것은?',
      options: ['2430 MHz와 2460 MHz', '4890 MHz', '10 MHz', '2445 MHz'],
      answer: 0, explain: '2f₁−f₂ = 4880−2450 = 2430 MHz, 2f₂−f₁ = 4900−2440 = 2460 MHz입니다.' },
    { q: '분석기 화면에 스퓨리어스가 보인다. 입력 감쇠(ATT)를 10 dB 올렸더니 그 신호가 사라졌다. 가장 가능성 높은 해석은?',
      options: ['EUT가 간헐적으로 스퓨리어스를 낸다', '케이블 손실이 10 dB 늘었다', '분석기 내부 과입력으로 생긴 가짜 신호였다', '규격 한계를 만족한다는 뜻이다'],
      answer: 2, explain: '진짜 신호는 ATT를 바꿔도 표시 레벨이 유지됩니다. 사라지거나 크게 변하면 분석기 내부 비선형으로 생긴 성분일 가능성이 큽니다.' }
  ],
  refs: [
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: 'EN 300 328 등 무선기기 규격(마스크, 스퓨리어스, 수신기 차단)' },
    { title: 'IEC Webstore — CISPR 16', url: 'https://webstore.iec.ch', note: '시험장(OATS/SAC) 검증과 높이 스캔 등 측정 방법' }
  ]
});

COURSE.addLesson({
  id: 'rf-tech',
  module: 'rf',
  order: 7,
  title: '무선 기술별 핵심 요약 — 시험에서 만나는 기술들',
  minutes: 30,
  level: '중급',
  summary: 'Wi-Fi, Bluetooth, LTE/5G NR, NFC/RFID, UWB, LoRa 등 인증 시험에서 자주 만나는 기술의 주파수·대역폭·변조 특징과, 각 기술을 시험할 때 신경 써야 할 점을 한눈에 정리합니다.',
  objectives: [
    '주요 무선 기술의 사용 주파수와 채널 대역폭을 비교할 수 있다.',
    'Wi-Fi 세대(802.11b/g/n/ac/ax/be)별 특징을 구분할 수 있다.',
    'Bluetooth BR/EDR와 LE, 주파수 도약(FHSS)의 개념을 설명할 수 있다.',
    '기술별로 시험 셋업·모드 설정에서 주의할 점을 안다.'
  ],
  body: `
<h2>주파수 지도로 보는 무선 기술</h2>
<p>시료 접수 때 “이 제품에 어떤 무선 기술이 들어 있나?”를 파악하는 것이 시험 계획의 첫걸음입니다. 스마트워치 하나에도 Bluetooth LE, Wi-Fi, NFC, LTE, GNSS 수신기가 함께 들어 있을 수 있습니다. 먼저 전체 지도를 보고 기술별로 자세히 살펴봅시다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 318" role="img" aria-label="무선 기술별 사용 주파수 지도(로그 눈금)">
  <g font-size="12.5" fill="var(--text)">
    <g stroke="var(--dg-line)" stroke-width="0.8" stroke-dasharray="3 4">
      <line x1="150" y1="14" x2="150" y2="292"/><line x1="297.5" y1="14" x2="297.5" y2="292"/><line x1="445" y1="14" x2="445" y2="292"/><line x1="592.5" y1="14" x2="592.5" y2="292"/><line x1="740" y1="14" x2="740" y2="292"/>
    </g>
    <line x1="150" y1="292" x2="740" y2="292" stroke="var(--dg-muted)" stroke-width="1.2"/>
    <g font-size="11.5" fill="var(--text-3)" text-anchor="middle">
      <text x="150" y="308">10 MHz</text><text x="297.5" y="308">100 MHz</text><text x="445" y="308">1 GHz</text><text x="592.5" y="308">10 GHz</text><text x="752" y="308" text-anchor="end">100 GHz</text>
    </g>
    <g font-weight="700">
      <text x="12" y="34">NFC</text><text x="12" y="64">UHF RFID · LoRa</text><text x="12" y="94">LTE</text><text x="12" y="124">5G NR FR1</text>
      <text x="12" y="154">Bluetooth · Zigbee</text><text x="12" y="184">Wi-Fi</text><text x="12" y="214">UWB</text><text x="12" y="244">5G NR FR2</text><text x="12" y="274">차량 레이더</text>
    </g>
    <g fill="var(--dg-accent)">
      <rect x="166" y="23" width="7" height="14" rx="2"/>
      <rect x="436" y="53" width="7" height="14" rx="2"/>
      <rect x="422" y="83" width="86" height="14" rx="2"/>
      <rect x="388" y="113" width="183" height="14" rx="2" fill-opacity="0.75"/>
      <rect x="498" y="143" width="7" height="14" rx="2"/>
      <rect x="498" y="173" width="7" height="14" rx="2"/><rect x="549" y="173" width="9" height="14" rx="2"/><rect x="560" y="173" width="11" height="14" rx="2"/>
    </g>
    <g fill="var(--dg-accent-2)">
      <rect x="517" y="203" width="79" height="14" rx="2" fill-opacity="0.75"/>
      <rect x="649" y="233" width="50" height="14" rx="2"/>
      <rect x="721" y="263" width="7" height="14" rx="2"/>
    </g>
    <g font-size="11" fill="var(--text-2)">
      <text x="181" y="34">13.56 MHz</text>
      <text x="451" y="64">900 MHz대 (국내 917~923.5 MHz 부근)</text>
      <text x="516" y="94">약 0.7~2.7 GHz (국내 주요 밴드)</text>
      <text x="579" y="124">~7.125 GHz (국내 3.5 GHz)</text>
      <text x="513" y="154">2400~2483.5 MHz</text>
      <text x="579" y="184">2.4 / 5 / 6 GHz</text>
      <text x="604" y="214">3.1~10.6 GHz (FCC 기준)</text>
      <text x="641" y="244" text-anchor="end">24.25~52.6 GHz (국내 28 GHz)</text>
      <text x="713" y="274" text-anchor="end">76~81 GHz</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 주요 무선 기술의 주파수 위치(로그 눈금, 대략적). 2.4 GHz 부근에 Wi-Fi·Bluetooth·Zigbee가 모여 있는 것에 주목하세요.</figcaption>
</figure>

<h2>한눈에 보는 비교표</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>기술</th><th>주요 주파수</th><th>채널 대역폭</th><th>변조·접속 방식</th><th>대표 출력 수준</th><th>통신 거리</th></tr></thead>
<tbody>
<tr><td>Wi-Fi</td><td>2.4 / 5 / 6 GHz</td><td>20 / 40 / 80 / 160 / 320 MHz</td><td>DSSS(11b), OFDM, OFDMA(11ax 이후)</td><td>대략 +15~+20 dBm대</td><td>수십 m</td></tr>
<tr><td>Bluetooth BR/EDR</td><td>2.4 GHz</td><td>1 MHz × 79채널</td><td>GFSK, π/4-DQPSK, 8DPSK / FHSS</td><td>Class 1: +20 dBm, Class 2: +4 dBm</td><td>~10 m(클래스별 상이)</td></tr>
<tr><td>Bluetooth LE</td><td>2.4 GHz</td><td>2 MHz 간격 × 40채널</td><td>GFSK(1M/2M PHY, Coded PHY)</td><td>대개 0~+10 dBm (최대 +20 dBm)</td><td>수 m~수십 m</td></tr>
<tr><td>Zigbee·Thread (IEEE 802.15.4)</td><td>2.4 GHz(채널 11~26)</td><td>2 MHz (5 MHz 간격)</td><td>O-QPSK, DSSS</td><td>0~+10 dBm 수준</td><td>수십 m (메시)</td></tr>
<tr><td>LTE</td><td>밴드별 (예: 850 MHz, 1.8, 2.1, 2.6 GHz)</td><td>1.4 / 3 / 5 / 10 / 15 / 20 MHz</td><td>하향 OFDMA, 상향 SC-FDMA / FDD·TDD</td><td>단말 최대 약 +23 dBm (Power Class 3)</td><td>km</td></tr>
<tr><td>5G NR</td><td>FR1(예: n78 3.5 GHz), FR2(예: n257 28 GHz)</td><td>FR1 최대 100 MHz, FR2 최대 400 MHz</td><td>CP-OFDM(상향 DFT-s-OFDM 포함) / 주로 TDD</td><td>FR1 단말 약 +23 dBm(클래스별), FR2는 EIRP로 규정</td><td>수백 m~km</td></tr>
<tr><td>NFC</td><td>13.56 MHz</td><td>수백 kHz 이내(부반송파 포함)</td><td>ASK, 부하 변조(자기장 결합)</td><td>자계 세기로 표현</td><td>수 cm</td></tr>
<tr><td>UHF RFID</td><td>900 MHz대</td><td>수백 kHz 채널</td><td>ASK/PR-ASK, 후방산란 / FHSS 또는 LBT</td><td>리더기 수 W EIRP급까지</td><td>수 m</td></tr>
<tr><td>UWB</td><td>3.1~10.6 GHz 내 (채널 5: 약 6.5 GHz, 채널 9: 약 8 GHz)</td><td>≥ 500 MHz (보통 약 499.2 MHz)</td><td>펄스(IR-UWB), IEEE 802.15.4z</td><td>매우 낮은 전력밀도(예: FCC −41.3 dBm/MHz EIRP)</td><td>수~수십 m, 정밀 거리측정</td></tr>
<tr><td>LoRa</td><td>900 MHz대(국내), 868 MHz(EU)</td><td>125 / 250 / 500 kHz</td><td>CSS(처프 확산 스펙트럼)</td><td>+14~+20 dBm 수준(지역 규정별)</td><td>수 km</td></tr>
</tbody></table></div>
<p class="muted">※ 출력·대역은 대표값 요약입니다. 국가별 허용 대역·한계는 해당 기술기준(국내 고시, FCC Part 15/22/24/27/30, ETSI EN 등) 최신본을 확인하세요.</p>

<h2>Wi-Fi (IEEE 802.11)</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>규격</th><th>세대 명칭</th><th>대역</th><th>최대 채널폭</th><th>최고 변조</th><th>핵심 특징</th></tr></thead>
<tbody>
<tr><td>802.11b</td><td>—</td><td>2.4 GHz</td><td>22 MHz</td><td>CCK</td><td>DSSS, 최대 11 Mbps</td></tr>
<tr><td>802.11a / g</td><td>—</td><td>5 / 2.4 GHz</td><td>20 MHz</td><td>64-QAM</td><td>OFDM, 최대 54 Mbps</td></tr>
<tr><td>802.11n</td><td>Wi-Fi 4</td><td>2.4 / 5 GHz</td><td>40 MHz</td><td>64-QAM</td><td>MIMO 도입</td></tr>
<tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td><td>160 MHz</td><td>256-QAM</td><td>MU-MIMO(하향)</td></tr>
<tr><td>802.11ax</td><td>Wi-Fi 6 / 6E</td><td>2.4 / 5 / 6 GHz</td><td>160 MHz</td><td>1024-QAM</td><td>OFDMA, RU(자원 단위) 할당</td></tr>
<tr><td>802.11be</td><td>Wi-Fi 7</td><td>2.4 / 5 / 6 GHz</td><td>320 MHz</td><td>4096-QAM</td><td>MLO(다중 링크 동시 사용)</td></tr>
</tbody></table></div>
<div class="callout tip">
  <span class="callout-title">Wi-Fi 시험 시 신경 쓸 점</span>
  <ul>
    <li><strong>모드 조합이 많다</strong> — 규격(b/g/n/ac/ax/be) × 채널폭 × 전송률(MCS) × 안테나 수 × 채널(최저/중간/최고). 사전에 “최대 출력이 나오는 조합”을 찾는 예비 측정(프리스캔) 후 대표 조건을 정하고, 그 근거를 기록합니다.</li>
    <li><strong>버스트·듀티 사이클</strong> — 시험 모드의 듀티 사이클을 확인하고 게이팅 또는 보정을 적용합니다(<a href="#/l/rf-modulation">변조 강의</a> 참고).</li>
    <li><strong>5 GHz DFS</strong> — 레이더와 공유하는 일부 5 GHz 대역은 레이더 탐지 시 채널을 비우는 DFS(동적 주파수 선택) 시험이 필요할 수 있습니다.</li>
    <li><strong>6 GHz</strong> — 기기 유형(실내 저전력 등)에 따라 전력밀도(PSD) 한계가 달라집니다. 국내 허용 조건은 최신 고시를 확인합니다.</li>
    <li><strong>MIMO</strong> — 여러 안테나 포트 출력을 합산하고, 지향성 이득(Directional Gain) 계산이 필요할 수 있습니다.</li>
  </ul>
</div>

<h2>Bluetooth</h2>
<p>Bluetooth는 2.4 GHz 대역을 잘게 나누어 <strong>주파수 도약(FHSS, Frequency Hopping Spread Spectrum)</strong>을 합니다. BR/EDR은 1 MHz 폭 79개 채널을 초당 1600번 옮겨 다니며, 간섭이 있는 채널은 피해 가는 적응형 도약(AFH)을 씁니다. LE(Low Energy)는 2 MHz 간격 40개 채널을 쓰고, 그중 3개(37·38·39번)가 광고(Advertising) 채널입니다.</p>
<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  FHSS는 “시끄러운 방에서 대화하며 계속 자리를 옮기는 것”입니다. 한 자리(채널)가 시끄러워도 금방 다른 자리로 옮기니 대화가 끊기지 않습니다. 대신 시험할 때는 “어느 자리에서 얼마나 오래 앉아 있는지(체류 시간)”도 확인합니다.
</div>
<div class="callout tip">
  <span class="callout-title">Bluetooth 시험 시 신경 쓸 점</span>
  <ul>
    <li><strong>도약 ON/OFF</strong> — 출력·대역폭 등은 도약을 멈추고 한 채널에 고정한 시험 모드(DUT Test Mode 등)에서, 도약 채널 수·채널 간격·체류 시간(Dwell Time)은 도약을 켠 상태에서 측정합니다.</li>
    <li><strong>패킷 타입</strong> — BR(GFSK), EDR 2 Mbps(π/4-DQPSK), 3 Mbps(8DPSK), LE 1M/2M/Coded PHY별로 결과가 다를 수 있어 각각 확인합니다.</li>
    <li><strong>시험 도구</strong> — 블루투스 테스터(신호 분석·링크 연결 장비)나 제조사 제공 시험 소프트웨어가 필요합니다. 시료 접수 시 시험 모드 진입 방법을 꼭 받아 두세요.</li>
  </ul>
</div>

<h2>LTE와 5G NR</h2>
<p>이동통신 단말은 기지국의 지시에 따라 출력과 자원(RB)을 바꿉니다. 그래서 시험에는 기지국 역할을 하는 <strong>무선통신 시험기(Call Box, 기지국 에뮬레이터)</strong>가 필요합니다.</p>
<ul>
  <li><strong>밴드</strong> — 3GPP가 정한 번호(LTE: B1, B3, B5, B7 등 / NR: n78, n257 등)로 부릅니다. 국내 LTE는 대표적으로 850 MHz·1.8 GHz·2.1 GHz·2.6 GHz 대역, 5G는 3.5 GHz(n78)와 28 GHz(n257)가 쓰였습니다.</li>
  <li><strong>FR1 / FR2</strong> — FR1은 7.125 GHz 이하, FR2는 24.25 GHz 이상 밀리미터파입니다. FR2 단말은 안테나가 칩과 일체화(배열 안테나)되어 커넥터가 없으므로 <strong>OTA(Over-The-Air)</strong> 방식으로 챔버에서 측정합니다.</li>
  <li><strong>시험 조건</strong> — 최대 출력을 내도록 시험기에서 전력 제어 명령을 설정하고, 채널폭·RB 할당(전체/일부/가장자리)·변조(QPSK, 16/64/256-QAM)를 바꿔 최악 조건을 찾습니다.</li>
  <li><strong>SAR와의 연계</strong> — 휴대 단말은 출력 측정 결과가 SAR 시험 조건 선정에 직접 쓰입니다(SAR 모듈에서 다룸).</li>
</ul>

<h2>NFC · RFID</h2>
<ul>
  <li><strong>NFC(13.56 MHz)</strong> — 파장(약 22 m)에 비해 매우 가까운 거리에서 코일 간 <em>자기장 결합</em>으로 통신합니다. 전계(V/m)보다 자계 세기(dBµA/m 등)로 규제·측정하는 경우가 많고, 루프 안테나를 사용합니다. 반송파 주파수 허용편차와 대역 외 방사가 주요 항목입니다.</li>
  <li><strong>UHF RFID(900 MHz대)</strong> — 리더기가 전파를 쏘고 태그가 반사(후방산란)해 응답합니다. 리더기 출력이 비교적 크고, 나라별로 주파수 도약 또는 LBT(Listen Before Talk) 규칙이 다르므로 해당 기술기준을 확인합니다.</li>
</ul>

<h2>UWB · LoRa</h2>
<ul>
  <li><strong>UWB(Ultra-Wideband)</strong> — 매우 짧은 펄스로 500 MHz 이상의 넓은 대역을 쓰며, 도달 시간을 정밀하게 재서 cm 단위 거리 측정(디지털 키, 태그 추적)에 씁니다. 전력밀도가 아주 낮게 제한되므로 <strong>평균·피크 전력밀도</strong>를 규정된 RBW(예: 평균 1 MHz, 피크 50 MHz 기준)로 측정합니다. 나라마다 허용 대역이 달라 국내 조건은 최신 고시를 확인하세요.</li>
  <li><strong>LoRa</strong> — 주파수가 시간에 따라 쓸려 올라가는 “처프(Chirp)” 신호로 아주 낮은 속도로 멀리 보냅니다. 확산 인자(SF)가 클수록 멀리 가지만 전송 시간(Air Time)이 길어져, 점유 시간·송신 시간 제한 같은 항목이 중요해집니다.</li>
</ul>

<h2>기술별 시험 체크포인트 요약</h2>
<div class="card-grid">
  <div class="card"><h3>📶 Wi-Fi</h3><p>모드 조합 프리스캔, 듀티 사이클·게이팅, 5 GHz DFS, 6 GHz PSD, MIMO 합산·지향성 이득.</p></div>
  <div class="card"><h3>🔵 Bluetooth</h3><p>도약 ON/OFF 모드 구분, 패킷 타입별 측정, 체류 시간·도약 채널 수, 시험 모드 진입 방법 확보.</p></div>
  <div class="card"><h3>📱 LTE / NR</h3><p>Call Box 연결, 최대 출력 설정, 밴드·채널폭·RB 조합, FR2는 OTA, SAR 조건과 연계.</p></div>
  <div class="card"><h3>🪪 NFC / RFID</h3><p>루프 안테나로 자계 측정, 주파수 허용편차, 리더기 출력·도약/LBT 규칙.</p></div>
  <div class="card"><h3>📍 UWB</h3><p>평균·피크 전력밀도, 넓은 측정 대역, 방사(OTA) 측정 중심, 국가별 허용 대역 확인.</p></div>
  <div class="card"><h3>🛰️ LoRa / 저전력 IoT</h3><p>긴 전송 시간, 점유·송신 시간 제한, 낮은 속도의 긴 패킷에 맞춘 트리거·스윕 설정.</p></div>
</div>

<div class="callout warn">
  <span class="callout-title">흔한 실수</span>
  ① 제품 설명서만 보고 탑재 무선 기술을 빠뜨림(예: 숨어 있는 BLE, NFC) ② 시험 모드 펌웨어와 양산 펌웨어의 출력 설정이 다른데 확인하지 않음 ③ 동시 송신(예: Wi-Fi + BT, LTE + Wi-Fi) 조합을 고려하지 않음. 시료 접수 시 <strong>무선 기술 목록, 안테나 사양(이득·종류), 시험 모드 진입 방법, 펌웨어 버전</strong>을 체크리스트로 받아 두세요(<a href="#/forms">양식</a> 참고).
</div>
`,
  quiz: [
    { q: 'Wi-Fi 6(802.11ax)의 특징으로 옳은 것은?',
      options: ['DSSS만 사용한다', 'OFDMA와 1024-QAM을 지원한다', '5 GHz만 사용한다', '최대 채널폭이 22 MHz이다'],
      answer: 1, explain: '802.11ax는 OFDMA로 여러 사용자에게 자원 단위를 나눠 주고, 최대 1024-QAM을 지원합니다(6E는 6 GHz 추가).' },
    { q: 'Bluetooth 출력이나 대역폭을 측정할 때 일반적으로 필요한 설정은?',
      options: ['주파수 도약을 멈추고 한 채널에 고정한다', '도약을 켠 채로 임의 채널을 측정한다', '반드시 LTE와 동시에 송신한다', 'Call Box로 통화를 연결한다'],
      answer: 0, explain: '출력·대역폭 등은 도약을 멈춘 고정 채널 시험 모드에서, 도약 관련 항목(채널 수, 체류 시간)은 도약 상태에서 측정합니다.' },
    { q: '5G NR FR2(28 GHz) 단말의 송신 특성을 측정할 때 주로 쓰는 방식은?',
      options: ['안테나 포트에 케이블을 직접 연결하는 전도 측정', '루프 안테나로 자계를 측정', 'OTA(Over-The-Air) 챔버 측정', '오실로스코프로만 측정'],
      answer: 2, explain: 'FR2 단말은 배열 안테나가 모듈에 통합되어 측정용 커넥터가 없으므로 OTA로 측정합니다.' },
    { q: 'NFC(13.56 MHz)에 대한 설명으로 옳지 않은 것은?',
      options: ['코일 간 자기장 결합으로 통신한다', '통신 거리가 수 cm 수준이다', '루프 안테나로 자계 세기를 측정하는 경우가 많다', '파장이 약 12.5 cm라서 작은 안테나로 멀리 보낼 수 있다'],
      answer: 3, explain: '13.56 MHz의 파장은 약 22 m입니다. 12.5 cm는 2.4 GHz의 파장입니다.' }
  ],
  refs: [
    { title: 'Bluetooth SIG — Specifications', url: 'https://www.bluetooth.com/specifications/', note: 'Bluetooth Core 규격과 RF 시험 규격(RF-PHY)' },
    { title: '3GPP Specifications', url: 'https://www.3gpp.org/specifications', note: 'LTE(36 시리즈)·NR(38 시리즈) 단말 RF 규격, 예: 38.521' },
    { title: 'FCC KDB', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'Wi-Fi(DTS/U-NII), UWB 등 기술별 측정 지침' },
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: 'EN 300 328(2.4 GHz), EN 301 893(5 GHz) 등' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '국내 무선기기 기술기준·시험방법 고시' }
  ]
});
