import { useState, useEffect } from 'react'

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.body != undefined ? document.body.scrollTop : 0

      // Call react hook isScrolled has a delta
      if (isScrolled !== (window.pageYOffset || scrollTop) > 0) {
        setIsScrolled(!isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  return isScrolled
}
