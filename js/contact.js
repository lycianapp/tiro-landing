/*
  tiro.legal — contact form
  Client-side validation + Web3Forms submit.
  Loaded on the contact page.
*/

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  function setFeedback(state) {
    if (!feedback) return;
    feedback.className = `form-feedback ${state}`;
  }

  function setFieldError(name, message) {
    const field = form.elements[name];
    const error = form.querySelector(`[data-error-for="${name}"]`);
    if (!field || !error) return;
    error.textContent = message;
    field.classList.toggle('is-invalid', Boolean(message));
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    setFieldError('name', '');
    setFieldError('email', '');
    setFieldError('message', '');

    let hasError = false;

    if (name.length < 3) {
      setFieldError('name', 'Lütfen en az 3 karakter girin.');
      hasError = true;
    }

    if (!validateEmail(email)) {
      setFieldError('email', 'Geçerli bir e-posta adresi girin.');
      hasError = true;
    }

    if (message.length < 16) {
      setFieldError('message', 'Lütfen en az 16 karakterlik kısa bir not ekleyin.');
      hasError = true;
    }

    if (hasError) {
      setFeedback('error');
      return;
    }

    setFeedback('loading');

    const data = new FormData(form);
    data.set('replyto', email);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setFeedback('success');
        form.reset();
      } else {
        setFeedback('network-error');
      }
    } catch (_err) {
      setFeedback('network-error');
    }
  });
})();
