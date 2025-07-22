"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Code, AlertTriangle, CheckCircle, Users } from "lucide-react"

interface TeamChatProps {
  role: string
}

export function TeamChat({ role }: TeamChatProps) {
  const [message, setMessage] = useState("")
  const [messages] = useState([
    {
      id: 1,
      author: "Alex Chen",
      role: "Team Lead",
      message: "Alright team, let's start with the API design. Sarah, can you take the lead on the products endpoint?",
      timestamp: "14:32",
      type: "message",
    },
    {
      id: 2,
      author: "Sarah Kim",
      role: "Backend Dev",
      message:
        "I'm thinking we should implement pagination and filtering from the start. What do you think about the data structure?",
      timestamp: "14:33",
      type: "message",
    },
    {
      id: 3,
      author: "Mike Johnson",
      role: "QA/Skeptic",
      message:
        "Before we dive into implementation, shouldn't we define our error handling strategy? I'm seeing potential issues with the current approach.",
      timestamp: "14:34",
      type: "concern",
    },
    {
      id: 4,
      author: "You",
      role: role,
      message:
        "Good point Mike. I've added some basic error handling middleware, but we should standardize our error responses.",
      timestamp: "14:35",
      type: "message",
    },
    {
      id: 5,
      author: "Sarah Kim",
      role: "Backend Dev",
      message: "I've pushed the products API. Can someone review the pagination logic?",
      timestamp: "14:36",
      type: "code-share",
    },
    {
      id: 6,
      author: "Alex Chen",
      role: "Team Lead",
      message: "Great progress everyone! We're on track. Let's focus on the cart functionality next.",
      timestamp: "14:37",
      type: "update",
    },
  ])

  const getMessageIcon = (type: string) => {
    switch (type) {
      case "concern":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case "code-share":
        return <Code className="w-4 h-4 text-blue-500" />
      case "update":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return null
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Team Lead":
        return "bg-purple-100 text-purple-800"
      case "Backend Dev":
        return "bg-blue-100 text-blue-800"
      case "QA/Skeptic":
        return "bg-red-100 text-red-800"
      case "UI/UX Specialist":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Chat Header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Team Discussion
          </h3>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            4 members active
          </Badge>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {msg.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-sm">{msg.author}</span>
                <Badge variant="secondary" className={`text-xs ${getRoleColor(msg.role)}`}>
                  {msg.role}
                </Badge>
                <span className="text-xs text-gray-500">{msg.timestamp}</span>
                {getMessageIcon(msg.type)}
              </div>
              <div
                className={`text-sm p-3 rounded-lg ${
                  msg.type === "concern"
                    ? "bg-yellow-50 border border-yellow-200"
                    : msg.type === "code-share"
                      ? "bg-blue-50 border border-blue-200"
                      : msg.type === "update"
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50"
                }`}
              >
                {msg.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && setMessage("")}
            className="flex-1"
          />
          <Button onClick={() => setMessage("")}>
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 mt-2">
          <Button variant="outline" size="sm">
            <Code className="w-3 h-3 mr-1" />
            Share Code
          </Button>
          <Button variant="outline" size="sm">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Raise Concern
          </Button>
          <Button variant="outline" size="sm">
            <CheckCircle className="w-3 h-3 mr-1" />
            Mark Complete
          </Button>
        </div>
      </div>
    </div>
  )
}
