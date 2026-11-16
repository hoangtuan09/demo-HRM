/* Menu điều hướng dùng chung cho toàn bộ màn hình HRM. Mỗi trang chỉ cần <aside id="app-sidebar" data-mode="fixed|flow" data-old-w="..."> */
(function () {
  'use strict';
  var NEW_W = 256;
  var cs = document.currentScript;
  var ROOT = new URL('../', cs ? cs.src : location.href).href; // thư mục screens/

  // [nhãn, đường dẫn tương đối từ screens/, icon Material Symbols, (tuỳ chọn) các trang biến thể cũng tô sáng mục này]
  var MENU = [
    ['TỔNG QUAN', 'grid_view', [
      ['Tổng quan', '02-dashboard/tong-quan-A.html', 'grid_view', ['02-dashboard/trang-chu-dashboard-B.html']]
    ]],
    ['NHÂN SỰ', 'groups', [
      ['Danh sách nhân sự', '03-nhan-su/danh-sach-nhan-su.html', 'badge', ['03-nhan-su/ho-so-nhan-su-A-ly-lich.html', '03-nhan-su/ho-so-nhan-su-B-tab-doc-tuong-tac.html', '03-nhan-su/ho-so-nhan-su-C-all-in-one.html']],
      ['Cơ cấu tổ chức', '03-nhan-su/co-cau-to-chuc.html', 'corporate_fare'],
      ['Sơ đồ tổ chức', '03-nhan-su/so-do-to-chuc.html', 'account_tree'],
      ['Định biên nhân sự', '03-nhan-su/dinh-bien-nhan-su.html', 'pie_chart'],
      ['Thông tin đơn vị', '03-nhan-su/thong-tin-don-vi.html', 'apartment'],
      ['Hợp đồng lao động', '03-nhan-su/hop-dong-lao-dong.html', 'description'],
      ['Quyết định nhân sự', '03-nhan-su/danh-sach-quyet-dinh.html', 'gavel'],
      ['Thử thách – Thử việc', '03-nhan-su/thu-thach-thu-viec.html', 'hourglass_empty'],
      ['Nghỉ việc & bàn giao', '03-nhan-su/nghi-viec-ban-giao.html', 'person_remove'],
      ['Nghỉ sinh – Thai sản', '03-nhan-su/nghi-sinh-thai-san.html', 'pregnant_woman']
    ]],
    ['XÉT DUYỆT', 'fact_check', [
      ['Tra cứu đề nghị', '03-nhan-su/tra-cuu-de-nghi.html', 'find_in_page'],
      ['Xét duyệt thông tin nhân sự', '03-nhan-su/xet-duyet-thong-tin-nhan-su.html', 'manage_accounts'],
      ['Xét duyệt quan hệ nhân sự', '03-nhan-su/xet-duyet-quan-he-nhan-su.html', 'diversity_3'],
      ['Xét duyệt đổi ca', '03-nhan-su/xet-duyet-doi-ca.html', 'published_with_changes']
    ]],
    ['CHẤM CÔNG', 'event_available', [
      ['Phân ca', '04-cham-cong/phan-ca.html', 'calendar_view_month'],
      ['Gán ca làm việc', '04-cham-cong/gan-ca-lam-viec.html', 'schedule'],
      ['Gán địa điểm làm việc', '04-cham-cong/gan-dia-diem-lam-viec.html', 'location_on'],
      ['Chấm công thủ công', '04-cham-cong/cham-cong-thu-cong.html', 'edit_calendar'],
      ['Đăng ký nghỉ phép', '04-cham-cong/dang-ky-nghi-phep.html', 'beach_access'],
      ['Làm thêm giờ (OT)', '04-cham-cong/lam-them-gio-ot.html', 'more_time']
    ]],
    ['TIỀN LƯƠNG', 'payments', [
      ['Thông tin lương', '05-luong/thong-tin-luong-ngach-bac.html', 'account_balance_wallet'],
      ['Tham số lương', '05-luong/tham-so-luong.html', 'tune'],
      ['Giảm trừ gia cảnh', '05-luong/giam-tru-gia-canh.html', 'family_restroom'],
      ['Bảng tính lương tháng', '05-luong/bang-tinh-luong-thang.html', 'calculate'],
      ['In phiếu lương', '05-luong/in-phieu-luong.html', 'receipt_long'],
      ['Tổng hợp chi phí', '05-luong/tong-hop-chi-phi.html', 'savings']
    ]],
    ['TUYỂN DỤNG & ĐÀO TẠO', 'school', [
      ['Kế hoạch tuyển dụng', '06-tuyen-dung-dao-tao/ke-hoach-tuyen-dung.html', 'event_note'],
      ['Hồ sơ ứng viên', '06-tuyen-dung-dao-tao/ho-so-ung-vien-pipeline.html', 'person_search'],
      ['Lớp đào tạo', '06-tuyen-dung-dao-tao/lop-dao-tao.html', 'cast_for_education'],
      ['Lịch đào tạo', '06-tuyen-dung-dao-tao/lich-dao-tao.html', 'event'],
      ['Thông báo chiêu sinh', '06-tuyen-dung-dao-tao/thong-bao-chieu-sinh.html', 'campaign'],
      ['Đăng ký đào tạo', '06-tuyen-dung-dao-tao/dang-ky-xet-duyet-dao-tao.html', 'how_to_reg'],
      ['Khung đào tạo theo chức danh', '06-tuyen-dung-dao-tao/khung-dao-tao-theo-chuc-danh.html', 'account_tree'],
      ['DM Giảng viên', '06-tuyen-dung-dao-tao/danh-muc-giang-vien.html', 'record_voice_over'],
      ['DM Khóa đào tạo', '06-tuyen-dung-dao-tao/danh-muc-khoa-dao-tao.html', 'menu_book'],
      ['DM Chứng chỉ đào tạo', '06-tuyen-dung-dao-tao/danh-muc-chung-chi-dao-tao.html', 'workspace_premium'],
      ['DM Tài liệu đào tạo', '06-tuyen-dung-dao-tao/danh-muc-tai-lieu-dao-tao.html', 'description'],
      ['DM Video đào tạo', '06-tuyen-dung-dao-tao/danh-muc-video-dao-tao.html', 'smart_display']
    ]],
    ['BÁO CÁO', 'insert_chart', [
      ['Diễn biến nhân sự', '07-bao-cao/dien-bien-nhan-su.html', 'timeline'],
      ['Thống kê tỷ lệ nhân sự', '07-bao-cao/thong-ke-ty-le-nhan-su.html', 'donut_small'],
      ['Nhân sự mới', '07-bao-cao/nhan-su-moi.html', 'person_add'],
      ['Hết hạn hợp đồng', '07-bao-cao/het-han-hop-dong.html', 'event_busy'],
      ['Nhân sự nghỉ việc', '07-bao-cao/nhan-su-nghi-viec.html', 'person_off'],
      ['Sinh nhật', '07-bao-cao/sinh-nhat.html', 'cake'],
      ['Bảo hiểm xã hội', '07-bao-cao/bao-hiem-xa-hoi.html', 'health_and_safety'],
      ['Tổng hợp lương tháng', '07-bao-cao/tong-hop-luong-thang.html', 'request_quote'],
      ['Biểu thuế TNCN (Mẫu 1)', '07-bao-cao/thue-tncn-mau-1.html', 'receipt'],
      ['Chuyển khoản / Tiền mặt', '07-bao-cao/chuyen-khoan-tien-mat.html', 'account_balance'],
      ['Quan hệ vợ chồng', '07-bao-cao/quan-he-vo-chong.html', 'favorite'],
      ['Tình trạng hôn nhân', '07-bao-cao/tinh-trang-hon-nhan.html', 'diversity_1'],
      ['Con nhân sự', '07-bao-cao/con-nhan-vien.html', 'child_care'],
      ['Hết hạn BHYT', '07-bao-cao/het-han-bhyt.html', 'medical_services'],
      ['Hết thử việc chưa ký HĐ', '07-bao-cao/het-thu-viec-chua-ky-hd.html', 'assignment_late'],
      ['Báo tăng BHXH', '07-bao-cao/bao-tang-bhxh.html', 'trending_up'],
      ['Báo giảm BHXH', '07-bao-cao/bao-giam-bhxh.html', 'trending_down'],
      ['Nhật ký tăng/giảm BHXH', '07-bao-cao/nhat-ky-tang-giam-bhxh.html', 'swap_vert'],
      ['Biểu thuế TNCN (Mẫu 2)', '07-bao-cao/thue-tncn-mau-2.html', 'receipt_long'],
      ['Tổng hợp lương năm', '07-bao-cao/tong-hop-luong-nam.html', 'calendar_month'],
      ['Nhân sự đi muộn', '07-bao-cao/nhan-su-di-muon.html', 'schedule'],
      ['Tổng hợp chấm công tháng', '07-bao-cao/tong-hop-cham-cong-thang.html', 'calendar_view_month'],
      ['Tổng hợp chấm công năm', '07-bao-cao/tong-hop-cham-cong-nam.html', 'date_range'],
      ['Tổng hợp nghỉ phép năm', '07-bao-cao/tong-hop-nghi-phep-nam.html', 'beach_access'],
      ['Báo cáo đổi ca', '07-bao-cao/bao-cao-doi-ca.html', 'published_with_changes'],
      ['Hồ sơ tuyển dụng', '07-bao-cao/bao-cao-ho-so-tuyen-dung.html', 'how_to_reg'],
      ['NS chưa tham gia đào tạo', '07-bao-cao/ns-chua-tham-gia-dao-tao.html', 'person_alert'],
      ['NS đã có chứng chỉ', '07-bao-cao/da-co-chung-chi.html', 'verified'],
      ['Hết hạn chứng chỉ', '07-bao-cao/het-han-chung-chi.html', 'event_busy'],
      ['Tra cứu học viên', '07-bao-cao/tra-cuu-hoc-vien.html', 'manage_search']
    ]],
    ['DANH MỤC', 'folder_open', [
      ['Địa lý hành chính', '08-danh-muc/dia-ly-hanh-chinh.html', 'map'],
      ['Địa điểm làm việc', '08-danh-muc/dia-diem-lam-viec.html', 'pin_drop'],
      ['Ca làm việc', '08-danh-muc/ca-lam-viec.html', 'schedule'],
      ['Chức danh', '08-danh-muc/chuc-danh.html', 'work'],
      ['Chức vụ', '08-danh-muc/chuc-vu.html', 'military_tech'],
      ['Tham số nhóm chức vụ', '08-danh-muc/tham-so-nhom-chuc-vu.html', 'tune'],
      ['Loại nghỉ', '08-danh-muc/loai-nghi.html', 'beach_access'],
      ['Loại quyết định', '08-danh-muc/loai-quyet-dinh.html', 'gavel'],
      ['Loại làm thêm', '08-danh-muc/loai-lam-them.html', 'more_time'],
      ['Ngạch bậc lương', '08-danh-muc/ngach-bac-luong.html', 'stairs'],
      ['Bảng lương', '08-danh-muc/danh-muc-bang-luong.html', 'payments'],
      ['Khu vực', '08-danh-muc/khu-vuc.html', 'map'],
      ['Bệnh viện (KCB)', '08-danh-muc/benh-vien.html', 'local_hospital']
    ]],
    ['HỆ THỐNG', 'settings', [
      ['Phân quyền người dùng', '09-he-thong/phan-quyen-nguoi-dung.html', 'admin_panel_settings'],
      ['Quản lý thông báo', '09-he-thong/quan-ly-thong-bao.html', 'notifications'],
      ['Nhập dữ liệu Excel', '09-he-thong/nhap-du-lieu-excel.html', 'upload_file'],
      ['Cấu hình hệ thống', '09-he-thong/cau-hinh-he-thong.html', 'settings'],
      ['Nhật ký đăng nhập', '09-he-thong/nhat-ky-dang-nhap.html', 'history'],
      ['Nhật ký đổi ca phòng ban', '09-he-thong/nhat-ky-doi-ca-phong-ban.html', 'swap_horiz'],
      ['Nhật ký đổi ca nhân sự', '09-he-thong/nhat-ky-doi-ca-nhan-su.html', 'sync_alt'],
      ['Nhật ký đổi mã nhân sự', '09-he-thong/nhat-ky-doi-ma-nhan-su.html', 'tag'],
      ['Nhật ký chỉnh sửa dữ liệu', '09-he-thong/nhat-ky-chinh-sua-du-lieu.html', 'edit_note'],
      ['Đổi mật khẩu', '09-he-thong/doi-mat-khau.html', 'lock_reset', ['09-he-thong/doi-mat-khau-B-tren-nen-dashboard.html', '09-he-thong/doi-mat-khau-xac-nhan-2-buoc.html']],
      ['Mật khẩu kỹ thuật', '09-he-thong/mat-khau-ky-thuat.html', 'key'],
      ['Mật khẩu xác nhận', '09-he-thong/mat-khau-xac-nhan.html', 'verified_user']
    ]]
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function safe(fn, dflt) { try { return fn(); } catch (e) { return dflt; } }

  var curPath = decodeURIComponent(location.pathname).replace(/\\/g, '/');
  function isActive(item) {
    var all = [item[1]].concat(item[3] || []);
    for (var i = 0; i < all.length; i++) { if (curPath.slice(-all[i].length) === all[i]) return true; }
    return false;
  }

  function ensureFonts() {
    function add(href) {
      if (document.querySelector('link[data-hrm-font="' + href + '"]')) return;
      var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; l.setAttribute('data-hrm-font', href); document.head.appendChild(l);
    }
    add('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
    add('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
  }

  function build(sb) {
    var saved = safe(function () { return JSON.parse(localStorage.getItem('hrm-nav-groups') || '{}'); }, {});
    var html = '<a class="sb-brand" href="' + ROOT + 'index.html" title="Thư viện màn hình">' +
      '<img alt="PMC HRM" src="' + ROOT + 'shared/logo.png"><span><b>PMC HRM</b><small>Quản trị Nhân sự</small></span></a>' +
      '<div class="sb-scroll"><nav aria-label="Menu chính">';
    MENU.forEach(function (g, gi) {
      var hasActive = g[2].some(isActive);
      var open = hasActive || saved[gi] === true;
      html += '<div class="sb-group' + (open ? '' : ' closed') + (hasActive ? ' has-active' : '') + '" data-g="' + gi + '">' +
        '<button type="button" class="sb-ghead" aria-expanded="' + open + '"><span>' + esc(g[0]) + '</span><span class="chev" aria-hidden="true">expand_more</span></button><div class="sb-items">';
      g[2].forEach(function (it) {
        var act = isActive(it);
        html += '<a class="sb-link' + (act ? ' active' : '') + '" href="' + ROOT + it[1] + '"' + (act ? ' aria-current="page"' : '') + '>' +
          '<span class="ic" aria-hidden="true">' + it[2] + '</span><span class="tx">' + esc(it[0]) + '</span></a>';
      });
      html += '</div></div>';
    });
    html += '</nav></div><div class="sb-foot">' +
      '<a class="sb-link" href="' + ROOT + 'index.html"><span class="ic" aria-hidden="true">apps</span><span class="tx">Thư viện màn hình</span></a>' +
      '<a class="sb-link" href="' + ROOT + '01-dang-nhap/dang-nhap-A-panel-brand.html"><span class="ic" aria-hidden="true">logout</span><span class="tx">Đăng xuất</span></a></div>';
    sb.innerHTML = html;

    sb.addEventListener('click', function (e) {
      var head = e.target.closest ? e.target.closest('.sb-ghead') : null;
      if (!head) return;
      var grp = head.parentNode, closed = grp.classList.toggle('closed');
      head.setAttribute('aria-expanded', String(!closed));
      var st = safe(function () { return JSON.parse(localStorage.getItem('hrm-nav-groups') || '{}'); }, {});
      st[grp.getAttribute('data-g')] = !closed;
      safe(function () { localStorage.setItem('hrm-nav-groups', JSON.stringify(st)); });
    });

    var sc = sb.querySelector('.sb-scroll'), act = sb.querySelector('.sb-link.active');
    var y = safe(function () { return parseInt(sessionStorage.getItem('hrm-nav-scroll'), 10); }, NaN);
    if (!isNaN(y)) sc.scrollTop = y;
    if (act) { var r = act.getBoundingClientRect(), sr = sc.getBoundingClientRect(); if (r.top < sr.top || r.bottom > sr.bottom) sc.scrollTop = act.offsetTop - sc.clientHeight / 2; }
    sc.addEventListener('scroll', function () { safe(function () { sessionStorage.setItem('hrm-nav-scroll', String(sc.scrollTop)); }); });
    // lưu vị trí cuộn ngay trước khi rời trang
    sb.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) safe(function () { sessionStorage.setItem('hrm-nav-scroll', String(sc.scrollTop)); }); });
  }

  // Dời lề nội dung/header từ độ rộng sidebar cũ sang 256px (chỉ khi khác nhau)
  function shiftOffsets(sb, oldW) {
    if (!oldW || oldW === NEW_W) return;
    var all = document.body.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el === sb || sb.contains(el)) continue;
      var s = getComputedStyle(el);
      if (s.position === 'fixed' && Math.abs(parseFloat(s.left) - oldW) < 1.5 && s.left !== 'auto') el.style.left = NEW_W + 'px';
      else if (Math.abs(parseFloat(s.marginLeft) - oldW) < 1.5) el.style.marginLeft = NEW_W + 'px';
      else if (Math.abs(parseFloat(s.paddingLeft) - oldW) < 1.5 && el.getBoundingClientRect().width > 500) el.style.paddingLeft = NEW_W + 'px';
    }
  }

  // Bảng nhiều cột: đảm bảo có vùng cuộn ngang & độ rộng tối thiểu để cột không bị ép/cắt
  function fixTables() {
    var main = document.querySelector('main') || document.body;
    var tables = main.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      var t = tables[i];
      if (t.closest('#app-sidebar') || t.getAttribute('data-fixed')) continue;
      var headRow = t.querySelector('thead tr:last-child') || t.rows[0];
      var cols = headRow ? headRow.children.length : 0;
      if (cols < 6) continue;
      t.setAttribute('data-fixed', '1');
      var need = cols * 128;
      if (t.getBoundingClientRect().width < need - 4) t.style.minWidth = need + 'px';
      // tìm vùng cuộn ngang gần nhất; nếu bị overflow hidden thì mở thành auto
      var p = t.parentElement, scroller = null, guard = 0;
      while (p && p !== main && guard++ < 8) {
        var ox = getComputedStyle(p).overflowX;
        if (ox === 'auto' || ox === 'scroll') { scroller = p; break; }
        if (ox === 'hidden' || ox === 'clip') { p.style.overflowX = 'auto'; scroller = p; break; }
        p = p.parentElement;
      }
      if (!scroller) {
        var wrap = document.createElement('div');
        wrap.style.overflowX = 'auto'; wrap.style.maxWidth = '100%';
        t.parentNode.insertBefore(wrap, t); wrap.appendChild(t);
      }
    }
  }

  // Nội dung dính sát header cố định -> chừa khoảng thở 20px
  function fixTopGap() {
    var hdr = document.querySelector('header.fixed, header[class*="fixed"]');
    var main = document.querySelector('main');
    if (!hdr || !main || getComputedStyle(hdr).position !== 'fixed') return;
    var hb = hdr.getBoundingClientRect().bottom, first = null;
    for (var c = main.firstElementChild; c; c = c.nextElementSibling) {
      var pos = getComputedStyle(c).position;
      if (c.getBoundingClientRect().height > 0 && pos !== 'fixed' && pos !== 'absolute') { first = c; break; }
    }
    if (!first) return;
    var gap = first.getBoundingClientRect().top - hb;
    if (gap < 14 && !main.getAttribute('data-gap-fixed')) {
      main.setAttribute('data-gap-fixed', '1');
      main.style.paddingTop = ((parseFloat(getComputedStyle(main).paddingTop) || 0) + (20 - Math.max(gap, 0))) + 'px';
    }
  }

  function burger(sb) {
    if (sb.getAttribute('data-mode') !== 'fixed') return;
    var b = document.createElement('button');
    b.id = 'sb-burger'; b.type = 'button'; b.setAttribute('aria-label', 'Mở menu'); b.textContent = 'menu';
    b.addEventListener('click', function () { sb.classList.toggle('open'); });
    document.body.appendChild(b);
    document.addEventListener('click', function (e) { if (sb.classList.contains('open') && !sb.contains(e.target) && e.target !== b) sb.classList.remove('open'); });
  }

  function init() {
    var sb = document.getElementById('app-sidebar');
    if (!sb) return;
    ensureFonts();
    build(sb);
    burger(sb);
    var oldW = parseInt(sb.getAttribute('data-old-w'), 10);
    shiftOffsets(sb, oldW);
    function layoutFixes() { shiftOffsets(sb, oldW); safe(fixTables); safe(fixTopGap); }
    window.addEventListener('load', function () { layoutFixes(); setTimeout(layoutFixes, 700); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
