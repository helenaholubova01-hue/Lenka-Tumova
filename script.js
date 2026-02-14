// ============================================================
// Sticky header
// ============================================================
(function () {
  var header = document.getElementById('main-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ============================================================
// Hamburger menu
// ============================================================
(function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.getElementById('top-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ============================================================
// Kontaktní formulář – základní validace
// ============================================================
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    // Odstraň předchozí chyby
    form.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
    form.querySelectorAll('.input-error').forEach(function (el) { el.classList.remove('input-error'); });

    var required = form.querySelectorAll('[required]');
    required.forEach(function (field) {
      if (!field.value.trim()) {
        field.classList.add('input-error');
        var err = document.createElement('span');
        err.className = 'form-error';
        err.textContent = 'Toto pole je povinné.';
        field.parentNode.appendChild(err);
        valid = false;
      }
    });

    var email = form.querySelector('#email');
    if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('input-error');
      var err = document.createElement('span');
      err.className = 'form-error';
      err.textContent = 'Zadejte platnou e-mailovou adresu.';
      email.parentNode.appendChild(err);
      valid = false;
    }

    // Honeypot – pokud bot vyplnil skryté pole, formulář tiše zahodíme
    var honeypot = form.querySelector('#website');
    if (honeypot && honeypot.value.trim() !== '') { return; }

    if (valid) {
      var btn = form.querySelector('.btn-submit');
      btn.textContent = 'Odesílám…';
      btn.disabled = true;
      // Zde by bylo napojení na backend (Formspree, emailjs apod.)
      setTimeout(function () {
        form.innerHTML = '<p class="form-success">Děkuji za zprávu! Ozvu se ti co nejdříve. 🌸</p>';
      }, 1000);
    }
  });
})();

// ============================================================
// Testimonials – carousel šipky + automatické přesouvání
// ============================================================
(function () {
  var track = document.getElementById('testimonial-track');
  if (!track) return;

  var prevBtn = document.querySelector('.carousel-btn--prev');
  var nextBtn = document.querySelector('.carousel-btn--next');

  function getCardWidth() {
    var card = track.querySelector('.testimonial-card');
    if (!card) return 380;
    return card.offsetWidth + 24; // šířka karty + gap
  }

  function scrollNext() {
    var maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    }
  }

  // Automatické přesouvání každé 4 sekundy
  var autoTimer = setInterval(scrollNext, 4000);

  // Pauza při hoveru nebo dotyku
  function pauseAuto() { clearInterval(autoTimer); }
  function resumeAuto() { autoTimer = setInterval(scrollNext, 4000); }

  track.addEventListener('mouseenter', pauseAuto);
  track.addEventListener('mouseleave', resumeAuto);
  track.addEventListener('touchstart', pauseAuto, { passive: true });
  track.addEventListener('touchend', resumeAuto, { passive: true });

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      pauseAuto();
      track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
      resumeAuto();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      pauseAuto();
      track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
      resumeAuto();
    });
  }
})();

// ============================================================
// Testimonials – Číst více / Číst méně
// ============================================================
(function () {
  document.querySelectorAll('.testimonial-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.testimonial-card');
      var expanded = card.classList.toggle('expanded');
      btn.textContent = expanded ? 'Číst méně' : 'Číst více';
    });
  });
})();

// ============================================================
// Instagram galerie – carousel šipky + automatické přesouvání
// ============================================================
(function () {
  var gallery = document.getElementById('instagram-gallery');
  if (!gallery) return;

  var prevBtn = document.querySelector('.instagram-btn--prev');
  var nextBtn = document.querySelector('.instagram-btn--next');

  function getItemWidth() {
    var item = gallery.querySelector('.instagram-item');
    if (!item) return 260;
    return item.offsetWidth + 20; // šířka položky + gap
  }

  function scrollNext() {
    var maxScroll = gallery.scrollWidth - gallery.clientWidth;
    if (gallery.scrollLeft >= maxScroll - 4) {
      gallery.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      gallery.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    }
  }

  var autoTimer = setInterval(scrollNext, 3500);

  function pauseAuto() { clearInterval(autoTimer); }
  function resumeAuto() { autoTimer = setInterval(scrollNext, 3500); }

  gallery.addEventListener('mouseenter', pauseAuto);
  gallery.addEventListener('mouseleave', resumeAuto);
  gallery.addEventListener('touchstart', pauseAuto, { passive: true });
  gallery.addEventListener('touchend', resumeAuto, { passive: true });

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      pauseAuto();
      gallery.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
      resumeAuto();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      pauseAuto();
      gallery.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
      resumeAuto();
    });
  }
})();

// ============================================================
// Instagram Feed Fetcher (Custom/Free)
// ============================================================
(function () {
  const container = document.getElementById('instagram-gallery');
  if (!container) return;

  // JSON feed z Behold.so (veřejně dostupný endpoint pro tento feed ID)
  // Toto obchází nutnost placeného widgetu pro slider
  const feedUrl = 'https://feeds.behold.so/cuk6vi2SUC6zHi4xKt1e';

  fetch(feedUrl)
    .then(function (response) {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(function (data) {
      container.innerHTML = ''; // Vyčistit "Načítám..."

      if (!data.posts || data.posts.length === 0) {
        container.innerHTML = '<p class="loading-text">Zatím zde nejsou žádné příspěvky.</p>';
        return;
      }

      data.posts.forEach(function (post) {
        const link = document.createElement('a');
        link.href = post.permalink || '#';
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'instagram-item';
        link.title = post.caption || 'Instagram post';

        if (post.mediaType === 'VIDEO') {
          // Video post – přehrát přímo v gridu
          const video = document.createElement('video');
          video.src = post.mediaUrl;
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.setAttribute('playsinline', '');
          link.appendChild(video);
        } else {
          // Foto post – najít nejlepší rozlišení
          let imgUrl = post.mediaUrl;
          if (post.sizes) {
            if (post.sizes.large) imgUrl = post.sizes.large.mediaUrl;
            else if (post.sizes.medium) imgUrl = post.sizes.medium.mediaUrl;
          }
          const img = document.createElement('img');
          img.src = imgUrl;
          img.alt = post.caption ? post.caption.substring(0, 80) + '...' : 'Instagram photo';
          img.loading = 'lazy';
          link.appendChild(img);
        }

        container.appendChild(link);
      });
    })
    .catch(function (error) {
      console.error('Chyba při načítání Instagram feedu:', error);
      container.innerHTML = '<p class="loading-text">Nepodařilo se načíst fotky. <a href="https://www.instagram.com/lenka.tumova.poradkyne" target="_blank" style="color:var(--rose);text-decoration:underline">Přejít na můj Instagram</a>.</p>';
    });
})();
