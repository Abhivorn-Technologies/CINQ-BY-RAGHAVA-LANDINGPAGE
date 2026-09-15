async function verify() {
  try {
    const res = await fetch('http://localhost:3000');
    console.log(`Status Code: ${res.status} ${res.statusText}`);
    const html = await res.text();
    console.log(`HTML Response Length: ${html.length} characters`);

    const sections = [
      'id="hero"',
      'id="about"',
      'id="location"',
      'id="arrival"',
      'id="master-plan"',
      'id="clubhouse"',
      'id="clubhouse-nav"',
      'id="oasis"',
      'id="sky-lounge"',
      'id="residences"',
      'id="specifications"',
      'id="contact"',
    ];

    console.log('\n--- Checking Section IDs ---');
    for (const sec of sections) {
      console.log(`Section ${sec}: ${html.includes(sec) ? 'EXISTS (OK)' : 'MISSING'}`);
    }

    const keyPhrases = [
      'CINQ',
      'BY RAGHAVA',
      'EVERY LEVEL. DESIGNED AROUND YOUR LIFESTYLE',
      '7.19 ACRES',
      '05 TOWERS',
      '61 FLOORS',
      '04 HOMES / FLOOR',
      'Closer to what',
      'A Grand Arrival',
      'Five Towers.',
      'Hub for Indoor &amp; Outdoor Activities',
      'Tower Lounges',
      'The Grand Clubhouse Pavilion',
      'A complete lifestyle, floor by floor',
      'The Oasis',
      'Sensory Playground',
      'Sky Lounge',
      'PICKLEBALL LIKE NEVER BEFORE',
      'Thoughtfully Designed Homes',
      'Built with Detail. Designed for Life.',
      'Your New Beginning',
      'TS RERA Registration No',
    ];

    console.log('\n--- Checking Content Copy ---');
    let passCount = 0;
    for (const phrase of keyPhrases) {
      const found = html.toLowerCase().includes(phrase.toLowerCase());
      if (found) passCount++;
      console.log(`Phrase "${phrase}": ${found ? 'FOUND (OK)' : 'NOT IN INITIAL HTML (rendered client-side or variant)'}`);
    }
    console.log(`\nVerified ${passCount}/${keyPhrases.length} content key points.`);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}

verify();
