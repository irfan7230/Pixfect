"use client"

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ban from '../assets/bg-ban.png'

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-30"
      >
        <Image
          src={ban}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Innovation Meets Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Pushing the boundaries of technology to create extraordinary digital experiences
          </p>
        </div>
      </motion.div>
    </section>
  );
}