
import { useNavigate } from 'react-router-dom'
import './Intro.css'

const BASE = import.meta.env.BASE_URL

function Intro() {
  const navigate = useNavigate()

  return (
    <main className="intro-page">
      <div className="intro-page__artboard">
        <img
          className="intro-page__logo"
          src={`${BASE}images/intro/intro-logo.png`}
          alt="LITTLE JOYS"
        />

        <img
          className="intro-page__planet"
          src={`${BASE}images/intro/planet.png`}
          alt=""
          aria-hidden="true"
        />

        {/* 왼쪽 행성 추가 */}
        <img
          className="intro-page__planet intro-page__planet--left"
          src={`${BASE}images/intro/planet.png`}
          alt=""
          aria-hidden="true"
        />

        <button
          className="intro-page__enter"
          type="button"
          onClick={() => navigate('/home')}
        >
          ENTER
        </button>
      </div>
    </main>
  )
}

export default Intro
