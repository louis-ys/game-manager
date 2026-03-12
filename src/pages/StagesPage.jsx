import { stages } from '../data/mockData'

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
          {stages.map(stage => (
            <div
              key={stage.id}
              className="rounded-xl border border-slate-200 p-4"
            >
              <p className="font-medium">
                {stage.stageCode} - {stage.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Difficulty: {stage.difficulty}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Status: {stage.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}