"use client";

import { useEffect, useState } from "react";

type ClockBackgroundProps = {
  className?: string;
};

export function ClockBackground({ className }: ClockBackgroundProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div
      className={`pointer-events-none absolute ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="relative h-full w-full rounded-full bg-[#0b0b0d]">
        <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_50%_45%,#ff5b75,#ff2b4f_55%,#7a1426_100%)]" />
        <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)]" />
        <div className="absolute inset-1 rounded-full border border-black/60" />

        <div className="absolute left-1/2 top-2 -translate-x-1/2 text-xl font-semibold text-white/90">
          12
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-semibold text-white/90">
          3
        </div>
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-xl font-semibold text-white/90">
          6
        </div>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-semibold text-white/90">
          9
        </div>

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

        <div
          className="absolute left-1/2 top-1/2 h-[30%] w-[3px] -translate-x-1/2 rounded-full bg-black"
          style={{ transform: `translate(-50%, -50%) rotate(${hourDeg}deg)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[46%] w-[2px] -translate-x-1/2 rounded-full bg-black"
          style={{ transform: `translate(-50%, -50%) rotate(${minuteDeg}deg)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[52%] w-[1px] -translate-x-1/2 bg-black"
          style={{ transform: `translate(-50%, -50%) rotate(${secondDeg}deg)` }}
        />

        <div className="absolute right-[18%] top-1/2 -translate-y-1/2 opacity-90">
          <div className="h-12 w-12 bg-white [mask-image:url('/brand/logo-mark.png')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] [webkit-mask-image:url('/brand/logo-mark.png')] [webkit-mask-repeat:no-repeat] [webkit-mask-size:contain] [webkit-mask-position:center]" />
        </div>
      </div>
    </div>
  );
}
