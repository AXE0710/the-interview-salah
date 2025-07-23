"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, CheckCircle, Clock, Star, MessageCircle, Play, Pause, RotateCcw, Send, Trophy } from "lucide-react"
import Link from "next/link"
import { CodeEditor } from "@/components/code-editor"
import { Textarea } from "@/components/ui/textarea"

export default function TaskPage({ params }: { params: { role: string; taskId: string } }) {
  const [timeSpent, setTimeSpent] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [progress, setProgress] = useState(25)
  const [teamChat, setTeamChat] = useState([
    {
      id: 1,
      author: "Sarah (Designer)",
      message: "Hey! I've uploaded the latest designs to Figma. The login form should match the new design system.",
      timestamp: "2:30 PM",
      avatar: "S",
    },
    {
      id: 2,
      author: "Mike (Backend)",
      message: "API endpoints are ready. POST /auth/login and POST /auth/register are both working.",
      timestamp: "2:45 PM",
      avatar: "M",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const task = {
    id: params.taskId,
    title: "Implement User Authentication UI",
    description:
      "Create login and signup forms with validation. Forms should include email/password fields, client-side validation, error handling, and loading states.",
    priority: "high",
    estimatedTime: "4 hours",
    xpReward: 100,
    status: "in-progress",
    dueDate: "2024-01-25",
    requirements: [
      "Create responsive login form component",
      "Add form validation (email format, password strength)",
      "Implement error handling and user feedback",
      "Add loading states during authentication",
      "Style according to design system",
      "Write unit tests for components",
    ],
    acceptanceCriteria: [
      "Forms work on mobile and desktop",
      "All validation rules are enforced",
      "Error messages are user-friendly",
      "Loading states prevent double-submission",
      "Matches Figma designs exactly",
    ],
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: teamChat.length + 1,
      author: "You",
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      avatar: "Y",
      isUser: true,
    }

    setTeamChat((prev) => [...prev, message])
    setNewMessage("")
  }

  const handleSubmitTask = () => {
    // Simulate task completion
    setProgress(100)
    // Show completion modal or redirect
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/tech/${params.role}`} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">TechCollab</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">{task.title}</h1>
                <p className="text-sm text-gray-600">E-commerce Dashboard Project</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">{formatTime(timeSpent)}</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsTimerRunning(!isTimerRunning)}>
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="code" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="code">Code Editor</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="team">Team Chat</TabsTrigger>
              </TabsList>

              <TabsContent value="code" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Code Editor</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">React + TypeScript</Badge>
                        <Button variant="outline" size="sm">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeEditor role={params.role} taskId={params.taskId} onProgressUpdate={setProgress} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Requirements</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {task.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Acceptance Criteria</h3>
                      <ul className="space-y-2">
                        {task.acceptanceCriteria.map((criteria, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card className="h-[500px] flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Team Chat</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                      {teamChat.map((message) => (
                        <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-medium opacity-75">{message.author}</span>
                              <span className="text-xs opacity-50">{message.timestamp}</span>
                            </div>
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Textarea
                        placeholder="Ask your team a question..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        rows={2}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Task Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Task Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completion</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Spent</span>
                    <span className="font-medium">{formatTime(timeSpent)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated</span>
                    <span className="font-medium">{task.estimatedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">XP Reward</span>
                    <span className="font-medium flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {task.xpReward}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-xs text-white">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah</p>
                    <p className="text-xs text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mike</p>
                    <p className="text-xs text-gray-500">Backend Engineer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alex</p>
                    <p className="text-xs text-gray-500">Product Manager</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 border-t pt-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                    Y
                  </div>
                  <div>
                    <p className="text-sm font-medium">You</p>
                    <p className="text-xs text-gray-500">Frontend Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-4 space-y-2">
                <Button className="w-full" onClick={handleSubmitTask} disabled={progress < 100}>
                  <Trophy className="w-4 h-4 mr-2" />
                  Submit Task
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save Progress
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Request Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
