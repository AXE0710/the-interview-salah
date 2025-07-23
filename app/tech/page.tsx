"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Smartphone, Server, Shield, BarChart3, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TechRoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const techRoles = [
    {
      id: "frontend",
      title: "Frontend Engineer",
      description: "Build user interfaces and experiences",
      icon: Code,
      color: "bg-blue-500",
      skills: ["React", "TypeScript", "CSS", "UI/UX"],
      projects: ["E-commerce Platform", "Dashboard App", "Mobile Web App"],
      difficulty: "Beginner to Advanced",
      teamSize: "4-6 members",
    },
    {
      id: "backend",
      title: "Backend Engineer",
      description: "Design APIs and server architecture",
      icon: Server,
      color: "bg-green-500",
      skills: ["Node.js", "Python", "Databases", "APIs"],
      projects: ["Microservices API", "Real-time Chat", "Data Pipeline"],
      difficulty: "Intermediate to Advanced",
      teamSize: "4-6 members",
    },
    {
      id: "fullstack",
      title: "Full Stack Engineer",
      description: "End-to-end application development",
      icon: Database,
      color: "bg-purple-500",
      skills: ["React", "Node.js", "Databases", "DevOps"],
      projects: ["SaaS Platform", "Social Network", "Analytics Tool"],
      difficulty: "Advanced",
      teamSize: "3-5 members",
    },
    {
      id: "mobile",
      title: "Mobile Engineer",
      description: "Build native and cross-platform apps",
      icon: Smartphone,
      color: "bg-orange-500",
      skills: ["React Native", "Swift", "Kotlin", "Flutter"],
      projects: ["Social Media App", "Fitness Tracker", "E-commerce App"],
      difficulty: "Intermediate to Advanced",
      teamSize: "3-4 members",
    },
    {
      id: "devops",
      title: "DevOps Engineer",
      description: "Infrastructure and deployment automation",
      icon: Shield,
      color: "bg-red-500",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      projects: ["Cloud Migration", "Monitoring System", "Auto-scaling"],
      difficulty: "Advanced",
      teamSize: "2-4 members",
    },
    {
      id: "designer",
      title: "UI/UX Designer",
      description: "Design user experiences and interfaces",
      icon: Palette,
      color: "bg-pink-500",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      projects: ["Mobile App Redesign", "Design System", "User Research"],
      difficulty: "Beginner to Advanced",
      teamSize: "4-6 members",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">TechCollab</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                <Trophy className="w-3 h-3 mr-1" />
                Level Up Your Skills
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Code, Collaborate, and Level Up</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join real project teams, tackle coding challenges, and develop both technical and collaboration skills. Get
            matched with teammates and work on production-ready projects.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Team-based projects</span>
            </div>
            <div className="flex items-center space-x-1">
              <Code className="w-4 h-4" />
              <span>Real coding challenges</span>
            </div>
            <div className="flex items-center space-x-1">
              <Trophy className="w-4 h-4" />
              <span>Gamified progression</span>
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Choose Your Tech Role</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techRoles.map((role) => {
              const IconComponent = role.icon
              return (
                <Card
                  key={role.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedRole === role.id ? "ring-2 ring-emerald-500 shadow-lg" : ""
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {role.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Sample Projects</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {role.projects.slice(0, 2).map((project, index) => (
                            <li key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-gray-400 rounded-full" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{role.difficulty}</span>
                        <span>{role.teamSize}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        {selectedRole && (
          <div className="text-center">
            <Link href={`/tech/${selectedRole}`}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start as {techRoles.find((r) => r.id === selectedRole)?.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Real Code Challenges</h3>
            <p className="text-sm text-gray-600">Work on production-quality code with modern tools</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Cross-functional Teams</h3>
            <p className="text-sm text-gray-600">Collaborate with designers, PMs, and other engineers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Gamified Learning</h3>
            <p className="text-sm text-gray-600">Earn XP, unlock achievements, and level up</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Skill Tracking</h3>
            <p className="text-sm text-gray-600">Monitor progress across technical and soft skills</p>
          </div>
        </div>
      </section>
    </div>
  )
}
