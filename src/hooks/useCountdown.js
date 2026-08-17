import { useEffect, useState } from "react";

export function useCountdown(target) {
  const [left, setLeft] = useState(() => target.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setLeft(target.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const clamped = Math.max(left, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((clamped / (1000 * 60)) % 60);
  const secs = Math.floor((clamped / 1000) % 60);

  return { days, hours, mins, secs };
}
