import { Gem } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-10 md:mb-14">
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 bg-sageBg text-sage">
        <Gem size={12} /> checklist lamaran
      </div>
      <h1 className="text-4xl md:text-6xl leading-[1.05] mb-4 font-display font-semibold text-ink">
        Menuju Hari <span className="italic text-rose">Bahagia</span>
      </h1>
      <p className="text-sm md:text-base text-inkSoft">
        bismillah, countdown to forever <span className="align-middle">🥹✨</span>
      </p>
    </div>
  );
}
