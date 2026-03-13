import { useApp } from '../context/appContextInstance'

const navItems = [
  {
    id: 'home', label: 'Accueil',
    icon: (on) => (
      <svg viewBox="0 0 24 24" fill={on ? '#3d8ef8' : 'none'} stroke={on ? '#3d8ef8' : '#4b5a72'} strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'card', label: 'Ma Carte',
    icon: (on) => (
      <svg viewBox="0 0 24 24" fill={on ? '#3d8ef8' : 'none'} stroke={on ? '#3d8ef8' : '#4b5a72'} strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    id: 'dashboard', label: 'Stats',
    icon: (on) => (
      <svg viewBox="0 0 24 24" fill={on ? '#3d8ef8' : 'none'} stroke={on ? '#3d8ef8' : '#4b5a72'} strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    id: 'notif', label: 'Notifs', badge: true,
    icon: (on) => (
      <svg viewBox="0 0 24 24" fill={on ? '#3d8ef8' : 'none'} stroke={on ? '#3d8ef8' : '#4b5a72'} strokeWidth="2">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    id: 'profile', label: 'Profil',
    icon: (on) => (
      <svg viewBox="0 0 24 24" fill={on ? '#3d8ef8' : 'none'} stroke={on ? '#3d8ef8' : '#4b5a72'} strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
]

export default function BottomNav() {
  const { screen, navigate, notifRead } = useApp()

  return (
    <nav className="bnav">
      {navItems.map(item => {
        const on = screen === item.id
        return (
          <div key={item.id} className={`ni${on ? ' on' : ''}`} onClick={() => navigate(item.id)}>
            {item.icon(on)}
            <span>{item.label}</span>
            {item.badge && !notifRead && <div className="nbadge"/>}
          </div>
        )
      })}
    </nav>
  )
}
