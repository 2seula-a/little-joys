import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScraps from '../hooks/useScraps.js'
import './Scrapbook.css'

function Scrapbook() {
  const { scraps, toggleScrap } = useScraps()
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(scraps.length / 3)
  const currentPage = Math.min(page, Math.max(0, pageCount - 1))
  const visibleScraps = scraps.slice(currentPage * 3, currentPage * 3 + 3)
  const isEmpty = scraps.length === 0

  function removeScrap(scrap) {
    setPage(Math.min(currentPage, Math.max(0, Math.ceil((scraps.length - 1) / 3) - 1)))
    toggleScrap(scrap)
  }

  return (
    <section className={`scrapbook-page${isEmpty ? ' scrapbook-page--empty' : ''}`} aria-labelledby="scrapbook-title">
      <h1 className="scrapbook-page__accessible-copy" id="scrapbook-title">내 마음에 담아둔 작은 행복들</h1>
      {isEmpty ? (
        <>
          <div className="scrapbook-page__accessible-copy">
            <h2>아직 모아둔 행복이 없어요.</h2>
            <p>오늘의 작은 행복을 발견하고 스크랩해보세요.</p>
          </div>
          <Link className="scrapbook-page__find" to="/today">
            <span className="scrapbook-page__accessible-copy">행복 찾으러 가기 ✨</span>
          </Link>
        </>
      ) : (
        <>
          <p className="scrapbook-page__count" role="status">
            {scraps.length}개의 행복
          </p>
          <div className="scrapbook-page__cards">
            {visibleScraps.map((scrap) => (
              <article className="scrapbook-card" key={scrap.id}>
                <span className="scrapbook-card__tape" aria-hidden="true" />
                <img className="scrapbook-card__photo" src={scrap.image} alt={scrap.title} />
                <div className="scrapbook-card__footer">
                  <p>{scrap.title}</p>
                  <button className="scrapbook-card__heart" type="button" aria-label={`${scrap.title} 스크랩 취소`} aria-pressed="true" onClick={() => removeScrap(scrap)}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12Z" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
          {pageCount > 1 && (
            <nav className="scrapbook-page__pagination" aria-label="저장된 행복 페이지">
              <button type="button" disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)} aria-label="이전 페이지">
                <span className="pagination-arrow">‹</span>
              </button>
              <span aria-live="polite">{currentPage + 1} / {pageCount}</span>
              <button type="button" disabled={currentPage === pageCount - 1} onClick={() => setPage(currentPage + 1)} aria-label="다음 페이지">
                <span className="pagination-arrow">›</span>
              </button>            </nav>
          )}
        </>
      )}
    </section>
  )
}

export default Scrapbook
