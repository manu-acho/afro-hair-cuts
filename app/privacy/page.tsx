import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Privacy Policy - Clip & Chill',
  description: 'Privacy policy for Clip & Chill home barbering services in Switzerland.',
}

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-md shadow-xl border-0 rounded-3xl">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <div className="text-gray-600 space-y-4">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Book a haircut appointment</li>
                  <li>Apply to join our barber team</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p>This may include your name, email address, phone number, home address, and service preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-600 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide and improve our barbering services</li>
                  <li>Process and manage your appointments</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
              <div className="text-gray-600 space-y-4">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To our trusted service providers who assist in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <div className="text-gray-600 space-y-4">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights</h2>
              <div className="text-gray-600 space-y-4">
                <p>Under Swiss and EU data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
              <div className="text-gray-600 space-y-4">
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@clipandchill.ch</p>
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
