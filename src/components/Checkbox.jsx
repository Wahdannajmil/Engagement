const TONE_CLASSES = {
  sage: { checked: "bg-sage border-sage", unchecked: "border-cardLine" },
  rose: { checked: "bg-rose border-rose", unchecked: "border-cardLine" },
};

export default function Checkbox({ checked, onClick, tone = "rose" }) {
  const cls = checked ? TONE_CLASSES[tone].checked : TONE_CLASSES[tone].unchecked;

  return (
    <button
      onClick={onClick}
      aria-pressed={checked}
      aria-label={checked ? "Tandai belum selesai" : "Tandai selesai"}
      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${cls}`}
    >
      {checked && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path
            d="M1 5L4.5 8.5L11 1.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
