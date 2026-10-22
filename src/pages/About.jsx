import Footer from '../components/Footer.jsx'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <h1 className="about-page__title">
        <span className="about-page__accessible">About LITTLE JOYS</span>
        <svg viewBox="0 0 1440 237" aria-hidden="true">
          <defs>
            <linearGradient id="about-title-color"><stop stopColor="#ffb3c1" /><stop offset=".5" stopColor="#9c80e7" /><stop offset="1" stopColor="#53417e" /></linearGradient>
            <path id="about-title-curve" d="M180 193 Q720 35 1140 193" />
          </defs>
          <text fill="url(#about-title-color)" stroke="#f7f5eb" strokeWidth="10" paintOrder="stroke" fontFamily="Georgia, serif" fontSize="96" fontWeight="700">
            <textPath href="#about-title-curve" startOffset="50%" textAnchor="middle">About LITTLE JOYS</textPath>
          </text>
        </svg>
      </h1>
      <div className="about-page__panels">
        <section className="about-page__panel about-page__story" aria-labelledby="about-story">
          <h2 id="about-story">Our Story</h2>
          <p>바쁜 일상 속에서도 우리는 늘 작은 행복을 마주해요.<br />따스한 햇살, 좋아하는 음악, 맛있는 간식,<br />사랑하는 사람의 한마디처럼 사소하지만<br />마음을 환하게 해주는 순간들이에요.</p>
          <p>LITTLE JOYS는 그 소중한 순간들을<br />하나하나 모아, 언제든 다시 꺼내볼 수 있는<br />나만의 행복 아카이브가 되고자 시작되었어요.</p>
          <svg className="about-page__rainbow" viewBox="0 0 200 150" aria-hidden="true">
            <path d="M20 130 C24 -10 176 -10 180 130" fill="none" stroke="white" strokeWidth="36" strokeLinecap="round" />
            <path d="M20 130 C24 -10 176 -10 180 130" fill="none" stroke="#8ba0e8" strokeWidth="12" strokeLinecap="round" />
            <path d="M40 130 C43 17 157 17 160 130" fill="none" stroke="white" strokeWidth="23" strokeLinecap="round" />
            <path d="M40 130 C43 17 157 17 160 130" fill="none" stroke="#ffb251" strokeWidth="13" strokeLinecap="round" />
            <path d="M40 130 C43 17 157 17 160 130" fill="none" stroke="white" strokeWidth="5" strokeDasharray="0 17" strokeLinecap="round" />
            <path d="M60 130 C63 47 137 47 140 130" fill="none" stroke="white" strokeWidth="24" strokeLinecap="round" />
            <path d="M60 130 C63 47 137 47 140 130" fill="none" stroke="#ff5da7" strokeWidth="14" strokeLinecap="round" />
          </svg>
        </section>
        <section className="about-page__panel about-page__how" aria-labelledby="about-how">
          <h2 id="about-how">How It Works</h2>
          <div><h3>오늘의 작은 행복을 발견해요</h3><p>일상 속 반짝이는 순간들을 기록해요.</p></div>
          <div><h3>나만의 방식으로 담아봐요.</h3><p>글, 사진, 이모티콘 등 자유롭게 표현할 수 있어요.</p></div>
          <div><h3>언제든 다시 꺼내보며 미소지어요.</h3><p>모아둔 순간들이 지금도, 앞으로도 힘이 되어줄 거예요.</p></div>
          <svg className="about-page__cloud" viewBox="0 0 220 145" aria-hidden="true">
            <path d="M52 119 C-8 129 -6 42 50 39 C55 0 108 -3 124 29 C146 4 183 19 183 48 C238 58 219 131 170 124 C149 146 123 133 111 124 C89 147 61 139 52 119Z" fill="#b2dce0" stroke="white" strokeWidth="9" />
            <g fill="none" stroke="#29233e" strokeWidth="1.5" strokeLinecap="round">
              <path d="M64 66 Q80 82 96 66 M69 71 l-6 7 M77 75 l-2 8 M85 75 l3 8 M93 70 l5 6 M132 66 Q148 82 164 66 M137 71 l-6 7 M145 75 l-2 8 M153 75 l3 8 M161 70 l5 6 M104 98 Q113 108 123 98" />
            </g>
            <g fill="#ff5da7"><ellipse cx="55" cy="91" rx="11" ry="7" /><ellipse cx="174" cy="91" rx="11" ry="7" /></g>
          </svg>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
