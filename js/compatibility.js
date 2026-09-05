/*
  tiro.legal — hardware compatibility check
  Detects RAM/cores via navigator API and highlights matching tier.
  Loaded on the product page.
*/

(function () {
  'use strict';

  const button = document.getElementById('compatibilityButton');
  const summary = document.getElementById('compatibilitySummary');
  const meta = document.getElementById('compatibilityMeta');
  const hardwareRows = Array.from(document.querySelectorAll('[data-tier]'));

  if (!button) return;

  const tierLabels = {
    light: 'Hafif',
    standard: 'Standart',
    power: 'Çok Güçlü',
    maximum: 'Maksimum'
  };

  function renderMeta(state, label, text, detail) {
    if (!meta) return;
    meta.dataset.state = state;
    const detailHTML = detail
      ? `<p class="hw-meta-detail">${detail}</p>`
      : '';
    meta.innerHTML = `
      <span class="status-pill">${label}</span>
      <p class="hw-meta-headline">${text}</p>
      ${detailHTML}
    `;
  }

  function clearRows() {
    hardwareRows.forEach((row) => row.classList.remove('is-active'));
  }

  function detect() {
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);

    if (isMobile) {
      return {
        status: 'mobile',
        tier: null,
        summary: 'tiro masaüstü uygulaması olarak konumlanır. Mobil cihazlarda çalışma profili önerilmez.',
        label: 'Mobil cihaz',
        text: 'Bu sayfa masaüstü kurulum için tasarlandı. Tabloyu referans alabilir, ayrıntılar için iletişime geçebilirsiniz.'
      };
    }

    const deviceMemory = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency || 0;
    const os = /Mac/.test(platform) || /Mac OS X/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : 'Diğer';

    if (!deviceMemory) {
      return {
        status: 'unavailable',
        tier: null,
        summary: 'Bu tarayıcı RAM bilgisini paylaşmıyor. Yandaki tabloyu referans alarak uygun profili seçebilirsiniz.',
        label: 'Kısmi görünürlük',
        text: `${os} algılandı. Safari ve Firefox benzeri tarayıcılar donanım bilgisini sınırlayabilir.`
      };
    }

    let tier = 'light';
    if (deviceMemory >= 24 || cores >= 12) tier = 'maximum';
    else if (deviceMemory >= 16 || cores >= 10) tier = 'power';
    else if (deviceMemory >= 8 || cores >= 6) tier = 'standard';

    return {
      status: 'success',
      tier,
      summary: `Sisteminiz için önerilen profil: ${tierLabels[tier]}.`,
      label: 'Öneri hazır',
      text: `Sisteminiz <strong>${tierLabels[tier]}</strong> profiline uygun gözüküyor.`,
      detail: 'Kesin kurulum kararı için gerçek cihaz değerlendirmesi yapılır.'
    };
  }

  button.addEventListener('click', () => {
    clearRows();
    summary.textContent = 'Sistem profili okunuyor…';
    renderMeta('loading', 'Analiz', 'Tarayıcının paylaşabildiği donanım verisi kontrol ediliyor.');

    window.setTimeout(() => {
      const result = detect();
      if (result.tier) {
        const row = document.querySelector(`[data-tier="${result.tier}"]`);
        if (row) row.classList.add('is-active');
      }
      summary.textContent = result.summary;
      renderMeta(result.status, result.label, result.text, result.detail);
    }, 420);
  });
})();
