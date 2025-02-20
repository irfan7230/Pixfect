"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Users, Target, Rocket, Cpu } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pixfect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking tech company dedicated to creating innovative solutions 
            that shape the future of digital technology. Our team of experts combines creativity 
            with technical excellence to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To revolutionize the tech industry through innovative solutions that empower 
                businesses and individuals to achieve their full potential in the digital age.
              </p>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.li
                    key={mission}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{mission}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-20" />
              <Card className="relative p-8 backdrop-blur-sm border-muted">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  {
    title: "Projects Completed",
    value: "500+",
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Team Members",
    value: "50+",
    icon: <Users className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Awards Won",
    value: "25+",
    icon: <Award className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Success Rate",
    value: "99%",
    icon: <Target className="w-6 h-6 text-orange-500" />,
  },
];

const missions = [
  "Deliver innovative solutions that drive digital transformation",
  "Foster a culture of continuous learning and improvement",
  "Build long-lasting partnerships with our clients",
  "Contribute to a more sustainable and connected future",
];

const features = [
  {
    title: "Expert Team",
    description: "Highly skilled professionals with years of industry experience",
    icon: <Users className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Cutting-edge Technology",
    description: "Using the latest tools and frameworks for optimal results",
    icon: <Cpu className="w-5 h-5 text-green-500" />,
  },
  {
    title: "Proven Track Record",
    description: "Successful projects and satisfied clients worldwide",
    icon: <Award className="w-5 h-5 text-purple-500" />,
  },
];