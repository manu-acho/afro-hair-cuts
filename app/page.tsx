"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Scissors,
  Clock,
  MapPin,
  Star,
  Calendar,
  Home,
  Sparkles,
  Instagram,
  Facebook,
  Music,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  ThumbsUp,
  Play,
  Twitter,
  Menu,
  X,
  UserPlus,
  Bell,
  Settings,
  Globe,
} from "lucide-react"
import { FaTrophy, FaHeart, FaFlag, FaVideo, FaCut, FaBriefcase } from "react-icons/fa"
import { TbScissors, TbBriefcase, TbUsers, TbPhone, TbMail } from "react-icons/tb"
import Image from "next/image"
// (removed duplicate import)
// IPFS image URLs for dynamic carousels
// (removed duplicate heroImages and serviceImages)

// Simple carousel hook
// (removed duplicate useCarousel)

// Hero Carousel Component
// (removed duplicate HeroCarousel)

// Service Carousel Component
// (removed duplicate ServiceCarousel)
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// IPFS image URLs for dynamic carousels
const heroImages = [
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeigooaz7pmm3v7bci4sg4xfpio4ynexka6mpoe7i42piab3nxdhedm",
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeihp22t7jwxvkbxfg4sdiqzjegswhi4utxp2hqsrnawqycqxijtic4",
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeig7bisdsz57wuoqsrobhhgnfmu5ind7l344rk6tzvdow63ohuap5q"
];
const serviceImages = [
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeidpp7toobj53wnlnfatvyufjgxdsxbdio4dzu2ww6lyhjtxylogn4",
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeih5mno3uoa2uro6dp7hvc6x6zz4hnydpt6axpqczuhfzfdzd2zcna",
  "https://violet-rainy-toad-577.mypinata.cloud/ipfs/bafybeiarstljwk27e6trm33jpfvsefq75niw66tt6fjn6qzdae5fphcmqq"
];

// Simple carousel hook
function useCarousel(length: number, interval = 3500) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  useEffect(() => {
    if (length <= 1) return;
    const timer = setInterval(() => {
      if (!paused.current) setIndex(i => (i + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, interval]);
  return { index, setIndex, paused };
}

// Hero Carousel Component
function HeroCarousel() {
  const { index, setIndex, paused } = useCarousel(heroImages.length, 3500);
  const width = 520, height = 360;
  return (
    <div
      className="relative flex justify-center items-center mb-8"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="overflow-hidden rounded-2xl shadow-lg" style={{ width, height, background: 'rgba(255,255,255,0.8)' }}>
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * width}px)` }}
        >
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === 0 ? "At-home haircut service" : "Street haircut service"}
              width={width}
              height={height}
              className="object-contain select-none bg-white"
              draggable={false}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'} transition-colors`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i+1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

// Service Carousel Component
function ServiceCarousel() {
  const { index, setIndex, paused } = useCarousel(serviceImages.length, 3500);
  const width = 480, height = 320;
  return (
    <div
      className="relative flex justify-center items-center mt-2 mb-8"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="overflow-hidden rounded-xl shadow-md" style={{ width, height, background: 'rgba(255,255,255,0.8)' }}>
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * width}px)` }}
        >
          {serviceImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Service image ${i+1}`}
              width={width}
              height={height}
              className="object-contain select-none bg-white"
              draggable={false}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {serviceImages.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-pink-500' : 'bg-gray-300'} transition-colors`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i+1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'de' | 'fr'>('en')
  
  // Swiss-specific translations
  const translations = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        booking: "Book Now",
        joinTeam: "Join Team",
        community: "Community",
        bookCut: "Book Cut"
      },
      hero: {
        bouncing: "Your Cut. Your Space. Your Convenience.",
        tagline: "Where Style Meets Community - Expert cuts & vibrant vibes",
        bookButton: "Book Your Cut",
        servicesButton: "View Services"
      },
      services: {
        badge: "Our Services",
        title: "Expert Cuts & Premium Styles",
        subtitle: "Professional barbering services delivered with passion and precision",
        classic: {
          title: "Classic Cut",
          description: "Professional haircuts for men - clean, precise cuts that enhance your natural style. No braids, just classic barbering.",
          duration: "30-45 min"
        },
        fade: {
          title: "Fade & Taper",
          description: "Expert fades and tapers crafted in your space. Clean transitions and sharp lines for the modern man.",
          duration: "45-60 min"
        },
        boys: {
          title: "Boys' Cuts",
          description: "Gentle, patient styling for boys in familiar surroundings. Making haircuts fun and stress-free for children.",
          duration: "30 min"
        }
      },
      booking: {
        badge: "Book Now",
        title: "Book Your Premium Cut",
        subtitle: "Schedule your appointment and experience the finest barbering in your area",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          date: "Preferred Date",
          time: "Preferred Time",
          service: "Service Type",
          address: "Your Address",
          notes: "Additional Notes",
          notesPlaceholder: "Any special requests?",
          submitButton: "Book Your Premium Cut"
        }
      },
      community: {
        badge: "Community",
        title: "Free Street Cuts & Community Choice",
        subtitle: "Watch our free community haircuts and help us choose styles for our street cutting campaign!",
        subtitleExtra: "Rate, comment, and suggest your favorite cuts. 🎬✂️",
        videoButtons: {
          instagram: "Watch on Instagram",
          tiktok: "Watch on TikTok"
        },
        suggestion: {
          title: "Suggest a Cut for Our Next Street Session! 💡",
          subtitle: "Have an idea for our next free community haircut? Share your suggestions and vote on styles!",
          submitIdeas: "Submit Ideas",
          submitIdeasDesc: "Share your cut suggestions with our community",
          communityVote: "Community Vote",
          communityVoteDesc: "Help choose the next featured style",
          joinButton: "Join the Community",
          joinDesc: "Connect with fellow barber enthusiasts and share your passion for great cuts"
        }
      },
      footer: {
        description: "Your convenience is our priority. Professional haircuts for men and boys in your preferred location.",
        tagline: "Your Cut. Your Space. Your Convenience.",
        quickLinks: "Quick Links",
        contact: "Contact",
        social: "Follow Us",
        legal: "Legal",
        links: {
          bookNow: "Book Now",
          services: "Our Services",
          community: "Community",
          joinTeam: "Join Our Team",
          phone: "Phone",
          email: "Email",
          address: "Address",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          swiss: "Swiss Quality",
          allRights: "All rights reserved."
        }
      },
      forms: {
        booking: {
          namePlaceholder: "Enter your full name",
          emailPlaceholder: "your.email@example.com",
          phonePlaceholder: "+41 XX XXX XX XX",
          serviceSelect: "Select a service",
          addressPlaceholder: "Enter your full address including postal code",
          timeSelect: "Select time",
          notesPlaceholder: "Any special requests?",
          submitButton: "Book Your Cut"
        },
        barber: {
          namePlaceholder: "Enter your full name",
          emailPlaceholder: "your.email@example.com",
          phonePlaceholder: "+41 XX XXX XX XX",
          cityPlaceholder: "e.g., Bern, Zurich, Basel",
          experiencePlaceholder: "Tell us about your barbering experience, certifications, specialties...",
          portfolioPlaceholder: "Instagram, website, or portfolio link",
          submitButton: "Join Our Team"
        }
      },
      joinTeam: {
        title: "Join Our Team",
        subtitle: "Become a professional barber on our platform"
      }
    },
    de: {
      nav: {
        home: "Start",
        services: "Services",
        booking: "Buchen",
        joinTeam: "Team",
        community: "Community",
        bookCut: "Termin buchen"
      },
      hero: {
        bouncing: "Ihr Schnitt. Ihr Zuhause. Ihre Bequemlichkeit.",
        tagline: "Wo Stil auf Gemeinschaft trifft - Expertenschnitte & lebendige Atmosphäre",
        bookButton: "Ihren Schnitt buchen",
        servicesButton: "Dienstleistungen ansehen"
      },
      services: {
        badge: "Unsere Dienstleistungen",
        title: "Expertenschnitte & Premium-Styles",
        subtitle: "Professionelle Coiffeur-Dienstleistungen mit Leidenschaft und Präzision geliefert",
        classic: {
          title: "Klassischer Haarschnitt",
          description: "Professionelle Herrenhaarschnitte - saubere, präzise Schnitte, die Ihren natürlichen Stil unterstreichen. Keine Zöpfe, nur klassische Coiffeur-Kunst.",
          duration: "30-45 Min"
        },
        fade: {
          title: "Fade & Übergang",
          description: "Expertenfades und Übergänge, handwerklich in Ihrem Zuhause gefertigt. Saubere Übergänge und scharfe Linien für den modernen Mann.",
          duration: "45-60 Min"
        },
        boys: {
          title: "Kinderschnitte",
          description: "Sanftes, geduldiges Styling für Jungen in vertrauter Umgebung. Wir machen Haarschnitte zu einem spassigen und stressfreien Erlebnis.",
          duration: "30 Min"
        }
      },
      booking: {
        badge: "Jetzt buchen",
        title: "Buchen Sie Ihren Premium-Schnitt",
        subtitle: "Vereinbaren Sie Ihren Termin und erleben Sie die beste Coiffeur-Kunst in Ihrer Region",
        form: {
          name: "Vollständiger Name",
          email: "E-Mail-Adresse",
          phone: "Telefonnummer",
          date: "Gewünschtes Datum",
          time: "Gewünschte Uhrzeit",
          service: "Art der Dienstleistung",
          address: "Ihre Adresse",
          notes: "Zusätzliche Anmerkungen",
          notesPlaceholder: "Haben Sie spezielle Wünsche?",
          submitButton: "Premium-Schnitt buchen"
        }
      },
      community: {
        badge: "Gemeinschaft",
        title: "Gratis Strassenschnitte & Community-Wahl",
        subtitle: "Schauen Sie sich unsere kostenlosen Community-Haarschnitte an und helfen Sie uns bei der Auswahl der Styles für unsere Strassenschnitt-Kampagne!",
        subtitleExtra: "Bewerten, kommentieren und schlagen Sie Ihre Lieblings-Schnitte vor. 🎬✂️",
        videoButtons: {
          instagram: "Auf Instagram ansehen",
          tiktok: "Auf TikTok ansehen"
        },
        suggestion: {
          title: "Schlagen Sie einen Schnitt für unsere nächste Strassensession vor! 💡",
          subtitle: "Haben Sie eine Idee für unseren nächsten kostenlosen Community-Haarschnitt? Teilen Sie Ihre Vorschläge mit und stimmen Sie über Styles ab!",
          submitIdeas: "Ideen einreichen",
          submitIdeasDesc: "Teilen Sie Ihre Schnitt-Vorschläge mit unserer Community",
          communityVote: "Community-Abstimmung",
          communityVoteDesc: "Helfen Sie bei der Wahl des nächsten featured Styles",
          joinButton: "Der Community beitreten",
          joinDesc: "Vernetzen Sie sich mit anderen Coiffeur-Enthusiasten und teilen Sie Ihre Leidenschaft für tolle Schnitte"
        }
      },
      footer: {
        description: "Ihre Bequemlichkeit ist unsere Priorität. Professionelle Herrenhaarschnitte und Kinderschnitte, direkt vor Ihre Haustür in der ganzen Schweiz geliefert.",
        tagline: "Ihr Schnitt. Ihr Zuhause. Ihre Bequemlichkeit.",
        quickLinks: "Schnellzugriff",
        contact: "Kontakt",
        social: "Folgen Sie uns",
        legal: "Rechtliches",
        links: {
          bookNow: "Jetzt buchen",
          services: "Unsere Dienstleistungen",
          community: "Gemeinschaft",
          joinTeam: "Unserem Team beitreten",
          phone: "Telefon",
          email: "E-Mail",
          address: "Adresse",
          privacy: "Datenschutzrichtlinie",
          terms: "Nutzungsbedingungen",
          swiss: "Schweizer Qualität",
          allRights: "Alle Rechte vorbehalten."
        }
      },
      forms: {
        booking: {
          namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
          emailPlaceholder: "ihre.email@beispiel.ch",
          phonePlaceholder: "+41 XX XXX XX XX",
          serviceSelect: "Service auswählen",
          addressPlaceholder: "Geben Sie Ihre vollständige Adresse mit Postleitzahl ein",
          timeSelect: "Zeit auswählen",
          notesPlaceholder: "Haben Sie spezielle Wünsche?",
          submitButton: "Schnitt buchen"
        },
        barber: {
          namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
          emailPlaceholder: "ihre.email@beispiel.ch",
          phonePlaceholder: "+41 XX XXX XX XX",
          cityPlaceholder: "z.B. Bern, Zürich, Basel",
          experiencePlaceholder: "Erzählen Sie uns von Ihrer Coiffeur-Erfahrung, Zertifikaten, Spezialisierungen...",
          portfolioPlaceholder: "Instagram, Website oder Portfolio-Link",
          submitButton: "Unserem Team beitreten"
        }
      },
      joinTeam: {
        title: "Unserem Team beitreten",
        subtitle: "Werden Sie ein professioneller Coiffeur auf unserer Plattform"
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        services: "Services",
        booking: "Réserver",
        joinTeam: "Rejoindre l'équipe",
        community: "Communauté",
        bookCut: "Réserver"
      },
      hero: {
        bouncing: "Votre Coupe. Votre Espace. Votre Confort.",
        tagline: "Où le Style Rencontre la Communauté - Coupes expertes & ambiance dynamique",
        bookButton: "Réserver votre coupe",
        servicesButton: "Voir les services"
      },
      services: {
        badge: "Nos Services",
        title: "Coupes Expertes & Styles Premium",
        subtitle: "Services de coiffure professionnels livrés avec passion et précision",
        classic: {
          title: "Coupe Classique",
          description: "Coupes professionnelles pour hommes - coupes nettes et précises qui mettent en valeur votre style naturel. Pas de tresses, juste de la coiffure classique.",
          duration: "30-45 min"
        },
        fade: {
          title: "Dégradé & Effilé",
          description: "Dégradés experts et effilés réalisés dans votre espace. Transitions nettes et lignes précises pour l'homme moderne.",
          duration: "45-60 min"
        },
        boys: {
          title: "Coupes Enfants",
          description: "Coiffure douce et patiente pour les garçons dans un environnement familier. Rendre les coupes amusantes et sans stress pour les enfants.",
          duration: "30 min"
        }
      },
      booking: {
        badge: "Réserver",
        title: "Réservez votre Coupe Premium",
        subtitle: "Planifiez votre rendez-vous et découvrez la meilleure coiffure de votre région",
        form: {
          name: "Nom complet",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          date: "Date souhaitée",
          time: "Heure souhaitée",
          service: "Type de service",
          address: "Votre adresse",
          notes: "Notes supplémentaires",
          notesPlaceholder: "Des demandes spéciales?",
          submitButton: "Réserver votre Coupe Premium"
        }
      },
      community: {
        badge: "Communauté",
        title: "Coupes de Rue Gratuites & Choix Communautaire",
        subtitle: "Regardez nos coupes communautaires gratuites et aidez-nous à choisir les styles pour notre campagne de coupes de rue!",
        subtitleExtra: "Notez, commentez et suggérez vos coupes préférées. 🎬✂️",
        videoButtons: {
          instagram: "Voir sur Instagram",
          tiktok: "Voir sur TikTok"
        },
        suggestion: {
          title: "Suggérez une Coupe pour notre Prochaine Session de Rue! 💡",
          subtitle: "Vous avez une idée pour notre prochaine coupe communautaire gratuite? Partagez vos suggestions et votez pour les styles!",
          submitIdeas: "Soumettre des Idées",
          submitIdeasDesc: "Partagez vos suggestions de coupes avec notre communauté",
          communityVote: "Vote Communautaire",
          communityVoteDesc: "Aidez à choisir le prochain style vedette",
          joinButton: "Rejoindre la Communauté",
          joinDesc: "Connectez-vous avec d'autres passionnés de coiffure et partagez votre passion pour les belles coupes"
        }
      },
      footer: {
        description: "Votre confort est notre priorité. Coupes professionnelles pour hommes et garçons, livrées à votre porte dans toute la Suisse.",
        tagline: "Votre Coupe. Votre Espace. Votre Confort.",
        quickLinks: "Liens Rapides",
        contact: "Contact",
        social: "Suivez-nous",
        legal: "Légal",
        links: {
          bookNow: "Réserver maintenant",
          services: "Nos Services",
          community: "Communauté",
          joinTeam: "Rejoindre Notre Équipe",
          phone: "Téléphone",
          email: "E-mail",
          address: "Adresse",
          privacy: "Politique de Confidentialité",
          terms: "Conditions d'Utilisation",
          swiss: "Qualité Suisse",
          allRights: "Tous droits réservés."
        }
      },
      forms: {
        booking: {
          namePlaceholder: "Entrez votre nom complet",
          emailPlaceholder: "votre.email@exemple.ch",
          phonePlaceholder: "+41 XX XXX XX XX",
          serviceSelect: "Sélectionner un service",
          addressPlaceholder: "Entrez votre adresse complète avec code postal",
          timeSelect: "Sélectionner l'heure",
          notesPlaceholder: "Des demandes spéciales?",
          submitButton: "Réserver Votre Coupe"
        },
        barber: {
          namePlaceholder: "Entrez votre nom complet",
          emailPlaceholder: "votre.email@exemple.ch",
          phonePlaceholder: "+41 XX XXX XX XX",
          cityPlaceholder: "p.ex. Berne, Zurich, Bâle",
          experiencePlaceholder: "Parlez-nous de votre expérience en coiffure, certifications, spécialités...",
          portfolioPlaceholder: "Instagram, site web ou lien portfolio",
          submitButton: "Rejoindre Notre Équipe"
        }
      },
      joinTeam: {
        title: "Rejoindre Notre Équipe",
        subtitle: "Devenez un coiffeur professionnel sur notre plateforme"
      }
    }
  } as const

  const t = translations[language]

  const [customerWaitlist, setCustomerWaitlist] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    notes: ''
  })
  const [barberSignup, setBarberSignup] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    city: '',
    portfolio: ''
  })
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })
  
  // Loading states for form submissions
  const [isBookingLoading, setIsBookingLoading] = useState(false)
  const [isBarberLoading, setIsBarberLoading] = useState(false)

  const services = [
    {
      title: t.services.classic.title,
      description: t.services.classic.description,
      duration: t.services.classic.duration,
      price: "CHF 45",
      icon: Scissors,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      title: t.services.fade.title,
      description: t.services.fade.description,
      duration: t.services.fade.duration,
      price: "CHF 55",
      icon: Sparkles,
      gradient: "from-pink-500 to-red-500",
      bgGradient: "from-pink-50 to-red-50",
    },
    {
      title: t.services.boys.title,
      description: t.services.boys.description,
      duration: t.services.boys.duration,
      price: "CHF 35",
      icon: Star,
      gradient: "from-red-500 to-blue-500",
      bgGradient: "from-red-50 to-blue-50",
    },
  ]

  const handleCustomerWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://your-n8n-webhook-url.com/webhook/customer-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...customerWaitlist,
          timestamp: new Date().toISOString(),
          type: 'customer'
        }),
      })
      
      if (response.ok) {
        alert('Welcome to the waitlist! We\'ll notify you when we launch in your area.')
        setCustomerWaitlist({ name: '', email: '', phone: '', city: '', notes: '' })
      }
    } catch (error) {
      console.error('Waitlist error:', error)
      alert('There was an error. Please try again.')
    }
  }

  const handleBarberSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsBarberLoading(true)
    
    try {
      // Simplified payload structure that matches Google Sheets columns (like booking form)
      const payload = {
        ID: `BARBER-${Date.now()}`,
        Timestamp: new Date().toISOString(),
        Name: barberSignup.name,
        Email: barberSignup.email,
        Phone: barberSignup.phone,
        City: barberSignup.city,
        Experience: barberSignup.experience,
        Portfolio: barberSignup.portfolio || '',
        Status: 'Pending Review',
        Language: language,
        Source: 'website'
      }

      console.log('Sending barber application payload:', payload)

      const response = await fetch('https://n8n-waga-u47077.vm.elestio.app/webhook/273db6a1-0bed-4403-8ed8-94f9fa495174', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      })
      
      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))
      
      if (response.ok) {
        const responseText = await response.text()
        console.log('Response text:', responseText)
        
        let result = null
        try {
          result = JSON.parse(responseText)
        } catch (e) {
          console.log('Response is not JSON, treating as success')
        }
        
        alert('Application submitted successfully! We\'ll be in touch soon.')
        setBarberSignup({ name: '', email: '', phone: '', experience: '', city: '', portfolio: '' })
      } else {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`)
      }
    } catch (error) {
      console.error('Barber signup error:', error)
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        alert('Network error: Unable to connect to application service. Please check your internet connection and try again.')
      } else if (error instanceof Error) {
        alert(`There was an error submitting your application: ${error.message}. Please try again or contact us directly.`)
      } else {
        alert('There was an unexpected error submitting your application. Please try again or contact us directly.')
      }
    } finally {
      setIsBarberLoading(false)
    }
  }

  // Helper functions for service pricing
  const getServicePrice = (serviceType: string): number => {
    switch(serviceType) {
      case 'classic-cut': return 45;
      case 'fade-taper': return 55;
      case 'boys-cut': return 35;
      default: return 0;
    }
  }

  const getServiceDisplayName = (serviceType: string): string => {
    switch(serviceType) {
      case 'classic-cut': return 'Classic Cut';
      case 'fade-taper': return 'Fade & Taper';
      case 'boys-cut': return 'Boys\' Cut';
      default: return 'Unknown Service';
    }
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsBookingLoading(true)
    
    try {
      // Enhanced payload structure with pricing information for Stripe integration
      const payload = {
        ID: `BOOK-${Date.now()}`,
        Timestamp: new Date().toISOString(),
        Name: bookingForm.name,
        Email: bookingForm.email,
        Phone: bookingForm.phone,
        Service: bookingForm.service,
        ServiceName: getServiceDisplayName(bookingForm.service),
        ServicePrice: getServicePrice(bookingForm.service),
        ServiceCurrency: 'CHF',
        Date: bookingForm.date,
        Time: bookingForm.time,
        Address: bookingForm.address,
        Status: 'Pending Payment',
        Payment: 'Pending',
        Notes: bookingForm.notes || '',
        Language: language,
        Source: 'website'
      }

      console.log('Sending booking payload:', payload)

      const response = await fetch('https://n8n-waga-u47077.vm.elestio.app/webhook/81ddbf14-e1fa-4649-9441-af4fd6e52720', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      })
      
      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      if (response.ok) {
        const responseText = await response.text()
        console.log('Response text:', responseText)
        
        let result = null
        try {
          result = JSON.parse(responseText)
        } catch (e) {
          console.log('Response is not JSON, treating as success')
        }
        
        alert('Booking request sent successfully! We\'ll contact you soon to confirm your appointment.')
        setBookingForm({
          name: '', email: '', phone: '', address: '', service: '', date: '', time: '', notes: ''
        })
      } else {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`)
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        alert('Network error: Unable to connect to booking service. Please check your internet connection and try again.')
      } else if (error instanceof Error) {
        alert(`There was an error sending your booking request: ${error.message}. Please try again or contact us directly.`)
      } else {
        alert('There was an unexpected error sending your booking request. Please try again or contact us directly.')
      }
    } finally {
      setIsBookingLoading(false)
    }
  }

  const steps = [
    {
      icon: Scissors,
      title: "Choose Your Style",
      description: "Browse our services and select your preferred cut from our expert offerings.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Book Your Time & Location",
      description: "Select a convenient date, time, and provide your address for our visit.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Home,
      title: "Relax, We Come to You",
      description: "Our expert barber arrives at your doorstep, fully equipped with professional tools.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Star,
      title: "Enjoy Your Fresh Look",
      description: "Get a professional cut without leaving your comfort zone. Pure convenience.",
      gradient: "from-orange-500 to-pink-500",
    },
  ]

  const testimonials = [
    {
      name: "Marcus K.",
      rating: 5,
      text: "Incredible service! Having a professional barber come to my apartment was so convenient. The cut was perfect and the whole experience was seamless.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Amara S.",
      rating: 5,
      text: "Finally found someone who understands my hair texture. The at-home service is a game-changer - no more waiting in crowded barbershops!",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "David M.",
      rating: 5,
      text: "Booked for my son and myself. Professional, punctual, and the cuts were exactly what we wanted. Will definitely book again.",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clip & Chill",
            "image": "https://clipandchill.ch/og-image.jpg",
            "description": "Professional haircuts for men and boys delivered to your home across Switzerland. Expert barbers, your convenience.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CH",
              "addressLocality": "Switzerland"
            },
            "telephone": "+41-XX-XXX-XX-XX",
            "email": "hello@clipandchill.ch",
            "url": "https://clipandchill.ch",
            "sameAs": [
              "https://instagram.com/clipandchill",
              "https://facebook.com/clipandchill",
              "https://tiktok.com/@clipandchill"
            ],
            "serviceType": "Hair Salon",
            "areaServed": {
              "@type": "Country",
              "name": "Switzerland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Haircut Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Classic Cut",
                    "description": "Professional haircuts for men - clean, precise cuts that enhance your natural style."
                  },
                  "price": "45",
                  "priceCurrency": "CHF"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fade & Taper",
                    "description": "Expert fades and tapers crafted in your space. Clean transitions and sharp lines for the modern man."
                  },
                  "price": "55",
                  "priceCurrency": "CHF"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Boys' Cut",
                    "description": "Gentle, patient styling for boys in familiar surroundings. Making haircuts fun and stress-free for children."
                  },
                  "price": "35",
                  "priceCurrency": "CHF"
                }
              ]
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "CHF 35-55"
          })
        }}
      />

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Clip & Chill
              </span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6 bg-gray-50/80 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-200 shadow-sm">
                <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200 flex items-center justify-center whitespace-nowrap px-2">
                  {t.nav.home}
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-pink-600 transition-colors font-medium hover:scale-105 transform duration-200 flex items-center justify-center whitespace-nowrap px-2">
                  {t.nav.services}
                </Link>
                <Link href="#booking" className="text-gray-700 hover:text-red-600 transition-colors font-medium hover:scale-105 transform duration-200 flex items-center justify-center whitespace-nowrap px-2">
                  {t.nav.booking}
                </Link>
                <Link href="#barbers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200 flex items-center justify-center whitespace-nowrap px-2">
                  {t.nav.joinTeam}
                </Link>
                <Link href="/community-portal" className="text-gray-700 hover:text-pink-600 transition-all font-medium hover:scale-105 transform duration-200 flex items-center justify-center whitespace-nowrap px-3 py-1.5 bg-gradient-to-r from-pink-50 to-red-50 rounded-full border border-pink-200 shadow-sm hover:shadow-md hover:from-pink-100 hover:to-red-100">
                  <FaTrophy className="w-4 h-4 text-pink-600 mr-1.5" />
                  <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">Community</span>
                </Link>
              </div>
            </div>

            {/* Language Switcher & CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center bg-gray-50/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === 'en' 
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  🇺🇸
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === 'de' 
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  🇩🇪
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === 'fr' 
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  🇫🇷
                </button>
              </div>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t.nav.bookCut}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <Link href="#home" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  {t.nav.home}
                </Link>
                <Link href="#services" className="block px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200 rounded-lg font-medium flex items-center gap-2">
                  <TbScissors className="w-4 h-4" />
                  {t.nav.services}
                </Link>
                <Link href="#booking" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 rounded-lg font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t.nav.booking}
                </Link>
                <Link href="#barbers" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium flex items-center gap-2">
                  <TbUsers className="w-4 h-4" />
                  {t.nav.joinTeam}
                </Link>
                <Link href="/community-portal" className="block px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-200 rounded-lg font-medium border border-pink-200 bg-gradient-to-r from-pink-50 to-red-50">
                  <span className="flex items-center">
                    <FaTrophy className="w-4 h-4 text-pink-600 mr-2" />
                    <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">Community</span>
                  </span>
                </Link>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center justify-center space-x-2 py-3">
                  <span className="text-sm text-gray-500 mr-2">Language:</span>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    🇺🇸
                  </button>
                  <button
                    onClick={() => setLanguage('de')}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'de' 
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    🇩🇪
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      language === 'fr' 
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white shadow-md' 
                        : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    🇫🇷
                  </button>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white py-4 rounded-full shadow-lg"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.hero.bookButton}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden pt-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
              <Scissors className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent mb-8">
            Clip & Chill
          </h1>
          {/* Animated Bouncing Text Card */}
          <div className="mb-8 animate-bounce">
            <div className="inline-block bg-white/90 backdrop-blur-md border border-blue-200 rounded-2xl px-8 py-4 shadow-xl">
              <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                {t.hero.bouncing}
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t.hero.tagline}
          </p>
          {/* Dynamic Hero Carousel */}
          <HeroCarousel />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t.hero.bookButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Scissors className="w-5 h-5 mr-2" />
              {t.hero.servicesButton}
            </Button>
          </div>
          
          {/* Portal Access Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-600 mb-6 text-center">Join our community</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/barber-portal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">Barber Portal</span>
                </Button>
              </Link>
              <Link href="/community-portal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2 text-pink-600" />
                  <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">Community Portal</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              {t.services.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white/90 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-4 p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Dynamic Service Carousel */}
          <ServiceCarousel />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              {t.booking.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              {t.booking.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.booking.subtitle}
            </p>
          </div>

          <Card className="bg-gradient-to-br from-white via-pink-50/30 to-red-50/30 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      placeholder={t.forms.booking.namePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      placeholder={t.forms.booking.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      placeholder={t.forms.booking.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service *</Label>
                    <Select value={bookingForm.service} onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.forms.booking.serviceSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classic-cut">Classic Cut (CHF 45)</SelectItem>
                        <SelectItem value="fade-taper">Fade & Taper (CHF 55)</SelectItem>
                        <SelectItem value="boys-cut">Boys' Cut (CHF 35)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Home Address *</Label>
                  <Textarea
                    id="address"
                    required
                    value={bookingForm.address}
                    onChange={(e) => setBookingForm({...bookingForm, address: e.target.value})}
                    placeholder={t.forms.booking.addressPlaceholder}
                    className="min-h-[60px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select value={bookingForm.time} onValueChange={(value) => setBookingForm({...bookingForm, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.forms.booking.timeSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">01:00 PM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                        <SelectItem value="17:00">05:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                    placeholder={t.forms.booking.notesPlaceholder}
                    className="min-h-[60px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isBookingLoading}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isBookingLoading ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      {t.forms.booking.submitButton}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Barber Registration Section */}
      <section id="barbers" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.joinTeam.title}</h2>
            <p className="text-gray-600">{t.joinTeam.subtitle}</p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleBarberSignup} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="barber-name">Full Name *</Label>
                    <Input
                      id="barber-name"
                      type="text"
                      required
                      value={barberSignup.name}
                      onChange={(e) => setBarberSignup({...barberSignup, name: e.target.value})}
                      placeholder={t.forms.barber.namePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="barber-email">Email Address *</Label>
                    <Input
                      id="barber-email"
                      type="email"
                      required
                      value={barberSignup.email}
                      onChange={(e) => setBarberSignup({...barberSignup, email: e.target.value})}
                      placeholder={t.forms.barber.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="barber-phone">Phone Number *</Label>
                    <Input
                      id="barber-phone"
                      type="tel"
                      required
                      value={barberSignup.phone}
                      onChange={(e) => setBarberSignup({...barberSignup, phone: e.target.value})}
                      placeholder={t.forms.barber.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="barber-city">Primary City *</Label>
                    <Input
                      id="barber-city"
                      type="text"
                      required
                      value={barberSignup.city}
                      onChange={(e) => setBarberSignup({...barberSignup, city: e.target.value})}
                      placeholder={t.forms.barber.cityPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="barber-experience">Experience & Qualifications *</Label>
                  <Textarea
                    id="barber-experience"
                    required
                    value={barberSignup.experience}
                    onChange={(e) => setBarberSignup({...barberSignup, experience: e.target.value})}
                    placeholder={t.forms.barber.experiencePlaceholder}
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="barber-portfolio">Portfolio/Social Media Links</Label>
                  <Input
                    id="barber-portfolio"
                    type="url"
                    value={barberSignup.portfolio}
                    onChange={(e) => setBarberSignup({...barberSignup, portfolio: e.target.value})}
                    placeholder={t.forms.barber.portfolioPlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isBarberLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isBarberLoading ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5 mr-2" />
                      {t.forms.barber.submitButton}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Street Cut Video Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              Street Cuts
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              Watch Our Community in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the artistry of street cutting and join our vibrant community of barbers and enthusiasts
            </p>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="group bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] cursor-pointer border-0 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.jpg"
                  alt="Fresh Street Cut - Free Community Session - Professional barber cutting hair outdoors"
                  width={800}
                  height={450}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  12.5K views
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                    Fresh Street Cut - Free Community Session
                  </h3>
                  <Badge className="bg-purple-500/80 text-white backdrop-blur-sm">Featured Video</Badge>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Watch on Instagram
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-500 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Watch on TikTok
                  </Button>
                </div>
                
                {/* Call to Action */}
                <div className="text-center border-t border-gray-200 pt-6">
                  <p className="text-lg text-gray-600 mb-4">
                    Love what you see? Join our community and participate in competitions!
                  </p>
                  <Link href="/community-portal">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-10 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    >
                      <Users className="w-6 h-6 mr-3" />
                      Join Community & Compete
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Clip & Chill
                </h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {t.footer.description}
              </p>
              <p className="text-sm text-blue-400 font-semibold">
                {t.footer.tagline}
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block flex items-center gap-2"
                  >
                    <TbScissors className="w-4 h-4" />
                    {t.footer.links.bookNow}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block flex items-center gap-2"
                  >
                    <TbBriefcase className="w-4 h-4" />
                    {t.footer.links.services}
                  </button>
                </li>
                <li>
                  <Link href="/community-portal" className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block flex items-center gap-2">
                    <FaTrophy className="w-4 h-4 text-yellow-400" />
                    Community Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{t.footer.contact}</h4>
              <div className="space-y-2 text-gray-300 mb-4">
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors justify-center md:justify-start">
                  <Phone className="w-4 h-4" />
                  <span>+41 XX XXX XX XX</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <span>hello@clipandchill.ch</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Link
                  href="https://instagram.com/clipandchill"
                  target="_blank"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://facebook.com/clipandchill"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://tiktok.com/@clipandchill"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Music className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com/clipandchill"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1 flex-wrap">
              <span>© {new Date().getFullYear()} Clip & Chill. {t.footer.links.allRights} Made with</span>
              <FaHeart className="w-3 h-3 text-red-400" />
              <span>in Switzerland</span>
              <FaFlag className="w-3 h-3 text-red-500" />
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors hover:underline">
                {t.footer.links.privacy}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors hover:underline">
                {t.footer.links.terms}
              </Link>
              <span className="text-cyan-400 font-medium flex items-center gap-1">
                <FaFlag className="w-3 h-3 text-red-500" />
                {t.footer.links.swiss}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
