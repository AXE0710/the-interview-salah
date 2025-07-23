"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Palette, Smartphone, Server, Users, Target, Clock, UserCog } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const roles = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "Build user interfaces with React & TypeScript",
      icon: Code,
      color: "bg-blue-500",
      skills: ["React", "TypeScript", "CSS", "UI/UX"],
      type: "developer",
    },
    {
      id: "backend",
      title: "Backend Developer",
      description: "Create APIs and server architecture",
      icon: Server,
      color: "bg-green-500",
      skills: ["Node.js", "Python", "Databases", "APIs"],
      type: "developer",
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "End-to-end application development",
      icon: Database,
      color: "bg-purple-500",
      skills: ["React", "Node.js", "Databases", "DevOps"],
      type: "developer",
    },
    {
      id: "mobile",
      title: "Mobile Developer",
      description: "Build mobile applications",
      icon: Smartphone,
      color: "bg-orange-500",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      type: "developer",
    },
    {
      id: "designer",
      title: "UI/UX Designer",
      description: "Design user experiences and interfaces",
      icon: Palette,
      color: "bg-pink-500",
      skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
      type: "developer",
    },
    {
      id: "manager",
      title: "Team Manager",
      description: "Lead the team and manage project tasks",
      icon: UserCog,
      color: "bg-indigo-500",
      skills: ["Project Management", "Team Leadership", "Task Planning", "Communication"],
      type: "manager",
    },
  ]

  const developerRoles = roles.filter((role) => role.type === "developer")
  const managerRoles = roles.filter((role) => role.type === "manager")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TeamCode</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn to Code in Teams</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join real project teams, collaborate on code, and learn how to work effectively with other developers.
            Master both technical skills and teamwork.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Team projects</span>
            </div>
            <div className="flex items-center space-x-1">
              <Code className="w-4 h-4" />
              <span>Real coding</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>Learn teamwork</span>
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="space-y-8">
            {/* Developer Roles */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-6">Developer Roles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developerRoles.map((role) => {
                  const IconComponent = role.icon
                  return (
                    <Card
                      key={role.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedRole === role.id ? "ring-2 ring-blue-500 shadow-lg" : ""
                      }`}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{role.title}</CardTitle>
                            <CardDescription>{role.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          {role.skills.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-gray-100 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Manager Role */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-6">Leadership Role</h3>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  {managerRoles.map((role) => {
                    const IconComponent = role.icon
                    return (
                      <Card
                        key={role.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                          selectedRole === role.id ? "ring-2 ring-indigo-500 shadow-lg" : ""
                        }`}
                        onClick={() => setSelectedRole(role.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{role.title}</CardTitle>
                              <CardDescription>{role.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1">
                            {role.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 bg-indigo-100 text-xs rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {selectedRole && (
          <div className="text-center">
            <Link href={`/dashboard-learn/${selectedRole}`}>
              <Button
                size="lg"
                className={
                  selectedRole === "manager" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-blue-600 hover:bg-blue-700"
                }
              >
                Start as {roles.find((r) => r.id === selectedRole)?.title}
              </Button>
            </Link>
          </div>
        )}

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-gray-600">Work with real teammates on shared projects</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Real Projects</h3>
            <p className="text-sm text-gray-600">Build actual applications with modern tools</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Timeline Management</h3>
            <p className="text-sm text-gray-600">Learn to work with deadlines and sprints</p>
          </div>
        </div>
      </section>
    </div>
  )
}
