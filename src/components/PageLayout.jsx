import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function PageLayout() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}

export default PageLayout
