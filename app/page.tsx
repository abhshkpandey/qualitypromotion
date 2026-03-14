"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Award,
  Shield,
  Users,
  BookOpen,
  FileCheck,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "FOSTAC Training & Certification",
      description:
        "Comprehensive food safety training programs for all levels - Basic, Advanced, and Awareness courses.",
      icon: <Award className="size-5" />,
    },
    {
      title: "FSSAI Licensing & Registration",
      description:
        "Complete assistance with FSSAI licensing, registration, and regulatory compliance for food businesses.",
      icon: <FileCheck className="size-5" />,
    },
    {
      title: "Quality Management Systems",
      description: "ISO 9001 and ISO 22000 certification support to implement robust quality management systems.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Expert Training Team",
      description: "FSSAI authorized trainers and assessors providing industry-leading food safety education.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Food Safety Compliance",
      description:
        "Third-party audits, hygiene rating, and food labeling compliance services for complete regulatory adherence.",
      icon: <BookOpen className="size-5" />,
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across manufacturing, catering, retail, and food service sectors.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              FQP
            </div>
            <span className="hidden sm:block">Foundation for Quality Promotion</span>
            <span className="sm:hidden">FQP</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Training Programs
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="tel:+918586022173"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Call Us
            </Link>
            <Button className="rounded-full">
              Get Training
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#programs" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Training Programs
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link
                  href="tel:+918586022173"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call Us
                </Link>
                <Button className="rounded-full">
                  Get Training
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Quality | Safety | Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Food Safety is a Shared Responsibility
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Leading organization in promoting quality awareness and skill development. We empower individuals and
                organizations with FOSTAC training, FSSAI licensing, and comprehensive food safety solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Start FOSTAC Training
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
                  Get FSSAI License
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>FSSAI Authorized</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Expert Trainers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Affordable Training</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/food-safety-training.png"
                  width={1280}
                  height={720}
                  alt="Food safety training session"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Trusted by food businesses across industries</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {["Hotels", "Restaurants", "Manufacturing", "Catering", "Retail"].map((industry, i) => (
                  <div
                    key={i}
                    className="text-muted-foreground font-medium text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive Food Safety Solutions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                From FOSTAC training to FSSAI licensing, we provide end-to-end food safety and quality management
                services for your business.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FOSTAC Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Training Process</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Get certified in food safety with our streamlined FOSTAC training process designed for maximum learning
                and compliance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Register on FOSTAC Portal",
                  description:
                    "Create your account and enroll for training with FSSAI authorized trainers and assessors.",
                },
                {
                  step: "02",
                  title: "Attend Training Session",
                  description:
                    "Participate in comprehensive food safety training covering all essential topics and case studies.",
                },
                {
                  step: "03",
                  title: "Get Certified",
                  description: "Pass the assessment with 50% marks and receive your official FOSTAC certificate.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by Food Industry Professionals</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                See what our clients say about their experience with our food safety training and certification
                services.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The FOSTAC training provided by FQP was comprehensive and practical. Our entire team is now certified and we've significantly improved our food safety standards.",
                  author: "Rajesh Kumar",
                  role: "Restaurant Manager, Delhi",
                  rating: 5,
                },
                {
                  quote:
                    "Getting our FSSAI license was seamless with FQP's guidance. They handled all the paperwork and made the process incredibly smooth for our manufacturing unit.",
                  author: "Priya Sharma",
                  role: "Quality Manager, Food Processing Unit",
                  rating: 5,
                },
                {
                  quote:
                    "The trainers are knowledgeable and the course content is up-to-date with current regulations. Highly recommend for anyone in the food industry.",
                  author: "Mohammed Ali",
                  role: "Catering Business Owner",
                  rating: 5,
                },
                {
                  quote:
                    "FQP's ISO 22000 certification support helped us establish a robust food safety management system. Our audit results have never been better.",
                  author: "Sunita Patel",
                  role: "Operations Head, Hotel Chain",
                  rating: 5,
                },
                {
                  quote:
                    "The awareness training for our street food vendors was eye-opening. It's made a real difference in how we handle food safety in our community.",
                  author: "Amit Singh",
                  role: "Street Vendor Association Leader",
                  rating: 5,
                },
                {
                  quote:
                    "Professional service and affordable pricing. The team at FQP understands the challenges faced by small food businesses and provides practical solutions.",
                  author: "Kavita Reddy",
                  role: "Bakery Owner, Bangalore",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section id="programs" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Training Programs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FOSTAC Training Courses</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Choose from our comprehensive range of FOSTAC training programs designed for different industry needs
                and experience levels.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Basic Level-1",
                    duration: "4-6 hours",
                    description: "Perfect for food handlers and supervisors in petty food businesses.",
                    features: [
                      "Street Food Vending",
                      "Basic Catering",
                      "Small Manufacturing",
                      "Storage & Transport",
                      "Retail & Distribution",
                    ],
                    cta: "Enroll Now",
                  },
                  {
                    name: "Advanced Level-2",
                    duration: "8-12 hours",
                    description: "Ideal for licensed food business operators and managers.",
                    features: [
                      "Restaurant & Hotel Management",
                      "Large Scale Manufacturing",
                      "Specialized Food Processing",
                      "Quality Control Systems",
                      "Regulatory Compliance",
                    ],
                    cta: "Enroll Now",
                    popular: true,
                  },
                  {
                    name: "Awareness Programs",
                    duration: "2-4 hours",
                    description: "For students and individuals entering the food business.",
                    features: [
                      "COVID-19 Safety Protocols",
                      "Basic Food Hygiene",
                      "Startup Food Business",
                      "Personal Hygiene",
                      "Food Safety Fundamentals",
                    ],
                    cta: "Get Started",
                  },
                ].map((program, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${program.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {program.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{program.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-2xl font-bold">{program.duration}</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{program.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {program.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-full ${program.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={program.popular ? "default" : "outline"}
                        >
                          {program.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about FOSTAC training and our services.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is FOSTAC and why is it mandatory?",
                    answer:
                      "FOSTAC (Food Safety Training and Certification) is a mandatory training program by FSSAI for food business operators. All food businesses with central or state licenses must have at least 1 trained and certified Food Safety Supervisor for every 25 food handlers.",
                  },
                  {
                    question: "How long does FOSTAC certification take?",
                    answer:
                      "The duration varies by course type: Basic Level-1 takes 4-6 hours, Advanced Level-2 takes 8-12 hours, and Awareness programs take 2-4 hours. Certification is issued immediately upon passing the assessment with 50% marks.",
                  },
                  {
                    question: "Do you provide FSSAI licensing services?",
                    answer:
                      "Yes, we provide complete FSSAI licensing and registration services including application preparation, documentation, and follow-up. We also assist with renewals and modifications to existing licenses.",
                  },
                  {
                    question: "What industries do you serve?",
                    answer:
                      "We serve all sectors of the food industry including restaurants, hotels, catering services, food manufacturing units, street vendors, retail stores, warehouses, and specialized food processing facilities.",
                  },
                  {
                    question: "Are your trainers FSSAI authorized?",
                    answer:
                      "Yes, all our trainers and assessors are FSSAI authorized. We maintain the highest standards of training quality and ensure compliance with all FSSAI guidelines and requirements.",
                  },
                  {
                    question: "Do you offer group training discounts?",
                    answer:
                      "Yes, we offer competitive pricing for group training sessions and corporate programs. Contact us for customized training solutions and bulk pricing for your organization.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Ensure Food Safety Compliance?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of food businesses who trust us for their FOSTAC training, FSSAI licensing, and quality
                management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Start Training Today
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="tel:+918586022173">
                    <Phone className="mr-2 size-4" />
                    Call +91-8586022173
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center text-sm text-primary-foreground/80 mt-4">
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <Link href="mailto:admin@qualitypromotion.org" className="hover:text-white transition-colors">
                    admin@qualitypromotion.org
                  </Link>
                </div>
                <span className="hidden sm:block">•</span>
                <span>FSSAI Authorized Training Partner</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  FQP
                </div>
                <span>Foundation for Quality Promotion</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading organization in food safety training, FOSTAC certification, and quality promotion. Making
                quality training affordable and accessible.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    FOSTAC Training
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    FSSAI Licensing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    ISO Certification
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Food Safety Audit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Training Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Basic Level-1
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Advanced Level-2
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Awareness Programs
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Corporate Training
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="tel:+918586022173"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91-8586022173
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:admin@qualitypromotion.org"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    admin@qualitypromotion.org
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground">New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Foundation for Quality Promotion. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                FSSAI Guidelines
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
