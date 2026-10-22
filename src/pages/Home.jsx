import { Link, useNavigate } from 'react-router-dom'
import { moods } from '../data/moods.js'
import useScraps from '../hooks/useScraps.js'
import './Home.css'

const heroStars = [
  { left: 5.1, top: 18.5, size: 24, rotation: 12 },
  { left: 11.7, top: 14.8, size: 40, rotation: -14, white: true },
  { left: 33.4, top: 12.8, size: 40, rotation: -12 },
  { left: 35.5, top: 22.1, size: 25, rotation: -12 },
  { left: 45.8, top: 20.3, size: 22, rotation: 10, white: true },
  { left: 67, top: 10, size: 26, rotation: -8, white: true },
  { left: 73.4, top: 22.1, size: 24, rotation: 35 },
  { left: 89.2, top: 21.7, size: 39, rotation: 45 },
  { left: 7.4, top: 40.2, size: 43, rotation: -10 },
  { left: 10, top: 49.8, size: 24, rotation: -10 },
  { left: 22.1, top: 32.6, size: 27, rotation: -12 },
  { left: 27.4, top: 45.2, size: 26, rotation: -10 },
  { left: 39, top: 50.7, size: 28, rotation: -15 },
  { left: 59, top: 50.7, size: 43, rotation: -12, white: true },
  { left: 68.9, top: 38.8, size: 40, rotation: 45 },
  { left: 67.5, top: 51.1, size: 24, rotation: 45 },
  { left: 85.1, top: 42.2, size: 26, rotation: 35 },
  { left: 97.1, top: 75.6, size: 24, rotation: 45 },
  { left: 78, top: 77.2, size: 25, rotation: 30 },
  { left: 27.4, top: 79.5, size: 26, rotation: -12 },
  { left: 33.8, top: 84.9, size: 27, rotation: -10, white: true },
  { left: 61.2, top: 87.4, size: 27, rotation: -12 },
  { left: 21.7, top: 93.2, size: 42, rotation: -15 },
  { left: 83, top: 91.8, size: 26, rotation: -12 },
]

const joys = [
  { id: 'joy-flower', image: '/images/home/joy-flower.jpg', title: '꽃이 있는 하루' },
  { id: 'joy-coffee', image: '/images/home/joy-coffee.jpg', title: '맛있는 커피 한 잔' },
  { id: 'joy-sky', image: '/images/home/joy-sky.jpg', title: '예쁜 하늘 보기' },
  { id: 'joy-rest', image: '/images/home/joy-rest.jpg', title: '포근한 휴식 시간' },
  { id: 'joy-book', image: '/images/home/joy-book.jpg', title: '좋아하는 책 읽기' },
]

function Home() {
  const { scraps, toggleScrap } = useScraps()
  const navigate = useNavigate()

  function selectMood(type) {
    navigate(`/mood?type=${type}`)
  }

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <figure className="home-polaroid home-polaroid--cake">
          <div className="home-polaroid__photo">
            <img src="/images/home/hero-cake.png" alt="딸기 케이크" />
          </div>
          <figcaption>딸기케이크로 당충전하기</figcaption>
        </figure>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">COLLECT YOUR LITTLE MOMENTS</p>
          <h1 id="home-title">오늘의 작은 행복을<br />발견해요</h1>
          <p className="home-hero__description">
            평범한 일상 속, 특별한 순간들을 모아보세요.
          </p>
          <Link className="home-hero__button" to="/today">
            오늘의 행복 찾기 <span aria-hidden="true">→</span>
          </Link>
        </div>

        <figure className="home-polaroid home-polaroid--flower">
          <div className="home-polaroid__photo">
            <img src="/images/home/hero-flower.png" alt="분홍 튤립" />
          </div>
          <figcaption>기분 전환 인테리어</figcaption>
        </figure>
        <div className="home-hero__stars" aria-hidden="true">
          {heroStars.map(({ left, top, size, rotation, white }, index) => (
            <span
              key={index}
              className="home-hero__star"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                backgroundColor: white ? '#ffffff' : '#ffe5ad',
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="mood-selector" aria-labelledby="mood-title">
        <img className="mood-selector__decoration mood-selector__decoration--star" src="/images/star.svg" alt="" aria-hidden="true" />
        <h2 id="mood-title">오늘은 어떤 기분인가요?</h2>
        <div className="mood-selector__options">
          {moods.map(({ type, icon, label, color }) => (
            <button
              className={`mood-button mood-button--${type}`}
              type="button"
              key={type}
              style={{ '--mood-color': color }}
              onClick={() => selectMood(type)}
            >
              <span className="mood-button__icon" aria-hidden="true">{icon}</span>
              {label}
            </button>
          ))}
        </div>
        <img className="mood-selector__decoration mood-selector__decoration--ice" src="/images/ice.svg" alt="" aria-hidden="true" />
      </section>

      <section className="todays-joy" aria-labelledby="joy-title">
        <div className="todays-joy__heading">
          <div>
            <h2 id="joy-title">TODAY'S JOY</h2>
            <p>지금, 이런 행복은 어때요?</p>
          </div>
          <Link to="/today">전체보기 <span aria-hidden="true">→</span></Link>
        </div>

        <div className="joy-grid">
          {joys.map(({ id, image, title }) => {
            const saved = scraps.some((scrap) => scrap.id === id)
            return (
              <article className="joy-card" key={id}>
                <img src={image} alt="" />
                <div className="joy-card__caption">
                  <h3>{title}</h3>
                  <button
                    type="button"
                    className={saved ? 'joy-card__heart is-saved' : 'joy-card__heart'}
                    aria-label={`${title} 스크랩 ${saved ? '취소' : '추가'}`}
                    aria-pressed={saved}
                    onClick={() => toggleScrap({ id, image, title })}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill={saved ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
