import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/mock";
import GradientText from "../animations/GradientText";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTO_REPLY_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        from_email: formData.email,
      };
      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        ),
      ]);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#111113]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg mb-4 block">
            06. What's Next?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <GradientText colors={["#22c55e", "#10b981", "#34d399", "#22c55e"]}>
              Get In Touch
            </GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#1a1c1e] border border-white/5 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-400">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111113] border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111113] border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#111113] border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Hi, I'd like to discuss a project..."
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-500 mb-4">Or reach out directly</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-[#1a1c1e] border border-white/5 rounded-xl text-gray-300 hover:text-green-400 hover:border-green-500/30 transition-all flex items-center gap-2"
              whileHover={{ y: -2 }}
            >
              <Mail size={18} />
              {personalInfo.email}
            </motion.a>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1c1e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1c1e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1a1c1e] border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <Twitter size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
