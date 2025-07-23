"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Users, BarChart3, TrendingUp, Building, Target, Plus, Edit, Download, Upload } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [selectedCohort, setSelectedCohort] = useState("all")

  const organizationStats = {
    totalUsers: 2847,
    activeUsers: 2156,
    completedSims: 18943,
    avgEngagement: 73,
    departments: 12,
    cohorts: 8,
  }

  const scenarios = [
    {
      id: 1,
      title: "Pre-mortem Risk Assessment",
      description: "Practice surfacing risks in technical design reviews",
      category: "Engineering",
      difficulty: "Intermediate",
      avgDuration: "12 min",
      completions: 1247,
      avgScore: 78,
      status: "active",
    },
    {
      id: 2,
      title: "Stakeholder Alignment",
      description: "Navigate conflicting priorities across teams",
      category: "Product",
      difficulty: "Advanced",
      avgDuration: "18 min",
      completions: 892,
      avgScore: 71,
      status: "active",
    },
    {
      id: 3,
      title: "Leadership Vacuum",
      description: "Step up when no clear leader emerges",
      category: "Leadership",
      difficulty: "Beginner",
      avgDuration: "10 min",
      completions: 2156,
      avgScore: 82,
      status: "active",
    },
  ]

  const cohorts = [
    {
      id: 1,
      name: "Q1 2024 New Hires",
      size: 156,
      department: "Engineering",
      startDate: "2024-01-15",
      progress: 67,
      status: "active",
    },
    {
      id: 2,
      name: "Product Leadership Program",
      size: 24,
      department: "Product",
      startDate: "2024-02-01",
      progress: 89,
      status: "active",
    },
    {
      id: 3,
      name: "Sales Team Onboarding",
      size: 43,
      department: "Sales",
      startDate: "2024-01-08",
      progress: 100,
      status: "completed",
    },
  ]

  const departmentInsights = [
    {
      department: "Engineering",
      users: 1247,
      avgScore: 79,
      topSkill: "Fixer",
      weakestSkill: "Challenger",
      engagement: 81,
    },
    {
      department: "Product",
      users: 324,
      avgScore: 74,
      topSkill: "Synthesizer",
      weakestSkill: "Explorer",
      engagement: 76,
    },
    {
      department: "Design",
      users: 156,
      avgScore: 82,
      topSkill: "Explorer",
      weakestSkill: "Fixer",
      engagement: 88,
    },
    {
      department: "Sales",
      users: 289,
      avgScore: 71,
      topSkill: "Supporter",
      weakestSkill: "Challenger",
      engagement: 65,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">CollabLearn</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Learning & Development</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Scenario
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="cohorts">Cohorts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Organization Stats */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Total Users</p>
                      <p className="font-semibold">{organizationStats.totalUsers.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Active Users</p>
                      <p className="font-semibold">{organizationStats.activeUsers.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Simulations</p>
                      <p className="font-semibold">{organizationStats.completedSims.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Engagement</p>
                      <p className="font-semibold">{organizationStats.avgEngagement}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-indigo-500" />
                    <div>
                      <p className="text-sm text-gray-600">Departments</p>
                      <p className="font-semibold">{organizationStats.departments}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-pink-500" />
                    <div>
                      <p className="text-sm text-gray-600">Cohorts</p>
                      <p className="font-semibold">{organizationStats.cohorts}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Department Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Department Performance Overview</CardTitle>
                <CardDescription>Key metrics across organizational departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentInsights.map((dept) => (
                    <div key={dept.department} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
                          {dept.department.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{dept.department}</h3>
                          <p className="text-sm text-gray-600">{dept.users} users</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Avg Score</p>
                          <p className="font-semibold">{dept.avgScore}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Top Skill</p>
                          <Badge variant="secondary">{dept.topSkill}</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Focus Area</p>
                          <Badge variant="outline">{dept.weakestSkill}</Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Engagement</p>
                          <p className="font-semibold">{dept.engagement}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Scenario Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Scenario
              </Button>
            </div>

            <div className="grid gap-4">
              {scenarios.map((scenario) => (
                <Card key={scenario.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{scenario.title}</h3>
                          <Badge variant={scenario.status === "active" ? "default" : "secondary"}>
                            {scenario.status}
                          </Badge>
                          <Badge variant="outline">{scenario.category}</Badge>
                          <Badge variant="outline">{scenario.difficulty}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{scenario.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span>Duration: {scenario.avgDuration}</span>
                          <span>Completions: {scenario.completions.toLocaleString()}</span>
                          <span>Avg Score: {scenario.avgScore}%</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cohorts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Cohort Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Cohort
              </Button>
            </div>

            <div className="grid gap-4">
              {cohorts.map((cohort) => (
                <Card key={cohort.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{cohort.name}</h3>
                          <Badge variant={cohort.status === "active" ? "default" : "secondary"}>{cohort.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                          <span>{cohort.size} members</span>
                          <span>{cohort.department}</span>
                          <span>Started: {new Date(cohort.startDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Progress:</span>
                          <div className="flex-1 max-w-xs">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${cohort.progress}%` }} />
                            </div>
                          </div>
                          <span className="text-sm font-medium">{cohort.progress}%</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Users className="w-4 h-4 mr-2" />
                          Manage
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Reports
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Organizational Impact Metrics</CardTitle>
                <CardDescription>
                  Measure the ROI and effectiveness of the collaboration training program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">+23%</div>
                    <p className="text-sm text-gray-600">Project Success Rate</p>
                    <p className="text-xs text-gray-500 mt-1">vs. pre-training baseline</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">+18%</div>
                    <p className="text-sm text-gray-600">Employee Retention</p>
                    <p className="text-xs text-gray-500 mt-1">12-month retention rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">+31%</div>
                    <p className="text-sm text-gray-600">Internal Mobility</p>
                    <p className="text-xs text-gray-500 mt-1">cross-team promotions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Trends</CardTitle>
                  <CardDescription>Platform engagement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Daily Active Users</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Weekly Simulations</span>
                      <span className="font-semibold">3,892</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Avg Session Duration</span>
                      <span className="font-semibold">14.2 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Completion Rate</span>
                      <span className="font-semibold">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Development Impact</CardTitle>
                  <CardDescription>Organization-wide skill improvements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Problem Solving (Fixer)</span>
                        <span>+15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Risk Assessment (Challenger)</span>
                        <span>+28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "72%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Innovation (Explorer)</span>
                        <span>+19%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "68%" }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Configuration</CardTitle>
                  <CardDescription>Global settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" defaultValue="Google" />
                  </div>
                  <div>
                    <Label htmlFor="default-duration">Default Simulation Duration</Label>
                    <Select defaultValue="15">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="20">20 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="benchmark-level">Benchmark Level</Label>
                    <Select defaultValue="l4-l5">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="l3-l4">L3-L4 Average</SelectItem>
                        <SelectItem value="l4-l5">L4-L5 Average</SelectItem>
                        <SelectItem value="l5-l6">L5-L6 Average</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Import/export and backup options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Import User Data
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Analytics
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Backup Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
