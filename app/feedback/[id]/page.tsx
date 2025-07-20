import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  TrendingUp,
  Target,
  MessageSquare,
  Camera,
  Mic,
  Clock,
  CheckCircle,
  AlertTriangle,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
  const overallScore = 87
  const scores = {
    content: 92,
    delivery: 85,
    confidence: 78,
    bodyLanguage: 88,
    voiceClarity: 94,
    eyeContact: 82,
  }

  const strengths = [
    "Excellent technical knowledge and clear explanations",
    "Strong use of STAR method in behavioral responses",
    "Good voice clarity and pronunciation",
    "Maintained professional demeanor throughout",
  ]

  const improvements = [
    "Increase confidence in responses - avoid filler words",
    "Maintain more consistent eye contact with camera",
    "Slow down speaking pace slightly for better comprehension",
    "Use more specific examples in situational questions",
  ]

  const questionAnalysis = [
    {
      id: 1,
      question: "Tell me about a time when you had to work with a difficult team member...",
      type: "Behavioral",
      score: 85,
      duration: "2:45",
      feedback: "Good use of STAR method. Could provide more specific details about the outcome.",
      strengths: ["Clear structure", "Professional tone"],
      improvements: ["More specific metrics", "Stronger conclusion"],
    },
    {
      id: 2,
      question: "Explain the difference between REST and GraphQL APIs...",
      type: "Technical",
      score: 92,
      duration: "3:12",
      feedback: "Excellent technical explanation with clear examples and use cases.",
      strengths: ["Comprehensive coverage", "Good examples"],
      improvements: ["Could mention performance considerations"],
    },
    {
      id: 3,
      question: "If you were given a project with an impossible deadline...",
      type: "Situational",
      score: 84,
      duration: "2:28",
      feedback: "Solid problem-solving approach. Show more leadership qualities.",
      strengths: ["Logical approach", "Good prioritization"],
      improvements: ["More stakeholder communication", "Risk mitigation"],
    },
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
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Interview Feedback</h1>
              <p className="text-gray-600">Software Engineer - Technical Interview</p>
              <p className="text-sm text-gray-500">Completed 2 hours ago • Duration: 18 minutes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">{overallScore}%</div>
              <div className="text-sm text-gray-600">Overall Score</div>
              <Badge className="mt-2 bg-green-100 text-green-700">Excellent Performance</Badge>
            </div>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{scores.content}%</div>
              <div className="text-sm text-gray-600">Content</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Mic className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{scores.delivery}%</div>
              <div className="text-sm text-gray-600">Delivery</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{scores.confidence}%</div>
              <div className="text-sm text-gray-600">Confidence</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Camera className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{scores.bodyLanguage}%</div>
              <div className="text-sm text-gray-600">Body Language</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-6 w-6 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{scores.eyeContact}%</div>
              <div className="text-sm text-gray-600">Eye Contact</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="questions">Question Analysis</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
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
                  <CardDescription>What you did exceptionally well</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {strengths.map((strength, index) => (
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
                  <CardDescription>Opportunities to enhance your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {improvements.map((improvement, index) => (
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
                <CardDescription>Detailed analysis of your interview performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(scores).map(([category, score]) => (
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

          <TabsContent value="questions" className="space-y-6">
            {questionAnalysis.map((question) => (
              <Card key={question.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Question {question.id}</CardTitle>
                      <CardDescription className="mt-1">{question.question}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2">{question.type}</Badge>
                      <div className="text-2xl font-bold text-blue-600">{question.score}%</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Strengths
                      </h4>
                      <ul className="space-y-1">
                        {question.strengths.map((strength, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Improvements
                      </h4>
                      <ul className="space-y-1">
                        {question.improvements.map((improvement, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-orange-600 rounded-full mr-2"></div>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>AI Feedback:</strong> {question.feedback}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-blue-600">
                      <Clock className="h-3 w-3 mr-1" />
                      Response Duration: {question.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Analysis</CardTitle>
                  <CardDescription>AI analysis of your communication patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Speaking Pace</span>
                    <Badge className="bg-green-100 text-green-700">Optimal</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Filler Words</span>
                    <Badge className="bg-yellow-100 text-yellow-700">Moderate</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Vocabulary Complexity</span>
                    <Badge className="bg-blue-100 text-blue-700">Advanced</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Response Structure</span>
                    <Badge className="bg-green-100 text-green-700">Well-organized</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Non-verbal Analysis</CardTitle>
                  <CardDescription>Body language and presence evaluation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Posture</span>
                    <Badge className="bg-green-100 text-green-700">Professional</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Facial Expressions</span>
                    <Badge className="bg-blue-100 text-blue-700">Engaged</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hand Gestures</span>
                    <Badge className="bg-green-100 text-green-700">Natural</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Overall Presence</span>
                    <Badge className="bg-blue-100 text-blue-700">Confident</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Emotional Intelligence Insights</CardTitle>
                <CardDescription>Analysis of emotional responses and adaptability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">High</div>
                    <div className="text-sm text-gray-600">Emotional Stability</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Good</div>
                    <div className="text-sm text-gray-600">Stress Management</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Strong</div>
                    <div className="text-sm text-gray-600">Adaptability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Learning Path</CardTitle>
                <CardDescription>Recommended practice areas based on your performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                    <h4 className="font-semibold text-orange-900 mb-2">Priority: Confidence Building</h4>
                    <p className="text-sm text-orange-800 mb-3">
                      Focus on reducing hesitation and filler words to project more confidence.
                    </p>
                    <Button size="sm" asChild>
                      <Link href="/practice/confidence">Start Confidence Training</Link>
                    </Button>
                  </div>

                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Recommended: Eye Contact Practice</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Improve camera engagement to simulate better eye contact in virtual interviews.
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/practice/eye-contact">Practice Eye Contact</Link>
                    </Button>
                  </div>

                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-900 mb-2">Maintain: Technical Explanations</h4>
                    <p className="text-sm text-green-800 mb-3">
                      Continue practicing technical concepts - you're doing great in this area!
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/practice/technical">Advanced Technical Practice</Link>
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
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                        1
                      </div>
                      <span className="text-sm">Practice confidence-building exercises daily</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                        2
                      </div>
                      <span className="text-sm">Record yourself answering questions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
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
                    <Link href="/resources/confidence" className="block text-sm text-blue-600 hover:underline">
                      • Confidence Building Guide
                    </Link>
                    <Link href="/resources/body-language" className="block text-sm text-blue-600 hover:underline">
                      • Body Language Best Practices
                    </Link>
                    <Link href="/resources/star-method" className="block text-sm text-blue-600 hover:underline">
                      • STAR Method Masterclass
                    </Link>
                    <Link
                      href="/resources/technical-interviews"
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      • Technical Interview Preparation
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
            <Link href="/interview">Schedule Another Interview</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/practice">Start Practice Session</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
