import { useState } from 'react'
import { worlds } from '../data/mockData'

export default function WorldsPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Worlds</h2>
          <p className="mt-2 text-slate-500">
            Create and manage your game worlds.
          </p>
        </div>

        {!showForm && (
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => setShowForm(true)}
          >
            + Add World
          </button>
        )}
      </header>

      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">New World</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <input
                type="text"
                className="w-full rounded border border-slate-300 p-2"
                placeholder="Enter world title"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Description
              </label>
              <textarea
                className="w-full rounded border border-slate-300 p-2"
                rows="3"
                placeholder="Brief description"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                Save
              </button>

              <button
                type="button"
                className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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