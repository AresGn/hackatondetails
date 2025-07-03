// ===== IDEAS ANALYSIS CONTENT COMPONENT =====

class AnalysisContent {
    constructor() {
        this.data = {
            fr: {
                title: "Analyse Comparative des Solutions",
                subtitle: "Évaluation selon les critères Désirabilité, Faisabilité, Viabilité",
                solutions: [
                    {
                        id: "mobile-app",
                        name: "Application Mobile",
                        icon: "fas fa-mobile-alt",
                        scores: {
                            desirability: { value: 5, max: 10, label: "DÉSIRABILITÉ" },
                            feasibility: { value: 6, max: 10, label: "FAISABILITÉ" },
                            viability: { value: 6, max: 10, label: "VIABILITÉ" }
                        },
                        total: 17,
                        maxTotal: 30,
                        pros: [
                            "Interface utilisateur riche et intuitive",
                            "Fonctionnalités avancées (photos, géolocalisation)",
                            "Notifications push en temps réel",
                            "Capacité de stockage local des données"
                        ],
                        cons: [
                            "Nécessite un smartphone (coûteux pour les agriculteurs)",
                            "Dépendant de la connectivité internet",
                            "Courbe d'apprentissage plus élevée",
                            "Maintenance et mises à jour complexes"
                        ],
                        openEpiIntegration: "API REST pour récupérer les prédictions de ravageurs et données météorologiques",
                        hackathonFeasibility: "Complexe pour un hackathon de 48h - nécessite développement mobile natif"
                    },
                    {
                        id: "whatsapp-bot",
                        name: "WhatsApp Bot",
                        icon: "fab fa-whatsapp",
                        scores: {
                            desirability: { value: 9, max: 10, label: "DÉSIRABILITÉ" },
                            feasibility: { value: 10, max: 10, label: "FAISABILITÉ" },
                            viability: { value: 9, max: 10, label: "VIABILITÉ" }
                        },
                        total: 28,
                        maxTotal: 30,
                        pros: [
                            "Plateforme familière pour 85% des agriculteurs",
                            "Messagerie riche (texte, audio, images, vidéos)",
                            "Interface conversationnelle intuitive",
                            "Intégration TextBee SMS comme fallback",
                            "Pas besoin d'installation d'application",
                            "Support multilingue natif"
                        ],
                        cons: [
                            "Nécessite une connexion internet (mitigé par SMS fallback)",
                            "Coûts WhatsApp Business API (compensés par l'efficacité)",
                            "Dépendance à Meta/WhatsApp"
                        ],
                        openEpiIntegration: "Webhook OpenEPI → Traitement IA → Diffusion WhatsApp + SMS TextBee",
                        hackathonFeasibility: "Optimal pour hackathon - APIs matures, documentation complète, écosystème riche",
                        winner: true
                    },
                    {
                        id: "textbee-sms",
                        name: "TextBee SMS",
                        icon: "fas fa-sms",
                        scores: {
                            desirability: { value: 7, max: 10, label: "DÉSIRABILITÉ" },
                            feasibility: { value: 8, max: 10, label: "FAISABILITÉ" },
                            viability: { value: 7, max: 10, label: "VIABILITÉ" }
                        },
                        total: 22,
                        maxTotal: 30,
                        pros: [
                            "Compatible avec TOUS les téléphones",
                            "Fonctionne sans internet",
                            "Coût très faible avec TextBee",
                            "Excellent comme système de fallback"
                        ],
                        cons: [
                            "Interface limitée (texte uniquement)",
                            "Pas de multimédia",
                            "Expérience utilisateur basique",
                            "Limitations de caractères (160 max)",
                            "Pas d'interactivité avancée"
                        ],
                        openEpiIntegration: "API TextBee pour diffusion SMS automatisée en complément WhatsApp",
                        hackathonFeasibility: "Bon comme solution de fallback - intégration simple avec WhatsApp Bot",
                        recommended: false
                    }
                ],
                recommendation: {
                    title: "RECOMMANDATION HACKATHON",
                    winner: "WhatsApp Bot",
                    reason: "Le WhatsApp Bot est la solution gagnante avec 28/30 points. Il combine une excellente faisabilité technique (10/10), une forte désirabilité (9/10) et une viabilité économique solide (9/10). L'intégration TextBee SMS comme fallback garantit l'accessibilité universelle.",
                    implementation: "Développement avec Node.js + WhatsApp Business API + TextBee SMS, intégration OpenEPI pour les alertes précoces, déploiement sur les cultures de Cacao, Maïs, Anacarde et Hévéa au Bénin et Côte d'Ivoire."
                }
            },
            en: {
                title: "Comparative Solutions Analysis",
                subtitle: "Evaluation based on Desirability, Feasibility, Viability criteria",
                solutions: [
                    {
                        id: "mobile-app",
                        name: "Mobile Application",
                        icon: "fas fa-mobile-alt",
                        scores: {
                            desirability: { value: 5, max: 10, label: "DESIRABILITY" },
                            feasibility: { value: 6, max: 10, label: "FEASIBILITY" },
                            viability: { value: 6, max: 10, label: "VIABILITY" }
                        },
                        total: 17,
                        maxTotal: 30,
                        pros: [
                            "Rich and intuitive user interface",
                            "Advanced features (photos, geolocation)",
                            "Real-time push notifications",
                            "Local data storage capability"
                        ],
                        cons: [
                            "Requires smartphone (expensive for farmers)",
                            "Dependent on internet connectivity",
                            "Higher learning curve",
                            "Complex maintenance and updates"
                        ],
                        openEpiIntegration: "REST API to retrieve pest predictions and weather data",
                        hackathonFeasibility: "Complex for 48h hackathon - requires native mobile development"
                    },
                    {
                        id: "whatsapp-bot",
                        name: "WhatsApp Bot",
                        icon: "fab fa-whatsapp",
                        scores: {
                            desirability: { value: 9, max: 10, label: "DESIRABILITY" },
                            feasibility: { value: 10, max: 10, label: "FEASIBILITY" },
                            viability: { value: 9, max: 10, label: "VIABILITY" }
                        },
                        total: 28,
                        maxTotal: 30,
                        pros: [
                            "Familiar platform for 85% of farmers",
                            "Rich messaging (text, audio, images, videos)",
                            "Intuitive conversational interface",
                            "TextBee SMS integration as fallback",
                            "No app installation needed",
                            "Native multilingual support"
                        ],
                        cons: [
                            "Requires internet connection (mitigated by SMS fallback)",
                            "WhatsApp Business API costs (offset by efficiency)",
                            "Dependency on Meta/WhatsApp"
                        ],
                        openEpiIntegration: "OpenEPI Webhook → AI Processing → WhatsApp + TextBee SMS Broadcasting",
                        hackathonFeasibility: "Optimal for hackathon - mature APIs, complete documentation, rich ecosystem",
                        winner: true
                    },
                    {
                        id: "textbee-sms",
                        name: "TextBee SMS",
                        icon: "fas fa-sms",
                        scores: {
                            desirability: { value: 7, max: 10, label: "DESIRABILITY" },
                            feasibility: { value: 8, max: 10, label: "FEASIBILITY" },
                            viability: { value: 7, max: 10, label: "VIABILITY" }
                        },
                        total: 22,
                        maxTotal: 30,
                        pros: [
                            "Compatible with ALL phones",
                            "Works without internet",
                            "Very low cost with TextBee",
                            "Excellent as fallback system"
                        ],
                        cons: [
                            "Limited interface (text only)",
                            "No multimedia",
                            "Basic user experience",
                            "Character limitations (160 max)",
                            "No advanced interactivity"
                        ],
                        openEpiIntegration: "TextBee API for automated SMS broadcasting complementing WhatsApp Bot",
                        hackathonFeasibility: "Good as fallback solution - simple integration with WhatsApp Bot",
                        recommended: false
                    }
                ],
                recommendation: {
                    title: "HACKATHON RECOMMENDATION",
                    winner: "WhatsApp Bot",
                    reason: "WhatsApp Bot is the winning solution with 28/30 points. It combines excellent technical feasibility (10/10), strong desirability (9/10) and solid economic viability (9/10). TextBee SMS integration as fallback ensures universal accessibility.",
                    implementation: "Development with Node.js + WhatsApp Business API + TextBee SMS, OpenEPI integration for early warnings, deployment on Cocoa, Maize, Cashew and Rubber crops in Benin and Côte d'Ivoire."
                }
            }
        };
    }

    render(language = 'fr') {
        const data = this.data[language];
        
        return `
            <div class="analysis-comparison">
                <div class="analysis-intro">
                    <p class="analysis-subtitle">${data.subtitle}</p>
                </div>
                
                <div class="solutions-grid">
                    ${data.solutions.map(solution => this.renderSolutionCard(solution, language)).join('')}
                </div>
                
                <div class="recommendation-section">
                    <h3>${data.recommendation.title}</h3>
                    <div class="recommendation-content">
                        <div class="winner-announcement">
                            <i class="fas fa-trophy"></i>
                            <span class="winner-name">${data.recommendation.winner}</span>
                        </div>
                        <p class="recommendation-reason">${data.recommendation.reason}</p>
                        <div class="implementation-note">
                            <h4>Implémentation recommandée :</h4>
                            <p>${data.recommendation.implementation}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderSolutionCard(solution, language) {
        const scoreClass = (value) => {
            if (value >= 8) return 'score-high';
            if (value >= 6) return 'score-medium';
            return 'score-low';
        };

        const badgeClass = solution.winner ? 'winner' : (solution.recommended ? 'recommended' : '');
        const badge = solution.winner ?
            (language === 'fr' ? 'SOLUTION GAGNANTE' : 'WINNING SOLUTION') :
            (solution.recommended ?
                (language === 'fr' ? 'Recommandé' : 'Recommended') :
                '');

        return `
            <div class="solution-card ${badgeClass}">
                <div class="solution-header">
                    <i class="${solution.icon}"></i>
                    <h3>${solution.name}</h3>
                    ${badge ? `<span class="${badgeClass}-badge">${badge}</span>` : ''}
                </div>
                
                <div class="solution-scores">
                    <div class="score-item">
                        <span class="score-label">${solution.scores.desirability.label}</span>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(solution.scores.desirability.value / solution.scores.desirability.max) * 100}%"></div>
                            <span class="score-value">${solution.scores.desirability.value}/${solution.scores.desirability.max}</span>
                        </div>
                    </div>
                    
                    <div class="score-item">
                        <span class="score-label">${solution.scores.feasibility.label}</span>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(solution.scores.feasibility.value / solution.scores.feasibility.max) * 100}%"></div>
                            <span class="score-value">${solution.scores.feasibility.value}/${solution.scores.feasibility.max}</span>
                        </div>
                    </div>
                    
                    <div class="score-item">
                        <span class="score-label">${solution.scores.viability.label}</span>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${(solution.scores.viability.value / solution.scores.viability.max) * 100}%"></div>
                            <span class="score-value">${solution.scores.viability.value}/${solution.scores.viability.max}</span>
                        </div>
                    </div>
                    
                    <div class="total-score ${badgeClass}">
                        <span>SCORE TOTAL: ${solution.total}/${solution.maxTotal}</span>
                    </div>
                </div>
                
                <div class="pros-cons-section">
                    <div class="pros-cons">
                        <div class="pros">
                            <h4><i class="fas fa-plus-circle"></i> ${language === 'fr' ? 'POUR' : 'PROS'}</h4>
                            <ul>
                                ${solution.pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="cons">
                            <h4><i class="fas fa-minus-circle"></i> ${language === 'fr' ? 'CONTRE' : 'CONS'}</h4>
                            <ul>
                                ${solution.cons.map(con => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="openepi-integration">
                    <h5><i class="fas fa-plug"></i> ${language === 'fr' ? 'Intégration OpenEPI' : 'OpenEPI Integration'}</h5>
                    <p>${solution.openEpiIntegration}</p>
                </div>

                <div class="hackathon-context">
                    <h5><i class="fas fa-code"></i> ${language === 'fr' ? 'Faisabilité Hackathon' : 'Hackathon Feasibility'}</h5>
                    <p>${solution.hackathonFeasibility}</p>
                </div>
            </div>
        `;
    }

    getData(language = 'fr') {
        return this.data[language];
    }

    updateContent(container, language = 'fr') {
        if (container) {
            container.innerHTML = this.render(language);
        }
    }
}

// Export for use in content loader
window.AnalysisContent = AnalysisContent;
