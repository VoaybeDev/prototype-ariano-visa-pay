import { useState } from 'react'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'

export default function RegisterScreen() {
  const { navigate } = useApp()
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', tel: '', password: '', confirm: '' })
  const [alert, setAlert] = useState(null)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const doRegister = () => {
    const { nom, prenom, email, tel, password, confirm } = form
    if (!nom || !prenom || !email || !tel || !password) {
      setAlert({ type: 'ko', msg: '❌ Veuillez remplir tous les champs.' }); return
    }
    if (password !== confirm) {
      setAlert({ type: 'ko', msg: '❌ Les mots de passe ne correspondent pas.' }); return
    }
    setAlert({ type: 'ok', msg: '✅ Compte créé ! Redirection...' })
    setTimeout(() => navigate('home'), 1000)
  }

  const fields = [
    { key: 'nom',      label: 'Nom',           type: 'text',     ph: 'Rakoto' },
    { key: 'prenom',   label: 'Prénom',         type: 'text',     ph: 'Jean' },
    { key: 'email',    label: 'Email',          type: 'email',    ph: 'rakoto@email.com' },
    { key: 'tel',      label: 'Téléphone',      type: 'tel',      ph: '+261 38 00 000 00' },
    { key: 'password', label: 'Mot de passe',   type: 'password', ph: '••••••••' },
    { key: 'confirm',  label: 'Confirmer MDP',  type: 'password', ph: '••••••••' },
  ]

  return (
    <div className="view active" style={{flexDirection:'column'}}>
      <StatusBar/>
      <div className="auth-wrap">
        <div className="auth-title">Créer un compte</div>
        <div className="auth-sub">Rejoignez Ariano VISA Pay et obtenez votre carte virtuelle.</div>

        {alert && <div className={`auth-alert ${alert.type}`}>{alert.msg}</div>}

        {fields.map(f => (
          <div key={f.key} className="inp-wrap">
            <div className="inp-label">{f.label}</div>
            <input className="inp" type={f.type} placeholder={f.ph}
              value={form[f.key]} onChange={e => set(f.key, e.target.value)}/>
          </div>
        ))}

        <button className="btn btn-blue" style={{marginTop:8}} onClick={doRegister}>Créer mon compte</button>

        <div className="auth-footer" style={{marginTop:20}}>
          Déjà un compte ?{' '}
          <span onClick={() => navigate('login')}>Se connecter</span>
        </div>
      </div>
    </div>
  )
}
