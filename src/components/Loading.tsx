export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card rounded-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin" />
          <p className="text-white text-lg">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
}
