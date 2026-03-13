# 💳 Ariano VISA Pay - Prototype

Prototype front-end d'une application fintech moderne permettant de gérer une carte VISA virtuelle à Madagascar.

## 🔗 Démo en ligne

- Déploiement Vercel : https://prototype-ariano-visa-pay.vercel.app/
- Repository GitHub : https://github.com/VoaybeDev/prototype-ariano-visa-pay

## 📌 Présentation

**Ariano VISA Pay** est un prototype d'interface utilisateur construit avec **React** et **Vite**.

L'application simule une expérience mobile réaliste autour d'une carte VISA virtuelle.  
Elle permet de visualiser un parcours utilisateur complet :

- inscription
- connexion
- achat obligatoire de la carte
- accès au tableau de bord
- recharge
- retrait
- consultation du profil
- notifications
- pages d'information

Le projet est affiché dans une maquette mobile avec un panneau descriptif à droite pour une présentation plus professionnelle sur desktop.

## ✨ Fonctionnalités principales

- 🔐 Connexion utilisateur
- 📝 Création de compte
- 💳 Achat obligatoire de la carte avant accès aux fonctionnalités protégées
- 🏠 Tableau de bord principal
- 💰 Recharge de la carte
- 📤 Retrait vers Mobile Money ou compte bancaire
- 🔔 Notifications
- 👤 Gestion du profil
- ℹ️ Pages À propos et Contact
- 📱 Interface mobile immersive dans une coque de téléphone
- 🧭 Panneau latéral interactif avec descriptions des sections
- 🎨 Design moderne inspiré des applications fintech

## 🛡️ Parcours utilisateur actuel

Le prototype impose une logique simple :

- un nouvel utilisateur doit d'abord **acheter sa carte**
- tant que la carte n'est pas activée, l'accès aux écrans principaux est bloqué
- après achat, l'utilisateur est redirigé vers l'accueil

Cette logique a été ajoutée pour rendre le prototype plus réaliste.

## 🧰 Stack technique

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🧱 JSX
- 🎨 CSS
- ▲ Vercel pour le déploiement

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
│   │   └── SubHeader.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── screens/
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