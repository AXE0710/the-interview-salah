"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Brain, Check, X, Star, Users, Building2, Shield, Headphones, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      popular: false,
      features: [
        "3 AI interviews per month",
        "Basic feedback and scoring",
        "Standard question library",
        "Community forum access",
        "Mobile app access",
      ],
      limitations: ["Limited feedback depth", "No advanced analytics", "No priority support"],
      cta: "Start Free",
      ctaLink: "/signup/free",
    },
    {
      name: "Pro",
      description: "For serious job seekers",
      price: { monthly: 29, annual: 24 },
      popular: true,
      features: [
        "Unlimited AI interviews",
        "Advanced multimodal feedback",
        "Industry-specific questions",
        "Detailed progress analytics",
        "Priority community support",
        "Video recording & playback",
        "Custom practice sessions",
        "Interview scheduling assistant",
      ],
      limitations: [],
      cta: "Start Pro Trial",
      ctaLink: "/signup/pro",
    },
    {
      name: "Premium",
      description: "For career accelerators",
      price: { monthly: 79, annual: 65 },
      popular: false,
      features: [
        "Everything in Pro",
        "1-on-1 coaching sessions (2/month)",
        "Personalized career roadmap",
        "Mock interviews with experts",
        "Negotiation training module",
        "Executive presence coaching",
        "LinkedIn profile optimization",
        "Job matching & referrals",
        "White-glove onboarding",
      ],
      limitations: [],
      cta: "Go Premium",
      ctaLink: "/signup/premium",
    },
  ]

  const enterprisePlans = [
    {
      name: "Team",
      description: "For small to medium organizations",
      price: "Custom",
      features: [
        "5-50 user licenses",
        "Admin dashboard & analytics",
        "Custom branding options",
        "Bulk user management",
        "API access (basic)",
        "Email support",
        "Training materials",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact/team",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Unlimited user licenses",
        "Advanced analytics & reporting",
        "Full white-label solution",
        "SSO & security integrations",
        "Custom question libraries",
        "Dedicated success manager",
        "24/7 priority support",
        "Custom integrations",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact/enterprise",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">The Interview Salah</span>
          </div>
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Success Plan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From free practice to enterprise solutions - find the perfect plan for your interview preparation journey
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-600"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-blue-600" />
            <span className={`text-sm ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-600"}`}>
              Annual
              <Badge className="ml-2 bg-green-100 text-green-700">Save 20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Individual Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Plans</h2>
            <p className="text-xl text-gray-600">Perfect for job seekers and career changers</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-blue-500 shadow-lg" : "border hover:border-gray-300"} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                      {plan.price.monthly > 0 && <span className="text-lg font-normal text-gray-600">/month</span>}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-600">${plan.price.monthly}/month billed annually</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3">
                        <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Plans */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">Scalable solutions for organizations and institutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {enterprisePlans.map((plan, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {index === 0 ? (
                      <Users className="h-8 w-8 text-blue-600" />
                    ) : (
                      <Building2 className="h-8 w-8 text-purple-600" />
                    )}
                    <div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons & Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose The Interview Salah?</h2>
            <p className="text-xl text-gray-600">Features that set us apart from the competition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced AI Technology</h3>
              <p className="text-sm text-gray-600">
                State-of-the-art AI that analyzes voice, body language, and content with 95% accuracy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
              <p className="text-sm text-gray-600">
                Comprehensive progress tracking and performance insights to accelerate your growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Privacy & Security</h3>
              <p className="text-sm text-gray-600">
                Enterprise-grade security with full data control and transparent AI explanations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated support from career coaches and technical experts whenever you need help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I switch plans anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll
                  only pay the prorated difference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial for paid plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a 14-day free trial for Pro and Premium plans. No credit card required to start your trial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in enterprise custom pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise pricing includes volume discounts, custom integrations, dedicated support, advanced
                  analytics, and white-label options. Contact our sales team for a personalized quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer student discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Students with valid .edu email addresses get 50% off Pro and Premium plans. Contact our support
                  team to verify your student status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Ace Your Interviews?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful candidates who have transformed their interview skills with AI-powered coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/signup/free">Start Free Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact/sales">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
