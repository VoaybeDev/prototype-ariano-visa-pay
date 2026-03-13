import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

export default function ContactScreen() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', msg: '' })
  const [sent, setSent] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const send = () => {
    if (!form.nom || !form.email || !form.msg) return
    setSent(true)
    setForm({ nom: '', email: '', sujet: '', msg: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="Nous contacter"/>

        {/* Coordonnées */}
        <div style={{margin:'0 22px 22px',background:'var(--card)',borderRadius:'var(--r)',border:'1px solid var(--border)',overflow:'hidden'}}>
          {[
            { emoji:'📧', label:'Email',     val:'ariane@cartevisaforall.com' },
            { emoji:'📞', label:'Téléphone', val:'+261 38 84 867 52' },
            { emoji:'📱', label:'WhatsApp',  val:'+261 32 92 952 17' },
            { emoji:'🌐', label:'Site web',  val:'arianovisapay.cartevisaforall.com' },
          ].map(c => (
            <div key={c.label} style={{display:'flex',alignItems:'center',gap:13,padding:'14px 16px',borderBottom:'1px solid var(--border)'}}>
              <div style={{width:40,height:40,borderRadius:12,background:'rgba(61,142,248,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{c.emoji}</div>
              <div>
                <div style={{fontSize:11,color:'var(--text2)',marginBottom:2}}>{c.label}</div>
                <div style={{fontSize:13,fontWeight:600,color:'var(--text)'}}>{c.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div style={{padding:'0 22px 20px'}}>
          <div style={{fontSize:16,fontWeight:800,color:'var(--text)',marginBottom:16}}>✉️ Envoyer un message</div>

          {sent && (
            <div style={{padding:'12px 16px',background:'rgba(34,197,94,.1)',border:'1px solid rgba(34,197,94,.2)',borderRadius:12,fontSize:13,fontWeight:600,color:'var(--green)',marginBottom:16}}>
              ✅ Message envoyé ! Nous vous répondrons sous 24h.
            </div>
          )}

          <div className="inp-wrap">
            <div className="inp-label">Nom complet</div>
            <input className="inp" placeholder="Rakoto Jean" value={form.nom} onChange={e => set('nom', e.target.value)}/>
          </div>
          <div className="inp-wrap">
            <div className="inp-label">Email</div>
            <input className="inp" type="email" placeholder="votre@email.com" value={form.email} onChange={e => set('email', e.target.value)}/>
          </div>
          <div className="inp-wrap">
            <div className="inp-label">Sujet</div>
            <input className="inp" placeholder="Ex: Problème de recharge" value={form.sujet} onChange={e => set('sujet', e.target.value)}/>
          </div>
          <div className="inp-wrap">
            <div className="inp-label">Message</div>
            <textarea className="inp" rows={4} placeholder="Décrivez votre problème ou question..." value={form.msg} onChange={e => set('msg', e.target.value)}
              style={{resize:'none',height:110}}/>
          </div>
          <button className="btn btn-blue" onClick={send}>📨 Envoyer le message</button>
        </div>

        <div style={{height:50}}/>
      </div>
      <div className="home-ind"/>
    </div>
  )
}
