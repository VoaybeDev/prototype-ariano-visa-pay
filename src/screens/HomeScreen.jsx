import { useRef } from 'react'
import { useApp } from '../context/appContextInstance'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import VisaCard from '../components/VisaCard'
import TransactionRow from '../components/TransactionRow'
import { transactions } from '../data/transactions'

const quickActions = [
  { emoji: '📥', label: 'Recharger', id: 'depot' },
  { emoji: '📤', label: 'Retirer', id: 'retrait' },
  { emoji: '📊', label: 'Stats', id: 'dashboard' },
  { emoji: '🔔', label: 'Notifs', id: 'notif' },
  { emoji: '⚙️', label: 'Profil', id: 'profile' },
]

const qaColors = [
  'rgba(34,197,94,.12)',
  'rgba(239,68,68,.12)',
  'rgba(61,142,248,.12)',
  'rgba(245,200,66,.12)',
  'rgba(168,85,247,.12)',
]

export default function HomeScreen() {
  const { navigate, profilePhoto } = useApp()
  const fileRef = useRef(null)

  return (
    <div className="view active">
      <StatusBar />
      <div className="scrl">
        {/* Header */}
        <div className="home-top">
          <div>
            <div className="home-greet">Bonjour 👋</div>
            <div className="home-name">Rakoto Jean</div>
          </div>

          <div className="avatar" onClick={() => fileRef.current?.click()} id="home-avatar">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            ) : (
              'RJ'
            )}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return

              const reader = new FileReader()
              reader.onload = () => {
                // future logic here
              }
              reader.readAsDataURL(file)
            }}
          />
        </div>

        {/* Balance */}
        <div
          style={{
            margin: '0 22px 18px',
            padding: '18px 20px',
            background: 'linear-gradient(135deg,rgba(61,142,248,.12),rgba(61,142,248,.04))',
            borderRadius: 'var(--r)',
            border: '1px solid rgba(61,142,248,.15)',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'var(--text2)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            Solde disponible
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--text)', letterSpacing: -1 }}>
            105 431 <span style={{ fontSize: 16, color: 'var(--text2)', fontWeight: 400 }}>Ar</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 4 }}>≈ $22.48 USD</div>
          <div className="badge badge-green" style={{ marginTop: 10 }}>
            <div className="dot dot-green" />
            &nbsp;Carte active
          </div>
        </div>

        {/* VISA Card */}
        <VisaCard onPress={() => navigate('card')} />

        {/* Quick Actions */}
        <div className="qactions">
          {quickActions.map((qa, i) => (
            <div key={qa.id} className="qa" onClick={() => navigate(qa.id)}>
              <div className="qa-ico" style={{ background: qaColors[i] }}>
                {qa.emoji}
              </div>
              <span>{qa.label}</span>
            </div>
          ))}
        </div>

        {/* Recent transactions */}
        <div style={{ padding: '0 22px 14px' }}>
          <div className="section-hd">
            <span>Transactions récentes</span>
            <a onClick={() => navigate('dashboard')}>Voir tout</a>
          </div>
        </div>
        {transactions.slice(0, 4).map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))}

        {/* À propos */}
        <div
          style={{
            margin: '28px 22px 0',
            padding: '22px',
            background: 'linear-gradient(135deg,rgba(61,142,248,.08),rgba(61,142,248,.02))',
            borderRadius: 'var(--r3)',
            border: '1px solid rgba(61,142,248,.12)',
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>
            🏦 Qui sommes-nous ?
          </div>
          <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 16 }}>
            Ariano VISA Pay vous offre une carte VISA virtuelle 100% malgache, sécurisée et
            instantanée, acceptée partout dans le monde.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 16 }}>
            {[
              { emoji: '🔒', label: 'Sécurité', desc: 'Chiffrement AES-256' },
              { emoji: '⚡', label: 'Rapidité', desc: 'Instantané' },
              { emoji: '🎛️', label: 'Contrôle', desc: '100% en ligne' },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: 'rgba(255,255,255,.04)',
                  borderRadius: 14,
                  padding: '12px 10px',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 6 }}>{c.emoji}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 10, color: 'var(--text2)' }}>{c.desc}</div>
              </div>
            ))}
          </div>

          <button className="btn btn-outline" style={{ fontSize: 13 }} onClick={() => navigate('apropos')}>
            En savoir plus →
          </button>
        </div>

        {/* Contact */}
        <div
          style={{
            margin: '18px 22px 0',
            padding: '20px',
            background: 'var(--card)',
            borderRadius: 'var(--r)',
            border: '1px solid var(--border)',
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 10 }}>
            ✉️ Contactez-nous
          </div>
          <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 4 }}>
            📧 ariane@cartevisaforall.com
          </div>
          <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 14 }}>
            📞 +261 38 84 867 52
          </div>
          <button className="btn btn-outline" style={{ fontSize: 13 }} onClick={() => navigate('contact')}>
            Formulaire de contact
          </button>
        </div>

        {/* Footer */}
        <div style={{ padding: '24px 22px 110px', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 8 }}>
            © 2026 Ariano VISA Pay · cartevisaforall.com
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
            <span
              style={{ fontSize: 11, color: 'var(--blue)', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => navigate('legal')}
            >
              CGU
            </span>
            <span
              style={{ fontSize: 11, color: 'var(--blue)', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => navigate('legal')}
            >
              CGV
            </span>
          </div>
        </div>
      </div>

      <BottomNav />
      <div className="home-ind" />
    </div>
  )
}