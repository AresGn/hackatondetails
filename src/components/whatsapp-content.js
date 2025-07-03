// ===== WHATSAPP BOT SOLUTION CONTENT COMPONENT =====

class WhatsAppContent {
    constructor() {
        this.data = {
            fr: {
                title: "Écosystème WhatsApp Bot + SMS Secours",
                subtitle: "Solution complète d'alerte précoce pour agriculteurs",
                // Version Simple pour non-techniques
                simple: {
                    title: "Comment ça marche ? (Version Simple)",
                    description: "AgriBot vous protège contre les ravageurs grâce à WhatsApp, l'application que vous utilisez déjà !",
                    workflow: [
                        {
                            step: "1",
                            title: "🛰️ Détection Automatique",
                            description: "Nos satellites détectent les chenilles légionnaires dans votre région",
                            example: "Satellite repère chenilles à Kara → Alerte automatique"
                        },
                        {
                            step: "2",
                            title: "📱 Message WhatsApp",
                            description: "Vous recevez un message WhatsApp avec des boutons pour agir rapidement",
                            example: "🚨 ALERTE CHENILLE! Que faire ? [Intervention] [Expert] [Produits]"
                        },
                        {
                            step: "3",
                            title: "⚡ Action Immédiate",
                            description: "Cliquez sur un bouton et l'aide arrive automatiquement",
                            example: "Clic [Intervention] → Expert Kofi arrive dans 45 minutes"
                        },
                        {
                            step: "4",
                            title: "✅ Suivi Complet",
                            description: "Vous êtes informé de tout jusqu'à la fin de l'intervention",
                            example: "Intervention terminée → Efficacité 95% → Notez le service"
                        }
                    ],
                    benefits: [
                        { icon: "💰", title: "Économies", desc: "Réduction de 30% des pertes de récolte" },
                        { icon: "⏰", title: "Rapidité", desc: "Intervention en moins d'1 heure" },
                        { icon: "📱", title: "Simplicité", desc: "Juste WhatsApp, rien à installer" },
                        { icon: "🤝", title: "Support", desc: "Aide 24h/24 par message ou appel" }
                    ]
                },
                // Version Technique pour développeurs
                technical: {
                    title: "Architecture Technique Complète",
                    description: "Écosystème basé sur WhatsApp Business API avec fallback SMS TextBee",
                    architecture: [
                        {
                            name: "🤖 WhatsApp Bot (Principal)",
                            tech: "WhatsApp Business API",
                            description: "Messages interactifs, boutons & menus riches",
                            details: "Meta Business API + Webhooks + Interactive Messages"
                        },
                        {
                            name: "🛰️ OpenEPI Integration",
                            tech: "API OpenEPI",
                            description: "Données ravageurs & prédictions temps réel",
                            details: "REST API + Webhook notifications + Data processing"
                        },
                        {
                            name: "🧠 IA & Traitement",
                            tech: "Node.js + TensorFlow",
                            description: "Analyse données, génération alertes, personnalisation",
                            details: "ML models + NLP + Predictive analytics"
                        },
                        {
                            name: "📱 Dashboard Web",
                            tech: "React + Express",
                            description: "Interface admin, monitoring, analytics",
                            details: "Real-time dashboard + Admin panel + Reporting"
                        },
                        {
                            name: "☁️ Infrastructure",
                            tech: "Node.js + MongoDB",
                            description: "Backend scalable avec auto-scaling",
                            details: "Microservices + Docker + Kubernetes + Auto-scaling"
                        },
                        {
                            name: "📧 SMS Secours (TextBee)",
                            tech: "github.com/vernu/textbee",
                            description: "Plan B si WhatsApp down, fallback automatique",
                            details: "Automatic failover + Health checks + SMS templates"
                        }
                    ],
                    businessModel: {
                        title: "Business Model Révolutionnaire",
                        pricing: [
                            {
                                plan: "🌱 BASIC",
                                price: "5000 F CFA/mois",
                                features: ["Alertes temps réel", "Conseils WhatsApp", "Accès marketplace", "Support 24/7"]
                            },
                            {
                                plan: "🚀 PREMIUM",
                                price: "15000 F CFA/mois",
                                features: ["Tout Basic +", "2 interventions/mois incluses", "Produits à prix coûtant", "Expert personnel"]
                            },
                            {
                                plan: "👑 ENTERPRISE",
                                price: "50000 F CFA/mois",
                                features: ["Interventions illimitées", "Équipe dédiée", "Assurance récolte", "Formation continue"]
                            }
                        ],
                        revenue: [
                            { source: "🔔 Abonnements SaaS", desc: "Revenue récurrent mensuel" },
                            { source: "🛠️ Services à la Demande", desc: "Pay-per-use interventions" },
                            { source: "🛒 Marketplace Commission", desc: "15-20% sur ventes produits" },
                            { source: "📊 Data & Analytics", desc: "Vente données agricoles" }
                        ]
                    }
                },
                ecosystem: {
                    title: "Réseau d'Intervention Décentralisé",
                    network: [
                        { name: "🎯 HUB CENTRAL", desc: "Coordination, Dispatching, Monitoring" },
                        { name: "👨‍🌾 AGENTS TERRAIN", desc: "Intervention rapide, Équipement mobile, Formation certifiée" },
                        { name: "🏪 POINTS RELAIS", desc: "Stock produits, Maintenance équipement, Formation locale" },
                        { name: "🔬 EXPERTS", desc: "Diagnostic complexe, R&D, Formation agents" }
                    ],
                    impact: [
                        { stat: "50,000", desc: "Agriculteurs connectés (An 3)" },
                        { stat: "2,000", desc: "Agents terrain" },
                        { stat: "30%", desc: "Réduction pertes" },
                        { stat: "200M F CFA", desc: "Économisés annuellement" }
                    ]
                }
            },
            en: {
                title: "WhatsApp Bot + SMS Backup Ecosystem",
                subtitle: "Complete early warning solution for farmers",

                // Simple Version for non-technical users
                simple: {
                    title: "How does it work? (Simple Version)",
                    description: "AgriBot protects you from pests through WhatsApp, the app you already use!",
                    workflow: [
                        {
                            step: "1",
                            title: "🛰️ Automatic Detection",
                            description: "Our satellites detect armyworms in your region",
                            example: "Satellite spots armyworms in Kara → Automatic alert"
                        },
                        {
                            step: "2",
                            title: "📱 WhatsApp Message",
                            description: "You receive a WhatsApp message with buttons to act quickly",
                            example: "🚨 ARMYWORM ALERT! What to do? [Intervention] [Expert] [Products]"
                        },
                        {
                            step: "3",
                            title: "⚡ Immediate Action",
                            description: "Click a button and help arrives automatically",
                            example: "Click [Intervention] → Expert Kofi arrives in 45 minutes"
                        },
                        {
                            step: "4",
                            title: "✅ Complete Follow-up",
                            description: "You're informed of everything until the intervention ends",
                            example: "Intervention completed → 95% efficiency → Rate the service"
                        }
                    ],
                    benefits: [
                        { icon: "💰", title: "Savings", desc: "30% reduction in crop losses" },
                        { icon: "⏰", title: "Speed", desc: "Intervention in less than 1 hour" },
                        { icon: "📱", title: "Simplicity", desc: "Just WhatsApp, nothing to install" },
                        { icon: "🤝", title: "Support", desc: "24/7 help via message or call" }
                    ]
                },
                // Technical Version for developers
                technical: {
                    title: "Complete Technical Architecture",
                    description: "Ecosystem based on WhatsApp Business API with TextBee SMS fallback",
                    architecture: [
                        {
                            name: "🤖 WhatsApp Bot (Main)",
                            tech: "WhatsApp Business API",
                            description: "Interactive messages, buttons & rich menus",
                            details: "Meta Business API + Webhooks + Interactive Messages"
                        },
                        {
                            name: "🛰️ OpenEPI Integration",
                            tech: "OpenEPI API",
                            description: "Pest data & real-time predictions",
                            details: "REST API + Webhook notifications + Data processing"
                        },
                        {
                            name: "🧠 AI & Processing",
                            tech: "Node.js + TensorFlow",
                            description: "Data analysis, alert generation, personalization",
                            details: "ML models + NLP + Predictive analytics"
                        },
                        {
                            name: "📱 Web Dashboard",
                            tech: "React + Express",
                            description: "Admin interface, monitoring, analytics",
                            details: "Real-time dashboard + Admin panel + Reporting"
                        },
                        {
                            name: "☁️ Infrastructure",
                            tech: "Node.js + MongoDB",
                            description: "Scalable backend with auto-scaling",
                            details: "Microservices + Docker + Kubernetes + Auto-scaling"
                        },
                        {
                            name: "📧 SMS Backup (TextBee)",
                            tech: "github.com/vernu/textbee",
                            description: "Plan B if WhatsApp down, automatic fallback",
                            details: "Automatic failover + Health checks + SMS templates"
                        }
                    ],
                    businessModel: {
                        title: "Revolutionary Business Model",
                        pricing: [
                            {
                                plan: "🌱 BASIC",
                                price: "5000 F CFA/month",
                                features: ["Real-time alerts", "WhatsApp advice", "Marketplace access", "24/7 support"]
                            },
                            {
                                plan: "🚀 PREMIUM",
                                price: "15000 F CFA/month",
                                features: ["All Basic +", "2 interventions/month included", "Products at cost price", "Personal expert"]
                            },
                            {
                                plan: "👑 ENTERPRISE",
                                price: "50000 F CFA/month",
                                features: ["Unlimited interventions", "Dedicated team", "Crop insurance", "Continuous training"]
                            }
                        ],
                        revenue: [
                            { source: "🔔 SaaS Subscriptions", desc: "Monthly recurring revenue" },
                            { source: "🛠️ On-Demand Services", desc: "Pay-per-use interventions" },
                            { source: "🛒 Marketplace Commission", desc: "15-20% on product sales" },
                            { source: "📊 Data & Analytics", desc: "Agricultural data sales" }
                        ]
                    }
                },
                ecosystem: {
                    title: "Decentralized Intervention Network",
                    network: [
                        { name: "🎯 CENTRAL HUB", desc: "Coordination, Dispatching, Monitoring" },
                        { name: "👨‍🌾 FIELD AGENTS", desc: "Rapid intervention, Mobile equipment, Certified training" },
                        { name: "🏪 RELAY POINTS", desc: "Product stock, Equipment maintenance, Local training" },
                        { name: "🔬 EXPERTS", desc: "Complex diagnosis, R&D, Agent training" }
                    ],
                    impact: [
                        { stat: "50,000", desc: "Connected farmers (Year 3)" },
                        { stat: "2,000", desc: "Field agents" },
                        { stat: "30%", desc: "Loss reduction" },
                        { stat: "200M F CFA", desc: "Saved annually" }
                    ]
                }
            }
        };
    }

    renderSimple(language = 'fr') {
        const data = this.data[language].simple;

        return `
            <div class="whatsapp-simple">
                <div class="simple-intro">
                    <h2>${data.title}</h2>
                    <p class="simple-description">${data.description}</p>
                </div>

                <div class="workflow-simple">
                    <h3>🚀 Processus en 4 Étapes</h3>
                    <div class="workflow-steps">
                        ${data.workflow.map(step => `
                            <div class="workflow-step">
                                <div class="step-number">${step.step}</div>
                                <div class="step-content">
                                    <h4>${step.title}</h4>
                                    <p>${step.description}</p>
                                    <div class="step-example">
                                        <i class="fas fa-lightbulb"></i>
                                        <span>${step.example}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="benefits-grid">
                    <h3>🎯 Avantages Clés</h3>
                    <div class="benefits-container">
                        ${data.benefits.map(benefit => `
                            <div class="benefit-card">
                                <div class="benefit-icon">${benefit.icon}</div>
                                <h4>${benefit.title}</h4>
                                <p>${benefit.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderTechnical(language = 'fr') {
        const data = this.data[language].technical;

        return `
            <div class="whatsapp-technical">
                <div class="technical-intro">
                    <h2>${data.title}</h2>
                    <p class="technical-description">${data.description}</p>
                </div>

                <div class="architecture-section">
                    <h3>🏗️ Architecture Technique</h3>
                    <div class="architecture-grid">
                        ${data.architecture.map(component => `
                            <div class="architecture-component">
                                <div class="component-header">
                                    <h4>${component.name}</h4>
                                    <span class="tech-badge">${component.tech}</span>
                                </div>
                                <p class="component-description">${component.description}</p>
                                <div class="component-details">
                                    <i class="fas fa-code"></i>
                                    <span>${component.details}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="business-model-section">
                    <h3>${data.businessModel.title}</h3>
                    <div class="pricing-grid">
                        ${data.businessModel.pricing.map(plan => `
                            <div class="pricing-card">
                                <h4>${plan.plan}</h4>
                                <div class="price">${plan.price}</div>
                                <ul>
                                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>

                    <div class="revenue-streams">
                        <h4>💎 Sources de Revenus</h4>
                        <div class="revenue-grid">
                            ${data.businessModel.revenue.map(revenue => `
                                <div class="revenue-item">
                                    <h5>${revenue.source}</h5>
                                    <p>${revenue.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderEcosystem(language = 'fr') {
        const data = this.data[language].ecosystem;

        return `
            <div class="ecosystem-section">
                <h3>${data.title}</h3>
                <div class="network-grid">
                    ${data.network.map(node => `
                        <div class="network-node">
                            <h4>${node.name}</h4>
                            <p>${node.desc}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="impact-stats">
                    <h4>📊 Impact Projeté</h4>
                    <div class="stats-grid">
                        ${data.impact.map(stat => `
                            <div class="stat-item">
                                <div class="stat-number">${stat.stat}</div>
                                <div class="stat-desc">${stat.desc}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    render(language = 'fr', version = 'simple') {
        const data = this.data[language];

        return `
            <div class="whatsapp-solution">
                <div class="solution-header">
                    <h1>${data.title}</h1>
                    <p class="solution-subtitle">${data.subtitle}</p>
                </div>

                <div class="version-tabs">
                    <button class="version-tab ${version === 'simple' ? 'active' : ''}" data-version="simple">
                        <i class="fas fa-user-friends"></i>
                        <span data-translate="tab_whatsapp_simple">Version Simple</span>
                    </button>
                    <button class="version-tab ${version === 'technical' ? 'active' : ''}" data-version="technical">
                        <i class="fas fa-code"></i>
                        <span data-translate="tab_whatsapp_technique">Version Technique</span>
                    </button>
                </div>

                <div class="version-content">
                    ${version === 'simple' ? this.renderSimple(language) : this.renderTechnical(language)}
                </div>

                ${this.renderEcosystem(language)}
            </div>
        `;
    }

}

// Initialize component when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.whatsAppContent = new WhatsAppContent();

    // Add event listeners for version tabs
    document.addEventListener('click', function(e) {
        if (e.target.closest('.version-tab')) {
            const tab = e.target.closest('.version-tab');
            const version = tab.dataset.version;
            const language = localStorage.getItem('language') || 'fr';

            // Update active tab
            document.querySelectorAll('.version-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update content
            const contentContainer = document.querySelector('.version-content');
            if (contentContainer) {
                if (version === 'simple') {
                    contentContainer.innerHTML = window.whatsAppContent.renderSimple(language);
                } else {
                    contentContainer.innerHTML = window.whatsAppContent.renderTechnical(language);
                }
            }
        }
    });
});
