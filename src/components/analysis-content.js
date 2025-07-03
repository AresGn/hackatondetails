// ===== IDEAS ANALYSIS CONTENT COMPONENT =====

class AnalysisContent extends BaseComponent {
    constructor() {
        super();
        this.containerId = 'analysis-content';
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
            <div class="analysis-framework">
                <div class="analysis-header">
                    <h2>${this.t('analysis.title')}</h2>
                    <p class="analysis-subtitle">${this.t('analysis.subtitle')}</p>
                </div>

                <div class="criteria-legend">
                    <div class="criterion">
                        <span class="criterion-label desirability">${this.t('analysis.criteria.desirability')}</span>
                    </div>
                    <div class="criterion">
                        <span class="criterion-label feasibility">${this.t('analysis.criteria.feasibility')}</span>
                    </div>
                    <div class="criterion">
                        <span class="criterion-label viability">${this.t('analysis.criteria.viability')}</span>
                    </div>
                </div>

                <div class="solutions-comparison">
                    <!-- Mobile App Solution -->
                    <div class="solution-card">
                        <div class="solution-header">
                            <div class="solution-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3>${this.t('analysis.solutions.mobile_app.name')}</h3>
                        </div>

                        <div class="solution-scores">
                            <div class="score-item desirability">
                                <span class="score-label">${this.t('analysis.criteria.desirability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 50%"></div>
                                    <span class="score-value">5/10</span>
                                </div>
                            </div>
                            <div class="score-item feasibility">
                                <span class="score-label">${this.t('analysis.criteria.feasibility')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 60%"></div>
                                    <span class="score-value">6/10</span>
                                </div>
                            </div>
                            <div class="score-item viability">
                                <span class="score-label">${this.t('analysis.criteria.viability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 60%"></div>
                                    <span class="score-value">6/10</span>
                                </div>
                            </div>
                        </div>

                        <div class="solution-details">
                            <div class="pros-cons">
                                <div class="pros">
                                    <h4>${this.t('analysis.labels.pros')}</h4>
                                    <ul>
                                        <li>Interface utilisateur riche et intuitive</li>
                                        <li>Fonctionnalités avancées (photos, géolocalisation)</li>
                                        <li>Notifications push en temps réel</li>
                                        <li>Capacité de stockage local des données</li>
                                    </ul>
                                </div>
                                <div class="cons">
                                    <h4>${this.t('analysis.labels.cons')}</h4>
                                    <ul>
                                        <li>Nécessite un smartphone (coûteux pour les agriculteurs)</li>
                                        <li>Dépendant de la connectivité internet</li>
                                        <li>Courbe d'apprentissage plus élevée</li>
                                        <li>Maintenance et mises à jour complexes</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="total-score">
                                <span class="score-label">${this.t('analysis.labels.score')}</span>
                                <span class="score-value">17/30</span>
                            </div>
                        </div>
                    </div>

                    <!-- WhatsApp Bot Solution -->
                    <div class="solution-card winner">
                        <div class="solution-header">
                            <div class="solution-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <h3>${this.t('analysis.solutions.whatsapp_bot.name')}</h3>
                            <div class="winner-badge">
                                <i class="fas fa-crown"></i>
                                <span>${this.t('analysis.labels.recommendation')}</span>
                            </div>
                        </div>

                        <div class="solution-scores">
                            <div class="score-item desirability">
                                <span class="score-label">${this.t('analysis.criteria.desirability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 90%"></div>
                                    <span class="score-value">9/10</span>
                                </div>
                            </div>
                            <div class="score-item feasibility">
                                <span class="score-label">${this.t('analysis.criteria.feasibility')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 100%"></div>
                                    <span class="score-value">10/10</span>
                                </div>
                            </div>
                            <div class="score-item viability">
                                <span class="score-label">${this.t('analysis.criteria.viability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 90%"></div>
                                    <span class="score-value">9/10</span>
                                </div>
                            </div>
                        </div>

                        <div class="solution-details">
                            <div class="pros-cons">
                                <div class="pros">
                                    <h4>${this.t('analysis.labels.pros')}</h4>
                                    <ul>
                                        <li>Plateforme familière pour 85% des agriculteurs</li>
                                        <li>Messagerie riche (texte, audio, images, vidéos)</li>
                                        <li>Interface conversationnelle intuitive</li>
                                        <li>Fonctionne sur téléphones basiques</li>
                                        <li>Pas d'installation d'app requise</li>
                                        <li>Support multilingue natif</li>
                                    </ul>
                                </div>
                                <div class="cons">
                                    <h4>${this.t('analysis.labels.cons')}</h4>
                                    <ul>
                                        <li>Dépendant de la disponibilité de WhatsApp</li>
                                        <li>Limitations de l'API WhatsApp Business</li>
                                        <li>Coûts par message pour volumes élevés</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="total-score winner-score">
                                <span class="score-label">${this.t('analysis.labels.score')}</span>
                                <span class="score-value">28/30</span>
                            </div>
                        </div>
                    </div>

                    <!-- SMS System Solution -->
                    <div class="solution-card">
                        <div class="solution-header">
                            <div class="solution-icon">
                                <i class="fas fa-sms"></i>
                            </div>
                            <h3>${this.t('analysis.solutions.sms_system.name')}</h3>
                        </div>

                        <div class="solution-scores">
                            <div class="score-item desirability">
                                <span class="score-label">${this.t('analysis.criteria.desirability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 70%"></div>
                                    <span class="score-value">7/10</span>
                                </div>
                            </div>
                            <div class="score-item feasibility">
                                <span class="score-label">${this.t('analysis.criteria.feasibility')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 90%"></div>
                                    <span class="score-value">9/10</span>
                                </div>
                            </div>
                            <div class="score-item viability">
                                <span class="score-label">${this.t('analysis.criteria.viability')}</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: 80%"></div>
                                    <span class="score-value">8/10</span>
                                </div>
                            </div>
                        </div>

                        <div class="solution-details">
                            <div class="pros-cons">
                                <div class="pros">
                                    <h4>${this.t('analysis.labels.pros')}</h4>
                                    <ul>
                                        <li>Compatibilité universelle (100% des téléphones)</li>
                                        <li>Fonctionne sans internet</li>
                                        <li>Très faible coût</li>
                                        <li>Temps de réponse rapide</li>
                                        <li>Support multilingue</li>
                                        <li>Fiable et robuste</li>
                                    </ul>
                                </div>
                                <div class="cons">
                                    <h4>${this.t('analysis.labels.cons')}</h4>
                                    <ul>
                                        <li>Interface limitée (texte seulement)</li>
                                        <li>Pas de médias riches</li>
                                        <li>Expérience utilisateur basique</li>
                                        <li>Difficile de créer des interactions complexes</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="total-score">
                                <span class="score-label">${this.t('analysis.labels.score')}</span>
                                <span class="score-value">24/30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
