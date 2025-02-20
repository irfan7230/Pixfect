"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Users, Target, Rocket, Cpu, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent gold-gradient">
                About Pixfect
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to creating innovative solutions 
              that shape the future of digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global leader in innovative technology solutions, driving digital 
                transformation and creating sustainable value for businesses worldwide.
              </p>
              <ul className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation in the digital age.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary mb-4">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className="premium-card-content">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const visionPoints = [
  "Driving innovation through diverse ventures under one brand",
  "Offering sustainable, scalable solutions in everyday essentials",
  "Empowering digital transformation across industries",
  "Building trusted, long-term relationships with our customers",
];

const missionPoints = [
  "Deliver exceptional value through versatile services like online grocery, furniture, and franchise management",
  "Maintain the highest standards of quality, reliability, and customer satisfaction",
  "Empower communities with accessible and tech-driven solutions",
  "Encourage continuous growth, learning, and innovation within our team",
];

const history = [
  {
    year: "2024",
    title: "Pixfect Founded",
    description: "Pixfect was established by a team of 18 passionate 3rd-year CSE students, aiming to create innovative digital solutions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
  },
  {
    year: "2025",
    title: "Diversification & Growth",
    description: "Pixfect evolved by expanding into online grocery, furniture, and franchise services, creating a multi-faceted platform for everyday needs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
  },
  {
    year: "2025",
    title: "Launched Frans-Cheers",
    description: "Pixfect introduced Frans-Cheers, a dedicated platform to support and manage franchise businesses, enhancing growth opportunities for entrepreneurs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
  },
  {
    year: "2025",
    title: "EmpowHer Project Initiated",
    description: "Pixfect began developing EmpowHer, an AI-powered safety app for women and children, featuring real-time emergency response, AI-driven threat detection, and IoT integration for enhanced protection.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries and embracing new technologies to create cutting-edge solutions.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: "Excellence",
    description: "Maintaining the highest standards in everything we do, from code quality to client service.",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    title: "Collaboration",
    description: "Working together as a team and with our clients to achieve exceptional results.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
];