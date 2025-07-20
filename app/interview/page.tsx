"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Camera,
  Mic,
  MicOff,
  VideoOff,
  Video,
  Play,
  Pause,
  Square,
  Volume2,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function InterviewPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [micEnabled, setMicEnabled] = useState(true)
  const [cameraEnabled, setCameraEnabled] = useState(true)
  const [interviewStarted, setInterviewStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const questions = [
    {
      id: 1,
      type: "Behavioral",
      question:
        "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?",
      tips: "Use the STAR method: Situation, Task, Action, Result",
      timeLimit: 180,
    },
    {
      id: 2,
      type: "Technical",
      question: "Explain the difference between REST and GraphQL APIs. When would you choose one over the other?",
      tips: "Focus on key differences, advantages, and use cases",
      timeLimit: 240,
    },
    {
      id: 3,
      type: "Situational",
      question: "If you were given a project with an impossible deadline, how would you approach it?",
      tips: "Demonstrate problem-solving and communication skills",
      timeLimit: 180,
    },
  ]

  const currentQ = questions[currentQuestion]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const startInterview = () => {
    setInterviewStarted(true)
    setIsRecording(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setTimeElapsed(0)
    }
  }

  const finishInterview = () => {
    setIsRecording(false)
    // Redirect to feedback page
    window.location.href = "/feedback/new"
  }

  if (!interviewStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
            </div>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Interview Setup</h1>
              <p className="text-gray-600">Let's prepare for your AI-powered interview session</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Camera Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Camera & Audio Check</CardTitle>
                  <CardDescription>Make sure your camera and microphone are working properly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Camera preview will appear here</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant={cameraEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCameraEnabled(!cameraEnabled)}
                    >
                      {cameraEnabled ? <Video className="h-4 w-4 mr-2" /> : <VideoOff className="h-4 w-4 mr-2" />}
                      Camera
                    </Button>
                    <Button
                      variant={micEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMicEnabled(!micEnabled)}
                    >
                      {micEnabled ? <Mic className="h-4 w-4 mr-2" /> : <MicOff className="h-4 w-4 mr-2" />}
                      Microphone
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Interview Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Interview Details</CardTitle>
                  <CardDescription>What to expect in this session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">3 Questions</p>
                      <p className="text-sm text-gray-600">Mix of behavioral, technical, and situational</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Real-time Feedback</p>
                      <p className="text-sm text-gray-600">AI analyzes your responses as you speak</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Multimodal Analysis</p>
                      <p className="text-sm text-gray-600">Voice, body language, and content evaluation</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-semibold">Estimated Duration</p>
                      <p className="text-sm text-gray-600">15-20 minutes total</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Start Interview Button */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="px-8 py-3 text-lg"
                onClick={startInterview}
                disabled={!cameraEnabled || !micEnabled}
              >
                <Play className="h-5 w-5 mr-2" />
                Start Interview
              </Button>
              {(!cameraEnabled || !micEnabled) && (
                <p className="text-sm text-red-600 mt-2">Please enable camera and microphone to continue</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
            </div>
            <Badge variant="secondary">Live Interview</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="text-lg font-mono font-semibold text-blue-600">{formatTime(timeElapsed)}</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Interview Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Feed */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg opacity-75">Your video feed</p>
                    </div>
                  </div>

                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">REC</span>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <Button
                      variant={micEnabled ? "secondary" : "destructive"}
                      size="sm"
                      onClick={() => setMicEnabled(!micEnabled)}
                    >
                      {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant={cameraEnabled ? "secondary" : "destructive"}
                      size="sm"
                      onClick={() => setCameraEnabled(!cameraEnabled)}
                    >
                      {cameraEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Question */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Current Question</CardTitle>
                    <CardDescription>
                      <Badge className="mr-2">{currentQ.type}</Badge>
                      Time limit: {Math.floor(currentQ.timeLimit / 60)} minutes
                    </CardDescription>
                  </div>
                  <Volume2 className="h-6 w-6 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-900 mb-4">{currentQ.question}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> {currentQ.tips}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setIsRecording(!isRecording)}>
                {isRecording ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isRecording ? "Pause" : "Resume"}
              </Button>

              <div className="space-x-3">
                {currentQuestion < questions.length - 1 ? (
                  <Button onClick={nextQuestion}>
                    Next Question
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={finishInterview} className="bg-green-600 hover:bg-green-700">
                    <Square className="h-4 w-4 mr-2" />
                    Finish Interview
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Interview Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Questions Completed</span>
                      <span>
                        {currentQuestion + 1}/{questions.length}
                      </span>
                    </div>
                    <Progress value={((currentQuestion + 1) / questions.length) * 100} />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Current Question Time</span>
                      <span>{formatTime(timeElapsed)}</span>
                    </div>
                    <Progress value={(timeElapsed / currentQ.timeLimit) * 100} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Live Analysis</CardTitle>
                <CardDescription>AI feedback as you speak</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Confidence Level</span>
                  <Badge className="bg-green-100 text-green-700">Good</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Speaking Pace</span>
                  <Badge className="bg-blue-100 text-blue-700">Optimal</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Eye Contact</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Improving</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Voice Clarity</span>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Question Queue */}
            <Card>
              <CardHeader>
                <CardTitle>Question Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {questions.map((q, index) => (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg border ${
                        index === currentQuestion
                          ? "bg-blue-50 border-blue-200"
                          : index < currentQuestion
                            ? "bg-green-50 border-green-200"
                            : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold">Question {index + 1}</p>
                          <p className="text-xs text-gray-600">{q.type}</p>
                        </div>
                        {index < currentQuestion && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {index === currentQuestion && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
