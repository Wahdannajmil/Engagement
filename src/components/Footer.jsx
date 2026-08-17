import { Infinity as InfinityIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-inkSoft">
        <InfinityIcon size={16} />
        <span className="text-sm font-medium font-display">Forever Start Here</span>
        <span>🤍💐✨</span>
      </div>
    </div>
  );
}
