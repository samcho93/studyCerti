# 인증 시험 아카데미

무선(RF)·SAR·EMC·KC 인증 시험 업무를 시작하는 **신입사원 교육용 웹 강의 사이트**입니다.

- 사이트: https://samcho93.github.io/studyCerti/
- 빌드 과정이 없는 정적 사이트입니다. `index.html`을 더블클릭해서 열어도 동작합니다(사내망 파일 서버, GitHub Pages 모두 가능).

## 구성

| 모듈 | 내용 |
|---|---|
| 00 과정 안내 | 인증 업무 개요, 시험실 안전 |
| 01 무선 기초 | 주파수·파장, dB/dBm, 변조, 안테나, 전파 전파, 무선 기술 요약 |
| 02 인증 제도 | KC 적합성평가, FCC, CE(RED), 기타 국가, 시험기관 인정 |
| 03 시험 장비 | 스펙트럼 분석기, 신호원·파워미터·통신 시험기, 챔버, 안테나, EMC 장비, SAR 시스템 |
| 04 무선 시험 | 출력, 점유대역폭, 주파수 허용편차, 스퓨리어스, 수신기·DFS, 방사 시험 |
| 05 EMC 시험 | CE, RE, ESD·EFT·서지, RS·CS, 무선기기 EMC |
| 06 SAR | SAR 개념, 측정 시스템, 조직등가액·시스템 체크, 시험 절차, 스케일링, 전력밀도 |
| 07 절차·기록·성적서 | 업무 흐름, 시료 관리, 시험 계획, 기록 방법, 측정 불확도, 성적서 |

학습 도구: RF 계산기, 용어집, 참고자료 링크, 인쇄용 양식(`forms/`).

## 폴더 구조

```
index.html                  # 앱 셸
assets/css/style.css        # 스타일 (라이트/다크)
assets/js/course.js         # 강의 레지스트리 (모듈 정의)
assets/js/app.js            # 라우터, 진도, 퀴즈, 검색, 용어집
assets/js/tools.js          # RF 계산기
assets/js/content/*.js      # 강의 콘텐츠 (모듈별 1파일)
assets/js/content/glossary.js   # 용어집
assets/js/content/resources.js  # 참고자료 링크
assets/img/                 # 그림 (equip/ 장비 일러스트, lab/ 사내 사진용)
forms/                      # 인쇄용 교육 양식
docs/                       # 사내 문서(PDF 등) 보관용
```

## 강의 추가·수정 방법

1. `assets/js/content/` 의 해당 모듈 파일을 열고 `COURSE.addLesson({...})` 블록을 복사해 수정합니다.
2. 새 파일을 만들었다면 `index.html` 의 콘텐츠 `<script>` 목록에 추가합니다.
3. 필드 설명은 `assets/js/course.js` 상단 주석을 참고하세요.

```js
COURSE.addLesson({
  id: 'rf-new-topic',        // 고유 ID (URL: #/l/rf-new-topic)
  module: 'rf',              // intro | rf | cert | equip | rftest | emc | sar | process
  order: 10,                 // 모듈 내 순서
  title: '새 강의 제목',
  minutes: 10, level: '기초', // 기초 | 중급 | 실무
  summary: '한 줄 요약',
  objectives: ['학습 목표'],
  body: `<h2>섹션</h2><p>본문 HTML</p>`,
  quiz: [{ q: '질문', options: ['A', 'B', 'C', 'D'], answer: 1, explain: '해설' }],
  refs: [{ title: '자료명', url: 'https://...', note: '설명' }]
});
```

### 본문에서 쓸 수 있는 요소

| 요소 | 코드 |
|---|---|
| 쉬운 설명 박스 | `<div class="callout easy"><span class="callout-title">쉽게 말하면</span>…</div>` |
| 팁 / 주의 / 위험 / 참고 | `callout tip` / `callout warn` / `callout danger` / `callout note` |
| 표 | `<table class="data">…</table>` |
| 그림 | `<figure class="diagram"><svg>…</svg><figcaption>그림 1. …</figcaption></figure>` |
| 수식 | `<div class="formula">…</div>` |
| 절차 | `<ol class="steps"><li><strong>단계</strong>설명</li></ol>` |
| 장비 카드 | `<div class="equip">…</div>` (03 모듈 참고) |
| 좋은 예 / 나쁜 예 | `<div class="compare"><div class="bad">…</div><div class="good">…</div></div>` |

> 본문은 JS 템플릿 문자열(백틱)이므로 본문 안에 백틱(`` ` ``)이나 `${`를 쓰지 마세요.

### 사진·문서 추가

- 실험실 사진: `assets/img/lab/` 에 넣고 `<figure class="diagram img-light"><img src="assets/img/lab/파일.jpg" alt="설명"><figcaption>…</figcaption></figure>`
- 사내 문서(SOP, 매뉴얼 PDF): `docs/` 에 넣고 `resources.js` 에 `{ cat: '사내 문서', title: '…', url: 'docs/파일.pdf', desc: '…' }` 추가
- ⚠️ 이 저장소가 **공개(public)** 라면 사내 기밀 문서·고객 시료 사진은 올리지 마세요. 사내 전용 자료는 사내망에 별도로 배포하세요.

### 용어 · 링크 추가

- 용어: `glossary.js` 에 `{ term, en, cat, desc, lesson }`
- 링크: `resources.js` 에 `{ cat, title, url, desc }`

## 참고

- 진도·퀴즈 점수는 각 사용자의 브라우저(localStorage)에만 저장됩니다.
- 기준값·표준 번호는 교육용 요약입니다. 실제 시험에서는 항상 최신 고시·표준 원문과 사내 시험절차서를 확인하세요.
