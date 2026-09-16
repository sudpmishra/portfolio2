// Lightweight, MDX-component-free post metadata for build-time use
// (sitemap, generateStaticParams, generateMetadata) — importing the compiled
// MDX modules there crashes route handlers because MDX injects a top-level
// React.createContext call incompatible with the react-server condition.
export const postsMeta = [
  { slug: "how-i-learned-to-stop-worrying-and-love-the-autocomplete", ...{
  title: "The Developer's Guide to Becoming Obsolete, Gracefully",
  excerpt:
    "AI didn't replace developers — it promoted them to translator, babysitter, and professional skeptic.",
  date: "2026-09-16",
  tags: ["AI", "Developers", "Product"],
  readingTime: "9 min read",
  bannerImage:
    "https://plus.unsplash.com/premium_photo-1768646435966-e56eaa2743f4?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Silhouette of a person in front of multiple glowing computer screens",
} },
  { slug: "what-ai-is-doing-to-junior-developers-and-why-it-should-worry-us", ...{
  title: "What AI Is Doing to Junior Developers, and Why It Should Worry Us",
  excerpt:
    "AI is quietly closing the door juniors used to walk through, and the industry hasn't figured out what replaces it yet.",
  date: "2026-09-16",
  tags: ["AI", "Junior Developers", "Industry"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "A developer in a hoodie typing on a laptop late at night",
} },
  { slug: "how-to-improve-website-engagement-using-motion-design", ...{
  title: "How to Improve Website Engagement Using Motion Design",
  excerpt:
    "Most motion on the web is decoration. The kind that actually keeps people around is doing a job.",
  date: "2026-04-23",
  tags: ["Motion Design", "Engagement", "UX"],
  readingTime: "8 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1597386601945-8980df52c3dc?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "A black and yellow speedometer, evoking motion and momentum",
} },
  { slug: "the-future-of-frontend-is-visual-intelligent-and-interactive", ...{
  title: "The Future of Frontend Is Visual, Intelligent, and Interactive",
  excerpt:
    "Frontend stopped being just component composition a while ago. Most of us just haven't updated our job description.",
  date: "2026-04-22",
  tags: ["Frontend", "AI", "Motion"],
  readingTime: "10 min read",
  bannerImage:
    "https://images.unsplash.com/photo-1764178952759-5dbd387e3782?auto=format&fit=crop&w=1600&q=80",
  bannerAlt:
    "Vivid neon signage at night, evoking a visual and interactive future",
} },
];
