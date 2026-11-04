
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { drawTodayJoy } from '../data/todayJoys.js'
import useScraps from '../hooks/useScraps.js'
import './Today.css'

function Today() {
  const [result, setResult] = useState(null)
  const { scraps, toggleScrap } = useScraps()
  const saved = result ? scraps.some((scrap) => scrap.id === result.id) : false

  useEffect(() => {
    function resetToday() {
      setResult(null)
    }

    window.addEventListener('reset-today', resetToday)

    return () => {
      window.removeEventListener('reset-today', resetToday)
    }
  }, [])

  function drawJoy() {
    setResult(drawTodayJoy(result?.id))
  }

  return (
    <section
      className={`today-page${result ? ' today-page--result' : ''}`}
      aria-labelledby="today-title"
    >
      <div className="today-page__accessible-copy">
        {result ? (
          <>
            <p className="today-page__eyebrow">
              TODAY'S LITTLE SURPRISE
            </p>
            <h1 id="today-title">
              오늘의 <span>행복</span> 결과
            </h1>
            <p className="today-page__description">
              당신을 위한 작은 행복이 도착했어요!
            </p>
          </>
        ) : (
          <>
            <p className="today-page__eyebrow">
              TODAY'S LITTLE SURPRISE
            </p>
            <h1 id="today-title">
              오늘은 어떤 <span>행복</span>이 기다릴까?
            </h1>
            <p className="today-page__description">
              행복 뽑기 버튼을 눌러 오늘의 작은 행복을 만나보세요.
            </p>
          </>
        )}
      </div>

      <div className="today-page__petals" aria-hidden="true">
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
        <span className="today-page__petal"></span>
      </div>

      {!result && (
        <p className="today-page__letter-text">
          A LITTLE JOY
          <span>FOR YOU</span>
          <span className="today-page__letter-heart">♡</span>
        </p>
      )}

      <div className="today-page__card-guide">
        {result ? (
          <>
            <p>오늘의 행복 카드 ♡</p>
            <p>마음에 드는 행복은 스크랩하고, 다른 행복도 만나보세요.</p>
          </>
        ) : (
          <>
            <p>오늘의 행복 카드 ♡</p>
            <p>어떤 행복이 숨어 있을까요?</p>
          </>
        )}
      </div>

      <div aria-live="polite" aria-atomic="true">
        {result && (
          <figure className="today-page__result-card">
            <img src={result.image} alt="" />
            <figcaption>{result.title}</figcaption>
          </figure>
        )}

        <img
          className="today-page__tape"
          src={`${import.meta.env.BASE_URL}images/today/tape.png`}
          alt=""
          aria-hidden="true"
        />
      </div>

      {result && (
        <button
          className="today-page__scrap"
          type="button"
          aria-label={saved ? '스크랩 취소' : '현재 행복 스크랩하기'}
          aria-pressed={saved}
          onClick={() => toggleScrap(result)}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/today/${saved ? 'today-scrap-finish.svg' : 'today-scrap.svg'}`}
            alt=""
          />
        </button>
      )}

      <button
        className="today-page__draw"
        type="button"
        onClick={drawJoy}
      >
        <span>{result ? '다른 행복 찾기' : '행복 뽑기'}</span>
        <span aria-hidden="true">✨</span>
      </button>

      {result && saved && (
        <Link
          to="/scrapbook"
          className="today-page__scrapbook-link"
          aria-label="스크랩북 보러가기"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/today/scrp-bt-pc.svg`}
            alt=""
          />
        </Link>
      )}

      <p className="today-page__accessible-copy">
        {result
          ? '마음에 드는 행복은 스크랩하고, 다른 행복도 만나보세요.'
          : '어떤 행복이 기다리고 있을까요? 버튼을 눌러 확인해 보세요.'}
      </p>
    </section>
  )
}

export default Today
