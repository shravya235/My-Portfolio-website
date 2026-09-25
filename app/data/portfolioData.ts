// data/portfolioData.ts
import type { IconName, LucideIcon, ProjectIcon } from '@/utils/icons';

export const aboutData = {
  title: "About Me",
  description: [
  "I am a final year Computer Science and Engineering student specializing in Cybersecurity with hands-on experience in software development, web security, cloud technologies and machine learning.",
  "I enjoy building practical solutions, exploring how systems work and solving real-world problems through technology.",
  "Through internships, research, projects and hackathons, I have worked across software development, cybersecurity and AI while continuously learning and experimenting with new technologies.",
  "Beyond technology, I am learning Japanese and exploring its culture while always looking for opportunities to build, learn and grow."
],
  stats: [
    { label: "Projects", value: "8+" },
    { label: "Certifications", value: "15+" }
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
    {
      name: "Web Application Security",
      icon: "ShieldCheck",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20"
    },
    {
      name: "Secure Coding",
      icon: "Code",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/20"
    },
    {
      name: "OWASP ZAP",
      icon: "Zap",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20"
    },
    {
      name: "Burp Suite",
      icon: "Search",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20"
    },
    {
      name: "Kali Linux",
      icon: "Terminal",
      color: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-500/20"
    },
    {
      name: "Wireshark",
      icon: "Network",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/20"
    },
    {
      name: "FTK Imager",
      icon: "HardDrive",
      color: "from-slate-500 to-slate-700",
      bgColor: "bg-slate-500/20"
    }
  ],

  technicalSkills: [
    {
      name: "Python",
      icon: "Code2",
      color: "from-yellow-400 to-blue-500",
      bgColor: "bg-yellow-500/20"
    },
    {
      name: "React",
      icon: "Atom",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/20"
    },
    {
      name: "Node.js",
      icon: "Server",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20"
    },
    {
      name: "HTML/CSS",
      icon: "Layout",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20"
    },
    {
      name: "MongoDB",
      icon: "Database",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/20"
    },
    {
      name: "Docker",
      icon: "Container",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20"
    },
    {
      name: "AWS",
      icon: "Cloud",
      color: "from-orange-400 to-yellow-500",
      bgColor: "bg-orange-500/20"
    },
    {
      name: "GitHub",
      icon: "Github",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20"
    },
    {
      name: "Next.js",
      icon: "Triangle",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-500/20"
    },
    {
      name: "Machine Learning",
      icon: "Brain",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-500/20"
    },
    {
      name: "Federated Learning",
      icon: "Network",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-500/20"
    },
    {
      name: "Differential Privacy",
      icon: "LockKeyhole",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-500/20"
    }
  ]
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science (Cybersecurity)",
    institution: "NMAM Institute of Technology, Nitte",
    period: "2023 - 2027",
    gpa: "CGPA: 9.59 / 10.0",
    description: "Specialized in cybersecurity.",
    icon: "GraduationCap"
  }
];

export const certifications: Certification[] = [
  {
  name: "International Conference on Secure IoT and Cybersecurity (ICOSICS 2026)",
  issuer: "IEEE",
  date: "Sept 25 2026",
  status: "Completed",
  link: "https://drive.google.com/file/d/1ZAsMNvVin24cUt-IVurqOWYdEzty8Lib/view?usp=sharing"
  },

  {
  name: "AWS Cloud Practitioner Essentials",
  issuer: "Amazon Web Services (AWS)",
  date: "July 2026",
  status: "Completed",
  link: "https://drive.google.com/file/d/1v_1FPODWTJI3p-eRvCdxTVqdrgZSdgIe/view?usp=sharing"
  },

  {
    name: "Internet Crimes and Cyber security",
    issuer: "NPTEL (SWAYAM)",
    date: "April 2025",
    status: "Completed",
    link: "https://drive.google.com/file/d/1Xr_Wrwhh7S5eyQeXguIqMMTfxZUuGKsX/view?usp=sharing"
  },

   {
    name: "Runner-Up Certificate - Her-a-thon Hackathon",
    issuer: "Finite Loop Club, NMAM Institute of Technology",
    date: "March 14 2026",
    status: "Completed",
    link: "https://drive.google.com/file/d/1FoI_4jP0iu_MKW3kD12D94-ocpXm5JE0/view"
  },
  {
    name: "Certificate of Appreciation - Idea Hackathon",
    issuer: "Ayush Habba 2026",
    date: "Feb 1 2026",
    status: "Completed",
    link: "https://drive.google.com/file/d/1EeVRznB8R4qB6S0P_ZBrt2ERoTED9rYB/view"
  },
   {
    name: "Hedera Blockchain Workshop",
    issuer: "NITTE, IDS & Hedera",
    date: "Oct 25 2025",
    status: "Completed",
    link: "https://drive.google.com/file/d/1eB7mvj972fKWKr3gd3pigql0bMg4Hkvp/view"
  },
  {
    name: "Cybersecurity Bootcamp and CTF Competition",
    issuer: "CySecK - K-Tech CoE for Cyber Security",
    date: "Oct 31 2025",
    status: "Completed",
    link: "https://drive.google.com/file/d/1L4oGf5uZc4DqQP4zD5Vrbp3EIoretPEW/view"
  },
  {
    name: "Internship Completion Certificate (Cyber Security)",
    issuer: "Thaniya Technologies",
    date: "July 28 2025",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ymiUVVa6YLWWmI74jovgLtcmOIRNyAHy/view"
  },
  {
    name: "CodeFury 8.0 Hackathon",
    issuer: "IEEE UVCE Computer Society & ARTPARK",
    date: "Aug 24 2025",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ujKXypnHxRy7IPLOFGArQqf7giuhRfDv/view"
  },
  {
    name: "Privacy-Preserving Federated Learning Internship",
    issuer: "Nitte Centre of Excellence for Applied AI, NMAM Institute of Technology",
    date: "June 2025 - August 2025",
    status: "Completed",
    link:"https://drive.google.com/file/d/1yD-OmUyvZsXny8znFX6-h5132KCJ_hs1/view"
  },
  {
    name: "Joint Secretary - PROTON (Cybersecurity Association)",
    issuer: "Department of Cybersecurity, NMAM Institute of Technology",
    date: "Academic Year 2024 - 2025",
    status: "Completed",
    link:"https://drive.google.com/file/d/12FurNiHyfLArQI6IPN7R2cQ5IkKHM47d/view"
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group via Forage",
    date: "March 2025",
    status: "Completed",
    link:"https://drive.google.com/file/d/1toEyS6L6HyE1LEXzFu-dQRq1JjaTbZZ2/view"
  },
  {
    name: "Career Essentials in Cybersecurity",
    issuer: "LinkedIn & Microsoft",
    date: "Sept 2024",
    status: "Completed",
    link:"https://drive.google.com/file/d/1dGlZBTUSsQN68wTOuELIEcwsBGLfUvBg/view"
  },
  {
    name: "Systems and Usable Security",
    issuer: "NPTEL (SWAYAM)",
    date: "April 2025",
    status: "Completed",
    link:"https://drive.google.com/file/d/1yjxi_6wO8x1aWPaggP5T20yYS7ZkcYL9/view"
  },
  {
    name: "AI & Machine Learning",
    issuer: "Skill India Digital Hub",
    date: "June 2025",
    status: "Completed",
    link:"https://drive.google.com/file/d/1rPu78whtcczeMOTdttRDNm-VFtN-aPdW/view"
  },
    {
    name: "Internal Ideathon of SIH 2024",
    issuer: "NMAMIT & Finite Loop",
    date: "August 31, 2024",
    status: "Completed",
    link: "https://drive.google.com/file/d/1ONTfoljN2DGx_kdM4Avbufds9Ay6aMjm/view"
  },
  {
    name: "Web Development Internship",
    issuer: "SystemTron",
    date: "July 2024",
    status: "Completed",
    link: "https://drive.google.com/file/d/1xBV5bMBBlLOg_J5-HACORh9nJVyrV8Nu/view"
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Development & Cybersecurity Intern",
    company: "Vill Design Co. Ltd",
    period: "October 2025 – Present",
    description: [
      "Contributed to the development and enhancement of Fortexa, a cloud-based security scanning platform for automated website security and performance analysis.",
      "Developed and integrated security scanning workflows using React, Node.js, Docker, Redis, BullMQ and OWASP ZAP including automated normal and authenticated scans.",
      "Worked with AWS infrastructure to deploy and optimize containerized services, manage compute resources and improve the reliability.",
      "Collaborated with a global Japanese team on real world software and cybersecurity projects while gaining experience in professional development practices and Japanese work culture."
    ]
  },
  {
    title: "Machine Learning Research Intern",
    company: "NMAM Institute of Technology",
    period: "June 2025 - August 2025",
    description: [
      "Built a federated learning pipeline integrating Differential Privacy and Secure Aggregation for privacy-preserving multi-client training.",
      "Trained machine learning models like MLP, Deep MLP and Logistic Regression on structured health data and evaluated performance while tuning privacy budgets using Opacus.",
      "Conducted research on Federated Learning models and privacy-preserving AI."
    ]
  },
  {
    title: "Cybersecurity Workshop Trainee",
    company: "Thaniya Technologies & NMAMIT",
    period: "10-day program - July 2025",
    description: [
      "Completed an intensive 10-day workshop simulating real-world cyberattack scenarios.",
      "Practiced Web and Network Penetration Testing with industry-standard methodologies and solved daily Capture the Flag (CTF) challenges",
      "Identified and reported vulnerabilities aligned with OWASP Top 10 and completed structured quizzes to reinforce key security concepts."
    ]
  }
];


export const projects: Project[] = [
    {
  title: "Behavioral Sensitivity-Based Malware Detection",
  description: "A machine learning-based malware detection system that uses Behavioral Sensitivity Score (BSS) to analyze how model predictions respond to controlled perturbations in API-level features, improving malware classification.",
  technologies: ["Python", "Machine Learning", "EMBER Dataset", "Sparse Matrices", "Feature Engineering", "ROC-AUC"],
  icon: "Bug",
  github: "https://github.com/shravya235/Behavioral-sensitivity-malware",
  color: "from-red-500 to-purple-600"
  },
  {
    title: "HerMedi - AI Prescription Translator",
    description: "An AI-powered web application that converts complex medical prescriptions into simple explanations designed for women. Gives clear info about medicine, dosage and safety warnings.",
    technologies: ["React", "Tailwind CSS", "Gemini AI", "Node.js", "Express", "MongoDB"],
    icon: "Venus",
    github: "https://github.com/GowrikaAlva/sheScript",
    demo: "https://her-medi.vercel.app/",
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
    title: "GyanVistara",
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
  title: "2nd Place - Flinders University Hackathon 2026",
  event: "Flinders University",
  date: "March 2026",
  location: "Ocean Pearl, Mangalore",
  description: [
    "Secured 2nd Place in the Flinders University Hackathon 2026.",
    "Recognized for developing an innovative technology based solution as part of the hackathon."
  ],
  icon: "Trophy",
  link: "https://www.linkedin.com/posts/shravyar11_hackathon-innovation-ai-ugcPost-7443300663859683328-BGfy/"
},
  {
    title: "Runner-Up - Her-a-thon (Women Only Hackathon)",
    event: "NMAM Institute of Technology",
    date: "March 2026",
    location: "Nitte, Karnataka",
    description: [
      "Secured Runner-Up position in a women-only hackathon organized by the Finite Loop Club for developing an AI-powered healthcare solution.",
      "Built a prototype that scans prescriptions, translates medical instructions into simple language, highlights medicine warnings and supports voice output in local languages."
    ],
    icon: "Trophy",
    link: "https://www.linkedin.com/posts/shravya-r-32913028b_herathon-hackathon-womenintech-ugcPost-7439340480317857792-UiMD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZR8NEBKl9EZZI8tp8n1dCv1LQe2aPqjL4"
  },
  {
    title: "Top 6 Finalist - Idea Hackathon, Ayush Habba 2026",
    event: "Yenepoya University",
    date: "February 2026",
    location: "Mangalore, Karnataka",
    description: [
      "Selected among the Top 6 finalist teams for developing a digital healthcare solution addressing 'Digital Tools for Ayurveda, Yoga, Naturopathy, Unani and Homeopathy Practices'.",
      "Proposed a platform enabling health tracking, tele-consultation, EMR management and classical assessment automation for AYUSH practitioners and patients."
    ],
    icon: "Medal",
    link: "https://www.linkedin.com/posts/shravya-r-32913028b_hackathon-innovation-ayushhabba-ugcPost-7424807788163309568-TQpz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZR8NEBKl9EZZI8tp8n1dCv1LQe2aPqjL4"
  }
];
