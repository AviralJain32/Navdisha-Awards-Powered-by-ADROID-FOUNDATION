import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, AlertTriangle, Shield, RefreshCw, Scale, CheckCircle, XCircle, Info } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function RulesPage() {
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
            Guidelines, Rules & Regulations
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
            Comprehensive guidelines and regulations governing the Navdisha Awards to ensure fairness, transparency, and
            consistency in the award selection process.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 px-4 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
            Quick Navigation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center bg-transparent" asChild>
              <a href="#guidelines">
                <FileText className="h-6 w-6 mb-2" />
                Award Guidelines
              </a>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center bg-transparent" asChild>
              <a href="#evaluation">
                <Scale className="h-6 w-6 mb-2" />
                Evaluation Process
              </a>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center bg-transparent" asChild>
              <a href="#rejection">
                <XCircle className="h-6 w-6 mb-2" />
                Rejection Policy
              </a>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center bg-transparent" asChild>
              <a href="#refund">
                <RefreshCw className="h-6 w-6 mb-2" />
                Refund Policy
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Award Guidelines */}
      <section id="guidelines" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Award Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Framework to ensure fairness, transparency, and consistency in the award selection process
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <Info className="h-5 w-5 mr-2" />
                  Purpose and Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Guidelines Framework</h4>
                    <p className="text-muted-foreground text-sm">
                      Guidelines for awards are a set of instructions and criteria that outline the process and
                      requirements for granting an award. These guidelines serve as a framework to ensure fairness,
                      transparency, and consistency in the award selection process. They provide detailed information on
                      the eligibility criteria, evaluation criteria, and the application process for individuals or
                      organizations seeking to be considered for an award.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Integrity and Credibility</h4>
                    <p className="text-muted-foreground text-sm">
                      The guidelines for awards play a crucial role in maintaining the integrity and credibility of the
                      awarding process. They help to establish clear expectations and standards for both the applicants
                      and the awarding body. These guidelines often include information on the specific objectives and
                      purpose of the award, the desired outcomes, and the impact it aims to achieve.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Selection Committee</h4>
                    <p className="text-muted-foreground text-sm">
                      The guidelines include information on the composition of the selection committee or judging panel,
                      their expertise, and the evaluation process they will follow. This ensures that the selection
                      process is conducted by qualified individuals who possess the necessary knowledge and experience
                      to assess the applications fairly and impartially.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Core Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">4. Clear Criteria Definition</h4>
                    <p className="text-muted-foreground text-sm">
                      It is important to clearly define the criteria for the award, including the purpose, eligibility
                      requirements, and specific qualities or achievements that the recipient should possess. This
                      ensures that the award is given to those who truly deserve it and prevents any confusion or bias.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. Impartial Selection</h4>
                    <p className="text-muted-foreground text-sm">
                      The selection process should be impartial and free from any kind of favoritism. This is achieved
                      by having a diverse and unbiased panel of judges who are knowledgeable and experienced in the
                      field of the award.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">6. Timely Recognition</h4>
                    <p className="text-muted-foreground text-sm">
                      The timing of the award should be carefully considered to ensure that the recipient and their
                      achievements are still relevant and fresh in people's minds, adding to the significance of the
                      award.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">7. Inclusive and Diverse</h4>
                    <p className="text-muted-foreground text-sm">
                      The award should be inclusive and diverse, recognizing individuals from different backgrounds,
                      cultures, and genders, considering a variety of achievements and contributions while giving equal
                      opportunities to all nominees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <Shield className="h-5 w-5 mr-2" />
                  Transparency and Modifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">8. Transparency Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      Transparency is crucial when it comes to awarding. All decisions and processes should be clearly
                      communicated to the nominees and the public. This includes the criteria for selection, the judging
                      process, and the reasons for selecting the recipient.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">9. Modification Rights</h4>
                    <p className="text-muted-foreground text-sm">
                      The organization reserves the right to modify, adjust, and alter the designs, content of
                      documents, website articles, certificates, trophy models and award letters as deemed necessary to
                      maintain the quality and relevance of the awards program.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evaluation Process */}
      <section id="evaluation" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Evaluation Parameters
            </h2>
            <p className="text-lg text-muted-foreground">
              Standardized criteria used to assess all nominations fairly and consistently
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                Standard Evaluation Criteria
              </CardTitle>
              <CardDescription>All nominations are evaluated based on these four key parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      30%
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation & Originality</h4>
                      <p className="text-sm text-muted-foreground">
                        Uniqueness of approach, creative solutions, and novel contributions to the field
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      30%
                    </div>
                    <div>
                      <h4 className="font-semibold">Impact & Outcomes</h4>
                      <p className="text-sm text-muted-foreground">
                        Measurable results, positive changes, and tangible benefits to society or field
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      20%
                    </div>
                    <div>
                      <h4 className="font-semibold">Sustainability & Scalability</h4>
                      <p className="text-sm text-muted-foreground">
                        Long-term viability, potential for replication, and continued impact
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-muted text-muted-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      20%
                    </div>
                    <div>
                      <h4 className="font-semibold">Leadership & Community Value</h4>
                      <p className="text-sm text-muted-foreground">
                        Leadership qualities, community engagement, and value to stakeholders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Data Accuracy Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">10. Information Accuracy</h4>
                <p className="text-muted-foreground text-sm">
                  It is imperative that applicants provide accurate information when submitting their nominations. Once
                  a data verification certificate or award letter has been issued, no modifications can be made to the
                  information provided. Any requests for changes will be treated as new applications, necessitating a
                  complete re-evaluation of the submission.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">11. File Retention Policy</h4>
                <p className="text-muted-foreground text-sm">
                  Applicants bear full responsibility for the safekeeping of their certificates or award letters. Our
                  organization retains files in the database for a limited period of 14 days, after which they are
                  permanently deleted. Any requests for reissuance of a certificate after this timeframe will be
                  regarded as new applications, requiring the applicant to undergo the entire application process again.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rejection and Disqualification */}
      <section id="rejection" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Rejection and Disqualification
            </h2>
            <p className="text-lg text-muted-foreground">
              Policies governing application rejection and candidate disqualification
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                  Foundation Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">12. Exemplary Model Requirement</h4>
                  <p className="text-muted-foreground text-sm">
                    The Adroid Foundation is dedicated to recognizing and honoring individuals or institutions that
                    serve as exemplary models for society. The foundation carefully evaluates the profiles and biodata
                    provided by the applicants. It is crucial for applicants to provide accurate and truthful
                    information, as any discrepancies discovered by the award committee may lead to rejection and
                    disqualification from consideration.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">13. Payment Manipulation Policy</h4>
                  <p className="text-muted-foreground text-sm">
                    As part of the application process, there is a registration fee that covers evaluation charges and
                    donations towards the organization's social welfare activities. Any attempt by an applicant to
                    manipulate or misuse payment slips by submitting multiple applications will not be tolerated. The
                    award committee has the authority to thoroughly investigate such cases and, if found guilty, reject
                    and disqualify the application.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">14. No Refund for Disqualification</h4>
                  <p className="text-muted-foreground text-sm">
                    Disqualified applicants are not eligible for a refund or cancellation of their application. Once an
                    applicant has been disqualified, they will not be able to receive a refund for any fees paid or have
                    their application cancelled. It is important for applicants to carefully review the eligibility
                    criteria and requirements before submitting their application.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">15. False Information Policy</h4>
                  <p className="text-muted-foreground text-sm">
                    The foundation relies on the information provided by applicants in their profiles and biodata to
                    make informed decisions. Any false or misleading information will not be tolerated. If the award
                    committee discovers any inaccuracies or fabrications, they reserve the right to reject and
                    disqualify the applicant from receiving the award.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Disqualification Grounds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Badge variant="destructive" className="w-fit">
                    Automatic Disqualification
                  </Badge>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Providing false or misleading information</li>
                    <li>• Submitting fake qualifications or achievements</li>
                    <li>• Financial malpractice (multiple entries with same payment slip)</li>
                    <li>• Misrepresentation of facts or credentials</li>
                    <li>• Violation of terms and conditions</li>
                    <li>• Failure to meet basic eligibility requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section id="refund" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Refund Policy
            </h2>
            <p className="text-lg text-muted-foreground">
              Terms and conditions governing refunds for award applications
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <RefreshCw className="h-5 w-5 mr-2 text-green-600" />
                  Eligible Refund Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">16. Delivery Timeline Refunds</h4>
                  <p className="text-muted-foreground text-sm">
                    Our refund policy ensures that customers are eligible for a refund if the organization fails to
                    deliver digital products/materials within 14 days or physical products/materials within 21 days. To
                    initiate a refund, simply send an email to Support@adroid.foundation and our team will assist you
                    promptly.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refund Timeline</h5>
                  <div className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    <p>• Digital materials: 14 days maximum delivery</p>
                    <p>• Physical materials: 21 days maximum delivery</p>
                    <p>• Contact: Support@adroid.foundation for refund requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-[family-name:var(--font-space-grotesk)]">
                  <XCircle className="h-5 w-5 mr-2 text-destructive" />
                  Non-Refundable Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">17. Disqualification Exclusions</h4>
                  <p className="text-muted-foreground text-sm">
                    Our refund policy does not apply if an applicant is disqualified or banned due to a violation of our
                    rules and regulations. Instances of misrepresentation, providing false information, fake
                    qualifications or achievements, and financial malpractice can result in permanent disqualification
                    from refund eligibility.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">No Refund Scenarios</h5>
                  <div className="space-y-1 text-sm text-red-700 dark:text-red-300">
                    <p>• Application disqualification due to rule violations</p>
                    <p>• Providing false or misleading information</p>
                    <p>• Fake qualifications or achievements</p>
                    <p>• Financial malpractice or payment manipulation</p>
                    <p>• Violation of terms and conditions</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">18. Fair and Transparent Process</h4>
                  <p className="text-muted-foreground text-sm">
                    We prioritize maintaining a fair and transparent process for all applicants. The refund policy is
                    designed to protect both the integrity of the awards program and the interests of genuine applicants
                    who follow all guidelines and requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Questions About Our Policies?
          </h2>
          <p className="text-muted-foreground mb-8">
            If you have any questions about our guidelines, rules, or policies, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/nominate">Start Your Nomination</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
