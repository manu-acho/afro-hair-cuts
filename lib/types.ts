export type JobStatus = 'available' | 'claiming' | 'claimed' | 'completed'

export interface Job {
  id: string
  customer_name: string
  service_type: string
  location: string
  date: string // ISO string
  price: number
  status: JobStatus
  barber_id?: string | null
  claimed_at?: string | null
  preferences_match?: Record<string, unknown>
}

export interface BarberPreferences {
  locations: string[]
  services: string[]
  availability_windows?: Record<string, unknown>
  max_distance_km?: number
}

export interface Barber {
  id: string
  email: string
  name: string
  phone?: string
  password: string
  preferences: BarberPreferences
  is_active: boolean
}

export interface AuthTokenPayload {
  sub: string
  email: string
  name: string
  iat: number
  exp: number
}
