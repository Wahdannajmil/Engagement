export default function ProgressBar({ doneCount, totalCount }) {
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className="flex items-center gap-4 mb-10 md:mb-12">
      <div className="flex-1 h-2.5 rounded-full overflow-hidden bg-cardLine">
        <div
          className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-rose to-gold"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs md:text-sm font-semibold shrink-0 text-inkSoft">
        {doneCount}/{totalCount} beres · {pct}%
      </span>
    </div>
  );
}
