
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
