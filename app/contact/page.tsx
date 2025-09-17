import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, Award, Heart } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Have questions about our awards, need assistance with nominations, or want to learn more about our
              mission? We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us your questions or concerns and we'll respond within 24 hours
                </p>
                <div className="space-y-2">
                  <p className="font-medium">General Inquiries:</p>
                  <a href="mailto:adroidconnectz@gmail.com" className="text-primary hover:underline">
                    adroidconnectz@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Speak directly with our team for immediate assistance</p>
                <div className="space-y-2">
                  <p className="font-medium">Support Hotline:</p>
                  <a href="tel:+919876543210" className="text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Our team is available during these hours</p>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">(Indian Standard Time)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input id="organization" placeholder="Your organization or company" />
                    </div>

                    <div>
                      <Label htmlFor="inquiry-type">Type of Inquiry *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the type of your inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nomination">Nomination Questions</SelectItem>
                          <SelectItem value="awards">Award Categories</SelectItem>
                          <SelectItem value="evaluation">Evaluation Process</SelectItem>
                          <SelectItem value="donation">Donation Inquiries</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief subject of your message" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} />
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">Quick answers to common questions about our awards program</p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center font-[family-name:var(--font-space-grotesk)]">
                      <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                      How do I submit a nomination?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Visit our{" "}
                      <Link href="/nominate" className="text-primary hover:underline">
                        nomination page
                      </Link>{" "}
                      to access the comprehensive form. You'll need to provide detailed information about the nominee,
                      supporting documents, and references.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center font-[family-name:var(--font-space-grotesk)]">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      What are the evaluation criteria?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      All nominations are evaluated based on four key parameters: Innovation & Originality (30%), Impact
                      & Outcomes (30%), Sustainability & Scalability (20%), and Leadership & Community Value (20%). View
                      our{" "}
                      <Link href="/rules" className="text-primary hover:underline">
                        guidelines page
                      </Link>{" "}
                      for details.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center font-[family-name:var(--font-space-grotesk)]">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      How long does the evaluation process take?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The evaluation process typically takes 14-21 days from the submission deadline. Our expert
                      committee carefully reviews each nomination to ensure fair and thorough assessment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center font-[family-name:var(--font-space-grotesk)]">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Can I make a donation to support your mission?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Yes! We welcome donations to support our mission of recognizing excellence and fostering positive
                      change. Visit our{" "}
                      <Link href="/donate" className="text-primary hover:underline">
                        donation page
                      </Link>{" "}
                      to learn more about how your contribution makes a difference.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center font-[family-name:var(--font-space-grotesk)]">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Do you have physical offices?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We operate primarily as a digital organization to maximize our impact and reach. For specific
                      location-based inquiries or meetings, please contact us directly and we'll arrange accordingly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Additional Support</h2>
            <p className="text-lg text-muted-foreground">Explore other ways to get the help you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides and documentation for all our processes
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/rules">View Guidelines</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Award Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore all available award categories and their specific criteria
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/categories">Browse Categories</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Start Nomination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to nominate? Begin the nomination process right away
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/nominate">Start Nominating</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Response Time Commitment
                </h3>
              </div>
              <p className="text-muted-foreground">
                We are committed to responding to all inquiries within <strong>24 hours</strong> during business days.
                For urgent matters, please call our support hotline for immediate assistance. Thank you for your
                patience and for supporting our mission to recognize excellence in education, research, and social
                impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
