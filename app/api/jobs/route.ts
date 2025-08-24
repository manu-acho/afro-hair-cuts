import { NextRequest, NextResponse } from 'next/server'
import { store } from '@/lib/store'
import { requireUser } from '@/lib/auth'
import type { Job } from '@/lib/types'

// GET /api/jobs - List jobs for barber (demo mode - no auth required)
export async function GET() {
  try {
    // Demo barber preferences (can be configured later)
    const demoBarber = {
      id: 'b1',
      preferences: { locations: ['Zurich', 'Bern'], services: ['fade', 'taper', 'braids'] }
    }
    
    // Get all jobs and filter by demo barber preferences
    const allJobs = Array.from(store.jobs.values())
    const filteredJobs = allJobs.filter(job => {
      // Only show available jobs or jobs claimed by this barber
      if (job.status === 'claimed' && job.barber_id !== demoBarber.id) return false
      if (job.status === 'completed') return false
      
      // Match preferences (show all for demo, but can be filtered)
      const matchesLocation = demoBarber.preferences.locations.includes(job.location)
      const matchesService = demoBarber.preferences.services.includes(job.service_type)
      
      return matchesLocation && matchesService
    })

    return NextResponse.json({ jobs: filteredJobs })
  } catch (error) {
    console.error('Get jobs error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/jobs - Claim a job (demo mode - no auth required)
export async function POST(request: NextRequest) {
  try {
    // Demo barber (can be configured later)
    const demoBarber = { id: 'b1', name: 'Demo Barber' }
    
    const { jobId } = await request.json()
    
    if (!jobId) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 })
    }

    const job = store.jobs.get(jobId)
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    if (job.status !== 'available') {
      return NextResponse.json({ error: 'Job already claimed' }, { status: 409 })
    }

    // Claim the job
    const updatedJob: Job = {
      ...job,
      status: 'claimed',
      barber_id: demoBarber.id,
      claimed_at: new Date().toISOString()
    }
    
    store.jobs.set(jobId, updatedJob)
    
    // Broadcast the update
    store.broadcaster.emit('job_updated', updatedJob)

    return NextResponse.json({ success: true, job: updatedJob })
  } catch (error) {
    console.error('Claim job error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
