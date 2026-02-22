const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

// Configure Handlebars with helpers
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: "views/layouts/",
    partialsDir: "views/partial/",
    helpers: {
      // Custom helper: uppercase text
      uppercase: function (text) {
        return typeof text === "string" ? text.toUpperCase() : text;
      },
      // Custom helper: check if array has items (used with unless too)
      hasItems: function (arr) {
        return Array.isArray(arr) && arr.length > 0;
      },
      // Custom helper: format skill level badge
      levelBadge: function (level) {
        const map = {
          advanced: "🔴",
          intermediate: "🟡",
        };
        return map[level] || "⚪";
      },
      // Custom helper: check if value equals a string
      eq: function (a, b) {
        return a === b;
      },
    },
  })
);

app.set("view engine", "handlebars");
app.set("views", "./views");

// Resume data
const resumeData = {
  name: "Long Bunhour",
  tagline: "IT Management Student | Aspiring Cloud Security Engineer",
  email: "Bunhour38@gmail.com",
  github: "github.com/Capondecap",
  location: "Cambodia",
  linkedin: "linkedin.com/in/long-bunhour",

  summary:
    "Information Technology Management student with a strong focus on cybersecurity, networking, and cloud infrastructure. Experienced in building full-stack applications and practicing offensive and defensive security techniques through Capture The Flag challenges and lab environments. Passionate about cloud security architecture, network analysis, and automation with Python.",

  objective:
    "To become a Cloud Security Engineer specializing in defensive security, network architecture, and automation. Focused on building strong foundations in cloud platforms (AWS/Azure), infrastructure security, and threat detection.",

  education: [
    {
      degree: "Bachelor of Information Technology Management",
      school: "American University of Phnom Penh",
      status: "Current Student",
      current: true,
    },
    {
      degree: "Bachelor of Computer Science",
      school: "Forthay State University",
      status: "Current Student",
      current: true,
    },
  ],

  skillCategories: [
    {
      category: "Cybersecurity & Networking",
      skills: [
        { name: "Network scanning & enumeration (Nmap, Nikto)", level: "intermediate" },
        { name: "Web exploitation testing (SQLmap, Hydra)", level: "intermediate" },
        { name: "Vulnerability assessment & CTF", level: "intermediate" },
        { name: "TCP/IP, QoS concepts", level: "intermediate" },
      ],
    },
    {
      category: "Programming & Development",
      skills: [
        { name: "Python (automation, scripting, django)", level: "intermediate" },
        { name: "Java (OOP applications)", level: "intermediate" },
        { name: "PHP (MVC, authentication)", level: "intermediate" },
        { name: "JavaScript — React + Vite", level: "intermediate" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Django & Django REST Framework", level: "intermediate" },
        { name: "Node.js & Express", level: "intermediate" },
        { name: "MySQL & SQLite", level: "intermediate" },
        { name: "PostgreSQL (Docker setup)", level: "beginner" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Docker containerization", level: "beginner" },
        { name: "VirtualBox lab setup", level: "intermediate" },
        { name: "AWS fundamentals (exploring)", level: "beginner" },
        { name: "Azure fundamentals (exploring)", level: "beginner" },
      ],
    },
  ],

  projects: [
    {
      name: "Vulnerable Ubuntu Lab Environment",
      description:
        "Configured VirtualBox with bridged networking to simulate real-world attack scenarios. Practiced penetration testing, log analysis, and used Nmap, Nikto, SQLmap, and Hydra in controlled lab settings.",
      tags: ["Nmap", "Nikto", "SQLmap", "Hydra", "VirtualBox", "Linux"],
      completed: true,
      highlight: true,
    },
    {
      name: "Full-Stack Web Application",
      description:
        "Built a full-stack application using Django REST Framework backend with React + Vite frontend. Implemented MVC architecture with MySQL database integration.",
      tags: ["Django", "React", "MySQL", "REST API"],
      completed: true,
      highlight: false,
    },
    {
      name: "Cloud Security Study Lab",
      description:
        "Ongoing exploration of AWS and Azure fundamentals with focus on cloud security architecture, IAM policies, and network segmentation.",
      tags: ["AWS", "Azure", "Cloud Security", "IAM"],
      completed: false,
      highlight: false,
    },
  ],

  interests: [
    "Red Team / Blue Team Security",
    "CTF Competitions",
    "Cloud Security Architecture",
    "Network QoS Research",
    "Penetration Testing",
    "Threat Detection & Automation",
  ],

  currentYear: new Date().getFullYear(),
};

// Route
app.get("/", (req, res) => {
  res.render("resume", resumeData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Resume app running at http://localhost:${PORT}`);
});