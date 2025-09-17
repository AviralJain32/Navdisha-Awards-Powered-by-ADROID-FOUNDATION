import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Shield,
  CreditCard,
  Banknote,
  Smartphone,
  Building,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-[family-name:var(--font-space-grotesk)]">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Join us in recognizing excellence and fostering positive change in education, research, and social impact.
              Your contribution helps us continue our mission of celebrating those who make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Where Your Donation Makes a Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Your support enables us to expand our reach and impact across multiple areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Education Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Supporting educational initiatives and providing resources to underserved communities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Research Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Funding research projects that address real-world challenges and create societal impact
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Community Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Empowering grassroots initiatives and community-driven educational programs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 dark:bg-orange-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Award Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintaining the integrity and quality of our award evaluation and recognition processes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Choose Your Contribution
            </h2>
            <p className="text-lg text-muted-foreground">
              Every contribution, no matter the size, helps us make a meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="relative border-2 hover:border-primary transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹500</div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Supporter</CardTitle>
                <CardDescription>Help us recognize one outstanding educator</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Support award evaluation process</li>
                  <li>• Contribute to certificate production</li>
                  <li>• Enable community outreach</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-primary bg-primary/5">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹2,000</div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Champion</CardTitle>
                <CardDescription>Sponsor a complete award category</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fund comprehensive evaluation</li>
                  <li>• Support trophy and certificate creation</li>
                  <li>• Enable award ceremony participation</li>
                  <li>• Contribute to educational initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-2 hover:border-primary transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹5,000</div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Patron</CardTitle>
                <CardDescription>Make a significant impact on our mission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Support multiple award categories</li>
                  <li>• Fund research and innovation projects</li>
                  <li>• Enable community education programs</li>
                  <li>• Contribute to organizational growth</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center font-[family-name:var(--font-space-grotesk)]">Custom Amount</CardTitle>
              <CardDescription className="text-center">
                Choose your own contribution amount that fits your budget
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-4">
                <Label htmlFor="custom-amount" className="text-lg">
                  ₹
                </Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  className="max-w-xs text-center text-lg"
                  min="100"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Complete Your Donation
            </h2>
            <p className="text-lg text-muted-foreground">
              Your secure donation helps us continue recognizing excellence and fostering positive change
            </p>
          </div>

          <form className="space-y-8">
            {/* Donor Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Donor Information</CardTitle>
                <CardDescription>Your information will be kept confidential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donor-first-name">First Name *</Label>
                    <Input id="donor-first-name" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="donor-last-name">Last Name *</Label>
                    <Input id="donor-last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donor-email">Email Address *</Label>
                    <Input id="donor-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="donor-phone">Phone Number</Label>
                    <Input id="donor-phone" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="donor-organization">Organization (Optional)</Label>
                  <Input id="donor-organization" placeholder="Your organization or company" />
                </div>

                <div>
                  <Label htmlFor="donation-message">Message (Optional)</Label>
                  <Textarea id="donation-message" placeholder="Share why you're supporting our mission..." rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Donation Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Donation Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="donation-frequency">Donation Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select donation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time Donation</SelectItem>
                      <SelectItem value="monthly">Monthly Recurring</SelectItem>
                      <SelectItem value="quarterly">Quarterly Recurring</SelectItem>
                      <SelectItem value="annual">Annual Recurring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="donation-purpose">Preferred Use of Donation</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose where your donation should be used" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Fund - Where needed most</SelectItem>
                      <SelectItem value="education">Education Access Programs</SelectItem>
                      <SelectItem value="research">Research Innovation Support</SelectItem>
                      <SelectItem value="community">Community Development</SelectItem>
                      <SelectItem value="awards">Award Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="anonymous" />
                  <Label htmlFor="anonymous" className="text-sm leading-relaxed">
                    Make this donation anonymous (your name will not be publicly displayed)
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="receipt" />
                  <Label htmlFor="receipt" className="text-sm leading-relaxed">
                    I would like to receive a donation receipt for tax purposes
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center bg-transparent">
                    <CreditCard className="h-6 w-6 mb-1" />
                    <span className="text-xs">Credit Card</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center bg-transparent">
                    <Banknote className="h-6 w-6 mb-1" />
                    <span className="text-xs">Debit Card</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center bg-transparent">
                    <Smartphone className="h-6 w-6 mb-1" />
                    <span className="text-xs">UPI</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center bg-transparent">
                    <Building className="h-6 w-6 mb-1" />
                    <span className="text-xs">Net Banking</span>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Your payment information is secure and encrypted
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="donation-terms" />
                  <Label htmlFor="donation-terms" className="text-sm leading-relaxed">
                    I understand that this donation is voluntary and will be used to support the Adroid Foundation's
                    mission of recognizing excellence in education, research, and social impact.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="tax-info" />
                  <Label htmlFor="tax-info" className="text-sm leading-relaxed">
                    I understand that donation receipts will be provided for tax purposes and that the Adroid Foundation
                    is committed to transparent use of funds.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy-consent" />
                  <Label htmlFor="privacy-consent" className="text-sm leading-relaxed">
                    I consent to the processing of my personal information for donation processing and communication
                    purposes as outlined in the{" "}
                    <Link href="/rules#privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <Button size="lg" className="text-lg px-12 py-6">
                <Heart className="h-5 w-5 mr-2" />
                Complete Donation
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                You will be redirected to a secure payment gateway to complete your donation
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Recognition and Transparency
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Donor Recognition</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Annual donor appreciation events</p>
                <p>• Recognition in our annual impact report</p>
                <p>• Special acknowledgment for major contributors</p>
                <p>• Option to remain anonymous if preferred</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Fund Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Detailed annual financial reports</p>
                <p>• Regular updates on funded projects</p>
                <p>• Impact stories from beneficiaries</p>
                <p>• Open communication about fund usage</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <p className="text-muted-foreground mb-6">
              Thank you for considering a donation to support our mission. Together, we can continue recognizing and
              celebrating excellence while fostering positive change in our communities.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
