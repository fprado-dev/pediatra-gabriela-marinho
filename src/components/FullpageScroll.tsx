'use client'

import { useEffect, useRef } from 'react'

export default function FullpageScroll() {
  const animatingRef = useRef(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    let sections: HTMLElement[] = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[]

    const refreshSections = () => {
      sections = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[]
    }

    const getCurrentIndex = () => {
      const viewportHeight = window.innerHeight
      let bestIndex = 0
      let bestScore = Number.POSITIVE_INFINITY
      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        const score = Math.abs(rect.top)
        if (score < bestScore && rect.top < viewportHeight) {
          bestScore = score
          bestIndex = i
        }
      })
      return bestIndex
    }

    const wheelHandler = (e: WheelEvent) => {
      if (animatingRef.current) {
        e.preventDefault()
        return
      }
      const delta = e.deltaY
      if (delta === 0) return

      const target = (() => {
        const current = getCurrentIndex()
        if (delta > 0) return Math.min(current + 1, sections.length - 1)
        return Math.max(current - 1, 0)
      })()

      const current = getCurrentIndex()
      if (target === current) return

      e.preventDefault()
      animatingRef.current = true
      sections[target].scrollIntoView({ behavior: 'smooth' })

      window.setTimeout(() => {
        animatingRef.current = false
      }, 900)
    }

    const resizeHandler = () => refreshSections()

    window.addEventListener('wheel', wheelHandler, { passive: false })
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('wheel', wheelHandler as EventListener)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return null
}

