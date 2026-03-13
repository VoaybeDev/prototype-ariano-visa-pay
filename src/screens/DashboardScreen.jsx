import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import TransactionRow from '../components/TransactionRow'
import { transactions, categories, barData } from '../data/transactions'

export default function DashboardScreen() {
  const maxBar = Math.max(...barData)

  return (
    <div className="view active">
      <StatusBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 22px 14px',
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>
          Tableau de bord
        </div>
        <div className="badge badge-blue">Mars 2026</div>
      </div>

      <div className="scrl">
        {/* Balance card */}
        <div
          style={{
            margin: '0 22px 20px',
            padding: '22px',
            background: 'linear-gradient(135deg,#1b3a72,#0d1f46)',
            borderRadius: 'var(--r3)',
            boxShadow: '0 20px 54px rgba(20,60,160,.4)',
            border: '1px solid rgba(61,142,248,.15)',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,.55)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
              marginBottom: 8,
            }}
          >
            Solde actuel
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: -2,
              marginBottom: 4,
            }}
          >
            105 431 <span style={{ fontSize: 18, opacity: 0.6, fontWeight: 400 }}>Ar</span>
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,.5)',
              marginBottom: 18,
            }}
          >
            ≈ $22.48 USD · taux 4 691 Ar/$
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {[
              { label: 'Entrées', val: '+150 000', color: 'var(--green)' },
              { label: 'Dépenses', val: '-39 878', color: 'var(--red)' },
              { label: 'Opérations', val: '6', color: 'var(--blue)' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="stat-cards">
          {[
            { emoji: '💸', bg: 'rgba(239,68,68,.12)', val: '39 878', lbl: 'Dépenses (Ar)', change: '+8%', dir: 'dn' },
            { emoji: '💰', bg: 'rgba(34,197,94,.12)', val: '105 431', lbl: 'Solde (Ar)', change: 'Actuel', dir: 'up' },
            { emoji: '🔢', bg: 'rgba(61,142,248,.12)', val: '6', lbl: 'Transactions', change: 'Ce mois', dir: 'up' },
            { emoji: '🌍', bg: 'rgba(168,85,247,.12)', val: '3', lbl: 'Marchands', change: 'Actifs', dir: 'up' },
          ].map((s) => (
            <div key={s.lbl} className="stat-card">
              <div className="stat-icon" style={{ background: s.bg }}>
                {s.emoji}
              </div>
              <div className="stat-val">{s.val}</div>
              <div className="stat-lbl">{s.lbl}</div>
              <div className={`stat-change ${s.dir}`}>{s.dir === 'up' ? '↑' : '↓'} {s.change}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div
          style={{
            margin: '0 22px 20px',
            padding: '18px 16px',
            background: 'var(--card)',
            borderRadius: 'var(--r)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="section-hd" style={{ marginBottom: 16 }}>
            Activité (13 jours)
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 60 }}>
            {barData.map((v, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: '5px 5px 0 0',
                  background: i === barData.length - 1 ? 'var(--blue)' : 'var(--card2)',
                  border: i === barData.length - 1 ? 'none' : '1px solid var(--border)',
                  height: `${(v / maxBar) * 100}%`,
                  transition: 'height .3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div style={{ padding: '0 22px 20px' }}>
          <div className="section-hd">Catégories de dépenses</div>
          {categories.map((c) => (
            <div key={c.label} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{c.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
                  {c.amount.toLocaleString('fr-FR')} Ar
                </span>
              </div>
              <div style={{ height: 8, background: 'var(--card2)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: c.color, borderRadius: 4, width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* All transactions */}
        <div style={{ padding: '0 22px 14px' }}>
          <div className="section-hd">Toutes les transactions</div>
        </div>
        {transactions.map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))}
        <div style={{ height: 110 }} />
      </div>

      <BottomNav />
      <div className="home-ind" />
    </div>
  )
}