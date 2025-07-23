"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Zap, CheckCircle } from "lucide-react"

interface TeamMatcherProps {
  role: string
}

export function TeamMatcher({ role }: TeamMatcherProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Analyzing your skills and preferences...",
    "Finding compatible team members...",
    "Matching project requirements...",
    "Assembling your dream team...",
    "Finalizing team composition...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }

        // Update step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length)
        setCurrentStep(Math.min(stepIndex, steps.length - 1))

        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Card className="max-w-lg mx-4">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-emerald-600" />
          </div>
          <CardTitle className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 text-emerald-500" />
            <span>Finding Your Team</span>
          </CardTitle>
          <CardDescription>We're matching you with the perfect teammates for this project</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Matching Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex items-center space-x-2">
              {progress < 100 ? (
                <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              )}
              <span className="text-sm text-gray-600">{steps[currentStep]}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Looking for teammates with:</h3>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="secondary" className="justify-center">
                UI/UX Designer
              </Badge>
              <Badge variant="secondary" className="justify-center">
                Backend Engineer
              </Badge>
              <Badge variant="secondary" className="justify-center">
                Product Manager
              </Badge>
              <Badge variant="secondary" className="justify-center">
                DevOps Engineer
              </Badge>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Zap className="w-4 h-4 text-emerald-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-emerald-800">Smart Matching</p>
                <p className="text-xs text-emerald-700 mt-1">
                  Our AI considers your skill level, timezone, communication style, and project preferences to find the
                  best team fit.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
