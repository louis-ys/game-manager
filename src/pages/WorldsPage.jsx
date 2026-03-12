import { worlds } from '../data/mockData'

export default function WorldsPage() {
  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Worlds</h2>
          <p className="mt-2 text-slate-500">
            Create and manage your game worlds.
          </p>
        </div>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add World
        </button>
      </header>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">World List</p>
        <div className="mt-4 space-y-3">
          {worlds.map(world => (
            <div
              key={world.id}
              className="rounded-xl border border-slate-200 p-4"
            >
              <p className="font-medium">
                World {world.orderNo} - {world.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {world.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}