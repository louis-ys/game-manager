import { worlds, stages } from '../data/mockData'

export default function DashboardPage() {
  const totalWorlds = worlds.length
  const totalStages = stages.length
  const developingCount = stages.filter(stage => stage.status === 'developing').length
  const doneCount = stages.filter(stage => stage.status === 'done').length

  return (
    <>
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-2 text-slate-500">
          Manage your Unity game worlds, stages, and progress.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Worlds</p>
          <p className="mt-2 text-3xl font-bold">{totalWorlds}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Stages</p>
          <p className="mt-2 text-3xl font-bold">{totalStages}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Developing</p>
          <p className="mt-2 text-3xl font-bold">{developingCount}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Completed</p>
          <p className="mt-2 text-3xl font-bold">{doneCount}</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">Recent Stage Updates</h3>

        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">1-1 Warm Garden Intro</p>
            <p className="mt-1 text-sm text-slate-500">Status: Planning</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">1-2 Cat Forest Path</p>
            <p className="mt-1 text-sm text-slate-500">Status: Developing</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium">2-1 Night Lamp Village</p>
            <p className="mt-1 text-sm text-slate-500">Status: Testing</p>
          </div>
        </div>
      </section>
    </>
  )
}