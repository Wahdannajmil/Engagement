import { useEffect, useRef, useState } from "react";
import { DEFAULT_ITEMS, STORAGE_KEY } from "../constants.js";

export function useChecklistStorage() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef(null);

  // load once on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setItems(JSON.parse(raw));
      } else {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ITEMS));
      }
    } catch (e) {
      console.error("Gagal memuat checklist tersimpan", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  // debounced save on every change
  useEffect(() => {
    if (!loaded) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (e) {
        console.error("Gagal menyimpan checklist", e);
      }
    }, 300);
    return () => clearTimeout(saveTimer.current);
  }, [items, loaded]);

  const toggle = (id) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));

  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const add = (done) => (text) =>
    setItems((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, text, done }]);

  return { items, loaded, toggle, remove, add };
}
