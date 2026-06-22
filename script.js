/* ============================================================
   script.js — Azeem Freelance Services
   ============================================================ */

/* ===========================
   DATA
=========================== */
const SERVICES = [
  { icon: "fa-stethoscope", color: "#0ea5e9", bg: "rgba(14,165,233,0.1)", title: "Healthcare Consultation", desc: "Expert Ayurvedic health guidance, wellness plans, and medical advice tailored to your needs.", tag: "Healthcare" },
  { icon: "fa-file-alt", color: "#6366f1", bg: "rgba(99,102,241,0.1)", title: "Resume Writing", desc: "Professional resumes crafted to highlight your strengths and land more interviews.", tag: "Career" },
  { icon: "fa-robot", color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "ATS Resume Optimization", desc: "Keyword-optimized resumes that pass Applicant Tracking Systems and reach recruiters.", tag: "Career" },
  { icon: "fa-linkedin", color: "#0077b5", bg: "rgba(0,119,181,0.1)", title: "LinkedIn Optimization", desc: "Compelling LinkedIn profiles that attract recruiters, clients, and grow your network.", tag: "Career" },
  { icon: "fa-presentation-screen", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Presentation Design", desc: "Stunning PowerPoint/Google Slides presentations that communicate your ideas clearly.", tag: "Design" },
  { icon: "fa-image", color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "Photo Editing", desc: "Professional photo retouching, background removal, and creative editing.", tag: "Design" },
  { icon: "fa-video", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", title: "Video Editing", desc: "Clean, engaging video edits for business, social media, and personal use.", tag: "Design" },
  { icon: "fa-magnifying-glass", color: "#0ea5e9", bg: "rgba(14,165,233,0.1)", title: "Online Research", desc: "Thorough web research, data collection, and comprehensive reports for any topic.", tag: "Research" },
  { icon: "fa-keyboard", color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Data Entry", desc: "Accurate, fast data entry services for spreadsheets, databases, and forms.", tag: "Admin" },
  { icon: "fa-headset", color: "#6366f1", bg: "rgba(99,102,241,0.1)", title: "Virtual Assistant", desc: "Remote VA services — scheduling, emails, research, coordination, and more.", tag: "Admin" },
  { icon: "fa-user-tie", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Personal Assistant", desc: "Dedicated support for personal tasks, travel planning, and daily management.", tag: "Admin" },
  { icon: "fa-folder-open", color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "File Management", desc: "Organise, sort, and manage digital files and documents efficiently.", tag: "Admin" },
  { icon: "fa-pen-fancy", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", title: "Content Creation", desc: "Engaging blog posts, social media content, and marketing copy.", tag: "Writing" },
  { icon: "fa-notes-medical", color: "#0ea5e9", bg: "rgba(14,165,233,0.1)", title: "Medical Content Writing", desc: "Accurate, SEO-friendly healthcare articles, patient education, and medical blogs.", tag: "Healthcare" },
  { icon: "fa-graduation-cap", color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Academic Research", desc: "Literature reviews, research papers, and academic support for students & scholars.", tag: "Research" },
  { icon: "fa-hospital", color: "#6366f1", bg: "rgba(99,102,241,0.1)", title: "Healthcare Administration", desc: "Medical records management, billing support, and healthcare ops assistance.", tag: "Healthcare" },
  { icon: "fa-file-invoice-dollar", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Medical Claims & Insurance", desc: "Support for medical billing, insurance claims, and reimbursement processes.", tag: "Healthcare" },
  { icon: "fa-star", color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "Custom Freelance Projects", desc: "Have a unique project? Let's discuss! I tailor solutions to your specific needs.", tag: "Custom" }
];

const PORTFOLIO = [
  { cat: "resume", icon: "📄", bg: "#e0f2fe", title: "ATS-Optimized CV – Finance Professional", desc: "Complete resume rewrite with 95+ ATS score for a finance MBA.", tag: "Resume" },
  { cat: "resume", icon: "📋", bg: "#f0fdf4", title: "Healthcare Worker Resume", desc: "BAMS doctor transitioning to healthcare admin – full career package.", tag: "Resume" },
  { cat: "linkedin", icon: "💼", bg: "#ede9fe", title: "LinkedIn Rebrand – Marketing Manager", desc: "Profile overhaul resulting in 3x recruiter views in 2 weeks.", tag: "LinkedIn" },
  { cat: "linkedin", icon: "🔗", bg: "#fef3c7", title: "LinkedIn Optimization – IT Professional", desc: "Headline, summary, and skills revamp for a software engineer.", tag: "LinkedIn" },
  { cat: "healthcare", icon: "🏥", bg: "#fce7f3", title: "Medical Blog Series – 10 Articles", desc: "SEO healthcare blog series on Ayurvedic wellness for a wellness brand.", tag: "Healthcare" },
  { cat: "design", icon: "🎨", bg: "#e0f2fe", title: "Investor Pitch Deck – 20 Slides", desc: "Clean, modern pitch deck for a health-tech startup.", tag: "Design" },
  { cat: "design", icon: "📊", bg: "#f0fdf4", title: "Business Presentation – HR Department", desc: "30-slide corporate deck with charts, infographics, and animations.", tag: "Design" },
  { cat: "research", icon: "🔬", bg: "#ede9fe", title: "Academic Literature Review", desc: "15-page literature review on Ayurvedic treatments for diabetes.", tag: "Research" },
  { cat: "research", icon: "📈", bg: "#fef3c7", title: "Market Research Report", desc: "Competitor analysis and market sizing for a healthcare startup.", tag: "Research" },
];

const TESTIMONIALS = [
  { name: "Sarah M.", role: "HR Manager, UK", text: "Dr. Azeem rewrote my resume and optimized my LinkedIn. Within 2 weeks I had 5 interview calls. Absolutely brilliant!", stars: 5, init: "S" },
  { name: "Rahul K.", role: "MBA Student, Delhi", text: "Got my ATS resume done and it was perfect. Super professional, delivered on time, and very affordable.", stars: 5, init: "R" },
  { name: "Ahmed Al-Farsi", role: "Healthcare Admin, UAE", text: "Amazing medical content writing. The articles were accurate, SEO-friendly, and delivered within 24 hours!", stars: 5, init: "A" },
  { name: "Priya S.", role: "IT Professional, Bangalore", text: "My LinkedIn views went up 200% after Dr. Azeem's optimization. Best investment for my career!", stars: 5, init: "P" },
  { name: "James L.", role: "Entrepreneur, USA", text: "Hired for a pitch deck and was blown away. Clean, professional, and persuasive design. Highly recommend!", stars: 5, init: "J" },
  { name: "Fatima Z.", role: "Doctor, Saudi Arabia", text: "Medical content was spot-on. Trusted Dr. Azeem with sensitive healthcare topics and he delivered flawlessly.", stars: 5, init: "F" },
];

const BLOG_POSTS = [
  { tag: "Career Tips", icon: "📝", bg: "#e0f2fe", title: "5 ATS Resume Mistakes You Must Avoid in 2025", desc: "Learn how applicant tracking systems work and why most resumes never reach a human recruiter.", date: "Dec 10, 2024", read: "5 min read" },
  { tag: "LinkedIn", icon: "💼", bg: "#ede9fe", title: "How to Write a LinkedIn Summary That Gets Noticed", desc: "Your LinkedIn summary is the first thing recruiters read. Here's how to make it unforgettable.", date: "Nov 28, 2024", read: "4 min read" },
  { tag: "Healthcare", icon: "🌿", bg: "#f0fdf4", title: "Ayurveda & Modern Medicine: Finding the Balance", desc: "A healthcare professional's perspective on integrating traditional and modern approaches.", date: "Nov 15, 2024", read: "6 min read" },
  { tag: "Freelancing", icon: "💡", bg: "#fef3c7", title: "How I Built a Global Freelance Career from a Small Town", desc: "My journey from Uttar Pradesh to serving clients in 15+ countries — what worked and what didn't.", date: "Oct 30, 2024", read: "7 min read" },
  { tag: "Career Tips", icon: "🎯", bg: "#fce7f3", title: "Virtual Assistant vs Personal Assistant: What's the Difference?", desc: "Breaking down the roles, tools, and skills needed for effective remote assistance in 2025.", date: "Oct 12, 2024", read: "3 min read" },
  { tag: "Writing", icon: "✍️", bg: "#e0f2fe", title: "Medical Content Writing: Why Quality Matters", desc: "Inaccurate health content can harm readers. Here's the standard all medical writers should follow.", date: "Sep 25, 2024", read: "5 min read" },
];

/* ===========================
   RENDER FUNCTIONS
=========================== */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card fade-up">
      <div class="service-icon" style="background:${s.bg};color:${s.color}"><i class="fas ${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="service-tag">${s.tag}</span>
    </div>
  `).join("");
}

function renderPortfolio(filter = "all") {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;
  const items = filter === "all" ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === filter);
  grid.innerHTML = items.map(p => `
    <div class="portfolio-item fade-up" data-cat="${p.cat}">
      <div class="portfolio-img" style="background:${p.bg}">${p.icon}</div>
      <div class="portfolio-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="portfolio-cat">${p.tag}</span>
      </div>
    </div>
  `).join("");
  observeFadeUps();
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card fade-up">
      <div class="testi-stars">${"⭐".repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.init}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderBlog() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(b => `
    <div class="blog-card fade-up">
      <div class="blog-img" style="background:${b.bg}">${b.icon}</div>
      <div class="blog-body">
        <div class="blog-tag">${b.tag}</div>
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <div class="blog-meta">
          <span><i class="fas fa-calendar"></i> ${b.date}</span>
          <span><i class="fas fa-clock"></i> ${b.read}</span>
        </div>
      </div>
    </div>
  `).join("");
}

/* ===========================
   THEME TOGGLE
=========================== */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme") || "light";
body.className = savedTheme === "dark" ? "dark-mode" : "light-mode";
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-mode");
  body.className = isDark ? "light-mode" : "dark-mode";
  localStorage.setItem("theme", isDark ? "light" : "dark");
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

/* ===========================
   HAMBURGER MENU
=========================== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.innerHTML = navLinks.classList.contains("open")
    ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

/* ===========================
   NAVBAR SCROLL
=========================== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

/* ===========================
   PORTFOLIO FILTER
=========================== */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPortfolio(btn.dataset.filter);
  });
});

/* ===========================
   FADE-UP SCROLL ANIMATION
=========================== */
function observeFadeUps() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
}

/* ===========================
   SKILL BAR ANIMATION
=========================== */
function animateSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".fill").forEach(f => {
          f.style.width = f.style.getPropertyValue("--w") || f.style.width;
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const section = document.getElementById("about");
  if (section) obs.observe(section);
}

/* ===========================
   STAR RATING
=========================== */
let selectedRating = 0;
const stars = document.querySelectorAll("#starRating .fa-star");
stars.forEach(star => {
  star.addEventListener("mouseenter", () => {
    const val = +star.dataset.val;
    stars.forEach(s => s.classList.toggle("active", +s.dataset.val <= val));
  });
  star.addEventListener("mouseleave", () => {
    stars.forEach(s => s.classList.toggle("active", +s.dataset.val <= selectedRating));
  });
  star.addEventListener("click", () => {
    selectedRating = +star.dataset.val;
    stars.forEach(s => s.classList.toggle("active", +s.dataset.val <= selectedRating));
  });
});

/* ===========================
   AUTH TABS
=========================== */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add("active");
  });
});

/* ===========================
   ADMIN TABS
=========================== */
document.querySelectorAll(".admin-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const content = document.getElementById("adminContent");
    const tab = btn.dataset.admin;
    content.innerHTML = `<p class="placeholder-text"><i class="fas fa-database"></i> ${tab.charAt(0).toUpperCase() + tab.slice(1)} data loads here after Firebase connection.</p>`;
  });
});

/* ===========================
   TOAST NOTIFICATION
=========================== */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

/* ===========================
   SHOW MESSAGE HELPER
=========================== */
function showMsg(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = "form-message " + type;
}

/* ===========================
   SIMPLE LOCAL AUTH (Demo)
   Replace with Firebase for production
=========================== */
const ADMIN_EMAIL = "admin@azeem.com";
const ADMIN_PASS = "admin123";
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let users = JSON.parse(localStorage.getItem("users")) || [];

function checkAuth() {
  const loginSection = document.getElementById("login");
  const userDash = document.getElementById("userDashboard");
  const adminDash = document.getElementById("adminDashboard");
  if (currentUser) {
    loginSection.classList.add("hidden");
    if (currentUser.email === ADMIN_EMAIL) {
      adminDash.classList.remove("hidden");
      userDash.classList.add("hidden");
    } else {
      userDash.classList.remove("hidden");
      adminDash.classList.add("hidden");
      const el = document.getElementById("dashName");
      if (el) el.textContent = currentUser.name || currentUser.email.split("@")[0];
    }
  } else {
    loginSection.classList.remove("hidden");
    userDash.classList.add("hidden");
    adminDash.classList.add("hidden");
  }
}

// Login
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("lEmail").value.trim();
  const pass = document.getElementById("lPass").value;
  if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
    currentUser = { email, name: "Admin" };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    checkAuth();
    showToast("✅ Welcome, Admin!");
    setTimeout(() => { document.getElementById("adminDashboard").scrollIntoView({ behavior: "smooth" }); }, 300);
    return;
  }
  const user = users.find(u => u.email === email && u.pass === pass);
  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    checkAuth();
    showToast("✅ Logged in successfully!");
    setTimeout(() => { document.getElementById("userDashboard").scrollIntoView({ behavior: "smooth" }); }, 300);
  } else {
    showMsg("loginMsg", "❌ Invalid email or password.", "error");
  }
});

// Signup
document.getElementById("signupForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("sName").value.trim();
  const email = document.getElementById("sEmail").value.trim();
  const pass = document.getElementById("sPass").value;
  if (users.find(u => u.email === email)) {
    showMsg("signupMsg", "❌ Email already registered.", "error"); return;
  }
  const user = { name, email, pass };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  currentUser = user;
  localStorage.setItem("currentUser", JSON.stringify(user));
  checkAuth();
  showToast("✅ Account created! Welcome " + name);
  setTimeout(() => { document.getElementById("userDashboard").scrollIntoView({ behavior: "smooth" }); }, 300);
});

// Forgot Password
document.getElementById("forgotLink")?.addEventListener("click", e => {
  e.preventDefault();
  const email = document.getElementById("lEmail").value.trim();
  if (!email) { showMsg("loginMsg", "Enter your email first.", "error"); return; }
  showMsg("loginMsg", "✅ If registered, a reset link has been sent to " + email, "success");
});

// Logout
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  currentUser = null; localStorage.removeItem("currentUser");
  checkAuth(); showToast("👋 Logged out.");
  setTimeout(() => { document.getElementById("login").scrollIntoView({ behavior: "smooth" }); }, 200);
});
document.getElementById("adminLogoutBtn")?.addEventListener("click", () => {
  currentUser = null; localStorage.removeItem("currentUser");
  checkAuth(); showToast("👋 Admin logged out.");
  setTimeout(() => { document.getElementById("login").scrollIntoView({ behavior: "smooth" }); }, 200);
});

/* ===========================
   CONTACT FORM
=========================== */
let contactSubmissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const submission = {
    name: document.getElementById("cName").value,
    email: document.getElementById("cEmail").value,
    phone: document.getElementById("cPhone").value,
    service: document.getElementById("cService").value,
    message: document.getElementById("cMsg").value,
    date: new Date().toISOString()
  };
  contactSubmissions.push(submission);
  localStorage.setItem("contactSubmissions", JSON.stringify(contactSubmissions));
  showMsg("contactMsg", "✅ Message sent! I'll respond within 12 hours.", "success");
  e.target.reset();
  showToast("✅ Message sent successfully!");
});

/* ===========================
   PROJECT FORM
=========================== */
let projectRequests = JSON.parse(localStorage.getItem("projectRequests")) || [];
document.getElementById("projectForm")?.addEventListener("submit", e => {
  e.preventDefault();
  projectRequests.push({ date: new Date().toISOString() });
  localStorage.setItem("projectRequests", JSON.stringify(projectRequests));
  showMsg("projectMsg", "✅ Project request submitted! You'll hear from me within 24 hours.", "success");
  e.target.reset();
  showToast("🚀 Project request received!");
});

/* ===========================
   FEEDBACK FORM
=========================== */
let feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
document.getElementById("feedbackForm")?.addEventListener("submit", e => {
  e.preventDefault();
  feedbackData.push({ rating: selectedRating, date: new Date().toISOString() });
  localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  showToast("⭐ Thank you for your feedback!");
  e.target.reset();
  selectedRating = 0;
  stars.forEach(s => s.classList.remove("active"));
});

/* ===========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPortfolio();
  renderTestimonials();
  renderBlog();
  observeFadeUps();
  animateSkillBars();
  checkAuth();
});
