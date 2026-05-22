const stars          = document.getElementById('stars');
const moon           = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const main_text      = document.getElementById('main_text');
const Mainspan       = document.getElementById('Mainspan');
const main_btn       = document.getElementById('main_btn');
const header         = document.querySelector('header');

let typewriterStarted = false;

// ── Parallax + sticky header ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
    const value = window.scrollY;

    stars.style.transform        = `translateY(${value * 0.08}px)`;
    moon.style.top               = value * 0.8 + 'px';
    mountains_behind.style.top   = value * 0.4 + 'px';

    const heroFade = Math.max(0, 1 - value / 500);
    main_text.style.transform = `translateY(${value * 0.25}px)`;
    main_text.style.opacity   = heroFade;

    if (typewriterStarted) {
        Mainspan.style.transform = `translateY(${value * 0.25}px)`;
        Mainspan.style.opacity   = heroFade;
    }

    main_btn.style.transform = `translateY(${value * 0.15}px)`;

    if (value > 100) {
        header.classList.add('scrolled');
        header.style.top = '';
    } else {
        header.classList.remove('scrolled');
        header.style.top = value * 0.5 + 'px';
    }
});

// ── Typewriter ────────────────────────────────────────────────────────────────
const typewriterText = Mainspan.textContent.trim();
let charIndex = 0;
Mainspan.textContent = '';
Mainspan.classList.add('cursor-blink');

setTimeout(() => {
    typewriterStarted = true;
    Mainspan.style.opacity = '1';

    const interval = setInterval(() => {
        Mainspan.textContent += typewriterText[charIndex++];
        if (charIndex >= typewriterText.length) {
            clearInterval(interval);
            setTimeout(() => Mainspan.classList.remove('cursor-blink'), 2000);
            setTimeout(() => { main_btn.style.opacity = '1'; }, 500);
        }
    }, 80);
}, 1500);

// ── Magnetic cards ────────────────────────────────────────────────────────────
function magnetize(selector, strength, scale) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 0.1s ease';
        });
        el.addEventListener('mousemove', e => {
            const r  = el.getBoundingClientRect();
            const dx = (e.clientX - r.left - r.width  / 2) * strength;
            const dy = (e.clientY - r.top  - r.height / 2) * strength;
            el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            el.style.transform  = '';
        });
    });
}

magnetize('.ProjectsCard', 0.1,  1.07);
magnetize('.ContantCard',  0.08, 1.05);

// ── Staggered project cards reveal ───────────────────────────────────────────
const projectCards   = document.querySelectorAll('.ProjectsCard');
const projectSection = document.getElementById('Projects');

if (projectSection) {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            projectCards.forEach((card, i) => {
                setTimeout(() => card.classList.add('card-visible'), i * 120);
            });
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    observer.observe(projectSection);
}
