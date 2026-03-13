import { useApp } from '../context/appContextInstance'

export default function SubHeader({ title, onBack }) {
  const { goBack } = useApp()
  return (
    <div className="sub-hd">
      <button className="back-btn" style={{background:'var(--card)',border:'1px solid var(--border)'}} onClick={onBack || goBack}>
        ←
      </button>
      <span className="sub-title">{title}</span>
    </div>
  )
}
