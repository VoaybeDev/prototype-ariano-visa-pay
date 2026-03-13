import { AppProvider } from './context/AppContext'
import { useApp } from './context/appContextInstance'
import SidePanel from './components/SidePanel'

// Screens
import SplashScreen from './screens/SplashScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import OffreScreen from './screens/OffreScreen'
import HomeScreen from './screens/HomeScreen'
import CardScreen from './screens/CardScreen'
import DepotScreen from './screens/DepotScreen'
import RetraitScreen from './screens/RetraitScreen'
import NotifScreen from './screens/NotifScreen'
import DashboardScreen from './screens/DashboardScreen'
import ProfileScreen from './screens/ProfileScreen'
import InfoPersoScreen from './screens/InfoPersoScreen'
import NotifSettingsScreen from './screens/NotifSettingsScreen'
import SecuriteScreen from './screens/SecuriteScreen'
import LegalScreen from './screens/LegalScreen'
import LogoutScreen from './screens/LogoutScreen'
import AproposScreen from './screens/AproposScreen'
import ContactScreen from './screens/ContactScreen'

const SCREENS = {
  splash: SplashScreen,
  onboarding: OnboardingScreen,
  login: LoginScreen,
  register: RegisterScreen,
  offre: OffreScreen,
  home: HomeScreen,
  card: CardScreen,
  depot: DepotScreen,
  retrait: RetraitScreen,
  notif: NotifScreen,
  dashboard: DashboardScreen,
  profile: ProfileScreen,
  infoperso: InfoPersoScreen,
  'notif-settings': NotifSettingsScreen,
  securite: SecuriteScreen,
  legal: LegalScreen,
  logout: LogoutScreen,
  apropos: AproposScreen,
  contact: ContactScreen,
}

function PhoneApp() {
  const { screen } = useApp()
  const ActiveScreen = SCREENS[screen] || SplashScreen

  return (
    <div className="scene">
      <div className="phone-stack">
        <div className="phone">
          <div className="phone-vol" />
          <div className="screen">
            <ActiveScreen />
          </div>
        </div>

        <a
          href="https://github.com/VoaybeDev"
          target="_blank"
          rel="noopener noreferrer"
          className="phone-signature"
        >
          <span className="phone-signature-dot" />
          <span className="phone-signature-label">Crafted by</span>
          <span className="phone-signature-name">VoaybeDev</span>
        </a>
      </div>

      <SidePanel />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <PhoneApp />
    </AppProvider>
  )
}