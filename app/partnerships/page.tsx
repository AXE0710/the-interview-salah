import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Building2,
  GraduationCap,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
          </div>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partnerships That <span className="text-blue-600">Empower Success</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join leading organizations using our AI-powered interview platform to prepare talent, improve hiring
            outcomes, and build inclusive workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/contact/enterprise">Become a Partner</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/demo/enterprise">Enterprise Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every type of organization and career development need
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Enterprise/Employer Partnerships */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Enterprise & Employers</CardTitle>
                <CardDescription>Integrate with your hiring and talent development processes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">ATS Integration & Candidate Screening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Employee Interview Skills Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Diversity & Inclusion Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Custom Interviewer Training Modules</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/enterprise">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* University Partnerships */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Universities & Career Centers</CardTitle>
                <CardDescription>Empower students with career-ready interview skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Student Success Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Career Center Analytics & Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Industry-Specific Practice Modules</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Alumni Mentorship Integration</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/universities">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bootcamp & EdTech */}
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Bootcamps & EdTech</CardTitle>
                <CardDescription>Enhance your curriculum with interview preparation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">White-Label Platform Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">API Integration & Custom Branding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Student Progress Tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Graduation Readiness Certificates</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/bootcamps">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-600">See how our partners are transforming career preparation</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">TechCorp Global</h3>
                    <p className="text-sm text-gray-600">Fortune 500 Technology Company</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 mb-4">
                  "The Interview Salah reduced our time-to-hire by 40% and improved candidate experience scores by 60%. The
                  diversity insights have been game-changing."
                </blockquote>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-gray-600">Faster Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-gray-600">Better Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">State University</h3>
                    <p className="text-sm text-gray-600">15,000+ Engineering Students</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 mb-4">
                  "Our career placement rate increased by 25% after implementing The Interview Salah. Students report feeling
                  significantly more confident in interviews."
                </blockquote>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-gray-600">Higher Placement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-gray-600">Student Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">CodeCamp Academy</h3>
                    <p className="text-sm text-gray-600">Leading Coding Bootcamp</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 mb-4">
                  "The white-label solution seamlessly integrated with our platform. Graduate job success rate improved
                  by 35% in the first quarter."
                </blockquote>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">35%</div>
                    <div className="text-gray-600">Job Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2 weeks</div>
                    <div className="text-gray-600">Integration Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600">Drive measurable outcomes with our proven platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-sm text-gray-600">
                Average 35% improvement in candidate success rates across all partner organizations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-sm text-gray-600">
                Supporting organizations across 25+ countries with localized content and cultural adaptation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated partnership managers and 24/7 technical support for seamless integration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rich Analytics</h3>
              <p className="text-sm text-gray-600">
                Comprehensive dashboards and insights to track impact and optimize career development programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Career Preparation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading organizations using AI to empower their talent and improve hiring outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/contact/partnership">Start Partnership Discussion</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/pricing/enterprise">View Enterprise Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
