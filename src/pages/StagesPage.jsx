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

  function resetForm() {
    setStageCode('')
    setTitle('')
    setDifficulty('easy')
    setStatus('planning')
  }

  function handleSave() {
    // stageCode나 title이 비어 있으면 저장하지 않음
    if (!stageCode.trim() || !title.trim()) {
      return
    }

    // 새 id 계산
    const nextId =
      stageList.length > 0 ? Math.max(...stageList.map(stage => stage.id)) + 1 : 1

    // 새 스테이지 객체 생성
    const newStage = {
      id: nextId,
      worldId: 1, // 지금은 임시 고정값, 나중에 world 선택 기능 추가 가능
      stageCode: stageCode.trim(),
      title: title.trim(),
      difficulty,
      status,
    }

    // 기존 목록에 새 스테이지 추가
    setStageList(prev => [...prev, newStage])

    // 입력값 초기화 후 폼 닫기
    resetForm()
    setShowForm(false)
  }

  function handleCancel() {
    resetForm()
    setShowForm(false)
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

        {!showForm && (
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => setShowForm(true)}
          >
            + Add Stage
          </button>
        )}
      </header>

      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">New Stage</h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Stage Code</label>
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
              <label className="mb-1 block text-sm font-medium">Difficulty</label>
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
              className="rounded-xl border border-slate-200 p-4"
            >
              <p className="font-medium">
                {stage.stageCode} - {stage.title}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Difficulty: {stage.difficulty}
              </p>

              <p className="mt-1">
                <span className={getStatusClass(stage.status)}>
                  {getStatusLabel(stage.status)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}