"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, AlertTriangle } from "lucide-react"

interface ProjectTimelineProps {
  project: {
    name: string
    dueDate: string
    progress: number
  }
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  const milestones = [
    {
      id: 1,
      title: "Project Setup & Planning",
      description: "Initialize project, setup development environment, create project structure",
      dueDate: "2024-01-15",
      status: "completed",
      tasks: [
        "Setup Git repository",
        "Create project structure",
        "Setup development environment",
        "Team kickoff meeting",
      ],
    },
    {
      id: 2,
      title: "Authentication System",
      description: "Implement user authentication with login/register functionality",
      dueDate: "2024-01-25",
      status: "in-progress",
      tasks: [
        "Design login/register UI",
        "Create API endpoints",
        "Implement JWT authentication",
        "Add form validation",
      ],
    },
    {
      id: 3,
      title: "Core Features Development",
      description: "Build main application features including product catalog and shopping cart",
      dueDate: "2024-02-05",
      status: "pending",
      tasks: ["Product listing page", "Product detail page", "Shopping cart functionality", "Search and filtering"],
    },
    {
      id: 4,
      title: "Payment Integration",
      description: "Integrate payment processing and order management",
      dueDate: "2024-02-10",
      status: "pending",
      tasks: ["Payment gateway integration", "Order processing", "Email notifications", "Order history"],
    },
    {
      id: 5,
      title: "Testing & Deployment",
      description: "Comprehensive testing and production deployment",
      dueDate: "2024-02-15",
      status: "pending",
      tasks: ["Unit testing", "Integration testing", "Performance optimization", "Production deployment"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-500" />
      case "overdue":
        return <AlertTriangle className="w-6 h-6 text-red-500" />
      default:
        return <Circle className="w-6 h-6 text-gray-300" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status !== "completed"
  }

  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <Badge variant="outline">Due: {new Date(project.dueDate).toLocaleDateString()}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-4">
        {milestones.map((milestone, index) => {
          const overdue = isOverdue(milestone.dueDate, milestone.status)
          const actualStatus = overdue ? "overdue" : milestone.status

          return (
            <Card key={milestone.id} className={overdue ? "border-red-200" : ""}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    {getStatusIcon(actualStatus)}
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-gray-200 mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{milestone.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(actualStatus)}>{actualStatus.replace("-", " ")}</Badge>
                        <span className="text-sm text-gray-500">
                          Due: {new Date(milestone.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>

                    {/* Tasks */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Tasks:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {milestone.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                milestone.status === "completed"
                                  ? "bg-green-500"
                                  : milestone.status === "in-progress" && taskIndex < 2
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                              }`}
                            />
                            <span className="text-sm text-gray-700">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
