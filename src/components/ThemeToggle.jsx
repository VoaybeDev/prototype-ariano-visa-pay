import { useApp } from '../context/appContextInstance'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp()

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      <div className="theme-toggle-left">
        <span className="theme-toggle-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
        <div>
          <div className="theme-toggle-title">Apparence</div>
          <div className="theme-toggle-sub">
            {theme === 'dark' ? 'Mode sombre' : 'Mode clair'}
          </div>
        </div>
      </div>

      <div className={`theme-toggle-switch ${theme === 'light' ? 'light' : ''}`}>
        <div className="theme-toggle-knob" />
      </div>
    </button>
  )
}