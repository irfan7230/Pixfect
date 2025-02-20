"use client"

import { motion, useAnimation } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="team" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent gold-gradient">Our Team</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Meet our exceptional team of innovators and creators who are passionate about building the future of technology.
        </p>

        <div className="relative min-h-[400px] overflow-hidden">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const memberIndex = (currentIndex * 3 + offset) % teamMembers.length;
                const member = teamMembers[memberIndex];
                return (
                  <div key={`${member.id}-${memberIndex}`} className="premium-card group animate-pulse-glow">
                    <div className="premium-card-content">
                      {/* Profile Image */}
                      <div className="mb-6">
                        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#bf953f] group-hover:border-[#fcf6ba] transition-colors duration-300">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent gold-gradient mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#fcf6ba] font-medium mb-3">{member.role}</p>
                        <p className="text-white/80 text-sm">{member.description}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-auto">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full w-10 h-10 bg-black/50 border-[#bf953f] hover:border-[#fcf6ba] hover:bg-[#bf953f]/10"
                          asChild
                        >
                          <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full w-10 h-10 bg-black/50 border-[#bf953f] hover:border-[#fcf6ba] hover:bg-[#bf953f]/10"
                          asChild
                        >
                          <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#bf953f] w-6' : 'bg-[#bf953f]/20'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO & Founder",
    description: "Visionary leader with 10+ years in tech innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "CTO",
    description: "Full-stack architect specializing in cloud solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Lead Designer",
    description: "Creative director with expertise in UI/UX.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Lead Developer",
    description: "Backend specialist in API architecture.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Product Manager",
    description: "Strategic planner driving product vision.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 6,
    name: "David Kim",
    role: "IoT Specialist",
    description: "Expert in smart system integration.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 7,
    name: "Lisa Wang",
    role: "AI Engineer",
    description: "Machine learning and AI implementation expert.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Security Architect",
    description: "Cybersecurity and system protection specialist.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 9,
    name: "Nina Patel",
    role: "UX Researcher",
    description: "User experience and behavioral analysis expert.",
    image: "https://images.unsplash.com/photo-1573497019236-17dd59b5fa20?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 10,
    name: "Robert Taylor",
    role: "DevOps Engineer",
    description: "Infrastructure and automation specialist.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 11,
    name: "Maria Garcia",
    role: "Data Scientist",
    description: "Analytics and data visualization expert.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 12,
    name: "Thomas Lee",
    role: "Mobile Developer",
    description: "Cross-platform mobile app specialist.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 13,
    name: "Anna Kowalski",
    role: "Frontend Lead",
    description: "Expert in modern web technologies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 14,
    name: "Carlos Mendoza",
    role: "Systems Architect",
    description: "Distributed systems and scalability expert.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 15,
    name: "Rachel Chen",
    role: "QA Lead",
    description: "Quality assurance and testing specialist.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 16,
    name: "Daniel Kim",
    role: "Blockchain Dev",
    description: "Blockchain and smart contract expert.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 17,
    name: "Emma Thompson",
    role: "UI Designer",
    description: "Visual design and branding specialist.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  },
  {
    id: 18,
    name: "Marcus Johnson",
    role: "AR/VR Developer",
    description: "Immersive technology implementation expert.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
    github: "https://github.com",
    portfolio: "https://portfolio.com"
  }
];