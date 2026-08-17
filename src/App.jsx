import { Loader2 } from "lucide-react";
import BackgroundBlobs from "./components/BackgroundBlobs.jsx";
import Header from "./components/Header.jsx";
import CountdownTicket from "./components/CountdownTicket.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ChecklistCard from "./components/ChecklistCard.jsx";
import Footer from "./components/Footer.jsx";
import { useChecklistStorage } from "./hooks/useChecklistStorage.js";

export default function App() {
  const { items, loaded, toggle, remove, add } = useChecklistStorage();

  const done = items.filter((i) => i.done);
  const todo = items.filter((i) => !i.done);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-bg font-body">
      <BackgroundBlobs />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <Header />
        <CountdownTicket />
        <ProgressBar doneCount={done.length} totalCount={items.length} />

        {!loaded ? (
          <div className="flex items-center justify-center gap-2 py-16 text-inkSoft">
            <Loader2 size={18} className="animate-spin" />
            <span className="text-sm">Membuka checklist kalian...</span>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 mb-14">
            <ChecklistCard
              title="Selesai"
              emoji="✅"
              items={done}
              tone="sage"
              onToggle={toggle}
              onDelete={remove}
              onAdd={add(true)}
              placeholder="tambah yang udah beres..."
            />
            <ChecklistCard
              title="Belum Selesai"
              emoji="📝"
              items={todo}
              tone="rose"
              onToggle={toggle}
              onDelete={remove}
              onAdd={add(false)}
              placeholder="tambah baru..."
            />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
