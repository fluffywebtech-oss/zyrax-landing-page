// ─── Data ────────────────────────────────────────────────────────────────────
var desktopTransformations = [
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnivyaBefore.6774c917.jpg&w=384&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnivyaAfter.9c94e16f.png&w=384&q=75',
    beforeAlt: 'Nivya Before',
    afterAlt: 'Nivya After',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 130',
    name: 'Nivya Lost',
    kgs: '23kgs',
    duration: '4 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkajalChauhanBefore.2041c188.png&w=384&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkajalChauhanAfter.5a5a2e6f.png&w=384&q=75',
    beforeAlt: 'Kajal Chauhan Before',
    afterAlt: 'Kajal Chauhan After',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 300',
    name: 'Kajal chauhan Lost',
    kgs: '50kgs',
    duration: '10 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsamataBefore.d8477866.png&w=384&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsamataAfter.71ddd9e5.png&w=384&q=75',
    beforeAlt: 'Samata Before',
    afterAlt: 'Samata After',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 90',
    name: 'Samata Lost',
    kgs: '16kgs',
    duration: '3 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FanjaliBefore.c34130f6.png&w=384&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FanjaliAfter.f6018dae.png&w=384&q=75',
    beforeAlt: 'Anjali Before',
    afterAlt: 'Anjali After',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 90',
    name: 'Anjali Lost',
    kgs: '18kgs',
    duration: '3 Months',
  },
];

var mobileTransformations = [
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.f74b5791.png&w=256&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.e1b038f1.png&w=256&q=75',
    beforeAlt: 'Transformation Day 0',
    afterAlt: 'Transformation Day 90',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 90',
    name: 'Avika Lose',
    kgs: '20kgs',
    duration: '2 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.5f5bd21c.png&w=256&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.387f7fc9.png&w=256&q=75',
    beforeAlt: 'Transformation Day 0',
    afterAlt: 'Transformation Day 120',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 120',
    name: 'Sonia Lose',
    kgs: '28kgs',
    duration: '3 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.a6493ff5.png&w=256&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.1eca05f3.png&w=256&q=75',
    beforeAlt: 'Transformation Day 0',
    afterAlt: 'Transformation Day 90',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 90',
    name: 'Aishwarya Lose',
    kgs: '10 kgs',
    duration: '2 Months',
  },
  {
    beforeSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.3423501e.png&w=256&q=75',
    afterSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.0fe1f880.png&w=256&q=75',
    beforeAlt: 'Transformation Day 0',
    afterAlt: 'Transformation Day 180',
    beforeDay: 'DAY 0',
    afterDay: 'DAY 180',
    name: 'Mansi Lose',
    kgs: '40kgs',
    duration: '3 Months',
  },
];

var testimonials = [
  {
    imgSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUser1.d9697b5e.png&w=128&q=75',
    imgAlt: 'User 1',
    name: 'Kashvi Sharma',
    text: 'Dealing with depression and PCOS, this platform became a lifeline. Personalized workouts and a PCOS-friendly nutrition plan not only tackled my health concerns but also helped me kick stress eating. Real support, real changes',
  },
  {
    imgSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUser2.a00626d7.png&w=128&q=75',
    imgAlt: 'User 2',
    name: 'Sohini Das',
    text: 'Not dealing with weight loss, but I was completely inactive. Came across an ad, randomly clicked, and chose Zumba on a whim. Perfect for my laziness, easy to do at home, and surprisingly enjoyable. It got me active, resolved mood swings, and the added bonus of a free personalized diet plan.',
  },
  {
    imgSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUser3.d7feecef.png&w=128&q=75',
    imgAlt: 'User 3',
    name: 'Ananya Singh',
    text: "My sister does Zumba on your platform, and she recommended yoga to me. I can't express how calm I feel now! Dealing with anger due to constant overthinking, it has genuinely helped me. Struggling with shortness of breath, I love how it aids me. Thank you, Zyrax Fitness.",
  },
  {
    imgSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUser4.3c758311.png&w=128&q=75',
    imgAlt: 'User 4',
    name: 'Meenakshi Iyer',
    text: 'I had to lose weight for my wedding, and trusting online platforms can be tricky. I spoke to a health coach named Priyanka, and she was so so understanding as I had a hectic schedule she was very helpful she provided excellent support and guidance.The diet support was beneficial, and I also did Bhangra it was absolutely fun + beneficiary – the tutor was fantastic!!! It helped me alot !',
  },
  {
    imgSrc:
      'https://www.hobfittransformation.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUser5.67fedf18.png&w=128&q=75',
    imgAlt: 'User 5',
    name: 'Priya Singh',
    text: "Struggled with back pain for 4 months, my focus wasn't just on general fitness, but on addressing persistent back pain. Your program proved to be a game-changer. Doubts turned into relief. Thanks a bunch for easing my back pain and bringing positivity to my life.",
  },
];

var WHATSAPP_NUMBER = '919286800223';

// Opens WhatsApp reliably. window.open('_blank') is silently blocked by
// popup blockers (very common on mobile), so fall back to navigating the
// current tab if the new tab was refused.
function openWhatsApp(waUrl) {
  var win = window.open(waUrl, '_blank');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = waUrl;
  }
}

// ── Google Sheet lead capture ─────────────────────────────────────────────
// Paste your Google Apps Script Web App URL here (see setup steps).
// Leave as-is to disable; the form still works via WhatsApp.
var SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxEgEhQ2FfC0FeM17-jLMudGTfUSemNEJgLFVW61YZ2g4AnkcPZh15zwh8fZfCprY08rA/exec';

// Sends a lead to the Google Sheet. Uses sendBeacon so it survives the page
// navigating to WhatsApp; text/plain avoids a CORS preflight to Apps Script.
function sendLeadToSheet(lead) {
  if (!SHEET_ENDPOINT || SHEET_ENDPOINT.indexOf('REPLACE_WITH_YOUR') !== -1) return;
  try {
    lead.page = location.href;
    lead.submittedAt = new Date().toISOString();
    var payload = JSON.stringify(lead);
    if (navigator.sendBeacon) {
      navigator.sendBeacon(SHEET_ENDPOINT, new Blob([payload], { type: 'text/plain;charset=UTF-8' }));
    } else {
      fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: payload,
      });
    }
  } catch (e) {
    /* never block the user's WhatsApp handoff on analytics */
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderTransformationCard(card, variant) {
  var el = document.createElement('div');
  el.className = 'gr_hero ' + (variant === 'mobile' ? 'mobile-card' : 'transformation-card');
  el.innerHTML =
    '<div class="card-images">' +
    '<div class="card-half">' +
    '<img alt="' + escapeHtml(card.beforeAlt) + '" src="' + card.beforeSrc + '" />' +
    '<p class="card-day">' + escapeHtml(card.beforeDay) + '</p>' +
    '</div>' +
    '<div class="card-half">' +
    '<img alt="' + escapeHtml(card.afterAlt) + '" src="' + card.afterSrc + '" />' +
    '<p class="card-day">' + escapeHtml(card.afterDay) + '</p>' +
    '</div>' +
    '</div>' +
    '<p class="card-caption">' +
    escapeHtml(card.name) + ' <span class="accent">' + escapeHtml(card.kgs) + '</span> in ' +
    '<span class="accent">' + escapeHtml(card.duration) + '</span>' +
    '</p>';
  return el;
}

function renderTestimonialSlide(testimonial) {
  var el = document.createElement('div');
  el.className = 'embla__slide';
  el.innerHTML =
    '<div class="testimonial-header">' +
    '<img alt="' + escapeHtml(testimonial.imgAlt) + '" src="' + testimonial.imgSrc + '" />' +
    '<div class="testimonial-meta">' +
    '<h3>' + escapeHtml(testimonial.name) + '</h3>' +
    '<span class="verified"><span class="verified-tick">✓</span> Verified Member</span>' +
    '</div>' +
    '</div>' +
    '<div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>' +
    '<p class="testimonial-text">' + escapeHtml(testimonial.text) + '</p>';
  return el;
}

document.addEventListener('DOMContentLoaded', function () {
  // ── Scroll reveal ──
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ── Render transformation grids ──
  var desktopGrid = document.getElementById('desktop-transformations');
  var desktopInner = document.createElement('div');
  desktopInner.className = 'transformation-grid';
  desktopTransformations.forEach(function (card) {
    desktopInner.appendChild(renderTransformationCard(card, 'desktop'));
  });
  desktopGrid.appendChild(desktopInner);

  var mobileGrid = document.getElementById('mobile-transformations');
  var mobileInner = document.createElement('div');
  mobileInner.className = 'mobile-grid';
  mobileTransformations.forEach(function (card) {
    mobileInner.appendChild(renderTransformationCard(card, 'mobile'));
  });
  mobileGrid.appendChild(mobileInner);

  // ── Render testimonials + swipeable auto-scroll carousel ──
  var emblaRef = document.getElementById('embla');
  var emblaContainer = document.getElementById('embla-container');
  testimonials.forEach(function (t) {
    emblaContainer.appendChild(renderTestimonialSlide(t));
  });

  var totalSlides = testimonials.length;
  var emblaIndex = 0;
  var emblaTimer = null;

  function getSlideStep() {
    var firstSlide = emblaContainer.children[0];
    if (!firstSlide) return 0;
    var gap = parseFloat(getComputedStyle(emblaContainer).columnGap) || 0;
    return firstSlide.getBoundingClientRect().width + gap;
  }

  function updateEmbla() {
    var slideWidth = getSlideStep();
    emblaContainer.style.transform = 'translate3d(-' + emblaIndex * slideWidth + 'px, 0px, 0px)';
  }

  function startAutoplay() {
    stopAutoplay();
    emblaTimer = setInterval(function () {
      emblaIndex = (emblaIndex + 1) % totalSlides;
      updateEmbla();
    }, 3000);
  }

  function stopAutoplay() {
    if (emblaTimer) {
      clearInterval(emblaTimer);
      emblaTimer = null;
    }
  }

  startAutoplay();
  window.addEventListener('resize', updateEmbla);

  // ── Swipe / drag support (touch + mouse) ──
  var isDragging = false;
  var dragStartX = 0;
  var dragDeltaX = 0;

  emblaRef.addEventListener('pointerdown', function (event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragDeltaX = 0;
    stopAutoplay();
    emblaContainer.style.transition = 'none';
    emblaRef.setPointerCapture(event.pointerId);
  });

  emblaRef.addEventListener('pointermove', function (event) {
    if (!isDragging) return;
    dragDeltaX = event.clientX - dragStartX;
    var slideWidth = getSlideStep();
    var basePosition = emblaIndex * slideWidth;
    emblaContainer.style.transform = 'translate3d(' + (-basePosition + dragDeltaX) + 'px, 0px, 0px)';
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    emblaContainer.style.transition = '';

    var SWIPE_THRESHOLD = 50;
    if (dragDeltaX <= -SWIPE_THRESHOLD) {
      emblaIndex = Math.min(emblaIndex + 1, totalSlides - 1);
    } else if (dragDeltaX >= SWIPE_THRESHOLD) {
      emblaIndex = Math.max(emblaIndex - 1, 0);
    }
    updateEmbla();
    startAutoplay();
  }

  emblaRef.addEventListener('pointerup', endDrag);
  emblaRef.addEventListener('pointercancel', endDrag);
  emblaRef.addEventListener('pointerleave', function () {
    if (isDragging) endDrag();
  });

  // ── Lead form (3-step) ──
  var form = document.getElementById('lead-form');
  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone');
  var nameError = document.getElementById('name-error');
  var phoneError = document.getElementById('phone-error');
  var ageInput = document.getElementById('age');
  var ageError = document.getElementById('age-error');
  var genderSelect = document.getElementById('gender');
  var weightError = document.getElementById('weight-error');
  var goalError = document.getElementById('goal-error');
  var healthError = document.getElementById('health-error');
  var lifestyleError = document.getElementById('lifestyle-error');
  var paidplanError = document.getElementById('paidplan-error');

  var stepPanels = form.querySelectorAll('.form-step');
  var dots = document.querySelectorAll('.progress-dots .dot');

  function goToStep(stepNumber) {
    stepPanels.forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-step') !== String(stepNumber);
    });
    dots.forEach(function (dot) {
      dot.classList.toggle('dot-active', dot.getAttribute('data-dot') === String(stepNumber));
    });
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function checkedValue(name) {
    var checked = form.querySelector('input[name="' + name + '"]:checked');
    return checked ? checked.value : '';
  }

  function checkedValues(name) {
    var checked = form.querySelectorAll('input[name="' + name + '"]:checked');
    return Array.prototype.map.call(checked, function (input) {
      return input.value;
    });
  }

  phoneInput.addEventListener('input', function () {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
  });

  // "None" health condition is exclusive of every other option.
  var healthCheckboxes = form.querySelectorAll('input[name="health"]');
  healthCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.hasAttribute('data-none')) {
        if (checkbox.checked) {
          healthCheckboxes.forEach(function (other) {
            if (other !== checkbox) other.checked = false;
          });
        }
      } else if (checkbox.checked) {
        healthCheckboxes.forEach(function (other) {
          if (other.hasAttribute('data-none')) other.checked = false;
        });
      }
    });
  });

  function validateStep1() {
    var isValid = true;
    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();

    if (!name) {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    if (phone.length !== 10) {
      phoneError.textContent = 'Please enter a valid 10-digit number.';
      isValid = false;
    } else {
      phoneError.textContent = '';
    }

    return isValid;
  }

  function validateStep2() {
    var isValid = true;
    var age = ageInput.value.trim();

    if (!age || Number(age) < 10 || Number(age) > 100) {
      ageError.textContent = 'Please enter a valid age.';
      isValid = false;
    } else {
      ageError.textContent = '';
    }

    if (!checkedValue('weight')) {
      weightError.textContent = 'Please select your current weight.';
      isValid = false;
    } else {
      weightError.textContent = '';
    }

    if (!checkedValue('goal')) {
      goalError.textContent = 'Please select your goal.';
      isValid = false;
    } else {
      goalError.textContent = '';
    }

    return isValid;
  }

  function validateStep3() {
    var isValid = true;

    if (checkedValues('health').length === 0) {
      healthError.textContent = 'Please select at least one option.';
      isValid = false;
    } else {
      healthError.textContent = '';
    }

    if (!checkedValue('lifestyle')) {
      lifestyleError.textContent = 'Please select your lifestyle.';
      isValid = false;
    } else {
      lifestyleError.textContent = '';
    }

    if (!checkedValue('paidplan')) {
      paidplanError.textContent = 'Please select an option.';
      isValid = false;
    } else {
      paidplanError.textContent = '';
    }

    return isValid;
  }

  form.querySelectorAll('[data-goto-step]').forEach(function (button) {
    button.addEventListener('click', function () {
      var currentStep = button.closest('.form-step').getAttribute('data-step');
      var isValid = currentStep === '1' ? validateStep1() : validateStep2();
      if (isValid) {
        goToStep(button.getAttribute('data-goto-step'));
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateStep3()) {
      return;
    }

    var message =
      'Hi Zyrax Fitness, I want to book a consultation call.\n' +
      'Name: ' + nameInput.value.trim() + '\n' +
      'WhatsApp: ' + phoneInput.value.trim() + '\n' +
      'Age: ' + ageInput.value.trim() + '\n' +
      'Gender: ' + genderSelect.value + '\n' +
      'Current Weight: ' + checkedValue('weight') + '\n' +
      'Goal: ' + checkedValue('goal') + '\n' +
      'Health Conditions: ' + checkedValues('health').join(', ') + '\n' +
      'Lifestyle: ' + checkedValue('lifestyle') + '\n' +
      'Comfortable with paid plan: ' + checkedValue('paidplan');

    // Save the lead to Google Sheet before handing off to WhatsApp.
    sendLeadToSheet({
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      age: ageInput.value.trim(),
      gender: genderSelect.value,
      weight: checkedValue('weight'),
      goal: checkedValue('goal'),
      health: checkedValues('health').join(', '),
      lifestyle: checkedValue('lifestyle'),
      paidPlan: checkedValue('paidplan'),
    });

    var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    openWhatsApp(waUrl);
  });

  // ── Floating WhatsApp button ──
  var whatsappFab = document.getElementById('whatsapp-fab');
  whatsappFab.addEventListener('click', function () {
    var waUrl =
      'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi Zyrax Fitness, I want to know more');
    openWhatsApp(waUrl);
  });
});
