// Portfolio Mock Data - Fetched from reference portfolio
export const personalInfo = {
  name: "Sudeep Mishra",
  title: "Senior Full-Stack Software Engineer & Technical Consultant",
  location: "Kathmandu, Nepal",
  mobile: "+977 9849943171",
  email: "sudeep014@gmail.com",
  tagline: "Building digital experiences with clean code",
  about:
    "I'm a full-stack engineer specializing in Next.js, React, and TypeScript, building production systems that hold up under real traffic, not just demos. My approach centers on server-first architecture — App Router, RSC, and deliberate rendering strategy (SSR/SSG/ISR) — to ship interfaces that are fast by default and cheap to run at scale. I solve the problems teams hit past the prototype stage: eliminating client-server waterfalls, cutting Core Web Vitals regressions, and designing caching and data layers that stay correct under concurrent load.",
  avatar: "/image.jpg",
  social: {
    github: "https://github.com/sudpmishra",
    linkedin: "https://linkedin.com/in/sudeep014",
    twitter: "https://twitter.com/sudpmishra",
  },
};

export const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Ruby",
    "Python",
    "Progress 4GL",
    "Java",
    "C",
    "C++",
  ],
  frameworks: [
    "React.js",
    "React Native",
    "Angular",
    "Ruby on Rails",
    "jQuery",
    "Node.js",
    "NestJS",
    "D3.js",
    "Next.js",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Progress 4GL"],
  tools: ["Docker", "Figma", "GraphQL", "Git", "AWS", "Azure", "Prisma ORM"],
  platforms: ["Linux", "Windows", "MacOS"],
};

export const experiences = [
  {
    id: 1,
    company: "Startup Medic",
    positions: [
      {
        title: "Senior Software Engineer (Remote)",
        description:
          "Played a pivotal role in architecting and developing scalable applications for Startup Medic, translating business requirements into high-quality software while optimizing performance, reliability, and engineering standards.",
        period: "Nov 2025 - Present",
      },
    ],
  },
  {
    id: 2,
    company: "MusicGPT",
    url: "https://musicgpt.com/",
    positions: [
      {
        title: "Senior Software Engineer (Independent Contractor)",
        period: "Feb 2025 - Mar 2026",
        description:
          "Successfully drove the development of scalable web applications while leading a dedicated team at MusicGPT. Spearheaded the transition to a more robust infrastructure, resulting in a 30% increase in application performance. Championed best practices in coding and project management, fostering a culture of excellence within the team. Enhanced user engagement through innovative features, leading to a measurable uptick in platform activity.",
      },
    ],
  },
  {
    id: 3,
    company: "Aerion Technologies",
    url: "https://aerion.com.au/",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "May 2022 - Feb 2025",
        description:
          "Led establishment of robust coding standards for MyHome Cleaning application. Spearheaded project infrastructure setup and streamlined deployment for Next.js application. Developed significant features enhancing functionality and user experience.",
      },
      {
        title: "Software Engineer",
        period: "Oct 2021 - May 2022",
        description:
          "Provided innovative solutions with React, Node.js and Python for FinTech company (Credilinq Ai.). Built microservice architecture including websites, API gateways, Azure functions and web components.",
      },
    ],
  },
  {
    id: 4,
    company: "CodeDemon",
    url: "http://codedemon.org/",
    positions: [
      {
        title: "Senior Full Stack Engineer",
        period: "Oct 2022 - April 2024",
        description:
          "Working as Consultant Senior Software Engineer utilizing React, Node, and Ruby on Rails for various client projects.",
      },
    ],
  },
  {
    id: 5,
    company: "CloudChomp Inc",
    url: "https://www.cloudchomp.com/",
    positions: [
      {
        title: "Software Engineer",
        period: "Jul 2020 - Oct 2021",
        description:
          "Worked as Frontend Developer for cloud-based service platform. Responsible for developing user interface and ensuring frontend functionality.",
      },
    ],
  },
  {
    id: 6,
    company: "Javra Software",
    url: "https://javra.com/",
    positions: [
      {
        title: "Software Engineer",
        period: "Jan 2018 - Mar 2020",
        description:
          "Conducted research on React.js and React Native integration with Progress Openedge. Researched C-P Objects, Authentication Gateway, Kendo UI, and NativeScript.",
      },
    ],
  },
  {
    id: 7,
    company: "Deerwalk Inc",
    url: "https://deerwalk.edu.np/DWIT/",
    positions: [
      {
        title: "Intern",
        period: "Jun 2017 - Nov 2017",
        description:
          "Frontend Developer for Plan Analytics healthcare application. Worked on feature requests and bug fixes using jQuery and Grails.",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Equity Quotient (EQ)",
    description: [
      "Built the data-ingestion and query layer on Next.js App Router with Drizzle ORM over a multi-source schema (socioeconomic, demographic, health) so large joined queries stay type-safe end to end.",
      "Split rendering by route segment — static ISR for population/report pages that update on a scheduled revalidation window, streaming SSR for AI-generated insight views — to keep TTFB low without serving stale analytics.",
      "Deployed on AWS with edge caching in front of read-heavy endpoints, cutting repeated-query load on the analytics DB during ESG reporting spikes.",
    ],
    tech: [
      "Next.js",
      "Python",
      "Drizzle ORM",
      "AWS",
      "TypeScript",
      "AI Integration",
    ],
    github: "",
    live: "https://equityquotient.io/",
    featured: true,
  },
  {
    id: 1.5,
    title: "MusicGPT Platform",
    description: [
      "Led infrastructure migration to a decoupled Next.js frontend / NestJS API architecture, replacing a monolithic setup and driving a 30% improvement in application performance.",
      "Introduced route-level code splitting and image/asset optimization on the Next.js side, reducing largest-contentful-paint on core generation flows.",
      "Designed Prisma-backed data access patterns with connection pooling tuned for concurrent AI-generation jobs, avoiding pool exhaustion under bursty load.",
    ],
    tech: ["Next.js", "NestJS", "Prisma ORM", "AWS", "TypeScript"],
    github: "",
    live: "https://musicgpt.com/",
    featured: true,
  },
  {
    id: 2,
    title: "MyHome Cleaning App",
    description: [
      "Set up the Next.js project infrastructure and deployment pipeline from scratch, establishing coding standards that the team scaled the app on.",
      "Built the booking flow with Server Actions and API routes for real-time slot availability and payment integration, avoiding double-booking under concurrent requests.",
      "Used SSG for marketing/service pages and SSR for the authenticated admin dashboard, keeping public pages fast while dashboard data stayed live.",
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Credilinq FinTech Platform",
    description:
      "Microservice-based financial technology platform with API gateways, automated workflows, and Azure cloud integration.",
    tech: ["React", "Node.js", "Python", "Azure"],
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "CloudChomp Dashboard",
    description:
      "Cloud service management dashboard with real-time analytics, resource monitoring, and cost optimization features.",
    tech: ["React", "D3.js", "GraphQL", "AWS"],
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 5,
    title: "Plan Analytics",
    description:
      "Healthcare analytics application for data visualization and patient insights using modern web technologies.",
    tech: ["jQuery", "Grails", "PostgreSQL"],
    github: "",
    live: "",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    institution: "Kathmandu University, Dhulikhel",
    degree: "BE in Computer Engineering",
    period: "2013 - 2017",
  },
  {
    id: 2,
    institution: "GEMS Institute of Higher Education, Dhapakhel",
    degree: "+2 Science",
    period: "2011 - 2013",
  },
  {
    id: 3,
    institution: "Graded English Medium School (GEMS)",
    degree: "SLC",
    period: "2010",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
