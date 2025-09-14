import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Lightbulb, Heart, Star, Calendar, Mail } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Open for Nominations Year-Round
          </Badge>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/navdisha-logo.png"
              alt="Navdisha Awards by Adroid Foundation"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance font-[family-name:var(--font-space-grotesk)]">
            Navdisha Awards for Education, Research & Social Impact
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-4 font-[family-name:var(--font-space-grotesk)] font-medium">
            "Honoring Global Excellence with Indian Wisdom"
          </p>
          <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg p-4 mb-6 inline-block">
            <p className="text-xl font-bold text-secondary">Powered by</p>
            <p className="text-2xl font-bold text-primary">ADROID FOUNDATION</p>
          </div>

          <p className="text-lg text-muted-foreground mb-2">
            Recognizing excellence in education, research, lifelong learning, skill development, and community
            engagement.
          </p>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            The Navdisha Awards for Education, Research & Social Impact recognize excellence in education, research,
            lifelong learning, skill development, and community engagement. These awards celebrate individuals,
            institutions, and organizations that embody the spirit of innovation, equity, and service in education and
            social transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/nominate">
                <Award className="h-5 w-5 mr-2" />
                Nominate Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/categories">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              About the Awards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Celebrating excellence in education, research, lifelong learning, skill development, and community
              engagement through awards named after India's greatest luminaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Education Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognizing transformative teaching practices and innovative educational approaches that inspire
                  creativity and critical thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Research Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Honoring groundbreaking research that advances science, technology, and addresses real-world
                  challenges with societal impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Celebrating community-driven initiatives that promote equality, inclusion, and sustainable development
                  through education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section id="categories" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Award Categories
            </h2>
            <p className="text-lg text-muted-foreground">Awards named after India's greatest visionaries and leaders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Individual Awards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Individual
                </Badge>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Rabindranath Tagore Award
                </CardTitle>
                <CardDescription>Excellence in Teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transformative classroom practices inspiring creativity and critical thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Individual
                </Badge>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Dr. A.P.J. Abdul Kalam Award
                </CardTitle>
                <CardDescription>Research Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Innovative, impactful research with significant societal benefit.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Individual
                </Badge>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Swami Vivekananda Award
                </CardTitle>
                <CardDescription>Lifelong Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Commitment to lifelong growth and self-improvement.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Institutional
                </Badge>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Nalanda Award</CardTitle>
                <CardDescription>Academic Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  High-quality, inclusive, and innovative education institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Institutional
                </Badge>
                <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                  Amartya Sen Award
                </CardTitle>
                <CardDescription>Sustainable Futures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advancing sustainability through education and research.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">Community</Badge>
                <CardTitle className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
                  B.R. Ambedkar Award
                </CardTitle>
                <CardDescription>Social Justice through Education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Promoting equality and inclusion through educational initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/categories">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nomination Process */}
      <section id="nominate" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Nomination Process
            </h2>
            <p className="text-lg text-muted-foreground">Simple steps to nominate deserving candidates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">Submit Form</h3>
              <p className="text-muted-foreground">
                Complete the nomination form with detailed information about the candidate.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Attach Documents
              </h3>
              <p className="text-muted-foreground">
                Include CV, impact reports, testimonials, and relevant publications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">Evaluation</h3>
              <p className="text-muted-foreground">
                Expert committee evaluates based on innovation, impact, and sustainability.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Ready to Nominate?</CardTitle>
                <CardDescription>Self-nominations and third-party nominations are welcome</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/nominate">
                    <Calendar className="h-5 w-5 mr-2" />
                    Start Nomination
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/navdisha-logo.png"
                  alt="Navdisha Awards by Adroid Foundation"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
                    Navdisha Awards
                  </h3>
                  <p className="text-sm font-semibold text-secondary">by Adroid Foundation</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Honoring Global Excellence with Indian Wisdom. Recognizing outstanding contributions in education,
                research, and social impact.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/donation">Donate</Link>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-primary transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/nominate" className="hover:text-primary transition-colors">
                    Nomination Process
                  </Link>
                </li>
                <li>
                  <Link href="/rules" className="hover:text-primary transition-colors">
                    Guidelines & Rules
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/rules" className="hover:text-primary transition-colors">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/donation" className="hover:text-primary transition-colors">
                    Donation
                  </Link>
                </li>
                <li>
                  <Link href="/rules#refund" className="hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 Navdisha Awards.{" "}
              <span className="font-semibold text-secondary">Powered by Adroid Foundation.</span> All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
