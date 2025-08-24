#!/bin/bash

# Test script to add jobs via the N8N webhook using curl
BASE_URL="http://localhost:3000"

echo "🚀 Adding test jobs via N8N webhook..."
echo

# Job 1: Fade in Zurich
echo "Adding Job 1: Fade in Zurich..."
curl -X POST "${BASE_URL}/api/webhooks/n8n" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "job_created",
    "job": {
      "id": "BOOK-TEST-001",
      "customer": "Alice Johnson",
      "service": "fade",
      "location": "Zurich",
      "date": "'$(date -v+2H -u +"%Y-%m-%dT%H:%M:%SZ")'",
      "price": 65
    }
  }'
echo
echo

# Job 2: Taper in Bern
echo "Adding Job 2: Taper in Bern..."
curl -X POST "${BASE_URL}/api/webhooks/n8n" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "job_created",
    "job": {
      "id": "BOOK-TEST-002",
      "customer": "Bob Smith",
      "service": "taper",
      "location": "Bern",
      "date": "'$(date -v+4H -u +"%Y-%m-%dT%H:%M:%SZ")'",
      "price": 55
    }
  }'
echo
echo

# Job 3: Braids in Zurich
echo "Adding Job 3: Braids in Zurich..."
curl -X POST "${BASE_URL}/api/webhooks/n8n" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "job_created",
    "job": {
      "id": "BOOK-TEST-003",
      "customer": "Charlie Brown",
      "service": "braids",
      "location": "Zurich",
      "date": "'$(date -v+6H -u +"%Y-%m-%dT%H:%M:%SZ")'",
      "price": 80
    }
  }'
echo
echo

echo "✨ Test jobs added! Check the barber dashboard."
echo "👉 Visit: http://localhost:3000/barber-portal/dashboard"
echo "🎯 No login required - direct access to demo dashboard!"
