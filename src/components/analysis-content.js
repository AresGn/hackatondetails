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
                            desirability: { value: 8, max: 10, label: "DÉSIRABILITÉ" },
                            feasibility: { value: 9, max: 10, label: "FAISABILITÉ" },
                            viability: { value: 8, max: 10, label: "VIABILITÉ" }
                        },
                        total: 25,
                        maxTotal: 30,
                        pros: [
                            "Plateforme familière pour les utilisateurs",
                            "Fonctionne sur tous types de téléphones",
                            "Messagerie riche (texte, audio, images)",
                            "Pas besoin d'installation d'application"
                        ],
                        cons: [
                            "Dépendant de WhatsApp Business API",
                            "Coûts potentiels pour les messages",
                            "Limitations de l'interface conversationnelle",
                            "Nécessite une connexion internet"
                        ],
                        openEpiIntegration: "Webhook pour recevoir les alertes et bot pour diffuser aux agriculteurs",
                        hackathonFeasibility: "Très faisable - APIs bien documentées et exemples disponibles",
                        recommended: true
                    },
                    {
                        id: "ussd-sms",
                        name: "USSD/SMS",
                        icon: "fas fa-sms",
                        scores: {
                            desirability: { value: 9, max: 10, label: "DÉSIRABILITÉ" },
                            feasibility: { value: 10, max: 10, label: "FAISABILITÉ" },
                            viability: { value: 9, max: 10, label: "VIABILITÉ" }
                        },
                        total: 28,
                        maxTotal: 30,
                        pros: [
                            "Compatible avec TOUS les téléphones",
                            "Fonctionne sans internet",
                            "Coût très faible",
                            "Interface simple et accessible"
                        ],
                        cons: [
                            "Interface limitée (texte uniquement)",
                            "Pas de multimédia",
                            "Expérience utilisateur basique",
                            "Limitations de caractères"
                        ],
                        openEpiIntegration: "API pour récupérer données et système de diffusion SMS automatisé",
                        hackathonFeasibility: "Parfait pour hackathon - technologies simples et robustes",
                        winner: true
                    }
                ],
                recommendation: {
                    title: "RECOMMANDATION HACKATHON",
                    winner: "USSD/SMS",
                    reason: "La solution USSD/SMS est recommandée pour le hackathon en raison de sa faisabilité technique élevée (10/10) et de son accessibilité universelle. Elle peut être développée rapidement en 48h avec des technologies éprouvées.",
                    implementation: "Développement avec Node.js + Express pour l'API, intégration OpenEPI, et partenariat opérateur télécom pour USSD/SMS."
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
                            desirability: { value: 8, max: 10, label: "DESIRABILITY" },
                            feasibility: { value: 9, max: 10, label: "FEASIBILITY" },
                            viability: { value: 8, max: 10, label: "VIABILITY" }
                        },
                        total: 25,
                        maxTotal: 30,
                        pros: [
                            "Familiar platform for users",
                            "Works on all phone types",
                            "Rich messaging (text, audio, images)",
                            "No app installation needed"
                        ],
                        cons: [
                            "Dependent on WhatsApp Business API",
                            "Potential costs for messages",
                            "Conversational interface limitations",
                            "Requires internet connection"
                        ],
                        openEpiIntegration: "Webhook to receive alerts and bot to broadcast to farmers",
                        hackathonFeasibility: "Very feasible - well-documented APIs and examples available",
                        recommended: true
                    },
                    {
                        id: "ussd-sms",
                        name: "USSD/SMS",
                        icon: "fas fa-sms",
                        scores: {
                            desirability: { value: 9, max: 10, label: "DESIRABILITY" },
                            feasibility: { value: 10, max: 10, label: "FEASIBILITY" },
                            viability: { value: 9, max: 10, label: "VIABILITY" }
                        },
                        total: 28,
                        maxTotal: 30,
                        pros: [
                            "Compatible with ALL phones",
                            "Works without internet",
                            "Very low cost",
                            "Simple and accessible interface"
                        ],
                        cons: [
                            "Limited interface (text only)",
                            "No multimedia",
                            "Basic user experience",
                            "Character limitations"
                        ],
                        openEpiIntegration: "API to retrieve data and automated SMS broadcasting system",
                        hackathonFeasibility: "Perfect for hackathon - simple and robust technologies",
                        winner: true
                    }
                ],
                recommendation: {
                    title: "HACKATHON RECOMMENDATION",
                    winner: "USSD/SMS",
                    reason: "The USSD/SMS solution is recommended for the hackathon due to its high technical feasibility (10/10) and universal accessibility. It can be developed quickly in 48h with proven technologies.",
                    implementation: "Development with Node.js + Express for API, OpenEPI integration, and telecom operator partnership for USSD/SMS."
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
        const badge = solution.winner ? 'Gagnant' : (solution.recommended ? 'Recommandé' : '');

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
                            <h4><i class="fas fa-plus-circle"></i> POUR</h4>
                            <ul>
                                ${solution.pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="cons">
                            <h4><i class="fas fa-minus-circle"></i> CONTRE</h4>
                            <ul>
                                ${solution.cons.map(con => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="openepi-integration">
                    <h5><i class="fas fa-plug"></i> Intégration OpenEPI</h5>
                    <p>${solution.openEpiIntegration}</p>
                </div>
                
                <div class="hackathon-context">
                    <h5><i class="fas fa-code"></i> Faisabilité Hackathon</h5>
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
