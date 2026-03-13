import { useState } from 'react'
import { useApp, TEST_USER } from '../context/AppContext'
import StatusBar from '../components/StatusBar'

export default function LoginScreen() {
  const { navigate } = useApp()
  const [email, setEmail]       = useState(TEST_USER.email)
  const [password, setPassword] = useState(TEST_USER.password)
  const [alert, setAlert]       = useState(null)

  const doLogin = () => {
    if (!email || !password) {
      setAlert({ type: 'ko', msg: 'Veuillez remplir tous les champs.' })
      return
    }
    if (email === TEST_USER.email && password === TEST_USER.password) {
      setAlert({ type: 'ok', msg: '✅ Connexion réussie !' })
      setTimeout(() => navigate('home'), 800)
    } else {
      setAlert({ type: 'ko', msg: '❌ Email ou mot de passe incorrect.' })
    }
  }

  return (
    <div className="view active" style={{flexDirection:'column'}}>
      <StatusBar/>
      <div className="auth-wrap">
        <div className="auth-logo">
          <div style={{width:64,height:64,background:'linear-gradient(135deg,#3d8ef8,#0a4ab5)',borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px',boxShadow:'0 12px 32px rgba(61,142,248,.35)'}}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          </div>
          <h1>Ariano VISA Pay</h1>
          <p>Votre carte VISA virtuelle à Madagascar</p>
        </div>

        <div className="auth-title">Connexion</div>
        <div className="auth-sub">Entrez vos identifiants pour accéder à votre compte.</div>

        {alert && <div className={`auth-alert ${alert.type}`}>{alert.msg}</div>}

        <div className="inp-wrap">
          <div className="inp-label">Email</div>
          <input className="inp" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.com"/>
        </div>
        <div className="inp-wrap">
          <div className="inp-label">Mot de passe</div>
          <input className="inp" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"/>
        </div>

        <div style={{textAlign:'right',marginBottom:24}}>
          <span style={{fontSize:13,color:'var(--blue)',fontWeight:600,cursor:'pointer'}}>Mot de passe oublié ?</span>
        </div>

        <button className="btn btn-blue" onClick={doLogin}>Se connecter</button>

        <div className="auth-footer" style={{marginTop:20}}>
          Pas de compte ?{' '}
          <span onClick={() => navigate('register')}>Créer un compte</span>
        </div>

        <div style={{textAlign:'center',marginTop:30,padding:'16px',background:'rgba(61,142,248,.06)',borderRadius:14,border:'1px solid rgba(61,142,248,.12)'}}>
          <div style={{fontSize:11,color:'var(--text2)',marginBottom:6,fontWeight:600,textTransform:'uppercase',letterSpacing:'1px'}}>Compte démo</div>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:12,color:'var(--text)',marginBottom:2}}>{TEST_USER.email}</div>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:12,color:'var(--text)'}}>{TEST_USER.password}</div>
        </div>
      </div>
    </div>
  )
}
