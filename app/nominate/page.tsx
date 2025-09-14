import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Award,
  Trophy,
  ArrowLeft,
  Upload,
  FileText,
  User,
  Building,
  Globe,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function NominatePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-[family-name:var(--font-space-grotesk)]">
            Submit a Nomination
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
            Nominate outstanding individuals, institutions, or community initiatives that exemplify excellence in
            education, research, and social impact. Both self-nominations and third-party nominations are welcome.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 px-4 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
            Nomination Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Complete Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fill out the nomination form with detailed information about the nominee and their contributions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Upload Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Attach supporting documents including CV, impact reports, testimonials, and publications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Expert Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our expert committee evaluates nominations based on innovation, impact, and sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nomination Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <form className="space-y-8">
            {/* Award Category Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <Award className="h-5 w-5 mr-2" />
                  Award Category
                </CardTitle>
                <CardDescription>Select the award category that best fits the nomination</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <Label htmlFor="category">Award Category *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an award category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tagore">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Rabindranath Tagore Award - Excellence in Teaching
                        </div>
                      </SelectItem>
                      <SelectItem value="radhakrishnan">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Dr. Sarvepalli Radhakrishnan Award - Inspiring Educators
                        </div>
                      </SelectItem>
                      <SelectItem value="kalam">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Dr. A.P.J. Abdul Kalam Award - Research Excellence
                        </div>
                      </SelectItem>
                      <SelectItem value="bhabha">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Homi Bhabha Young Researcher Award
                        </div>
                      </SelectItem>
                      <SelectItem value="aryabhata">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Aryabhata Award - Scientific Contribution
                        </div>
                      </SelectItem>
                      <SelectItem value="charaka">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Charaka Award - Social Impact Research
                        </div>
                      </SelectItem>
                      <SelectItem value="vivekananda">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Swami Vivekananda Award - Lifelong Learning
                        </div>
                      </SelectItem>
                      <SelectItem value="savitribai">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Savitribai Phule Award - Adult Education
                        </div>
                      </SelectItem>
                      <SelectItem value="anand">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Anand Kumar (Super 30) Award - Learning Without Barriers
                        </div>
                      </SelectItem>
                      <SelectItem value="bose">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          J.C. Bose Award - Skill Innovation
                        </div>
                      </SelectItem>
                      <SelectItem value="youth">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Youth Skill Shakti Award
                        </div>
                      </SelectItem>
                      <SelectItem value="teresa">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Mother Teresa Award - Educational Service
                        </div>
                      </SelectItem>
                      <SelectItem value="nalanda">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Nalanda Award - Institutional Academic Excellence
                        </div>
                      </SelectItem>
                      <SelectItem value="vishwakarma">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Vishwakarma Award - Skill Development
                        </div>
                      </SelectItem>
                      <SelectItem value="sen">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          Amartya Sen Sustainable Futures Award
                        </div>
                      </SelectItem>
                      <SelectItem value="vinoba">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          Vinoba Bhave Award - Community Education
                        </div>
                      </SelectItem>
                      <SelectItem value="ambedkar">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          B.R. Ambedkar Award - Social Justice through Education
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Nominee Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Nominee Information</CardTitle>
                <CardDescription>
                  Provide details about the person, institution, or initiative being nominated
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nominee-name">Full Name / Organization Name *</Label>
                    <Input id="nominee-name" placeholder="Enter full name or organization name" />
                  </div>
                  <div>
                    <Label htmlFor="nominee-title">Title / Position</Label>
                    <Input id="nominee-title" placeholder="e.g., Professor, Director, Founder" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nominee-email">Email Address</Label>
                    <Input id="nominee-email" type="email" placeholder="nominee@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="nominee-phone">Phone Number</Label>
                    <Input id="nominee-phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="nominee-organization">Organization / Institution</Label>
                  <Input id="nominee-organization" placeholder="Current organization or institution" />
                </div>

                <div>
                  <Label htmlFor="nominee-address">Address</Label>
                  <Textarea
                    id="nominee-address"
                    placeholder="Full address including city, state, and country"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nomination Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Nomination Details</CardTitle>
                <CardDescription>Describe the nominee's contributions and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="nomination-summary">Nomination Summary *</Label>
                  <Textarea
                    id="nomination-summary"
                    placeholder="Provide a brief summary of why this nominee deserves recognition (500 words max)"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="key-achievements">Key Achievements *</Label>
                  <Textarea
                    id="key-achievements"
                    placeholder="List the nominee's most significant achievements and contributions (1000 words max)"
                    rows={6}
                  />
                </div>

                <div>
                  <Label htmlFor="impact-description">Impact Description *</Label>
                  <Textarea
                    id="impact-description"
                    placeholder="Describe the measurable impact of the nominee's work on education, research, or society (1000 words max)"
                    rows={6}
                  />
                </div>

                <div>
                  <Label htmlFor="innovation-aspects">Innovation and Uniqueness</Label>
                  <Textarea
                    id="innovation-aspects"
                    placeholder="Explain what makes this nominee's approach innovative or unique (500 words max)"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nominator Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Nominator Information</CardTitle>
                <CardDescription>Your contact information (will be kept confidential)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nominator-name">Your Full Name *</Label>
                    <Input id="nominator-name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="nominator-title">Your Title / Position</Label>
                    <Input id="nominator-title" placeholder="Your professional title" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nominator-email">Your Email Address *</Label>
                    <Input id="nominator-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="nominator-phone">Your Phone Number</Label>
                    <Input id="nominator-phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="nominator-organization">Your Organization</Label>
                  <Input id="nominator-organization" placeholder="Your current organization" />
                </div>

                <div>
                  <Label htmlFor="relationship">Relationship to Nominee *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your relationship to the nominee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self-nomination</SelectItem>
                      <SelectItem value="colleague">Colleague</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                      <SelectItem value="student">Student/Former Student</SelectItem>
                      <SelectItem value="peer">Professional Peer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Supporting Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <FileText className="h-5 w-5 mr-2" />
                  Supporting Documents
                </CardTitle>
                <CardDescription>
                  Upload relevant documents to support the nomination (PDF format preferred)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Recommended documents:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Curriculum Vitae (CV) or Resume</li>
                    <li>Letters of recommendation or testimonials</li>
                    <li>Publications, research papers, or reports</li>
                    <li>Awards and recognition certificates</li>
                    <li>Impact reports or case studies</li>
                    <li>Media coverage or press releases</li>
                  </ul>
                  <p className="text-xs mt-2">
                    Maximum file size: 10MB per file. Accepted formats: PDF, DOC, DOCX, JPG, PNG
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* References Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">References</CardTitle>
                <CardDescription>
                  Provide two references who can speak to the nominee's qualifications and achievements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Reference 1</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref1-name">Full Name *</Label>
                      <Input id="ref1-name" placeholder="Reference full name" />
                    </div>
                    <div>
                      <Label htmlFor="ref1-title">Title / Position *</Label>
                      <Input id="ref1-title" placeholder="Professional title" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="ref1-email">Email Address *</Label>
                      <Input id="ref1-email" type="email" placeholder="reference@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="ref1-phone">Phone Number</Label>
                      <Input id="ref1-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="ref1-organization">Organization</Label>
                    <Input id="ref1-organization" placeholder="Reference's organization" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="ref1-relationship">Relationship to Nominee *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supervisor">Supervisor</SelectItem>
                        <SelectItem value="colleague">Colleague</SelectItem>
                        <SelectItem value="collaborator">Research Collaborator</SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="peer">Professional Peer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Reference 2</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ref2-name">Full Name *</Label>
                      <Input id="ref2-name" placeholder="Reference full name" />
                    </div>
                    <div>
                      <Label htmlFor="ref2-title">Title / Position *</Label>
                      <Input id="ref2-title" placeholder="Professional title" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="ref2-email">Email Address *</Label>
                      <Input id="ref2-email" type="email" placeholder="reference@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="ref2-phone">Phone Number</Label>
                      <Input id="ref2-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="ref2-organization">Organization</Label>
                    <Input id="ref2-organization" placeholder="Reference's organization" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="ref2-relationship">Relationship to Nominee *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supervisor">Supervisor</SelectItem>
                        <SelectItem value="colleague">Colleague</SelectItem>
                        <SelectItem value="collaborator">Research Collaborator</SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="peer">Professional Peer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                  <Checkbox id="accuracy" />
                  <Label htmlFor="accuracy" className="text-sm leading-relaxed">
                    I certify that all information provided in this nomination is accurate and complete to the best of
                    my knowledge. I understand that any false or misleading information may result in disqualification.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I have obtained consent from the nominee (if applicable) to submit this nomination and share their
                    information with the awards committee for evaluation purposes.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="references" />
                  <Label htmlFor="references" className="text-sm leading-relaxed">
                    I confirm that the references provided have agreed to be contacted by the awards committee and can
                    speak to the nominee's qualifications and achievements.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link href="/rules" className="text-primary hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/rules#privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    of the Navdisha Awards. I understand that submitted materials will not be returned.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="evaluation" />
                  <Label htmlFor="evaluation" className="text-sm leading-relaxed">
                    I understand that the evaluation process is confidential and that the decision of the awards
                    committee is final. I acknowledge that there is a registration fee that covers evaluation charges
                    and donations towards social welfare activities.
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6">
                <CheckCircle className="h-5 w-5 mr-2" />
                Submit Nomination
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Need Help?</h2>
            <p className="text-muted-foreground">Have questions about the nomination process? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Review detailed nomination guidelines and criteria for each award category.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/rules">View Guidelines</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore all award categories to find the best fit for your nomination.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/categories">View Categories</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get personalized assistance from our awards team.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
