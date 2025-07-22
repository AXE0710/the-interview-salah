"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, TrendingUp, Users, Code, MessageSquare, Target, AlertTriangle, CheckCircle } from "lucide-react"

interface AIAnalysisDashboardProps {
  role: string
}

const roleInfo = {
  title: "Backend Dev",
}

export function AIAnalysisDashboard({ role }: AIAnalysisDashboardProps) {
  const [analysisData, setAnalysisData] = useState({
    rolePerformance: 85,
    codeContribution: 72,
    communicationScore: 91,
    collaborationIndex: 78,
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setAnalysisData((prev) => ({
        rolePerformance: Math.min(100, prev.rolePerformance + Math.random() * 2 - 1),
        codeContribution: Math.min(100, prev.codeContribution + Math.random() * 3 - 1.5),
        communicationScore: Math.min(100, prev.communicationScore + Math.random() * 1.5 - 0.75),
        collaborationIndex: Math.min(100, prev.collaborationIndex + Math.random() * 2 - 1),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const roleSpecificMetrics = {
    "team-lead": [
      { metric: "Task Delegation", score: 88, trend: "up" },
      { metric: "Decision Making", score: 92, trend: "up" },
      { metric: "Team Coordination", score: 85, trend: "stable" },
      { metric: "Progress Tracking", score: 79, trend: "up" },
    ],
    "backend-dev": [
      { metric: "Code Quality", score: 91, trend: "up" },
      { metric: "API Design", score: 87, trend: "up" },
      { metric: "Database Schema", score: 83, trend: "stable" },
      { metric: "Error Handling", score: 76, trend: "down" },
    ],
    "qa-skeptic": [
      { metric: "Bug Detection", score: 94, trend: "up" },
      { metric: "Test Coverage", score: 82, trend: "up" },
      { metric: "Constructive Feedback", score: 89, trend: "stable" },
      { metric: "Risk Assessment", score: 86, trend: "up" },
    ],
    "ui-ux": [
      { metric: "User Experience", score: 88, trend: "up" },
      { metric: "Interface Design", score: 92, trend: "up" },
      { metric: "Accessibility", score: 78, trend: "stable" },
      { metric: "Responsive Design", score: 85, trend: "up" },
    ],
  }

  const currentMetrics =
    roleSpecificMetrics[role as keyof typeof roleSpecificMetrics] || roleSpecificMetrics["backend-dev"]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-3 h-3 text-green-500" />
      case "down":
        return <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 75) return "text-blue-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="h-full bg-gray-50 p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">AI Performance Analysis</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Real-time
            </Badge>
          </div>
          <p className="text-gray-600">
            Advanced AI monitoring of your collaboration patterns, technical contributions, and role performance.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Role Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${getScoreColor(analysisData.rolePerformance)}`}>
                  {Math.round(analysisData.rolePerformance)}%
                </span>
                <Target className="w-5 h-5 text-purple-500" />
              </div>
              <Progress value={analysisData.rolePerformance} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Code Contribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${getScoreColor(analysisData.codeContribution)}`}>
                  {Math.round(analysisData.codeContribution)}%
                </span>
                <Code className="w-5 h-5 text-blue-500" />
              </div>
              <Progress value={analysisData.codeContribution} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${getScoreColor(analysisData.communicationScore)}`}>
                  {Math.round(analysisData.communicationScore)}%
                </span>
                <MessageSquare className="w-5 h-5 text-green-500" />
              </div>
              <Progress value={analysisData.communicationScore} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Collaboration Index</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${getScoreColor(analysisData.collaborationIndex)}`}>
                  {Math.round(analysisData.collaborationIndex)}%
                </span>
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <Progress value={analysisData.collaborationIndex} className="mt-2 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <Tabs defaultValue="role-specific" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="role-specific">Role-Specific</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="code-analysis">Code Analysis</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="role-specific">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Role Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{metric.metric}</span>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-bold ${getScoreColor(metric.score)}`}>{metric.score}%</span>
                          <div className="w-16">
                            <Progress value={metric.score} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-green-800">Excellent Communication</div>
                        <div className="text-xs text-green-600">
                          Your messages are clear and constructive, helping team coordination.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-blue-800">Strong Technical Contribution</div>
                        <div className="text-xs text-blue-600">
                          Your code quality and architecture decisions are solid.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-yellow-800">Improvement Opportunity</div>
                        <div className="text-xs text-yellow-600">
                          Consider more frequent code commits for better collaboration tracking.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collaboration">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Team Interaction Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Messages Sent</span>
                        <span className="font-medium">23</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Code Reviews</span>
                        <span className="font-medium">5</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Whiteboard Contributions</span>
                        <span className="font-medium">8</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Problem-Solving Initiatives</span>
                        <span className="font-medium">12</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Collaboration Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: "14:32", action: "Joined team discussion", type: "join" },
                      { time: "14:35", action: "Contributed to API design", type: "code" },
                      { time: "14:38", action: "Reviewed Sarah's code", type: "review" },
                      { time: "14:42", action: "Added database schema", type: "code" },
                      { time: "14:45", action: "Participated in architecture discussion", type: "discussion" },
                      { time: "14:48", action: "Current: Working on user model", type: "active" },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            event.type === "join"
                              ? "bg-green-500"
                              : event.type === "code"
                                ? "bg-blue-500"
                                : event.type === "review"
                                  ? "bg-purple-500"
                                  : event.type === "discussion"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="text-sm">{event.action}</div>
                          <div className="text-xs text-gray-500">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="code-analysis">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Code Contribution Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">127</div>
                        <div className="text-xs text-blue-600">Lines Added</div>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">23</div>
                        <div className="text-xs text-red-600">Lines Removed</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Code Quality Score</span>
                        <span className="font-medium text-green-600">8.7/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Test Coverage</span>
                        <span className="font-medium text-blue-600">78%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Documentation</span>
                        <span className="font-medium text-yellow-600">65%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">File Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { file: "models/User.js", contribution: 85, status: "primary" },
                      { file: "routes/auth.js", contribution: 60, status: "secondary" },
                      { file: "middleware/validation.js", contribution: 45, status: "minor" },
                      { file: "tests/user.test.js", contribution: 30, status: "minor" },
                    ].map((file, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">{file.file}</span>
                          <span className="text-gray-500">{file.contribution}%</span>
                        </div>
                        <Progress value={file.contribution} className="h-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance Insights & Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-green-700">Strengths</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Excellent Communication</div>
                            <div className="text-gray-600">Clear, concise messages that drive team progress</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Strong Technical Skills</div>
                            <div className="text-gray-600">Well-structured code with good practices</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Collaborative Approach</div>
                            <div className="text-gray-600">Actively engages with team members</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-blue-700">Growth Opportunities</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-blue-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Increase Test Coverage</div>
                            <div className="text-gray-600">Add more unit tests for critical functions</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-blue-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Documentation</div>
                            <div className="text-gray-600">Improve code comments and API documentation</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-blue-500 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Code Review Frequency</div>
                            <div className="text-gray-600">More frequent smaller commits for better collaboration</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comparative Team Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "You",
                        role: roleInfo.title,
                        score: Math.round(analysisData.rolePerformance),
                        color: "bg-green-500",
                      },
                      { name: "Alex Chen", role: "Team Lead", score: 88, color: "bg-purple-500" },
                      { name: "Sarah Kim", role: "Backend Dev", score: 91, color: "bg-blue-500" },
                      { name: "Mike Johnson", role: "QA/Skeptic", score: 85, color: "bg-red-500" },
                    ].map((member, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${member.color}`} />
                            <span className="font-medium text-sm">{member.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {member.role}
                            </Badge>
                          </div>
                          <span className="text-sm font-bold">{member.score}%</span>
                        </div>
                        <Progress value={member.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
