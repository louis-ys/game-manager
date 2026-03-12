import { stages } from '../data/mockData'

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'planning':
      return 'inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800'
    case 'developing':
      return 'inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-200 text-blue-800'
    case 'testing':
      return 'inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-200 text-orange-800'
    case 'done':
      return 'inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-200 text-green-800'
    default:
      return 'inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800'
  }
}

export default function StagesPage() {
  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Stages</h2>
          <p className="mt-2 text-slate-500">
            View and manage stage information.
          </p>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          + Add Stage
        </button>
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
              <p className="mt-1">
                <span className={getStatusClass(stage.status)}>{stage.status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}