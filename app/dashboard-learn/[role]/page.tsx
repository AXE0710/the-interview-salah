"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageCircle, CheckSquare, Calendar, Code, Palette, UserCog, Plus } from "lucide-react"
import Link from "next/link"
import { TeamChat } from "@/components/team-chat"
import { TaskList } from "@/components/task-list"
import { ProjectTimeline } from "@/components/project-timeline"
import { DrawingPad } from "@/components/drawing-pad"
import { CodeEditor } from "@/components/code-editor"
import { ManagerTaskCreator } from "@/components/manager-task-creator"

export default function Dashboard({ params }: { params: { role: string } }) {
  const roleConfig = {
    frontend: { title: "Frontend Developer", icon: Code, color: "bg-blue-500", type: "developer" },
    backend: { title: "Backend Developer", icon: Code, color: "bg-green-500", type: "developer" },
    fullstack: { title: "Full Stack Developer", icon: Code, color: "bg-purple-500", type: "developer" },
    mobile: { title: "Mobile Developer", icon: Code, color: "bg-orange-500", type: "developer" },
    designer: { title: "UI/UX Designer", icon: Palette, color: "bg-pink-500", type: "developer" },
    manager: { title: "Team Manager", icon: UserCog, color: "bg-indigo-500", type: "manager" },
  }

  const role = roleConfig[params.role as keyof typeof roleConfig] || roleConfig.frontend
  const isManager = role.type === "manager"

  const currentProject = {
    name: "E-commerce Platform",
    description: "Building a modern online shopping platform with React and Node.js",
    dueDate: "2024-02-15",
    progress: 65,
    team: [
      { name: "Alex", role: "Frontend Developer", avatar: "A", isYou: params.role === "frontend" },
      { name: "Sarah", role: "Backend Developer", avatar: "S", isYou: params.role === "backend" },
      { name: "Mike", role: "UI/UX Designer", avatar: "M", isYou: params.role === "designer" },
      { name: "Lisa", role: "Full Stack Developer", avatar: "L", isYou: params.role === "fullstack" },
      { name: "Jordan", role: "Team Manager", avatar: "J", isYou: params.role === "manager" },
    ],
  }

  const developerTabs = [
    { value: "overview", label: "Overview" },
    { value: "tasks", label: "Tasks" },
    { value: "code", label: "Code" },
    { value: "chat", label: "Team Chat" },
    { value: "timeline", label: "Timeline" },
    { value: "whiteboard", label: "Whiteboard" },
  ]

  const managerTabs = [
    { value: "overview", label: "Overview" },
    { value: "manage-tasks", label: "Manage Tasks" },
    { value: "tasks", label: "My Tasks" },
    { value: "chat", label: "Team Chat" },
    { value: "timeline", label: "Timeline" },
    { value: "whiteboard", label: "Whiteboard" },
  ]

  const tabs = isManager ? managerTabs : developerTabs

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className={`w-8 h-8 ${role.color} rounded-lg flex items-center justify-center`}>
                  <role.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">TeamCode</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-gray-900">{role.title}</h1>
                <p className="text-sm text-gray-600">{currentProject.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Team of {currentProject.team.length}</Badge>
              <Badge variant="outline">{currentProject.progress}% Complete</Badge>
              {isManager && (
                <Badge className="bg-indigo-100 text-indigo-800">
                  <UserCog className="w-3 h-3 mr-1" />
                  Manager
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className={`grid w-full ${isManager ? "grid-cols-6" : "grid-cols-6"}`}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Project Overview */}
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
                    <h3 className="font-semibold text-lg">{currentProject.name}</h3>
                    <p className="text-gray-600">{currentProject.description}</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Due: {new Date(currentProject.dueDate).toLocaleDateString()}</span>
                    <span>Progress: {currentProject.progress}%</span>
                    <span>Team: {currentProject.team.length} members</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle>Your Team</CardTitle>
                <CardDescription>
                  {isManager
                    ? "Manage your team and assign tasks"
                    : "Collaborate with your teammates to build amazing projects"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProject.team.map((member, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        member.isYou
                          ? `${isManager ? "bg-indigo-50 border border-indigo-200" : "bg-blue-50 border border-blue-200"}`
                          : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 ${member.role === "Team Manager" ? "bg-indigo-500" : "bg-blue-500"} rounded-full flex items-center justify-center text-white font-medium`}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-medium">
                          {member.name} {member.isYou && "(You)"}
                        </p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              {isManager ? (
                <>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Plus className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Create Tasks</h3>
                      <p className="text-sm text-gray-600">Assign new tasks to team members</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Team Chat</h3>
                      <p className="text-sm text-gray-600">Communicate with your team</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Timeline</h3>
                      <p className="text-sm text-gray-600">Track project progress</p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <CheckSquare className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold">View Tasks</h3>
                      <p className="text-sm text-gray-600">Check your assigned tasks</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Code className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Code Editor</h3>
                      <p className="text-sm text-gray-600">Write and edit code</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Team Chat</h3>
                      <p className="text-sm text-gray-600">Discuss with your team</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </TabsContent>

          {isManager && (
            <TabsContent value="manage-tasks">
              <ManagerTaskCreator team={currentProject.team} />
            </TabsContent>
          )}

          <TabsContent value="tasks">
            <TaskList role={params.role} isManager={isManager} />
          </TabsContent>

          {!isManager && (
            <TabsContent value="code">
              <CodeEditor role={params.role} />
            </TabsContent>
          )}

          <TabsContent value="chat">
            <TeamChat team={currentProject.team} currentUser={params.role} />
          </TabsContent>

          <TabsContent value="timeline">
            <ProjectTimeline project={currentProject} />
          </TabsContent>

          <TabsContent value="whiteboard">
            <DrawingPad />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
