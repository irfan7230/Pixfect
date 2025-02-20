"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Globe
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                Get in Touch
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-4">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{hours.days}</span>
                      <span className="font-medium">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Global Offices</h2>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">{office.location}</h3>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group"
              >
                <div className="premium-card-content">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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

const contactInfo = [
  {
    title: "Email",
    content: "contact@pixfect.com",
    icon: <Mail className="w-6 h-6 text-primary" />,
  },
  {
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: <Phone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Live Chat",
    content: "Available 24/7 for instant support",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
  {
    title: "Support Hours",
    content: "Monday - Friday, 9AM - 6PM EST",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];

const businessHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { days: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
  { days: "Sunday", hours: "Closed" },
];

const offices = [
  {
    location: "New York (HQ)",
    address: "123 Tech Plaza, Manhattan, NY 10001",
  },
  {
    location: "London",
    address: "456 Innovation Square, London EC1A 1BB",
  },
  {
    location: "Singapore",
    address: "789 Digital Tower, Singapore 018956",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of technology solutions including software development, cloud services, AI implementation, and cybersecurity.",
  },
  {
    question: "How can I get support?",
    answer: "You can reach our support team via email, phone, or live chat. We also offer 24/7 emergency support for critical issues.",
  },
  {
    question: "What are your pricing plans?",
    answer: "Our pricing varies based on project requirements. Contact us for a custom quote tailored to your needs.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in creating custom solutions designed specifically for your business needs and objectives.",
  },
];