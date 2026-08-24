// Lightweight, MDX-component-free post metadata for build-time use
// (sitemap, generateStaticParams, generateMetadata) — importing the compiled
// MDX modules there crashes route handlers because MDX injects a top-level
// React.createContext call incompatible with the react-server condition.
export const postsMeta = [
  { slug: "ai-in-frontend-development-hype-vs-practical-use-cases", ...{
  title: "AI in Frontend Development: Hype vs Practical Use Cases",
  excerpt:
    "AI is useful on the frontend when it supports clarity, speed, and accessibility, not novelty.",
  date: "2026-05-06",
  tags: ["AI", "Frontend", "UX"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Code editor setup representing modern frontend development",
} },
  { slug: "building-personalized-experiences-without-creeping-users-out", ...{
  title: "Building Personalized Experiences Without Creeping Users Out",
  excerpt: "Useful personalization feels like relevance, not surveillance.",
  date: "2026-05-04",
  tags: ["Personalization", "Privacy", "UX"],
  readingTime: "9 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Privacy-themed interface illustrating user trust in personalization",
} },
  { slug: "framer-motion-vs-css-animations-what-to-use-and-when", ...{
  title: "Framer Motion vs CSS Animations: What to Use and When",
  excerpt:
    "Choose Framer Motion for state-driven interaction complexity and CSS for lightweight deterministic transitions.",
  date: "2026-04-29",
  tags: ["Framer Motion", "CSS", "Frontend"],
  readingTime: "12 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Visual contrast between code approaches for web animation",
} },
  { slug: "how-ai-is-quietly-reshaping-modern-web-applications", ...{
  title: "How AI Is Quietly Reshaping Modern Web Applications",
  excerpt:
    "AI is moving from flashy demos to small, useful product decisions that users barely notice.",
  date: "2026-05-08",
  tags: ["AI", "Web Apps", "Product"],
  readingTime: "12 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Abstract AI-inspired visual representing intelligence in web apps",
} },
  { slug: "how-to-add-webgl-to-your-website-without-killing-performance", ...{
  title: "How to Add WebGL to Your Website Without Killing Performance",
  excerpt:
    "WebGL can remain smooth on real devices when quality settings adapt and rendering scope stays constrained.",
  date: "2026-04-24",
  tags: ["WebGL", "Performance", "Optimization"],
  readingTime: "13 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Performance-focused visual with technical interface elements",
} },
  { slug: "how-to-improve-website-engagement-using-motion-design", ...{
  title: "How to Improve Website Engagement Using Motion Design",
  excerpt:
    "Motion design improves engagement when it directs attention and shortens user effort.",
  date: "2026-04-23",
  tags: ["Motion Design", "Engagement", "UX"],
  readingTime: "8 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Interactive web interface visual representing engagement through motion",
} },
  { slug: "how-webgl-can-transform-product-experiences", ...{
  title: "How WebGL Can Transform Product Experiences",
  excerpt:
    "WebGL can turn passive product pages into exploratory experiences that improve understanding and confidence.",
  date: "2026-04-19",
  tags: ["WebGL", "Product UX", "Interactive Design"],
  readingTime: "11 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Interactive 3D-inspired product experience visual",
} },
  { slug: "making-sense-of-user-data-without-drowning-in-metrics", ...{
  title: "Making Sense of User Data Without Drowning in Metrics",
  excerpt:
    "Strong product analytics starts with decision-focused metrics, not dashboards full of numbers.",
  date: "2026-05-05",
  tags: ["Analytics", "Product", "Data"],
  readingTime: "11 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Analytics dashboard visual with charts and metrics",
} },
  { slug: "making-websites-feel-alive-without-hurting-performance", ...{
  title: "Making Websites Feel Alive Without Hurting Performance",
  excerpt:
    "You can create dynamic experiences by animating the right properties and respecting performance budgets.",
  date: "2026-05-01",
  tags: ["Performance", "Animation", "Frontend"],
  readingTime: "13 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Fast modern interface visual suggesting smooth but efficient motion",
} },
  { slug: "microinteractions-that-actually-improve-ux", ...{
  title: "Microinteractions That Actually Improve UX",
  excerpt:
    "Useful microinteractions reduce errors, provide confidence, and guide next actions.",
  date: "2026-04-30",
  tags: ["UX", "Microinteractions", "Design"],
  readingTime: "7 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Close-up interface detail representing microinteraction feedback",
} },
  { slug: "the-future-of-frontend-is-visual-intelligent-and-interactive", ...{
  title: "The Future of Frontend Is Visual, Intelligent, and Interactive",
  excerpt:
    "Modern frontend work is converging around richer visuals, AI-assisted workflows, and high-feedback interaction design.",
  date: "2026-04-22",
  tags: ["Frontend", "AI", "Motion"],
  readingTime: "12 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Futuristic visual representing the next generation of frontend experiences",
} },
  { slug: "the-new-era-of-web-motion-design", ...{
  title: "The New Era of Web Motion Design",
  excerpt:
    "Motion design is shifting from decorative effects to functional interaction design.",
  date: "2026-05-02",
  tags: ["Motion Design", "Design Systems", "UX"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Modern visual composition representing motion design systems",
} },
  { slug: "the-practical-future-of-ai-in-frontend-engineering", ...{
  title: "The Practical Future of AI in Frontend Engineering",
  excerpt:
    "AI in frontend will be defined by reliable workflow integration, not one-click generation promises.",
  date: "2026-04-18",
  tags: ["AI", "Frontend Engineering", "Product"],
  readingTime: "13 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "AI and engineering visual representing practical frontend integration",
} },
  { slug: "the-psychology-behind-smooth-web-animations", ...{
  title: "The Psychology Behind Smooth Web Animations",
  excerpt:
    "Smooth animation improves perceived control by aligning interface response with user expectations.",
  date: "2026-04-28",
  tags: ["Psychology", "Animation", "UX"],
  readingTime: "9 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Human-centered visual representing perception and motion",
} },
  { slug: "the-real-cost-of-adding-ai-to-your-product", ...{
  title: "The Real Cost of Adding AI to Your Product",
  excerpt:
    "API pricing is only one part of AI adoption; engineering complexity and trust maintenance are often bigger costs.",
  date: "2026-05-07",
  tags: ["AI", "Product Strategy", "Engineering"],
  readingTime: "14 min read",
  bannerImage:
    "https://plus.unsplash.com/premium_photo-1676637656277-498f73258bec?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bannerAlt:
    "Dashboard-like visual representing the operational cost of AI features",
} },
  { slug: "webgl-for-developers-who-dont-build-games", ...{
  title: "WebGL for Developers Who Don't Build Games",
  excerpt:
    "You do not need game-engine experience to use WebGL effectively in product interfaces.",
  date: "2026-04-26",
  tags: ["WebGL", "React", "Frontend"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Developer workstation emphasizing practical WebGL use outside gaming",
} },
  { slug: "webgl-plus-react-bringing-3d-to-the-frontend", ...{
  title: "WebGL + React: Bringing 3D to the Frontend",
  excerpt:
    "React and WebGL can coexist cleanly when rendering boundaries and state ownership are clearly defined.",
  date: "2026-04-25",
  tags: ["WebGL", "React", "3D"],
  readingTime: "14 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Abstract 3D data-like visual representing React and WebGL integration",
} },
  { slug: "what-is-webgl-and-why-your-website-might-need-it", ...{
  title: "What Is WebGL and Why Your Website Might Need It",
  excerpt:
    "WebGL enables real-time GPU rendering in the browser, unlocking richer visual experiences than standard DOM/CSS effects.",
  date: "2026-04-27",
  tags: ["WebGL", "Frontend", "Performance"],
  readingTime: "11 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "3D-inspired visual representing GPU-powered browser rendering",
} },
  { slug: "why-great-web-animation-feels-invisible", ...{
  title: "Why Great Web Animation Feels Invisible",
  excerpt:
    "The best animation guides attention and confirms state changes without becoming the center of attention.",
  date: "2026-05-03",
  tags: ["Animation", "UX", "Frontend"],
  readingTime: "8 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Abstract motion blur visual representing smooth web animation",
} },
  { slug: "why-motion-design-is-becoming-core-to-web-ux", ...{
  title: "Why Motion Design Is Becoming Core to Web UX",
  excerpt:
    "Motion is becoming a foundational UX layer because it improves comprehension, confidence, and flow.",
  date: "2026-04-17",
  tags: ["Motion Design", "UX", "Frontend"],
  readingTime: "9 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Fluid interface visual symbolizing motion-led user experience",
} },
  { slug: "why-privacy-first-web-development-matters-more-than-ever", ...{
  title: "Why Privacy-First Web Development Matters More Than Ever",
  excerpt:
    "Trust is becoming a product differentiator, and privacy-first engineering directly supports that trust.",
  date: "2026-04-20",
  tags: ["Privacy", "Security", "Web Development"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Privacy and security visual with lock icon on digital interface",
} },
  { slug: "why-static-websites-are-losing-attention", ...{
  title: "Why Static Websites Are Losing Attention",
  excerpt:
    "Static content still has value, but users increasingly expect responsive interaction and adaptive relevance.",
  date: "2026-04-21",
  tags: ["UX", "Content Strategy", "Frontend"],
  readingTime: "7 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
  bannerAlt: "Website interface visual showing modern interactive expectations",
} },
];
