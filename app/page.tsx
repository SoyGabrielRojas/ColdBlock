"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import confetti from "canvas-confetti";

import {
  Sparkles,
  Code2,
  Palette,
  Layers,
  ArrowRight,
  Mail,
  Eye,
  Brain,
  Zap,
  Users,
  ExternalLink,
  Star,
  CheckCircle,
  AlertCircle,
  Rocket,
  FileText,
  User,
  Menu,
} from "lucide-react";

import { withBasePath } from "@/lib/publicPath";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showCelebration, setShowCelebration] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const maxChars = 1000;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web Full Stack",
      description:
        "Soluciones completas desde el frontend hasta el backend, con código limpio, escalable y mantenible.",
    },
    {
      icon: Palette,
      title: "UX/UI Design y Branding Digital",
      description: "Diseñamos identidades visuales memorables y experiencias de usuario excepcionales.",
    },
    {
      icon: Brain,
      title: "Integraciones con IA y Visión Computacional",
      description: "Implementamos soluciones inteligentes con análisis de imágenes y aprendizaje automático.",
    },
    {
      icon: Zap,
      title: "Optimización y Performance",
      description: "Mejoramos la velocidad y rendimiento de tus aplicaciones para una experiencia fluida.",
    },
  ]

  const portfolio = [
    {
      title: "AbogadosCJF",
      category: "Desarrollo Web & UX",
      description: "Plataforma web integral para estudio jurídico con diseño profesional y formularios seguros.",
      technologies: ["HTML5", "CSS3/SASS", "JavaScript", "PHP", "WordPress"],
      highlights: [
        "Formularios seguros para consulta",
        "Diseño responsive optimizado",
        "Organización de áreas legales",
        "Mejora de captación de clientes",
      ],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tarjeta%20Cristian%20curva%20%281%29-kJqcGD3hnEzcUy1XRermWnwDzHIL34.png",
      logoAlt: "Abogados CJF - Logo institucional con letras CJF entrelazadas en oro y corona de laureles",
      link: "https://abogadoscjf.com.ar",
      colorTheme: "gold", // Añadir esta propiedad
    },
    {
      title: "OptiScan",
      category: "IA & Visión Computacional",
      description: "Sistema inteligente de análisis geométrico facial y recomendación de gafas personalizadas.",
      technologies: ["React", "Python", "Flask", "MediaPipe", "OpenCV"],
      highlights: [
        "Captura facial en tiempo real",
        "Análisis geométrico preciso",
        "Recomendación personalizada",
        "Procesamiento local y privado",
      ],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiscan%20logo-ljdcHpFsxq4a0rZ3pLEw1o9k1MWMrs.jpeg",
      logoAlt: "OptiScan - Logo con icono de escaneo ocular en degradado azul y violeta",
      link: null,
      colorTheme: "blue-violet", // Añadir esta propiedad
    },
  ]

  const philosophy = [
    { icon: Sparkles, label: "Elegancia" },
    { icon: Users, label: "Usabilidad" },
    { icon: Zap, label: "Tecnología" },
    { icon: Layers, label: "Escalabilidad" },
  ]

  const testimonials = [
    {
      quote:
        "ColdBlock transformó nuestra visión en una realidad digital que supera todas nuestras expectativas. El equipo demostró un nivel de profesionalismo excepcional.",
      author: "María González",
      role: "CEO, Luxe Brands",
      rating: 5,
    },
    {
      quote:
        "La atención al detalle y el nivel de artesanía en el código es simplemente excepcional. Cada aspecto del proyecto fue manejado con cuidado y precisión.",
      author: "Carlos Mendoza",
      role: "CTO, Tech Innovations",
      rating: 5,
    },
    {
      quote:
        "Increíble experiencia trabajando con ColdBlock. No solo entregaron un producto hermoso, sino que superaron nuestras expectativas en funcionalidad y rendimiento.",
      author: "Laura Fernández",
      role: "Founder, Digital Horizons",
      rating: 5,
    },
  ]

  const team = [
    {
      name: "Gabriel R.",
      role: "Full Stack Developer",
      expertise: "React, Node.js, AI Integration",
      images: [ // Array de imágenes para Gagabi
        "/images/team/gabi.png",
        "/images/team/gagabi1.jpeg",
        "/images/team/gagabi2.jpeg",
        "/images/team/gagabi3.jpeg",
        "/images/team/gagabi4.jpeg",
      ],
      // Añadir propiedad de color para la tarjeta
      cardColor: "violet",
    },
    {
      name: "German E.",
      role: "UX/UI Designer",
      expertise: "Figma, Branding, User Research",
      images: [ // Array de imágenes para German
        "/images/team/german.png",
        "/images/team/german1.jpeg",
        "/images/team/german2.jpeg",
        "/images/team/german3.jpeg",
        "/images/team/german4.jpeg",
      ],
      // Añadir propiedad de color para la tarjeta
      cardColor: "orange",
    },
    {
      name: "Emiliano P.",
      role: "Backend Specialist",
      expertise: "Python, Flask, Computer Vision",
      images: [ // Array de imágenes para Paul
        "/images/team/emi.png",
        "/images/team/paul1.jpeg",
        "/images/team/paul2.jpeg",
        "/images/team/paul3.jpeg",
        "/images/team/paul4.jpeg",
      ],
      // Añadir propiedad de color para la tarjeta
      cardColor: "green",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Usa tu Form ID real de Formspree aquí
      const response = await fetch("https://formspree.io/f/xvglgyjy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto de ${formData.name}` // Asunto personalizado del email
        }),
      });

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setCharCount(0)

        // Activar celebración
        setShowCelebration(true)
        triggerCelebration()

        // Ocultar celebración después de 5 segundos
        setTimeout(() => {
          setShowCelebration(false)
        }, 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    if (text.length <= maxChars) {
      setFormData({ ...formData, message: text })
      setCharCount(text.length)
    }
  }

  // Componente de imagen simple (sin carrusel)
  const TeamMemberImage = ({
    images,
    name,
    role
  }: {
    images: string[],
    name: string,
    role: string
  }) => {
    const [imageLoading, setImageLoading] = useState(true);

    // Solo usar la primera imagen
    const firstImage = images && images.length > 0 ? images[0] : null;

    return (
      <div className="relative w-full">
        {firstImage ? (
          <div className="relative w-full">
            <div className="relative w-full h-auto">
              <Image
                src={withBasePath(firstImage)}
                alt={`Foto de ${name} - ${role}`}
                width={400}
                height={500}
                className={`w-full h-auto object-cover transition-all duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                onLoad={() => setImageLoading(false)}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Spinner de carga */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-ColdBlock-blue/30 border-t-ColdBlock-blue rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full py-16 text-center bg-ColdBlock-dark">
            <Users className="w-24 h-24 text-ColdBlock-blue/30 mx-auto mb-4" />
            <p className="text-ColdBlock-blue/50 text-sm font-medium">Foto próximamente</p>
          </div>
        )}
      </div>
    );
  };

  const triggerCelebration = () => {
    // Reproducir sonido de confeti
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Error reproduciendo audio:", e));
    }

    // Animación de confeti desde los costados
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiFromSides = () => {
      if (Date.now() > animationEnd) return;

      // Confeti desde la izquierda
      confetti({
        particleCount: 15,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        startVelocity: randomInRange(45, 65),
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8']
      });

      // Confeti desde la derecha
      confetti({
        particleCount: 15,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        startVelocity: randomInRange(45, 65),
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8']
      });

      // Continuar la animación
      requestAnimationFrame(confettiFromSides);
    };

    // Iniciar la animación
    confettiFromSides();

    // Explosión adicional central después de un breve delay
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8']
      });
    }, 500);
  };

  return (
    <main className="min-h-screen bg-ColdBlock-dark">
      {/* Header Sticky */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-ColdBlock-dark/95 backdrop-blur-lg border-b border-ColdBlock-blue/20 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Ahora hace scroll al inicio */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src={withBasePath("/images/design-mode/cblogo.png")}
                  alt="ColdBlock Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold text-ColdBlock-blue">
                ColdBlock
              </span>
            </motion.div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: 'Filosofía', href: '#philosophy' },
                { label: 'Servicios', href: '#services' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Equipo', href: '#team' },
                { label: 'Testimonios', href: '#testimonials' },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-ColdBlock-text-light hover:text-ColdBlock-blue transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ColdBlock-blue group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-ColdBlock-blue hover:bg-ColdBlock-blue-soft text-ColdBlock-dark font-bold"
                  onClick={() => {
                    const contactSection = document.getElementById("contact")
                    contactSection?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contacto
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-ColdBlock-blue"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Large logo as background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]">
            <Image
              src={withBasePath("/images/design-mode/cblogo.png")}
              alt="ColdBlock - Logo del vaso con hielo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ColdBlock-blue/5 via-transparent to-transparent opacity-50" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Main logo (smaller, centered version) */}
          <div className="mb-16 relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96"></div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-ColdBlock-blue mb-6 text-balance"
          >
            Donde el código se convierte en diseño
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-ColdBlock-text-light mb-12 text-pretty max-w-3xl leading-relaxed"
          >
            Creamos experiencias digitales únicas, precisas y visualmente armoniosas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-transparent border-2 border-ColdBlock-blue hover:bg-ColdBlock-blue hover:text-ColdBlock-dark text-ColdBlock-blue transition-all duration-300 text-lg px-8 py-6"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Iniciar proyecto
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ColdBlock-blue to-transparent mx-auto mb-10" />
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue mb-10">Nuestra Filosofía</h2>
            <p className="text-xl md:text-2xl text-ColdBlock-text-light leading-relaxed max-w-4xl mx-auto text-pretty">
              Cada proyecto es una obra visual y funcional. Creemos que la elegancia no está solo en el diseño, sino en
              cómo se siente usar lo que creamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-ColdBlock-dark-elevated/80 to-ColdBlock-dark/80 backdrop-blur-sm border-2 border-ColdBlock-blue/20 rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-ColdBlock-blue/20 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon container with pulse effect */}
                    <div className="relative w-28 h-28 mb-6">
                      <div className="absolute inset-0 bg-ColdBlock-blue/10 rounded-full group-hover:animate-pulse" />
                      <div className="absolute inset-2 bg-gradient-to-br from-ColdBlock-blue/20 to-ColdBlock-blue/5 rounded-full border-2 border-ColdBlock-blue/40 group-hover:border-ColdBlock-blue group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                        <item.icon className="w-14 h-14 text-ColdBlock-blue group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-ColdBlock-blue font-serif text-2xl font-bold mb-3">{item.label}</h3>

                    {/* Decorative underline */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ColdBlock-blue/50 to-transparent group-hover:via-ColdBlock-blue transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ColdBlock-dark via-ColdBlock-dark-elevated to-ColdBlock-dark opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ColdBlock-blue to-transparent mx-auto mb-8"></div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue mb-8">Cómo Trabajamos</h2>
            <p className="text-xl md:text-2xl text-ColdBlock-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Transformamos ideas en realidad digital con un proceso claro y probado
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector line for desktop */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-ColdBlock-blue/20 via-ColdBlock-blue/50 to-ColdBlock-blue/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-ColdBlock-dark-elevated to-ColdBlock-dark border-2 border-ColdBlock-blue/20 hover:border-ColdBlock-blue hover:shadow-2xl hover:shadow-ColdBlock-blue/10 transition-all duration-500 p-8 h-full group relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ColdBlock-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon with animated ring */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ColdBlock-blue/20 to-ColdBlock-blue/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-ColdBlock-blue/30 animate-pulse"></div>
                      <Eye className="w-12 h-12 text-ColdBlock-blue relative z-10" />
                    </div>

                    {/* Step number with better styling */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="px-6 py-2 bg-gradient-to-r from-ColdBlock-blue to-ColdBlock-blue/80 text-ColdBlock-dark rounded-full font-bold text-sm tracking-wider shadow-lg shadow-ColdBlock-blue/20">
                        PASO 1
                      </div>
                    </div>

                    {/* Title with gradient underline */}
                    <div className="mb-4">
                      <h3 className="font-serif text-2xl font-bold text-ColdBlock-blue mb-2 text-center">
                        Investigación y Planificación
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-ColdBlock-blue to-transparent mx-auto"></div>
                    </div>

                    {/* Description with better spacing */}
                    <p className="text-ColdBlock-text-light leading-relaxed text-center text-base">
                      Comenzamos entendiendo tu negocio, objetivos y audiencia. Creamos una hoja de ruta clara adaptada
                      desde el primer día.
                    </p>
                  </div>
                </Card>

                {/* Arrow connector with pulse animation */}
                <div className="hidden lg:flex absolute top-32 -right-4 transform -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-ColdBlock-blue/20">
                  <ArrowRight className="w-5 h-5 text-ColdBlock-blue animate-pulse" />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-ColdBlock-dark-elevated to-ColdBlock-dark border-2 border-ColdBlock-blue/20 hover:border-ColdBlock-blue hover:shadow-2xl hover:shadow-ColdBlock-blue/10 transition-all duration-500 p-8 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-ColdBlock-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ColdBlock-blue/20 to-ColdBlock-blue/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-ColdBlock-blue/30 animate-pulse"></div>
                      <Palette className="w-12 h-12 text-ColdBlock-blue relative z-10" />
                    </div>

                    <div className="flex items-center justify-center mb-6">
                      <div className="px-6 py-2 bg-gradient-to-r from-ColdBlock-blue to-ColdBlock-blue/80 text-ColdBlock-dark rounded-full font-bold text-sm tracking-wider shadow-lg shadow-ColdBlock-blue/20">
                        PASO 2
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-serif text-2xl font-bold text-ColdBlock-blue mb-2 text-center">
                        Soluciones Creativas
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-ColdBlock-blue to-transparent mx-auto"></div>
                    </div>

                    <p className="text-ColdBlock-text-light leading-relaxed text-center text-base">
                      Desde wireframes hasta diseño visual, construimos mockups que reflejan tu marca y combinan
                      creatividad con funcionalidad.
                    </p>
                  </div>
                </Card>

                <div className="hidden lg:flex absolute top-32 -right-4 transform -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-ColdBlock-blue/20">
                  <ArrowRight className="w-5 h-5 text-ColdBlock-blue animate-pulse" />
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-ColdBlock-dark-elevated to-ColdBlock-dark border-2 border-ColdBlock-blue/20 hover:border-ColdBlock-blue hover:shadow-2xl hover:shadow-ColdBlock-blue/10 transition-all duration-500 p-8 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-ColdBlock-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ColdBlock-blue/20 to-ColdBlock-blue/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-ColdBlock-blue/30 animate-pulse"></div>
                      <Code2 className="w-12 h-12 text-ColdBlock-blue relative z-10" />
                    </div>

                    <div className="flex items-center justify-center mb-6">
                      <div className="px-6 py-2 bg-gradient-to-r from-ColdBlock-blue to-ColdBlock-blue/80 text-ColdBlock-dark rounded-full font-bold text-sm tracking-wider shadow-lg shadow-ColdBlock-blue/20">
                        PASO 3
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-serif text-2xl font-bold text-ColdBlock-blue mb-2 text-center">Desarrollo</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-ColdBlock-blue to-transparent mx-auto"></div>
                    </div>

                    <p className="text-ColdBlock-text-light leading-relaxed text-center text-base">
                      Damos vida a tu proyecto con código limpio y escalable. Construcciones rápidas, seguras y
                      preparadas para el futuro.
                    </p>
                  </div>
                </Card>

                <div className="hidden lg:flex absolute top-32 -right-4 transform -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-ColdBlock-blue/20">
                  <ArrowRight className="w-5 h-5 text-ColdBlock-blue animate-pulse" />
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-ColdBlock-dark-elevated to-ColdBlock-dark border-2 border-ColdBlock-blue/20 hover:border-ColdBlock-blue hover:shadow-2xl hover:shadow-ColdBlock-blue/10 transition-all duration-500 p-8 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-ColdBlock-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ColdBlock-blue/20 to-ColdBlock-blue/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-ColdBlock-blue/30 animate-pulse"></div>
                      <Rocket className="w-12 h-12 text-ColdBlock-blue relative z-10" />
                    </div>

                    <div className="flex items-center justify-center mb-6">
                      <div className="px-6 py-2 bg-gradient-to-r from-ColdBlock-blue to-ColdBlock-blue/80 text-ColdBlock-dark rounded-full font-bold text-sm tracking-wider shadow-lg shadow-ColdBlock-blue/20">
                        PASO 4
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-serif text-2xl font-bold text-ColdBlock-blue mb-2 text-center">
                        Lanzamiento y Soporte
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-ColdBlock-blue to-transparent mx-auto"></div>
                    </div>

                    <p className="text-ColdBlock-text-light leading-relaxed text-center text-base">
                      Una vez en vivo, nos aseguramos de que todo funcione perfectamente. Optimización del rendimiento y
                      soporte continuo.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue mb-8">Nuestros Servicios</h2>
            <p className="text-xl md:text-2xl text-ColdBlock-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Soluciones integrales que fusionan diseño excepcional con código impecable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-ColdBlock-dark border-2 border-ColdBlock-blue/20 hover:border-ColdBlock-blue transition-all duration-300 p-10 h-full group hover:shadow-lg hover:shadow-ColdBlock-blue/10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-ColdBlock-blue/10 mb-8 group-hover:bg-ColdBlock-blue/20 transition-colors">
                    <service.icon className="w-8 h-8 text-ColdBlock-blue" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ColdBlock-blue-soft mb-5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-ColdBlock-text-light leading-relaxed text-base">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 bg-ColdBlock-dark-elevated">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue mb-8">Proyectos Destacados</h2>
            <p className="text-xl md:text-2xl text-ColdBlock-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Soluciones que combinan innovación técnica con excelencia visual
            </p>
          </motion.div>

          <div className="space-y-16">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className={`
            ${project.colorTheme === 'gold'
                    ? 'bg-gradient-to-br from-amber-900/20 to-yellow-900/10 border-2 border-amber-600/30 hover:border-amber-500'
                    : 'bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/40 border-2 border-blue-700/30 hover:border-blue-500'
                  } 
            transition-all duration-500 overflow-hidden group
          `}>
                  <div className="p-8 md:p-12 lg:p-16">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center mb-12">
                      <div className={`
                  inline-block px-4 py-2 rounded-full mb-8
                  ${project.colorTheme === 'gold'
                          ? 'bg-amber-600/20 border border-amber-500/30'
                          : 'bg-gradient-to-r from-blue-800/30 to-purple-800/30 border border-blue-600/30'
                        }
                `}>
                        <p className={`
                    text-sm font-semibold tracking-wide
                    ${project.colorTheme === 'gold' ? 'text-amber-300' : 'text-blue-200'}
                  `}>
                          {project.category}
                        </p>
                      </div>

                      {/* Logo */}
                      <div className="relative w-full max-w-3xl h-96 mb-8 flex items-center justify-center">
                        <Image
                          src={project.logo || withBasePath("/placeholder.svg")}
                          alt={project.logoAlt}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h3 className={`
                  font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center
                  ${project.colorTheme === 'gold' ? 'text-amber-300' : 'text-blue-100'}
                `}>
                        {project.title}
                      </h3>
                      <p className="text-ColdBlock-text-light text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-center">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies and Features Grid */}
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                      {/* Technologies */}
                      <div>
                        <h4 className={`
                    text-xl font-bold mb-6 flex items-center
                    ${project.colorTheme === 'gold' ? 'text-amber-300' : 'text-blue-300'}
                  `}>
                          <Code2 className="w-6 h-6 mr-3" />
                          Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`
                          px-5 py-3 rounded-lg font-medium transition-colors text-base
                          ${project.colorTheme === 'gold'
                                  ? 'bg-amber-600/20 border border-amber-500/30 text-amber-200 hover:bg-amber-600/30'
                                  : 'bg-blue-800/20 border border-blue-700/30 text-blue-200 hover:bg-blue-800/30'
                                }
                        `}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className={`
                    text-xl font-bold mb-6 flex items-center
                    ${project.colorTheme === 'gold' ? 'text-amber-300' : 'text-blue-300'}
                  `}>
                          <Sparkles className="w-6 h-6 mr-3" />
                          Características Clave
                        </h4>
                        <ul className="space-y-4">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="text-ColdBlock-text-light flex items-start text-base">
                              <span className={`
                          mr-3 mt-1 flex-shrink-0 text-xl
                          ${project.colorTheme === 'gold' ? 'text-amber-400' : 'text-blue-400'}
                        `}>
                                ▸
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            size="lg"
                            className={`
                        transition-all duration-300 bg-transparent text-lg px-8 py-6 group
                        ${project.colorTheme === 'gold'
                                ? 'border-2 border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-ColdBlock-dark'
                                : 'border-2 border-blue-600 text-blue-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-white'
                              }
                      `}
                          >
                            Visitar sitio web
                            <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="outline"
                          size="lg"
                          className={`
                      cursor-not-allowed bg-transparent text-lg px-8 py-6
                      ${project.colorTheme === 'gold'
                              ? 'border-2 border-amber-500/30 text-amber-300/50'
                              : 'border-2 border-blue-600/30 text-blue-300/50'
                            }
                    `}
                          disabled
                        >
                          Proyecto privado
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue mb-8">Nuestro Equipo</h2>
            <p className="text-xl md:text-2xl text-ColdBlock-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Profesionales apasionados por crear soluciones elegantes y funcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className={`
            bg-ColdBlock-dark border-4 transition-all duration-300 
            overflow-hidden group flex flex-col h-full
            ${member.cardColor === 'violet'
                    ? 'border-violet-500/40 hover:border-violet-400'
                    : member.cardColor === 'orange'
                      ? 'border-orange-500/40 hover:border-orange-400'
                      : 'border-emerald-500/40 hover:border-emerald-400'
                  }
          `}>
                  {/* Imagen simple para todos los miembros - Contenedor sin fondo */}
                  <div className="flex-grow-0 flex-shrink-0 w-full">
                    {member.images && member.images.length > 0 ? (
                      <TeamMemberImage
                        images={member.images}
                        name={member.name}
                        role={member.role}
                      />
                    ) : (
                      <div className="w-full py-16 text-center bg-ColdBlock-dark">
                        <Users className="w-24 h-24 text-ColdBlock-blue/30 mx-auto mb-4" />
                        <p className="text-ColdBlock-blue/50 text-sm font-medium">Foto próximamente</p>
                      </div>
                    )}
                  </div>

                  {/* Información del miembro - Ocupa el espacio restante */}
                  <div className="flex-grow p-6 flex flex-col bg-ColdBlock-dark">
                    <div className="mb-4">
                      <h3 className={`
                  font-serif text-2xl font-bold mb-2
                  ${member.cardColor === 'violet'
                          ? 'text-violet-400'
                          : member.cardColor === 'orange'
                            ? 'text-orange-400'
                            : 'text-emerald-400'
                        }
                `}>
                        {member.name}
                      </h3>
                      <p className={`
                  text-lg font-medium
                  ${member.cardColor === 'violet'
                          ? 'text-violet-300'
                          : member.cardColor === 'orange'
                            ? 'text-orange-300'
                            : 'text-emerald-300'
                        }
                `}>
                        {member.role}
                      </p>
                    </div>

                    <div className="mb-4 flex-grow">
                      <p className="text-ColdBlock-text-light/70 text-sm leading-relaxed">{member.expertise}</p>
                    </div>

                    {/* Espacio flexible para mantener la consistencia */}
                    <div className="flex-grow"></div>

                    {/* Línea decorativa opcional */}
                    <div className="mt-4 pt-4 border-t border-ColdBlock-blue/10">
                      <div className="flex items-center justify-center">
                        <div className={`
                    w-8 h-0.5 bg-gradient-to-r from-transparent to-transparent
                    ${member.cardColor === 'violet'
                            ? 'via-violet-500/50'
                            : member.cardColor === 'orange'
                              ? 'via-orange-500/50'
                              : 'via-emerald-500/50'
                          }
                  `}></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4 bg-ColdBlock-dark-elevated">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-ColdBlock-blue text-center mb-20"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="bg-gradient-to-br from-ColdBlock-dark to-ColdBlock-dark-elevated border-2 border-ColdBlock-blue/30 hover:border-ColdBlock-blue p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-ColdBlock-blue/20 group backdrop-blur-sm">
                  {/* Header with avatar placeholder and name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-ColdBlock-blue to-ColdBlock-blue-soft flex items-center justify-center flex-shrink-0 text-ColdBlock-dark font-bold text-xl shadow-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-ColdBlock-blue-soft text-lg mb-1">{testimonial.author}</h4>
                      <p className="text-ColdBlock-text-light/70 text-sm truncate">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-ColdBlock-blue text-ColdBlock-blue" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-ColdBlock-text-light leading-relaxed text-base">{testimonial.quote}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Hablar con ColdBlock */}
      <section id="contact" className="py-20 px-4 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ColdBlock-dark via-ColdBlock-dark-elevated/50 to-ColdBlock-dark pointer-events-none" />

        {/* Background effects - optimizados para móvil */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-ColdBlock-blue/10 rounded-full blur-[64px] md:blur-[128px] animate-pulse pointer-events-none" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-ColdBlock-blue/5 rounded-full blur-[64px] md:blur-[128px] animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-ColdBlock-blue to-transparent mx-auto mb-6 md:mb-10" />
            <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-ColdBlock-blue mb-6 md:mb-8 text-balance px-2">
              Llevemos la belleza al código
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-ColdBlock-text-light/80 leading-relaxed max-w-3xl mx-auto px-4">
              Comencemos a crear algo extraordinario juntos. Completa el formulario y te responderemos en menos de 24 horas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Outer glow effect - reducido para móvil */}
            <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-ColdBlock-blue/20 via-ColdBlock-blue/10 to-ColdBlock-blue/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <Card className="relative bg-gradient-to-br from-ColdBlock-dark-elevated/95 via-ColdBlock-dark/95 to-ColdBlock-dark-elevated/95 backdrop-blur-xl border-2 border-ColdBlock-blue/30 hover:border-ColdBlock-blue/60 transition-all duration-700 p-6 md:p-12 lg:p-20 shadow-xl md:shadow-2xl shadow-ColdBlock-blue/10 rounded-2xl md:rounded-3xl overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                {/* Name Field */}
                <div className="group/field">
                  <label htmlFor="name" className="flex items-center gap-3 text-ColdBlock-blue mb-3 md:mb-4 font-bold text-lg md:text-xl">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-ColdBlock-blue/10 flex items-center justify-center group-hover/field:bg-ColdBlock-blue/20 transition-colors flex-shrink-0">
                      <User className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="truncate">Tu nombre completo</span>
                  </label>
                  <p className="text-ColdBlock-text-light/60 text-xs md:text-sm mb-3 md:mb-5 ml-0 md:ml-13 leading-relaxed">
                    ¿Cómo debemos llamarte?
                  </p>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: María González"
                    className="w-full bg-ColdBlock-dark/80 border-2 border-ColdBlock-blue/20 focus:border-ColdBlock-blue focus:bg-ColdBlock-dark-elevated/80 text-ColdBlock-text-light px-4 md:px-7 py-3 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 outline-none text-base md:text-lg placeholder:text-ColdBlock-text-light/30 hover:border-ColdBlock-blue/40 shadow-inner"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="group/field">
                  <label htmlFor="email" className="flex items-center gap-3 text-ColdBlock-blue mb-3 md:mb-4 font-bold text-lg md:text-xl">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-ColdBlock-blue/10 flex items-center justify-center group-hover/field:bg-ColdBlock-blue/20 transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="truncate">Email de contacto</span>
                  </label>
                  <p className="text-ColdBlock-text-light/60 text-xs md:text-sm mb-3 md:mb-5 ml-0 md:ml-13 leading-relaxed">
                    Te responderemos a esta dirección de correo
                  </p>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej: tu@email.com"
                    className="w-full bg-ColdBlock-dark/80 border-2 border-ColdBlock-blue/20 focus:border-ColdBlock-blue focus:bg-ColdBlock-dark-elevated/80 text-ColdBlock-text-light px-4 md:px-7 py-3 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 outline-none text-base md:text-lg placeholder:text-ColdBlock-text-light/30 hover:border-ColdBlock-blue/40 shadow-inner"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="group/field">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-2 md:gap-0">
                    <label htmlFor="message" className="flex items-center gap-3 text-ColdBlock-blue font-bold text-lg md:text-xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-ColdBlock-blue/10 flex items-center justify-center group-hover/field:bg-ColdBlock-blue/20 transition-colors flex-shrink-0">
                        <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="truncate">Cuéntanos sobre tu proyecto</span>
                    </label>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-16 md:w-20 h-1.5 bg-ColdBlock-blue/20 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${charCount > maxChars * 0.9
                              ? "bg-ColdBlock-blue"
                              : charCount > maxChars * 0.7
                                ? "bg-ColdBlock-blue/70"
                                : "bg-ColdBlock-blue/40"
                              }`}
                            style={{ width: `${(charCount / maxChars) * 100}%` }}
                          />
                        </div>
                        <span
                          className={`text-xs md:text-sm font-bold transition-colors ${charCount > maxChars * 0.9
                            ? "text-ColdBlock-blue"
                            : charCount > maxChars * 0.7
                              ? "text-ColdBlock-text-light/70"
                              : "text-ColdBlock-text-light/50"
                            }`}
                        >
                          {charCount}/{maxChars}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-ColdBlock-text-light/60 text-xs md:text-sm mb-3 md:mb-5 ml-0 md:ml-13 leading-relaxed">
                    Describe tu idea, objetivos, presupuesto estimado y plazos esperados.
                  </p>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    rows={8}
                    placeholder="Ej: Me gustaría crear una plataforma web moderna para mi negocio de e-commerce..."
                    className="w-full bg-ColdBlock-dark/80 border-2 border-ColdBlock-blue/20 focus:border-ColdBlock-blue focus:bg-ColdBlock-dark-elevated/80 text-ColdBlock-text-light px-4 md:px-7 py-3 md:py-6 rounded-xl md:rounded-2xl transition-all duration-300 outline-none resize-none text-sm md:text-base leading-relaxed placeholder:text-ColdBlock-text-light/30 hover:border-ColdBlock-blue/40 shadow-inner"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex items-start gap-3 md:gap-5 p-4 md:p-6 bg-gradient-to-br from-green-500/15 to-green-600/10 border-2 border-green-500/50 rounded-xl md:rounded-2xl shadow-lg shadow-green-500/20"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-green-400 font-bold text-base md:text-xl mb-1 md:mb-2">¡Mensaje enviado con éxito!</p>
                      <p className="text-green-400/80 text-xs md:text-sm leading-relaxed">
                        Hemos recibido tu solicitud. Te responderemos en menos de 24 horas.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex items-start gap-3 md:gap-5 p-4 md:p-6 bg-gradient-to-br from-red-500/15 to-red-600/10 border-2 border-red-500/50 rounded-xl md:rounded-2xl shadow-lg shadow-red-500/20"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 md:w-7 md:h-7 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-red-400 font-bold text-base md:text-xl mb-1 md:mb-2">Error al enviar el mensaje</p>
                      <p className="text-red-400/80 text-xs md:text-sm leading-relaxed">
                        Lo sentimos, hubo un problema. Intenta nuevamente o contáctanos a gabrielrojasokk@gmail.com
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-ColdBlock-blue via-ColdBlock-blue-soft to-ColdBlock-blue hover:from-ColdBlock-blue-soft hover:via-ColdBlock-blue hover:to-ColdBlock-blue-soft text-ColdBlock-dark font-black transition-all duration-500 text-base md:text-xl py-6 md:py-8 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl md:shadow-2xl shadow-ColdBlock-blue/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] rounded-xl md:rounded-2xl relative overflow-hidden group"
                  disabled={isSubmitting || charCount === 0}
                >
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                  {/* Pulse ring effect */}
                  <span className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                  <span className="relative flex items-center justify-center gap-3 md:gap-4">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 md:w-7 md:h-7 border-3 md:border-4 border-ColdBlock-dark/30 border-t-ColdBlock-dark rounded-full animate-spin" />
                        <span className="text-sm md:text-base">Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 md:w-7 md:h-7" />
                        <span className="text-sm md:text-base">Hablar con ColdBlock</span>
                        <ArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Celebración */}
      {showCelebration && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Contenedor del hamster */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2
              }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <Image
                src={withBasePath("/images/hamster.jpeg")}
                alt="Hamster celebrando"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Mensaje de éxito */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6"
            >
              <motion.h3
                className="font-serif text-3xl md:text-4xl font-bold text-ColdBlock-blue mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                ¡Mensaje Enviado!
              </motion.h3>
              <p className="text-ColdBlock-text-light text-lg md:text-xl">
                Nos pondremos en contacto contigo pronto
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Audio oculto */}
      <audio
        ref={audioRef}
        preload="auto"
        src={withBasePath("/audio/confeti.mp3")}
      />

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-ColdBlock-blue/20 bg-ColdBlock-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-ColdBlock-text-light/70 text-lg">© 2025 ColdBlock. Belleza y tecnología en armonía.</p>
        </div>
      </footer>
    </main>
  )
}