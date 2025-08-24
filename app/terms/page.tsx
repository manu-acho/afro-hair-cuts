import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Terms of Service - Clip & Chill',
  description: 'Terms of service for Clip & Chill home barbering services in Switzerland.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm font-bold">C&C</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Clip & Chill
            </span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-base shadow-lg">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-md shadow-xl border-0 rounded-3xl">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <div className="text-gray-600 space-y-4">
                <p>By accessing and using Clip & Chill services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
              <div className="text-gray-600 space-y-4">
                <p>Clip & Chill provides professional mobile barbering services, delivering haircuts for men and boys at your location across Switzerland.</p>
                <p>Our services include:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Classic haircuts (CHF 45)</li>
                  <li>Fade & taper cuts (CHF 55)</li>
                  <li>Boys' haircuts (CHF 35)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Booking and Payment</h2>
              <div className="text-gray-600 space-y-4">
                <p>When you book a service:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>You agree to provide accurate contact and location information</li>
                  <li>Payment is due at the time of service completion</li>
                  <li>We accept cash, card, and digital payments</li>
                  <li>Cancellations must be made at least 24 hours in advance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cancellation Policy</h2>
              <div className="text-gray-600 space-y-4">
                <p>Our cancellation policy:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Free cancellation up to 24 hours before appointment</li>
                  <li>Cancellations within 24 hours may incur a 50% service fee</li>
                  <li>No-shows will be charged the full service amount</li>
                  <li>Emergency cancellations will be considered case-by-case</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Health and Safety</h2>
              <div className="text-gray-600 space-y-4">
                <p>For everyone's safety:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Please inform us of any allergies or skin conditions</li>
                  <li>If you're feeling unwell, please reschedule your appointment</li>
                  <li>Our barbers follow strict hygiene and sanitization protocols</li>
                  <li>All equipment is sterilized between appointments</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <div className="text-gray-600 space-y-4">
                <p>Clip & Chill's liability is limited to the cost of the service provided. We are not liable for any indirect, incidental, or consequential damages.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Governing Law</h2>
              <div className="text-gray-600 space-y-4">
                <p>These terms are governed by Swiss law. Any disputes will be resolved in Swiss courts.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact Information</h2>
              <div className="text-gray-600 space-y-4">
                <p>For questions about these terms, contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@clipandchill.ch</p>
                  <p><strong>Phone:</strong> +41 XX XXX XX XX</p>
                  <p><strong>Address:</strong> Clip & Chill, Switzerland</p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
