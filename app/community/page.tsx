import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, Users, MessageCircle, Award, Star, Heart, Share2, Calendar, Trophy, Target } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      avatar: "/placeholder.svg?height=40&width=40",
      story:
        "The Interview Salah helped me nail my technical interviews. The real-time feedback on my communication style was a game-changer!",
      improvement: "+45% confidence score",
      timeframe: "3 weeks",
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at Microsoft",
      avatar: "/placeholder.svg?height=40&width=40",
      story:
        "The behavioral interview practice with STAR method coaching landed me my dream PM role. The AI feedback was incredibly detailed.",
      improvement: "+60% interview success",
      timeframe: "2 months",
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Netflix",
      avatar: "/placeholder.svg?height=40&width=40",
      story:
        "As a non-native speaker, the voice coaching feature helped me communicate my ideas more clearly and confidently.",
      improvement: "+70% communication score",
      timeframe: "6 weeks",
    },
  ]

  const communityEvents = [
    {
      title: "Mock Interview Masterclass",
      date: "Mar 15, 2024",
      time: "2:00 PM EST",
      type: "Virtual Workshop",
      attendees: 127,
      level: "All Levels",
    },
    {
      title: "Tech Interview Study Group",
      date: "Mar 18, 2024",
      time: "7:00 PM EST",
      type: "Peer Session",
      attendees: 45,
      level: "Technical",
    },
    {
      title: "Career Fair Prep Bootcamp",
      date: "Mar 22, 2024",
      time: "1:00 PM EST",
      type: "Live Training",
      attendees: 89,
      level: "Students",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Alex Kumar", points: 2840, streak: 28, badge: "Interview Master" },
    { rank: 2, name: "Jessica Wong", points: 2560, streak: 21, badge: "Communication Pro" },
    { rank: 3, name: "David Thompson", points: 2340, streak: 19, badge: "Technical Expert" },
    { rank: 4, name: "Maria Garcia", points: 2180, streak: 15, badge: "Rising Star" },
    { rank: 5, name: "You", points: 1920, streak: 12, badge: "Consistent Learner" },
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/community/forums" className="text-gray-600 hover:text-blue-600 transition-colors">
              Forums
            </Link>
            <Link href="/community/events" className="text-gray-600 hover:text-blue-600 transition-colors">
              Events
            </Link>
            <Link href="/community/mentorship" className="text-gray-600 hover:text-blue-600 transition-colors">
              Mentorship
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Thriving Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with thousands of job seekers, share experiences, and accelerate your career growth together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/community/join">Join Community</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href="/community/events">Upcoming Events</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">25K+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">150+</div>
              <div className="text-gray-600">Weekly Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">95%</div>
              <div className="text-gray-600">Job Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Success Stories</h2>
            <p className="text-xl text-gray-600">Real people, real results, real career transformations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={story.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4">"{story.story}"</blockquote>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-green-600">{story.improvement}</div>
                      <div className="text-xs text-gray-500">in {story.timeframe}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/community/success-stories">
                View All Success Stories
                <Heart className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Community Features */}
            <Card>
              <CardHeader>
                <CardTitle>Community Features</CardTitle>
                <CardDescription>Everything you need to succeed together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Discussion Forums</h4>
                        <p className="text-sm text-gray-600">
                          Get advice, share experiences, and ask questions from the community
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Peer Interview Practice</h4>
                        <p className="text-sm text-gray-600">Practice with other members in mock interview sessions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Mentorship Program</h4>
                        <p className="text-sm text-gray-600">Connect with successful professionals in your field</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekly Events</h4>
                        <p className="text-sm text-gray-600">Join workshops, webinars, and networking sessions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Share2 className="h-6 w-6 text-teal-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Referral Network</h4>
                        <p className="text-sm text-gray-600">
                          Get job referrals from community members at top companies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Trophy className="h-6 w-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Achievement System</h4>
                        <p className="text-sm text-gray-600">Earn badges and recognition for your progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Community Events</CardTitle>
                <CardDescription>Join live sessions and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>
                              {event.date} at {event.time}
                            </span>
                            <Badge variant="secondary">{event.type}</Badge>
                            <Badge variant="outline">{event.level}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-2">{event.attendees} attending</div>
                        <Button size="sm" asChild>
                          <Link href={`/community/events/${index + 1}`}>Join Event</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span>Community Leaderboard</span>
                </CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${user.name === "You" ? "bg-blue-50 border-blue-200 border" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          user.rank === 1
                            ? "bg-yellow-100 text-yellow-700"
                            : user.rank === 2
                              ? "bg-gray-100 text-gray-700"
                              : user.rank === 3
                                ? "bg-orange-100 text-orange-700"
                                : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.rank}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{user.name}</p>
                        <p className="text-xs text-gray-600">
                          {user.points} points • {user.streak} day streak
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {user.badge}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Ambassador Program */}
            <Card>
              <CardHeader>
                <CardTitle>Become an Ambassador</CardTitle>
                <CardDescription>Help others and earn rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Refer friends and earn points</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm">Get exclusive access to features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Earn ambassador badges</span>
                  </div>
                </div>
                <Button className="w-full" size="sm" asChild>
                  <Link href="/community/ambassador">Join Program</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Latest Discussions */}
            <Card>
              <CardHeader>
                <CardTitle>Latest Discussions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h4 className="text-sm font-semibold">Tips for Technical Interviews at FAANG</h4>
                    <p className="text-xs text-gray-600">Started by Alex K. • 24 replies</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3">
                    <h4 className="text-sm font-semibold">Behavioral Questions That Stumped Me</h4>
                    <p className="text-xs text-gray-600">Started by Sarah M. • 18 replies</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h4 className="text-sm font-semibold">Non-Native Speaker Interview Success</h4>
                    <p className="text-xs text-gray-600">Started by Raj P. • 31 replies</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/community/forums">View All Discussions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with like-minded professionals, share your journey, and accelerate your career growth
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <Link href="/community/join">Join Community Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
