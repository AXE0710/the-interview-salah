import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, TrendingUp, Building2, MapPin, Award, Quote, Target, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const featuredStories = [
    {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      timeToSuccess: "6 weeks",
      previousRole: "Junior Developer at startup",
      salaryIncrease: "+85%",
      story:
        "I was struggling with technical interviews at FAANG companies. The Interview Salah's real-time feedback on my problem-solving approach and communication style was a game-changer. The platform helped me identify gaps in my explanations and taught me to think out loud more effectively.",
      results: [
        "Received offers from Google, Meta, and Microsoft",
        "Improved technical communication score by 67%",
        "Reduced interview anxiety significantly",
        "Learned to structure answers using proven frameworks",
      ],
      testimonial:
        "The Interview Salah didn't just help me pass interviews - it made me a better communicator and problem solver overall.",
      tags: ["Technical", "FAANG", "Career Change"],
    },
    {
      name: "Marcus Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Senior Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      timeToSuccess: "8 weeks",
      previousRole: "Business Analyst",
      salaryIncrease: "+120%",
      story:
        "Transitioning from business analysis to product management required mastering behavioral interviews. The AI's feedback on my STAR responses and body language analysis helped me project the confidence and leadership presence that hiring managers were looking for.",
      results: [
        "Successfully transitioned to PM role",
        "Mastered behavioral interviewing techniques",
        "Developed executive presence and confidence",
        "Built a strong personal brand narrative",
      ],
      testimonial:
        "The behavioral interview coaching transformed how I tell my professional story. I now lead with impact and confidence.",
      tags: ["Behavioral", "Career Transition", "Leadership"],
    },
    {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Principal Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      timeToSuccess: "4 weeks",
      previousRole: "Data Scientist at fintech",
      salaryIncrease: "+65%",
      story:
        "As a non-native English speaker, I was concerned about communication barriers in interviews. The voice coaching and pronunciation feedback helped me speak more clearly and confidently. The cultural coaching for US tech companies was invaluable.",
      results: [
        "Improved English fluency and pronunciation",
        "Gained confidence in technical presentations",
        "Learned US tech industry interview customs",
        "Received multiple senior-level offers",
      ],
      testimonial: "The platform helped me overcome language barriers and showcase my technical expertise effectively.",
      tags: ["Voice Training", "Non-native Speaker", "Technical"],
    },
  ]

  const quickStats = [
    { metric: "85%", description: "Land job offers within 3 months", icon: Target },
    { metric: "40%", description: "Average salary increase", icon: TrendingUp },
    { metric: "95%", description: "Report increased confidence", icon: CheckCircle },
    { metric: "25K+", description: "Success stories and counting", icon: Users },
  ]

  const companyLogos = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Tesla",
    "Uber",
    "Spotify",
    "Adobe",
    "Salesforce",
    "Twitter",
    "LinkedIn",
    "Airbnb",
    "Stripe",
    "Zoom",
  ]

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
            Real People, <span className="text-blue-600">Real Success</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how thousands of professionals have transformed their careers with AI-powered interview preparation
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.metric}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600">Inspiring career transformations powered by AI coaching</p>
          </div>

          <div className="space-y-12">
            {featuredStories.map((story, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Profile */}
                    <div className="text-center lg:text-left">
                      <Avatar className="w-20 h-20 mx-auto lg:mx-0 mb-4">
                        <AvatarImage src={story.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-lg">
                          {story.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{story.role}</p>
                      <p className="text-gray-600 mb-2">{story.company}</p>
                      <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Previous Role:</span>
                          <span className="text-sm font-medium">{story.previousRole}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Time to Success:</span>
                          <span className="text-sm font-medium text-green-600">{story.timeToSuccess}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Salary Increase:</span>
                          <span className="text-sm font-bold text-green-600">{story.salaryIncrease}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {story.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Story Content */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-blue-600 mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">{story.story}</p>
                        <blockquote className="text-xl font-semibold text-blue-900 italic border-l-4 border-blue-500 pl-4">
                          "{story.testimonial}"
                        </blockquote>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="h-5 w-5 text-green-600 mr-2" />
                          Key Results Achieved
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {story.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community Works At</h2>
          <p className="text-xl text-gray-600 mb-12">
            The Interview Salah alumni have landed roles at the world's top companies
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                  <Building2 className="h-6 w-6 text-gray-600" />
                </div>
                <div className="text-xs text-gray-600 mt-2">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Impact Across Industries</h2>
            <p className="text-xl text-gray-600">Data-driven results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Career Advancement</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">67%</div>
                  <div className="text-sm text-gray-600">Received promotions within 6 months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">$28K</div>
                  <div className="text-sm text-gray-600">Average salary increase</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Interview Success</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">Pass final round interviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">3.2x</div>
                  <div className="text-sm text-gray-600">Higher offer acceptance rate</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">25K+</div>
                  <div className="text-sm text-gray-600">Success stories shared</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Would recommend to others</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with AI-powered interview coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/signup/free">Start Your Journey Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/interview">Try AI Interview Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
