import { useEffect, useState } from 'react'
import { useApp } from '../context/appContextInstance'
import ThemeToggle from './ThemeToggle'

const tabs = [
  {
    id: 'home',
    icon: '🏠',
    label: 'Accueil',
    short: "Vue générale du compte et accès rapide aux actions principales.",
    full: `L'écran Accueil est le point d'entrée principal de l'application Ariano VISA Pay.

Il permet à l'utilisateur de voir rapidement son solde, ses actions rapides, ses dernières activités et les accès vers les écrans importants.

Cette page est pensée pour offrir une expérience simple, claire et immédiate dès l'ouverture de l'application.`,
  },
  {
    id: 'card',
    icon: '💳',
    label: 'Ma Carte',
    short: 'Affichage de la carte VISA virtuelle et de ses informations essentielles.',
    full: `La section Ma Carte présente la carte VISA virtuelle avec un rendu moderne et réaliste.

L'utilisateur peut y consulter les informations liées à sa carte, son statut, ses détails visuels et ses données principales.

Cette partie peut aussi évoluer plus tard avec des fonctions comme bloquer la carte, afficher le numéro en sécurité ou gérer les plafonds.`,
  },
  {
    id: 'depot',
    icon: '📥',
    label: 'Recharger',
    short: 'Dépôt via Mobile Money ou carte bancaire.',
    full: `La section Recharger permet d'alimenter la carte Ariano VISA Pay.

L'utilisateur peut choisir un montant prédéfini ou saisir un montant personnalisé, sélectionner un opérateur Mobile Money, saisir une référence de transaction et envoyer une preuve de paiement.

L'objectif est de rendre le dépôt simple, compréhensible et traçable.`,
  },
  {
    id: 'retrait',
    icon: '📤',
    label: 'Retrait',
    short: 'Retrait vers Mobile Money ou compte bancaire.',
    full: `La section Retrait permet d'envoyer de l'argent depuis l'application vers un numéro Mobile Money ou un compte bancaire.

L'utilisateur choisit le montant, la méthode, le numéro de destination ainsi que le nom du compte bénéficiaire.

Cette page peut évoluer avec la gestion des frais, le suivi du statut et les validations de sécurité.`,
  },
  {
    id: 'dashboard',
    icon: '📊',
    label: 'Dashboard',
    short: "Vue synthétique de l'activité et des indicateurs du compte.",
    full: `Le Dashboard regroupe les informations essentielles sous une forme plus analytique.

Il permet à l'utilisateur de voir un résumé des transactions, des entrées, des sorties et des tendances d'utilisation.

C'est une section utile pour donner une lecture rapide et plus intelligente de l'activité du compte.`,
  },
  {
    id: 'notif',
    icon: '🔔',
    label: 'Notifications',
    short: 'Historique des alertes, messages et événements importants.',
    full: `La zone Notifications centralise les informations importantes destinées à l'utilisateur.

On y retrouve les confirmations de recharge, les demandes de retrait, les alertes de sécurité et les messages système.

Cette section améliore la transparence et renforce le suivi des opérations.`,
  },
  {
    id: 'profile',
    icon: '👤',
    label: 'Profil',
    short: "Informations personnelles et paramètres de l'utilisateur.",
    full: `La section Profil contient les informations personnelles du titulaire du compte.

Elle permet d'afficher ou de modifier certaines données comme le nom, l'email, le téléphone et d'autres préférences du compte.

À terme, elle peut aussi inclure la vérification d'identité et des paramètres avancés de sécurité.`,
  },
  {
    id: 'apropos',
    icon: '🏢',
    label: 'À propos',
    short: 'Présentation complète de la solution Ariano VISA Pay.',
    full: `La section À propos présente Ariano VISA Pay, sa mission, ses objectifs et sa valeur pour les utilisateurs à Madagascar.

Elle met en avant le positionnement du service comme solution de paiement numérique moderne, accessible et sécurisée.

Cette page sert à expliquer clairement la vision du produit et la promesse de service.`,
  },
  {
    id: 'contact',
    icon: '✉️',
    label: 'Contact',
    short: "Informations pour joindre l'équipe ou le support.",
    full: `La section Contact fournit les moyens de communication avec le support Ariano VISA Pay.

L'utilisateur peut y retrouver les coordonnées utiles pour poser une question, signaler un problème ou demander une assistance.

Cette partie améliore la crédibilité du produit et rassure l'utilisateur.`,
  },
]

const features = [
  {
    emoji: '🔒',
    title: 'Sécurité maximale',
    desc: 'Chiffrement AES-256 et tokenisation VISA pour protéger chaque opération.',
  },
  {
    emoji: '⚡',
    title: 'Activation instantanée',
    desc: 'Carte prête en quelques minutes après validation.',
  },
  {
    emoji: '🌍',
    title: 'Acceptée mondialement',
    desc: 'Utilisable partout où VISA est acceptée.',
  },
  {
    emoji: '📱',
    title: 'Mobile Money intégré',
    desc: 'MVola, Airtel Money et Orange Money.',
  },
]

export default function SidePanel() {
  const { screen, navigate } = useApp()
  const [openedId, setOpenedId] = useState(screen)

  useEffect(() => {
    setOpenedId(screen)
  }, [screen])

  const handleTabClick = (id) => {
    navigate(id)
    setOpenedId((prev) => (prev === id ? null : id))
  }

  return (
    <aside className="desc">
      <div className="desc-hero">
        <h2>Ariano VISA Pay - Prototype</h2>
        <p>
          Carte VISA virtuelle 100% malgache. Rechargez via Mobile Money, payez
          partout dans le monde et gérez votre carte avec une expérience moderne.
        </p>
      </div>

      <div className="desc-tools">
        <ThemeToggle />
      </div>

      <div className="desc-section-label">Navigation</div>

      <div className="stabs">
        {tabs.map((t) => {
          const isCurrent = screen === t.id
          const isOpen = openedId === t.id

          return (
            <div key={t.id} className="stab-wrap">
              <button
                type="button"
                className={`stab ${isCurrent ? 'on' : ''} ${isOpen ? 'open' : ''}`}
                onClick={() => handleTabClick(t.id)}
              >
                <div className="stab-dot" />

                <div className="stab-main">
                  <div className="stab-title-row">
                    <span className="stab-icon">{t.icon}</span>
                    <span className="stab-title">{t.label}</span>
                  </div>
                  <div className="stab-short">{t.short}</div>
                </div>

                <div className="stab-toggle">{isOpen ? '−' : '+'}</div>
              </button>

              {isOpen && (
                <div className="stab-desc-inline">
                  <div className="stab-desc-head">
                    <div className="stab-desc-icon">{t.icon}</div>

                    <div>
                      <div className="stab-desc-title">{t.label}</div>
                      <div className="stab-desc-sub">{t.short}</div>
                    </div>
                  </div>

                  <div className="stab-desc-body">{t.full}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="feat-list">
        {features.map((f) => (
          <div key={f.title} className="feat">
            <div className="feat-ico">{f.emoji}</div>
            <div className="feat-copy">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="desc-contact">
        <div className="desc-section-label" style={{ marginBottom: 8 }}>
          Contact
        </div>
        <div>ariane@cartevisaforall.com</div>
        <div>+261 38 84 867 52</div>
      </div>
    </aside>
  )
}