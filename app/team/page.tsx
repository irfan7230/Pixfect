"use client"

import { TeamSection } from '@/components/team-section';
import { motion } from 'framer-motion';
import { Footer } from '@/components/footer';

export default function TeamPage() {
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
                We are Pixfect
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
      <Footer />
    </main>
  );
}