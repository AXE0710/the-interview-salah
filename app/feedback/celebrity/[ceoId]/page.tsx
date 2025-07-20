import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Star, CheckCircle, AlertTriangle, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function CelebrityFeedbackPage({ params }: { params: { ceoId: string } }) {
  const ceoId = params.ceoId

  // CEO-specific feedback data
  const ceoFeedback = {
    "elon-musk": {
      name: "Elon Musk",
      company: "Tesla, SpaceX, X",
      avatar: "/placeholder.svg?height=80&width=80",
      overallScore: 78,
      personality: "First-Principles Thinker",
      feedback: {
        strengths: [
          "Excellent first-principles thinking approach",
          "Strong technical problem-solving skills",
          "Good at breaking down complex problems",
          "Showed innovative thinking patterns",
        ],
        improvements: [
          "Could be more decisive in rapid-fire scenarios",
          "Need to communicate ideas more concisely",
          "Should show more urgency in responses",
          "Could demonstrate more hands-on technical experience",
        ],
        ceoSpecific:
          "Elon appreciated your innovative approach but wants to see more speed and decisiveness in your thinking process.",
      },
      scores: {
        technicalThinking: 85,
        innovation: 82,
        speed: 65,
        firstPrinciples: 88,
        communication: 72,
        confidence: 75,
      },
    },
    "tim-cook": {
      name: "Tim Cook",
      company: "Apple",
      avatar: "/placeholder.svg?height=80&width=80",
      overallScore: 85,
      personality: "Values-Driven Leader",
      feedback: {
        strengths: [
          "Strong alignment with company values",
          "Excellent customer-centric thinking",
          "Good strategic long-term vision",
          "Demonstrated empathy and thoughtfulness",
        ],
        improvements: [
          "Could provide more specific metrics and data",
          "Need to show more operational experience",
          "Should demonstrate crisis management skills",
          "Could be more decisive in tough decisions",
        ],
        ceoSpecific:
          "Tim was impressed by your values alignment and customer focus, but wants to see more operational depth.",
      },
      scores: {
        valuesAlignment: 92,
        customerFocus: 88,
        strategicThinking: 83,
        leadership: 80,
        communication: 85,
        decisionMaking: 78,
      },
    },
  }

  const currentFeedback = ceoFeedback[ceoId as keyof typeof ceoFeedback]

  if (!currentFeedback) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback Not Available</h2>
            <p className="text-gray-600 mb-6">Feedback for this CEO interview isn't ready yet.</p>
            <Button asChild>
              <Link href="/celebrity-interviews">Back to Celebrity Interviews</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
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
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={currentFeedback.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-lg">
                  {currentFeedback.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Interview Feedback</h1>
                <p className="text-gray-600">
                  {currentFeedback.name} - {currentFeedback.company}
                </p>
                <p className="text-sm text-gray-500">Completed just now • Duration: 45 minutes</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-1">{currentFeedback.overallScore}%</div>
              <div className="text-sm text-gray-600">Overall Score</div>
              <Badge className="mt-2 bg-purple-100 text-purple-700">
                <Star className="h-3 w-3 mr-1" />
                Celebrity Interview
              </Badge>
            </div>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {Object.entries(currentFeedback.scores).map(([category, score]) => (
            <Card key={category}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{score}%</div>
                <div className="text-sm text-gray-600 capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ceo-insights">CEO Insights</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="recommendations">Next Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Key Strengths</span>
                  </CardTitle>
                  <CardDescription>What impressed {currentFeedback.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentFeedback.feedback.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">{strength}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Areas for Improvement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <span>Areas for Improvement</span>
                  </CardTitle>
                  <CardDescription>Opportunities to excel in future interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentFeedback.feedback.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Breakdown</CardTitle>
                <CardDescription>How you performed in {currentFeedback.name}'s key evaluation areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(currentFeedback.scores).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="capitalize text-gray-600">{category.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span className="font-semibold">{score}%</span>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ceo-insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <span>{currentFeedback.name}'s Personal Feedback</span>
                </CardTitle>
                <CardDescription>Direct insights from the CEO's perspective</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <blockquote className="text-lg text-gray-800 italic mb-4">
                    "{currentFeedback.feedback.ceoSpecific}"
                  </blockquote>
                  <footer className="text-sm text-gray-600">
                    — {currentFeedback.name}, {currentFeedback.company}
                  </footer>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interview Style Match</CardTitle>
                  <CardDescription>How well you adapted to {currentFeedback.name}'s style</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{currentFeedback.overallScore}%</div>
                    <Badge className="bg-purple-100 text-purple-700">{currentFeedback.personality}</Badge>
                    <p className="text-sm text-gray-600 mt-3">
                      You showed good alignment with {currentFeedback.name}'s interview expectations
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hiring Likelihood</CardTitle>
                  <CardDescription>Probability of getting hired based on this interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {Math.round(currentFeedback.overallScore * 0.8)}%
                    </div>
                    <Badge className="bg-green-100 text-green-700">Strong Candidate</Badge>
                    <p className="text-sm text-gray-600 mt-3">High likelihood of advancing to next round</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Performance Analysis</CardTitle>
                <CardDescription>In-depth breakdown of your interview performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(currentFeedback.scores).map(([category, score]) => (
                    <div key={category} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold capitalize">{category.replace(/([A-Z])/g, " $1").trim()}</h4>
                        <Badge
                          className={
                            score >= 80
                              ? "bg-green-100 text-green-700"
                              : score >= 60
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }
                        >
                          {score}%
                        </Badge>
                      </div>
                      <Progress value={score} className="h-2 mb-2" />
                      <p className="text-sm text-gray-600">
                        {score >= 80
                          ? "Excellent performance in this area"
                          : score >= 60
                            ? "Good performance with room for improvement"
                            : "Needs significant improvement"}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Action Plan</CardTitle>
                <CardDescription>
                  Specific steps to improve for your next {currentFeedback.company} interview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-900 mb-2">Priority Focus Area</h4>
                    <p className="text-sm text-purple-800 mb-3">
                      Based on {currentFeedback.name}'s feedback, focus on improving your speed and decisiveness
                    </p>
                    <Button size="sm" asChild>
                      <Link href="/practice/speed-thinking">Start Speed Training</Link>
                    </Button>
                  </div>

                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Practice Recommendation</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Take more {currentFeedback.name} interviews to master their specific style
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/interview/celebrity/${ceoId}`}>Retry Interview</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                        1
                      </div>
                      <span className="text-sm">Practice with other {currentFeedback.company} scenarios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                        2
                      </div>
                      <span className="text-sm">Work on identified improvement areas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                        3
                      </div>
                      <span className="text-sm">Schedule follow-up interview in 1 week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link href={`/resources/${ceoId}-style`} className="block text-sm text-purple-600 hover:underline">
                      • {currentFeedback.name}'s Interview Style Guide
                    </Link>
                    <Link
                      href={`/resources/${currentFeedback.company.toLowerCase()}-culture`}
                      className="block text-sm text-purple-600 hover:underline"
                    >
                      • {currentFeedback.company} Company Culture Guide
                    </Link>
                    <Link href="/resources/first-principles" className="block text-sm text-purple-600 hover:underline">
                      • First Principles Thinking Masterclass
                    </Link>
                    <Link href="/resources/speed-thinking" className="block text-sm text-purple-600 hover:underline">
                      • Speed Thinking Training
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button size="lg" asChild>
            <Link href={`/interview/celebrity/${ceoId}`}>Interview Again</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/celebrity-interviews">Try Another CEO</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
