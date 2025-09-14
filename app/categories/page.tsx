import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, ArrowLeft, Users, Building, Globe } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function CategoriesPage() {
  const categories = [
    {
      type: "Individual",
      icon: Users,
      color: "bg-blue-500",
      awards: [
        {
          name: "Rabindranath Tagore Award",
          subtitle: "Excellence in Teaching",
          description:
            "Honors educators who transform classrooms into spaces of creativity, imagination, and holistic learning. This award celebrates teachers who move beyond rote learning, integrating art, culture, and critical thinking into education.",
          criteria: [
            "Pedagogical innovation (30%)",
            "Student/peer testimonials (25%)",
            "Contribution to holistic development (25%)",
            "Recognition/awards/publications (20%)",
          ],
          eligibility: "Teachers, professors, and educators with a minimum of 5 years' teaching experience",
        },
        {
          name: "Dr. Sarvepalli Radhakrishnan Award",
          subtitle: "Inspiring Educators",
          description:
            "A lifetime achievement award celebrating educators who have devoted their careers to nurturing young minds, mentoring students, and shaping future leaders with ethics, wisdom, and values.",
          criteria: [
            "Years of dedicated service (25%)",
            "Demonstrated leadership (25%)",
            "Mentorship & student success stories (25%)",
            "National/international recognition (25%)",
          ],
          eligibility: "Educators with 20+ years of outstanding service",
        },
        {
          name: "Dr. A.P.J. Abdul Kalam Award",
          subtitle: "Research Excellence",
          description:
            "Recognizes researchers whose impactful and innovative contributions advance science, technology, or education while addressing real-world challenges with purpose and societal benefit.",
          criteria: [
            "Research innovation (30%)",
            "Practical impact (30%)",
            "Publications/citations/patents (25%)",
            "Collaborative/mentorship role (15%)",
          ],
          eligibility: "Researchers from academia, R&D labs, or industry",
        },
        {
          name: "Homi Bhabha Young Researcher Award",
          subtitle: "Young Research Excellence",
          description:
            "Celebrates early-career researchers who demonstrate originality, leadership potential, and groundbreaking contributions in their field, encouraging young scholars to push boundaries and innovate.",
          criteria: [
            "Novelty of research (40%)",
            "Early recognition/awards (20%)",
            "Publications/impact factor (20%)",
            "Potential for long-term impact (20%)",
          ],
          eligibility: "Researchers under 40 years of age",
        },
        {
          name: "Aryabhata Award",
          subtitle: "Scientific Contribution",
          description:
            "Presented to individuals who achieve significant advancements in mathematics, science, or technology, honoring contributions that expand human knowledge and foster innovation.",
          criteria: [
            "Original contribution (40%)",
            "Long-term relevance (30%)",
            "Recognition by scientific community (30%)",
          ],
          eligibility: "Scientists, mathematicians, and technology innovators",
        },
        {
          name: "Charaka Award",
          subtitle: "Social Impact Research",
          description:
            "Recognizes researchers whose work directly addresses pressing societal challenges in healthcare, sustainability, education, or poverty alleviation with knowledge that heals and transforms communities.",
          criteria: [
            "Direct community benefit (40%)",
            "Sustainability of outcomes (30%)",
            "Policy/social adoption (30%)",
          ],
          eligibility: "Researchers and social innovators",
        },
        {
          name: "Swami Vivekananda Award",
          subtitle: "Lifelong Learning",
          description:
            "Celebrates individuals who continuously seek knowledge and personal growth, embodying resilience, curiosity, and the pursuit of wisdom regardless of age or circumstance.",
          criteria: ["Lifelong pursuit of learning (40%)", "Demonstrated adaptability (30%)", "Inspiring others (30%)"],
          eligibility: "Professionals, entrepreneurs, or individuals pursuing continuous learning",
        },
        {
          name: "Savitribai Phule Award",
          subtitle: "Adult Education",
          description:
            "Honors individuals advancing literacy, empowerment, and educational access for adults, especially women and marginalized groups, breaking cycles of illiteracy and uplifting communities.",
          criteria: [
            "Number of learners impacted (40%)",
            "Inclusivity focus (30%)",
            "Sustainability & innovation (30%)",
          ],
          eligibility: "Social workers, teachers, or literacy activists",
        },
        {
          name: "Anand Kumar (Super 30) Award",
          subtitle: "Learning Without Barriers",
          description:
            "Recognizes educators or organizations that break economic, social, or geographic barriers to education, ensuring underprivileged learners receive equal opportunities to realize their potential.",
          criteria: [
            "Socio-economic inclusion (40%)",
            "Student success outcomes (30%)",
            "Innovative teaching methods (30%)",
          ],
          eligibility: "Educators or organizations serving underprivileged learners",
        },
        {
          name: "J.C. Bose Award",
          subtitle: "Skill Innovation",
          description:
            "Honors innovative approaches to skill training, applied sciences, and hands-on education, celebrating creativity in bridging theory with practical application including digital technologies.",
          criteria: ["Innovation (40%)", "Applicability (30%)", "Scalability (30%)"],
          eligibility: "Trainers, innovators, or educators in applied learning",
        },
        {
          name: "Youth Skill Shakti Award",
          subtitle: "Empowering Future Generations",
          description:
            "Recognizes leaders equipping young people with entrepreneurial, technological, and soft skills essential for the 21st century, preparing youth to be job creators and responsible global citizens.",
          criteria: ["Youth outreach (40%)", "Skill relevance (30%)", "Documented outcomes (30%)"],
          eligibility: "Trainers, youth leaders, or skill educators",
        },
        {
          name: "Mother Teresa Award",
          subtitle: "Educational Service",
          description:
            "Celebrates individuals who dedicate themselves selflessly to teaching and serving underprivileged communities with love, care, and humility, making education accessible to all.",
          criteria: [
            "Commitment to underserved communities (40%)",
            "Volunteerism (30%)",
            "Impact on learners' lives (30%)",
          ],
          eligibility: "Volunteers, teachers, or individuals dedicated to underserved groups",
        },
      ],
    },
    {
      type: "Institutional",
      icon: Building,
      color: "bg-green-500",
      awards: [
        {
          name: "Nalanda Award",
          subtitle: "Institutional Academic Excellence",
          description:
            "Recognizes schools, colleges, or universities that achieve outstanding academic results while nurturing innovation, inclusivity, and cultural values, balancing tradition and modernity.",
          criteria: [
            "Academic outcomes (30%)",
            "Innovation in curriculum (30%)",
            "Community/student engagement (20%)",
            "Accreditations/recognition (20%)",
          ],
          eligibility: "Schools, colleges, and universities",
        },
        {
          name: "Vishwakarma Award",
          subtitle: "Skill Development (Institutional)",
          description:
            "Honors training centers, polytechnics, or universities that excel in hands-on technical education, vocational courses, and industry-linked skill development programs with high employability outcomes.",
          criteria: [
            "Industry collaborations (30%)",
            "Skill development impact (30%)",
            "Employability outcomes (25%)",
            "Sustainability of training programs (15%)",
          ],
          eligibility: "Training centers, polytechnics, universities",
        },
        {
          name: "Amartya Sen Sustainable Futures Award",
          subtitle: "Sustainable Development",
          description:
            "Presented to institutions pioneering sustainable education models, combining research, policy, and social action to foster inclusive growth, equity, and environmental responsibility.",
          criteria: ["Alignment with SDGs (40%)", "Long-term sustainability (30%)", "Policy/community adoption (30%)"],
          eligibility: "Institutions integrating education, sustainability, and policy",
        },
      ],
    },
    {
      type: "Community",
      icon: Globe,
      color: "bg-purple-500",
      awards: [
        {
          name: "Vinoba Bhave Award",
          subtitle: "Community Education",
          description:
            "Recognizes NGOs, grassroots leaders, or social enterprises that spread education in underserved rural or marginalized communities, celebrating community-driven education that uplifts society.",
          criteria: ["Community reach (40%)", "Literacy/education outcomes (30%)", "Sustainability & innovation (30%)"],
          eligibility: "NGOs, foundations, social enterprises",
        },
        {
          name: "B.R. Ambedkar Award",
          subtitle: "Social Justice through Education",
          description:
            "Honors organizations that use education as a tool to promote equality, dignity, and social justice, empowering marginalized groups and ensuring education as a universal right.",
          criteria: [
            "Social justice impact (40%)",
            "Inclusivity of marginalized groups (30%)",
            "Long-term community transformation (30%)",
          ],
          eligibility: "NGOs, activists, or initiatives advancing equity",
        },
      ],
    },
  ]

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
            Award Categories
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
            Discover our comprehensive award categories, each named after India's greatest visionaries and designed to
            honor excellence across different domains of education, research, and social impact.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {categories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={category.type} className={categoryIndex > 0 ? "mt-20" : ""}>
                <div className="flex items-center mb-8">
                  <div className={`${category.color} rounded-full p-3 mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
                      {category.type} Awards
                    </h2>
                    <p className="text-muted-foreground">
                      {category.type === "Individual" && "Recognizing outstanding individuals making a difference"}
                      {category.type === "Institutional" && "Honoring institutions driving systemic change"}
                      {category.type === "Community" && "Celebrating grassroots initiatives and community impact"}
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {category.awards.map((award, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <Badge
                            variant={
                              category.type === "Individual"
                                ? "outline"
                                : category.type === "Institutional"
                                  ? "secondary"
                                  : "default"
                            }
                            className="mb-2"
                          >
                            {category.type}
                          </Badge>
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-[family-name:var(--font-space-grotesk)]">
                          {award.name}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {award.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{award.description}</p>

                        <div>
                          <h4 className="font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                            Evaluation Parameters
                          </h4>
                          <ul className="space-y-2">
                            {award.criteria.map((criterion, criterionIndex) => (
                              <li key={criterionIndex} className="flex items-start">
                                <Star className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{criterion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                            Eligibility
                          </h4>
                          <p className="text-sm text-muted-foreground">{award.eligibility}</p>
                        </div>

                        <Button className="w-full" asChild>
                          <Link href="/nominate">Nominate for this Award</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Ready to Make a Nomination?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Help us recognize outstanding contributions to education, research, and social impact. Both self-nominations
            and third-party nominations are welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/nominate">
                <Award className="h-5 w-5 mr-2" />
                Start Nomination
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Learn More About Awards</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
