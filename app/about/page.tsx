import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description: "Upholding transparency and ethical practices in all we do.",
      image: "/integrity-symbol-with-scales-of-justice.jpg",
    },
    {
      title: "Inclusivity",
      description: "Welcoming diversity and making education accessible to all.",
      image: "/diverse-group-of-people-holding-hands-in-unity.jpg",
    },
    {
      title: "Innovation",
      description: "Implementing forward-thinking methodologies in teaching and community development.",
      image: "/lightbulb-with-gears-representing-innovation.jpg",
    },
  ]

  return (
    <>
    <Navbar />
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-primary">About Adroid Foundation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming communities through education and honoring excellence through the Navdisha Awards
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide quality education accessible to every child and recognize outstanding contributions in
                  education, research, and social impact through the prestigious Navdisha Awards. We bridge the gap
                  between traditional education and real-world skills, inspired by proven pedagogical methodologies.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a world where education empowers every individual to reach their full potential, and where
                  excellence in education, research, and social transformation is celebrated and honored through the
                  Navdisha Awards, inspiring future generations of changemakers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey and Purpose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Journey */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/educational-journey-with-books-and-graduation-cap.jpg"
                  alt="Our Journey"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-primary">Our Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with the vision of transforming communities through education, Adroid Foundation was established
                to provide quality education accessible to every child. Inspired by the teachings of Japanese and
                Montessori pedagogies, our journey began with a mission to bridge the gap between traditional education
                and real-world skills.
              </p>
            </div>

            {/* Our Purpose */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/hands-reaching-towards-a-bright-future-with-educat.jpg"
                  alt="Our Purpose"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Our Purpose</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adroid Foundation is driven by the purpose of nurturing talents, encouraging creative expression, and
                building self-sufficiency through targeted educational and community initiatives. Through the Navdisha
                Awards, we honor those who embody these values and inspire others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardContent className="p-0">
                  {/* Value Image */}
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Value Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of our journey to transform education and celebrate excellence. Nominate deserving individuals for
            the Navdisha Awards or support our cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/nominate"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nominate Now
            </a>
            <a
              href="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Support Us
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
