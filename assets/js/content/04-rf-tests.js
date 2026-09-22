/* MODULE 04 — 무선 시험 항목과 방법 */
COURSE.addLesson({
  id: 'rftest-overview',
  module: 'rftest',
  order: 1,
  title: '무선 시험 개요와 준비',
  minutes: 20,
  level: '기초',
  summary: '무선 시험 항목 전체 지도, 전도·방사 시험의 차이, 시험 모드·채널 선정, 시료 준비와 경로 손실 보정, 정상·극한 조건을 한 번에 정리합니다.',
  objectives: [
    '송신기·수신기·기타 무선 시험 항목을 분류하고 각각이 무엇을 확인하는지 설명할 수 있다.',
    '전도(Conducted) 시험과 방사(Radiated) 시험의 차이와 선택 기준을 안다.',
    '시험 모드(연속 송신, 채널 low/mid/high, 최악 데이터율)를 정하는 이유를 설명할 수 있다.',
    '전도 시험 셋업을 구성하고 경로 손실(Offset)을 보정할 수 있다.'
  ],
  body: `
<p>무선 시험은 “전파를 의도적으로 내보내는 기기”가 <strong>정해진 주파수 안에서, 정해진 세기 이하로, 깨끗하게</strong> 전파를 쓰는지 확인하는 일입니다. 항목이 많아 보이지만, 큰 그림을 먼저 잡으면 각 항목이 왜 필요한지 자연스럽게 이해됩니다. 이 강의는 모듈 04 전체의 <strong>지도</strong> 역할을 합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  무선기기를 <strong>도로 위의 차</strong>라고 생각해 보세요. <em>송신 출력</em>은 속도 제한, <em>점유 대역폭</em>은 차선 폭, <em>주파수 허용편차</em>는 차선 중앙을 잘 지키는지, <em>스퓨리어스</em>는 옆 차선으로 튀는 돌멩이·매연, <em>수신기 시험</em>은 주변이 시끄러워도 신호를 잘 알아듣는지, <em>DFS·LBT</em>는 “먼저 온 차(레이더·다른 기기)에 양보하는 예절”입니다.
</div>

<h2>시험 항목 전체 지도</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="무선 시험 항목 분류">
  <defs><marker id="rto-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="14" fill="var(--text)" text-anchor="middle">
    <rect x="290" y="10" width="180" height="44" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="380" y="38" font-weight="700" font-size="15">무선 시험 항목</text>
    <path d="M380 54 L380 70 L130 70 L130 88" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rto-arw)"/>
    <path d="M380 70 L380 88" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rto-arw)"/>
    <path d="M380 70 L630 70 L630 88" fill="none" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rto-arw)"/>

    <rect x="20" y="92" width="220" height="200" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="130" y="118" font-weight="700" fill="var(--dg-accent)">송신기 (Tx)</text>
    <g font-size="12.5" fill="var(--text-2)">
      <text x="130" y="144">송신 출력 · 전력밀도(PSD)</text>
      <text x="130" y="166">점유 주파수 대역폭 (OBW)</text>
      <text x="130" y="188">주파수 허용편차 · 안정도</text>
      <text x="130" y="210">스퓨리어스 · 불요 발사</text>
      <text x="130" y="232">대역 경계 (Band edge)</text>
      <text x="130" y="254">호핑 채널 수 · 체류시간</text>
      <text x="130" y="276">EIRP · 방사 스퓨리어스</text>
    </g>

    <rect x="270" y="92" width="220" height="200" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="380" y="118" font-weight="700" fill="var(--dg-ok)">수신기 (Rx)</text>
    <g font-size="12.5" fill="var(--text-2)">
      <text x="380" y="144">수신기 스퓨리어스 (부차 발사)</text>
      <text x="380" y="166">수신 감도</text>
      <text x="380" y="188">블로킹 (Blocking)</text>
      <text x="380" y="210">인접채널 선택도</text>
      <text x="380" y="232">OTA 수신 성능 (TIS)</text>
    </g>

    <rect x="520" y="92" width="220" height="200" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="630" y="118" font-weight="700" fill="var(--dg-accent-2)">공유·운용 조건</text>
    <g font-size="12.5" fill="var(--text-2)">
      <text x="630" y="144">DFS (레이더 회피)</text>
      <text x="630" y="166">적응성 · LBT</text>
      <text x="630" y="188">매체 점유 시간 · 듀티</text>
      <text x="630" y="210">주파수 사용 조건</text>
      <text x="630" y="232">(실내 전용, 대역 제한 등)</text>
    </g>
  </g>
</svg>
<figcaption>그림 1. 무선 시험 항목의 큰 분류. 실제 적용 항목은 제품 종류(무선랜, 블루투스, 이동통신 단말 등)와 적용 규격에 따라 달라집니다.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>무엇을 확인하나</th><th>대표 적용 규격(예)</th><th>이 모듈 강의</th></tr></thead>
<tbody>
<tr><td>송신 출력</td><td>허용된 세기 이하로 송신하는가</td><td>FCC 15.247(b), EN 300 328, 국내 기술기준</td><td><a href="#/l/rftest-power">송신 출력 측정</a></td></tr>
<tr><td>점유 주파수 대역폭</td><td>허용 대역폭 안에 신호가 들어가는가</td><td>FCC 15.247(a), EN 300 328</td><td><a href="#/l/rftest-obw">점유 주파수 대역폭</a></td></tr>
<tr><td>주파수 허용편차</td><td>중심 주파수가 정확·안정한가</td><td>국내 기술기준, FCC 2.1055 등</td><td><a href="#/l/rftest-freq">주파수 허용편차</a></td></tr>
<tr><td>스퓨리어스 · 불요 발사</td><td>필요 없는 주파수로 전파가 새지 않는가</td><td>FCC 15.247(d)·15.209, EN 300 328</td><td><a href="#/l/rftest-spurious">스퓨리어스 발사</a></td></tr>
<tr><td>수신기 · DFS · LBT</td><td>수신 성능, 다른 무선 서비스와의 공존</td><td>EN 300 328, EN 301 893, KDB 905462</td><td><a href="#/l/rftest-rx">수신기 시험과 기타 항목</a></td></tr>
<tr><td>방사 시험 · OTA</td><td>안테나를 포함한 실제 방사량</td><td>ANSI C63.10/C63.26, CTIA 등</td><td><a href="#/l/rftest-radiated">방사 무선 시험</a></td></tr>
</tbody></table></div>

<h2>전도 시험과 방사 시험</h2>
<p>무선 시험은 신호를 <strong>어떻게 받아 오느냐</strong>에 따라 두 가지로 나뉩니다.</p>
<div class="card-grid">
  <div class="card"><h3>🔌 전도 시험 (Conducted)</h3><p>시료의 안테나 대신 <strong>RF 케이블을 안테나 단자에 직접 연결</strong>해 측정합니다. 공간 전파의 영향이 없어 <strong>재현성이 좋고 빠르며 불확도가 작습니다</strong>. 출력·대역폭·주파수 오차·전도 스퓨리어스 대부분을 이 방법으로 합니다.</p></div>
  <div class="card"><h3>📡 방사 시험 (Radiated)</h3><p>전자파 무반사실(챔버)에서 시료가 <strong>안테나로 실제 내보내는 전파</strong>를 수신 안테나로 측정합니다. 안테나 이득·케이스 누설이 모두 포함됩니다. 안테나 단자가 없는 제품, 방사 스퓨리어스, EIRP 확인, OTA 시험에 사용합니다.</p></div>
</div>
<p>규격은 보통 “안테나 단자가 있으면 전도 측정, 일체형 안테나라 단자가 없으면 방사 측정” 식으로 정합니다. 단, <strong>방사 스퓨리어스(케이스 누설 포함)</strong>는 전도 시험을 했더라도 별도로 요구되는 경우가 많습니다.</p>

<h2>시험 모드: 무엇을, 어떤 상태로 측정하나</h2>
<h3>연속 송신 모드(테스트 모드)</h3>
<p>평소 스마트폰이나 IoT 기기는 필요할 때만 잠깐씩 전파를 냅니다. 이런 상태로는 측정이 불안정하므로, 제조사가 제공하는 <strong>테스트 소프트웨어(엔지니어링 모드, 칩셋 툴 등)</strong>로 다음을 고정합니다.</p>
<ul>
  <li><strong>채널(주파수) 고정</strong> — 호핑·자동 채널 선택 끄기</li>
  <li><strong>연속 송신 또는 일정 듀티 사이클</strong> — 가능하면 듀티 사이클 98% 이상의 연속 송신. 불가능하면 듀티 사이클을 측정해 보정합니다.</li>
  <li><strong>변조 방식·데이터율 고정</strong> — 예: 802.11b 1 Mbps, 802.11g 6 Mbps, 802.11n MCS0 등</li>
  <li><strong>최대 출력 설정</strong> — 제조사가 선언한 최대 출력(타깃 파워) 설정값을 확인하고 기록</li>
</ul>

<h3>채널 선정: 왜 low / mid / high 인가</h3>
<figure class="diagram">
<svg viewBox="0 0 760 190" role="img" aria-label="2.4 GHz 대역의 low mid high 채널 선정">
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="80" y="40" width="600" height="104" fill="var(--dg-fill-2)" stroke="none"/>
    <line x1="60" y1="144" x2="720" y2="144" stroke="var(--dg-line)" stroke-width="1.5"/>
    <line x1="80" y1="30" x2="80" y2="150" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="680" y1="30" x2="680" y2="150" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="80" y="166" fill="var(--dg-accent-2)">2400</text>
    <text x="680" y="166" fill="var(--dg-accent-2)">2483.5 MHz</text>
    <text x="380" y="34" font-size="12" fill="var(--text-3)">허용 대역 (예: 2.4 GHz ISM)</text>
    <path d="M94 144 L106 84 L226 84 L238 144" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <path d="M274 144 L286 84 L406 84 L418 144" fill="var(--dg-fill)" stroke="var(--dg-line)" stroke-width="1.8"/>
    <path d="M454 144 L466 84 L586 84 L598 144" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <text x="166" y="106" font-weight="700" fill="var(--dg-accent)">Low</text>
    <text x="166" y="124" font-size="12" fill="var(--text-2)">Ch1 2412</text>
    <text x="346" y="106" font-weight="700">Mid</text>
    <text x="346" y="124" font-size="12" fill="var(--text-2)">Ch6 2437</text>
    <text x="526" y="106" font-weight="700" fill="var(--dg-accent)">High</text>
    <text x="526" y="124" font-size="12" fill="var(--text-2)">Ch11 2462</text>
    <text x="380" y="184" font-size="12" fill="var(--text-3)">Low·High는 대역 경계에 가까워 대역 경계 · 스퓨리어스의 최악 조건, Mid는 대역 중앙 대표값</text>
  </g>
</svg>
<figcaption>그림 2. 채널 선정 예(2.4 GHz 무선랜 20 MHz 채널). 실제 채널은 제품이 지원하는 최저·중간·최고 채널로 정합니다.</figcaption>
</figure>
<p>모든 채널을 다 측정할 수는 없으므로, 규격은 보통 <strong>최저(low)·중간(mid)·최고(high) 채널</strong>을 대표로 측정하게 합니다. 주파수에 따라 전력증폭기(PA) 특성, 안테나 정합, 필터 특성이 달라지므로 양 끝과 중앙을 보면 특성 변화를 대부분 잡을 수 있습니다. 특히 low·high 채널은 허용 대역 경계에 가까워 <strong>대역 경계(Band edge) 발사</strong>가 가장 나쁘게 나오는 채널입니다.</p>

<h3>데이터율·변조: 최악 조건 찾기</h3>
<p>같은 채널이라도 변조 방식과 데이터율에 따라 결과가 달라집니다. 일반적인 경향은 다음과 같습니다(칩셋마다 다르므로 <strong>사전 측정(Pre-scan)으로 확인</strong>합니다).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>보통의 최악 조건(경향)</th><th>이유</th></tr></thead>
<tbody>
<tr><td>송신 출력</td><td>낮은 데이터율 (예: 802.11b 1 Mbps, OFDM 6 Mbps / MCS0)</td><td>고차 변조(64/256/1024-QAM)는 선형성 확보를 위해 출력을 낮추는 경우가 많음</td></tr>
<tr><td>점유 대역폭</td><td>가장 넓은 채널 대역폭 모드 (20/40/80/160 MHz)</td><td>대역폭은 채널 폭에 비례</td></tr>
<tr><td>대역 경계 · 스퓨리어스</td><td>최고 출력 모드 + 가장 넓은 대역폭 + 경계 채널</td><td>출력이 클수록, 신호가 넓을수록 경계 밖으로 새는 에너지가 큼</td></tr>
<tr><td>전력밀도(PSD)</td><td>좁은 대역폭 + 높은 출력 모드</td><td>같은 전력이 좁은 대역에 몰림</td></tr>
</tbody></table></div>
<p>모든 모드를 다 측정하는 대신, 모드별로 출력을 빠르게 비교한 뒤 <strong>최악 모드를 선정하고 그 근거를 기록</strong>하는 것이 일반적인 방법입니다. 선정 근거가 없으면 심사 과정에서 “왜 이 모드만 측정했는가”라는 질문을 받습니다.</p>

<h2>시료 준비: 임시 안테나 포트와 테스트 소프트웨어</h2>
<ul>
  <li><strong>임시 안테나 포트(Temporary antenna port)</strong> — 일체형 안테나 제품은 제조사가 안테나를 떼고 <strong>SMA 커넥터나 U.FL(IPEX) 케이블</strong>을 달아 전도 시험용 시료를 따로 준비합니다. 이때 연결부 손실(피그테일 케이블 손실)도 제조사 자료 또는 실측으로 확인해 보정합니다.</li>
  <li><strong>시료 2대 운영</strong> — 흔히 “전도용 시료(RF 포트 있음)”와 “방사용 시료(정상 안테나)”를 나눠 받습니다. 두 시료의 시리얼 번호를 따로 기록합니다.</li>
  <li><strong>테스트 소프트웨어</strong> — 소프트웨어 이름·버전, 명령어(채널·모드·파워 설정값)를 기록합니다. 나중에 재시험할 때 같은 조건을 재현하는 유일한 근거입니다.</li>
  <li><strong>전원</strong> — 배터리 제품은 완충 배터리 또는 DC 전원공급기로 정격 전압을 공급합니다. 극한 전압 시험을 하려면 전원공급기가 필요합니다.</li>
</ul>

<h2>전도 시험 셋업과 경로 손실 보정</h2>
<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="전도 시험 셋업 연결도">
  <defs><marker id="rto-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="14" width="150" height="50" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="95" y="36" font-weight="700">제어 PC</text><text x="95" y="54" font-size="11.5" fill="var(--text-3)">테스트 SW (모드 설정)</text>
    <path d="M95 64 L95 102" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#rto-arw2)"/>
    <text x="130" y="88" font-size="11.5" fill="var(--text-3)">USB/UART</text>

    <rect x="20" y="106" width="150" height="80" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="95" y="136" font-weight="700" fill="var(--dg-accent)">시료 (EUT)</text>
    <text x="95" y="156" font-size="11.5" fill="var(--text-2)">임시 RF 포트</text>
    <text x="95" y="172" font-size="11.5" fill="var(--text-2)">(SMA / U.FL)</text>

    <rect x="20" y="224" width="150" height="46" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="95" y="244" font-weight="700">DC 전원공급기</text><text x="95" y="261" font-size="11.5" fill="var(--text-3)">정격 / 극한 전압</text>
    <path d="M95 224 L95 190" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rto-arw2)"/>

    <path d="M170 146 L240 146" stroke="var(--dg-line)" stroke-width="2"/>
    <text x="205" y="136" font-size="11.5" fill="var(--text-3)">케이블 L1</text>
    <rect x="240" y="124" width="100" height="44" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="290" y="144" font-weight="700">감쇠기</text><text x="290" y="160" font-size="11.5" fill="var(--text-3)">예: 10~20 dB</text>
    <path d="M340 146 L390 146" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="390" y="116" width="120" height="60" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="450" y="142" font-weight="700">분배기 /</text><text x="450" y="160" font-weight="700">RF 스위치</text>

    <path d="M510 136 L550 136 L550 70 L580 70" fill="none" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#rto-arw2)"/>
    <path d="M510 156 L550 156 L550 222 L580 222" fill="none" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#rto-arw2)"/>
    <rect x="584" y="40" width="160" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="664" y="66" font-weight="700">스펙트럼 분석기</text><text x="664" y="84" font-size="11.5" fill="var(--text-3)">대역폭·스퓨리어스·PSD</text>
    <rect x="584" y="192" width="160" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="664" y="218" font-weight="700">파워미터 + 센서</text><text x="664" y="236" font-size="11.5" fill="var(--text-3)">평균 · 피크 출력</text>

    <text x="350" y="214" font-size="12" fill="var(--dg-accent-2)" font-weight="700">경로 손실(Offset) = L1 + 감쇠기 + 분배기 손실</text>
    <text x="350" y="232" font-size="11.5" fill="var(--text-3)">→ 분석기 Ref Level Offset / 파워미터 Offset에 입력</text>
    <text x="350" y="280" font-size="11.5" fill="var(--text-3)">(주파수마다 손실이 다르므로 측정 주파수별 값을 사용)</text>
  </g>
</svg>
<figcaption>그림 3. 전도 시험 기본 셋업. 시료에서 계측기까지의 모든 손실을 보정해야 “안테나 단자에서의 값”이 됩니다.</figcaption>
</figure>

<p>계측기가 읽는 값은 시료 출력이 아니라 <strong>케이블·감쇠기·분배기를 지나 줄어든 값</strong>입니다. 따라서 그 손실만큼 더해 줘야 시료 안테나 단자에서의 값이 됩니다.</p>
<div class="formula">시료 출력(dBm) = 계측기 표시값(dBm) + 경로 손실(dB)</div>
<p>예: 분석기 표시 −2.3 dBm, 경로 손실 21.4 dB(케이블 1.1 + 감쇠기 20.0 + 커넥터 0.3) → 시료 출력 = <strong>19.1 dBm</strong>.</p>

<ol class="steps">
  <li><strong>경로 손실 측정</strong>신호발생기 + 파워미터 또는 네트워크 분석기로 측정 주파수 대역 전체의 손실을 측정합니다. 스퓨리어스처럼 넓은 대역을 보려면 30 MHz ~ 수십 GHz까지 주파수별 손실표(보정 테이블)가 필요합니다.</li>
  <li><strong>계측기에 보정값 입력</strong>단일 주파수는 Ref Level Offset, 넓은 대역은 Transducer/Correction 테이블로 입력합니다.</li>
  <li><strong>기지 신호로 확인</strong>신호발생기로 알려진 레벨(예: 0 dBm)을 넣고 보정 후 표시값이 맞는지 확인합니다(시스템 체크).</li>
  <li><strong>기록</strong>사용한 케이블·감쇠기의 관리번호와 손실값, 보정 파일 이름을 기록지에 남깁니다.</li>
</ol>

<h2>정상 조건과 극한 조건</h2>
<p>실제 제품은 추운 겨울 야외에서도, 배터리가 거의 방전된 상태에서도 쓰입니다. 그래서 일부 항목(특히 <strong>주파수 허용편차, 출력</strong>)은 정상 조건뿐 아니라 <strong>극한 조건(Extreme conditions)</strong>에서도 시험합니다.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>온도(예)</th><th>전압(예)</th><th>비고</th></tr></thead>
<tbody>
<tr><td>정상 조건</td><td>상온 (예: 15~35 ℃)</td><td>정격 전압</td><td>대부분 항목의 기본 조건</td></tr>
<tr><td>극한 조건 — ETSI 계열</td><td>예: −20 ℃ / +55 ℃</td><td>예: 정격 ±10%(상용전원), 배터리 방전 종지 전압</td><td>표준·기기 등급에 따라 다름</td></tr>
<tr><td>극한 조건 — FCC 주파수 안정도</td><td>예: −30 ℃ ~ +50 ℃, 10 ℃ 간격</td><td>예: 정격의 85% ~ 115%</td><td>FCC 2.1055 등, 적용 규정 확인</td></tr>
</tbody></table></div>
<div class="callout note">
  <span class="callout-title">최신 기준 확인</span>
  극한 조건의 온도·전압 범위는 규격, 기기 종류, 제조사 선언(동작 온도 범위)에 따라 달라집니다. 위 값은 <strong>대표 예시</strong>이므로 실제 시험에서는 적용 규격 원문과 사내 SOP를 따르세요.
</div>

<h2>시험 전 체크리스트</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>확인 항목</th><th>기록 예시</th></tr></thead>
<tbody>
<tr><td>시료 정보</td><td>모델명 ABC-100, S/N 전도용 001 · 방사용 002, HW v1.0, SW v2.3.1</td></tr>
<tr><td>테스트 SW · 명령</td><td>RFTool v5.2, “tx 2412 11b 1M pwr=18”</td></tr>
<tr><td>적용 규격 · 시험 방법</td><td>예: FCC Part 15.247 / ANSI C63.10 / KDB 558074</td></tr>
<tr><td>장비 · 교정</td><td>분석기 SA-03(교정 만료일), 파워센서 PS-01, 감쇠기 AT-12</td></tr>
<tr><td>경로 손실</td><td>2.4 GHz 대역 21.4 dB (보정 파일 CL_2G4_0922.csv)</td></tr>
<tr><td>환경 조건</td><td>온도 23.1 ℃, 습도 45 %RH</td></tr>
</tbody></table></div>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">신입이 자주 하는 실수</span>
  <ul>
    <li><strong>경로 손실 미보정 / 이중 보정</strong> — Offset을 안 넣어 20 dB 낮게 기록하거나, 분석기 Offset과 계산에서 두 번 더해 20 dB 높게 기록합니다. 기지 신호 확인 절차로 예방하세요.</li>
    <li><strong>연속 송신이 아닌데 모르고 측정</strong> — 화면이 깜빡이거나 값이 들쭉날쭉하면 듀티 사이클을 먼저 확인합니다.</li>
    <li><strong>테스트 SW 설정값 미기록</strong> — 재시험 때 같은 출력을 재현하지 못해 결과가 달라집니다.</li>
    <li><strong>전도용·방사용 시료 혼동</strong> — 시리얼 번호를 기록지에 반드시 구분해 적습니다.</li>
    <li><strong>감쇠기 없이 연결</strong> — 계측기 입력단 손상. <a href="#/l/intro-lab-safety">시험실 안전</a> 강의를 다시 확인하세요.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '일체형 안테나 제품의 송신 출력을 전도 방식으로 측정하려고 한다. 가장 일반적인 준비 방법은?',
      options: ['방사 시험으로만 가능하므로 전도 시험은 생략한다', '제조사가 준비한 임시 RF 포트(SMA/U.FL) 시료를 사용하고 연결부 손실을 보정한다', '안테나에 분석기 프로브를 가까이 대고 측정한다', '안테나를 제거하고 PCB 패턴에 직접 납땜한다(시험소 임의로)'],
      answer: 1, explain: '전도 시험용 시료는 제조사가 안테나 대신 RF 커넥터를 달아 준비하는 것이 일반적이며, 피그테일 등 연결부 손실도 보정합니다. 시험소가 임의로 시료를 개조하는 것은 피해야 합니다.' },
    { q: 'low / mid / high 채널을 측정하는 주된 이유로 가장 알맞은 것은?',
      options: ['세 채널이 가장 자주 쓰이기 때문', '주파수에 따른 특성 변화를 대표하고, 대역 경계에 가까운 채널의 최악 조건을 확인하기 위해', '규격과 관계없이 시험 시간을 줄이기 위해 임의로 고른 것', 'mid 채널만 한계값이 있기 때문'],
      answer: 1, explain: 'PA·필터·안테나 특성은 주파수에 따라 달라지며, low/high 채널은 대역 경계 발사의 최악 조건입니다.' },
    { q: '분석기 표시값이 −4.0 dBm이고 경로 손실(케이블+감쇠기)이 20.5 dB이다. 분석기에는 Offset을 넣지 않았다. 시료 안테나 단자의 출력은?',
      options: ['−24.5 dBm', '−4.0 dBm', '24.5 dBm', '16.5 dBm'],
      answer: 3, explain: '시료 출력 = 표시값 + 경로 손실 = −4.0 + 20.5 = 16.5 dBm 입니다.' },
    { q: '극한 조건(온도·전압) 시험에 대한 설명으로 옳은 것은?',
      options: ['주파수 허용편차처럼 환경에 민감한 항목은 극한 조건에서도 시험할 수 있다', '모든 항목은 상온에서만 시험한다', '극한 온도 범위는 모든 규격이 −40~+85 ℃로 같다', '전압 변화는 무선 특성에 영향을 주지 않는다'],
      answer: 0, explain: '발진기 주파수, 출력 등은 온도·전압에 따라 변하므로 규격에서 극한 조건 시험을 요구하는 경우가 있습니다. 범위는 규격마다 다릅니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '적합성평가 제도, 무선설비 기술기준 고시' },
    { title: '국가법령정보센터', url: 'https://www.law.go.kr', note: '전파법, 과기정통부 고시 원문 검색' },
    { title: 'FCC KDB (Knowledge Database)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'KDB 558074 (DTS 측정 지침) 등 검색' },
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: 'EN 300 328, EN 301 893 검색·무료 다운로드' }
  ]
});

COURSE.addLesson({
  id: 'rftest-power',
  module: 'rftest',
  order: 2,
  title: '송신 출력 측정',
  minutes: 25,
  level: '중급',
  summary: '평균·피크 전력, 파워미터와 채널 파워 측정, 버스트 신호의 게이팅과 듀티 사이클 보정, 전력밀도(PSD), EIRP 한계 적용까지 출력 측정의 모든 것.',
  objectives: [
    '평균 전력과 피크 전력의 차이, 각 측정 도구(파워미터·스펙트럼 분석기)의 특성을 설명할 수 있다.',
    '버스트 신호에서 게이팅 또는 듀티 사이클 보정 10·log(1/x)를 올바르게 적용할 수 있다.',
    '전력밀도(PSD)와 EIRP를 계산하고 한계값과 비교해 판정할 수 있다.',
    '출력 측정 결과를 측정값·한계·마진·판정 형식으로 기록할 수 있다.'
  ],
  body: `
<p>송신 출력은 무선 시험에서 <strong>가장 기본이면서 가장 자주 문제가 되는 항목</strong>입니다. 출력이 크면 통신 거리가 늘어나지만 다른 무선국에 간섭을 주므로, 각국은 대역마다 최대 출력(또는 EIRP)을 정해 둡니다. 또한 SAR 시험에서도 “이 제품의 최대 출력(튠업 파워)”이 기준이 되므로 출력 측정은 모든 파트에 영향을 줍니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  출력은 <strong>수도꼭지에서 나오는 물의 양</strong>입니다. <em>피크 전력</em>은 “순간적으로 가장 세게 뿜은 양”, <em>평균 전력</em>은 “일정 시간 동안 나온 물을 평균한 양”입니다. 물을 틀었다 잠갔다(버스트) 하면서 나오는 경우, <strong>틀어져 있을 때의 평균</strong>을 볼지 <strong>잠근 시간까지 포함한 평균</strong>을 볼지 정해야 하는데, 이것이 바로 게이팅과 듀티 사이클 보정의 문제입니다.
</div>

<h2>평균 전력과 피크 전력</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>의미</th><th>주로 쓰는 곳(예)</th></tr></thead>
<tbody>
<tr><td>평균 전력 (Average / RMS)</td><td>송신 중 신호 전력을 시간 평균한 값</td><td>FCC DTS 평균 출력 옵션, ETSI EN 300 328 (RMS 기반 EIRP), 국내 기술기준 다수</td></tr>
<tr><td>피크 전력 (Peak)</td><td>포락선(Envelope)의 최대 순간 전력</td><td>FCC 15.247 최대 피크 전도 출력 옵션, 레이더·펄스 신호</td></tr>
<tr><td>PAPR (피크 대 평균비)</td><td>피크 − 평균 (dB)</td><td>OFDM은 보통 8~12 dB 수준으로 큼 → 피크/평균 선택에 따라 결과 차이 큼</td></tr>
</tbody></table></div>
<p>어느 쪽을 측정할지는 <strong>적용 규격이 정합니다</strong>. 예를 들어 FCC KDB 558074는 DTS(디지털 변조 송신기)의 출력을 “최대 피크 전도 출력” 또는 “최대 (평균) 전도 출력” 방법으로 측정할 수 있게 안내합니다. 어떤 방법을 썼는지 기록지와 성적서에 반드시 명시해야 합니다.</p>

<h2>측정 도구: 파워미터 vs 스펙트럼 분석기</h2>
<div class="compare">
  <div class="good"><h4>파워미터 + 센서</h4>
    <ul>
      <li>전력 측정 정확도가 높음(불확도 작음)</li>
      <li>평균 센서: 대역폭 제한 없이 전체 전력 측정</li>
      <li>피크(광대역) 센서: 포락선·버스트 시간 분석, 게이팅 가능</li>
      <li>주의: 센서의 <strong>비디오 대역폭</strong>이 신호 대역폭보다 넓어야 피크를 정확히 측정</li>
    </ul></div>
  <div class="good"><h4>스펙트럼 분석기 채널 파워</h4>
    <ul>
      <li>설정한 적분 대역(예: 99% OBW) 안의 전력만 적분</li>
      <li>RMS 검파 + 트레이스 평균으로 평균 전력 측정</li>
      <li>PSD, 대역 경계 등 주파수 정보도 함께 확인</li>
      <li>주의: RBW·검파기·스윕 포인트 설정에 따라 값이 달라짐</li>
    </ul></div>
</div>

<h3>분석기 채널 파워(적분) 설정 예</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>값(예)</th><th>이유</th></tr></thead>
<tbody>
<tr><td>Span</td><td>OBW의 1.5~2배 이상</td><td>신호 전체와 양쪽 여유를 화면에 넣기</td></tr>
<tr><td>RBW</td><td>OBW의 1~5% (예: 20 MHz 신호 → 300 kHz~1 MHz)</td><td>적분 정확도와 속도의 균형</td></tr>
<tr><td>VBW</td><td>≥ 3 × RBW</td><td>비디오 필터가 값을 낮추지 않게</td></tr>
<tr><td>Detector</td><td>RMS (평균 전력) / Peak (피크 전력 근사)</td><td>측정하려는 전력 종류와 일치</td></tr>
<tr><td>Trace</td><td>평균 100회 (Power averaging) / Max hold</td><td>평균 전력은 전력 평균, 피크는 최대값 유지</td></tr>
<tr><td>Sweep points</td><td>≥ 2 × Span / RBW</td><td>포인트 사이 빈틈 없이 적분</td></tr>
<tr><td>Integration BW</td><td>99% OBW 또는 규격이 정한 대역</td><td>채널 안의 전력만 합산</td></tr>
</tbody></table></div>

<h2>버스트 신호: 게이팅과 듀티 사이클 보정</h2>
<p>무선랜·블루투스 등은 패킷 단위로 <strong>켜졌다 꺼졌다(버스트)</strong> 합니다. 규격이 요구하는 것은 보통 “<strong>송신하고 있는 동안의 평균 전력</strong>”이므로, 꺼진 구간이 섞이면 값이 실제보다 낮게 나옵니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="버스트 신호와 듀티 사이클">
  <defs><marker id="rtp-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <line x1="60" y1="170" x2="730" y2="170" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rtp-arw)"/>
    <line x1="60" y1="170" x2="60" y2="30" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rtp-arw)"/>
    <text x="722" y="190" font-size="12" fill="var(--text-3)">시간</text>
    <text x="40" y="36" font-size="12" fill="var(--text-3)">전력</text>
    <rect x="90" y="60" width="144" height="110" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <rect x="330" y="60" width="144" height="110" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <rect x="570" y="60" width="144" height="110" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="1.8"/>
    <line x1="60" y1="60" x2="720" y2="60" stroke="var(--dg-accent)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="282" y="54" font-size="12" fill="var(--dg-accent)" font-weight="700">버스트 중 평균 (게이팅 측정값)</text>
    <line x1="60" y1="104" x2="720" y2="104" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="7 4"/>
    <rect x="296" y="84" width="212" height="18" rx="3" fill="var(--dg-fill)"/>
    <text x="402" y="98" font-size="12" fill="var(--dg-accent-2)" font-weight="700">시간 평균 (오프 포함, 더 낮음)</text>
    <path d="M90 200 L234 200" stroke="var(--dg-line)" stroke-width="1.2" marker-start="url(#rtp-arw)" marker-end="url(#rtp-arw)"/>
    <text x="162" y="218">T<tspan font-size="10" dy="3">on</tspan></text>
    <path d="M330 200 L570 200" stroke="var(--dg-line)" stroke-width="1.2" marker-start="url(#rtp-arw)" marker-end="url(#rtp-arw)"/>
    <text x="450" y="218">주기 T (예: T<tspan font-size="10" dy="3">on</tspan><tspan dy="-3"> = 0.6 T → 듀티 x = 0.6)</tspan></text>
  </g>
</svg>
<figcaption>그림 1. 버스트 신호. 꺼진 구간까지 평균하면 값이 듀티 사이클만큼 낮아지므로, 게이팅하거나 10·log(1/x)를 더해 보정합니다.</figcaption>
</figure>

<p>방법은 두 가지입니다.</p>
<ol>
  <li><strong>게이팅(Gating) / 버스트 트리거</strong> — 파워미터나 분석기의 게이트(시간 창)를 버스트 ON 구간에만 맞춰, 켜져 있는 동안만 평균합니다.</li>
  <li><strong>듀티 사이클 보정</strong> — 꺼진 구간까지 포함해 평균을 낸 뒤, 듀티 사이클 x(= T<sub>on</sub> / T)를 이용해 보정값을 더합니다.</li>
</ol>
<div class="formula">듀티 사이클 보정값(dB) = 10·log<sub>10</sub>(1 / x) &nbsp;&nbsp; (x = T<sub>on</sub> / T)</div>
<p>예: x = 0.6 → 10·log(1/0.6) = <strong>2.22 dB</strong>. 시간 평균 측정값이 15.8 dBm이면 송신 중 평균 전력은 15.8 + 2.22 = <strong>18.0 dBm</strong>입니다.</p>
<div class="kbox">
  <div><div class="k">x = 1.0 (연속)</div><div class="v">0 dB</div></div>
  <div><div class="k">x = 0.8</div><div class="v">0.97 dB</div></div>
  <div><div class="k">x = 0.5</div><div class="v">3.01 dB</div></div>
  <div><div class="k">x = 0.25</div><div class="v">6.02 dB</div></div>
</div>
<div class="callout tip">
  <span class="callout-title">실무 팁 — 듀티 사이클 측정</span>
  분석기를 <strong>Zero span</strong>(중심 주파수 = 채널 중심, RBW는 신호 대역폭 이상 가능한 넓게, Detector Peak)으로 두면 시간축 파형이 보입니다. 마커로 T<sub>on</sub>과 주기 T를 읽어 x를 계산하고, 그 <strong>화면을 기록으로 저장</strong>하세요. KDB 558074는 듀티 사이클이 98% 이상이면 연속 송신으로 보는 것을 전제로 방법을 나눕니다(최신판 확인).
</div>

<h2>전력밀도 (PSD, Power Spectral Density)</h2>
<p>총 출력이 같아도 신호가 좁은 대역에 몰리면 그 주파수에서의 간섭이 커집니다. 그래서 일부 규격은 <strong>단위 대역폭당 전력</strong>에도 한계를 둡니다.</p>
<ul>
  <li><strong>예: ETSI EN 300 328</strong> — 비호핑 광대역 변조의 최대 PSD 10 dBm/MHz (EIRP 기준)</li>
  <li><strong>예: FCC 15.247(e)</strong> — DTS의 PSD 8 dBm / 3 kHz (전도 기준)</li>
</ul>
<p>측정은 분석기에서 RBW를 규격 기준 대역폭(예: 1 MHz 또는 3 kHz)에 맞추고 Max hold로 가장 높은 지점을 찾습니다. 다른 RBW로 측정했다면 다음처럼 환산합니다(잡음성 신호 가정, 적용 규격이 허용하는 경우).</p>
<div class="formula">PSD(기준 BW) = 측정값(RBW) + 10·log<sub>10</sub>(기준 BW / RBW)</div>
<p>예: RBW 100 kHz에서 −2.0 dBm → 1 MHz 환산 = −2.0 + 10·log(10) = <strong>8.0 dBm/MHz</strong>.</p>

<h2>EIRP 한계 적용</h2>
<p>전도 측정값은 안테나 단자에서의 값입니다. 규격이 <strong>EIRP(등가 등방 복사 전력)</strong>로 한계를 정했다면 안테나 이득을 더해야 합니다.</p>
<div class="formula">EIRP(dBm) = 전도 출력(dBm) + 안테나 이득(dBi) − 급전선 손실(dB)</div>
<div class="table-wrap"><table class="data">
<thead><tr><th>규격(예)</th><th>2.4 GHz 광대역 데이터 전송 한계(예)</th><th>기준</th><th>안테나 이득 처리</th></tr></thead>
<tbody>
<tr><td>FCC 15.247(b)(3) (DTS)</td><td>1 W (30 dBm)</td><td>전도 출력</td><td>지향성 안테나 이득 6 dBi 초과 시 초과분만큼 출력 감소(고정 점대점 예외 등 조건 있음)</td></tr>
<tr><td>ETSI EN 300 328</td><td>20 dBm (100 mW)</td><td>EIRP (RMS)</td><td>전도값 + 안테나 이득으로 EIRP 산출</td></tr>
<tr><td>국내 기술기준</td><td>기기 종류·대역별로 다름 (예: 출력 mW 또는 mW/MHz 한계 + 안테나 이득 조건)</td><td>고시에 따름</td><td>최신 「신고하지 아니하고 개설할 수 있는 무선국용 무선기기」 기술기준 확인</td></tr>
</tbody></table></div>
<div class="callout note">
  <span class="callout-title">최신 고시 확인</span>
  위 값은 이해를 돕기 위한 <strong>대표 예시</strong>입니다. 한계값, 안테나 이득 조건, 측정 기준(피크/평균, 전도/EIRP)은 개정되므로 반드시 최신 규격 원문을 확인하세요.
</div>

<h2>측정 절차 (파워미터, 전도)</h2>
<ol class="steps">
  <li><strong>준비</strong>파워센서 영점 조정(Zero)·교정(Cal), 측정 주파수 입력(센서 주파수 보정), 경로 손실 Offset 입력.</li>
  <li><strong>시료 설정</strong>테스트 SW로 채널·모드·최대 출력 설정. 설정 명령을 기록합니다.</li>
  <li><strong>듀티 사이클 확인</strong>Zero span 또는 피크 센서로 연속 송신 여부 확인. 버스트면 게이트 설정 또는 x 측정.</li>
  <li><strong>측정</strong>값이 안정되면 평균(및 필요 시 피크) 전력을 읽습니다. 채널 low/mid/high, 모드별로 반복합니다.</li>
  <li><strong>계산</strong>듀티 보정(해당 시), 안테나 이득을 더한 EIRP, 한계 대비 마진 계산.</li>
  <li><strong>기록</strong>측정값, 보정값, 장비, 설정, 화면 캡처를 기록지에 남깁니다.</li>
</ol>

<h2>기록 예시</h2>
<p>예: 2.4 GHz 무선랜(802.11b 1 Mbps), 안테나 이득 2.5 dBi, 게이팅 평균 전력, EN 300 328 EIRP 20 dBm 한계로 판정하는 경우.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>채널</th><th class="num">주파수(MHz)</th><th class="num">전도 평균(dBm)</th><th class="num">안테나 이득(dBi)</th><th class="num">EIRP(dBm)</th><th class="num">한계(dBm)</th><th class="num">마진(dB)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>Low</td><td class="num">2412</td><td class="num">16.8</td><td class="num">2.5</td><td class="num">19.3</td><td class="num">20.0</td><td class="num">0.7</td><td>적합</td></tr>
<tr><td>Mid</td><td class="num">2437</td><td class="num">16.2</td><td class="num">2.5</td><td class="num">18.7</td><td class="num">20.0</td><td class="num">1.3</td><td>적합</td></tr>
<tr><td>High</td><td class="num">2462</td><td class="num">15.9</td><td class="num">2.5</td><td class="num">18.4</td><td class="num">20.0</td><td class="num">1.6</td><td>적합</td></tr>
</tbody></table></div>
<p>마진 = 한계 − 측정값(출력처럼 “이하”여야 하는 항목). 마진이 작을 때(예: 1 dB 미만)는 측정 불확도를 고려한 판정 규칙(사내 SOP, 고객과 합의한 결정 규칙)을 확인해야 합니다.</p>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">자주 틀리는 부분</span>
  <ul>
    <li><strong>듀티 보정을 게이팅 측정값에 또 더함</strong> — 게이팅으로 ON 구간만 측정했다면 이미 송신 중 평균이므로 추가 보정하지 않습니다.</li>
    <li><strong>피크 센서 대역폭 부족</strong> — 신호 대역폭(예: 40/80 MHz)보다 센서 비디오 대역폭이 좁으면 피크가 낮게 측정됩니다.</li>
    <li><strong>분석기 Sample 검파로 평균 전력 측정</strong> — 평균 전력은 RMS 검파 + 전력 평균을 사용합니다. Log(비디오) 평균은 잡음성 신호에서 값을 낮춥니다.</li>
    <li><strong>EIRP 한계에 전도값을 그대로 비교</strong> — 안테나 이득을 빠뜨리면 부적합을 적합으로 판정할 수 있습니다.</li>
    <li><strong>제조사 최대 출력 설정 미확인</strong> — 테스트 SW 기본값이 실제 제품 출력보다 낮으면 성적서가 실제 제품을 대표하지 못합니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '버스트 신호를 오프 구간까지 포함해 평균한 값이 14.0 dBm이고, 듀티 사이클 x = 0.5이다. 송신 중 평균 전력은?',
      options: ['11.0 dBm', '14.0 dBm', '17.0 dBm', '20.0 dBm'],
      answer: 2, explain: '보정값 10·log(1/0.5) = 3.01 dB 이므로 14.0 + 3.0 ≈ 17.0 dBm 입니다.' },
    { q: '전도 출력 17.5 dBm, 안테나 이득 3.0 dBi인 2.4 GHz 광대역 기기를 EIRP 20 dBm 한계로 판정할 때 옳은 것은?',
      options: ['EIRP 20.5 dBm으로 한계 초과(부적합)', '전도 출력 17.5 dBm만 보면 되므로 적합', 'EIRP 14.5 dBm으로 적합', 'EIRP는 안테나 이득과 무관하다'],
      answer: 0, explain: 'EIRP = 17.5 + 3.0 = 20.5 dBm 으로 한계 20 dBm을 0.5 dB 초과합니다. EIRP 한계에는 안테나 이득을 반드시 더해야 합니다.' },
    { q: '스펙트럼 분석기로 평균 채널 파워를 측정할 때 가장 적절한 검파기·트레이스 조합은?',
      options: ['Sample 검파 + Max hold', 'RMS 검파 + 전력 평균(Power averaging)', 'Negative peak 검파 + Clear/Write', 'Quasi-peak 검파 + Min hold'],
      answer: 1, explain: '평균 전력은 RMS 검파로 각 포인트의 전력을 구하고, 트레이스도 전력(RMS) 평균을 해야 정확합니다.' },
    { q: 'RBW 100 kHz로 측정한 최대 스펙트럼 레벨이 0.5 dBm이다. 1 MHz 기준 PSD로 환산하면(잡음성 신호 가정)?',
      options: ['0.5 dBm/MHz', '−9.5 dBm/MHz', '20.5 dBm/MHz', '10.5 dBm/MHz'],
      answer: 3, explain: '10·log(1 MHz / 100 kHz) = 10 dB 를 더해 10.5 dBm/MHz 입니다.' }
  ],
  refs: [
    { title: 'FCC KDB — 558074 (DTS Meas Guidance)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'DTS 출력·PSD·대역폭 측정 방법. KDB 검색창에서 558074 검색' },
    { title: 'ETSI EN 300 328', url: 'https://www.etsi.org/standards', note: '2.4 GHz 광대역 데이터 전송 장비 (RED 조화규격)' },
    { title: 'FCC 47 CFR Part 15', url: 'https://www.fcc.gov', note: '15.247 — 호핑·디지털 변조 송신기 기술 요건' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '무선기기 기술기준 고시, 시험방법' },
    { title: 'Keysight — Power meters & sensors', url: 'https://www.keysight.com', note: '평균·피크 파워센서 응용 노트' }
  ]
});

COURSE.addLesson({
  id: 'rftest-obw',
  module: 'rftest',
  order: 3,
  title: '점유 주파수 대역폭',
  minutes: 18,
  level: '중급',
  summary: '99% 점유 대역폭과 −6 dB / −26 dB 대역폭의 차이, RBW·VBW 설정 원리, 측정 절차와 흔한 실수를 정리합니다.',
  objectives: [
    '99% OBW와 x dB 대역폭(−6 dB, −20 dB, −26 dB)의 정의 차이를 설명할 수 있다.',
    'RBW를 OBW의 1~5%로 두는 이유와 VBW·검파기 설정을 안다.',
    '스펙트럼 분석기로 점유 대역폭을 측정하고 결과를 기록할 수 있다.'
  ],
  body: `
<p>점유 주파수 대역폭(OBW, Occupied Bandwidth)은 신호가 주파수 축에서 <strong>얼마나 넓은 폭을 차지하는지</strong>를 나타냅니다. 규격은 “허용된 채널(또는 대역) 안에 신호가 들어가야 한다”거나, “최소한 이만큼은 넓어야 한다(확산 스펙트럼 요건)”는 형태로 대역폭을 규정합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  신호의 스펙트럼은 <strong>모래더미</strong>와 비슷합니다. 가운데는 높고 가장자리로 갈수록 낮아지며 끝이 어디인지 딱 잘라 말하기 어렵습니다. 그래서 폭을 재는 규칙이 필요합니다. <em>99% OBW</em>는 “모래 전체의 99%가 들어가는 폭”, <em>−26 dB 대역폭</em>은 “꼭대기보다 26 dB 낮은 높이에서 잰 폭”입니다. 같은 모래더미라도 규칙이 다르면 폭이 다르게 나옵니다.
</div>

<h2>대역폭을 재는 두 가지 방법</h2>
<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-label="99% 점유대역폭과 x dB 대역폭 비교">
  <defs><marker id="rtb-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="262" y="40" width="256" height="200" fill="var(--dg-accent)" opacity="0.12"/>
    <line x1="262" y1="40" x2="262" y2="240" stroke="var(--dg-accent)" stroke-width="1.2" stroke-dasharray="4 3"/>
    <line x1="518" y1="40" x2="518" y2="240" stroke="var(--dg-accent)" stroke-width="1.2" stroke-dasharray="4 3"/>
    <text x="390" y="56" font-weight="700" fill="var(--dg-accent)">전체 전력의 99%</text>
    <text x="250" y="232" font-size="11" fill="var(--text-3)">0.5%</text>
    <text x="530" y="232" font-size="11" fill="var(--text-3)">0.5%</text>

    <line x1="60" y1="240" x2="720" y2="240" stroke="var(--dg-line)" stroke-width="1.5"/>
    <line x1="60" y1="30" x2="60" y2="240" stroke="var(--dg-line)" stroke-width="1.5"/>
    <path d="M60 225 L180 222 C230 218 260 120 290 75 L490 75 C520 120 550 218 600 222 L720 225" fill="none" stroke="var(--dg-line)" stroke-width="2.2"/>

    <line x1="60" y1="75" x2="720" y2="75" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 3"/>
    <text x="716" y="70" text-anchor="end" font-size="11.5" fill="var(--text-3)">최대(기준)</text>
    <line x1="60" y1="99" x2="720" y2="99" stroke="var(--dg-accent-2)" stroke-width="1" stroke-dasharray="5 3"/>
    <text x="716" y="94" text-anchor="end" font-size="11.5" fill="var(--dg-accent-2)">−6 dB</text>
    <line x1="60" y1="179" x2="720" y2="179" stroke="var(--dg-ok)" stroke-width="1" stroke-dasharray="5 3"/>
    <text x="716" y="174" text-anchor="end" font-size="11.5" fill="var(--dg-ok)">−26 dB</text>

    <circle cx="276" cy="99" r="4" fill="var(--dg-accent-2)"/><circle cx="504" cy="99" r="4" fill="var(--dg-accent-2)"/>
    <circle cx="233" cy="179" r="4" fill="var(--dg-ok)"/><circle cx="547" cy="179" r="4" fill="var(--dg-ok)"/>
    <path d="M280 118 L500 118" stroke="var(--dg-accent-2)" stroke-width="1.4" marker-start="url(#rtb-arw)" marker-end="url(#rtb-arw)"/>
    <text x="390" y="134" font-weight="700" fill="var(--dg-accent-2)">−6 dB 대역폭</text>

    <path d="M264 262 L516 262" stroke="var(--dg-accent)" stroke-width="1.4" marker-start="url(#rtb-arw)" marker-end="url(#rtb-arw)"/>
    <text x="390" y="258" font-weight="700" fill="var(--dg-accent)">99% OBW</text>
    <path d="M235 282 L545 282" stroke="var(--dg-ok)" stroke-width="1.4" marker-start="url(#rtb-arw)" marker-end="url(#rtb-arw)"/>
    <text x="390" y="297" font-weight="700" fill="var(--dg-ok)">−26 dB 대역폭</text>
    <line x1="233" y1="179" x2="233" y2="286" stroke="var(--dg-ok)" stroke-width="0.8" stroke-dasharray="2 3"/>
    <line x1="547" y1="179" x2="547" y2="286" stroke="var(--dg-ok)" stroke-width="0.8" stroke-dasharray="2 3"/>
    <text x="40" y="36" font-size="11.5" fill="var(--text-3)">dBm</text>
  </g>
</svg>
<figcaption>그림 1. 같은 신호라도 정의에 따라 대역폭이 다릅니다. 99% OBW는 전력 적분, x dB 대역폭은 최대값 대비 레벨로 정의합니다(모양은 개념도).</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>정의</th><th>계산 방식</th><th>쓰이는 곳(예)</th></tr></thead>
<tbody>
<tr><td>99% 점유 대역폭 (99% OBW)</td><td>전체 전력을 적분해 양쪽 끝에서 각각 0.5%씩 제외한 폭</td><td>ETSI EN 300 328·EN 301 893의 OBW, 국내 기술기준의 점유주파수대폭, FCC 2.1049(보고용)</td></tr>
<tr><td>−6 dB 대역폭</td><td>최대 레벨보다 6 dB 낮은 두 지점 사이 폭</td><td>FCC 15.247(a)(2) DTS 최소 대역폭 500 kHz 요건(예)</td></tr>
<tr><td>−20 dB 대역폭</td><td>최대 레벨보다 20 dB 낮은 두 지점 사이 폭</td><td>FCC FHSS 호핑 채널 간격 판단(예)</td></tr>
<tr><td>−26 dB 대역폭 (EBW)</td><td>최대 레벨보다 26 dB 낮은 두 지점 사이 폭</td><td>FCC U-NII(KDB 789033)의 Emission bandwidth(예)</td></tr>
</tbody></table></div>
<p>핵심은 <strong>“규격이 어떤 정의를 요구하는가”</strong>입니다. 99% OBW를 요구하는데 −26 dB 대역폭을 기록하면, 값이 그럴듯해 보여도 잘못된 시험입니다. x dB 대역폭은 <strong>최대 지점(피크)이 기준</strong>이므로 RBW에 따라 피크 레벨이 달라지고 결과도 달라진다는 점을 기억하세요.</p>

<h2>RBW · VBW 설정 원리</h2>
<p>분해능 대역폭(RBW, Resolution Bandwidth)은 분석기가 스펙트럼을 “얼마나 좁은 창으로 들여다보는가”입니다.</p>
<ul>
  <li><strong>RBW가 너무 넓으면</strong> — 분석기 필터 자체의 폭이 신호에 더해져 스펙트럼 가장자리가 뭉개지고 대역폭이 <strong>넓게</strong> 측정됩니다.</li>
  <li><strong>RBW가 너무 좁으면</strong> — 측정 결과는 정확해지지만 스윕이 느려지고, 잡음·변동이 커져 트레이스가 거칠어집니다.</li>
</ul>
<p>그래서 대부분의 규격은 <strong>RBW를 OBW의 1~5%</strong> 정도로 두도록 합니다. 예를 들어 20 MHz 무선랜 신호(OBW 약 17~19 MHz)라면 RBW 200~910 kHz 범위 → 실제로는 가까운 표준값인 <strong>300 kHz 또는 510 kHz</strong> 등을 사용합니다.</p>
<div class="formula">RBW ≈ (0.01 ~ 0.05) × OBW, &nbsp; VBW ≥ 3 × RBW</div>

<h3>설정값 표 (예)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>99% OBW (예)</th><th>−6 dB 대역폭 (FCC DTS, 예)</th><th>−26 dB 대역폭 (U-NII, 예)</th></tr></thead>
<tbody>
<tr><td>Span</td><td>OBW의 1.5~5배</td><td>DTS BW의 2~5배</td><td>EBW의 1.5~5배</td></tr>
<tr><td>RBW</td><td>OBW의 1~5%</td><td>100 kHz</td><td>EBW의 약 1%</td></tr>
<tr><td>VBW</td><td>≥ 3 × RBW</td><td>≥ 3 × RBW</td><td>≥ 3 × RBW</td></tr>
<tr><td>Detector</td><td>Peak (또는 규격 지정)</td><td>Peak</td><td>Peak</td></tr>
<tr><td>Trace</td><td>Max hold</td><td>Max hold</td><td>Max hold</td></tr>
<tr><td>Sweep</td><td>Auto (트레이스 안정될 때까지)</td><td>Auto</td><td>Auto</td></tr>
<tr><td>측정 기능</td><td>OBW 기능, 99%</td><td>n dB down 마커 (6 dB)</td><td>n dB down 마커 (26 dB)</td></tr>
</tbody></table></div>
<div class="callout note">
  <span class="callout-title">표 값은 예시</span>
  구체적인 RBW·Span 규칙은 KDB 558074, KDB 789033, ANSI C63.10, ETSI 규격에 조금씩 다르게 적혀 있습니다. 특히 ETSI EN 300 328의 OBW 측정 조건(RBW, 스윕 포인트, 측정 시간)은 해당 판(Version)의 절(Clause)을 그대로 따르세요.
</div>

<h2>측정 절차</h2>
<ol class="steps">
  <li><strong>시료 설정</strong>대역폭이 가장 넓게 나올 모드(가장 넓은 채널 폭, 보통 낮은 데이터율)와 low/mid/high 채널을 설정합니다.</li>
  <li><strong>분석기 설정</strong>중심 주파수 = 채널 중심, Span·RBW·VBW·검파기·트레이스를 위 표처럼 설정합니다. 입력 레벨이 과입력(Overload)되지 않도록 ATT·Ref level을 조정합니다.</li>
  <li><strong>트레이스 안정화</strong>Max hold 트레이스가 더 이상 변하지 않을 때까지(예: 수십 회 스윕) 기다립니다.</li>
  <li><strong>측정 기능 실행</strong>99% OBW 기능 또는 n dB down 마커로 대역폭을 읽습니다. 신호가 화면(Span) 안에 충분히 들어왔는지 확인합니다.</li>
  <li><strong>결과 확인</strong>대역폭 양 끝 주파수(f<sub>L</sub>, f<sub>H</sub>)가 허용 대역 안에 있는지 확인합니다(예: EN 300 328은 OBW가 2400~2483.5 MHz 안에 있어야 함).</li>
  <li><strong>기록</strong>대역폭 값, f<sub>L</sub>/f<sub>H</sub>, 설정값, 화면 캡처를 저장합니다.</li>
</ol>

<h2>기록 예시</h2>
<p>예: 2.4 GHz 무선랜 802.11n HT20, FCC DTS 최소 6 dB 대역폭 500 kHz 요건과 99% OBW(보고) 동시 기록.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>채널</th><th class="num">주파수(MHz)</th><th class="num">99% OBW(MHz)</th><th class="num">6 dB BW(MHz)</th><th class="num">한계(6 dB BW)</th><th class="num">마진(MHz)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>Low</td><td class="num">2412</td><td class="num">17.72</td><td class="num">15.08</td><td class="num">≥ 0.5</td><td class="num">14.58</td><td>적합</td></tr>
<tr><td>Mid</td><td class="num">2437</td><td class="num">17.70</td><td class="num">15.10</td><td class="num">≥ 0.5</td><td class="num">14.60</td><td>적합</td></tr>
<tr><td>High</td><td class="num">2462</td><td class="num">17.74</td><td class="num">15.06</td><td class="num">≥ 0.5</td><td class="num">14.56</td><td>적합</td></tr>
</tbody></table></div>
<p>대역폭은 한계 방향이 “이상(최소 요건)”인 경우와 “이하(최대 허용)”인 경우가 있습니다. <strong>마진의 부호 방향</strong>을 항목마다 확인하세요.</p>

<h2>흔한 실수</h2>
<div class="compare">
  <div class="bad"><h4>❌ 나쁜 예</h4>
    <ul>
      <li>RBW를 3 MHz로 두고 20 MHz 신호의 OBW 측정 → 대역폭이 넓게 나옴</li>
      <li>Span을 신호 폭과 거의 같게 설정 → 신호 가장자리 전력이 잘려 99% 계산 오류</li>
      <li>Clear/Write 한 번 스윕 결과로 판정</li>
      <li>99% OBW 요구 규격에 −26 dB 대역폭 기록</li>
    </ul></div>
  <div class="good"><h4>✅ 좋은 예</h4>
    <ul>
      <li>RBW = OBW의 1~5%, VBW ≥ 3 × RBW</li>
      <li>Span은 OBW의 1.5배 이상, 신호 전체가 잡음 바닥까지 보이게</li>
      <li>Max hold로 트레이스가 안정된 뒤 판정</li>
      <li>규격의 정의(99%, −6/−20/−26 dB)를 확인하고 기록지에 명시</li>
    </ul></div>
</div>
<div class="callout tip">
  <span class="callout-title">현장 팁</span>
  99% OBW 결과가 이상하게 넓다면 <strong>잡음 바닥(Noise floor)</strong>을 확인하세요. 신호 레벨이 낮아 잡음 바닥과의 차이가 작으면, 잡음 전력까지 99% 적분에 들어가 대역폭이 넓게 나옵니다. Ref level과 ATT를 조정해 신호가 화면 상단 가까이 오도록 하면 해결되는 경우가 많습니다.
</div>
`,
  quiz: [
    { q: '99% 점유 대역폭(OBW)의 정의로 옳은 것은?',
      options: ['최대 레벨보다 99 dB 낮은 두 지점 사이의 폭', '전체 전력 중 양쪽 끝 0.5%씩을 제외한 99%가 들어가는 폭', '최대 레벨의 99%가 되는 두 지점 사이 폭', '채널 대역폭의 99%'],
      answer: 1, explain: '99% OBW는 전력 적분으로 정의하며, 아래·위로 각각 0.5%의 전력을 제외한 구간의 폭입니다.' },
    { q: '20 MHz 폭 신호의 99% OBW를 측정할 때 가장 적절한 RBW는?',
      options: ['10 Hz', '3 MHz', '8 MHz', '300 kHz'],
      answer: 3, explain: 'RBW는 OBW의 1~5% (약 200 kHz~1 MHz)가 적당하므로 300 kHz가 알맞습니다. 너무 넓으면 대역폭이 넓게 측정됩니다.' },
    { q: 'RBW를 지나치게 넓게 설정했을 때 대역폭 측정 결과의 경향은?',
      options: ['대역폭이 실제보다 넓게 측정된다', '대역폭이 실제보다 좁게 측정된다', '영향이 없다', '측정이 불가능하다'],
      answer: 0, explain: '분석기 RBW 필터의 폭이 신호 스펙트럼에 더해지는(컨볼루션) 효과로 가장자리가 퍼져 대역폭이 넓게 나옵니다.' },
    { q: '99% OBW 결과가 비정상적으로 넓게 나왔다. 먼저 의심할 원인으로 가장 알맞은 것은?',
      options: ['시료의 출력이 너무 높다', '신호 대비 잡음 바닥이 너무 높아 잡음 전력이 적분에 포함됐다', 'VBW가 RBW의 3배 이상이다', 'Max hold를 사용했다'],
      answer: 1, explain: '신호와 잡음 바닥의 차이가 작으면 잡음 전력이 99% 적분에 포함되어 대역폭이 넓어집니다. Ref level·ATT를 조정해 동적 범위를 확보합니다.' }
  ],
  refs: [
    { title: 'FCC KDB — 558074 / 789033', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'DTS 6 dB 대역폭, U-NII 26 dB·99% 대역폭 측정 지침' },
    { title: 'ETSI EN 300 328 / EN 301 893', url: 'https://www.etsi.org/standards', note: '점유 대역폭(OBW) 측정 조건' },
    { title: 'Rohde & Schwarz — Spectrum analyzer fundamentals', url: 'https://www.rohde-schwarz.com', note: 'RBW, 검파기, OBW 측정 기능 설명 자료' }
  ]
});

COURSE.addLesson({
  id: 'rftest-freq',
  module: 'rftest',
  order: 4,
  title: '주파수 허용편차와 주파수 안정도',
  minutes: 18,
  level: '중급',
  summary: 'ppm 계산, 주파수 오차 측정 방법(CW 모드, 카운터·분석기 마커), 온도·전압 변화에 따른 주파수 안정도 시험과 기록 방법을 다룹니다.',
  objectives: [
    'ppm 단위를 이해하고 허용편차(Hz)로 환산할 수 있다.',
    '주파수 카운터와 스펙트럼 분석기 마커로 주파수 오차를 측정하는 방법을 안다.',
    '항온항습 챔버를 이용한 온도·전압 변화 시험 절차를 설명할 수 있다.',
    '주파수 안정도 결과를 측정값·한계·마진·판정 형식으로 기록할 수 있다.'
  ],
  body: `
<p>무선기기는 내부의 <strong>기준 발진기(수정 발진자, Crystal/TCXO)</strong>를 바탕으로 송신 주파수를 만듭니다. 수정 발진자는 매우 정확하지만 온도·전원 전압·노화(Aging)에 따라 조금씩 주파수가 변합니다. 주파수 허용편차 시험은 “송신 주파수가 공칭 주파수에서 얼마나 벗어나는가”를, 주파수 안정도 시험은 “환경이 바뀌어도 그 오차가 허용 범위 안에 있는가”를 확인합니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  주파수는 <strong>차선 중앙</strong>, 허용편차는 <strong>차선 안에서 좌우로 흔들려도 되는 폭</strong>입니다. 추운 날(저온), 더운 날(고온), 배터리가 약할 때(저전압)에도 차가 차선 안에 머무는지 보는 것이 주파수 안정도 시험입니다.
</div>

<h2>ppm으로 표현하는 이유</h2>
<p>주파수 오차는 보통 <strong>ppm(parts per million, 백만분의 1)</strong>으로 표현합니다. 같은 발진기라도 주파수가 높을수록 Hz 단위 오차가 커지므로, 비율로 나타내면 주파수와 관계없이 비교할 수 있습니다.</p>
<div class="formula">오차(ppm) = (측정 주파수 − 공칭 주파수) / 공칭 주파수 × 10<sup>6</sup></div>
<div class="formula">허용편차(Hz) = 공칭 주파수(Hz) × 허용 ppm × 10<sup>−6</sup></div>
<div class="kbox">
  <div><div class="k">2.4 GHz, ±20 ppm</div><div class="v">±48 kHz</div></div>
  <div><div class="k">5.8 GHz, ±20 ppm</div><div class="v">±116 kHz</div></div>
  <div><div class="k">433.92 MHz, ±10 ppm</div><div class="v">±4.34 kHz</div></div>
  <div><div class="k">900 MHz, ±2.5 ppm</div><div class="v">±2.25 kHz</div></div>
</div>
<p>예: 공칭 2 412.000 000 MHz, 측정 2 412.021 700 MHz → 오차 21.7 kHz → 21 700 / 2 412 000 000 × 10<sup>6</sup> = <strong>+9.0 ppm</strong>.</p>
<div class="callout note">
  <span class="callout-title">한계값은 규격마다 다름</span>
  허용편차는 국내 기술기준(기기 종류별 허용편차 표), 이동통신 규격(3GPP: 예 단말 ±0.1 ppm 수준) 등에서 다르게 정합니다. FCC Part 15 비면허 기기처럼 “ppm 한계 대신 <strong>동작 대역 안에 머물 것</strong>”을 요구하는 경우도 있습니다(예: FCC 15.215(c)). 적용 규격을 먼저 확인하세요. 위 kbox의 ppm 값은 계산 연습용 예시입니다.
</div>

<h2>측정 방법</h2>
<h3>1) CW(무변조) 모드 + 주파수 카운터</h3>
<p>시료가 <strong>무변조 반송파(CW, Continuous Wave)</strong>를 낼 수 있으면 가장 정확하고 간단합니다. 주파수 카운터 또는 분석기의 카운터 기능(Marker count)으로 반송파 주파수를 직접 읽습니다.</p>
<h3>2) 변조 신호 + 스펙트럼 분석기</h3>
<p>CW 모드가 없으면 변조된 신호의 <strong>중심 주파수</strong>를 구합니다. 대표적으로 99% OBW 측정에서 얻은 양 끝 주파수의 중간값 (f<sub>L</sub> + f<sub>H</sub>) / 2 를 사용하거나, 규격이 정한 방법(예: 특정 x dB 지점의 중간)을 따릅니다. 이동통신 단말은 무선통신 시험기(Radio communication tester)가 복조를 통해 주파수 오차(Frequency error)를 직접 표시합니다.</p>

<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>CW + 마커 카운트 (예)</th><th>변조 신호 중심 주파수 (예)</th></tr></thead>
<tbody>
<tr><td>Span</td><td>좁게 (예: 100 kHz ~ 1 MHz)</td><td>OBW의 1.5~2배</td></tr>
<tr><td>RBW</td><td>1 kHz ~ 10 kHz</td><td>OBW의 1~5%</td></tr>
<tr><td>VBW</td><td>≥ 3 × RBW</td><td>≥ 3 × RBW</td></tr>
<tr><td>Detector</td><td>Peak</td><td>Peak (OBW 기능)</td></tr>
<tr><td>Trace</td><td>Clear/Write 또는 Max hold</td><td>Max hold</td></tr>
<tr><td>기능</td><td>Marker → Peak → Count (분해능 1 Hz)</td><td>OBW 기능의 f<sub>L</sub>, f<sub>H</sub> 읽기</td></tr>
<tr><td>기준</td><td colspan="2">분석기 기준 주파수(10 MHz Ref)를 GPS/루비듐 등 <strong>외부 기준 신호</strong>에 동기하면 계측기 자체 오차를 줄일 수 있음</td></tr>
</tbody></table></div>

<div class="callout warn">
  <span class="callout-title">계측기 기준 발진기도 오차가 있습니다</span>
  ±0.1 ppm 수준을 측정하는데 분석기 내부 기준 발진기의 오차가 비슷하다면 결과를 믿을 수 없습니다. 고정밀 측정에서는 외부 기준(예: 10 MHz 루비듐/GPS 기준)을 연결하고, 분석기 설정이 <strong>External Ref</strong>로 잠겼는지(Locked) 확인하세요.
</div>

<h2>온도·전압 변화 시험 (주파수 안정도)</h2>
<figure class="diagram">
<svg viewBox="0 0 760 230" role="img" aria-label="주파수 안정도 시험 셋업">
  <defs><marker id="rtf-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="20" y="20" width="300" height="190" rx="12" fill="var(--dg-fill-2)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="170" y="44" font-weight="700" fill="var(--dg-accent)">항온항습 챔버</text>
    <text x="170" y="62" font-size="11.5" fill="var(--text-3)">예: −20 ℃ ~ +50 ℃, 10 ℃ 간격</text>
    <rect x="70" y="90" width="150" height="70" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="145" y="120" font-weight="700">시료 (EUT)</text>
    <text x="145" y="140" font-size="11.5" fill="var(--text-3)">CW 또는 연속 송신</text>
    <rect x="230" y="176" width="80" height="24" rx="4" fill="var(--dg-fill)" stroke="var(--dg-muted)"/>
    <text x="270" y="193" font-size="11" fill="var(--text-3)">온도 센서</text>
    <circle cx="320" cy="125" r="6" fill="var(--dg-line)"/>
    <text x="320" y="108" font-size="11" fill="var(--text-3)">관통 포트</text>
    <path d="M220 125 L314 125" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M326 125 L380 125" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="380" y="105" width="90" height="40" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="425" y="130">감쇠기</text>
    <path d="M470 125 L540 125" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#rtf-arw)"/>
    <rect x="544" y="90" width="196" height="70" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="642" y="118" font-weight="700">분석기 / 카운터</text>
    <text x="642" y="138" font-size="11.5" fill="var(--text-3)">외부 10 MHz 기준 입력</text>
    <rect x="544" y="176" width="196" height="40" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="642" y="201" font-weight="700">가변 DC 전원공급기</text>
    <path d="M544 196 L400 196 L400 172 L222 150" fill="none" stroke="var(--dg-line)" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#rtf-arw)"/>
    <text x="470" y="189" font-size="11" fill="var(--text-3)">전압 85~115% (예)</text>
  </g>
</svg>
<figcaption>그림 1. 주파수 안정도 시험 셋업. 시료만 챔버에 넣고, 계측기는 챔버 밖에서 관통 포트를 통해 연결합니다.</figcaption>
</figure>

<ol class="steps">
  <li><strong>상온 기준 측정</strong>정격 전압, 상온(예: 20 ℃)에서 주파수를 측정해 기준값으로 기록합니다.</li>
  <li><strong>온도 설정과 안정화</strong>챔버를 시험 온도(예: −20 ℃)로 설정하고, 시료 온도가 안정될 때까지 충분히 기다립니다(예: 도달 후 30분 이상 또는 규격이 정한 시간). 이때 시료 전원은 규격에 따라 OFF 상태로 두기도 합니다.</li>
  <li><strong>전원 인가 후 측정</strong>시료를 켜고 규격이 정한 시점(예: 기동 직후, 2·5·10분 후)에 주파수를 측정합니다. 기동 직후는 발진기가 가장 불안정한 순간입니다.</li>
  <li><strong>온도 단계 반복</strong>−20, −10, 0, … +50 ℃처럼 10 ℃ 간격으로 반복합니다(예시). 고온에서 저온으로 급변시키면 결로가 생길 수 있으니 주의합니다.</li>
  <li><strong>전압 변화</strong>상온에서 정격 전압의 예: 85%·115% (배터리는 방전 종지 전압) 조건으로 측정합니다.</li>
  <li><strong>판정·기록</strong>모든 조건 중 최대 오차(ppm)를 한계와 비교합니다.</li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="온도에 따른 주파수 오차 그래프">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <rect x="90" y="30" width="600" height="200" fill="none" stroke="var(--dg-line)" stroke-width="1.2"/>
    <line x1="90" y1="130" x2="690" y2="130" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 3"/>
    <line x1="90" y1="50" x2="690" y2="50" stroke="var(--dg-accent-2)" stroke-width="1.8" stroke-dasharray="6 4"/>
    <line x1="90" y1="210" x2="690" y2="210" stroke="var(--dg-accent-2)" stroke-width="1.8" stroke-dasharray="6 4"/>
    <text x="684" y="45" text-anchor="end" fill="var(--dg-accent-2)" font-weight="700">+20 ppm 한계(예)</text>
    <text x="684" y="225" text-anchor="end" fill="var(--dg-accent-2)" font-weight="700">−20 ppm 한계(예)</text>
    <text x="80" y="54" text-anchor="end" fill="var(--text-3)">+20</text>
    <text x="80" y="134" text-anchor="end" fill="var(--text-3)">0</text>
    <text x="80" y="214" text-anchor="end" fill="var(--text-3)">−20</text>
    <text x="30" y="134" fill="var(--text-3)">ppm</text>
    <polyline points="90,94 175.7,114 261.4,126 347.1,134 432.9,130 518.6,138 604.3,150 690,170" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <g fill="var(--dg-accent)">
      <circle cx="90" cy="94" r="4"/><circle cx="175.7" cy="114" r="4"/><circle cx="261.4" cy="126" r="4"/><circle cx="347.1" cy="134" r="4"/>
      <circle cx="432.9" cy="130" r="4"/><circle cx="518.6" cy="138" r="4"/><circle cx="604.3" cy="150" r="4"/><circle cx="690" cy="170" r="4"/>
    </g>
    <g fill="var(--text-3)">
      <text x="90" y="248">−20</text><text x="175.7" y="248">−10</text><text x="261.4" y="248">0</text><text x="347.1" y="248">+10</text>
      <text x="432.9" y="248">+20</text><text x="518.6" y="248">+30</text><text x="604.3" y="248">+40</text><text x="690" y="248">+50</text>
    </g>
    <text x="390" y="266" fill="var(--text-3)">온도 (℃)</text>
    <text x="150" y="86" fill="var(--dg-accent)" font-weight="700">최대 +9 ppm</text>
  </g>
</svg>
<figcaption>그림 2. 온도별 주파수 오차 예(가상 데이터). 저온·고온 양 끝에서 오차가 커지는 것이 일반적인 경향입니다.</figcaption>
</figure>

<h2>기록 예시</h2>
<p>예: 공칭 2 412 MHz(CW), 한계 ±20 ppm(예시 한계).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>온도(℃)</th><th>전압</th><th class="num">측정 주파수(MHz)</th><th class="num">오차(Hz)</th><th class="num">오차(ppm)</th><th class="num">한계(ppm)</th><th class="num">마진(ppm)</th><th>판정</th></tr></thead>
<tbody>
<tr><td>−20</td><td>정격 (3.8 V)</td><td class="num">2412.021708</td><td class="num">+21 708</td><td class="num">+9.0</td><td class="num">±20</td><td class="num">11.0</td><td>적합</td></tr>
<tr><td>+20</td><td>정격 (3.8 V)</td><td class="num">2412.000482</td><td class="num">+482</td><td class="num">+0.2</td><td class="num">±20</td><td class="num">19.8</td><td>적합</td></tr>
<tr><td>+20</td><td>하한 (3.4 V)</td><td class="num">2412.000964</td><td class="num">+964</td><td class="num">+0.4</td><td class="num">±20</td><td class="num">19.6</td><td>적합</td></tr>
<tr><td>+50</td><td>정격 (3.8 V)</td><td class="num">2411.975880</td><td class="num">−24 120</td><td class="num">−10.0</td><td class="num">±20</td><td class="num">10.0</td><td>적합</td></tr>
</tbody></table></div>
<p>마진 = |한계| − |오차|. 기록지에는 온도 도달 시각, 안정화 시간, 전원 인가 후 측정 시점도 함께 남깁니다.</p>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">자주 틀리는 부분</span>
  <ul>
    <li><strong>안정화 시간 부족</strong> — 챔버 온도계가 −20 ℃를 표시해도 시료 내부는 아직 따뜻할 수 있습니다.</li>
    <li><strong>결로</strong> — 저온 후 고온·고습으로 바로 올리면 시료에 물이 맺혀 고장이나 오동작이 생깁니다. 습도를 낮게 유지하세요.</li>
    <li><strong>케이블 온도 영향 무시</strong> — 챔버 안 케이블은 온도에 따라 손실이 변합니다. 주파수 측정에는 큰 영향이 없지만 같은 셋업으로 출력을 볼 때는 주의합니다.</li>
    <li><strong>ppm 계산 단위 실수</strong> — kHz와 MHz를 섞어 계산해 1000배 틀리는 경우가 많습니다. 모두 Hz로 바꿔 계산하세요.</li>
    <li><strong>분석기 내부 기준 사용</strong> — 고정밀 한계(예: 0.1 ppm 수준)에서는 외부 기준 동기를 확인합니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '공칭 2 400 MHz에서 허용편차가 ±20 ppm일 때 허용되는 주파수 오차는?',
      options: ['±4.8 kHz', '±48 kHz', '±480 kHz', '±20 kHz'],
      answer: 1, explain: '2 400 × 10⁶ Hz × 20 × 10⁻⁶ = 48 000 Hz = ±48 kHz 입니다.' },
    { q: '공칭 5 800 MHz, 측정 5 800.058 MHz 일 때 오차(ppm)는?',
      options: ['+1 ppm', '+58 ppm', '+0.1 ppm', '+10 ppm'],
      answer: 3, explain: '오차 58 kHz / 5 800 MHz × 10⁶ = 58 000 / 5 800 000 000 × 10⁶ = 10 ppm 입니다.' },
    { q: '온도 변화 시험에서 챔버 설정 온도에 도달한 직후 바로 측정하면 안 되는 이유는?',
      options: ['챔버 소음 때문', '시료 내부 온도가 아직 안정되지 않았기 때문', '분석기가 예열되지 않았기 때문', '규격상 측정 횟수가 부족하기 때문'],
      answer: 1, explain: '챔버 공기 온도와 시료 내부(발진기) 온도는 시간차가 있으므로 규격이 정한 안정화 시간을 둡니다.' },
    { q: '±0.1 ppm 수준의 주파수 오차를 측정할 때 가장 중요한 준비는?',
      options: ['RBW를 최대로 넓힌다', 'Max hold를 끈다', '분석기를 외부 고정밀 10 MHz 기준(GPS/루비듐 등)에 동기한다', '감쇠기를 제거한다'],
      answer: 2, explain: '계측기 자체 기준 발진기의 오차가 측정 대상과 비슷하면 결과를 믿을 수 없으므로 외부 고정밀 기준에 동기합니다.' }
  ],
  refs: [
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '무선설비 기술기준 — 주파수 허용편차 표' },
    { title: 'FCC 47 CFR (2.1055, 15.215)', url: 'https://www.fcc.gov', note: '주파수 안정도 측정 조건, 대역 내 유지 요건' },
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: '극한 조건(Extreme conditions) 시험 조건' },
    { title: 'Anritsu — Frequency counter / Spectrum analyzer', url: 'https://www.anritsu.com', note: '주파수 측정 응용 자료' }
  ]
});

COURSE.addLesson({
  id: 'rftest-spurious',
  module: 'rftest',
  order: 5,
  title: '스퓨리어스 발사와 불요 발사',
  minutes: 28,
  level: '실무',
  summary: '대역외 발사(OOB)와 스퓨리어스 영역의 구분, 스펙트럼 마스크, 측정 주파수 범위와 RBW, 노치 필터 사용, 대역 경계와 제한대역, 측정 결과 그래프 읽는 법까지 다룹니다.',
  objectives: [
    '불요 발사(Unwanted emission)를 대역외 발사와 스퓨리어스 발사로 구분할 수 있다.',
    '측정 주파수 범위, RBW(100 kHz / 1 MHz), 검파기 등 스퓨리어스 측정 설정을 정할 수 있다.',
    '노치 필터로 기본파를 억제하는 이유와 방법, 전도·방사 스퓨리어스의 차이를 설명할 수 있다.',
    '대역 경계(Band edge)와 제한대역(FCC 15.205) 개념을 이해하고 결과 그래프에서 마진을 읽을 수 있다.'
  ],
  body: `
<p>송신기는 원하는 주파수(기본파)만 내보내는 것이 이상적이지만, 실제로는 증폭기의 비선형성, 발진기·클럭, 믹서 등 때문에 <strong>원하지 않는 주파수에도 약간의 전파</strong>가 나옵니다. 이것을 <strong>불요 발사(Unwanted emissions)</strong>라고 하며, 다른 무선 서비스(방송, 항공, GPS, 이동통신 등)에 간섭을 줄 수 있으므로 엄격하게 제한합니다. 무선 시험에서 <strong>부적합이 가장 많이 나오는 항목</strong> 중 하나입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  노래방에서 내 방 노래(기본파)는 괜찮지만, <strong>옆방까지 새는 소리</strong>가 불요 발사입니다. 벽 바로 옆으로 번지는 소리가 <em>대역외 발사</em>, 환풍구를 타고 멀리 떨어진 방까지 들리는 엉뚱한 소리가 <em>스퓨리어스</em>입니다. 시험은 “옆방 손님이 불편하지 않을 만큼 작은가”를 확인합니다.
</div>

<h2>대역외 영역과 스퓨리어스 영역</h2>
<figure class="diagram">
<svg viewBox="0 0 760 270" role="img" aria-label="필요 대역폭, 대역외 영역, 스퓨리어스 영역 구분">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <rect x="40" y="16" width="140" height="28" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <rect x="180" y="16" width="160" height="28" fill="var(--dg-fill)" stroke="var(--dg-accent-2)"/>
    <rect x="340" y="16" width="80" height="28" fill="var(--dg-accent)" opacity="0.18" stroke="var(--dg-accent)"/>
    <rect x="420" y="16" width="160" height="28" fill="var(--dg-fill)" stroke="var(--dg-accent-2)"/>
    <rect x="580" y="16" width="140" height="28" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="110" y="35" font-weight="700">스퓨리어스 영역</text>
    <text x="260" y="35" font-weight="700" fill="var(--dg-accent-2)">대역외(OOB) 영역</text>
    <text x="380" y="35" font-weight="700" fill="var(--dg-accent)">필요 BW</text>
    <text x="500" y="35" font-weight="700" fill="var(--dg-accent-2)">대역외(OOB) 영역</text>
    <text x="650" y="35" font-weight="700">스퓨리어스 영역</text>

    <line x1="180" y1="44" x2="180" y2="222" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <line x1="580" y1="44" x2="580" y2="222" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <line x1="340" y1="44" x2="340" y2="222" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <line x1="420" y1="44" x2="420" y2="222" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>

    <path d="M40 150 L180 150 L180 120 L310 120 L330 62 L430 62 L450 120 L580 120 L580 150 L720 150" fill="none" stroke="var(--dg-accent-2)" stroke-width="2" stroke-dasharray="7 4"/>
    <text x="110" y="143" font-size="11" fill="var(--dg-accent-2)">마스크 / 한계(예)</text>

    <line x1="40" y1="220" x2="720" y2="220" stroke="var(--dg-line)" stroke-width="1.5"/>
    <path d="M40 205 L150 203 C220 200 300 170 335 72 L425 72 C460 170 540 200 610 203 L720 205" fill="none" stroke="var(--dg-line)" stroke-width="2.2"/>
    <path d="M96 205 L100 168 L104 205" fill="var(--dg-accent)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <path d="M656 205 L660 172 L664 205" fill="var(--dg-accent)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="100" y="162" font-size="11.5" fill="var(--dg-accent)">클럭 고조파</text>
    <text x="660" y="166" font-size="11.5" fill="var(--dg-accent)">2차 고조파 등</text>

    <text x="380" y="240" fill="var(--text-2)">f<tspan font-size="10" dy="3">c</tspan></text>
    <text x="180" y="240" font-size="11.5" fill="var(--text-3)">f<tspan font-size="9" dy="3">c</tspan><tspan dy="-3"> − 2.5 B</tspan><tspan font-size="9" dy="3">N</tspan></text>
    <text x="580" y="240" font-size="11.5" fill="var(--text-3)">f<tspan font-size="9" dy="3">c</tspan><tspan dy="-3"> + 2.5 B</tspan><tspan font-size="9" dy="3">N</tspan></text>
    <text x="380" y="262" font-size="11.5" fill="var(--text-3)">B<tspan font-size="9" dy="3">N</tspan><tspan dy="-3"> = 필요 대역폭 — 경계는 대표적으로 중심에서 ±250% B</tspan><tspan font-size="9" dy="3">N</tspan><tspan dy="-3"> (ITU-R SM.329 개념, 규격마다 다를 수 있음)</tspan></text>
  </g>
</svg>
<figcaption>그림 1. 불요 발사의 두 영역. 필요 대역폭 바로 바깥은 변조로 인한 대역외 발사, 그보다 먼 곳은 고조파·기생 발진 등 스퓨리어스 발사로 봅니다(개념도).</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>원인(예)</th><th>규제 방식(예)</th></tr></thead>
<tbody>
<tr><td>대역외 발사 (OOB, Out-of-band emission)</td><td>변조 과정에서 생기는 스펙트럼 확산, PA 비선형(스펙트럼 재성장)</td><td>스펙트럼 마스크, 인접 채널 누설 전력(ACLR), 대역 경계 한계</td></tr>
<tr><td>스퓨리어스 발사 (Spurious emission)</td><td>고조파(2f, 3f …), 기생 발진, 혼변조, 클럭·국부발진기 누설</td><td>주파수 구간별 절대 레벨 한계(dBm, dBµV/m) 또는 기본파 대비 dBc 한계</td></tr>
</tbody></table></div>

<h3>스펙트럼 마스크</h3>
<p>스펙트럼 마스크(Spectrum mask)는 “중심 주파수에서 얼마나 떨어졌을 때 몇 dB 이하여야 하는가”를 계단 모양으로 정한 한계선입니다. 무선랜, 이동통신, 방송 송신기 등에서 쓰이며, 기준(최대 레벨 대비 dBr, 또는 절대 레벨)과 측정 RBW가 규격에 함께 정해져 있습니다. 측정 결과 트레이스가 마스크 선 <strong>아래</strong>에 있어야 적합합니다.</p>

<h2>측정 주파수 범위와 설정</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>규격(예)</th><th>측정 범위(예)</th><th>비고</th></tr></thead>
<tbody>
<tr><td>FCC Part 15 (15.33)</td><td>기본파 10 GHz 미만: 기기에서 발생하는 최저 RF 주파수(9 kHz 미만 제외) ~ 기본파의 10차 고조파 또는 40 GHz 중 낮은 쪽</td><td>기본파가 높을수록 상한이 올라감</td></tr>
<tr><td>ETSI EN 300 328 (2.4 GHz)</td><td>30 MHz ~ 12.75 GHz</td><td>ERC/REC 74-01 기반 범위</td></tr>
<tr><td>ETSI EN 301 893 (5 GHz)</td><td>30 MHz ~ 26 GHz</td><td>대표적으로 기본파의 5차 고조파까지 포함하도록 설정</td></tr>
<tr><td>국내 기술기준</td><td>기기별 고시에 정한 범위</td><td>최신 고시·시험방법 확인</td></tr>
</tbody></table></div>

<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>1 GHz 미만 (예)</th><th>1 GHz 이상 (예)</th><th>이유</th></tr></thead>
<tbody>
<tr><td>RBW</td><td>100 kHz (ETSI), 100~120 kHz (FCC 준첨두 대역은 120 kHz)</td><td>1 MHz</td><td>규격이 정한 기준 대역폭, 한계값이 이 대역폭 기준</td></tr>
<tr><td>VBW</td><td>≥ 3 × RBW</td><td>≥ 3 × RBW (FCC 평균값 측정은 규정된 방법 사용)</td><td>비디오 필터가 피크를 깎지 않게</td></tr>
<tr><td>Detector</td><td>Peak (사전) → 규격 검파(RMS/QP) 최종</td><td>Peak / RMS(평균)</td><td>빠르게 전체를 훑고, 높은 지점만 정식 검파</td></tr>
<tr><td>Trace</td><td>Max hold</td><td>Max hold</td><td>간헐적 발사까지 포착</td></tr>
<tr><td>Sweep</td><td>Auto 또는 규격 지정 시간</td><td>Auto 또는 규격 지정</td><td>버스트 신호는 충분히 긴 스윕/여러 번 스윕</td></tr>
<tr><td>Sweep points</td><td colspan="2">≥ Span / RBW 이상 (넓은 범위는 구간을 나눠 측정)</td><td>빈틈 없이 측정</td></tr>
</tbody></table></div>
<div class="callout note">
  <span class="callout-title">한계값은 규격 원문으로</span>
  예를 들어 ETSI EN 300 328의 송신 스퓨리어스 한계는 주파수 구간(방송 대역 등)에 따라 다르고, FCC 15.247(d)는 “대역 밖 100 kHz 대역 전력이 대역 내 최대 100 kHz 전력보다 20 dB 이상 낮을 것(평균 전력 방식으로 출력을 측정한 경우 30 dB)”처럼 <strong>상대값(dBc)</strong>으로 정합니다. 반드시 해당 판의 원문 표를 확인하세요.
</div>

<h2>노치 필터로 기본파 억제</h2>
<p>스퓨리어스는 기본파보다 수십 dB 작습니다. 기본파(예: +20 dBm)가 그대로 분석기에 들어가면 과입력을 피하려고 입력 감쇠(ATT)를 크게 둬야 하고, 그만큼 <strong>잡음 바닥이 올라가 작은 스퓨리어스가 묻힙니다</strong>. 또 강한 기본파가 분석기 내부 믹서에서 <strong>분석기 자체의 고조파</strong>를 만들어, 시료의 스퓨리어스로 오인할 수도 있습니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 170" role="img" aria-label="노치 필터를 사용한 전도 스퓨리어스 측정 셋업">
  <defs><marker id="rts-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="15" y="40" width="120" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="75" y="66" font-weight="700" fill="var(--dg-accent)">시료 (EUT)</text><text x="75" y="84" font-size="11.5" fill="var(--text-3)">RF 포트</text>
    <path d="M135 70 L180 70" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="180" y="40" width="150" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="255" y="64" font-weight="700" fill="var(--dg-accent-2)">노치(대역저지) 필터</text><text x="255" y="84" font-size="11.5" fill="var(--text-3)">예: 2.4 GHz 대역 저지</text>
    <path d="M330 70 L375 70" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="375" y="40" width="150" height="60" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="450" y="64" font-weight="700">고역통과 필터</text><text x="450" y="84" font-size="11.5" fill="var(--text-3)">(고조파 측정 시, 선택)</text>
    <path d="M525 70 L580 70" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#rts-arw)"/>
    <rect x="584" y="40" width="160" height="60" rx="8" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="664" y="64" font-weight="700">스펙트럼 분석기</text><text x="664" y="84" font-size="11.5" fill="var(--text-3)">ATT 낮게 → 감도 확보</text>
    <text x="380" y="135" font-size="12" fill="var(--dg-accent-2)" font-weight="700">필터의 통과 손실(주파수별)을 보정 테이블에 반드시 포함</text>
    <text x="380" y="155" font-size="11.5" fill="var(--text-3)">기본파 대역(노치 저지 구간)의 발사는 노치 없이 별도로 측정 — 대역 경계 · 출력 항목</text>
  </g>
</svg>
<figcaption>그림 2. 전도 스퓨리어스 측정 셋업 예. 노치 필터가 기본파만 크게 줄여 분석기가 작은 스퓨리어스를 볼 수 있게 합니다.</figcaption>
</figure>

<div class="callout tip">
  <span class="callout-title">진짜 스퓨리어스인지 확인하는 법</span>
  의심되는 신호가 보이면 분석기 입력 감쇠(ATT)를 10 dB 올려 보세요. 신호 레벨(보정 후)이 <strong>그대로</strong>면 시료의 실제 신호이고, <strong>크게 변하면</strong> 분석기 내부에서 생긴 왜곡일 가능성이 큽니다. 또 시료를 끈 상태의 잡음·주변 신호(Ambient)도 한 번 측정해 두면 판단이 쉬워집니다.
</div>

<h2>전도 스퓨리어스와 방사 스퓨리어스</h2>
<div class="card-grid">
  <div class="card"><h3>🔌 전도 스퓨리어스</h3><p>안테나 단자에서 측정. 결과 단위는 보통 <strong>dBm</strong>. 송신기 회로(PA, 필터)에서 나오는 발사를 봅니다. 셋업이 간단하고 재현성이 좋습니다.</p></div>
  <div class="card"><h3>📡 방사 스퓨리어스</h3><p>챔버에서 측정. 결과는 <strong>전계강도(dBµV/m)</strong> 또는 치환법으로 구한 <strong>ERP/EIRP(dBm)</strong>. 안테나에서의 발사 + <strong>케이스·케이블 누설(Cabinet radiation)</strong>까지 포함합니다. <a href="#/l/rftest-radiated">방사 무선 시험</a> 강의에서 자세히 다룹니다.</p></div>
</div>

<h2>대역 경계와 제한대역</h2>
<p><strong>대역 경계(Band edge)</strong> 시험은 허용 대역의 끝(예: 2400 MHz, 2483.5 MHz)에서 신호가 얼마나 잘 줄어드는지 확인합니다. 가장 경계에 가까운 low/high 채널, 가장 넓은 대역폭, 최대 출력 모드에서 측정합니다.</p>
<p>FCC는 항공 무선항법, 전파천문, GPS 등 보호가 필요한 주파수를 <strong>제한대역(Restricted bands, 47 CFR 15.205)</strong>으로 지정해, 이 대역에 떨어지는 발사는 <strong>15.209의 일반 방사 한계(전계강도)</strong>를 만족해야 합니다. 예를 들어 2483.5~2500 MHz는 2.4 GHz ISM 대역 바로 위의 제한대역이므로, high 채널의 대역 경계 측정이 특히 까다롭습니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="상단 대역 경계와 제한대역 측정 예">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <rect x="470" y="30" width="156" height="180" fill="var(--dg-accent-2)" opacity="0.12"/>
    <text x="548" y="48" font-weight="700" fill="var(--dg-accent-2)">제한대역 (예)</text>
    <text x="548" y="64" font-size="11" fill="var(--text-3)">2483.5 ~ 2500 MHz</text>
    <line x1="60" y1="210" x2="720" y2="210" stroke="var(--dg-line)" stroke-width="1.5"/>
    <line x1="470" y1="24" x2="470" y2="216" stroke="var(--dg-accent-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <path d="M60 200 L120 198 C150 195 165 110 180 62 L355 62 C370 110 385 160 420 175 C450 185 480 190 520 195 L720 202" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
    <text x="268" y="54" font-weight="700" fill="var(--dg-accent)">High 채널 (2462 MHz)</text>
    <line x1="470" y1="150" x2="626" y2="150" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="680" y="146" font-size="11" fill="var(--dg-accent-2)">한계선(예)</text>
    <circle cx="470" cy="188" r="5" fill="none" stroke="var(--dg-ok)" stroke-width="2"/>
    <path d="M478 150 L478 186" stroke="var(--dg-ok)" stroke-width="1.4"/>
    <text x="500" y="174" font-size="11" text-anchor="start" fill="var(--dg-ok)" font-weight="700">마진</text>
    <text x="380" y="248" font-size="11" fill="var(--dg-ok)">마커 @ 2483.5 MHz</text>
    <g fill="var(--text-3)" font-size="11">
      <text x="173" y="226">2452</text><text x="268" y="226">2462</text><text x="362" y="226">2472</text><text x="470" y="250">2483.5</text><text x="626" y="226">2500 MHz</text>
    </g>
  </g>
</svg>
<figcaption>그림 3. 상단 대역 경계 측정 개념. 경계 주파수(2483.5 MHz)와 제한대역 전체에서 가장 높은 발사를 찾아 한계선과 비교합니다(개념도, 레벨은 가상).</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>구분</th><th>판정 기준(예)</th><th>측정 방식(예)</th></tr></thead>
<tbody>
<tr><td>일반 대역 경계 (비제한대역)</td><td>FCC 15.247(d): 대역 내 최대 대비 −20 dBc (100 kHz 대역)</td><td>전도 측정, RBW 100 kHz, Peak, Max hold, 마커-델타</td></tr>
<tr><td>제한대역 내 발사</td><td>FCC 15.209 한계: 예) 960 MHz 초과에서 3 m 거리 평균 54 dBµV/m, 피크 74 dBµV/m</td><td>방사 측정(또는 KDB 558074가 허용하는 전도 측정 후 환산), RBW 1 MHz, 피크·평균 각각</td></tr>
</tbody></table></div>

<h2>측정 결과 그래프 읽기</h2>
<figure class="diagram">
<svg viewBox="0 0 760 290" role="img" aria-label="전도 스퓨리어스 측정 결과 그래프 예">
  <g font-size="11.5" fill="var(--text)" text-anchor="middle">
    <rect x="70" y="30" width="650" height="200" fill="none" stroke="var(--dg-line)" stroke-width="1.2"/>
    <g stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 3">
      <line x1="70" y1="80" x2="720" y2="80"/><line x1="70" y1="130" x2="720" y2="130"/><line x1="70" y1="180" x2="720" y2="180"/>
      <line x1="406.9" y1="30" x2="406.9" y2="230"/>
    </g>
    <g fill="var(--text-3)" text-anchor="end">
      <text x="64" y="34">0</text><text x="64" y="84">−20</text><text x="64" y="134">−40</text><text x="64" y="184">−60</text><text x="64" y="234">−80</text>
    </g>
    <text x="28" y="130" fill="var(--text-3)">dBm</text>
    <rect x="480" y="30" width="22" height="200" fill="var(--dg-muted)" opacity="0.25"/>
    <text x="491" y="22" font-size="11" fill="var(--text-3)">기본파 대역(별도 항목)</text>
    <path d="M70 120 L406.9 120 L406.9 105 L720 105" fill="none" stroke="var(--dg-accent-2)" stroke-width="2"/>
    <text x="230" y="114" fill="var(--dg-accent-2)" font-weight="700">한계 −36 dBm (예)</text>
    <text x="650" y="99" fill="var(--dg-accent-2)" font-weight="700">한계 −30 dBm (예)</text>
    <polyline points="70,205 100,200 130,207 160,198 190,204 220,201 245,203 250,150 255,203 280,199 320,205 360,200 400,203 407,196 440,198 470,193 480,190 491,40 502,190 520,194 550,196 557.6,135 565,195 590,197 596.6,160 603,196 630,194 660,190 690,188 720,186" fill="none" stroke="var(--dg-accent)" stroke-width="1.4"/>
    <g font-weight="700" fill="var(--dg-ok)">
      <circle cx="250" cy="150" r="9" fill="var(--dg-fill)" stroke="var(--dg-ok)"/><text x="250" y="154">1</text>
      <circle cx="557.6" cy="135" r="9" fill="var(--dg-fill)" stroke="var(--dg-ok)"/><text x="557.6" y="139">2</text>
      <circle cx="596.6" cy="160" r="9" fill="var(--dg-fill)" stroke="var(--dg-ok)"/><text x="596.6" y="164">3</text>
    </g>
    <g fill="var(--text-3)">
      <text x="70" y="248">30 M</text><text x="291" y="248">300 M</text><text x="406.9" y="248">1 G</text><text x="491" y="248">2.4 G</text><text x="628" y="248">10 G</text><text x="720" y="248">26 GHz</text>
    </g>
    <text x="395" y="276" fill="var(--text-3)">주파수 (로그 축) — 한계선과 트레이스 사이 간격이 마진, 번호는 기록할 최대 발사 지점</text>
  </g>
</svg>
<figcaption>그림 4. 전도 스퓨리어스 측정 결과 예(가상 데이터, 한계값도 예시). 기본파 대역은 스퓨리어스 판정에서 제외하고 출력·대역 경계 항목으로 따로 평가합니다.</figcaption>
</figure>
<p>그래프를 읽을 때는 다음 순서로 봅니다.</p>
<ol>
  <li><strong>한계선 확인</strong> — 주파수 구간별로 한계가 바뀌는 지점(예: 1 GHz)과 단위(dBm, dBµV/m)를 확인합니다.</li>
  <li><strong>가장 마진이 작은 지점 찾기</strong> — 트레이스가 한계선에 가장 가까운 곳이 최악 지점입니다. 절대 레벨이 가장 높은 곳과 다를 수 있습니다(구간마다 한계가 다르므로).</li>
  <li><strong>잡음 바닥 확인</strong> — 잡음 바닥이 한계보다 충분히(예: 6 dB 이상) 낮아야 “발사 없음”을 주장할 수 있습니다.</li>
  <li><strong>원인 추정</strong> — 2f, 3f 위치면 고조파, 일정 간격으로 반복되면 클럭 고조파일 가능성이 큽니다. 부적합 시 제조사에 원인 정보로 전달합니다.</li>
</ol>

<h3>기록 예시</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>No.</th><th class="num">주파수(MHz)</th><th class="num">측정값(dBm, 보정 후)</th><th>검파</th><th class="num">한계(dBm)</th><th class="num">마진(dB)</th><th>판정</th><th>비고</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">195.5</td><td class="num">−48.0</td><td>Peak</td><td class="num">−36.0</td><td class="num">12.0</td><td>적합</td><td>클럭 고조파 추정</td></tr>
<tr><td>2</td><td class="num">4924.0</td><td class="num">−42.0</td><td>Peak</td><td class="num">−30.0</td><td class="num">12.0</td><td>적합</td><td>2차 고조파 (High 채널)</td></tr>
<tr><td>3</td><td class="num">7386.0</td><td class="num">−52.0</td><td>Peak</td><td class="num">−30.0</td><td class="num">22.0</td><td>적합</td><td>3차 고조파</td></tr>
</tbody></table></div>
<p>마진 = 한계 − 측정값. 피크 검파로 이미 한계를 충분히 만족하면 평균(RMS) 측정을 생략할 수 있는지(대부분 허용)는 규격을 확인합니다.</p>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">현장에서 자주 보는 실수</span>
  <ul>
    <li><strong>보정 테이블 누락</strong> — 수 GHz 이상에서는 케이블 손실이 수 dB~10 dB 이상입니다. 30 MHz 값 하나로 전 대역을 보정하면 고주파 스퓨리어스를 크게 과소평가합니다.</li>
    <li><strong>노치 필터 손실 미포함</strong> — 필터 통과 대역의 손실도 주파수별로 보정해야 합니다.</li>
    <li><strong>분석기 내부 왜곡을 시료 발사로 오인</strong> — ATT를 바꿔 레벨이 따라 변하는지 확인합니다.</li>
    <li><strong>RBW 불일치</strong> — 1 GHz 이상에서 100 kHz로 측정하고 1 MHz 기준 한계와 비교하면 잡음성 발사가 10 dB 낮게 나옵니다.</li>
    <li><strong>채널·모드 누락</strong> — 스퓨리어스는 low/mid/high 및 최악 모드별로 측정합니다. 고조파 주파수는 채널에 따라 이동합니다.</li>
    <li><strong>측정 범위 상한 부족</strong> — 5 GHz 제품을 12.75 GHz까지만 측정하면 2차 고조파(약 11~12 GHz)는 보이지만 그 이상 고조파를 놓칩니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '필요 대역폭 바로 바깥, 변조 과정에서 생기는 스펙트럼 확산으로 인한 발사를 무엇이라 하는가?',
      options: ['대역외 발사(OOB emission)', '스퓨리어스 발사', '부차 발사', '기본파'],
      answer: 0, explain: '필요 대역폭 바로 바깥 영역은 대역외(OOB) 영역이며, 변조에 의한 발사가 주원인입니다. 더 먼 영역은 스퓨리어스 영역입니다.' },
    { q: '전도 스퓨리어스 측정에서 노치(대역저지) 필터를 사용하는 주된 이유는?',
      options: ['기본파 출력을 정확히 측정하기 위해', '측정 시간을 줄이기 위해', '기본파를 억제해 분석기 ATT를 낮추고 작은 스퓨리어스를 볼 수 있게 하기 위해', '시료의 고조파를 제거해 적합 판정을 받기 위해'],
      answer: 2, explain: '강한 기본파를 줄이면 분석기의 과입력과 내부 왜곡을 막고, 감쇠를 낮춰 잡음 바닥을 내릴 수 있습니다. 필터 손실은 주파수별로 보정합니다.' },
    { q: 'FCC 47 CFR 15.205 제한대역(Restricted bands)에 떨어지는 발사에 대한 설명으로 옳은 것은?',
      options: ['제한대역에서는 측정하지 않아도 된다', '15.209의 일반 방사 한계를 만족해야 한다', '기본파 대비 −20 dBc만 만족하면 된다', '제한대역은 한국 기술기준에서만 쓰는 개념이다'],
      answer: 1, explain: '제한대역에 떨어지는 발사는 15.209의 일반 방사 한계(전계강도)를 만족해야 합니다. 2.4 GHz 상단의 2483.5~2500 MHz가 대표적인 예입니다.' },
    { q: '분석기에서 의심스러운 스퓨리어스가 보인다. 입력 감쇠(ATT)를 10 dB 올렸더니 보정 후 레벨이 크게 낮아졌다. 가장 가능성 높은 해석은?',
      options: ['시료의 실제 스퓨리어스이다', '시료 출력이 변했다', '케이블이 불량이다', '분석기 내부에서 생긴 왜곡 성분일 가능성이 크다'],
      answer: 3, explain: '실제 신호는 ATT를 바꿔도 보정 후 레벨이 같아야 합니다. 레벨이 크게 변하면 분석기 믹서 등 내부 왜곡일 가능성이 큽니다.' },
    { q: '1 GHz 이상 스퓨리어스 한계가 1 MHz 기준으로 정해져 있는데 RBW 100 kHz로 측정했다. 잡음성 발사의 경우 결과는?',
      options: ['약 10 dB 낮게 측정되어 과소평가된다', '약 10 dB 높게 측정된다', '차이가 없다', '약 20 dB 낮게 측정된다'],
      answer: 0, explain: '잡음성(광대역) 신호는 RBW에 비례한 전력이 측정되므로 10·log(100 kHz/1 MHz) = −10 dB, 즉 10 dB 낮게 나옵니다.' }
  ],
  refs: [
    { title: 'FCC KDB — 558074', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'DTS 대역 경계·불요 발사 측정 방법' },
    { title: 'FCC 47 CFR Part 15 (15.205, 15.209, 15.247)', url: 'https://www.fcc.gov', note: '제한대역, 일반 방사 한계, 대역 외 발사 요건' },
    { title: 'ETSI EN 300 328 / EN 301 893', url: 'https://www.etsi.org/standards', note: '송신 불요 발사(대역외·스퓨리어스 영역) 한계와 측정' },
    { title: 'ITU-R SM.329 (스퓨리어스 영역)', url: 'https://www.itu.int', note: '대역외·스퓨리어스 영역 경계와 한계 개념' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '국내 불요 발사 기술기준' }
  ]
});

COURSE.addLesson({
  id: 'rftest-rx',
  module: 'rftest',
  order: 6,
  title: '수신기 시험과 기타 항목',
  minutes: 25,
  level: '실무',
  summary: '수신기 스퓨리어스, 수신 감도·블로킹·인접채널 선택도, 5 GHz DFS, 적응성(LBT), 주파수 호핑의 체류시간·채널 수 등 송신 출력 외의 시험 항목을 정리합니다.',
  objectives: [
    '수신기 스퓨리어스, 수신 감도, 블로킹, 인접채널 선택도가 각각 무엇을 확인하는지 설명할 수 있다.',
    'DFS의 CAC, 채널 이동 시간, 비점유 기간 개념을 타임라인으로 설명할 수 있다.',
    '적응성(LBT/DAA)과 매체 점유 규칙이 왜 필요한지 안다.',
    'FHSS의 호핑 채널 수와 체류시간(Dwell time)을 계산·측정할 수 있다.'
  ],
  body: `
<p>지금까지 본 항목은 대부분 “송신기가 전파를 얼마나 깨끗하게 내보내는가”였습니다. 이 강의에서는 반대편인 <strong>수신기</strong>와, 여러 기기가 같은 주파수를 나눠 쓰기 위한 <strong>공유 규칙(DFS, LBT, 호핑)</strong>을 다룹니다. 특히 유럽 RED(무선기기 지침) 체계에서는 수신기 성능도 필수 요건이 되어, 수신기 시험의 비중이 커졌습니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  송신 시험이 “말을 적당한 목소리로 또박또박 하는가”라면, 수신 시험은 “<strong>작은 목소리도 알아듣고(감도)</strong>, 옆에서 누가 크게 떠들어도 <strong>내 대화에 집중할 수 있는가(블로킹·선택도)</strong>”입니다. DFS·LBT는 “<strong>말하기 전에 주변을 살피고, 더 중요한 사람(레이더)이 말하면 자리를 비켜 주는</strong>” 예절입니다.
</div>

<h2>수신기 시험 항목</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>무엇을 보나</th><th>측정 개념</th><th>적용 예</th></tr></thead>
<tbody>
<tr><td>수신기 스퓨리어스 (부차 발사)</td><td>수신 중에 새어 나오는 전파(국부발진기 누설 등)</td><td>수신 모드(송신 OFF)에서 스펙트럼 분석기로 전도 또는 방사 측정</td><td>EN 300 328, EN 301 893, 국내 기술기준의 부차적 전파발사</td></tr>
<tr><td>수신 감도 (Sensitivity)</td><td>원하는 신호를 얼마나 약한 레벨까지 받을 수 있는가</td><td>상대 기기/시험기 신호를 줄여가며 PER·BER 기준(예: PER 10%)을 만족하는 최소 레벨 확인</td><td>이동통신 단말(3GPP), 일부 ETSI 규격</td></tr>
<tr><td>블로킹 (Blocking)</td><td>대역 밖의 강한 신호가 있을 때도 원하는 신호를 받는가</td><td>원하는 신호(감도 근처) + 강한 방해 신호(CW 등)를 함께 넣고 PER 기준 만족 확인</td><td>EN 300 328 V2.x, EN 301 893, EN 300 440 등</td></tr>
<tr><td>인접채널 선택도 (ACS)</td><td>바로 옆 채널의 신호를 얼마나 잘 걸러내는가</td><td>원하는 신호 + 인접 채널 방해 변조 신호, 기준 성능 유지 확인</td><td>육상이동(EN 300 113), 이동통신(3GPP) 등</td></tr>
</tbody></table></div>

<h3>수신기 스퓨리어스</h3>
<p>수신기도 내부에 국부발진기(LO)와 클럭이 있어 약간의 전파를 냅니다. 시료를 <strong>수신 전용 모드(송신 금지)</strong>로 두고 송신기 스퓨리어스와 비슷한 방법으로 측정합니다. 한계는 송신기보다 훨씬 낮은 것이 일반적입니다(예: ETSI EN 300 328에서 30 MHz~1 GHz −57 dBm, 1 GHz~12.75 GHz −47 dBm 수준 — 최신판 확인). 시료가 비콘 등을 자동 송신하지 않는지 먼저 Zero span 등으로 확인하세요.</p>

<h3>수신 감도와 블로킹 (EN 300 328 V2.x 개념)</h3>
<p>EN 300 328은 V2.1.1부터 <strong>수신기 블로킹(Receiver blocking)</strong> 요건을 도입했습니다. 제조사가 선언한 성능 기준(예: PER ≤ 10%)을 만족하는 최소 수신 레벨(P<sub>min</sub>)을 먼저 찾고, 원하는 신호를 그보다 조금 높게(예: P<sub>min</sub> + 6 dB) 둔 상태에서 규격이 정한 주파수·레벨의 방해 신호를 넣어도 성능 기준을 유지하는지 확인합니다. 방해 신호의 주파수와 레벨은 <strong>수신기 등급(Receiver category)</strong>에 따라 다르므로 해당 판의 표를 따릅니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 210" role="img" aria-label="수신기 블로킹 시험 셋업">
  <defs><marker id="rtr-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="13" fill="var(--text)" text-anchor="middle">
    <rect x="15" y="20" width="170" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.8"/>
    <text x="100" y="44" font-weight="700" fill="var(--dg-ok)">원하는 신호</text><text x="100" y="62" font-size="11.5" fill="var(--text-3)">상대 기기 / 무선 시험기</text>
    <rect x="15" y="120" width="170" height="56" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="100" y="144" font-weight="700" fill="var(--dg-accent-2)">방해 신호 발생기</text><text x="100" y="162" font-size="11.5" fill="var(--text-3)">CW 등, 규격 주파수·레벨</text>
    <path d="M185 48 L235 48" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="235" y="30" width="80" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="275" y="53" font-size="12">가변 ATT</text>
    <path d="M315 48 L360 48 L360 84 L380 84" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <path d="M185 148 L235 148" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="235" y="130" width="80" height="36" rx="6" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/><text x="275" y="153" font-size="12">필터</text>
    <path d="M315 148 L360 148 L360 112 L380 112" fill="none" stroke="var(--dg-line)" stroke-width="2"/>
    <rect x="380" y="70" width="110" height="56" rx="8" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <text x="435" y="94" font-weight="700">결합기</text><text x="435" y="112" font-size="11.5" fill="var(--text-3)">(Combiner)</text>
    <path d="M490 98 L560 98" stroke="var(--dg-line)" stroke-width="2" marker-end="url(#rtr-arw)"/>
    <rect x="564" y="66" width="180" height="64" rx="8" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="654" y="92" font-weight="700" fill="var(--dg-accent)">시료 (수신 모드)</text><text x="654" y="112" font-size="11.5" fill="var(--text-3)">PER / 처리율 모니터링</text>
    <text x="435" y="200" font-size="12" fill="var(--text-3)">판정: 방해 신호가 있어도 PER ≤ 선언 기준(예: 10%) 유지</text>
  </g>
</svg>
<figcaption>그림 1. 수신기 블로킹 시험 개념 셋업. 방해 신호 발생기 쪽 필터는 발생기의 잡음이 원하는 신호 대역에 들어가지 않게 합니다.</figcaption>
</figure>

<h2>DFS — 5 GHz 레이더 회피</h2>
<p>5 GHz 대역 일부(예: 5 250~5 350 MHz, 5 470~5 725 MHz)는 기상·군사 레이더와 함께 씁니다. 그래서 이 대역을 쓰는 무선랜 등은 <strong>DFS(Dynamic Frequency Selection, 동적 주파수 선택)</strong> 기능으로 레이더를 감지하면 그 채널을 비워야 합니다. 시험은 시험실에서 규격이 정한 <strong>모의 레이더 펄스</strong>를 넣고 시료의 반응 시간을 측정합니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 250" role="img" aria-label="DFS 동작 타임라인">
  <defs><marker id="rtr-arw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <text x="60" y="60" text-anchor="end" fill="var(--text-2)">레이더</text>
    <text x="60" y="128" text-anchor="end" fill="var(--text-2)">시료 송신</text>
    <text x="60" y="144" text-anchor="end" font-size="11" fill="var(--text-3)">(채널 A)</text>
    <line x1="70" y1="170" x2="730" y2="170" stroke="var(--dg-line)" stroke-width="1.5" marker-end="url(#rtr-arw2)"/>
    <text x="720" y="188" font-size="11" fill="var(--text-3)">시간</text>

    <rect x="80" y="100" width="130" height="50" fill="var(--dg-fill-2)" stroke="var(--dg-ok)" stroke-dasharray="4 3"/>
    <text x="145" y="122" font-weight="700" fill="var(--dg-ok)">CAC</text>
    <text x="145" y="139" font-size="11" fill="var(--text-3)">예: 60 s 감시만</text>

    <g fill="var(--dg-accent)">
      <rect x="214" y="104" width="8" height="42"/><rect x="226" y="104" width="8" height="42"/><rect x="238" y="104" width="8" height="42"/>
      <rect x="250" y="104" width="8" height="42"/><rect x="262" y="104" width="8" height="42"/><rect x="274" y="104" width="8" height="42"/>
      <rect x="286" y="104" width="8" height="42"/>
      <rect x="306" y="104" width="4" height="42"/><rect x="330" y="104" width="4" height="42"/><rect x="362" y="104" width="3" height="42"/>
    </g>
    <text x="254" y="96" font-size="11" fill="var(--dg-accent)">정상 송신</text>

    <g stroke="var(--dg-accent-2)" stroke-width="2">
      <line x1="298" y1="72" x2="298" y2="42"/><line x1="302" y1="72" x2="302" y2="42"/><line x1="306" y1="72" x2="306" y2="42"/>
    </g>
    <text x="302" y="34" font-weight="700" fill="var(--dg-accent-2)">레이더 펄스 감지</text>
    <line x1="298" y1="72" x2="298" y2="200" stroke="var(--dg-accent-2)" stroke-dasharray="4 3"/>

    <path d="M300 200 L500 200" stroke="var(--dg-line)" stroke-width="1.3" marker-start="url(#rtr-arw2)" marker-end="url(#rtr-arw2)"/>
    <text x="400" y="218" font-weight="700">채널 이동 시간 (예: 10 s 이내)</text>
    <text x="400" y="234" font-size="11" fill="var(--text-3)">이 중 제어·관리용 짧은 송신 합계 = 채널 폐쇄 송신 시간</text>
    <line x1="500" y1="100" x2="500" y2="205" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>

    <rect x="505" y="100" width="215" height="50" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.5"/>
    <text x="612" y="122" font-weight="700" fill="var(--dg-accent-2)">비점유 기간</text>
    <text x="612" y="139" font-size="11" fill="var(--text-3)">예: 30분 동안 채널 A 사용 금지</text>
  </g>
</svg>
<figcaption>그림 2. DFS 동작 개념. 새 채널 사용 전 CAC로 레이더 유무를 확인하고, 운용 중 레이더를 감지하면 정해진 시간 안에 채널을 비운 뒤 일정 기간 다시 쓰지 않습니다(시간 축은 비례 아님).</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>파라미터</th><th>의미</th><th>대표값(예) — 최신 규격 확인</th></tr></thead>
<tbody>
<tr><td>CAC (Channel Availability Check)</td><td>새 채널 사용 전 레이더가 없는지 감시하는 시간</td><td>60 s (EU 기상레이더 대역 5 600~5 650 MHz는 더 긺, 예: 10분)</td></tr>
<tr><td>채널 이동 시간 (Channel Move Time)</td><td>레이더 감지 후 채널을 완전히 비우기까지의 시간</td><td>10 s</td></tr>
<tr><td>채널 폐쇄 송신 시간 (Channel Closing Transmission Time)</td><td>이동 시간 동안 허용되는 송신 합계</td><td>FCC: 200 ms + 이후 합계 60 ms / EU: 1 s 등</td></tr>
<tr><td>비점유 기간 (Non-Occupancy Period)</td><td>레이더가 감지된 채널을 다시 쓰지 못하는 기간</td><td>30분</td></tr>
<tr><td>검출 임계값 (Detection threshold)</td><td>이 레벨 이상의 레이더를 감지해야 함</td><td>EIRP에 따라 −62 ~ −64 dBm 등 (FCC 예)</td></tr>
</tbody></table></div>
<p>DFS는 <strong>마스터(AP)</strong>와 <strong>클라이언트(단말)</strong>의 요구 항목이 다릅니다. 클라이언트는 스스로 레이더를 감지하지 않아도 되는 대신 마스터의 지시에 따라 채널을 비워야 합니다. 시험 전에 시료의 역할(Master / Client with/without radar detection)을 제조사 신청서에서 확인하세요. 관련 문서: FCC KDB 905462, ETSI EN 301 893.</p>

<h2>적응성 — LBT와 매체 공유</h2>
<p>2.4 GHz, 5 GHz 비면허 대역은 누구나 쓰는 공용 도로입니다. ETSI 규격은 일정 출력 이상의 기기에 <strong>적응성(Adaptivity)</strong>을 요구합니다.</p>
<ul>
  <li><strong>LBT(Listen Before Talk)</strong> — 송신 전에 채널을 듣고(CCA, Clear Channel Assessment), 에너지가 임계값보다 높으면 송신을 미룹니다.</li>
  <li><strong>DAA(Detect And Avoid)</strong> — 다른 신호를 감지하면 해당 주파수를 일정 시간 피합니다(비-LBT 방식).</li>
  <li><strong>시험 방법 개념</strong> — 시료가 데이터를 송신하는 중에 규격이 정한 레벨의 방해 신호(예: 대역 제한 잡음)를 넣고, 시료가 정해진 시간 안에 송신을 멈추거나 줄이는지, 방해 신호가 있는 동안 짧은 제어 신호 외에는 송신하지 않는지 확인합니다.</li>
  <li><strong>임계값</strong> — 대표적으로 EN 300 328은 −70 dBm/MHz를 기준으로 시료 출력(EIRP)이 클수록 더 낮은(엄격한) 임계값을 적용합니다(최신판 확인).</li>
  <li><strong>예외(예)</strong> — EN 300 328에서 출력이 낮은 기기(예: 10 dBm EIRP 이하)는 적응성 요건이 면제되며, 적응성이 없는 기기는 매체 점유율(Medium Utilization) 한계를 대신 만족해야 합니다.</li>
</ul>

<h2>주파수 호핑 — 채널 수와 체류시간</h2>
<p>블루투스(Classic) 같은 <strong>주파수 호핑 확산 스펙트럼(FHSS)</strong> 기기는 여러 채널을 빠르게 옮겨 다니며 송신합니다. 한 채널에 오래 머물면 그 채널의 다른 사용자에게 간섭을 주므로, 규격은 <strong>호핑 채널 수</strong>, <strong>채널 간격</strong>, <strong>체류시간(Dwell time, 점유 시간)</strong>을 정합니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="주파수 호핑 시간-주파수 그림">
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <rect x="80" y="30" width="640" height="160" fill="none" stroke="var(--dg-line)" stroke-width="1.2"/>
    <g stroke="var(--dg-muted)" stroke-width="0.5" stroke-dasharray="2 3">
      <line x1="80" y1="50" x2="720" y2="50"/><line x1="80" y1="70" x2="720" y2="70"/><line x1="80" y1="90" x2="720" y2="90"/>
      <line x1="80" y1="110" x2="720" y2="110"/><line x1="80" y1="130" x2="720" y2="130"/><line x1="80" y1="150" x2="720" y2="150"/><line x1="80" y1="170" x2="720" y2="170"/>
    </g>
    <g fill="var(--dg-accent)" opacity="0.75">
      <rect x="82" y="92" width="36" height="16"/><rect x="162" y="52" width="36" height="16"/>
      <rect x="202" y="172" width="36" height="16"/><rect x="242" y="112" width="36" height="16"/><rect x="282" y="32" width="36" height="16"/>
      <rect x="362" y="72" width="36" height="16"/><rect x="442" y="92" width="36" height="16"/><rect x="482" y="32" width="36" height="16"/>
      <rect x="522" y="52" width="36" height="16"/><rect x="562" y="112" width="36" height="16"/><rect x="602" y="172" width="36" height="16"/><rect x="642" y="132" width="36" height="16"/>
    </g>
    <g fill="var(--dg-accent-2)">
      <rect x="122" y="152" width="36" height="16"/><rect x="322" y="152" width="36" height="16"/><rect x="402" y="152" width="36" height="16"/><rect x="682" y="152" width="36" height="16"/>
    </g>
    <text x="40" y="114" fill="var(--text-3)">채널</text>
    <text x="400" y="208" fill="var(--text-3)">시간 → (한 칸 = 한 번의 호핑 체류)</text>
    <text x="400" y="228" font-weight="700" fill="var(--dg-accent-2)">주황색 = 특정 한 채널의 점유 → 관측 기간 동안 합산한 시간이 체류시간</text>
  </g>
</svg>
<figcaption>그림 3. 주파수 호핑의 시간-주파수 그림(개념). 체류시간은 한 채널을 골라 관측 기간 동안의 점유 시간을 합산해 구합니다.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>FCC 15.247(a)(1) 2.4 GHz 요건(예)</th><th>측정 방법(예)</th></tr></thead>
<tbody>
<tr><td>호핑 채널 수</td><td>최소 15개 (출력 1 W 한계는 75개 이상일 때, 그 미만은 0.125 W)</td><td>호핑 모드 ON, 대역 전체 Span, Max hold로 채널 개수를 셈</td></tr>
<tr><td>채널 간격</td><td>25 kHz 또는 20 dB 대역폭 중 큰 값 이상 (출력 125 mW 이하는 20 dB BW의 2/3 허용)</td><td>인접 두 채널을 화면에 놓고 마커-델타</td></tr>
<tr><td>체류시간 (평균 점유 시간)</td><td>0.4 s × 채널 수 기간 동안 한 채널 점유 합계 ≤ 0.4 s</td><td>Zero span으로 펄스 폭·관측 시간 내 횟수 측정</td></tr>
</tbody></table></div>
<p><strong>계산 예 (블루투스 DH5 패킷, 79채널)</strong> — 펄스 폭 약 2.9 ms, DH5는 6 슬롯(송신 5 + 수신 1)마다 한 번 호핑하므로 초당 1 600 / 6 ≈ 266.7 홉, 채널당 초당 266.7 / 79 ≈ 3.38 회. 관측 기간 0.4 × 79 = 31.6 s 동안 3.38 × 31.6 ≈ 107 회 → 체류시간 ≈ 107 × 2.9 ms ≈ <strong>0.31 s</strong> (한계 0.4 s, 마진 약 0.09 s).</p>
<div class="callout note">
  <span class="callout-title">블루투스 LE는 다릅니다</span>
  블루투스 LE(BLE)는 2 MHz 간격 40채널을 쓰며, 데이터 채널 호핑이 있어도 FCC에서는 보통 <strong>디지털 변조(DTS)</strong> 기준으로 시험하는 경우가 많습니다. 기기 방식에 따라 적용 조항을 먼저 결정하세요(KDB 558074 참고).
</div>

<h2>주파수 사용 조건</h2>
<p>기술기준에는 측정값 한계 외에도 <strong>사용 조건</strong>이 붙습니다. 예: 특정 5 GHz 대역은 실내 전용, 특정 대역은 DFS·TPC(송신 출력 제어) 기능 필수, 드론·차량 등 용도 제한 등. 시험소는 이런 조건이 시료 설정(국가 코드, 채널 목록)에 반영됐는지 <strong>채널 목록과 소프트웨어 설정을 확인하고 기록</strong>합니다. 국가마다 다르므로 최신 고시를 확인하세요.</p>

<h2>기록 예시</h2>
<div class="table-wrap"><table class="data">
<thead><tr><th>항목</th><th>조건</th><th class="num">측정값</th><th class="num">한계(예)</th><th class="num">마진</th><th>판정</th></tr></thead>
<tbody>
<tr><td>수신기 스퓨리어스</td><td>Rx 모드, 30 MHz~12.75 GHz, 최대 지점 4 874 MHz</td><td class="num">−61.2 dBm</td><td class="num">−47.0 dBm</td><td class="num">14.2 dB</td><td>적합</td></tr>
<tr><td>DFS 채널 이동 시간</td><td>Ch 100 (5 500 MHz), 레이더 Type 0</td><td class="num">1.8 s</td><td class="num">≤ 10 s</td><td class="num">8.2 s</td><td>적합</td></tr>
<tr><td>DFS 폐쇄 송신 시간</td><td>동일</td><td class="num">42 ms</td><td class="num">≤ 60 ms (합계)</td><td class="num">18 ms</td><td>적합</td></tr>
<tr><td>FHSS 체류시간</td><td>DH5, Mid 채널</td><td class="num">0.31 s</td><td class="num">≤ 0.4 s</td><td class="num">0.09 s</td><td>적합</td></tr>
<tr><td>호핑 채널 수</td><td>호핑 ON, 2 400~2 483.5 MHz</td><td class="num">79</td><td class="num">≥ 15</td><td class="num">64</td><td>적합</td></tr>
</tbody></table></div>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">자주 틀리는 부분</span>
  <ul>
    <li><strong>수신기 스퓨리어스 측정 중 시료가 송신</strong> — 비콘·프로브 요청이 섞이면 송신 신호를 수신기 발사로 오인합니다. 수신 전용 모드를 확인하세요.</li>
    <li><strong>블로킹 시험에서 방해 신호원의 잡음 무시</strong> — 신호발생기의 위상잡음·광대역 잡음이 원하는 채널에 들어가면 시료가 아니라 셋업 때문에 실패합니다. 필터를 사용합니다.</li>
    <li><strong>DFS 시료 역할 혼동</strong> — 마스터/클라이언트에 따라 시험 항목이 다릅니다.</li>
    <li><strong>체류시간을 한 펄스 폭으로 착각</strong> — 체류시간은 관측 기간 동안의 <strong>합계</strong>입니다.</li>
    <li><strong>호핑 채널 수 측정 시 AFH로 채널이 줄어든 상태</strong> — 적응형 호핑(AFH)이 채널을 제외하지 않도록 시험 모드를 확인합니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '수신기 블로킹 시험의 목적으로 가장 알맞은 것은?',
      options: ['수신 중 새어 나오는 전파를 측정한다', '대역 밖의 강한 방해 신호가 있어도 원하는 신호를 성능 기준대로 수신하는지 확인한다', '송신 출력을 최대로 한다', '수신기의 소비 전력을 측정한다'],
      answer: 1, explain: '블로킹은 강한 방해 신호 존재 시 수신 성능(PER 등)이 유지되는지를 봅니다. 수신 중 새는 전파는 수신기 스퓨리어스 항목입니다.' },
    { q: 'DFS에서 레이더가 감지된 채널을 일정 기간(예: 30분) 다시 사용하지 못하게 하는 기간은?',
      options: ['CAC', '채널 이동 시간', '비점유 기간(Non-Occupancy Period)', '체류시간'],
      answer: 2, explain: '비점유 기간 동안 해당 채널을 사용할 수 없습니다. CAC는 사용 전 감시, 채널 이동 시간은 감지 후 채널을 비우는 시간입니다.' },
    { q: 'FHSS 체류시간(Dwell time)에 대한 설명으로 옳은 것은?',
      options: ['한 채널에서의 관측 기간 동안 점유 시간의 합계', '펄스 하나의 폭', '호핑 채널 수 × 채널 간격', '한 번 호핑하는 데 걸리는 시간'],
      answer: 0, explain: '체류시간은 규정된 관측 기간(예: 0.4 s × 채널 수) 동안 한 채널을 점유한 시간의 합계입니다.' },
    { q: 'LBT(Listen Before Talk)의 동작으로 옳은 것은?',
      options: ['항상 최대 출력으로 먼저 송신한다', '레이더가 감지되면 30분간 송신을 멈춘다', '호핑 채널을 79개로 늘린다', '송신 전 채널 에너지를 감지해 임계값을 넘으면 송신을 미룬다'],
      answer: 3, explain: 'LBT는 송신 전 CCA로 채널이 비어 있는지 확인하고, 사용 중이면 송신을 연기해 다른 기기와 매체를 공유합니다.' }
  ],
  refs: [
    { title: 'ETSI EN 300 328', url: 'https://www.etsi.org/standards', note: '2.4 GHz — 적응성, 수신기 블로킹, 호핑 요건' },
    { title: 'ETSI EN 301 893', url: 'https://www.etsi.org/standards', note: '5 GHz RLAN — DFS, 적응성, 수신기 요건' },
    { title: 'FCC KDB — 905462 (DFS), 789033 (U-NII), 558074 (DTS)', url: 'https://apps.fcc.gov/oetcf/kdb/', note: 'KDB 번호로 검색' },
    { title: 'FCC 47 CFR Part 15 (15.247, 15.407)', url: 'https://www.fcc.gov', note: 'FHSS 요건, U-NII DFS 요건' },
    { title: '국립전파연구원 (RRA)', url: 'https://www.rra.go.kr', note: '국내 5 GHz 대역 사용 조건, DFS 기술기준' }
  ]
});

COURSE.addLesson({
  id: 'rftest-radiated',
  module: 'rftest',
  order: 7,
  title: '방사 무선 시험',
  minutes: 25,
  level: '실무',
  summary: '챔버에서의 방사 스퓨리어스 측정, 치환법(Substitution method)으로 ERP/EIRP 구하기, 안테나 높이·턴테이블 최대값 탐색, 편파, 측정거리 보정, 이동통신 단말 OTA(TRP/TIS) 개념을 다룹니다.',
  objectives: [
    '방사 시험 셋업(턴테이블, 안테나 마스트, 수신 안테나, 편파)을 설명할 수 있다.',
    '치환법의 두 단계를 이해하고 ERP/EIRP를 계산할 수 있다.',
    '전계강도와 EIRP 변환, 측정거리 보정을 할 수 있다.',
    'TRP와 TIS의 의미와 OTA 시험의 목적을 설명할 수 있다.'
  ],
  body: `
<p>방사 시험은 시료가 <strong>안테나와 케이스를 통해 실제 공간으로 내보내는 전파</strong>를 측정합니다. 전도 시험이 “파이프 안의 물을 재는 것”이라면, 방사 시험은 “스프링클러가 사방으로 뿌리는 물을 재는 것”입니다. 방향마다 세기가 다르므로 <strong>가장 센 방향을 찾아내는 과정</strong>이 핵심입니다.</p>

<div class="callout easy">
  <span class="callout-title">쉽게 말하면</span>
  손전등이 얼마나 밝은지 재려면, 빛이 가장 센 방향을 찾아 측정기를 들이대야 합니다. 방사 시험에서는 시료를 <strong>턴테이블로 돌리고</strong>, 수신 안테나를 <strong>위아래로 움직이고</strong>, 안테나를 <strong>수평·수직으로 돌려 보며</strong> 가장 센 값을 찾습니다. 그리고 “이 세기를 내려면 이상적인 안테나에 얼마의 전력을 넣어야 하나?”로 바꿔 표현한 것이 EIRP입니다.
</div>

<h2>방사 시험 환경과 최대값 탐색</h2>
<ul>
  <li><strong>챔버</strong> — 반무반사실(SAC, 바닥 반사 있음) 또는 전무반사실(FAR). 1 GHz 이상 측정은 바닥에 흡수체를 깔거나 전무반사 조건을 사용하는 것이 일반적입니다(ANSI C63.10 등 참고).</li>
  <li><strong>측정거리</strong> — 대표적으로 3 m (그 외 1 m, 5 m, 10 m). 거리는 시료 경계와 안테나 기준점 사이로 정의되므로 규격 정의를 확인합니다.</li>
  <li><strong>턴테이블 회전</strong> — 0~360°를 돌려 최대 방향 탐색(예: 사전 측정은 연속 회전 또는 15°/45° 간격, 최종은 최대 부근 세밀하게).</li>
  <li><strong>안테나 높이 스캔</strong> — 반무반사실에서는 바닥 반사파와 직접파가 합쳐져 높이에 따라 값이 달라지므로 예: 1~4 m를 스캔합니다.</li>
  <li><strong>편파</strong> — 수신 안테나를 <strong>수평(H)·수직(V)</strong> 두 편파로 모두 측정하고 큰 값을 채택합니다.</li>
  <li><strong>시료 자세</strong> — 휴대 기기는 X·Y·Z 세 방향 자세 중 최악을 찾기도 합니다(규격·KDB 확인).</li>
</ul>

<h2>치환법으로 ERP/EIRP 구하기</h2>
<p>스펙트럼 분석기가 읽은 수신 레벨을 바로 EIRP로 바꾸려면 안테나 계수, 경로 손실, 챔버 특성을 모두 정확히 알아야 합니다. <strong>치환법(Substitution method)</strong>은 이 문제를 “같은 수신 레벨을 만드는 기지(旣知) 전력”으로 바꿔 풀어, 챔버 특성의 영향을 상쇄합니다. ETSI 규격과 FCC 면허 대역 기기(ANSI C63.26) 등에서 널리 쓰입니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 330" role="img" aria-label="치환법 2단계 셋업">
  <defs><marker id="rtd-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--dg-line)"/></marker></defs>
  <g font-size="12" fill="var(--text)" text-anchor="middle">
    <rect x="10" y="10" width="360" height="310" rx="10" fill="none" stroke="var(--dg-line)"/>
    <text x="190" y="32" font-weight="700" font-size="14">1단계: 시료 측정</text>
    <rect x="160" y="44" width="120" height="34" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="220" y="66" font-weight="700">분석기</text>
    <ellipse cx="100" cy="258" rx="62" ry="14" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="100" y1="244" x2="100" y2="228" stroke="var(--dg-line)" stroke-width="3"/>
    <rect x="76" y="198" width="48" height="30" rx="4" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/>
    <text x="100" y="218" font-weight="700" fill="var(--dg-accent)">EUT</text>
    <text x="100" y="290" font-size="11" fill="var(--text-3)">턴테이블 0~360°</text>
    <line x1="300" y1="92" x2="300" y2="286" stroke="var(--dg-line)" stroke-width="3"/>
    <polygon points="300,140 268,126 268,166 300,152" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="330" y="150" font-size="11" fill="var(--text-3)">H / V</text>
    <path d="M250 100 L250 240" stroke="var(--dg-ok)" stroke-width="1.4" marker-start="url(#rtd-arw)" marker-end="url(#rtd-arw)"/>
    <text x="226" y="176" font-size="11" fill="var(--dg-ok)" text-anchor="end">높이 1~4 m</text>
    <path d="M300 128 L320 128 L320 61 L280 61" fill="none" stroke="var(--dg-line)" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#rtd-arw)"/>
    <path d="M100 306 L300 306" stroke="var(--dg-line)" stroke-width="1.2" marker-start="url(#rtd-arw)" marker-end="url(#rtd-arw)"/>
    <text x="200" y="300" font-size="11" fill="var(--text-3)">측정거리 (예: 3 m)</text>
    <text x="100" y="186" font-size="11" fill="var(--dg-accent)">최대값 탐색 → 레벨 R 기록</text>

    <rect x="390" y="10" width="360" height="310" rx="10" fill="none" stroke="var(--dg-line)"/>
    <text x="570" y="32" font-weight="700" font-size="14">2단계: 치환 (Substitution)</text>
    <rect x="540" y="44" width="120" height="34" rx="6" fill="var(--dg-fill)" stroke="var(--dg-line)"/>
    <text x="600" y="66" font-weight="700">분석기</text>
    <rect x="400" y="44" width="120" height="34" rx="6" fill="var(--dg-fill)" stroke="var(--dg-accent-2)" stroke-width="1.8"/>
    <text x="460" y="66" font-weight="700" fill="var(--dg-accent-2)">신호발생기</text>
    <ellipse cx="480" cy="258" rx="62" ry="14" fill="var(--dg-fill-2)" stroke="var(--dg-line)"/>
    <line x1="480" y1="244" x2="480" y2="214" stroke="var(--dg-line)" stroke-width="3"/>
    <path d="M444 210 L474 210 M486 210 L516 210" stroke="var(--dg-accent-2)" stroke-width="3"/>
    <text x="522" y="228" font-size="11" text-anchor="start" fill="var(--dg-accent-2)">치환 안테나(G)</text>
    <path d="M460 78 L460 150 L480 150 L480 206" fill="none" stroke="var(--dg-accent-2)" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#rtd-arw)"/>
    <text x="428" y="120" font-size="11" fill="var(--text-3)">케이블 L</text>
    <line x1="680" y1="92" x2="680" y2="286" stroke="var(--dg-line)" stroke-width="3"/>
    <polygon points="680,140 648,126 648,166 680,152" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <text x="712" y="150" font-size="11" fill="var(--text-3)">H / V</text>
    <path d="M630 100 L630 240" stroke="var(--dg-ok)" stroke-width="1.4" marker-start="url(#rtd-arw)" marker-end="url(#rtd-arw)"/>
    <path d="M680 128 L700 128 L700 61 L660 61" fill="none" stroke="var(--dg-line)" stroke-width="1.3" stroke-dasharray="4 3" marker-end="url(#rtd-arw)"/>
    <text x="570" y="296" font-size="11" fill="var(--dg-accent-2)" font-weight="700">분석기 레벨이 R과 같아지도록 SG 출력 P 조정</text>
    <text x="570" y="312" font-size="11" fill="var(--text-3)">EIRP = P − L + G(dBi)</text>
  </g>
</svg>
<figcaption>그림 1. 치환법의 두 단계. 같은 위치·같은 수신 조건에서 시료를 기지 안테나로 바꾸기 때문에 챔버·수신 경로의 영향이 상쇄됩니다.</figcaption>
</figure>

<ol class="steps">
  <li><strong>1단계: 시료 최대값 탐색</strong>시료를 턴테이블 위(규정 높이)에 두고 송신시킵니다. 턴테이블 회전·안테나 높이 스캔·H/V 편파를 바꿔 가며 해당 주파수의 최대 수신 레벨 R을 찾고, 그때의 각도·높이·편파를 기록합니다.</li>
  <li><strong>2단계: 치환 안테나 설치</strong>시료를 치우고 같은 위치(시료 기준점)에 이득을 아는 치환 안테나(다이폴·혼 안테나)를 놓습니다. 편파는 1단계 최대값의 편파와 같게 합니다.</li>
  <li><strong>SG 출력 조정</strong>신호발생기로 같은 주파수를 넣고, 수신 안테나 높이를 다시 스캔해 최대가 되게 한 뒤, 분석기 레벨이 R과 같아지도록 SG 출력 P를 조정합니다.</li>
  <li><strong>계산</strong>EIRP = P − L(치환 안테나까지 케이블 손실) + G(치환 안테나 이득, dBi). ERP가 필요하면 다이폴 기준으로 환산합니다.</li>
  <li><strong>판정·기록</strong>한계(dBm ERP/EIRP)와 비교해 마진을 계산하고, 주파수·편파·높이·각도·P·L·G를 모두 기록합니다.</li>
</ol>
<div class="formula">EIRP(dBm) = P<sub>SG</sub>(dBm) − L<sub>cable</sub>(dB) + G<sub>sub</sub>(dBi) &nbsp;&nbsp;|&nbsp;&nbsp; ERP(dBm) = EIRP(dBm) − 2.15</div>
<p>예: P<sub>SG</sub> = −28.4 dBm, L = 3.1 dB, G = 8.2 dBi (혼) → EIRP = −28.4 − 3.1 + 8.2 = <strong>−23.3 dBm</strong>, ERP = −25.45 dBm.</p>

<h2>전계강도 방식과 측정거리 보정</h2>
<p>FCC Part 15 비면허 기기처럼 한계가 <strong>전계강도(dBµV/m)</strong>로 정해진 경우는 치환 대신 안테나 계수(AF)와 케이블 손실로 전계강도를 직접 구합니다.</p>
<div class="formula">E(dBµV/m) = 수신 레벨(dBµV) + AF(dB/m) + 케이블 손실(dB) − 프리앰프 이득(dB)</div>
<p>전계강도와 EIRP는 원역장(Far-field) 자유공간 가정에서 서로 변환할 수 있습니다.</p>
<div class="formula">EIRP(dBm) = E(dBµV/m) + 20·log<sub>10</sub>(d) − 104.8 &nbsp;&nbsp; (d: 거리 m) &nbsp;→ 3 m에서 EIRP ≈ E − 95.2</div>
<p>한계가 다른 거리(예: 10 m)로 정해졌는데 3 m에서 측정했다면 거리 보정을 합니다. 전계가 거리에 반비례(1/d)한다고 가정하면:</p>
<div class="formula">E(d<sub>2</sub>) = E(d<sub>1</sub>) − 20·log<sub>10</sub>(d<sub>2</sub> / d<sub>1</sub>) &nbsp;&nbsp; 예: 3 m → 10 m 환산 시 −10.5 dB</div>
<div class="callout warn">
  <span class="callout-title">거리 보정은 규격이 허용하는 방식으로</span>
  30 MHz 미만의 근역장 영역 등은 1/d 가정이 맞지 않아 규격이 다른 보정(예: 40 dB/decade)을 정하기도 합니다. 반드시 적용 규격의 외삽(Extrapolation) 규칙을 따르세요.
</div>

<h3>방사 스퓨리어스 측정 설정 (예)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>설정</th><th>30 MHz ~ 1 GHz (예)</th><th>1 GHz 이상 (예)</th></tr></thead>
<tbody>
<tr><td>수신 안테나</td><td>바이코니컬 / 로그주기 / 복합(바이로그)</td><td>혼(Horn) 안테나</td></tr>
<tr><td>RBW / VBW</td><td>100 kHz 또는 120 kHz / ≥ 3 × RBW</td><td>1 MHz / ≥ 3 × RBW (FCC 평균값은 규정 방법)</td></tr>
<tr><td>Detector</td><td>Peak (사전) → QP 또는 RMS (최종, 규격 지정)</td><td>Peak 및 Average/RMS</td></tr>
<tr><td>Trace</td><td>Max hold</td><td>Max hold</td></tr>
<tr><td>프리앰프 · 필터</td><td>필요 시 프리앰프</td><td>프리앰프 + 기본파 노치/고역통과 필터</td></tr>
<tr><td>탐색</td><td colspan="2">턴테이블 0~360°, 높이 예: 1~4 m, H/V 편파, 시료 자세</td></tr>
</tbody></table></div>

<h3>기록 예시 (치환법, ETSI 방사 스퓨리어스)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th class="num">주파수(MHz)</th><th>편파</th><th class="num">높이(m)</th><th class="num">각도(°)</th><th class="num">P<sub>SG</sub>(dBm)</th><th class="num">L(dB)</th><th class="num">G(dBi)</th><th class="num">EIRP(dBm)</th><th class="num">한계(dBm, 예)</th><th class="num">마진(dB)</th><th>판정</th></tr></thead>
<tbody>
<tr><td class="num">4 874</td><td>V</td><td class="num">1.4</td><td class="num">135</td><td class="num">−48.6</td><td class="num">4.2</td><td class="num">9.8</td><td class="num">−43.0</td><td class="num">−30.0</td><td class="num">13.0</td><td>적합</td></tr>
<tr><td class="num">7 311</td><td>H</td><td class="num">1.1</td><td class="num">270</td><td class="num">−56.9</td><td class="num">5.3</td><td class="num">10.6</td><td class="num">−51.6</td><td class="num">−30.0</td><td class="num">21.6</td><td>적합</td></tr>
</tbody></table></div>

<h2>이동통신 단말 OTA — TRP와 TIS</h2>
<p>스마트폰 같은 이동통신 단말은 안테나 성능이 곧 통화 품질입니다. 이동통신사·업계(예: CTIA 인증)와 3GPP는 단말의 <strong>OTA(Over-The-Air)</strong> 성능을 측정합니다. 한 방향이 아니라 <strong>구 전체 방향</strong>을 측정해 합산·평균하는 것이 특징입니다.</p>
<figure class="diagram">
<svg viewBox="0 0 760 240" role="img" aria-label="OTA 구면 측정 개념">
  <g font-size="12.5" fill="var(--text)" text-anchor="middle">
    <circle cx="180" cy="120" r="95" fill="var(--dg-fill-2)" stroke="var(--dg-line)" stroke-width="1.5"/>
    <ellipse cx="180" cy="120" rx="95" ry="28" fill="none" stroke="var(--dg-muted)"/>
    <ellipse cx="180" cy="72" rx="80" ry="22" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <ellipse cx="180" cy="168" rx="80" ry="22" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <ellipse cx="180" cy="120" rx="30" ry="95" fill="none" stroke="var(--dg-muted)"/>
    <ellipse cx="180" cy="120" rx="68" ry="95" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
    <rect x="170" y="100" width="20" height="40" rx="4" fill="var(--dg-accent)"/>
    <g fill="var(--dg-accent-2)">
      <circle cx="180" cy="25" r="4"/><circle cx="250" cy="55" r="4"/><circle cx="275" cy="120" r="4"/><circle cx="250" cy="185" r="4"/>
      <circle cx="180" cy="215" r="4"/><circle cx="110" cy="185" r="4"/><circle cx="85" cy="120" r="4"/><circle cx="110" cy="55" r="4"/>
      <circle cx="210" cy="92" r="3"/><circle cx="150" cy="148" r="3"/><circle cx="240" cy="140" r="3"/><circle cx="120" cy="98" r="3"/>
    </g>
    <text x="180" y="236" font-size="11" fill="var(--text-3)">θ·φ 격자(예: 15° 또는 30° 간격)의 각 지점에서 측정</text>

    <rect x="330" y="30" width="410" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="1.5"/>
    <text x="535" y="56" font-weight="700" fill="var(--dg-accent)">TRP (Total Radiated Power)</text>
    <text x="535" y="78" font-size="12" fill="var(--text-2)">모든 방향의 EIRP를 구면 적분 → 실제로 공간에 나간 총 전력</text>
    <text x="535" y="98" font-size="12" fill="var(--text-3)">송신 성능 (높을수록 좋음, 최소 요구치와 비교)</text>
    <rect x="330" y="130" width="410" height="80" rx="10" fill="var(--dg-fill)" stroke="var(--dg-ok)" stroke-width="1.5"/>
    <text x="535" y="156" font-weight="700" fill="var(--dg-ok)">TIS (Total Isotropic Sensitivity)</text>
    <text x="535" y="178" font-size="12" fill="var(--text-2)">각 방향의 수신 감도(EIS)를 구면 평균한 값</text>
    <text x="535" y="198" font-size="12" fill="var(--text-3)">수신 성능 (dBm, 낮을수록 좋음 — 더 약한 신호도 수신)</text>
  </g>
</svg>
<figcaption>그림 2. OTA 측정 개념. 단말을 구 중심에 두고 여러 방향·두 편파에서 측정해 TRP(송신)와 TIS(수신)를 구합니다.</figcaption>
</figure>
<ul>
  <li><strong>측정 조건</strong> — 자유공간뿐 아니라 머리·손 팬텀(Head/Hand phantom)을 사용한 조건도 측정합니다(예: CTIA OTA Test Plan).</li>
  <li><strong>시험 장비</strong> — 무선통신 시험기(Call box)로 단말과 호를 연결한 상태에서, 챔버의 측정 안테나와 포지셔너(또는 다중 프로브)를 이용합니다.</li>
  <li><strong>5G 밀리미터파(FR2)</strong> — 안테나가 모듈에 일체화되어 커넥터가 없으므로 출력·스퓨리어스 등 적합성 시험 자체를 OTA로 수행합니다(예: 3GPP TS 38.521-2).</li>
  <li><strong>인증과의 관계</strong> — TRP/TIS는 주로 사업자 인증·성능 시험 항목이며, 규제(KC·FCC) 한계와는 목적이 다릅니다. 다만 TRP 측정 기술은 방사 출력 확인에도 쓰입니다.</li>
</ul>

<h2>흔한 실수</h2>
<div class="callout warn">
  <span class="callout-title">방사 시험에서 자주 하는 실수</span>
  <ul>
    <li><strong>한 편파만 측정</strong> — H/V 중 큰 값이 다른 편파에서 나올 수 있습니다.</li>
    <li><strong>치환 시 편파·높이 불일치</strong> — 2단계에서 1단계 최대값과 같은 편파를 쓰고, 높이도 다시 최대화해야 합니다.</li>
    <li><strong>치환 안테나 이득 단위 혼동</strong> — dBd와 dBi를 섞으면 2.15 dB 오차가 생깁니다. ERP/EIRP 기준도 확인하세요.</li>
    <li><strong>주변 신호(Ambient) 오인</strong> — 시료 OFF 상태로 배경 측정을 먼저 합니다. 챔버 문이 제대로 닫혔는지도 확인합니다.</li>
    <li><strong>시료 케이블 배치 미기록</strong> — 전원·USB 케이블 배치에 따라 방사 레벨이 바뀝니다. 사진으로 배치를 남기세요.</li>
    <li><strong>프리앰프 과입력</strong> — 기본파가 프리앰프를 포화시키면 가짜 고조파가 생깁니다. 노치/고역통과 필터를 프리앰프 앞에 둡니다.</li>
  </ul>
</div>
`,
  quiz: [
    { q: '치환법에서 신호발생기 출력 P = −30.0 dBm, 케이블 손실 L = 2.0 dB, 치환 안테나 이득 G = 7.0 dBi 일 때 EIRP는?',
      options: ['−39.0 dBm', '−25.0 dBm', '−21.0 dBm', '−35.0 dBm'],
      answer: 1, explain: 'EIRP = P − L + G = −30.0 − 2.0 + 7.0 = −25.0 dBm 입니다.' },
    { q: 'EIRP가 −20.0 dBm일 때 ERP는?',
      options: ['−22.15 dBm', '−17.85 dBm', '−20.0 dBm', '−23.0 dBm'],
      answer: 0, explain: 'ERP는 반파장 다이폴(2.15 dBi) 기준이므로 ERP = EIRP − 2.15 = −22.15 dBm 입니다.' },
    { q: '반무반사실에서 수신 안테나 높이를 1~4 m로 스캔하는 주된 이유는?',
      options: ['안테나 케이블 길이를 맞추기 위해', '시료의 편파를 바꾸기 위해', '바닥 반사파와 직접파의 합성으로 높이에 따라 값이 달라지므로 최대값을 찾기 위해', '측정거리를 늘리기 위해'],
      answer: 2, explain: '반사 바닥이 있는 환경에서는 직접파와 반사파가 보강·상쇄되어 높이에 따라 수신 레벨이 달라지므로 최대값을 찾기 위해 스캔합니다.' },
    { q: '3 m 거리에서 전계강도 E = 60 dBµV/m 로 측정되었다. 자유공간 가정의 EIRP로 가장 가까운 값은?',
      options: ['−60 dBm', '+35 dBm', '−104.8 dBm', '−35.2 dBm'],
      answer: 3, explain: 'EIRP = E + 20·log(3) − 104.8 ≈ 60 + 9.5 − 104.8 = −35.3 dBm, 즉 약 −35.2 dBm 입니다.' },
    { q: 'OTA 시험의 TIS(Total Isotropic Sensitivity)에 대한 설명으로 옳은 것은?',
      options: ['모든 방향의 수신 감도를 구면 평균한 값으로, 낮을수록 수신 성능이 좋다', '모든 방향의 송신 전력을 합산한 값이다', '한 방향의 최대 전계강도이다', '스퓨리어스 발사 총량이다'],
      answer: 0, explain: 'TIS는 각 방향의 수신 감도(EIS)를 구면 평균한 값(dBm)으로, 값이 낮을수록 더 약한 신호도 수신할 수 있다는 뜻입니다. 송신 합산은 TRP입니다.' }
  ],
  refs: [
    { title: 'ETSI Standards', url: 'https://www.etsi.org/standards', note: '방사 측정·치환법 절차 (EN 300 328, EN 301 893 등의 방사 시험 부분)' },
    { title: 'FCC KDB', url: 'https://apps.fcc.gov/oetcf/kdb/', note: '558074(DTS), 789033(U-NII)의 방사 측정 관련 지침' },
    { title: 'ETS-Lindgren — Chambers & OTA', url: 'https://www.ets-lindgren.com', note: '무반사실, 안테나, OTA 시스템 자료' },
    { title: 'Rohde & Schwarz — OTA testing', url: 'https://www.rohde-schwarz.com', note: 'OTA·방사 측정 응용 자료' },
    { title: '3GPP', url: 'https://www.3gpp.org', note: '단말 RF 적합성 시험 규격(예: TS 38.521 계열) 검색' }
  ]
});
