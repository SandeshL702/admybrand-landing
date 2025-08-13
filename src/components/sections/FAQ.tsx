"use client";

import { Accordion, AccordionItem, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "How does ADmyBRAND's AI content generation work?",
    answer: "Our AI is trained on millions of high-performing marketing materials and uses advanced natural language processing to understand your brand voice, target audience, and campaign objectives. Simply input your brief, and our AI generates compelling content that matches your brand's tone and style while optimizing for engagement and conversion."
  },
  {
    id: "2",
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Yes! ADmyBRAND seamlessly integrates with over 100+ popular marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads Manager, Mailchimp, Hootsuite, and many more. Our API also allows custom integrations for enterprise customers with unique requirements."
  },
  {
    id: "3",
    question: "How accurate is the AI-powered audience targeting?",
    answer: "Our AI targeting algorithms analyze over 500+ data points including demographic data, behavioral patterns, engagement history, and market trends. This results in 85% more accurate audience identification compared to traditional methods, leading to higher conversion rates and lower acquisition costs."
  },
  {
    id: "4",
    question: "Is there a limit to how much content I can generate?",
    answer: "This depends on your plan. Starter plans include 100 generations per month, Professional plans offer unlimited content generation, and Enterprise plans include priority processing and advanced customization options. All plans include access to our template library and brand consistency features."
  },
  {
    id: "5",
    question: "How secure is my data and brand information?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and GDPR-ready data handling. Your brand data is stored in secure, isolated environments, and we never use your proprietary information to train our models for other customers."
  },
  {
    id: "6",
    question: "Do you offer training and onboarding support?",
    answer: "Absolutely! All plans include comprehensive onboarding with video tutorials and documentation. Professional and Enterprise customers receive dedicated support, live training sessions, and a dedicated customer success manager to ensure you maximize your ROI."
  },
  {
    id: "7",
    question: "Can I collaborate with my team on campaigns?",
    answer: "Yes! Professional and Enterprise plans include robust collaboration features like team workspaces, role-based permissions, approval workflows, comment systems, and real-time editing. You can easily manage multiple campaigns across different team members and departments."
  },
  {
    id: "8",
    question: "What kind of analytics and reporting do you provide?",
    answer: "Our analytics suite provides comprehensive performance tracking including engagement rates, conversion metrics, A/B test results, audience insights, and ROI analysis. You'll get real-time dashboards, automated reports, and predictive analytics to optimize your campaigns continuously."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
            <MessageCircleQuestion className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            about ADmyBRAND AI Suite and how it can transform your marketing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <Accordion>
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    title={faq.question}
                    defaultOpen={index === 0}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our team of experts is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span>Average Response Time: 2 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}