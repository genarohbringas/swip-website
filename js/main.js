// ===========================
// NAVBAR — scroll effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ===========================
// FADE IN — sections on scroll
// ===========================
const fadeElements = document.querySelectorAll(
  '.about-grid, .court-card, .amenity-item, .comp-card, .level-card, .type-card, .coach-card, .courts h2, .about-text h2, .competitions h2, .academy h2'
);

fadeElements.forEach(el => {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));


// ===========================
// HERO BALL — replay on hover
// ===========================
const heroBall = document.getElementById('heroBall');

if (heroBall) {
  heroBall.addEventListener('animationend', () => {
    setTimeout(() => {
      heroBall.style.animation = 'none';
      heroBall.offsetHeight; // reflow
      heroBall.style.animation = 'ballShoot 2.5s ease-out forwards';
    }, 4000);
  });
}


// ===========================
// SMOOTH SCROLL — nav links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ===========================
// COURT CARDS — stagger delay
// ===========================
document.querySelectorAll('.court-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.amenity-item').forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.08}s`;
});

document.querySelectorAll('.comp-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

/* ===========================
   FIND US
=========================== */
.findus {
  padding: 6rem 0 0;
  background-color: var(--dark);
}

.findus h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.findus-address {
  color: var(--gray);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.findus-map {
  width: 100%;
  height: 500px;
}

/* ===========================
   FOOTER NUEVO
=========================== */
.footer {
  background-color: var(--black);
  padding: 4rem 0 2rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.footer-logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.footer-slogan {
  font-size: 1rem;
  font-style: italic;
  color: var(--green);
  font-weight: 300;
  letter-spacing: 0.1em;
}

.footer-address {
  font-size: 0.85rem;
  color: var(--gray);
}

.footer-copy {
  font-size: 0.75rem;
  color: #444;
  margin-top: 1rem;
  border-top: 1px solid #222;
  padding-top: 1.5rem;
  width: 100%;
}
