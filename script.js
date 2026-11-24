
/*
  PREMIUM BILINGUAL WEDDING WEBSITE
  Customize all wedding details inside WEDDING below.
*/

const WEDDING = {
  bride: {
    name: "Aarohi Patil",
    firstName: "Aarohi",
    family: "Daughter of [Bride's Parents]",
    photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
    parents: "[Bride's Parents' Names]",
    grandparents: "[Grandparents' names]"
  },

  groom: {
    name: "Rohan Deshmukh",
    firstName: "Rohan",
    family: "Son of [Groom's Parents]",
    photo: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85",
    parents: "[Groom's Parents' Names]",
    grandparents: "[Grandparents' names]"
  },

  // Change to your actual wedding date and time.
  date: "2027-02-14T11:30:00",

  dateLabel: {
    en: "Sunday, 14 February 2027",
    mr: "रविवार, १४ फेब्रुवारी २०२७"
  },

  timeLabel: "11:30 AM",
  monogram: "A ♥ R",

  venue: {
    name: "The Grand Celebration Hall",
    address: "[Full venue address, City, Maharashtra]",
    mapsQuery: "Pune, Maharashtra",
    photo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
  },

  // Add your MP3 file URL here.
  musicUrl: "",

  // Country code + mobile number, digits only.
  whatsappNumber: "",

  events: [
    {
      icon: "💍",
      en: "Engagement Ceremony",
      mr: "साखरपुडा समारंभ",
      date: "2027-02-12",
      time: "6:00 PM – 9:00 PM",
      venue: "Family Residence",
      descriptionEn: "An evening of promises, smiles and celebration.",
      descriptionMr: "आनंद, शुभेच्छा आणि नव्या नात्याची सुरुवात.",
      maps: "Pune, Maharashtra"
    },
    {
      icon: "🌼",
      en: "Haldi Ceremony",
      mr: "हळदी समारंभ",
      date: "2027-02-13",
      time: "10:00 AM – 12:00 PM",
      venue: "Family Residence",
      descriptionEn: "A joyful morning filled with colour and blessings.",
      descriptionMr: "हळदीच्या रंगात रंगलेला आनंदाचा सोहळा.",
      maps: "Pune, Maharashtra"
    },
    {
      icon: "🌿",
      en: "Mehendi Ceremony",
      mr: "मेहंदी समारंभ",
      date: "2027-02-13",
      time: "4:00 PM – 7:00 PM",
      venue: "Family Residence",
      descriptionEn: "Beautiful patterns, music and treasured moments.",
      descriptionMr: "मेहंदी, संगीत आणि अविस्मरणीय क्षण.",
      maps: "Pune, Maharashtra"
    },
    {
      icon: "🎶",
      en: "Sangeet Ceremony",
      mr: "संगीत सोहळा",
      date: "2027-02-13",
      time: "7:30 PM – 10:00 PM",
      venue: "The Grand Celebration Hall",
      descriptionEn: "An evening of music, dance and togetherness.",
      descriptionMr: "गाणी, नृत्य आणि आनंदाने भरलेली संध्याकाळ.",
      maps: "Pune, Maharashtra"
    },
    {
      icon: "🕊️",
      en: "Wedding Ceremony",
      mr: "विवाह सोहळा",
      date: "2027-02-14",
      time: "11:30 AM – 1:00 PM",
      venue: "The Grand Celebration Hall",
      descriptionEn: "Join us as we begin our forever.",
      descriptionMr: "आपल्या साक्षीने आम्ही सहजीवनाची नवी सुरुवात करीत आहोत.",
      maps: "Pune, Maharashtra"
    },
    {
      icon: "🥂",
      en: "Reception",
      mr: "स्वागत समारंभ",
      date: "2027-02-14",
      time: "7:00 PM – 10:00 PM",
      venue: "The Grand Celebration Hall",
      descriptionEn: "Celebrate and make memories with us.",
      descriptionMr: "आनंद आणि सुंदर आठवणींची संध्याकाळ.",
      maps: "Pune, Maharashtra"
    }
  ],

  timeline: [
    {
      time: "10:30 AM",
      en: "Arrival of Guests",
      mr: "पाहुण्यांचे आगमन",
      descEn: "Welcome refreshments",
      descMr: "स्वागत व अल्पोपहार"
    },
    {
      time: "11:30 AM",
      en: "Wedding Ceremony",
      mr: "विवाह विधी",
      descEn: "The auspicious wedding rituals begin",
      descMr: "मंगलमय विवाह विधींना सुरुवात"
    },
    {
      time: "1:00 PM",
      en: "Blessings & Family Photos",
      mr: "आशीर्वाद व कौटुंबिक छायाचित्रे",
      descEn: "Share your wishes with the couple",
      descMr: "नवदाम्पत्याला शुभाशीर्वाद द्या"
    },
    {
      time: "1:30 PM",
      en: "Wedding Feast",
      mr: "स्नेहभोजन",
      descEn: "Join us for a celebratory meal",
      descMr: "स्नेहभोजनाचा आस्वाद घ्या"
    }
  ],

  gallery: [
    {
      category: "Couple",
      alt: "Couple moment",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
    },
    {
      category: "Pre-Wedding",
      alt: "Pre-wedding moment",
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85"
    },
    {
      category: "Family",
      alt: "Family celebration",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85"
    },
    {
      category: "Engagement",
      alt: "Engagement celebration",
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85"
    },
    {
      category: "Wedding",
      alt: "Wedding moments",
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85"
    },
    {
      category: "Couple",
      alt: "Couple portrait",
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=85"
    }
  ]
};

let language = "en";
let activeGallery = [...WEDDING.gallery];
let lightboxIndex = 0;
let musicPlaying = false;

const $ = id => document.getElementById(id);

const dateObj = new Date(WEDDING.date);

// FORMAT DATE
function formatDate(dateString, lang = language) {
  const d = new Date(
    dateString + (dateString.length === 10 ? "T12:00:00" : "")
  );

  return d.toLocaleDateString(
    lang === "mr" ? "mr-IN" : "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );
}

// LOAD WEDDING CONFIGURATION
function applyWeddingConfig() {
  $("brandInitials").textContent = WEDDING.monogram;
  $("heroMonogram").textContent = WEDDING.monogram;

  $("brideHero").textContent = WEDDING.bride.firstName;
  $("groomHero").textContent = WEDDING.groom.firstName;

  $("heroDate").textContent = WEDDING.dateLabel.en;
  $("heroTime").textContent = WEDDING.timeLabel;

  $("brideName").textContent = WEDDING.bride.name;
  $("groomName").textContent = WEDDING.groom.name;

  $("brideFamily").textContent = WEDDING.bride.family;
  $("groomFamily").textContent = WEDDING.groom.family;

  $("bridePhoto").src = WEDDING.bride.photo;
  $("groomPhoto").src = WEDDING.groom.photo;

  $("brideParents").textContent = WEDDING.bride.parents;
  $("groomParents").textContent = WEDDING.groom.parents;

  $("brideGrandparents").textContent = WEDDING.bride.grandparents;
  $("groomGrandparents").textContent = WEDDING.groom.grandparents;

  $("venueName").textContent = WEDDING.venue.name;
  $("venueAddress").textContent = WEDDING.venue.address;
  $("venuePhoto").src = WEDDING.venue.photo;

  const q = encodeURIComponent(WEDDING.venue.mapsQuery);

  $("directionsBtn").href =
    `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  $("mapFrame").src =
    `https://maps.google.com/maps?q=${q}&z=13&output=embed`;

  $("footerNames").textContent =
    `${WEDDING.bride.firstName} & ${WEDDING.groom.firstName}`;

  $("footerDate").textContent = WEDDING.dateLabel.en;

  if (WEDDING.musicUrl) {
    $("backgroundMusic").src = WEDDING.musicUrl;
  }

  renderEvents();
  renderTimeline();
  renderGallery();
  updateWhatsApp();
}

// WEDDING EVENTS
function renderEvents() {
  $("eventsGrid").innerHTML = WEDDING.events.map(e => `
    <article class="event-card reveal">

      <div class="event-icon">${e.icon}</div>

      <h3>${language === "en" ? e.en : e.mr}</h3>

      <div class="event-date">
        ${formatDate(e.date)} · ${e.time}
      </div>

      <p>
        ${language === "en"
          ? e.descriptionEn
          : e.descriptionMr}
      </p>

      <p><strong>${e.venue}</strong></p>

      <a class="button button-outline"
         href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e.maps)}"
         target="_blank"
         rel="noopener">

        ${language === "en"
          ? "Get Directions ↗"
          : "मार्गदर्शन ↗"}

      </a>

    </article>
  `).join("");

  observeReveals();
}

// WEDDING TIMELINE
function renderTimeline() {
  $("timeline").innerHTML = WEDDING.timeline.map(t => `
    <article class="timeline-item reveal">

      <time>${t.time}</time>

      <h3>
        ${language === "en" ? t.en : t.mr}
      </h3>

      <p>
        ${language === "en" ? t.descEn : t.descMr}
      </p>

    </article>
  `).join("");

  observeReveals();
}

// PHOTO GALLERY
function renderGallery() {
  const cats = [
    "All",
    ...new Set(WEDDING.gallery.map(x => x.category))
  ];

  $("galleryFilters").innerHTML = cats.map((c, i) => `
    <button class="filter-btn ${i === 0 ? "active" : ""}"
            data-category="${c}">

      ${
        language === "en"
          ? c
          : ({
              All: "सर्व",
              Couple: "जोडपे",
              "Pre-Wedding": "प्री-वेडिंग",
              Family: "परिवार",
              Engagement: "साखरपुडा",
              Wedding: "विवाह"
            }[c] || c)
      }

    </button>
  `).join("");

  activeGallery = [...WEDDING.gallery];

  renderGalleryImages();
}

function renderGalleryImages() {
  $("galleryGrid").innerHTML = activeGallery.map((g, i) => `
    <button class="gallery-item"
            data-index="${i}"
            aria-label="Open ${g.alt}">

      <img loading="lazy"
           src="${g.src}"
           alt="${g.alt}">

    </button>
  `).join("");
}

// LANGUAGE SWITCHING
function setLanguage(lang) {
  language = lang;

  document.body.classList.toggle("marathi", lang === "mr");

  document.documentElement.lang =
    lang === "mr" ? "mr" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });

  $("languageToggle").textContent =
    lang === "en" ? "मराठी" : "English";

  $("heroDate").textContent =
    WEDDING.dateLabel[lang] || WEDDING.dateLabel.en;

  $("footerDate").textContent =
    WEDDING.dateLabel[lang] || WEDDING.dateLabel.en;

  renderEvents();
  renderTimeline();
  renderGallery();
  updateWhatsApp();
}

// LIVE COUNTDOWN
function tickCountdown() {
  const diff = dateObj.getTime() - Date.now();

  if (diff <= 0) {
    $("countdown").innerHTML = `
      <div class="countdown-complete">
        ${
          language === "en"
            ? "The celebration has begun!"
            : "मंगल सोहळा सुरू झाला आहे!"
        }
      </div>
    `;

    $("countdownMessage").textContent =
      language === "en"
        ? "Wishing the couple a lifetime of happiness."
        : "नवदाम्पत्याला सुखी आयुष्याच्या शुभेच्छा.";

    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  $("days").textContent = String(d).padStart(3, "0");
  $("hours").textContent = String(h).padStart(2, "0");
  $("minutes").textContent = String(m).padStart(2, "0");
  $("seconds").textContent = String(s).padStart(2, "0");
}

// WHATSAPP SHARING
function updateWhatsApp() {
  const message = language === "en"
    ? `With joy, we invite you to the wedding of ${WEDDING.bride.name} & ${WEDDING.groom.name} on ${WEDDING.dateLabel.en}. Please join us and bless the couple! ${location.href}`
    : `${WEDDING.bride.name} आणि ${WEDDING.groom.name} यांच्या विवाह सोहळ्यास आपण सहकुटुंब उपस्थित राहून शुभाशीर्वाद द्यावेत, ही विनंती. ${WEDDING.dateLabel.mr} ${location.href}`;

  $("whatsappBtn").href =
    `https://wa.me/?text=${encodeURIComponent(message)}`;

  $("whatsappBtn").dataset.message = message;
}

// GALLERY LIGHTBOX
function openLightbox(index) {
  lightboxIndex = index;

  $("lightboxImage").src = activeGallery[index].src;
  $("lightboxImage").alt = activeGallery[index].alt;

  $("lightbox").classList.add("open");
  $("lightbox").setAttribute("aria-hidden", "false");
}

function moveLightbox(step) {
  lightboxIndex =
    (lightboxIndex + step + activeGallery.length) %
    activeGallery.length;

  openLightbox(lightboxIndex);
}

// SCROLL ANIMATIONS
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el =>
      el.classList.add("visible")
    );
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.visible)")
    .forEach(el => io.observe(el));
}

// FALLING FLOWER PETALS
function makePetal() {
  const p = document.createElement("span");

  p.className = "petal";

  p.textContent = ["❀", "✿", "·"][
    Math.floor(Math.random() * 3)
  ];

  p.style.left = Math.random() * 100 + "%";

  p.style.fontSize =
    (10 + Math.random() * 13) + "px";

  p.style.animationDuration =
    (9 + Math.random() * 9) + "s";

  document.querySelector(".petal-layer")
    .appendChild(p);

  setTimeout(() => p.remove(), 19000);
}

// EVENT LISTENERS

// Language
$("languageToggle").addEventListener("click", () => {
  setLanguage(language === "en" ? "mr" : "en");
});

// Mobile navigation
$("menuToggle").addEventListener("click", () => {
  $("mainNav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    $("mainNav").classList.remove("open");
  });
});

// Gallery category filter
$("galleryFilters").addEventListener("click", e => {
  const b = e.target.closest("button[data-category]");

  if (!b) return;

  document.querySelectorAll(".filter-btn").forEach(x => {
    x.classList.toggle("active", x === b);
  });

  const category = b.dataset.category;

  activeGallery = WEDDING.gallery.filter(g =>
    category === "All" || g.category === category
  );

  renderGalleryImages();
});

// Gallery lightbox
$("galleryGrid").addEventListener("click", e => {
  const b = e.target.closest(".gallery-item");

  if (b) {
    openLightbox(Number(b.dataset.index));
  }
});

$("lightboxClose").addEventListener("click", () => {
  $("lightbox").classList.remove("open");
  $("lightbox").setAttribute("aria-hidden", "true");
});

$("lightboxPrev").addEventListener("click", () => {
  moveLightbox(-1);
});

$("lightboxNext").addEventListener("click", () => {
  moveLightbox(1);
});

$("lightbox").addEventListener("click", e => {
  if (e.target === $("lightbox")) {
    $("lightboxClose").click();
  }
});

document.addEventListener("keydown", e => {
  if (!$("lightbox").classList.contains("open")) return;

  if (e.key === "Escape") {
    $("lightboxClose").click();
  }

  if (e.key === "ArrowLeft") {
    moveLightbox(-1);
  }

  if (e.key === "ArrowRight") {
    moveLightbox(1);
  }
});

// DOWNLOAD INVITATION PDF
// Opens print dialog; select Save as PDF.
$("downloadPdf").addEventListener("click", () => {
  window.print();
});

// SHARE INVITATION
$("shareBtn").addEventListener("click", async () => {
  const data = {
    title: "Wedding Invitation",
    text: $("whatsappBtn").dataset.message,
    url: location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch (err) {
      // User cancelled sharing.
    }
  } else if (navigator.clipboard) {
    await navigator.clipboard.writeText(location.href);

    alert(
      language === "en"
        ? "Invitation link copied!"
        : "निमंत्रणाची लिंक कॉपी झाली!"
    );
  } else {
    prompt("Copy this invitation link:", location.href);
  }
});

// BACKGROUND MUSIC
$("musicToggle").addEventListener("click", async () => {
  const audio = $("backgroundMusic");

  if (!audio.src) {
    alert(
      language === "en"
        ? "Add your music file URL in script.js (WEDDING.musicUrl)."
        : "script.js मधील WEDDING.musicUrl मध्ये संगीताची लिंक जोडा."
    );
    return;
  }

  try {
    if (musicPlaying) {
      audio.pause();
      musicPlaying = false;
    } else {
      await audio.play();
      musicPlaying = true;
    }

    $("musicLabel").textContent = musicPlaying
      ? (language === "en" ? "Pause Music" : "संगीत थांबवा")
      : (language === "en" ? "Play Music" : "संगीत सुरू करा");

  } catch (e) {
    alert("The music file could not be played. Check the audio URL.");
  }
});

// BACK TO TOP
$("backTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ACTIVE NAVIGATION AND SCROLL
window.addEventListener("scroll", () => {
  $("backTop").classList.toggle(
    "show",
    window.scrollY > 500
  );

  const sections = [
    ...document.querySelectorAll("main section[id]")
  ];

  let current = "home";

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) {
      current = s.id;
    }
  });

  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.toggle(
      "active",
      a.getAttribute("href") === "#" + current
    );
  });
});

// INITIALIZE WEBSITE
applyWeddingConfig();

setLanguage("en");

tickCountdown();

setInterval(tickCountdown, 1000);

observeReveals();

setInterval(makePetal, 1800);
           
