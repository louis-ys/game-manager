import { useState } from 'react'
import { stages } from '../data/mockData'

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'planning':
      return 'inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800'
    case 'developing':
      return 'inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold text-blue-800'
    case 'testing':
      return 'inline-block rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold text-orange-800'
    case 'done':
      return 'inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-semibold text-green-800'
    default:
      return 'inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800'
  }
}

function getStatusLabel(status) {
  switch (status) {
    case 'planning':
      return 'Planning'
    case 'developing':
      return 'Developing'
    case 'testing':
      return 'Testing'
    case 'done':
      return 'Done'
    default:
      return status
  }
}

export default function StagesPage() {
  const [showForm, setShowForm] = useState(false)
  const [stageList, setStageList] = useState(stages)

  const [stageCode, setStageCode] = useState('')
  const [title, setTitle] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [status, setStatus] = useState('planning')
  const [goal, setGoal] = useState('')
  const [reward, setReward] = useState('')
  const [description, setDescription] = useState('')

  function resetForm() {
    setStageCode('')
    setTitle('')
    setDifficulty('easy')
    setStatus('planning')
    setGoal('')
    setReward('')
    setDescription('')
  }

  function handleSave() {
    if (
      !stageCode.trim() ||
      !title.trim() ||
      !goal.trim() ||
      !reward.trim() ||
      !description.trim()
    ) {
      return
    }

    const nextId =
      stageList.length > 0
        ? Math.max(...stageList.map(stage => stage.id)) + 1
        : 1

    const newStage = {
      id: nextId,
      worldId: 1,
      stageCode: stageCode.trim(),
      title: title.trim(),
      difficulty,
      status,
      goal: goal.trim(),
      reward: reward.trim(),
      description: description.trim(),
    }

    setStageList(prev => [...prev, newStage])

    resetForm()
    setShowForm(false)
  }

  function handleCancel() {
    resetForm()
    setShowForm(false)
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this stage?'
    )
    if (!confirmed) return

    setStageList(prev => prev.filter(stage => stage.id !== id))
  }

  function handleExportJson() {
    const jsonString = JSON.stringify(stageList, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'stages.json'
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Stages</h2>
          <p className="mt-2 text-slate-500">
            View and manage stage information.
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
              + Add Stage
            </button>
          )}
        </div>
      </header>

      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">New Stage</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Stage Code
              </label>
              <input
                type="text"
                value={stageCode}
                onChange={e => setStageCode(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                placeholder="e.g. 1-3"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                placeholder="Stage title"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
              >
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Status</label>
              <select
                value={status}
                onChange={e => setStatus(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
              >
                <option value="planning">Planning</option>
                <option value="developing">Developing</option>
                <option value="testing">Testing</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Goal</label>
              <input
                type="text"
                value={goal}
                onChange={e => setGoal(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                placeholder="e.g. Clear 10 flower tiles"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Reward</label>
              <input
                type="text"
                value={reward}
                onChange={e => setReward(e.target.value)}
                className="w-full rounded border border-slate-300 p-2"
                placeholder="e.g. 100 gold"
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
                placeholder="Short description of this stage"
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
        <p className="text-lg font-semibold">Stage List</p>

        <div className="mt-4 space-y-3">
          {stageList.map(stage => (
            <div
              key={stage.id}
              className="flex items-start justify-between rounded-xl border border-slate-200 p-4"
            >
              <div>
                <p className="font-medium">
                  {stage.stageCode} - {stage.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Difficulty: {stage.difficulty}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Goal: {stage.goal}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Reward: {stage.reward}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Description: {stage.description}
                </p>

                <p className="mt-2">
                  <span className={getStatusClass(stage.status)}>
                    {getStatusLabel(stage.status)}
                  </span>
                </p>
              </div>

              <button
                type="button"
                className="ml-4 rounded-lg bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                onClick={() => handleDelete(stage.id)}
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