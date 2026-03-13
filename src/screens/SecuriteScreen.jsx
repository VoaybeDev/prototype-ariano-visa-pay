import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

const items = [
  { emoji:'🔑', bg:'rgba(245,200,66,.12)',  nm:'Changer le mot de passe',      ds:'Dernière modif: 10 Mar 2026',  status:'', statusColor:'' },
  { emoji:'📱', bg:'rgba(34,197,94,.12)',   nm:'Authentification 2FA',          ds:'Activée via Google Authenticator', status:'Activée', statusColor:'var(--green)' },
  { emoji:'🤳', bg:'rgba(61,142,248,.12)', nm:'Empreinte / Face ID',           ds:'Connexion biométrique',       status:'Activé',  statusColor:'var(--green)' },
  { emoji:'📋', bg:'rgba(168,85,247,.12)', nm:'Sessions actives',              ds:'1 appareil connecté',         status:'1',       statusColor:'var(--blue)' },
  { emoji:'🚨', bg:'rgba(248,113,113,.12)',nm:'Alertes de connexion',          ds:'Notifier à chaque connexion', status:'',        statusColor:'' },
  { emoji:'🗑️', bg:'rgba(248,113,113,.12)',nm:'Supprimer le compte',          ds:'Action irréversible',          status:'',        statusColor:'var(--red)', danger:true },
]

export default function SecuriteScreen() {
  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="Sécurité"/>
        {items.map(item => (
          <div key={item.nm} className="sec-item">
            <div className="sec-ico" style={{background:item.bg}}>{item.emoji}</div>
            <div className="sec-txt">
              <div className="sec-nm" style={item.danger?{color:'var(--red)'}:{}}>{item.nm}</div>
              <div className="sec-ds">{item.ds}</div>
            </div>
            {item.status && <div style={{fontSize:12,fontWeight:700,color:item.statusColor}}>{item.status}</div>}
            <div style={{fontSize:18,color:'var(--text3)',marginLeft:6}}>›</div>
          </div>
        ))}
        <div style={{height:50}}/>
      </div>
      <div className="home-ind"/>
    </div>
  )
}
