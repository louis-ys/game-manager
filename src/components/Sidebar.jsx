import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const baseClass =
    'block w-full rounded-lg px-4 py-2 text-left text-slate-700 hover:bg-slate-100'

  const activeClass = 'bg-slate-900 text-white hover:bg-slate-900'

  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-6">
      <h1 className="text-2xl font-bold">GM</h1>
      <p className="mt-2 text-sm text-slate-500">Game Manager</p>

      <nav className="mt-8 space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ''}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/worlds"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ''}`
          }
        >
          Worlds
        </NavLink>

        <NavLink
          to="/stages"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ''}`
          }
        >
          Stages
        </NavLink>
      </nav>
    </aside>
  )
}