"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Flame, TrendingUp } from "lucide-react"

interface GameStatsProps {
  stats: {
    level: number
    totalXP: number
    nextLevelXP: number
    currentStreak: number
    rank: string
    completedProjects: number
  }
}

export function GameStats({ stats }: GameStatsProps) {
  const xpProgress = (stats.totalXP / stats.nextLevelXP) * 100

  return (
    <div className="flex items-center space-x-4">
      {/* Level and XP */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{stats.level}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-xs font-medium">{stats.totalXP.toLocaleString()} XP</span>
          </div>
          <Progress value={xpProgress} className="h-1 w-16" />
        </div>
      </div>

      {/* Streak */}
      <div className="flex items-center space-x-1">
        <Flame className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-medium">{stats.currentStreak}</span>
      </div>

      {/* Rank */}
      <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800">
        <Trophy className="w-3 h-3 mr-1" />
        {stats.rank}
      </Badge>

      {/* Projects */}
      <div className="flex items-center space-x-1">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span className="text-sm font-medium">{stats.completedProjects}</span>
      </div>
    </div>
  )
}
