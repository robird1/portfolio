(function () {
  'use strict';

  const content = window.__CONTENT__;
  let currentLang = localStorage.getItem('lang') || window.__DEFAULT_LANG__ || 'en';

  function getPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = getPath(content[lang], node.dataset.i18n);
      if (typeof value === 'string') node.textContent = value;
    });
  }

  function renderStats(lang) {
    const container = document.getElementById('statsRow');
    container.innerHTML = '';
    content[lang].hero.stats.forEach((stat) => {
      const item = el('div', 'stat');
      item.appendChild(el('span', 'stat-value', stat.value));
      item.appendChild(el('span', 'stat-label', stat.label));
      container.appendChild(item);
    });
  }

  function renderFacts(lang) {
    const container = document.getElementById('factsList');
    container.innerHTML = '';
    content[lang].about.facts.forEach((fact) => {
      const row = el('div', 'fact-row');
      row.appendChild(el('span', 'fact-label', fact.label));
      row.appendChild(el('span', 'fact-value', fact.value));
      container.appendChild(row);
    });
  }

  function renderWork(lang) {
    const container = document.getElementById('workGrid');
    container.innerHTML = '';
    content[lang].work.items.forEach((item) => {
      const card = el('article', 'work-card reveal');

      const top = el('div', 'work-card-top');
      top.appendChild(el('span', 'tag-badge', item.tag));
      top.appendChild(el('span', 'work-period', item.period));
      card.appendChild(top);

      card.appendChild(el('h3', 'work-title', item.title));
      card.appendChild(el('p', 'work-summary', item.summary));

      const stack = el('div', 'stack-tags');
      item.stack.forEach((tech) => stack.appendChild(el('span', 'tag', tech)));
      card.appendChild(stack);

      const list = el('ul', 'work-highlights');
      item.highlights.forEach((line) => list.appendChild(el('li', null, line)));
      card.appendChild(list);

      if (item.screenshots && item.screenshots.length) {
        card.appendChild(el('p', 'gallery-label', content[lang].work.galleryLabel));
        const gallery = el('div', 'work-gallery');
        item.screenshots.forEach((shot, index) => {
          const thumb = document.createElement('button');
          thumb.type = 'button';
          thumb.className = 'gallery-thumb';
          thumb.setAttribute('aria-label', shot.caption);
          const img = document.createElement('img');
          img.src = shot.src;
          img.alt = shot.caption;
          img.loading = 'lazy';
          thumb.appendChild(img);
          thumb.addEventListener('click', () => openLightbox(item.screenshots, index));
          gallery.appendChild(thumb);
        });
        card.appendChild(gallery);
      }

      container.appendChild(card);
    });
    observeReveal(container.querySelectorAll('.reveal'));
  }

  let lightboxItems = [];
  let lightboxIndex = 0;

  function updateLightbox() {
    const shot = lightboxItems[lightboxIndex];
    document.getElementById('lightboxImage').src = shot.src;
    document.getElementById('lightboxImage').alt = shot.caption;
    document.getElementById('lightboxCaption').textContent = shot.caption;
    document.getElementById('lightboxCounter').textContent =
      lightboxIndex + 1 + ' / ' + lightboxItems.length;
  }

  function openLightbox(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    updateLightbox();
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  function showPrevScreenshot() {
    lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
  }

  function showNextScreenshot() {
    lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
    updateLightbox();
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', showPrevScreenshot);
    document.getElementById('lightboxNext').addEventListener('click', showNextScreenshot);
    lightbox.addEventListener('click', (evt) => {
      if (evt.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (evt) => {
      if (!lightbox.classList.contains('open')) return;
      if (evt.key === 'Escape') closeLightbox();
      if (evt.key === 'ArrowLeft') showPrevScreenshot();
      if (evt.key === 'ArrowRight') showNextScreenshot();
    });
  }

  function renderExperience(lang) {
    const container = document.getElementById('experienceList');
    container.innerHTML = '';
    content[lang].experience.items.forEach((job) => {
      const item = el('div', 'timeline-item reveal');
      item.appendChild(el('div', 'timeline-dot'));

      const body = el('div', 'timeline-body');
      const header = el('div', 'timeline-header');
      header.appendChild(el('h3', null, job.role));
      header.appendChild(el('span', 'timeline-period', job.period));
      body.appendChild(header);

      body.appendChild(el('p', 'timeline-company', job.company + ' · ' + job.location));
      body.appendChild(el('p', 'timeline-desc', job.description));

      item.appendChild(body);
      container.appendChild(item);
    });
    observeReveal(container.querySelectorAll('.reveal'));
  }

  function renderSkills(lang) {
    const container = document.getElementById('skillsGrid');
    container.innerHTML = '';
    content[lang].skills.groups.forEach((group) => {
      const card = el('div', 'skill-group reveal');
      card.appendChild(el('h3', null, group.name));
      const list = el('div', 'skill-chips');
      group.items.forEach((skill) => list.appendChild(el('span', 'chip', skill)));
      card.appendChild(list);
      container.appendChild(card);
    });
    observeReveal(container.querySelectorAll('.reveal'));
  }

  function renderCredentials(lang) {
    const eduContainer = document.getElementById('educationList');
    eduContainer.innerHTML = '';
    content[lang].credentials.education.forEach((edu) => {
      const row = el('div', 'edu-row');
      row.appendChild(el('h4', null, edu.school));
      row.appendChild(el('p', null, edu.degree));
      row.appendChild(el('span', 'edu-period', edu.period));
      eduContainer.appendChild(row);
    });

    const certContainer = document.getElementById('certList');
    certContainer.innerHTML = '';
    content[lang].credentials.certifications.forEach((cert) => {
      certContainer.appendChild(el('li', null, cert));
    });
  }

  function updateMeta(lang) {
    document.title = content[lang].meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', content[lang].meta.description);
  }

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    applyI18n(lang);
    renderStats(lang);
    renderFacts(lang);
    renderWork(lang);
    renderExperience(lang);
    renderSkills(lang);
    renderCredentials(lang);
    updateMeta(lang);
    localStorage.setItem('lang', lang);

    const toggle = document.getElementById('langToggle');
    toggle.textContent = lang === 'en' ? '中文' : 'English';
  }

  let revealObserver;
  function observeReveal(nodes) {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
    }
    nodes.forEach((node) => revealObserver.observe(node));
  }

  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initLangToggle() {
    document.getElementById('langToggle').addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'zh' : 'en');
    });
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      const formData = new FormData(form);
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        website: formData.get('website'),
      };

      submitBtn.disabled = true;
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = content[currentLang].contact.formSending;
      status.classList.remove('is-error', 'is-success');
      status.textContent = '';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Request failed');
        status.textContent = content[currentLang].contact.formSuccess;
        status.classList.add('is-success');
        form.reset();
      } catch (err) {
        status.textContent = content[currentLang].contact.formError;
        status.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    setLanguage(currentLang);
    observeReveal(document.querySelectorAll('.reveal'));
    initHeaderScroll();
    initMobileMenu();
    initLangToggle();
    initContactForm();
    initLightbox();
  });
})();
