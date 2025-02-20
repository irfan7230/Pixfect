"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import {
  Rocket,
  Shield,
  Zap,
  Globe,
  Star,
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react';
import Image from 'next/image';

export default function ProductsPage() {
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
                Our Products
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our suite of innovative products designed to transform your business 
              and drive growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className="premium-card-content">
                  <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Starting from</span>
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-primary fill-primary' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="flex-1 group">
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect solution for your business needs
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="p-4 text-left">Features</th>
                  {products.map((product, index) => (
                    <th key={index} className="p-4 text-center">{product.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-primary/10">
                    <td className="p-4">{feature.name}</td>
                    {products.map((product, productIndex) => (
                      <td key={productIndex} className="p-4 text-center">
                        {feature.availability[productIndex] ? (
                          <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our products have helped businesses achieve their goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className="premium-card-content">
                  <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-primary mb-2">{study.company}</p>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Results</p>
                      <p className="font-bold text-xl">{study.results}</p>
                    </div>
                    <Button variant="outline" className="ml-auto group">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
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

const products = [
  {
    name: "PixfectAI",
    description: "AI-powered analytics platform for business intelligence",
    price: "$99/mo",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    rating: 5,
    reviews: 128,
  },
  {
    name: "PixfectCloud",
    description: "Secure cloud infrastructure management solution",
    price: "$199/mo",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1000",
    rating: 4,
    reviews: 89,
  },
  {
    name: "PixfectSecurity",
    description: "Enterprise-grade cybersecurity platform",
    price: "$299/mo",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
    rating: 4,
    reviews: 156,
  },
];

const features = [
  {
    name: "Real-time Analytics",
    availability: [true, false, false],
  },
  {
    name: "Cloud Storage",
    availability: [true, true, true],
  },
  {
    name: "AI Integration",
    availability: [true, false, false],
  },
  {
    name: "24/7 Support",
    availability: [true, true, true],
  },
  {
    name: "Custom Reports",
    availability: [true, true, false],
  },
  {
    name: "API Access",
    availability: [true, true, true],
  },
  {
    name: "Advanced Security",
    availability: [false, true, true],
  },
  {
    name: "Multi-user Access",
    availability: [true, true, true],
  },
];

const caseStudies = [
  {
    title: "500% Growth in Analytics Efficiency",
    company: "TechCorp Industries",
    description: "How TechCorp leveraged PixfectAI to transform their data analysis process and achieve unprecedented growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    results: "+500% Efficiency",
  },
  {
    title: "Cloud Migration Success",
    company: "Global Solutions Ltd",
    description: "A seamless transition to cloud infrastructure that resulted in significant cost savings and improved performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    results: "45% Cost Reduction",
  },
  {
    title: "Enhanced Security Protocol",
    company: "FinTech Innovations",
    description: "Implementing robust security measures to protect sensitive financial data and ensure compliance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    results: "0 Security Breaches",
  },
  {
    title: "AI-Driven Decision Making",
    company: "Retail Giants Co",
    description: "Leveraging artificial intelligence to optimize inventory management and boost sales performance.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000",
    results: "200% ROI Increase",
  },
];