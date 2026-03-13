import { useApp } from '../context/AppContext'

const tabs = [
  { id:'home',      label:'🏠 Accueil' },
  { id:'card',      label:'💳 Ma Carte' },
  { id:'depot',     label:'📥 Recharger' },
  { id:'retrait',   label:'📤 Retrait' },
  { id:'dashboard', label:'📊 Dashboard' },
  { id:'notif',     label:'🔔 Notifications' },
  { id:'profile',   label:'👤 Profil' },
  { id:'apropos',   label:'🏢 À propos' },
  { id:'contact',   label:'✉️ Contact' },
]

const features = [
  { emoji:'🔒', title:'Sécurité maximale',       desc:'Chiffrement AES-256 & tokenisation VISA' },
  { emoji:'⚡', title:'Activation instantanée',   desc:'Carte prête en quelques minutes' },
  { emoji:'🌍', title:'Acceptée mondialement',    desc:'Partout où VISA est accepté' },
  { emoji:'📱', title:'Mobile Money intégré',     desc:'MVola, Airtel Money & Orange Money' },
]

export default function SidePanel() {
  const { screen, navigate } = useApp()

  return (
    <div className="desc">
      <h2>Ariano VISA Pay — Prototype</h2>
      <p>
        Carte VISA virtuelle 100% malgache. Rechargez via Mobile Money, payez partout dans le monde.
      </p>

      <div style={{fontSize:11,fontWeight:700,color:'rgba(255,255,255,.3)',textTransform:'uppercase',letterSpacing:'1.2px',marginBottom:10}}>
        Navigation
      </div>
      <div className="stabs">
        {tabs.map(t => (
          <div
            key={t.id}
            className={`stab ${screen === t.id ? 'on' : ''}`}
            onClick={() => navigate(t.id)}
          >
            <div className="stab-dot"/>
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      <div className="feat-list" style={{marginTop:28}}>
        {features.map(f => (
          <div key={f.title} className="feat">
            <div className="feat-ico">{f.emoji}</div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:28,padding:'14px 16px',background:'rgba(61,142,248,.06)',borderRadius:13,border:'1px solid rgba(61,142,248,.12)'}}>
        <div style={{fontSize:11,color:'rgba(255,255,255,.35)',marginBottom:4,fontWeight:600,textTransform:'uppercase',letterSpacing:'1px'}}>Contact</div>
        <div style={{fontSize:12,color:'rgba(255,255,255,.5)'}}>ariane@cartevisaforall.com</div>
        <div style={{fontSize:12,color:'rgba(255,255,255,.5)',marginTop:2}}>+261 38 84 867 52</div>
      </div>

      <div style={{marginTop:16,fontSize:11,color:'rgba(255,255,255,.2)',textAlign:'center'}}>
        © 2026 Ariano VISA Pay · v1.0.0
      </div>
    </div>
  )
}
