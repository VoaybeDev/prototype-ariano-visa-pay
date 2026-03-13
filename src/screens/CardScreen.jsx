import { useState } from 'react'
import { useApp } from '../context/appContextInstance'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

export default function CardScreen() {
  const { navigate } = useApp()
  const [cvvShown, setCvvShown]     = useState(false)
  const [numShown, setNumShown]     = useState(false)
  const [frozen,   setFrozen]       = useState(false)
  const [online,   setOnline]       = useState(true)

  const Toggle = ({ on, onToggle }) => (
    <button className={`toggle-sw ${on ? 'on' : ''}`} onClick={onToggle}/>
  )

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <div className="screen-hd">Ma Carte VISA</div>

        {/* Card visual */}
        <div style={{margin:'0 22px 22px',height:206,borderRadius:26,background:'linear-gradient(140deg,#1b3a72 0%,#0d1f46 55%,#08122a 100%)',position:'relative',overflow:'hidden',boxShadow:'0 20px 54px rgba(20,60,160,.4)',opacity: frozen ? 0.5 : 1}}>
          <div style={{position:'absolute',top:-80,right:-80,width:260,height:260,background:'radial-gradient(circle,rgba(61,142,248,.22),transparent 70%)',borderRadius:'50%'}}/>
          <div style={{position:'absolute',top:28,left:24,width:42,height:32,background:'linear-gradient(135deg,#f5c842,#d4a017)',borderRadius:7}}/>
          <div style={{position:'absolute',top:24,right:22,fontFamily:"'Space Mono',monospace",fontSize:24,fontWeight:700,color:'rgba(255,255,255,.9)',fontStyle:'italic',letterSpacing:-1}}>VISA</div>
          {frozen && (
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40}}>🔒</div>
          )}
          <div style={{position:'absolute',bottom:62,left:24,fontFamily:"'Space Mono',monospace",fontSize:15,color:'rgba(255,255,255,.8)',letterSpacing:3}}>
            {numShown ? '4532 1234 5678 7823' : '•••• •••• •••• 7823'}
          </div>
          <div style={{position:'absolute',bottom:18,left:24,right:24,display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
            <div>
              <div style={{fontSize:9,color:'rgba(255,255,255,.38)',textTransform:'uppercase',letterSpacing:1,marginBottom:3}}>Titulaire</div>
              <div style={{fontSize:13,fontWeight:700,color:'rgba(255,255,255,.88)'}}>RAKOTO JEAN</div>
            </div>
            <div>
              <div style={{fontSize:9,color:'rgba(255,255,255,.38)',textTransform:'uppercase',letterSpacing:1,marginBottom:3}}>Expiration</div>
              <div style={{fontSize:13,fontWeight:700,color:'rgba(255,255,255,.88)'}}>03/27</div>
            </div>
          </div>
        </div>

        {frozen && (
          <div style={{margin:'-10px 22px 18px',padding:'12px 16px',background:'rgba(248,113,113,.1)',border:'1px solid rgba(248,113,113,.2)',borderRadius:12,fontSize:13,color:'var(--red)',fontWeight:600,textAlign:'center'}}>
            🔒 Carte temporairement bloquée
          </div>
        )}

        {/* Detail grid */}
        <div className="detail-grid">
          <div className="dbox">
            <div className="dbox-lbl">Numéro de carte</div>
            <div className="dbox-val" style={{fontFamily:"'Space Mono',monospace",fontSize:13}}>
              {numShown ? '4532 1234\n5678 7823' : '•••• ••••\n•••• 7823'}
            </div>
            <button style={{marginTop:8,fontSize:12,color:'var(--blue)',fontWeight:600,background:'none',border:'none',cursor:'pointer',padding:0,fontFamily:"'Sora',sans-serif"}}
              onClick={() => setNumShown(n => !n)}>
              {numShown ? '🙈 Masquer' : '👁 Afficher'}
            </button>
          </div>
          <div className="dbox">
            <div className="dbox-lbl">CVV</div>
            <div className="dbox-val" style={{fontFamily:"'Space Mono',monospace",fontSize:22,letterSpacing:4}}>
              {cvvShown ? '427' : '•••'}
            </div>
            <button style={{marginTop:8,fontSize:12,color:'var(--blue)',fontWeight:600,background:'none',border:'none',cursor:'pointer',padding:0,fontFamily:"'Sora',sans-serif"}}
              onClick={() => setCvvShown(v => !v)}>
              {cvvShown ? '🙈 Masquer' : '👁 Afficher'}
            </button>
          </div>
          <div className="dbox">
            <div className="dbox-lbl">Expiration</div>
            <div className="dbox-val">03/27</div>
          </div>
          <div className="dbox">
            <div className="dbox-lbl">Type de carte</div>
            <div className="dbox-val">VISA Virtuelle</div>
          </div>
          <div className="dbox full">
            <div className="dbox-lbl">Statut</div>
            <div style={{display:'flex',alignItems:'center',gap:10,marginTop:4}}>
              <div className={`badge ${frozen ? 'badge-red' : 'badge-green'}`}>
                <div className={`dot ${frozen ? '' : 'dot-green'}`} style={frozen?{background:'var(--red)'}:{}}/>&nbsp;
                {frozen ? 'Bloquée' : 'Active'}
              </div>
              <div className="badge badge-blue">🌐 Paiements en ligne {online ? 'ON' : 'OFF'}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{padding:'0 22px 20px'}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--text2)',textTransform:'uppercase',letterSpacing:1,marginBottom:12}}>Contrôles</div>
          <div style={{background:'var(--card)',borderRadius:'var(--r)',border:'1px solid var(--border)',overflow:'hidden'}}>
            <div className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-nm">Bloquer la carte</div>
                <div className="toggle-ds">Désactive temporairement tous les paiements</div>
              </div>
              <button className={`toggle-sw ${frozen ? 'on' : ''}`} style={frozen?{background:'var(--red)'}:{}} onClick={() => setFrozen(f => !f)}/>
            </div>
            <div className="toggle-row">
              <div className="toggle-info">
                <div className="toggle-nm">Paiements en ligne</div>
                <div className="toggle-ds">Autoriser les achats sur Internet</div>
              </div>
              <button className={`toggle-sw ${online ? 'on' : ''}`} onClick={() => setOnline(v => !v)}/>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{padding:'0 22px 110px',display:'flex',flexDirection:'column',gap:10}}>
          <button className="btn btn-blue" onClick={() => navigate('depot')}>📥 Recharger la carte</button>
          <button className="btn btn-outline" onClick={() => navigate('retrait')}>📤 Retrait</button>
        </div>
      </div>
      <BottomNav/>
      <div className="home-ind"/>
    </div>
  )
}
