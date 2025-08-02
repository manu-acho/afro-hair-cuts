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
  Upload,
  Twitter,
  Menu,
  X,
  UserPlus,
  Bell,
  Settings,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const [communityVideos] = useState([
    {
      id: 1,
      title: "Fresh Street Cut - Free Community Session",
      thumbnail: "/placeholder.svg?height=400&width=600&query=street haircut barber",
      views: "12.5K"
    }
  ])

  const services = [
    {
      title: "Classic Cut",
      description:
        "Professional haircuts for men - clean, precise cuts that enhance your natural style. No braids, just classic barbering.",
      duration: "30-45 min",
      price: "CHF 45",
      icon: Scissors,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Fade & Taper",
      description:
        "Expert fades and tapers crafted in your space. Clean transitions and sharp lines for the modern man.",
      duration: "45-60 min",
      price: "CHF 55",
      icon: Sparkles,
      gradient: "from-pink-500 to-red-500",
      bgGradient: "from-pink-50 to-red-50",
    },
    {
      title: "Boys' Cuts",
      description:
        "Gentle, patient styling for boys in familiar surroundings. Making haircuts fun and stress-free for children.",
      duration: "30 min",
      price: "CHF 35",
      icon: Star,
      gradient: "from-red-500 to-purple-500",
      bgGradient: "from-red-50 to-purple-50",
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
    try {
      const response = await fetch('https://your-n8n-webhook-url.com/webhook/barber-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...barberSignup,
          timestamp: new Date().toISOString(),
          type: 'barber'
        }),
      })
      
      if (response.ok) {
        alert('Thanks for your interest! We\'ll be in touch about joining our platform.')
        setBarberSignup({ name: '', email: '', phone: '', experience: '', city: '', portfolio: '' })
      }
    } catch (error) {
      console.error('Barber signup error:', error)
      alert('There was an error. Please try again.')
    }
  }

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Webhook integration for n8n automation
      const response = await fetch('https://your-n8n-webhook-url.com/webhook/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingForm,
          timestamp: new Date().toISOString(),
          source: 'website'
        }),
      })
      
      if (response.ok) {
        alert('Booking request sent successfully! We\'ll contact you soon.')
        setBookingForm({
          name: '', email: '', phone: '', address: '', service: '', date: '', time: '', notes: ''
        })
      } else {
        alert('There was an error sending your booking. Please try again.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('There was an error sending your booking. Please try again.')
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Clip & Chill
              </span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8 bg-gray-50/80 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-200 shadow-sm">
                <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
                  Home
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
                  Services
                </Link>
                <Link href="#booking" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
                  Book Now
                </Link>
                <Link href="#barbers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
                  Join Team
                </Link>
                <Link href="#community" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hover:scale-105 transform duration-200">
                  Community
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Cut
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
                <Link href="#home" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium">
                  🏠 Home
                </Link>
                <Link href="#services" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium">
                  ✂️ Services
                </Link>
                <Link href="#booking" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium">
                  📅 Book Now
                </Link>
                <Link href="#barbers" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium">
                  👨‍💼 Join Team
                </Link>
                <Link href="#community" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium">
                  🎬 Community
                </Link>
                <Button 
                  size="lg" 
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-full shadow-lg"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Cut
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
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
              <Scissors className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Clip & Chill
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Where Style Meets Community - Expert cuts & vibrant vibes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Cut
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Scissors className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              Expert Cuts & Premium Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional barbering services delivered with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              Book Now
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              Book Your Premium Cut
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule your appointment and experience the finest barbering in your area
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
                      placeholder="Enter your full name"
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
                      placeholder="your.email@example.com"
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
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service *</Label>
                    <Select value={bookingForm.service} onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
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
                    placeholder="Enter your full address including postal code"
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
                        <SelectValue placeholder="Select time" />
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
                    placeholder="Any special requests?"
                    className="min-h-[60px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Premium Cut
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
            <p className="text-gray-600">Become a professional barber on our platform</p>
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
                      placeholder="Enter your full name"
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
                      placeholder="your.email@example.com"
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
                      placeholder="+41 XX XXX XX XX"
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
                      placeholder="e.g., Bern, Zurich, Basel"
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
                    placeholder="Tell us about your barbering experience, certifications, specialties..."
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
                    placeholder="Instagram, website, or portfolio link"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 text-lg rounded-full"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
              Community
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight">
              Free Street Cuts & Community Choice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our free community haircuts and help us choose styles for our street cutting campaign! 
              <span className="block mt-2 text-lg bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent font-semibold">
                Rate, comment, and suggest your favorite cuts. 🎬✂️
              </span>
            </p>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="group bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] cursor-pointer border-0 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative overflow-hidden">
                <Image
                  src={communityVideos[0].thumbnail}
                  alt={communityVideos[0].title}
                  width={800}
                  height={450}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {communityVideos[0].views} views
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                    {communityVideos[0].title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              </CardContent>
            </Card>
          </div>

          {/* Community Interaction Section */}
          <div className="bg-gradient-to-r from-white/90 via-pink-50/90 to-red-50/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-pink-200 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
                Suggest a Cut for Our Next Street Session! 💡
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Have an idea for our next free community haircut? Share your suggestions and vote on styles!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Upload className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">Submit Ideas</h4>
                    <p className="text-gray-600">Share your cut suggestions with our community</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">Community Vote</h4>
                    <p className="text-gray-600">Help choose the next featured style</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                >
                  <Users className="w-6 h-6 mr-3" />
                  Join the Community
                </Button>
                <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto">
                  Connect with fellow barber enthusiasts and share your passion for great cuts
                </p>
              </div>
            </div>
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
                Your convenience is our priority. Professional haircuts for men and boys, 
                delivered to your doorstep across Switzerland. 🇨🇭
              </p>
              <p className="text-sm text-blue-400 font-semibold">
                Your Cut. Your Space. Your Convenience.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Book Now ✂️
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Our Services 💼
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Gallery 🎬
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact & Social</h4>
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
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clip & Chill. All rights reserved. Made with �
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
