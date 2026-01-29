// Quick test script to verify your Gemini API key works
// Run: node test-api.js

const apiKey = process.env.GEMINI_API_KEY || 'YOUR_API_KEY_HERE';

const models = [
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-pro'
];

async function testModel(model) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: 'Say hello' }]
        }]
      })
    });

    const data = await response.json();
    
    if (response.ok && data.candidates) {
      console.log(`✅ ${model} - WORKS!`);
      console.log(`   Response: ${data.candidates[0].content.parts[0].text.substring(0, 50)}...`);
      return model;
    } else {
      console.log(`❌ ${model} - Failed:`, data.error?.message || 'Unknown error');
      return null;
    }
  } catch (error) {
    console.log(`❌ ${model} - Error:`, error.message);
    return null;
  }
}

async function findWorkingModel() {
  console.log('Testing Gemini models...\n');
  
  for (const model of models) {
    const working = await testModel(model);
    if (working) {
      console.log(`\n🎉 Use this model: ${working}`);
      console.log(`\nUpdate app/api/generate/route.ts line ~60 to:`);
      console.log(`const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/${working}:generateContent?key=\${apiKey}\`, {`);
      return;
    }
  }
  
  console.log('\n❌ No working models found. Check your API key at:');
  console.log('https://aistudio.google.com/app/apikey');
}

findWorkingModel();
