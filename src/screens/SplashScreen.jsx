import visaLogo from '../assets/visa-logo.svg'

export default function SplashScreen() {
  return (
    <div
      className="view active"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 28px',
        background:
          'radial-gradient(circle at top, rgba(61,142,248,.16), transparent 35%), var(--bg)',
      }}
    >
      <div
        style={{
          width: 104,
          height: 104,
          borderRadius: 30,
          background: 'linear-gradient(135deg, rgba(61,142,248,.18), rgba(168,85,247,.12))',
          border: '1px solid rgba(61,142,248,.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 22,
          boxShadow: '0 20px 50px rgba(0,0,0,.28)',
        }}
      >
        <img
          src={visaLogo}
          alt="Ariano VISA Pay"
          style={{
            width: 72,
            height: 46,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      <div
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: 'var(--text)',
          textAlign: 'center',
          lineHeight: 1.15,
          marginBottom: 10,
        }}
      >
        Ariano VISA Pay
      </div>

      <div
        style={{
          fontSize: 14,
          color: 'var(--text2)',
          textAlign: 'center',
          lineHeight: 1.7,
          maxWidth: 260,
          marginBottom: 22,
        }}
      >
        Votre carte VISA virtuelle à Madagascar
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div className="dot dot-green" />
        <div className="dot dot-green" />
        <div className="dot dot-green" />
      </div>
    </div>
  )
}