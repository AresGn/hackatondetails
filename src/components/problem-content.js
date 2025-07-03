// ===== PROBLEM STATEMENT CONTENT COMPONENT =====

class ProblemContent extends BaseComponent {
    constructor() {
        super();
        this.containerId = 'problem-content';
    }

    // Override from BaseComponent
    onLanguageChanged(language) {
        this.refreshContent();
    }

    // Override from BaseComponent
    refreshContent() {
        const container = document.getElementById(this.containerId);
        if (container) {
            container.innerHTML = this.render();
        }
    }

    render() {
        return `
            <div class="problem-framework">
                <div class="framework-header">
                    <h2>${this.t('problem.title')}</h2>
                </div>
                
                <div class="problem-flow">
                    <!-- User Section -->
                    <div class="problem-section user-section">
                        <div class="section-label">${this.t('problem.user_label')}</div>
                        <div class="section-content">
                            <p class="user-description">${this.t('problem.user_content')}</p>
                            
                            <div class="persona-card">
                                <div class="persona-header">
                                    <div class="persona-avatar">
                                        <i class="fas fa-user-circle"></i>
                                    </div>
                                    <div class="persona-info">
                                        <h3>${this.t('problem.persona_name')}</h3>
                                        <p>${this.t('problem.persona_age')} • ${this.t('problem.persona_location')}</p>
                                    </div>
                                </div>
                                <div class="persona-details">
                                    <div class="detail-item">
                                        <i class="fas fa-seedling"></i>
                                        <span>${this.t('problem.persona_details.farm')}</span>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-users"></i>
                                        <span>${this.t('problem.persona_details.family')}</span>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-mobile-alt"></i>
                                        <span>${this.t('problem.persona_details.phone')}</span>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-wallet"></i>
                                        <span>${this.t('problem.persona_details.income')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Connector -->
                    <div class="flow-connector">
                        <div class="connector-text">${this.t('problem.connector_need')}</div>
                        <div class="connector-arrow">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                    </div>

                    <!-- Need Section -->
                    <div class="problem-section need-section">
                        <div class="section-label">${this.t('problem.need_label')}</div>
                        <div class="section-content">
                            <p class="need-description">${this.t('problem.need_content')}</p>
                            
                            <div class="features-grid">
                                <div class="feature-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${this.t('problem.need_features.early_detection')}</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-mobile-alt"></i>
                                    <span>${this.t('problem.need_features.accessible')}</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-language"></i>
                                    <span>${this.t('problem.need_features.local_language')}</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-dollar-sign"></i>
                                    <span>${this.t('problem.need_features.affordable')}</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-satellite"></i>
                                    <span>${this.t('problem.need_features.weather_data')}</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-users"></i>
                                    <span>${this.t('problem.need_features.community_support')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Connector -->
                    <div class="flow-connector">
                        <div class="connector-text">${this.t('problem.connector_because')}</div>
                        <div class="connector-arrow">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                    </div>

                    <!-- Insight Section -->
                    <div class="problem-section insight-section">
                        <div class="section-label">${this.t('problem.insight_label')}</div>
                        <div class="section-content">
                            <p class="insight-description">${this.t('problem.insight_content')}</p>
                            
                            <div class="vulnerabilities-grid">
                                <div class="vulnerability-card">
                                    <div class="vulnerability-icon">
                                        <i class="fas fa-wifi"></i>
                                    </div>
                                    <h4>${this.t('problem.vulnerabilities.tech_access.title')}</h4>
                                    <p>${this.t('problem.vulnerabilities.tech_access.description')}</p>
                                </div>
                                <div class="vulnerability-card">
                                    <div class="vulnerability-icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                    <h4>${this.t('problem.vulnerabilities.surveillance.title')}</h4>
                                    <p>${this.t('problem.vulnerabilities.surveillance.description')}</p>
                                </div>
                                <div class="vulnerability-card">
                                    <div class="vulnerability-icon">
                                        <i class="fas fa-graduation-cap"></i>
                                    </div>
                                    <h4>${this.t('problem.vulnerabilities.training.title')}</h4>
                                    <p>${this.t('problem.vulnerabilities.training.description')}</p>
                                </div>
                                <div class="vulnerability-card">
                                    <div class="vulnerability-icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <h4>${this.t('problem.vulnerabilities.economic.title')}</h4>
                                    <p>${this.t('problem.vulnerabilities.economic.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Export for use in content loader
window.ProblemContent = ProblemContent;
