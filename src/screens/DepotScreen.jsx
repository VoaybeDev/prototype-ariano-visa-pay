import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

const AMOUNTS = [5000, 10000, 20000, 50000, 100000]

const mmInfo = {
  mvola: { num: '038 73 930 01', nom: 'MVola - Anicet Raymond', ph: 'Ex: MVOLA-20260313-XXXX' },
  airtel: { num: '033 41 664 36', nom: 'Airtel Money - Anicet Raymond', ph: 'Ex: AIRTEL-20260313-XXXX' },
}

export default function DepotScreen() {
  const [tab, setTab] = useState('mm')
  const [amount, setAmount] = useState(0)
  const [customAmount, setCustomAmount] = useState('')
  const [selected, setSelected] = useState(null)
  const [operateur, setOp] = useState('mvola')
  const [ref, setRef] = useState('')
  const [proofFile, setProofFile] = useState(null)
  const [success, setSuccess] = useState(false)

  const info = mmInfo[operateur]

  const handleCustomAmount = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    setSelected(null)

    if (value === '') {
      setAmount(0)
      return
    }

    const parsed = Number(value)
    setAmount(Number.isNaN(parsed) ? 0 : parsed)
  }

  const handlePresetAmount = (a) => {
    setSelected(a)
    setAmount(a)
    setCustomAmount(String(a))
  }

  const handleProofChange = (e) => {
    const file = e.target.files?.[0] || null
    setProofFile(file)
  }

  const doDepot = () => {
    if (!amount || amount <= 0) return
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3500)
  }

  return (
    <div className="view active">
      <StatusBar />
      <div className="scrl">
        <SubHeader title="Recharger la carte" />

        <div
          style={{
            textAlign: 'center',
            padding: '10px 20px 16px',
            fontSize: 50,
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: -2,
          }}
        >
          <em
            style={{
              fontSize: 20,
              color: 'var(--text2)',
              fontStyle: 'normal',
              fontWeight: 400,
              marginRight: 8,
            }}
          >
            Ar
          </em>
          {amount ? amount.toLocaleString('fr-FR') : '0'}
        </div>

        <div style={{ display: 'flex', gap: 9, padding: '0 22px 14px', flexWrap: 'wrap' }}>
          {AMOUNTS.map((a) => (
            <button
              key={a}
              className={`chip ${selected === a ? 'on' : ''}`}
              onClick={() => handlePresetAmount(a)}
              style={{
                flex: 1,
                minWidth: 75,
                padding: '11px',
                textAlign: 'center',
                background: selected === a ? 'rgba(61,142,248,.12)' : 'var(--card)',
                border: selected === a ? '1px solid var(--blue)' : '1px solid var(--border)',
                borderRadius: 'var(--r2)',
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--text)',
                cursor: 'pointer',
                transition: 'all .15s',
                fontFamily: "'Sora',sans-serif",
              }}
            >
              {(a / 1000).toFixed(0)}k
            </button>
          ))}
        </div>

        <div style={{ padding: '0 22px 22px' }}>
          <div className="inp-wrap" style={{ marginBottom: 0 }}>
            <div className="inp-label">Montant à deposer</div>
            <input
              className="inp"
              type="number"
              min="0"
              step="1000"
              value={customAmount}
              onChange={handleCustomAmount}
              placeholder="Ex: 15000"
            />
          </div>
        </div>

        <div className="tab-bar">
          <button className={`tab-item ${tab === 'mm' ? 'on' : ''}`} onClick={() => setTab('mm')}>
            📱 Mobile Money
          </button>
          <button className={`tab-item ${tab === 'cb' ? 'on' : ''}`} onClick={() => setTab('cb')}>
            💳 Carte bancaire
          </button>
        </div>

        {tab === 'mm' && (
          <div style={{ padding: '0 22px 20px' }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--text3)',
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 10,
              }}
            >
              Opérateur
            </div>

            <select
              className="inp"
              style={{ marginBottom: 16 }}
              value={operateur}
              onChange={(e) => setOp(e.target.value)}
            >
              <option value="mvola">📱 MVola</option>
              <option value="airtel">📲 Airtel Money</option>
            </select>

            <div
              style={{
                background: 'rgba(61,142,248,.06)',
                border: '1px solid rgba(61,142,248,.15)',
                borderRadius: 14,
                padding: '16px',
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 4 }}>
                Envoyez à ce numéro :
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: 'var(--blue)',
                  fontFamily: "'Space Mono',monospace",
                  letterSpacing: 2,
                }}
              >
                {info.num}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 4 }}>{info.nom}</div>
            </div>

            <div className="inp-wrap">
              <div className="inp-label">Référence de transaction</div>
              <input
                className="inp"
                placeholder={info.ph}
                value={ref}
                onChange={(e) => setRef(e.target.value)}
              />
            </div>

            <div className="inp-wrap">
              <div className="inp-label">Photo de preuve de transaction</div>
              <input
                className="inp"
                type="file"
                accept="image/*"
                onChange={handleProofChange}
                style={{ padding: '12px' }}
              />
              {proofFile && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: 'var(--text2)',
                  }}
                >
                  Fichier sélectionné : {proofFile.name}
                </div>
              )}
            </div>

            {success && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(34,197,94,.1)',
                  border: '1px solid rgba(34,197,94,.2)',
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--green)',
                  marginBottom: 16,
                }}
              >
                ✅ Demande de recharge envoyée ! Validation sous 5 min.
              </div>
            )}

            <button className="btn btn-blue" onClick={doDepot}>
              📥 Confirmer la recharge
            </button>
          </div>
        )}

        {tab === 'cb' && (
          <div style={{ padding: '0 22px 110px' }}>
            <div className="inp-wrap">
              <div className="inp-label">Numéro de carte</div>
              <input className="inp" placeholder="1234 5678 9012 3456" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="inp-wrap">
                <div className="inp-label">Expiration</div>
                <input className="inp" placeholder="MM/AA" />
              </div>
              <div className="inp-wrap">
                <div className="inp-label">CVV</div>
                <input className="inp" placeholder="•••" />
              </div>
            </div>

            <button className="btn btn-blue" style={{ marginTop: 8 }} onClick={doDepot}>
              💳 Payer maintenant
            </button>
          </div>
        )}
      </div>
      <div className="home-ind" />
    </div>
  )
}