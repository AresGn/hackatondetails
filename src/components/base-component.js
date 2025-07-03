// ===== BASE COMPONENT CLASS =====

class BaseComponent {
    constructor() {
        this.currentLanguage = 'fr';
        this.isInitialized = false;
        
        // Listen for language changes
        this.onLanguageChange = this.onLanguageChange.bind(this);
        document.addEventListener('languageChanged', this.onLanguageChange);
        
        // Wait for i18n to be ready
        this.waitForI18n().then(() => {
            this.isInitialized = true;
            this.currentLanguage = window.i18n ? window.i18n.getCurrentLanguage() : 'fr';
            // Trigger a refresh once initialized
            this.onInitialized();
        });
    }

    // Wait for i18n system to be available
    async waitForI18n() {
        return new Promise((resolve) => {
            const checkI18n = () => {
                if (window.i18n && typeof window.t === 'function') {
                    resolve();
                } else {
                    setTimeout(checkI18n, 50);
                }
            };
            checkI18n();
        });
    }

    // Handle language change events
    onLanguageChange(event) {
        const newLanguage = event.detail.language;
        if (newLanguage !== this.currentLanguage) {
            this.currentLanguage = newLanguage;
            this.onLanguageChanged(newLanguage);
        }
    }

    // Override this method in child classes
    onLanguageChanged(language) {
        // Default implementation - refresh content
        this.refreshContent();
    }

    // Called when component is fully initialized
    onInitialized() {
        // Default implementation - refresh content
        this.refreshContent();
    }

    // Get translation using the global i18n system
    t(key, params = {}) {
        if (window.t) {
            return window.t(key, params);
        }
        return key; // Fallback to key if i18n not available
    }

    // Refresh content - override in child classes
    refreshContent() {
        console.log('BaseComponent: refreshContent called - override in child class');
    }

    // Update a container with new content
    updateContainer(containerId, content) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = content;
            
            // Apply translations to any new elements with data-i18n
            if (window.i18n && window.i18n.applyTranslations) {
                window.i18n.applyTranslations();
            }
        }
    }

    // Create a translated element
    createElement(tag, options = {}) {
        const element = document.createElement(tag);
        
        if (options.className) {
            element.className = options.className;
        }
        
        if (options.textKey) {
            element.textContent = this.t(options.textKey, options.params);
        } else if (options.text) {
            element.textContent = options.text;
        }
        
        if (options.attributes) {
            Object.entries(options.attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        }
        
        return element;
    }

    // Create a translated HTML string
    createTranslatedHTML(template, translations = {}) {
        let html = template;
        
        // Replace translation placeholders
        Object.entries(translations).forEach(([key, translationKey]) => {
            const placeholder = `{{${key}}}`;
            const translation = this.t(translationKey);
            html = html.replace(new RegExp(placeholder, 'g'), translation);
        });
        
        return html;
    }

    // Format number according to current locale
    formatNumber(number, options = {}) {
        if (window.i18n && window.i18n.formatNumber) {
            return window.i18n.formatNumber(number, options);
        }
        return number.toString();
    }

    // Format date according to current locale
    formatDate(date, options = {}) {
        if (window.i18n && window.i18n.formatDate) {
            return window.i18n.formatDate(date, options);
        }
        return date.toString();
    }

    // Clean up event listeners
    destroy() {
        document.removeEventListener('languageChanged', this.onLanguageChange);
    }
}

// Export for use by other components
window.BaseComponent = BaseComponent;
