import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import SubHeader from '../components/SubHeader'

export default function LegalScreen() {
  const [tab, setTab] = useState('cgu')

  return (
    <div className="view active">
      <StatusBar/>
      <div className="scrl">
        <SubHeader title="CGU & Conditions"/>
        <div className="legal-tabs">
          <button className={`ltab ${tab==='cgu'?'on':''}`} onClick={() => setTab('cgu')}>Conditions d'utilisation</button>
          <button className={`ltab ${tab==='cgv'?'on':''}`} onClick={() => setTab('cgv')}>Conditions de vente</button>
        </div>

        {tab === 'cgu' && (
          <div className="legal-body">
            <div className="legal-date">Dernière mise à jour : 1er mars 2026</div>
            <h3>1. Acceptation des conditions</h3>
            <p>En utilisant Ariano VISA Pay, vous acceptez pleinement les présentes conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez cesser d'utiliser notre service.</p>
            <h3>2. Description du service</h3>
            <p>Ariano VISA Pay fournit une carte VISA virtuelle prépayée permettant des paiements en ligne internationaux depuis Madagascar.</p>
            <h3>3. Éligibilité</h3>
            <ul>
              <li>Être âgé d'au moins 18 ans</li>
              <li>Résider à Madagascar</li>
              <li>Posséder un numéro de téléphone valide</li>
              <li>Fournir une pièce d'identité valide</li>
            </ul>
            <h3>4. Responsabilités de l'utilisateur</h3>
            <p>L'utilisateur s'engage à ne pas utiliser la carte à des fins illicites, frauduleuses ou contraires aux lois malgaches et internationales.</p>
            <h3>5. Confidentialité</h3>
            <p>Vos données personnelles sont traitées conformément à notre politique de confidentialité et ne sont jamais revendues à des tiers.</p>
            <h3>6. Modifications</h3>
            <p>Ariano VISA Pay se réserve le droit de modifier ces conditions à tout moment avec notification préalable de 30 jours.</p>
          </div>
        )}

        {tab === 'cgv' && (
          <div className="legal-body">
            <div className="legal-date">Dernière mise à jour : 1er mars 2026</div>
            <h3>1. Tarification</h3>
            <p>Les frais de service sont clairement affichés avant chaque transaction. Aucun frais caché n'est appliqué.</p>
            <h3>2. Recharges</h3>
            <ul>
              <li>Recharge minimum : 5 000 Ar</li>
              <li>Recharge maximum : 1 000 000 Ar par mois</li>
              <li>Délai de traitement : 5 à 30 minutes</li>
            </ul>
            <h3>3. Retraits</h3>
            <p>Les retraits vers Mobile Money sont traités sous 24h ouvrées. Des frais de 1.5% s'appliquent.</p>
            <h3>4. Remboursements</h3>
            <p>En cas d'erreur technique de notre part, un remboursement complet est effectué sous 72 heures.</p>
            <h3>5. Litiges</h3>
            <p>Tout litige sera soumis à la juridiction compétente d'Antananarivo, Madagascar.</p>
          </div>
        )}
      </div>
      <div className="home-ind"/>
    </div>
  )
}
