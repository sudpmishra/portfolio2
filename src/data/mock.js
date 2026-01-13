// Portfolio Mock Data - Fetched from reference portfolio
export const personalInfo = {
  name: "Sudeep Mishra",
  title: "Senior Software Engineer",
  location: "Kathmandu, Nepal",
  email: "sudeep014@gmail.com",
  tagline: "Building digital experiences with clean code",
  about: "I am an experienced Computer Engineer with a great dedication to my work and I am highly organized and professional. I am passionate about research and can apply my technical knowledge to software development.",
  avatar: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/558286703_26443164508619556_6636373702418204114_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=nPCAVFmCrJMQ7kNvwGM618_&_nc_oc=Adk67v1G_Ryb08U2DCdyIwLzPc-V5-NAQ3keIOyyjwfatocmQy3vNMHOKlysUY8H1bg&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=my8lyod9NljcS3QvYxeKqQ&oh=00_AfrJhTtDlyfLI8BDKd5w0usq-yYMBUQ6GLqppsgK9j1ydQ&oe=696AB574",
  social: {
    github: "https://github.com/sudpmishra",
    linkedin: "https://linkedin.com/in/sudeep014",
    twitter: "https://twitter.com/sudpmishra"
  }
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Ruby", "Python", "Progress 4GL", "Java", "C", "C++"],
  frameworks: ["React.js", "React Native", "Angular", "Ruby on Rails", "jQuery", "Node.js", "NestJS", "D3.js", "Next.js"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Progress 4GL"],
  tools: ["Docker", "Figma", "GraphQL", "Git", "AWS", "Azure", "Prisma ORM"],
  platforms: ["Linux", "Windows", "MacOS"]
};

export const experiences = [{
    id: 1,
    company: "MusicGPT",
    url: "https://musicgpt.com/",
    positions: [
      {
        title: "Senior Software Engineer (Independent Contractor)",
        period: "Mar 2025 - Present",
        description: "Successfully drove the development of scalable web applications while leading a dedicated team at MusicGPT. Spearheaded the transition to a more robust infrastructure, resulting in a 30% increase in application performance. Championed best practices in coding and project management, fostering a culture of excellence within the team. Enhanced user engagement through innovative features, leading to a measurable uptick in platform activity."
      }
    ]
  },
  {
    id: 2,
    company: "Aerion Technologies",
    url: "https://aerion.com.au/",
    positions: [
      {
        title: "Senior Software Engineer",
        period: "May 2022 - Present",
        description: "Led establishment of robust coding standards for MyHome Cleaning application. Spearheaded project infrastructure setup and streamlined deployment for Next.js application. Developed significant features enhancing functionality and user experience."
      },
      {
        title: "Software Engineer",
        period: "Oct 2021 - May 2022",
        description: "Provided innovative solutions with React, Node.js and Python for FinTech company (Credilinq Ai.). Built microservice architecture including websites, API gateways, Azure functions and web components."
      }
    ]
  },
  {
    id: 3,
    company: "CodeDemon",
    url: "http://codedemon.org/",
    positions: [
      {
        title: "Senior Full Stack Engineer",
        period: "Oct 2022 - Present",
        description: "Working as Consultant Senior Software Engineer utilizing React, Node, and Ruby on Rails for various client projects."
      }
    ]
  },
  {
    id: 4,
    company: "CloudChomp Inc",
    url: "https://www.cloudchomp.com/",
    positions: [
      {
        title: "Software Engineer",
        period: "Jul 2020 - Oct 2021",
        description: "Worked as Frontend Developer for cloud-based service platform. Responsible for developing user interface and ensuring frontend functionality."
      }
    ]
  },
  {
    id: 5,
    company: "Javra Software",
    url: "https://javra.com/",
    positions: [
      {
        title: "Software Engineer",
        period: "Jan 2018 - Mar 2020",
        description: "Conducted research on React.js and React Native integration with Progress Openedge. Researched C-P Objects, Authentication Gateway, Kendo UI, and NativeScript."
      }
    ]
  },
  {
    id: 6,
    company: "Deerwalk Inc",
    url: "https://deerwalk.edu.np/DWIT/",
    positions: [
      {
        title: "Intern",
        period: "Jun 2017 - Nov 2017",
        description: "Frontend Developer for Plan Analytics healthcare application. Worked on feature requests and bug fixes using jQuery and Grails."
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "MusicGPT Platform",
    description: "An innovative music-focused AI platform built with modern web technologies, featuring scalable architecture and enhanced user engagement through cutting-edge features.",
    tech: ["Next.js", "NestJS", "Prisma ORM", "AWS", "TypeScript"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 2,
    title: "MyHome Cleaning App",
    description: "A comprehensive cleaning service booking platform built with Next.js, featuring real-time scheduling, payment integration, and admin dashboard.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 3,
    title: "Credilinq FinTech Platform",
    description: "Microservice-based financial technology platform with API gateways, automated workflows, and Azure cloud integration.",
    tech: ["React", "Node.js", "Python", "Azure"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 4,
    title: "CloudChomp Dashboard",
    description: "Cloud service management dashboard with real-time analytics, resource monitoring, and cost optimization features.",
    tech: ["React", "D3.js", "GraphQL", "AWS"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 5,
    title: "Plan Analytics",
    description: "Healthcare analytics application for data visualization and patient insights using modern web technologies.",
    tech: ["jQuery", "Grails", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false
  }
];

export const education = [
  {
    id: 1,
    institution: "Kathmandu University, Dhulikhel",
    degree: "BE in Computer Engineering",
    period: "2013 - 2017"
  },
  {
    id: 2,
    institution: "GEMS Institute of Higher Education, Dhapakhel",
    degree: "+2 Science",
    period: "2011 - 2013"
  },
  {
    id: 3,
    institution: "Graded English Medium School (GEMS)",
    degree: "SLC",
    period: "2010"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
