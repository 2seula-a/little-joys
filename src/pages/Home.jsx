
import { Link, useNavigate } from 'react-router-dom'
import { moods } from '../data/moods.js'
import useScraps from '../hooks/useScraps.js'
import './Home.css'

const heroStars = [
  { left: 5.1, top: 18.5, size: 24, rotation: 12 },
  { left: 33.4, top: 12.8, size: 40, rotation: -12 },
  { left: 67, top: 10, size: 26, rotation: -8, white: true },
  { left: 89.2, top: 21.7, size: 39, rotation: 45 },
  { left: 22.1, top: 32.6, size: 27, rotation: -12 },
  { left: 68.9, top: 38.8, size: 40, rotation: 45 },
  { left: 10, top: 49.8, size: 24, rotation: -10 },
  { left: 59, top: 50.7, size: 43, rotation: -12, white: true },
  { left: 85.1, top: 42.2, size: 26, rotation: 35 },
  { left: 27.4, top: 79.5, size: 26, rotation: -12 },
  { left: 78, top: 77.2, size: 25, rotation: 30 },
  { left: 21.7, top: 93.2, size: 42, rotation: -15 },
]

const BASE = import.meta.env.BASE_URL

const joys = [
  { id: 'joy-flower', image: `${BASE}images/home/joy-flower.jpg`, title: '꽃이 있는 하루' },
  { id: 'joy-coffee', image: `${BASE}images/home/joy-coffee.jpg`, title: '맛있는 커피 한 잔' },
  { id: 'joy-sky', image: `${BASE}images/home/joy-sky.jpg`, title: '예쁜 하늘 보기' },
  { id: 'joy-rest', image: `${BASE}images/home/joy-rest.jpg`, title: '포근한 휴식 시간' },
  { id: 'joy-book', image: `${BASE}images/home/joy-book.jpg`, title: '좋아하는 책 읽기' },
]

function Home() {
  const { scraps, toggleScrap } = useScraps()
  const navigate = useNavigate()

  function selectMood(type) {
    navigate(`/mood?type=${type}`)
  }

  return (
    <div className="home-page">
      <div className="home-hero__sparkles" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} className="home-hero__sparkle" />
        ))}
      </div>

      <section className="home-hero" aria-labelledby="home-title">
        <figure className="home-polaroid home-polaroid--cake">
          <div className="home-polaroid__photo">
            <img src={`${BASE}images/home/hero-cake.png`} alt="딸기 케이크" />
          </div>
          <figcaption>딸기케이크로 당충전하기</figcaption>
        </figure>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">COLLECT YOUR LITTLE MOMENTS</p>
          <h1 id="home-title">
            오늘의 작은 행복을<br />발견해요
          </h1>
          <p className="home-hero__description">
            평범한 일상 속, 특별한 순간들을 모아보세요.
          </p>
          <Link className="home-hero__button" to="/today">
            오늘의 행복 찾기 <span aria-hidden="true">→</span>
          </Link>
        </div>

        <figure className="home-polaroid home-polaroid--flower">
          <div className="home-polaroid__photo">
            <img src={`${BASE}images/home/hero-flower.png`} alt="분홍 튤립" />
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
        <img
          className="mood-selector__decoration mood-selector__decoration--star"
          src={`${BASE}images/star.svg`}
          alt=""
          aria-hidden="true"
        />
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
              <img
                className="mood-button__icon"
                src={`${BASE}images/home/home-${type}-icon.png`}
                alt=""
                aria-hidden="true"
              />
              {label}
            </button>
          ))}
        </div>

        <img
          className="mood-selector__decoration mood-selector__decoration--ice"
          src={`${BASE}images/ice.svg`}
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className="todays-joy" aria-labelledby="joy-title">
        <div className="todays-joy__heading">
          <div>
            <h2 id="joy-title">TODAY'S JOY</h2>
            <p>지금, 이런 행복은 어때요?</p>
          </div>
          <Link to="/today">
            전체보기 <span aria-hidden="true">→</span>
          </Link>
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

      <section className="home-video" aria-labelledby="home-video-title">
        <div className="home-video__heading">
          <p className="home-video__eyebrow">SECTION 01 · VIDEO</p>
          <h2 id="home-video-title">A Little Moment of Joy</h2>
          <p className="home-video__description">
            잠시 멈춰 바라보면, 평범했던 하루에도 작은 행복이 숨어 있어요.
          </p>
        </div>

        <div className="home-video__frame">
          <video
            className="home-video__player"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="구름과 꽃, 따뜻한 햇살을 담은 작은 행복 영상"
          >
            <source
              src={`${BASE}videos/little-joys-home.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="home-story" aria-labelledby="home-story-title">
        <div className="home-story__heading">
          <p className="home-story__eyebrow">
            SECTION 02 · BRAND STORY
          </p>

          <h2 id="home-story-title">
            작은 행복을 발견하고, 모으고, 기억해요.
          </h2>

          <p className="home-story__description">
            LITTLE JOYS는 일상 속 작은 행복을 발견하고 기록하는
            디지털 스크랩북입니다.
            <br />
            오늘의 기분을 선택하고, 나만의 행복을 찾아
            소중한 순간들을 모아보세요.
          </p>
        </div>

        <div className="home-story__grid">
          {['Discover', 'Collect', 'Remember', 'Enjoy'].map((item) => (
            <div className="home-story__item" key={item}>
              <img
                className="home-story__icon"
                src={`${BASE}images/home/${item}.svg`}
                alt=""
                aria-hidden="true"
              />
              <img
                className="home-story__text"
                src={`${BASE}images/home/${item}-text.svg`}
                alt={item}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
