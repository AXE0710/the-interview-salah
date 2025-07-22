"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, Users, AlertCircle } from "lucide-react"

interface Role {
  id: string
  title: string
  description: string
  color: string
  icon: any
}

interface TeamPortalProps {
  roles: Role[]
  onRoleSelect: (roleId: string) => void
  onBack: () => void
}

export function TeamPortal({ roles, onRoleSelect, onBack }: TeamPortalProps) {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [teamMembers] = useState([
    { name: "Alex Chen", role: "team-lead", status: "ready" },
    { name: "Sarah Kim", role: "backend-dev", status: "ready" },
    { name: "Mike Johnson", role: "qa-skeptic", status: "joining" },
    { name: "You", role: selectedRole, status: "selecting" },
  ])

  const problemStatement = {
    title: "E-Commerce Microservices Architecture",
    description:
      "Design and implement a scalable e-commerce platform with microservices architecture, including user authentication, product catalog, shopping cart, and payment processing.",
    timeLimit: "90 minutes",
    difficulty: "Advanced",
    requirements: [
      "RESTful API design with proper error handling",
      "Database schema for products, users, and orders",
      "Real-time cart updates using WebSockets",
      "Payment integration simulation",
      "Unit tests for critical functions",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Clock className="w-3 h-3 mr-1" />
              Waiting for Team
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Problem Statement */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Problem Statement</CardTitle>
                  <Badge variant="destructive">{problemStatement.difficulty}</Badge>
                </div>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {problemStatement.timeLimit}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-3">{problemStatement.title}</h3>
                <p className="text-gray-600 mb-4">{problemStatement.description}</p>

                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {problemStatement.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Role Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Role</CardTitle>
                <CardDescription>
                  Choose the role that best matches your expertise. The AI will evaluate your performance based on
                  role-specific criteria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {roles.map((role) => {
                    const IconComponent = role.icon
                    const isSelected = selectedRole === role.id
                    const isOccupied = teamMembers.some((member) => member.role === role.id && member.name !== "You")

                    return (
                      <Card
                        key={role.id}
                        className={`cursor-pointer transition-all ${
                          isSelected
                            ? "ring-2 ring-purple-500 bg-purple-50"
                            : isOccupied
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:shadow-md"
                        }`}
                        onClick={() => !isOccupied && setSelectedRole(role.id)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${role.color}`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-sm">{role.title}</CardTitle>
                              {isOccupied && (
                                <Badge variant="secondary" className="text-xs mt-1">
                                  Occupied
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs">{role.description}</CardDescription>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {selectedRole && (
                  <div className="mt-6 pt-4 border-t">
                    <Button
                      onClick={() => onRoleSelect(selectedRole)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Join Collaboration Workspace
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Team Status */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Team Status</span>
                </CardTitle>
                <CardDescription>Team formation progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Team Formation</span>
                      <span>3/4 Ready</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    {teamMembers.map((member, index) => {
                      const role = roles.find((r) => r.id === member.role)
                      const statusColor = {
                        ready: "bg-green-100 text-green-800",
                        joining: "bg-yellow-100 text-yellow-800",
                        selecting: "bg-blue-100 text-blue-800",
                      }[member.status]

                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-sm">{member.name}</div>
                            <div className="text-xs text-gray-500">{role?.title || "Role not selected"}</div>
                          </div>
                          <Badge variant="secondary" className={statusColor}>
                            {member.status}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">AI Analysis Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Role Performance Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Code Collaboration Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Communication Dynamics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Real-time Feedback</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
