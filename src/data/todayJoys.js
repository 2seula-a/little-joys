export const todayJoys = [
  { id: 'today-cake', title: '좋아하는 디저트와 함께 달콤한 시간 보내기', image: '/images/today/results/joy-cake.jpg' },
  { id: 'today-coffee', title: '따뜻한 커피 한 잔으로 여유 즐기기', image: '/images/today/results/joy-coffee.jpg.jpg' },
  { id: 'today-sky', title: '예쁜 하늘을 바라보며 잠깐 쉬어가기', image: '/images/today/results/joy-sky.jpg.jpeg' },
  { id: 'today-music', title: '좋아하는 음악을 들으며 산책하기', image: '/images/today/results/joy-music.jpg' },
  { id: 'today-book', title: '마음에 드는 책 한 페이지 읽기', image: '/images/today/results/joy-book.jpeg' },
  { id: 'today-gift', title: '나를 위한 작은 선물 준비하기', image: '/images/today/results/joy-gift.jpg' },
  { id: 'today-photo', title: '오늘의 기분을 사진으로 남기기', image: '/images/today/results/joy-photo.jpg' },
  { id: 'today-rest', title: '포근한 이불 속에서 충분히 쉬기', image: '/images/today/results/joy-rest.jpg' },
]

export function drawTodayJoy(previousId) {
  const candidates = todayJoys.filter((joy) => joy.id !== previousId)
  return candidates[Math.floor(Math.random() * candidates.length)]
}
