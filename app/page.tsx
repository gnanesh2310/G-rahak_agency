"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Star,
  Users,
  TrendingUp,
  Award,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Eye,
  MessageCircle,
  Target,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Quote,
  Rocket,
  Globe,
  Shield,
  Heart,
  GraduationCap,
  Code,
  Lightbulb,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredInfluencer, setHoveredInfluencer] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const influencersRef = useRef<HTMLDivElement>(null)

  const typingWords = ["grow", "succeed", "thrive", "scale", "connect", "engage", "inspire", "transform"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleInfluencerScroll = (direction: "left" | "right") => {
    if (influencersRef.current) {
      const scrollAmount = 320
      const currentScroll = influencersRef.current.scrollLeft
      const newScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount

      influencersRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      })
    }
  }

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Local Fashion Boutique",
      role: "Store Owner",
      content:
        "G'rahak helped us connect with local influencers who perfectly matched our brand. Their fresh approach and dedication made all the difference for our small business.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Tech Startup",
      role: "Founder",
      content:
        "Working with these young entrepreneurs was refreshing. They brought innovative ideas and genuine passion to our influencer marketing campaign.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      company: "Food Blog",
      role: "Content Creator",
      content:
        "G'rahak's platform made it easy for me to connect with brands that align with my values. Their team is responsive and truly cares about creators.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      company: "Fitness Center",
      role: "Owner",
      content:
        "Despite being a new company, G'rahak delivered exceptional results. Their enthusiasm and fresh perspective helped us reach our target audience effectively.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  const founders = [
    {
      name: "Karanam Gnanesh Chowdary",
      role: "Co-Founder & CEO",
      bio: "3rd year Computer Science student at VNIT Nagpur with a passion for technology and entrepreneurship. Leading G'rahak's vision to democratize influencer marketing for businesses of all sizes.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      achievements: ["VNIT Student Entrepreneur", "Tech Enthusiast", "Innovation Leader"],
    },
    {
      name: "Ravindra Dubey",
      role: "Co-Founder & CTO",
      bio: "3rd year student at VNIT Nagpur specializing in software development and system architecture. Building G'rahak's technical foundation with modern web technologies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
      achievements: ["Full-Stack Developer", "System Designer", "Problem Solver"],
    },
  ]

  const influencers = [
    {
      name: "Sarah Johnson",
      channelName: "@sarahliving",
      category: "Lifestyle",
      followers: "2.5M",
      engagement: "4.2%",
      platform: "Instagram",
      avgViews: "850K",
      targetAudience: "Women 25-35",
      location: "Los Angeles, CA",
      languages: ["English", "Spanish"],
      contentTypes: ["Reels", "Stories", "IGTV"],
      brandCollabs: 127,
      rating: 4.9,
      responseTime: "2 hours",
      bio: "Lifestyle content creator sharing daily inspiration, home decor, and wellness tips.",
    },
    {
      name: "Mike Chen",
      channelName: "@TechWithMike",
      category: "Tech",
      followers: "1.8M",
      engagement: "3.8%",
      platform: "YouTube",
      avgViews: "1.2M",
      targetAudience: "Men 18-45",
      location: "San Francisco, CA",
      languages: ["English", "Mandarin"],
      contentTypes: ["Reviews", "Tutorials", "Unboxing"],
      brandCollabs: 89,
      rating: 4.8,
      responseTime: "4 hours",
      bio: "Tech reviewer and educator helping people make informed technology decisions.",
    },
    {
      name: "Emma Davis",
      channelName: "@EmmaStyleDaily",
      category: "Fashion",
      followers: "3.2M",
      engagement: "5.1%",
      platform: "Instagram",
      avgViews: "950K",
      targetAudience: "Women 20-40",
      location: "New York, NY",
      languages: ["English", "French"],
      contentTypes: ["Outfit Posts", "Hauls", "Styling Tips"],
      brandCollabs: 203,
      rating: 4.9,
      responseTime: "1 hour",
      bio: "Fashion influencer sharing affordable style inspiration and trend forecasts.",
    },
    {
      name: "Alex Rodriguez",
      channelName: "@FitWithAlex",
      category: "Fitness",
      followers: "1.5M",
      engagement: "4.7%",
      platform: "TikTok",
      avgViews: "2.1M",
      targetAudience: "All Genders 18-35",
      location: "Miami, FL",
      languages: ["English", "Spanish"],
      contentTypes: ["Workouts", "Nutrition", "Motivation"],
      brandCollabs: 156,
      rating: 4.8,
      responseTime: "3 hours",
      bio: "Certified personal trainer inspiring healthy lifestyle changes through fitness.",
    },
    {
      name: "Lisa Wang",
      channelName: "@BeautyByLisa",
      category: "Beauty",
      followers: "2.8M",
      engagement: "4.9%",
      platform: "Instagram",
      avgViews: "780K",
      targetAudience: "Women 18-45",
      location: "Toronto, CA",
      languages: ["English", "Korean"],
      contentTypes: ["Tutorials", "Reviews", "Skincare"],
      brandCollabs: 178,
      rating: 4.9,
      responseTime: "2 hours",
      bio: "Beauty expert sharing makeup tutorials, skincare routines, and product reviews.",
    },
    {
      name: "David Kim",
      channelName: "@GamerDave",
      category: "Gaming",
      followers: "4.1M",
      engagement: "3.5%",
      platform: "Twitch",
      avgViews: "3.2M",
      targetAudience: "Men 16-30",
      location: "Seoul, KR",
      languages: ["English", "Korean"],
      contentTypes: ["Live Streams", "Reviews", "Esports"],
      brandCollabs: 67,
      rating: 4.7,
      responseTime: "6 hours",
      bio: "Professional gamer and streamer covering the latest games and esports events.",
    },
    {
      name: "Sophie Brown",
      channelName: "@WanderlustSophie",
      category: "Travel",
      followers: "1.9M",
      engagement: "4.3%",
      platform: "Instagram",
      avgViews: "650K",
      targetAudience: "All Genders 25-45",
      location: "London, UK",
      languages: ["English", "German", "Italian"],
      contentTypes: ["Travel Vlogs", "Guides", "Photography"],
      brandCollabs: 134,
      rating: 4.8,
      responseTime: "4 hours",
      bio: "Travel photographer and blogger sharing hidden gems and travel tips worldwide.",
    },
    {
      name: "James Wilson",
      channelName: "@ChefJamesEats",
      category: "Food",
      followers: "2.2M",
      engagement: "4.6%",
      platform: "YouTube",
      avgViews: "1.1M",
      targetAudience: "All Genders 25-55",
      location: "Austin, TX",
      languages: ["English"],
      contentTypes: ["Recipes", "Restaurant Reviews", "Cooking Tips"],
      brandCollabs: 145,
      rating: 4.9,
      responseTime: "3 hours",
      bio: "Professional chef sharing easy recipes and exploring culinary cultures globally.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        :root {
          --primary-blue: #3b82f6;
          --primary-purple: #8b5cf6;
          --primary-pink: #ec4899;
          --primary-green: #10b981;
          --primary-orange: #f97316;
          --primary-red: #ef4444;
          --primary-cyan: #06b6d4;
          --primary-yellow: #f59e0b;
        }

        * {
          scroll-behavior: smooth;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .slide-in-bottom {
          animation: slideInBottom 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
        }
        
        .floating {
          animation: floating 4s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        .pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Enhanced Full-Width Underlines with Different Colors */
        .animated-headline {
          position: relative;
          display: block;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 8px 0;
          width: 100%;
        }

        .animated-headline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 4px;
          transform: scaleX(0);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .animated-headline:hover::after {
          transform: scaleX(1);
        }

        .animated-headline:hover {
          transform: translateY(-3px);
        }

        /* Different colors for different sections */
        .hero-headline::after {
          background: linear-gradient(90deg, #10b981, #059669, #047857);
        }

        .services-headline::after {
          background: linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8);
        }

        .about-headline::after {
          background: linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9);
        }

        .case-studies-headline::after {
          background: linear-gradient(90deg, #ec4899, #db2777, #be185d);
        }

        .influencers-headline::after {
          background: linear-gradient(90deg, #f97316, #ea580c, #dc2626);
        }

        .testimonials-headline::after {
          background: linear-gradient(90deg, #06b6d4, #0891b2, #0e7490);
        }

        .founders-headline::after {
          background: linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9);
        }

        .contact-headline::after {
          background: linear-gradient(90deg, #ef4444, #dc2626, #b91c1c);
        }

        /* Typing Animation */
        .typing-word {
          display: inline-block;
          position: relative;
          color: #fbbf24;
          font-weight: 800;
          animation: typeIn 0.6s ease-in-out;
        }

        .typing-word::after {
          content: '';
          position: absolute;
          right: -3px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #fbbf24;
          animation: blink 1.2s infinite;
          border-radius: 2px;
        }

        @keyframes typeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Enhanced Header with Glass Morphism */
        .header-bg {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.98) 50%,
            rgba(241, 245, 249, 0.95) 100%
          );
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 -1px 0 rgba(59, 130, 246, 0.05) inset;
          position: relative;
        }

        .header-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.3) 20%, 
            rgba(139, 92, 246, 0.3) 50%, 
            rgba(236, 72, 153, 0.3) 80%, 
            transparent 100%
          );
        }

        .nav-item-enhanced {
          position: relative;
          padding: 14px 24px;
          border-radius: 20px;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1), 
            rgba(59, 130, 246, 0.02)
          );
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          overflow: hidden;
        }

        .nav-item-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(59, 130, 246, 0.1), 
            transparent
          );
          transition: left 0.6s ease;
        }

        .nav-item-enhanced:hover::before {
          left: 100%;
        }

        .nav-item-enhanced:hover {
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.08), 
            rgba(139, 92, 246, 0.05)
          );
          border-color: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(59, 130, 246, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-item-enhanced .nav-underline {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        .nav-item-enhanced:hover .nav-underline {
          width: 60%;
        }

        /* Enhanced Logo Animation */
        .logo-container {
          position: relative;
          transition: all 0.4s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
          position: relative;
          overflow: hidden;
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.3) 50%, 
            transparent 70%
          );
          transform: rotate(45deg);
          animation: logoShine 3s ease-in-out infinite;
        }

        @keyframes logoShine {
          0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        /* Enhanced CTA Button */
        .header-cta-btn {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 25px rgba(16, 185, 129, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header-cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent
          );
          transition: left 0.6s ease;
        }

        .header-cta-btn:hover::before {
          left: 100%;
        }

        .header-cta-btn:hover {
          background: linear-gradient(135deg, #059669, #047857);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(16, 185, 129, 0.4),
            0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        /* Enhanced View Our Work Button */
        .btn-view-work {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.9);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          box-shadow: 
            0 8px 25px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .btn-view-work::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95), 
            rgba(255, 255, 255, 1)
          );
          transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .btn-view-work:hover::before {
          left: 0;
        }

        .btn-view-work:hover {
          color: #3b82f6;
          border-color: rgba(255, 255, 255, 1);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(255, 255, 255, 0.3),
            0 8px 20px rgba(59, 130, 246, 0.2);
        }

        .btn-view-work .btn-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .btn-view-work:hover .btn-content {
          color: #3b82f6;
        }

        .btn-view-work .btn-icon {
          transition: all 0.4s ease;
        }

        .btn-view-work:hover .btn-icon {
          transform: scale(1.1) rotate(5deg);
        }

        /* Button Glow Effect */
        .btn-view-work::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
          border-radius: 50%;
          z-index: 0;
        }

        .btn-view-work:hover::after {
          width: 300px;
          height: 300px;
        }
        
        /* Enhanced Cards */
        .premium-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .premium-card:hover::before {
          transform: scaleX(1);
        }

        .premium-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.15);
          transform: translateY(-8px);
        }
        
        .influencer-scroll-container {
          position: relative;
          padding: 30px 0;
        }
        
        .influencer-scroll-area {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding: 15px 0 25px 0;
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #f1f5f9;
        }
        
        .influencer-scroll-area::-webkit-scrollbar {
          height: 10px;
        }
        
        .influencer-scroll-area::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 15px;
        }
        
        .influencer-scroll-area::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 15px;
          border: 2px solid #f1f5f9;
        }
        
        .influencer-scroll-area::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }
        
        .influencer-card {
          flex-shrink: 0;
          width: 340px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899) border-box;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
        
        .influencer-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2);
        }

        .card-icon-hover {
          transition: all 0.4s ease;
        }

        .hover-lift:hover .card-icon-hover {
          transform: scale(1.2) rotate(5deg);
        }
        
        .influencer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(139, 92, 246, 0.95) 50%, rgba(236, 72, 153, 0.95) 100%);
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          color: white;
          z-index: 10;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .influencer-overlay::-webkit-scrollbar {
          width: 6px;
        }
        
        .influencer-overlay::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .influencer-overlay::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        .influencer-overlay::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .influencer-card:hover .influencer-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-counter {
          animation: countUp 2.5s ease-out forwards;
        }
        
        @keyframes countUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .scroll-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.4s ease;
          z-index: 20;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .scroll-nav-button:hover {
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        .influencer-scroll-container:hover .scroll-nav-button {
          opacity: 1;
        }

        .scroll-nav-button.left {
          left: -28px;
        }

        .scroll-nav-button.right {
          right: -28px;
        }

        /* Enhanced Theme Colors */
        .fashion-theme {
          background: linear-gradient(135deg, #ec4899, #db2777);
        }

        .tech-theme {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .food-theme {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .beauty-theme {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .fitness-theme {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .travel-theme {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
        }

        /* Enhanced Feature Points */
        .feature-point {
          transition: all 0.4s ease;
          padding: 4px 0;
        }

        .hover-lift:hover .feature-point {
          transform: translateX(10px);
          color: #3b82f6;
        }

        /* Enhanced Testimonial Carousel */
        .testimonial-card {
          transition: all 0.8s ease;
          opacity: 0.6;
          transform: scale(0.9);
        }

        .testimonial-card.active {
          opacity: 1;
          transform: scale(1);
        }

        .testimonial-dots {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 3rem;
        }

        .testimonial-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
        }

        .testimonial-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .testimonial-dot.active {
          background: #3b82f6;
          transform: scale(1.3);
        }

        .testimonial-dot.active::before {
          opacity: 1;
        }

        .testimonial-dot:hover {
          background: #64748b;
          transform: scale(1.2);
        }

        /* Enhanced Section Backgrounds */
        .section-gradient-1 {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .section-gradient-2 {
          background: linear-gradient(135deg, #fefefe 0%, #f1f5f9 100%);
        }

        /* Enhanced Interactive Elements */
        .interactive-element {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .interactive-element:hover {
          color: #3b82f6;
          transform: translateX(4px);
        }

        /* Loading Animation */
        .loading-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Enhanced Focus States */
        .focus-ring:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
        }

        /* Smooth Transitions */
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full header-bg z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 fade-in-left">
              <div className="flex items-center gap-3 logo-container">
                <div className="w-12 h-12 logo-icon rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white relative z-10" />
                </div>
                <h1 className="text-3xl font-bold gradient-text">G'rahak</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block fade-in-right">
              <div className="ml-10 flex items-baseline space-x-2">
                {["Home", "Services", "About", "Case Studies", "Our Influencers", "Founders", "Contact"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                      className="nav-item-enhanced text-gray-700 hover:text-emerald-600 text-sm font-semibold transition-all duration-300 relative group z-10"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                      <span className="nav-underline"></span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:block">
              <Button className="header-cta-btn px-6 py-3 rounded-xl font-semibold">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 p-3 rounded-xl hover:bg-blue-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden slide-in-bottom absolute top-full left-0 right-0 z-40">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/98 backdrop-blur-sm border-t border-emerald-100 shadow-lg">
              {["Home", "Services", "About", "Case Studies", "Our Influencers", "Founders", "Contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-600 w-full text-left transition-all duration-300 hover:bg-emerald-50 rounded-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-left">
              <div className="hero-headline animated-headline mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Let's{" "}
                  <span key={currentWordIndex} className="typing-word">
                    {typingWords[currentWordIndex]}
                  </span>
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-10 animate-on-scroll leading-relaxed max-w-lg">
                Transform your brand with authentic influencer partnerships. Connect with verified creators and achieve
                extraordinary results that drive real business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-on-scroll">
                <Button size="lg" className="btn-primary px-8 py-4 rounded-2xl font-bold text-lg">
                  <Rocket className="mr-3 h-6 w-6" />
                  Start Your Journey
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button size="lg" className="btn-view-work px-8 py-4 rounded-2xl font-bold text-lg">
                  <div className="btn-content">
                    <Eye className="btn-icon h-6 w-6" />
                    View Our Work
                  </div>
                </Button>
              </div>
              <div className="flex items-center gap-12 mt-16 animate-on-scroll">
                {[
                  { number: "50+", label: "Active Influencers", icon: Users },
                  { number: "100K+", label: "Total Reach", icon: Globe },
                  { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
                ].map((stat, index) => (
                  <div key={index} className="text-center stat-counter" style={{ animationDelay: `${index * 0.3}s` }}>
                    <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-4xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative fade-in-right">
              <div className="floating">
                <Image
                  src="/placeholder.svg?height=700&width=700"
                  alt="Influencer marketing team"
                  width={700}
                  height={700}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl scale-in pulse-slow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Growing Fast</div>
                    <div className="text-gray-600">+200% monthly growth</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl scale-in">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Student Innovation</div>
                    <div className="text-gray-600">Fresh perspectives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 section-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="services-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Fresh and innovative influencer marketing solutions designed by students, for the modern digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: "Influencer Matching",
                description:
                  "Connect with the right influencers for your brand using our curated network and smart matching system.",
                features: ["Curated influencer network", "Brand-creator alignment", "Performance tracking"],
                color: "#3b82f6",
              },
              {
                icon: TrendingUp,
                title: "Campaign Management",
                description:
                  "End-to-end campaign support from planning to execution with dedicated assistance throughout the process.",
                features: ["Campaign planning", "Content coordination", "Progress monitoring"],
                color: "#8b5cf6",
              },
              {
                icon: Award,
                title: "Analytics & Insights",
                description:
                  "Track your campaign performance with detailed analytics and actionable insights for better results.",
                features: ["Performance metrics", "Engagement analysis", "ROI reporting"],
                color: "#ec4899",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="premium-card p-8 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 card-icon-hover shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 feature-point">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="about-headline animated-headline mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About G'rahak</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a student-led startup from VNIT Nagpur, passionate about revolutionizing influencer marketing. Our
                mission is to bridge the gap between brands and authentic creators through innovative technology and
                fresh perspectives.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Founded in 2024 by two ambitious 3rd-year students, we bring energy, innovation, and a deep
                understanding of digital trends to help businesses connect with their target audiences through strategic
                influencer partnerships.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "25+", label: "Brands Helped", icon: Shield },
                  { number: "100+", label: "Campaigns Launched", icon: Rocket },
                  { number: "500K+", label: "Total Reach", icon: Globe },
                  { number: "4.8/5", label: "Client Rating", icon: Star },
                ].map((stat, index) => (
                  <div key={index} className="stat-counter text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                    <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="floating">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="About us team"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl scale-in">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Student Innovation</div>
                    <div className="text-gray-600">VNIT Nagpur</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl scale-in">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Fresh Ideas</div>
                    <div className="text-gray-600">Modern approach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Section */}
      <section id="case-studies" className="py-24 section-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="case-studies-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Success Stories</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped local businesses and startups achieve remarkable results through strategic
              influencer partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                image: "/placeholder.svg?height=250&width=400",
                category: "Local Business",
                title: "Fashion Boutique",
                description:
                  "Helped a local fashion boutique increase their social media presence by 250% through micro-influencer partnerships.",
                metric1: "+250% Followers",
                metric2: "50K Reach",
                themeClass: "fashion-theme",
                textColor: "text-pink-600",
              },
              {
                image: "/placeholder.svg?height=250&width=400",
                category: "Startup",
                title: "Tech App Launch",
                description:
                  "Supported a student startup's app launch campaign, generating 1000+ downloads in the first week.",
                metric1: "1000+ Downloads",
                metric2: "25K Reach",
                themeClass: "tech-theme",
                textColor: "text-blue-600",
              },
              {
                image: "/placeholder.svg?height=250&width=400",
                category: "Food & Beverage",
                title: "Local Restaurant",
                description:
                  "Boosted a local restaurant's visibility by 180% through food blogger collaborations and social media campaigns.",
                metric1: "+180% Visibility",
                metric2: "75K Reach",
                themeClass: "food-theme",
                textColor: "text-green-600",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="premium-card overflow-hidden hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <Badge
                    className={`absolute top-6 left-6 ${study.themeClass} text-white border-0 shadow-lg px-4 py-2 text-sm font-semibold`}
                  >
                    {study.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-lg ${study.textColor}`}>{study.metric1}</span>
                    <span className="text-blue-600 font-bold text-lg">{study.metric2}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Influencers Section */}
      <section id="influencers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="influencers-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Creator Network</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with verified creators who align perfectly with your brand values and target audience for maximum
              impact and authentic engagement
            </p>
          </div>

          <div className="influencer-scroll-container">
            <div ref={influencersRef} className="influencer-scroll-area">
              {influencers.map((influencer, index) => (
                <Card
                  key={index}
                  className="influencer-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredInfluencer(index)}
                  onMouseLeave={() => setHoveredInfluencer(null)}
                >
                  <CardContent className="p-8 relative h-full">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="relative">
                        <Image
                          src={`/placeholder.svg?height=70&width=70`}
                          alt={influencer.name}
                          width={70}
                          height={70}
                          className="rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                          {influencer.platform === "Instagram" && <Instagram className="w-4 h-4 text-white" />}
                          {influencer.platform === "YouTube" && <Youtube className="w-4 h-4 text-white" />}
                          {influencer.platform === "TikTok" && <div className="w-3 h-3 bg-white rounded-full" />}
                          {influencer.platform === "Twitch" && <div className="w-3 h-3 bg-white rounded-full" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-1">{influencer.name}</h3>
                        <p className="text-gray-500 mb-2">{influencer.channelName}</p>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-semibold">
                          {influencer.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 text-sm mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-gray-600 font-medium mb-1">Followers</div>
                        <div className="font-bold text-xl text-gray-900">{influencer.followers}</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-gray-600 font-medium mb-1">Engagement</div>
                        <div className="font-bold text-xl text-green-600">{influencer.engagement}</div>
                      </div>
                    </div>
                    <Button className="w-full transition-all duration-300 hover:scale-105 gradient-bg text-white py-3 rounded-xl font-semibold">
                      <Eye className="mr-2 h-5 w-5" />
                      View Profile
                    </Button>

                    {/* Enhanced Hover Overlay */}
                    <div className="influencer-overlay">
                      <div className="flex items-center gap-4 mb-8 flex-shrink-0">
                        <Image
                          src={`/placeholder.svg?height=70&width=70`}
                          alt={influencer.name}
                          width={70}
                          height={70}
                          className="rounded-full border-3 border-white shadow-lg"
                        />
                        <div>
                          <h3 className="font-bold text-2xl mb-1">{influencer.name}</h3>
                          <p className="text-sm opacity-90 mb-2">{influencer.channelName}</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{influencer.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-4 h-4" />
                              <span className="font-semibold">Reach</span>
                            </div>
                            <div className="font-bold text-2xl">{influencer.followers}</div>
                          </div>
                          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="w-4 h-4" />
                              <span className="font-semibold">Avg Views</span>
                            </div>
                            <div className="font-bold text-2xl">{influencer.avgViews}</div>
                          </div>
                        </div>

                        <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-4 h-4" />
                            <span className="font-semibold">Target Audience</span>
                          </div>
                          <div className="font-semibold text-lg">{influencer.targetAudience}</div>
                        </div>

                        <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="font-semibold">Location</span>
                          </div>
                          <div className="font-semibold text-lg">{influencer.location}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <BarChart3 className="w-4 h-4" />
                              <span className="font-semibold">Collabs</span>
                            </div>
                            <div className="font-bold text-xl">{influencer.brandCollabs}</div>
                          </div>
                          <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <MessageCircle className="w-4 h-4" />
                              <span className="font-semibold">Response</span>
                            </div>
                            <div className="font-bold text-lg">{influencer.responseTime}</div>
                          </div>
                        </div>

                        <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                          <div className="font-semibold mb-3">Content Types</div>
                          <div className="flex flex-wrap gap-2">
                            {influencer.contentTypes.map((type, typeIndex) => (
                              <Badge
                                key={typeIndex}
                                variant="secondary"
                                className="text-xs bg-white/25 text-white border-white/40 hover:bg-white/35 transition-colors px-3 py-1"
                              >
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                          <div className="font-semibold mb-3">Languages</div>
                          <div className="font-semibold text-lg">{influencer.languages.join(", ")}</div>
                        </div>

                        <div className="bg-white/15 p-5 rounded-xl backdrop-blur-sm">
                          <div className="font-semibold mb-3">About</div>
                          <p className="text-sm opacity-95 leading-relaxed">{influencer.bio}</p>
                        </div>
                      </div>

                      <Button className="w-full mt-8 bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg flex-shrink-0 py-3 rounded-xl">
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Influencer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Scroll Navigation Buttons */}
            <button onClick={() => handleInfluencerScroll("left")} className="scroll-nav-button left">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => handleInfluencerScroll("right")} className="scroll-nav-button right">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced What Our Clients Say Section */}
      <section id="testimonials" className="py-24 section-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="testimonials-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the brands that have trusted us with their influencer
              marketing campaigns and achieved great results
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out">
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className={`premium-card w-full flex-shrink-0 testimonial-card hover-lift ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    <CardContent className="p-10 text-center">
                      <Quote className="w-16 h-16 text-blue-600 mx-auto mb-8 card-icon-hover" />
                      <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center gap-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full shadow-lg"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-xl text-gray-900 mb-1">{testimonial.name}</h4>
                          <p className="text-gray-600 mb-1">{testimonial.role}</p>
                          <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2 mt-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Testimonial Dots */}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? "active" : ""}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Founders Section */}
      <section id="founders" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="founders-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Our Founders</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Two passionate students from VNIT Nagpur bringing fresh perspectives and innovative solutions to
              influencer marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="premium-card overflow-hidden hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-sm opacity-90">{founder.role}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-gray-900">Key Strengths</h4>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-3 feature-point">
                          <Code className="h-4 w-4 text-blue-600 card-icon-hover flex-shrink-0" />
                          <span className="text-gray-600 font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-all duration-300 border-blue-200 hover:bg-blue-50 flex-1"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-all duration-300 border-blue-200 hover:bg-blue-50 flex-1"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 section-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="contact-headline animated-headline inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Let's Start Something Amazing</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your brand with influencer marketing? Let's discuss how we can help you achieve
              incredible results and grow your business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "hello@grahak.com",
                    color: "#3b82f6",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+91 98765 43210",
                    color: "#8b5cf6",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "VNIT Nagpur, Maharashtra, India",
                    color: "#ec4899",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 hover-lift p-6 rounded-2xl bg-white shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center card-icon-hover shadow-lg"
                      style={{ backgroundColor: contact.color }}
                    >
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900 mb-1">{contact.title}</div>
                      <div className="text-gray-600 text-lg">{contact.info}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-6 text-xl text-gray-900">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, color: "#ec4899", label: "Instagram" },
                    { Icon: Twitter, color: "#3b82f6", label: "Twitter" },
                    { Icon: Linkedin, color: "#8b5cf6", label: "LinkedIn" },
                    { Icon: Youtube, color: "#ef4444", label: "YouTube" },
                  ].map(({ Icon, color, label }, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="w-14 h-14 hover:scale-110 transition-all duration-300 border-gray-200 hover:shadow-lg rounded-2xl"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = color
                        e.currentTarget.style.backgroundColor = `${color}10`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = ""
                        e.currentTarget.style.backgroundColor = ""
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color }} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="premium-card p-8 hover-lift animate-on-scroll">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold mb-8 text-gray-900">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">First Name</label>
                      <Input
                        placeholder="John"
                        className="focus-ring transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 hover:border-blue-300 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="focus-ring transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 hover:border-blue-300 h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="focus-ring transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 hover:border-blue-300 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Company</label>
                    <Input
                      placeholder="Your Amazing Company"
                      className="focus-ring transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 hover:border-blue-300 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your exciting project and how we can help you succeed..."
                      rows={5}
                      className="focus-ring transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 hover:border-blue-300 rounded-xl"
                    />
                  </div>
                  <Button className="w-full btn-primary py-4 rounded-xl font-bold text-lg">
                    <Rocket className="mr-3 h-6 w-6" />
                    Launch Our Partnership
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">G'rahak</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Connecting brands with authentic influencers to create meaningful partnerships and drive exceptional
                results. Built by students, for the future.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, color: "#ec4899" },
                  { Icon: Twitter, color: "#3b82f6" },
                  { Icon: Linkedin, color: "#8b5cf6" },
                ].map(({ Icon, color }, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 rounded-xl"
                    style={{ "--hover-color": color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = color
                      e.currentTarget.style.backgroundColor = `${color}20`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ""
                      e.currentTarget.style.backgroundColor = ""
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </Button>
                ))}
              </div>
            </div>
            {[
              {
                title: "Services",
                links: ["Influencer Matching", "Campaign Management", "Analytics & Insights", "Content Creation"],
              },
              {
                title: "Company",
                links: ["About Us", "Our Team", "Careers", "Press & Media"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
              },
            ].map((section, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-bold mb-6 text-xl text-white">{section.title}</h4>
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300 hover:underline text-lg interactive-element"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-on-scroll">
            <p className="text-lg">© 2024 G'rahak. All rights reserved. Made with ❤️ by students at VNIT Nagpur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
