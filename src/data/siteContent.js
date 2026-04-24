import resumeFile from "./Rezume.pdf";
import aboutImage from "../images/mid-img.jpg";
import profileImage from "../images/prabhat1.png";
import logo from "../images/projectImage/logo.png";
import mentorConnectImage from "../images/projectImage/college.png";
import chatAppImage from "../images/projectImage/discord.png";
import memoriesImage from "../images/projectImage/image.png";
import ecommerceImage from "../images/projectImage/ecommerce.png";

// Update text, links, images, and project entries here.
export const portfolioContent = {
  name: "Prabhat Sehrawat",
  role: "Full-Stack Developer",
  location: "Ghaziabad, India",
  currentFocus: "Shipping reliable MERN products with stronger UI polish",
  logo,
  profileImage,
  aboutImage,
  resumeFile,
  hero: {
    eyebrow: "MERN STACK DEVELOPER / REACT / NODE / JAVA",
    title: "I design and build developer-grade web products with clean UI and practical engineering.",
    description:
      "This new portfolio is structured as a focused single-page experience so recruiters and clients can understand the profile quickly without clicking through multiple pages.",
    highlights: [
      "Open to full-time roles",
      "Available for freelance work",
      "Focused on full-stack product development"
    ],
    terminal: [
      "$ whoami",
      "Prabhat Sehrawat / Full-Stack Developer",
      "$ top_stack",
      "React.js, Node.js, MongoDB, JavaScript",
      "$ current_goal",
      "Build polished, production-ready products"
    ]
  },
  about: {
    title: "Professional developer presentation without the clutter",
    description:
      "The layout now keeps the strongest information on one page, using stronger spacing, clearer hierarchy, and a sharper coder-style visual language.",
    lead:
      "I enjoy building full-stack applications that balance frontend clarity with backend reliability. My focus is not just writing code, but shipping interfaces that feel polished, systems that are easy to maintain, and products that communicate trust at first glance."
  },
  quickFacts: [
    { label: "Location", value: "Ghaziabad, India" },
    { label: "Primary Focus", value: "MERN stack applications" },
    { label: "Strength", value: "UI polish with practical backend work" },
    { label: "Work Style", value: "Clean, scalable, product-minded" }
  ],
  capabilities: [
    {
      iconKey: "frontend",
      title: "Frontend engineering",
      description:
        "Responsive React interfaces, strong component structure, and layouts that feel more premium than template-driven."
    },
    {
      iconKey: "backend",
      title: "Backend development",
      description:
        "Node.js, Express.js, authentication, data handling, and APIs built with maintainability in mind."
    },
    {
      iconKey: "craft",
      title: "Product presentation",
      description:
        "A stronger eye for hierarchy, spacing, and overall finish so the final output feels intentional and professional."
    }
  ],
  stackGroups: [
    {
      iconKey: "frontend",
      title: "Frontend",
      caption: "Interfaces that are responsive, clean, and easy to navigate.",
      items: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Redux"]
    },
    {
      iconKey: "backend",
      title: "Backend",
      caption: "APIs, data handling, authentication, and app logic.",
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs"]
    },
    {
      iconKey: "tools",
      title: "Tools and Workflow",
      caption: "The everyday tooling behind development and collaboration.",
      items: ["Git", "GitHub", "Postman", "Prisma", "VS Code", "Netlify"]
    }
  ],
  metrics: [
    { value: "10+", label: "Projects built and deployed" },
    { value: "1+", label: "Years of focused hands-on learning" },
    { value: "MERN", label: "Core stack used across major projects" },
    { value: "Fast", label: "Single-page experience for easier scanning" }
  ],
  featuredProjects: [
    {
      title: "MentorConnect",
      summary:
        "A full-stack mentorship platform concept that highlights structured user flows, collaboration, and modern MERN architecture.",
      stack: ["React", "Redux", "Node.js", "MongoDB"],
      image: mentorConnectImage,
      github: "https://github.com/prabhat-021/Progress.git",
      demo: ""
    },
    {
      title: "ChatApp",
      summary:
        "A communication-focused application built around real-time interaction patterns and a full-stack JavaScript workflow.",
      stack: ["Next.js", "React", "Node.js", "MongoDB"],
      image: chatAppImage,
      github: "https://github.com/prabhat-021/Socket-Mysql-Learn.git",
      demo: ""
    },
    {
      title: "Memories Sharing App",
      summary:
        "A social-style MERN project that combines authentication, content sharing, and a more app-like user experience.",
      stack: ["React", "Redux", "Express", "MongoDB"],
      image: memoriesImage,
      github: "https://github.com/prabhat-021/Mern-SheThrive-App",
      demo: ""
    },
    {
      title: "React Ecommerce",
      summary:
        "A storefront experience focused on browsing flow, product presentation, and frontend implementation using React.",
      stack: ["React", "JavaScript", "Auth0"],
      image: ecommerceImage,
      github: "",
      demo: "https://react-ecommerce-021.netlify.app/"
    }
  ],
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/prabhat-021",
      iconKey: "github",
      external: true
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/prabhatsahrawat/",
      iconKey: "linkedin",
      external: true
    },
    {
      label: "Email",
      url: "mailto:theprabhatsehrawat@gmail.com",
      iconKey: "email",
      external: false
    }
  ],
  contact: {
    title: "A simpler contact section that still feels premium",
    description:
      "The form stays on the same page so the portfolio feels complete, while contact details remain easy to update in one place.",
    intro:
      "If you want to discuss a role, freelance project, or collaboration, reach out here. You can later replace the text, phone, email, and links in this file without redesigning the page.",
    methods: [
      {
        iconKey: "email",
        label: "Email",
        value: "theprabhatsehrawat@gmail.com",
        href: "mailto:theprabhatsehrawat@gmail.com"
      },
      {
        iconKey: "phone",
        label: "Phone",
        value: "+91 8445580308",
        href: "tel:+918445580308"
      },
      {
        iconKey: "location",
        label: "Location",
        value: "Ghaziabad, India"
      }
    ]
  },
  contactForm: {
    serviceId: "service_rcv6wyf",
    templateId: "template_x9r3n89",
    publicKey: "Ckcxj8C6p5AXbTgFS"
  },
  footer: {
    subtext:
      "Single-page developer portfolio with centralized content, cleaner structure, and easier future edits."
  }
};
