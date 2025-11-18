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
} from "lucide-react";

import { withBasePath } from "@/lib/publicPath";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showCelebration, setShowCelebration] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const maxChars = 1000;

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
      icon: Eye,
      title: "Consultoría Estética para Interfaces",
      description: "Optimizamos la belleza visual de tus productos digitales sin comprometer la funcionalidad.",
    },
    {
      icon: Sparkles,
      title: "Auditorías de Belleza Funcional",
      description: "Evaluamos y mejoramos el equilibrio perfecto entre estética, usabilidad y rendimiento.",
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
      logoAlt: "OptiScan - Logo con icono de escaneo ocular en degradado azul y púrpura",
      link: null,
    },
  ]

  const philosophy = [
    { icon: Sparkles, label: "Belleza" },
    { icon: Users, label: "Usabilidad" },
    { icon: Zap, label: "Tecnología" },
    { icon: Layers, label: "Escalabilidad" },
  ]

  const testimonials = [
    {
      quote:
        "BeauDev transformó nuestra visión en una realidad digital que supera todas nuestras expectativas. El equipo demostró un nivel de profesionalismo excepcional.",
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
        "Increíble experiencia trabajando con BeauDev. No solo entregaron un producto hermoso, sino que superaron nuestras expectativas en funcionalidad y rendimiento.",
      author: "Laura Fernández",
      role: "Founder, Digital Horizons",
      rating: 5,
    },
  ]

  const team = [
    {
      name: "Gagabi",
      role: "Full Stack Developer",
      expertise: "React, Node.js, AI Integration",
      images: [ // Array de imágenes para Gagabi
        "/images/team/gagabi1.jpeg",
        "/images/team/gagabi2.jpeg",
        "/images/team/gagabi3.jpeg",
        "/images/team/gagabi4.jpeg",
      ],
    },
    {
      name: "German Estorbar",
      role: "UX/UI Designer",
      expertise: "Figma, Branding, User Research",
      images: [ // Array de imágenes para German
        "/images/team/german1.jpeg",
        "/images/team/german2.jpeg",
        "/images/team/german3.jpeg",
        "/images/team/german4.jpeg",
      ],
    },
    {
      name: "Paul",
      role: "Backend Specialist",
      expertise: "Python, Flask, Computer Vision",
      images: [ // Array de imágenes para Paul
        "/images/team/paul1.jpeg",
        "/images/team/paul2.jpeg",
        "/images/team/paul3.jpeg",
        "/images/team/paul4.jpeg",
      ],
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

  // Componente de carrusel simplificado sin flechas
  const TeamMemberCarousel = ({
    images,
    name,
    role
  }: {
    images: string[],
    name: string,
    role: string
  }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
      if (images.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3500); // Cambia cada 3.5 segundos

      return () => clearInterval(interval);
    }, [images.length]);

    // Solo mostrar controles si hay más de una imagen
    const showControls = images.length > 1;

    return (
      <div className="relative w-full h-full bg-beaudev-dark">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="w-full h-full flex items-center justify-center p-4">
              <Image
                src={withBasePath(image)}
                alt={`Foto de ${name} - ${role} ${index + 1}`}
                width={320}
                height={400}
                className={`max-w-[90%] max-h-[90%] w-auto h-auto object-scale-down transition-all duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                onLoad={() => setImageLoading(false)}
                priority={index === 0}
                style={{
                  maxWidth: 'min(100%, 320px)',
                  maxHeight: 'min(100%, 400px)'
                }}
              />
            </div>

            {/* Spinner de carga solo para la imagen actual */}
            {imageLoading && index === currentImageIndex && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-beaudev-gold/30 border-t-beaudev-gold rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ))}

        {/* Solo indicadores de puntos - sin flechas */}
        {showControls && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-beaudev-gold scale-125'
                  : 'bg-beaudev-gold/40'
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                  setImageLoading(true);
                }}
                aria-label={`Ver foto ${index + 1} de ${images.length}`}
              />
            ))}
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
        colors: ['#D4AF37', '#FFD700', '#FFF8DC', '#F0E68C', '#B8860B']
      });

      // Confeti desde la derecha
      confetti({
        particleCount: 15,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        startVelocity: randomInRange(45, 65),
        colors: ['#D4AF37', '#FFD700', '#FFF8DC', '#F0E68C', '#B8860B']
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
        colors: ['#D4AF37', '#FFD700', '#FFF8DC', '#F0E68C', '#B8860B']
      });
    }, 500);
  };

  return (
    <main className="min-h-screen bg-beaudev-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Large logo as background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]">
            <Image
              src={withBasePath("/images/design-mode/logo.png")}
              alt="BeauDev - Logo con rostro minimalista en líneas doradas sobre fondo negro"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-beaudev-gold/5 via-transparent to-transparent opacity-50" />

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
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-beaudev-gold-soft mb-6 text-balance"
          >
            Belleza y tecnología en cada línea de código
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-beaudev-text-light mb-12 text-pretty max-w-3xl leading-relaxed"
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
              className="bg-transparent border-2 border-beaudev-gold hover:bg-beaudev-gold hover:text-beaudev-dark text-beaudev-gold transition-all duration-300 text-lg px-8 py-6"
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

      {/* About Section */}
      <section className="py-32 px-4 bg-beaudev-dark-elevated">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold mb-8">Nuestra Filosofía</h2>
            <p className="text-xl md:text-2xl text-beaudev-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Cada proyecto es una obra visual y funcional. Creemos que la belleza no está solo en el diseño, sino en
              cómo se siente usar lo que creamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full border-2 border-beaudev-gold/30 flex items-center justify-center mb-6 group-hover:border-beaudev-gold group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-12 h-12 text-beaudev-gold" />
                </div>
                <p className="text-beaudev-gold-soft font-serif text-xl font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold mb-8">Nuestros Servicios</h2>
            <p className="text-xl md:text-2xl text-beaudev-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
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
                <Card className="bg-beaudev-dark border-2 border-beaudev-gold/20 hover:border-beaudev-gold transition-all duration-300 p-10 h-full group hover:shadow-lg hover:shadow-beaudev-gold/10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-beaudev-gold/10 mb-8 group-hover:bg-beaudev-gold/20 transition-colors">
                    <service.icon className="w-8 h-8 text-beaudev-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-beaudev-gold-soft mb-5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-beaudev-text-light leading-relaxed text-base">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 bg-beaudev-dark-elevated">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold mb-8">Proyectos Destacados</h2>
            <p className="text-xl md:text-2xl text-beaudev-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
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
                <Card className="bg-beaudev-dark border-2 border-beaudev-gold/20 hover:border-beaudev-gold transition-all duration-500 overflow-hidden group">
                  <div className="p-8 md:p-12 lg:p-16">
                    {/* Logo Section - Much better visibility */}
                    <div className="flex flex-col items-center mb-12">
                      <div className="inline-block px-4 py-2 bg-beaudev-gold/10 border border-beaudev-gold/30 rounded-full mb-8">
                        <p className="text-beaudev-gold text-sm font-semibold tracking-wide">{project.category}</p>
                      </div>

                      {/* Larger logo with better contrast background */}
                      <div className="relative w-full max-w-3xl h-96 mb-8 flex items-center justify-center">
                        <Image
                          src={project.logo || withBasePath("/placeholder.svg")}
                          alt={project.logoAlt}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-beaudev-gold-soft mb-6 text-center">
                        {project.title}
                      </h3>
                      <p className="text-beaudev-text-light text-lg md:text-xl leading-relaxed mb-10 max-w-3xl text-center">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies and Features Grid */}
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-beaudev-gold text-xl font-bold mb-6 flex items-center">
                          <Code2 className="w-6 h-6 mr-3" />
                          Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-5 py-3 bg-beaudev-gold/10 border border-beaudev-gold/30 text-beaudev-gold-soft font-medium rounded-lg hover:bg-beaudev-gold/20 transition-colors text-base"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-beaudev-gold text-xl font-bold mb-6 flex items-center">
                          <Sparkles className="w-6 h-6 mr-3" />
                          Características Clave
                        </h4>
                        <ul className="space-y-4">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="text-beaudev-text-light flex items-start text-base">
                              <span className="text-beaudev-gold mr-3 mt-1 flex-shrink-0 text-xl">▸</span>
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
                            className="border-2 border-beaudev-gold text-beaudev-gold hover:bg-beaudev-gold hover:text-beaudev-dark transition-all duration-300 bg-transparent text-lg px-8 py-6 group"
                          >
                            Visitar sitio web
                            <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-2 border-beaudev-gold/30 text-beaudev-gold/50 cursor-not-allowed bg-transparent text-lg px-8 py-6"
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
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold mb-8">Nuestro Equipo</h2>
            <p className="text-xl md:text-2xl text-beaudev-text-light leading-relaxed max-w-3xl mx-auto text-pretty">
              Profesionales apasionados por crear soluciones elegantes y funcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="bg-beaudev-dark border-2 border-beaudev-gold/20 hover:border-beaudev-gold transition-all duration-300 overflow-hidden group">
                  {/* Carrusel para todos los miembros */}
                  <div className="relative w-full h-80 border-b-2 border-beaudev-gold/20 overflow-hidden flex items-center justify-center bg-beaudev-dark">
                    {member.images && member.images.length > 0 ? (
                      <TeamMemberCarousel
                        images={member.images}
                        name={member.name}
                        role={member.role}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <Users className="w-24 h-24 text-beaudev-gold/30 mx-auto mb-4" />
                        <p className="text-beaudev-gold/50 text-sm font-medium">Foto próximamente</p>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-beaudev-gold-soft mb-2">{member.name}</h3>
                    <p className="text-beaudev-gold text-lg mb-4 font-medium">{member.role}</p>
                    <p className="text-beaudev-text-light/70 text-sm leading-relaxed">{member.expertise}</p>

                    {/* Indicador de múltiples imágenes */}
                    {member.images && member.images.length > 1 && (
                      <div className="mt-3 flex items-center justify-center">
                        <div className="flex items-center space-x-1 bg-beaudev-gold/10 px-3 py-1 rounded-full">
                          <Sparkles className="w-3 h-3 text-beaudev-gold" />
                          <span className="text-beaudev-gold text-xs font-medium">
                            {member.images.length} fotos
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-beaudev-dark-elevated">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold text-center mb-20"
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
                <Card className="bg-gradient-to-br from-beaudev-dark to-beaudev-dark-elevated border-2 border-beaudev-gold/30 hover:border-beaudev-gold p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-beaudev-gold/20 group backdrop-blur-sm">
                  {/* Header with avatar placeholder and name */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-beaudev-gold to-beaudev-gold-soft flex items-center justify-center flex-shrink-0 text-beaudev-dark font-bold text-xl shadow-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-beaudev-gold-soft text-lg mb-1">{testimonial.author}</h4>
                      <p className="text-beaudev-text-light/70 text-sm truncate">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-beaudev-gold text-beaudev-gold" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-beaudev-text-light leading-relaxed text-base">{testimonial.quote}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-beaudev-gold mb-8 text-balance">
              Llevemos la belleza al código
            </h2>
            <p className="text-xl md:text-2xl text-beaudev-text-light leading-relaxed">
              Comencemos a crear algo extraordinario juntos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-beaudev-dark border-2 border-beaudev-gold/30 p-10 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-beaudev-gold-soft mb-3 font-medium text-lg">
                    Tu nombre completo
                  </label>
                  <p className="text-beaudev-text-light/60 text-sm mb-3">¿Cómo debemos llamarte?</p>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: María González"
                    className="w-full bg-beaudev-dark-elevated border-2 border-beaudev-gold/20 focus:border-beaudev-gold text-beaudev-text-light px-5 py-4 rounded-lg transition-colors outline-none text-lg placeholder:text-beaudev-text-light/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-beaudev-gold-soft mb-3 font-medium text-lg">
                    Email de contacto
                  </label>
                  <p className="text-beaudev-text-light/60 text-sm mb-3">Te responderemos a esta dirección de correo</p>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ej: tu@email.com"
                    className="w-full bg-beaudev-dark-elevated border-2 border-beaudev-gold/20 focus:border-beaudev-gold text-beaudev-text-light px-5 py-4 rounded-lg transition-colors outline-none text-lg placeholder:text-beaudev-text-light/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="message" className="block text-beaudev-gold-soft font-medium text-lg">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <span
                      className={`text-sm font-medium transition-colors ${charCount > maxChars * 0.9
                        ? "text-beaudev-gold"
                        : charCount > maxChars * 0.7
                          ? "text-beaudev-text-light/70"
                          : "text-beaudev-text-light/50"
                        }`}
                    >
                      {charCount}/{maxChars}
                    </span>
                  </div>
                  <p className="text-beaudev-text-light/60 text-sm mb-3">
                    Describe tu idea, objetivos y expectativas. Cuanto más detalle nos des, mejor podremos ayudarte.
                  </p>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    rows={8}
                    placeholder="Ej: Me gustaría crear una plataforma web moderna para mi negocio de..."
                    className="w-full bg-beaudev-dark-elevated border-2 border-beaudev-gold/20 focus:border-beaudev-gold text-beaudev-text-light px-5 py-4 rounded-lg transition-colors outline-none resize-none text-lg leading-relaxed placeholder:text-beaudev-text-light/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <p className="text-green-500 font-medium">
                      ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-red-500 font-medium">
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-beaudev-gold hover:bg-beaudev-gold-soft text-beaudev-dark font-bold transition-all duration-300 text-lg py-7 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || charCount === 0}
                >
                  <Mail className="mr-3 w-6 h-6" />
                  {isSubmitting ? "Enviando..." : "Hablar con BeauDev"}
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
                className="font-serif text-3xl md:text-4xl font-bold text-beaudev-gold mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                ¡Mensaje Enviado!
              </motion.h3>
              <p className="text-beaudev-text-light text-lg md:text-xl">
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
      <footer className="py-16 px-4 border-t border-beaudev-gold/20 bg-beaudev-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-beaudev-text-light/70 text-lg">© 2025 BeauDev. Belleza y tecnología en armonía.</p>
        </div>
      </footer>
    </main>
  )
}
