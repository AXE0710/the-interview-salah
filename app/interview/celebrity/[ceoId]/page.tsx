"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Camera,
  Mic,
  MicOff,
  VideoOff,
  Video,
  Play,
  Square,
  Volume2,
  ArrowRight,
  Star,
  Zap,
  Target,
  Clock,
  MessageSquare,
  Building2,
} from "lucide-react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"

export default function CelebrityInterviewPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const ceoId = params.ceoId as string
  const companyId = searchParams.get("company")

  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [micEnabled, setMicEnabled] = useState(true)
  const [cameraEnabled, setCameraEnabled] = useState(true)
  const [interviewStarted, setInterviewStarted] = useState(false)
  const [ceoResponse, setCeoResponse] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // CEO Data
  const ceoData = {
    "elon-musk": {
      name: "Elon Musk",
      company: "Tesla, SpaceX, X",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8UfxvpY3ZNV_TTYb0pFMpb05L45B2XnLKA&s",
      personality: "Direct, Rapid-fire, First-principles",
      videoId: "fLbx2PJ4pqE" , // Example YouTube video ID
      questions: [
        {
          id: 1,
          type: "Technical Problem Solving",
          question:
            companyId === "tesla"
              ? "You're tasked with reducing the cost of electric vehicle batteries by 50%. Walk me through your approach using first principles thinking."
              : "You're tasked with reducing the cost of electric vehicle batteries by 50%. Walk me through your approach using first principles thinking.",
          followUps: [
            "What assumptions are you making about current battery technology?",
            "How would you validate these cost reduction strategies?",
            "What's the biggest technical hurdle you'd expect to face?",
          ],
          ceoStyle: "Interrupts with rapid follow-ups, challenges assumptions immediately",
          timeLimit: 300,
        },
        {
          id: 2,
          type: "Innovation Challenge",
          question:
            companyId === "tesla"
              ? "Design the next generation of Tesla's Autopilot system. What would you change and why?"
              : "Design a transportation system for Mars. You have unlimited budget but physics still applies. Go.",
          followUps: [
            "Why did you choose that approach over alternatives?",
            "How do you handle edge cases and safety concerns?",
            "What's your backup plan if the primary system fails?",
          ],
          ceoStyle: "Gets excited about innovative ideas, pushes for technical details",
          timeLimit: 420,
        },
        {
          id: 3,
          type: "First Principles",
          question:
            companyId === "tesla"
              ? "Everyone says sustainable transport is too expensive. Convince me they're wrong, starting from first principles."
              : "Everyone says autonomous driving is impossible to solve. Convince me they're wrong, but start from first principles.",
          followUps: [
            "What fundamental assumptions is the industry making incorrectly?",
            "How do you handle the economic constraints?",
            "When will we achieve true sustainability at scale?",
          ],
          ceoStyle: "Challenges conventional wisdom, demands proof and data",
          timeLimit: 360,
        },
      ],
      responses: {
        intro:
          companyId === "tesla"
            ? "Alright, so you want to work at Tesla. I don't have much time, so let's make this count. I'm looking for someone who can think from first principles and solve impossible problems. Tesla isn't for everyone - we work hard and we move fast. Ready?"
            : "Alright, let's get started. I don't have much time, so let's make this count. I'm looking for someone who can think from first principles and solve impossible problems. Ready?",
        encouragement: [
          "Interesting approach. Keep going.",
          "That's not conventional thinking. I like that.",
          "You're on the right track. What's next?",
        ],
        challenges: [
          "But why? That seems like you're just accepting the status quo.",
          "I think you're missing something fundamental here.",
          "That's what everyone says. Think deeper.",
        ],
        transitions: [
          "Okay, let's move to something more challenging.",
          "Time for a different kind of problem.",
          "Here's where it gets interesting.",
        ],
      },
    },
    "tim-cook": {
      name: "Tim Cook",
      company: "Apple",
      avatar: "https://imageio.forbes.com/specials-images/imageserve/68753f8f6c165938a0323dba/TOPSHOT-US-TECH-APPLE-HARDWARE-COMPUTERS/960x0.jpg?format=jpg&width=960",
      personality: "Thoughtful, Values-driven, Strategic",
       videoId: "D80RTRjP1tQ" ,
      questions: [
        {
          id: 1,
          type: "Values & Ethics",
          question:
            companyId === "apple"
              ? "At Apple, we believe privacy is a fundamental human right. Tell me about a time when you had to choose between user convenience and privacy protection."
              : "Tell me about a time when you had to choose between profit and doing what's right. How did you approach that decision?",
          followUps: [
            "How did you communicate this decision to stakeholders?",
            "What was the long-term impact of your choice?",
            "How do you balance user needs with ethical considerations?",
          ],
          ceoStyle: "Listens carefully, asks thoughtful follow-ups about values alignment",
          timeLimit: 240,
        },
        {
          id: 2,
          type: "Customer Experience",
          question:
            companyId === "apple"
              ? "Our customers are at the heart of everything we do at Apple. How would you improve the experience for someone buying their first iPhone?"
              : "Our customers are at the heart of everything we do. Describe how you would improve the experience for someone buying their first iPhone.",
          followUps: [
            "How would you measure the success of these improvements?",
            "What about customers who aren't tech-savvy?",
            "How does this align with our privacy principles?",
          ],
          ceoStyle: "Focuses on customer empathy and attention to detail",
          timeLimit: 300,
        },
        {
          id: 3,
          type: "Strategic Vision",
          question:
            companyId === "apple"
              ? "Apple is known for saying no to many good ideas to focus on great ones. How would you decide what Apple should work on next?"
              : "Privacy is a fundamental human right. How would you design a new product feature that's both innovative and privacy-preserving?",
          followUps: [
            "How do you balance innovation with our core values?",
            "What trade-offs are you willing to make?",
            "How would you explain this to a non-technical user?",
          ],
          ceoStyle: "Emphasizes values, long-term thinking, and user trust",
          timeLimit: 360,
        },
      ],
      responses: {
        intro:
          companyId === "apple"
            ? "Thank you for your interest in Apple. I'm excited to learn more about you and how you think about the challenges we face at Apple. Our values are at the core of everything we do, so let's start with something close to our heart."
            : "Thank you for your interest in Apple. I'm excited to learn more about you and how you think about the challenges we face. Let's start with something close to our values.",
        encouragement: [
          "That's a thoughtful perspective.",
          "I appreciate how you're thinking about the user experience.",
          "That aligns well with our values.",
        ],
        challenges: [
          "How would you ensure that approach scales globally?",
          "What about users who might see this differently?",
          "Have you considered the long-term implications?",
        ],
        transitions: [
          "Let's explore another aspect of this role.",
          "I'd like to understand your thinking on a different topic.",
          "Here's another scenario I'd like your thoughts on.",
        ],
      },
    },
    "satya-nadella": {
      name: "Satya Nadella",
      company: "Microsoft",
      avatar: "https://imageio.forbes.com/specials-images/imageserve/5d6ae14f673aa300083caf99/0x0.jpg?format=jpg&crop=2923,2926,x3051,y26,safe&height=416&width=416&fit=bounds",
      personality: "Empathetic, Growth-minded, Collaborative",
      videoId: "kexuG-YcQFA" ,
      questions: [
        {
          id: 1,
          type: "Growth Mindset",
          question:
            companyId === "microsoft"
              ? "At Microsoft, we believe in empowering every person and organization on the planet to achieve more. Tell me about a time when you learned from failure and how it shaped your approach."
              : "Tell me about a time when you learned from failure and how it shaped your approach to problem-solving.",
          followUps: [
            "How did you share these learnings with your team?",
            "What would you do differently now?",
            "How do you foster a growth mindset in others?",
          ],
          ceoStyle: "Shows genuine interest in learning and growth, asks follow-ups about empathy",
          timeLimit: 240,
        },
        {
          id: 2,
          type: "Collaboration",
          question:
            companyId === "microsoft"
              ? "Microsoft's mission is to empower every person and organization. How would you design a solution that brings people together rather than divides them?"
              : "How do you foster a growth mindset in your team, especially when facing challenging projects?",
          followUps: [
            "How would you measure the success of collaboration?",
            "What about when team members have conflicting views?",
            "How does empathy play a role in your approach?",
          ],
          ceoStyle: "Emphasizes collaboration, empathy, and inclusive thinking",
          timeLimit: 300,
        },
        {
          id: 3,
          type: "Inclusive Leadership",
          question:
            companyId === "microsoft"
              ? "Diversity and inclusion are core to Microsoft's culture. How would you ensure that a product or service you're building is accessible and inclusive for everyone?"
              : "Describe how you would make our products more inclusive and accessible to users with different abilities and backgrounds.",
          followUps: [
            "How do you identify blind spots in your thinking?",
            "What role does diverse feedback play in your process?",
            "How would you measure inclusive impact?",
          ],
          ceoStyle: "Focuses on empathy, inclusion, and continuous learning",
          timeLimit: 360,
        },
      ],
      responses: {
        intro:
          companyId === "microsoft"
            ? "Welcome, and thank you for your interest in Microsoft. I'm excited to learn about your journey and how you think about empowering others. At Microsoft, we believe that when we empower others to achieve more, we all succeed. Let's start our conversation."
            : "Welcome, and thank you for your interest in joining us. I'm excited to learn about your journey and how you think about empowering others. Let's start our conversation.",
        encouragement: [
          "That's a great example of growth mindset thinking.",
          "I appreciate how you're considering the human impact.",
          "That shows real empathy and understanding.",
        ],
        challenges: [
          "How would you ensure that approach is inclusive for everyone?",
          "What about people who might not have the same advantages?",
          "How do you continue learning when you're successful?",
        ],
        transitions: [
          "Let's explore how you think about collaboration.",
          "I'd love to hear your thoughts on another scenario.",
          "Here's a different challenge I'd like your perspective on.",
        ],
      },
    },
  }

  const currentCEO = ceoData[ceoId as keyof typeof ceoData]
  const currentQ = currentCEO?.questions[currentQuestion]

  // Company context for display
  const companyContext = companyId
    ? {
        tesla: { name: "Tesla", color: "red" },
        apple: { name: "Apple", color: "gray" },
        microsoft: { name: "Microsoft", color: "blue" },
      }[companyId]
    : null

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  useEffect(() => {
    if (interviewStarted && currentCEO) {
      setIsTyping(true)
      setTimeout(() => {
        setCeoResponse(currentCEO.responses.intro)
        setIsTyping(false)
      }, 2000)
    }
  }, [interviewStarted, currentCEO])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const startInterview = () => {
    setInterviewStarted(true)
    setIsRecording(true)
  }

  const simulateCEOResponse = (type: "encouragement" | "challenge" | "transition") => {
    if (!currentCEO) return

    setIsTyping(true)
    setTimeout(() => {
      const responses = currentCEO.responses[type]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setCeoResponse(randomResponse)
      setIsTyping(false)
    }, 1500)
  }

  const nextQuestion = () => {
    if (currentQuestion < currentCEO.questions.length - 1) {
      simulateCEOResponse("transition")
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
        setTimeElapsed(0)
        setCeoResponse("")
      }, 3000)
    }
  }

  const finishInterview = () => {
    setIsRecording(false)
    const feedbackUrl = companyId ? `/feedback/celebrity/${ceoId}?company=${companyId}` : `/feedback/celebrity/${ceoId}`
    window.location.href = feedbackUrl
  }

  if (!currentCEO) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CEO Not Found</h2>
            <p className="text-gray-600 mb-6">The celebrity CEO you're looking for isn't available yet.</p>
            <Button asChild>
              <Link href="/celebrity-interviews">Browse Available CEOs</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
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
              <Link href={companyId ? "/company-selection" : "/celebrity-interviews"}>
                {companyId ? "Back to Companies" : "Back to CEOs"}
              </Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={currentCEO.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">
                    {currentCEO.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview with {currentCEO.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{currentCEO.company}</p>
              {companyContext && (
                <div className="flex justify-center mb-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Building2 className="h-3 w-3 mr-1" />
                    Preparing for {companyContext.name}
                  </Badge>
                </div>
              )}
              <Badge className="mb-4">{currentCEO.personality}</Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Camera Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Camera & Audio Check</CardTitle>
                  <CardDescription>
                    Make sure you're ready for the {currentCEO.name} experience
                    {companyContext && ` at ${companyContext.name}`}
                  </CardDescription>
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

              {/* Interview Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                  <CardDescription>
                    Prepare for {currentCEO.name}'s unique interview style
                    {companyContext && ` focused on ${companyContext.name}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold">{currentCEO.questions.length} Challenging Questions</p>
                      <p className="text-sm text-gray-600">
                        Expect {currentCEO.personality.toLowerCase()} style
                        {companyContext && ` tailored for ${companyContext.name}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">45-60 Minutes</p>
                      <p className="text-sm text-gray-600">Authentic interview duration</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Real-time Responses</p>
                      <p className="text-sm text-gray-600">AI responds like the actual CEO</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-semibold">Detailed Feedback</p>
                      <p className="text-sm text-gray-600">Performance analysis and improvement tips</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Start Interview Button */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={startInterview}
                disabled={!cameraEnabled || !micEnabled}
              >
                <Play className="h-5 w-5 mr-2" />
                Start Interview with {currentCEO.name}
                {companyContext && ` for ${companyContext.name}`}
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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
            </div>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
              <Star className="h-3 w-3 mr-1" />
              Celebrity Interview
            </Badge>
            {companyContext && (
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Building2 className="h-3 w-3 mr-1" />
                {companyContext.name}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {currentCEO.questions.length}
            </div>
            <div className="text-lg font-mono font-semibold text-purple-600">{formatTime(timeElapsed)}</div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Interview Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Feed with YouTube Embed */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                  {/* YouTube Player */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${currentCEO.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentCEO.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Your video feed overlay (placeholder) */}
                  <div className="absolute bottom-4 right-4 w-1/4 h-1/4 bg-gray-800 rounded-lg border-2 border-gray-500 flex items-center justify-center text-white">
                     <div className="text-center">
                       <Camera className="h-8 w-8 mx-auto opacity-50" />
                       <p className="text-xs opacity-75">You</p>
                     </div>
                  </div>

                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">
                        LIVE with {currentCEO.name}
                        {companyContext && ` (${companyContext.name})`}
                      </span>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/30 p-2 rounded-full backdrop-blur-sm">
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
                    <CardDescription className="mt-1">
                      <Badge className="mr-2 bg-blue-100 text-blue-800">{currentQ.type}</Badge>
                      Time limit: {Math.floor(currentQ.timeLimit / 60)} minutes
                      {companyContext && (
                        <Badge variant="outline" className="ml-2 border-blue-300">
                          {companyContext.name} Focus
                        </Badge>
                      )}
                    </CardDescription>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Volume2 className="h-6 w-6 text-purple-600" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-900 mb-4">{currentQ.question}</p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>{currentCEO.name}'s Style:</strong> {currentQ.ceoStyle}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CEO Response */}
            {ceoResponse && (
              <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={currentCEO.avatar} />
                      <AvatarFallback>
                        {currentCEO.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{currentCEO.name}</CardTitle>
                      <CardDescription>{isTyping ? "typing..." : "just now"}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isTyping ? (
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                      <span className="text-sm text-gray-600">thinking...</span>
                    </div>
                  ) : (
                    <p className="text-gray-900">{ceoResponse}</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="space-x-3">
                <Button variant="outline" onClick={() => simulateCEOResponse("encouragement")}>
                  <Zap className="h-4 w-4 mr-2" />
                  Get Encouragement
                </Button>
                <Button variant="outline" onClick={() => simulateCEOResponse("challenge")}>
                  <Target className="h-4 w-4 mr-2" />
                  Get Challenge
                </Button>
              </div>

              <div className="space-x-3">
                {currentQuestion < currentCEO.questions.length - 1 ? (
                  <Button onClick={nextQuestion} className="bg-purple-600 hover:bg-purple-700">
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
            {/* CEO Profile */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-3 border-2 border-purple-200">
                  <AvatarImage src={currentCEO.avatar} />
                  <AvatarFallback>{currentCEO.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{currentCEO.name}</CardTitle>
                <CardDescription>{currentCEO.company}</CardDescription>
                {companyContext && (
                  <Badge className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Building2 className="h-3 w-3 mr-1" />
                    {companyContext.name} Interview
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge className="bg-purple-100 text-purple-800 text-sm py-1 px-3">{currentCEO.personality}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Interview Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2 font-medium text-gray-600">
                      <span>Questions Completed</span>
                      <span>{currentQuestion + 1}/{currentCEO.questions.length}</span>
                    </div>
                    <Progress value={((currentQuestion + 1) / currentCEO.questions.length) * 100} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Potential Follow-ups</CardTitle>
                <CardDescription>Questions {currentCEO.name} might ask</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentQ.followUps.map((followUp, index) => (
                    <div key={index} className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-800">"{followUp}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
