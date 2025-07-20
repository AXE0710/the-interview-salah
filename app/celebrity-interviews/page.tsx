"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Brain,
  Star,
  Play,
  Clock,
  Users,
  Zap,
  Target,
  Rocket,
  Apple,
  Building2,
  Lightbulb,
  Award,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function CelebrityInterviewsPage() {
  const [selectedCEO, setSelectedCEO] = useState<string | null>(null)

  const celebrityCEOs = [
    {
      id: "elon-musk",
      name: "Elon Musk",
      company: "Tesla, SpaceX, X",
      avatar: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
      personality: "Visionary, Direct, First-Principles Thinker",
      interviewStyle: "Rapid-fire technical questions, problem-solving challenges, unconventional scenarios",
      famousQuotes: [
        "If you need inspiring words, don't do it.",
        "When something is important enough, you do it even if the odds are not in your favor.",
      ],
      questionTypes: ["Technical Problem Solving", "First Principles Thinking", "Innovation Challenges"],
      difficulty: "Expert",
      avgDuration: "45-60 min",
      industries: ["Automotive", "Aerospace", "AI/Tech", "Energy"],
      unlocked: true,
      premium: false,
      icon: Rocket,
      color: "red",
      sampleQuestions: [
        "How would you design a car from first principles?",
        "Explain how you would reduce the cost of space travel by 90%",
        "What's the biggest problem humanity faces and how would you solve it?",
      ],
      interviewTips: [
        "Think from first principles - break down problems to fundamental truths",
        "Be prepared for rapid-fire technical questions",
        "Show passion for solving big problems",
        "Demonstrate hands-on technical knowledge",
      ],
    },
    {
      id: "tim-cook",
      name: "Tim Cook",
      company: "Apple",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvUrviSRfScXniMLzVJGDm6Ldwkb8JvHVcg&s",
      personality: "Thoughtful, Values-Driven, Strategic",
      interviewStyle: "Behavioral questions, values alignment, strategic thinking, customer focus",
      famousQuotes: [
        "We believe that we are on the face of the earth to make great products.",
        "Privacy is a fundamental human right.",
      ],
      questionTypes: ["Values & Ethics", "Customer Experience", "Strategic Vision"],
      difficulty: "Advanced",
      avgDuration: "30-45 min",
      industries: ["Technology", "Consumer Electronics", "Design"],
      unlocked: true,
      premium: false,
      icon: Apple,
      color: "gray",
      sampleQuestions: [
        "How do you balance innovation with user privacy?",
        "Describe a time when you had to make a decision that prioritized values over profit",
        "How would you improve the customer experience for our products?",
      ],
      interviewTips: [
        "Emphasize customer-centric thinking",
        "Show alignment with company values",
        "Demonstrate strategic long-term thinking",
        "Focus on quality over quantity",
      ],
    },
    {
      id: "satya-nadella",
      name: "Satya Nadella",
      company: "Microsoft",
      avatar: "https://imageio.forbes.com/specials-images/imageserve/5d6ae14f673aa300083caf99/0x0.jpg?format=jpg&crop=2923,2926,x3051,y26,safe&height=416&width=416&fit=bounds",
      personality: "Empathetic, Growth-Minded, Collaborative",
      interviewStyle: "Growth mindset questions, collaboration scenarios, empathy-driven leadership",
      famousQuotes: [
        "Our industry does not respect tradition - it only respects innovation.",
        "Empathy makes you a better innovator.",
      ],
      questionTypes: ["Growth Mindset", "Collaboration", "Inclusive Leadership"],
      difficulty: "Advanced",
      avgDuration: "40-50 min",
      industries: ["Cloud Computing", "Enterprise Software", "AI"],
      unlocked: true,
      premium: false,
      icon: Building2,
      color: "blue",
      sampleQuestions: [
        "Tell me about a time when you learned from failure",
        "How do you foster a growth mindset in your team?",
        "Describe how you would make our products more inclusive",
      ],
      interviewTips: [
        "Demonstrate continuous learning mindset",
        "Show empathy and emotional intelligence",
        "Focus on collaboration over competition",
        "Emphasize inclusive thinking",
      ],
    },
    {
      id: "jensen-huang",
      name: "Jensen Huang",
      company: "NVIDIA",
      avatar: "https://imageio.forbes.com/specials-images/imageserve/68750a2d250de42ce7c5301b/0x0.jpg?format=jpg&crop=1800,1799,x832,y152,safe&height=416&width=416&fit=bounds",
      personality: "Technical Visionary, Passionate, Future-Focused",
      interviewStyle: "Deep technical discussions, AI/computing vision, innovation passion",
      famousQuotes: ["The more you buy, the more you save.", "We are at the beginning of a new computing era."],
      questionTypes: ["AI & Computing", "Technical Vision", "Innovation Strategy"],
      difficulty: "Expert",
      avgDuration: "50-60 min",
      industries: ["AI/ML", "Gaming", "Data Centers", "Automotive"],
      unlocked: false,
      premium: true,
      icon: Zap,
      color: "green",
      sampleQuestions: [
        "How do you see AI transforming computing in the next decade?",
        "Explain the technical challenges in scaling AI workloads",
        "What's your vision for the future of accelerated computing?",
      ],
      interviewTips: [
        "Show deep technical understanding of AI/ML",
        "Demonstrate passion for cutting-edge technology",
        "Think about future computing paradigms",
        "Focus on performance and efficiency",
      ],
    },
    {
      id: "sundar-pichai",
      name: "Sundar Pichai",
      company: "Google/Alphabet",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/640px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
      personality: "Analytical, User-Focused, Diplomatic",
      interviewStyle: "Product thinking, user experience, analytical problem-solving",
      famousQuotes: [
        "It is important to follow your dreams and heart.",
        "You will excel only by maximizing your strengths, never by fixing your weaknesses.",
      ],
      questionTypes: ["Product Strategy", "User Experience", "Data-Driven Decisions"],
      difficulty: "Advanced",
      avgDuration: "35-45 min",
      industries: ["Search", "Cloud", "Mobile", "AI"],
      unlocked: false,
      premium: true,
      icon: Target,
      color: "yellow",
      sampleQuestions: [
        "How would you improve Google Search for the next billion users?",
        "Design a product that helps people learn new skills",
        "How do you balance user privacy with personalization?",
      ],
      interviewTips: [
        "Focus on user-centric product thinking",
        "Use data to support your arguments",
        "Think globally and inclusively",
        "Demonstrate analytical problem-solving",
      ],
    },
    {
      id: "marc-benioff",
      name: "Marc Benioff",
      company: "Salesforce",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Marc_Benioff.jpg/250px-Marc_Benioff.jpg",
      personality: "Values-Driven, Philanthropic, Visionary",
      interviewStyle: "Values alignment, social impact, customer success focus",
      famousQuotes: ["The business of business is improving the state of the world.", "Culture drives great results."],
      questionTypes: ["Social Impact", "Customer Success", "Values Leadership"],
      difficulty: "Intermediate",
      avgDuration: "30-40 min",
      industries: ["CRM", "Cloud Software", "Enterprise"],
      unlocked: false,
      premium: true,
      icon: Users,
      color: "blue",
      sampleQuestions: [
        "How would you use technology to create positive social impact?",
        "Describe your approach to building customer trust",
        "What role should businesses play in addressing social issues?",
      ],
      interviewTips: [
        "Emphasize values-driven leadership",
        "Show commitment to social responsibility",
        "Focus on customer success stories",
        "Demonstrate cultural awareness",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "border-red-200 hover:border-red-300 bg-red-50",
      gray: "border-gray-200 hover:border-gray-300 bg-gray-50",
      blue: "border-blue-200 hover:border-blue-300 bg-blue-50",
      green: "border-green-200 hover:border-green-300 bg-green-50",
      yellow: "border-yellow-200 hover:border-yellow-300 bg-yellow-50",
    }
    return colorMap[color as keyof typeof colorMap] || "border-gray-200 hover:border-gray-300 bg-gray-50"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Expert":
        return "bg-red-100 text-red-700"
      case "Advanced":
        return "bg-orange-100 text-orange-700"
      case "Intermediate":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/company-selection">Company Interviews</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <Star className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interview with <span className="text-purple-600">Celebrity CEOs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience authentic interview styles of famous tech leaders. Practice with AI versions of Elon Musk, Tim
            Cook, Satya Nadella, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-3"
              onClick={() => {
                document.getElementById("ceo-selection")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Choose Your CEO
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/company-selection">Company Interviews</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-gray-600">Celebrity CEOs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">95%</div>
              <div className="text-gray-600">Accuracy Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600">Interviews Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Selection */}
      <section id="ceo-selection" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Celebrity Interviewer</h2>
            <p className="text-xl text-gray-600">Each CEO has their unique interview style and focus areas</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {celebrityCEOs.map((ceo) => (
              <Card
                key={ceo.id}
                className={`relative transition-all cursor-pointer ${getColorClasses(ceo.color)} ${
                  selectedCEO === ceo.id ? "ring-2 ring-purple-500" : ""
                } ${!ceo.unlocked ? "opacity-75" : ""}`}
                onClick={() => {
                  if (ceo.unlocked) {
                    setSelectedCEO(ceo.id)
                  }
                }}
              >
                {ceo.premium && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}

                {!ceo.unlocked && (
                  <div className="absolute top-4 right-4">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={ceo.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-lg">
                        {ceo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{ceo.name}</CardTitle>
                  <CardDescription className="font-semibold text-gray-700">{ceo.company}</CardDescription>
                  <div className="flex justify-center mt-2">
                    <Badge className={getDifficultyColor(ceo.difficulty)}>{ceo.difficulty}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Personality</h4>
                    <p className="text-sm text-gray-600">{ceo.personality}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Interview Style</h4>
                    <p className="text-sm text-gray-600">{ceo.interviewStyle}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {ceo.questionTypes.map((type, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {ceo.avgDuration}
                    </div>
                    <div className="flex items-center">
                      <ceo.icon className="h-4 w-4 mr-1" />
                      {ceo.industries.length} Industries
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    disabled={!ceo.unlocked}
                    variant={ceo.unlocked ? "default" : "secondary"}
                    onClick={() => {
                      if (ceo.unlocked) {
                        window.location.href = `/interview/celebrity/${ceo.id}`
                      } else if (ceo.premium) {
                        window.location.href = "/pricing"
                      }
                    }}
                  >
                    {ceo.unlocked ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Interview
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        {ceo.premium ? "Upgrade to Premium" : "Coming Soon"}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected CEO Details */}
      {selectedCEO && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            {(() => {
              const ceo = celebrityCEOs.find((c) => c.id === selectedCEO)!
              return (
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Preview: {ceo.name}</h2>
                    <p className="text-xl text-gray-600">
                      Get ready for an authentic {ceo.company} interview experience
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Sample Questions */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                          Sample Questions
                        </CardTitle>
                        <CardDescription>Questions you might encounter in this interview</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {ceo.sampleQuestions.map((question, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg">
                              <p className="text-sm text-gray-700">"{question}"</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Interview Tips */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2 text-blue-600" />
                          Success Tips
                        </CardTitle>
                        <CardDescription>How to excel in this interview style</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {ceo.interviewTips.map((tip, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                              <p className="text-sm text-gray-700">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Famous Quotes */}
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Star className="h-5 w-5 mr-2 text-purple-600" />
                          Famous Quotes
                        </CardTitle>
                        <CardDescription>Philosophy that shapes their interview approach</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {ceo.famousQuotes.map((quote, index) => (
                            <blockquote
                              key={index}
                              className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-500"
                            >
                              <p className="text-gray-700 italic">"{quote}"</p>
                              <footer className="text-sm text-gray-600 mt-2">— {ceo.name}</footer>
                            </blockquote>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center mt-8">
                    <Button size="lg" className="text-lg px-8 py-3" asChild>
                      <Link href={`/interview/celebrity/${ceo.id}`}>
                        <Play className="h-5 w-5 mr-2" />
                        Start {ceo.name} Interview
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Celebrity Interviews Work</h2>
            <p className="text-xl text-gray-600">Advanced AI technology creates authentic interview experiences</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose CEO</h3>
              <p className="text-gray-600">Select from our collection of famous tech leaders</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Simulation</h3>
              <p className="text-gray-600">Our AI replicates their personality, style, and question patterns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Interview</h3>
              <p className="text-gray-600">Experience their authentic interview style and challenging questions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Feedback</h3>
              <p className="text-gray-600">Get insights on how you'd perform in their actual interview</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Interview with the Best?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience what it's like to interview with the world's most successful CEOs and leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/signup/premium">Unlock All CEOs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <Link href="/interview/celebrity/elon-musk">Try Elon Musk Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
