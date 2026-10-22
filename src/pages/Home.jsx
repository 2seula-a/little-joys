import { Link } from 'react-router-dom'
import './Home.css'

const moods = [
  { icon: '☀', label: '행복해', className: 'happy' },
  { icon: '♡', label: '포근해', className: 'cozy' },
  { icon: '☁', label: '쉬고 싶어', className: 'rest' },
  { icon: '❀', label: '설레', className: 'excited' },
]

const joys = [
  { image: '/images/home/joy-flower.jpg', title: '꽃이 있는 하루', saved: true },
  { image: '/images/home/joy-coffee.jpg', title: '맛있는 커피 한 잔', saved: false },
  { image: '/images/home/joy-sky.jpg', title: '예쁜 하늘 보기', saved: true },
  { image: '/images/home/joy-rest.jpg', title: '포근한 휴식 시간', saved: false },
  { image: '/images/home/joy-book.jpg', title: '좋아하는 책 읽기', saved: true },
]

function Home() {
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
      </section>

      <section className="mood-selector" aria-labelledby="mood-title">
        <img className="mood-selector__decoration mood-selector__decoration--star" src="/images/star.svg" alt="" aria-hidden="true" />
        <h2 id="mood-title">오늘은 어떤 기분인가요?</h2>
        <div className="mood-selector__options">
          {moods.map(({ icon, label, className }) => (
            <button className={`mood-button mood-button--${className}`} type="button" key={label}>
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
          {joys.map(({ image, title, saved }) => (
            <article className="joy-card" key={title}>
              <img src={image} alt="" />
              <div className="joy-card__caption">
                <h3>{title}</h3>
                <span className={saved ? 'joy-card__heart is-saved' : 'joy-card__heart'} aria-label={saved ? '저장됨' : '저장 안 됨'}>
                  {saved ? '♥' : '♡'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
