# Menuju Hari Bahagia — Checklist Lamaran

Website kecil buat bantu maintenance & rencana menuju hari lamaran (14 November 2026), dibangun pakai React + Tailwind CSS, dan dipecah jadi beberapa components biar rapi.

## Struktur folder

```
lamaran-planner/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                 # entry point
    ├── App.jsx                  # merakit semua komponen
    ├── index.css                # tailwind base
    ├── constants.js             # data default checklist + tanggal target
    ├── hooks/
    │   ├── useCountdown.js      # hitung mundur hari/jam/menit/detik
    │   └── useChecklistStorage.js  # simpan checklist ke localStorage
    └── components/
        ├── BackgroundBlobs.jsx  # background gradasi lembut
        ├── Header.jsx           # judul & eyebrow
        ├── CountdownTicket.jsx  # kartu "boarding pass" countdown
        ├── ProgressBar.jsx      # progress persiapan
        ├── Checkbox.jsx         # tombol centang bulat
        ├── ChecklistCard.jsx    # kartu list "Udah Beres" / "PR Selanjutnya"
        └── Footer.jsx           # penutup halaman
```

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173` di browser.

## Build untuk production

```bash
npm run build
```

Hasilnya ada di folder `dist/`, tinggal upload ke hosting statis (Vercel, Netlify, dll).

## Catatan

- Checklist otomatis tersimpan di `localStorage` browser kalian, jadi kalau ditutup dan dibuka lagi datanya masih ada.
- Tanggal & item awal checklist ada di `src/constants.js` — gampang diubah kalau ada perubahan tanggal atau vendor.
- Warna & font brand ada di `tailwind.config.js`, gampang dikustom lebih lanjut.
# Engagement
