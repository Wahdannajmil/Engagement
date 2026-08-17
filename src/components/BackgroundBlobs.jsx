export default function BackgroundBlobs() {
  return (
    <>
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blobRose blur-3xl opacity-50 pointer-events-none animate-floatSlow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blobLav blur-3xl opacity-40 pointer-events-none animate-floatSlow2" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blobPeach blur-3xl opacity-40 pointer-events-none animate-floatSlow3" />
    </>
  );
}
