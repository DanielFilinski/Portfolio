const projectsData = [
  {
    id: 'bible',
    title: 'Audio Bible',
    type: 'mobile',
    typeLabel: 'Mobile App',
    description: 'An audio Bible application published on Google Play and App Store. Features full audio playback, chapter navigation, bookmarking, and offline access for uninterrupted listening.',
    tech: ['React Native', 'Redux Toolkit', 'Android', 'iOS'],
    sections: [
      { label: 'App', images: ['images/projects/Bible.png', 'images/projects/Bible2.png'] }
    ],
    links: [
      { type: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.zaobible&pcampaignid=web_share' },
      { type: 'apple', url: 'https://apps.apple.com/by/app/%D0%B7%D0%B0%D0%BE%D0%BA%D1%81%D0%BA%D0%B0%D1%8F-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D1%8F/id6474184778' }
    ]
  },
  {
    id: 'garantiny',
    title: 'Garantiny',
    type: 'fullstack',
    typeLabel: 'Mobile + Admin Panel',
    description: 'A client-server application currently in beta testing. The backend is built with Next.js, Node.js, Docker, WebSocket, PostgreSQL, and Google API integrations. The mobile interface for Android and iOS is developed with React Native, Redux Toolkit, and socket.io for real-time communication.',
    tech: ['React Native', 'Next.js', 'Node.js', 'Docker', 'WebSocket', 'PostgreSQL', 'Google API', 'Redux Toolkit', 'socket.io'],
    sections: [
      { label: 'Mobile App', images: ['images/projects/garantiny.png'] },
      { label: 'Admin Panel', images: ['images/projects/gatantiny.png'] }
    ],
    links: [
      { type: 'apple', url: 'https://testflight.apple.com/join/FGfxUkyc' }
    ],
    status: 'Beta Testing'
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker',
    type: 'fullstack',
    typeLabel: 'Full-stack',
    description: 'A task management application developed as team lead, managing a team of 2–3 developers using Agile methodology. Focused on team productivity, sprint planning, and streamlined workflow integration.',
    tech: ['React', 'Node.js', 'Figma'],
    sections: [
      { label: 'App', images: ['images/projects/task-tracker.png'] }
    ],
    links: [
      { type: 'figma', url: 'https://www.figma.com/design/Hx7aWRLcHXhjjg8kfzeB40/Task-Tracker?node-id=0-1&t=fthh3XuSj8QvbXzV-1' }
    ],
    status: 'Preparing for Publication'
  },
  {
    id: 'reader',
    title: 'Reader',
    type: 'mobile',
    typeLabel: 'Mobile App',
    description: 'A spiritual reading and audio application available on Android and iOS. Provides daily readings, audio sermons, and an intuitive reading experience with offline support.',
    tech: ['React Native', 'Redux Toolkit', 'Android', 'iOS'],
    sections: [
      { label: 'App', images: ['images/projects/golos.png'] }
    ],
    links: [
      { type: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.golosnadezhdi&pcampaignid=web_share' },
      { type: 'apple', url: 'https://apps.apple.com/ru/app/%D0%BD%D0%B0%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5-%D1%81-%D0%B1%D0%BE%D0%B3%D0%BE%D0%BC/id1609580251' }
    ]
  },
  {
    id: 'golos-nadezhdy',
    title: 'Голос надежды',
    type: 'mobile',
    typeLabel: 'Mobile App',
    description: 'A mobile application for Android and iOS. TODO: add description.',
    tech: ['React Native', 'Redux Toolkit', 'Android', 'iOS'],
    sections: [
      {
        label: 'App',
        images: [
          'images/projects/golos-nadezhdy/1.png',
          'images/projects/golos-nadezhdy/2.png',
          'images/projects/golos-nadezhdy/3.png',
          'images/projects/golos-nadezhdy/4.png',
          'images/projects/golos-nadezhdy/5.png'
        ]
      }
    ],
    links: []
  },
  {
    id: 'istochnik-zhizni',
    title: 'Источник жизни',
    type: 'fullstack',
    typeLabel: 'Mobile + Admin Panel',
    description: 'A full-stack application with a mobile client and web-based admin panel. TODO: add description.',
    tech: ['React Native', 'Redux Toolkit', 'Android', 'iOS'],
    sections: [
      {
        label: 'Mobile App',
        images: [
          'images/projects/istochnik-zhizni/app-1.png',
          'images/projects/istochnik-zhizni/app-2.png',
          'images/projects/istochnik-zhizni/app-3.png',
          'images/projects/istochnik-zhizni/app-4.png',
          'images/projects/istochnik-zhizni/app-5.png'
        ]
      },
      {
        label: 'Admin Panel',
        images: [
          'images/projects/istochnik-zhizni/admin-1.png',
          'images/projects/istochnik-zhizni/admin-2.png'
        ]
      }
    ],
    links: []
  },
  {
    id: 'naedine-s-bogom',
    title: 'Наедине с Богом',
    type: 'mobile',
    typeLabel: 'Mobile App',
    description: 'A mobile application for Android and iOS. TODO: add description.',
    tech: ['React Native', 'Redux Toolkit', 'Android', 'iOS'],
    sections: [
      {
        label: 'App',
        images: [
          'images/projects/naedine-s-bogom/1.png',
          'images/projects/naedine-s-bogom/2.png',
          'images/projects/naedine-s-bogom/3.png',
          'images/projects/naedine-s-bogom/4.png'
        ]
      }
    ],
    links: []
  }
];

// ─── State ───────────────────────────────────────────────────────────────────
let currentProject = null;
let currentSectionIndex = 0;
let currentImageIndex = 0;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getSection() {
  return currentProject.sections[currentSectionIndex];
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderGallery() {
  const images = getSection().images;
  const total = images.length;

  document.getElementById('galleryMainImg').src = images[currentImageIndex];
  document.getElementById('galleryCounter').textContent = total > 1 ? `${currentImageIndex + 1} / ${total}` : '';

  const prev = document.getElementById('galleryPrev');
  const next = document.getElementById('galleryNext');
  prev.classList.toggle('hidden', total <= 1);
  next.classList.toggle('hidden', total <= 1);

  const thumbsEl = document.getElementById('galleryThumbs');
  thumbsEl.innerHTML = '';
  if (total > 1) {
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'gallery-thumb' + (i === currentImageIndex ? ' active' : '');
      img.addEventListener('click', () => { currentImageIndex = i; renderGallery(); });
      thumbsEl.appendChild(img);
    });
  }
}

function renderTabs() {
  const tabsEl = document.getElementById('galleryTabs');
  tabsEl.innerHTML = '';
  if (currentProject.sections.length > 1) {
    currentProject.sections.forEach((section, i) => {
      const btn = document.createElement('button');
      btn.className = 'gallery-tab' + (i === currentSectionIndex ? ' active' : '');
      btn.textContent = section.label;
      btn.addEventListener('click', () => {
        currentSectionIndex = i;
        currentImageIndex = 0;
        renderTabs();
      });
      tabsEl.appendChild(btn);
    });
  }
  renderGallery();
}

function populateModal(project) {
  document.getElementById('modalTitle').textContent = project.title;

  const badge = document.getElementById('modalType');
  badge.textContent = project.typeLabel;
  badge.className = `modal-type-badge type-${project.type}`;

  document.getElementById('modalDescription').textContent = project.description;

  const techEl = document.getElementById('modalTech');
  techEl.innerHTML = '';
  if (project.tech && project.tech.length) {
    const wrap = document.createElement('div');
    wrap.className = 'modal-tech-list';
    project.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'modal-tech-tag';
      span.textContent = t;
      wrap.appendChild(span);
    });
    techEl.appendChild(wrap);
  }

  const statusEl = document.getElementById('modalStatus');
  statusEl.innerHTML = project.status
    ? `<span class="modal-status-text">&#9679; ${project.status}</span>`
    : '';

  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = '';
  (project.links || []).forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    if (link.type === 'google-play') {
      a.className = 'modal-link-btn btn-google-play';
      a.innerHTML = `<img src="images/icon/google-play.png" alt="Google Play"> Google Play`;
    } else if (link.type === 'apple') {
      a.className = 'modal-link-btn btn-apple';
      a.innerHTML = `<img src="images/icon/apple.png" alt="App Store"> App Store`;
    } else if (link.type === 'rustore') {
      a.className = 'modal-link-btn btn-rustore';
      a.innerHTML = `<i class="fas fa-store"></i> RuStore`;
    } else if (link.type === 'website') {
      a.className = 'modal-link-btn btn-website';
      a.innerHTML = `<i class="fas fa-globe"></i> ${link.label || 'Website'}`;
    } else if (link.type === 'figma') {
      a.className = 'modal-link-btn btn-figma';
      a.innerHTML = `<i class="fab fa-figma"></i> Figma`;
    }
    linksEl.appendChild(a);
  });
}

// ─── Open / Close ─────────────────────────────────────────────────────────────
function openModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentProject = project;
  currentSectionIndex = 0;
  currentImageIndex = 0;

  populateModal(project);
  renderTabs();

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
  currentProject = null;
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Card clicks
  document.querySelectorAll('.ProjectsCard').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const id = card.dataset.projectId;
      if (id) openModal(id);
    });
  });

  // Close button & overlay
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('projectModal').addEventListener('click', e => {
    if (e.target === document.getElementById('projectModal')) closeModal();
  });

  // Arrow buttons
  document.getElementById('galleryPrev').addEventListener('click', () => {
    const images = getSection().images;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    renderGallery();
  });
  document.getElementById('galleryNext').addEventListener('click', () => {
    const images = getSection().images;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    renderGallery();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!currentProject) return;
    if (e.key === 'Escape') { closeModal(); return; }
    const images = getSection().images;
    if (e.key === 'ArrowLeft') { currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; renderGallery(); }
    if (e.key === 'ArrowRight') { currentImageIndex = (currentImageIndex + 1) % images.length; renderGallery(); }
  });
});
