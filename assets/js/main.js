// ── Language toggle ──────────────────────────────────────────────────
(function () {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const path = window.location.pathname;
    if (path.endsWith('index.en.html')) {
      window.location.href = path.replace('index.en.html', 'index.html');
    } else {
      window.location.href = path.replace('index.html', 'index.en.html');
    }
  });
})();

// ── Lightbox with prev / next navigation ─────────────────────────────
(function () {
  // Build lightbox DOM
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML =
    '<button id="lb-close" title="关闭 / Close">&#10005;</button>' +
    '<button id="lb-prev" title="上一张 / Previous">&#8249;</button>' +
    '<img id="lb-img" src="" alt="">' +
    '<button id="lb-next" title="下一张 / Next">&#8250;</button>' +
    '<div id="lb-caption"></div>';
  document.body.appendChild(lb);

  const lbImg   = document.getElementById('lb-img');
  const lbCap   = document.getElementById('lb-caption');
  const lbClose = document.getElementById('lb-close');
  const lbPrev  = document.getElementById('lb-prev');
  const lbNext  = document.getElementById('lb-next');

  // Current navigation group
  let group = [];   // [{src, caption}]
  let gIdx  = 0;

  function getSrc(el) {
    return el.dataset.full || el.src || (el.querySelector('img') && el.querySelector('img').src) || '';
  }
  function getCap(el) {
    return el.dataset.caption ||
      (el.closest('.screenshot-item') && el.closest('.screenshot-item').querySelector('.screenshot-caption') && el.closest('.screenshot-item').querySelector('.screenshot-caption').textContent) ||
      (el.closest('.carousel-slide') && el.closest('.carousel-slide').querySelector('.carousel-slide-caption') && el.closest('.carousel-slide').querySelector('.carousel-slide-caption').textContent) ||
      '';
  }

  function show(idx) {
    gIdx = ((idx % group.length) + group.length) % group.length;
    lbImg.src = group[gIdx].src;
    lbCap.textContent = group[gIdx].caption;
    // show arrows only when there are multiple images
    var multi = group.length > 1;
    lbPrev.style.display = multi ? 'flex' : 'none';
    lbNext.style.display = multi ? 'flex' : 'none';
  }

  function open(el) {
    // Build group from the nearest common container that has multiple .lb-trigger elements
    var container = el.closest('.screenshot-grid') || el.closest('.carousel') || el.parentElement;
    var siblings = container ? Array.from(container.querySelectorAll('.lb-trigger')) : [el];
    if (siblings.length <= 1) siblings = [el];

    group = siblings.map(function (s) { return { src: getSrc(s), caption: getCap(s) }; });
    var startIdx = siblings.indexOf(el);
    if (startIdx < 0) startIdx = 0;

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(startIdx);
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; }, 300);
  }

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', function () { show(gIdx - 1); });
  lbNext.addEventListener('click', function () { show(gIdx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   show(gIdx - 1);
    if (e.key === 'ArrowRight')  show(gIdx + 1);
  });

  function bindTriggers() {
    document.querySelectorAll('.lb-trigger').forEach(function (el) {
      if (el._lbBound) return;
      el._lbBound = true;
      el.addEventListener('click', function () {
        var src = getSrc(el);
        if (src) open(el);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindTriggers);
  } else {
    bindTriggers();
  }
})();
