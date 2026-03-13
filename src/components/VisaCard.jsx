export default function VisaCard({ cardNum = '•••• •••• •••• 7823', onPress }) {
  return (
    <div className="visa-card" onClick={onPress} style={{cursor: onPress ? 'pointer' : 'default'}}>
      <div className="vc-glow"/>
      <div className="vc-glow2"/>
      <div className="vc-chip"/>
      <div className="vc-logo">VISA</div>
      <div className="vc-num">{cardNum}</div>
      <div className="vc-foot">
        <div>
          <div className="vc-lbl">Titulaire</div>
          <div className="vc-val">RAKOTO JEAN</div>
        </div>
        <div>
          <div className="vc-lbl">Expiration</div>
          <div className="vc-val">03/27</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="vc-lbl">Réseau</div>
          <div className="vc-val" style={{fontFamily:"'Space Mono',monospace",fontSize:12}}>VIRTUAL</div>
        </div>
      </div>
    </div>
  )
}
