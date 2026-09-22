/* 참고 자료 링크 — COURSE.addResources */
COURSE.addResources([
  /* 국내 기관·법령 */
  { cat:'국내 기관·법령', title:'국립전파연구원 (RRA)', url:'https://www.rra.go.kr', desc:'적합성평가 제도·고시 안내, 인증 현황 검색, 지정시험기관·MRA 정보.' },
  { cat:'국내 기관·법령', title:'국가법령정보센터', url:'https://www.law.go.kr', desc:'전파법·시행령·시행규칙과 과기정통부 고시(행정규칙) 원문. “방송통신기자재등의 적합성평가에 관한 고시” 등을 검색.' },
  { cat:'국내 기관·법령', title:'과학기술정보통신부', url:'https://www.msit.go.kr', desc:'전파 정책, 고시 제·개정 공지.' },
  { cat:'국내 기관·법령', title:'한국방송통신전파진흥원 (KCA)', url:'https://www.kca.kr', desc:'전파 관리, 무선국 검사, 전파 관련 진흥 업무.' },
  { cat:'국내 기관·법령', title:'국가기술표준원', url:'https://www.kats.go.kr', desc:'KS 표준, 제품 안전 제도 관련 정책.' },
  { cat:'국내 기관·법령', title:'e나라표준인증', url:'https://standard.go.kr', desc:'KS 표준(KS C 9832, 9835, 9610 계열 등) 검색·열람.' },

  /* 해외 규제기관 */
  { cat:'해외 규제기관', title:'FCC — Federal Communications Commission', url:'https://www.fcc.gov', desc:'미국 규정, 장비 인가 제도(Equipment Authorization) 안내.' },
  { cat:'해외 규제기관', title:'FCC KDB (Knowledge Database)', url:'https://apps.fcc.gov/oetcf/kdb/', desc:'KDB 문서 검색. 번호(예: 558074, 789033, 447498, 865664)로 최신 버전 확인.' },
  { cat:'해외 규제기관', title:'FCC ID Search', url:'https://www.fcc.gov/oet/ea/fccid', desc:'FCC ID로 Grant와 공개 시험보고서·사진 검색.' },
  { cat:'해외 규제기관', title:'eCFR — 47 CFR (Telecommunication)', url:'https://www.ecfr.gov', desc:'미국 연방규정 전자판. “Title 47”에서 Part 2, 15, 22, 24, 27, 90 원문 확인.' },
  { cat:'해외 규제기관', title:'EU — Radio Equipment Directive (RED)', url:'https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en', desc:'RED 개요, 가이드, 조화표준 목록 안내.' },
  { cat:'해외 규제기관', title:'EUR-Lex', url:'https://eur-lex.europa.eu', desc:'EU 법령 원문. “2014/53/EU”로 RED 원문 검색.' },
  { cat:'해외 규제기관', title:'ISED Canada', url:'https://ised-isde.canada.ca', desc:'캐나다 RSS 규격(RSS-Gen, RSS-247, RSS-102 등)과 인증 제도.' },
  { cat:'해외 규제기관', title:'GOV.UK', url:'https://www.gov.uk', desc:'영국 UKCA, Radio Equipment Regulations 2017 안내. “UKCA marking” 검색.' },
  { cat:'해외 규제기관', title:'ACMA (호주)', url:'https://www.acma.gov.au', desc:'호주 무선·EMC·EME 규제와 RCM 표시 제도.' },
  { cat:'해외 규제기관', title:'총무성 (일본 MIC)', url:'https://www.soumu.go.jp', desc:'일본 전파법, 기술기준적합증명 제도(일본어).' },

  /* 표준 기구 */
  { cat:'표준 기구', title:'IEC', url:'https://www.iec.ch', desc:'국제전기기술위원회. CISPR, IEC 61000 시리즈, IEC 62368-1 등.' },
  { cat:'표준 기구', title:'IEC Webstore', url:'https://webstore.iec.ch', desc:'IEC·CISPR 표준 구매 및 목차(미리보기) 확인.' },
  { cat:'표준 기구', title:'ETSI Standards', url:'https://www.etsi.org/standards', desc:'EN 300 328, EN 301 893, EN 301 489 등 ETSI 표준 무료 다운로드.' },
  { cat:'표준 기구', title:'IEEE Standards Association', url:'https://standards.ieee.org', desc:'IEEE 표준(IEEE 802.11 무선랜, IEC/IEEE 62209-1528 등).' },
  { cat:'표준 기구', title:'3GPP', url:'https://www.3gpp.org', desc:'LTE·5G NR 규격. 단말 적합성 시험 규격(TS 36.521, 38.521 등) 검색.' },
  { cat:'표준 기구', title:'ISO', url:'https://www.iso.org', desc:'국제표준화기구. ISO/IEC 17025 등.' },
  { cat:'표준 기구', title:'ITU', url:'https://www.itu.int', desc:'국제전기통신연합. 주파수 분배(전파규칙), ITU-R 권고.' },
  { cat:'표준 기구', title:'CENELEC', url:'https://www.cenelec.eu', desc:'유럽 전기기술표준화위원회. EN 55032/55035, EN 62368-1 등 EN 규격.' },
  { cat:'표준 기구', title:'ANSI', url:'https://www.ansi.org', desc:'미국 국가표준협회. ANSI C63 시리즈(C63.4, C63.10, C63.26) 관련.' },

  /* 시험 규격(무선) */
  { cat:'시험 규격(무선)', title:'Wi-Fi Alliance', url:'https://www.wi-fi.org', desc:'Wi-Fi 기술(802.11 세대, 6 GHz 등) 개요와 인증 프로그램.' },
  { cat:'시험 규격(무선)', title:'Bluetooth SIG', url:'https://www.bluetooth.com', desc:'블루투스 규격, 기술 개요와 자격(Qualification) 프로그램.' },
  { cat:'시험 규격(무선)', title:'ETSI — EN 300 328 / EN 301 893', url:'https://www.etsi.org/standards', desc:'2.4 GHz·5 GHz 무선랜 등 EU 무선 조화표준. 표준 검색에서 번호 입력.' },
  { cat:'시험 규격(무선)', title:'FCC KDB 558074 / 789033', url:'https://apps.fcc.gov/oetcf/kdb/', desc:'DTS(15.247)와 U-NII(15.407) 측정 지침. KDB 검색에서 번호 입력.' },

  /* EMC 규격 */
  { cat:'EMC 규격', title:'CISPR 32 / CISPR 35', url:'https://webstore.iec.ch', desc:'멀티미디어 기기 방출·내성 규격(국내 KS C 9832/9835 부합). Webstore에서 “CISPR 32” 검색.' },
  { cat:'EMC 규격', title:'CISPR 16 시리즈', url:'https://webstore.iec.ch', desc:'EMC 측정 장비·방법의 기본 규격(수신기, 시험장 검증, 불확도).' },
  { cat:'EMC 규격', title:'IEC 61000-4 시리즈', url:'https://webstore.iec.ch', desc:'내성 시험 기본 규격(-2 ESD, -3 RS, -4 EFT, -5 Surge, -6 CS, -8 PFMF, -11 Dips).' },
  { cat:'EMC 규격', title:'ETSI EN 301 489 시리즈', url:'https://www.etsi.org/standards', desc:'무선기기 EMC 규격(-1 공통, -17 광대역 데이터, -52 이동통신 단말 등).' },

  /* SAR·EMF */
  { cat:'SAR·EMF', title:'ICNIRP', url:'https://www.icnirp.org', desc:'국제비전리방사선방호위원회. 전자파 인체 노출 가이드라인.' },
  { cat:'SAR·EMF', title:'WHO — Electromagnetic fields', url:'https://www.who.int', desc:'세계보건기구의 전자파와 건강 정보. 사이트에서 “electromagnetic fields” 검색.' },
  { cat:'SAR·EMF', title:'FCC — RF Safety', url:'https://www.fcc.gov', desc:'FCC RF 노출(SAR) 정책 안내. 사이트에서 “RF Safety” 또는 “SAR” 검색.' },
  { cat:'SAR·EMF', title:'IEC/IEEE 62209-1528', url:'https://webstore.iec.ch', desc:'휴대 무선기기 SAR 측정 국제 표준. Webstore에서 “62209-1528” 검색.' },
  { cat:'SAR·EMF', title:'국립전파연구원 — 전자파 인체보호', url:'https://www.rra.go.kr', desc:'전자파 인체보호기준, 전자파흡수율 측정기준, 전자파 등급 제도 안내.' },

  /* 장비 제조사 */
  { cat:'장비 제조사', title:'Rohde & Schwarz', url:'https://www.rohde-schwarz.com', desc:'스펙트럼 분석기, EMI 수신기, 무선통신 시험기, EMC 시스템.' },
  { cat:'장비 제조사', title:'Keysight Technologies', url:'https://www.keysight.com', desc:'신호 분석기, 신호 발생기, 네트워크 분석기, 파워미터.' },
  { cat:'장비 제조사', title:'Anritsu', url:'https://www.anritsu.com', desc:'무선통신 시험기, 신호 분석기.' },
  { cat:'장비 제조사', title:'SPEAG', url:'https://speag.swiss', desc:'DASY SAR 측정 시스템, 프로브, 팬텀, 검증 다이폴.' },
  { cat:'장비 제조사', title:'MVG', url:'https://www.mvg-world.com', desc:'SAR 측정 시스템(COMOSAR 등), 안테나 측정 시스템.' },
  { cat:'장비 제조사', title:'ETS-Lindgren', url:'https://www.ets-lindgren.com', desc:'전자파 챔버, 안테나, 필드 프로브, OTA 시스템.' },
  { cat:'장비 제조사', title:'Schwarzbeck Mess-Elektronik', url:'https://www.schwarzbeck.de', desc:'EMC 측정용 안테나(바이코니컬, 로그 주기, 혼 등), LISN.' },
  { cat:'장비 제조사', title:'AMETEK CTS', url:'https://www.ametek-cts.com', desc:'ESD, EFT, Surge, Dips 등 EMC 내성 시험기(Teseq, EM Test 브랜드 등).' },

  /* 인정·품질 */
  { cat:'인정·품질', title:'KOLAS 한국인정기구', url:'https://www.knab.go.kr', desc:'시험·교정기관 인정 제도, 인정기관 검색.' },
  { cat:'인정·품질', title:'ILAC', url:'https://ilac.org', desc:'국제시험소인정협력체. ILAC MRA와 소급성·불확도 관련 정책 문서.' },
  { cat:'인정·품질', title:'APAC', url:'https://www.apac-accreditation.org', desc:'아시아태평양인정협력체. 역내 인정기구 상호인정.' },
  { cat:'인정·품질', title:'IECEE (CB 스킴)', url:'https://www.iecee.org', desc:'전기안전 국제 상호인정 제도(CB Scheme) 안내.' },
  { cat:'인정·품질', title:'한국표준과학연구원 (KRISS)', url:'https://www.kriss.re.kr', desc:'국가 측정 표준기관. 측정 소급성의 국내 최상위 기준.' },
  { cat:'인정·품질', title:'BIPM — JCGM 문서 (GUM, VIM)', url:'https://www.bipm.org', desc:'측정 불확도 표현 지침(GUM)과 국제계량용어(VIM). 사이트에서 “JCGM 100” 검색.' },

  /* 학습 자료 */
  { cat:'학습 자료', title:'Keysight — Spectrum Analysis Basics', url:'https://www.keysight.com', desc:'스펙트럼 분석 기초 앱노트. 사이트에서 “Spectrum Analysis Basics AN 150” 검색.' },
  { cat:'학습 자료', title:'Rohde & Schwarz — Fundamentals of Spectrum Analysis', url:'https://www.rohde-schwarz.com', desc:'스펙트럼 분석 원리 교재. 사이트에서 “Fundamentals of Spectrum Analysis” 검색.' },
  { cat:'학습 자료', title:'Keysight — EMI 측정 앱노트', url:'https://www.keysight.com', desc:'EMC 방출 측정 기초. 사이트에서 “Making Conducted and Radiated Emissions Measurements” 검색.' },
  { cat:'학습 자료', title:'Rohde & Schwarz — 애플리케이션 노트', url:'https://www.rohde-schwarz.com', desc:'무선·EMC 측정 앱노트 모음. 사이트에서 “application notes”와 기술명(예: “EMI”, “Wi-Fi”) 검색.' },
  { cat:'학습 자료', title:'SPEAG — 기술 자료', url:'https://speag.swiss', desc:'SAR 측정 원리, 프로브·팬텀 기술 자료.' }
]);
