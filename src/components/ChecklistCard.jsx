import { useState } from "react";
import { Plus, X } from "lucide-react";
import Checkbox from "./Checkbox.jsx";

const TONE_TEXT = { sage: "text-sage", rose: "text-rose" };
const TONE_BADGE_BG = { sage: "bg-sageBg", rose: "bg-roseBg" };
const TONE_BUTTON_BG = { sage: "bg-sage", rose: "bg-rose" };

export default function ChecklistCard({
  title,
  emoji,
  items,
  tone,
  onToggle,
  onDelete,
  onAdd,
  placeholder,
}) {
  const [draft, setDraft] = useState("");

  const submit = () => {
    const value = draft.trim();
    if (!value) return;
    onAdd(value);
    setDraft("");
  };

  return (
    <div className="rounded-3xl p-6 md:p-7 flex-1 min-w-0 bg-white shadow-[0_20px_45px_-25px_rgba(43,24,38,0.25)]">
      <div className="flex items-center gap-2 mb-5">
        <span
          className={`w-9 h-9 rounded-2xl flex items-center justify-center text-base ${TONE_BADGE_BG[tone]}`}
        >
          {emoji}
        </span>
        <h3 className="text-lg md:text-xl font-display font-semibold text-ink">{title}</h3>
        <span
          className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${TONE_BADGE_BG[tone]} ${TONE_TEXT[tone]}`}
        >
          {items.length}
        </span>
      </div>

      <ul className="flex flex-col gap-3 mb-5">
        {items.length === 0 && (
          <li className="text-sm italic text-inkSoft">Kosong nih — belum ada yang di sini ✨</li>
        )}
        {items.map((it) => (
          <li key={it.id} className="group flex items-center gap-3">
            <Checkbox checked={it.done} onClick={() => onToggle(it.id)} tone={tone} />
            <span
              className={`text-sm md:text-[15px] leading-snug transition-all duration-300 flex-1 ${
                it.done ? "line-through opacity-65 text-inkSoft" : "text-ink"
              }`}
            >
              {it.text}
            </span>
            <button
              onClick={() => onDelete(it.id)}
              aria-label="Hapus item"
              className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity shrink-0 text-inkSoft"
            >
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 pt-3 border-t border-dashed border-cardLine">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={placeholder}
          className="flex-1 text-sm bg-transparent outline-none placeholder:italic min-w-0 text-ink"
        />
        <button
          onClick={submit}
          aria-label="Tambah item"
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white transition-transform active:scale-90 ${TONE_BUTTON_BG[tone]}`}
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}
