"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Plus, CalendarIcon, User, AlertCircle, CheckCircle, Trash2 } from "lucide-react"
import { format } from "date-fns"

interface ManagerTaskCreatorProps {
  team: Array<{ name: string; role: string; avatar: string; isYou: boolean }>
}

export function ManagerTaskCreator({ team }: ManagerTaskCreatorProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create login component",
      description: "Build a reusable login form with validation",
      assignee: "Alex",
      priority: "high",
      dueDate: new Date("2024-01-25"),
      status: "in-progress",
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
      dueDate: new Date("2024-01-26"),
      status: "todo",
      subtasks: [
        { id: 1, title: "Setup Express server", completed: true },
        { id: 2, title: "Create user model", completed: true },
        { id: 3, title: "Add JWT authentication", completed: false },
        { id: 4, title: "Test endpoints", completed: false },
      ],
    },
  ])

  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "medium",
    dueDate: new Date(),
    subtasks: [""],
  })

  const teamMembers = team.filter((member) => member.role !== "Team Manager")

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.assignee) return

    const task = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      assignee: newTask.assignee,
      priority: newTask.priority,
      dueDate: newTask.dueDate,
      status: "todo" as const,
      subtasks: newTask.subtasks
        .filter((subtask) => subtask.trim())
        .map((subtask, index) => ({
          id: index + 1,
          title: subtask,
          completed: false,
        })),
    }

    setTasks([...tasks, task])
    setNewTask({
      title: "",
      description: "",
      assignee: "",
      priority: "medium",
      dueDate: new Date(),
      subtasks: [""],
    })
    setShowCreateForm(false)
  }

  const addSubtask = () => {
    setNewTask({
      ...newTask,
      subtasks: [...newTask.subtasks, ""],
    })
  }

  const updateSubtask = (index: number, value: string) => {
    const updatedSubtasks = [...newTask.subtasks]
    updatedSubtasks[index] = value
    setNewTask({
      ...newTask,
      subtasks: updatedSubtasks,
    })
  }

  const removeSubtask = (index: number) => {
    const updatedSubtasks = newTask.subtasks.filter((_, i) => i !== index)
    setNewTask({
      ...newTask,
      subtasks: updatedSubtasks,
    })
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const updateTaskStatus = (taskId: number, status: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: status as any } : task)))
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "todo":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Task Management</h2>
          <p className="text-gray-600">Create and assign tasks to your team members</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)} className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Task
        </Button>
      </div>

      {/* Task Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="font-semibold">{tasks.filter((t) => t.status === "completed").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="font-semibold">{tasks.filter((t) => t.status === "in-progress").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">To Do</p>
                <p className="font-semibold">{tasks.filter((t) => t.status === "todo").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="font-semibold">{tasks.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Task Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Task</CardTitle>
            <CardDescription>Assign a new task to a team member</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="Enter task title"
                />
              </div>
              <div>
                <Label htmlFor="assignee">Assign To</Label>
                <Select value={newTask.assignee} onValueChange={(value) => setNewTask({ ...newTask, assignee: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamMembers.map((member) => (
                      <SelectItem key={member.name} value={member.name}>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                            {member.avatar}
                          </div>
                          <span>
                            {member.name} - {member.role}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                placeholder="Describe the task in detail"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(newTask.dueDate, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={newTask.dueDate}
                      onSelect={(date) => date && setNewTask({ ...newTask, dueDate: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Subtasks</Label>
                <Button variant="outline" size="sm" onClick={addSubtask}>
                  <Plus className="w-3 h-3 mr-1" />
                  Add Subtask
                </Button>
              </div>
              <div className="space-y-2">
                {newTask.subtasks.map((subtask, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={subtask}
                      onChange={(e) => updateSubtask(index, e.target.value)}
                      placeholder={`Subtask ${index + 1}`}
                    />
                    {newTask.subtasks.length > 1 && (
                      <Button variant="outline" size="sm" onClick={() => removeSubtask(index)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button onClick={handleCreateTask} className="bg-indigo-600 hover:bg-indigo-700">
                Create Task
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Task List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Tasks</h3>
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{task.title}</CardTitle>
                  <CardDescription>{task.description}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={task.status} onValueChange={(value) => updateTaskStatus(task.id, value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" onClick={() => deleteTask(task.id)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{task.assignee}</span>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  <Badge className={getStatusColor(task.status)}>{task.status.replace("-", " ")}</Badge>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Due: {format(task.dueDate, "MMM dd, yyyy")}</span>
                  </div>
                </div>

                {task.subtasks.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-2">Subtasks:</h4>
                    <div className="space-y-1 pl-4">
                      {task.subtasks.map((subtask) => (
                        <div key={subtask.id} className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${subtask.completed ? "bg-green-500" : "bg-gray-300"}`}
                          />
                          <span
                            className={`text-sm ${subtask.completed ? "line-through text-gray-500" : "text-gray-700"}`}
                          >
                            {subtask.title}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
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
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
