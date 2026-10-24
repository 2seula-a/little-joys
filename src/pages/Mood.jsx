import { useEffect } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { moods } from '../data/moods.js'
import './Mood.css'

const upperStars = [
  { left: '12%', top: 48, size: 28, rotation: -12 },
  { left: '24%', top: 30, size: 20, white: true },
  { left: '78%', top: 48, size: 24, rotation: 20 },
  { left: '90%', top: 110, size: 30, white: true },
  { left: '7%', top: 172, size: 22, rotation: 12 },
  { left: '12%', top: 270, size: 28, white: true },
  { left: '89%', top: 255, size: 26, rotation: 45 },
  { left: '7%', top: 375, size: 24, rotation: -12 },
  { left: '91%', top: 395, size: 22, white: true },
]

const lowerStars = [
  { left: '12%', top: 16, size: 20, rotation: -12 },
  { left: '26%', top: 16, size: 16, white: true },
  { left: '75%', top: 16, size: 18, rotation: 20 },
  { left: '89%', top: 16, size: 20, white: true },
  { left: '9%', bottom: 16, size: 22, white: true },
  { left: '30%', bottom: 16, size: 18, rotation: -12 },
  { left: '69%', bottom: 16, size: 20, white: true },
  { left: '91%', bottom: 16, size: 24, rotation: 45 },
]

function MoodStars({ stars }) {
  return (
    <div className="mood-page__stars" aria-hidden="true">
      {stars.map(({ left, top, bottom, size, rotation = 0, white }, index) => (
        <span
          key={index}
          className="mood-page__star"
          style={{
            left,
            top,
            bottom,
            width: size,
            height: size,
            backgroundColor: white ? '#ffffff' : '#ffe5ad',
            transform: `translate(-50%, ${bottom === undefined ? '-50%' : '50%'}) rotate(${rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}

function Mood() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedMood = moods.find((mood) => mood.type === searchParams.get('type'))
  const { setSelectedMood } = useOutletContext()
  const selectedType = selectedMood?.type ?? null
  const isHappy = selectedType === 'happy'
  const isCozy = selectedType === 'cozy'
  const isRest = selectedType === 'rest'
  const isExcited = selectedType === 'excited'

  useEffect(() => {
    setSelectedMood(selectedType)
  }, [selectedType, setSelectedMood])

  function selectMood(type) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous)
      if (next.get('type') === type) {
        next.delete('type')
      } else {
        next.set('type', type)
      }
      return next
    })
  }

  return (
    <section className={`mood-page${isHappy ? ' mood-page--happy' : isCozy ? ' mood-page--cozy' : isRest ? ' mood-page--rest' : isExcited ? ' mood-page--excited' : ''}`}>
      <MoodStars stars={upperStars} />
      {isHappy && (
        <>
          <img className="mood-page__sticker mood-page__happy-cake" src="/images/mood/happy-cake.png" alt="" aria-hidden="true" />
          <img className="mood-page__sticker mood-page__happy-crown" src="/images/mood/happy-crown.png" alt="" aria-hidden="true" />
        </>
      )}
      {isCozy && (
        <>
          <img className="mood-page__sticker mood-page__cozy-candy" src="/images/mood/cozy-candy.png" alt="" aria-hidden="true" />
          <img className="mood-page__sticker mood-page__cozy-candy2" src="/images/mood/cozy-candy2.png" alt="" aria-hidden="true" />
          <img className="mood-page__sticker mood-page__cozy-heart" src="/images/mood/cozy-hart.png" alt="" aria-hidden="true" />
        </>
      )}
      <p className="mood-page__eyebrow">PICK YOUR MOOD</p>
      {isRest && (
        <>
          <img className="mood-page__sticker mood-page__rest-cloud" src="/images/mood/rest-cloud.png" alt="" aria-hidden="true" />
          <img className="mood-page__sticker mood-page__rest-flower" src="/images/mood/rest-flower.png" alt="" aria-hidden="true" />
        </>
      )}
      <h1>오늘의 기분을 골라봐!</h1>
      {isExcited && (
        <>
          <img className="mood-page__sticker mood-page__excited-cherry" src="/images/mood/excited-cherry.png" alt="" aria-hidden="true" />
          <img className="mood-page__sticker mood-page__excited-coffee" src="/images/mood/excited-coffee.png" alt="" aria-hidden="true" />
        </>
      )}
      <p className="mood-page__description">지금 마음에 어울리는 작은 행복을 발견해요.</p>
      <div className="mood-page__options" role="group" aria-label="기분 선택">
        {moods.map(({ type, icon, label, color }) => (
          <button
            key={type}
            type="button"
            className={`mood-page__button mood-page__button--${type}`}
            style={{ '--mood-color': color }}
            aria-pressed={selectedMood?.type === type}
            onClick={() => selectMood(type)}
          >
            <span className="mood-page__icon" aria-hidden="true">{icon}</span> {label}
          </button>
        ))}
      </div>
      <section className="mood-page__joys" aria-labelledby="mood-joys-title">
        <MoodStars stars={lowerStars} />
        {isHappy ? (
          <>
            <img className="mood-page__sticker mood-page__happy-sun" src="/images/mood/happy-sun.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__happy-star" src="/images/mood/happy-star.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__happy-ticket" src="/images/mood/happy-sticker.png" alt="" aria-hidden="true" />
          </>
        ) : isCozy ? (
          <>
            <img className="mood-page__sticker mood-page__cozy-flower" src="/images/mood/cozy-flower.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__cozy-ticket" src="/images/mood/cozy-sticker.png" alt="" aria-hidden="true" />
          </>
        ) : isRest ? (
          <>
            <img className="mood-page__sticker mood-page__rest-eyemask" src="/images/mood/rest-eyemask.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__rest-ticket" src="/images/mood/rest-sticker.png" alt="" aria-hidden="true" />
          </>
        ) : isExcited ? (
          <>
            <img className="mood-page__sticker mood-page__excited-diary" src="/images/mood/excited-diary.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__excited-ticket" src="/images/mood/excited-sticker.png" alt="" aria-hidden="true" />
          </>
        ) : (
          <>
            <img className="mood-page__sticker mood-page__sticker--star" src="/images/mood/star.png" alt="" aria-hidden="true" />
            <img className="mood-page__sticker mood-page__sticker--heart" src={`${import.meta.env.BASE_URL}images/mood/hart.png`} alt="" aria-hidden="true" />
          </>
        )}
        <h2 id="mood-joys-title">{isHappy ? 'YOUR HAPPY MOMENTS' : isCozy ? 'YOUR COZY MOMENTS' : isRest ? 'YOUR REST MOMENTS' : isExcited ? 'YOUR EXCITED MOMENTS' : 'YOUR LITTLE JOYS'}</h2>
        <div aria-live="polite">
        {isHappy || isCozy || isRest || isExcited ? (
          <>
            <p className={`mood-page__${selectedType}-description`}>{isHappy ? '행복한' : isCozy ? '포근한' : isRest ? '쉬고 싶은' : '설레는'} 기분에 어울리는 느낌</p>
            <ul className={`mood-page__${selectedType}-list`}>
              {selectedMood.recommendations.map((recommendation) => (
                <li key={recommendation}>
                  <span className="mood-page__icon" aria-hidden="true">{selectedMood.icon}</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </>
        ) : selectedMood ? (
          <section className="mood-page__recommendations" style={{ backgroundColor: selectedMood.color }} aria-labelledby="mood-recommendations-title">
            <h2 id="mood-recommendations-title">{selectedMood.label} — 오늘의 추천</h2>
            <ul>
              {selectedMood.recommendations.map((recommendation) => (
                <li key={recommendation}>{recommendation}</li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="mood-page__placeholder">선택한 기분에 어울리는 행복이 이곳에 나타나요.</p>
        )}
        </div>
      </section>
    </section>
  )
}

export default Mood
