'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, DollarSign, User } from 'lucide-react'
import type { Job } from '@/lib/types'

interface JobCardProps {
  job: Job
  onClaim: (jobId: string) => void
  isClaiming: boolean
  isMyJob: boolean
}

export function JobCard({ job, onClaim, isClaiming, isMyJob }: JobCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'claiming': return 'bg-yellow-500'
      case 'claimed': return 'bg-blue-500'
      case 'completed': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg capitalize">{job.service_type}</CardTitle>
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
              {new Date(job.date).toLocaleDateString()} at {new Date(job.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              CHF {job.price}
            </span>
          </div>
          
          {job.status === 'available' && (
            <Button 
              onClick={() => onClaim(job.id)}
              disabled={isClaiming}
              size="sm"
            >
              {isClaiming ? 'Claiming...' : 'Claim Job'}
            </Button>
          )}
          
          {job.status === 'claimed' && isMyJob && (
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              Your Job
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
