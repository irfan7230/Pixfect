"use client"

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Sparkles, ChevronDown } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { AboutSection } from '@/components/about-section';
import { TeamSection } from '@/components/team-section';
import { ParallaxSection } from '@/components/parallax-section';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import dynamic from "next/dynamic";
import Lottie from 'react-lottie';
import animationData from '../assets/animation/robot-animation.json';



const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(191,149,63,0.1),transparent_70%)]" />
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] w-full"
            style={{
              background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <SiteHeader />
      
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        {/* Main Content */}
        <motion.div 
          className="relative z-10 w-full max-w-7xl mx-auto px-4"
          style={{ scale: scaleSpring, y: ySpring }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative inline-block"
              >
                <span className="text-xs sm:text-sm font-semibold text-primary px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
                  Welcome to the Future
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent gold-gradient">
                  Boost Your
                </span>
                <br />
                <span className="bg-clip-text text-transparent gold-gradient">
                  Startup Business
                </span>
                <br />
                <span className="bg-clip-text text-transparent gold-gradient">
                  Faster
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform your vision into reality with our cutting-edge technology solutions. 
                We help startups scale their business with innovative digital products.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button size="lg" className="group relative overflow-hidden bg-primary/20 hover:bg-primary/30 border border-primary/50">
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-primary/50 hover:border-primary bg-black/50"
                >
                  <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                height={400}
                width={400}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-primary/50" />
        </motion.div>
      </section>

      <ParallaxSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  );
}