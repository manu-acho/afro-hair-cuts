'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { 
  FaCut, FaHome, FaTrophy, FaTicketAlt, FaVideo, FaStar, 
  FaUsers, FaFire, FaCrown, FaGift, FaCoins, FaPlay,
  FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUserFriends,
  FaMedal, FaHeart, FaComment, FaShare, FaEye, FaLightbulb
} from 'react-icons/fa'

interface Competition {
  id: string
  title: string
  description: string
  prize: string
  endDate: string
  participants: number
  entryFee: number
  category: string
  status: 'active' | 'ending_soon' | 'completed'
}

interface LotteryEntry {
  id: string
  title: string
  prize: string
  ticketPrice: number
  totalTickets: number
  soldTickets: number
  drawDate: string
  status: 'active' | 'drawing_soon' | 'completed'
}

interface Video {
  id: string
  title: string
  thumbnail: string
  author: string
  views: number
  likes: number
  duration: string
  uploadDate: string
  category: string
}

export default function CommunityDashboard() {
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [lotteryEntries, setLotteryEntries] = useState<LotteryEntry[]>([])
  const [videos, setVideos] = useState<Video[]>([])
  const [userStats, setUserStats] = useState({
    points: 2450,
    rank: 42,
    totalParticipations: 15,
    winnings: 350
  })

  useEffect(() => {
    // Mock data - in real app this would come from API
    setCompetitions([
      {
        id: '1',
        title: 'Best Fade Competition',
        description: 'Show us your cleanest fade technique',
        prize: '$500 + Clippers Set',
        endDate: '2024-01-15',
        participants: 127,
        entryFee: 25,
        category: 'Technique',
        status: 'active'
      },
      {
        id: '2',
        title: 'Creative Color Challenge',
        description: 'Most innovative hair color transformation',
        prize: '$300 + Color Kit',
        endDate: '2024-01-10',
        participants: 89,
        entryFee: 20,
        category: 'Creativity',
        status: 'ending_soon'
      },
      {
        id: '3',
        title: 'Speed Cut Championship',
        description: 'Complete a perfect cut in under 10 minutes',
        prize: '$750 Winner Takes All',
        endDate: '2024-01-20',
        participants: 203,
        entryFee: 30,
        category: 'Speed',
        status: 'active'
      }
    ])

    setLotteryEntries([
      {
        id: '1',
        title: 'Professional Equipment Bundle',
        prize: 'Complete Barber Station ($2,500 value)',
        ticketPrice: 10,
        totalTickets: 500,
        soldTickets: 387,
        drawDate: '2024-01-12',
        status: 'active'
      },
      {
        id: '2',
        title: 'Master Class Weekend',
        prize: 'VIP Training with Celebrity Barber',
        ticketPrice: 15,
        totalTickets: 200,
        soldTickets: 156,
        drawDate: '2024-01-08',
        status: 'drawing_soon'
      }
    ])

    setVideos([
      {
        id: '1',
        title: 'Perfect Beard Line-up Technique',
        thumbnail: '/placeholder.jpg',
        author: 'Master_Cuts_NYC',
        views: 15420,
        likes: 892,
        duration: '8:45',
        uploadDate: '2024-01-03',
        category: 'Tutorial'
      },
      {
        id: '2',
        title: 'Client Transformation: Before & After',
        thumbnail: '/placeholder.jpg',
        author: 'BarberLife_Pro',
        views: 23150,
        likes: 1456,
        duration: '12:30',
        uploadDate: '2024-01-02',
        category: 'Transformation'
      },
      {
        id: '3',
        title: 'Setting Up Your First Barber Shop',
        thumbnail: '/placeholder.jpg',
        author: 'EntrepreneurCuts',
        views: 8930,
        likes: 542,
        duration: '15:20',
        uploadDate: '2024-01-01',
        category: 'Business'
      }
    ])
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ending_soon':
      case 'drawing_soon':
        return 'bg-orange-500'
      case 'active':
        return 'bg-green-500'
      case 'completed':
        return 'bg-gray-500'
      default:
        return 'bg-blue-500'
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Header Navigation */}
      <div className="bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-100">
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaCut className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Community Portal
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
              <FaCoins className="w-4 h-4 text-purple-600" />
              <span className="font-medium text-purple-700">{userStats.points} Points</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <FaHome className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Your Rank</p>
                  <p className="text-3xl font-bold text-purple-700">#{userStats.rank}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FaCrown className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Total Points</p>
                  <p className="text-3xl font-bold text-purple-700">{userStats.points.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <FaFire className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Competitions</p>
                  <p className="text-3xl font-bold text-purple-700">{userStats.totalParticipations}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FaTrophy className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Total Winnings</p>
                  <p className="text-3xl font-bold text-purple-700">${userStats.winnings}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                  <FaGift className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="competitions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl p-2">
            <TabsTrigger 
              value="competitions" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <FaTrophy className="w-4 h-4 mr-2" />
              Competitions
            </TabsTrigger>
            <TabsTrigger 
              value="lottery" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <FaTicketAlt className="w-4 h-4 mr-2" />
              Lottery
            </TabsTrigger>
            <TabsTrigger 
              value="videos" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <FaVideo className="w-4 h-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <FaMedal className="w-4 h-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Competitions Tab */}
          <TabsContent value="competitions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {competitions.map((competition) => (
                <Card key={competition.id} className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-purple-700 mb-2">
                          {competition.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {competition.description}
                        </p>
                      </div>
                      <Badge className={`${getStatusColor(competition.status)} text-white border-0 ml-3`}>
                        {competition.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-600 font-medium">Prize</span>
                        <span className="text-purple-700 font-bold">{competition.prize}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-600 font-medium">Entry Fee</span>
                        <span className="text-purple-700 font-bold">${competition.entryFee}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-medium">Participants</span>
                        <span className="text-purple-700 font-bold">{competition.participants}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span>Ends: {new Date(competition.endDate).toLocaleDateString()}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white rounded-xl">
                      <FaTrophy className="w-4 h-4 mr-2" />
                      Enter Competition
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Lottery Tab */}
          <TabsContent value="lottery" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {lotteryEntries.map((lottery) => (
                <Card key={lottery.id} className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-purple-700">
                        {lottery.title}
                      </CardTitle>
                      <Badge className={`${getStatusColor(lottery.status)} text-white border-0`}>
                        {lottery.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                      <h4 className="font-bold text-purple-700 mb-2">Prize:</h4>
                      <p className="text-purple-600">{lottery.prize}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Ticket Price</span>
                        <span className="font-bold text-purple-700">${lottery.ticketPrice}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Tickets Sold</span>
                          <span className="text-purple-700">{lottery.soldTickets} / {lottery.totalTickets}</span>
                        </div>
                        <Progress 
                          value={(lottery.soldTickets / lottery.totalTickets) * 100} 
                          className="h-2"
                        />
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <FaClock className="w-4 h-4 mr-2" />
                        <span>Draw Date: {new Date(lottery.drawDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white rounded-xl">
                      <FaTicketAlt className="w-4 h-4 mr-2" />
                      Buy Tickets
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            {/* Featured Community Video */}
            <Card className="group bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.01] cursor-pointer border-0 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative overflow-hidden">
                <img 
                  src="/placeholder.jpg" 
                  alt="Fresh Street Cut - Free Community Session"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <FaPlay className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  12.5K views
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                    Fresh Street Cut - Free Community Session
                  </h3>
                  <Badge className="bg-purple-500 text-white">Featured Video</Badge>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <FaVideo className="w-5 h-5 mr-2" />
                    Watch on Instagram
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-500 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <FaVideo className="w-5 h-5 mr-2" />
                    Watch on TikTok
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <FaPlay className="w-6 h-6 text-purple-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-purple-700 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-purple-600 mb-3">by {video.author}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <FaEye className="w-3 h-3 mr-1" />
                          <span>{formatNumber(video.views)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaHeart className="w-3 h-3 mr-1 text-red-500" />
                          <span>{formatNumber(video.likes)}</span>
                        </div>
                      </div>
                      <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        {video.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-purple-50">
                          <FaComment className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-purple-50">
                          <FaShare className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-md shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-700 flex items-center">
                  <FaMedal className="w-6 h-6 mr-3" />
                  Community Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <div key={rank} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          rank === 1 ? 'bg-yellow-500' :
                          rank === 2 ? 'bg-gray-400' :
                          rank === 3 ? 'bg-orange-600' :
                          'bg-purple-500'
                        }`}>
                          {rank}
                        </div>
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>U{rank}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-purple-700">User {rank}</p>
                          <p className="text-sm text-purple-600">{rank === userStats.rank ? '(You)' : 'Community Member'}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-700">{(3000 - (rank * 100)).toLocaleString()} pts</p>
                        <p className="text-sm text-purple-600">Level {Math.ceil((3000 - (rank * 100)) / 500)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
