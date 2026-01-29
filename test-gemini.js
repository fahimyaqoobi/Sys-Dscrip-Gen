const apiKey = "AIzaSyCvTr1tNmzW1Lkll540Pzhe1fySjyr6MK4";

async function test() {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: 'Say hello briefly' }] }]
    })
  });

  const data = await response.json();
  
  if (response.ok) {
    console.log('✅ gemini-2.0-flash WORKS!');
    console.log(data.candidates[0].content.parts[0].text);
  } else {
    console.log('❌ Error:', data.error?.message);
  }
}

test();
