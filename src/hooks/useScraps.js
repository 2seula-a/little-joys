import { useSyncExternalStore } from 'react'

export const SCRAPS_STORAGE_KEY = 'little-joys:scraps'
const changeEvent = 'little-joys:scraps-changed'

export function getScrapsSnapshot() {
  try {
    return window.localStorage.getItem(SCRAPS_STORAGE_KEY)
  } catch {
    return null
  }
}

export function parseScraps(snapshot) {
  try {
    const scraps = JSON.parse(snapshot)
    return Array.isArray(scraps)
      ? scraps.filter((scrap) => scrap && typeof scrap.id === 'string'
        && typeof scrap.image === 'string' && typeof scrap.title === 'string')
      : []
  } catch {
    return []
  }
}

export function subscribeToScraps(listener) {
  const onStorage = (event) => {
    if (event.key === SCRAPS_STORAGE_KEY || event.key === null) listener()
  }
  window.addEventListener('storage', onStorage)
  window.addEventListener(changeEvent, listener)
  return () => {
    window.removeEventListener('storage', onStorage)
    window.removeEventListener(changeEvent, listener)
  }
}

export function toggleScrap({ id, image, title }) {
  const scraps = parseScraps(getScrapsSnapshot())
  const nextScraps = scraps.some((scrap) => scrap.id === id)
    ? scraps.filter((scrap) => scrap.id !== id)
    : [...scraps, { id, image, title }]

  try {
    window.localStorage.setItem(SCRAPS_STORAGE_KEY, JSON.stringify(nextScraps))
  } catch {
    window.alert('스크랩을 저장하지 못했습니다. 브라우저 저장 공간 설정을 확인해 주세요.')
    return
  }
  window.dispatchEvent(new Event(changeEvent))
}

export default function useScraps() {
  const snapshot = useSyncExternalStore(subscribeToScraps, getScrapsSnapshot, () => null)
  return { scraps: parseScraps(snapshot), toggleScrap }
}
