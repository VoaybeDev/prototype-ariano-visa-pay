import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
import { notifications } from '../data/notifications'
import { useState } from 'react'

export default function NotifScreen() {
  const { markNotifsRead } = useApp()
  const [read, setRead] = useState(false)

  const handleClear = () => {
    setRead(true)
    markNotifsRead()
  }

  return (
    <div className="view active">
      <StatusBar/>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 22px 14px'}}>
        <div style={{fontSize:22,fontWeight:800,color:'var(--text)'}}>Notifications</div>
        {!read && (
          <span style={{fontSize:12,color:'var(--blue)',fontWeight:600,cursor:'pointer'}} onClick={handleClear}>
            Tout marquer lu
          </span>
        )}
      </div>

      <div className="scrl">
        {notifications.map(n => (
          <div key={n.id}>
            {n.section && <div className="notif-section">{n.section}</div>}
            <div className={`notif-item ${n.unread && !read ? 'unread' : ''}`}>
              <div className="notif-ico" style={{background: n.bg}}>{n.emoji}</div>
              <div className="notif-body">
                <div className="notif-title">{n.title}</div>
                <div className="notif-desc">{n.desc}</div>
                <div className="notif-time">{n.time}</div>
              </div>
            </div>
          </div>
        ))}
        <div style={{height:110}}/>
      </div>

      <BottomNav/>
      <div className="home-ind"/>
    </div>
  )
}
