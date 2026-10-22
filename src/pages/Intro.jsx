import { useNavigate } from 'react-router-dom'
import './Intro.css'

function Intro() {
  const navigate = useNavigate()

  return (
    <main className="intro-page">
      <div className="intro-page__artboard">
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
