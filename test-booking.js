// Test booking form submission to N8N webhook
const testBookingSubmission = async () => {
  const testData = {
    ID: `BOOK-TEST-${Date.now()}`,
    Timestamp: new Date().toISOString(),
    Name: "Emmanuel Acho",
    Email: "emmanuel.acho@gmail.com",
    Phone: "+41 79 123 45 67",
    Service: "classic-cut",
    ServiceName: "Classic Cut",
    ServicePrice: 45,
    ServiceCurrency: "CHF",
    Date: "2025-08-25",
    Time: "14:00",
    Address: "Test Address, 3000 Bern, Switzerland",
    Status: "Pending Payment",
    Payment: "Pending",
    Notes: "Test booking from development - checking N8N workflow",
    Language: "en",
    Source: "website-test"
  };

  console.log('Testing booking submission with data:', testData);
  
  try {
    const response = await fetch('https://n8n-waga-u47077.vm.elestio.app/webhook/81ddbf14-e1fa-4649-9441-af4fd6e52720', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(testData),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('Response body:', responseText);

    if (response.ok) {
      console.log('✅ SUCCESS: Booking submission successful!');
      console.log('📧 Check emmanuel.acho@gmail.com for confirmation email');
      return { success: true, data: responseText };
    } else {
      console.log('❌ ERROR: Booking submission failed');
      return { success: false, error: responseText };
    }
  } catch (error) {
    console.error('❌ NETWORK ERROR:', error.message);
    return { success: false, error: error.message };
  }
};

// Run the test
testBookingSubmission().then(result => {
  console.log('\n=== TEST RESULTS ===');
  if (result.success) {
    console.log('✅ Booking form and N8N workflow are working correctly!');
    console.log('📧 Check your email: emmanuel.acho@gmail.com');
  } else {
    console.log('❌ Test failed:', result.error);
  }
  process.exit(result.success ? 0 : 1);
});
