/* MODULE 03 — 시험 장비 */

/* ---------------------------------------------------------------
 * 1. 스펙트럼 분석기
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-spectrum-analyzer',
  module: 'equip',
  order: 1,
  title: '스펙트럼 분석기 — 시험소의 눈',
  minutes: 35,
  level: '기초',
  summary: '무선·EMC 시험에서 가장 많이 쓰는 스펙트럼 분석기의 동작 원리, 화면 읽는 법, 핵심 설정(RBW·VBW·검파기·트레이스)과 흔한 실수를 익힙니다.',
  objectives: [
    '수퍼헤테로다인 방식 스펙트럼 분석기의 신호 흐름(ATT → 믹서 → IF/RBW → 검파 → VBW → 화면)을 설명할 수 있다.',
    '화면의 Ref Level, Att, RBW/VBW, SWT, 마커, Span 표시를 읽고 의미를 말할 수 있다.',
    'RBW를 바꾸면 잡음 바닥과 측정값이 어떻게 달라지는지 계산할 수 있다.',
    '검파기(Peak/RMS/Sample/QP/AV)와 트레이스 모드(Clear/Write, Max Hold, Average)를 목적에 맞게 고른다.'
  ],
  body: `
<p>스펙트럼 분석기(Spectrum Analyzer)는 신호를 <strong>주파수별로 나누어 각 주파수에 얼마만큼의 전력이 있는지</strong> 보여 주는 계측기입니다. 무선 시험의 출력·점유대역폭·스퓨리어스, EMC의 방출 측정, SAR 시험 전 출력 확인까지 거의 모든 시험에 등장하므로 <strong>시험소 엔지니어의 “눈”</strong>이라 할 수 있습니다. 최근 제품은 복조·분석 기능까지 갖춰 <em>신호 분석기(Signal Analyzer)</em>라고도 부릅니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  프리즘이 햇빛을 무지개색으로 펼쳐 보이듯, 스펙트럼 분석기는 안테나나 케이블로 들어온 전파를 <strong>주파수별 막대</strong>로 펼쳐 보여 줍니다. 오실로스코프가 “시간에 따라 전압이 어떻게 변하나(시간 영역)”를 본다면, 스펙트럼 분석기는 “어느 주파수에 얼마나 있나(주파수 영역)”를 봅니다.
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/spectrum-analyzer.svg" alt="스펙트럼 분석기 일러스트: 1 화면, 2 로터리 노브, 3 키패드, 4 RF 입력 단자"></div>
  <div>
    <h3>스펙트럼 분석기 / 신호 분석기</h3>
    <div class="equip-en">Spectrum Analyzer / Signal Analyzer</div>
    <p>① 화면(트레이스·설정값 표시) ② 로터리 노브(값 미세 조정) ③ 키패드(숫자·단위 입력) ④ RF 입력 단자(최대 입력 전력 표기 확인).</p>
    <dl>
      <dt>용도</dt><dd>전도(케이블 연결) 출력, 점유대역폭(OBW), 스퓨리어스·대역외 발사, 인접채널 전력(ACLR), 주파수 오차, EMC 사전 측정 등</dd>
      <dt>주요 기능</dt><dd>Center/Span/RBW/VBW/Ref Level/ATT/Sweep 설정, 검파기·트레이스 모드, 마커, 채널 파워·OBW·ACLR·SEM 측정 앱, 트랜스듀서(보정표), 게이트 스윕, 변조 분석 옵션</dd>
      <dt>사용법 핵심</dt><dd>① 입력 레벨 확인 → ② 경로 손실(Offset/보정표) 입력 → ③ Center·Span → ④ RBW·VBW·검파기 → ⑤ Ref Level·ATT → ⑥ 트레이스 모드 → ⑦ 마커/측정 기능</dd>
      <dt>주의</dt><dd>입력 최대 전력(대표적으로 +30 dBm) 초과 금지, DC 허용 여부 확인, 과입력(Overload/IF OVLD) 경고 무시 금지, 교정 유효기간 확인</dd>
      <dt>대표 모델</dt><dd>R&amp;S FSW · FSV/FSVA · FPL1000, Keysight UXA N9040B · MXA N9020B · EXA N9010B, Anritsu MS2850A · MS2830A (<a href="https://www.rohde-schwarz.com" target="_blank" rel="noopener">R&amp;S</a>, <a href="https://www.keysight.com" target="_blank" rel="noopener">Keysight</a>, <a href="https://www.anritsu.com" target="_blank" rel="noopener">Anritsu</a>)</dd>
    </dl>
  </div>
</div>

<h2>동작 원리: 수퍼헤테로다인</h2>
<p>전통적인 스펙트럼 분석기는 라디오 수신기와 같은 <strong>수퍼헤테로다인(Superheterodyne)</strong> 방식입니다. 입력 신호에 국부발진기(LO, Local Oscillator) 신호를 곱해(믹싱) 고정된 중간주파수(IF, Intermediate Frequency)로 옮기고, IF에 있는 <strong>좁은 필터(= RBW)</strong>를 통과한 전력만 화면에 찍습니다. LO 주파수를 처음부터 끝까지 쓸어 올리면(스윕) 필터가 주파수 축을 따라 <em>미끄러지며</em> 전체 스펙트럼을 그리게 됩니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="수퍼헤테로다인 스펙트럼 분석기 블록도">
  <defs><marker id="eqsa-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <circle cx="36" cy="68" r="15" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/><circle cx="36" cy="68" r="5" fill="var(--dg-line)"/>
    <text x="36" y="106" font-size="12" fill="var(--text-2)">RF 입력</text>
    <path d="M51 68 H78" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="80" y="42" width="110" height="52" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="135" y="64" font-weight="700">입력 감쇠기</text><text x="135" y="82" font-size="12" fill="var(--text-3)">ATT</text>
    <path d="M190 68 H218" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="220" y="42" width="100" height="52" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-dasharray="5 4"/>
    <text x="270" y="64" font-weight="700">전치증폭기</text><text x="270" y="82" font-size="12" fill="var(--text-3)">Preamp (옵션)</text>
    <path d="M320 68 H352" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <circle cx="380" cy="68" r="26" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <path d="M366 54 L394 82 M394 54 L366 82" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="380" y="30" font-weight="700" fill="var(--dg-accent)">믹서</text>
    <path d="M406 68 H448" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <text x="427" y="60" font-size="11" fill="var(--text-3)">IF</text>
    <rect x="450" y="42" width="140" height="52" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="520" y="64" font-weight="700" fill="var(--dg-accent-2)">IF 필터</text><text x="520" y="82" font-size="12" fill="var(--text-2)">폭 = RBW</text>
    <path d="M590 68 H638" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="640" y="42" width="110" height="52" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="695" y="64" font-weight="700">로그 증폭</text><text x="695" y="82" font-size="12" fill="var(--text-3)">포락선 검파</text>
    <path d="M695 94 V128" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="640" y="130" width="110" height="48" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="695" y="151" font-weight="700" fill="var(--dg-accent-2)">비디오 필터</text><text x="695" y="168" font-size="12" fill="var(--text-2)">폭 = VBW</text>
    <path d="M695 178 V208" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="640" y="210" width="110" height="48" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="695" y="231" font-weight="700">검파기</text><text x="695" y="248" font-size="11.5" fill="var(--text-3)">Peak·RMS·QP…</text>
    <path d="M640 234 H602" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="460" y="200" width="140" height="70" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M470 258 L500 256 L515 254 L522 222 L530 214 L538 222 L545 254 L560 257 L590 256" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="530" y="194" font-weight="700">화면</text>
    <rect x="330" y="140" width="100" height="48" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="380" y="161" font-weight="700" fill="var(--dg-accent)">국부발진기</text><text x="380" y="178" font-size="12" fill="var(--text-3)">LO (가변)</text>
    <path d="M380 140 V96" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <rect x="130" y="140" width="130" height="48" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="195" y="161" font-weight="700">스윕 발생기</text><text x="195" y="178" font-size="12" fill="var(--text-3)">램프(톱니파)</text>
    <path d="M260 164 H328" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsa-arw)"/>
    <path d="M195 188 V258 H458" fill="none" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#eqsa-arw)"/>
    <text x="320" y="250" font-size="12" fill="var(--text-3)">화면 가로축(주파수)과 동기</text>
  </g>
</svg>
<figcaption>그림 1. 수퍼헤테로다인 스펙트럼 분석기의 신호 흐름. 주황색 두 블록(RBW, VBW)이 사용자가 가장 자주 바꾸는 필터입니다.</figcaption>
</figure>

<ul>
  <li><strong>입력 감쇠기(ATT)</strong> — 믹서가 포화되지 않도록 입력을 줄입니다. ATT를 올리면 믹서는 안전해지지만 <em>잡음 바닥도 같이 올라갑니다</em>.</li>
  <li><strong>전치증폭기(Preamp)</strong> — 아주 약한 신호(예: 방사 스퓨리어스)를 볼 때 켭니다. 강한 신호가 있을 때 켜면 쉽게 포화됩니다.</li>
  <li><strong>IF 필터 = RBW(분해능 대역폭, Resolution Bandwidth)</strong> — “한 번에 들여다보는 창문의 폭”. 좁을수록 가까운 두 신호를 구분하고 잡음이 낮아지지만 스윕이 느려집니다.</li>
  <li><strong>검파기(Detector)</strong> — 한 화면 점(pixel/bin)에 해당하는 여러 샘플 중 무엇을 대표값으로 찍을지 정합니다.</li>
  <li><strong>비디오 필터 = VBW(Video Bandwidth)</strong> — 검파된 결과를 평활(smoothing)해 트레이스의 “지글거림”을 줄입니다.</li>
</ul>

<div class="callout note">
  <span class="callout-title">요즘 분석기는 “디지털 IF”</span>
  최신 신호 분석기는 IF 이후를 디지털 신호처리(ADC + FFT/디지털 필터)로 구현합니다. 그래도 사용자가 다루는 개념(RBW, VBW, 검파기)은 똑같습니다. 좁은 RBW에서는 자동으로 FFT 모드로 바뀌어 스윕 시간이 크게 줄기도 합니다.
</div>

<h2>화면 읽는 법</h2>
<p>제조사마다 배치는 조금 다르지만, 화면에 표시되는 정보는 거의 같습니다. 측정값을 기록할 때는 <strong>트레이스만 보지 말고 상단·하단의 설정값을 함께 확인</strong>하는 습관을 들이세요. 스크린샷을 성적서 근거로 남길 때도 이 값들이 보여야 합니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 350" role="img" aria-label="스펙트럼 분석기 화면 요소">
  <rect x="50" y="20" width="690" height="320" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
  <path d="M50 62 H740 M50 306 H740" stroke="var(--dg-line)" stroke-width="1"/>
  <g font-size="13" fill="var(--text)">
    <text x="64" y="38">Ref Level 10.00 dBm</text>
    <text x="64" y="55">Att 20 dB</text>
    <text x="260" y="38">RBW 100 kHz</text>
    <text x="260" y="55">VBW 300 kHz</text>
    <text x="400" y="38">SWT 1 ms</text>
    <text x="540" y="38" font-weight="700" fill="var(--dg-accent)">M1  -14.80 dBm</text>
    <text x="540" y="55" font-weight="700" fill="var(--dg-accent)">2.440 000 GHz</text>
    <text x="64" y="328">CF 2.44 GHz</text>
    <text x="415" y="328" text-anchor="middle" fill="var(--text-3)">1001 pts</text>
    <text x="726" y="328" text-anchor="end">Span 40 MHz</text>
  </g>
  <g stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.7">
    <path d="M100 70 H730 M100 93 H730 M100 116 H730 M100 139 H730 M100 162 H730 M100 185 H730 M100 208 H730 M100 231 H730 M100 254 H730 M100 277 H730 M100 300 H730"/>
    <path d="M100 70 V300 M163 70 V300 M226 70 V300 M289 70 V300 M352 70 V300 M415 70 V300 M478 70 V300 M541 70 V300 M604 70 V300 M667 70 V300 M730 70 V300"/>
  </g>
  <g font-size="11" fill="var(--text-3)" text-anchor="end">
    <text x="96" y="74">10</text><text x="96" y="97">0</text><text x="96" y="120">-10</text><text x="96" y="143">-20</text><text x="96" y="166">-30</text><text x="96" y="212">-50</text><text x="96" y="235">-60</text><text x="96" y="258">-70</text><text x="96" y="281">-80</text><text x="96" y="304">-90</text>
  </g>
  <rect x="106" y="76" width="64" height="18" rx="3" fill="var(--dg-fill-2)" stroke="var(--dg-accent)"/>
  <text x="138" y="89" font-size="11.5" font-weight="700" fill="var(--dg-accent)" text-anchor="middle">1Pk Max</text>
  <path d="M100 266 L110 262 L118 268 L126 263 L134 267 L142 261 L150 266 L158 264 L166 269 L174 262 L182 266 L190 263 L198 268 L206 262 L214 266 L222 264 L230 268 L238 261 L246 266 L254 263 L262 268 L270 264 L278 266 L286 262 L294 267 L302 264 L310 268 L318 262 L326 265 L334 260 L342 250 L350 200 L358 140 L366 132 L374 136 L382 130 L390 134 L398 129 L406 133 L415 127 L424 134 L432 130 L440 135 L448 131 L456 136 L464 140 L472 200 L480 250 L488 260 L496 265 L504 262 L512 268 L520 263 L528 266 L536 262 L544 268 L552 264 L560 266 L568 261 L576 267 L584 263 L592 268 L600 264 L608 266 L616 262 L624 268 L632 263 L640 266 L648 262 L656 267 L664 264 L672 268 L680 262 L688 266 L696 263 L704 268 L712 264 L720 266 L730 263" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M415 124 l-6 -10 h12 z" fill="var(--dg-accent-2)"/>
  <text x="430" y="114" font-size="12" font-weight="700" fill="var(--dg-accent-2)">M1</text>
  <g font-size="13" font-weight="700" fill="#fff" text-anchor="middle">
    <circle cx="214" cy="34" r="10" fill="var(--dg-accent-2)"/><text x="214" y="39">1</text>
    <circle cx="142" cy="50" r="10" fill="var(--dg-accent-2)"/><text x="142" y="55">2</text>
    <circle cx="352" cy="42" r="10" fill="var(--dg-accent-2)"/><text x="352" y="47">3</text>
    <circle cx="470" cy="34" r="10" fill="var(--dg-accent-2)"/><text x="470" y="39">4</text>
    <circle cx="66" cy="186" r="10" fill="var(--dg-accent-2)"/><text x="66" y="191">5</text>
    <circle cx="184" cy="85" r="10" fill="var(--dg-accent-2)"/><text x="184" y="90">6</text>
    <circle cx="660" cy="42" r="10" fill="var(--dg-accent-2)"/><text x="660" y="47">7</text>
    <circle cx="610" cy="240" r="10" fill="var(--dg-accent-2)"/><text x="610" y="245">8</text>
    <circle cx="160" cy="323" r="10" fill="var(--dg-accent-2)"/><text x="160" y="328">9</text>
    <circle cx="616" cy="323" r="10" fill="var(--dg-accent-2)"/><text x="616" y="328">10</text>
  </g>
</svg>
<figcaption>그림 2. 스펙트럼 분석기 화면의 주요 요소 (가상의 20 MHz 폭 신호 예). 번호 설명은 아래 표 참고.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>번호</th><th>표시</th><th>의미 · 확인 포인트</th></tr></thead>
<tbody>
<tr><td class="num">1</td><td>Ref Level</td><td>화면 맨 윗줄의 레벨. 신호 최대값이 이 선보다 조금(수 dB) 아래에 오도록 둡니다. 신호가 선 위로 넘어가면 잘리고(Overload) 부정확합니다.</td></tr>
<tr><td class="num">2</td><td>Att (입력 감쇠)</td><td>현재 입력 감쇠값. 보통 Ref Level에 연동(Auto)되지만, 강한 신호에서는 직접 확인합니다.</td></tr>
<tr><td class="num">3</td><td>RBW / VBW</td><td>분해능·비디오 대역폭. 시험 규격이 정한 값과 일치하는지 가장 먼저 확인할 항목입니다.</td></tr>
<tr><td class="num">4</td><td>SWT (Sweep Time)</td><td>한 번 스윕에 걸리는 시간. 너무 짧으면 “UNCAL” 경고가 뜨고 레벨이 낮게 읽힙니다.</td></tr>
<tr><td class="num">5</td><td>세로 눈금</td><td>보통 10 dB/div. 칸 수를 세어 대략적인 레벨을 읽을 수 있습니다.</td></tr>
<tr><td class="num">6</td><td>트레이스 정보</td><td>“1Pk Max”는 1번 트레이스, Peak 검파기, Max Hold 모드라는 뜻(R&amp;S 표기 예). 제조사마다 표기 방식이 다릅니다.</td></tr>
<tr><td class="num">7</td><td>마커 읽음값</td><td>마커 위치의 주파수와 레벨. Offset(경로 손실 보정)이 적용된 값인지 확인합니다.</td></tr>
<tr><td class="num">8</td><td>잡음 바닥</td><td>신호가 없는 곳의 바닥 레벨. 측정하려는 스퓨리어스 한계값보다 충분히(예: 6~10 dB 이상) 낮아야 의미 있는 측정입니다.</td></tr>
<tr><td class="num">9</td><td>CF (Center Frequency)</td><td>화면 가운데 주파수.</td></tr>
<tr><td class="num">10</td><td>Span</td><td>화면 가로 전체 폭. Start = CF − Span/2, Stop = CF + Span/2.</td></tr>
</tbody></table></div>

<h2>주요 설정 한눈에 보기</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>하는 일</th><th>실무 기준 · 팁</th></tr></thead>
<tbody>
<tr><td>Center / Span<br>(Start / Stop)</td><td>관찰할 주파수 범위</td><td>OBW 측정은 보통 Span을 점유대역폭의 약 1.5~5배로(규격 확인). 스퓨리어스는 Start/Stop으로 넓게 나눠 스캔.</td></tr>
<tr><td>RBW</td><td>분해능, 잡음 바닥, 측정 전력의 “창문 폭”</td><td>규격이 지정(예: 스퓨리어스 1 GHz 이하 100 kHz, 초과 1 MHz 등). OBW는 흔히 대역폭의 1~5 %.</td></tr>
<tr><td>VBW</td><td>트레이스 평활</td><td>보통 VBW ≥ 3 × RBW. VBW를 RBW보다 작게 하면 잡음이 부드러워지지만 펄스·변조 신호 레벨이 왜곡될 수 있음.</td></tr>
<tr><td>Ref Level</td><td>화면 최상단 레벨</td><td>최대 신호 + 수 dB 여유. 경로 손실 Offset을 넣으면 Ref Level 표시도 함께 바뀜.</td></tr>
<tr><td>ATT</td><td>입력 감쇠</td><td>강한 신호 → ATT 크게(믹서 보호). 약한 신호 → ATT 작게(잡음 낮춤). 단, 0 dB는 과입력 위험이 커서 신중히.</td></tr>
<tr><td>Sweep Time</td><td>스윕 시간</td><td>기본은 Auto. 버스트·간헐 신호는 충분히 길게(또는 여러 번 Max Hold). 규격이 “스윕 포인트당 버스트 1주기 이상” 등을 요구하기도 함.</td></tr>
<tr><td>Detector</td><td>픽셀 대표값 선택</td><td>출력·전력 측정은 RMS(평균 전력), 스퓨리어스 탐색은 Peak, EMC 최종 판정은 QP/AV(CISPR).</td></tr>
<tr><td>Trace Mode</td><td>스윕 간 누적 방식</td><td>Clear/Write(실시간), Max Hold(최대값 누적), Average(평균), View(정지).</td></tr>
<tr><td>Sweep Points</td><td>가로축 점 수</td><td>Span ÷ 점 수가 RBW보다 너무 크면 좁은 신호를 놓침. 넓은 Span에서는 점 수를 늘림.</td></tr>
<tr><td>Trigger / Gate</td><td>버스트 동기</td><td>TDD·버스트 신호의 “켜져 있는 구간”만 측정할 때 비디오 트리거·게이트 사용.</td></tr>
</tbody></table></div>

<h2>RBW가 잡음 바닥과 측정값에 미치는 영향</h2>
<p>신입사원이 가장 많이 헷갈리는 부분입니다. 핵심은 <strong>“RBW는 한 번에 담는 전력의 폭”</strong>이라는 것입니다.</p>
<div class="callout easy">
  <span class="callout-title">쉽게 말하면 — 양동이 비유</span>
  빗물(잡음)은 넓게 고르게 내리고, 수도꼭지(CW 신호)는 한 점에서 물이 나온다고 해 봅시다. 양동이(RBW)를 크게 하면 빗물은 더 많이 담기지만 수도꼭지 물의 양은 그대로입니다. 그래서 <strong>RBW를 넓히면 잡음 바닥은 올라가고, 단일 주파수(CW) 신호 레벨은 그대로</strong>입니다. 반대로 넓은 대역 신호(예: 20 MHz 폭 Wi-Fi)는 빗물처럼 퍼져 있으므로 RBW가 좁아지면 한 점에서 읽히는 값이 작아집니다.
</div>

<div class="formula">잡음 바닥 변화(dB) = 10·log<sub>10</sub>(RBW<sub>2</sub> / RBW<sub>1</sub>)</div>
<p>예) RBW를 1 MHz → 10 kHz로 줄이면 10·log(0.01) = <strong>−20 dB</strong>, 잡음 바닥이 20 dB 내려갑니다. 대신 스윕 시간은 대략 RBW의 제곱에 반비례해(SWT ≈ k · Span / RBW²) 길어집니다.</p>

<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="RBW에 따른 잡음 바닥과 CW 신호 표시 변화">
  <g font-size="13" fill="var(--text)">
    <path d="M70 30 V230 H700" fill="none" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="30" y="36" font-size="12" fill="var(--text-3)">레벨</text>
    <text x="700" y="252" font-size="12" fill="var(--text-3)" text-anchor="end">주파수</text>
    <path d="M70 150 L100 146 L120 152 L140 147 L160 151 L180 146 L200 150 L220 147 L240 151 L260 146 L280 150 L300 144 L320 130 L340 90 L360 66 L380 62 L400 66 L420 90 L440 130 L460 144 L480 150 L500 147 L520 151 L540 146 L560 150 L580 147 L600 151 L620 146 L640 150 L660 147 L700 150" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <path d="M70 200 L100 197 L120 202 L140 198 L160 201 L180 197 L200 200 L220 198 L240 202 L260 197 L280 201 L300 198 L320 200 L340 199 L360 190 L372 110 L380 62 L388 110 L400 190 L420 199 L440 201 L460 198 L480 201 L500 197 L520 200 L540 198 L560 202 L580 197 L600 201 L620 198 L640 200 L660 197 L700 200" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
    <path d="M340 62 H460" stroke="var(--dg-muted)" stroke-dasharray="4 4"/>
    <text x="470" y="58" font-size="12" fill="var(--text-2)">CW 신호 최대값은 거의 같음</text>
    <path d="M640 154 V194" stroke="var(--dg-line)" stroke-width="1.5"/>
    <path d="M634 160 l6 -8 l6 8 M634 188 l6 8 l6 -8" fill="none" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="652" y="178" font-weight="700">20 dB</text>
    <rect x="90" y="40" width="14" height="4" fill="var(--dg-accent-2)"/><text x="112" y="46" font-size="12.5">RBW 1 MHz — 잡음 높고 폭이 넓음</text>
    <rect x="90" y="60" width="14" height="4" fill="var(--dg-accent)"/><text x="112" y="66" font-size="12.5">RBW 10 kHz — 잡음 20 dB 낮고 뾰족함</text>
  </g>
</svg>
<figcaption>그림 3. 같은 CW 신호를 RBW만 바꿔 본 모습. 화면에 보이는 신호의 “폭”은 신호 자체가 아니라 RBW 필터 모양입니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>신호 종류</th><th>RBW를 넓히면</th><th>RBW를 좁히면</th></tr></thead>
<tbody>
<tr><td>CW(단일 주파수) 신호</td><td>레벨 거의 동일, 잡음 바닥 ↑</td><td>레벨 거의 동일, 잡음 바닥 ↓, 스윕 느려짐</td></tr>
<tr><td>넓은 대역 변조 신호<br>(신호 폭 ≫ RBW)</td><td>한 점의 읽음값 ↑ (RBW 안에 더 많은 전력)</td><td>한 점의 읽음값 ↓ (10·log 비율만큼)</td></tr>
<tr><td>잡음</td><td>↑</td><td>↓</td></tr>
</tbody></table></div>

<div class="callout tip">
  <span class="callout-title">그래서 “채널 파워” 기능을 씁니다</span>
  넓은 대역 신호의 <strong>전체 전력</strong>은 마커 한 점으로 읽으면 안 됩니다. 채널 파워(Channel Power) 측정은 정해진 대역폭 안의 트레이스 점들을 적분(합산)해, RBW와 무관하게 전체 전력을 계산합니다. 이때 검파기는 RMS, 트레이스는 평균(또는 규격이 지정한 방식)을 씁니다.
</div>

<h2>검파기와 트레이스 모드</h2>
<p>화면의 한 점(픽셀, bin) 안에는 실제로 여러 개의 측정 샘플이 들어 있습니다. <strong>검파기(Detector)</strong>는 그중 무엇을 대표값으로 찍을지, <strong>트레이스 모드(Trace Mode)</strong>는 여러 번의 스윕 결과를 어떻게 누적할지를 정합니다. 둘은 서로 다른 개념이니 섞지 마세요.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>검파기</th><th>대표값</th><th>주로 쓰는 곳</th></tr></thead>
<tbody>
<tr><td>Peak (Pos Peak)</td><td>구간 내 최대값</td><td>스퓨리어스 탐색, 최대 피크 전력, EMC 사전 스캔. 가장 “불리하게(높게)” 나옴</td></tr>
<tr><td>RMS</td><td>구간 내 전력 평균(실효값)</td><td>출력 전력, 채널 파워, ACLR, 잡음 같은 신호의 전력 측정</td></tr>
<tr><td>Sample</td><td>구간 내 임의의 한 샘플</td><td>잡음 측정, 시간 영역(Zero span) 관찰</td></tr>
<tr><td>Neg Peak</td><td>구간 내 최소값</td><td>특수 용도(간헐 신호 확인 등)</td></tr>
<tr><td>QP (Quasi-Peak, 준첨두)</td><td>반복률에 따라 가중된 값</td><td>EMC 방출 최종 측정(CISPR 16-1-1). 자주 반복되는 잡음일수록 높게</td></tr>
<tr><td>AV / CISPR-AV</td><td>평균(선형 평균, CISPR 규정 방식)</td><td>EMC 방출 평균값 한계 판정</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data">
<thead><tr><th>트레이스 모드</th><th>동작</th><th>주로 쓰는 곳</th></tr></thead>
<tbody>
<tr><td>Clear/Write</td><td>매 스윕마다 새로 그림</td><td>실시간 관찰, 셋업 확인</td></tr>
<tr><td>Max Hold</td><td>스윕마다 최대값만 누적</td><td>호핑·버스트 신호, OBW·스퓨리어스 최대값, 방사 측정 중 최대 지점 탐색</td></tr>
<tr><td>Min Hold</td><td>최소값 누적</td><td>간헐 신호와 연속 신호 구분</td></tr>
<tr><td>Average (Trace Average)</td><td>여러 스윕을 평균</td><td>잡음을 줄여 안정적인 값을 얻을 때 (평균 횟수 기록)</td></tr>
<tr><td>View</td><td>현재 트레이스 정지</td><td>결과 보존, 스크린샷</td></tr>
</tbody></table></div>
<div class="callout warn">
  <span class="callout-title">헷갈리기 쉬운 짝</span>
  “RMS 검파기 + Average 트레이스”와 “Peak 검파기 + Max Hold”는 결과가 수 dB 이상 다를 수 있습니다. 규격이 요구하는 조합을 확인하고, <strong>기록지에 검파기와 트레이스 모드를 둘 다</strong> 적으세요.
</div>

<h2>마커와 측정 기능</h2>
<ul>
  <li><strong>Marker / Peak Search</strong> — 가장 큰 신호에 마커를 올립니다. <em>Next Peak</em>로 다음 큰 신호, <em>Marker → CF</em>로 마커 위치를 중심 주파수로 이동.</li>
  <li><strong>Delta Marker</strong> — 두 점 사이의 주파수·레벨 차이. −20 dB 대역폭, 고조파 억압비 확인 등에 사용.</li>
  <li><strong>Noise Marker</strong> — 1 Hz 대역폭으로 환산한 잡음 밀도(dBm/Hz). 전력 스펙트럼 밀도(PSD) 개념 확인에 유용.</li>
  <li><strong>Channel Power</strong> — 지정 대역폭 안의 총 전력. 출력, PSD 측정의 기본.</li>
  <li><strong>OBW(Occupied Bandwidth)</strong> — 전체 전력의 99 %가 들어가는 대역폭을 자동 계산. “x dB 대역폭” 모드(예: −26 dB 대역폭)도 대부분 지원합니다.</li>
  <li><strong>ACLR / SEM / Spurious Emission</strong> — 인접채널 누설비, 스펙트럼 방사 마스크, 스퓨리어스 구간별 자동 측정. 한계선(Limit line)과 PASS/FAIL 표시.</li>
</ul>
<p>각 측정 방법의 자세한 절차는 <a href="#/m/rftest">04 무선 시험 모듈</a>에서 다룹니다.</p>

<h2>실무 설정 순서</h2>
<ol class="steps">
  <li><strong>입력 레벨 추정</strong>시료 정격 출력과 감쇠기 값을 보고, 분석기 입력에 들어올 최대 레벨을 계산합니다. 입력 한계를 넘으면 감쇠기를 추가합니다.</li>
  <li><strong>Preset 후 보정값 입력</strong>이전 사용자의 설정이 남아 있을 수 있으니 Preset 합니다. 경로 손실을 Ref Level Offset 또는 트랜스듀서(주파수별 보정표)로 입력합니다.</li>
  <li><strong>주파수 설정</strong>Center와 Span(또는 Start/Stop)을 규격대로 설정합니다.</li>
  <li><strong>RBW·VBW·검파기</strong>규격 값으로 직접 입력합니다. Auto 값에 기대지 않습니다.</li>
  <li><strong>Ref Level·ATT</strong>신호가 화면 위쪽 1~2칸 아래에 오게 하고 Overload 경고가 없는지 봅니다. 잡음 바닥이 한계값보다 충분히 낮은지도 확인합니다.</li>
  <li><strong>트레이스 모드·스윕</strong>Max Hold/Average 등을 설정하고, 트레이스가 안정될 때까지 충분히 스윕합니다.</li>
  <li><strong>측정·기록</strong>마커·측정 기능으로 값을 읽고, 설정값이 모두 보이는 스크린샷과 함께 기록합니다.</li>
</ol>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>
    <ul>
      <li>Auto RBW 그대로 스퓨리어스 측정 → 규격 RBW와 달라 재시험</li>
      <li>Offset 미입력 → 감쇠기 20 dB만큼 낮게 기록</li>
      <li>Overload/UNCAL 경고를 무시하고 값 기록</li>
      <li>버스트 신호를 Clear/Write + RMS로 한 번만 읽음 → 꺼진 구간이 섞여 낮게 측정</li>
      <li>강한 기본파가 있는데 프리앰프 켜고 고조파 측정 → 분석기 내부에서 생긴 고조파를 시료 것으로 오판</li>
    </ul>
  </div>
  <div class="good"><h4>✅ 좋은 예</h4>
    <ul>
      <li>규격 표를 옆에 두고 RBW/VBW/검파기/트레이스를 직접 입력</li>
      <li>보정표(트랜스듀서) 이름과 적용 여부를 기록지에 기재</li>
      <li>경고가 뜨면 ATT·Ref Level을 조정하고 다시 측정</li>
      <li>버스트는 게이트/트리거 또는 Max Hold, 듀티 사이클 보정 여부 기록</li>
      <li>고조파 측정 시 하이패스/노치 필터로 기본파를 억제</li>
    </ul>
  </div>
</div>

<details class="faq"><summary>분석기 내부에서 생긴 신호인지 어떻게 확인하나요?</summary>
<p>입력 감쇠(ATT)를 10 dB 올려 보세요. 진짜 외부 신호라면 화면 레벨이 그대로(분석기가 ATT만큼 자동 보정)지만, 내부 혼변조·고조파라면 레벨이 달라집니다(보통 크게 내려감). 간단하지만 매우 강력한 확인법입니다.</p></details>
<details class="faq"><summary>잡음 바닥이 한계값보다 높으면 어떻게 하나요?</summary>
<p>① RBW를 규격이 허용하는 범위에서 줄이기 ② ATT 줄이기(과입력 주의) ③ 프리앰프 사용 ④ 강한 기본파를 필터로 제거한 뒤 ATT 줄이기 ⑤ 경로 손실이 작은 케이블 사용. 그래도 부족하면 “잡음 바닥 이하(측정 한계)”로 판단 근거를 기록합니다.</p></details>
`,
  quiz: [
    { q: '스펙트럼 분석기에서 RBW를 100 kHz에서 1 MHz로 넓혔다. 잡음 바닥은 대략 어떻게 변하는가?',
      options: ['10 dB 낮아진다', '변하지 않는다', '10 dB 높아진다', '20 dB 높아진다'],
      answer: 2, explain: '10·log(1 MHz / 100 kHz) = 10 dB. RBW가 넓어지면 더 많은 잡음 전력이 들어와 잡음 바닥이 10 dB 올라갑니다. CW 신호 레벨은 거의 그대로입니다.' },
    { q: '20 MHz 폭 Wi-Fi 신호의 전체 출력을 스펙트럼 분석기로 측정할 때 가장 적절한 방법은?',
      options: ['RBW 1 MHz로 두고 Peak 마커 값을 그대로 출력으로 기록', '채널 파워 기능으로 신호 대역폭을 적분(RMS 검파)', 'RBW를 최소로 줄이고 마커로 읽는다', 'Sample 검파기로 한 번 스윕한다'],
      answer: 1, explain: '넓은 대역 신호는 한 점의 마커 값이 RBW 안의 전력만 나타냅니다. 전체 전력은 채널 파워(대역 적분) 기능으로 구합니다.' },
    { q: 'EMC 방출 시험에서 최종 판정에 주로 쓰는 검파기 조합은?',
      options: ['Neg Peak와 Sample', 'RMS와 Sample', 'Peak와 Min Hold', '준첨두(QP)와 평균(AV)'],
      answer: 3, explain: 'CISPR 방출 한계는 대부분 준첨두(QP) 한계와 평균(AV) 한계로 정해져 있습니다. Peak는 빠른 사전 스캔에 씁니다.' },
    { q: '화면에 보이는 신호가 분석기 내부에서 생긴 것인지 확인하는 간단한 방법은?',
      options: ['입력 감쇠(ATT)를 10 dB 바꿔 레벨이 따라 변하는지 본다', 'VBW를 줄인다', 'Span을 넓힌다', '트레이스를 View로 바꾼다'],
      answer: 0, explain: '외부 신호는 ATT를 바꿔도 표시 레벨이 유지되지만(자동 보정), 내부 왜곡 성분은 레벨이 변합니다.' },
    { q: 'VBW 설정에 관한 설명으로 옳은 것은?',
      options: ['VBW는 두 신호를 구분하는 능력을 결정한다', '일반적으로 VBW ≥ 3 × RBW로 둔다', 'VBW를 줄이면 잡음 바닥이 10 dB씩 내려간다', 'VBW는 입력 감쇠기를 뜻한다'],
      answer: 1, explain: 'VBW는 검파 후 평활 필터입니다. 분해능은 RBW가 결정하며, VBW를 과도하게 줄이면 변조·펄스 신호 레벨이 왜곡될 수 있어 보통 VBW ≥ 3 × RBW로 둡니다.' }
  ],
  refs: [
    { title: 'Keysight — Spectrum Analysis Basics (Application Note 150)', url: 'https://www.keysight.com', note: '스펙트럼 분석 기초의 고전적인 해설서. 사이트에서 “Application Note 150” 검색' },
    { title: 'Rohde & Schwarz — 스펙트럼 분석 기초 자료', url: 'https://www.rohde-schwarz.com', note: '“Fundamentals of Spectrum Analysis” 및 제품 매뉴얼' },
    { title: 'Anritsu — Signal Analyzer 제품군', url: 'https://www.anritsu.com', note: 'MS2850A, MS2830A 등 제품 정보·애플리케이션 노트' }
  ]
});

/* ---------------------------------------------------------------
 * 2. 신호 발생기 · 파워미터 · 무선통신 시험기 (+ 보조 장비)
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-generator-meter-tester',
  module: 'equip',
  order: 2,
  title: '신호 발생기 · 파워미터 · 무선통신 시험기',
  minutes: 30,
  level: '기초',
  summary: '신호를 “만드는” 신호 발생기, 전력을 가장 정확히 “재는” 파워미터, 단말을 “조종하는” 무선통신 시험기(콜박스)와 DC 전원·항온항습 챔버 등 보조 장비를 익힙니다.',
  objectives: [
    '신호 발생기로 수신 감도·블로킹 시험 신호를 만드는 구성을 설명할 수 있다.',
    '다이오드·열전형·피크 파워센서의 차이와 제로/캘 절차를 안다.',
    '무선통신 시험기의 역할(기지국 에뮬레이션, 최대 출력 제어)과 시그널링/논시그널링의 차이를 설명할 수 있다.',
    'DC 전원공급기, 항온항습 챔버, 온습도 기록계가 어떤 시험에 쓰이는지 안다.'
  ],
  body: `
<p>스펙트럼 분석기가 “보는” 장비라면, 이번 강의의 장비들은 신호를 <strong>만들고(신호 발생기)</strong>, <strong>정확히 재고(파워미터)</strong>, 시료를 <strong>원하는 상태로 동작시키는(무선통신 시험기)</strong> 장비입니다. 무선 시험 셋업은 대부분 이 장비들의 조합으로 이루어집니다.</p>

<h2>신호 발생기</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/signal-generator.svg" alt="신호 발생기 일러스트: 1 주파수·레벨 표시, 2 노브와 키패드, 3 RF ON 버튼, 4 RF 출력 단자"></div>
  <div>
    <h3>신호 발생기</h3>
    <div class="equip-en">Signal Generator (Analog / Vector)</div>
    <p>① 주파수·레벨 표시 ② 노브·키패드 ③ RF ON/OFF ④ RF 출력 단자. 설정한 주파수·레벨·변조의 신호를 정확하게 만들어 냅니다.</p>
    <dl>
      <dt>용도</dt><dd>수신기 시험(수신 감도, 블로킹, 인접채널 선택도, 상호변조 내성)의 원하는 신호·방해 신호, 방사 내성(RS)·전도 내성(CS) 신호원, 경로 손실 측정용 기준 신호</dd>
      <dt>주요 기능</dt><dd>CW 출력, 아날로그 변조(AM/FM/Pulse), 벡터 변조·ARB 파형 재생(LTE/NR/Wi-Fi 등 표준 신호), 주파수·레벨 스윕, 리스트 모드</dd>
      <dt>사용법 핵심</dt><dd>주파수 → 레벨 → 변조/파형 선택 → <strong>RF ON</strong>(가장 흔한 실수: 켜지 않음) → 케이블 손실만큼 레벨 Offset</dd>
      <dt>주의</dt><dd>표시 레벨은 <em>출력 단자 기준</em>이므로 경로 손실 보정 필요. 시료의 송신 신호가 발생기로 역입력되지 않게(역전력 한계) 감쇠기·아이솔레이터 사용</dd>
      <dt>대표 모델</dt><dd>R&amp;S SMW200A · SMBV100B · SMB100B, Keysight MXG N5182B · EXG N5172B · PSG E8257D, Anritsu MG3710E (<a href="https://www.rohde-schwarz.com" target="_blank" rel="noopener">R&amp;S</a>, <a href="https://www.keysight.com" target="_blank" rel="noopener">Keysight</a>, <a href="https://www.anritsu.com" target="_blank" rel="noopener">Anritsu</a>)</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>만드는 신호</th><th>대표 용도</th></tr></thead>
<tbody>
<tr><td>아날로그(CW) 발생기</td><td>순수한 단일 주파수, AM/FM/펄스 변조</td><td>블로킹의 CW 방해 신호, RS/CS 시험 신호원, 손실 측정</td></tr>
<tr><td>벡터 신호 발생기(VSG)</td><td>I/Q 변조된 디지털 통신 신호, ARB 파형</td><td>수신 감도(원하는 신호), 변조된 방해 신호, 다중 반송파</td></tr>
</tbody></table></div>

<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="수신 감도 및 블로킹 시험 연결도">
  <defs><marker id="eqsg-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="30" width="150" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="95" y="54" font-weight="700" fill="var(--dg-accent)">신호 발생기 1</text><text x="95" y="73" font-size="12" fill="var(--text-2)">원하는 신호 (변조)</text>
    <rect x="20" y="150" width="150" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="95" y="174" font-weight="700" fill="var(--dg-accent-2)">신호 발생기 2</text><text x="95" y="193" font-size="12" fill="var(--text-2)">방해 신호 (CW/변조)</text>
    <path d="M170 58 H300 V100" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsg-arw)"/>
    <rect x="200" y="160" width="70" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="235" y="183" font-size="12">필터(선택)</text>
    <path d="M170 178 H198 M270 178 H300 V136" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsg-arw)"/>
    <rect x="262" y="102" width="76" height="32" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="300" y="123" font-size="12" font-weight="700">합성기</text>
    <path d="M338 118 H398" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsg-arw)"/>
    <rect x="400" y="100" width="100" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="450" y="123" font-size="12" font-weight="700">가변 감쇠기</text>
    <path d="M500 118 H588" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsg-arw)"/>
    <path d="M580 88 V150" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="580" y="80" font-size="11.5" fill="var(--dg-accent-2)">기준면(보정 위치)</text>
    <rect x="590" y="90" width="150" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="665" y="115" font-weight="700">시료 (EUT)</text><text x="665" y="134" font-size="12" fill="var(--text-2)">안테나 단자(전도)</text>
    <path d="M665 150 V200" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsg-arw)"/>
    <rect x="600" y="202" width="130" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="665" y="227" font-size="12">PC: BER/PER 판정</text>
    <text x="440" y="200" font-size="12" fill="var(--text-3)">두 경로 각각의 손실을 기준면까지 측정해 보정</text>
  </g>
</svg>
<figcaption>그림 1. 수신 감도·블로킹 시험의 대표 연결도(전도 방식). 감도 시험은 신호 발생기 1만, 블로킹·선택도 시험은 두 발생기를 합성해 사용합니다.</figcaption>
</figure>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  수신 감도 시험은 “아주 작은 목소리(원하는 신호)를 점점 줄여서 어디까지 알아듣는지”, 블로킹 시험은 “옆에서 누가 크게 소리칠 때(방해 신호)도 원래 목소리를 알아듣는지”를 보는 시험입니다. 신호 발생기는 이 두 목소리를 정확한 크기로 만들어 주는 장비입니다.
</div>

<h2>파워미터와 파워센서</h2>
<p>파워미터(Power Meter)는 RF 전력을 <strong>가장 정확하게</strong> 재는 장비입니다. 스펙트럼 분석기의 절대 레벨 정확도가 보통 수십 분의 1 dB~1 dB 수준이라면, 파워센서는 그보다 우수한 경우가 많아 <strong>출력 전력의 기준 측정</strong>과 다른 장비 확인(검증)에 씁니다. 실제 측정은 센서가 하고, 본체는 표시·계산을 담당합니다. 요즘은 본체 없이 PC에 USB로 연결하는 센서도 많습니다.</p>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/power-meter.svg" alt="파워미터와 센서 일러스트: 1 측정값 표시, 2 파워센서, 3 1 mW 기준 출력(REF)"></div>
  <div>
    <h3>파워미터 · 파워센서</h3>
    <div class="equip-en">Power Meter / Power Sensor (Average, Peak)</div>
    <p>① 측정값 표시 ② 파워센서(RF 입력) ③ 기준 출력(REF 1 mW, 일부 모델). 센서를 시료 출력(감쇠기 경유)에 연결해 평균 또는 피크 전력을 측정합니다.</p>
    <dl>
      <dt>용도</dt><dd>전도 출력(평균·피크) 측정, SAR 시험 전 기준 출력 확인, 기준 다이폴 입력 전력 설정, 경로 손실 측정, 신호 발생기 레벨 검증</dd>
      <dt>주요 기능</dt><dd>평균 전력, 피크·Crest factor, 게이트 평균(버스트 구간 평균), 듀티 사이클 보정, 오프셋, 주파수별 교정계수(Cal factor) 자동 적용</dd>
      <dt>사용법 핵심</dt><dd>예열 → <strong>제로(Zero)</strong> → (필요 시) <strong>캘(Cal)</strong> → 측정 주파수 입력 → 오프셋 입력 → 측정</dd>
      <dt>주의</dt><dd>센서 최대 입력(예: +20 dBm 또는 +23 dBm급)이 작아 <strong>감쇠기 필수</strong>인 경우가 많음. 센서 교정성적서의 주파수 범위 확인, 커넥터 규정 토크</dd>
      <dt>대표 모델</dt><dd>R&amp;S NRP 파워센서 · NRX 본체, Keysight P-series N1911A/N1912A · EPM N1913A/N1914A · USB 센서(U2000 계열 등), Anritsu ML2490A 계열</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>센서 종류</th><th>원리</th><th>장점</th><th>단점 · 주의</th></tr></thead>
<tbody>
<tr><td>열전형(열전쌍, Thermocouple)</td><td>RF 전력으로 생긴 열을 측정</td><td>변조 형태와 무관한 진짜 평균 전력(True RMS)</td><td>느림, 동적 범위가 좁음(저전력 측정 불리)</td></tr>
<tr><td>다이오드 평균 센서</td><td>다이오드 검파 전압 측정</td><td>빠르고 감도 좋음(넓은 동적 범위)</td><td>제곱 법칙 구간을 벗어나면 변조 신호에서 오차 → 다중 경로(multi-path) 구조 센서로 보완</td></tr>
<tr><td>피크(Peak) 파워센서</td><td>넓은 비디오 대역폭으로 포락선 추적</td><td>버스트의 피크·평균·상승시간, 게이트 평균</td><td>센서 비디오 대역폭이 신호 대역폭보다 좁으면 피크를 낮게 읽음</td></tr>
</tbody></table></div>

<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="버스트 신호의 피크, 버스트 평균, 전체 평균 전력">
  <g font-size="13" fill="var(--text)">
    <path d="M60 200 H720 M60 30 V200" fill="none" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="720" y="222" font-size="12" fill="var(--text-3)" text-anchor="end">시간</text>
    <text x="24" y="40" font-size="12" fill="var(--text-3)">전력</text>
    <path d="M60 200 H100 V70 L110 55 L120 72 L130 60 L140 68 L150 52 L160 70 L170 62 L180 66 L190 58 L200 70 V200 H300 V70 L310 58 L320 68 L330 54 L340 70 L350 62 L360 66 L370 56 L380 70 L390 60 L400 70 V200 H500 V70 L510 60 L520 66 L530 55 L540 70 L550 58 L560 68 L570 62 L580 56 L590 70 L600 64 V200 H720" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="2"/>
    <path d="M60 52 H720" stroke="var(--dg-accent-2)" stroke-dasharray="6 4" stroke-width="1.5"/>
    <text x="712" y="46" text-anchor="end" font-size="12.5" font-weight="700" fill="var(--dg-accent-2)">피크 전력</text>
    <path d="M100 64 H200 M300 64 H400 M500 64 H600" stroke="var(--dg-ok)" stroke-width="3"/>
    <text x="250" y="96" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--dg-ok)">버스트(게이트) 평균</text>
    <path d="M60 150 H720" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1.5"/>
    <text x="712" y="144" text-anchor="end" font-size="12.5" font-weight="700" fill="var(--text-2)">전체 평균 (듀티 50 %면 약 3 dB 낮음)</text>
    <path d="M100 218 H300" stroke="var(--dg-line)"/><path d="M100 212 v12 M300 212 v12 M200 212 v12" stroke="var(--dg-line)"/>
    <text x="150" y="234" text-anchor="middle" font-size="11.5" fill="var(--text-3)">ON</text><text x="250" y="234" text-anchor="middle" font-size="11.5" fill="var(--text-3)">OFF</text>
  </g>
</svg>
<figcaption>그림 2. 버스트 신호에서 “출력”은 무엇을 말하느냐에 따라 값이 다릅니다. 듀티 사이클 D일 때 버스트 평균 = 전체 평균 + 10·log(1/D) dB.</figcaption>
</figure>

<ol class="steps">
  <li><strong>예열</strong>본체·센서를 켜고 매뉴얼 권장 시간(예: 30분 전후) 예열합니다. 온도 변화가 드리프트를 만듭니다.</li>
  <li><strong>제로(Zero)</strong>센서에 <em>RF 신호가 없는 상태</em>에서 Zero를 실행해 센서 자체의 오프셋을 없앱니다. 시료가 켜진 상태로 제로하면 안 됩니다. 저전력 측정 전·온도가 변했을 때 다시 합니다.</li>
  <li><strong>캘(Cal)</strong>기준 출력(예: 50 MHz 1 mW)이 필요한 센서는 본체 REF 단자에 연결해 캘을 수행합니다. 최근 다수의 센서는 내부 교정 데이터로 이 과정이 필요 없습니다(매뉴얼 확인).</li>
  <li><strong>주파수 입력</strong>측정 주파수를 입력해야 센서 메모리의 주파수별 교정계수가 적용됩니다. 잊으면 고주파에서 오차가 커집니다.</li>
  <li><strong>오프셋 입력 후 측정</strong>감쇠기+케이블 손실을 오프셋으로 입력하고, 필요하면 게이트·듀티 사이클 설정 후 측정·기록합니다.</li>
</ol>

<h2>무선통신 시험기(콜박스)</h2>
<p>휴대폰 같은 셀룰러 단말은 스스로 최대 출력으로 송신하지 않습니다. 기지국이 “지금 출력을 올려라/내려라”라고 계속 지시(전력 제어)하기 때문입니다. 그래서 시험실에서는 <strong>기지국 흉내를 내는 장비</strong>로 단말과 실제 통화 연결을 맺고, 원하는 채널·대역폭·변조·출력 상태로 단말을 “조종”합니다. 이 장비가 무선통신 시험기(Radio Communication Tester), 흔히 <strong>콜박스(Call box)</strong> 또는 <strong>기지국 에뮬레이터</strong>입니다.</p>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/radio-comm-tester.svg" alt="무선통신 시험기 일러스트: 1 접속 상태·송신 출력 표시 화면, 2 기지국 파라미터 설정 키, 3 RF 입출력 단자"></div>
  <div>
    <h3>무선통신 시험기 (기지국 에뮬레이터)</h3>
    <div class="equip-en">Radio Communication Tester / Base Station Emulator / Call Box</div>
    <p>① 접속 상태·단말 송신 출력 표시 ② 대역·채널·RB·전력제어 설정 ③ RF 단자(RF COM: 송수신 겸용). 단말과 통신 프로토콜로 연결해 시험 상태를 만듭니다.</p>
    <dl>
      <dt>용도</dt><dd>셀룰러(GSM, WCDMA, LTE, 5G NR)·Wi-Fi·Bluetooth 단말의 송신 출력·변조 품질·수신 감도 측정, SAR·HAC·OTA 시험 중 단말을 최대 출력 등 지정 상태로 유지</dd>
      <dt>주요 기능</dt><dd>셀 파라미터(밴드, 채널, 대역폭, SCS), 전력 제어(TPC “All Up” = 최대 출력), RB 할당·변조 방식 지정, 핸드오버, 송신기 측정(출력, EVM, ACLR), 수신기 측정(BLER/BER)</dd>
      <dt>사용법 핵심</dt><dd>시뮬레이션 셀 설정 → 경로 손실 입력 → 셀 ON → 단말(시험용 USIM) 접속 → 호/데이터 연결 → 시험 조건(RB, TPC) 설정 → 측정</dd>
      <dt>주의</dt><dd>시험용 USIM 필요, 단말의 지원 밴드·기능 확인, 시험 모드/펌웨어 차이, 경로 손실을 정확히 입력하지 않으면 단말 출력 판정이 틀어짐</dd>
      <dt>대표 모델</dt><dd>R&amp;S CMW500(멀티 표준) · CMW270(Wi-Fi/BT 등 비셀룰러) · CMX500(5G NR), Keysight UXM E7515B(5G), Anritsu MT8821C · MT8000A(5G), Bluetooth 전용 예: Anritsu MT8852B — 모델별 지원 표준·옵션은 사양서 확인</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>시그널링 (Signaling)</th><th>논시그널링 (Non-signaling)</th></tr></thead>
<tbody>
<tr><td>방식</td><td>시험기가 기지국처럼 동작, 단말과 프로토콜로 접속(통화·데이터 연결)</td><td>프로토콜 없이 단말을 시험 모드(칩셋 툴/명령)로 고정 송신시키고 계측만 수행</td></tr>
<tr><td>장점</td><td>실제 사용 상태 재현, 전력 제어·RB 설정을 표준 방식으로</td><td>빠름(생산·대량 측정), 접속 절차 불필요</td></tr>
<tr><td>단점</td><td>설정 복잡, 시험용 USIM·접속 문제 발생 가능</td><td>제조사 시험 SW 필요, 실제 동작과 다를 수 있음</td></tr>
<tr><td>주 사용</td><td>셀룰러 인증 시험, SAR(셀룰러)</td><td>Wi-Fi·BT 등 단거리 무선(시료 시험 모드), 생산 라인</td></tr>
</tbody></table></div>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="SAR 시험에서 무선통신 시험기와 단말의 무선 연결">
  <defs><marker id="eqsg-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="80" width="170" height="80" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="105" y="110" font-weight="700" fill="var(--dg-accent)">무선통신 시험기</text><text x="105" y="130" font-size="12" fill="var(--text-2)">기지국 에뮬레이터</text><text x="105" y="148" font-size="12" fill="var(--text-2)">TPC: All Up</text>
    <path d="M190 120 H290" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="240" y="112" font-size="12" fill="var(--text-3)">RF 케이블</text>
    <path d="M300 90 V150 M300 120 L320 100 M300 120 L320 140" stroke="var(--dg-line)" stroke-width="2.5" fill="none"/>
    <text x="300" y="175" font-size="12" fill="var(--text-2)">연결용 안테나</text>
    <path d="M335 105 q 20 15 0 30 M350 95 q 30 25 0 50 M365 85 q 40 35 0 70" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="370" y="60" font-size="12" fill="var(--dg-accent-2)">하향: 출력 올려라(TPC)</text>
    <text x="370" y="205" font-size="12" fill="var(--dg-accent-2)">상향: 단말 최대 출력 송신</text>
    <rect x="480" y="140" width="250" height="36" rx="4" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="605" y="163" font-size="12">팬텀 (조직등가액)</text>
    <rect x="555" y="176" width="100" height="14" rx="3" fill="var(--dg-accent-2)"/>
    <text x="605" y="210" font-size="12" fill="var(--text-2)">시험 단말 (팬텀 아래)</text>
    <path d="M605 40 V130" stroke="var(--dg-line)" stroke-width="3"/>
    <text x="605" y="30" font-size="12" fill="var(--text-2)">SAR 프로브(로봇)</text>
  </g>
</svg>
<figcaption>그림 3. SAR 시험에서 시험기는 무선으로 단말과 연결해 최대 출력 상태를 유지시킵니다. 연결용 안테나는 SAR 측정에 영향이 적도록 떨어뜨려 배치합니다.</figcaption>
</figure>

<div class="callout tip">
  <span class="callout-title">SAR 시험 전 “출력 먼저”</span>
  SAR 측정 전에는 같은 채널·RB·변조 조건에서 <strong>전도 출력을 먼저 측정</strong>해, 제조사가 신고한 목표 출력(튠업 허용치) 안에 있는지 확인합니다. 이 값은 SAR 결과를 최대 허용 출력으로 환산(스케일링)할 때 쓰입니다. 자세한 내용은 <a href="#/m/sar">06 SAR 모듈</a>에서 다룹니다.
</div>

<h2>보조 장비: 전원 · 온도 · 환경</h2>
<p>무선 시험에는 주파수 안정도(온도·전압 변화에 따른 주파수 오차)처럼 <strong>환경 조건을 바꾸어 가며</strong> 측정하는 항목이 있고, 모든 시험은 <strong>환경 조건을 기록</strong>해야 합니다. 이를 위한 보조 장비도 교정 대상 장비로 관리됩니다.</p>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/dc-power-supply.svg" alt="DC 전원공급기 일러스트: 전압·전류 표시, 조정 노브, 출력 단자"></div>
  <div>
    <h3>DC 전원공급기</h3>
    <div class="equip-en">DC Power Supply</div>
    <p>시료에 배터리 대신 정밀한 직류 전압을 공급합니다. 전압을 바꿔 가며 시료가 정상 동작하는지, 주파수·출력이 유지되는지 봅니다.</p>
    <dl>
      <dt>용도</dt><dd>정격 전압 공급, 전압 변동 시험(예: 정격의 ±10~15 % 또는 배터리 방전 종지 전압 — 규격 확인), 소비 전류 확인</dd>
      <dt>주요 기능</dt><dd>정전압(CV)/정전류(CC), 전류 제한, 원격 감지(Sense), 출력 ON/OFF</dd>
      <dt>주의</dt><dd>극성(+/−) 확인, 전류 제한값 설정 후 연결, 긴 전원선에서의 전압 강하(측정은 시료 단자에서)</dd>
      <dt>대표 모델</dt><dd>Keysight E36100 계열 등, R&amp;S NGx 계열 등 — 다수 제조사</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/temp-chamber.svg" alt="항온항습 챔버 일러스트: 내부 시료, 온도 표시 조작부, 케이블 관통 포트"></div>
  <div>
    <h3>항온항습 챔버 (환경 시험기)</h3>
    <div class="equip-en">Temperature &amp; Humidity Chamber</div>
    <p>시료를 원하는 온도(·습도)에 두고 케이블 관통 포트로 RF 신호를 꺼내 측정합니다.</p>
    <dl>
      <dt>용도</dt><dd>주파수 안정도(허용 편차) 시험 — 예: −20 °C ~ +50 °C를 10 °C 간격으로 측정(적용 규격·고시 확인), 극한 조건 출력 확인</dd>
      <dt>사용법 핵심</dt><dd>목표 온도 도달 후 시료가 열적으로 안정될 때까지 충분히 대기(규격에서 정한 시간) → 측정. 저온에서 결로 주의</dd>
      <dt>주의</dt><dd>챔버 내부 케이블 손실도 온도에 따라 변함(기준 측정 필요), 문 개방 시 결로·온도 급변</dd>
      <dt>대표 모델</dt><dd>ESPEC 등 환경 시험기 제조사 제품군</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/oscilloscope.svg" alt="오실로스코프 일러스트: 파형 화면, 조정 노브, 채널 입력"></div>
  <div>
    <h3>오실로스코프</h3>
    <div class="equip-en">Oscilloscope</div>
    <p>시간에 따른 전압 파형을 봅니다. RF 인증 시험의 주 장비는 아니지만 버스트 타이밍, 듀티 사이클 확인, EMC 내성 시험 발생기의 파형 검증(ESD·EFT·서지 파형 교정 확인)에 쓰입니다.</p>
    <dl>
      <dt>주의</dt><dd>프로브 감쇠비(×1/×10) 설정, 고전압 측정은 전용 고전압 프로브·차동 프로브 사용</dd>
      <dt>대표 모델</dt><dd>Keysight InfiniiVision/Infiniium, R&amp;S RTx 계열, Tektronix 등</dd>
    </dl>
  </div>
</div>

<div class="card-grid">
  <div class="card"><h3>🌡️ 온습도 기록계</h3><p>시험실·챔버의 온도·습도를 연속 기록합니다. 시험 기록지의 “환경 조건”은 이 기록으로 뒷받침됩니다. 규격이 요구하는 범위(예: 15~35 °C, 상대습도 25~75 % 등 — 규격별 확인)를 벗어나면 시험을 중단하거나 영향 평가를 기록합니다.</p></div>
  <div class="card"><h3>📏 기압계</h3><p>ESD 기중 방전처럼 기압의 영향을 받는 시험은 기압도 기록합니다(예: 86~106 kPa 범위 요구 — 규격 확인).</p></div>
</div>
`,
  quiz: [
    { q: '파워센서 제로(Zero)를 수행할 때 올바른 상태는?',
      options: ['시료를 최대 출력으로 송신시킨 상태', '센서에 RF 신호가 입력되지 않는 상태', '센서를 1 mW 기준 출력에 연결한 상태', '신호 발생기로 0 dBm을 넣은 상태'],
      answer: 1, explain: '제로는 입력이 없을 때의 센서 오프셋을 없애는 과정입니다. 신호가 있는 상태에서 제로하면 이후 측정값이 틀어집니다.' },
    { q: '듀티 사이클 25 %인 버스트 신호의 전체 평균 전력이 +14 dBm이다. 버스트 구간 평균 전력은 약 얼마인가?',
      options: ['+8 dBm', '+17 dBm', '+20 dBm', '+26 dBm'],
      answer: 2, explain: '10·log(1/0.25) = 6 dB. 버스트 평균 = 14 + 6 = +20 dBm.' },
    { q: 'SAR 시험에서 무선통신 시험기(콜박스)의 주된 역할은?',
      options: ['팬텀의 조직등가액 온도를 유지한다', 'SAR 프로브를 교정한다', '단말과 접속해 지정 채널에서 최대 출력으로 송신하도록 제어한다', '로봇의 이동 경로를 계산한다'],
      answer: 2, explain: '셀룰러 단말은 기지국의 전력 제어를 따르므로, 시험기가 기지국 역할을 하며 TPC 등으로 최대 출력 상태를 유지시킵니다.' },
    { q: '시그널링 방식과 비교한 논시그널링 방식의 특징으로 옳은 것은?',
      options: ['프로토콜 접속 없이 시료를 시험 모드로 고정 송신시켜 측정한다', '시험용 USIM이 반드시 필요하다', '기지국 전력 제어를 실제와 똑같이 재현한다', 'Wi-Fi 시험에는 사용할 수 없다'],
      answer: 0, explain: '논시그널링은 칩셋 시험 모드 등으로 시료를 고정 송신시키고 계측만 합니다. Wi-Fi·BT 시험에서 흔히 사용합니다.' },
    { q: '신호 발생기로 수신 감도 시험을 할 때 가장 흔한 실수가 아닌 것은?',
      options: ['RF ON을 누르지 않음', '케이블·합성기 손실을 보정하지 않음', '시료 송신 신호가 발생기로 역입력되는 것을 고려하지 않음', '기준면까지의 손실을 측정해 레벨에 반영함'],
      answer: 3, explain: '기준면(시료 단자)까지의 손실을 측정해 반영하는 것은 올바른 절차입니다.' }
  ],
  refs: [
    { title: 'Rohde & Schwarz — 신호 발생기 · 파워센서 · 무선통신 시험기', url: 'https://www.rohde-schwarz.com', note: 'SMW200A, NRP, CMW500, CMX500 제품 정보' },
    { title: 'Keysight — Signal Generators, Power Meters, UXM', url: 'https://www.keysight.com', note: 'MXG N5182B, P-series, UXM E7515B 등. “Fundamentals of RF and Microwave Power Measurements” 애플리케이션 노트 추천' },
    { title: 'Anritsu — Radio Communication Test Station', url: 'https://www.anritsu.com', note: 'MT8821C, MT8000A, MT8852B 등' }
  ]
});

/* ---------------------------------------------------------------
 * 3. RF 연결 부품과 네트워크 분석기
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-rf-path-vna',
  module: 'equip',
  order: 3,
  title: 'RF 연결 부품 · 네트워크 분석기 · 경로 손실 보정',
  minutes: 30,
  level: '중급',
  summary: '케이블·커넥터·감쇠기·결합기·필터·앰프 등 측정 경로를 이루는 부품과, 벡터 네트워크 분석기(VNA)로 경로 손실을 측정해 보정표를 만드는 방법, 교정 라벨 읽는 법을 익힙니다.',
  objectives: [
    'N, SMA, 3.5 mm, 2.92 mm, BNC 커넥터를 구분하고 올바르게 체결한다.',
    '감쇠기, 방향성 결합기, 분배기, 필터, DC 블록, LNA의 역할을 설명할 수 있다.',
    'VNA의 S21로 케이블 손실을 측정하는 절차(교정 SOLT 포함)를 안다.',
    '경로 손실 보정표를 만들고 적용하며, 장비 교정 라벨을 읽을 수 있다.'
  ],
  body: `
<p>계측기가 아무리 정확해도, 시료와 계측기 사이의 <strong>케이블·감쇠기·필터</strong>에서 신호가 얼마나 줄어드는지 모르면 측정값은 틀립니다. 시험소에서는 이 “가운데 부품들”을 <strong>측정 경로(Path)</strong>라고 부르고, 그 손실을 미리 측정해 두었다가 결과에 더해 줍니다. 이것이 <strong>경로 손실 보정</strong>입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  수도관(케이블)이 길고 좁으면 끝에서 나오는 물의 양이 줄어듭니다. 끝에서 받은 물(계측기 읽음값)에 “관에서 샌 양(경로 손실)”을 더해야 원래 수도꼭지에서 나온 양(시료 출력)을 알 수 있습니다.
</div>

<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="측정 경로와 경로 손실 합산 예">
  <defs><marker id="eqrf-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="50" width="100" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="60" y="76" font-weight="700" fill="var(--dg-accent)">시료</text><text x="60" y="95" font-size="12" fill="var(--text-2)">안테나 단자</text>
    <path d="M110 80 H160" stroke="var(--dg-line)" stroke-width="3"/>
    <text x="135" y="70" font-size="11.5" fill="var(--text-3)">케이블 A</text>
    <rect x="160" y="60" width="110" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="215" y="85" font-weight="700">감쇠기 20 dB</text>
    <path d="M270 80 H310" stroke="var(--dg-line)" stroke-width="3"/>
    <rect x="310" y="60" width="90" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="355" y="85" font-weight="700">DC 블록</text>
    <path d="M400 80 H470" stroke="var(--dg-line)" stroke-width="3"/>
    <text x="435" y="70" font-size="11.5" fill="var(--text-3)">케이블 B</text>
    <rect x="470" y="50" width="130" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="535" y="76" font-weight="700">스펙트럼 분석기</text><text x="535" y="95" font-size="12" fill="var(--text-2)">읽음값 −3.3 dBm</text>
    <g font-size="12.5" fill="var(--dg-accent-2)" font-weight="700">
      <text x="135" y="134">1.2 dB</text><text x="215" y="134">20.0 dB</text><text x="355" y="134">0.1 dB</text><text x="435" y="134">2.0 dB</text>
    </g>
    <path d="M110 150 H470" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <path d="M110 144 v12 M470 144 v12" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="290" y="172" font-weight="700" fill="var(--dg-accent-2)">경로 손실 합계 = 23.3 dB (2.44 GHz에서 측정한 값)</text>
    <rect x="160" y="186" width="440" height="34" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-accent)"/>
    <text x="380" y="208" font-weight="700" fill="var(--dg-accent)">시료 출력 = −3.3 dBm + 23.3 dB = +20.0 dBm</text>
    <path d="M620 80 H700" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#eqrf-arw)"/>
    <text x="622" y="70" font-size="11.5" fill="var(--text-3)" text-anchor="start">Offset 23.3 dB</text>
    <text x="622" y="100" font-size="11.5" fill="var(--text-3)" text-anchor="start">입력 시 자동 계산</text>
  </g>
</svg>
<figcaption>그림 1. 경로 손실 보정의 예. 부품별 손실을 더해도 되지만, 실무에서는 <strong>경로 전체를 한 번에</strong> 측정하는 것이 더 정확합니다(부품 사이 부정합 영향까지 포함).</figcaption>
</figure>

<h2>케이블과 커넥터</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/rf-connectors.svg" alt="대표 RF 커넥터 정면 모양: N형, SMA, 3.5/2.92 mm, BNC"></div>
  <div>
    <h3>RF 케이블 · 커넥터</h3>
    <div class="equip-en">RF Cable Assemblies &amp; Coaxial Connectors</div>
    <p>시험용 케이블은 구부려도 손실·위상이 잘 변하지 않는 <strong>위상 안정(phase-stable) 케이블</strong>을 씁니다. 커넥터는 사용 주파수 상한에 맞게 고릅니다.</p>
    <dl>
      <dt>용도</dt><dd>시료–감쇠기–계측기 연결, 챔버 벽 관통(피드스루) 경로, 안테나–수신기 연결</dd>
      <dt>주의</dt><dd>최소 굽힘 반경 준수, 밟거나 꺾지 않기, 커넥터 청결(이물질·금속 가루), <strong>너트만 돌려 규정 토크</strong>로 체결</dd>
      <dt>관리</dt><dd>케이블마다 고유 번호를 붙이고 주기적으로 손실을 재측정(예: 월 1회 또는 사용 전 점검 — 사내 절차 기준)</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>커넥터</th><th>대략적 상한 주파수</th><th>특징</th><th>체결 토크(대표값)</th></tr></thead>
<tbody>
<tr><td>N형</td><td>~11 GHz (정밀형 ~18 GHz)</td><td>크고 튼튼함. 계측기 입력·챔버 경로·안테나의 표준</td><td>약 1.36 N·m (12 in-lb)</td></tr>
<tr><td>SMA</td><td>~18 GHz 전후</td><td>소형, 시료·모듈 단자에 흔함. 반복 체결 수명이 짧음</td><td>약 0.56 N·m (5 in-lb)</td></tr>
<tr><td>3.5 mm</td><td>~26.5 GHz</td><td>정밀 계측용, SMA와 나사 호환</td><td>약 0.9 N·m (8 in-lb)</td></tr>
<tr><td>2.92 mm (K형)</td><td>~40 GHz</td><td>밀리미터파 계측, SMA·3.5 mm와 나사 호환</td><td>약 0.9 N·m (8 in-lb)</td></tr>
<tr><td>2.4 mm / 1.85 mm</td><td>~50 GHz / ~67 GHz</td><td>5G mmWave 등 고주파 (SMA와 호환 안 됨)</td><td>제조사 기준</td></tr>
<tr><td>BNC</td><td>~수백 MHz~수 GHz</td><td>저주파·트리거·기준 신호(10 MHz REF)용, 원터치 체결</td><td>—</td></tr>
</tbody></table></div>
<p style="font-size:14px;color:var(--text-3)">※ 상한 주파수·토크는 제조사·등급에 따라 다릅니다. 실제 값은 커넥터·토크 렌치 사양을 따르세요.</p>

<div class="callout warn">
  <span class="callout-title">SMA와 3.5 mm/2.92 mm 혼용 주의</span>
  나사가 맞아서 체결은 되지만, 저가 SMA의 치수 공차가 정밀 커넥터를 손상시킬 수 있습니다. 정밀 커넥터(분석기·VNA 포트)에는 <strong>커넥터 세이버(보호 어댑터)</strong>를 끼워 두고 그 어댑터를 소모품처럼 교체하는 것이 일반적입니다.
</div>

<h2>감쇠기 · 결합기 · 분배기</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/attenuator.svg" alt="감쇠기 일러스트: 방열핀이 달린 고출력 감쇠기와 소형 SMA 감쇠기, 회로 기호"></div>
  <div>
    <h3>감쇠기</h3>
    <div class="equip-en">Attenuator (Fixed / Step / High-power)</div>
    <p>신호를 정해진 dB만큼 줄입니다. 계측기 보호, 부정합(반사) 완화, 레벨 조정에 씁니다.</p>
    <dl>
      <dt>용도</dt><dd>고출력 시료 → 분석기·센서 입력 보호, 발생기 출력 레벨 낮추기, 포트 간 정합 개선(“패드”)</dd>
      <dt>선택 기준</dt><dd>감쇠량(dB), <strong>허용 전력(W, 평균·피크)</strong>, 주파수 범위, 커넥터 형식</dd>
      <dt>주의</dt><dd>방향성이 있는 고출력 감쇠기는 입력 쪽 표시 확인, 발열 시 손실값 변동</dd>
      <dt>대표 제조사</dt><dd>Keysight, R&amp;S, Mini-Circuits, Weinschel 등</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/coupler-splitter.svg" alt="방향성 결합기(IN, OUT, CPL 포트)와 2-way 전력 분배기 일러스트"></div>
  <div>
    <h3>방향성 결합기 · 전력 분배기/합성기</h3>
    <div class="equip-en">Directional Coupler / Power Divider · Splitter / Combiner</div>
    <p><strong>결합기</strong>는 주 경로 신호를 거의 그대로 통과시키면서 한 방향으로 흐르는 전력의 일부(예: −20 dB)만 떼어 냅니다. <strong>분배기</strong>는 신호를 둘 이상으로 나누거나(분배), 거꾸로 합칩니다(합성).</p>
    <dl>
      <dt>용도</dt><dd>결합기: RS 시험의 순방향/반사 전력 모니터링, 고출력 신호 샘플링. 분배기: 두 신호 합성(블로킹 시험), 한 신호를 두 계측기에 동시 입력, MIMO 포트 합성 측정</dd>
      <dt>주의</dt><dd>결합기는 방향(IN→OUT)이 정해져 있음. 2-way 분배기 손실은 이상적 3 dB + 삽입손실, 저항형은 약 6 dB</dd>
    </dl>
  </div>
</div>

<h2>필터 · DC 블록 · 전치증폭기</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>부품</th><th>하는 일</th><th>언제 쓰나</th></tr></thead>
<tbody>
<tr><td>하이패스 필터(HPF)</td><td>차단 주파수 이하를 억제</td><td>고조파·상위 스퓨리어스 측정 시 강한 기본파를 제거 → 분석기 내부 왜곡 방지, ATT를 줄여 잡음 바닥 개선</td></tr>
<tr><td>대역저지(노치) 필터</td><td>특정 대역만 억제</td><td>송신 대역 근처 스퓨리어스를 볼 때 기본파만 깎아 냄</td></tr>
<tr><td>로우패스 필터(LPF)</td><td>차단 주파수 이상 억제</td><td>신호 발생기·앰프의 고조파 제거(깨끗한 시험 신호)</td></tr>
<tr><td>대역통과 필터(BPF)</td><td>원하는 대역만 통과</td><td>방해 신호 순도 확보, 특정 대역 측정</td></tr>
<tr><td>DC 블록</td><td>직류 차단, RF 통과</td><td>시료 단자에 DC 바이어스가 있거나 계측기 입력이 “0 V DC”일 때</td></tr>
<tr><td>전치증폭기(LNA)</td><td>약한 신호 증폭(이득 예: 20~40 dB)</td><td>1 GHz 이상 방사 방출, 미약한 스퓨리어스. 강한 신호가 들어오면 포화되므로 필터와 함께 사용</td></tr>
<tr><td>아이솔레이터/서큘레이터</td><td>한 방향으로만 신호 통과</td><td>발생기 보호(역전력 차단), 부정합 완화</td></tr>
<tr><td>RF 스위치 유닛</td><td>여러 경로 자동 전환</td><td>자동화 시험 시스템(다수 포트·대역 전환)</td></tr>
</tbody></table></div>
<div class="callout warn">
  <span class="callout-title">필터를 넣었으면 보정표도 바뀝니다</span>
  필터는 통과 대역에서도 손실이 있고, 차단 주파수 근처에서는 손실이 급격히 변합니다. 필터를 넣은 경로는 <strong>필터 포함 상태로 경로 손실을 다시 측정</strong>하고, 보정표 이름에 필터 사용을 표시하세요. LNA도 마찬가지로 <em>이득(음의 손실)</em>을 주파수별로 측정해 반영합니다.
</div>

<h2>벡터 네트워크 분석기(VNA)</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/vna.svg" alt="벡터 네트워크 분석기 일러스트: 1 S21·S11 표시 화면, 2 포트 1·2, 3 설정 키와 노브"></div>
  <div>
    <h3>벡터 네트워크 분석기</h3>
    <div class="equip-en">Vector Network Analyzer (VNA)</div>
    <p>① S-파라미터 화면 ② 측정 포트(PORT 1, 2) ③ 설정부. 자기가 만든 신호를 부품에 넣고, 되돌아오거나(반사) 통과한(전달) 신호를 크기와 위상까지 측정합니다.</p>
    <dl>
      <dt>용도</dt><dd>케이블·감쇠기·필터·경로의 삽입손실(S21), 반사/정재파비(S11, VSWR), 안테나 정합 확인, 유전율 측정 키트의 측정부(SAR)</dd>
      <dt>주요 기능</dt><dd>S11/S21/S12/S22, 주파수 스윕, 교정(SOLT·전자 교정 ECal 등), 마커, 데이터 저장(S2P, CSV)</dd>
      <dt>사용법 핵심</dt><dd>주파수 범위·포인트·IF BW·파워 설정 → <strong>교정</strong> → 피측정물 연결 → 측정 → 저장</dd>
      <dt>주의</dt><dd>교정 후 설정(주파수·포인트)을 바꾸면 교정 무효, 포트 최대 입력 확인(능동 소자 측정 시), 교정 키트 커넥터 관리</dd>
      <dt>대표 모델</dt><dd>Keysight PNA · ENA(E5080B) · FieldFox, R&amp;S ZNA · ZNB · ZNL, Anritsu ShockLine · VectorStar</dd>
    </dl>
  </div>
</div>

<div class="kbox">
  <div><div class="k">S11 (반사)</div><div class="v">포트1로 되돌아옴</div></div>
  <div><div class="k">S21 (전달)</div><div class="v">포트1 → 포트2</div></div>
  <div><div class="k">케이블 손실</div><div class="v">= −S21 (dB)</div></div>
</div>

<figure class="diagram">
<svg viewBox="0 0 760 280" role="img" aria-label="VNA 교정 기준면과 SOLT 교정 표준">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="230" y="20" width="300" height="70" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="380" y="50" font-weight="700">VNA</text>
    <circle cx="290" cy="90" r="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="2"/><circle cx="470" cy="90" r="10" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="290" y="72" font-size="12">PORT 1</text><text x="470" y="72" font-size="12">PORT 2</text>
    <path d="M290 100 C 290 140, 170 130, 170 160" fill="none" stroke="var(--dg-line)" stroke-width="3"/>
    <path d="M470 100 C 470 140, 590 130, 590 160" fill="none" stroke="var(--dg-line)" stroke-width="3"/>
    <text x="200" y="128" font-size="11.5" fill="var(--text-3)">시험 포트 케이블</text>
    <text x="560" y="128" font-size="11.5" fill="var(--text-3)">시험 포트 케이블</text>
    <path d="M150 162 H190 M570 162 H610" stroke="var(--dg-accent-2)" stroke-width="3" stroke-dasharray="6 3"/>
    <text x="170" y="182" font-size="12" font-weight="700" fill="var(--dg-accent-2)">기준면</text><text x="590" y="182" font-size="12" font-weight="700" fill="var(--dg-accent-2)">기준면</text>
    <path d="M170 162 C 250 230, 510 230, 590 162" fill="none" stroke="var(--dg-accent)" stroke-width="4"/>
    <text x="380" y="192" font-weight="700" fill="var(--dg-accent)">측정할 케이블/경로 (DUT)</text>
    <g font-size="12">
      <rect x="20" y="236" width="150" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="95" y="259">Short (단락)</text>
      <rect x="205" y="236" width="150" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="280" y="259">Open (개방)</text>
      <rect x="390" y="236" width="150" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="465" y="259">Load (50 Ω 정합)</text>
      <rect x="575" y="236" width="165" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="657" y="259">Thru (두 기준면 직결)</text>
    </g>
  </g>
</svg>
<figcaption>그림 2. VNA 교정(SOLT). 기준면(주황 점선)에 교정 표준을 차례로 연결하면, VNA가 기준면까지의 케이블·포트 오차를 계산해 제거합니다. 이후 측정값은 “기준면 사이에 있는 것”만의 특성이 됩니다.</figcaption>
</figure>

<ol class="steps">
  <li><strong>설정</strong>측정할 경로의 사용 주파수 범위를 모두 덮도록 Start/Stop 설정(예: 30 MHz ~ 18 GHz), 포인트 수 충분히(예: 1601), IF BW는 잡음과 속도를 고려해 선택.</li>
  <li><strong>교정</strong>시험 포트 케이블 끝(기준면)에서 SOLT 또는 전자 교정(ECal)을 수행. 커넥터 형식·성별(male/female)에 맞는 교정 키트 사용.</li>
  <li><strong>확인</strong>Thru 상태에서 S21이 0 dB 근처로 평탄한지 확인(교정 검증).</li>
  <li><strong>측정</strong>측정할 경로(케이블 + 감쇠기 + 필터 등 실제 사용 상태 그대로)를 두 기준면 사이에 연결하고 S21을 측정.</li>
  <li><strong>저장·보정표 작성</strong>S21 데이터를 CSV/S2P로 저장하고, 주파수별 손실(= −S21)로 보정표를 만듭니다. 측정일, 경로 이름, 사용 부품 일련번호를 함께 기록합니다.</li>
</ol>

<div class="callout note">
  <span class="callout-title">VNA가 없을 때: 치환법</span>
  신호 발생기 + 파워미터(또는 분석기)로도 경로 손실을 잴 수 있습니다. ① 발생기를 파워센서에 직접 연결해 기준 레벨 측정 → ② 측정할 경로를 사이에 넣고 다시 측정 → ③ 두 값의 차이가 손실. 주파수마다 반복해야 하므로 자동화 소프트웨어를 주로 씁니다.
</div>

<h2>경로 손실 보정표 만들기와 적용</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>주파수</th><th>케이블 A (dB)</th><th>감쇠기 (dB)</th><th>케이블 B (dB)</th><th>경로 합계 (dB)</th></tr></thead>
<tbody>
<tr><td class="num">1 GHz</td><td class="num">0.8</td><td class="num">20.0</td><td class="num">1.3</td><td class="num">22.1</td></tr>
<tr><td class="num">2.44 GHz</td><td class="num">1.2</td><td class="num">20.1</td><td class="num">2.0</td><td class="num">23.3</td></tr>
<tr><td class="num">5.5 GHz</td><td class="num">1.9</td><td class="num">20.2</td><td class="num">3.1</td><td class="num">25.2</td></tr>
<tr><td class="num">10 GHz</td><td class="num">2.7</td><td class="num">20.4</td><td class="num">4.4</td><td class="num">27.5</td></tr>
</tbody></table></div>
<p style="font-size:14px;color:var(--text-3)">※ 교육용 가상 예시. 케이블 손실은 주파수가 높을수록 커집니다.</p>
<ul>
  <li><strong>단일 주파수 측정</strong>(출력, 주파수 오차 등) — 해당 주파수의 손실을 분석기 <em>Ref Level Offset</em>에 입력.</li>
  <li><strong>넓은 대역 측정</strong>(스퓨리어스 등) — 주파수별 보정표를 분석기 <em>트랜스듀서(Transducer) 팩터</em> 또는 측정 소프트웨어에 입력해 주파수마다 다른 보정값 적용. 표 사이 주파수는 선형 보간.</li>
  <li><strong>기록</strong> — 기록지에 “적용한 보정값(또는 보정표 파일명·측정일)”을 반드시 적습니다. 보정값이 없는 원시값만 남으면 나중에 검증할 수 없습니다.</li>
</ul>
<p>손실 보정 계산은 <a href="#/tools">RF 계산기</a>의 케이블 손실 보정 기능으로 연습해 볼 수 있습니다.</p>

<h2>교정 라벨 읽는 법과 소급성</h2>
<p>시험에 쓰는 모든 계측기(케이블·감쇠기 같은 부품 포함, 사내 절차에 따라)는 <strong>정해진 주기로 교정</strong>되어야 하며, 시험 전에 교정 유효기간을 확인하는 것이 엔지니어의 기본 의무입니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="교정 라벨 예시와 측정 소급성 체계">
  <defs><marker id="eqrf-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)">
    <rect x="20" y="20" width="280" height="200" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="3"/>
    <rect x="20" y="20" width="280" height="36" rx="10" fill="var(--dg-ok)"/>
    <text x="160" y="44" font-weight="700" fill="#fff" text-anchor="middle">교 정 필 (CALIBRATED)</text>
    <text x="36" y="82">관리번호</text><text x="130" y="82" font-weight="700">EQ-SA-003</text>
    <text x="36" y="108">교정일</text><text x="130" y="108" font-weight="700">2026-03-15</text>
    <text x="36" y="134">차기교정일</text><text x="130" y="134" font-weight="700" fill="var(--dg-accent-2)">2027-03-14</text>
    <text x="36" y="160">교정기관</text><text x="130" y="160" font-weight="700">○○교정센터(KOLAS)</text>
    <text x="36" y="186">성적서 번호</text><text x="130" y="186" font-weight="700">C-26-0123</text>
    <text x="36" y="210" font-size="11.5" fill="var(--text-3)">(교육용 가상 라벨)</text>
    <g text-anchor="middle">
      <rect x="360" y="20" width="380" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="550" y="43" font-weight="700">국제단위계(SI) · 국가측정표준 (한국: KRISS)</text>
      <path d="M550 56 V70" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqrf-arw2)"/>
      <rect x="360" y="72" width="380" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="550" y="95" font-weight="700">인정받은 교정기관 (KOLAS 등)</text>
      <path d="M550 108 V122" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqrf-arw2)"/>
      <rect x="360" y="124" width="380" height="36" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="550" y="147" font-weight="700" fill="var(--dg-accent)">우리 시험소 계측기 (교정성적서)</text>
      <path d="M550 160 V174" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqrf-arw2)"/>
      <rect x="360" y="176" width="380" height="36" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/><text x="550" y="199" font-weight="700" fill="var(--dg-accent-2)">시험 결과 (시험성적서)</text>
      <text x="550" y="238" font-size="12" fill="var(--text-3)">끊기지 않는 교정의 사슬 = 측정 소급성(Traceability)</text>
    </g>
  </g>
</svg>
<figcaption>그림 3. 교정 라벨(왼쪽)과 측정 소급성 체계(오른쪽). 라벨 양식은 시험소마다 다릅니다.</figcaption>
</figure>
<ul>
  <li><strong>차기교정일이 시험일 이후인지</strong> 확인합니다. 시험 도중 만료되는 일정도 피합니다.</li>
  <li>라벨의 관리번호가 <strong>장비 목록·기록지의 장비 번호와 일치</strong>하는지 확인합니다.</li>
  <li>“사용 제한”, “부분 교정(일부 기능·범위만)” 라벨이 있으면 사용 범위를 확인합니다.</li>
  <li>교정성적서의 <strong>보정값(측정값과 표준값의 차이)</strong>이 시험 결과에 영향을 줄 만큼 크면 보정해서 사용합니다(사내 절차).</li>
  <li>교정 사이에는 <strong>중간점검(Intermediate check)</strong>으로 장비 상태를 확인합니다. 예: 신호 발생기 기준 신호를 분석기와 파워미터로 동시에 읽어 비교.</li>
</ul>
<p>교정·소급성의 품질 요구사항은 <a href="#/m/process">07 모듈</a>에서 ISO/IEC 17025와 함께 다룹니다.</p>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>
    <ul>
      <li>지난달 보정표를 그대로 사용(케이블 교체 사실 모름)</li>
      <li>부품별 손실을 따로 재서 단순 합산만 함</li>
      <li>VNA 교정 후 주파수 범위를 바꿔서 측정</li>
      <li>커넥터를 몸체째 돌려 체결, 토크 렌치 미사용</li>
    </ul>
  </div>
  <div class="good"><h4>✅ 좋은 예</h4>
    <ul>
      <li>시험 전 경로 손실 점검, 케이블 번호 확인</li>
      <li>실제 사용 상태(모든 부품 연결) 그대로 경로 전체 측정</li>
      <li>설정 변경 시 재교정, Thru로 교정 검증</li>
      <li>너트만 돌리고 규정 토크, 커넥터 세이버 사용</li>
    </ul>
  </div>
</div>
`,
  quiz: [
    { q: '분석기 읽음값이 −5.0 dBm, 시료–분석기 간 경로 손실이 25.5 dB일 때 시료 출력은?',
      options: ['−30.5 dBm', '+20.5 dBm', '+25.5 dBm', '−5.0 dBm'],
      answer: 1, explain: '시료 출력 = 읽음값 + 경로 손실 = −5.0 + 25.5 = +20.5 dBm.' },
    { q: 'VNA로 케이블 손실을 측정할 때 필요한 S-파라미터는?',
      options: ['S11', 'S22', 'S21', 'S12만 가능'],
      answer: 2, explain: 'S21은 포트 1에서 포트 2로 전달되는 신호 비율로, 케이블 삽입손실 = −S21(dB)입니다.' },
    { q: '고조파 스퓨리어스 측정에서 하이패스 필터를 사용하는 가장 큰 이유는?',
      options: ['강한 기본파를 제거해 분석기 내부 왜곡을 막고 감도를 높이기 위해', '케이블 손실을 줄이기 위해', '신호 발생기를 보호하기 위해', '측정 시간을 줄이기 위해'],
      answer: 0, explain: '강한 기본파가 분석기에 들어가면 내부에서 고조파가 생기고 ATT를 높여야 해 잡음이 올라갑니다. HPF로 기본파를 억제하면 두 문제를 모두 해결할 수 있습니다.' },
    { q: 'SMA 커넥터와 나사가 호환되지 않는 커넥터는?',
      options: ['3.5 mm', '2.92 mm', 'SMA(다른 제조사)', '2.4 mm'],
      answer: 3, explain: '3.5 mm와 2.92 mm는 SMA와 나사 호환됩니다. 2.4 mm·1.85 mm 계열은 호환되지 않습니다.' },
    { q: '교정 라벨 확인에 관한 설명으로 옳지 않은 것은?',
      options: ['차기교정일이 시험일 이후인지 확인한다', '라벨의 관리번호가 기록지의 장비 번호와 같은지 확인한다', '교정일이 최근이면 차기교정일은 확인하지 않아도 된다', '부분 교정 라벨이면 사용 범위를 확인한다'],
      answer: 2, explain: '교정 유효 여부는 차기교정일로 판단합니다. 교정일만 보고 판단하면 안 됩니다.' }
  ],
  refs: [
    { title: 'Keysight — Network Analyzer Basics / 커넥터 관리 가이드', url: 'https://www.keysight.com', note: 'VNA 원리·교정, 정밀 커넥터 취급(토크·세척)' },
    { title: 'Rohde & Schwarz — Vector Network Analyzers', url: 'https://www.rohde-schwarz.com', note: 'ZNA, ZNB, ZNL 제품 및 교정 자료' },
    { title: 'Anritsu — ShockLine / VectorStar', url: 'https://www.anritsu.com', note: 'VNA 제품군' },
    { title: 'KOLAS 한국인정기구', url: 'https://www.knab.go.kr', note: '인정 교정기관 검색, 소급성 정책' }
  ]
});

/* ---------------------------------------------------------------
 * 4. 전자파 무반사실과 방사 시험 설비
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-chamber',
  module: 'equip',
  order: 4,
  title: '전자파 무반사실과 방사 시험 설비',
  minutes: 30,
  level: '중급',
  summary: '방사 측정을 위한 시험장(SAC, FAR, OATS, 쉴드룸, GTEM, OTA 챔버)의 구조와 차이, 흡수체·턴테이블·안테나 마스트, 측정 거리와 사이트 검증(NSA, sVSWR)을 이해합니다.',
  objectives: [
    '반무반사실(SAC)과 전무반사실(FAR)의 구조와 용도 차이를 설명할 수 있다.',
    '페라이트 타일과 피라미드 흡수체가 담당하는 주파수 대역을 안다.',
    '턴테이블·안테나 마스트로 최대 방사 방향을 찾는 이유를 안다.',
    '사이트 검증(NSA, sVSWR)과 OTA 측정(TRP, TIS)의 개념을 말할 수 있다.'
  ],
  body: `
<p>방사(Radiated) 시험은 시료에서 공간으로 퍼져 나가는 전파를 안테나로 받아 측정합니다. 그런데 일반 사무실에서 측정하면 방송·휴대폰 전파 같은 <strong>외부 신호</strong>가 섞이고, 벽과 바닥에서 <strong>반사된 전파</strong>가 더해지거나 상쇄되어 값이 들쭉날쭉해집니다. 그래서 외부를 막고(차폐) 내부 반사를 통제한(흡수) 전용 시험장이 필요합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  노래 실력을 정확히 평가하려면 <strong>밖의 소음이 안 들어오고(방음)</strong>, <strong>울림이 없는(흡음)</strong> 녹음실이 필요합니다. 전자파 무반사실은 전파용 녹음실입니다. 금속 벽이 방음벽, 벽에 붙은 뾰족한 흡수체가 흡음재 역할을 합니다.
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/anechoic-chamber.svg" alt="반무반사실 단면 일러스트: 흡수체 벽과 천장, 금속 바닥, 턴테이블 위 시료, 마스트의 안테나, 직접파와 바닥 반사파"></div>
  <div>
    <h3>반무반사실 (SAC)</h3>
    <div class="equip-en">Semi-Anechoic Chamber (SAC) / 10 m · 3 m Chamber</div>
    <p>벽과 천장은 흡수체로 덮고, <strong>바닥은 금속 반사면</strong>으로 남겨 둔 차폐실입니다. 야외시험장(OATS)을 실내에 재현한 것으로, EMC 방사 방출 시험(30 MHz~1 GHz)의 표준 시험장입니다.</p>
    <dl>
      <dt>용도</dt><dd>EMC 방사 방출(CISPR 32 등), 무선기기 방사 스퓨리어스, (바닥에 흡수체를 깔아) 1 GHz 이상 측정·방사 내성 시험</dd>
      <dt>주요 구성</dt><dd>차폐 외함, 흡수체(페라이트 + 피라미드), 턴테이블, 안테나 마스트, 전원·신호 필터, 피드스루 패널, 감시 카메라, 도어 인터록</dd>
      <dt>주의</dt><dd>챔버 안 불필요한 물체(의자, 카트, 여분 케이블) 제거, 문 완전 밀폐, 시험 전 배경 잡음(Ambient) 확인</dd>
      <dt>대표 제조사</dt><dd>ETS-Lindgren, TDK RF Solutions, Frankonia 등 (<a href="https://www.ets-lindgren.com" target="_blank" rel="noopener">ETS-Lindgren</a>)</dd>
    </dl>
  </div>
</div>

<h2>시험장의 종류</h2>
<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="반무반사실과 전무반사실 단면 비교">
  <defs>
    <pattern id="eqch-abs" width="16" height="14" patternUnits="userSpaceOnUse"><path d="M0 0 L8 14 L16 0 Z" fill="var(--dg-accent)" fill-opacity="0.25" stroke="var(--dg-accent)" stroke-width="0.8"/></pattern>
    <pattern id="eqch-absb" width="16" height="14" patternUnits="userSpaceOnUse"><path d="M0 14 L8 0 L16 14 Z" fill="var(--dg-accent)" fill-opacity="0.25" stroke="var(--dg-accent)" stroke-width="0.8"/></pattern>
  </defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <text x="185" y="20" font-weight="700" font-size="15">반무반사실 (SAC)</text>
    <rect x="20" y="30" width="330" height="190" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="4"/>
    <rect x="22" y="32" width="326" height="14" fill="url(#eqch-abs)"/>
    <rect x="22" y="46" width="14" height="170" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <rect x="334" y="46" width="14" height="170" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <rect x="20" y="214" width="330" height="6" fill="var(--dg-line)"/>
    <rect x="70" y="170" width="40" height="28" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/><text x="90" y="189" font-size="11">EUT</text>
    <rect x="60" y="198" width="60" height="16" fill="var(--dg-accent-2)" fill-opacity="0.6"/>
    <path d="M280 90 V214" stroke="var(--dg-line)" stroke-width="3"/>
    <path d="M280 110 L262 100 M280 110 L262 120 M262 94 V126" stroke="var(--dg-accent)" stroke-width="2" fill="none"/>
    <path d="M110 180 L262 112" stroke="var(--dg-accent)" stroke-dasharray="5 4"/>
    <path d="M110 190 L200 212 L262 118" fill="none" stroke="var(--dg-accent-2)" stroke-dasharray="5 4"/>
    <text x="185" y="245" font-size="12.5" fill="var(--text-2)">금속 바닥 반사 포함 → 안테나 높이 스캔(1–4 m)</text>
    <text x="185" y="262" font-size="12" fill="var(--text-3)">EMC 방사 방출 30 MHz – 1 GHz의 표준</text>

    <text x="575" y="20" font-weight="700" font-size="15">전무반사실 (FAR)</text>
    <rect x="410" y="30" width="330" height="190" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="4"/>
    <rect x="412" y="32" width="326" height="14" fill="url(#eqch-abs)"/>
    <rect x="412" y="200" width="326" height="18" fill="url(#eqch-absb)"/>
    <rect x="412" y="46" width="14" height="154" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <rect x="724" y="46" width="14" height="154" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <rect x="475" y="112" width="40" height="28" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/><text x="495" y="131" font-size="11">EUT</text>
    <path d="M495 140 V200" stroke="var(--dg-muted)" stroke-width="3"/>
    <path d="M680 70 V200" stroke="var(--dg-line)" stroke-width="3"/>
    <path d="M680 126 L662 116 M680 126 L662 136 M662 110 V142" stroke="var(--dg-accent)" stroke-width="2" fill="none"/>
    <path d="M515 126 L660 126" stroke="var(--dg-accent)" stroke-dasharray="5 4"/>
    <text x="575" y="245" font-size="12.5" fill="var(--text-2)">바닥까지 흡수 → 직접파만 (자유공간 재현)</text>
    <text x="575" y="262" font-size="12" fill="var(--text-3)">1 GHz 이상 방사, 무선 방사 시험, OTA</text>
  </g>
</svg>
<figcaption>그림 1. SAC와 FAR의 차이. SAC는 바닥 반사를 “규정된 조건으로” 포함하고, FAR는 모든 반사를 없애 자유공간을 흉내 냅니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>시험장</th><th>구조</th><th>장점</th><th>한계 · 주 용도</th></tr></thead>
<tbody>
<tr><td>OATS (야외시험장)</td><td>개방된 야외 + 금속 접지면</td><td>표준의 “원형”, 대형 시료 가능</td><td>외부 전파·날씨 영향. 현재는 기준·비교용으로 제한적 사용</td></tr>
<tr><td>SAC (반무반사실)</td><td>차폐 + 벽·천장 흡수체, 금속 바닥</td><td>OATS 조건을 실내에서 안정적으로 재현</td><td>EMC 방사 방출(3 m/10 m), 바닥 흡수체 추가 시 1 GHz 이상·RS 시험</td></tr>
<tr><td>FAR (전무반사실)</td><td>차폐 + 6면 흡수체</td><td>반사 없는 자유공간 조건, 높이 스캔 불필요</td><td>1 GHz 이상 방사, 무선 방사 출력·스퓨리어스, 안테나·OTA</td></tr>
<tr><td>쉴드룸 (차폐실)</td><td>금속 차폐만(흡수체 없음)</td><td>외부 잡음 차단, 저렴</td><td>전도 방출(CE), ESD·서지·EFT 등 내성, 전도 무선 시험(내부 공진 때문에 방사 측정 부적합)</td></tr>
<tr><td>GTEM 셀</td><td>테이퍼진 TEM 전송선 구조</td><td>작은 공간, 균일한 전계</td><td>소형 시료의 방사 내성·방출 사전 시험(대체 방법으로 인정 범위 확인)</td></tr>
<tr><td>OTA 챔버</td><td>FAR 형태 + 3D 포지셔너(또는 다중 안테나)</td><td>전 방향(구면) 측정 자동화</td><td>TRP·TIS, 안테나 패턴, 5G mmWave(CATR 방식 등)</td></tr>
</tbody></table></div>

<h2>흡수체: 페라이트와 피라미드</h2>
<p>흡수체(Absorber)는 전파를 열로 바꾸어 반사를 줄입니다. 주파수에 따라 효과적인 재료가 다르기 때문에 대부분의 챔버는 두 가지를 겹쳐 씁니다(하이브리드).</p>
<div class="card-grid">
  <div class="card"><h3>🧱 페라이트 타일</h3><p>벽에 붙인 얇은(수 mm) 자성체 타일. <strong>낮은 주파수(대략 30 MHz~1 GHz 부근)</strong>에서 효과적입니다. 두께가 얇아 챔버 공간을 적게 차지합니다.</p></div>
  <div class="card"><h3>🔺 피라미드(탄소 함침 폼)</h3><p>탄소가 섞인 발포체를 피라미드 모양으로 만든 것. <strong>높은 주파수</strong>에서 효과적이며, 낮은 주파수까지 흡수하려면 피라미드가 매우 길어야 합니다(파장에 비례).</p></div>
  <div class="card"><h3>🟦 바닥 흡수체</h3><p>SAC 바닥에 이동식 흡수체를 깔아 1 GHz 이상 측정(FAR에 가까운 조건)이나 방사 내성 시험을 합니다. 배치 위치가 사이트 검증 조건과 같아야 합니다.</p></div>
</div>
<div class="callout danger">
  <span class="callout-title">흡수체는 약합니다</span>
  피라미드 흡수체는 발로 밟거나 기대면 쉽게 부서지고, 부서진 흡수체는 성능이 떨어집니다. 챔버 내에서는 지정된 통로만 이용하고, 흡수체 파손을 발견하면 즉시 보고하세요. 또한 고출력 RS 시험 중 흡수체 과열에도 주의합니다.
</div>

<h2>턴테이블 · 안테나 마스트 · 측정 거리</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/turntable-mast.svg" alt="턴테이블 위 비금속 테이블과 시료, 1~4 m 높이 조정 안테나 마스트 일러스트"></div>
  <div>
    <h3>턴테이블 · 안테나 마스트</h3>
    <div class="equip-en">Turntable / Antenna Mast (Tower) &amp; Controller</div>
    <p>시료를 0~360° 돌리고, 안테나 높이를 1~4 m로 올리내리며, 편파(수평/수직)를 바꾸어 <strong>가장 크게 측정되는 조건</strong>을 찾습니다.</p>
    <dl>
      <dt>용도</dt><dd>방사 방출·방사 스퓨리어스의 최대값 탐색, RS 시험 시 시료 면 전환</dd>
      <dt>주요 기능</dt><dd>각도·높이·편파 원격 제어, 측정 소프트웨어 연동 자동 스캔</dd>
      <dt>주의</dt><dd>이동 중 하부 출입 금지, 시료 테이블은 비금속(탁상형 높이 0.8 m 등 규격 확인), 케이블 꼬임 주의</dd>
      <dt>대표 제조사</dt><dd>ETS-Lindgren, Maturo, innco systems 등 — 제조사 확인</dd>
    </dl>
  </div>
</div>

<div class="callout easy">
  <span class="callout-title">왜 높이를 바꿀까?</span>
  SAC의 금속 바닥에서 반사된 전파와 직접 온 전파가 안테나에서 만나면, 위치에 따라 <strong>서로 더해지거나(보강) 상쇄</strong>됩니다. 안테나 높이를 1~4 m로 움직이면 가장 크게 보강되는 높이를 찾을 수 있어, 최악의 조건(최대값)을 측정하게 됩니다.
</div>

<ul>
  <li><strong>측정 거리</strong> — 안테나 기준점과 시료 경계(또는 중심) 사이 거리. EMC는 주로 <strong>10 m</strong>(대형 챔버)와 <strong>3 m</strong>가 쓰입니다. 규격이 허용하는 경우 거리 환산(역거리 비례: 20·log(d<sub>1</sub>/d<sub>2</sub>), 10 m → 3 m이면 약 10.5 dB)을 적용하지만, 근역장(Near field) 문제로 항상 허용되는 것은 아닙니다.</li>
  <li><strong>시료 배치</strong> — 탁상형은 비금속 테이블 위(예: 높이 0.8 m), 바닥 설치형은 바닥 위 절연 지지대. 케이블 배치(늘어뜨림, 묶음 길이)도 규격대로 합니다.</li>
  <li><strong>배경 잡음(Ambient)</strong> — 시료를 끈 상태에서 먼저 스캔해, 시료가 아닌 신호(챔버 외부 유입, 주변 장비)를 확인합니다. 배경 잡음은 한계값보다 충분히 낮아야 합니다(예: 6 dB 이상 — 규격 확인).</li>
</ul>

<h2>사이트 검증: NSA와 sVSWR</h2>
<p>챔버가 “표준 시험장으로서 정상인지”는 정기적으로 검증합니다. 흡수체 열화, 챔버 내 구조물 변경이 있으면 결과가 틀어지기 때문입니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>검증 항목</th><th>주파수</th><th>개념</th><th>대표 판정 기준</th></tr></thead>
<tbody>
<tr><td>NSA (정규화 사이트 감쇠)</td><td>30 MHz ~ 1 GHz</td><td>송신 안테나 → 수신 안테나 사이 감쇠량을 측정해, 이상적인 OATS의 이론값과 비교</td><td>이론값 대비 ±4 dB 이내 (CISPR 16-1-4, ANSI C63.4 계열)</td></tr>
<tr><td>sVSWR (사이트 전압 정재파비)</td><td>1 GHz ~ 18 GHz</td><td>시험 공간 여러 위치에서 수신 레벨 변동을 측정해 반사의 영향을 평가</td><td>sVSWR ≤ 6 dB (CISPR 16-1-4)</td></tr>
<tr><td>필드 균일도 (UFA)</td><td>80 MHz 이상 (RS 시험 범위)</td><td>RS 시험 평면(예: 1.5 m × 1.5 m)의 여러 점에서 전계 균일성 확인</td><td>IEC 61000-4-3의 균일도 기준(0~6 dB 범위 조건)</td></tr>
<tr><td>차폐 효과(SE)</td><td>규격 지정 주파수</td><td>챔버 외함이 외부 전파를 얼마나 막는지</td><td>설계 사양(예: 100 dB급) — IEEE 299 등</td></tr>
</tbody></table></div>
<p style="font-size:14px;color:var(--text-3)">※ 기준값은 대표적인 값입니다. 적용 규격판(edition)과 사내 절차를 확인하세요.</p>

<h2>OTA 챔버: TRP와 TIS</h2>
<p>스마트폰처럼 안테나 단자를 꺼내기 어렵거나 안테나 성능 자체를 평가해야 할 때는 <strong>OTA(Over-The-Air)</strong> 측정을 합니다. 시료를 3D 포지셔너로 돌려 가며 구면(球面) 전체에서 측정합니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="OTA 챔버의 구면 측정 개념">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="360" height="192" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="3"/>
    <circle cx="200" cy="120" r="80" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 4"/>
    <ellipse cx="200" cy="120" rx="80" ry="24" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 4"/>
    <rect x="186" y="104" width="28" height="32" rx="4" fill="var(--dg-accent-2)"/>
    <path d="M200 136 V206" stroke="var(--dg-muted)" stroke-width="3"/>
    <g fill="var(--dg-accent)"><circle cx="200" cy="40" r="6"/><circle cx="143" cy="63" r="6"/><circle cx="257" cy="63" r="6"/><circle cx="120" cy="120" r="6"/><circle cx="280" cy="120" r="6"/><circle cx="143" cy="177" r="6"/><circle cx="257" cy="177" r="6"/></g>
    <text x="200" y="236" font-size="12" fill="var(--text-3)">시료를 돌리며 구면의 여러 점(파랑)에서 측정</text>
    <rect x="420" y="40" width="320" height="70" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="580" y="66" font-weight="700" fill="var(--dg-accent)">TRP (Total Radiated Power)</text>
    <text x="580" y="90" font-size="12.5">모든 방향으로 방사된 전력을 합한 값 (송신 성능)</text>
    <rect x="420" y="130" width="320" height="70" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="580" y="156" font-weight="700" fill="var(--dg-accent-2)">TIS (Total Isotropic Sensitivity)</text>
    <text x="580" y="180" font-size="12.5">모든 방향에서 평균한 수신 감도 (수신 성능)</text>
  </g>
</svg>
<figcaption>그림 2. OTA 측정 개념. 셀룰러 단말은 CTIA 시험 계획이나 사업자 요구로, 5G mmWave는 3GPP 규격의 OTA 방법(예: CATR, 소형 안테나 시험장)으로 측정합니다.</figcaption>
</figure>
<p>대표 시스템: ETS-Lindgren AMS-8500 계열, R&amp;S ATS1800C(mmWave CATR) 등 — 구성은 시험 목적에 따라 다릅니다.</p>

<h2>흔한 실수</h2>
<ul>
  <li>시료 전원 어댑터·노트북을 챔버 안 테이블 위에 대충 올려 둠 → 보조 장비 방출이 섞임(보조 장비는 챔버 밖 또는 규격 배치).</li>
  <li>배경 잡음 확인 없이 측정 → 외부 유입 신호를 시료 방출로 오판.</li>
  <li>턴테이블을 몇 개 각도만 보고 최대값 탐색 생략.</li>
  <li>챔버 피드스루 경로 손실을 오래된 값으로 사용.</li>
  <li>챔버 문을 덜 닫아 차폐 성능 저하(도어 핑거 손상 주의).</li>
</ul>
`,
  quiz: [
    { q: '반무반사실(SAC)과 전무반사실(FAR)의 가장 큰 구조적 차이는?',
      options: ['SAC는 차폐가 없다', 'FAR는 흡수체가 없다', 'SAC는 야외에 있다', 'SAC는 바닥이 금속 반사면이고, FAR는 바닥까지 흡수체로 덮는다'],
      answer: 3, explain: 'SAC는 OATS를 재현하기 위해 금속 바닥 반사면을 두고, FAR는 6면 모두 흡수체로 덮어 자유공간을 재현합니다.' },
    { q: 'SAC에서 방사 방출을 측정할 때 안테나 높이를 1~4 m로 스캔하는 이유는?',
      options: ['안테나를 보호하기 위해', '바닥 반사파와 직접파가 가장 크게 보강되는 높이를 찾기 위해', '편파를 바꾸기 위해', '흡수체 성능을 확인하기 위해'],
      answer: 1, explain: '직접파와 바닥 반사파의 간섭으로 높이마다 수신 레벨이 달라지므로, 최대값을 찾기 위해 높이를 스캔합니다.' },
    { q: '30 MHz~1 GHz 대역 SAC의 사이트 검증 항목과 대표 판정 기준은?',
      options: ['NSA 이론값 대비 ±4 dB 이내', 'sVSWR ≤ 6 dB', '차폐 효과 60 dB 이상', '필드 균일도 0 dB'],
      answer: 0, explain: '30 MHz~1 GHz는 정규화 사이트 감쇠(NSA)로 검증하며 대표 기준은 ±4 dB입니다. sVSWR은 1~18 GHz 검증 항목입니다.' },
    { q: '낮은 주파수(수십 MHz~수백 MHz)의 흡수에 특히 효과적이고 두께가 얇은 흡수체는?',
      options: ['페라이트 타일', '짧은 피라미드 폼', '나무 합판', '카펫'],
      answer: 0, explain: '페라이트 타일은 얇으면서도 낮은 주파수에서 흡수 성능이 좋아, 높은 주파수용 피라미드와 함께 하이브리드로 사용합니다.' },
    { q: '단말의 모든 방향 송신 전력을 합한 OTA 지표는?',
      options: ['TIS', 'EIRP', 'TRP', 'NSA'],
      answer: 2, explain: 'TRP(Total Radiated Power)는 구면 전체로 방사된 전력의 합, TIS는 전 방향 평균 수신 감도입니다.' }
  ],
  refs: [
    { title: 'ETS-Lindgren — Anechoic Chambers & OTA', url: 'https://www.ets-lindgren.com', note: 'SAC/FAR, 흡수체, 턴테이블·마스트, OTA 시스템' },
    { title: 'IEC Webstore — CISPR 16-1-4', url: 'https://webstore.iec.ch', note: '방사 방출 측정용 안테나·시험장 요건(NSA, sVSWR)' },
    { title: 'Rohde & Schwarz — OTA 시험 솔루션', url: 'https://www.rohde-schwarz.com', note: 'ATS 계열 등 5G OTA 챔버' }
  ]
});

/* ---------------------------------------------------------------
 * 5. 측정용 안테나
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-antennas',
  module: 'equip',
  order: 5,
  title: '측정용 안테나와 안테나 인자(AF)',
  minutes: 25,
  level: '중급',
  summary: '루프, 바이코니컬, LPDA, 하이브리드, 혼 안테나의 주파수 범위와 특징, 그리고 수신 전압을 전계강도로 바꾸는 안테나 인자(AF) 교정 데이터 사용법을 익힙니다.',
  objectives: [
    '주파수 대역별로 알맞은 측정용 안테나를 고를 수 있다.',
    '안테나 인자(AF)의 의미를 설명하고 전계강도 계산식을 적용할 수 있다.',
    '안테나 교정 데이터(편파·거리·일련번호)를 올바르게 선택해 쓴다.',
    '안테나 취급 시 주의사항(발룬, 소자 방향, 보관)을 안다.'
  ],
  body: `
<p>방사 시험에서 안테나는 “공간의 전파(전계강도, V/m)”를 “케이블 위의 전압(V)”으로 바꾸어 주는 <strong>변환기(센서)</strong>입니다. 한 개의 안테나로 모든 주파수를 측정할 수 없기 때문에, 시험소는 대역별로 여러 종류의 안테나를 갖추고 있습니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  온도계 눈금을 읽으려면 “이 막대 길이가 몇 도인지” 환산표가 필요하듯, 안테나도 “이 전압이면 전계가 얼마인지” 환산표가 필요합니다. 그 환산표가 <strong>안테나 인자(AF, Antenna Factor)</strong>입니다.
</div>

<h2>안테나 인자(AF)와 전계강도 계산</h2>
<div class="formula">E (dBµV/m) = V<sub>수신기</sub> (dBµV) + AF (dB/m) + 케이블 손실 (dB) − 전치증폭기 이득 (dB)</div>
<figure class="diagram">
<svg viewBox="0 0 760 200" role="img" aria-label="전계강도에서 수신기 전압까지의 변환 사슬">
  <defs><marker id="eqan-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <path d="M30 60 q 12 -20 24 0 t 24 0 t 24 0" fill="none" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <text x="66" y="100" font-weight="700" fill="var(--dg-accent-2)">전계 E</text><text x="66" y="118" font-size="12" fill="var(--text-3)">dBµV/m</text>
    <path d="M110 60 H150" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqan-arw)"/>
    <rect x="152" y="36" width="120" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="212" y="58" font-weight="700" fill="var(--dg-accent)">안테나</text><text x="212" y="76" font-size="12" fill="var(--text-2)">AF (dB/m)</text>
    <path d="M272 60 H312" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqan-arw)"/>
    <rect x="314" y="36" width="110" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="369" y="58" font-weight="700">케이블</text><text x="369" y="76" font-size="12" fill="var(--text-2)">손실 L (dB)</text>
    <path d="M424 60 H464" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqan-arw)"/>
    <rect x="466" y="36" width="110" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-dasharray="5 4"/>
    <text x="521" y="58" font-weight="700">전치증폭기</text><text x="521" y="76" font-size="12" fill="var(--text-2)">이득 G (dB)</text>
    <path d="M576 60 H616" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqan-arw)"/>
    <rect x="618" y="36" width="120" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="678" y="58" font-weight="700">수신기</text><text x="678" y="76" font-size="12" fill="var(--text-2)">V (dBµV)</text>
    <rect x="120" y="140" width="520" height="44" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent)"/>
    <text x="380" y="167" font-weight="700" fill="var(--dg-accent)">예) V 30.0 + AF 14.5 + L 2.5 − G 0 = E 47.0 dBµV/m</text>
  </g>
</svg>
<figcaption>그림 1. 수신기가 읽은 전압을 전계강도로 되돌리는 계산. 수신기 단위가 dBm이면 50 Ω 기준 dBµV = dBm + 107 로 먼저 환산합니다.</figcaption>
</figure>
<ul>
  <li><strong>AF는 주파수마다 다릅니다.</strong> 교정성적서에 주파수별 표(예: 수 MHz 간격)로 제공되며, 사이 주파수는 보간합니다.</li>
  <li>AF가 클수록 “감도가 낮은” 안테나입니다(같은 전계에서 더 작은 전압이 나오므로 더 많이 더해 줘야 함).</li>
  <li>안테나 이득 G(dBi)와 AF는 서로 변환 가능합니다(50 Ω 기준 AF ≈ 20·log f<sub>MHz</sub> − G<sub>dBi</sub> − 29.8). 무선 시험의 EIRP 계산에는 이득을, EMC 전계강도 계산에는 AF를 주로 씁니다.</li>
</ul>

<h2>주파수 대역별 안테나</h2>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="측정용 안테나 종류별 대표 주파수 범위(로그 눈금)">
  <g font-size="12.5" fill="var(--text)">
    <g stroke="var(--dg-muted)" stroke-width="0.8" stroke-dasharray="3 3">
      <path d="M120 20 V210 M209 20 V210 M297 20 V210 M386 20 V210 M474 20 V210 M563 20 V210 M652 20 V210"/>
    </g>
    <g font-size="11.5" fill="var(--text-3)" text-anchor="middle">
      <text x="120" y="228">10 kHz</text><text x="209" y="228">100 kHz</text><text x="297" y="228">1 MHz</text><text x="386" y="228">10 MHz</text><text x="474" y="228">100 MHz</text><text x="563" y="228">1 GHz</text><text x="652" y="228">10 GHz</text>
    </g>
    <text x="10" y="44">루프</text><rect x="116" y="32" width="312" height="18" rx="4" fill="var(--dg-ok)" fill-opacity="0.75"/><text x="272" y="46" font-size="11.5" fill="#fff" text-anchor="middle">9 kHz – 30 MHz (자계)</text>
    <text x="10" y="74">바이코니컬</text><rect x="428" y="62" width="89" height="18" rx="4" fill="var(--dg-accent)"/><text x="524" y="76" font-size="11.5">30 – 300 MHz</text>
    <text x="10" y="104">LPDA</text><rect x="501" y="92" width="104" height="18" rx="4" fill="var(--dg-accent)" fill-opacity="0.7"/><text x="612" y="106" font-size="11.5">약 200 MHz – 수 GHz</text>
    <text x="10" y="134">하이브리드</text><rect x="428" y="122" width="177" height="18" rx="4" fill="var(--dg-accent-2)"/><text x="612" y="136" font-size="11.5">30 MHz – 1 GHz 이상</text>
    <text x="10" y="164">더블리지 혼</text><rect x="563" y="152" width="111" height="18" rx="4" fill="var(--dg-accent-2)" fill-opacity="0.75"/><text x="555" y="166" font-size="11.5" text-anchor="end">1 – 18 GHz</text>
    <text x="10" y="194">표준 이득 혼</text><rect x="674" y="182" width="31" height="18" rx="4" fill="var(--dg-line)"/><text x="666" y="196" font-size="11.5" text-anchor="end">18 – 40 GHz 등 (도파관 대역별)</text>
  </g>
</svg>
<figcaption>그림 2. 안테나별 대표 주파수 범위(로그 눈금). 실제 범위는 모델마다 다르므로 교정성적서의 범위를 따릅니다.</figcaption>
</figure>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/loop-antenna.svg" alt="능동형 루프 안테나 일러스트: 원형 루프, 차폐 갭, 내장 증폭기"></div>
  <div>
    <h3>루프 안테나</h3>
    <div class="equip-en">Loop Antenna (Active / Passive), 9 kHz – 30 MHz</div>
    <p>전계가 아니라 <strong>자계(H)</strong> 성분을 받습니다. 30 MHz 이하의 방사 방출, 무선충전(WPT)·RFID·NFC 같은 저주파 무선기기 시험에 씁니다.</p>
    <dl>
      <dt>사용법 핵심</dt><dd>루프 면을 회전시켜 최대값 탐색(방향성이 강함), 능동형은 배터리·전원 상태 확인</dd>
      <dt>주의</dt><dd>AF 단위가 자계 기준(dBµA/m)일 수도, 전계 환산(dBµV/m)일 수도 있으므로 교정 데이터의 단위를 확인</dd>
      <dt>대표 모델</dt><dd>Schwarzbeck FMZB 1519 계열, ETS-Lindgren 6502, R&amp;S HFH2-Z2 등</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/antenna-bicon.svg" alt="바이코니컬 안테나 일러스트: 원뿔형 두 소자와 중앙 발룬, 삼각대"></div>
  <div>
    <h3>바이코니컬 안테나</h3>
    <div class="equip-en">Biconical Antenna, 약 30 – 300 MHz</div>
    <p>원뿔 두 개를 마주 붙인 모양의 광대역 다이폴입니다. 30~300 MHz EMC 방사 방출과 NSA 사이트 검증에 전통적으로 쓰입니다.</p>
    <dl>
      <dt>주의</dt><dd>중앙 <strong>발룬(Balun)</strong>이 충격에 약함. 소자 체결이 느슨하면 AF가 변함. 수직 편파 시 하단 소자와 바닥의 거리 규정 확인</dd>
      <dt>대표 모델</dt><dd>Schwarzbeck, ETS-Lindgren 등 바이코니컬 제품군</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/antenna-lpda.svg" alt="로그주기 다이폴 배열 안테나 일러스트: 길이가 점점 짧아지는 다이폴 소자들"></div>
  <div>
    <h3>로그주기 다이폴 배열 (LPDA)</h3>
    <div class="equip-en">Log-Periodic Dipole Array, 약 200 MHz – 수 GHz</div>
    <p>길이가 다른 다이폴을 로그 비율로 늘어놓아 넓은 대역을 커버합니다. 긴 소자가 낮은 주파수, 짧은 소자가 높은 주파수를 담당하며, 짧은 쪽 끝이 앞(지향 방향)입니다.</p>
    <dl>
      <dt>주의</dt><dd>지향성 안테나이므로 시료를 정확히 겨냥. 주파수에 따라 위상 중심(실제 수신 위치)이 이동 → 측정 거리 기준점 규정 확인</dd>
      <dt>대표 모델</dt><dd>Schwarzbeck USLP 계열, ETS-Lindgren 3148 계열 등</dd>
    </dl>
  </div>
</div>

<div class="card-grid">
  <div class="card"><h3>🔀 하이브리드(바이로그, Biconilog, Trilog)</h3><p>바이코니컬과 LPDA를 한 몸에 합친 안테나. 30 MHz~1 GHz(모델에 따라 3~6 GHz 이상)를 <strong>안테나 교체 없이</strong> 측정할 수 있어 EMC 시험소의 주력 안테나입니다. 예: Schwarzbeck VULB 계열, ETS-Lindgren 3142 계열. 크고 무거우므로 마스트 하중 확인.</p></div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/antenna-horn.svg" alt="더블리지 혼 안테나 일러스트: 옆모습과 정면 개구부의 리지"></div>
  <div>
    <h3>혼 안테나 (더블리지 · 표준 이득)</h3>
    <div class="equip-en">Double-Ridged Guide Horn (DRG) / Standard Gain Horn (SGH)</div>
    <p><strong>더블리지 혼</strong>은 안쪽의 리지(능선) 덕분에 1~18 GHz처럼 매우 넓은 대역을 한 개로 측정합니다. <strong>표준 이득 혼</strong>은 도파관 대역마다 하나씩 있으며 이득이 이론적으로 정확해 고주파 기준 안테나로 씁니다.</p>
    <dl>
      <dt>용도</dt><dd>1 GHz 이상 방사 방출, 무선기기 방사 스퓨리어스(고조파), EIRP 치환 측정, RS 시험 송신(고출력 혼)</dd>
      <dt>주의</dt><dd>빔폭이 좁아지는 고주파에서는 시료가 빔폭 안에 들어오는지 확인. 1 GHz 이상은 대개 전치증폭기와 함께 사용</dd>
      <dt>대표 모델</dt><dd>Schwarzbeck BBHA 9120 D(DRG, 1–18 GHz 급), ETS-Lindgren 3117(DRG), 각사 표준 이득 혼</dd>
    </dl>
  </div>
</div>

<h2>교정 데이터(AF 파일) 사용법</h2>
<ol class="steps">
  <li><strong>일련번호 일치 확인</strong>AF는 모델이 아니라 <em>안테나 한 대 한 대</em>마다 다릅니다. 안테나 명판의 S/N과 교정 데이터 파일의 S/N이 같은지 확인합니다.</li>
  <li><strong>교정 방법·조건 확인</strong>자유공간 AF인지, 특정 거리·편파(수평/수직)·높이 조건 AF인지 확인합니다(CISPR 16-1-6, ANSI C63.5 등의 교정 방법). 편파별로 값이 다르면 측정 편파에 맞는 파일을 적용합니다.</li>
  <li><strong>측정 소프트웨어에 등록</strong>AF 표를 트랜스듀서로 등록하고, 케이블 손실·전치증폭기 이득 표와 함께 <em>하나의 경로 보정</em>으로 묶습니다. 파일명에 안테나 번호·교정일을 넣으면 실수가 줄어듭니다.</li>
  <li><strong>유효기간 관리</strong>안테나도 교정 주기(예: 1~2년 — 사내 절차)가 있습니다. 교정 후 새 AF 파일로 교체했는지 확인합니다.</li>
  <li><strong>검증</strong>새 AF 적용 후 기준 신호원(콤 제너레이터 등)으로 이전 결과와 비교하면 입력 실수를 잡을 수 있습니다.</li>
</ol>

<div class="callout tip">
  <span class="callout-title">현장 팁: 편파 표시</span>
  안테나를 수평(H)·수직(V)으로 돌릴 때 마스트 컨트롤러 표시와 실제 방향이 일치하는지, 측정 파일에 편파가 올바르게 기록되는지 가끔 눈으로 확인하세요. 편파가 뒤바뀐 채 기록된 데이터는 나중에 재현이 불가능합니다.
</div>

<h2>흔한 실수</h2>
<ul>
  <li>같은 모델의 다른 안테나 AF를 적용 (S/N 불일치).</li>
  <li>수신기 값이 dBm인데 dBµV로 착각해 107 dB 환산을 빠뜨림.</li>
  <li>전치증폭기 이득을 빼지 않아 결과가 20~30 dB 높게 나옴 → “불합격”으로 오판.</li>
  <li>루프 안테나 AF 단위(dB(S/m) vs dB/m)를 혼동.</li>
  <li>안테나를 바닥에 눕혀 보관 → 소자 변형, 발룬 충격.</li>
</ul>
`,
  quiz: [
    { q: '수신기 읽음값 25 dBµV, AF 18 dB/m, 케이블 손실 3 dB, 전치증폭기 이득 0 dB일 때 전계강도는?',
      options: ['4 dBµV/m', '40 dBµV/m', '46 dBµV/m', '43 dBµV/m'],
      answer: 2, explain: 'E = 25 + 18 + 3 − 0 = 46 dBµV/m.' },
    { q: '9 kHz~30 MHz 대역 방사 측정에 쓰는 안테나는?',
      options: ['루프 안테나', '더블리지 혼', '표준 이득 혼', 'LPDA'],
      answer: 0, explain: '30 MHz 이하는 자계 성분을 받는 루프 안테나를 주로 사용합니다.' },
    { q: '안테나 인자(AF) 교정 데이터 적용 시 가장 먼저 확인할 것은?',
      options: ['안테나 색상', '안테나 무게', '안테나 명판의 일련번호와 교정 데이터의 일련번호 일치', '제조사 로고'],
      answer: 2, explain: 'AF는 개별 안테나마다 교정되므로 S/N 일치를 먼저 확인해야 합니다.' },
    { q: '30 MHz~1 GHz를 안테나 교체 없이 측정하기 위해 바이코니컬과 LPDA를 결합한 안테나는?',
      options: ['루프 안테나', '표준 이득 혼', '모노폴', '하이브리드(바이로그) 안테나'],
      answer: 3, explain: '하이브리드(Biconilog, Trilog 등)는 두 구조를 결합해 넓은 대역을 한 번에 측정합니다.' }
  ],
  refs: [
    { title: 'Schwarzbeck Mess-Elektronik', url: 'https://www.schwarzbeck.de', note: 'EMC 측정용 안테나(루프, 바이코니컬, LPDA, 하이브리드, 혼) 데이터시트' },
    { title: 'ETS-Lindgren — EMC Antennas', url: 'https://www.ets-lindgren.com', note: '3117 DRG 혼, 3142 바이코니로그, 6502 루프 등' },
    { title: 'IEC Webstore — CISPR 16-1-4 / 16-1-6', url: 'https://webstore.iec.ch', note: '측정용 안테나 요건과 안테나 교정 방법' }
  ]
});

/* ---------------------------------------------------------------
 * 6. EMC 시험 장비
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-emc',
  module: 'equip',
  order: 6,
  title: 'EMC 시험 장비 — 방출(EMI)과 내성(EMS)',
  minutes: 35,
  level: '중급',
  summary: 'EMI 측정 수신기(CISPR 16-1-1), LISN·ISN·전류 프로브 등 방출 측정 장비와, ESD·EFT·서지·RS·CS·전압 강하·고조파/플리커 등 내성 및 전원 품질 시험 장비를 한눈에 정리합니다.',
  objectives: [
    'EMI 수신기와 스펙트럼 분석기의 차이, CISPR 대역별 RBW와 QP/AV 검파기를 설명할 수 있다.',
    'LISN(AMN)의 역할(50 Ω/50 µH 임피던스 안정화, 잡음 분리)을 안다.',
    'ESD, EFT/버스트, 서지, RS, CS 시험 장비의 구성과 주요 파형을 구분한다.',
    'EMC 시험 장비 사용 시 안전 수칙을 지킨다.'
  ],
  body: `
<p>EMC 시험은 크게 <strong>방출(EMI, Emission)</strong> — 기기가 내보내는 불요 전자파를 측정 — 과 <strong>내성(EMS, Immunity)</strong> — 외부 교란을 인가하고 기기가 견디는지 관찰 — 로 나뉩니다. 방출은 “듣는” 장비, 내성은 “때리는” 장비가 필요합니다. 시험 방법 자체는 <a href="#/m/emc">05 EMC 모듈</a>에서 다루고, 여기서는 장비를 중심으로 봅니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  방출 시험은 “이 기계가 얼마나 시끄러운지 소음계로 재는 것”, 내성 시험은 “옆에서 일부러 정전기·번개·강한 전파를 가했을 때 이 기계가 멀쩡한지 보는 것”입니다.
</div>

<h2>EMI 측정 수신기</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/emi-receiver.svg" alt="EMI 측정 수신기 일러스트: 1 한계선과 방출 스펙트럼 화면, 2 검파기 선택 키(PEAK, QP, CAV, RMS), 3 RF 입력"></div>
  <div>
    <h3>EMI 측정 수신기</h3>
    <div class="equip-en">EMI Test Receiver (CISPR 16-1-1 compliant)</div>
    <p>① 방출 스펙트럼과 한계선 ② 검파기 선택(Peak, QP, CISPR-AV, RMS-AV) ③ RF 입력. CISPR 16-1-1이 정한 대역폭·검파기·과부하 특성을 만족하도록 만든 “규격용” 수신기입니다.</p>
    <dl>
      <dt>용도</dt><dd>전도 방출(LISN·ISN·전류 프로브 연결), 방사 방출(안테나 연결)의 최종 측정</dd>
      <dt>주요 기능</dt><dd>CISPR 대역폭(200 Hz/9 kHz/120 kHz/1 MHz), 준첨두·평균 검파, 프리셀렉터(입력 필터)와 과부하 방지, 스캔·FFT 타임 도메인 스캔, 한계선·트랜스듀서, 최종 측정 자동화</dd>
      <dt>사용법 핵심</dt><dd>① Peak로 빠른 사전 스캔 → ② 한계에 가까운 주파수 추출 → ③ 해당 주파수에서 QP·AV 최종 측정(충분한 측정 시간)</dd>
      <dt>주의</dt><dd>전도 시험 시 LISN 입력 보호(과도 전압) — 수신기 앞에 리미터/감쇠기 사용 권장, 입력 과부하 표시 확인</dd>
      <dt>대표 모델</dt><dd>R&amp;S ESW · ESR · ESRP, Keysight PXE N9048B (<a href="https://www.rohde-schwarz.com" target="_blank" rel="noopener">R&amp;S</a>, <a href="https://www.keysight.com" target="_blank" rel="noopener">Keysight</a>)</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>CISPR 대역</th><th>주파수</th><th>측정 대역폭 (−6 dB)</th><th>대표 적용</th></tr></thead>
<tbody>
<tr><td>A</td><td>9 kHz – 150 kHz</td><td class="num">200 Hz</td><td>조명기기, 유도가열 등 일부 제품군</td></tr>
<tr><td>B</td><td>150 kHz – 30 MHz</td><td class="num">9 kHz</td><td>전도 방출(전원선·통신선)</td></tr>
<tr><td>C / D</td><td>30 MHz – 300 MHz / 300 MHz – 1 GHz</td><td class="num">120 kHz</td><td>방사 방출</td></tr>
<tr><td>E</td><td>1 GHz – 18 GHz</td><td class="num">1 MHz</td><td>1 GHz 이상 방사 방출 (Peak·AV 검파)</td></tr>
</tbody></table></div>

<div class="callout note">
  <span class="callout-title">왜 준첨두(QP)인가?</span>
  QP 검파기는 잡음의 <strong>반복률</strong>에 따라 값을 가중합니다. 가끔 “틱” 하는 잡음은 낮게, 계속 “지지직” 하는 잡음은 높게 나옵니다. 사람이 라디오를 들을 때 느끼는 방해 정도(성가심)를 흉내 낸 것으로, 라디오 방송 보호에서 출발한 CISPR 한계값의 기준 검파기입니다. 같은 신호라면 <strong>Peak ≥ QP ≥ AV</strong>이므로, Peak 사전 스캔 결과가 QP·AV 한계보다 충분히 낮으면 최종 측정을 생략할 수 있게 한 규격도 있습니다(적용 규격 확인).
</div>

<div class="callout tip">
  <span class="callout-title">스펙트럼 분석기로 대신할 수 있나?</span>
  CISPR 16-1-1 요건(대역폭 형상, QP 검파, 프리셀렉션에 의한 과부하 특성 등)을 만족한다고 명시된 분석기·옵션이면 가능합니다. 일반 분석기의 “EMI 옵션”이 요건을 모두 만족하는지는 사양서로 확인하세요. 사전(Pre-compliance) 측정에는 일반 분석기도 널리 씁니다.
</div>

<h2>전도 방출 측정: LISN · ISN · 전류 프로브</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/lisn.svg" alt="LISN 일러스트: 1 시료 전원 콘센트, 2 측정 선로 선택(L1/N), 3 RF 출력 단자, 접지 단자"></div>
  <div>
    <h3>LISN (AMN, 의사전원회로망)</h3>
    <div class="equip-en">Line Impedance Stabilization Network / Artificial Mains Network</div>
    <p>① 시료 전원 콘센트 ② 측정 선로 선택(L1/N) ③ RF 출력(수신기로). 시료와 상용 전원 사이에 넣어 전원선에 실린 잡음 전압을 측정합니다.</p>
    <dl>
      <dt>역할</dt><dd>① 전원선 임피던스를 규정값(<strong>50 Ω / 50 µH</strong> (+5 Ω) V형, CISPR 16-1-2)으로 고정해 어디서 재도 같은 결과 ② 상용 전원 쪽 잡음이 측정에 섞이지 않게 차단 ③ 시료의 잡음을 수신기로 전달</dd>
      <dt>사용법 핵심</dt><dd>기준 접지면에 확실히 접지(본딩), 시료–LISN 거리·케이블 배치 규격대로, 사용하지 않는 측정 포트는 50 Ω 종단</dd>
      <dt>주의</dt><dd>대용량 커패시터로 인해 <strong>누설 전류가 커서 접지 없이 사용하면 감전 위험</strong>. 전원 투입 시 과도 전압이 수신기 입력으로 나올 수 있어 리미터 사용</dd>
      <dt>대표 제조사</dt><dd>R&amp;S(ENV 계열), Schwarzbeck(NNLK 계열), AMETEK CTS(Teseq), ETS-Lindgren 등</dd>
    </dl>
  </div>
</div>

<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="전도 방출 측정 셋업">
  <defs><marker id="eqemc-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="206" width="560" height="10" fill="var(--dg-line)"/>
    <text x="300" y="238" font-size="12" fill="var(--text-3)">기준 접지면 (Reference Ground Plane)</text>
    <path d="M40 30 V206" stroke="var(--dg-line)" stroke-width="5"/>
    <text x="54" y="26" font-size="11.5" fill="var(--text-3)" text-anchor="start">수직 기준면 (탁상형: 시료 후면에서 0.4 m 등)</text>
    <rect x="90" y="120" width="170" height="10" fill="var(--dg-muted)"/>
    <path d="M110 130 V206 M240 130 V206" stroke="var(--dg-muted)" stroke-width="4"/>
    <text x="175" y="160" font-size="11.5" fill="var(--text-3)">비전도성 테이블 (0.8 m)</text>
    <rect x="130" y="78" width="90" height="42" rx="4" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="175" y="104" font-weight="700" fill="var(--dg-accent)">EUT</text>
    <path d="M220 100 C 300 100, 300 170, 330 170" fill="none" stroke="var(--dg-accent-2)" stroke-width="2.5"/>
    <text x="300" y="92" font-size="11.5" fill="var(--dg-accent-2)">전원 케이블</text>
    <rect x="330" y="150" width="110" height="56" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="385" y="175" font-weight="700">LISN</text><text x="385" y="193" font-size="11.5" fill="var(--text-2)">접지면에 본딩</text>
    <path d="M440 170 H500" stroke="var(--dg-line)" stroke-width="2.5"/>
    <text x="470" y="160" font-size="11.5" fill="var(--text-3)">AC 전원</text>
    <path d="M385 150 V60 H598" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqemc-arw)"/>
    <text x="480" y="52" font-size="12">RF OUT → 리미터 → 수신기</text>
    <rect x="600" y="30" width="140" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="670" y="58" font-weight="700">EMI 수신기</text><text x="670" y="78" font-size="12" fill="var(--text-2)">9 kHz RBW, QP/AV</text>
    <text x="670" y="130" font-size="12" fill="var(--text-3)">(차폐실 밖 또는 안)</text>
  </g>
</svg>
<figcaption>그림 1. 탁상형 기기의 전도 방출 측정 셋업 개념도(치수는 예시 — CISPR 32 등 적용 규격의 배치도를 따를 것).</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>장비</th><th>무엇을 측정</th><th>포인트</th></tr></thead>
<tbody>
<tr><td>ISN (AAN, 비대칭 의사회로망)</td><td>통신선(LAN 등) 포트의 공통 모드 전도 방출</td><td>케이블 종류(UTP 카테고리 등)와 LCL 값에 맞는 ISN 선택 (CISPR 32)</td></tr>
<tr><td>전류 프로브</td><td>케이블에 흐르는 공통 모드 전류(클램프형)</td><td>프로브 전달 임피던스(dBΩ) 보정 적용, 케이블을 끊지 않고 측정</td></tr>
<tr><td>전압 프로브</td><td>LISN을 쓸 수 없는 대전류·특수 전원의 잡음 전압</td><td>고임피던스(예: 1500 Ω) 프로브, 분압비 보정</td></tr>
<tr><td>흡수 클램프</td><td>30~300 MHz 케이블 방사 전력(가전 등, CISPR 14-1)</td><td>클램프를 케이블 따라 이동하며 최대값 탐색</td></tr>
</tbody></table></div>

<h2>내성(EMS) 시험 장비</h2>
<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/esd-gun.svg" alt="ESD 시뮬레이터 일러스트: 전압 표시 본체, 트리거, 접촉·기중 방전 팁, 접지 리턴 케이블"></div>
  <div>
    <h3>ESD 시뮬레이터 (정전기 건)</h3>
    <div class="equip-en">ESD Simulator / ESD Gun — IEC 61000-4-2 (KS C 9610-4-2)</div>
    <p>사람 손가락에서 튀는 정전기 방전을 재현합니다. 규격 방전 회로(<strong>150 pF / 330 Ω</strong>)로 만든 전류 파형을 시료에 가합니다.</p>
    <dl>
      <dt>용도</dt><dd>접촉 방전(금속 부분, 결합판 HCP/VCP 간접 방전), 기중 방전(절연 부분)</dd>
      <dt>시험 레벨 예</dt><dd>접촉 ±4 kV / 기중 ±8 kV 등 (제품 규격이 정함)</dd>
      <dt>사용법 핵심</dt><dd>팁 교체(접촉: 뾰족, 기중: 둥근), 리턴 케이블 접지, 방전 간격(예: 1초 이상), 방전 지점별 횟수 기록</dd>
      <dt>주의</dt><dd>사람을 향해 방전 금지, 시험 후 시료 잔류 전하 제거(블리더 저항), 습도 기록(기중 방전은 습도 영향 큼)</dd>
      <dt>대표 제조사</dt><dd>AMETEK CTS(EM TEST, Teseq), Noiseken, Haefely 등</dd>
    </dl>
  </div>
</div>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/surge-generator.svg" alt="서지·EFT 복합 발생기 일러스트: 서지 파형 표시, 시험 선택 키, 비상 정지, 시료 전원 출력, 고전압 출력"></div>
  <div>
    <h3>서지 · EFT/버스트 발생기 (복합 시험기)</h3>
    <div class="equip-en">Surge / EFT-Burst / Dips Generator (Multi-function Immunity Tester)</div>
    <p>한 대에 서지, EFT/버스트, 전압 강하·순간 정전 기능을 모은 복합 시험기가 많습니다. 내장 결합/분리 회로망(CDN)을 통해 시료 전원선에 교란을 겹쳐 가합니다.</p>
    <dl>
      <dt>서지</dt><dd>낙뢰·대형 부하 개폐로 인한 큰 에너지 과도: 개방 전압 <strong>1.2/50 µs</strong>, 단락 전류 <strong>8/20 µs</strong> 조합파 (IEC 61000-4-5)</dd>
      <dt>EFT/버스트</dt><dd>릴레이·스위치 개폐 잡음: <strong>5/50 ns</strong> 펄스를 5 kHz 또는 100 kHz 반복의 버스트로 (IEC 61000-4-4). 통신선은 용량성 결합 클램프 사용</dd>
      <dt>전압 강하</dt><dd>전압 강하·순간 정전·변동 (IEC 61000-4-11)</dd>
      <dt>주의</dt><dd><strong>수 kV 고전압</strong> — 시험 중 시료·케이블 접촉 절대 금지, 인터록·비상 정지 확인, 시험 후 방전 확인</dd>
      <dt>대표 제조사</dt><dd>AMETEK CTS(EM TEST UCS 계열, Teseq NSG 계열), Haefely, Noiseken 등</dd>
    </dl>
  </div>
</div>

<h3>방사 내성(RS) 시험 시스템</h3>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="방사 내성 시험 시스템 구성">
  <defs><marker id="eqemc-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="40" width="120" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="80" y="62" font-weight="700" fill="var(--dg-accent)">신호 발생기</text><text x="80" y="79" font-size="11.5" fill="var(--text-2)">80 % AM, 1 kHz</text>
    <path d="M140 65 H178" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqemc-arw2)"/>
    <rect x="180" y="40" width="120" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="240" y="62" font-weight="700" fill="var(--dg-accent-2)">RF 전력 증폭기</text><text x="240" y="79" font-size="11.5" fill="var(--text-2)">수십~수백 W</text>
    <path d="M300 65 H338" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqemc-arw2)"/>
    <rect x="340" y="40" width="110" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="395" y="62" font-weight="700">방향성 결합기</text><text x="395" y="79" font-size="11.5" fill="var(--text-2)">순방향/반사</text>
    <path d="M395 90 V130" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqemc-arw2)"/>
    <rect x="345" y="132" width="100" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="395" y="157" font-size="12" font-weight="700">파워미터</text>
    <path d="M450 65 H500" stroke="var(--dg-line)" stroke-width="2.5"/>
    <rect x="490" y="20" width="250" height="210" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="3"/>
    <text x="615" y="248" font-size="12" fill="var(--text-3)">챔버 (바닥 흡수체 추가한 SAC 또는 FAR)</text>
    <path d="M510 50 L540 65 L510 80 Z" fill="var(--dg-accent-2)" fill-opacity="0.35" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <path d="M500 65 H510" stroke="var(--dg-line)" stroke-width="2.5"/>
    <path d="M548 58 q 10 7 0 14 M558 52 q 16 13 0 26" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <rect x="620" y="40" width="90" height="120" fill="none" stroke="var(--dg-accent)" stroke-dasharray="5 4" stroke-width="1.5"/>
    <text x="665" y="176" font-size="11.5" fill="var(--dg-accent)">균일 전계 영역</text>
    <rect x="642" y="84" width="46" height="34" rx="3" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="665" y="106" font-size="11.5" font-weight="700">EUT</text>
    <circle cx="720" cy="205" r="7" fill="var(--dg-ok)"/>
    <text x="640" y="210" font-size="11.5" fill="var(--dg-ok)">전계 프로브(교정 시)</text>
    <text x="180" y="130" font-size="12" fill="var(--text-3)" text-anchor="middle">사전 교정: 균일 영역의</text>
    <text x="180" y="148" font-size="12" fill="var(--text-3)" text-anchor="middle">여러 점에서 전계 측정 →</text>
    <text x="180" y="166" font-size="12" fill="var(--text-3)" text-anchor="middle">목표 전계에 필요한 순방향 전력 기록</text>
  </g>
</svg>
<figcaption>그림 2. 방사 내성(IEC 61000-4-3) 시험 시스템. 예: 80 MHz~6 GHz, 3 V/m 또는 10 V/m, 1 kHz 80 % AM 변조(시험 레벨·주파수는 제품 규격이 정함).</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>시험 (IEC / KS C)</th><th>주요 장비</th><th>핵심 파라미터(대표)</th></tr></thead>
<tbody>
<tr><td>ESD (61000-4-2 / 9610-4-2)</td><td>ESD 시뮬레이터, 수평·수직 결합판, 블리더 케이블</td><td>150 pF / 330 Ω, 접촉·기중 방전</td></tr>
<tr><td>RS 방사 내성 (61000-4-3)</td><td>신호 발생기, 전력 증폭기, 송신 안테나, 전계 프로브, 결합기·파워미터</td><td>80 MHz~6 GHz, 1 kHz 80 % AM</td></tr>
<tr><td>EFT/버스트 (61000-4-4)</td><td>버스트 발생기, CDN, 용량성 결합 클램프</td><td>5/50 ns, 5 kHz 또는 100 kHz</td></tr>
<tr><td>서지 (61000-4-5)</td><td>조합파 발생기, CDN</td><td>1.2/50 µs 전압, 8/20 µs 전류</td></tr>
<tr><td>CS 전도 내성 (61000-4-6)</td><td>신호 발생기, 증폭기, CDN / EM 클램프 / 전류 주입 프로브</td><td>150 kHz~80 MHz, 1 kHz 80 % AM</td></tr>
<tr><td>전원 주파수 자계 (61000-4-8)</td><td>유도 코일(루프), 전류원</td><td>50/60 Hz 자계 (A/m)</td></tr>
<tr><td>전압 강하·순간 정전 (61000-4-11)</td><td>전압 강하 시뮬레이터(복합 시험기 내장 등)</td><td>잔류 전압 %, 지속 주기(cycle)</td></tr>
<tr><td>고조파 전류 (61000-3-2)</td><td>고조파 분석기 + 청정 AC 전원</td><td>입력 전류의 고조파 성분(차수별)</td></tr>
<tr><td>전압 변동·플리커 (61000-3-3)</td><td>플리커미터 + 기준 임피던스</td><td>Pst, Plt, 전압 변동 d</td></tr>
</tbody></table></div>
<p style="font-size:14px;color:var(--text-3)">※ 한국은 KS C 9610-4-x(=IEC 61000-4-x), 방출은 KS C 9832(=CISPR 32), 내성은 KS C 9835(=CISPR 35) 등 부합 규격을 적용합니다. 레벨은 제품군 규격·고시로 확인하세요.</p>

<div class="card-grid">
  <div class="card"><h3>📶 RF 전력 증폭기</h3><p>RS·CS 시험의 “근육”. 주파수 대역별로 여러 대를 쓰며, 정격 출력·선형성(고조파)·VSWR 보호를 확인합니다. 예: AR(Amplifier Research), Milmega, Prana 등.</p></div>
  <div class="card"><h3>🔌 CDN (결합/분리 회로망)</h3><p>교란 신호는 시료 쪽 선로에 <strong>결합</strong>하고, 보조 장비·전원 쪽으로는 가지 않게 <strong>분리</strong>합니다. 선로 종류(전원 2선·3선, 차폐선, 통신선)마다 맞는 CDN이 필요합니다.</p></div>
  <div class="card"><h3>🟢 전계 프로브</h3><p>RS 시험 전 균일 전계 영역 교정에 사용하는 등방성 전계 센서. 광섬유로 데이터를 전달해 측정 전계를 흐트러뜨리지 않습니다. 배터리·교정 유효기간 확인.</p></div>
</div>

<div class="callout danger">
  <span class="callout-title">EMC 내성 시험 안전 수칙</span>
  서지·EFT·전압 강하 시험 중에는 시료와 결합 장치에 <strong>수 kV</strong>가 걸립니다. 시험 시작 전 주변 인원에게 알리고, 인터록·비상 정지 버튼 위치를 확인하며, 시험 종료 후 출력이 꺼졌는지 확인한 다음 시료를 만지세요. RS 시험 중에는 챔버 입실 금지입니다.
</div>
`,
  quiz: [
    { q: 'CISPR 16-1-1에서 150 kHz~30 MHz(대역 B) 측정에 쓰는 대역폭은?',
      options: ['200 Hz', '9 kHz', '120 kHz', '1 MHz'],
      answer: 1, explain: '대역 A 200 Hz, 대역 B 9 kHz, 대역 C/D 120 kHz, 1 GHz 이상 1 MHz입니다.' },
    { q: 'LISN(AMN)의 역할이 아닌 것은?',
      options: ['전원선 임피던스를 규정값으로 안정화', '상용 전원 쪽 잡음이 측정에 섞이지 않게 분리', '시료의 잡음 전압을 수신기로 전달', '시료에 서지 전압을 인가'],
      answer: 3, explain: '서지 인가는 서지 발생기와 CDN의 역할입니다. LISN은 방출 측정용 장비입니다.' },
    { q: 'IEC 61000-4-5 서지 시험의 조합파 파형으로 옳은 것은?',
      options: ['5/50 ns 전압', '1.2/50 µs 개방 전압, 8/20 µs 단락 전류', '150 pF/330 Ω 방전', '1 kHz 80 % AM'],
      answer: 1, explain: '5/50 ns는 EFT, 150 pF/330 Ω는 ESD, 1 kHz 80 % AM은 RS·CS 변조 조건입니다.' },
    { q: '같은 방출 신호를 측정할 때 검파기별 크기 관계로 옳은 것은?',
      options: ['AV ≥ QP ≥ Peak', 'QP ≥ Peak ≥ AV', 'Peak ≥ QP ≥ AV', '모두 항상 같다'],
      answer: 2, explain: 'Peak는 최대값, QP는 반복률 가중, AV는 평균이므로 일반적으로 Peak ≥ QP ≥ AV입니다.' },
    { q: 'LISN 사용 시 반드시 지켜야 할 안전 사항은?',
      options: ['접지 없이 사용해도 된다', '수신기를 먼저 연결하고 접지는 나중에 한다', '누설 전류가 없으므로 맨손으로 만져도 된다', '기준 접지면에 확실히 접지(본딩)한 후 전원을 인가한다'],
      answer: 3, explain: 'LISN은 내부 커패시터로 누설 전류가 크므로 접지 없이 사용하면 감전 위험이 있습니다.' }
  ],
  refs: [
    { title: 'Rohde & Schwarz — EMC Test Receivers & Systems', url: 'https://www.rohde-schwarz.com', note: 'ESW, ESR, LISN(ENV), EMC 측정 소프트웨어' },
    { title: 'Keysight — PXE EMI Receiver', url: 'https://www.keysight.com', note: 'N9048B PXE, EMC 측정 애플리케이션' },
    { title: 'AMETEK CTS (EM TEST · Teseq)', url: 'https://www.ametek-cts.com', note: 'ESD·EFT·서지·전압 강하·고조파 시험기' },
    { title: 'IEC Webstore — CISPR 16 / IEC 61000-4 시리즈', url: 'https://webstore.iec.ch', note: '측정 장비 요건과 내성 시험 방법 표준' }
  ]
});

/* ---------------------------------------------------------------
 * 7. SAR 측정 시스템
 * ------------------------------------------------------------- */
COURSE.addLesson({
  id: 'equip-sar-system',
  module: 'equip',
  order: 7,
  title: 'SAR 측정 시스템',
  minutes: 30,
  level: '중급',
  summary: '로봇·E-field 프로브·팬텀·조직등가액·유전율 측정 키트·기준 다이폴 등 SAR 측정 시스템의 구성요소와, 시스템 체크 절차, 5G mmWave 전력밀도(PD)·고속 SAR 시스템을 이해합니다.',
  objectives: [
    'SAR 측정 시스템의 구성요소(로봇, 프로브, DAE, 팬텀, 조직등가액, 기기 홀더)와 역할을 설명할 수 있다.',
    '프로브 변환계수(ConvF)와 조직등가액 유전 특성 측정이 왜 필요한지 안다.',
    '기준 다이폴을 이용한 시스템 체크(검증) 절차를 설명할 수 있다.',
    '6 GHz 이상 전력밀도(PD) 측정과 고속 SAR 시스템의 개념을 안다.'
  ],
  body: `
<p>SAR(Specific Absorption Rate, 전자파흡수율)는 인체 조직 1 kg이 흡수하는 전자파 전력(W/kg)입니다. 사람 머리에 직접 센서를 넣을 수는 없으니, <strong>사람 머리·몸통을 흉내 낸 통(팬텀)</strong>에 <strong>인체 조직과 전기적 성질이 같은 액체(조직등가액)</strong>를 채우고, 그 안을 <strong>작은 전계 프로브</strong>가 로봇에 실려 돌아다니며 전계를 측정합니다. 측정한 전계 E로부터 SAR = σ·E²/ρ 를 계산합니다.</p>

<div class="formula">SAR = σ · |E|<sup>2</sup> / ρ &nbsp;&nbsp; (σ: 도전율 S/m, E: 전계 실효값 V/m, ρ: 밀도 kg/m³)</div>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  전자레인지 속 음식이 데워지듯, 휴대폰 전파도 몸에 아주 조금 흡수됩니다. SAR 시험은 “사람 모양의 수조에 사람 몸과 비슷한 물을 채우고, 휴대폰을 대 놓은 채 물속 곳곳의 전파 세기를 로봇 팔로 재서 가장 많이 흡수되는 곳을 찾는” 시험입니다.
</div>

<h2>시스템 구성</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="SAR 측정 시스템 구성도">
  <defs><marker id="eqsar-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="140" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="90" y="42" font-weight="700">측정 PC</text><text x="90" y="60" font-size="11.5" fill="var(--text-2)">측정·해석 SW</text>
    <path d="M160 45 H208" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsar-arw)"/>
    <rect x="210" y="20" width="140" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="280" y="42" font-weight="700">로봇 제어기</text><text x="280" y="60" font-size="11.5" fill="var(--text-2)">위치 제어</text>
    <path d="M280 70 V110" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsar-arw)"/>
    <path d="M250 250 L250 170 L300 120 L400 100" fill="none" stroke="var(--dg-line)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M250 250 L250 170 L300 120 L400 100" fill="none" stroke="var(--dg-fill-2)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="220" y="250" width="60" height="26" rx="4" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="250" y="294" font-size="12" font-weight="700">6축 로봇</text>
    <rect x="400" y="90" width="40" height="22" rx="4" fill="var(--dg-accent-2)"/>
    <text x="420" y="82" font-size="11.5" font-weight="700" fill="var(--dg-accent-2)">DAE</text>
    <path d="M440 101 L462 150" stroke="var(--dg-line)" stroke-width="4"/>
    <path d="M462 150 L470 170" stroke="var(--dg-accent)" stroke-width="3"/>
    <text x="530" y="130" font-size="12" font-weight="700" fill="var(--dg-accent)">E-field 프로브</text>
    <path d="M360 160 H620 L612 205 H368 Z" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M364 176 H616 L612 204 H368 Z" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <text x="500" y="198" font-size="11" fill="var(--dg-accent)">조직등가액 (깊이 15 cm 이상 등)</text>
    <text x="640" y="176" font-size="12" font-weight="700" text-anchor="start">팬텀</text>
    <rect x="430" y="208" width="90" height="12" rx="3" fill="var(--dg-accent-2)"/>
    <path d="M475 220 V240" stroke="var(--dg-line)" stroke-width="3"/><rect x="445" y="240" width="60" height="10" fill="var(--dg-line)"/>
    <text x="475" y="268" font-size="12">시험 단말 + 기기 홀더</text>
    <rect x="600" y="230" width="140" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="670" y="252" font-weight="700" fill="var(--dg-accent)">무선통신 시험기</text><text x="670" y="270" font-size="11.5" fill="var(--text-2)">최대 출력 유지</text>
    <path d="M600 255 C 570 255, 560 225, 522 216" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <rect x="560" y="20" width="180" height="70" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="650" y="42" font-weight="700">보조 장비</text>
    <text x="650" y="60" font-size="11.5" fill="var(--text-2)">유전율 측정 키트 · 온도계</text>
    <text x="650" y="77" font-size="11.5" fill="var(--text-2)">기준 다이폴 · 파워미터</text>
    <path d="M400 100 C 360 96, 300 90, 160 60" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="110" y="100" font-size="11" fill="var(--dg-accent-2)">측정 데이터(광 링크 등)</text>
  </g>
</svg>
<figcaption>그림 1. SAR 측정 시스템 구성 개념도. DAE(Data Acquisition Electronics)는 프로브 바로 위에서 신호를 증폭·디지털화해 PC로 보냅니다.</figcaption>
</figure>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/sar-system.svg" alt="SAR 측정 시스템 일러스트: 1 로봇 팔, 2 E-field 프로브, 평판 팬텀과 조직등가액, 시험 단말과 기기 홀더"></div>
  <div>
    <h3>SAR 측정 시스템 (로봇 스캐닝형)</h3>
    <div class="equip-en">SAR Measurement System — Robot, Probe, Phantom</div>
    <p>① 6축 로봇 ② E-field 프로브. 로봇이 프로브를 팬텀 안에서 정밀하게 움직여 면 스캔(Area scan)으로 최대 지점을 찾고, 그 주변을 3차원 정밀 스캔(Zoom scan)해 1 g·10 g 평균 SAR를 계산합니다.</p>
    <dl>
      <dt>용도</dt><dd>휴대폰·태블릿·웨어러블 등 인체 근접 무선기기의 SAR 측정(머리, 몸통, 사지), 시스템 체크</dd>
      <dt>주요 구성</dt><dd>산업용 6축 로봇, 프로브·DAE, 팬텀(SAM, 평판), 조직등가액, 기기 홀더, 측정 SW, 광학 표면 감지(프로브–팬텀 거리 확인)</dd>
      <dt>주의</dt><dd>로봇 동작 반경 출입 금지, 충돌 방지(프로브 손상은 고가·장기 수리), 조직등가액 증발·온도 관리</dd>
      <dt>대표 모델</dt><dd>SPEAG DASY6 · DASY8, MVG COMOSAR (<a href="https://speag.swiss" target="_blank" rel="noopener">SPEAG</a>, <a href="https://www.mvg-world.com" target="_blank" rel="noopener">MVG</a>)</dd>
    </dl>
  </div>
</div>

<div class="table-wrap"><table class="data">
<thead><tr><th>구성요소</th><th>역할</th><th>관리 포인트</th></tr></thead>
<tbody>
<tr><td>E-field 프로브</td><td>서로 직교하는 3개의 소형 다이폴(다이오드 검파)로 방향과 무관한(등방성) 전계 측정</td><td>연 1회 등 정기 교정. 교정서의 주파수·액체별 <strong>변환계수(ConvF)</strong> 사용. 팁 손상·오염 주의 (예: SPEAG EX3DV4)</td></tr>
<tr><td>DAE</td><td>프로브 신호 증폭·디지털화</td><td>프로브와 별도 교정 대상(예: SPEAG DAE4)</td></tr>
<tr><td>SAM 팬텀</td><td>표준 성인 머리 모양 쉘(좌·우 귀 위치). 머리 SAR(볼 Cheek, 기울임 Tilt 15°)</td><td>쉘 두께·형상 규격, 균열·변형 점검</td></tr>
<tr><td>평판 팬텀 (Flat, 예: ELI)</td><td>몸통·사지·핫스팟·시스템 체크용 평평한 바닥</td><td>바닥 두께 규격(대표적으로 2 mm), 수평 확인</td></tr>
<tr><td>조직등가액</td><td>인체 조직의 유전율(ε<sub>r</sub>)·도전율(σ)을 주파수별로 흉내 낸 액체</td><td>측정 전 유전 특성 측정, 액체 높이(대표적으로 15 cm 이상), 온도 안정</td></tr>
<tr><td>기기 홀더</td><td>시료를 팬텀에 정해진 위치·각도·간격으로 고정</td><td>저유전율 재질(측정에 영향 최소), 간격(예: 몸통 0~25 mm 등 규정) 정확히</td></tr>
<tr><td>온도계</td><td>액체·실내 온도 기록</td><td>교정된 온도계, 측정 중 온도 변화 허용 범위(대표적으로 ±2 °C 이내) 확인</td></tr>
</tbody></table></div>

<h2>조직등가액과 유전율 측정 키트</h2>
<p>프로브는 “전계”를 재고, SAR는 σ·E²/ρ로 계산되므로 <strong>액체의 σ가 틀리면 SAR가 틀립니다</strong>. 또 액체의 ε<sub>r</sub>·σ가 인체와 달라지면 전계 분포 자체가 바뀝니다. 그래서 매 시험(측정일) 전에 액체의 유전 특성을 측정해 목표값과 비교합니다.</p>

<div class="equip">
  <div class="equip-fig"><img src="assets/img/equip/dielectric-probe-kit.svg" alt="유전율 측정 키트 일러스트: VNA, 케이블, 개방단 동축 프로브를 조직등가액 비커에 담근 모습, 온도계"></div>
  <div>
    <h3>유전율 측정 키트</h3>
    <div class="equip-en">Dielectric Assessment Kit — Open-ended Coaxial Probe + VNA</div>
    <p>끝이 잘린(개방단) 동축 프로브를 액체에 담그고 VNA로 반사계수(S11)를 측정하면, 소프트웨어가 액체의 ε<sub>r</sub>와 σ를 계산합니다.</p>
    <dl>
      <dt>사용법 핵심</dt><dd>① VNA 예열 ② 프로브 교정(개방-공기, 단락, 기준 액체 — 보통 탈이온수) ③ 액체 온도 측정 ④ 기포 없이 프로브 담가 측정 ⑤ 측정 주파수에서 목표값 대비 편차 확인·기록</dd>
      <dt>허용 편차</dt><dd>대표적으로 목표값 대비 ±5 % (규격·판에 따라 ±10 %까지 허용하고 SAR 보정을 요구하기도 함 — 적용 규격·KDB 확인)</dd>
      <dt>주의</dt><dd>프로브 끝 기포는 큰 오차 원인, 케이블을 교정 후 움직이지 않기, 측정 후 프로브 세척</dd>
      <dt>대표 모델</dt><dd>SPEAG DAK 계열, Keysight N1501A 유전체 프로브 키트</dd>
    </dl>
  </div>
</div>

<div class="callout warn">
  <span class="callout-title">액체 관리</span>
  조직등가액은 시간이 지나면 수분이 증발해 유전 특성이 변합니다. 뚜껑을 덮어 보관하고, 보충 시 제조사 지침을 따르며, 사용 이력을 기록합니다. 피부·눈 접촉을 피하고(장갑·보안경), 흘린 액체는 즉시 닦으세요. 머리·몸통 조직 파라미터 적용 방식은 규격 버전(IEC/IEEE 62209-1528, FCC KDB 865664)에 따라 다를 수 있으니 확인합니다.
</div>

<h2>시스템 체크: 기준 다이폴</h2>
<p>측정 당일 시스템 전체(프로브·DAE·액체·SW)가 정상인지 확인하는 절차가 <strong>시스템 체크(System check)</strong>입니다. 주파수 대역별로 교정된 <strong>기준 다이폴(Validation dipole)</strong>을 평판 팬텀 아래에 두고 정해진 전력을 넣어, 측정된 SAR가 다이폴 교정서의 목표값과 일치하는지 봅니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="기준 다이폴을 이용한 시스템 체크 셋업">
  <defs><marker id="eqsar-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="160" width="120" height="50" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="80" y="182" font-weight="700" fill="var(--dg-accent)">신호 발생기</text><text x="80" y="200" font-size="11.5" fill="var(--text-2)">CW, 대역 중심</text>
    <path d="M140 185 H168" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsar-arw2)"/>
    <rect x="170" y="160" width="100" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="220" y="190" font-weight="700">증폭기</text>
    <path d="M270 185 H298" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsar-arw2)"/>
    <rect x="300" y="160" width="110" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="355" y="182" font-weight="700">결합기</text><text x="355" y="200" font-size="11.5" fill="var(--text-2)">입력 전력 모니터</text>
    <path d="M355 210 V230" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#eqsar-arw2)"/>
    <text x="355" y="250" font-size="12">파워미터</text>
    <path d="M410 185 H520 V150" fill="none" stroke="var(--dg-line)" stroke-width="2.5"/>
    <path d="M430 60 H700 L694 110 H436 Z" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M433 74 H697 L694 108 H436 Z" fill="var(--dg-accent)" fill-opacity="0.18"/>
    <text x="640" y="98" font-size="11.5" fill="var(--dg-accent)">평판 팬텀 + 액체</text>
    <path d="M470 138 H570" stroke="var(--dg-accent-2)" stroke-width="5" stroke-linecap="round"/>
    <path d="M520 138 V150" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <path d="M465 112 V136 M575 112 V136" stroke="var(--dg-muted)" stroke-width="2"/>
    <text x="620" y="142" font-size="12" fill="var(--dg-accent-2)" text-anchor="start">기준 다이폴</text>
    <text x="620" y="126" font-size="11" fill="var(--text-3)" text-anchor="start">스페이서로 규정 거리</text>
    <path d="M520 20 V88" stroke="var(--dg-line)" stroke-width="4"/>
    <text x="520" y="14" font-size="12">프로브</text>
    <rect x="20" y="20" width="360" height="110" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-ok)"/>
    <text x="200" y="46" font-weight="700" fill="var(--dg-ok)">판정</text>
    <text x="200" y="70" font-size="12.5">측정 SAR를 1 W 입력 기준으로 정규화</text>
    <text x="200" y="92" font-size="12.5">→ 다이폴 교정서 목표값과 비교</text>
    <text x="200" y="114" font-size="12.5" font-weight="700">대표 기준: 목표값 대비 ±10 % 이내</text>
  </g>
</svg>
<figcaption>그림 2. 시스템 체크 셋업. 입력 전력(예: 100 mW 또는 250 mW — 절차에 따름)을 다이폴 입력단 기준으로 정확히 맞추는 것이 핵심입니다.</figcaption>
</figure>
<ol class="steps">
  <li><strong>액체 측정</strong>당일 사용할 액체의 ε<sub>r</sub>·σ·온도를 측정·기록합니다.</li>
  <li><strong>다이폴 설치</strong>해당 대역 다이폴을 스페이서로 팬텀 바닥 아래 규정 거리에 수평으로 설치합니다.</li>
  <li><strong>입력 전력 설정</strong>파워미터로 다이폴 입력단 전력을 설정값에 맞춥니다(결합기 경로 보정 포함).</li>
  <li><strong>측정·정규화</strong>1 g·10 g SAR를 측정하고 1 W 입력 기준으로 정규화합니다.</li>
  <li><strong>판정·기록</strong>목표값 대비 편차가 허용 범위 안이면 당일 시료 측정 진행. 벗어나면 원인(액체, 프로브, 전력 설정)을 찾기 전까지 측정하지 않습니다.</li>
</ol>
<p>또한 다이폴 자체도 주기적으로 교정하며, 신규 설치·주요 수리 후에는 더 엄격한 <strong>시스템 검증(System validation)</strong>을 수행합니다.</p>

<h2>5G mmWave 전력밀도(PD)와 고속 SAR</h2>
<p>6 GHz를 넘는 주파수(예: 5G FR2 mmWave)에서는 에너지가 피부 표면에서 대부분 흡수되므로, 노출 지표로 SAR 대신 <strong>입사 전력밀도(PD, Power Density, W/m²)</strong>를 평가합니다(국가별 적용 주파수·평균 면적 규정 확인). 측정 방법 표준으로는 IEC/IEEE 63195-1(측정), 63195-2(계산) 등이 있습니다.</p>
<div class="card-grid">
  <div class="card"><h3>📡 PD 측정 시스템</h3><p>팬텀·액체 없이 <strong>자유공간</strong>에서 단말 표면 가까이를 전용 프로브로 스캔합니다. 근접 전계의 크기·위상 정보를 얻어 전력밀도를 재구성하는 방식이 쓰입니다. 예: SPEAG DASY8 Module mmWave와 EUmmWV 계열 프로브.</p></div>
  <div class="card"><h3>⚡ 고속 SAR 시스템</h3><p>로봇 대신 <strong>프로브 배열</strong>이나 벡터(크기+위상) 측정·재구성 기법으로 수 초~수십 초 만에 SAR를 평가합니다. 예: SPEAG cSAR3D, MVG ART-MAN. 인증 적용 여부·범위는 규격(IEC 62209-3 등)과 인증기관 요구에 따라 다르므로 확인이 필요합니다.</p></div>
  <div class="card"><h3>🧭 시간 평균 SAR(TAS)</h3><p>최근 단말은 일정 시간 동안의 평균 노출을 기준 이하로 제어하는 알고리즘을 씁니다. 이를 검증하는 시험(예: FCC의 시간 평균 SAR 평가)에는 시간 영역에서 전력을 기록하는 장비·절차가 추가로 필요합니다.</p></div>
</div>

<h2>흔한 실수와 현장 팁</h2>
<ul>
  <li>유전율 측정 주파수와 시험 채널 주파수가 달라 편차 계산을 잘못함 → 시험 채널 주파수에서 값을 읽기.</li>
  <li>액체 높이 부족(증발) → 측정 전 눈금 확인·보충 후 재측정.</li>
  <li>프로브 교정서의 ConvF를 다른 액체·주파수 대역 것으로 적용.</li>
  <li>시스템 체크 입력 전력을 결합기 출력이 아닌 곳에서 설정해 기준면 오류.</li>
  <li>시료 위치(볼/기울임, 간격) 사진을 남기지 않음 → 성적서 첨부·재현 불가. <strong>셋업 사진은 SAR 기록의 필수 증거</strong>입니다.</li>
</ul>
<div class="callout tip">
  <span class="callout-title">SAR 시험실 하루 루틴</span>
  실내 온도 확인 → 액체 온도·유전 특성 측정 → 시스템 체크 → 시료 전도 출력 확인 → 시료 SAR 측정 → 액체 뚜껑 덮고 로봇 원점 복귀. 이 순서를 체크리스트로 만들어 두면 누락이 없습니다(<a href="#/forms">양식</a> 참고).
</div>
`,
  quiz: [
    { q: 'SAR 계산식 SAR = σ·E²/ρ에서 σ는 무엇인가?',
      options: ['조직등가액의 도전율', '프로브 감도', '팬텀 두께', '단말 출력'],
      answer: 0, explain: 'σ는 도전율(S/m), E는 전계 실효값, ρ는 밀도입니다. 그래서 액체의 도전율을 매번 측정해 확인합니다.' },
    { q: '조직등가액의 유전율·도전율을 측정하는 장비 구성으로 옳은 것은?',
      options: ['스펙트럼 분석기 + 루프 안테나', '개방단 동축 프로브 + VNA', 'LISN + EMI 수신기', 'ESD 건 + 결합판'],
      answer: 1, explain: '개방단 동축 프로브를 액체에 담그고 VNA로 반사계수를 측정해 ε와 σ를 계산합니다.' },
    { q: '시스템 체크에서 사용하는 기준 소자는?',
      options: ['표준 이득 혼', 'LPDA', '주파수 대역별 기준 다이폴', '바이코니컬 안테나'],
      answer: 2, explain: '대역별로 교정된 기준 다이폴을 평판 팬텀 아래에 두고 측정 SAR를 목표값과 비교합니다.' },
    { q: '6 GHz 이상 mmWave 대역에서 SAR 대신 주로 평가하는 노출 지표는?',
      options: ['전계강도(dBµV/m)', 'TRP', 'EIRP', '입사 전력밀도(PD)'],
      answer: 3, explain: '고주파에서는 에너지가 표면에서 흡수되므로 입사 전력밀도(W/m²)로 평가합니다.' },
    { q: '시스템 체크 결과가 허용 범위를 벗어났을 때 올바른 조치는?',
      options: ['시료 측정을 계속하고 나중에 보정한다', '원인(액체, 프로브, 입력 전력 설정 등)을 찾아 해결하기 전까지 시료 측정을 하지 않는다', '목표값을 측정값에 맞춰 수정한다', '다른 대역 다이폴로 바꿔 통과시킨다'],
      answer: 1, explain: '시스템 체크는 당일 측정의 유효성 근거입니다. 불합격이면 원인을 해결한 뒤 다시 체크해야 합니다.' }
  ],
  refs: [
    { title: 'SPEAG — DASY6 / DASY8 / cSAR3D / DAK', url: 'https://speag.swiss', note: 'SAR·PD 측정 시스템, 프로브, 팬텀, 유전율 측정 키트' },
    { title: 'MVG — COMOSAR / ART-MAN', url: 'https://www.mvg-world.com', note: 'SAR 측정 시스템(로봇형, 배열형)' },
    { title: 'FCC KDB (Knowledge Database)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'KDB 865664(SAR 측정 요건), 447498(RF 노출 일반) 등' },
    { title: 'IEC Webstore — IEC/IEEE 62209-1528, 63195', url: 'https://webstore.iec.ch', note: 'SAR 측정 표준, 전력밀도 측정 표준' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '전자파 인체보호기준, 전자파흡수율 측정기준 고시' }
  ]
});
