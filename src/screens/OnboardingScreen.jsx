import { useState } from 'react'
import { useApp } from '../context/appContextInstance'
import StatusBar from '../components/StatusBar'

const slides = [
  {
    emoji: '💳',
    title: 'Achetez votre carte',
    desc: "Commencez par activer votre carte VISA virtuelle Ariano avant d'accéder à toutes les fonctionnalités.",
    bg: 'rgba(61,142,248,.10)',
  },
  {
    emoji: '📥',
    title: 'Rechargez facilement',
    desc: 'Ajoutez de l’argent via Mobile Money ou carte bancaire avec un parcours simple et rapide.',
    bg: 'rgba(34,197,94,.10)',
  },
  {
    emoji: '🌍',
    title: 'Payez partout',
    desc: 'Utilisez votre carte virtuelle pour vos paiements internationaux avec une interface moderne et sécurisée.',
    bg: 'rgba(245,200,66,.12)',
  },
]

export default function OnboardingScreen() {
  const { finishOnboarding } = useApp()
  const [step, setStep] = useState(0)

  const isLast = step === slides.length - 1
  const current = slides[step]

  const next = () => {
    if (isLast) {
      finishOnboarding('register')
      return
    }
    setStep((prev) => prev + 1)
  }

  return (
    <div className="view active" style={{ flexDirection: 'column' }}>
      <StatusBar />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '18px 24px 100px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 22 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: 'var(--text2)',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Découverte
          </div>

          {!isLast && (
            <button
              type="button"
              onClick={() => finishOnboarding('login')}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--blue)',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              Passer
            </button>
          )}
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: current.bg,
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              marginBottom: 26,
            }}
          >
            {current.emoji}
          </div>

          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            {current.title}
          </div>

          <div
            style={{
              fontSize: 15,
              color: 'var(--text2)',
              lineHeight: 1.8,
              maxWidth: 300,
            }}
          >
            {current.desc}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 28 : 10,
                height: 10,
                borderRadius: 999,
                background: i === step ? 'var(--blue)' : 'var(--card2)',
                transition: 'all .2s ease',
              }}
            />
          ))}
        </div>

        {isLast ? (
          <div style={{ display: 'grid', gap: 10 }}>
            <button className="btn btn-blue" onClick={() => finishOnboarding('register')}>
              Créer un compte
            </button>
            <button className="btn btn-outline" onClick={() => finishOnboarding('login')}>
              J'ai déjà un compte
            </button>
          </div>
        ) : (
          <button className="btn btn-blue" onClick={next}>
            Suivant
          </button>
        )}
      </div>

      <div className="home-ind" />
    </div>
  )
}