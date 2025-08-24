import { EventEmitter } from 'events'
import type { Barber, Job } from './types'

// In-memory data (reset on server restart)
const jobs = new Map<string, Job>()
const barbers = new Map<string, Barber>()

// Seed with 1-2 barbers and some jobs for MVP
if (barbers.size === 0) {
  const b1: Barber = {
    id: 'b1',
    email: 'barber1@example.com',
    name: 'Barber One',
    password: 'password123', // MVP only; replace with hashed storage when DB added
    preferences: { locations: ['Zurich', 'Bern'], services: ['fade', 'taper', 'braids'] },
    is_active: true,
  }
  const b2: Barber = {
    id: 'b2',
    email: 'barber2@example.com',
    name: 'Barber Two',
    password: 'password123',
    preferences: { locations: ['Zurich'], services: ['fade', 'lineup'] },
    is_active: true,
  }
  barbers.set(b1.id, b1)
  barbers.set(b2.id, b2)
}

if (jobs.size === 0) {
  const now = new Date()
  const mk = (id: string, service_type: string, location: string, plusHours = 24): Job => ({
    id,
    customer_name: 'John Doe',
    service_type,
    location,
    date: new Date(now.getTime() + plusHours * 3600_000).toISOString(),
    price: 55,
    status: 'available',
    barber_id: null,
    claimed_at: null,
  })
  ;['fade', 'taper', 'braids'].forEach((svc, idx) => {
    const j = mk(`JOB-${idx + 1}`, svc, idx % 2 === 0 ? 'Zurich' : 'Bern', (idx + 1) * 6)
    jobs.set(j.id, j)
  })
}

// Simple pub/sub for job changes
const broadcaster = new EventEmitter()
broadcaster.setMaxListeners(1000)

export const store = {
  jobs,
  barbers,
  broadcaster,
}
