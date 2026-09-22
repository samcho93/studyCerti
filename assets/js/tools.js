/* RF 계산기 */
window.RFTOOLS = (function () {
  'use strict';
  var log10 = function (x) { return Math.log(x) / Math.LN10; };
  var C0 = 299792458;

  function fmt(x, d) {
    if (x === null || x === undefined || !isFinite(x)) return '—';
    if (d === undefined) d = 3;
    var a = Math.abs(x);
    if (a !== 0 && (a < 1e-3 || a >= 1e7)) return x.toExponential(d);
    return (+x.toFixed(d)).toLocaleString('ko-KR', { maximumFractionDigits: d });
  }
  function fmtW(w) {
    if (!isFinite(w)) return '—';
    var a = Math.abs(w);
    if (a >= 1) return fmt(w, 4) + ' W';
    if (a >= 1e-3) return fmt(w * 1e3, 4) + ' mW';
    if (a >= 1e-6) return fmt(w * 1e6, 4) + ' µW';
    if (a >= 1e-9) return fmt(w * 1e9, 4) + ' nW';
    return fmt(w * 1e12, 4) + ' pW';
  }
  function fmtLen(m) {
    if (!isFinite(m)) return '—';
    if (m >= 1000) return fmt(m / 1000, 4) + ' km';
    if (m >= 1) return fmt(m, 4) + ' m';
    if (m >= 0.01) return fmt(m * 100, 3) + ' cm';
    return fmt(m * 1000, 3) + ' mm';
  }
  function fmtHz(hz) {
    var a = Math.abs(hz);
    if (a >= 1e9) return fmt(hz / 1e9, 6) + ' GHz';
    if (a >= 1e6) return fmt(hz / 1e6, 6) + ' MHz';
    if (a >= 1e3) return fmt(hz / 1e3, 4) + ' kHz';
    return fmt(hz, 3) + ' Hz';
  }
  var UNIT = { Hz: 1, kHz: 1e3, MHz: 1e6, GHz: 1e9 };

  function out(items) {
    return items.map(function (it) { return '<div><div class="k">' + it[0] + '</div><div class="v">' + it[1] + '</div></div>'; }).join('');
  }
  function freqInput(id, val, unit) {
    return '<label>주파수<input id="' + id + '" type="number" step="any" value="' + val + '"></label>' +
      '<label>단위<select id="' + id + 'U">' + ['Hz', 'kHz', 'MHz', 'GHz'].map(function (u) { return '<option' + (u === unit ? ' selected' : '') + '>' + u + '</option>'; }).join('') + '</select></label>';
  }

  var TOOLS = [
    {
      id: 'pw', title: '전력 단위 변환 (dBm ↔ W)',
      desc: '어느 칸이든 입력하면 나머지가 계산됩니다. dBµV는 50 Ω 시스템 기준입니다.',
      html: '<div class="row"><label>dBm<input id="pw_dbm" type="number" step="any" value="20"></label><label>W<input id="pw_w" type="number" step="any"></label><label>mW<input id="pw_mw" type="number" step="any"></label><label>dBW<input id="pw_dbw" type="number" step="any"></label><label>dBµV (50 Ω)<input id="pw_dbuv" type="number" step="any"></label></div>',
      bind: function (g) {
        var ids = ['pw_dbm', 'pw_w', 'pw_mw', 'pw_dbw', 'pw_dbuv'];
        function setAll(dbm, src) {
          var vals = { pw_dbm: dbm, pw_w: Math.pow(10, dbm / 10) / 1000, pw_mw: Math.pow(10, dbm / 10), pw_dbw: dbm - 30, pw_dbuv: dbm + 107 };
          ids.forEach(function (id) { if (id !== src) g(id).value = +vals[id].toPrecision(6); });
        }
        var conv = {
          pw_dbm: function (v) { return v; },
          pw_w: function (v) { return 10 * log10(v * 1000); },
          pw_mw: function (v) { return 10 * log10(v); },
          pw_dbw: function (v) { return v + 30; },
          pw_dbuv: function (v) { return v - 107; }
        };
        ids.forEach(function (id) {
          g(id).addEventListener('input', function () {
            var v = parseFloat(g(id).value);
            if (!isFinite(v)) return;
            var dbm = conv[id](v);
            if (isFinite(dbm)) setAll(dbm, id);
          });
        });
        setAll(20, 'pw_dbm');
      },
      hint: '암기: 0 dBm = 1 mW, 10 dBm = 10 mW, 20 dBm = 100 mW, 30 dBm = 1 W. +3 dB ≈ 2배, +10 dB = 10배. dBµV = dBm + 107 (50 Ω).'
    },
    {
      id: 'wl', title: '파장 · 원거리장 거리',
      desc: '주파수로 파장을 구하고, 안테나(또는 시료) 최대 크기 D로 원거리장 조건을 확인합니다.',
      html: '<div class="row">' + freqInput('wl_f', 2450, 'MHz') + '<label>안테나 최대 크기 D (cm)<input id="wl_d" type="number" step="any" value="10"></label></div><div class="out" id="wl_o"></div>',
      calc: function (g) {
        var f = parseFloat(g('wl_f').value) * UNIT[g('wl_fU').value];
        var D = parseFloat(g('wl_d').value) / 100;
        var lam = C0 / f;
        var ff = Math.max(2 * D * D / lam, lam / (2 * Math.PI) * 3);
        g('wl_o').innerHTML = out([
          ['파장 λ = c / f', fmtLen(lam)], ['λ/2 (반파장 다이폴 길이)', fmtLen(lam / 2)], ['λ/4', fmtLen(lam / 4)],
          ['원거리장 2D²/λ', fmtLen(2 * D * D / lam)], ['λ/2π (근거리 반응성 영역 경계)', fmtLen(lam / (2 * Math.PI))], ['권장 최소 거리 (둘 중 큰 값 기준)', fmtLen(ff)]
        ]);
      },
      hint: '원거리장 조건은 보통 r > 2D²/λ 이면서 r ≫ λ 입니다. 여기서 “권장 최소 거리”는 2D²/λ와 3·λ/2π 중 큰 값으로 계산한 참고값입니다.'
    },
    {
      id: 'eirp', title: 'EIRP · ERP',
      desc: '송신기 전도 출력, 케이블/부품 손실, 안테나 이득으로 등가등방복사전력을 구합니다.',
      html: '<div class="row"><label>전도 출력 (dBm)<input id="ei_p" type="number" step="any" value="18"></label><label>케이블·부품 손실 (dB)<input id="ei_l" type="number" step="any" value="1"></label><label>안테나 이득 (dBi)<input id="ei_g" type="number" step="any" value="3"></label></div><div class="out" id="ei_o"></div>',
      calc: function (g) {
        var e = parseFloat(g('ei_p').value) - parseFloat(g('ei_l').value) + parseFloat(g('ei_g').value);
        g('ei_o').innerHTML = out([['EIRP', fmt(e, 2) + ' dBm'], ['EIRP (전력)', fmtW(Math.pow(10, e / 10) / 1000)], ['ERP = EIRP − 2.15 dB', fmt(e - 2.15, 2) + ' dBm'], ['ERP (전력)', fmtW(Math.pow(10, (e - 2.15) / 10) / 1000)]]);
      },
      hint: 'EIRP(dBm) = P(dBm) − L(dB) + G(dBi). ERP는 반파장 다이폴(2.15 dBi) 기준이므로 EIRP보다 2.15 dB 작습니다.'
    },
    {
      id: 'fs', title: '전계강도 계산 (방사 측정)',
      desc: '수신기 리딩값에 안테나 인자와 케이블 손실을 더하고 전치증폭기 이득을 빼서 전계강도를 구합니다.',
      html: '<div class="row"><label>리딩 (dBµV)<input id="fs_r" type="number" step="any" value="25.0"></label><label>안테나 인자 AF (dB/m)<input id="fs_af" type="number" step="any" value="14.2"></label><label>케이블 손실 (dB)<input id="fs_cl" type="number" step="any" value="2.1"></label><label>프리앰프 이득 (dB)<input id="fs_pa" type="number" step="any" value="0"></label><label>한계값 (dBµV/m)<input id="fs_lim" type="number" step="any" value="40.0"></label></div><div class="out" id="fs_o"></div>',
      calc: function (g) {
        var e = parseFloat(g('fs_r').value) + parseFloat(g('fs_af').value) + parseFloat(g('fs_cl').value) - parseFloat(g('fs_pa').value);
        var lim = parseFloat(g('fs_lim').value);
        var m = lim - e;
        g('fs_o').innerHTML = out([['전계강도 E', fmt(e, 1) + ' dBµV/m'], ['E (선형)', fmt(Math.pow(10, e / 20), 2) + ' µV/m'], ['마진 (한계 − 측정)', fmt(m, 1) + ' dB'], ['판정', isFinite(m) ? (m >= 0 ? '<span style="color:var(--ok)">적합 (PASS)</span>' : '<span style="color:var(--danger)">부적합 (FAIL)</span>') : '—']]);
      },
      hint: 'E(dBµV/m) = V(dBµV) + AF(dB/m) + Lcable(dB) − Gpreamp(dB). 대부분의 EMI 소프트웨어는 이 보정을 “변환 인자(transducer factor)”로 자동 적용합니다. 판정은 측정 불확도와 사내 판정 규칙도 함께 고려해야 합니다.'
    },
    {
      id: 'efar', title: 'EIRP ↔ 거리별 전계강도',
      desc: '원거리장에서 EIRP와 거리로 전계강도를 계산합니다: E(V/m) = √(30·EIRP[W]) / d.',
      html: '<div class="row"><label>EIRP (dBm)<input id="ef_p" type="number" step="any" value="20"></label><label>거리 d (m)<input id="ef_d" type="number" step="any" value="3"></label></div><div class="out" id="ef_o"></div>',
      calc: function (g) {
        var pw = Math.pow(10, parseFloat(g('ef_p').value) / 10) / 1000, d = parseFloat(g('ef_d').value);
        var E = Math.sqrt(30 * pw) / d;
        g('ef_o').innerHTML = out([['E', fmt(E, 4) + ' V/m'], ['E', fmt(20 * log10(E * 1e6), 2) + ' dBµV/m'], ['전력밀도 S = E²/377', fmt(E * E / 376.73, 5) + ' W/m²']]);
      },
      hint: '방사 측정값(dBµV/m)을 EIRP로 환산할 때는 반대로 EIRP(dBm) = E(dBµV/m) + 20·log(d) − 104.77 을 씁니다 (원거리장, 자유공간 가정).'
    },
    {
      id: 'pd', title: '전력밀도 · 인체 노출 거리',
      desc: '안테나로부터 거리 r에서의 전력밀도 S = EIRP / (4πr²) 를 계산하고 기준값과 비교합니다.',
      html: '<div class="row"><label>EIRP (dBm)<input id="pd_p" type="number" step="any" value="36"></label><label>거리 r (cm)<input id="pd_r" type="number" step="any" value="20"></label><label>기준 전력밀도 (W/m²)<input id="pd_lim" type="number" step="any" value="10"></label></div><div class="out" id="pd_o"></div>',
      calc: function (g) {
        var pw = Math.pow(10, parseFloat(g('pd_p').value) / 10) / 1000, r = parseFloat(g('pd_r').value) / 100, lim = parseFloat(g('pd_lim').value);
        var S = pw / (4 * Math.PI * r * r);
        var rmin = Math.sqrt(pw / (4 * Math.PI * lim));
        g('pd_o').innerHTML = out([['S', fmt(S, 4) + ' W/m²'], ['S', fmt(S / 10, 4) + ' mW/cm²'], ['기준 대비', fmt(S / lim * 100, 1) + ' %'], ['기준을 만족하는 최소 거리', fmtLen(rmin)]]);
      },
      hint: '1 mW/cm² = 10 W/m². 원거리장 근사식이라 안테나에 아주 가까운 거리에서는 정확하지 않습니다(보수적인 값). 기준값은 주파수·대상(일반인/직업인)에 따라 다르므로 최신 전자파 인체보호기준을 확인하세요.'
    },
    {
      id: 'duty', title: '듀티 사이클 보정',
      desc: '버스트 신호의 “버스트 구간 평균”과 “전체 시간 평균”을 서로 환산합니다.',
      html: '<div class="row"><label>송신 ON 시간<input id="du_on" type="number" step="any" value="2.5"></label><label>주기(ON+OFF) 시간<input id="du_t" type="number" step="any" value="10"></label><label>측정값 (dBm)<input id="du_m" type="number" step="any" value="10"></label></div><div class="out" id="du_o"></div>',
      calc: function (g) {
        var x = parseFloat(g('du_on').value) / parseFloat(g('du_t').value), m = parseFloat(g('du_m').value);
        var f = 10 * log10(1 / x);
        g('du_o').innerHTML = out([['듀티 사이클 x', fmt(x * 100, 2) + ' %'], ['보정 인자 10·log(1/x)', fmt(f, 2) + ' dB'], ['전체시간 평균 → 버스트 평균', fmt(m + f, 2) + ' dBm'], ['버스트 평균 → 전체시간 평균', fmt(m - f, 2) + ' dBm']]);
      },
      hint: '예: 듀티 25% → 6.02 dB. 게이팅 없이 전체 시간 평균으로 측정했다면 보정 인자를 더해 버스트 구간 평균 출력을 구합니다. 어떤 값을 한계와 비교할지는 적용 규격을 따르세요.'
    },
    {
      id: 'ppm', title: '주파수 허용편차 (ppm)',
      desc: '허용편차(ppm)를 Hz로, 측정된 주파수 오차를 ppm으로 환산합니다.',
      html: '<div class="row">' + freqInput('pp_f', 2412, 'MHz') + '<label>허용편차 (± ppm)<input id="pp_t" type="number" step="any" value="20"></label><label>측정 주파수 (같은 단위)<input id="pp_m" type="number" step="any" value="2412.0213"></label></div><div class="out" id="pp_o"></div>',
      calc: function (g) {
        var u = UNIT[g('pp_fU').value];
        var f = parseFloat(g('pp_f').value) * u, t = parseFloat(g('pp_t').value), m = parseFloat(g('pp_m').value) * u;
        var dev = m - f, ppm = dev / f * 1e6;
        g('pp_o').innerHTML = out([['허용 범위', '± ' + fmtHz(f * t * 1e-6)], ['측정 오차', (dev >= 0 ? '+' : '') + fmtHz(dev)], ['측정 오차 (ppm)', fmt(ppm, 3) + ' ppm'], ['판정', Math.abs(ppm) <= t ? '<span style="color:var(--ok)">허용편차 이내</span>' : '<span style="color:var(--danger)">허용편차 초과</span>']]);
      },
      hint: '1 ppm = 백만분의 1. 2.4 GHz에서 ±20 ppm은 약 ±48 kHz입니다.'
    },
    {
      id: 'fspl', title: '자유공간 경로 손실 (FSPL)',
      desc: '두 등방성 안테나 사이의 자유공간 손실을 계산합니다.',
      html: '<div class="row">' + freqInput('fp_f', 2450, 'MHz') + '<label>거리 (m)<input id="fp_d" type="number" step="any" value="3"></label></div><div class="out" id="fp_o"></div>',
      calc: function (g) {
        var f = parseFloat(g('fp_f').value) * UNIT[g('fp_fU').value], d = parseFloat(g('fp_d').value);
        var L = 20 * log10(4 * Math.PI * d * f / C0);
        g('fp_o').innerHTML = out([['FSPL', fmt(L, 2) + ' dB'], ['거리 2배 시', '+6.02 dB'], ['주파수 2배 시', '+6.02 dB']]);
      },
      hint: 'FSPL(dB) = 20·log(d) + 20·log(f) + 20·log(4π/c). 거리나 주파수가 2배가 되면 손실이 6 dB 늘어납니다.'
    },
    {
      id: 'sar', title: 'SAR 출력 스케일링',
      desc: '측정 시 출력이 허용 최대 튠업 출력보다 낮을 때, 측정 SAR를 최대 출력 기준으로 환산합니다.',
      html: '<div class="row"><label>측정 SAR (W/kg)<input id="sa_s" type="number" step="any" value="0.92"></label><label>측정 시 출력 (dBm)<input id="sa_m" type="number" step="any" value="22.6"></label><label>최대 튠업 출력 (dBm)<input id="sa_t" type="number" step="any" value="23.5"></label><label>한계 (W/kg)<input id="sa_l" type="number" step="any" value="1.6"></label></div><div class="out" id="sa_o"></div>',
      calc: function (g) {
        var s = parseFloat(g('sa_s').value), m = parseFloat(g('sa_m').value), t = parseFloat(g('sa_t').value), l = parseFloat(g('sa_l').value);
        var k = Math.pow(10, (t - m) / 10), rs = s * k;
        g('sa_o').innerHTML = out([['스케일링 인자', '× ' + fmt(k, 4)], ['조정(보고) SAR', fmt(rs, 3) + ' W/kg'], ['한계 대비', fmt(rs / l * 100, 1) + ' %'], ['판정', rs <= l ? '<span style="color:var(--ok)">기준 이내</span>' : '<span style="color:var(--danger)">기준 초과</span>']]);
      },
      hint: '조정 SAR = 측정 SAR × 10^((튠업 최대 − 측정 출력)/10). 듀티 사이클 보정 등 다른 스케일링이 필요한지는 적용 표준·KDB를 확인하세요.'
    },
    {
      id: 'vswr', title: 'VSWR · 반사손실 · 반사계수',
      desc: '셋 중 하나를 입력하면 나머지와 부정합 손실을 계산합니다.',
      html: '<div class="row"><label>VSWR<input id="vs_v" type="number" step="any" value="1.5"></label><label>반사손실 RL (dB)<input id="vs_rl" type="number" step="any"></label><label>반사계수 |Γ|<input id="vs_g" type="number" step="any"></label></div><div class="out" id="vs_o"></div>',
      bind: function (g) {
        function show(G, src) {
          if (!(G >= 0 && G < 1)) return;
          var v = (1 + G) / (1 - G), rl = -20 * log10(G), ml = -10 * log10(1 - G * G);
          if (src !== 'v') g('vs_v').value = +v.toPrecision(5);
          if (src !== 'rl') g('vs_rl').value = +rl.toPrecision(5);
          if (src !== 'g') g('vs_g').value = +G.toPrecision(5);
          g('vs_o').innerHTML = out([['반사 전력', fmt(G * G * 100, 2) + ' %'], ['부정합 손실', fmt(ml, 3) + ' dB']]);
        }
        g('vs_v').addEventListener('input', function () { var v = parseFloat(this.value); if (v >= 1) show((v - 1) / (v + 1), 'v'); });
        g('vs_rl').addEventListener('input', function () { var r = parseFloat(this.value); if (r > 0) show(Math.pow(10, -r / 20), 'rl'); });
        g('vs_g').addEventListener('input', function () { show(parseFloat(this.value), 'g'); });
        show(0.2, 'v');
      },
      hint: 'VSWR 1.5 ≈ 반사손실 14 dB ≈ 반사 전력 4%. 커넥터가 느슨하거나 손상되면 VSWR이 나빠져 측정값이 틀어집니다.'
    }
  ];

  function render() {
    var h = '<div class="page"><div class="breadcrumb"><a href="#/">홈</a> / RF 계산기</div><h1>RF 계산기</h1>';
    h += '<p class="lead">시험 현장에서 자주 하는 계산을 바로 해 볼 수 있습니다. 값을 바꾸면 결과가 즉시 갱신됩니다.</p>';
    h += '<div class="callout warn"><span class="callout-title">교육용 도구</span>계산 원리를 익히기 위한 도구입니다. 성적서에 들어가는 값은 검증된 사내 계산 시트나 시험 소프트웨어로 산출하세요.</div>';
    h += '<nav class="toc"><strong>계산기 목록</strong><ol>' + TOOLS.map(function (t) { return '<li><a href="#tool-' + t.id + '">' + t.title + '</a></li>'; }).join('') + '</ol></nav>';
    TOOLS.forEach(function (t) {
      h += '<section class="tool" id="tool-' + t.id + '" data-tool="' + t.id + '"><h2>' + t.title + '</h2><p class="muted" style="margin:0">' + t.desc + '</p>' + t.html + (t.hint ? '<div class="hint">' + t.hint + '</div>' : '') + '</section>';
    });
    return h + '</div>';
  }

  function bind(root) {
    var g = function (id) { return root.querySelector('#' + id); };
    TOOLS.forEach(function (t) {
      var sec = root.querySelector('[data-tool="' + t.id + '"]');
      if (!sec) return;
      if (t.bind) t.bind(g);
      if (t.calc) {
        var run = function () { try { t.calc(g); } catch (e) { /* 입력 중 */ } };
        sec.addEventListener('input', run);
        sec.addEventListener('change', run);
        run();
      }
    });
  }

  return { render: render, bind: bind };
})();
