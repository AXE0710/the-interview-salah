"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MessageCircle, AlertTriangle, CheckCircle, ArrowRight, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

export default function SimulationPage({ params }: { params: { id: string } }) {
  const [currentPhase, setCurrentPhase] = useState<"briefing" | "active" | "intervention" | "complete">("briefing")
  const [timeRemaining, setTimeRemaining] = useState(720) // 12 minutes in seconds
  const [userInput, setUserInput] = useState("")
  const [teamMessages, setTeamMessages] = useState<
    Array<{
      id: number
      author: string
      message: string
      timestamp: string
      isUser?: boolean
    }>
  >([])

  const simulation = {
    id: params.id,
    title: "Pre-mortem Risk Assessment",
    description: "Practice surfacing risks in a technical design review",
    focusRole: "Challenger",
    scenario:
      "Your team is reviewing a proposed microservices architecture for a new feature. The initial design looks solid, but you need to help the team identify potential risks before implementation.",
    teamMembers: [
      { name: "Sarah (AI)", role: "Tech Lead", personality: "Optimistic, solution-focused" },
      { name: "Mike (AI)", role: "Senior Engineer", personality: "Detail-oriented, cautious" },
      { name: "Lisa (AI)", role: "Product Manager", personality: "Timeline-focused, pragmatic" },
    ],
  }

  useEffect(() => {
    if (currentPhase === "active" && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [currentPhase, timeRemaining])

  useEffect(() => {
    // Simulate initial team messages
    if (currentPhase === "active" && teamMessages.length === 0) {
      setTimeout(() => {
        setTeamMessages([
          {
            id: 1,
            author: "Sarah",
            message:
              "Alright team, let's review this microservices design. I think it looks really solid - we've got good separation of concerns and the API contracts are clean.",
            timestamp: "10:32 AM",
          },
          {
            id: 2,
            author: "Lisa",
            message:
              "I agree! This should help us ship faster. The timeline looks good too - we can probably get this done in 3 sprints.",
            timestamp: "10:33 AM",
          },
          {
            id: 3,
            author: "Mike",
            message:
              "The code structure is well thought out. I'm confident we can implement this without major issues.",
            timestamp: "10:33 AM",
          },
        ])
      }, 1000)
    }
  }, [currentPhase, teamMessages.length])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    const newMessage = {
      id: teamMessages.length + 1,
      author: "You",
      message: userInput,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }

    setTeamMessages((prev) => [...prev, newMessage])
    setUserInput("")

    // Trigger intervention if user asks about risks
    if (userInput.toLowerCase().includes("risk") || userInput.toLowerCase().includes("problem")) {
      setTimeout(() => {
        setCurrentPhase("intervention")
      }, 2000)
    }
  }

  const handleContinueAfterIntervention = () => {
    setCurrentPhase("active")
    // Add AI responses after intervention
    setTimeout(() => {
      setTeamMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          author: "Sarah",
          message: "You're right to bring that up. What specific risks should we be considering?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 1000)
  }

  const completeSimulation = () => {
    setCurrentPhase("complete")
  }

  if (currentPhase === "briefing") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-2xl mx-4">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-blue-500" />
              <span>{simulation.title}</span>
            </CardTitle>
            <CardDescription>{simulation.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Scenario</h3>
              <p className="text-gray-700">{simulation.scenario}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Your Team</h3>
              <div className="space-y-2">
                {simulation.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">
                        {member.role} • {member.personality}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Your Role: {simulation.focusRole}</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Your goal is to help the team identify potential risks and problems with the proposed design. The
                    team is being overly optimistic - challenge their assumptions constructively.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => setCurrentPhase("active")} className="w-full">
              Start Simulation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentPhase === "intervention") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-lg mx-4">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-600">
              <AlertTriangle className="w-6 h-6" />
              <span>Critical Moment Intervention</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800">
                <strong>Prompt:</strong> Ask the team, "What is the biggest risk we are not considering?"
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              The team is showing signs of groupthink. This is a perfect moment to practice your Challenger role by
              surfacing potential risks they might be overlooking.
            </p>
            <Button onClick={handleContinueAfterIntervention} className="w-full">
              Continue Simulation
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentPhase === "complete") {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span>Simulation Complete!</span>
              </CardTitle>
              <CardDescription>Here's your performance summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">Key Takeaway</h3>
                  <p className="text-gray-700">
                    Great job! You successfully surfaced two critical risks that the team had missed: database scaling
                    concerns and service dependency failures. Next time, try to formalize these risks in the shared
                    document.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance Score</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                  <Progress value={92} className="h-3" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Skills Practiced</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Risk Assessment</Badge>
                  <Badge variant="secondary">Constructive Challenging</Badge>
                  <Badge variant="secondary">Question Framing</Badge>
                  <Badge variant="secondary">Team Facilitation</Badge>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Next Recommended Simulation</h4>
                <p className="text-blue-700 text-sm">Building Consensus - Practice synthesizing different viewpoints</p>
              </div>

              <div className="flex space-x-4">
                <Link href="/learner" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Return to Dashboard
                  </Button>
                </Link>
                <Link href="/learner/simulation/2" className="flex-1">
                  <Button className="w-full">Next Simulation</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="font-semibold">{simulation.title}</h1>
              <Badge variant="secondary">{simulation.focusRole} Focus</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
              </div>
              <Button variant="outline" size="sm" onClick={completeSimulation}>
                End Simulation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Team Chat */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Team Discussion</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {teamMessages.map((message) => (
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
                    placeholder="Type your message to the team..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-1"
                    rows={2}
                  />
                  <Button onClick={handleSendMessage}>Send</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {simulation.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-2 border-t pt-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                    Y
                  </div>
                  <div>
                    <p className="text-sm font-medium">You</p>
                    <p className="text-xs text-gray-500">Challenger</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Surface potential risks</li>
                  <li>• Challenge assumptions</li>
                  <li>• Ask probing questions</li>
                  <li>• Document concerns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
