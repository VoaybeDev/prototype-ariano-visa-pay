import { useEffect, useState } from 'react'
import { AppContext } from './appContextInstance'
import { PROTECTED_SCREENS } from './appConstants'

const THEME_KEY = 'app-theme'
const ONBOARDING_KEY = 'ariano-onboarding-seen'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  return localStorage.getItem(THEME_KEY) || 'dark'
}

const getInitialOnboardingState = () => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(ONBOARDING_KEY) === 'true'
}

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('splash')
  const [prevScreen, setPrevScreen] = useState(null)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [notifRead, setNotifRead] = useState(false)
  const [hasCard, setHasCard] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(getInitialOnboardingState)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setScreen(hasSeenOnboarding ? 'login' : 'onboarding')
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  const normalizeScreen = (id) => {
    let key = id

    if (key === 'v-recharge') key = 'v-depot'
    if (key.startsWith('v-')) key = key.slice(2)

    return key
  }

  const guardScreen = (key) => {
    if (!hasCard && PROTECTED_SCREENS.includes(key)) {
      return 'offre'
    }
    return key
  }

  const navigate = (id) => {
    const key = normalizeScreen(id)
    const next = guardScreen(key)

    setPrevScreen(screen)
    setScreen(next)
  }

  const goBack = () => {
    if (!prevScreen) {
      setScreen(hasCard ? 'home' : 'offre')
      return
    }

    const next = guardScreen(prevScreen)
    setScreen(next)
  }

  const markNotifsRead = () => setNotifRead(true)

  const buyCard = () => {
    setHasCard(true)
    setPrevScreen('offre')
    setScreen('home')
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const finishOnboarding = (destination = 'login') => {
    setHasSeenOnboarding(true)
    localStorage.setItem(ONBOARDING_KEY, 'true')
    setPrevScreen('onboarding')
    setScreen(destination)
  }

  return (
    <AppContext.Provider
      value={{
        screen,
        navigate,
        goBack,
        profilePhoto,
        setProfilePhoto,
        notifRead,
        markNotifsRead,
        hasCard,
        setHasCard,
        buyCard,
        theme,
        setTheme,
        toggleTheme,
        hasSeenOnboarding,
        finishOnboarding,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}