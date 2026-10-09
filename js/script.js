
const LINKS = {
  github: "https://github.com/bonnie-le",      
  linkedin: "https://www.linkedin.com/in/bao-chau-anh-le-a5b794368", 
  mappingRepo: "https://github.com/bonnie-le/Mapping_project",
  mappingLive: "https://rf-mapping-tool.onrender.com/login",
};

const SHOTS = [
  "projects/mapping-tool/outdoor.webp",
  "projects/mapping-tool/indoor.webp",
  "projects/mapping-tool/isolines.webp",
];

const SKILLS = [
  ["Python", "C++", "C", "Java", "C#", "SQL", "Bash", "Pascal"],
  ["React", "Node.js", "JavaScript", "HTML", "CSS"],
  ["PostgreSQL / Supabase", "MySQL", "MongoDB", "Git / GitHub", "Docker"],
  ["ESP32", "Arduino", "Raspberry Pi", "Routers", "Gateways", "IoT sensors"],
];

const translations = {
  en: {
    ui: { language: "Language", resume: "Resume", top: "Back to top", light: "Switch to light mode", dark: "Switch to dark mode" },
    hero: {
      lede: "IT: Software Development student at NBCC, focused on embedded systems. I connect software to real hardware.",
      location: "Fredericton, NB",
      availability: "Open to IT and software roles",
      download: "Download resume",
      email: "Email me",
      fieldCaption: "Move your cursor or tap: you're an access point. The lines show signal strength, drawn with the same interpolation and isoline method as Mapping Tools.",
    },
    project: {
      label: "Project",
      type: "Full-stack web tool for signal coverage mapping",
      summary: "Mapping Tools records signal measurements and draws coverage maps for outdoor areas and indoor floor plans. Each user signs in and keeps their own data in the cloud.",
      points: [
        "Supabase authentication and per-user cloud storage secured by row-level security.",
        "Affine georeferencing places rotatable floor plans on real GPS coordinates, turning pixel-based indoor measurements into real-world positions.",
        "3D inverse-distance-weighted interpolation with marching-squares isolines, weighting vertical distance to model signal loss through concrete floors.",
      ],
      source: "Source code",
      live: "Open the live tool",
      loginNote: "The live tool requires an account.",
      shots: [
        ["Outdoor map", "Measurements blended into a coverage surface."],
        ["Floor plan", "A floor plan pinned to real GPS coordinates."],
        ["Isolines", "Where signal strength changes, including between floors."],
      ],
      missing: "Screenshot coming soon",
    },
    exp: {
      label: "Experience",
      dates: "Jun – Sep 2026",
      role: "Research Assistant (summer student)",
      org: "New Brunswick Community College, Fredericton",
      points: [
        "Installed, configured and troubleshot system software on Ubuntu, Windows and macOS using the command line and Bash scripts.",
        "Worked with robots, drones and circuit boards, including ESP32, Arduino and Raspberry Pi.",
        "Set up hardware and systems for the lab.",
      ],
      eduTitle: "Diploma, Information Technology: Software Development",
      college: "New Brunswick Community College",
      eduText: "Software development with a focus on embedded systems.",
    },
    skills: { label: "Skills", groups: ["Languages", "Web", "Databases and delivery", "Hardware and IoT"] },
    about: {
      label: "About",
      first: "I have a strong desire to work in IT and a real passion for programming. I'm comfortable with both hands-on technical work and careful data entry, and I manage my time well.",
      second: "Volunteering in NBCC's lab helped me adapt quickly to lab work. I've been actively learning about IoT, robotics and drones, and I enjoy solving problems creatively.",
    },
    contact: { label: "Contact", emailLabel: "Email", text: "I'm looking for opportunities in IT and software development. Email is the best way to reach me." },
  },

  fr: {
    ui: { language: "Langue", resume: "CV", top: "Retour en haut", light: "Passer au mode clair", dark: "Passer au mode sombre" },
    hero: {
      lede: "Étudiante en TI : développement logiciel au CCNB, spécialisée en systèmes embarqués. Je relie le logiciel au matériel.",
      location: "Fredericton, N.-B.",
      availability: "Ouverte aux postes en TI et en logiciel",
      download: "Télécharger le CV",
      email: "M'écrire",
      fieldCaption: "Déplacez le curseur ou touchez l'écran : vous êtes un point d'accès. Les lignes montrent la puissance du signal, calculée avec la même méthode d'interpolation et d'isolignes que Mapping Tools.",
    },
    project: {
      label: "Projet",
      type: "Outil web full-stack de cartographie de la couverture du signal",
      summary: "Mapping Tools enregistre des mesures de signal et trace des cartes de couverture pour l'extérieur et les plans d'étage. Chaque utilisateur se connecte et garde ses données dans le nuage.",
      points: [
        "Authentification Supabase et stockage infonuagique par utilisateur, protégé par la sécurité au niveau des lignes.",
        "Géoréférencement affine pour placer des plans d'étage orientables sur de vraies coordonnées GPS et convertir les mesures en pixels en positions réelles.",
        "Interpolation 3D pondérée par l'inverse de la distance avec isolignes (marching squares), qui pondère la distance verticale pour modéliser la perte de signal à travers les planchers de béton.",
      ],
      source: "Code source",
      live: "Ouvrir l'outil",
      loginNote: "L'outil nécessite un compte.",
      shots: [
        ["Carte extérieure", "Les mesures fusionnées en surface de couverture."],
        ["Plan d'étage", "Un plan d'étage fixé à de vraies coordonnées GPS."],
        ["Isolignes", "Là où le signal change, y compris entre les étages."],
      ],
      missing: "Capture à venir",
    },
    exp: {
      label: "Parcours",
      dates: "juin – sept. 2026",
      role: "Assistante de recherche (étudiante d'été)",
      org: "Collège communautaire du Nouveau-Brunswick, Fredericton",
      points: [
        "Installation, configuration et dépannage de logiciels système sous Ubuntu, Windows et macOS, en ligne de commande et avec des scripts Bash.",
        "Travail avec des robots, des drones et des cartes électroniques, dont ESP32, Arduino et Raspberry Pi.",
        "Installation du matériel et des systèmes du laboratoire.",
      ],
      eduTitle: "Diplôme en technologie de l'information : développement logiciel",
      college: "Collège communautaire du Nouveau-Brunswick",
      eduText: "Développement logiciel avec une spécialisation en systèmes embarqués.",
    },
    skills: { label: "Compétences", groups: ["Langages", "Web", "Données et déploiement", "Matériel et IdO"] },
    about: {
      label: "À propos",
      first: "J'ai un fort désir de travailler en TI et une vraie passion pour la programmation. Je suis à l'aise autant avec le travail technique pratique qu'avec la saisie de données minutieuse, et je gère bien mon temps.",
      second: "Mon bénévolat au laboratoire du CCNB m'a aidée à m'adapter rapidement au travail en labo. J'approfondis l'IdO, la robotique et les drones, et j'aime résoudre des problèmes de façon créative.",
    },
    contact: { label: "Contact", emailLabel: "Courriel", text: "Je cherche des occasions en TI et en développement logiciel. Le courriel est le meilleur moyen de me joindre." },
  },

  vi: {
    ui: { language: "Ngôn ngữ", resume: "CV", top: "Lên đầu trang", light: "Chuyển sang giao diện sáng", dark: "Chuyển sang giao diện tối" },
    hero: {
      lede: "Sinh viên CNTT: Phát triển phần mềm tại NBCC, theo hướng hệ thống nhúng. Tôi kết nối phần mềm với phần cứng thật.",
      location: "Fredericton, NB",
      availability: "Sẵn sàng cho vị trí CNTT và phần mềm",
      download: "Tải CV",
      email: "Gửi email",
      fieldCaption: "Di chuột hoặc chạm vào đây: bạn là một điểm phát sóng. Các đường cho thấy cường độ tín hiệu, vẽ bằng cùng phương pháp nội suy và đường đồng mức như Mapping Tools.",
    },
    project: {
      label: "Dự án",
      type: "Công cụ web full-stack lập bản đồ vùng phủ sóng",
      summary: "Mapping Tools ghi lại số đo tín hiệu và vẽ bản đồ vùng phủ sóng cho khu vực ngoài trời lẫn sơ đồ tầng trong nhà. Mỗi người dùng đăng nhập và lưu dữ liệu riêng trên đám mây.",
      points: [
        "Xác thực Supabase và lưu trữ đám mây riêng cho từng người dùng, bảo vệ bằng row-level security.",
        "Georeferencing affine đặt sơ đồ tầng xoay được lên tọa độ GPS thật, chuyển số đo theo pixel trong nhà thành vị trí thực tế.",
        "Nội suy IDW 3D kèm đường đồng mức marching-squares, tính trọng số khoảng cách theo chiều dọc để mô phỏng suy hao tín hiệu qua sàn bê tông.",
      ],
      source: "Mã nguồn",
      live: "Mở công cụ",
      loginNote: "Công cụ yêu cầu tài khoản.",
      shots: [
        ["Bản đồ ngoài trời", "Số đo được gộp thành bề mặt vùng phủ sóng."],
        ["Sơ đồ tầng", "Sơ đồ tầng ghim vào tọa độ GPS thật."],
        ["Đường đồng mức", "Nơi tín hiệu thay đổi, kể cả giữa các tầng."],
      ],
      missing: "Ảnh chụp sẽ sớm có",
    },
    exp: {
      label: "Kinh nghiệm",
      dates: "06 – 09/2026",
      role: "Trợ lý nghiên cứu (sinh viên mùa hè)",
      org: "New Brunswick Community College, Fredericton",
      points: [
        "Cài đặt, cấu hình và xử lý sự cố phần mềm hệ thống trên Ubuntu, Windows và macOS bằng dòng lệnh và script Bash.",
        "Làm việc với robot, drone và bo mạch như ESP32, Arduino và Raspberry Pi.",
        "Lắp đặt phần cứng và hệ thống cho phòng lab.",
      ],
      eduTitle: "Bằng Công nghệ Thông tin: Phát triển phần mềm",
      college: "New Brunswick Community College",
      eduText: "Phát triển phần mềm theo hướng hệ thống nhúng.",
    },
    skills: { label: "Kỹ năng", groups: ["Ngôn ngữ", "Web", "Dữ liệu và triển khai", "Phần cứng và IoT"] },
    about: {
      label: "Giới thiệu",
      first: "Tôi rất muốn làm việc trong ngành CNTT và có đam mê thật sự với lập trình. Tôi thoải mái với cả công việc kỹ thuật thực hành lẫn nhập liệu cẩn thận, và quản lý thời gian tốt.",
      second: "Hoạt động tình nguyện tại phòng lab của NBCC giúp tôi nhanh chóng thích nghi với công việc trong lab. Tôi đang tích cực tìm hiểu IoT, robot và drone, và thích giải quyết vấn đề một cách sáng tạo.",
    },
    contact: { label: "Liên hệ", emailLabel: "Email", text: "Tôi đang tìm cơ hội trong lĩnh vực CNTT và phát triển phần mềm. Email là cách tốt nhất để liên lạc." },
  },
};

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};
const pick = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const state = {
  lang: translations[store.get("bonnie-language")] ? store.get("bonnie-language") : "en",
  theme: document.documentElement.dataset.theme === "dark" ? "dark" : "light",
};
const t = () => translations[state.lang];

/* ---------- links ---------- */
document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (!url) el.hidden = true;
  else if (el.tagName === "A") el.href = url;
});
// hide the links row when all its links are empty
document.querySelectorAll(".links").forEach((row) => {
  if (![...row.querySelectorAll("a")].some((a) => !a.hidden)) row.hidden = true;
});

/* ---------- text ---------- */
function renderText() {
  const d = t();
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = pick(d, el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", pick(d, el.dataset.i18nAria));
  });

  $("#project-points").innerHTML = d.project.points.map((p) => `<li>${esc(p)}</li>`).join("");
  $("#exp-points").innerHTML = d.exp.points.map((p) => `<li>${esc(p)}</li>`).join("");

  $("#shots").innerHTML = SHOTS.map((src, i) => {
    const [label, caption] = d.project.shots[i];
    return `<figure class="shot">
      <div class="frame">
        <span class="placeholder">${esc(d.project.missing)}</span>
        <img src="${src}" alt="${esc(label)}" loading="lazy" onerror="this.remove()" />
      </div>
      <figcaption><b>${esc(label)}.</b> ${esc(caption)}</figcaption>
    </figure>`;
  }).join("");

  $("#skill-list").innerHTML = d.skills.groups
    .map((g, i) => `<div><h3>${esc(g)}</h3><p>${SKILLS[i].join(", ")}</p></div>`)
    .join("");

  document.querySelectorAll("#langs button").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.lang === state.lang)
  );
  renderThemeButton();
  store.set("bonnie-language", state.lang);
}

$("#langs").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-lang]");
  if (!b || b.dataset.lang === state.lang) return;
  state.lang = b.dataset.lang;
  renderText();
});

/* ---------- theme ---------- */
const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function renderThemeButton() {
  const btn = $("#theme");
  const label = state.theme === "dark" ? t().ui.light : t().ui.dark;
  btn.innerHTML = state.theme === "dark" ? SUN : MOON;
  btn.setAttribute("aria-label", label);
  btn.title = label;
}
$("#theme").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  store.set("bonnie-theme", state.theme);
  renderThemeButton();
  field.draw();
});

/* ---------- signal field: isolines like Mapping Tools ---------- */
const field = (() => {
  const canvas = $("#field");
  const ctx = canvas.getContext("2d");
  const STEP = 8; // grid resolution in CSS px
  const LEVELS = [0.32, 0.45, 0.6, 0.78, 1.0, 1.28, 1.65, 2.2];
  // fixed "access points" (x, y as fractions, strength)
  const aps = [
    { x: 0.22, y: 0.3, s: 1.0 },
    { x: 0.74, y: 0.22, s: 0.8 },
    { x: 0.5, y: 0.78, s: 0.9 },
  ];
  const you = { x: 0.8, y: 0.66, s: 1.15 };
  let w = 0, h = 0, frame = 0;

  const hexToRgb = (hex) => {
    const n = parseInt(hex.trim().replace("#", ""), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function value(px, py, R) {
    let v = 0;
    for (const p of [...aps, you]) {
      const dx = px - p.x * w, dy = py - p.y * h;
      v += p.s / (1 + (dx * dx + dy * dy) / (R * R));
    }
    return v;
  }

  function draw() {
    if (!w) return;
    const css = getComputedStyle(document.documentElement);
    const blue = hexToRgb(css.getPropertyValue("--blue"));
    const pink = hexToRgb(css.getPropertyValue("--pink"));
    const R = Math.min(w, h) * 0.2;
    const cols = Math.ceil(w / STEP) + 1, rows = Math.ceil(h / STEP) + 1;
    const g = new Float32Array(cols * rows);
    for (let j = 0; j < rows; j++)
      for (let i = 0; i < cols; i++) g[j * cols + i] = value(i * STEP, j * STEP, R);

    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1.6;
    ctx.lineCap = "round";

    LEVELS.forEach((lv, k) => {
      const m = k / (LEVELS.length - 1);
      const c = blue.map((b, n) => Math.round(b + (pink[n] - b) * m));
      ctx.strokeStyle = `rgb(${c.join(",")})`;
      ctx.beginPath();
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const a = g[j * cols + i], b = g[j * cols + i + 1];
          const cc = g[(j + 1) * cols + i + 1], d = g[(j + 1) * cols + i];
          const idx = (a > lv ? 8 : 0) | (b > lv ? 4 : 0) | (cc > lv ? 2 : 0) | (d > lv ? 1 : 0);
          if (idx === 0 || idx === 15) continue;
          const x = i * STEP, y = j * STEP;
          const lerp = (v1, v2) => (lv - v1) / (v2 - v1);
          const T = [x + STEP * lerp(a, b), y];
          const Rt = [x + STEP, y + STEP * lerp(b, cc)];
          const B = [x + STEP * lerp(d, cc), y + STEP];
          const L = [x, y + STEP * lerp(a, d)];
          const segs = {
            1: [[L, B]], 2: [[B, Rt]], 3: [[L, Rt]], 4: [[T, Rt]],
            5: [[T, Rt], [L, B]], 6: [[T, B]], 7: [[T, L]], 8: [[T, L]],
            9: [[T, B]], 10: [[T, L], [B, Rt]], 11: [[T, Rt]], 12: [[L, Rt]],
            13: [[B, Rt]], 14: [[L, B]],
          }[idx];
          for (const [p1, p2] of segs) { ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); }
        }
      }
      ctx.stroke();
    });

    // access points
    ctx.fillStyle = `rgb(${blue.join(",")})`;
    for (const p of aps) {
      ctx.beginPath(); ctx.arc(p.x * w, p.y * h, 4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = `rgb(${pink.join(",")})`;
    ctx.beginPath(); ctx.arc(you.x * w, you.y * h, 6, 0, Math.PI * 2); ctx.fill();
  }

  function moveTo(e) {
    const r = canvas.getBoundingClientRect();
    you.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    you.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(draw);
  }
  canvas.addEventListener("pointermove", moveTo);
  canvas.addEventListener("pointerdown", moveTo);
  new ResizeObserver(resize).observe(canvas);

  return { draw };
})();

/* ---------- init ---------- */
$("#year").textContent = new Date().getFullYear();
renderText();
