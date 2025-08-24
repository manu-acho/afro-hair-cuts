import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import type { AuthTokenPayload, Barber } from './types'
import { store } from './store'

const TOKEN_NAME = 'barber_token'

function getSecret() {
  const secret = process.env.AUTH_SECRET || 'dev-secret-change-me'
  return new TextEncoder().encode(secret)
}

export async function createToken(barber: Barber) {
  const secret = getSecret()
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + 60 * 60 * 24 * 7 // 7 days
  const payload = {
    sub: barber.id,
    email: barber.email,
    name: barber.name,
    iat,
    exp,
  }
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .sign(secret)
  return token
}

export async function setAuthCookie(token: string) {
  const c = await cookies()
  c.set(TOKEN_NAME, token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 })
}

export async function clearAuthCookie() {
  const c = await cookies()
  c.delete(TOKEN_NAME)
}

export async function getUserFromCookie() {
  const c = await cookies()
  const token = c.get(TOKEN_NAME)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecret())
    const sub = (payload.sub || payload['sub']) as string | undefined
    if (!sub) return null
    const barber = store.barbers.get(sub)
    return barber || null
  } catch {
    return null
  }
}

export async function requireUser() {
  const user = await getUserFromCookie()
  if (!user) throw new Error('Unauthorized')
  return user
}
