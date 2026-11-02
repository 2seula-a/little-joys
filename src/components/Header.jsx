
import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavigation(path) {
    setMenuOpen(false)

    if (path === '/today' && location.pathname === '/today') {
      window.dispatchEvent(new Event('reset-today'))
    }
  }

  return (
    <header className="site-header">
      <NavLink
        className="site-header__brand"
        to="/home"
        onClick={() => setMenuOpen(false)}
      >
        LITTLE JOYS
        <img
          className="site-header__logo-icon"
          src={`${import.meta.env.BASE_URL}images/common/logo-star.svg`}
          alt=""
          aria-hidden="true"
        />
      </NavLink>

      <button
        className="site-header__menu-toggle"
        type="button"
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-navigation"
        className={menuOpen ? 'site-header__nav is-open' : 'site-header__nav'}
        aria-label="Main navigation"
      >
        <ul className="site-header__navigation">
          {navigation.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'site-header__link is-active' : 'site-header__link'
                }
                to={path}
                onClick={() => handleNavigation(path)}
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