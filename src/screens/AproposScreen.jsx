import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'
import visaLogo from '../assets/visa-logo.png'

const engagements = [
  {
    emoji: '🔒',
    label: 'Sécurité',
    desc: 'Chiffrement AES-256 et tokenisation des données bancaires. Votre argent est protégé à chaque transaction.',
  },
  {
    emoji: '⚡',
    label: 'Rapidité',
    desc: 'Carte activée en quelques minutes. Transactions instantanées partout dans le monde, 24h/24.',
  },
  {
    emoji: '🎛️',
    label: 'Contrôle',
    desc: "Gérez votre carte en temps réel : bloquez, déverrouillez, fixez des limites depuis l'application.",
  },
]

const stats = [
  { val: '1 000+', lbl: 'Utilisateurs actifs' },
  { val: '50+', lbl: 'Pays acceptés' },
  { val: '99.9%', lbl: 'Disponibilité' },
  { val: '24/7', lbl: 'Support client' },
]

export default function AproposScreen() {
  return (
    <div className="view active">
      <StatusBar />
      <div className="scrl">
        <SubHeader title="À propos" />

        {/* Hero */}
        <div
          style={{
            margin: '0 22px 22px',
            padding: '24px',
            background:
              'linear-gradient(135deg,rgba(61,142,248,.12),rgba(61,142,248,.04))',
            borderRadius: 'var(--r3)',
            border: '1px solid rgba(61,142,248,.15)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 120,
              height: 72,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <img
              src={visaLogo}
              alt="Visa Pay Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 6,
            }}
          >
            Ariano VISA Pay
          </div>

          <div
            style={{
              fontSize: 13,
              color: 'var(--text2)',
              lineHeight: 1.6,
            }}
          >
            La première carte VISA virtuelle conçue pour les Malgaches. Simple,
            sécurisée et accessible à tous.
          </div>
        </div>

        {/* Qui sommes-nous */}
        <div style={{ padding: '0 22px 22px' }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 12,
            }}
          >
            Qui sommes-nous ?
          </div>

          <div
            style={{
              fontSize: 13,
              color: 'var(--text2)',
              lineHeight: 1.8,
            }}
          >
            Ariano VISA Pay est une solution fintech malgache permettant à toute
            personne résidant à Madagascar d'obtenir une carte VISA virtuelle
            prépayée, utilisable pour les achats en ligne internationaux.
          </div>

          <div
            style={{
              fontSize: 13,
              color: 'var(--text2)',
              lineHeight: 1.8,
              marginTop: 10,
            }}
          >
            Notre mission : démocratiser l'accès aux paiements numériques pour
            les Malgaches, sans compte bancaire traditionnel requis.
          </div>
        </div>

        {/* Engagements */}
        <div style={{ padding: '0 22px 22px' }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 14,
            }}
          >
            Nos engagements
          </div>

          {engagements.map((e) => (
            <div
              key={e.label}
              style={{
                display: 'flex',
                gap: 14,
                marginBottom: 16,
                padding: '16px',
                background: 'var(--card)',
                borderRadius: 'var(--r)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: 'rgba(61,142,248,.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {e.emoji}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 4,
                  }}
                >
                  {e.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--text2)',
                    lineHeight: 1.6,
                  }}
                >
                  {e.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            margin: '0 22px 28px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 11,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.lbl}
              style={{
                background: 'var(--card)',
                borderRadius: 'var(--r)',
                border: '1px solid var(--border)',
                padding: '18px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'var(--blue)',
                  marginBottom: 4,
                }}
              >
                {s.val}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Site */}
        <div
          style={{
            margin: '0 22px 30px',
            padding: '16px',
            background: 'rgba(61,142,248,.06)',
            borderRadius: 'var(--r)',
            border: '1px solid rgba(61,142,248,.15)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 4 }}>
            Notre site web
          </div>
          <a 
            href="https://arianovisapay.cartevisaforall.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 700, color: 'var(--blue)', textDecoration: 'none' }}
          >
            arianovisapay.cartevisaforall.com
          </a>
        </div>

        <div style={{ height: 50 }} />
      </div>
      <div className="home-ind" />
    </div>
  )
}