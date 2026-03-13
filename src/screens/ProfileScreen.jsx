import { useRef } from 'react'
import { useApp } from '../context/appContextInstance'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

const menuItems = [
  { emoji:'👤', bg:'rgba(61,142,248,.12)',  nm:'Informations personnelles', ds:'Nom, email, téléphone',   id:'infoperso' },
  { emoji:'🔔', bg:'rgba(245,200,66,.12)',  nm:'Notifications',             ds:'Gérer mes alertes',        id:'notif-settings' },
  { emoji:'🔒', bg:'rgba(168,85,247,.12)', nm:'Sécurité',                  ds:'2FA, mots de passe',       id:'securite' },
  { emoji:'📄', bg:'rgba(34,197,94,.12)',  nm:'CGU & Conditions',          ds:'Termes et conditions',     id:'legal' },
  { emoji:'🏢', bg:'rgba(61,142,248,.12)', nm:'À propos',                  ds:'Qui sommes-nous',          id:'apropos' },
  { emoji:'✉️', bg:'rgba(249,115,22,.12)', nm:'Nous contacter',            ds:'Support & assistance',     id:'contact' },
  { emoji:'🚪', bg:'rgba(248,113,113,.12)',nm:'Se déconnecter',            ds:'Quitter la session',        id:'logout', red:true },
]

export default function ProfileScreen() {
  const { navigate, profilePhoto, setProfilePhoto } = useApp()
  const fileRef = useRef(null)

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => setProfilePhoto(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        {/* Profile top */}
        <div className="prof-top">
          <div style={{position:'relative',display:'inline-block'}} onClick={() => fileRef.current?.click()}>
            <div className="prof-av">
              {profilePhoto
                ? <img src={profilePhoto} alt="avatar" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%'}}/>
                : 'RJ'
              }
            </div>
            <div style={{position:'absolute',bottom:0,right:0,width:26,height:26,background:'var(--blue)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,boxShadow:'0 2px 8px rgba(0,0,0,.4)',cursor:'pointer'}}>📷</div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}} onChange={handlePhoto}/>
          <div className="prof-name">Rakoto Jean</div>
          <div className="prof-email">rakoto.jean@gmail.com</div>
          <div style={{marginTop:10}}>
            <div className="badge badge-green"><div className="dot dot-green"/>&nbsp;Compte vérifié</div>
          </div>
        </div>

        {/* Stats */}
        <div className="prof-stats">
          {[
            {val:'150k', lbl:'Solde Ar'},
            {val:'6',    lbl:'Transactions'},
            {val:'03/27',lbl:'Expiration'},
          ].map(s => (
            <div key={s.lbl} className="pstat">
              <div className="pstat-val">{s.val}</div>
              <div className="pstat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="menu-list">
          {menuItems.map(item => (
            <div key={item.id} className="menu-row" onClick={() => navigate(item.id)}>
              <div className="menu-ico" style={{background: item.bg}}>{item.emoji}</div>
              <div className="menu-txt">
                <div className="menu-nm" style={item.red ? {color:'var(--red)'} : {}}>{item.nm}</div>
                <div className="menu-ds">{item.ds}</div>
              </div>
              <div className="menu-arr">›</div>
            </div>
          ))}
        </div>

        <div style={{padding:'24px 22px 110px',textAlign:'center',fontSize:12,color:'var(--text3)'}}>
          Ariano VISA Pay v1.0.0 · © 2026
        </div>
      </div>
      <BottomNav/>
      <div className="home-ind"/>
    </div>
  )
}
