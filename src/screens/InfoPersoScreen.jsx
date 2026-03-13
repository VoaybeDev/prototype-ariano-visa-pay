import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

const rows = [
  { key:'Nom',        val:'Rakoto' },
  { key:'Prénom',     val:'Jean' },
  { key:'Email',      val:'rakoto.jean@gmail.com' },
  { key:'Téléphone',  val:'+261 38 73 930 01' },
  { key:'Naissance',  val:'15/06/1990' },
  { key:'Adresse',    val:'Antananarivo, MG' },
  { key:'Nationa.',   val:'Malgache' },
]

export default function InfoPersoScreen() {
  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="Informations personnelles"/>

        <div className="info-section">
          <div className="info-card">
            {rows.map(r => (
              <div key={r.key} className="info-row">
                <div className="info-key">{r.key}</div>
                <div className="info-val">{r.val}</div>
                <div className="info-edit">Modifier</div>
              </div>
            ))}
          </div>
        </div>

        {/* Identity verification */}
        <div style={{margin:'0 22px 20px',padding:'18px',background:'rgba(245,200,66,.06)',border:'1px solid rgba(245,200,66,.2)',borderRadius:'var(--r)'}}>
          <div style={{fontSize:14,fontWeight:700,color:'var(--gold)',marginBottom:6}}>⚠️ Vérification d'identité</div>
          <div style={{fontSize:13,color:'var(--text2)',lineHeight:1.6,marginBottom:14}}>
            Pour accéder à toutes les fonctionnalités, veuillez vérifier votre identité en uploadant votre CIN.
          </div>
          <button className="btn" style={{background:'linear-gradient(135deg,var(--gold),var(--gold2))',color:'#000',fontWeight:700}}>
            📎 Vérifier mon identité
          </button>
        </div>
        <div style={{height:50}}/>
      </div>
      <div className="home-ind"/>
    </div>
  )
}
