"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Target,
  Zap,
  Play,
  Trophy,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { SkillRadarChart } from "@/components/skill-radar-chart"
import { LearningPathProgress } from "@/components/learning-path-progress"

export default function LearnerDashboard() {
  const [currentPhase, setCurrentPhase] = useState<"onboarding" | "learning" | "mastery">("learning")

  const userProfile = {
    name: "Alex Chen",
    role: "Software Engineer L4",
    naturalRole: "Fixer",
    growthRole: "Challenger",
    completedSims: 12,
    totalBadges: 8,
    currentStreak: 5,
  }

  const skillData = [
    { skill: "Fixer", current: 85, target: 90 },
    { skill: "Explorer", current: 65, target: 75 },
    { skill: "Challenger", current: 45, target: 70 },
    { skill: "Synthesizer", current: 70, target: 80 },
    { skill: "Facilitator", current: 60, target: 75 },
    { skill: "Supporter", current: 80, target: 85 },
  ]

  const upcomingSims = [
    {
      id: 1,
      title: "Pre-mortem Risk Assessment",
      description: "Practice surfacing risks in a technical design review",
      duration: "12 min",
      difficulty: "Intermediate",
      focusRole: "Challenger",
      teamComposition: "Overly optimistic AI teammates",
      isRecommended: true,
    },
    {
      id: 2,
      title: "Building Consensus",
      description: "Navigate conflicting opinions to reach team alignment",
      duration: "15 min",
      difficulty: "Advanced",
      focusRole: "Synthesizer",
      teamComposition: "Diverse perspectives, strong opinions",
      isRecommended: true,
    },
    {
      id: 3,
      title: "Leadership Vacuum",
      description: "Step up when no clear leader emerges in the team",
      duration: "10 min",
      difficulty: "Beginner",
      focusRole: "Facilitator",
      teamComposition: "Passive AI teammates",
      isRecommended: false,
    },
  ]

  const recentFeedback = [
    {
      simulation: "Stakeholder Alignment",
      keyTakeaway:
        "Excellent job identifying the core disagreement between stakeholders. Next time, try to formalize the resolution in a shared document.",
      score: 88,
      improvement: "Documentation & Follow-through",
    },
    {
      simulation: "Technical Debate",
      keyTakeaway:
        "You successfully challenged the proposed solution and surfaced two critical risks. Great use of the Challenger role!",
      score: 92,
      improvement: "Risk Quantification",
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
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">CollabLearn</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">Welcome back, {userProfile.name}</h1>
                <p className="text-sm text-gray-600">{userProfile.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{userProfile.totalBadges} badges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">{userProfile.currentStreak} day streak</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="simulations">Simulations</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Natural Role</p>
                      <p className="font-semibold">{userProfile.naturalRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Growth Focus</p>
                      <p className="font-semibold">{userProfile.growthRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="font-semibold">{userProfile.completedSims} simulations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Avg. Score</p>
                      <p className="font-semibold">87%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recommended Next Simulation */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-blue-500" />
                        <span>Recommended Next</span>
                      </CardTitle>
                      <Badge variant="secondary">Challenger Focus</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Pre-mortem Risk Assessment</h3>
                        <p className="text-gray-600 mb-4">
                          Practice surfacing risks in a technical design review. You'll work with overly optimistic AI
                          teammates who need someone to challenge their assumptions and identify potential problems.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>12 minutes</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>4-person team</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Intermediate</span>
                        </div>
                      </div>
                      <Link href="/learner/simulation/1">
                        <Button className="w-full">
                          Start Simulation
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skill Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Skill Overview</CardTitle>
                  <CardDescription>Your collaboration skill levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <SkillRadarChart data={skillData} />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Strongest:</span>
                      <span className="font-medium text-green-600">Fixer (85%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Focus Area:</span>
                      <span className="font-medium text-orange-600">Challenger (45%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Learning Path Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Current Learning Path: Surfacing Risk</CardTitle>
                <CardDescription>Develop your Challenger skills through targeted practice</CardDescription>
              </CardHeader>
              <CardContent>
                <LearningPathProgress />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simulations" className="space-y-6">
            <div className="grid gap-4">
              {upcomingSims.map((sim) => (
                <Card key={sim.id} className={sim.isRecommended ? "ring-2 ring-blue-200" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{sim.title}</h3>
                          {sim.isRecommended && (
                            <Badge variant="default" className="bg-blue-500">
                              Recommended
                            </Badge>
                          )}
                          <Badge variant="outline">{sim.focusRole}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{sim.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{sim.duration}</span>
                          <span>•</span>
                          <span>{sim.difficulty}</span>
                          <span>•</span>
                          <span>{sim.teamComposition}</span>
                        </div>
                      </div>
                      <Link href={`/learner/simulation/${sim.id}`}>
                        <Button variant={sim.isRecommended ? "default" : "outline"}>
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Development</CardTitle>
                  <CardDescription>Track your progress across all collaboration roles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillData.map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.skill}</span>
                        <span className="text-gray-600">
                          {skill.current}% / {skill.target}%
                        </span>
                      </div>
                      <Progress value={skill.current} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Badges earned through practice and mastery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="font-medium text-sm">Risk Spotter</p>
                        <p className="text-xs text-gray-600">Surfaced 10+ risks</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-medium text-sm">Team Player</p>
                        <p className="text-xs text-gray-600">5 day streak</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Problem Solver</p>
                        <p className="text-xs text-gray-600">Mastered Fixer role</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg">
                      <Brain className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-medium text-sm">Quick Learner</p>
                        <p className="text-xs text-gray-600">Completed onboarding</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <div className="space-y-4">
              {recentFeedback.map((feedback, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{feedback.simulation}</CardTitle>
                      <Badge variant="secondary">{feedback.score}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-green-700 mb-1">Key Takeaway</h4>
                        <p className="text-gray-700">{feedback.keyTakeaway}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700 mb-1">Next Focus</h4>
                        <p className="text-gray-700">{feedback.improvement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
