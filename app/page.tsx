import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      title: "Fade & Taper",
      description:
        "Professional fades and tapers crafted in your space. Clean, precise cuts that enhance your natural style.",
      duration: "45-60 min",
      price: "CHF 65",
      icon: Scissors,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Braids & Twists Prep",
      description:
        "Expert preparation cuts for braiding and twisting. Perfect foundation for your next protective style.",
      duration: "30-45 min",
      price: "CHF 55",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Kids' Cuts",
      description:
        "Gentle, patient styling for children in familiar surroundings. Making haircuts fun and stress-free.",
      duration: "30 min",
      price: "CHF 45",
      icon: Star,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Loc Maintenance",
      description:
        "Professional loc care and maintenance. Root touch-ups, palm rolling, and styling at your convenience.",
      duration: "60-90 min",
      price: "CHF 75",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Professional barber styling afro hair at client's home"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-full shadow-lg animate-bounce">
            ✨ Premium At-Home Service
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-2">
            Premium Afro Haircuts, <span className="block mt-2">Delivered to Your Door</span> in Switzerland
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Experience expert styling in the comfort of your home or office. Professional cuts, personalized service,
            zero travel time. ✂️
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Our Work ✨
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              Professional Cuts, Your Space
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Each service includes consultation, styling, and cleanup - all delivered with premium care to your
              doorstep 🏠
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group cursor-pointer`}
              >
                <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <div className="flex items-center gap-1 bg-white/50 px-2 sm:px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    Starting from {service.price}
                  </div>
                  <p className="text-xs text-gray-500">*Travel fees may apply</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              How It Works
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              Four Simple Steps to Perfect Hair
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Getting your perfect haircut has never been easier. Professional styling at your convenience! 🎯
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group px-4">
                <div className="relative mb-4 sm:mb-6">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-white to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100 mx-2 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
              Why Choose At-Home Service? 🌟
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors">
                  Time-Saving
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">No travel, no waiting ⏰</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors">
                  Comfort
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">Your familiar space 🏠</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors">
                  Privacy
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">Personal attention 👤</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                  Personalized
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">Tailored service ✨</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              Our Work
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              Artistry in Every Cut
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Discover the precision and creativity in every style. Each cut tells a story of expertise! 📸
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square relative group overflow-hidden rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=professional afro haircut style ${item}`}
                  alt={`Afro haircut style ${item}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent group-hover:from-purple-900/80 transition-all duration-300" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs sm:text-sm font-semibold">Style #{item}</p>
                  <p className="text-xs text-purple-200">Premium Cut</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              See More Styles on Instagram
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              Testimonials
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Real experiences from satisfied customers across Switzerland 🇨🇭
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group cursor-pointer"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed italic group-hover:text-gray-800 transition-colors">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white/5 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready for Your Premium At-Home Haircut? ✨
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join hundreds of satisfied clients who've discovered the convenience of professional styling at home! 🏠
          </p>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group mb-6 sm:mb-8 mx-4 sm:mx-0"
          >
            Book Your At-Home Haircut
            <CheckCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
          </Button>

          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 mx-2 sm:mx-0">
            <div className="flex items-center justify-center gap-2 text-white mb-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-semibold">Service Areas 📍</span>
            </div>
            <p className="text-sm sm:text-base text-white/90">
              Currently serving Bern and surrounding areas. Travel fees may apply for locations outside the city center.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/10 rounded-full animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Swiss Afro Cuts ✂️
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                Premium at-home haircut services for the modern professional. Bringing expert styling directly to your
                doorstep across Switzerland! 🇨🇭
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Services ✨
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Gallery 📸
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Booking 📅
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-purple-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    Contact 📞
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-purple-400">Contact</h4>
              <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-2 hover:text-purple-400 transition-colors justify-center sm:justify-start">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+41 XX XXX XX XX</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-400 transition-colors justify-center sm:justify-start">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>hello@swissafrocuts.ch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Swiss Afro Cuts. All rights reserved. Made with 💜
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Music className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
