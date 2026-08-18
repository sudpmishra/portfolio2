import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../../data/mock";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0b] border-t border-white/5 py-12">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="text-xl font-bold text-white flex items-center gap-2"
            >
              <span className="text-green-400">&lt;</span>
              <span>SM</span>
              <span className="text-green-400">/&gt;</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Building the future, one line at a time
            </p>
            <Link
              href="/blog"
              className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium mt-3 inline-flex items-center gap-1"
            >
              Blog & Notes
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { icon: Github, href: personalInfo.social.github },
              { icon: Linkedin, href: personalInfo.social.linkedin },
              { icon: Twitter, href: personalInfo.social.twitter },
              {
                icon: () => (
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                ),
                href: "https://www.upwork.com/freelancers/~0165a835a5e53894b8?mp_source=share",
              },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a1c1e] flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <item.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all duration-300"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={14} className="text-green-400" /> by{" "}
            {personalInfo.name}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
