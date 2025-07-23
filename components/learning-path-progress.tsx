"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Play } from "lucide-react"

export function LearningPathProgress() {
  const pathSteps = [
    {
      id: 1,
      title: "Foundation: Understanding Risk",
      description: "Learn the basics of risk identification in team settings",
      status: "completed",
      progress: 100,
    },
    {
      id: 2,
      title: "Practice: Pre-mortem Scenarios",
      description: "Apply risk assessment in technical design reviews",
      status: "current",
      progress: 60,
    },
    {
      id: 3,
      title: "Advanced: Stakeholder Risk Communication",
      description: "Communicate risks effectively to different audiences",
      status: "locked",
      progress: 0,
    },
    {
      id: 4,
      title: "Mastery: Leading Risk Assessments",
      description: "Guide teams through comprehensive risk evaluation",
      status: "locked",
      progress: 0,
    },
  ]

  return (
    <div className="space-y-4">
      {pathSteps.map((step, index) => (
        <div key={step.id} className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            {step.status === "completed" ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : step.status === "current" ? (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white" />
              </div>
            ) : (
              <Circle className="w-6 h-6 text-gray-300" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{step.title}</h4>
              <Badge
                variant={step.status === "completed" ? "default" : step.status === "current" ? "secondary" : "outline"}
              >
                {step.status === "completed" ? "Complete" : step.status === "current" ? "In Progress" : "Locked"}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-2">{step.description}</p>
            {step.status !== "locked" && (
              <div className="flex items-center space-x-2">
                <Progress value={step.progress} className="flex-1 h-2" />
                <span className="text-sm text-gray-500">{step.progress}%</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
