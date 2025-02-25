"use client"

import { TeamSection } from '@/components/team-section';
import { motion } from 'framer-motion';
import { Footer } from '@/components/footer';
import { Coins as GoldCoin, Sparkles, Target, Users } from 'lucide-react';

export default function TeamPage() {
  const features = [
    {
      icon: <GoldCoin className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Experience excellence in every detail of our service."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Focus",
      description: "Targeted solutions that meet your specific needs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Backed by professionals with years of experience."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges."
    }
  ];

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
                Meet minds behind pixfect
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nemo suscipit alias tempora repudiandae unde maiores labore, tenetur ad magni, porro nihil reiciendis, minima assumenda est accusantium excepturi odit eligendi!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent gold-gradient">
                Why Choose Us
              </span>
            </h2>
            <p className="text-gray-400">Discover what makes us stand out from the crowd</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent gold-gradient">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of satisfied customers who have transformed their business with our solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-full hover:shadow-lg transform transition duration-300"
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}