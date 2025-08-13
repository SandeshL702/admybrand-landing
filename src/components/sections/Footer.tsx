"use client";

import { Button, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "/api" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" }
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Webinars", href: "/webinars" },
      { name: "Case Studies", href: "/case-studies" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Compliance", href: "/compliance" }
    ]
  }
};

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/admybrand",
    icon: Twitter
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/admybrand",
    icon: Linkedin
  },
  {
    name: "GitHub",
    href: "https://github.com/admybrand",
    icon: Github
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      <Container className="relative z-10">
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12"
          >
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ADmyBRAND
                </h3>
                <p className="text-gray-400 mt-2">AI Suite</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your marketing with AI-powered content generation, 
                audience targeting, and campaign optimization. Join thousands 
                of marketers scaling their success.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>hello@admybrand.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, section], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to transform your marketing?
                </h3>
                <p className="text-blue-100">
                  Start your free trial today and see the AI difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 ADmyBRAND. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for marketers worldwide</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="/status" className="text-gray-400 hover:text-blue-400 transition-colors">
                System Status
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}