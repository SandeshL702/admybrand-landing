"use client";

import { Card, CardContent, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  BarChart3, 
  Palette, 
  Users, 
  Shield, 
  Rocket,
  Brain
} from "lucide-react";

const features = [
  {
    id: "1",
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, social media posts, and ad content in seconds with our advanced AI engine trained on high-converting marketing materials."
  },
  {
    id: "2",
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision using AI-powered audience analysis and behavioral targeting algorithms."
  },
  {
    id: "3",
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track campaign performance with comprehensive dashboards, conversion tracking, and actionable insights to optimize your ROI."
  },
  {
    id: "4",
    icon: Palette,
    title: "Brand Asset Management",
    description: "Centralize your brand assets, maintain consistency across channels, and generate on-brand creative variations automatically."
  },
  {
    id: "5",
    icon: Zap,
    title: "Campaign Automation",
    description: "Set up automated marketing workflows that nurture leads, retarget customers, and scale your campaigns without manual intervention."
  },
  {
    id: "6",
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate seamlessly with your team, assign tasks, approve content, and manage workflows in one centralized platform."
  },
  {
    id: "7",
    icon: Shield,
    title: "Compliance & Safety",
    description: "Ensure your campaigns meet advertising standards and brand guidelines with automated compliance checking and content moderation."
  },
  {
    id: "8",
    icon: Rocket,
    title: "Multi-Channel Publishing",
    description: "Deploy campaigns across social media, email, paid ads, and web channels simultaneously with a single click."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Marketers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Transform Your Marketing?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of marketers who have already revolutionized their campaigns with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-blue-100">
                  <Shield className="h-5 w-5" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Zap className="h-5 w-5" />
                  <span>99.9% uptime guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Users className="h-5 w-5" />
                  <span>24/7 expert support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}