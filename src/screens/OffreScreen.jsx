import StatusBar from '../components/StatusBar'
import { useApp } from '../context/appContextInstance'

export default function OffreScreen() {
  const { buyCard } = useApp()

  return (
    <div className="view active">
      <StatusBar />

      <div className="scrl">
        <div style={{ padding: '18px 22px 110px' }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            Activez votre carte
          </div>

          <div
            style={{
              fontSize: 13,
              color: 'var(--text2)',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Pour utiliser Ariano VISA Pay, vous devez d'abord acheter votre carte
            virtuelle. Cette étape est obligatoire avant d'accéder au tableau de
            bord, aux recharges et aux retraits.
          </div>

          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r3)',
              padding: '24px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.28)',
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 22,
                background: 'rgba(61,142,248,.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                margin: '0 auto 18px',
              }}
            >
              💳
            </div>

            <div
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: 6,
              }}
            >
              Ariano VISA
            </div>

            <div
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 800,
                color: 'var(--gold)',
                marginBottom: 18,
              }}
            >
              30 000 Ar
            </div>

            <div
              style={{
                fontSize: 13,
                color: 'var(--text2)',
                lineHeight: 1.8,
                marginBottom: 22,
              }}
            >
              • Sans frais mensuels
              <br />
              • Activation instantanée
              <br />
              • Historique des paiements
              <br />
              • Carte virtuelle prête à l’usage
              <br />
              • Renouvellement annuel : 30 000 Ariary
            </div>

            <button className="btn btn-blue" onClick={buyCard}>
              🛒 Acheter la carte
            </button>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 6,
                marginTop: 16,
                fontSize: 22,
                color: 'var(--gold)',
                letterSpacing: 1,
              }}
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-ind" />
    </div>
  )
}