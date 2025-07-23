"use client"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

interface SkillData {
  skill: string
  current: number
  target: number
}

interface SkillRadarChartProps {
  data: SkillData[]
}

export function SkillRadarChart({ data }: SkillRadarChartProps) {
  const chartData = data.map((item) => ({
    skill: item.skill,
    current: item.current,
    target: item.target,
  }))

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} tickCount={6} />
          <Radar name="Current" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} strokeWidth={2} />
          <Radar
            name="Target"
            dataKey="target"
            stroke="#10b981"
            fill="transparent"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
