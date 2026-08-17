import { Heart, Sparkles } from "lucide-react";
import { useCountdown } from "../hooks/useCountdown.js";
import { TARGET_DATE } from "../constants.js";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTicket() {
  const countdown = useCountdown(TARGET_DATE);

  const segments = [
    { v: countdown.days, l: "hari" },
    { v: countdown.hours, l: "jam" },
    { v: countdown.mins, l: "menit" },
    { v: countdown.secs, l: "detik" },
  ];

  return (
    <div className="relative mb-10 md:mb-14">
      <div className="rounded-3xl overflow-hidden flex flex-col sm:flex-row bg-white shadow-[0_30px_60px_-30px_rgba(43,24,38,0.35)]">
        <div className="flex-1 p-7 md:p-9 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-roseBg">
            <Heart size={20} className="text-rose" fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase mb-1 text-gold">
              Save the date
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-ink">
              14 November 2026
            </p>
          </div>
        </div>

        {/* perforation divider */}
        <div className="relative hidden sm:block w-0">
          <div className="absolute top-0 bottom-0 left-0 border-l-2 border-dashed border-cardLine" />
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-bg" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-bg" />
        </div>

        <div className="flex-1 p-7 md:p-9 flex items-center justify-center gap-3 sm:gap-4 bg-[#FFF9F5]">
          {segments.map((seg, i) => (
            <div key={seg.l} className="flex items-center gap-3 sm:gap-4">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl tabular-nums font-display font-semibold text-roseDeep">
                  {pad(seg.v)}
                </p>
                <p className="text-[10px] uppercase tracking-wide mt-0.5 text-inkSoft">{seg.l}</p>
              </div>
              {i < segments.length - 1 && <span className="text-lg pb-4 text-cardLine">:</span>}
            </div>
          ))}
        </div>
      </div>

      <Sparkles
        size={22}
        className="absolute -top-3 -right-2 md:-right-3 text-gold animate-sparklePulse"
      />
    </div>
  );
}
