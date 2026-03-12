import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import WorldsPage from './pages/WorldsPage'
import StagesPage from './pages/StagesPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/worlds" element={<WorldsPage />} />
              <Route path="/stages" element={<StagesPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}