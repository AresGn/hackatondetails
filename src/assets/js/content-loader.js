// ===== CONTENT LOADER SYSTEM =====

class ContentLoader {
    constructor() {
        this.contentCache = new Map();
        this.loadingStates = new Map();
        this.init();
    }
    
    init() {
        // Listen for section changes
        document.addEventListener('sectionChanged', (e) => {
            this.loadSectionContent(e.detail.section);
        });
        
        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.refreshCurrentContent();
        });
    }
    
    async loadSectionContent(sectionId) {
        const container = document.getElementById(`${sectionId}-content`);
        if (!container) return;
        
        // Check if already loading
        if (this.loadingStates.get(sectionId)) {
            return;
        }
        
        // Check cache first
        const cachedContent = this.contentCache.get(`${sectionId}-${getCurrentLanguage()}`);
        if (cachedContent) {
            container.innerHTML = cachedContent;
            this.initializeInteractiveElements(container);
            return;
        }
        
        // Show loading state
        this.showLoading(container);
        this.loadingStates.set(sectionId, true);
        
        try {
            let content = '';
            
            switch (sectionId) {
                case 'problem':
                    content = await this.loadProblemContent();
                    break;
                case 'analysis':
                    content = await this.loadAnalysisContent();
                    break;
                case 'solutions':
                    content = await this.loadSolutionsContent();
                    break;
                case 'ussd-sms':
                    content = await this.loadUssdSmsContent();
                    break;
                case 'whatsapp':
                    content = await this.loadWhatsAppContent();
                    break;
                case 'ecosystem':
                    content = await this.loadEcosystemContent();
                    break;
                default:
                    content = '<p>Contenu en cours de développement...</p>';
            }
            
            // Cache the content
            this.contentCache.set(`${sectionId}-${getCurrentLanguage()}`, content);
            
            // Display content
            container.innerHTML = content;
            this.initializeInteractiveElements(container);
            
        } catch (error) {
            console.error(`Error loading content for ${sectionId}:`, error);
            this.showError(container);
        } finally {
            this.loadingStates.set(sectionId, false);
        }
    }
    
    showLoading(container) {
        container.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>${getTranslation('loading')}</p>
            </div>
        `;
    }
    
    showError(container) {
        container.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>${getTranslation('error')}</p>
                <button onclick="location.reload()" class="retry-btn">
                    ${getTranslation('retry')}
                </button>
            </div>
        `;
    }
    
    async loadProblemContent() {
        const lang = getCurrentLanguage();

        // Use the ProblemContent component if available
        if (window.ProblemContent) {
            const problemComponent = new window.ProblemContent();
            return problemComponent.render(lang);
        }

        // Fallback content if component not loaded
        return `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Chargement du contenu du problème...</p>
            </div>
        `;
    }
    
    async loadAnalysisContent() {
        const lang = getCurrentLanguage();

        // Use the AnalysisContent component if available
        if (window.AnalysisContent) {
            const analysisComponent = new window.AnalysisContent();
            return analysisComponent.render(lang);
        }

        // Fallback content if component not loaded
        return `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Chargement de l'analyse des solutions...</p>
            </div>
        `;
    }
    
    async loadSolutionsContent() {
        return `
            <div class="solutions-overview">
                <p>Sélectionnez une solution pour voir les détails techniques complets.</p>
            </div>
        `;
    }
    
    async loadUssdSmsContent() {
        const lang = getCurrentLanguage();

        // Use the UssdSmsContent component if available
        if (window.UssdSmsContent) {
            const ussdSmsComponent = new window.UssdSmsContent();
            return ussdSmsComponent.render(lang);
        }

        // Fallback content if component not loaded
        return `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Chargement de la solution USSD/SMS...</p>
            </div>
        `;
    }
    
    async loadWhatsAppContent() {
        const lang = getCurrentLanguage();

        // Use the WhatsAppContent component if available
        if (window.WhatsAppContent) {
            const whatsappComponent = new window.WhatsAppContent();
            return whatsappComponent.render(lang);
        }

        // Fallback content if component not loaded
        return `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Chargement de la solution WhatsApp Bot...</p>
            </div>
        `;
    }
    
    async loadEcosystemContent() {
        return `
            <div class="ecosystem-overview">
                <h3>${getTranslation('business_model')}</h3>
                <p>Vision complète de l'écosystème AgriBot...</p>
            </div>
        `;
    }
    
    initializeInteractiveElements(container) {
        // Initialize any interactive elements in the loaded content
        const buttons = container.querySelectorAll('button');
        const tabs = container.querySelectorAll('.tab-btn');
        
        // Add event listeners as needed
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.handleTabClick(e);
            });
        });
    }
    
    handleTabClick(e) {
        const tab = e.currentTarget;
        const tabId = tab.getAttribute('data-tab');
        
        // Update active tab
        const tabContainer = tab.closest('.solutions-tabs');
        if (tabContainer) {
            tabContainer.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        }
        
        // Load tab content
        this.loadTabContent(tabId);
    }
    
    async loadTabContent(tabId) {
        const container = document.getElementById('solutions-content');
        if (!container) return;
        
        let content = '';
        
        switch (tabId) {
            case 'ussd-sms':
                content = await this.loadUssdSmsContent();
                break;
            case 'whatsapp':
                content = await this.loadWhatsAppContent();
                break;
        }
        
        container.innerHTML = content;
        this.initializeInteractiveElements(container);
    }
    
    refreshCurrentContent() {
        // Clear cache and reload current section
        this.contentCache.clear();
        if (window.navigationManager) {
            const currentSection = window.navigationManager.getCurrentSection();
            this.loadSectionContent(currentSection);
        }
    }
}

// Initialize content loader
let contentLoader;

document.addEventListener('DOMContentLoaded', () => {
    contentLoader = new ContentLoader();
});

// Export for global use
window.contentLoader = contentLoader;
