/* Bộ render trang dùng chung cho các màn dựng thêm (báo cáo / danh mục / nhật ký).
   Mỗi trang chỉ cần khai báo window.HRM_PAGE = {...} rồi nạp file này.
   Giao diện bám theo các màn xuất từ Stitch (màu #1967B2, font Be Vietnam Pro). */
(function () {
  'use strict';
  var P = window.HRM_PAGE || {};
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function icon(n, cls) { return '<span class="material-symbols-outlined ' + (cls || '') + '">' + esc(n) + '</span>'; }
  function nf(v) { try { return Number(v).toLocaleString('vi-VN'); } catch (e) { return v; } }

  var PRIMARY = 'bg-[#1967B2] hover:bg-[#124E88] text-white';
  var SECBTN = 'bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container';

  /* ---------- Header dùng chung ---------- */
  function header() {
    return '<header class="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">' +
      '<div class="flex items-center gap-space-md min-w-0 flex-1 max-w-xl"><div class="relative w-full">' +
      icon('search', 'absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant') +
      '<input class="w-full h-10 pl-9 pr-14 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20" placeholder="' + esc(P.search || 'Tìm kiếm nhân sự, hồ sơ, báo cáo...') + '" type="text"/>' +
      '<div class="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono-num text-caption">Ctrl+K</div>' +
      '</div></div>' +
      '<div class="flex items-center gap-space-md">' +
      '<button class="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button">' + icon('notifications', 'text-[20px]') + '<span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface"></span></button>' +
      '<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button">' + icon('help', 'text-[20px]') + '</button>' +
      '<div class="h-6 w-px bg-surface-container-high"></div>' +
      '<div class="flex items-center gap-space-sm"><div class="flex flex-col text-right"><span class="font-label-md text-label-md text-on-surface leading-tight">Nguyễn Văn An</span><span class="font-caption text-caption text-secondary">Quản trị hệ thống</span></div>' +
      '<div class="w-8 h-8 rounded-full bg-[#1967B2] flex items-center justify-center text-white font-label-md">NA</div></div>' +
      '</div></header>';
  }

  /* ---------- Breadcrumb + tiêu đề ---------- */
  function pageHead() {
    var bc = (P.breadcrumb || []).map(function (b, i, a) {
      var last = i === a.length - 1;
      return (i ? icon('chevron_right', 'text-[14px]') : '') + '<span class="' + (last ? 'text-primary font-body-md-medium' : '') + '">' + esc(b) + '</span>';
    }).join('');
    var badge = P.badge ? '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-primary-container text-on-primary">' + esc(P.badge) + '</span>' : '';
    var acts = (P.headerActions || []).map(function (a) {
      return '<button class="inline-flex items-center gap-1.5 h-[38px] px-space-md rounded-lg font-label-md text-label-md transition-colors ' + (a.primary ? PRIMARY : SECBTN) + '" type="button">' +
        (a.icon ? icon(a.icon, 'text-[18px]' + (a.primary ? '' : ' text-secondary')) : '') + '<span>' + esc(a.label) + '</span></button>';
    }).join('');
    return '<div class="flex flex-col gap-space-xs">' +
      '<div class="flex items-center gap-space-xs text-secondary font-caption text-caption">' + bc + '</div>' +
      '<div class="flex flex-wrap items-center justify-between gap-space-md pt-1"><div class="space-y-1">' +
      '<div class="flex items-center gap-space-sm"><h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">' + esc(P.title) + '</h1>' + badge + '</div>' +
      (P.desc ? '<p class="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">' + esc(P.desc) + '</p>' : '') +
      '</div><div class="flex items-center gap-space-sm flex-wrap">' + acts + '</div></div></div>';
  }

  /* ---------- Thẻ thống kê ---------- */
  function stats() {
    if (!P.stats || !P.stats.length) return '';
    var tone = { primary: 'bg-primary-container/10 text-primary', success: 'bg-emerald-50 text-emerald-600', warning: 'bg-amber-50 text-amber-600', danger: 'bg-red-50 text-red-600', info: 'bg-sky-50 text-sky-600' };
    var cards = P.stats.map(function (s) {
      return '<div class="bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm p-space-md flex flex-col gap-1">' +
        '<div class="flex items-center justify-between"><span class="font-caption text-caption uppercase tracking-wide text-on-surface-variant">' + esc(s.label) + '</span>' +
        '<span class="w-9 h-9 rounded-lg flex items-center justify-center ' + (tone[s.tone] || tone.primary) + '">' + icon(s.icon || 'bar_chart', 'text-[20px]') + '</span></div>' +
        '<div class="font-display text-display text-on-surface leading-none">' + esc(s.value) + '</div>' +
        (s.sub ? '<div class="font-caption text-caption text-on-surface-variant">' + esc(s.sub) + '</div>' : '') + '</div>';
    }).join('');
    var n = P.stats.length;
    return '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-' + (n >= 4 ? 4 : n) + ' gap-space-md">' + cards + '</div>';
  }

  /* ---------- Thanh bộ lọc ---------- */
  function filters() {
    if (!P.filters || !P.filters.length) return '';
    var ctrl = 'h-[38px] px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20';
    var items = P.filters.map(function (f) {
      var lbl = '<label class="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">' + esc(f.label) + (f.required ? ' <span class="text-error">*</span>' : '') + '</label>';
      var inp;
      if (f.type === 'search') inp = '<div class="relative">' + icon('search', 'absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant') + '<input class="' + ctrl + ' pl-9 ' + (f.width || 'w-64') + '" placeholder="' + esc(f.placeholder || '') + '"/></div>';
      else if (f.type === 'date') inp = '<input class="' + ctrl + ' ' + (f.width || '') + '" value="' + esc(f.value || '') + '"/>';
      else { var opts = (f.options || [f.value || 'Tất cả']).map(function (o) { return '<option>' + esc(o) + '</option>'; }).join(''); inp = '<select class="' + ctrl + ' ' + (f.width || '') + ' cursor-pointer appearance-none pr-8">' + opts + '</select>'; }
      return '<div class="flex items-center gap-2">' + lbl + inp + '</div>';
    }).join('');
    var gear = P.gear ? '<div class="relative"><button class="h-[38px] w-[38px] inline-flex items-center justify-center rounded-lg ' + SECBTN + '" type="button">' + icon('settings', 'text-[20px] text-secondary') + '</button></div>' : '';
    return '<div class="bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm p-space-md flex flex-wrap items-center gap-space-md">' + items + gear + '</div>';
  }

  /* ---------- Bảng dữ liệu ---------- */
  function table() {
    var cols = P.columns || [];
    var hasGroup = cols.some(function (c) { return c.group; });
    var thCls = 'px-3 py-2.5 font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant whitespace-nowrap bg-surface-container-low';
    var head;
    if (hasGroup) {
      var groups = [], cur = null;
      cols.forEach(function (c) {
        var g = c.group || '';
        if (!g) { groups.push({ name: '', cols: [c] }); cur = null; return; }   // cột không group: mỗi cột 1 ô rowspan
        if (!cur || cur.name !== g) { cur = { name: g, cols: [] }; groups.push(cur); }
        cur.cols.push(c);
      });
      var r1 = groups.map(function (g) { return g.name ? '<th class="' + thCls + ' text-center border-b border-surface-container" colspan="' + g.cols.length + '">' + esc(g.name) + '</th>' : '<th class="' + thCls + '" rowspan="2">' + esc(g.cols[0].title) + '</th>'; }).join('');
      var r2 = [];
      groups.forEach(function (g) { if (g.name) g.cols.forEach(function (c) { r2.push('<th class="' + thCls + ' ' + (c.align === 'center' ? 'text-center' : c.align === 'right' ? 'text-right' : 'text-left') + '">' + esc(c.title) + '</th>'); }); });
      head = '<tr>' + r1 + '</tr><tr>' + r2.join('') + '</tr>';
    } else {
      head = '<tr>' + cols.map(function (c) { return '<th class="' + thCls + ' ' + (c.align === 'center' ? 'text-center' : c.align === 'right' ? 'text-right' : 'text-left') + '"' + (c.width ? ' style="width:' + c.width + 'px"' : '') + '>' + esc(c.title) + '</th>'; }).join('') + '</tr>';
    }
    var body = (P.rows || []).map(function (row) {
      return '<tr class="border-b border-surface-container hover:bg-surface-container-low/60">' + cols.map(function (c) {
        var v = row[c.field];
        var al = c.align === 'center' ? 'text-center' : c.align === 'right' ? 'text-right' : 'text-left';
        var cell;
        if (c.kind === 'toggle') cell = '<label class="inline-flex items-center cursor-pointer"><span class="relative w-9 h-5 rounded-full ' + (v === false ? 'bg-surface-container-highest' : 'bg-[#1967B2]') + ' transition-colors"><span class="absolute top-0.5 ' + (v === false ? 'left-0.5' : 'left-[18px]') + ' w-4 h-4 bg-white rounded-full shadow"></span></span></label>';
        else if (c.kind === 'actions') cell = '<div class="flex items-center gap-1 ' + (c.align === 'center' ? 'justify-center' : '') + '">' + (c.actions || ['edit', 'content_copy', 'delete']).map(function (a) { return '<button class="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary" type="button">' + icon(a, 'text-[18px]') + '</button>'; }).join('') + '</div>';
        else if (c.kind === 'badge') { var t = (c.tones && c.tones[v]) || 'bg-primary-container/10 text-primary'; cell = '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-label-sm font-label-sm ' + t + '">' + esc(v) + '</span>'; }
        else if (c.kind === 'link') cell = '<span class="font-mono-num text-body-md-medium text-primary">' + esc(v) + '</span>';
        else if (c.kind === 'money') cell = '<span class="font-mono-num">' + nf(v) + '</span>';
        else if (c.kind === 'strong') cell = '<span class="font-body-md-medium text-on-surface">' + esc(v) + '</span>';
        else cell = esc(v);
        return '<td class="px-3 py-2.5 font-body-md text-body-md text-on-surface ' + al + ' whitespace-nowrap">' + cell + '</td>';
      }).join('') + '</tr>';
    }).join('');
    var minw = cols.length * 130;
    return '<div class="bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm overflow-hidden">' +
      '<div class="overflow-x-auto"><table class="w-full border-collapse text-left" style="min-width:' + minw + 'px"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>' +
      '<div class="flex items-center justify-between px-space-md py-3 border-t border-surface-container"><span class="font-caption text-caption text-on-surface-variant">Hiển thị 1–' + (P.rows || []).length + ' trong ' + (P.total || (P.rows || []).length) + ' bản ghi</span>' +
      '<div class="flex items-center gap-1">' + ['chevron_left', '1', '2', '3', 'chevron_right'].map(function (p, i) { return /\d/.test(p) ? '<button class="w-8 h-8 rounded-lg text-body-md ' + (p === '1' ? 'bg-[#1967B2] text-white' : 'text-on-surface-variant hover:bg-surface-container-high') + '">' + p + '</button>' : '<button class="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high">' + icon(p, 'text-[18px]') + '</button>'; }).join('') + '</div></div>' +
      '</div>';
  }

  /* ---------- Thanh nút cuối ---------- */
  function toolbar() {
    if (!P.toolbar || !P.toolbar.length) return '';
    var map = {
      find: PRIMARY, primary: PRIMARY, success: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      export: SECBTN, pdf: SECBTN, secondary: SECBTN
    };
    return '<div class="flex flex-wrap items-center gap-space-sm">' + P.toolbar.map(function (b) {
      return '<button class="inline-flex items-center gap-1.5 h-[38px] px-space-lg rounded-lg font-label-md text-label-md transition-colors ' + (map[b.kind] || SECBTN) + '" type="button">' +
        (b.icon ? icon(b.icon, 'text-[18px]' + (map[b.kind] === SECBTN ? ' text-secondary' : '')) : '') + '<span>' + esc(b.label) + '</span></button>';
    }).join('') + '</div>';
  }

  function render() {
    var root = document.getElementById('page-root');
    if (!root) return;
    root.innerHTML = header() +
      '<main class="relative pt-16 w-full min-h-screen bg-surface px-space-lg py-space-lg"><div class="flex flex-col w-full space-y-space-lg">' +
      pageHead() + stats() + filters() + table() + toolbar() +
      '</div></main>';
    document.title = (P.title || 'HRM') + ' — HRM';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
