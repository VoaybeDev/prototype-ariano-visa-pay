import { AppProvider, useApp } from './context/AppContext'
import SidePanel from './components/SidePanel'

// Screens
import LoginScreen        from './screens/LoginScreen'
import RegisterScreen     from './screens/RegisterScreen'
import HomeScreen         from './screens/HomeScreen'
import CardScreen         from './screens/CardScreen'
import DepotScreen        from './screens/DepotScreen'
import RetraitScreen      from './screens/RetraitScreen'
import NotifScreen        from './screens/NotifScreen'
import DashboardScreen    from './screens/DashboardScreen'
import ProfileScreen      from './screens/ProfileScreen'
import InfoPersoScreen    from './screens/InfoPersoScreen'
import NotifSettingsScreen from './screens/NotifSettingsScreen'
import SecuriteScreen     from './screens/SecuriteScreen'
import LegalScreen        from './screens/LegalScreen'
import LogoutScreen       from './screens/LogoutScreen'
import AproposScreen      from './screens/AproposScreen'
import ContactScreen      from './screens/ContactScreen'

const SCREENS = {
  login:           LoginScreen,
  register:        RegisterScreen,
  home:            HomeScreen,
  card:            CardScreen,
  depot:           DepotScreen,
  retrait:         RetraitScreen,
  notif:           NotifScreen,
  dashboard:       DashboardScreen,
  profile:         ProfileScreen,
  infoperso:       InfoPersoScreen,
  'notif-settings': NotifSettingsScreen,
  securite:        SecuriteScreen,
  legal:           LegalScreen,
  logout:          LogoutScreen,
  apropos:         AproposScreen,
  contact:         ContactScreen,
}

function PhoneApp() {
  const { screen } = useApp()
  const ActiveScreen = SCREENS[screen] || LoginScreen

  return (
    <div className="scene">
      {/* iPhone Shell */}
      <div className="phone">
        <div className="phone-vol"/>
        <div className="screen">
          <ActiveScreen/>
        </div>
      </div>

      {/* Side description panel (desktop only) */}
      <SidePanel/>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <PhoneApp/>
    </AppProvider>
  )
}
