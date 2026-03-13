import { createContext, useContext, useState, useRef } from 'react'

const AppContext = createContext(null)

export const TEST_USER = {
  email: 'rakoto.jean@gmail.com',
  password: 'Password1234',
  name: 'Rakoto Jean',
  initials: 'RJ',
}

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('login')
  const [prevScreen, setPrevScreen] = useState(null)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [notifRead, setNotifRead] = useState(false)

  const navigate = (id) => {
    if (id === 'v-recharge') id = 'v-depot'
    // strip "v-" prefix if needed, else use as-is
    const key = id.startsWith('v-') ? id.slice(2) : id
    setPrevScreen(screen)
    setScreen(key)
  }

  const goBack = () => {
    if (prevScreen) setScreen(prevScreen)
    else setScreen('home')
  }

  const markNotifsRead = () => setNotifRead(true)

  return (
    <AppContext.Provider value={{
      screen, navigate, goBack,
      profilePhoto, setProfilePhoto,
      notifRead, markNotifsRead,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
