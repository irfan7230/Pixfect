"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import {
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Brain,
  Blocks,
  BarChart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
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
                Our Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs. 
              We help organizations transform and thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies to build robust and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-medium">{tech.name}</h3>
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

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs.",
    icon: <Code className="w-6 h-6 text-primary" />,
    features: [
      "Full-stack development",
      "API integration",
      "Legacy system modernization",
      "Quality assurance",
    ],
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud services for scalable and secure infrastructure.",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    features: [
      "Cloud migration",
      "Infrastructure optimization",
      "DevOps implementation",
      "24/7 monitoring",
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications for enhanced user engagement.",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    features: [
      "iOS and Android apps",
      "React Native development",
      "UI/UX design",
      "App maintenance",
    ],
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights for better decision-making.",
    icon: <Database className="w-6 h-6 text-primary" />,
    features: [
      "Big data processing",
      "Business intelligence",
      "Predictive analytics",
      "Data visualization",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    features: [
      "Security assessment",
      "Threat detection",
      "Compliance management",
      "Security training",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage AI to automate processes and gain competitive advantage.",
    icon: <Brain className="w-6 h-6 text-primary" />,
    features: [
      "ML model development",
      "Natural language processing",
      "Computer vision",
      "AI integration",
    ],
  },
];

const process = [
  {
    title: "Discovery",
    description: "Understanding your needs and objectives through detailed consultation.",
  },
  {
    title: "Planning",
    description: "Developing a comprehensive strategy and project roadmap.",
  },
  {
    title: "Development",
    description: "Building your solution using agile methodologies.",
  },
  {
    title: "Delivery",
    description: "Testing, deployment, and ongoing support.",
  },
];

const technologies = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
  },
  {
    name: "Kubernetes",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/kubernetes/kubernetes.png",
  },
  {
    name: "TensorFlow",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tensorflow/tensorflow.png",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
  },
];