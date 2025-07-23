"use client"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

interface TeamSkillData {
  skill: string
  score: number
  benchmark: number
}

interface TeamSkillRadarProps {
  data: TeamSkillData[]
}

export function TeamSkillRadar({ data }: TeamSkillRadarProps) {
  const chartData = data.map((item) => ({
    skill: item.skill,
    team: item.score,
    benchmark: item.benchmark,
  }))

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} tickCount={6} />
          <Radar name="Team" dataKey="team" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} strokeWidth={2} />
          <Radar
            name="Benchmark"
            dataKey="benchmark"
            stroke="#6b7280"
            fill="transparent"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
