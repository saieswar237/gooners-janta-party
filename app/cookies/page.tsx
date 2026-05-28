'use client';

import { useEffect, useState } from 'react';

export function PledgeCounter() {
  const [pledges, setPledges] = useState<number>(120); // Set your base default here
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // 1. Signal that we are safely running in the browser
    setMounted(true);

    // 2. Get or set the persistent value
    const savedPledges = localStorage.getItem('gjp_pledges');
    let currentBaseline = 120;

    if (savedPledges) {
      const parsed = parseInt(savedPledges, 10);
      if (!isNaN(parsed)) {
        currentBaseline = parsed;
      }
    } else {
      localStorage.setItem('gjp_pledges', currentBaseline.toString());
    }

    setPledges(currentBaseline);

    // 3. Set up the continuous ticker
    const interval = setInterval(() => {
      setPledges((prev) => {
        const nextValue = prev + 1;
        localStorage.setItem('gjp_pledges', nextValue.toString());
        return nextValue;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // If the component hasn't fully mounted in the browser yet, show a clean loading layout or the baseline
  if (!mounted) {
    return (
      <div className="text-center opacity-0">
        <span className="text-3xl font-bold">120</span>
        <p className="text-xs uppercase tracking-wider">Pledges Received</p>
      </div>
    );
  }

  return (
    <div className="text-center transition-opacity duration-300 opacity-100">
      <span className="text-3xl font-bold">{pledges}</span>
      <p className="text-xs uppercase tracking-wider">Pledges Received</p>
    </div>
  );
}