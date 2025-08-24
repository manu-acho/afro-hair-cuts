import { NextRequest } from 'next/server'
import { store } from '@/lib/store'
import { requireUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Demo barber preferences (can be configured later)
    const demoBarber = {
      id: 'b1',
      preferences: { locations: ['Zurich', 'Bern'], services: ['fade', 'taper', 'braids'] }
    }
    
    // Create SSE stream
    const stream = new ReadableStream({
      start(controller) {
        // Send initial connection message
        controller.enqueue(`data: ${JSON.stringify({ type: 'connected', barberId: demoBarber.id })}\n\n`)
        
        // Listen for job updates
        const handleJobUpdate = (job: any) => {
          // Check if job matches barber preferences
          const matchesLocation = demoBarber.preferences.locations.includes(job.location)
          const matchesService = demoBarber.preferences.services.includes(job.service_type)
          
          if (matchesLocation && matchesService) {
            controller.enqueue(`data: ${JSON.stringify({ type: 'job_update', job })}\n\n`)
          }
        }
        
        const handleNewJob = (job: any) => {
          // Check if job matches barber preferences
          const matchesLocation = demoBarber.preferences.locations.includes(job.location)
          const matchesService = demoBarber.preferences.services.includes(job.service_type)
          
          if (matchesLocation && matchesService) {
            controller.enqueue(`data: ${JSON.stringify({ type: 'new_job', job })}\n\n`)
          }
        }
        
        store.broadcaster.on('job_updated', handleJobUpdate)
        store.broadcaster.on('new_job', handleNewJob)
        
        // Cleanup on connection close
        request.signal.addEventListener('abort', () => {
          store.broadcaster.off('job_updated', handleJobUpdate)
          store.broadcaster.off('new_job', handleNewJob)
        })
        
        // Send keepalive every 30 seconds
        const keepAlive = setInterval(() => {
          try {
            controller.enqueue(`data: ${JSON.stringify({ type: 'keepalive' })}\n\n`)
          } catch (error) {
            clearInterval(keepAlive)
          }
        }, 30000)
        
        request.signal.addEventListener('abort', () => {
          clearInterval(keepAlive)
        })
      }
    })
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Cache-Control'
      }
    })
  } catch (error) {
    console.error('SSE stream error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
