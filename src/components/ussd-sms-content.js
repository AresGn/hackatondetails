// ===== USSD/SMS SOLUTION CONTENT COMPONENT =====

class UssdSmsContent {
    constructor() {
        this.data = {
            fr: {
                title: "Solution USSD/SMS - Architecture Technique",
                subtitle: "Système d'alerte précoce accessible sur tous les téléphones",
                overview: {
                    title: "Vue d'ensemble",
                    description: "Solution robuste et universellement accessible utilisant les technologies USSD et SMS pour fournir des alertes de ravageurs aux agriculteurs, même avec des téléphones basiques et sans connexion internet.",
                    advantages: [
                        { icon: "fas fa-mobile-alt", text: "Compatible avec 100% des téléphones" },
                        { icon: "fas fa-wifi-slash", text: "Fonctionne sans internet" },
                        { icon: "fas fa-dollar-sign", text: "Coût très faible" },
                        { icon: "fas fa-clock", text: "Temps de réponse rapide" },
                        { icon: "fas fa-language", text: "Support multilingue" },
                        { icon: "fas fa-shield-alt", text: "Fiable et robuste" }
                    ]
                },
                architecture: {
                    title: "Architecture du Système",
                    components: [
                        {
                            name: "API OpenEPI",
                            description: "Source de données météorologiques et prédictions de ravageurs",
                            tech: "REST API",
                            icon: "fas fa-cloud"
                        },
                        {
                            name: "Serveur Backend",
                            description: "Traitement des données et logique métier",
                            tech: "Node.js + Express",
                            icon: "fas fa-server"
                        },
                        {
                            name: "Base de Données",
                            description: "Stockage des profils agriculteurs et historique",
                            tech: "MongoDB",
                            icon: "fas fa-database"
                        },
                        {
                            name: "Gateway USSD/SMS",
                            description: "Interface avec les opérateurs télécom",
                            tech: "Africa's Talking API",
                            icon: "fas fa-broadcast-tower"
                        }
                    ]
                },
                workflow: {
                    title: "Flux de Fonctionnement",
                    steps: [
                        {
                            number: 1,
                            title: "Collecte de Données",
                            description: "Récupération automatique des données OpenEPI (météo, prédictions ravageurs)",
                            icon: "fas fa-download"
                        },
                        {
                            number: 2,
                            title: "Analyse & Traitement",
                            description: "Analyse des risques par zone géographique et type de culture",
                            icon: "fas fa-brain"
                        },
                        {
                            number: 3,
                            title: "Génération d'Alertes",
                            description: "Création de messages personnalisés selon le profil agriculteur",
                            icon: "fas fa-exclamation-triangle"
                        },
                        {
                            number: 4,
                            title: "Diffusion USSD/SMS",
                            description: "Envoi automatique aux agriculteurs concernés",
                            icon: "fas fa-paper-plane"
                        },
                        {
                            number: 5,
                            title: "Interaction Utilisateur",
                            description: "Menu USSD pour consultation détaillée et conseils",
                            icon: "fas fa-user-check"
                        }
                    ]
                },
                techStack: {
                    title: "Stack Technologique",
                    categories: [
                        {
                            name: "Backend",
                            icon: "fas fa-server",
                            technologies: [
                                { name: "Node.js", description: "Runtime JavaScript" },
                                { name: "Express.js", description: "Framework web" },
                                { name: "MongoDB", description: "Base de données NoSQL" },
                                { name: "Mongoose", description: "ODM MongoDB" }
                            ]
                        },
                        {
                            name: "APIs & Services",
                            icon: "fas fa-plug",
                            technologies: [
                                { name: "OpenEPI API", description: "Données épidémiologiques" },
                                { name: "Africa's Talking", description: "Gateway USSD/SMS" },
                                { name: "OpenWeatherMap", description: "Données météo complémentaires" },
                                { name: "Google Translate", description: "Support multilingue" }
                            ]
                        },
                        {
                            name: "Infrastructure",
                            icon: "fas fa-cloud",
                            technologies: [
                                { name: "Heroku", description: "Hébergement cloud" },
                                { name: "MongoDB Atlas", description: "Base de données cloud" },
                                { name: "Redis", description: "Cache et sessions" },
                                { name: "PM2", description: "Gestionnaire de processus" }
                            ]
                        }
                    ]
                },
                implementation: {
                    title: "Plan d'Implémentation Hackathon",
                    phases: [
                        {
                            phase: "Phase 1 (6h)",
                            title: "Setup & Architecture",
                            tasks: [
                                "Configuration environnement Node.js",
                                "Setup MongoDB et modèles de données",
                                "Intégration API OpenEPI",
                                "Tests de connectivité"
                            ]
                        },
                        {
                            phase: "Phase 2 (12h)",
                            title: "Core Backend",
                            tasks: [
                                "Développement API REST",
                                "Logique d'analyse des risques",
                                "Système de génération d'alertes",
                                "Tests unitaires"
                            ]
                        },
                        {
                            phase: "Phase 3 (18h)",
                            title: "USSD/SMS Integration",
                            tasks: [
                                "Intégration Africa's Talking",
                                "Développement menus USSD",
                                "Système d'envoi SMS",
                                "Tests avec numéros réels"
                            ]
                        },
                        {
                            phase: "Phase 4 (12h)",
                            title: "Finalisation",
                            tasks: [
                                "Interface d'administration",
                                "Documentation technique",
                                "Tests d'intégration",
                                "Préparation démo"
                            ]
                        }
                    ]
                }
            },
            en: {
                title: "USSD/SMS Solution - Technical Architecture",
                subtitle: "Early warning system accessible on all phones",
                overview: {
                    title: "Overview",
                    description: "Robust and universally accessible solution using USSD and SMS technologies to provide pest alerts to farmers, even with basic phones and no internet connection.",
                    advantages: [
                        { icon: "fas fa-mobile-alt", text: "Compatible with 100% of phones" },
                        { icon: "fas fa-wifi-slash", text: "Works without internet" },
                        { icon: "fas fa-dollar-sign", text: "Very low cost" },
                        { icon: "fas fa-clock", text: "Fast response time" },
                        { icon: "fas fa-language", text: "Multilingual support" },
                        { icon: "fas fa-shield-alt", text: "Reliable and robust" }
                    ]
                },
                // ... English translations would continue here
            }
        };
    }

    render(language = 'fr') {
        const data = this.data[language];
        
        return `
            <div class="ussd-sms-solution">
                <div class="solution-overview">
                    <div class="overview-content">
                        <p class="overview-description">${data.overview.description}</p>
                        <div class="advantages-grid">
                            ${data.overview.advantages.map(advantage => `
                                <div class="advantage-item">
                                    <i class="${advantage.icon}"></i>
                                    <span>${advantage.text}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="architecture-section">
                    <h3>${data.architecture.title}</h3>
                    <div class="architecture-grid">
                        ${data.architecture.components.map(component => `
                            <div class="architecture-component">
                                <div class="component-icon">
                                    <i class="${component.icon}"></i>
                                </div>
                                <div class="component-details">
                                    <h4>${component.name}</h4>
                                    <p class="component-description">${component.description}</p>
                                    <span class="component-tech">${component.tech}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="workflow-section">
                    <h3>${data.workflow.title}</h3>
                    <div class="workflow-steps">
                        ${data.workflow.steps.map(step => `
                            <div class="workflow-step">
                                <div class="step-number">${step.number}</div>
                                <div class="step-icon">
                                    <i class="${step.icon}"></i>
                                </div>
                                <div class="step-content">
                                    <h4>${step.title}</h4>
                                    <p>${step.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="tech-stack-section">
                    <h3>${data.techStack.title}</h3>
                    <div class="tech-categories">
                        ${data.techStack.categories.map(category => `
                            <div class="tech-category">
                                <div class="category-header">
                                    <i class="${category.icon}"></i>
                                    <h4>${category.name}</h4>
                                </div>
                                <div class="technologies-list">
                                    ${category.technologies.map(tech => `
                                        <div class="technology-item">
                                            <span class="tech-name">${tech.name}</span>
                                            <span class="tech-description">${tech.description}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="implementation-section">
                    <h3>${data.implementation.title}</h3>
                    <div class="implementation-phases">
                        ${data.implementation.phases.map(phase => `
                            <div class="implementation-phase">
                                <div class="phase-header">
                                    <span class="phase-label">${phase.phase}</span>
                                    <h4>${phase.title}</h4>
                                </div>
                                <div class="phase-tasks">
                                    ${phase.tasks.map(task => `
                                        <div class="task-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>${task}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
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
window.UssdSmsContent = UssdSmsContent;
