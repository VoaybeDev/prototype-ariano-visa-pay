import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

const AMOUNTS = [5000, 10000, 20000, 50000]

export default function RetraitScreen() {
  const [tab, setTab]       = useState('mm')
  const [amount, setAmount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [tel, setTel]       = useState('')
  const [success, setSuccess] = useState(false)

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="Retrait"/>

        <div style={{textAlign:'center',padding:'10px 20px 16px',fontSize:50,fontWeight:800,color:'var(--text)',letterSpacing:-2}}>
          <em style={{fontSize:20,color:'var(--text2)',fontStyle:'normal',fontWeight:400,marginRight:8}}>Ar</em>
          {amount ? amount.toLocaleString('fr-FR') : '0'}
        </div>

        <div style={{display:'flex',gap:9,padding:'0 22px 22px',flexWrap:'wrap'}}>
          {AMOUNTS.map(a => (
            <button key={a} className={`chip ${selected===a?'on':''}`}
              onClick={() => { setSelected(a); setAmount(a) }}
              style={{flex:1,minWidth:75,padding:'11px',textAlign:'center',background:'var(--card)',border:'1px solid var(--border)',borderRadius:'var(--r2)',fontSize:13,fontWeight:700,color:'var(--text)',cursor:'pointer',transition:'all .15s',fontFamily:"'Sora',sans-serif"}}>
              {(a/1000).toFixed(0)}k
            </button>
          ))}
        </div>

        <div className="tab-bar">
          <button className={`tab-item ${tab==='mm'?'on':''}`} onClick={() => setTab('mm')}>📱 Mobile Money</button>
          <button className={`tab-item ${tab==='cb'?'on':''}`} onClick={() => setTab('cb')}>💳 Carte bancaire</button>
        </div>

        {tab === 'mm' && (
          <div style={{padding:'0 22px 20px'}}>
            <div style={{fontSize:11,fontWeight:700,color:'var(--text3)',textTransform:'uppercase',letterSpacing:1,marginBottom:10}}>Méthode</div>
            {[
              {id:'mvola', emoji:'📱', name:'MVola',       desc:'Retrait vers MVola'},
              {id:'airtel',emoji:'📲', name:'Airtel Money',desc:'Retrait vers Airtel Money'},
            ].map(pm => (
              <div key={pm.id} className="pm-item">
                <div className="pm-ico">{pm.emoji}</div>
                <div className="pm-name">{pm.name}<br/><span style={{fontSize:11,color:'var(--text2)'}}>{pm.desc}</span></div>
                <div style={{fontSize:12,color:'var(--text3)'}}>›</div>
              </div>
            ))}
            <div className="inp-wrap" style={{marginTop:16}}>
              <div className="inp-label">Numéro Mobile Money</div>
              <input className="inp" placeholder="03X XX XXX XX" value={tel} onChange={e => setTel(e.target.value)}/>
            </div>
            {success && (
              <div style={{padding:'12px 16px',background:'rgba(34,197,94,.1)',border:'1px solid rgba(34,197,94,.2)',borderRadius:12,fontSize:13,fontWeight:600,color:'var(--green)',marginBottom:16}}>
                ✅ Demande de retrait envoyée ! Traitement en cours.
              </div>
            )}
            <button className="btn btn-red-solid" style={{marginTop:8}} onClick={() => { setSuccess(true); setTimeout(() => setSuccess(false), 3500) }}>
              📤 Envoyer la demande
            </button>
          </div>
        )}

        {tab === 'cb' && (
          <div style={{padding:'0 22px 110px'}}>
            <div className="inp-wrap">
              <div className="inp-label">IBAN / Numéro de compte</div>
              <input className="inp" placeholder="MG XX XXXX XXXX XXXX XXXX"/>
            </div>
            <div className="inp-wrap">
              <div className="inp-label">Nom du bénéficiaire</div>
              <input className="inp" placeholder="Rakoto Jean"/>
            </div>
            <button className="btn btn-red-solid" style={{marginTop:8}}>📤 Envoyer la demande</button>
          </div>
        )}
      </div>
      <div className="home-ind"/>
    </div>
  )
}
