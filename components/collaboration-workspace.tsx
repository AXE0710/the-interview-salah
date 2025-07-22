"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Users,
  Code,
  MessageSquare,
  PenTool,
  Play,
  Bug,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { CodeEditor } from "@/components/code-editor"
import { TeamChat } from "@/components/team-chat"
import { DigitalWhiteboard } from "@/components/digital-whiteboard"
import { AIAnalysisDashboard } from "@/components/ai-analysis-dashboard"

interface CollaborationWorkspaceProps {
  role: string
  onBack: () => void
}

export function CollaborationWorkspace({ role, onBack }: CollaborationWorkspaceProps) {
  const [timeRemaining, setTimeRemaining] = useState(90 * 60) // 90 minutes in seconds
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [activeTab, setActiveTab] = useState("code")

  const roleInfo = {
    "team-lead": { title: "Team Lead", color: "bg-purple-100 text-purple-800" },
    "backend-dev": { title: "Backend Developer", color: "bg-blue-100 text-blue-800" },
    "qa-skeptic": { title: "QA/Skeptic", color: "bg-red-100 text-red-800" },
    "ui-ux": { title: "UI/UX Specialist", color: "bg-green-100 text-green-800" },
  }[role] || { title: "Unknown Role", color: "bg-gray-100 text-gray-800" }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progressPercentage = ((90 * 60 - timeRemaining) / (90 * 60)) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Session
              </Button>
              <div className="flex items-center space-x-2">
                <Badge className={roleInfo.color}>{roleInfo.title}</Badge>
                <span className="text-sm text-gray-500">E-Commerce Microservices Challenge</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-mono font-bold text-red-600">{formatTime(timeRemaining)}</div>
                <div className="text-xs text-gray-500">Time Remaining</div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={isVideoOn ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </Button>
                <Button
                  variant={isAudioOn ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setIsAudioOn(!isAudioOn)}
                >
                  {isAudioOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <Progress value={progressPercentage} className="h-1" />
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Video Call Panel */}
        <div className="w-80 border-r bg-white p-4">
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Team Video Call
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Alex Chen", role: "Team Lead", active: true },
                { name: "Sarah Kim", role: "Backend Dev", active: true },
                { name: "Mike Johnson", role: "QA/Skeptic", active: false },
                { name: "You", role: roleInfo.title, active: isVideoOn },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`aspect-video rounded-lg flex items-center justify-center text-xs font-medium ${
                    member.active
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <div className="text-center">
                    <div>{member.name}</div>
                    <div className="text-xs opacity-75">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Quick Actions</h4>
            <div className="space-y-1">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Play className="w-3 h-3 mr-2" />
                Run Tests
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Bug className="w-3 h-3 mr-2" />
                Debug Mode
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <CheckCircle className="w-3 h-3 mr-2" />
                Deploy Preview
              </Button>
            </div>
          </div>

          {/* Team Status */}
          <div className="mt-6">
            <h4 className="font-semibold text-sm mb-2">Team Progress</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span>API Design</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Done
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Database Schema</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Frontend Components</span>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  Pending
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Main Workspace */}
        <div className="flex-1 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-4 bg-white border-b rounded-none">
              <TabsTrigger value="code" className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Code Editor</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Team Chat</span>
              </TabsTrigger>
              <TabsTrigger value="whiteboard" className="flex items-center space-x-2">
                <PenTool className="w-4 h-4" />
                <span>Whiteboard</span>
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>AI Analysis</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="code" className="flex-1 m-0">
              <CodeEditor role={role} />
            </TabsContent>

            <TabsContent value="chat" className="flex-1 m-0">
              <TeamChat role={role} />
            </TabsContent>

            <TabsContent value="whiteboard" className="flex-1 m-0">
              <DigitalWhiteboard />
            </TabsContent>

            <TabsContent value="analysis" className="flex-1 m-0">
              <AIAnalysisDashboard role={role} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
