export default function WorldsPage() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Worlds</h2>
        <p className="mt-2 text-slate-500">
          Create and manage your game worlds.
        </p>
      </header>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">World List</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">World 1 - Warm Garden</p>
            <p className="mt-1 text-sm text-slate-500">
              Introductory world for beginner players.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">World 2 - Cat Forest</p>
            <p className="mt-1 text-sm text-slate-500">
              A forest-themed world with higher difficulty.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}