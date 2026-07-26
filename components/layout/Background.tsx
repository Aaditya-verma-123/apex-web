export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="absolute right-[-8rem] bottom-[-10rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />
    </div>
  );
}