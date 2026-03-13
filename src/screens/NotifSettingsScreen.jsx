import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

const SETTINGS = [
  { id:'paiements',   nm:'Paiements',           ds:'Notifications à chaque transaction' },
  { id:'recharges',   nm:'Recharges',            ds:'Confirmation de crédit' },
  { id:'securite',    nm:'Alertes sécurité',     ds:'Connexion, tentatives suspectes' },
  { id:'promo',       nm:'Promotions',           ds:'Offres et nouveautés' },
  { id:'rappels',     nm:'Rappels',              ds:'Rappels de solde faible' },
  { id:'email',       nm:'Notifications email',  ds:'Résumé hebdomadaire par email' },
]

export default function NotifSettingsScreen() {
  const [states, setStates] = useState({
    paiements:true, recharges:true, securite:true,
    promo:false, rappels:true, email:false,
  })

  const toggle = (id) => setStates(s => ({...s, [id]: !s[id]}))

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="Notifications"/>
        <div style={{background:'var(--card)',borderRadius:'var(--r)',margin:'0 22px',border:'1px solid var(--border)',overflow:'hidden'}}>
          {SETTINGS.map(s => (
            <div key={s.id} className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-nm">{s.nm}</div>
                <div className="toggle-ds">{s.ds}</div>
              </div>
              <button className={`toggle-sw ${states[s.id] ? 'on' : ''}`} onClick={() => toggle(s.id)}/>
            </div>
          ))}
        </div>
        <div style={{height:50}}/>
      </div>
      <div className="home-ind"/>
    </div>
  )
}
