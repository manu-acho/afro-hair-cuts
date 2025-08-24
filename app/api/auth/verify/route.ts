import { NextResponse } from 'next/server'
import { getUserFromCookie } from '@/lib/auth'

export async function GET() {
  try {
    const barber = await getUserFromCookie()
    
    if (!barber) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    return NextResponse.json({ 
      barber: { 
        id: barber.id, 
        email: barber.email, 
        name: barber.name,
        preferences: barber.preferences
      } 
    })
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
