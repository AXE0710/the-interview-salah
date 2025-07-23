"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, User, AlertCircle, CheckCircle, UserCog } from "lucide-react"

interface TaskListProps {
  role: string
  isManager?: boolean
}

export function TaskList({ role, isManager = false }: TaskListProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create login component",
      description: "Build a reusable login form with validation",
      assignee: "Alex",
      priority: "high",
      dueDate: "2024-01-25",
      completed: false,
      subtasks: [
        { id: 1, title: "Design form layout", completed: true },
        { id: 2, title: "Add form validation", completed: true },
        { id: 3, title: "Style with CSS", completed: false },
        { id: 4, title: "Add error handling", completed: false },
      ],
    },
    {
      id: 2,
      title: "Setup API endpoints",
      description: "Create authentication endpoints for login/register",
      assignee: "Sarah",
      priority: "high",
      dueDate: "2024-01-26",
      completed: false,
      subtasks: [
        { id: 1, title: "Setup Express server", completed: true },
        { id: 2, title: "Create user model", completed: true },
        { id: 3, title: "Add JWT authentication", completed: false },
        { id: 4, title: "Test endpoints", completed: false },
      ],
    },
    {
      id: 3,
      title: "Design user dashboard",
      description: "Create wireframes and mockups for the main dashboard",
      assignee: "Mike",
      priority: "medium",
      dueDate: "2024-01-28",
      completed: true,
      subtasks: [
        { id: 1, title: "User research", completed: true },
        { id: 2, title: "Create wireframes", completed: true },
        { id: 3, title: "Design mockups", completed: true },
        { id: 4, title: "Get team feedback", completed: true },
      ],
    },
    {
      id: 4,
      title: "Implement shopping cart",
      description: "Build cart functionality with add/remove items",
      assignee: "Lisa",
      priority: "medium",
      dueDate: "2024-01-30",
      completed: false,
      subtasks: [
        { id: 1, title: "Create cart component", completed: false },
        { id: 2, title: "Add state management", completed: false },
        { id: 3, title: "Implement cart logic", completed: false },
        { id: 4, title: "Add persistence", completed: false },
      ],
    },
  ])

  const toggleTask = (taskId: number) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const toggleSubtask = (taskId: number, subtaskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask,
              ),
            }
          : task,
      ),
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length

  return (
    <div className="space-y-6">
      {isManager && (
        <Card className="bg-indigo-50 border-indigo-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCog className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-medium text-indigo-900">Manager View</p>
                <p className="text-sm text-indigo-700">
                  You can view all team tasks here. Use "Manage Tasks" tab to create and assign new tasks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Task Progress</span>
            <Badge variant="secondary">
              {completedTasks}/{totalTasks} completed
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className={task.completed ? "opacity-75" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
                  <div>
                    <CardTitle className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
                      {task.title}
                    </CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Task Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Subtasks */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Subtasks:</h4>
                  <div className="space-y-2 pl-4">
                    {task.subtasks.map((subtask) => (
                      <div key={subtask.id} className="flex items-center space-x-2">
                        <Checkbox
                          checked={subtask.completed}
                          onCheckedChange={() => toggleSubtask(task.id, subtask.id)}
                          disabled={task.completed}
                        />
                        <span
                          className={`text-sm ${subtask.completed ? "line-through text-gray-500" : "text-gray-700"}`}
                        >
                          {subtask.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtask Progress */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-green-500 h-1 rounded-full transition-all duration-300"
                      style={{
                        width: `${(task.subtasks.filter((st) => st.completed).length / task.subtasks.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {task.subtasks.filter((st) => st.completed).length}/{task.subtasks.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
