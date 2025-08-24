import { NextRequest, NextResponse } from 'next/server'
import { store } from '@/lib/store'
import { createToken, setAuthCookie } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // Find barber by email
    const barber = Array.from(store.barbers.values()).find(b => b.email === email)
    
    if (!barber || barber.password !== password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (!barber.is_active) {
      return NextResponse.json({ error: 'Account inactive' }, { status: 401 })
    }

    const token = await createToken(barber)
    await setAuthCookie(token)

    return NextResponse.json({ 
      success: true, 
      barber: { 
        id: barber.id, 
        email: barber.email, 
        name: barber.name,
        preferences: barber.preferences
      } 
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
