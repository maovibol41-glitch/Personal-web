// Central data source — edit this file to update your portfolio content.

export const profile = {
  name: "Mao Vibol",
  roles: ["Web Developer", "Frontend Developer", "Laravel Developer"],
  location: "Cambodia",
  tagline: "Web Developer",
  description:
    "I build responsive, fast, and user-friendly websites and web applications — from clean frontend interfaces to solid PHP & Laravel backends.",
  aboutDescription:
    "I am a passionate Web Developer with experience in building modern, responsive, and user-friendly websites. I focus on clean design, performance, and usability.",
  aboutExperience:
    "I have worked with HTML, CSS, JavaScript, PHP, Laravel, and databases — including a full stock & inventory system with role-based permissions and reporting.",
  email: "maovibol@41gmail.com",
  phone: "+855 071-549-9832",
  photo: "/asset/image/Picture3jpg.jpg",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/maovibol41-glitch", icon: "fab fa-github" },
  { label: "Facebook", url: "#", icon: "fab fa-facebook-f" },
  { label: "LinkedIn", url: "#", icon: "fab fa-linkedin-in" },
  { label: "Twitter", url: "#", icon: "fab fa-twitter" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Projects built" },
  { value: "5+", label: "Core technologies" },
  { value: "1", label: "Full-stack system" },
];

export const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Frontend Development",
    description:
      "Responsive, accessible interfaces built with semantic HTML, modern CSS, and vanilla JavaScript — fast on mobile, clean on desktop.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "fas fa-server",
    title: "Backend Development",
    description:
      "Server-side applications with PHP and Laravel, relational database design in MySQL, and REST-style APIs wired to real data.",
    tags: ["PHP", "Laravel", "MySQL"],
  },
  {
    icon: "fas fa-boxes-stacked",
    title: "Inventory Systems",
    description:
      "Custom stock and inventory dashboards — product and supplier tracking, stock in/out flows, role-based access, and reporting.",
    tags: ["Laravel", "TypeScript", "SQLite"],
  },
];

export const skillGroups = [
  {
    icon: "fas fa-laptop-code",
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
    tags: ["Responsive layout", "Semantic markup", "DOM & events"],
  },
  {
    icon: "fas fa-server",
    title: "Backend",
    skills: [
      { name: "PHP", level: 70 },
      { name: "Laravel", level: 68 },
      { name: "MySQL", level: 65 },
    ],
    tags: ["REST APIs", "Blade views", "Artisan & migrations"],
  },
  {
    icon: "fas fa-database",
    title: "Data & Tools",
    skills: [
      { name: "SQLite", level: 66 },
      { name: "Git & GitHub", level: 72 },
      { name: "TypeScript", level: 60 },
    ],
    tags: ["Eloquent ORM", "Vite & npm", "Composer"],
  },
];

export const projects = [
  {
    title: "Stock & Inventory Management",
    image: "/asset/image/project1.jpg",
    imageAlt: "Stock & Inventory Management System dashboard",
    overlayDescription:
      "Laravel + TypeScript · stock in/out, roles, reports, face-recognition attendance.",
    description:
      "Full inventory system with stock in/out tracking, products, categories, suppliers, customers, role-based permissions, reports, and face-recognition attendance.",
    repoUrl: "https://github.com/maovibol41-glitch/Stock-Inventory-Management",
    repoLabel: "Stock-Inventory-Management",
  },
  {
    title: "JavaScript Practice",
    image: "/asset/image/project2.jpg",
    imageAlt: "JavaScript practice exercises",
    overlayDescription: "Vanilla JS exercises · DOM, arrays, objects, JSON datasets.",
    description:
      "Weekly hands-on exercises — DOM manipulation, array and object logic, and working with JSON datasets to sharpen core fundamentals.",
    repoUrl: "https://github.com/maovibol41-glitch/Java-Script",
    repoLabel: "Java-Script",
  },
  {
    title: "Portfolio Website",
    image: "/asset/image/project3.jpg",
    imageAlt: "Personal portfolio website",
    overlayDescription: "HTML · CSS · JS — responsive single-page site.",
    description:
      "This responsive single-page portfolio — built from scratch with HTML, CSS, and JavaScript, with scroll-triggered animations and mobile navigation.",
    repoUrl: "https://github.com/maovibol41-glitch/Personal-web",
    repoLabel: "Personal-web",
  },
];
