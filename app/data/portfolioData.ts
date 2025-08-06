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
  github: string;
  demo: string;
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
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Project {
    title: string;
    description: string;
    technologies: string[];
    icon: ProjectIcon;
    github: string;
    demo: string;
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
    { name: "Digital Forensics", icon: "FileSearch", color: "from-teal-500 to-teal-600", bgColor: "bg-teal-500/20" },
    { name: "Threat Analysis", icon: "AlertTriangle", color: "from-pink-500 to-pink-600", bgColor: "bg-pink-500/20" },
    { name: "Secure Coding", icon: "Code", color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-500/20" }
  ],

  technicalSkills: [
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500", bgColor: "bg-yellow-500/20" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-500", bgColor: "bg-yellow-500/20" },
    { name: "Kali Linux", icon: "⚡", color: "from-blue-600 to-purple-600", bgColor: "bg-blue-500/20" },
    { name: "Wireshark", icon: "🦈", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/20" },
    { name: "Metasploit", icon: "🎯", color: "from-red-500 to-red-700", bgColor: "bg-red-500/20" },
    { name: "Burp Suite", icon: "🔍", color: "from-orange-500 to-red-500", bgColor: "bg-orange-500/20" },
    { name: "Nmap", icon: "🗺️", color: "from-green-500 to-green-700", bgColor: "bg-green-500/20" },
    { name: "Nessus", icon: "🔒", color: "from-purple-500 to-purple-700", bgColor: "bg-purple-500/20" }
  ]
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science (Cybersecurity)",
    institution: "NMAM Institute of Technology, Nitte",
    period: "2023 - 2027",
    gpa: "CGPA: 9.52 / 10.0",
    description: "Specialized in cybersecurity.",
    icon: "GraduationCap"
  }
];


export const certifications: Certification[] = [
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group via Forage",
    date: "March 2025",
    credentialId: "cL5bW7GRd53nf6wsp",
    status: "Completed"
  },
  {
    name: "Career Essentials in Cybersecurity",
    issuer: "LinkedIn & Microsoft",
    date: "September 2024",
    credentialId: "efd6401f797ca340ea889beed661b4ae15573b21c0a832328b4fec2255708c49",
    status: "Completed"
  },
  {
    name: "Systems and Usable Security",
    issuer: "NPTEL (SWAYAM)",
    date: "April 2025",
    credentialId: "N/A",
    status: "Completed"
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025",
    credentialId: "cL5bW7GRd53nf6wsp",
    status: "Completed"
  },
  {
    name: "AI & Machine Learning",
    issuer: "Skill India Digital Hub",
    date: "June 2025",
    credentialId: "N/A",
    status: "Completed"
  },
  {
    name: "Web Development Internship",
    issuer: "SystemTron",
    date: "July 2024",
    credentialId: "ST/INP/4992",
    status: "Completed"
  }
];

export const experiences: Experience[] = [
  {
    title: "Research Intern - Machine Learning & Deep Learning",
    company: "Nitte Centre of Excellence, NMAM Institute of Technology, Nitte",
    period: "June 2025 – Present",
    description: [
      "Conducting research on Federated Learning models and privacy-preserving AI.",
      "Training ML models like Deep MLP, MLP and Logistic Regression on structured medical dataset.",
      "Implementing Differential Privacy and secure aggregration techniques with analysis of model performance."
    ]
  }
];


export const projects: Project[] = [

  {
    title: "Penetration Testing Portfolio",
    description: "A portfolio showcasing hands-on penetration testing skills using tools like Nmap, Burp Suite, and Metasploit. Includes real-world vulnerability assessments and reports.",
    technologies: ["Burp Suite", "Nmap", "KaliLinux", "Metasploit", "Wireshark"],
    icon: "Shield",
    github: "https://github.com/shravya235/Penetration-Testing-Portfolio",
    demo: "https://github.com/shravya235/Penetration-Testing-Portfolio",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "ShopSmart",
    description: "An e-commerce site built with responsive design. Includes cart functionality, product layout and a professional UI with JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript","Localstorage"],
    icon: "ShoppingCart",
    github: "https://github.com/shravya235/ShopSmart",
    demo: "https://shopsmart-store.vercel.app/",
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Mental Health Prediction with Machine Learning",
    description: "A privacy-preserving federated learning framework was developed using Differential Privacy and Simulated Secure Aggregation on structured mental health data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Opacus", 'FedAvg'],
    icon: "Brain",
    github: "", // No link yet
    demo: "", // No live demo
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Chatbot",
    description: "A full-stack chatbot built with Flask backend and modern UI. Built to demonstrate front-end logic and chatbot training flows.",
    technologies: ["Python", "Javascript", "CSS"],
    icon: "MessageCircle",
    github: "https://github.com/shravya235/Chatbot",
    demo: "", //No link yet
    color: "from-indigo-500 to-purple-500"
  }
];
