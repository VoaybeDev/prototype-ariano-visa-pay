import { useState } from 'react'
import { AppContext } from './appContextInstance'
import { PROTECTED_SCREENS } from './appConstants'

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('login')
  const [prevScreen, setPrevScreen] = useState(null)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [notifRead, setNotifRead] = useState(false)
  const [hasCard, setHasCard] = useState(false)

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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}