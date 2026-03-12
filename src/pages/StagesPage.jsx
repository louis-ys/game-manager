export default function StagesPage() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Stages</h2>
        <p className="mt-2 text-slate-500">
          View and manage stage information.
        </p>
      </header>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">Stage List</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">1-1 Warm Garden Intro</p>
            <p className="mt-1 text-sm text-slate-500">Difficulty: Easy</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">1-2 Cat Forest Path</p>
            <p className="mt-1 text-sm text-slate-500">Difficulty: Normal</p>
          </div>
        </div>
      </div>
    </div>
  )
}