'use client';

import { useEffect, useState } from 'react';

export default function LivePledgesCounter() {
  const [pledges, setPledges] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // 1. Tell Next.js we are safely in the browser
    setMounted(true);

    // 2. Safely read from localStorage
    const savedPledges = localStorage.getItem('gjp_live_pledges');
    let startingNumber = 120; // Set your fake baseline here!

    if (savedPledges) {
      const parsed = parseInt(savedPledges, 10);
      // Failsafe: If the saved value is somehow broken/NaN, ignore it
      if (!isNaN(parsed)) {
        startingNumber = parsed;
      }
    } else {
      // First time visitor: set the baseline
      localStorage.setItem('gjp_live_pledges', startingNumber.toString());
    }

    setPledges(startingNumber);

    // 3. Set the interval to tick up
    const interval = setInterval(() => {
      setPledges((prev) => {
        const nextVal = prev + 1;
        localStorage.setItem('gjp_live_pledges', nextVal.toString());
        return nextVal;
      });
    }, 5000); // Ticks up by 1 every 5 seconds

    // 4. CRITICAL: Cleanup function to stop React Strict Mode from duplicating intervals
    return () => clearInterval(interval);
  }, []);

  // While loading, keep the layout structure but hide the text to prevent flashing
  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="text-5xl md:text-6xl font-bold mb-2 opacity-0">0</span>
        <span className="text-sm md:text-base font-bold tracking-widest uppercase">Live Pledges</span>
      </div>
    );
  }

  // Once safely mounted, show the actual persistent number
  return (
    <div className="flex flex-col items-center justify-center transition-opacity duration-300">
      <span className="text-5xl md:text-6xl font-bold mb-2">{pledges}</span>
      <span className="text-sm md:text-base font-bold tracking-widest uppercase">Live Pledges</span>
    </div>
  );
}