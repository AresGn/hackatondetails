# 🚀 AgriBot WhatsApp - Système d'Alerte Précoce

## 📱 Solution Principale : WhatsApp Business Bot

**Objectif :** Système d'alerte précoce pour les ravageurs agricoles via WhatsApp Bot avec SMS TextBee comme plan de secours.

### 🎯 Architecture Clarifiée

#### 1. **Solution Principale : WhatsApp Bot** 📱
- **WhatsApp Business API** pour messages riches et interactifs
- **Boutons et menus** pour navigation intuitive
- **Notifications push** pour alertes instantanées
- **Multimédia** : photos ravageurs, vidéos conseils
- **Géolocalisation** pour précision des alertes

#### 2. **Plan de Secours : SMS TextBee** 📧
- **Fallback automatique** si WhatsApp indisponible
- **TextBee API** : https://github.com/vernu/textbee
- **Messages courts** avec emojis pour compréhension
- **Pas de USSD** - Solution simplifiée

### 🛠️ Stack Technique

- **Backend :** Node.js + Express + MongoDB
- **WhatsApp :** WhatsApp Business API
- **SMS Secours :** TextBee (github.com/vernu/textbee)
- **Données :** OpenEPI API pour prédictions ravageurs
- **Frontend :** React.js pour dashboard admin

### 📊 Données OpenEPI

Intégration avec l'API OpenEPI pour :
- Prédictions ravageurs en temps réel
- Données géolocalisées par culture
- Alertes personnalisées par zone

### 🎯 Cultures Ciblées

- 🌽 **Maïs**
- 🍫 **Cacao** 
- 🌰 **Anacarde**
- 🌿 **Hévéa**

### 🌍 Zones Géographiques

- 🇧🇯 **Bénin**
- 🇨🇮 **Côte d'Ivoire**

## 📁 Structure du Projet

```
├── README.md                          # Ce fichier
├── agri_ecosystem_model.html          # Modèle business complet
├── whatsapp_textbee_architecture.html # Architecture technique clarifiée
├── whatsapp_bot_technical_breakdown.html # Détails WhatsApp Bot
├── Programme.md                       # Planning développement 25 jours
└── src/                              # Code source (à développer)
    ├── backend/                      # API Node.js
    ├── whatsapp-bot/                 # Bot WhatsApp
    ├── dashboard/                    # Interface admin React
    └── sms-fallback/                 # Service SMS TextBee
```

## 🚀 Démarrage Rapide

1. **Consulter** `Programme.md` pour le planning détaillé
2. **Voir** `whatsapp_textbee_architecture.html` pour l'architecture technique
3. **Ouvrir** `agri_ecosystem_model.html` pour le business model complet

## 📞 Contact & Support

Pour questions techniques ou agronomiques, contacter l'équipe de développement.

---

**⚠️ IMPORTANT :** Cette solution ne utilise **PAS de USSD**. La communication se fait principalement via **WhatsApp Bot** avec **SMS TextBee** comme plan de secours uniquement.
