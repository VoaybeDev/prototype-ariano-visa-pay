import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const TEST_USER = {
  email: 'rakoto.jean@gmail.com',
  password: 'Password1234',
  name: 'Rakoto Jean',
  initials: 'RJ',
}

const PROTECTED_SCREENS = [
  'home',
  'card',
  'depot',
  'retrait',
  'notif',
  'dashboard',
  'profile',
  'infoperso',
  'notif-settings',
  'securite',
  'legal',
  'logout',
  'apropos',
  'contact',
]

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

export const useApp = () => useContext(AppContext)