"use client";

import { Button, Card, CardContent, Badge, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses and solo entrepreneurs",
    popular: false,
    features: [
      { name: "AI Content Generation", included: true, limit: "100 generations/month" },
      { name: "Basic Analytics", included: true },
      { name: "1 Brand Profile", included: true },
      { name: "Email Support", included: true },
      { name: "Social Media Publishing", included: true, limit: "5 accounts" },
      { name: "Template Library", included: true, limit: "50+ templates" },
      { name: "Team Collaboration", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "API Access", included: false },
      { name: "Priority Support", included: false }
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Ideal for growing teams and marketing agencies",
    popular: true,
    features: [
      { name: "AI Content Generation", included: true, limit: "Unlimited" },
      { name: "Advanced Analytics", included: true },
      { name: "5 Brand Profiles", included: true },
      { name: "Priority Support", included: true },
      { name: "Social Media Publishing", included: true, limit: "25 accounts" },
      { name: "Template Library", included: true, limit: "500+ templates" },
      { name: "Team Collaboration", included: true, limit: "10 members" },
      { name: "A/B Testing", included: true },
      { name: "Custom Integrations", included: true },
      { name: "White-label Options", included: false }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$499",
    period: "/month",
    description: "For large organizations with advanced needs",
    popular: false,
    features: [
      { name: "AI Content Generation", included: true, limit: "Unlimited" },
      { name: "Advanced Analytics", included: true, limit: "Real-time" },
      { name: "Unlimited Brand Profiles", included: true },
      { name: "24/7 Dedicated Support", included: true },
      { name: "Social Media Publishing", included: true, limit: "Unlimited" },
      { name: "Template Library", included: true, limit: "1000+ templates" },
      { name: "Team Collaboration", included: true, limit: "Unlimited" },
      { name: "A/B Testing", included: true, limit: "Advanced" },
      { name: "Custom Integrations", included: true },
      { name: "White-label Options", included: true }
    ]
  }
];

export function Pricing() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core AI features 
            with different limits and advanced capabilities.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-gray-200">
            <span className="px-4 py-2 text-sm font-medium text-gray-600">Monthly</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
              Save 20% Annually
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="primary" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`h-full ${tier.popular 
                  ? 'ring-2 ring-blue-500 shadow-xl scale-105' 
                  : 'hover:shadow-lg'
                } transition-all duration-300`}
                variant={tier.popular ? "gradient" : "default"}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-600">{tier.period}</span>
                    </div>
                    <Button 
                      variant={tier.popular ? "primary" : "outline"} 
                      className="w-full"
                    >
                      {tier.id === "enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Features Included
                    </h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            feature.included 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {feature.included ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <X className="w-3 h-3" />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className={`text-sm ${
                              feature.included ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {feature.name}
                            </span>
                            {feature.limit && (
                              <span className="text-xs text-gray-500 block">
                                {feature.limit}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ SOC 2 compliant</span>
            <span>✓ GDPR ready</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}