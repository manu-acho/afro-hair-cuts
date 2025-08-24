'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Bell, MapPin, Clock, DollarSign, User, Home, Scissors, ArrowLeft, TrendingUp, Calendar, Star, Settings, BarChart3, Target, Wallet } from 'lucide-react'
import type { Job, Barber } from '@/lib/types'

interface JobStreamEvent {
  type: 'connected' | 'new_job' | 'job_update' | 'keepalive'
  job?: Job
  barberId?: string
}

export default function BarberDashboard() {
  const [barber, setBarber] = useState<Barber | null>(null)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [claimingJob, setClaimingJob] = useState<string | null>(null)
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting')
  const [activeTab, setActiveTab] = useState('dashboard')
  const router = useRouter()

  // Mock statistics for demo
  const [stats, setStats] = useState({
    totalEarnings: 1250,
    jobsCompleted: 23,
    averageRating: 4.8,
    monthlyTarget: 2000,
    weeklyJobs: 8,
    responseRate: 95
  })

  // Load initial data without authentication for demo
  useEffect(() => {
    const loadData = async () => {
      try {
        // Set demo barber (first barber from store)
        const demoBarber = {
          id: 'b1',
          email: 'barber1@example.com',
          name: 'Demo Barber',
          password: 'demo', // Not used in dashboard
          preferences: { locations: ['Zurich', 'Bern'], services: ['fade', 'taper', 'braids'] },
          is_active: true,
        }
        setBarber(demoBarber)
        
        // Load initial jobs (all jobs for demo)
        const jobsResponse = await fetch('/api/jobs')
        if (jobsResponse.ok) {
          const jobsData = await jobsResponse.json()
          setJobs(jobsData.jobs)
        }
      } catch (error) {
        console.error('Data loading failed:', error)
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Set up SSE connection for real-time updates
  useEffect(() => {
    if (!barber) return

    let eventSource: EventSource

    const connectSSE = () => {
      setConnectionStatus('connecting')
      eventSource = new EventSource('/api/jobs/stream')

      eventSource.onopen = () => {
        setConnectionStatus('connected')
        setError('')
      }

      eventSource.onmessage = (event) => {
        try {
          const data: JobStreamEvent = JSON.parse(event.data)
          
          switch (data.type) {
            case 'connected':
              console.log('SSE connected for barber:', data.barberId)
              break
            case 'new_job':
              if (data.job) {
                setJobs(prev => [data.job!, ...prev])
                showNotification(`New ${data.job.service_type} job in ${data.job.location}`)
              }
              break
            case 'job_update':
              if (data.job) {
                setJobs(prev => prev.map(job => 
                  job.id === data.job!.id ? data.job! : job
                ))
              }
              break
            case 'keepalive':
              // Keep connection alive
              break
          }
        } catch (error) {
          console.error('SSE message parse error:', error)
        }
      }

      eventSource.onerror = () => {
        setConnectionStatus('error')
        setError('Connection lost. Reconnecting...')
        eventSource.close()
        // Reconnect after 3 seconds
        setTimeout(connectSSE, 3000)
      }
    }

    connectSSE()

    return () => {
      if (eventSource) {
        eventSource.close()
      }
    }
  }, [barber])

  const showNotification = (message: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('New Job Available', {
        body: message,
        icon: '/placeholder-logo.png'
      })
    }
  }

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission()
    }
  }

  const claimJob = async (jobId: string) => {
    setClaimingJob(jobId)
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId }),
      })

      const data = await response.json()
      
      if (response.ok) {
        // Job will be updated via SSE
        showNotification(`Job claimed successfully!`)
      } else {
        setError(data.error || 'Failed to claim job')
        setTimeout(() => setError(''), 3000)
      }
    } catch (error) {
      setError('Network error')
      setTimeout(() => setError(''), 3000)
    } finally {
      setClaimingJob(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'claiming': return 'bg-yellow-500'
      case 'claimed': return 'bg-blue-500'
      case 'completed': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Clip & Chill
                </span>
              </Link>
              <div className="h-6 w-px bg-purple-300" />
              <div>
                <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Barber Portal</h1>
                <p className="text-sm text-gray-500">Welcome back, {barber?.name}</p>
              </div>
            </div>

            {/* Right side - Status and Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-purple-200 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${
                  connectionStatus === 'connected' ? 'bg-green-500' : 
                  connectionStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
                }`} />
                <span className="text-sm text-gray-600 font-medium">
                  {connectionStatus === 'connected' ? 'Live' : 
                   connectionStatus === 'error' ? 'Disconnected' : 'Connecting...'}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={requestNotificationPermission}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Bell className="w-4 h-4 mr-1" />
                Alerts
              </Button>
              <Link href="/">
                <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-purple-200">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Scissors className="w-4 h-4 mr-2" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Wallet className="w-4 h-4 mr-2" />
              Earnings
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Settings className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Total Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-800">CHF {stats.totalEarnings}</div>
                  <p className="text-sm text-green-600 mt-1">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
                    <Scissors className="w-4 h-4" />
                    Jobs Completed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-800">{stats.jobsCompleted}</div>
                  <p className="text-sm text-blue-600 mt-1">This month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-yellow-700 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Average Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-800">{stats.averageRating}</div>
                  <p className="text-sm text-yellow-600 mt-1">⭐⭐⭐⭐⭐</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-700 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Response Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-800">{stats.responseRate}%</div>
                  <p className="text-sm text-purple-600 mt-1">Excellent!</p>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Progress */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Target className="w-5 h-5" />
                  Monthly Progress
                </CardTitle>
                <CardDescription>Track your progress towards monthly goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Earnings Target</span>
                    <span>CHF {stats.totalEarnings} / CHF {stats.monthlyTarget}</span>
                  </div>
                  <Progress value={(stats.totalEarnings / stats.monthlyTarget) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly Jobs</span>
                    <span>{stats.weeklyJobs} / 10 jobs</span>
                  </div>
                  <Progress value={(stats.weeklyJobs / 10) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <div className="text-center">
                      <Calendar className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">View Schedule</div>
                    </div>
                  </Button>
                  <Button className="h-20 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                    <div className="text-center">
                      <DollarSign className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">Earnings</div>
                    </div>
                  </Button>
                  <Button className="h-20 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
                    <div className="text-center">
                      <Settings className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">Settings</div>
                    </div>
                  </Button>
                  <Button className="h-20 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    <div className="text-center">
                      <Star className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">Reviews</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Available Jobs</h2>
              <p className="text-sm text-gray-500">{jobs.length} jobs matching your preferences</p>
            </div>

            {jobs.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-purple-200">
                <CardContent className="text-center py-12">
                  <Scissors className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                  <p className="text-gray-500">No jobs available at the moment.</p>
                  <p className="text-sm text-gray-400 mt-1">New jobs will appear here automatically.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {jobs.map((job) => (
                  <Card key={job.id} className="bg-white/80 backdrop-blur-sm border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-purple-700">{job.service_type}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {job.customer_name}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(job.status)}>
                          {job.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(job.date).toLocaleDateString()} at {new Date(job.date).toLocaleTimeString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            CHF {job.price}
                          </span>
                        </div>
                        
                        {job.status === 'available' && (
                          <Button 
                            onClick={() => claimJob(job.id)}
                            disabled={claimingJob === job.id}
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          >
                            {claimingJob === job.id ? 'Claiming...' : 'Claim Job'}
                          </Button>
                        )}
                        
                        {job.status === 'claimed' && job.barber_id === barber?.id && (
                          <Badge variant="outline" className="text-purple-600 border-purple-600">
                            Your Job
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">Earnings Overview</CardTitle>
                <CardDescription>Track your income and financial goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-purple-700 mb-2">CHF {stats.totalEarnings}</div>
                  <p className="text-gray-600 mb-4">Total earnings this month</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">CHF 450</div>
                      <div className="text-sm text-gray-500">This week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">CHF 180</div>
                      <div className="text-sm text-gray-500">Yesterday</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">CHF 65</div>
                      <div className="text-sm text-gray-500">Avg per job</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">Profile Settings</CardTitle>
                <CardDescription>Manage your barber profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <p className="text-gray-900">{barber?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{barber?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Service Areas</label>
                    <p className="text-gray-900">{barber?.preferences?.locations?.join(', ')}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Specialties</label>
                    <p className="text-gray-900">{barber?.preferences?.services?.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
