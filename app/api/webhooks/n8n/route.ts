import { NextRequest, NextResponse } from 'next/server'
import { store } from '@/lib/store'
import type { Job } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate webhook data
    if (!data.action || !data.job) {
      return NextResponse.json({ error: 'Invalid webhook data' }, { status: 400 })
    }

    if (data.action === 'job_created') {
      const jobData = data.job
      
      // Create job from N8N data
      const job: Job = {
        id: jobData.id || `JOB-${Date.now()}`,
        customer_name: jobData.customer || 'Customer',
        service_type: jobData.service || 'haircut',
        location: jobData.location || 'Unknown',
        date: jobData.date || new Date().toISOString(),
        price: jobData.price || 50,
        status: 'available',
        barber_id: null,
        claimed_at: null,
      }
      
      // Store the job
      store.jobs.set(job.id, job)
      
      // Broadcast to barbers via SSE
      store.broadcaster.emit('new_job', job)
      
      console.log('New job created from N8N:', job.id)
      
      return NextResponse.json({ success: true, jobId: job.id })
    }
    
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (error) {
    console.error('N8N webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
