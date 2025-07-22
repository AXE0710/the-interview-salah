"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Code, MessageSquare, PresentationIcon as PresentationChart, Clock, Target } from "lucide-react"
import { TeamPortal } from "@/components/team-portal"
import { CollaborationWorkspace } from "@/components/collaboration-workspace"

export default function Home() {
  const [currentView, setCurrentView] = useState<"landing" | "portal" | "workspace">("landing")
  const [selectedRole, setSelectedRole] = useState<string>("")

  const roles = [
    {
      id: "team-lead",
      title: "Team Lead",
      description: "Coordinate team efforts, delegate tasks, and ensure project delivery",
      color: "bg-purple-100 text-purple-800",
      icon: Users,
    },
    {
      id: "backend-dev",
      title: "Backend Developer",
      description: "Design and implement server-side logic, APIs, and database integration",
      color: "bg-blue-100 text-blue-800",
      icon: Code,
    },
    {
      id: "qa-skeptic",
      title: "QA/Skeptic",
      description: "Test functionality, identify bugs, and challenge assumptions constructively",
      color: "bg-red-100 text-red-800",
      icon: Target,
    },
    {
      id: "ui-ux",
      title: "UI/UX Specialist",
      description: "Create intuitive interfaces and optimize user experience",
      color: "bg-green-100 text-green-800",
      icon: PresentationChart,
    },
  ]

  if (currentView === "workspace") {
    return <CollaborationWorkspace role={selectedRole} onBack={() => setCurrentView("portal")} />
  }

  if (currentView === "portal") {
    return (
      <TeamPortal
        roles={roles}
        onRoleSelect={(role) => {
          setSelectedRole(role)
          setCurrentView("workspace")
        }}
        onBack={() => setCurrentView("landing")}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TechSprint Collaborative Challenge</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Clock className="w-3 h-3 mr-1" />
              Live Session
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Collaborative Technical Challenge</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Most interviews test how you talk about solutions.
This module tests if you can actually build one—together.
          </p>
          <Button
            size="lg"
            onClick={() => setCurrentView("portal")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Join Team Portal
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-lg">Role Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Each team member receives a specific functional role with clear responsibilities and evaluation
                  criteria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-lg">Live Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrated code editor, video calls, and digital whiteboard for seamless real-time teamwork.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-lg">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced AI monitors collaboration patterns, code contributions, and communication dynamics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardHeader className="text-center">
                <PresentationChart className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <CardTitle className="text-lg">Performance Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed feedback on role performance, technical contributions, and team collaboration effectiveness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roles Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-12">Available Roles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role) => {
              const IconComponent = role.icon
              return (
                <Card key={role.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${role.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
