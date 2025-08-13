"use client";

import { Card, CardContent, Container } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    content: "ADmyBRAND AI Suite completely transformed our marketing workflow. We're now generating high-quality content 10x faster and seeing 300% better engagement rates.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b25c2e83?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "GrowthLab",
    content: "The AI-powered audience targeting is incredible. We've reduced our customer acquisition cost by 40% while doubling our conversion rates. This is the future of marketing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "BrandForward",
    content: "I can't imagine running campaigns without ADmyBRAND now. The automation features have saved us 20+ hours per week, and the results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "4",
    name: "David Park",
    role: "VP of Marketing",
    company: "InnovateNow",
    content: "The analytics and insights provided by ADmyBRAND are game-changing. We finally have the data we need to make informed marketing decisions and optimize our ROI.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Creative Director",
    company: "CreativeWorks",
    content: "The quality of AI-generated content is phenomenal. It maintains our brand voice perfectly while scaling our creative output beyond what we thought was possible.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what industry experts are saying about ADmyBRAND AI Suite 
            and how it's transforming their marketing results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100">
                  <CardContent className="p-12">
                    <div className="absolute top-6 left-6 text-blue-200">
                      <Quote className="h-12 w-12" />
                    </div>
                    
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${
                              i < currentTestimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                        "{currentTestimonial.content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold text-lg">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 text-lg">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {currentTestimonial.role}
                        </div>
                        <div className="text-blue-600 font-medium">
                          {currentTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">10,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">99.8%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">5M+</div>
            <div className="text-gray-600">Content Pieces Generated</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}