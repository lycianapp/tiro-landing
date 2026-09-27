(function () {
  'use strict';

  var ust = document.querySelector('.ust');
  var dugme = document.querySelector('.menu-ac');
  if (!ust || !dugme) return;

  dugme.addEventListener('click', function () {
    var acik = ust.classList.toggle('acik');
    dugme.setAttribute('aria-expanded', String(acik));
  });
})();
