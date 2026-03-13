# 💳 Ariano VISA Pay - Prototype

Prototype front-end d'une application fintech moderne pour la gestion d'une carte VISA virtuelle à Madagascar.

## 🔗 Liens du projet

- Démo en ligne - https://prototype-ariano-visa-pay.vercel.app/
- GitHub - https://github.com/VoaybeDev/prototype-ariano-visa-pay

## 📌 Présentation

**Ariano VISA Pay** est un prototype d'application mobile développé avec **React** et **Vite**.

Le projet simule une expérience utilisateur complète autour d'une carte VISA virtuelle :

- splash screen d'ouverture
- onboarding
- inscription
- connexion
- achat obligatoire de la carte
- tableau de bord
- recharge
- retrait
- notifications
- profil
- pages d'information

L'application est affichée dans une maquette mobile avec un panneau descriptif sur desktop pour un rendu plus professionnel.

## ✨ Fonctionnalités principales

- 🔐 Connexion utilisateur
- 📝 Création de compte
- 💳 Achat obligatoire de la carte avant accès aux écrans protégés
- 🚀 Splash screen avec identité visuelle
- 👋 Onboarding pour découvrir l'application
- 🏠 Accueil avec aperçu du compte
- 💰 Recharge de la carte
- 📤 Retrait vers Mobile Money ou compte bancaire
- 🔔 Notifications
- 👤 Gestion du profil
- ℹ️ Pages À propos et Contact
- 🌙 Mode sombre / ☀️ mode clair
- 📱 Interface mobile immersive
- 🧭 Side panel interactif sur desktop
- ✍️ Signature visuelle sous la maquette mobile

## 🛡️ Logique utilisateur actuelle

Le prototype impose un parcours simple :

- un nouvel utilisateur doit d'abord créer un compte
- après inscription ou première connexion, il est redirigé vers l'écran d'offre
- l'utilisateur doit acheter sa carte VISA virtuelle
- tant que la carte n'est pas achetée, l'accès aux écrans principaux est bloqué
- après achat, l'utilisateur accède à l'accueil

## 🎬 Expérience d'ouverture

L'application inclut :

- un **Splash Screen** pour le wow effect au lancement
- un **Onboarding Screen** pour présenter rapidement la solution
- une transition vers l'inscription ou la connexion

Cela permet de rendre le prototype plus crédible et plus premium.

## 🎨 Thème

Le projet prend en charge :

- **mode sombre**
- **mode clair**

Le choix du thème est mémorisé pour améliorer l'expérience utilisateur.

## 🧰 Stack technique

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🧱 JSX
- 🎨 CSS
- ▲ Vercel

## 📂 Structure du projet

```bash
prototype-ariano-visa-pay/
├── public/
├── src/
│   ├── assets/
│   │   └── visa-logo.svg
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   ├── SidePanel.jsx
│   │   ├── StatusBar.jsx
│   │   ├── SubHeader.jsx
│   │   ├── TransactionRow.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── VisaCard.jsx
│   ├── context/
│   │   ├── AppContext.jsx
│   │   ├── appConstants.js
│   │   └── appContextInstance.js
│   ├── data/
│   │   ├── notifications.js
│   │   └── transactions.js
│   ├── screens/
│   │   ├── SplashScreen.jsx
│   │   ├── OnboardingScreen.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── RegisterScreen.jsx
│   │   ├── OffreScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── CardScreen.jsx
│   │   ├── DepotScreen.jsx
│   │   ├── RetraitScreen.jsx
│   │   ├── DashboardScreen.jsx
│   │   ├── NotifScreen.jsx
│   │   ├── ProfileScreen.jsx
│   │   ├── InfoPersoScreen.jsx
│   │   ├── NotifSettingsScreen.jsx
│   │   ├── SecuriteScreen.jsx
│   │   ├── LegalScreen.jsx
│   │   ├── LogoutScreen.jsx
│   │   ├── AproposScreen.jsx
│   │   └── ContactScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md