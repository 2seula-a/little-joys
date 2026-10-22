import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function PageLayout() {
  const [selectedMood, setSelectedMood] = useState(null)

  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Outlet context={{ selectedMood, setSelectedMood }} />
      </main>
    </div>
  )
}

export default PageLayout
