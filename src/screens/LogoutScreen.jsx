import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'

export default function LogoutScreen() {
  const { navigate } = useApp()

  return (
    <div className="view active">
      <StatusBar/>
      <div className="logout-confirm">
        <div className="logout-icon">👋</div>
        <div className="logout-title">Se déconnecter ?</div>
        <div className="logout-sub">
          Vous serez redirigé vers la page de connexion. Vos données restent sécurisées.
        </div>
        <button className="btn btn-red-solid" style={{marginBottom:12}} onClick={() => navigate('login')}>
          🚪 Oui, se déconnecter
        </button>
        <button className="btn btn-outline" onClick={() => navigate('profile')}>
          Annuler
        </button>
      </div>
      <div className="home-ind"/>
    </div>
  )
}
