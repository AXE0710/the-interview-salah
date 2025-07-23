"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Users, Trophy, Star, Target, Clock, CheckCircle, Play, ArrowRight, Flame, Award } from "lucide-react"
import Link from "next/link"
import { CodeEditor } from "@/components/code-editor"
import { TeamMatcher } from "@/components/team-matcher"
import { GameStats } from "@/components/game-stats"

export default function TechRoleDashboard({ params }: { params: { role: string } }) {
  const [currentProject, setCurrentProject] = useState<any>(null)
  const [isMatching, setIsMatching] = useState(false)

  const roleConfig = {
    frontend: {
      title: "Frontend Engineer",
      icon: Code,
      color: "bg-blue-500",
      level: 3,
      xp: 2450,
      nextLevelXp: 3000,
    },
    backend: {
      title: "Backend Engineer",
      icon: Code,
      color: "bg-green-500",
      level: 2,
      xp: 1200,
      nextLevelXp: 2000,
    },
    designer: {
      title: "UI/UX Designer",
      icon: Code,
      color: "bg-pink-500",
      level: 4,
      xp: 3200,
      nextLevelXp: 4000,
    },
  }

  const role = roleConfig[params.role as keyof typeof roleConfig] || roleConfig.frontend

  const userStats = {
    completedProjects: 8,
    currentStreak: 12,
    totalXP: role.xp,
    level: role.level,
    nextLevelXP: role.nextLevelXp,
    rank: "Gold",
    achievements: 15,
  }

  const availableProjects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Build a modern admin dashboard for an online store",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      xpReward: 500,
      teamSize: 5,
      rolesNeeded: ["Frontend Engineer", "Backend Engineer", "UI/UX Designer", "Product Manager"],
      technologies: ["React", "Node.js", "PostgreSQL", "Figma"],
      status: "recruiting",
      spotsLeft: 2,
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Create a Slack-like messaging platform with real-time features",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      xpReward: 750,
      teamSize: 4,
      rolesNeeded: ["Frontend Engineer", "Backend Engineer", "DevOps Engineer"],
      technologies: ["React", "Socket.io", "Redis", "Docker"],
      status: "recruiting",
      spotsLeft: 1,
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description: "Build a cross-platform fitness tracking mobile app",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      xpReward: 600,
      teamSize: 4,
      rolesNeeded: ["Mobile Engineer", "Backend Engineer", "UI/UX Designer"],
      technologies: ["React Native", "Express.js", "MongoDB"],
      status: "starting-soon",
      spotsLeft: 3,
    },
  ]

  const currentTasks = [
    {
      id: 1,
      title: "Implement User Authentication UI",
      description: "Create login and signup forms with validation",
      priority: "high",
      estimatedTime: "4 hours",
      xpReward: 100,
      status: "in-progress",
      dueDate: "2024-01-25",
    },
    {
      id: 2,
      title: "Build Product Listing Component",
      description: "Create reusable product card component with filtering",
      priority: "medium",
      estimatedTime: "6 hours",
      xpReward: 150,
      status: "todo",
      dueDate: "2024-01-27",
    },
    {
      id: 3,
      title: "Implement Shopping Cart Logic",
      description: "Add/remove items, calculate totals, persist state",
      priority: "high",
      estimatedTime: "8 hours",
      xpReward: 200,
      status: "todo",
      dueDate: "2024-01-30",
    },
  ]

  const achievements = [
    { id: 1, title: "First Commit", description: "Made your first code contribution", unlocked: true },
    { id: 2, title: "Team Player", description: "Completed 5 collaborative projects", unlocked: true },
    { id: 3, title: "Code Reviewer", description: "Reviewed 10 pull requests", unlocked: true },
    { id: 4, title: "Bug Hunter", description: "Fixed 20 bugs", unlocked: false },
    { id: 5, title: "Mentor", description: "Helped 5 junior developers", unlocked: false },
  ]

  const handleJoinProject = (projectId: number) => {
    setIsMatching(true)
    // Simulate team matching
    setTimeout(() => {
      setIsMatching(false)
      setCurrentProject(availableProjects.find((p) => p.id === projectId))
    }, 3000)
  }

  if (isMatching) {
    return <TeamMatcher role={role.title} />
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/tech" className="flex items-center space-x-2">
                <div className={`w-8 h-8 ${role.color} rounded-lg flex items-center justify-center`}>
                  <role.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">TechCollab</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">{role.title}</h1>
                <p className="text-sm text-gray-600">
                  Level {userStats.level} • {userStats.rank} Tier
                </p>
              </div>
            </div>
            <GameStats stats={userStats} />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Level Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>Level Progress</span>
                  </CardTitle>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Level {userStats.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>XP Progress</span>
                    <span>
                      {userStats.totalXP} / {userStats.nextLevelXP} XP
                    </span>
                  </div>
                  <Progress value={(userStats.totalXP / userStats.nextLevelXP) * 100} className="h-3" />
                  <p className="text-sm text-gray-600">
                    {userStats.nextLevelXP - userStats.totalXP} XP needed to reach Level {userStats.level + 1}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="font-semibold">{userStats.completedProjects} projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Streak</p>
                      <p className="font-semibold">{userStats.currentStreak} days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="text-sm text-gray-600">Total XP</p>
                      <p className="font-semibold">{userStats.totalXP.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600">Achievements</p>
                      <p className="font-semibold">{userStats.achievements}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Project */}
            {currentProject ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>Current Project</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{currentProject.title}</h3>
                      <p className="text-gray-600">{currentProject.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{currentProject.difficulty}</span>
                      <span>•</span>
                      <span>{currentProject.duration}</span>
                      <span>•</span>
                      <span>{currentProject.xpReward} XP reward</span>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/tech/${params.role}/project/${currentProject.id}`}>
                        <Button>
                          Continue Working
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Ready for Your Next Challenge?</CardTitle>
                  <CardDescription>Join a project team and start building something amazing</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#projects">
                    <Button>
                      Browse Available Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Available Projects</h2>
              <Badge variant="secondary">{availableProjects.length} projects recruiting</Badge>
            </div>

            <div className="grid gap-6">
              {availableProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-xl">{project.title}</h3>
                          <Badge variant={project.status === "recruiting" ? "default" : "secondary"}>
                            {project.status.replace("-", " ")}
                          </Badge>
                          <Badge variant="outline">{project.difficulty}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Team Roles Needed</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.rolesNeeded.map((role) => (
                                <Badge key={role} variant="secondary" className="text-xs">
                                  {role}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{project.teamSize} team members</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{project.xpReward} XP</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{project.spotsLeft} spots left</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-6">
                        <Button onClick={() => handleJoinProject(project.id)} disabled={project.spotsLeft === 0}>
                          {project.spotsLeft === 0 ? "Team Full" : "Join Project"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Tasks</h2>
              <Badge variant="secondary">
                {currentTasks.filter((t) => t.status !== "completed").length} active tasks
              </Badge>
            </div>

            <div className="space-y-4">
              {currentTasks.map((task) => (
                <Card key={task.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{task.title}</h3>
                          <Badge
                            variant={
                              task.priority === "high"
                                ? "destructive"
                                : task.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {task.priority}
                          </Badge>
                          <Badge variant="outline">{task.status.replace("-", " ")}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{task.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Est. {task.estimatedTime}</span>
                          <span>•</span>
                          <span>{task.xpReward} XP</span>
                          <span>•</span>
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {task.status === "in-progress" ? (
                          <Link href={`/tech/${params.role}/task/${task.id}`}>
                            <Button>
                              Continue
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        ) : (
                          <Link href={`/tech/${params.role}/task/${task.id}`}>
                            <Button variant="outline">
                              <Play className="w-4 h-4 mr-2" />
                              Start
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Editor</CardTitle>
                <CardDescription>Work on your current task</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeEditor role={params.role} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.unlocked ? "bg-yellow-50 border-yellow-200" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.unlocked ? "bg-yellow-500" : "bg-gray-300"
                        }`}
                      >
                        <Trophy className={`w-6 h-6 ${achievement.unlocked ? "text-white" : "text-gray-500"}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${achievement.unlocked ? "text-yellow-800" : "text-gray-500"}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.unlocked ? "text-yellow-700" : "text-gray-400"}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.unlocked && <CheckCircle className="w-5 h-5 text-yellow-600" />}
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
