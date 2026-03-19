// data/portfolioData.ts
import type { IconName, LucideIcon, ProjectIcon } from '@/utils/icons';

export const aboutData = {
  title: "About Me",
  description: [
    "I am a cybersecurity enthusiast currently pursuing B.Tech in Computer Science with a specialization in Cybersecurity.",
    "My interests include penetration testing, privacy-preserving AI, and secure web development.",
    "I've worked on federated learning, digital forensics, and real-world vulnerability testing.",
    "I strive to contribute to building secure and ethical digital environments through hands-on technical work and continuous learning."
  ],
  stats: [
    { label: "Projects", value: "3+" },
    { label: "Certifications", value: "5+" },
    { label: "Vulnerabilities Tested", value: "10+" }
  ]
};


interface CyberSkill {
  name: string;
  icon: IconName;
  color: string;
  bgColor: string;
}

interface TechSkill {
  name: string;
  icon: string; // Emoji or short text
  color: string;
  bgColor: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: IconName;
  github?: string;
  demo?: string;
  color: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  description: string;
  icon: LucideIcon;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  status: string; // e.g., "Active", "Expired"
  link?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Achievement {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string[];
  icon: IconName;
  link?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: ProjectIcon;
  github?: string;
  demo?: string;
  color: string;
}

export const skillsData: {
  cybersecuritySkills: CyberSkill[];
  technicalSkills: TechSkill[];
} = {
  cybersecuritySkills: [
    { name: "Penetration Testing", icon: "Shield", color: "from-red-500 to-red-600", bgColor: "bg-red-500/20" },
    { name: "Network Security", icon: "Network", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/20" },
    { name: "Vulnerability Assessment", icon: "Eye", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/20" },
    { name: "Threat Analysis", icon: "AlertTriangle", color: "from-pink-500 to-pink-600", bgColor: "bg-pink-500/20" },
    { name: "Secure Coding", icon: "Code", color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-500/20" }
  ],

  technicalSkills: [
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500", bgColor: "bg-yellow-500/20" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-500", bgColor: "bg-yellow-500/20" },
        { name: "C", icon: "C", color: "from-blue-600 to-cyan-500", bgColor: "bg-blue-500/20" },
    { name: "HTML/CSS", icon: "💻", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/20" },
    { name: "Kali Linux", icon: "⚡", color: "from-blue-600 to-purple-600", bgColor: "bg-blue-500/20" },
    { name: "Wireshark", icon: "🦈", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/20" },
    { name: "Burp Suite", icon: "🔍", color: "from-orange-500 to-red-500", bgColor: "bg-orange-500/20" },
    { name: "OWASP ZAP", icon: "ZAP", color: "from-blue-400 to-blue-600", bgColor: "bg-blue-500/20" },
    { name: "Federated Learning", icon: "🤖", color: "from-purple-500 to-indigo-500", bgColor: "bg-purple-500/20" },
    { name: "Differential Privacy", icon: "🔐", color: "from-teal-400 to-teal-600", bgColor: "bg-teal-500/20" },
    { name: "Secure Aggregation", icon: "🧩", color: "from-indigo-400 to-indigo-600", bgColor: "bg-indigo-500/20" }
  ]
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science (Cybersecurity)",
    institution: "NMAM Institute of Technology, Nitte",
    period: "2023 - 2027",
    gpa: "CGPA: 9.56 / 10.0",
    description: "Specialized in cybersecurity.",
    icon: "GraduationCap"
  }
];


export const certifications: Certification[] = [
   {
    name: "Runner-Up Certificate – Her-a-thon Hackathon",
    issuer: "Finite Loop Club, NMAM Institute of Technology",
    date: "March 13 – 14, 2026",
    credentialId: "N/A",
    status: "Completed",
    link: "https://drive.google.com/file/d/1FoI_4jP0iu_MKW3kD12D94-ocpXm5JE0/view"
  },
  {
    name: "Certificate of Appreciation – Ayush Habba 2026",
    issuer: "Ayush Habba 2026 Committee",
    date: "Jan 31 – Feb 1, 2026",
    credentialId: "N/A",
    status: "Completed",
    link: "https://drive.google.com/file/d/1EeVRznB8R4qB6S0P_ZBrt2ERoTED9rYB/view"
  },
    {
    name: "Internet Crimes and Cyber security",
    issuer: "NPTEL (SWAYAM)",
    date: "April 2025",
    credentialId: "N/A",
    status: "Under process"
  },
   {
    name: "Hedera Blockchain Workshop",
    issuer: "NITTE, IDS & Hedera",
    date: "Oct 23 – Oct 25, 2025",
    credentialId: "c2a6a071-2654-49e6-bfae-234aa6e19f17",
    status: "Completed",
    link: "https://drive.google.com/file/d/1eB7mvj972fKWKr3gd3pigql0bMg4Hkvp/view"
  },
  {
    name: "Cybersecurity Bootcamp and CTF Competition",
    issuer: "CySecK - K-Tech CoE for Cyber Security",
    date: "Oct 30 – Oct 31, 2025",
    credentialId: "N/A",
    status: "Completed",
    link: "https://drive.google.com/file/d/1L4oGf5uZc4DqQP4zD5Vrbp3EIoretPEW/view"
  },
  {
    name: "Internship Completion Certificate (Cyber Security)",
    issuer: "Thaniya Technologies",
    date: "June 2 – July 28, 2025",
    credentialId: "UDYAM-KR-11-0010781",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ymiUVVa6YLWWmI74jovgLtcmOIRNyAHy/view"
  },
  {
    name: "CodeFury 8.0 Hackathon",
    issuer: "IEEE UVCE Computer Society & ARTPARK",
    date: "Aug 22 – Aug 24, 2025",
    credentialId: "N/A",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ujKXypnHxRy7IPLOFGArQqf7giuhRfDv/view"
  },
  {
    name: "Privacy-Preserving Federated Learning Internship",
    issuer: "Nitte Centre of Excellence for Applied AI, NMAM Institute of Technology",
    date: "June 2025 – August 2025",
    credentialId: "N/A",
    status: "Completed",
    link:"https://drive.google.com/file/d/1yD-OmUyvZsXny8znFX6-h5132KCJ_hs1/view"
  },
  {
    name: "Joint Secretary – PROTON (Cybersecurity Association)",
    issuer: "Department of Cybersecurity, NMAM Institute of Technology",
    date: "Academic Year 2024 – 2025",
    credentialId: "NNM23CB053",
    status: "Completed",
    link:"https://drive.google.com/file/d/12FurNiHyfLArQI6IPN7R2cQ5IkKHM47d/view"
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group via Forage",
    date: "March 2025",
    credentialId: "cL5bW7GRd53nf6wsp",
    status: "Completed",
    link:"https://drive.google.com/file/d/1toEyS6L6HyE1LEXzFu-dQRq1JjaTbZZ2/view"
  },
  {
    name: "Career Essentials in Cybersecurity",
    issuer: "LinkedIn & Microsoft",
    date: "September 2024",
    credentialId: "efd6401f797ca340ea889beed661b4ae15573b21c0a832328b4fec2255708c49",
    status: "Completed",
    link:"https://drive.google.com/file/d/1dGlZBTUSsQN68wTOuELIEcwsBGLfUvBg/view"
  },
  {
    name: "Systems and Usable Security",
    issuer: "NPTEL (SWAYAM)",
    date: "April 2025",
    credentialId: "N/A",
    status: "Completed",
    link:"https://drive.google.com/file/d/1yjxi_6wO8x1aWPaggP5T20yYS7ZkcYL9/view"
  },
  {
    name: "AI & Machine Learning",
    issuer: "Skill India Digital Hub",
    date: "June 2025",
    credentialId: "N/A",
    status: "Completed",
    link:"https://drive.google.com/file/d/1rPu78whtcczeMOTdttRDNm-VFtN-aPdW/view"
  },
    {
    name: "Internal Ideathon of SIH 2024",
    issuer: "NMAMIT & Finite Loop",
    date: "August 31, 2024",
    credentialId: "N/A",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ONTfoljN2DGx_kdM4Avbufds9Ay6aMjm/view"
  },
  {
    name: "Web Development Internship",
    issuer: "SystemTron",
    date: "July 2024",
    credentialId: "ST/INP/4992",
    status: "Completed",
    link: "https://drive.google.com/file/d/1xBV5bMBBlLOg_J5-HACORh9nJVyrV8Nu/view"
  }
];

export const experiences: Experience[] = [
  {
    title: "Cyber Security Intern",
    company: "Vill Design Co. Ltd",
    period: "October 2025 – Present",
    description: [
      "Executed web application security scans using OWASP ZAP including passive scans, active scans and AJAX Spider on real-world client websites.",
      "Worked with Docker-based ZAP deployments to manage containers, configure resource limits and execute automated scans while analyzing results to identify vulnerabilities such as missing security headers and misconfigurations.",
      "Collaborating with a global team on cybersecurity projects while gaining exposure to Japanese work culture and secure development practices."
    ]
  },
  {
    title: "Machine Learning Research Intern",
    company: "NMAM Institute of Technology",
    period: "June 2025 – August 2025",
    description: [
      "Built a federated learning pipeline integrating Differential Privacy and Secure Aggregation for privacy-preserving multi-client training.",
      "Trained machine learning models like MLP, Deep MLP and Logistic Regression on structured health data and evaluated performance while tuning privacy budgets using Opacus.",
      "Conducted research on Federated Learning models and privacy-preserving AI."
    ]
  },
  {
    title: "Cybersecurity Workshop Trainee",
    company: "Thaniya Technologies & NMAMIT",
    period: "10-day program – July 2025",
    description: [
      "Completed an intensive 10-day workshop simulating real-world cyberattack scenarios.",
      "Practiced Web and Network Penetration Testing with industry-standard methodologies and solved daily Capture the Flag (CTF) challenges",
      "Identified and reported vulnerabilities aligned with OWASP Top 10 and completed structured quizzes to reinforce key security concepts."
    ]
  }
];


export const projects: Project[] = [
  {
    title: "SheScript - AI Prescription Translator",
    description: "An AI-powered web application that converts complex medical prescriptions into simple explanations designed for women. Gives clear info about medicine, dosage and safety warnings.",
    technologies: ["React", "Tailwind CSS", "Gemini AI", "Node.js", "Express", "MongoDB"],
    icon: "Venus",
    github: "https://github.com/GowrikaAlva/sheScript",
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "Privilege Escalation Web Demo",
    description: "A web security demonstration featuring both vulnerable and fixed modes. It illustrates how attackers can escalate privileges using IDOR/parameter tampering and how to securely prevent it.",
    technologies: ["Node.js", "Express", "npm", "Web Security"],
    icon: "ShieldCheck",
    github: "https://github.com/shreeRCode/Privilege-escalation-web-demo",
    color: "from-red-600 to-orange-500"
  },
  {
    title: "Ayushcare",
    description: "A digital healthcare solution addressing 'Digital Tools for Ayurveda, Yoga, Naturopathy, Unani and Homeopathy Practices'. Proposes a platform enabling health tracking, tele-consultation, EMR management and classical assessment automation for AYUSH practitioners and patients.",
    technologies: ["Digital Healthcare", "EMR Management", "Tele-consultation", "Web Platform"],
    icon: "Stethoscope",
    github: "https://github.com/shravya235/Ayushcare",
    color: "from-emerald-500 to-yellow-600"
  },
  {
    title: "GyanVistara Web App",
    description: "A full-stack career guidance platform that generates structured learning paths and career roadmaps for multiple professional domains. Features secure authentication and an AI powered educational assistant.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Gemini AI"],
    icon: "GraduationCap",
    github: "https://github.com/shravya235/CoursesPath_Generator",
    demo: "https://gyanvistara.vercel.app/",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Adaptive Cryptographic Confidential Computing Framework",
    description: "A secure pipeline for classifying, encrypting and processing sensitive data using adaptive cryptographic policies and simulated trusted execution.",
    technologies: ["Python", "Azure Key Vault", "Azure Blob", "AES-256-GCM", "ChaCha20"],
    icon: "Lock",
    github: "https://github.com/shreeRCode/ConfidentialCloudSecurity",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "AgriAssist",
    description: "A smart web based platform that provides farmers with crop insights, weather based recommendations and yield predictions using data analytics and machine learning.",
    technologies: ["Machine Learning", "Data Analytics", "Web Platform"],
    icon: "Leaf",
    github: "https://github.com/GowrikaAlva/AgriAssist",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "ShopSmart",
    description: "An e-commerce site built with responsive design. Includes cart functionality, product layout and a professional UI with JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Localstorage"],
    icon: "ShoppingCart",
    github: "https://github.com/shravya235/ShopSmart",
    demo: "https://shopsmart-store.vercel.app/",
    color: "from-yellow-400 to-orange-500"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Runner-Up – Her-a-thon Women Only Hackathon",
    event: "NMAM Institute of Technology",
    date: "March 2026",
    location: "Nitte, Karnataka",
    description: [
      "Secured Runner-Up position in a women-only hackathon organized by the Finite Loop Club for developing an AI-powered healthcare solution.",
      "Built SheScript, a prototype that scans prescriptions, translates medical instructions into simple language, highlights medicine warnings and supports voice output in local languages."
    ],
    icon: "Trophy",
    link: "https://www.linkedin.com/posts/shravya-r-32913028b_herathon-hackathon-womenintech-ugcPost-7439340480317857792-UiMD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZR8NEBKl9EZZI8tp8n1dCv1LQe2aPqjL4"
  },
  {
    title: "Top 6 Finalist – Idea Hackathon, Ayush Habba 2026",
    event: "Yenepoya University",
    date: "February 2026",
    location: "Mangalore, India",
    description: [
      "Selected among the Top 6 finalist teams for developing a digital healthcare solution addressing 'Digital Tools for Ayurveda, Yoga, Naturopathy, Unani and Homeopathy Practices'.",
      "Proposed a platform enabling health tracking, tele-consultation, EMR management and classical assessment automation for AYUSH practitioners and patients."
    ],
    icon: "Medal",
    link: "https://www.linkedin.com/posts/shravya-r-32913028b_hackathon-innovation-ayushhabba-ugcPost-7424807788163309568-TQpz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZR8NEBKl9EZZI8tp8n1dCv1LQe2aPqjL4"
  }
];
