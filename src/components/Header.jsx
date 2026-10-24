import { NavLink, useLocation } from 'react-router-dom'
const navigation = [
  { label: 'Home', path: '/home' },
  { label: 'Mood', path: '/mood' },
  { label: 'Today', path: '/today' },
  { label: 'Scrapbook', path: '/scrapbook' },
  { label: 'About', path: '/about' },
]

function Header() {
  const location = useLocation()
  return (
    <header className="site-header">
      <NavLink className="site-header__brand" to="/home">
        LITTLE JOYS <span aria-hidden="true">💗</span>
      </NavLink>
      <nav aria-label="Main navigation">
        <ul className="site-header__navigation">
          {navigation.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'site-header__link is-active' : 'site-header__link'
                }
                to={path}
                onClick={() => {
                  if (path === '/today' && location.pathname === '/today') {
                    window.dispatchEvent(new Event('reset-today'))
                  }
                }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
