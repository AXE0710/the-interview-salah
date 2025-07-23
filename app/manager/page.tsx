"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  TrendingUp,
  Target,
  AlertTriangle,
  CheckCircle,
  Star,
  BarChart3,
  UserCheck,
  Award,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import Link from "next/link"
import { TeamSkillRadar } from "@/components/team-skill-radar"

export default function ManagerDashboard() {
  const [selectedTeam, setSelectedTeam] = useState("engineering-team-1")

  const teamData = {
    name: "Engineering Team Alpha",
    size: 8,
    avgScore: 78,
    completedSims: 156,
    activeMembers: 7,
    skillStrengths: ["Fixer", "Supporter"],
    skillGaps: ["Challenger", "Explorer"],
  }

  const teamSkillData = [
    { skill: "Fixer", score: 85, benchmark: 75 },
    { skill: "Explorer", score: 62, benchmark: 70 },
    { skill: "Challenger", score: 58, benchmark: 72 },
    { skill: "Synthesizer", score: 74, benchmark: 68 },
    { skill: "Facilitator", score: 71, benchmark: 73 },
    { skill: "Supporter", score: 82, benchmark: 76 },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Anonymous Member A",
      role: "Senior Engineer",
      topSkill: "Fixer",
      growthArea: "Challenger",
      recentActivity: "3 sims this week",
      trend: "up",
    },
    {
      id: 2,
      name: "Anonymous Member B",
      role: "Engineer",
      topSkill: "Explorer",
      growthArea: "Synthesizer",
      recentActivity: "2 sims this week",
      trend: "stable",
    },
    {
      id: 3,
      name: "Anonymous Member C",
      role: "Staff Engineer",
      topSkill: "Synthesizer",
      growthArea: "Facilitator",
      recentActivity: "4 sims this week",
      trend: "up",
    },
    {
      id: 4,
      name: "Anonymous Member D",
      role: "Engineer",
      topSkill: "Supporter",
      growthArea: "Challenger",
      recentActivity: "1 sim this week",
      trend: "down",
    },
  ]

  const learningTracks = [
    {
      id: 1,
      title: "Improving Pre-Mortem Process",
      description: "Team-wide focus on risk assessment and challenging assumptions",
      targetSkill: "Challenger",
      enrolled: 6,
      avgProgress: 45,
      status: "active",
    },
    {
      id: 2,
      title: "Innovation & Exploration",
      description: "Developing creative problem-solving and idea generation",
      targetSkill: "Explorer",
      enrolled: 4,
      avgProgress: 23,
      status: "active",
    },
    {
      id: 3,
      title: "Effective Facilitation",
      description: "Leading meetings and guiding team discussions",
      targetSkill: "Facilitator",
      enrolled: 3,
      avgProgress: 78,
      status: "completed",
    },
  ]

  const insights = [
    {
      type: "strength",
      title: "Exceptional Problem Solving",
      description: "Your team scores 85% in the Fixer role, 10 points above the Google benchmark.",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      type: "opportunity",
      title: "Risk Assessment Gap",
      description:
        'Team consistently scores low on Challenger role. Consider assigning the "Pre-Mortem Process" track.',
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      type: "talent",
      title: "Emerging Leadership",
      description: "Anonymous Member C shows high aptitude for Synthesizer role in leadership scenarios.",
      icon: Star,
      color: "text-blue-600",
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
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">CollabLearn</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">Team Dashboard</h1>
                <p className="text-sm text-gray-600">Manager View</p>
              </div>
            </div>
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering-team-1">Engineering Team Alpha</SelectItem>
                <SelectItem value="engineering-team-2">Engineering Team Beta</SelectItem>
                <SelectItem value="product-team-1">Product Team Gamma</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Team Skills</TabsTrigger>
            <TabsTrigger value="learning">Learning Tracks</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Team Size</p>
                      <p className="font-semibold">{teamData.size} members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Avg Score</p>
                      <p className="font-semibold">{teamData.avgScore}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="font-semibold">{teamData.completedSims} sims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Active</p>
                      <p className="font-semibold">
                        {teamData.activeMembers}/{teamData.size} members
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Team Skill Overview */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Skill Map</CardTitle>
                    <CardDescription>
                      Collective strengths and development areas across collaboration roles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TeamSkillRadar data={teamSkillData} />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Team Strengths</h4>
                        <div className="space-y-1">
                          {teamData.skillStrengths.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-700 mb-2">Development Areas</h4>
                        <div className="space-y-1">
                          {teamData.skillGaps.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Target className="w-4 h-4 mr-2" />
                    Assign Learning Track
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Detailed Analytics
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Award className="w-4 h-4 mr-2" />
                    Recognize Achievement
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Team Members (Anonymous) */}
            <Card>
              <CardHeader>
                <CardTitle>Team Activity Overview</CardTitle>
                <CardDescription>Anonymous view of team member progress and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {member.name.split(" ")[2]}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm font-medium">Top Skill: {member.topSkill}</p>
                          <p className="text-sm text-gray-600">Growth: {member.growthArea}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{member.recentActivity}</p>
                          <div className="flex items-center space-x-1">
                            {member.trend === "up" && <ArrowUp className="w-3 h-3 text-green-500" />}
                            {member.trend === "down" && <ArrowDown className="w-3 h-3 text-red-500" />}
                            <span
                              className={`text-xs ${
                                member.trend === "up"
                                  ? "text-green-600"
                                  : member.trend === "down"
                                    ? "text-red-600"
                                    : "text-gray-600"
                              }`}
                            >
                              {member.trend === "up"
                                ? "Improving"
                                : member.trend === "down"
                                  ? "Needs attention"
                                  : "Stable"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Comparison vs Benchmark</CardTitle>
                  <CardDescription>How your team compares to Google L4-L5 average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamSkillData.map((skill) => (
                      <div key={skill.skill}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{skill.skill}</span>
                          <span className={`${skill.score > skill.benchmark ? "text-green-600" : "text-orange-600"}`}>
                            {skill.score}% vs {skill.benchmark}% benchmark
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.score}%` }} />
                          </div>
                          <div
                            className="absolute top-0 w-0.5 h-2 bg-gray-400"
                            style={{ left: `${skill.benchmark}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Development Trends</CardTitle>
                  <CardDescription>Progress over the last 3 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-800">Fixer Skills</p>
                        <p className="text-sm text-green-600">+12% improvement</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-800">Supporter Skills</p>
                        <p className="text-sm text-blue-600">+8% improvement</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-orange-800">Challenger Skills</p>
                        <p className="text-sm text-orange-600">-3% needs attention</p>
                      </div>
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Learning Tracks</h2>
              <Button>Assign New Track</Button>
            </div>

            <div className="grid gap-4">
              {learningTracks.map((track) => (
                <Card key={track.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{track.title}</h3>
                          <Badge variant={track.status === "active" ? "default" : "secondary"}>{track.status}</Badge>
                          <Badge variant="outline">{track.targetSkill}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{track.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{track.enrolled} enrolled</span>
                          <span>•</span>
                          <span>{track.avgProgress}% avg progress</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid gap-4">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <IconComponent className={`w-6 h-6 ${insight.color} mt-1`} />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                          <p className="text-gray-600">{insight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Team Collaboration Effectiveness</CardTitle>
                <CardDescription>Analysis of team dynamics and collaboration patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Strengths</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Excellent at identifying and solving concrete problems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Strong supportive communication patterns</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>High engagement in learning activities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Opportunities</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Team rarely challenges ideas or surfaces risks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Limited exploration of alternative solutions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Could improve at synthesizing diverse viewpoints</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
