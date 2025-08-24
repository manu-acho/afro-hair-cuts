# Afro Haircut - Barber Portal

A real-time job management system for barbers with N8N integration.

## 🚀 Phase 1 MVP - COMPLETED

### Features Implemented
- ✅ **JWT Authentication** - Pre-registered barbers with email/password login
- ✅ **Real-time Job Streaming** - Server-Sent Events (SSE) for live job updates  
- ✅ **Job Claiming System** - First-to-claim wins with optimistic UI
- ✅ **Preference Matching** - Jobs filtered by barber location/service preferences
- ✅ **N8N Webhook Integration** - Receives job data from booking system
- ✅ **Browser Notifications** - Desktop alerts for new matching jobs
- ✅ **Responsive UI** - Built with shadcn/ui components

### Architecture
```
Customer Booking → N8N → Google Sheets (unchanged)
                       ↓
                       Next.js API → In-memory Store
                       ↓
                       SSE Stream → Barber Dashboard
```

## 🔧 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access barber portal:**
   - Visit: http://localhost:3000/barber-portal
   - Demo credentials:
     - Email: `barber1@example.com` or `barber2@example.com`
     - Password: `password123`

4. **Test with sample jobs:**
   ```bash
   node scripts/test-jobs.js
   ```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Barber login
- `GET /api/auth/verify` - Verify session

### Jobs
- `GET /api/jobs` - List jobs for authenticated barber
- `POST /api/jobs` - Claim a job
- `GET /api/jobs/stream` - SSE stream for real-time updates

### Webhooks
- `POST /api/webhooks/n8n` - Receive job data from N8N

## 📋 Demo Data

**Pre-registered Barbers:**
- **Barber 1**: Zurich & Bern, services: fade, taper, braids
- **Barber 2**: Zurich only, services: fade, lineup

**Sample Jobs:** 3 test jobs are seeded on startup

## 🎯 Phase 2 - N8N Integration (Ready)

Your N8N workflow should POST to `/api/webhooks/n8n` with:

```json
{
  "action": "job_created",
  "job": {
    "id": "BOOK-123456789",
    "customer": "John Doe", 
    "service": "fade",
    "location": "Zurich",
    "date": "2024-08-15T15:00:00Z",
    "price": 55
  }
}
```

## 🗄️ Phase 3 - Database Migration (Future)

The current in-memory store can be easily replaced with:
- PostgreSQL/MySQL for production
- Prisma ORM for type-safe database operations
- The same API endpoints will work unchanged

## 🌐 Deployment (Netlify Ready)

The app is configured for Netlify deployment:
- SSE works with Edge Functions
- Environment variables: `AUTH_SECRET`
- Static file optimization enabled

## 🔔 Real-time Features

- **Server-Sent Events** for live job updates
- **Browser notifications** (requires permission)
- **Optimistic UI** for instant feedback
- **Auto-reconnection** on connection loss
- **Preference-based filtering** in real-time

## 📈 Monitoring

- Connection status indicator in dashboard
- Console logging for webhook events
- Error handling with user feedback

---

**Next Steps:** Connect your existing N8N booking workflow to the webhook endpoint and watch jobs flow in real-time to your barbers! 🎉
