import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CommitteePage() {
  const academicMembers = [
    {
      name: "Oscar Castillo",
      institution: "Tijuana Institute Technology, Tijuana, Mexico",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "Aboul Ella Hassanien",
      institution: "Cairo University, Egypt",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "George A. Tsihrintzis",
      institution: "University of Piraeus, Greece",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "Joel J. P. C. Rodrigues",
      institution: "Federal University of Piauí, Brazil",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "Ali Kashif Bashir",
      institution: "Manchester Metropolitan University, UK",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "Yang Xiao",
      institution: "The University of Alabama, USA",
      imageUrl: "/academic-portrait.png",
    },
    {
      name: "Deepak Gupta",
      institution: "Maharaja Agrasen Institute of Technology, Delhi",
      imageUrl: "/academic-portrait.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/navdisha-logo.png"
              alt="Navdisha Awards"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-space-grotesk)]">
            Award Expert Committee
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Distinguished experts from academia and industry who guide the Navdisha Awards selection process
          </p>
        </div>

        {/* Chair Person Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Chair Person</h2>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/professional-portrait-chairperson.jpg"
                    alt="Sh. Ravinder Gupta"
                    width={200}
                    height={200}
                    className="rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">Sh. Ravinder Gupta</h3>
                  <p className="text-lg text-secondary font-medium mb-4">Secretary, Adroid Foundation</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading the expert committee with extensive experience in education, research, and social impact
                    initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Members Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Members from Academics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="rounded-full object-cover mx-auto border-2 border-primary/20"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.institution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Members Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Members from Industry</h2>
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <Image
                  src="/coming-soon-industry-experts.jpg"
                  alt="Industry Members Coming Soon"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto border-2 border-secondary/20"
                />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">To Be Announced</h3>
              <p className="text-muted-foreground leading-relaxed">
                Distinguished industry leaders will be announced soon to complete our expert committee.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Our expert committee ensures the highest standards of evaluation and recognition for the Navdisha Awards.
          </p>
        </div>
      </div>
    </div>
  )
}
