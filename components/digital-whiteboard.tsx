"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Pen, Eraser, Square, Circle, Type, Move, Undo, Redo, Download } from "lucide-react"

export function DigitalWhiteboard() {
  const [selectedTool, setSelectedTool] = useState("pen")
  const [collaborators] = useState([
    { name: "Alex Chen", color: "purple", active: true },
    { name: "Sarah Kim", color: "blue", active: true },
    { name: "You", color: "green", active: true },
  ])

  const tools = [
    { id: "pen", icon: Pen, label: "Pen" },
    { id: "eraser", icon: Eraser, label: "Eraser" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "text", icon: Type, label: "Text" },
    { id: "move", icon: Move, label: "Move" },
  ]

  return (
    <div className="h-full flex bg-white">
      {/* Toolbar */}
      <div className="w-16 border-r bg-gray-50 p-2">
        <div className="space-y-2">
          {tools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Button
                key={tool.id}
                variant={selectedTool === tool.id ? "default" : "ghost"}
                size="sm"
                className="w-full aspect-square p-0"
                onClick={() => setSelectedTool(tool.id)}
                title={tool.label}
              >
                <IconComponent className="w-4 h-4" />
              </Button>
            )
          })}

          <div className="border-t pt-2 space-y-2">
            <Button variant="ghost" size="sm" className="w-full aspect-square p-0" title="Undo">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-full aspect-square p-0" title="Redo">
              <Redo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-full aspect-square p-0" title="Export">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Canvas Header */}
        <div className="border-b p-3 flex items-center justify-between">
          <h3 className="font-semibold text-sm">Architecture Design</h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Live collaborators:</span>
            {collaborators.map((collaborator, index) => (
              <div key={index} className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full bg-${collaborator.color}-500`}></div>
                <span className="text-xs">{collaborator.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative bg-white overflow-hidden">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Whiteboard Content - Simulated Architecture Diagram */}
          <div className="absolute inset-0 p-8">
            {/* API Gateway */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                <div className="font-semibold text-blue-800">API Gateway</div>
                <div className="text-xs text-blue-600">Load Balancer</div>
              </div>
            </div>

            {/* Microservices */}
            <div className="absolute top-40 left-20">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">Auth Service</div>
                <div className="text-xs text-green-600">JWT + OAuth</div>
              </div>
            </div>

            <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 text-center">
                <div className="font-semibold text-purple-800">Product Service</div>
                <div className="text-xs text-purple-600">Catalog + Search</div>
              </div>
            </div>

            <div className="absolute top-40 right-20">
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 text-center">
                <div className="font-semibold text-yellow-800">Order Service</div>
                <div className="text-xs text-yellow-600">Cart + Checkout</div>
              </div>
            </div>

            {/* Database Layer */}
            <div className="absolute bottom-32 left-1/4">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 text-center">
                <div className="font-semibold text-gray-800">PostgreSQL</div>
                <div className="text-xs text-gray-600">User Data</div>
              </div>
            </div>

            <div className="absolute bottom-32 right-1/4">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-3 text-center">
                <div className="font-semibold text-red-800">Redis Cache</div>
                <div className="text-xs text-red-600">Session Store</div>
              </div>
            </div>

            {/* Connection Lines - Simulated */}
            <svg className="absolute inset-0 pointer-events-none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                </marker>
              </defs>

              {/* API Gateway to Services */}
              <line x1="50%" y1="120" x2="25%" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="50%" y1="120" x2="50%" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="50%" y1="120" x2="75%" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Services to Databases */}
              <line x1="25%" y1="220" x2="25%" y2="280" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="75%" y1="220" x2="75%" y2="280" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Annotations */}
            <div className="absolute top-60 left-10 bg-yellow-200 p-2 rounded shadow-sm">
              <div className="text-xs font-medium">Note from Alex:</div>
              <div className="text-xs">Consider rate limiting</div>
            </div>

            <div className="absolute bottom-20 right-10 bg-blue-200 p-2 rounded shadow-sm">
              <div className="text-xs font-medium">Sarah's suggestion:</div>
              <div className="text-xs">Add monitoring service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Panel */}
      <div className="w-64 border-l bg-gray-50 p-4">
        <h4 className="font-semibold text-sm mb-3">Properties</h4>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-700">Stroke Width</label>
            <input type="range" min="1" max="10" defaultValue="2" className="w-full mt-1" />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700">Color</label>
            <div className="grid grid-cols-4 gap-2 mt-1">
              {["black", "red", "blue", "green", "purple", "yellow", "orange", "pink"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded cursor-pointer border-2 ${
                    color === "black"
                      ? "bg-black"
                      : color === "red"
                        ? "bg-red-500"
                        : color === "blue"
                          ? "bg-blue-500"
                          : color === "green"
                            ? "bg-green-500"
                            : color === "purple"
                              ? "bg-purple-500"
                              : color === "yellow"
                                ? "bg-yellow-500"
                                : color === "orange"
                                  ? "bg-orange-500"
                                  : "bg-pink-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-sm mb-2">Recent Changes</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>You added Redis cache</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Sarah drew connections</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Alex added API Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
