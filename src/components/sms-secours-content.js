// ===== SMS SECOURS CONTENT COMPONENT =====

class SMSSecoursContent {
    constructor() {
        this.data = {
            fr: {
                title: "SMS Secours - Plan de Fallback",
                subtitle: "Solution de secours automatique avec TextBee",
                description: "Système de fallback automatique qui prend le relais quand WhatsApp est indisponible",
                
                features: [
                    {
                        icon: "fas fa-shield-alt",
                        title: "Fallback Automatique",
                        description: "Bascule automatiquement vers SMS si WhatsApp est indisponible"
                    },
                    {
                        icon: "fas fa-mobile-alt",
                        title: "Compatible Universel",
                        description: "Fonctionne sur tous les téléphones, même les plus basiques"
                    },
                    {
                        icon: "fas fa-bolt",
                        title: "Messages Courts",
                        description: "Alertes concises avec emojis pour maximiser l'impact"
                    },
                    {
                        icon: "fas fa-phone",
                        title: "Support Vocal",
                        description: "Numéro d'urgence pour assistance téléphonique"
                    }
                ],
                
                workflow: {
                    title: "Fonctionnement du Fallback",
                    steps: [
                        {
                            number: "1",
                            title: "Détection de Panne",
                            description: "Le système détecte que WhatsApp est indisponible",
                            technical: "Timeout API WhatsApp > 30s → Activation SMS"
                        },
                        {
                            number: "2", 
                            title: "Bascule Automatique",
                            description: "Activation immédiate du système SMS TextBee",
                            technical: "Switch automatique vers TextBee API"
                        },
                        {
                            number: "3",
                            title: "Envoi SMS",
                            description: "Message d'alerte envoyé par SMS avec numéro d'urgence",
                            technical: "POST /api/textbee/send avec template prédéfini"
                        },
                        {
                            number: "4",
                            title: "Retour WhatsApp",
                            description: "Retour automatique à WhatsApp quand disponible",
                            technical: "Health check WhatsApp API toutes les 5 min"
                        }
                    ]
                },
                
                textbeeIntegration: {
                    title: "Intégration TextBee",
                    description: "TextBee est une solution SMS open-source fiable et économique",
                    advantages: [
                        "API simple et documentée",
                        "Coûts réduits par rapport aux solutions propriétaires", 
                        "Fiabilité éprouvée",
                        "Support multilingue",
                        "Intégration facile avec Node.js"
                    ],
                    github: "github.com/vernu/textbee"
                },
                
                messageExamples: {
                    title: "Exemples de Messages SMS",
                    examples: [
                        {
                            type: "Alerte Urgente",
                            message: "🚨 ALERTE CHENILLE! Zone: Kara Nord. Action: 24h max. Appelez: 70123456 pour aide. AgriBot"
                        },
                        {
                            type: "Confirmation",
                            message: "✅ Expert en route! Kofi arrive 45min. GPS partagé. Suivi: 70123456. AgriBot"
                        },
                        {
                            type: "Suivi",
                            message: "📊 Intervention terminée. Efficacité: 95%. Notez service: bit.ly/agri-note. AgriBot"
                        }
                    ]
                }
            },
            en: {
                title: "SMS Backup - Fallback Plan", 
                subtitle: "Automatic backup solution with TextBee",
                description: "Automatic fallback system that takes over when WhatsApp is unavailable",
                
                features: [
                    {
                        icon: "fas fa-shield-alt",
                        title: "Automatic Fallback",
                        description: "Automatically switches to SMS if WhatsApp is unavailable"
                    },
                    {
                        icon: "fas fa-mobile-alt",
                        title: "Universal Compatible",
                        description: "Works on all phones, even the most basic ones"
                    },
                    {
                        icon: "fas fa-bolt",
                        title: "Short Messages",
                        description: "Concise alerts with emojis to maximize impact"
                    },
                    {
                        icon: "fas fa-phone",
                        title: "Voice Support",
                        description: "Emergency number for phone assistance"
                    }
                ],
                
                workflow: {
                    title: "Fallback Operation",
                    steps: [
                        {
                            number: "1",
                            title: "Failure Detection",
                            description: "System detects WhatsApp is unavailable",
                            technical: "WhatsApp API timeout > 30s → SMS activation"
                        },
                        {
                            number: "2",
                            title: "Automatic Switch",
                            description: "Immediate activation of TextBee SMS system",
                            technical: "Automatic switch to TextBee API"
                        },
                        {
                            number: "3",
                            title: "SMS Sending",
                            description: "Alert message sent via SMS with emergency number",
                            technical: "POST /api/textbee/send with predefined template"
                        },
                        {
                            number: "4",
                            title: "WhatsApp Return",
                            description: "Automatic return to WhatsApp when available",
                            technical: "WhatsApp API health check every 5 min"
                        }
                    ]
                },
                
                textbeeIntegration: {
                    title: "TextBee Integration",
                    description: "TextBee is a reliable and economical open-source SMS solution",
                    advantages: [
                        "Simple and documented API",
                        "Reduced costs compared to proprietary solutions",
                        "Proven reliability", 
                        "Multilingual support",
                        "Easy integration with Node.js"
                    ],
                    github: "github.com/vernu/textbee"
                },
                
                messageExamples: {
                    title: "SMS Message Examples",
                    examples: [
                        {
                            type: "Urgent Alert",
                            message: "🚨 ARMYWORM ALERT! Zone: Kara North. Action: 24h max. Call: 70123456 for help. AgriBot"
                        },
                        {
                            type: "Confirmation",
                            message: "✅ Expert on way! Kofi arrives 45min. GPS shared. Track: 70123456. AgriBot"
                        },
                        {
                            type: "Follow-up",
                            message: "📊 Intervention completed. Efficiency: 95%. Rate service: bit.ly/agri-rate. AgriBot"
                        }
                    ]
                }
            }
        };
    }

    render(language = 'fr') {
        const data = this.data[language];
        
        return `
            <div class="sms-secours-container">
                <div class="sms-intro">
                    <h2>${data.title}</h2>
                    <p class="subtitle">${data.subtitle}</p>
                    <p class="description">${data.description}</p>
                </div>

                <div class="features-grid">
                    ${data.features.map(feature => `
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="${feature.icon}"></i>
                            </div>
                            <h3>${feature.title}</h3>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="workflow-section">
                    <h3>${data.workflow.title}</h3>
                    <div class="workflow-steps">
                        ${data.workflow.steps.map(step => `
                            <div class="workflow-step">
                                <div class="step-number">${step.number}</div>
                                <div class="step-content">
                                    <h4>${step.title}</h4>
                                    <p class="step-description">${step.description}</p>
                                    <p class="step-technical"><i class="fas fa-code"></i> ${step.technical}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="textbee-section">
                    <h3>${data.textbeeIntegration.title}</h3>
                    <p>${data.textbeeIntegration.description}</p>
                    <div class="advantages-list">
                        ${data.textbeeIntegration.advantages.map(advantage => `
                            <div class="advantage-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${advantage}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="github-link">
                        <i class="fab fa-github"></i>
                        <a href="https://${data.textbeeIntegration.github}" target="_blank">${data.textbeeIntegration.github}</a>
                    </div>
                </div>

                <div class="message-examples">
                    <h3>${data.messageExamples.title}</h3>
                    <div class="examples-grid">
                        ${data.messageExamples.examples.map(example => `
                            <div class="message-example">
                                <div class="message-type">${example.type}</div>
                                <div class="sms-message">
                                    <i class="fas fa-sms"></i>
                                    <span>${example.message}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize component when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.smsSecoursContent = new SMSSecoursContent();
});
