import { useState } from 'react'
import { drawTodayJoy } from '../data/todayJoys.js'
import useScraps from '../hooks/useScraps.js'
import './Today.css'

function Today() {
  const [result, setResult] = useState(null)
  const { scraps, toggleScrap } = useScraps()
  const saved = result ? scraps.some((scrap) => scrap.id === result.id) : false

  function drawJoy() {
    setResult(drawTodayJoy(result?.id))
  }

  return (
    <section className={`today-page${result ? ' today-page--result' : ''}`} aria-labelledby="today-title">
      <div className="today-page__accessible-copy">
        {result ? (
          <>
            <h1 id="today-title">오늘의 행복 결과</h1>
            <p>오늘, 당신을 위한 작은 행복이 도착했어요!</p>
          </>
        ) : (
          <>
        <p>TODAY'S LITTLE SURPRISE</p>
        <h1 id="today-title">오늘은 어떤 행복이 기다릴까?</h1>
        <p>하루를 반짝이게 할 작은 행복을 뽑아보세요.</p>
        <p>오늘의 행복 카드 ♡</p>
        <p>어떤 행복이 숨어 있을까요?</p>
          </>
        )}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {result && (
          <>
          <figure className="today-page__result-card">
            <img src={result.image} alt="" />
            <figcaption>{result.title}</figcaption>
          </figure>
          <img className="today-page__tape" src={`${import.meta.env.BASE_URL}images/today/tape.png`} alt="" aria-hidden="true" />
          </>
        )}
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
      <button className="today-page__draw" type="button" onClick={drawJoy}>
        <span>{result ? '다른 행복 찾기' : '행복 뽑기'}</span>
        <span aria-hidden="true">✨</span>
      </button>
      <p className="today-page__accessible-copy">{result ? '또 다른 작은 행복이 기다리고 있어요.' : '작은 행복은 예상치 못한 순간에 찾아오기도 해요.'}</p>
    </section>
  )
}

export default Today
