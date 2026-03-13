import { useState } from 'react'
import { worlds } from '../data/mockData'

export default function WorldsPage() {
  const [showForm, setShowForm] = useState(false)
  const [worldList, setWorldList] = useState(worlds)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function resetForm() {
    setTitle('')
    setDescription('')
  }

  function handleSave() {
    if (!title.trim() || !description.trim()) {
      return
    }

    const nextId =
      worldList.length > 0 ? Math.max(...worldList.map(w => w.id)) + 1 : 1

    const nextOrder =
      worldList.length > 0
        ? Math.max(...worldList.map(w => w.orderNo)) + 1
        : 1

    const newWorld = {
      id: nextId,
      title: title.trim(),
      description: description.trim(),
      orderNo: nextOrder,
    }

    setWorldList(prev => [...prev, newWorld])
    resetForm()
    setShowForm(false)
  }

  function handleCancel() {
    resetForm()
    setShowForm(false)
  }

  function handleDelete(id) {
    const confirmed = window.confirm('Are you sure you want to delete this world?')
    if (!confirmed) return

    setWorldList(prev => prev.filter(w => w.id !== id))
  }

  function handleExportJson() {
    const jsonString = JSON.stringify(worldList, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'worlds.json'
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Worlds</h2>
          <p className="mt-2 text-slate-500">
            Create and manage your game worlds.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
            onClick={handleExportJson}
          >
            Export JSON
          </button>

          {!showForm && (
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={() => setShowForm(true)}
            >
              + Add World
            </button>
          )}
        </div>
      </header>

      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">New World</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                placeholder="Enter world title"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Description
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                rows="3"
                placeholder="Brief description"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                onClick={handleSave}
              >
                Save
              </button>

              <button
                type="button"
                className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
                onClick={handleCancel}
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
          {worldList.map(world => (
            <div
              key={world.id}
              className="flex items-start justify-between rounded-xl border border-slate-200 p-4"
            >
              <div>
                <p className="font-medium">
                  World {world.orderNo} - {world.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {world.description}
                </p>
              </div>

              <button
                type="button"
                className="ml-4 rounded-lg bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                onClick={() => handleDelete(world.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}