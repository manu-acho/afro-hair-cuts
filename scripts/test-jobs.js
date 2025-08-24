#!/usr/bin/env node

// Test script to simulate N8N webhooks for adding jobs
const BASE_URL = 'http://localhost:3000'

const sampleJobs = [
  {
    action: 'job_created',
    job: {
      id: 'BOOK-TEST-001',
      customer: 'Alice Johnson',
      service: 'fade',
      location: 'Zurich',
      date: new Date(Date.now() + 2 * 3600_000).toISOString(), // 2 hours from now
      price: 65
    }
  },
  {
    action: 'job_created',
    job: {
      id: 'BOOK-TEST-002',
      customer: 'Bob Smith',
      service: 'taper',
      location: 'Bern',
      date: new Date(Date.now() + 4 * 3600_000).toISOString(), // 4 hours from now
      price: 55
    }
  },
  {
    action: 'job_created',
    job: {
      id: 'BOOK-TEST-003',
      customer: 'Charlie Brown',
      service: 'braids',
      location: 'Zurich',
      date: new Date(Date.now() + 6 * 3600_000).toISOString(), // 6 hours from now
      price: 80
    }
  }
]

async function addJob(jobData) {
  try {
    const response = await fetch(`${BASE_URL}/api/webhooks/n8n`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    })
    
    const result = await response.json()
    
    if (response.ok) {
      console.log(`✅ Added job: ${jobData.job.id} - ${jobData.job.service} in ${jobData.job.location}`)
    } else {
      console.log(`❌ Failed to add job: ${result.error}`)
    }
  } catch (error) {
    console.log(`❌ Network error: ${error.message}`)
  }
}

async function main() {
  console.log('🚀 Adding test jobs via N8N webhook...\n')
  
  for (let i = 0; i < sampleJobs.length; i++) {
    await addJob(sampleJobs[i])
    // Add small delay between requests
    if (i < sampleJobs.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  
  console.log('\n✨ Test jobs added! Check the barber dashboard.')
  console.log('👉 Visit: http://localhost:3000/barber-portal')
  console.log('📧 Use: barber1@example.com or barber2@example.com')
  console.log('🔑 Password: password123')
}

main().catch(console.error)
