// ===== PROBLEM STATEMENT CONTENT COMPONENT =====

class ProblemContent {
    constructor() {
        this.data = {
            fr: {
                title: "Cadre de Définition du Problème",
                user: {
                    label: "UTILISATEUR",
                    content: "Petits agriculteurs comme Ablawa, productrice de maïs de 42 ans en zone rurale du Toqui gère 3 hectares et soutient 5 enfants",
                    persona: {
                        name: "Ablawa",
                        age: "42 ans",
                        location: "Togo, Zone rurale",
                        details: [
                            { icon: "fas fa-seedling", text: "3 hectares de maïs" },
                            { icon: "fas fa-users", text: "5 enfants à charge" },
                            { icon: "fas fa-mobile-alt", text: "Téléphone basique" },
                            { icon: "fas fa-wallet", text: "Revenus limités" }
                        ]
                    }
                },
                need: {
                    label: "BESOIN",
                    content: "un système d'alerte précoce et de détection des ravageurs accessible pour identifier les menaces comme la chenille légionnaire avant qu'elles causent des pertes massives de récolte",
                    features: [
                        { icon: "fas fa-clock", text: "Détection précoce" },
                        { icon: "fas fa-mobile-alt", text: "Accessible sur téléphone basique" },
                        { icon: "fas fa-language", text: "Interface en langue locale" },
                        { icon: "fas fa-dollar-sign", text: "Coût abordable" },
                        { icon: "fas fa-satellite", text: "Données météo intégrées" },
                        { icon: "fas fa-users", text: "Support communautaire" }
                    ]
                },
                insight: {
                    label: "INSIGHT",
                    content: "ils manquent d'accessibilité technologique, de protocoles de surveillance systématiques et de personnel formé pour la surveillance de la santé des cultures, les laissant vulnérables aux épidémies de ravageurs imprévues qui peuvent détruire 33% de leur récolte et menacer la sécurité alimentaire et les revenus de leur famille",
                    vulnerabilities: [
                        {
                            icon: "fas fa-wifi",
                            title: "Accessibilité technologique limitée",
                            description: "Pas d'accès internet fiable, téléphones basiques uniquement"
                        },
                        {
                            icon: "fas fa-search",
                            title: "Absence de protocoles de surveillance",
                            description: "Pas de système structuré pour surveiller la santé des cultures"
                        },
                        {
                            icon: "fas fa-graduation-cap",
                            title: "Personnel non formé",
                            description: "Manque de formation sur la détection précoce des ravageurs"
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Impact économique critique",
                            description: "33% de pertes de récolte menacent la sécurité alimentaire et les revenus"
                        }
                    ]
                },
                connectors: {
                    need: "A BESOIN DE",
                    because: "PARCE QUE"
                }
            },
            en: {
                title: "Problem Framing Template",
                user: {
                    label: "USER",
                    content: "Smallholder farmers like Ablawa, a 42-year-old maize producer in rural Togo who manages 3 hectares and supports 5 children",
                    persona: {
                        name: "Ablawa",
                        age: "42 years old",
                        location: "Togo, Rural area",
                        details: [
                            { icon: "fas fa-seedling", text: "3 hectares of maize" },
                            { icon: "fas fa-users", text: "5 children to support" },
                            { icon: "fas fa-mobile-alt", text: "Basic phone" },
                            { icon: "fas fa-wallet", text: "Limited income" }
                        ]
                    }
                },
                need: {
                    label: "NEED",
                    content: "an accessible early warning and pest detection system to identify threats like fall armyworm before they cause massive crop losses",
                    features: [
                        { icon: "fas fa-clock", text: "Early detection" },
                        { icon: "fas fa-mobile-alt", text: "Accessible on basic phone" },
                        { icon: "fas fa-language", text: "Local language interface" },
                        { icon: "fas fa-dollar-sign", text: "Affordable cost" },
                        { icon: "fas fa-satellite", text: "Integrated weather data" },
                        { icon: "fas fa-users", text: "Community support" }
                    ]
                },
                insight: {
                    label: "INSIGHT",
                    content: "they lack technological accessibility, systematic monitoring protocols, and trained personnel for crop health surveillance, leaving them vulnerable to unforeseen pest outbreaks that can destroy 33% of their harvest and threaten their family's food security and income",
                    vulnerabilities: [
                        {
                            icon: "fas fa-wifi",
                            title: "Limited technological accessibility",
                            description: "No reliable internet access, basic phones only"
                        },
                        {
                            icon: "fas fa-search",
                            title: "Absence of monitoring protocols",
                            description: "No structured system for crop health surveillance"
                        },
                        {
                            icon: "fas fa-graduation-cap",
                            title: "Untrained personnel",
                            description: "Lack of training on early pest detection"
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Critical economic impact",
                            description: "33% crop losses threaten food security and income"
                        }
                    ]
                },
                connectors: {
                    need: "NEED",
                    because: "BECAUSE"
                }
            }
        };
    }

    render(language = 'fr') {
        const data = this.data[language];
        
        return `
            <div class="problem-framework">
                <div class="framework-item user-section">
                    <div class="framework-label">
                        <span>${data.user.label}</span>
                    </div>
                    <div class="framework-content">
                        <div class="user-persona">
                            <div class="persona-image">
                                <i class="fas fa-user-circle"></i>
                            </div>
                            <div class="persona-details">
                                <h3>${data.user.persona.name}</h3>
                                <p class="persona-age">${data.user.persona.age}</p>
                                <p class="persona-location">${data.user.persona.location}</p>
                                <div class="persona-stats">
                                    ${data.user.persona.details.map(detail => `
                                        <div class="stat">
                                            <i class="${detail.icon}"></i>
                                            <span>${detail.text}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="user-description">
                            <p>${data.user.content}</p>
                        </div>
                    </div>
                </div>
                
                <div class="framework-connector">
                    <span>${data.connectors.need}</span>
                </div>
                
                <div class="framework-item need-section">
                    <div class="framework-label">
                        <span>${data.need.label}</span>
                    </div>
                    <div class="framework-content">
                        <div class="need-description">
                            <h4>Système d'alerte précoce accessible</h4>
                            <p>${data.need.content}</p>
                            <div class="need-features">
                                ${data.need.features.map(feature => `
                                    <div class="feature">
                                        <i class="${feature.icon}"></i>
                                        <span>${feature.text}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="framework-connector">
                    <span>${data.connectors.because}</span>
                </div>
                
                <div class="framework-item insight-section">
                    <div class="framework-label">
                        <span>${data.insight.label}</span>
                    </div>
                    <div class="framework-content">
                        <div class="insight-analysis">
                            <h4>Vulnérabilités identifiées</h4>
                            <p class="insight-summary">${data.insight.content}</p>
                            <div class="vulnerability-grid">
                                ${data.insight.vulnerabilities.map(vuln => `
                                    <div class="vulnerability-item">
                                        <i class="${vuln.icon}"></i>
                                        <h5>${vuln.title}</h5>
                                        <p>${vuln.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Method to get data for specific language
    getData(language = 'fr') {
        return this.data[language];
    }

    // Method to update content dynamically
    updateContent(container, language = 'fr') {
        if (container) {
            container.innerHTML = this.render(language);
        }
    }
}

// Export for use in content loader
window.ProblemContent = ProblemContent;
