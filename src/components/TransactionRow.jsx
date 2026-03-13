import { formatAmount } from '../data/transactions'

export default function TransactionRow({ tx }) {
  const isCredit = tx.amount > 0
  return (
    <div className="tx-row">
      <div className="tx-ico" style={{background: tx.bg}}>{tx.emoji}</div>
      <div className="tx-info">
        <div className="tx-name">{tx.name}</div>
        <div className="tx-date">{tx.date}</div>
      </div>
      <div className={`tx-amt ${isCredit ? 'c' : 'd'}`}>{formatAmount(tx.amount)}</div>
    </div>
  )
}
