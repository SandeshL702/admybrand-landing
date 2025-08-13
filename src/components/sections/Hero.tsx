"use client";

import { Button, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
      
      <Container className="relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200/50 mb-6">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            Trusted by 10,000+ marketers worldwide
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Transform Your Brand with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Marketing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          ADmyBRAND AI Suite revolutionizes how you create, manage, and optimize marketing campaigns. 
          Generate compelling content, analyze performance, and scale your brand effortlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            onClick={() => setIsVideoPlaying(true)}
            className="group"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              {!isVideoPlaying ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group hover:bg-white transition-colors shadow-lg"
                  >
                    <Play className="h-8 w-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                      <p className="text-sm font-medium">ADmyBRAND AI Suite Dashboard</p>
                      <p className="text-xs text-gray-300">See how AI transforms your marketing workflow</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center text-white">
                  <p>Demo Video Playing...</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500"
        >
          <p className="text-sm font-medium">Trusted by leading brands:</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="h-8 w-24 bg-gray-300 rounded" />
            <div className="h-8 w-20 bg-gray-300 rounded" />
            <div className="h-8 w-28 bg-gray-300 rounded" />
            <div className="h-8 w-22 bg-gray-300 rounded" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}