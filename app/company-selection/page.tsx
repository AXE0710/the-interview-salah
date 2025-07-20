"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Brain,
  Search,
  Building2,
  Apple,
  Zap,
  Car,
  ShoppingCart,
  Cpu,
  Play,
  Star,
  TrendingUp,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function CompanySelectionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const companies = [
    {
      id: "tesla",
      name: "Tesla",
      logo: Car,
      category: "automotive",
      industry: "Electric Vehicles & Energy",
      difficulty: "Expert",
      interviewStyle: "Technical & First Principles",
      ceoMatch: "elon-musk",
      ceoName: "Elon Musk",
      description: "Revolutionary electric vehicle and clean energy company",
      color: "red",
      popular: true,
      questions: 45,
      avgDuration: "60-90 min",
      focusAreas: ["Technical Problem Solving", "Innovation", "First Principles", "Sustainability"],
    },
    {
      id: "apple",
      name: "Apple",
      logo: Apple,
      category: "technology",
      industry: "Consumer Technology",
      difficulty: "Advanced",
      interviewStyle: "Design & User Experience",
      ceoMatch: "tim-cook",
      ceoName: "Tim Cook",
      description: "World's most valuable technology company focused on innovation",
      color: "gray",
      popular: true,
      questions: 38,
      avgDuration: "45-60 min",
      focusAreas: ["Design Thinking", "User Experience", "Values Alignment", "Innovation"],
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: Building2,
      category: "technology",
      industry: "Cloud & Enterprise Software",
      difficulty: "Advanced",
      interviewStyle: "Growth Mindset & Collaboration",
      ceoMatch: "satya-nadella",
      ceoName: "Satya Nadella",
      description: "Leading cloud computing and productivity software company",
      color: "blue",
      popular: true,
      questions: 42,
      avgDuration: "50-70 min",
      focusAreas: ["Growth Mindset", "Collaboration", "Cloud Computing", "AI"],
    },
    {
      id: "nvidia",
      name: "NVIDIA",
      logo: Zap,
      category: "technology",
      industry: "AI & Computing",
      difficulty: "Expert",
      interviewStyle: "Technical Deep Dive",
      ceoMatch: "jensen-huang",
      ceoName: "Jensen Huang",
      description: "Leading AI computing and graphics technology company",
      color: "green",
      popular: false,
      questions: 52,
      avgDuration: "60-90 min",
      focusAreas: ["AI/ML", "GPU Computing", "Technical Architecture", "Performance"],
    },
    {
      id: "google",
      name: "Google",
      logo: Target,
      category: "technology",
      industry: "Search & Cloud",
      difficulty: "Expert",
      interviewStyle: "Product & Analytics",
      ceoMatch: "sundar-pichai",
      ceoName: "Sundar Pichai",
      description: "World's leading search and cloud computing company",
      color: "yellow",
      popular: true,
      questions: 48,
      avgDuration: "45-75 min",
      focusAreas: ["Product Strategy", "Data Analysis", "User Experience", "Scale"],
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: ShoppingCart,
      category: "ecommerce",
      industry: "E-commerce & Cloud",
      difficulty: "Advanced",
      interviewStyle: "Leadership Principles",
      ceoMatch: null,
      ceoName: "Andy Jassy",
      description: "World's largest e-commerce and cloud computing company",
      color: "orange",
      popular: true,
      questions: 40,
      avgDuration: "60-90 min",
      focusAreas: ["Leadership Principles", "Customer Obsession", "Scale", "Innovation"],
    },
  ]

  const categories = [
    { id: "all", name: "All Companies", icon: Building2 },
    { id: "technology", name: "Technology", icon: Cpu },
    { id: "automotive", name: "Automotive", icon: Car },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  ]

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || company.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "border-red-200 hover:border-red-300 bg-red-50",
      gray: "border-gray-200 hover:border-gray-300 bg-gray-50",
      blue: "border-blue-200 hover:border-blue-300 bg-blue-50",
      green: "border-green-200 hover:border-green-300 bg-green-50",
      yellow: "border-yellow-200 hover:border-yellow-300 bg-yellow-50",
      orange: "border-orange-200 hover:border-orange-300 bg-orange-50",
    }
    return colorMap[color as keyof typeof colorMap] || "border-gray-200 hover:border-gray-300 bg-gray-50"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Expert":
        return "bg-red-100 text-red-700"
      case "Advanced":
        return "bg-orange-100 text-orange-700"
      case "Intermediate":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild>
              <Link href="/celebrity-interviews">Celebrity CEOs</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Target Company</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Select the company you're preparing for and get matched with the perfect interview experience, including
            CEO-style interviews when available.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCompanies.map((company) => (
              <Card
                key={company.id}
                className={`relative transition-all hover:shadow-lg ${getColorClasses(company.color)}`}
              >
                {company.popular && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <company.logo className="h-8 w-8 text-gray-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{company.name}</CardTitle>
                      <CardDescription className="font-semibold text-gray-700">{company.industry}</CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getDifficultyColor(company.difficulty)}>{company.difficulty}</Badge>
                    {company.ceoMatch && (
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        CEO Match: {company.ceoName}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{company.description}</p>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Interview Style</h4>
                    <p className="text-sm text-gray-600">{company.interviewStyle}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.focusAreas.map((area, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {company.questions} Questions
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {company.avgDuration}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full"
                      onClick={() => {
                        if (company.ceoMatch) {
                          window.location.href = `/interview/celebrity/${company.ceoMatch}?company=${company.id}`
                        } else {
                          window.location.href = `/interview/company/${company.id}`
                        }
                      }}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start {company.name} Interview
                    </Button>

                    {company.ceoMatch && (
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/interview/celebrity/${company.ceoMatch}`}>
                          <Star className="h-4 w-4 mr-2" />
                          Interview with {company.ceoName}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No companies found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find Your Company?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Try our Celebrity CEO interviews for a unique practice experience, or contact us to add your target company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/celebrity-interviews">Try Celebrity CEOs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Request Company</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
