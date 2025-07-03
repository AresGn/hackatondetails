// ===== WHATSAPP BOT SOLUTION CONTENT COMPONENT =====

class WhatsAppContent {
    constructor() {
        this.data = {
            fr: {
                title: "Solution WhatsApp Bot - Architecture Technique",
                subtitle: "Bot intelligent pour alertes et conseils agricoles",
                overview: {
                    title: "Vue d'ensemble",
                    description: "Solution moderne utilisant WhatsApp Business API pour fournir des alertes personnalisées, conseils agricoles et support interactif aux agriculteurs via une plateforme qu'ils connaissent déjà.",
                    advantages: [
                        { icon: "fab fa-whatsapp", text: "Plateforme familière" },
                        { icon: "fas fa-images", text: "Support multimédia" },
                        { icon: "fas fa-robot", text: "Intelligence artificielle" },
                        { icon: "fas fa-users", text: "Groupes communautaires" },
                        { icon: "fas fa-language", text: "Messages vocaux" },
                        { icon: "fas fa-chart-line", text: "Analytics avancées" }
                    ]
                },
                architecture: {
                    title: "Architecture du Système",
                    components: [
                        {
                            name: "WhatsApp Business API",
                            description: "Interface officielle pour l'envoi de messages",
                            tech: "Meta Business API",
                            icon: "fab fa-whatsapp"
                        },
                        {
                            name: "Bot Engine",
                            description: "Logique conversationnelle et traitement NLP",
                            tech: "Node.js + Dialogflow",
                            icon: "fas fa-robot"
                        },
                        {
                            name: "Base de Données",
                            description: "Profils utilisateurs et historique conversations",
                            tech: "PostgreSQL",
                            icon: "fas fa-database"
                        },
                        {
                            name: "Media Storage",
                            description: "Stockage images, audios et documents",
                            tech: "AWS S3",
                            icon: "fas fa-cloud"
                        }
                    ]
                },
                features: {
                    title: "Fonctionnalités Clés",
                    categories: [
                        {
                            name: "Alertes Intelligentes",
                            icon: "fas fa-bell",
                            items: [
                                "Alertes météo personnalisées",
                                "Détection précoce ravageurs",
                                "Recommandations de traitement",
                                "Calendrier agricole adapté"
                            ]
                        },
                        {
                            name: "Support Interactif",
                            icon: "fas fa-comments",
                            items: [
                                "Chat bot 24/7",
                                "Reconnaissance d'images",
                                "Messages vocaux",
                                "Support multilingue"
                            ]
                        },
                        {
                            name: "Communauté",
                            icon: "fas fa-users",
                            items: [
                                "Groupes par région",
                                "Partage d'expériences",
                                "Marketplace local",
                                "Formation collective"
                            ]
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
                                { name: "PostgreSQL", description: "Base de données relationnelle" },
                                { name: "Prisma", description: "ORM moderne" }
                            ]
                        },
                        {
                            name: "AI & NLP",
                            icon: "fas fa-brain",
                            technologies: [
                                { name: "Dialogflow", description: "Plateforme conversationnelle" },
                                { name: "Google Vision", description: "Reconnaissance d'images" },
                                { name: "Google Translate", description: "Traduction automatique" },
                                { name: "TensorFlow", description: "Machine learning" }
                            ]
                        },
                        {
                            name: "Infrastructure",
                            icon: "fas fa-cloud",
                            technologies: [
                                { name: "Google Cloud", description: "Hébergement cloud" },
                                { name: "AWS S3", description: "Stockage fichiers" },
                                { name: "Redis", description: "Cache et sessions" },
                                { name: "Docker", description: "Conteneurisation" }
                            ]
                        }
                    ]
                },
                workflow: {
                    title: "Flux Conversationnel",
                    steps: [
                        {
                            number: 1,
                            title: "Inscription",
                            description: "L'agriculteur s'inscrit via WhatsApp avec ses informations de base",
                            icon: "fas fa-user-plus"
                        },
                        {
                            number: 2,
                            title: "Profil Agricole",
                            description: "Configuration du profil : cultures, localisation, préférences",
                            icon: "fas fa-seedling"
                        },
                        {
                            number: 3,
                            title: "Alertes Automatiques",
                            description: "Réception d'alertes personnalisées basées sur OpenEPI",
                            icon: "fas fa-bell"
                        },
                        {
                            number: 4,
                            title: "Interaction Bot",
                            description: "Questions, photos de cultures, demandes de conseils",
                            icon: "fas fa-comments"
                        },
                        {
                            number: 5,
                            title: "Suivi & Analytics",
                            description: "Analyse des interactions et amélioration continue",
                            icon: "fas fa-chart-line"
                        }
                    ]
                },
                implementation: {
                    title: "Plan d'Implémentation Hackathon",
                    phases: [
                        {
                            phase: "Phase 1 (8h)",
                            title: "Setup & Webhook",
                            tasks: [
                                "Configuration WhatsApp Business API",
                                "Setup webhook et authentification",
                                "Tests de connectivité",
                                "Interface de base"
                            ]
                        },
                        {
                            phase: "Phase 2 (16h)",
                            title: "Bot Logic",
                            tasks: [
                                "Développement logique conversationnelle",
                                "Intégration Dialogflow",
                                "Gestion des commandes de base",
                                "Tests conversationnels"
                            ]
                        },
                        {
                            phase: "Phase 3 (16h)",
                            title: "OpenEPI Integration",
                            tasks: [
                                "Intégration API OpenEPI",
                                "Système d'alertes automatiques",
                                "Personnalisation par profil",
                                "Tests d'alertes"
                            ]
                        },
                        {
                            phase: "Phase 4 (8h)",
                            title: "Polish & Demo",
                            tasks: [
                                "Interface d'administration",
                                "Analytics de base",
                                "Documentation",
                                "Préparation démo"
                            ]
                        }
                    ]
                }
            },
            en: {
                title: "WhatsApp Bot Solution - Technical Architecture",
                subtitle: "Intelligent bot for agricultural alerts and advice",
                // English translations would continue here...
            }
        };
    }

    render(language = 'fr') {
        const data = this.data[language];
        
        return `
            <div class="whatsapp-solution">
                <div class="solution-overview">
                    <div class="overview-content">
                        <p class="overview-description">${data.overview.description}</p>
                        <div class="advantages-grid">
                            ${data.overview.advantages.map(advantage => `
                                <div class="advantage-item whatsapp-theme">
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
                            <div class="architecture-component whatsapp-theme">
                                <div class="component-icon">
                                    <i class="${component.icon}"></i>
                                </div>
                                <div class="component-details">
                                    <h4>${component.name}</h4>
                                    <p class="component-description">${component.description}</p>
                                    <span class="component-tech whatsapp-tech">${component.tech}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="features-section">
                    <h3>${data.features.title}</h3>
                    <div class="features-grid">
                        ${data.features.categories.map(category => `
                            <div class="feature-category whatsapp-theme">
                                <div class="category-header whatsapp-header">
                                    <i class="${category.icon}"></i>
                                    <h4>${category.name}</h4>
                                </div>
                                <div class="feature-items">
                                    ${category.items.map(item => `
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>${item}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="workflow-section">
                    <h3>${data.workflow.title}</h3>
                    <div class="workflow-steps">
                        ${data.workflow.steps.map(step => `
                            <div class="workflow-step whatsapp-theme">
                                <div class="step-number whatsapp-number">${step.number}</div>
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
                            <div class="tech-category whatsapp-theme">
                                <div class="category-header whatsapp-header">
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
                            <div class="implementation-phase whatsapp-theme">
                                <div class="phase-header whatsapp-header">
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
window.WhatsAppContent = WhatsAppContent;
